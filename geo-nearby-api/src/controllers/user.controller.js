import prisma from "../prisma.js";


let users = [];

export const createUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      error: "Email is required"
    });
  }

  try {
    const user = await prisma.user.create({
      data: { email }
    });

    res.status(201).json(user);
  } catch (err) {
    if (err.code === "P2002") {
      return res.status(409).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: "Internal server error" });
  }



  res.status(201).json(user);
};

export const getUserById = async (req, res) => {
  const id = Number(req.params.id);

  const user = await prisma.user.findUnique({
    where: { id }
  });


  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.json(user);
};
