//testing basico 
function suma(a, b) {
    return a + b;
  }

test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
  });