import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ feedbackType, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                feedbackType,
                comment,
                screenshot
            }
        })
    }
}