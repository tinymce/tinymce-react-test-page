(function () {
  return {
    plugins: "advlist,autolink,lists,link,image,charmap,preview,anchor,searchreplace,visualblocks,code,fullscreen,insertdatetime,media,table,help,wordcount",
    height: 600,
    toolbar:
      "insertfile undo redo | styles | bold italic | wordcount| alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table help",
    mobile: {
      theme: "silver",
      plugins: [
        "casechange link image lists advlist anchor code codesample preview table textpattern help wordcount",
      ],
      toolbar:
        " casechange bold italic underline strikethrough | wordcount numlist bullist |h1 h2 h3 | table preview code codesample help",
      contextmenu: "link image table preview",
    },
  };
})();