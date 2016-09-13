describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should be able to add numbers as well as strings', function() {
    set.add(4);
    expect(set.contains(4)).to.equal(true);
  });

  it('should be able to add arrays as inputs', function() {
    set.add([1,2,3]);
    expect(set.contains([1,2,3])).to.equal(true);
  });

  it('should be able to add objects as inputs', function() {
    set.add({1 : "a"});
    expect(set.contains({1 : "a"})).to.equal(true);
  });

  it('should be able to remove arrays as inputs', function() {
    set.add("Hello");
    set.add([2,4,6]);
    set.remove([2,4,6]);
    set.add("Hi")
    expect(set._storage).to.equal('"Hello""Hi"');
  });

  it('should be able to remove objects as inputs', function() {
    set.add("Hello");
    set.add({2 : "b"});
    set.add("Hi")
    set.remove({2 : "b"});
    expect(set._storage).to.equal('"Hello""Hi"');
  });
});
