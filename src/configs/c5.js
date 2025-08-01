(function () {
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

  const mergetags_list = [
    {
      value: 'Current.Date',
      title: 'Current date in DD/MM/YYYY format'
    },
    {
      value: 'Campaign.Toc',
      title: 'Linked table of contents in your campaign'
    },
    {
      title: 'Phone',
      menu: [
        {
          value: 'Phone.Home'
        },
        {
          value: 'Phone.work'
        }
      ]
    },
    {
      title: 'Person',
      menu: [
        {
          value: 'Person.Name'
        },
        {
          value: 'Person.Name.First'
        },
        {
          value: 'Person.Name.Last'
        },
        {
          value: 'Person.Name.Full'
        },
        {
          title: 'Email',
          menu: [
            {
              value: 'Person.Email.Work'
            },
            {
              value: 'Person.Email.Home'
            }
          ]
        }
      ]
    }
  ];

  const ai_request = (req, respondWith) => {
    if (req.prompt.includes('error')) {
      respondWith.string(() => Promise.reject(req.prompt));
    } else {
      if (!document.querySelector('#streaming')?.checked) {
        respondWith.string(() => Promise.resolve(req.prompt));
      } else {
        respondWith.stream((signal, onMessage) => {
          return new Promise((resolve, reject) => {
            const messages = [];
            for (var i = 0; i <= 30; i++) {
              messages.push(' Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
            }
            messages.push('</p><p>Streaming complete!</p>');
            const interval = setInterval(() => {
              if (messages.length > 0) {
                try {
                  onMessage(messages.splice(0, 1).join(''));
                } catch (e) {
                  reject(e);
                }
              } else {
                clearInterval(interval);
                resolve();
              }
            }, 300);
            signal.addEventListener('abort', () => clearInterval(interval));
          });
        });
      }
    }
  };

  const revisions = [
    {
      "revisionId": "1",
      "createdAt": "2023-11-25T03:30:46.171Z",
      "content": "<h2>Rev 1</h2>"
    },
    {
      "revisionId": "2",
      "createdAt": "2023-11-25T12:06:09.675Z",
      "content": "<h2>Rev 2</h2>"
    },
    {
      "revisionId": "3",
      "createdAt": "2023-11-27T03:23:32.351Z",
      "content": "<h2>Rev 3</h2>"
    },
    {
      "revisionId": "4",
      "createdAt": "2023-11-29T12:35:16.203Z",
      "content": "<h2>Rev 4</h2>"
    },
    {
      "revisionId": "5",
      "createdAt": "2023-11-28T08:01:56.100Z",
      "content": "<h2>Rev 5</h2>"
    }
  ];

  const basicConfig = {
    ai_request,
    height: 600,
    autocorrect_autocorrect: true,
    autocorrect_capitalize: true,
    advcode_inline: true,
    mobile: {
      theme: "silver",
      contextmenu: "link image table preview"
    },
    pad_empty_with_br: true,
    help_accessibility: true,
  };
  const advancePlugins = ["accordion", "ai", "advtable", "autoresize", "anchor", "advlist", "autolink", "autosave", "charmap", "advcode", "codesample", "directionality", "emoticons", "fullscreen",
    "help", "image", "insertdatetime", "importcss", "link", "lists", "media", "nonbreaking", "pagebreak", "preview", "save", "searchreplace", "table",
    "advtemplate", "visualblocks", "visualchars", "wordcount", "casechange", "checklist", "powerpaste", "a11ychecker", "tinymcespellchecker", "tinydrive",
    "tableofcontents", "editimage", "mentions", "mediaembed", "permanentpen", "formatpainter", "pageembed", "linkchecker", "tinycomments", "export",
    "autocorrect", "mergetags", "footnotes", "typography", "inlinecss", "revisionhistory", "exportpdf", "exportword", "importword", "markdown", "math", "suggestededits"];

  const advanceToolbar = "math rtl ltr aidialog aishortcuts bold italic underline strikethrough subscript superscript addtemplate inserttemplate accordion | fontfamily fontsize fontsizeinput | revisionhistory exportpdf exportword importword | numlist bullist checklist | permanentpen formatpainter removeformat forecolor backcolor | blockquote nonbreaking hr pagebreak | casechange styles blocks lineheight | ltr rtl outdent indent | align alignleft aligncenter alignright alignjustify alignnone | h1 h2 h3 h4 h5 h6 h7 | suggestededits |" +
    "copy cut paste pastetext selectall remove newdocument wordcount searchreplace | undo redo | save cancel restoredraft | fullscreen print preview export code help | template insertdatetime codesample emoticons charmap | anchor link unlink image media pageembed insertfile | visualblocks visualchars a11ycheck | spellchecker language spellcheckdialog | tableofcontents tableofcontentsupdate | " +
    "table advtablerownumbering tableclass tablecellclass tablecellvalign tablecellborderwidth tablecellborderstyle tablecaption tablecellbackgroundcolor tablecellbordercolor tablerowheader tablecolheader";

  return {
    basicConfig,
    plugins: advancePlugins,
    toolbar: advanceToolbar,
    mergetags_prefix: '${',
    mergetags_suffix: '}',
    mergetags_list,
    advtemplate_templates,
    ai_request,
    toolbar_mode: 'sliding',
    toolbar_sticky: true,
    toolbar_location: 'top', //top, bottom
    toolbar_sticky_offset: 10,
    // Tiny Comments
    tinycomments_mode: 'embedded',
    tinycomments_author: 'qauser8@qa.com',
    tinycomments_author_name: 'SuperCoolQA',
    menubar: 'file edit insert view format table footnotes footnotesupdate | tools help',
    advcode_inline: true,
    revisionhistory_fetch: () => Promise.resolve(revisions),
    exportpdf_service_url: "https://exportpdf.converter.tiny.cloud/v1/convert",
    exportword_service_url: "https://exportdocx.converter.tiny.cloud/v1/convert",
    importword_service_url: "https://importdocx.converter.tiny.cloud/v2/convert/docx-html",
    mobile: {
      theme: "silver",
      contextmenu: "link image table preview",

    },
  };
}
)();