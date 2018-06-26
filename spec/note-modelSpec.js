(function(exports) {
  function storesNoteTest() {
    var note = new Note("My favourite language is JavaScript")
    result = note.text();
    assert.isTrue(result == "My favourite language is JavaScript")
  };
  exports.storesNoteTest = storesNoteTest;
  storesNoteTest();
})(this);
