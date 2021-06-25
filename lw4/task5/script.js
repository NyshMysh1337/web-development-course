const Cashbox = {
  amount: 0,
  operationHistory: [],
  addPayment: function (payment) {
    if (typeof payment.amount !== "number" || payment.info === "") {
      return false;
    }
    if (payment.amount < 0) {
      console.log("amount not affected");
      return;
    }
    this.amount += payment.amount;
    this.operationHistory.push({
      date: new Date().toLocaleString(),
      message: "платёж на " + payment.amount + " руб",
      operation: payment.info
    });
  },
  refundPayment: function (refund) {
    if (typeof refund.amount !== "number" || refund.info === "") {
      return false;
    }
    if (refund.amount > this.amount) {
      console.log("amount not affected");
      return;
    }
    this.amount -= refund.amount;
    this.operationHistory.push({
      date: new Date().toLocaleString(),
      message: "возврат " + refund.amount + " руб",
      operation: refund.info
    });
  },
  showHistory: function () {
    this.operationHistory.forEach(function (history, index) {
      console.log(
        index +
        1 +
        ". " +
        history.date +
        " - " +
        history.message +
        ", операция: " +
        history.operation
      );
    });
  }
};
