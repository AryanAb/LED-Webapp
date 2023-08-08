"use client"

import { useState, useEffect, FormEvent } from 'react'
import styles from './page.module.css'
import { HexColorPicker } from 'react-colorful'

export default function Home() {
  const [currentText, setCurrentText] = useState('');
  const [newText, setNewText] = useState('');
  const [color, setColor] = useState('#cf2727');

  useEffect(() => {
    async function getLine() {
      const res = await fetch('/lines');
      const data = await res.json()
      setCurrentText(data.text);
      setColor(data.color);
    }
    getLine();
  }, []);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch('/lines', {
      method: 'POST',
      body: JSON.stringify({ text: newText, color: color }),
    });
    setCurrentText(newText);
  }

  return (
    <main className={styles.main}>
      <h3>Current Text: {currentText}</h3>
      <HexColorPicker color={color} onChange={setColor} />
      <form className={styles.form} onSubmit={submit}>
        <input placeholder="Input New Text" type="text" value={newText} onChange={(e) => { setNewText(e.target.value) }} />
        <input type="submit" value="Submit" />
      </form>
    </main>
  )
}
