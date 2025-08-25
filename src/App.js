import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useState, useEffect } from 'react';

import c1 from './c1.js';

import basic from './snippets/basic.html';

// const configWrapRe = /^\s*\(\s*function\s*\(\s*\)\s*\{\s*return\s*([\s\S]*);\s*\}\s*\)\s*\(\s*\)\s*;\s*$/;

/**
 * Escape text to make HTML.
 * @param {string} text text to escape as HTML.
 * @returns the text with special characters escaped.
 */
const escapeHtml = (text) => {
  return text.replaceAll(/&/g, '&amp;').replaceAll(/</g, '&lt;').replaceAll(/>/g, '&gt;').replaceAll(/"/g, '&quot;').replaceAll(/'/g, '&#39;');
}

/**
 * Unwraps a config.
 * @param {string} config a config with a function wrapping it to make it easy to eval.
 * @returns {string} the unwrapped config.
 */
// const unwrapConfig = (config) => {
//   const m = configWrapRe.exec(config);
//   return m !== null ? m[1] : config;
// }

/**
 * Process a snippet and insert the contained variables.
 * @param {string} snippet the HTML snippet with possible comment variables.
 * @param {string} title the title.
 * @param {string} config the config.
 * @returns {string} the snippet with variables inserted.
 */
const replaceSnippetVars = (snippet, title) => {
  return snippet.replaceAll(/<!--\{([a-zA-Z0-9]+)\}-->/g, function (match, name) {
    if (name === 'title') {
      return escapeHtml(title);
    } else if (name === 'init') {
      return ``;
    } else {
      console.warn('Unknown variable', match);
      return match;
    }
  });
};

const params = new URLSearchParams(window.location.search);

const baseUrl = window.location.href.indexOf('?') > 0 ? window.location.href.substring(0, window.location.href.indexOf('?')) : window.location.href;

const cloudChannel = params.get("cloud-channel") ?? '8-dev';

const apiKey = params.get("api-key") ?? 'prsghhxax677rv082a1zj9b7cgjuoaqysf7h8ayxi5ao43ha';

const TinyEd = ({ title, config, snippet, ...other }) => {
  const [init, setInit] = useState(null);
  const [initialValue, setInitialValue] = useState("");
  console.log({config})
  useEffect(() => {
    setInit(config);
    setInitialValue(replaceSnippetVars(snippet, title, config));
  }, [title, config, snippet]);

  return (
    <div>
      <h1>{title}</h1>
      {init && <Editor apiKey={apiKey} cloudChannel={cloudChannel} init={init} initialValue={initialValue} {...other} />}
      <br />
      <br />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Showing cloud channel {cloudChannel}</h1>
      <p>View: <a href={baseUrl + "?cloud-channel=6-dev"}>6-dev</a>, <a href={baseUrl + "?cloud-channel=6-testing"}>6-testing</a>, <a href={baseUrl + "?cloud-channel=6-stable"}>6-stable</a></p>
      <p>View: <a href={baseUrl + "?cloud-channel=7-dev"}>7-dev</a>, <a href={baseUrl + "?cloud-channel=7-testing"}>7-testing</a>, <a href={baseUrl + "?cloud-channel=7-stable"}>7-stable</a></p>
      <p>View: <a href={baseUrl + "?cloud-channel=8-dev"}>8-dev</a>, <a href={baseUrl + "?cloud-channel=8-testing"}>8-testing</a>, <a href={baseUrl + "?cloud-channel=8-stable"}>8-stable</a></p>
      <p><label><input type="checkbox" id="streaming" /> Stream response</label></p>
      <TinyEd config={ c1.generateConfig({ selector: '', excludePlugins: ['tinydrive', 'uploadcare'] }) } snippet={basic} title='Classic Editor' />

      <br/>
      <TinyEd config={c1.generateConfig({ excludePlugins: ['tinydrive', 'editimage', 'image' ], overrides: { inline: true } })} snippet={basic} title='Inline Editor' />
    </div>
  );
}

export default App;
