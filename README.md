# KMS Test Ecommerce

## Test Credentials Setup

To run the tests locally, you need to set up your test credentials. Follow these steps:

1. Create a `cypress.env.json` file in the project root (if it doesn't exist)
2. Add your test credentials in the following format:
```json
{
  "TEST_USER_USERNAME": "your_test_username",
  "TEST_USER_PASSWORD": "your_test_password"
}
```

**Important Notes:**
- Never commit the `cypress.env.json` file to version control
- For CI/CD pipelines, set these environment variables using your CI platform's secure environment variables feature
- You can also set these variables via command line:
  ```bash
  cypress run --env TEST_USER_USERNAME=username,TEST_USER_PASSWORD=password
  ``` 