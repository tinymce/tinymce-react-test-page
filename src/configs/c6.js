(function () {
  // For this demo we have created an object that holds all of our
  // templates. It is up to you to architecture the template storage
  // and delivery mechanism, including how to create new templates
  // and modify existing ones.
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

  const templates = {
    project_description: `
      <h1>Project title</h1>
      <p>Provide an overview of the project, the desired outcome and the steps involved</p>
      <h2>Project details</h2>
      <table style="border-collapse: collapse; width: 100%;" border="1">
          <tbody>
              <tr style="height: 22px;">
                  <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                          style="font-size: 10pt;">Project Manager</span></th>
                  <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">Firstname Lastname</span></td>
              </tr>
              <tr style="height: 22px;">
                  <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                          style="font-size: 10pt;">Start date</span></th>
                  <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">YYYY-MM-DD</span></td>
              </tr>
              <tr style="height: 22px;">
                  <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                          style="font-size: 10pt;">End date</span></th>
                  <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">YYYY-MM-DD</span></td>
              </tr>
              <tr style="height: 22px;">
                  <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                          style="font-size: 10pt;">Team</span></th>
                  <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">Team name</span></td>
              </tr>
          </tbody>
      </table>
      <h2>Project content</h2>
      <p>Continue writing your project documentations here</p>
    `,
    meeting_minutes: `
      <h1>Meeting minutes</h1>
      <table style="border-collapse: collapse; width: 100%;" border="1">
          <tbody>
              <tr style="height: 22px;">
                  <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                          style="font-size: 10pt;">Project</span></th>
                  <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">Firstname Lastname</span></td>
              </tr>
              <tr style="height: 22px;">
                  <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                          style="font-size: 10pt;">Date</span></th>
                  <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">YYYY-MM-DD</span></td>
              </tr>
          </tbody>
      </table>
      <h2>Participants</h2>
      <ul>
          <li>Participant 1</li>
          <li>Participant 2</li>
      </ul>
      <h2>Agenda</h2>
      <p>The following topics were discussed during the meeting</p>
      <h3>Topic 1</h3>
      <p>Topic description</p>
      <h2>Action points</h2>
      <ul>
          <li>Action item 1</li>
          <li>Action item 2</li>
      </ul>
    `,
    replacement_value_example: `
      <h1>Test report</h1>
      <p><span style="background-color: #fbeeb8;">The values in the table is dynamically generated using the template plugin
              replacement values</span></p>
      <table style="border-collapse: collapse; width: 100%;" border="1">
          <tbody>
              <tr style="height: 22px;">
                  <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                          style="font-size: 10pt;">Test subject</span></th>
                  <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">{$username}</span></td>
              </tr>
              <tr style="height: 22px;">
                  <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                          style="font-size: 10pt;">Date</span></th>
                  <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;" class="cdate">date</span></td>
              </tr>
              <tr style="height: 22px;">
                  <th style="width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;"><span
                          style="font-size: 10pt;">ID</span></th>
                  <td style="width: 50%; height: 22px;"><span style="font-size: 10pt;">{$userid}</span></td>
              </tr>
          </tbody>
      </table>
      <h2>Test result</h2>
      <p>Enter test results here</p>
    `,
    blank_template: ""
  };
  return {
    selector: "textarea.t6",
    plugins: "link lists code visualblocks table image advtemplate",
    // Nothing special about the toolbar in this demo.
    toolbar: "undo redo addtemplate inserttemplate | styles fontsizeinput | bold italic strikethrough backcolor | bullist numlist link image hr | code",
    // Tip! The height option accepts any valid CSS for height
    height: "calc(100vh - 4rem)",

    advcode_inline: true,
    advtemplate_templates,
    pad_empty_with_br: true,
    help_accessibility: true,

    setup: function setup(editor) {
      // When the editor is clicked we monitor what is being clicked and
      // take appropriate actions. This is how we dedect if a insert template
      // button has been clicked. This event is triggered for every click inside
      // TinyMCE.
      // https://www.tiny.cloud/docs/advanced/events/

      editor.on("click", function (e) {
        // Check if the content contains the placeholder inserted above.
        // The get() function looks for an id attribute.
        // https://www.tiny.cloud/docs/api/tinymce.dom/tinymce.dom.domutils/#get
        var placeholderExists = editor.dom.get("placeholder"); // If a button html element is being clicked this would return true which.

        var button = editor.dom.getParent(e.target, "button");

        if (placeholderExists) {
          // If a insert button is button is being clicked or to proceed with an
          // empty document.
          if (button) {
            // In our demo we have a button that manages templates (a feature you have
            // to build yourself). We first check if that is the button being clicked.
            // If not, it means we want to insert a template.
            if (button.id === "manage_templates") {
              alert("Managing templates is done by the host app (not part of tinymce)");
            } else {
              //
              // If replacement values is not needed, then setContent can be used.
              // This also means we're not using the template plugin so all references
              // to it can be removed. Remove the alternative insert template block
              // below.
              //

              /*
                        // Inject the template into the content, replacing the placeholder
                        // https://www.tiny.cloud/docs/api/tinymce/tinymce.editor/#setcontent
                        editor.setContent(templates[button.id]);
                        // Optionally set the cursor at the beginning of the document
                        editor.selection.setCursorLocation(editor.getBody().firstChild, 0);
                        // Optionally scroll the document to the top if the template is larger
                        // than the editor viewport.
                        editor.getWin().scrollTo(0, 0);
                        */
              //
              // Use the template plugin to get replace values working (variables
              // inside templates).
              //
              // Remove all content from the editor
              editor.setContent(""); // Force set the selection at the beginning of the empty document where
              // we want the template to be inserted
              // https://www.tiny.cloud/docs/api/tinymce.dom/tinymce.dom.selection/#setcursorlocation

              editor.selection.setCursorLocation(editor.getBody().firstChild, 0); // Insert the template
              // https://www.tiny.cloud/docs/plugins/template/#commands

              editor.execCommand("mceInsertTemplate", false, templates[button.id]); // Optionally once again set the cursor at the beginning of the document (optional)

              editor.selection.setCursorLocation(editor.getBody().firstChild, 0); // Optionally scroll to the top if the inserted template is larger than
              // the editor viewport

              editor.getWin().scrollTo(0, 0);
            }
          } else {
            // In this demo we want to start an empty document with a title.
            // This does not force having a title for a document, it's simply
            // a convenience feature.
            editor.setContent("<h1><br></h1>");
          }
        }
      });
      editor.on("preinit", function () {
        // To prevent the placeholder to be submitted out of TinyMCE we
        // remove it upon serialization. In this case, any <div> tag
        // will be removed, so adapt it to your needs.
        // https://www.tiny.cloud/docs/api/tinymce.dom/tinymce.dom.serializer/#addnodefilter
        editor.serializer.addNodeFilter("div", function (nodes) {
          nodes.forEach(function (node) {
            node.remove();
          });
        });
      });
    },
    // The following css will be injected into the editor, extending
    // the default styles.
    // In a real world scenario, with much more custom styles for headings
    // links, tables, images etc, it's strongly recommended to use the
    // content_css option to load a separate CSS file. Makes editing easier too.
    // https://www.tiny.cloud/docs/configure/content-appearance/#content_style
    // https://www.tiny.cloud/docs/configure/content-appearance/#content_css
    content_style: `
      body {
        max-width: 720px;
        margin: 2rem auto;
      }

      #placeholder {
        color: #aaa;
        display: flex;
        flex-direction: column;
        min-height: calc(100vh - 4rem);
        -webkit-user-select: none;
        /* Prevent any selections on the element */
        user-select: none;
      }

      #placeholder * {
        -webkit-user-select: none;
        /* Prevent any selections on the element */
        user-select: none;
      }

      #placeholder h1 {
        margin: 0;
      }

      #placeholder button {
        -webkit-appearance: none;
        background: url('images/template-icon-document.png') .25rem center no-repeat transparent;
        background-size: 20px 20px;
        border-radius: .25rem;
        border: none;
        color: #aaa;
        cursor: default;
        display: block;
        font-family: inherit;
        font-size: 1rem;
        margin: .15rem -.25rem;
        outline: none;
        padding: .35rem .35rem .35rem calc(.5rem + 20px);
        text-align: left;
        transition: background-color .2s;
        cursor: pointer;
      }

      #placeholder button:hover {
        background-color: #f4f4f4;
      }

      #placeholder button.new-doc {
        background-image: url('images/template-icon-new-document.png');
      }

      #placeholder button.manage {
        background-image: url('images/template-icon-manage.png');
      }
    `
  };
})();