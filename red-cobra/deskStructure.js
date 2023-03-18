export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(S.editor().id('siteSettings').schemaType('siteSettings').documentId('siteSettings')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings'].includes(listItem.getId())
      ),
    ])
