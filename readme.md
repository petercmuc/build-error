# Build Error App

Demonstrates inconsistent build behaviour: 
With invalid import statement the first build succeeds, the second one fails.

## How to
First, build the app - which should work fine:

```bash
npm ci
npm run build
```

Then, in app-root.tsx change the import path of MyType to something non-existent like

```bash
import { MyType } from './../../types/myType';
```

and run:

```bash
npm run build
```

result: no error is shown in console.
A second execution fails the build

```bash
npm run build
```


```
[ ERROR ]  TypeScript: src/components.d.ts:18:24
           Cannot find name 'MyType'.
```
