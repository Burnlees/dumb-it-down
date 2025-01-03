# Dumb it Down

**Dumb it Down** is a web app designed to simplify complex written content (such as contracts, terms and conditions, and technical documents) into an easy-to-understand version for the general public. The app leverages AI models like ChatGPT to automatically simplify text, making it accessible for everyone.

## Deployed Version

You can try out the live version of _Dumb it Down_ here:  
[**Dumb it Down - Live**](https://dumb-it-down.vercel.app/)

## Installation

To run the project locally using **Bun**, follow these steps:

### Prerequisites

- [Bun](https://bun.sh/) (version 1.0 or higher)
- [PostgreSQL](https://www.postgresql.org/) (if you're using Postgres)

### Steps

1. Clone the repository:
    
    ```bash
    git clone https://github.com/burnlees/dumb-it-down.git
    ```
    
2. Navigate into the project directory:
    
    ```bash
    cd dumb-it-down
    ```
    
3. Install the dependencies using Bun:
    
    ```bash
    bun install
    ```
    
4. Set up environment variables as per the example in the `.env.example` file in the repository.
    
5. Run the application locally:
    
    ```bash
    bun dev
    ```
    
6. Open your browser and go to `http://localhost:3000` to view the app.
    

## Technologies Used

- **Next.js**
- **TailwindCSS**
- **Drizzle**
- **Postgres**
- **Zod**
- **OpenAI SDK**

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://chatgpt.com/c/LICENSE) file for details.
