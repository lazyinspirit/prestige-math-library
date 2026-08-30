# frontier-25 reader-10 report

Date: 2026-08-30
Batch: `10`
Run: `frontier-25`

## Opened scope

- Reader instructions: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-25-reader.task.md`, and `research/frontier-25-dispatch/reader-reader-10.prompt.md`
- Build state: `.autopilot/state.json` and `node tools/autopilot/bin/autopilot.mts status`
- Batch artifacts: `research/frontier-25-batch-10.pages.json`, `research/frontier-25-batch-10.coverage.json`, `research/frontier-25-batch-10.proof-contracts.json`, and `research/frontier-25-batch-10.notes.md`
- Assigned pages:
  - `library/computability-theory/nondeterministic-finite-automata-and-subset-construction.md`
  - `library/computability-theory/nondeterministic-finite-automata-and-subset-construction-examples.md`
  - `library/computability-theory/pushdown-automata-and-context-free-languages.md`
  - `library/computability-theory/pushdown-automata-and-context-free-languages-examples.md`
- Assigned items: all 38 item files named in `research/frontier-25-batch-10.pages.json`
- Dependency items opened for verification:
  - `def-deterministic-finite-automaton`
  - `def-dfa-acceptance-and-recognized-language`
  - `def-regular-language-by-dfa-recognition`
  - `def-language-over-an-alphabet`
  - `def-language-boolean-operations`
  - `def-language-concatenation-powers-and-kleene-star`
  - `def-power-set`
  - `def-subset-and-proper-subset`
  - `def-computation-alphabet-and-word-convention`
  - `def-function`
  - `def-context-free-grammar`
  - `def-language-generated-by-a-cfg`
  - `def-leftmost-and-rightmost-derivation`
  - `def-ambiguity-and-inherent-ambiguity`
  - `def-finite-cardinality`

## Confirmed repairs

1. `items/ex-subset-construction-can-require-exponentially-many-states.md`
   - Confirmed two concrete computation defects on the current bytes.
   - Step `1.1` used the sample word `101`, whose second symbol from the end is `0`, so it does not witness the intended accepting branch.
   - Step `2.1` listed `\varnothing` as reachable and omitted the actually reachable subset `\{q_0,q_1,q_2\}`; with the stated looping start state, the empty subset is not reachable.
   - Repair: changed the witness word to `010`, corrected the reachable-subset list to `\{q_0\}`, `\{q_0,q_1\}`, `\{q_0,q_2\}`, and `\{q_0,q_1,q_2\}`, and rewrote the distinguishing-suffix sentence accordingly.

2. `research/frontier-25-batch-10.proof-contracts.json`
   - Regenerated the contract entry for `ex-subset-construction-can-require-exponentially-many-states` after the item repair so the stored derivations and boundary text match the current disk bytes.

No stale `verification.judge` record was present on the repaired in-flight item, so no judge removal was needed.

## Remaining editable defect

1. `items/prop-deterministic-cfls-are-closed-under-complement.md`
   - The current proof body at steps `1.1` through `3.1` relies on two substantial machine transformations, "Kozen's endmarker repair" and the "spurious-loop repair", but the facts block cites only `[[def-deterministic-pda]]`.
   - After rereading the current dependency closure, I did not find a local theorem or definition on disk that licenses those constructions, and the present item does not derive them in enough detail to close the gap immediately.
   - I left this as an in-flight batch-local proof-sufficiency defect rather than fabricating a repair from a source summary.

## Page verdicts

- `nondeterministic-finite-automata-and-subset-construction`: pass.
- `nondeterministic-finite-automata-and-subset-construction-examples`: pass after the reachable-subset repair in `ex-subset-construction-can-require-exponentially-many-states`.
- `pushdown-automata-and-context-free-languages`: needs follow-up because `prop-deterministic-cfls-are-closed-under-complement` is still under-justified on the current bytes.
- `pushdown-automata-and-context-free-languages-examples`: pass on the current item bodies; I did not confirm a separate defect there.

## Uneditable defects

None confirmed in the opened dependency closure.

## Blockers

None external. The only remaining issue I confirmed is the editable proof-sufficiency defect noted above.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-subset-construction-can-require-exponentially-many-states.md`
  - Result: unchanged; the edited item was already in canonical single-line proof format.
- `node tools/regen-contract-entries.mjs research/frontier-25-batch-10.proof-contracts.json ex-subset-construction-can-require-exponentially-many-states`
  - Result: regenerated the affected contract entry.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-subset-construction-can-require-exponentially-many-states.md`
  - Result: pass, `1 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts $(jq -r '.scope[] | "items/" + . + ".md"' research/frontier-25-batch-10.proof-contracts.json)`
  - Result: pass, `27 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-25-batch-10.proof-contracts.json --strict`
  - Result: pass, `27/27 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-25-batch-10.proof-contracts.json --fail-on-missing-quote`
  - Result: pass; no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-25-batch-10.proof-contracts.json --fail-on-contradicted`
  - Result: pass; no contradicted boundary dispositions.
- `node tools/rendercheck.mjs items/ex-subset-construction-can-require-exponentially-many-states.md library/computability-theory/nondeterministic-finite-automata-and-subset-construction-examples.md`
  - Result: pass, `OK — 2 file(s)`.
- `node tools/content-policy.mjs research/frontier-25-batch-10.pages.json`
  - Result: pass, `38 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/ex-subset-construction-can-require-exponentially-many-states.md research/frontier-25-batch-10.proof-contracts.json research/frontier-25-reader-10.md research/frontier-25-reader-findings-10.json library/computability-theory/nondeterministic-finite-automata-and-subset-construction-examples.md library/computability-theory/nondeterministic-finite-automata-and-subset-construction.md library/computability-theory/pushdown-automata-and-context-free-languages.md library/computability-theory/pushdown-automata-and-context-free-languages-examples.md`
  - Result: pass.
