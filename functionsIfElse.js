var creditCheck = function(income) {
    if (income>=100) {
        return "You earn a lot of money! You qualify for a credit card.";
    }
    else (income<100); {
        return "Alas you do not qualify for a credit card. Capitalism is cruel like that.";
    }
};

creditCheck(100);