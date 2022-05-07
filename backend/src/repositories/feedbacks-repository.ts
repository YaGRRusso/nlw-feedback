export interface FeedbackCreateData {
    feedbackType: string,
    comment: string,
    screenshot?: string
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>
}