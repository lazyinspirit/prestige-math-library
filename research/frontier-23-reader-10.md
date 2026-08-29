# Frontier 23 — independent reader 10 report

Date: 2026-08-28  
Run: `frontier-23`  
Batch: `10`  
Role: `reader`

## Scope opened

- Task and run artifacts: `research/frontier-23-batch-10.pages.json`, `research/frontier-23-batch-10.coverage.json`, `research/frontier-23-batch-10.notes.md`, `research/frontier-23-batch-10.proof-contracts.json`, `research/frontier-23-dispatch/reader-reader-10.prompt.md`, and the live run state from `node tools/autopilot/bin/autopilot.mts status`.
- Page files: `library/computability-theory/formal-languages-encodings-and-decision-problems.md` and `library/computability-theory/formal-languages-encodings-and-decision-problems-examples.md`.
- Batch items: all 22 assigned item files on those two pages.
- Published dependency items opened directly while checking the current proofs and definitions: `def-finite-words-factor-avoidance-and-prefix-states`, `def-function`, `def-indexed-union-and-intersection`, `def-injection-surjection-bijection`, `def-subset-and-proper-subset`, and `def-the-set-of-functions-from-one-set-to-another`.

## Outcome

I read both assigned page summaries, all 22 assigned items, the current batch proof-contract file, and the published dependency items needed to verify the active claims. I found one real proof defect copied into two in-flight items: both witnesses for `e(w)=1w` claimed a total decoder but omitted the malformed-input branch for nonempty binary words beginning with `0`. I repaired both items and regenerated their proof-contract entries. I found no remaining uneditable defect in published content or outside the editable batch scope.

## Repaired defects

### R10-1 — `fs-every-effective-encoding-is-prefix-free` — fixed — nonfatal

**Location.** Refutation step 1.2 and the corresponding contract derivation entry.

**Defect.** The witness decoder was claimed to be total, but the text only defined it on words of the form `1w` and on the empty word. Nonempty malformed inputs beginning with `0` were left undefined, so the argument did not actually establish an effective encoding under the page's own definition.

**Repair.** Rewrote step 1.2 to define `d(x)=\mathtt{mal}` for every binary word not beginning with `1`, including the empty word, then reflowed the file, reran precheck, and regenerated the proof-contract entry.

### R10-2 — `cex-an-effective-encoding-need-not-be-prefix-free` — fixed — nonfatal

**Location.** Counterexample step 1.1 and the corresponding contract derivation entry.

**Defect.** The same total-decoder omission reappeared in the B-page counterexample: the malformed branch handled the empty word only, leaving nonempty words beginning with `0` outside the claimed total decoder.

**Repair.** Rewrote step 1.1 so the decoder strips the first bit from words beginning with `1` and sends every binary word not beginning with `1` to the malformed token, then reflowed the file, reran precheck, and regenerated the proof-contract entry.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/fs-every-effective-encoding-is-prefix-free.md items/cex-an-effective-encoding-need-not-be-prefix-free.md` — reflowed both changed items.
- `node tools/tsx-run.mjs tools/precheck.mts items/fs-every-effective-encoding-is-prefix-free.md items/cex-an-effective-encoding-need-not-be-prefix-free.md` — PASS, 2 checked, 0 failing.
- `node tools/regen-contract-entries.mjs research/frontier-23-batch-10.proof-contracts.json fs-every-effective-encoding-is-prefix-free cex-an-effective-encoding-need-not-be-prefix-free` — regenerated 2 entries.
- `node tools/proof-contract.mjs research/frontier-23-batch-10.proof-contracts.json --strict` — 0 errors, 0 warnings, 13/13 checked.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-10.proof-contracts.json --fail-on-missing-quote` — 22 citations, no missing quote or widening candidate.
- `node tools/boundary-audit.mjs research/frontier-23-batch-10.proof-contracts.json --fail-on-contradicted --fail-on-template` — no contradicted dispositions, no template cluster at threshold.
- `node tools/content-policy.mjs research/frontier-23-batch-10.pages.json` — 22 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — PASS, ended with `OK` and the standing repo-wide note that 781 planned pages still have no item list.
- `node tools/rendercheck.mjs items/fs-every-effective-encoding-is-prefix-free.md items/cex-an-effective-encoding-need-not-be-prefix-free.md` — OK.
- `git diff --check -- items/fs-every-effective-encoding-is-prefix-free.md items/cex-an-effective-encoding-need-not-be-prefix-free.md research/frontier-23-batch-10.proof-contracts.json research/frontier-23-reader-10.md research/frontier-23-reader-findings-10.json` — clean.

## Per-page verdicts

- `formal-languages-encodings-and-decision-problems` — pass after repair. The A-page mathematics is now internally consistent on the effective-encoding witness.
- `formal-languages-encodings-and-decision-problems-examples` — pass after repair. The B-page counterexample now matches the A-page definition of a total decoder.

## Blockers

None.
