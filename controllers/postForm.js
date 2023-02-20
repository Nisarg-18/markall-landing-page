const nodemailer = require("nodemailer");

exports.postForm = async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({
      success: false,
      message: "name, email and phone are mandatory",
    });
  } else {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.FROM_MAIL_ID,
        pass: process.env.PASS,
      },
    });
    const mailOptions = {
      from: process.env.FROM_MAIL_ID,
      to: process.env.TO_MAIL_ID,
      subject: "Contact Us Form Details",
      text: `
        name: ${name},
        email: ${email},
        phone: ${phone},
        message: ${message}`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        res.status(400).json({
          success: false,
          message: "error submitting the form, please try again",
        });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({
          success: true,
          message: "mail sent",
        });
      }
    });
  }
};
