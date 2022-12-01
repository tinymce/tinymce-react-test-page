(function () {
  return {
    plugins: "typography inlinecss quickbars advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help",
    toolbar_mode: "sliding", // 'floating', 'sliding', 'scrolling', or 'wrap'
    toolbar_sticky: true,
    toolbar_location: "bottom", //top, bottom
    toolbar:
        "typography insertfile undo redo | styles | bold italic | permanentpen | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | table help",
    quickbars_insert_toolbar:
        "quicktable quickimage quicklink styles ",
    quickbars_selection_toolbar:
        "bold italic | h2 h3 | blockquote | code| forecolor backcolor | quicktable quickimage | styles ",
};
})();