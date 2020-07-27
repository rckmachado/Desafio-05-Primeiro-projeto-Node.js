import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface createTransactionDTO {
  title: string;
  type: 'income' | 'outcome';
  value: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const allTransactions = this.transactions;

    const allIncomeTransactions = allTransactions
      .filter(transaction => transaction.type === 'income')
      .reduce((previousValue, currentValue) => {
        return previousValue + currentValue.value;
      }, 0);

    const allOutcomeTransactions = allTransactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce((previousValue, currentValue) => {
        return previousValue + currentValue.value;
      }, 0);

    const balance = {
      income: allIncomeTransactions,
      outcome: allOutcomeTransactions,
      total: allIncomeTransactions - allOutcomeTransactions,
    };

    return balance;
  }

  public create({ title, type, value }: createTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, type, value });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
