import nodemailer from "nodemailer";

const { EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ihealthnotif@gmail.com",
    pass: EMAIL_PASSWORD,
  },
});

const convertedList = (list: string[]) => {
  let arrayItems = "";
  let n;
  for (n in list) {
    arrayItems += "<li>" + list[n] + "</li>";
  }

  return arrayItems;
};

export const generateEmail = async (tasks: string[]) => {
  const list = convertedList(tasks);
  transporter.sendMail(
    {
      from: "ReminderBot",
      sender: "ReminderBot",
      to: "faithodesola@gmail.com",
      subject: "Tasks for today 🤖",
      priority: "high",
      html: `<div><h3>Hello David</h3><p>Below is your task for today: </p><ul>${list}</ul><br/><p>By ReminderBot 🤖</p></div>`,
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        // do something useful
      }
    }
  );
};
