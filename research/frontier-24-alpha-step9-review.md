# Step 9 scope-denial delta review — frontier-24

On Sunday, August 30, 2026, I reviewed the 3 pending rows in
`research/frontier-24-step9-scope-delta.json` against the current plan,
coverage, authored pages, and cited-source harvest notes.

| Group | Batch | Page | Result | Step 9 decision | Evidence |
|---|---:|---|---|---|---|
| `a` | 1 | `noether-normalisation-and-nullstellensatz` | Milne Theorem 9.5 | `stands` | The live page and plan still keep only the exchange and tower-additivity consequences; the stronger finite-cardinality theorem remains harvested but unused as a separate bridge. |
| `a` | 1 | `noether-normalisation-and-nullstellensatz` | Altman-Kleiman Corollary (15.6) | `stands` | The current page still stays in the residue-field/Nullstellensatz/Jacobson lane, while the generator-count statement belongs to the later `krull-dimension-and-height-theorems` interface. |
| `c` | 5 | `bloch-schottky-and-picard` | Eremenko §7 Cartan generalization | `owner-decision` | The current page still records only the one-variable Picard/Nevanlinna agreement seam, and the live plan still has no exact later page/item for Cartan-Nevanlinna theory. |

No `frontier-24` defect-ledger row is currently open: `jq -c 'select(.run=="frontier-24" and .disposition=="open")' research/defect-ledger.jsonl` returned no rows. I therefore made no ledger-row close/defer edit. I re-rendered `research/DEFECT-LEDGER.md` on the current ledger bytes so the generated view stays current.

Checks run on Sunday, August 30, 2026:

- `node tools/scope-decisions.mjs refresh --run frontier-24 --all` -> groups `a/b/c/d` refreshed with `0` pending rows each.
- `node tools/scope-decisions.mjs check --run frontier-24` -> `29` current declines, `0` errors.
- `git diff --check` -> clean.

No blocker remains for this Step 9 scope review.
