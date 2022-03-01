import { Editor } from '@tinymce/tinymce-react';
import { useState, useEffect } from 'react';
import c1 from './configs/c1.js';
import c2 from './configs/c2.js';
import c3 from './configs/c3.js';
import c4 from './configs/c4.js';
import c5 from './configs/c5.js';
import c6 from './configs/c6.js';
import s1 from './snippets/s1.html';
import s2 from './snippets/s2.html';
import s3 from './snippets/s3.html';
import s4 from './snippets/s4.html';
import s5 from './snippets/s5.html';
import s6 from './snippets/s6.html';

const presets = [
  {
    title: 'Classic Editor',
    config: c1,
    snippet: s1,
  },
  {
    title: 'Inline Editor',
    config: c2,
    snippet: s2,
  },
  {
    title: 'Classic Editor - Quickbars on classic and mobile',
    config: c3,
    snippet: s3,
  },
  {
    title: 'Classic Editor - with toolbar bottom , quick bars and no mobile setup',
    config: c4,
    snippet: s4,
  },
  {
    title: 'Classic Editor - with random content and autoresize on',
    config: c5,
    snippet: s5,
  },
  {
    title: 'Place Holder Demo',
    config: c6,
    snippet: s6
  }
];

const apiKey = 'qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc';
const cloudChannel = '6-dev';

function App() {
  const [initConfigs, setInitConfigs] = useState([]);
  useEffect(() => {
    setInitConfigs(presets.map((preset) => ({ ...preset, init: eval(preset.config) })));
  }, []);
  return (
    <div className="App">
      {
        initConfigs.map((item) => (
        <div key={item.title}>
        <h1>{item.title}</h1>
        <Editor apiKey={apiKey} cloudChannel={cloudChannel} init={item.init} initialValue={item.snippet} />
        <br />
        <br />
        </div>
        ))
      }
    </div>
  );
}

export default App;
