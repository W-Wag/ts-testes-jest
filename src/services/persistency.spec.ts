describe('Testando alguma coisa', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Testando outra coisa', () => {
  test('should return Luiz', () => {
    const nome = 'Luiz';
    expect(nome).toBe('Luiz');
  });
});
