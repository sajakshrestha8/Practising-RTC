# Real-Time Communication (RTC)

Real-Time Communication (RTC) enables clients and servers to exchange data with minimal delay, allowing applications to stay synchronized without requiring users to manually refresh the page.

## Topics to Learn

- **Short Polling**

  - The client periodically sends requests to the server at fixed intervals to check for updates.

- **Long Polling**

  - The client sends a request, and the server keeps the connection open until new data is available or a timeout occurs.

- **Server-Sent Events (SSE)**

  - The server maintains a one-way connection to continuously push updates to the client over HTTP.

- **WebSockets**
  - Establishes a persistent, full-duplex connection, allowing both the client and server to send data to each other at any time.

## Goal

Understand:

- How each communication method works.
- Their advantages and disadvantages.
- When to use each approach.
- The trade-offs in terms of latency, scalability, and server resource usage.
