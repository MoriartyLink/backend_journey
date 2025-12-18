let users = [];

export const createUser = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      error: "Email is required"
    });
  }

  const user = {
    id: users.length + 1,
    email
  };

  users.push(user);

  res.status(201).json(user);
};

export const getUserById = (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.json(user);
};
