# frontier-23 reader-1 report

Date: Saturday, August 29, 2026.

## Opened scope

- Control and instructions: `CLAUDE.md`, `README.md`, `briefs/reader.md`, `research/frontier-23-reader.task.md`, `research/frontier-23-dispatch/reader-reader-1.prompt.md`, and live run state via `node tools/autopilot/bin/autopilot.mts status`.
- Batch artifacts: `research/frontier-23-batch-1.pages.json`, `research/frontier-23-batch-1.coverage.json`, `research/frontier-23-batch-1.notes.md`, and `research/frontier-23-batch-1.proof-contracts.json`.
- Assigned pages: `library/group-theory/decision-problems-for-finitely-presented-groups.md`, `library/group-theory/decision-problems-for-finitely-presented-groups-examples.md`, `library/group-theory/graphs-of-groups-and-bass-serre-theory.md`, and `library/group-theory/graphs-of-groups-and-bass-serre-theory-examples.md`.
- Assigned item files opened: all 66 batch-1 manifest items under `items/`, namely the 27 GT-7 A-page items, 6 GT-7 B-page items, 26 GT-15 A-page items, and 7 GT-15 B-page items named in `research/frontier-23-batch-1.pages.json`.
- Required dependency pages opened: `library/abstract-algebra/free-groups-and-presentations.md`, `library/abstract-algebra/free-products-and-amalgamation.md`, `library/abstract-algebra/group-actions-and-cayleys-theorem.md`, `library/group-theory/hnn-extensions-and-brittons-lemma.md`, `library/group-theory/simplicial-trees-and-group-actions.md`, and `library/group-theory/subgroups-of-free-groups-and-schreier-rewriting.md`.
- Direct dependency item files opened for verification: `cor-factors-embed-in-a-free-product-with-amalgamation`, `def-alphabet-words-and-reduction`, `def-coset`, `def-free-group`, `def-free-product-of-a-family-of-groups`, `def-free-product-with-amalgamation`, `def-group-homomorphism`, `def-group-presentation`, `def-hnn-extension-and-stable-letter`, `def-oriented-graph-with-edge-reversal`, `def-quotient-graph-of-an-action-without-inversions`, `def-relators-relations-and-finite-presentations`, `def-simplicial-tree`, `lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision`, `lem-stabilizers-in-one-orbit-are-conjugate`, `prop-equality-of-words-in-a-presentation`, `prop-normal-closure-is-products-of-conjugates`, `thm-conjugacy-of-cyclically-reduced-words`, `thm-hnn-normal-form-theorem`, `thm-nielsen-schreier-with-an-explicit-basis`, `thm-normal-form-for-free-products-with-amalgamation`, `thm-normal-form-for-the-word-quotient-model`, and `thm-tietze-transformations-connect-finite-presentations`.

## Edits kept

- `items/thm-kurosh-subgroup-theorem.md`
  Replaced the finite-piece collapse argument with a direct Bass-Serre/tree-of-trivial-edge-groups proof that works for the stated arbitrary family and records the double-coset indexing explicitly.
- `items/thm-grushko-decomposition-and-rank-additivity.md`
  Removed the unsupported local existence half, rewrote the item as the uniqueness/rank-additivity half that the current Kurosh and Nielsen-Schreier closure actually proves, and added an explicit remark that the classical existence half is not reproved here.
- `research/frontier-23-batch-1.proof-contracts.json`
  Regenerated the two affected contract entries after the item repairs.

No page prose change was needed.

## Confirmed defects repaired

1. `thm-kurosh-subgroup-theorem`
   defect: the previous proof claimed to recover the free product by collapsing one-edge pieces and then iterating one-segment/one-loop reductions on the quotient graph. That does not justify the stated arbitrary-index family and obscured the actual trivial-edge path-group calculation on the current bytes.
   repair: rewrote the proof through the star graph of groups, the Bass-Serre action, and the direct trivial-edge presentation of the quotient graph of groups.

2. `thm-grushko-decomposition-and-rank-additivity`
   defect: step `1.1` asserted the full existence half via a Zorn refinement argument that was not licensed by the current dependency closure, so the item overclaimed more than the local Kurosh-based machinery proved.
   repair: narrowed the Statement to the uniqueness and free-rank additivity conclusion for decompositions already in hand, rewrote the proof via Kurosh plus Nielsen-Schreier, and recorded the omitted classical existence half honestly in Remarks.

No additional in-scope `in-flight-item`, `page`, or `published-dependency` defect remained after those repairs on the opened scope.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-kurosh-subgroup-theorem.md items/thm-grushko-decomposition-and-rank-additivity.md`
  Result: `thm-kurosh-subgroup-theorem` was already canonical; `thm-grushko-decomposition-and-rank-additivity` reflowed once and then stayed canonical.
- `node tools/regen-contract-entries.mjs research/frontier-23-batch-1.proof-contracts.json thm-kurosh-subgroup-theorem thm-grushko-decomposition-and-rank-additivity`
  Result: regenerated both targeted entries.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-kurosh-subgroup-theorem.md items/thm-grushko-decomposition-and-rank-additivity.md`
  Result: pass, `2 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-23-batch-1.proof-contracts.json --strict`
  Result: pass, `0 error(s), 0 warning(s), 43/43 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-23-batch-1.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass, `78 citation(s)` with no quote misses and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-23-batch-1.proof-contracts.json --fail-on-contradicted`
  Result: no contradicted dispositions; only the standing template-reuse heuristics.
- `node tools/rendercheck.mjs library/group-theory/decision-problems-for-finitely-presented-groups.md library/group-theory/decision-problems-for-finitely-presented-groups-examples.md library/group-theory/graphs-of-groups-and-bass-serre-theory.md library/group-theory/graphs-of-groups-and-bass-serre-theory-examples.md items/thm-kurosh-subgroup-theorem.md items/thm-grushko-decomposition-and-rank-additivity.md`
  Result: pass, `OK — 6 file(s)`.
- `node tools/content-policy.mjs research/frontier-23-batch-1.pages.json`
  Result: pass, `66 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/thm-kurosh-subgroup-theorem.md items/thm-grushko-decomposition-and-rank-additivity.md research/frontier-23-batch-1.proof-contracts.json`
  Result: pass.

## Page verdicts

- `decision-problems-for-finitely-presented-groups`
  Pass on current bytes. I reread the definitions, positive algorithms, cited undecidability boundaries, false statements, and examples against the published presentation/free-group/amalgam dependencies and did not confirm a remaining live defect.
- `decision-problems-for-finitely-presented-groups-examples`
  Pass on current bytes. No B-page prose or witness repair was needed.
- `graphs-of-groups-and-bass-serre-theory`
  Pass after repair on current bytes. The Kurosh and Grushko endpoints now match the actual Bass-Serre and subgroup machinery opened for verification.
- `graphs-of-groups-and-bass-serre-theory-examples`
  Pass on current bytes. The example witnesses still match the repaired A-page statements.

## Blockers

- None in the opened batch-1 scope.
- No uneditable published-dependency defect remains.
