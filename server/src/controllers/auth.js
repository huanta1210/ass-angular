import User from '../models/auth';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const authRegister = async (req, res) => {
  try {
    const exitsUser = await User.findOne({ email: req.body.email });
    if (exitsUser) {
      return res.status(400).json({
        message: 'Email already exists'
      });
    }
    const hashedPassword = await bcryptjs.hash(req.body.password, 10);

    const user = await User.create({ ...req.body, password: hashedPassword });

    if (!user) {
      return res.status(200).json({
        message: 'User not created'
      });
    }
    if (!req.body.role) {
      req.body.role = 'member';
    }
    return res.status(201).json({
      message: 'User registered successfully',
      data: user
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

export const authLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: 'A is not registered'
      });
    }
    const isMatch = await bcryptjs.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: 'Incorrect password'
      });
    }

    const accessToken = jwt.sign({ id: user._id }, 'huanta', {
      expiresIn: '1h'
    });

    return res.status(200).json({
      message: 'User logged in successfully',
      user,
      accessToken
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
