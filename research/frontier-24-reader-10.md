# frontier-24 reader-10 report

Date: Saturday, August 29, 2026.
Batch: `10`
Run: `frontier-24`

## Opened scope

- Control and instructions: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-24-reader.task.md`, and `research/frontier-24-dispatch/reader-reader-10.prompt.md`.
- Live run state: `.autopilot/state.json` and `.autopilot/status.md`.
- Batch artifacts: `research/frontier-24-batch-10.pages.json`, `research/frontier-24-batch-10.coverage.json`, `research/frontier-24-batch-10.notes.md`, `research/frontier-24-batch-10.proof-contracts.json`, and `research/frontier-24-splice-10.json`.
- Assigned pages:
  - `library/computability-theory/deterministic-finite-automata-and-regular-languages.md`
  - `library/computability-theory/deterministic-finite-automata-and-regular-languages-examples.md`
  - `library/computability-theory/context-free-grammars-and-normal-forms.md`
  - `library/computability-theory/context-free-grammars-and-normal-forms-examples.md`
- Assigned items: all `42` manifest item files named in `research/frontier-24-batch-10.pages.json` (`36` A-page items and `6` B-page items).
- Required page dependencies opened:
  - `library/computability-theory/formal-languages-encodings-and-decision-problems.md`
  - `library/combinatorics/finite-counting-and-binomial-coefficients.md`
  - `library/combinatorics/ramsey-theory.md`
- Direct dependency items opened for verification:
  - `def-computation-alphabet-and-word-convention`
  - `def-function`
  - `def-finite-cardinality`
  - `def-cartesian-product`
  - `def-language-over-an-alphabet`
  - `def-language-boolean-operations`
  - `def-prefix-automaton-for-a-finite-forbidden-factor-set`
  - `def-finite-words-factor-avoidance-and-prefix-states`
  - `def-relation-domain-range-and-field`
  - `def-parse-tree-and-yield`
  - `def-nullable-generating-and-reachable-variable`
  - `def-alphabet-homomorphism-and-induced-word-map`

## Edits kept

- `items/lem-gnf-substitution-step-preserves-language.md`
  - Repaired the proof so the substitution lemma no longer assumes the `B -> w_i` step occurs immediately after `A -> uBv`. The kept proof now handles the actual derivation shape with arbitrary surrounding-context rewrites between those two marked steps.
- `items/thm-greibach-normal-form.md`
  - Repaired the GNF proof route. The previous argument incorrectly claimed one forward pass on the ordered variables forces every production to become terminal-leading. The kept proof now uses the honest two-phase route: a forward pass to remove lower-index leaders and immediate left recursion, followed by a downward substitution sweep that also cleans the auxiliary variables.
- `research/frontier-24-batch-10.proof-contracts.json`
  - Regenerated the two repaired entries and corrected the stale degenerate-boundary evidence for `lem-gnf-substitution-step-preserves-language`.

The B-page bodies were left untouched.

## Confirmed defects repaired

1. `lem-gnf-substitution-step-preserves-language`
   - Confirmed a real proof defect: the old proof only handled adjacent two-step fragments `A -> uBv` then `B -> w_i`, but the general substitution lemma must also cover derivations where surrounding context is rewritten before the distinguished occurrence of `B` is expanded.
   - Repair: rewrote the proof to follow the actual derivation pattern used in the cited DePaul note and preserved both language inclusions honestly.

2. `thm-greibach-normal-form`
   - Confirmed a fatal proof defect: the old step `3.1` claimed that after processing each `A_i` once in increasing order, no production can still begin with a variable. That inference is false; productions of earlier variables can still begin with later variables and need a second substitution sweep.
   - Repair: replaced the one-pass argument by the forward-pass plus downward-substitution proof that matches the standard CNF-to-GNF construction.

3. `research/frontier-24-batch-10.proof-contracts.json`
   - Regenerated the repaired entries with `tools/regen-contract-entries.mjs` and fixed the one contradicted boundary row that still referred to the pre-repair step numbering.

No stale `verification.judge` record was present on either repaired in-flight item, so no judge removal was needed.

## Report-only drift outside edit scope

- `research/frontier-24-batch-10.pages.json`
  - The strategy text for `lem-gnf-substitution-step-preserves-language` still describes only the adjacent two-step compression, while the repaired proof now correctly allows intervening surrounding-context rewrites.
  - The strategy text for `thm-greibach-normal-form` still describes a single variable-order improvement pass, while the repaired item now uses a forward pass plus a downward cleanup sweep.

I left the batch manifest untouched because this dispatch is licensed to repair in-flight items and assigned A-page prose, not batch-manifest metadata.

## Page verdicts

- `deterministic-finite-automata-and-regular-languages`
  - Sufficient on the current bytes. I found no remaining title, statement, proof, citation, or boundary defect in the DFA page or its companion items after checking the dependency closure it uses.
- `deterministic-finite-automata-and-regular-languages-examples`
  - Sufficient on the current bytes. The examples and counterexample remain compatible with the A-page definitions and the repaired verification state.
- `context-free-grammars-and-normal-forms`
  - Sufficient on the current bytes after the two GNF-path repairs above. The derivation, CNF, closure, and ambiguity items now have an honest local route through the GNF block.
- `context-free-grammars-and-normal-forms-examples`
  - Sufficient on the current bytes. The examples remain compatible with the repaired A-page items.

## Uneditable defects

None confirmed in the opened dependency closure.

## Blockers

None.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-gnf-substitution-step-preserves-language.md items/thm-greibach-normal-form.md`
  - Result: both changed items are in canonical reflow on the final bytes.
- `node tools/regen-contract-entries.mjs research/frontier-24-batch-10.proof-contracts.json lem-gnf-substitution-step-preserves-language thm-greibach-normal-form`
  - Result: regenerated the 2 repaired proof-contract entries.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-gnf-substitution-step-preserves-language.md items/thm-greibach-normal-form.md`
  - Result: pass, `2 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts <full batch-10 item scope>`
  - Result: pass, `28 checked, 0 failing`.
- `node tools/coverage-checklist.mjs research/frontier-24-batch-10.coverage.json --require-destination`
  - Result: pass, `coverage-checklist: 2 page(s), 87 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-24-batch-10.proof-contracts.json --strict`
  - Result: pass, `proof-contract: 0 error(s), 0 warning(s), 28/28 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-24-batch-10.proof-contracts.json --fail-on-missing-quote`
  - Result: pass, `53 citation(s) over 28 authored item(s)` with no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-24-batch-10.proof-contracts.json --fail-on-contradicted`
  - Result: pass after the boundary-row repair; no contradicted dispositions remain. The tool still reports non-fatal template-reuse clusters on generic `iff` rationales.
- `node tools/rendercheck.mjs items/lem-gnf-substitution-step-preserves-language.md items/thm-greibach-normal-form.md library/computability-theory/deterministic-finite-automata-and-regular-languages.md library/computability-theory/deterministic-finite-automata-and-regular-languages-examples.md library/computability-theory/context-free-grammars-and-normal-forms.md library/computability-theory/context-free-grammars-and-normal-forms-examples.md`
  - Result: pass, `OK — 6 file(s)`.
- `node tools/content-policy.mjs research/frontier-24-batch-10.pages.json`
  - Result: pass, `content-policy: 42 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check`
  - Result: pass.
