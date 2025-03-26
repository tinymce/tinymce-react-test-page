/* eslint no-unused-vars: 0 */
(function() {
  const advtemplate_templates = [
    {
      id: '1',
      title: 'Quick replies',
      items: [
        {
          id: '2',
          title: 'Message received',
          content: '<p dir="ltr">Hey {{Customer.FirstName}}!</p>\n<p dir="ltr">Just a quick note to say we&rsquo;ve received your message, and will get back to you within 48 hours.</p>\n<p dir="ltr">For reference, your ticket number is: {{Ticket.Number}}</p>\n<p dir="ltr">Should you have any questions in the meantime, just reply to this email and it will be attached to this ticket.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Regards,</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
        },
        {
          id: '3',
          title: 'Thanks for the feedback',
          content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">We appreciate you taking the time to provide feedback on {{Product.Name}}.</p>\n<p dir="ltr">It sounds like it wasn&rsquo;t able to fully meet your expectations, for which we apologize. Rest assured our team looks at each piece of feedback and uses it to decide what to focus on next with {{Product.Name}}.</p>\n<p dir="ltr"><strong>&nbsp;</strong></p>\n<p dir="ltr">All the best, and let us know if there&rsquo;s anything else we can do to help.</p>\n<p dir="ltr">-{{Agent.FirstName}}</p>'
        },
        {
          id: '6',
          title: 'Still working on case',
          content: '<p dir="ltr"><img src="https://lh4.googleusercontent.com/-H7w_COxrsy2fVpjO6RRnoBsujhaLyg6AXux5zidqmQ_ik1mrE6BtnaTUdWYQuVbtKpviRqQiuPBOHNGUsEXvrRliEHc4-hKDrCLgQQ9Co-MI4uY2ehUvYtU1nn3EeS0WiUzST-7MQB2Z5YFXrMDwRk" width="320" height="240"></p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">Just a quick note to let you know we&rsquo;re still working on your case. It&rsquo;s taking a bit longer than we hoped, but we&rsquo;re aiming to get you an answer in the next 48 hours.</p>\n<p dir="ltr">Stay tuned,</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
        }
      ]
    },
    {
      id: '4',
      title: 'Closing tickets',
      items: [
        {
          id: '7',
          title: 'Closing ticket',
          content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">We haven&rsquo;t heard back from you in over a week, so we have gone ahead and closed your ticket number {{Ticket.Number}}.</p>\n<p dir="ltr">If you&rsquo;re still running into issues, not to worry, just reply to this email and we will re-open your ticket.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">All the best,</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
        },
        {
          id: '8',
          title: 'Post-call survey',
          content: '<p dir="ltr">Hey {{Customer.FirstName}}!</p>\n<p dir="ltr">&nbsp;</p>\n<p dir="ltr">How did we do?</p>\n<p dir="ltr">If you have a few moments, we&rsquo;d love you to fill out our post-support survey: {{Survey.Link}}</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks in advance!<br>{{Company.Name}} Customer Support</p>'
        }
      ]
    },
    {
      id: '5',
      title: 'Product support',
      items: [
        {
          id: '9',
          title: 'How to find model number',
          content: '<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">My name is {{Agent.FirstName}} and I will be glad to assist you today.</p>\n<p dir="ltr">To troubleshoot your issue, we first need your model number, which can be found on the underside of your product beneath the safety warning label.&nbsp;</p>\n<p dir="ltr">It should look something like the following: XX.XXXXX.X</p>\n<p dir="ltr">Once you send it over, I will advise on next steps.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks!</p>\n<p dir="ltr">{{Agent.FirstName}}</p>'
        },
        {
          id: '10',
          title: 'Support escalation',
          content: '<p dir="ltr"><img src="https://lh3.googleusercontent.com/z4hleIymnERrS9OQQMBwmkqVne8kYZA0Kly9Ny64pp4fi47CWWUy30Q0-UkjGf-K-50zrfR-wltHUTbExzZ7VUSUAUG60Fll5f2E0UZcKjKoa-ZVlIcuOoe-RRckFWqiihUOfVds7pXtM8Y59uy2hpw" width="295" height="295"></p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Hi {{Customer.FirstName}},</p>\n<p dir="ltr">We have escalated your ticket {{Ticket.Number}} to second-level support.</p>\n<p dir="ltr">You should hear back from the new agent on your case, {{NewAgent.FirstName}}, shortly.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks,</p>\n<p dir="ltr">{{Company.Name}} Customer Support</p>'
        }
      ]
    },
    {
        id: '6',
        title: 'Email Signatures',
        items: [
          {
            id: '11',
            title: 'Tiny Signature',
            content: '<p>Regards<br /><br /><br /><a title="Tiny Technologies Inc" href="https://www.tiny.cloud/" target="_blank"><img src="https://www.tiny.cloud/email-static/tiny-logo.png" alt="Tiny Technologies Inc" width="130" height="42" /></a></p><p>Shiridi Gandham<br />QA Template Manager</p><p>Email:&nbsp;<a title="Email Shiridi" href="mailto:shiridi.gandham@tiny.cloud" target="_blank">shiridi.gandham@tiny.cloud</a><br />Phone:&nbsp;(+617) 3161 3557</p><p>Tiny Technologies<br /><a title="Tiny Technologies" href="https://www.tiny.cloud/" target="_blank">www.tiny.cloud</a></p><p><a title="Linkedin" href="https://www.linkedin.com/company/jointiny/" target="_blank" aria-invalid="true"><img src="https://www.tiny.cloud/email-static/social-linkedin.png" alt="Linkedin" width="20" height="20" /></a>&nbsp;<a title="Facebook" href="https://www.facebook.com/jointiny" target="_blank"><img src="https://www.tiny.cloud/email-static/social-facebook.png" alt="Facebook" width="20" height="20" /></a>&nbsp;<a title="Twitter" href="https://twitter.com/joinTiny" target="_blank"><img src="https://www.tiny.cloud/email-static/social-twitter.png" alt="Twitter" width="20" height="20" /></a>&nbsp;<a title="GitHub" href="https://github.com/tinymce/" target="_blank"><img src="https://www.tiny.cloud/email-static/social-github.png" alt="GitHub" width="20" height="20" /></a>&nbsp;<a title="Stack Overflow" href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank"><img src="https://www.tiny.cloud/email-static/social-stackoverflow.png" alt="Stack Overflow" width="20" height="20" /></a></p>'
          }
        ]
      }
  ];
  // Revision History - Random html content and revisions
  function generateRandomHTMLContent() {
    const headings = ['Welcome', 'Introduction', 'Getting Started', 'FAQ'];
    const paragraphs = [
      'This is a sample paragraph.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Explore the possibilities with our amazing product.',
      'Have questions? Check out our FAQ section for answers.',
    ];
  
    const randomHeading = headings[Math.floor(Math.random() * headings.length)];
    const randomParagraphs = Array.from({ length: 3 }, () =>
      paragraphs[Math.floor(Math.random() * paragraphs.length)]
    );
  
    return `
      <h2>${randomHeading}</h2>
      <p>${randomParagraphs.join('</p><p>')}</p>
    `;
  }
  
  const testRevisions = Array.from({ length: 25 }, (_, i) => {
    const createdAt = new Date(Date.now() - i * 1000 * 60 * 60).toISOString(); // Unique timestamps
    return {
      revisionId: (i + 1).toString(),
      createdAt,
      content: generateRandomHTMLContent(),
    };
  });

  const ai_request = (request, respondWith) => {
    respondWith.stream((signal, streamMessage) => {
    const apiUrl = 'https://openai-dev-proxy.tiny.work/v1/chat/completions';

    const prompt = request.prompt;

    const requestBody = JSON.stringify({
      model: 'gpt-3.5-turbo-16k',
      temperature: 0.7,
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt } ],
    stream: true
    });

    const chatGptOptions = {
      signal,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody
    };
    
    // It is imported in App.js
    // eslint-disable-next-line no-undef
    return fetchEventSource(
        apiUrl,
        {
          ...chatGptOptions,
          openWhenHidden: true,
          onmessage: (ev) => {
            const data = ev.data;
            if (data !== '[DONE]') {
              const parsedData = JSON.parse(data);
              const firstChoice = parsedData?.choices[0];
              const message = firstChoice?.delta?.content;
              if (message) {
                streamMessage(message);
              }
            }
          },
          onerror: (error) => {
            // Stop operation and do not retry by the fetch-event-source
            throw error;
          }
        }
    );
  })
};
  
  /* example dialog that inserts the name of a Pet into the editor content */
  const fakeMentionsServer = function (term, success) {
      /* 
        Fake mentions server, implementations will vary however data passed to success must be an object with these properties
    
        success({
          id: string,
          name: string,
          fullName: string,
          image: string_url
        })
    
      */
      const userNames = ['Terry Green', 'Terry Green 111', 'Terry Green 222', 'Terry Green 333', 'Edward Carroll', 'Virginia Turner', 'Alexander Schneider'];

      const images = [
          'camilarocun', 'brianmichel', 'absolutehype', '4l3d'];

      const users = userNames.map(function (fullName) {
          const name = fullName.toLowerCase().replace(/ /g, '');

          const image = 'https://s3.amazonaws.com/uifaces/faces/twitter/' + images[Math.round(images.length * Math.random())] + '/128.jpg';
          return {
              id: name,
              name: name,
              fullName: fullName,
              image: image
          };
      });

      const findUser = function (term, success) {
          /* demo string search */
          const matches = users.filter(function (user) {
              return user.name.indexOf(term.toLowerCase()) !== -1;
          });

          /* fake async server delay */
          const timeout = 30;

          window.setTimeout(function () {
              success(matches);
          }, timeout);
      };

      return findUser(term, success);
  };

  const mentions_menu_complete = function (editor, userinfo) {
      const x = document.createElement('div');

      x.innerHTML = '<span style="color: green" class="mentionsmentionsmentions">@' + userinfo.name + '</span>';

      return x.childNodes[0];
  };

  const mentions_fetch = function (query, success) {
      fakeMentionsServer(query.term, success);
  };
  const image_upload_handler = (blobInfo, success, failure, progress) => {
      let xhr, formData;

      xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'http://10.150.71.80/upload_handler.php');

      xhr.upload.onprogress = function (e) {
          progress(e.loaded / e.total * 100);
      };

      xhr.onload = function () {
          let json;

          if (xhr.status < 200 || xhr.status >= 300) {
              failure('HTTP Error: ' + xhr.status);
              return;
          }

          json = JSON.parse(xhr.responseText);

          if (!json || typeof json.location != 'string') {
              failure('Invalid JSON: ' + xhr.responseText);
              return;
          }

          success(json.location);
      };

      xhr.onerror = function () {
          failure('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };

      formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());

      xhr.send(formData);
  };
  const specialChars = [
      { text: 'exclamation mark', value: '!' },
      { text: 'at', value: '@' },
      { text: 'hash', value: '#' },
      { text: 'dollars', value: '$' },
      { text: 'percent sign', value: '%' },
      { text: 'caret', value: '^' },
      { text: 'ampersand', value: '&' },
      { text: 'asterisk', value: '*' }
  ];
  // Tiny Comments setup
