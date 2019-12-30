function call 會依序在 stack 執行，非同步的東西會先進入 web api 等到可以執行時，會依序在 Queue 排隊等 event loop 發現後丟到 stack 執行
