(function () {
  return {
    plugins: "typography inlinecss quickbars advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help",
    toolbar:
      "typography insertfile undo redo | styles | bold italic | permanentpen | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table help",
    quickbars_insert_toolbar:
      "quicktable quickimage quicklink styles ",
    quickbars_selection_toolbar:
      "bold italic | h2 h3 | blockquote | code| forecolor backcolor | quicktable quickimage | styles ",
    setup: function (editor) {
      editor.ui.registry.addContextToolbar("imagealignment", {
        predicate: function (node) {
          return node.nodeName.toLowerCase() === "img";
        },
        items: "alignleft aligncenter alignright | image",
        position: "node",
        scope: "node",
      });

      editor.ui.registry.addContextToolbar("textselection1", {
        predicate: function (node) {
          return !editor.selection.isCollapsed();
        },
        items: "blockquote | bold italic | removeformat",
        position: "selection",
        scope: "node",
      });
    },
    mobile: {
      theme: "silver",
      plugins: [
        "quickbars casechange lists advlist anchor code codesample preview table textpattern help",
      ],
      toolbar:
        " casechange bold italic underline strikethrough | formatpainter numlist bullist | h1 h2 h3 | table preview code codesample help",
      quickbars_insert_toolbar:
        "quicktable quickimage quicklink styles ",
      quickbars_selection_toolbar:
        "bold italic | forecolor backcolor | quicktable quickimage | styles ",
    },
  };
})();