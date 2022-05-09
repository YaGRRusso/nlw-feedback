import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "60d8f410c0ec77",
        pass: "d67d1044f5d49d"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Boladona <brabodemais@topzera.com>',
            to: 'Yago Russo <yagrrusso@gmail.com>',
            subject: subject,
            html: body
        })
    }
}