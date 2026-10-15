# Judge sweep currency

The default `--currency context-or-item` preserves existing judgment currency: a configured-model verdict is reusable when its frozen context matches, or when its target item bytes are unchanged. This remains the default for ordinary sweeps and level coverage.

Certified Step5 waves use `--currency exact-context`. A verdict must match both the target item hash and frozen context hash, as required by the Step5 round receipt. Changing a supplied sibling/dependency interface can therefore require a new judgment even when the target proof itself is unchanged. The shared verdictIsCurrent predicate implements both policies; selection must use the same policy as its downstream receipt.

Step5 passes this mode explicitly to the native sweep. On native retry, completed exact-context calls are preserved and only still-owed judgments are invoked. judge.mts has no internal verdict-cache skip: once selected, it constructs the current prompt and makes the configured call. Existing attempts, contexts, verdicts, effort, lineup and frozen receipts remain untouched; the new result is appended normally.