//   const canResolve = true; // Change this to false in order to prevent conversations from being resolved.

  const basicPlugins = 'ai accordion advtable autoresize anchor advlist autolink autosave advcode charmap codesample directionality emoticons fullscreen help insertdatetime importcss link lists media nonbreaking pagebreak preview save searchreplace table visualblocks visualchars wordcount autocorrect casechange checklist powerpaste a11ychecker tinymcespellchecker tableofcontents mentions mediaembed mergetags permanentpen formatpainter footnotes pageembed linkchecker tinycomments typography inlinecss advtemplate exportpdf exportword importword revisionhistory markdown math uploadcare';
  const basicToolbar = "bold italic underline strikethrough subscript superscript | math uploadcare | exportpdf exportword importword | aidialog aishortcuts | accordion addtemplate inserttemplate| fontfamily fontsize fontsizeinput | numlist bullist checklist mergetags footnotes footnotesupdate| typography permanentpen formatpainter removeformat forecolor backcolor | blockquote nonbreaking hr pagebreak | casechange styles blocks lineheight | ltr rtl outdent indent | align alignleft aligncenter alignright alignjustify alignnone | h1 h2 h3 h4 h5 h6 h7 |" +
  "copy cut paste pastetext selectall remove newdocument wordcount searchreplace | undo redo | revisionhistory save cancel restoredraft | fullscreen print preview code help | insertdatetime codesample emoticons charmap | anchor link unlink image media pageembed insertfile | visualblocks visualchars a11ycheck | spellchecker language spellcheckdialog | tableofcontents tableofcontentsupdate |" +
  "table advtablerownumbering tableclass tablecellclass tablecellvalign tablecellborderwidth tablecellborderstyle tablecaption tablecellbackgroundcolor tablecellbordercolor tablerowheader tablecolheader | api1 api2 api3 api4 api5 | customInsertButton customDateButton custom-paste";
  
  

  return {
	  plugins: basicPlugins,
	  toolbar: basicToolbar,

    // uploadcare
    // Docs Converters - service URLS - not for production use and public demos
    exportpdf_service_url: "https://exportpdf.converter.tiny.cloud",
    exportword_service_url: "https://exportdocx.converter.tiny.cloud",
    importword_service_url: "https://importdocx.converter.tiny.cloud",
      // exportPDF
    exportpdf_converter_options: {
    // HTML content to be used as the header in each page of the PDF
    header_html: '<div style="text-align:center;">Document Title</div><div>Date: <span class="date"></span></div><div>Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',

    // HTML content to be used as the footer in each page of the PDF
    footer_html: '<div style="text-align:right;">Confidential</div>',

    // CSS styles specifically for the header and footer
    header_and_footer_css: 'div { color: blue; font-family: Arial, sans-serif; font-size: 10pt; }',

    margin_top: '2cm',
    margin_bottom: '2cm',
    margin_left: '20mm',
    margin_right: '20mm',

    // 'Letter', 'Legal', 'Tabloid', 'Ledger', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6'
    format: 'A4',

    // 'portrait' or 'landscape'
    page_orientation: 'portrait',

// 	  // Whether to wait for all network activity to finish before exporting
// 	  wait_for_network: false,

// 	  // Additional wait time in milliseconds before exporting the PDF
// 	  wait_time: 3000,
  },
  
    // Custom CSS styles to be applied to the content in the exported PDF
    exportpdf_converter_style: 'body { color: black !important; font-family: Helvetica, Arial, sans-serif; } p { color: cyan !important; }',
    
    
    //exportWord
    exportword_converter_options: {
      // 'Letter', 'Legal', 'Tabloid', 'Statement', 'Executive', 'A3', 'A4', 'A5', 'A6', 'B4', 'B5'
      format: 'A4',

      margin_top: '1in',
      margin_bottom: '1in',
      margin_right: '1in',
      margin_left: '1in',
      header: [
        {
          html: '<h1>First page header.</h1>', 
          css: 'h1 { font-size: 30px; }',
          
          //'default', 'even', 'odd', 'first'
          type: 'first'
        }
      ],

      footer: [
        {
          html: '<p>Page footer</p>',
          css: 'p { font-size: 12px; }',
          
          // 'default', 'even', 'odd', 'first'
          type: 'default'
        }
      ],

      // 'portrait' or 'landscape'
      orientation: 'portrait',
      auto_pagination: true,

      base_url: 'https://example.com',
      timezone: 'UTC'
    },
    exportword_converter_style: 'p { color: cyan !important }',
    
    //importWord
    
  importword_converter_options: {
    formatting: {
      styles: 'inline',
      resets: 'inline',
      defaults: 'inline',
    }
  },

  //Revision History
  revisionhistory_fetch: () => Promise.resolve(testRevisions),
  // Uncomment this option to show avatar
  revisionhistory_display_author: true,
  revisionhistory_author: {
    id: 'usa',
    name: 'Trump',
    avatar: 'https://cdn.pixabay.com/photo/2017/01/24/13/02/donald-trump-2005343_640.png'
  },
  //fontsizeinput
  font_size_input_default_unit: "em",
  //advcode
  advcode_inline: true,
  // AI Plugin
  ai_request,
  //advtemplate
  advtemplate_templates,
  // SPAP - setting to true will make Upgrade button to appear, by default it is false
  promotion: true,
  // Contextmenu
  contextmenu: 'inserttemplate addtemplate permanentpen lists link image editimage table spellchecker preview export',
  contextmenu_never_use_native: false,
  // autocorrect & capitalize
  autocorrect_autocorrect: true,
  autocorrect_capitalize: true,
  // mergetags
  mergetags_prefix: '${', // default value '{{'
  mergetags_suffix: '}', // default value '}}',
  mergetags_list: [{
      value: 'Current.Date',
      title: 'Current date in DD/MM/YYYY format'
  },
  {
      value: 'Campaign.Toc',
      title: 'Linked table of contents in your campaign'
  },
  {
      title: "Phone",
      menu: [{
          value: "Phone.Home"
      },
      {
          value: "Phone.Work"
      }
      ]
  },
  {
      title: 'Person',
      menu: [{
          value: 'Person.Name',
      },
      {
          value: 'Person.Name.First',
      },
      {
          value: 'Person.Name.Last'
      },
      {
          value: 'Person.Name.Full'
      },
      {
          title: 'Email',
          menu: [{
              value: 'Person.Email.Work'
          },
          {
              value: 'Person.Email.Home'
          },
          ]
      }
      ]
  }],

  // The toolbar_mode option will no-longer accept the false value in TinyMCE 6.0, which was retained for backwards compatibility with the toolbar_drawer option. Use 'wrap' instead to keep the same functionality as false.
  // toolbar_mode : Default Value: 'floating' / Possible Values: 'floating', 'sliding', 'scrolling', or 'wrap'
  toolbar_mode: 'sliding',
  toolbar_sticky: true,
  toolbar_location: 'top', //top, bottom
  toolbar_sticky_offset: 25,

  //Skins & Icons packs
  // selector: '.one',
  // content_css: 'material-classic',
  // skin: 'material-classic',
  // icons: 'material',
  content_css_cors: true,
  // menubar
  // menubar: 'file edit insert view format table tools help',
  menubar: 'file edit insert view format table tools mymenu tc custom help Atlassian',
  menu: {
      file: { title: 'File', items: 'newdocument restoredraft  | importword exportpdf exportword  | print deleteallconversations' },
      edit: { title: 'Edit', items: 'undo redo cut copy paste pastetext selectall searchreplace' },
      insert: { title: 'Insert', items: 'insertfile accordion anchor charmap math codesample hr image insertdatetime | addtemplate inserttemplate | link unlink openlink | footnotes footnotesupdate |media nonbreaking pagebreak tableofcontents checklist template mergetags' },
      view: { title: 'View', items: ' code revisionhistory preview visualchars visualblocks  fullscreen' },
      format: { title: 'Format', items: 'formatpainter configurepermanentpen casechange language visualaid align bold italic underline strikethrough subscript superscript removeformat newdocument cut copy paste selectall codeformat fontformats fontsizes lineheight' },
      tools: { title: 'Tools', items: 'aidialog aishortcuts typography a11ycheck spellchecker code wordcount autocorrect capitalization' },
      mymenu: { title: 'MyMenu', items: 'menu-item-1 | link unlink | visualaid | fontfamily fontsize' },
      tc: { title: 'TinyComments', items: 'addcomment showcomments deleteallconversations' },
      custom: { title: 'Custom', items: 'undo redo custommenuitem' },
      help: { title: 'Help', items: 'help' },
      Atlassian: { title: 'TableAPI', items: 'api1 api2 api3 api4 api5 api6 api17 api7 api8 api9 api10 api11 api12 api18 api19 api14 api15 api16 api20 api21 api22' },
  },
  // // quickbars
  // quickbars_insert_toolbar: 'quicktable quickimage quicklink styleselect ',
  // quickbars_selection_toolbar: 'bold italic | h2 h3 | blockquote | code| forecolor backcolor| quicktable quickimage | lineheight formatpainter pageembed permanentpen styleselect ',



  // emoticons
  emoticons_append: {
      custom_mind_explode: {
          keywords: ["brain", "mind", "explode", "blown", "tiny"],
          char: "🤯"
      },
  },
  emoticons_database: 'emojiimages',
  // Default: ${pluginUrl}/js/emojis.js
  // emoticons_database_url: '/emojis.js',



  //pageembed
  tiny_pageembed_inline_styles: true,
  // tiny_pageembed_classes: [
  //     { text: 'Big embed', value: 'my-big-class' },
  //     { text: 'Small embed', value: 'my-small-class' }
  // ],
  //content_css
  // content_css: '/work/QA/v5/chklist.css',
  // CheckList

  //CaseChange
  casechange_title_case_minors: [
      'at', 'by', 'in', 'of', 'on', 'up', 'to', 'en', 're', 'vs',
      'but', 'off', 'out', 'via', 'bar', 'mid', 'per', 'pro', 'qua', 'til',
      'from', 'into', 'unto', 'with', 'amid', 'anit', 'atop', 'down', 'less', 'like', 'near', 'over', 'past', 'plus', 'sans', 'save', 'than', 'thru', 'till', 'upon',
      'for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'is', 'tiny', 'the'
  ],

    // Tiny Comments
    tinycomments_mode: 'embedded',
    tinycomments_author: 'qauser8@qa.com',
    tinycomments_author_name: 'SuperCoolQA',
    tinycomments_author_avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png",
    // tinycomments_author_avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png",
    // tinycomments_can_resolve,
    // content_style: '.mce-show-annotations .mce-annotation { background: #df1313; } .mce-show-annotations .tc-active-annotation {background: #df1313; color: red; }',
    content_style: ' .tox-comments-visible span.tox-comment { background: #f9f65c; } .tox-comments-visible span.tox-comment--active { background: #17f9e2; color: red;}',

    // Accessibility Checker
    // sets whether the checker should allow decorative images (images with alt="" or role="presentation").
    a11ychecker_allow_decorative_images: true,
    // When this is set to true then it adds  Image is decorative option to image and ally check dialog
    a11y_advanced_options: true,
    // For eg: setting to html5 won;t complain if table has no summary specified
    a11ychecker_html_version: 'html5',
    // Possible Values: a, aa, aaa, default is 'a'
    // For example, the “Text must have a contrast ratio of at least …” rule when using AA will trigger 
    // when the contrast ratio is less than 4.5:1, however when using AAA the rule will trigger 
    // when the ratio is less than 7.0:1.
    a11ychecker_level: 'aaa',


    // Advanced List
    // allows you to include specific unordered list item markers in the default bullist toolbar control.
    advlist_number_styles: "default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman",

    // allows you to include specific ordered list item markers in the default numlist toolbar control.
    advlist_bullet_styles: "default,circle,disc,square",
    // lists_indent_on_tab
    lists_indent_on_tab: true,

    //Autoresize
    // allows you to specify the size of the padding at the bottom of the editorâ€™s body set on initialization.
    autoresize_bottom_margin: 50,

    // allows you to specify the size of the padding at the sides of the editorâ€™s body set on initialization.
    autoresize_overflow_padding: 50,


    //Autosave
    // set whether the editor should prompt the user to advise them that they have unsaved changes when attempting to close the current window
    autosave_ask_before_unload: true,

    // specify the time the editor should wait between taking snapshots of the current content and saving them to local storage
    autosave_interval: "30s",

    // set the prefix that is used for local storage keys
    autosave_prefix: "QA-{path}{query}-{id}-",

    // specify if TinyMCE should automatically restore the content stored in local storage when the editor is empty on initialization
    autosave_restore_when_empty: false,

    // specify the duration editor content should remain in local storage.
    autosave_retention: "2m",

    //BBCode
    //specify the BBCode dialect

    //bbcode_dialect: "punbb",

    //Character Map
    // to replace char map with custom charmap

    //charmap: [
    // [0x2615, 'morning coffee']
    // ],

    // to append more chars to existing // you should see this on charmap dialogue under user_defined section
    charmap_append: [
        ['0x2600', 'sun'],
        ['0x2601', 'cloud'],
        ['0x24', 'dollar'],
    ],

    // Code Sample
    // This configuration option allows a global Prism.js version to be used when highlighting code sample blocks
    // , instead of using the Prism.js version bundled inside the codesample plugin. Default is false.
    codesample_global_prismjs: false,
    // set a list of languages to be displayed in the languages drop down
    codesample_languages: [
        { text: 'HTML/XML', value: 'markup' },
        { text: 'JavaScript', value: 'javascript' },
        { text: 'CSS', value: 'css' },
        { text: 'PHP', value: 'php' },
        { text: 'Ruby', value: 'ruby' },
        { text: 'Python', value: 'python' },
        { text: 'Java', value: 'java' },
        { text: 'C', value: 'c' },
        { text: 'C#####', value: 'csharpppppp' },
        { text: 'C++', value: 'cpp' }
    ],

    // Enhanced Media Embed
    // For self-hosted installation. This setting specifies the URL to the service that will handle your requests and return the embeddable snippets used by the Media Embed plugin

    // mediaembed_service_url: "SERVICE_URL",
    // Formats

    // specifies a maximum width in pixels of the embedded content. Defaults to 650.
    mediaembed_max_width: 800, // https://ephocks.atlassian.net/browse/DOC-196

    // Image
    image_advtab: true,
    image_description: true,
    image_dimensions: true,
    image_caption: true,
    // image_prepend_url: "QA/", // this can be verified on console by manually giving the name of image in source in image dialog 
    image_list: [
        { title: 'Teddy', value: 'http://i68.tinypic.com/mrpq1w.jpg' },
        { title: 'Keyboard', value: 'http://i64.tinypic.com/mrpt1i.jpg' }
    ],
    image_class_list: [
        { title: 'None', value: '' },
        { title: 'Dog', value: 'dog' },
        { title: 'Cat', value: 'cat' }
    ],

    // Image Tools
    // specify exact selection of buttons that will appear on the contextual toolbar
    //imagetools_toolbar: "rotateleft rotateright flipv fliph editimage imageoptions",
    // rotateleft rotateright | flipv fliph | editimage imageoptions
    // imagetools_toolbar: ['rotateleft', 'rotateright', 'flipv', 'fliph', 'editimage', 'imageoptions'],
    // editiamge ( renamed version of imagetools)
    editimage_toolbar: "rotateleft rotateright flipv fliph editimage imageoptions",
    // cdn should have below seeting bhy defsault. Remove below setting from config once tested.
    editimage_proxy_service_url: 'https://imageproxy.tiny.cloud',


    // Import CSS
    // appends the imported styles to the end of the Format menu and replaces default formats
    importcss_append: true,

    // add the CSS files that should be used for populating the styles drop down
    importcss_file_filter: "my-styles.css",

    // only import classes from selectors matching the filter
    importcss_selector_filter: ".my-prefix-",

    // group matching selectors into submenus in the Formats menu dropdown
    importcss_groups: [
        { title: 'Table styles', filter: /^(td|tr)\./ }, // td.class and tr.class
        { title: 'Block styles', filter: /^(div|p)\./ }, // div.class and p.class
        { title: 'Other styles' } // The rest
    ],

    // used in cases where the class attribute should be replaced or merged - false will always replace the contents of the class attribute 
    importcss_merge_classes: false,

    // override the default selector to format converter function
    // importcss_selector_converter: function (selector) {
        // Custom logic
    // },

    // If set to false then selectors will not be globally exclusive meaning they can exist in two separate groups. 
    import_exclusive: true,

    // Insert Date/Time
    // override the default formatting rule for date formats inserted by the mceInsertDate command
    insertdatetime_dateformat: "%Y/%m/%d",

    // override the default formatting rule for times inserted by the mceInsertTime command
    insertdatetime_timeformat: "%H%M%S",

    // specify a list of date/time formats to be used in the date menu or date select box
    insertdatetime_formats: ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D", "%H%M%S", "%Y/%m/%d"],

    // When this option is enabled HTML5 time elements gets generated when you insert dates/times
    insertdatetime_element: true,

    // Link
    // set a default target for links when inserting/editing a link
    default_link_target: "",
    // Enable or disable context toolbar on every link
    link_context_toolbar: true,
    // Enable quicklink
    // link_quicklink: true,
    // set whether TinyMCE should prompt the user to prepend a http:// prefix if the supplied link does not already contain a protocol prefix.
    link_assume_external_targets: false,


    // adds a predefined class dropdown to the link dialog box
    link_class_list: [
        { title: 'None', value: '' },
        { title: 'Dog', value: 'dog' },
        { title: 'Cat', value: 'cat' }
    ],
    // specify a predefined list of links for the link dialog
    link_list: [
        { title: 'My page 1', value: 'https://www.tiny.cloud' },
        { title: 'My page 2', value: 'https://about.tiny.cloud' }
    ],
    link_title: true,

  // Link Checker
  // For self-hosted environment
  // linkchecker_service_url: "http://mydomain.com/linkchecker",
  // Listslists_indent_on_tab: true
  // Media//users will see a live preview of embedded video content within the editable area
  // media_live_embeds: true,
  // disable the Alternative source input field in the media dialog
  media_alt_source: true,
  // disable the Poster input field in the media dialog
  // media_poster: false,
  // disable the Dimensions input fields in the media dialog
  // media_dimensions: false,
  // disable the XSS sanitation filter for video/object elements
  // media_filter_html: false,

  // specify the function that will return the HTML embed code of the audio media that you are attempting to insert into TinyMCE.

  media_live_embeds: true,
  media_dimensions: true,
  media_poster: false, // when set to true you should see a textbox in advanced tab // https://ephocks.atlassian.net/browse/TINY-2834 ( when set to false  media functionality is broken)

  // specify the function that will return the HTML embed code of the video media that you are attempting to insert into TinyMCE
  video_template_callback: function (data) {
      return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' + '<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + (data.source2 ? '<source src="' + data.source2 + '"' + (data.source2mime ? ' type="' + data.source2mime + '"' : '') + ' />\n' : '') + '</video>';
  },

  audio_template_callback: function (data) {
      return '<audio controls>' + '\n<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + '</audio>';
  },
  // specify a function that will be used to replace TinyMCEâ€™s default media embed logic with your own, custom logic

  media_url_resolver: (data) => {
    return new Promise((resolve) => {
      if (data.url.indexOf('YOUR_SPECIAL_VIDEO_URL') !== -1) {
        const embedHtml = `<iframe src="${data.url}" width="400" height="400"></iframe>`;
        resolve({ html: embedHtml });
      } else {
        resolve({ html: '' });
      }
    });
  },
    // mentions setup in init config

    mentions_selector: '.mentionsmentionsmentions',
    mentions_fetch: mentions_fetch,
    mentions_menu_complete: mentions_menu_complete,

    // Nonbreaking
    // force TinyMCE to insert three &nbsp; entities when the user presses the keyboard tab key.
    nonbreaking_force_tab: false, // set to true and when pressed tab will add 3 spaces and if set to false when press tab focus will go not next editable area

    // Noneditable
    // specify the class name that TinyMCE will use to determine which areas of content are editable and not editable
    editable_class: "edit",
    noneditable_class: "noEdit",
    noneditable_regexp: /<custom-token>/g,

    // Page Break
    pagebreak_separator: "<!-- QA -->",
    // When enabled this option makes it easier to split block elements with a page break.
    pagebreak_split_block: true,
    // Paste
    paste_as_text: false,
    paste_data_images: false,
    // paste_preprocess: function (plugin, args) {
    //     alert(args.content);
    //     alert('Mode: ' + args.mode + ', Source: ' + args.source);
    //     args.content += ' preprocess';

    // },
    // paste_postprocess: function (plugin, args) {
    //     alert(args.node);
    // POW-158
    //     alert('Mode: ' + args.mode + ', Source: ' + args.source);
    //     //  args.node.setAttribute('id', '42');
    // },
    // paste_word_valid_elements: "b,strong,i,em,h1,h2", //To access this feature, you need to set the value of paste_enable_default_filters to "false" in your configuration.
    // paste_webkit_styles: "color font-size",
    // paste_retain_style_properties: "color font-size",
    paste_merge_formats: true,
    // Save
    // disable the save button until modifications have been made to the content of the editor.
    save_enablewhendirty: true,
    save_onsavecallback: function () { alert("Saved"); },
    save_oncancelcallback: function () { alert("Save Cancelled"); },

    // Spell Checker
    // override the default server side request/communication logic for the spellchecker.

    // set the default language code for the spellchecker. This defaults to â€œenâ€.
    spellchecker_language: 'en',

    // specify a list of languages for the user to select from. 

    // spellchecker_languages: 'US English=en_us,UK English=en_gb,Danish=da,Dutch=nl,Finnish=fi,French=fr,German=de,Italian=it,Norwegian=nb,Brazil Portuguese=pt,Europe Portuguese=pt_pt,Spanish=es,Swedish=sv',
    spellchecker_languages: ['en', 'en_us', 'en_us-medical', 'en_uk', 'en_gb', 'en_br', 'en_gb-medical', 'en-AU', 'en-CA', 'da', 'nl', 'fi', 'fr', 'de', 'it', 'nb', 'pt', 'pt_PT', 'es', 'sv', 'af-ZA', 'sv-FI', 'mi-NZ', 'nn', 'hu', 'pl'],
    content_langs: [
        { title: 'English', code: 'en' },
        { title: 'English (US)', code: 'en_US' },
        { title: 'English (US Medical)', code: 'en_US', customCode: 'en_US-medical' },
        { title: 'English (UK)', code: 'en_UK' },
        { title: 'English (GB)', code: 'en_GB' },
        { title: 'English (BR)', code: 'en_BR' },
        { title: 'English (UK Medical)', code: 'en_UK', customCode: 'en_UK-medical' },
        { title: 'English (AU)', code: 'en_AU' },
        { title: 'English (CA)', code: 'en_CA' },
        { title: 'Danish', code: 'da' },
        { title: 'Dutch', code: 'nl' },
        { title: 'Finnish', code: 'fi' },
        { title: 'French', code: 'fr' },
        { title: 'German', code: 'de' },
        { title: 'Italian', code: 'it' },
        { title: 'Norwegian', code: 'nb' },
        { title: 'Portuguese (Brazil)', code: 'pt' },
        { title: 'Portuguese (Europe)', code: 'pt_PT' },
        { title: 'Spanish', code: 'es' },
        { title: 'Swedish', code: 'sv' },
        { title: 'Afrikaans', code: 'af-ZA' },
        { title: 'Maori (New Zealand)', code: 'mi-NZ' },
        { title: 'Norwegian (Nynorsk)', code: 'nn' },
        { title: 'Hungarian', code: 'hu' },
        { title: 'Polish', code: 'pl' },
        { title: 'Chinese', code: 'zh' },
        { title: 'Quality', code: 'qa', customCode: 'Quality Assurance' }
    ],
    spellchecker_ignore_list: {
        en_us: ['appple'],
        es: ['bananannas'],
        en_gb: ['watermelions'],
        da: ['Graps'],
        nl: ['Mangose'],
        fi: ['Guavaes'],
        fr: ['Plantaing'],
        de: ['Tangerlines'],
        it: ['mandalorian'],
        nb: ['Limse'],
        pt: ['Dattes'],
        pt_PT: ['Strawberie'],
        sv: ['Persimmmons'],
    },
    browser_spellcheck: false,
    // Use below call back if community spellchecker is used 

    // spellchecker_callback: function (method, text, success, failure) {
    //     const words = text.match(this.getWordCharPattern());
    //     if (method === 'spellcheck') {
    //         const suggestions = { 'correctme': ['correct me', 'Correct Me'] };
    //         success({ words: suggestions });
    //     }
    //     if (method === 'addToDictionary') {
    //         success();
    //     }
    // },
    spellchecker_dialog: false,

    //override the matching of characters that are parts of words. 
    // Below setting is being removed from Power Spell 2.0 - (25 June 2019/SG)
    // spellchecker_wordchar_pattern: /[^\s,\.]+/g,

    // Table
    // specify the buttons and the order that they will appear on within TinyMCEâ€™s inline contextual toolbar for tables.
    table_toolbar: "advtablerownumbering tableprops  | tabledelete tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol |tablecutrow tablecopyrow tablepasterowbefore tablepasterowafter | tablecutcol tablecopycol tablepastecolbefore tablepastecolafter",

    // To disable or remove the contextual table toolbar, set table_toolbar to an empty string.
    // table_toolbar: ''
    // When set to false the following fields will not appear: Cell spacing, Cell padding, Border and Caption. Default Value: true
    table_appearance_options: true,
    // table_use_colgroups - This feature is only available for TinyMCE 5.5 and later. Default Value: false
    // This option adds colgroup and col elements to new tables for specifying column widths. Existing tables and tables added using setContent or paste are not affected.
    // TinyMCE only supports the width attribute on col elements. Other attributes are not supported, such as the span attribute.
    table_use_colgroups: true,
    // table_clone_elementsThis option enables you to specify which elements should be cloned as empty children when inserting 
    // rows/columns to a table. By default it will clone these ‘strong em b i span font h1 h2 h3 h4 h5 h6 p div’ into new cells.
    table_clone_elements: 'strong em b i span font h1 h2 h3 h4 h5 h6 p div',
    // table_grid - Default Value: true - This option allows you to disable the grid-like table picker in the Table menu. 
    // The grid feature (which is enabled by default) consists of a dragable matrix that a user can interact with to automatically 
    // create a table of x-rows by x-columns based upon their input.
    // However, if table_grid is set to false the table picker will be replaced by a menu item that opens a dialog that users can use to insert a table.
    // Note: To configure the Table menu to include both the table picker and the table dialog menu items, 
    // set table_grid to true and configure menu to include both the inserttable and inserttabledialog menu items.
    table_grid: true,
    // table_tab_navigation - Default Value: true
    // This option enables you to disable the default tab between table cells feature. 
    // By default, when a user presses tab the cursor will move between cells within the table. 
    // By setting the table_tab_navigation value to false the cursor will tab between browser elements (such as the URL bar or form fields, etc).
    table_tab_navigation: true,
    // table_default_attributes - This option enables you to specify default attributes for inserted tables.
    table_default_attributes: {
        border: '1'
    },
    //  table_default_styles - This option enables you to specify the default styles for inserted tables.
    table_default_styles: {
        width: '50%'
    },
    // table_sizing_mode - Default Value: 'auto' - Note: This feature is only available for TinyMCE 5.4 and later.
    // The table_sizing_mode option enforces the table sizing method used for new and modified tables (including resizing operations on tables). 
    // This option only impacts the width of tables and cells and does not apply to the height of tables and cells.
    // This option accepts the following values:
    // fixed - Use pixel-based widths.
    // relative - Use percent-based widths.
    // responsive - Use no specified widths. Note: If a responsive table is resized, it will be converted to a relative table (a table cannot be resized without widths).
    // auto - Detects the table sizing based on the width style or attribute and attempts to keep the current sizing mode.
    // Possible Values: 'fixed', 'relative', 'responsive', 'auto'
    table_sizing_mode: 'auto',
    // table_column_resizing - Default Value: 'preservetable' , Note: This feature is only available for TinyMCE 5.5 and later.
    // The table_column_resizing option sets whether a table or other columns are resized when a user resizes, inserts, or deletes a table column.
    // Possible values: 'preservetable', 'resizetable'
    // preservetable: The table width is maintained when manipulating table columns by changing the size of nearby columns.
    // resizetable: The table width is changed when manipulating table columns and the size of other columns is maintained.
    table_column_resizing: 'preservetable',
    // table_class_list -This option enables you to specify a list of classes to present in the table options dialog box. 
    // This is useful if you want users to assign predefined classes to table elements.
    table_class_list: [
        { title: 'None', value: '' },
        { title: 'No Borders', value: 'table_no_borders' },
        {
            title: 'Borders',
            menu: [
                { title: 'Red borders', value: 'table_red_borders' },
                { title: 'Blue borders', value: 'table_blue_borders' },
                { title: 'Green borders', value: 'table_green_borders' }
            ]
        }
    ],
    // table_cell_class_list - This option enables you to specify a list of classes to present in the table cell options dialog box. 
    // This is useful if you want users to assign predefined classes to table cells.
    // Note: nested list of table cell classes - This feature is only available for TinyMCE 5.5 and later.
    table_cell_class_list: [
        { title: 'None', value: '' },
        { title: 'No Border', value: 'table_cell_no_border' },
        {
            title: 'Border',
            menu: [
                { title: 'Red border', value: 'table_cell_red_border' },
                { title: 'Blue border', value: 'table_cell_blue_border' },
                { title: 'Green border', value: 'table_cell_green_border' }
            ]
        }
    ],
    // table_row_class_list - This option enables you to specify a list of classes to present in the table row options dialog. 
    // This is useful if you want users to assign predefined classes to table rows.
    // Note: nested list of table row classes - This feature is only available for TinyMCE 5.5 and later.
    table_row_class_list: [
        { title: 'None', value: '' },
        { title: 'No Border', value: 'table_row_no_border' },
        {
            title: 'Border',
            menu: [
                { title: 'Red border', value: 'table_row_red_border' },
                { title: 'Blue border', value: 'table_row_blue_border' },
                { title: 'Green border', value: 'table_row_green_border' }
            ]
        }
    ],
    // table_border_widthsNote: This feature is only available for TinyMCE 5.9 and later.
    // This option is used to specify a list of pre-defined cell border widths for quick access on the tablecellborderwidth toolbar button or menu item. 
    // This option accepts any valid CSS numeric value.
    table_border_widths: [
        { title: 'small', value: '1px' },
        { title: 'medium', value: '3px' },
        { title: 'large', value: '5px' },
    ],
    // table_border_stylesNote: This feature is only available for TinyMCE 5.9 and later.
    // This option is used to specify a list of pre-defined cell border widths for quick access on the tablecellborderstyle toolbar button or menu item, in addition to the dialog options. 
    // This option accepts any valid CSS border style.
    table_border_styles: [
        { title: 'Solid', value: 'solid' },
        { title: 'Dotted', value: 'dotted' },
        { title: 'Dashed', value: 'dashed' },
        { title: 'Double', value: 'double' },
        { title: 'Groove', value: 'groove' },
        { title: 'Ridge', value: 'ridge' },
        { title: 'Inset', value: 'inset' },
        { title: 'Outset', value: 'outset' },
        { title: 'None', value: 'none' },
        { title: 'Hidden', value: 'hidden' }
    ],
    // table_cell_background_color_map Note: This feature is only available for TinyMCE 5.9 and later.
    // This option is used to specify the default values for the table cell background color picker tablecellbackgroundcolor. 
    // If no values are defined, the toolbar button and menu item will use the values or default values of the color_map option. 
    // This option accepts Hex, RGB and HSL color values.
    // The custom color picker is not available for the tablecellbackgroundcolor toolbar button or menu item.
    // table_background_color_map: [
    //     {title: 'Red', value: 'FF0000'},
    //     {title: 'White', value: 'FFFFFF'},
    //     {title: 'Yellow', value: 'F1C40F'}
    //   ],
    // table_cell_border_color_map Note: This feature is only available for TinyMCE 5.9 and later.
    // This option enables you to specify the default values for the table cell border color picker,
    // which can be opened with the tablecellbordercolor toolbar button or menu item. If no values are defined, uses the values of the color_map option. 
    // This option accepts Hex, RGB and HSL color values.The custom color picker is not available for the tablecellbordercolor toolbar button or menu item.
    table_border_color_map: [
        { title: 'Red', value: 'FF0000' },
        { title: 'White', value: 'FFFFFF' },
        { title: 'Yellow', value: 'F1C40F' }
    ],
    // table_advtab - Default Value: true
    // This option makes it possible to disable the advanced tab in the table dialog box. 
    // The advanced tab allows a user to input style, border color and background color values.
    table_advtab: true,
    // table_cell_advtab - Default Value: true
    // This option makes it possible to disable the advanced tab in the table cell dialog box. 
    // The advanced tab allows a user to input style, border color and background color values.
    table_cell_advtab: true,
    // table_row_advtab -Default Value: true
    // This option makes it possible to disable the advanced tab in the table row dialog box. 
    // The advanced tab allows a user to input style, border color and background color values.
    table_row_advtab: true,
    // table_resize_bars-Default Value: true
    // This option makes it possible to disable the ability to resize table columns and rows by dragging the border between two columns or rows.
    table_resize_bars: true,
    // table_style_by_css - Default Value: false
    // This option enables you to force the Table Properties dialog to use HTML5/CSS3 standards for setting cell spacing and cellpadding. 
    // By default, these are added as attributes to the table element. By setting this to true, cell spacing is applied to the table 
    // element as a border-spacing style and cell padding is applied to all td elements as a padding style.
    table_style_by_css: false,
    // table_header_type - Default Value: 'section' - Note: This feature is only available for TinyMCE 5.4 and later.
    // The table_header_type option affects how tables are structured when a table row is set as a header row. 
    // Note that this setting does not affect header columns.
    // The table_header_type option has four different settings: 'section’, 'cells', 'sectionCells', and 'auto'
    // section - When a table row is set as a header row, the row (tr) is moved to the thead element. The cell types (td and/or th) are unaffected.
    // cells - When a table row is set as a header row, the row (tr) moves to the tbody element (if in a thead element). All table data cell elements (td) in the row are changed to table header cell elements (th).
    // sectionCells - When a table row is set as a header row, the row (tr) is moved to the thead element. All cells in the row are changed to table header cell elements (th).
    // auto - Finds the first existing header row in the table and uses the same structure. If no other table header row exists, the section header type will be applied.
    // Possible Values: 'section’, 'cells', 'sectionCells', 'auto'
    table_header_type: 'section',


    // Text Pattern
    // configure the text patterns that get matched by the textpattern plugin
    text_patterns: [
        { start: '*', end: '*', format: 'italic' },
        { start: '**', end: '**', format: 'bold' },
        { start: '~', end: '~', cmd: 'createLink', value: 'https://tiny.cloud', trigger: 'space' },
        { start: '#', format: 'h1', trigger: 'space' },
        { start: '##', format: 'h2', trigger: 'space' },
        { start: '###', format: 'h3', trigger: 'space' },
        { start: '####', format: 'h4', trigger: 'space' },
        { start: '#####', format: 'h5', trigger: 'space' },
        { start: '######', format: 'h6', trigger: 'space' },
        { start: '*', cmd: 'InsertUnorderedList', trigger: 'space' },
        { start: '1.', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }, trigger: 'space' },
        { start: '1)', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }, trigger: 'space' },
        { start: 'a.', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }, trigger: 'space' },
        { start: 'a)', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }, trigger: 'space' },
        { start: 'i.', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }, trigger: 'space' },
        { start: 'i)', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }, trigger: 'space' },
        { start: '---', replacement: '<hr/>', trigger: 'space' },
        { start: '--', replacement: '—', trigger: 'space' },
        { start: '-', replacement: '—', trigger: 'space' },
        { start: '(c)', replacement: '©', trigger: 'space' },
        { start: '//brb', replacement: 'Be Right Back', trigger: 'space' },
        {
            start: '//heading',
            replacement: '<h1 style="color: blue">Heading here</h1> <h2>Author: Name here</h2> <p><em>Date: 01/01/2000</em></p> <hr />',
            trigger: 'space'
        },
    ],

    // Table of Contents
    // content will be inspected only x levels deep
    tableofcontents_depth: 3, //H1 to H3

    // change header tag
    tableofcontents_header: "h1", // default is h2

    // change the class name that gets assigned to the wrapper div
    // tableofcontents_class: "qa-toc",// <div class="qa-toc"> you can verify this in source code <>

    // Visual Blocks
    // specify the default state of the Visual Blocks plugin
    visualblocks_default_state: false,

    // Visual Characters 
    visualchars_default_state: false,

    // Word Count
    // specify the regular expression that will be used to strip punctuation and numbers from the word count
    // eslint-disable-next-line no-useless-escape
    wordcount_cleanregex: '/[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g',

    //specify the regular expression that will be used to count the words for the word count.
    // eslint-disable-next-line no-useless-escape
    wordcount_countregex: '/[\w\u2019\x27\-\u00C0-\u1FFF]+/g',

    // Format Painter
    formats: {
        list_style: {
            selector: 'ul,ol',
            styles: { listStyleType: '%value' }
        },
        borderstyle: { selector: 'td,th', styles: { borderTopStyle: '%valueTop', borderRightStyle: '%valueRight', borderBottomStyle: '%valueBottom', borderLeftStyle: '%valueLeft', }, remove_similar: true },
        bordercolor: { selector: 'td,th', styles: { borderTopColor: '%valueTop', borderRightColor: '%valueRight', borderBottomColor: '%valueBottom', borderLeftColor: '%valueLeft' }, remove_similar: true },
        backgroundcolor: { selector: 'td,th', styles: { backgroundColor: '%value' }, remove_similar: true },
        formatpainter_removeformat: [
            { selector: 'b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins', remove: 'all', split: true, expand: false, block_expand: true, deep: true },
            { selector: 'span', attributes: ['style', 'class'], remove: 'empty', split: true, expand: false, deep: true },
            { selector: '*:not(tr,td,th,table)', attributes: ['style', 'class'], split: false, expand: false, deep: true }
        ],
        // This is where we define the actual format for line-height and what elements it can be assigned to.
        lineheight_100_0: { selector: "p,h1,h2,h3,h4,h5,h6", styles: { lineHeight: "100" } },
        lineheight_1_0: { selector: "p,h1,h2,h3,h4,h5,h6", styles: { lineHeight: "1" } },
        lineheight_1_1: { selector: "p,h1,h2,h3,h4,h5,h6", styles: { lineHeight: "1.1" } },
        lineheight_1_2: { selector: "p,h1,h2,h3,h4,h5,h6", styles: { lineHeight: "1.2" } },
        lineheight_1_3: { selector: "p,h1,h2,h3,h4,h5,h6", styles: { lineHeight: "1.3" } },
        lineheight_5_0: { selector: "p,h1,h2,h3,h4,h5,h6", styles: { lineHeight: "5" } },
        lineheight_5_1: { selector: "p,h1,h2,h3,h4,h5,h6", styles: { lineHeight: "5.1" } },
        lineheight_5_2: { selector: "p,h1,h2,h3,h4,h5,h6", styles: { lineHeight: "5.2" } },
        lineheight_5_3: { selector: "p,h1,h2,h3,h4,h5,h6", styles: { lineHeight: "5.3" } },
    },
    formatpainter_table_format_names: 'borderstyle,bordercolor',
    formatpainter_blacklisted_formats: 'link,address,removeformat,formatpainter_removeformat', // Default value
    // Permanent Pen
    permanentpen_properties: {
        // fontname: 'arial,helvetica,sans-serif',
        // fontname: 'impact,charcoal,sans-serif',
        fontname: 'impact,sans-serif',
        forecolor: '#E74C3C',
        fontsize: '12px',
        // hilitecolor: '#E74C3C',
        bold: true,
        italic: false,
        strikethrough: false,
        underline: false
    },
 
     //***********************CONFIGURATIONS****************************//
     file_picker_types: 'file image media',
     // and here's our custom image picker
     file_picker_callback: function (cb) {
         var input = document.createElement('input');
         input.setAttribute('type', 'file');
         // input.setAttribute('accept', 'image/*');
 
         // Note: In modern browsers input[type="file"] is functional without 
         // even adding it to the DOM, but that might not be the case in some older
         // or quirky browsers like IE, so you might want to add it to the DOM
         // just in case, and visually hide it. And do not forget do remove it
         // once you do not need it anymore.
 
         input.onchange = function () {
             const file = this.files[0];
 
             const reader = new FileReader();
             reader.onload = function () {
                 // Note: Now we need to register the blob in TinyMCEs image blob
                 // registry. In the next release this part hopefully won't be
                 // necessary, as we are looking to handle it internally.
                 const id = 'blobid' + (new Date()).getTime();
                 // eslint-disable-next-line no-undef
                 const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                 const base64 = reader.result.split(',')[1];
                 const blobInfo = blobCache.create(id, file, base64);
                 blobCache.add(blobInfo);
 
                 // call the callback and populate the Title field with the file name
                 cb(blobInfo.blobUri(), { title: file.name });
             };
             reader.readAsDataURL(file);
         };
 
         input.click();
     },
 
     // Color
     // specify how many columns appear on the grid of text colors
     color_cols: 5,
     custom_colors: true,
     // fontsize_formats
    font_size_formats: '11px 12px 14px 16px 18px 24px 36px 48px 64px',
    resize: 'both',
    image_title: true,
    // enable automatic uploads of images represented by blob or data URIs
    // automatic_uploads: true,
    // URL of our upload handler (for more details check: https://www.tinymce.com/docs/configure/file-image-upload/#images_upload_url)
    images_upload_handler: image_upload_handler,
    // LineHeight values
    // lineheight_formats: '1 1.1 1.2 1.3 1.4 1.5 2' - Default
    // lineheight_formats: '1 1.1 1.2 1.3 1.4 1.5 2 2.5 3 3.5 4 4.5 5 10 20 40 80',
    line_height_formats: '1px 1.1px 2px 10px 50px 100px',
    // lineheight_formats: '1em 1.1em 2em 10em 50em 100em',
    // lineheight_formats: '1% 1.5% 100% 200% 350% 480% 500%',
    // Line-height is added to the style format at the bottom.
    style_formats: [
        {
            title: 'Headings', items: [
                { title: 'Heading 1', format: 'h1' },
                { title: 'Heading 2', format: 'h2' },
                { title: 'Heading 3', format: 'h3' },
                { title: 'Heading 4', format: 'h4' },
                { title: 'Heading 5', format: 'h5' },
                { title: 'Heading 6', format: 'h6' }
            ]
        },
        {
            title: 'Inline', items: [
                { title: 'Bold', format: 'bold' },
                { title: 'Italic', format: 'italic' },
                { title: 'Underline', format: 'underline' },
                { title: 'Strikethrough', format: 'strikethrough' },
                { title: 'Superscript', format: 'superscript' },
                { title: 'Subscript', format: 'subscript' },
                { title: 'Code', format: 'code' }
            ]
        },
        {
            title: 'Blocks', items: [
                { title: 'Paragraph', format: 'p' },
                { title: 'Blockquote', format: 'blockquote' },
                { title: 'Div', format: 'div' },
                { title: 'Pre', format: 'pre' }
            ]
        },
        {
            title: 'Align', items: [
                { title: 'Left', format: 'alignleft' },
                { title: 'Center', format: 'aligncenter' },
                { title: 'Right', format: 'alignright' },
                { title: 'Justify', format: 'alignjustify' }
            ]
        },
        {
            title: 'Line-height', items: [
                { title: '100', format: 'lineheight_100_0' },
                { title: '1', format: 'lineheight_1_0' },
                { title: '1.1', format: 'lineheight_1_1' },
                { title: '1.2', format: 'lineheight_1_2' },
                { title: '1.3', format: 'lineheight_1_3' },
                { title: '5', format: 'lineheight_5_0' },
                { title: '5.1', format: 'lineheight_5_1' },
                { title: '5.2', format: 'lineheight_5_2' },
                { title: '5.3', format: 'lineheight_5_3' },
            ]
        },
    ],
    setup: function (editor) {
      // Custom close icon
      editor.ui.registry.addIcon('close', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>close</title><g fill="#d33"><path d="M4.34 2.93l12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34L4.34 17.07l-1.41-1.41L15.66 2.93z"/></g></svg>');

      // Table api's via menu
      editor.ui.registry.addMenuItem('api1', {
          text: 'Table Responsive',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableSizingMode', false, 'responsive');
              alert('Table Responsive');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api2', {
          text: 'Table Fixed',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableSizingMode', false, 'fixed');
              alert('Table Fixed');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api3', {
          text: 'Table Relative',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableSizingMode', false, 'relative');
              alert('Table Relative');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api4', {
          text: 'Table Auto',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableSizingMode', false, 'auto');
              alert('Table Auto');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api5', {
          text: 'Red Border Cell',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableApplyCellStyle', false, { borderColor: 'red' });
              alert('Red Border Cell');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api6', {
          text: 'Table 2x2',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceInsertTable', false, { rows: 2, columns: 2 });
              // alert('Table 2x2');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api7', {
          text: 'SetCellType td',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableCellType', false, { type: 'td' });
              alert('CellType td');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api8', {
          text: 'SetCellType th',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableCellType', false, { type: 'th' });
              alert('CellType th');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api9', {
          text: 'SetRowType header',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableRowType', false, { type: 'header' });
              alert('RowType header');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api10', {
          text: 'SetRowType body',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableRowType', false, { type: 'body' });
              alert('RowType body');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api11', {
          text: 'SetRowType footer',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableRowType', false, { type: 'footer' });
              alert('RowType footer');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api12', {
          text: 'SetColType td',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableColType', false, { type: 'td' });
              alert('ColType td');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api14', {
          text: 'GetTableCellType',
          icon: 'bomb',
          onAction: function () {
              alert(editor.queryCommandValue('mceTableCellType'));
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api15', {
          text: 'GetTableRowType',
          icon: 'bomb',
          onAction: function () {
              alert(editor.queryCommandValue('mceTableRowType'));
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api16', {
          text: 'GetTableColType',
          icon: 'bomb',
          onAction: function () {
              alert(editor.queryCommandValue('mceTableColType'));
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api17', {
          text: 'Table with headers',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceInsertTable', false, { rows: 2, columns: 2, options: { headerRows: 1, headerColumns: 1 } });
              // alert('Table 2x2');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api18', {
          text: 'SetColType th',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableColType', false, { type: 'th' });
              alert('ColType th');
          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api19', {
          text: 'SetRowType th',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableRowType', false, { type: 'th' });
              alert('RowType th');
          },
          onSetup: function () {
              return function () { };
          }
      });

      editor.ui.registry.addMenuItem('api20', {
          text: 'TableCellToggleClass',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableCellToggleClass', false, 'mycellclass');
              alert('mceTableCellToggleClass');

          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api21', {
          text: 'TableToggleClass',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableToggleClass', false, 'myclass');
              alert('mceTableToggleClass');

          },
          onSetup: function () {
              return function () { };
          }
      });
      editor.ui.registry.addMenuItem('api22', {
          text: 'TableToggleCaption',
          icon: 'bomb',
          onAction: function () {
              editor.execCommand('mceTableToggleCaption');
              alert('TableToggleCaption');

          },
          onSetup: function () {
              return function () { };
          }
      });
      // Table Events
      // TableModified -Fired when style or structural changes are made to a table.Note: This feature is only available for TinyMCE 5.7 and later.
      editor.on('tablemodified', function (event) {
          return console.log('Table Modified! ', event);
      });
      // newrow -Fired when a row is created
      editor.on('newrow', function (event) {
          return console.log('newrow ', event);
      });
      // newcell -Fired when a cell is created
      editor.on('newcell', function (event) {
          return console.log('newcell ', event);
      });
      // ObjectResizeStart -Fired when a resize action is started on a table, row, column or cell using the resize bars
      editor.on('ObjectResizeStart', function (event) {
          return console.log('ObjectResizeStart ', event);
      });
      // ObjectResized - Fired when a resize action is finished on a table, row, column or cell using the resize bars
      editor.on('ObjectResized', function (event) {
          return console.log('ObjectResized ', event);
      });
      // TableSelectionClear -Fired when the table selection is cleared.Note: This feature is only available for TinyMCE 5.1 and later.
      editor.on('ObjectResized', function (event) {
          return console.log('ObjectResized ', event);
      });
      // LineHeight toolbar menu button
      editor.ui.registry.addMenuButton('lineheightselect', {
          icon: "line-height",
          tooltip: 'Line height',
          fetch: function (callback) {
              let items = [
                  {
                      type: 'menuitem',
                      text: '100.0',
                      onAction: function (_) {
                          editor.execCommand('mceToggleFormat', false, 'lineheight_100_0');
                      }
                  },
                  {
                      type: 'menuitem',
                      text: '1.0',
                      onAction: function (_) {
                          editor.execCommand('mceToggleFormat', false, 'lineheight_1_0');
                      }
                  },
                  {
                      type: 'menuitem',
                      text: '1.1',
                      onAction: function (_) {
                          editor.execCommand('mceToggleFormat', false, 'lineheight_1_1');
                      }
                  },
                  {
                      type: 'menuitem',
                      text: '1.2',
                      onAction: function (_) {
                          editor.execCommand('mceToggleFormat', false, 'lineheight_1_2');
                      }
                  },
                  {
                      type: 'menuitem',
                      text: '1.3',
                      onAction: function (_) {
                          editor.execCommand('mceToggleFormat', false, 'lineheight_1_3');
                      }
                  },
                  {
                      type: 'menuitem',
                      text: '5.0',
                      onAction: function (_) {
                          editor.execCommand('mceToggleFormat', false, 'lineheight_5_0');
                      }
                  },
                  {
                      type: 'menuitem',
                      text: '5.1',
                      onAction: function (_) {
                          editor.execCommand('mceToggleFormat', false, 'lineheight_5_1');
                      }
                  },
                  {
                      type: 'menuitem',
                      text: '5.2',
                      onAction: function (_) {
                          editor.execCommand('mceToggleFormat', false, 'lineheight_5_2');
                      }
                  },
                  {
                      type: 'menuitem',
                      text: '5.3',
                      onAction: function (_) {
                          editor.execCommand('mceToggleFormat', false, 'lineheight_5_3');
                      }
                  }

              ];
              callback(items);
          }
      });
      // Custom Context Toolbars
      editor.ui.registry.addContextToolbar('imagealignment', {
          predicate: function (node) {
              return node.nodeName.toLowerCase() === 'img'
          },
          items: 'alignleft aligncenter alignright | image',
          position: 'node',
          scope: 'node'
      });

      editor.ui.registry.addContextToolbar('textselection', {
          predicate: function (node) {
              return !editor.selection.isCollapsed();
          },
          items: 'blockquote | bold italic | removeformat',
          position: 'selection',
          scope: 'node'
      });

      editor.ui.registry.addButton('customInsertButton', {
          text: 'QA',
          tooltip: 'ButtonMagic',
          onAction: function (_) { editor.insertContent('&nbsp;<strong>It\'s QA button!</strong>&nbsp;') }
      });

      //const toTimeHtml = function (date) {`<time datetime="${date.toString()}">${date.toDateString()}</time>`;}
      const toTimeHtml = function (date) { return '<time datetime="' + date.toString() + '">' + date.toDateString() + '</time>'; }

      editor.ui.registry.addButton('customDateButton', {
          icon: 'plus',
          tooltip: 'Insert Current Date',
          disabled: true,
          onAction: function (_) { editor.insertContent(toTimeHtml(new Date())) },
          onSetup: function (buttonApi) {
              // const editorEventCallback = function (eventApi) { buttonApi.setDisabled(eventApi.element.nodeName.toLowerCase() === 'time'); }
              // editor.on('NodeChange', editorEventCallback);
              const editorEventCallback = function (eventApi) { buttonApi.setEnabled(eventApi.element.nodeName.toLowerCase() !== 'time'); }
              editor.on('NodeChange', editorEventCallback);

              /* onSetup should always return the unbind handlers */
              return function (buttonApi) { editor.off('NodeChange', editorEventCallback); }
          }
      });
      editor.ui.registry.addMenuItem('custommenuitem', {
          text: 'My Custom Menu Item',
          icon: 'save',
          onAction: function () { alert('Menu item clicked') },
          onSetup: function () { }
      });

      editor.addCommand('custom-paste', function () {
          const input = prompt('Input HTML string');
          editor.execCommand('mceInsertClipboardContent', false, {
              content: input
          });
      });
      editor.ui.registry.addButton('custom-paste', {
          cmd: 'custom-paste',
          text: 'Paste API',
          onAction: function () {
              editor.execCommand('custom-paste');
          }
      });
      /* An autocompleter that allows you to insert special characters */
      editor.ui.registry.addAutocompleter('specialchars', {
          trigger: ':',
          minChars: 1,
          columns: 'auto',
          fetch: function (pattern) {
              const matchedChars = specialChars.filter(function (char) {
                  return char.text.indexOf(pattern) !== -1;
              });
              return new Promise(function (resolve) {
                  const results = matchedChars.map(function (char) {
                      return {
                          value: char.value,
                          text: char.text,
                          icon: char.value
                      }
                  });
                  resolve(results);
              });
          },
          onAction: function (autocompleteApi, rng, value) {
              editor.selection.setRng(rng);
              editor.insertContent(value);
              autocompleteApi.hide();
          }
      });
      //   TINY-6629	 AdvTable Row Numbering: fire TableModified event
      editor.on('tablemodified', function (event) {
          return console.log('Table Modified! ', event);
      });
  },
  body_class: 'yyyyyyyyyyyy', // Check in console that all textarea will have class="mce-content-body yyyyyyyyyyyy"
  body_id: 'zzzzzzzzzzzzzzzzzzzzz', // Check in console that all textarea will have id="zzzzzzzzzzzzzzzzzzzzz"
  //uncommend below and redload the editor to see red borders around div
  // content_style: "div {margin: 10px; border: 10px solid red; padding: 3px}",
  inline_boundaries: true,
  // visual_anchor_class: 'iamanchor', // Create an anchor and see the source code and it will have class with above name, if enabled anchor visual is not displayed
  // visual_table_class: 'iamtable', // same as above
  visual: true, // fasle turn off visial aid 
  allow_html_in_named_anchor: true, // Verify console setting allow_html_in_named_anchor to true and false,  If true it will keep the text inside anchor tags
  allow_unsafe_link_target: true, // Setting this to true and making taget to balnk , it will remove rel="noopener" 
  custom_elements: 'ele1,~ele2',
  element_format: 'xhtml',
  fix_list_elements: true,
  forced_root_block: 'p',
  /*
  forced_root_block_attrs: {
      'class': 'QA',
      'id': 'qaid'
  },
  */
  keep_styles: true, // When set to false when do bold and color any tesxt and press enter same syles wont be carried forward.
  // remove_trailing_brs: true, // This option allows you to disable TinyMCE's default behavior of removing <br> tags at the end of block elements.
  schema: 'html5',
  // block_formats: 'Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3' // uncommmet this and you will see only 4 items in formatselect
  indentation: '30px',
  indent_use_margin: false,
  allow_script_urls: false,
  anchor_bottom: '#ancbtm',
  anchor_top: '#anctop',
  br_in_pre: true,
  // custom_undo_redo_levels: 10,
  nowrap: false,
  object_resizing: true,
  typeahead_urls: true,
  branding: true,
  fixed_toolbar_container: '#container',
  elementpath: true,
  // the editor will stop automatically resizing when the set value is reached.
  //max_height: 800,
  // enables you to specify the minimum height of the editor when initialized.
  min_height: 400,
  min_width: 400,
  //max_width: 800,
  // height: 500, // sets the height of the editable area in pixels.
  //width: "100%", // Set the width of the editor in pixels.
  // preview_styles: false,
  statusbar: true,
  images_file_types: 'jpeg,jpg,jpe,jfif,png,gif,bmp,webp',
  deprecation_warnings: true,
  // SVG SUPPORT
  extended_valid_elements: 'ele1,ele2,svg[width|height|viewBox]',
  xss_sanitization: false,
  typography_default_lang: "en-US",
  uploadcare_public_key: '6ff5776be9bb64e10023',
  inline: true
}
})();