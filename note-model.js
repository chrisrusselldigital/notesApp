
(function(exports){
  function Note(note) {
    this.note = note
  };

  Note.prototype.text = function() {
    return this.note;
  };
  exports.Note = Note;
})(this);
