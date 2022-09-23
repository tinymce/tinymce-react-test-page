(function () {
  return {
    autocorrect_autocorrect: true,
    autocorrect_capitalize: true,
    plugins: "advlist autolink autocorrect footnotes mergetags lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",
    height: 600,
    toolbar:
      "insertfile undo redo | styles | bold italic | wordcount | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | footnotes footnotesupdate | table help",
    mergetags_prefix: '${',
    mergetags_suffix: '}',
    mergetags_list: [
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
    ],
    mobile: {
      theme: "silver",
      plugins: "casechange link image lists advlist anchor code codesample preview table textpattern help wordcount",
      toolbar:
        " casechange bold italic underline strikethrough | wordcount numlist bullist | h1 h2 h3 | table preview code codesample help",
      contextmenu: "link image table preview",
    },
  };
})();