import { useMemo, useState } from 'react';
import {
  toUpper,
  toLower,
  toTitleCase,
  toSentenceCase,
  normalizeSpaces,
  removePunctuation,
  trimEachLine,
  removeEmptyLines,
  dedupeLines,
  sortLinesAsc,
  sortLinesDesc,
  reverseText,
  slugify,
  toCamelCase,
  toSnakeCase,
  countWords,
  countLines,
  countSentences,
  estimateReadingTimeMinutes,
  wordFrequency,
} from './utils/text';

function Title() {
  return <h1 className="app-title">TextMaster</h1>;
}

export default function App() {
  const [text, setText] = useState('');
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const charCount = text.length;
  const wordCount = useMemo(() => countWords(text), [text]);
  const lineCount = useMemo(() => countLines(text), [text]);
  const sentenceCount = useMemo(() => countSentences(text), [text]);
  const readingMins = useMemo(() => estimateReadingTimeMinutes(text), [text]);
  const topWords = useMemo(() => wordFrequency(text), [text]);

  const toggleCase = () => setText((t) => (t === t.toUpperCase() ? toLower(t) : toUpper(t)));
  const removeSpaces = () => setText((t) => normalizeSpaces(t));
  const copyToClipboard = async () => navigator.clipboard.writeText(text);
  const pasteFromClipboard = async () => setText(await navigator.clipboard.readText());
  const downloadAsFile = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

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
          <button className="btn" onClick={() => setText((t) => toUpper(t))} disabled={!text}>
            UPPERCASE
          </button>
          <button className="btn" onClick={() => setText((t) => toLower(t))} disabled={!text}>
            lowercase
          </button>
          <button className="btn" onClick={() => setText((t) => toTitleCase(t))} disabled={!text}>
            Title Case
          </button>
          <button className="btn" onClick={() => setText((t) => toSentenceCase(t))} disabled={!text}>
            Sentence case
          </button>
          <button className="btn" onClick={removeSpaces} disabled={!text}>
            Normalize Spaces
          </button>
          <button className="btn" onClick={() => setText((t) => removePunctuation(t))} disabled={!text}>
            Remove Punctuation
          </button>
          <button className="btn" onClick={() => setText((t) => trimEachLine(t))} disabled={!text}>
            Trim Lines
          </button>
          <button className="btn" onClick={() => setText((t) => removeEmptyLines(t))} disabled={!text}>
            Remove Empty Lines
          </button>
          <button className="btn" onClick={() => setText((t) => dedupeLines(t))} disabled={!text}>
            Dedupe Lines
          </button>
          <button className="btn" onClick={() => setText((t) => sortLinesAsc(t))} disabled={!text}>
            Sort A→Z
          </button>
          <button className="btn" onClick={() => setText((t) => sortLinesDesc(t))} disabled={!text}>
            Sort Z→A
          </button>
          <button className="btn" onClick={() => setText((t) => reverseText(t))} disabled={!text}>
            Reverse
          </button>
          <button className="btn" onClick={() => setText((t) => slugify(t))} disabled={!text}>
            Slugify
          </button>
          <button className="btn" onClick={() => setText((t) => toCamelCase(t))} disabled={!text}>
            camelCase
          </button>
          <button className="btn" onClick={() => setText((t) => toSnakeCase(t))} disabled={!text}>
            snake_case
          </button>
          <button className="btn" onClick={copyToClipboard} disabled={!text}>
            Copy
          </button>
          <button className="btn" onClick={pasteFromClipboard}>
            Paste
          </button>
          <button className="btn btn--secondary" onClick={() => setText('')} disabled={!text}>
            Clear
          </button>
          <button className="btn btn--secondary" onClick={downloadAsFile} disabled={!text}>
            Download
          </button>
        </div>

        <section className="stats" aria-live="polite">
          <div><strong>{wordCount}</strong> words</div>
          <div><strong>{charCount}</strong> characters</div>
          <div><strong>{lineCount}</strong> lines</div>
          <div><strong>{sentenceCount}</strong> sentences</div>
          <div><strong>{readingMins} min</strong> read</div>
        </section>

        {topWords.length > 0 && (
          <section className="panel">
            <div className="panel-title">Top words</div>
            <div className="freq">
              {topWords.map(({ word, count }) => (
                <span key={word} className="chip">{word} × {count}</span>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="app-footer" />
    </div>
  );
}

