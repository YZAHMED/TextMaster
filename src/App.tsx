import { useMemo, useState } from 'react';

function Title() {
  return <h1 className="app-title">TextMaster</h1>;
}

export default function App() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const charCount = text.length;
  const wordCount = useMemo(() => (text.trim() ? text.trim().split(/\s+/).length : 0), [text]);

  const toggleCase = () => setText((t) => (t === t.toUpperCase() ? t.toLowerCase() : t.toUpperCase()));
  const removeSpaces = () => setText((t) => t.replace(/\s+/g, ' ').trim());
  const copyToClipboard = async () => navigator.clipboard.writeText(text);

  return (
    <div className={`app app--${mode}`}>
      <header className="app-header">
        <Title />
        <button
          className="btn btn--ghost"
          onClick={() => setMode((m) => (m === 'light' ? 'dark' : 'light'))}
          aria-label="Toggle theme"
        >
          {mode === 'light' ? '🌙' : '☀️'}
        </button>
      </header>

      <main className="container">
        <label htmlFor="editor" className="visually-hidden">
          Text editor
        </label>
        <textarea
          id="editor"
          className="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text here..."
          rows={10}
        />

        <div className="toolbar">
          <button className="btn" onClick={toggleCase} disabled={!text}>
            Toggle Case
          </button>
          <button className="btn" onClick={removeSpaces} disabled={!text}>
            Normalize Spaces
          </button>
          <button className="btn" onClick={copyToClipboard} disabled={!text}>
            Copy
          </button>
          <button className="btn btn--secondary" onClick={() => setText('')} disabled={!text}>
            Clear
          </button>
        </div>

        <section className="stats" aria-live="polite">
          <div>
            <strong>{wordCount}</strong> words
          </div>
          <div>
            <strong>{charCount}</strong> characters
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          Source
        </a>
      </footer>
    </div>
  );
}

