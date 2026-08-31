# frontier-26 reader-6 report

Date: Sunday, August 30, 2026.
Run: `frontier-26`
Batch: `6`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `research/frontier-26-reader.task.md`, `research/frontier-26-beta-6.task.md`, `research/frontier-26-covers.json`, `research/frontier-26-step6-hash-6-pre.json`, and live run state via `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`.
- Batch artifacts: `research/frontier-26-batch-6.pages.json`, `research/frontier-26-batch-6.coverage.json`, `research/frontier-26-batch-6.notes.md`, and `research/frontier-26-batch-6.proof-contracts.json`.
- Design/spec inputs: `research/plan-category-theory-track.md` (MA-13 design block) and `research/plan-spec.json`.
- Assigned pages: `library/category-theory/strictification-and-mac-lanes-coherence-theorem.md` and `library/category-theory/strictification-and-mac-lanes-coherence-theorem-examples.md`.
- Assigned items: `def-canonical-morphism-between-parenthesised-words`, `rem-every-diagram-commutes-is-false-as-stated`, `def-the-category-of-binary-words`, `thm-the-category-of-binary-words-is-monoidal`, `def-the-category-of-right-module-endofunctors`, `thm-the-module-endofunctor-category-is-strict-monoidal`, `thm-mac-lane-strictification`, `rem-strictification-gives-equivalence-and-never-isomorphism`, `thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence`, `rem-the-choice-cost-of-strictification`, `thm-mac-lane-coherence-in-the-canonical-map-form`, `rem-the-exact-scope-of-the-coherence-statement`, `thm-unbracketed-tensor-strings-are-well-defined-expressions`, `thm-the-monoid-object-axioms-may-be-written-without-associators`, `thm-the-word-category-is-the-free-monoidal-category-on-one-generator`, `cor-coherence-follows-from-freeness`, `rem-the-history-of-the-coherence-theorem`, `fs-every-diagram-in-a-monoidal-category-commutes`, `fs-every-monoidal-category-is-isomorphic-to-a-strict-one`, `fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one`, `fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal`, `fs-strictification-requires-the-axiom-of-choice`, `ex-the-two-routes-around-the-pentagon-are-equal`, `ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product`, `ex-the-word-category-on-words-of-length-three`, `ex-strictification-of-a-cartesian-monoidal-category-computed`, `cex-two-formally-distinct-words-that-become-the-same-object`, and `ex-a-monoid-object-written-with-and-without-associators`.
- Dependency page opened for verification: `library/category-theory/monoidal-categories-and-monoidal-functors-examples.md`.
- Dependency items opened for verification: `def-parenthesised-tensor-word`, `def-monoidal-category`, `def-natural-transformation`, `def-category`, `def-functor-and-contravariant-functor`, `def-natural-isomorphism`, `def-strict-monoidal-category`, `def-monoidal-equivalence`, `thm-fully-faithful-split-essentially-surjective-characterises-equivalence`, `def-lax-strong-and-strict-monoidal-functor`, `def-monoid-object-and-comonoid-object-in-a-monoidal-category`, `def-skeletal-category-and-skeleton`, `rem-unbracketed-tensor-strings-are-not-yet-defined`, `rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified`, `rem-mac-lanes-original-conditions-and-what-became-of-them`, and `thm-a-category-with-finite-products-is-monoidal`.

## Design/spec check

- The MA-13 design block and `research/plan-spec.json` agree on A-page order `365.025`, B-page order `365.026`, companion pairing, and prerequisite `monoidal-categories-and-monoidal-functors-examples`.

## Confirmed defects and edits

1. Repaired `items/thm-mac-lane-coherence-in-the-canonical-map-form.md`.
   The statement and proof had been written as though the parenthesised words themselves were functors. I retitled the typed claim to the actual natural transformations `E_u\Rightarrow E_v` and adjusted the proof steps so the recursive maps and the final uniqueness claim are between evaluation functors rather than raw words.
2. Repaired `items/thm-the-word-category-is-the-free-monoidal-category-on-one-generator.md` and `items/cor-coherence-follows-from-freeness.md`.
   The corollary's old step `2.1` claimed that an arbitrary canonical comparison would itself define the same monoidal extension on `W`, which was not licensed by the opened dependencies. I strengthened the theorem statement to record the morphism action on equal-length words, added the missing `def-the-category-of-binary-words` dependency to the corollary, and rewrote the corollary to use the unique arrow in `W` plus the theorem's stated morphism rule directly.
3. Repaired `research/frontier-26-batch-6.proof-contracts.json`.
   The batch contract was out of sync with current disk across all 20 proof-bearing entries: `proof-contract --strict` initially reported 42 quote mismatches plus 2 omitted step-input rows. I regenerated every scoped proof-bearing entry from disk, then reran the corollary entry after its step-number repair. The contract now matches the current items and passes the strict and citation checks.

## Per-page verdicts

