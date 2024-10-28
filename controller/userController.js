import { v4 as uuidv4 } from "uuid";

import { users } from "../dummyData/usersData.js";

// GET all users
export const getAllUsers = (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "All user details",
      users,
    });
  } catch (err) {
    console.log("Having issue while login", err); // Log error to the console
    res.status(400).json({
      success: false,
      message: "Error while fetching users",
      error: err.message, // Optionally, include error message in the response
    });
  }
};

// GET user by ID
export const getUserById = (req, res) => {
  try {
    const user = users.find((user) => user.id === req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Specific user by id",
      user,
    });
  } catch (err) {
    console.log("Error fetching user by ID", err);
    res.status(500).json({
      success: false,
      message: "Error while fetching user",
      error: err.message, // Optional: include the error message
    });
  }
};

// POST add a new user

export const addUser = (req, res) => {
  try {
    const { firstName, lastName, hobby } = req.body;
    const newUser = { id: uuidv4(), firstName, lastName, hobby }; // Generate unique ID
    users.push(newUser); // Add new user to users array
    res.status(201).json({
      success: true,
      message: "User added Successfully",
      newUser,
    }); // Respond with status 201 (Created) and new user data
  } catch (err) {
    console.log("Error while adding a new user:", err);
    res.status(500).json({
      success: false,
      message: "Error while adding user",
      error: err.message,
    });
  }
};

// PUT update an existing user
export const updateUser = (req, res) => {
  try {
    console.log("Updating user with ID:", req.params.id); // Log the ID being updated
    const user = users.find((user) => user.id === req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    Object.assign(user, req.body);
    res.status(200).json({
      success: true,
      message: "Updated successfully",
      user,
    });
  } catch (err) {
    console.error("Error while updating user:", err);
    res.status(500).json({
      success: false,
      message: "Error while updating user",
      error: err.message,
    });
  }
};

export const deleteUser = (req, res) => {
  try {
    const userId = req.params.id;
    const userIndex = users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    // Remove the user directly from the users array
    users.splice(userIndex, 1);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    console.error("Error while deleting user:", err);
    res.status(500).json({
      success: false,
      message: "Error while deleting user",
      error: err.message,
    });
  }
};
