# Step 9 scope-denial delta review — frontier-31a

Reviewed the 208 rows that were pending in `research/frontier-31a-step9-scope-delta.json`.  Each row was matched to its exact current coverage entry, source locator and fetch-verification record when source-backed, batch manifest, `research/plan-spec.json` page/closure interface, and live `library/<category>/<page>.md` page.  All 208 matched without a stale row, absent source entry, absent manifest, missing page, or missing planned destination.  The current Step-8 closure records one repaired item and zero needs-rejudge, unadjudicated, open-fatal, or escalation rows.

| Group | Pending reviewed | Stands | Owner decision |
|---|---:|---:|---:|
| a | 41 | 41 | 0 |
| b | 50 | 50 | 0 |
| c | 21 | 21 | 0 |
| d | 2 | 2 | 0 |
| e | 42 | 41 | 1 |
| f | 6 | 5 | 1 |
| g | 32 | 32 | 0 |
| h | 14 | 14 | 0 |
| **Total** | **208** | **206** | **2** |

The two owner decisions remain outside the licensed in-scope repair route:

- Batch 6’s requested nonmonogenic-number-field example has no fully sourced, complete proof for a named example; retaining the source obligation is preferable to adding an unsupported result.
- Batch 16’s omitted Cauchy–Kovalevskaya proof is an explicit recorded proof boundary. Adding its analytic power-series/majorant proof would alter the source/proof boundary and cannot be introduced as an ordinary scope reversal.

No decline was overturned into content. Therefore no manifest, coverage, contract, risk, splice, impact, page, dependency, or reading-order update was warranted. Concrete per-row source, closure, manifest, page, and destination evidence is recorded in the eight `frontier-31a-alpha-<group>-scope-decisions.json` artifacts.

Checks run:

- The record-level audit verified all 208 pending rows against their current coverage/source, manifest, plan, live page, and destination interfaces with zero mismatches.
- `node tools/scope-decisions.mjs refresh --run frontier-31a --all`
- `node tools/scope-decisions.mjs check --run frontier-31a --all` — 290 current declines, 0 errors.
- `node tools/defect-ledger.mjs validate --run frontier-31a` — 708 rows, 0 errors. There are no open, pending, or deferred run-ledger rows (658 fixed, 44 narrowed, 6 false-positive), so no ledger append/closure or consequent ledger render was needed.
