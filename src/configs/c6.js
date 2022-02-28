(function () {
  // For this demo we have created an object that holds all of our
  // templates. It is up to you to architecture the template storage
  // and delivery mechanism, including how to create new templates
  // and modify existing ones.
  var templates = {
    project_description: "\n            <h1>Project title</h1>\n            <p>Provide an overview of the project, the desired outcome and the steps involved</p>\n            <h2>Project details</h2>\n            <table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\n                <tbody>\n                    <tr style=\"height: 22px;\">\n                        <th style=\"width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;\"><span style=\"font-size: 10pt;\">Project Manager</span></th>\n                        <td style=\"width: 50%; height: 22px;\"><span style=\"font-size: 10pt;\">Firstname Lastname</span></td>\n                    </tr>\n                    <tr style=\"height: 22px;\">\n                        <th style=\"width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;\"><span style=\"font-size: 10pt;\">Start date</span></th>\n                        <td style=\"width: 50%; height: 22px;\"><span style=\"font-size: 10pt;\">YYYY-MM-DD</span></td>\n                    </tr>\n                    <tr style=\"height: 22px;\">\n                        <th style=\"width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;\"><span style=\"font-size: 10pt;\">End date</span></th>\n                        <td style=\"width: 50%; height: 22px;\"><span style=\"font-size: 10pt;\">YYYY-MM-DD</span></td>\n                    </tr>\n                    <tr style=\"height: 22px;\">\n                        <th style=\"width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;\"><span style=\"font-size: 10pt;\">Team</span></th>\n                        <td style=\"width: 50%; height: 22px;\"><span style=\"font-size: 10pt;\">Team name</span></td>\n                    </tr>\n                </tbody>\n            </table>\n            <h2>Project content</h2>\n            <p>Continue writing your project documentations here</p>\n        ",
    meeting_minutes: "\n            <h1>Meeting minutes</h1>\n            <table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\n                <tbody>\n                    <tr style=\"height: 22px;\">\n                        <th style=\"width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;\"><span style=\"font-size: 10pt;\">Project</span></th>\n                        <td style=\"width: 50%; height: 22px;\"><span style=\"font-size: 10pt;\">Firstname Lastname</span></td>\n                    </tr>\n                    <tr style=\"height: 22px;\">\n                        <th style=\"width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;\"><span style=\"font-size: 10pt;\">Date</span></th>\n                        <td style=\"width: 50%; height: 22px;\"><span style=\"font-size: 10pt;\">YYYY-MM-DD</span></td>\n                    </tr>\n                </tbody>\n            </table>\n            <h2>Participants</h2>\n            <ul>\n                <li>Participant 1</li>\n                <li>Participant 2</li>\n            </ul>\n            <h2>Agenda</h2>\n            <p>The following topics were discussed during the meeting</p>\n            <h3>Topic 1</h3>\n            <p>Topic description</p>\n            <h2>Action points</h2>\n            <ul>\n                <li>Action item 1</li>\n                <li>Action item 2</li>\n            </ul>\n        ",
    replacement_value_example: "\n            <h1>Test report</h1>\n            <p><span style=\"background-color: #fbeeb8;\">The values in the table is dynamically generated using the template plugin replacement values</span></p>\n            <table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\n                <tbody>\n                    <tr style=\"height: 22px;\">\n                        <th style=\"width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;\"><span style=\"font-size: 10pt;\">Test subject</span></th>\n                        <td style=\"width: 50%; height: 22px;\"><span style=\"font-size: 10pt;\">{$username}</span></td>\n                    </tr>\n                    <tr style=\"height: 22px;\">\n                        <th style=\"width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;\"><span style=\"font-size: 10pt;\">Date</span></th>\n                        <td style=\"width: 50%; height: 22px;\"><span style=\"font-size: 10pt;\" class=\"cdate\">date</span></td>\n                    </tr>\n                    <tr style=\"height: 22px;\">\n                        <th style=\"width: 50%; height: 22px; text-align: left; background-color: #ecf0f1;\"><span style=\"font-size: 10pt;\">ID</span></th>\n                        <td style=\"width: 50%; height: 22px;\"><span style=\"font-size: 10pt;\">{$userid}</span></td>\n                    </tr>\n                </tbody>\n            </table>\n            <h2>Test result</h2>\n            <p>Enter test results here</p>\n        ",
    blank_template: ""
  };
  return {
    selector: "textarea.t6",
    // The template plugin is needed to use the replace values feature
    // to make dynamic templates (though there is many ways to achieve
    // dynamic templates.).
    // Tip! To make TinyMCE leaner, only include the plugins you actually need
    plugins: "link,lists,code,visualblocks,table,hr,image,template",
    // Nothing special about the toolbar in this demo.
    toolbar: "undo redo | styleselect | bold italic strikethrough backcolor | bullist numlist link image hr | code",
    // Tip! The height option accepts any valid CSS for height
    height: "calc(100vh - 4rem)",
    // The template plugin allows inserting variables inside a template which is
    // then replaced with these values upon insertion. This is one way to
    // achieve dynamic templates. Another way would be to generate the whole template
    // dynamically upon request in case the template_replace_values can be removed.
    // https://www.tiny.cloud/docs/plugins/template/#template_replace_values
    template_replace_values: {
      username: "Jack Black",
      userid: "991234-22"
    },
    // A simple way to get dates into the templates is using the creation date feature
    // of the template plugin.
    // https://www.tiny.cloud/docs/plugins/template/#template_cdate_classes
    template_cdate_classes: "cdate creationdate",
    setup: function setup(editor) {
      // This is where we define our placeholder. It can be any HTMl.
      // The content is actually being inserted into the editor, but
      // is filtered out on save/export to avoid it being submitted to
      // the backend.
      // Each button also has content editable false to make the button
      // clickable.
      // Please have a look at the CSS below as it's a big part of the
      // UI as well.
      // Notice also that we're not using any javascript inside the content
      // to avoid XSS vulnerability issues. Instead each button is identified
      // using an id.
      editor.on("init", function () {
        editor.setContent("\n                    <div id=\"placeholder\">\n                        <h1>Document Title</h1>\n                        <p>Start a new blank document or insert a template below</p>\n                        <button type=\"button\" id=\"project_description\" contenteditable=\"false\" class=\"doc\">Project Description</button>\n                        <button type=\"button\" id=\"meeting_minutes\" contenteditable=\"false\" class=\"doc\">Meeting minutes</button>\n                        <button type=\"button\" id=\"replacement_value_example\" contenteditable=\"false\" class=\"doc\">Replacements value example</button>\n                        <button type=\"button\" id=\"blank_template\" contenteditable=\"false\" class=\"new-doc\">Empty page</button>\n                        <button type=\"button\" id=\"manage_templates\" contenteditable=\"false\" class=\"manage\">Manage templates</button>\n                    </div>\n                ");
      }); // When the editor is clicked we monitor what is being clicked and
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
    content_style: "\n            body {\n                max-width: 720px;\n                margin: 2rem auto;\n            }\n\n            #placeholder {\n                color: #aaa;\n                display: flex;\n                flex-direction: column;\n                min-height: calc(100vh - 4rem);\n                -webkit-user-select: none; /* Prevent any selections on the element */\n                user-select: none;\n            }\n\n            #placeholder * {\n                -webkit-user-select: none; /* Prevent any selections on the element */\n                user-select: none;\n            }\n\n            #placeholder h1 {\n                margin: 0;\n            }\n\n            #placeholder button {\n                -webkit-appearance: none;\n                background: url('images/template-icon-document.png') .25rem center no-repeat transparent;\n                background-size: 20px 20px;\n                border-radius: .25rem;\n                border: none;\n                color: #aaa;\n                cursor: default;\n                display: block;\n                font-family: inherit;\n                font-size: 1rem;\n                margin: .15rem -.25rem;\n                outline: none;\n                padding: .35rem .35rem .35rem calc(.5rem + 20px);\n                text-align: left;\n                transition: background-color .2s;\n            }\n\n            #placeholder button:hover {\n                background-color: #f4f4f4;\n            }\n\n            #placeholder button.new-doc {\n                background-image: url('images/template-icon-new-document.png');\n            }\n\n            #placeholder button.manage {\n                background-image: url('images/template-icon-manage.png');\n            }\n        "
  };
})();