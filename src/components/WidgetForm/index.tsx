import BugSvg from '../../assets/bug.svg'
import IdeaSvg from '../../assets/idea.svg'
import ThoughtSvg from '../../assets/thought.svg'
import { useState } from "react"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from './Steps/FeedbackContentStep'

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
    const [screenshoot, setScreenshot] = useState<string | null>(null)

    const handleRestartFeedback = () => {
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 px-8 py-4 relative rounded-2xl mb-4 flex items-center flex-col shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
                <FeedbackTypeStep setFeedbackType={setFeedbackType} />
            ) : (
                <FeedbackContentStep handleRestartFeed={handleRestartFeedback} type={feedbackType} />
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a href="https://github.com/YaGRRusso" className="underline underline-offset-2">Yago Russo</a>
            </footer>
        </div>
    )
}