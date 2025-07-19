# Memory Module

This module manages the message history for the AI agent, persisting messages in a local JSON database (`db.json`). It provides functions to add, retrieve, and clear messages, as well as to save tool responses.

## Features

- **Add Metadata:** Each message is stored with a unique ID and timestamp.
- **Add Messages:** Add one or more messages to the database.
- **Get Messages:** Retrieve all messages, stripping out metadata.
- **Save Tool Response:** Store responses from tools with the appropriate role and tool call ID.
- **Clear Messages:** Remove all messages, or keep only the last N.

## API

- `addMessages(messages: AIMessage[])`: Adds messages to the database with metadata.
- `getMessages()`: Retrieves all messages, removing metadata.
- `saveToolResponse(toolCallId: string, toolResponse: string)`: Saves a tool's response as a message.
- `clearMessages(keepLast?: number)`: Clears all messages, or keeps the last N.

## Storage

Messages are stored in `db.json` in the project root using [lowdb](https://github.com/typicode/lowdb).

## Types

- `AIMessage`: The base message type (imported from `../types`).
- `MessageWithMetadata`: Extends `AIMessage` with `id` and `createdAt`.

---
```// filepath: src/memory.ts

# Memory Module

This module manages the message history for the AI agent, persisting messages in a local JSON database (`db.json`). It provides functions to add, retrieve, and clear messages, as well as to save tool responses.

## Features

- **Add Metadata:** Each message is stored with a unique ID and timestamp.
- **Add Messages:** Add one or more messages to the database.
- **Get Messages:** Retrieve all messages, stripping out metadata.
- **Save Tool Response:** Store responses from tools with the appropriate role and tool call ID.
- **Clear Messages:** Remove all messages, or keep only the last N.

## API

- `addMessages(messages: AIMessage[])`: Adds messages to the database with metadata.
- `getMessages()`: Retrieves all messages, removing metadata.
- `saveToolResponse(toolCallId: string, toolResponse: string)`: Saves a tool's response as a message.
- `clearMessages(keepLast?: number)`: Clears all messages,