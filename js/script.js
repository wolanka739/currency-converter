{
    const welcome = () => {
        console.log("Cześć!");
    };

    const calculateResult = (amount, currency) => {
        const rateEur = 4.61;
        const rateUsd = 4.07;
        const rateGbp = 5.42;

        switch (currency) {
            case "eur":
                return amount * rateEur;

            case "usd":
                return amount * rateUsd;

            case "gbp":
                return amount * rateGbp;
        };
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const result = calculateResult(amountElement.value, currencyElement.value);

        updateResultText(result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        welcome();
    };

    init();
}