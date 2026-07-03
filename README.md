# Short Polling

Short polling is a technique used to achieve **near real-time communication** between a client and a server.

It is useful when the server has data that changes independently of the client's actions, but the client still needs to keep its UI updated.

Instead of the server pushing updates, the **client repeatedly sends requests at fixed intervals**, essentially asking:

> "Is my data ready?"

The server responds to each request with the latest available data, regardless of whether the data has changed.

---

## How Short Polling Works

1. The client sends a request to the server.
2. The server responds with the current data.
3. The client waits for a fixed interval (for example, every 2 or 5 seconds).
4. The client sends another request.
5. The process repeats continuously.

---

## Architecture

<img width="985" height="787" alt="image" src="https://github.com/user-attachments/assets/34872442-32f0-43a9-aa7d-fec5d2d86f97" />

---

## Flow

```text
Client                     Server
   |                          |
   |---- GET /data ---------> |
   |<----- Latest Data -------|
   |                          |
   | (wait 2 seconds)         |
   |---- GET /data ---------> |
   |<----- Latest Data -------|
   |                          |
   | (repeat...)              |
```

---

## Use Cases

Short polling is commonly used for:

- News feeds
- Admin dashboards
- Analytics dashboards

---

## When Should You Use Short Polling?

Short polling is a good choice when:

- Data changes frequently.
- Near real-time updates are sufficient.
- A slight delay (based on the polling interval) is acceptable.

---

## Example Scenario

Imagine an admin dashboard displaying the number of active users.

- The client sends a request every **3 seconds**.
- The server returns the latest active user count.
- Even if the count hasn't changed, the server still responds.
- The dashboard stays updated without requiring the user to refresh the page.
