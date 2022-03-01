(function () {
  return {
    plugins: [
      "advtable", "autoresize", "anchor", "advlist", "autolink", "autosave", "charmap", "advcode", "codesample", "directionality", "emoticons", "fullscreen",
      "help", "image", "insertdatetime", "importcss", "link", "lists", "media", "nonbreaking", "pagebreak", "preview", "save", "searchreplace", "table",
      "template", "visualblocks", "visualchars", "wordcount", "casechange", "checklist", "powerpaste", "a11ychecker", "tinymcespellchecker", "tinydrive",
      "tableofcontents", "editimage", "mentions", "mediaembed", "permanentpen", "formatpainter", "pageembed", "linkchecker", "tinycomments", "export"
    ],
    // The toolbar_mode option will no-longer accept the false value in TinyMCE 6.0, which was retained for backwards compatibility with the toolbar_drawer option. Use 'wrap' instead to keep the same functionality as false.
    // toolbar_mode : Default Value: 'floating' / Possible Values: 'floating', 'sliding', 'scrolling', or 'wrap'
    toolbar_mode: 'sliding',
    toolbar_sticky: true,
    toolbar_location: 'top', //top, bottom
    toolbar_sticky_offset: 10,
    // Tiny Comments
    tinycomments_mode: 'embedded',
    tinycomments_author: 'qauser8@qa.com',
    tinycomments_author_name: 'SuperCoolQA',
    quickbars_insert_toolbar: 'quicktable quickimage quicklink styles',
    quickbars_selection_toolbar: 'bold italic | h2 h3 | blockquote | code| forecolor backcolor | quicktable quickimage | formatpainter pageembed permanentpen styles ',
    toolbar: "bold italic underline strikethrough subscript superscript | fontfamily fontsize | numlist bullist checklist | permanentpen formatpainter removeformat forecolor backcolor | blockquote nonbreaking hr pagebreak | casechange styles blocks lineheight | ltr rtl outdent indent | align alignleft aligncenter alignright alignjustify alignnone | h1 h2 h3 h4 h5 h6 h7 |" +
      "copy cut paste pastetext selectall remove newdocument wordcount searchreplace | undo redo | save cancel restoredraft | fullscreen print preview export code help | template insertdatetime codesample emoticons charmap | anchor link unlink image media pageembed insertfile | visualblocks visualchars a11ycheck | spellchecker language spellcheckdialog | tableofcontents tableofcontentsupdate | " +
      "table advtablerownumbering tableclass tablecellclass tablecellvalign tablecellborderwidth tablecellborderstyle tablecaption tablecellbackgroundcolor tablecellbordercolor tablerowheader tablecolheader",
    menubar: 'file edit insert view format table tools help',
    mobile: {
      theme: "silver",
      plugins: [
        "casechange link image lists advlist anchor code codesample preview table textpattern help autoresize wordcount",
      ],
      toolbar:
        " casechange bold italic underline strikethrough | wordcount numlist bullist | h1 h2 h3 | table preview code codesample help",
      contextmenu: "link image table preview",
    },
  };
})();