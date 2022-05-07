import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
)

describe('submit feedback', () => {
    it('should submit a feedback', async () => {
        await expect(submitFeedback.execute({
            feedbackType: 'BUG',
            comment: 'example sample text',
            screenshot: 'data:image/png;base64'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('shouldnt submit a feedback without type', async () => {
        await expect(submitFeedback.execute({
            feedbackType: '',
            comment: 'example sample text',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    })

    it('shouldnt submit a feedback without comment', async () => {
        await expect(submitFeedback.execute({
            feedbackType: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    })

    it('shouldnt submit a feedback without image', async () => {
        await expect(submitFeedback.execute({
            feedbackType: 'BUG',
            comment: 'example sample text',
            screenshot: 'img.jpg'
        })).rejects.toThrow();
    })
})