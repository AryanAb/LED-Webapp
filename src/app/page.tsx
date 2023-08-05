"use client"

import { useState, useEffect, FormEvent } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [currentText, setCurrentText] = useState('');
  const [newText, setNewText] = useState('');

  useEffect(() => {
    // get and set current text
  }, []);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // store new text in Redis
    setCurrentText(newText);
  }

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={submit}>
        <h3>Current Text: {currentText}</h3>
        <input placeholder="Input New Text" type="text" value={newText} onChange={(e) => { setNewText(e.target.value) }} />
        <input type="submit" value="Submit" />
      </form>
    </main>
  )
}
