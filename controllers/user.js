const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) =>
{
    const { name, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist)
    {
        res.status(400).json({
            error: "User Already Exist"
        });
    } else
    {
        const user = await User.create({
            name,
            email,
            password,
            phone,
        });

        res.status(200).json({
            success: true,
            data: user
        });
    }

};

exports.signIn = async (req, res) =>
{
    let foundUser;
    User.findOne({ email: req.body.email })
        .then((user) =>
        {
            foundUser = user;
            if (!user)
            {
                res.json({
                    status: "failed",
                    message: "Incorrect Credentials",
                });
            }
            else if (req.body.password === foundUser.password)
            {
                const token = jwt.sign(
                    {
                        userName: foundUser.userName,
                        email: foundUser.email,
                        id: foundUser._id,
                    },
                    "mominalishan123",
                    { expiresIn: "10d" }
                );
                res.json({
                    status: "success",
                    userID: foundUser._id,
                    token: token,
                });
            } else
            {
                res.json({
                    status: "failed",
                    message: "Incorrect Credentials",
                });
            }
        })
};
