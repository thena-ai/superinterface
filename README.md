# @superinterface/react

A comprehensive React component library for building AI-powered chat interfaces and interactive threads.

## Installation

```bash
npm install @superinterface/react
# or
yarn add @superinterface/react
# or
pnpm add @superinterface/react
```

## Core Components

### SuperinterfaceProvider

The root provider component that must wrap your application to enable Superinterface functionality.

```jsx
import { SuperinterfaceProvider } from '@superinterface/react';

function App() {
  return (
    <SuperinterfaceProvider>
      {/* Your app content */}
    </SuperinterfaceProvider>
  );
}
```

### Thread Components

#### Thread
The main component for displaying a chat thread.

```jsx
import { Thread } from '@superinterface/react';

function ChatComponent() {
  return <Thread />;
}
```

#### ThreadDialog
A modal dialog version of the Thread component.

```jsx
import { ThreadDialog } from '@superinterface/react';

function ChatDialogComponent() {
  return <ThreadDialog />;
}
```

### Audio Components

#### AudioThread
A specialized thread component for audio-based interactions.

```jsx
import { AudioThread } from '@superinterface/react';

function AudioChatComponent() {
  return <AudioThread />;
}
```

#### AudioThreadDialog
A modal dialog version of the AudioThread component.

### Message Components

#### MessageContent
Renders the content of a message with support for various content types.

```jsx
import { MessageContent } from '@superinterface/react';

function Message({ content }) {
  return <MessageContent content={content} />;
}
```

### UI Components

#### Avatar
A versatile avatar component used for both user and assistant avatars.

```jsx
import { Avatar } from '@superinterface/react';

function UserAvatar() {
  return <Avatar src="path/to/avatar.png" />;
}
```

#### Suggestions
Displays suggestion chips or options to the user.

```jsx
import { Suggestions } from '@superinterface/react';

function SuggestionsComponent({ suggestions }) {
  return <Suggestions items={suggestions} />;
}
```

## Hooks

### Message Hooks

- `useMessages`: Fetch and manage messages in a thread
- `useMessageContext`: Access the current message context
- `useLatestMessage`: Get the most recent message
- `useCreateMessage`: Create new messages
- `useIsMutatingMessage`: Track message mutation status

### Thread Hooks

- `useThreadContext`: Access the current thread context
- `useThreadDialogContext`: Access the thread dialog context
- `useAudioThreadContext`: Access the audio thread context

### Assistant Hooks

- `useAssistant`: Access and manage assistant state
- `useTtsAudioRuntime`: Manage text-to-speech functionality
- `useWebrtcAudioRuntime`: Manage WebRTC audio functionality

### Component Hooks

- `useComponents`: Access custom component overrides
- `useMarkdownContext`: Access markdown rendering context

## Context Providers

### Core Providers

- `ComponentsProvider`: Provide custom component overrides
- `MarkdownProvider`: Configure markdown rendering
- `AssistantProvider`: Provide assistant configuration

### Audio Providers

- `TtsAudioRuntimeProvider`: Provide text-to-speech functionality
- `WebrtcAudioRuntimeProvider`: Provide WebRTC audio functionality

### UI Context Providers

- `AssistantAvatarContext`: Configure assistant avatar
- `AssistantNameContext`: Configure assistant name
- `UserAvatarContext`: Configure user avatar
- `FunctionComponentsContext`: Configure function UI components

## Function Components

### FunctionBase
Base component for rendering function calls and their results.

```jsx
import { FunctionBase } from '@superinterface/react';

function CustomFunction({ data }) {
  return <FunctionBase data={data} />;
}
```

## Utility Components

### RunStep
Displays the status and output of a running step or command.

```jsx
import { RunStep } from '@superinterface/react';

function StepComponent({ step }) {
  return <RunStep step={step} />;
}
```

### SourceAnnotation
Renders source annotations for referenced content.

```jsx
import { SourceAnnotation } from '@superinterface/react';

function AnnotatedContent({ source }) {
  return <SourceAnnotation source={source} />;
}
```

## Best Practices

1. Always wrap your application with `SuperinterfaceProvider`
2. Use the appropriate context providers based on your needs
3. Leverage hooks for managing state and interactions
4. Use the provided UI components for consistent styling
5. Implement custom components through the `ComponentsProvider` when needed

## TypeScript Support

This package includes TypeScript definitions. All components and hooks are fully typed for better development experience.

## Requirements

- React 18 or higher
- TypeScript 4.5 or higher (for TypeScript users)

## License

ISC License
