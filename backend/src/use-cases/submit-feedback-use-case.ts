import { MailAdapter } from "../adapters/mail-adapters";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
    feedbackType: string,
    comment: string,
    screenshot: string
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: MailAdapter
    ) { }

    async execute({ feedbackType, comment, screenshot }: SubmitFeedbackUseCaseRequest) {

        if (!feedbackType) {
            throw new Error('Type is required.')
        }

        if (!comment) {
            throw new Error('Comment is required.')
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot.')
        }

        await this.feedbacksRepository.create({
            feedbackType: feedbackType,
            comment: comment,
            screenshot: screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body: [
                `<p>Feedback ${feedbackType}</p>`,
                `<p>Comentário: ${comment}</p>`
            ].join('\n')
        })
    }
}