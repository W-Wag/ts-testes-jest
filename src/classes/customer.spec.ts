import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};
const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('Individual Customer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Carlos', 'Jonas', '111.111.111-11');

    expect(sut).toHaveProperty('firstName', 'Carlos');
    expect(sut).toHaveProperty('lastName', 'Jonas');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });
  it('should have methods get name and idn', () => {
    const sut = createIndividualCustomer('Carlos', 'Jonas', '111.111.111-11');

    expect(sut.getName()).toBe('Carlos Jonas');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('Enterprise Customer', () => {
  it('should test properties name and cnpj', () => {
    const sut = createEnterpriseCustomer('Loja', '111.111.111/11');

    expect(sut).toHaveProperty('name', 'Loja');
    expect(sut).toHaveProperty('cnpj', '111.111.111/11');
  });

  it('should have methods get name and idn', () => {
    const sut = createEnterpriseCustomer('Loja', '111.111.111/11');

    expect(sut.getName()).toBe('Loja');
    expect(sut.getIDN()).toBe('111.111.111/11');
  });
});