- `strictification-and-mac-lanes-coherence-theorem`: pass after the repairs above. The page summary, typed statements, scope boundaries, and current proof flow are coherent against the opened dependencies.
- `strictification-and-mac-lanes-coherence-theorem-examples`: pass. The pentagon, five-fold bracketing, length-three word-category, cartesian strictification, collapse counterexample, and monoid-object notation example all check against the repaired A-page claims and the opened prerequisites.

## Focused checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-the-word-category-is-the-free-monoidal-category-on-one-generator.md items/cor-coherence-follows-from-freeness.md items/thm-mac-lane-coherence-in-the-canonical-map-form.md`
  Result: reflowed the freeness theorem and corollary; coherence theorem unchanged.
- `node tools/regen-contract-entries.mjs research/frontier-26-batch-6.proof-contracts.json thm-the-category-of-binary-words-is-monoidal thm-the-module-endofunctor-category-is-strict-monoidal thm-mac-lane-strictification thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence thm-mac-lane-coherence-in-the-canonical-map-form thm-unbracketed-tensor-strings-are-well-defined-expressions thm-the-monoid-object-axioms-may-be-written-without-associators thm-the-word-category-is-the-free-monoidal-category-on-one-generator cor-coherence-follows-from-freeness fs-every-diagram-in-a-monoidal-category-commutes fs-every-monoidal-category-is-isomorphic-to-a-strict-one fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal fs-strictification-requires-the-axiom-of-choice ex-the-two-routes-around-the-pentagon-are-equal ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product ex-the-word-category-on-words-of-length-three ex-strictification-of-a-cartesian-monoidal-category-computed cex-two-formally-distinct-words-that-become-the-same-object ex-a-monoid-object-written-with-and-without-associators`
  Result: regenerated `20` entries; the later one-item rerun for `cor-coherence-follows-from-freeness` updated the final step numbering after the proof repair.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-the-word-category-is-the-free-monoidal-category-on-one-generator.md items/cor-coherence-follows-from-freeness.md items/thm-mac-lane-coherence-in-the-canonical-map-form.md`
  Result: `3 checked, 0 failing — all clean`.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-the-category-of-binary-words-is-monoidal.md items/thm-the-module-endofunctor-category-is-strict-monoidal.md items/thm-mac-lane-strictification.md items/thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence.md items/thm-mac-lane-coherence-in-the-canonical-map-form.md items/thm-unbracketed-tensor-strings-are-well-defined-expressions.md items/thm-the-monoid-object-axioms-may-be-written-without-associators.md items/thm-the-word-category-is-the-free-monoidal-category-on-one-generator.md items/cor-coherence-follows-from-freeness.md items/fs-every-diagram-in-a-monoidal-category-commutes.md items/fs-every-monoidal-category-is-isomorphic-to-a-strict-one.md items/fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one.md items/fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal.md items/fs-strictification-requires-the-axiom-of-choice.md items/ex-the-two-routes-around-the-pentagon-are-equal.md items/ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product.md items/ex-the-word-category-on-words-of-length-three.md items/ex-strictification-of-a-cartesian-monoidal-category-computed.md items/cex-two-formally-distinct-words-that-become-the-same-object.md items/ex-a-monoid-object-written-with-and-without-associators.md`
  Result: `20 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs library/category-theory/strictification-and-mac-lanes-coherence-theorem.md library/category-theory/strictification-and-mac-lanes-coherence-theorem-examples.md items/thm-the-word-category-is-the-free-monoidal-category-on-one-generator.md items/cor-coherence-follows-from-freeness.md items/thm-mac-lane-coherence-in-the-canonical-map-form.md`
  Result: pass on all `5` files.
- `node tools/proof-contract.mjs research/frontier-26-batch-6.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 20/20 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-26-batch-6.proof-contracts.json --fail-on-missing-quote`
  Result: `43` citations, no missing quotes, no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-26-batch-6.proof-contracts.json --fail-on-contradicted --fail-on-template`
  Result: no contradicted dispositions and no template reuse clusters.
- `node tools/risk-report.mjs research/frontier-26-batch-6.proof-contracts.json`
  Result: `0 error(s), 20 item(s) routed`; the freeness theorem remains the batch's critical-risk item by routing metadata, not by a surviving reader defect.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-6.coverage.json`
  Result: `1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-26-batch-6.pages.json`
  Result: `28 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/gate-liveness.mjs --run frontier-26 --contracts research/frontier-26-batch-6.proof-contracts.json --checklists research/frontier-26-batch-6.coverage.json --min-checks 1`
  Result: still reports one vacuous gate because `finite-smoke` checked `0` scoped obligations.
- `git diff --check -- items/thm-the-word-category-is-the-free-monoidal-category-on-one-generator.md items/cor-coherence-follows-from-freeness.md items/thm-mac-lane-coherence-in-the-canonical-map-form.md research/frontier-26-batch-6.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remaining in the opened scope.

## Blockers

- No mathematical blocker remains for batch `6`.
- Process note only: `gate-liveness` still flags the standing vacuous `finite-smoke` probe because the batch contract exposes no finite-smoke obligations.
