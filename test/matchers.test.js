describe('Comparadores comunes', () => {
    const user = {
        name: "adriana",
        lastname: "montes"
    }
    const user2 = {
        name: "adriana",
        lastname: "montes"
    }
    
        test('igualdad de elementos', () => {
            expect(user).toEqual(user2);
        });
        test('no son exactamente iguales', () => {
            expect(user).not.toEqual(user2);
        });

});