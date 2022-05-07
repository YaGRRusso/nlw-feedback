import BugSvg from '../../assets/bug.svg'
import IdeaSvg from '../../assets/idea.svg'
import ThoughtSvg from '../../assets/thought.svg'
import { useState } from "react"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'

export const feedbackOptions = {
    BUG: {
        title: 'Problema',
        img: BugSvg
    },
    IDEA: {
        title: 'Ideia',
        img: IdeaSvg
    },
    OTHER: {
        title: 'Outro',
        img: ThoughtSvg
    }
}

export type FeedbackType = keyof typeof feedbackOptions

export const WidgetForm = () => {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    const handleRestartFeedback = () => {
        setFeedbackType(null)
        setFeedbackSent(false)
    }

    return (
        <div className="bg-zinc-900 px-8 py-4 relative rounded-2xl mb-4 flex items-center flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSuccessStep handleRestartFeed={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep handleRestartFeed={handleRestartFeedback} type={feedbackType} onFeedbackSent={() => setFeedbackSent(true)} />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a href="https://github.com/YaGRRusso" className="underline underline-offset-2">Yago Russo</a>
            </footer>
        </div>
    )
}