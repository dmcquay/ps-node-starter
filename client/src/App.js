import React, { useEffect, useState } from "react"
import Theme from '@pluralsight/ps-design-system-theme'
import CircularProgress from '@pluralsight/ps-design-system-circularprogress'
import "./App.css"

const App = () => {
  const [state, setState] = useState({ course: null })

  useEffect(() => {
    fetch('http://localhost:5000/courses/1')
      .then(res => res.json())
      .then(course => setState({ course: course }))
  }, [])

  return (
    <Theme name={Theme.names.dark}>
      {state.course ? (
        <ul className="course">
          <li><strong>ID:</strong> {state.course.id}</li>
          <li><strong>Title:</strong> {state.course.title}</li>
        </ul>
      ) : (
        <CircularProgress className="loading" size={CircularProgress.sizes.small} />
      )}
    </Theme>
  )
}

export default App
