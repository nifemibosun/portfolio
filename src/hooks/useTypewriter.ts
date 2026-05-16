import { useState, useEffect } from 'react'

export function useTypewriter(
  words: string[],
  typeSpeed = 75,
  deleteSpeed = 38,
  pauseDuration = 2200,
) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), pauseDuration)
      return () => clearTimeout(t)
    }

    if (isDeleting && displayed === '') {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => {
        setDisplayed(
          isDeleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1),
        )
      },
      isDeleting ? deleteSpeed : typeSpeed,
    )

    return () => clearTimeout(t)
  }, [displayed, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration])

  return displayed
}
