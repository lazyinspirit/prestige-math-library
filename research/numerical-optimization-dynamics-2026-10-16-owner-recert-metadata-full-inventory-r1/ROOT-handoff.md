# Complete native metadata comparison inventory

Read-only inventory covers all2035 current items across107 manifests and214 pages. It uses `loadStep3`, `dependencyLevels`, the renderer YAML parser from `pathway-lib`, and the exact source metadata comparison semantics of `owner-gate-supervision.mjs`. It does not invoke recertification, hashing, itemHash, formatting, tests or gates.

Exactly two differences, both title fields in batch100:

- `lem-ctrl1-control-box-is-weakly-closed`: current source title is `Under Countable Choice, pointwise compact convex control constraints are weakly closed in L2`.
- `lem-ctrl1-lqr-cost-is-weakly-lower-semicontinuous`: current source title is `Under Countable Choice, the LQR objective is weakly lower semicontinuous`.

`concise-operations.json` contains the two exact manifest coordinates and before/after titles. `inventory-and-operations.json` records every item comparison and graph errors, plus full source/manifest row and byte guards. Only these two title mirrors are proposed. All other checked source fields match; the native dependency graph reported no errors. No source, claim, status, dependency, level, native step, score or risk change is proposed.

Batches1,33,77 remain wholly frozen; their metadata comparison has no discrepancies and there is no operation for them. No canonical file was written. Root owns application, refreshed current guards, actual affected input closure binding and recertification.
