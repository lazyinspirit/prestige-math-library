# frontier-21 reader-1 report

Date: Thursday, August 27, 2026.

## Opened scope

- Task and contract artifacts: `CLAUDE.md`, `README.md`, `SCHEMA.md`,
  `WORKFLOW.md`, `research/frontier-21-reader.task.md`,
  `research/frontier-21-beta-1.task.md`, `research/frontier-21-covers.json`,
  `research/frontier-21-batch-1.pages.json`,
  `research/frontier-21-batch-1.coverage.json`,
  `research/frontier-21-batch-1.proof-contracts.json`,
  `research/frontier-21-batch-1.notes.md`, the GT-5 and GT-13 design blocks in
  `research/plan-group-theory-track.md`, and the live `.autopilot/` status for
  `frontier-21`.
- Assigned A page `library/group-theory/subgroups-of-free-groups-and-schreier-rewriting.md`
  and all listed items:
  `def-labeled-schreier-coset-graph`,
  `lem-schreier-coset-graph-is-connected-and-deterministic`,
  `def-schreier-transversal-and-schreier-system`,
  `lem-spanning-trees-and-schreier-systems-correspond`,
  `def-schreier-generator`,
  `lem-schreier-generators-lie-in-the-subgroup`,
  `def-schreier-rewriting-map`,
  `lem-schreier-rewriting-is-invariant-under-free-reduction`,
  `thm-schreier-generating-lemma`,
  `lem-tree-schreier-generators-are-freely-independent`,
  `thm-nielsen-schreier-with-an-explicit-basis`,
  `thm-schreier-index-rank-formula`,
  `cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank`,
  `thm-reidemeister-schreier-presentation`,
  `lem-reidemeister-schreier-relators-are-independent-of-word-representatives`,
  `cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented`,
  `thm-marshall-hall-free-factor-theorem`,
  `fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated`,
  `fs-schreier-generators-are-always-a-free-basis`,
  `fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn`, and
  `fs-reidemeister-schreier-needs-no-choice-of-transversal`.
- Assigned B page `library/group-theory/subgroups-of-free-groups-and-schreier-rewriting-examples.md`
  and all listed items:
  `ex-index-two-subgroup-of-a-rank-two-free-group`,
  `ex-kernel-of-the-exponent-sum-map`,
  `ex-a-schreier-coset-graph-and-its-tree-basis`,
  `ex-reidemeister-schreier-for-a-surface-subgroup`,
  `ex-infinite-rank-subgroup-of-a-rank-two-free-group`,
  `ex-marshall-hall-separating-quotient`, and
  `cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis`.
- Assigned A page `library/group-theory/amenable-groups-and-folner-criteria.md`
  and all listed items:
  `def-mean-on-bounded-functions-on-a-group`,
  `def-left-translation-action-on-bounded-functions`,
  `def-left-invariant-mean-and-amenable-group`,
  `lem-left-and-right-amenability-agree-by-inversion`,
  `prop-finite-groups-are-amenable`,
  `thm-abelian-groups-are-amenable`,
  `thm-subgroups-and-quotients-of-amenable-groups-are-amenable`,
  `thm-extensions-of-amenable-groups-are-amenable`,
  `def-locally-finite-group`,
  `lem-directed-union-of-amenable-subgroups-is-amenable`,
  `cor-solvable-and-locally-finite-groups-are-amenable`,
  `def-folner-set-and-folner-condition`,
  `lem-equivalent-folner-boundary-formulations`,
  `thm-folner-criterion-for-amenability`,
  `def-folner-sequence`,
  `prop-enumerated-countable-amenable-groups-admit-folner-sequences`,
  `thm-subexponential-growth-implies-amenability`,
  `def-paradoxical-decomposition-of-a-group`,
  `lem-paradoxical-groups-admit-no-invariant-mean`,
  `thm-tarski-alternative`,
  `thm-free-group-of-rank-two-is-nonamenable`,
  `cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable`,
  `thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups`,
  `rem-nonamenable-groups-without-nonabelian-free-subgroups`,
  `fs-amenable-means-finite`,
  `fs-every-nonamenable-group-contains-a-rank-two-free-subgroup`,
  `fs-one-finite-folner-set-proves-amenability`,
  `fs-folner-sequences-exist-for-every-uncountable-amenable-group`, and
  `fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates`.
- Assigned B page `library/group-theory/amenable-groups-and-folner-criteria-examples.md`
  and all listed items:
  `ex-folner-intervals-in-the-integers`,
  `ex-folner-boxes-in-zn`,
  `ex-finite-and-locally-finite-amenable-groups`,
  `ex-the-lamplighter-group-is-amenable`,
  `ex-boundary-expansion-in-the-free-group`,
  `ex-paradoxical-decomposition-of-a-free-group`, and
  `cex-amenability-does-not-imply-subexponential-growth`.
- Published dependency items opened to verify the current proofs and witnesses:
  `def-group`, `def-coset`, `def-free-group`,
  `def-alphabet-words-and-reduction`,
  `thm-reduced-words-form-the-free-group`, `def-free-basis`,
  `def-rank-of-a-finite-rank-free-group`, `def-group-presentation`,
  `def-normal-closure`, `prop-normal-closure-is-products-of-conjugates`,
  `thm-first-isomorphism-theorem-groups`, `thm-von-dyck`,
  `def-relators-relations-and-finite-presentations`,
  `thm-free-product-of-free-groups-on-disjoint-bases`,
  `cor-z-free-product-z-is-free-group-of-rank-two`, `def-axiom-of-choice`,
  `def-countable-choice`, `thm-ultrafilter-lemma`, `def-normal-subgroup`,
  `def-derived-series-solvable-group-and-derived-length`,
  `cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules`,
  `def-growth-function-of-a-finitely-generated-group`,
  `def-polynomial-subexponential-exponential-and-intermediate-growth`,
  `def-quasi-isometry-invariant-and-geometric-property-of-a-finitely-generated-group`,
  `thm-hall-marriage-finite-bipartite`, and
  `def-external-semidirect-product`.

Opened item/page count: 64 scoped items, 26 published dependency items, and 4
assigned page files.

## Edits

- Repaired the amenability choice ledger on the A page by making the
  ultrafilter boundary explicit in
  `items/thm-folner-criterion-for-amenability.md`,
  `items/thm-abelian-groups-are-amenable.md`,
  `items/lem-directed-union-of-amenable-subgroups-is-amenable.md`,
  `items/cor-solvable-and-locally-finite-groups-are-amenable.md`,
  `items/thm-subexponential-growth-implies-amenability.md`, and
  `items/thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups.md`,
  together with the A-page summary in
  `library/group-theory/amenable-groups-and-folner-criteria.md`.
- Repaired `items/thm-subgroups-and-quotients-of-amenable-groups-are-amenable.md`
  by replacing the unlicensed global right-transversal step with a finite-coset
  slicing argument for Folner sets, and recorded the same ultrafilter boundary
  in its statement.
- Repaired `items/thm-tarski-alternative.md` by stating the ultrafilter and
  matching-extension assumptions explicitly, correcting the finite-set product
  notation in step `1.2`, and keeping the nonamenable-to-paradoxical route
  honest about its choice input.
- Repaired `items/thm-free-group-of-rank-two-is-nonamenable.md` so it no
  longer depends on the choice-bearing Tarski theorem when the direct
  paradoxical-to-no-mean lemma already suffices.
- Propagated the repaired amenability hypotheses and missing citations through
  the affected dependent items:
  `items/prop-enumerated-countable-amenable-groups-admit-folner-sequences.md`,
  `items/cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable.md`,
  `items/ex-finite-and-locally-finite-amenable-groups.md`,
  `items/ex-the-lamplighter-group-is-amenable.md`,
  `items/cex-amenability-does-not-imply-subexponential-growth.md`,
  `items/fs-amenable-means-finite.md`,
  `items/ex-folner-intervals-in-the-integers.md`,
  `items/ex-folner-boxes-in-zn.md`,
  `items/fs-one-finite-folner-set-proves-amenability.md`, and
  `items/fs-folner-sequences-exist-for-every-uncountable-amenable-group.md`.
- Added the missing dependency on `thm-abelian-groups-are-amenable` inside
  `items/ex-the-lamplighter-group-is-amenable.md`.
- Repaired `items/thm-extensions-of-amenable-groups-are-amenable.md` by
  replacing the invalid quotient-averaging formula `f(ng)` with the
  representative-stable formula `f(gn)`, which makes the induced mean on
  `G/N` well defined and genuinely left invariant.
- Repaired `items/thm-reidemeister-schreier-presentation.md` by removing an
  overstrong citation to `def-schreier-rewriting-map` and deriving the
  telescoping identity `\rho(\tau(trt^{-1}))=trt^{-1}` directly from the
  rewrite-factor and Schreier-generator definitions.
- Regenerated all 52 batch-1 proof-contract entries in
  `research/frontier-21-batch-1.proof-contracts.json` after the repairs. No
  changed item carried a stale `verification.judge` record.

## Uneditable finding

- Published dependency `items/def-external-semidirect-product.md:4` remains
  ill-formed: its title string still begins with a stray leading space before
  “The external semidirect product $N\\rtimes_\\alpha H$”.

## Page verdicts

- `subgroups-of-free-groups-and-schreier-rewriting`: pass.
- `subgroups-of-free-groups-and-schreier-rewriting-examples`: pass.
- `amenable-groups-and-folner-criteria`: pass after repairs.
- `amenable-groups-and-folner-criteria-examples`: pass after repaired item-layer
  hypotheses; the B-page prose itself was left untouched as required.

## Checks

- Ran `node tools/tsx-run.mjs tools/reflow.mts ...` on the 19 changed items.
- Ran `node tools/tsx-run.mjs tools/precheck.mts ...` on the same 19 changed
  items; final run passed cleanly.
- Ran `node tools/rendercheck.mjs ...` on the 19 changed items plus the changed
  A-page prose file `library/group-theory/amenable-groups-and-folner-criteria.md`;
  final run passed cleanly.
- Ran `node tools/tsx-run.mjs tools/reflow.mts ...`,
  `node tools/tsx-run.mjs tools/precheck.mts ...`, and
  `node tools/rendercheck.mjs ...` on the two additional repaired items
  `items/thm-extensions-of-amenable-groups-are-amenable.md` and
  `items/thm-reidemeister-schreier-presentation.md`; final runs passed cleanly.
- The composite launcher `node tools/step6-scope.mjs post-reader --run frontier-21 --batch 1`
  fails in this sandbox with `spawnSync /usr/bin/node EPERM`, so I ran the
  post-reader hash and risk report directly and reconstructed
  `research/frontier-21-step6-scope-1.json` from the same on-disk inputs.
- Ran `node tools/proof-contract.mjs research/frontier-21-batch-1.proof-contracts.json --strict`;
  final run passed cleanly.
- Ran `node tools/citation-fidelity.mjs research/frontier-21-batch-1.proof-contracts.json --fail-on-missing-quote`;
  final run passed cleanly.
- Ran `node tools/boundary-audit.mjs research/frontier-21-batch-1.proof-contracts.json --fail-on-contradicted`;
  final run passed cleanly.
- Ran `node tools/finite-smoke.mjs research/frontier-21-batch-1.proof-contracts.json`;
  final run passed cleanly.
- Resolved one intermediate `precheck` failure (`untagged-steps` in
  `thm-subgroups-and-quotients-of-amenable-groups-are-amenable`) and one
  intermediate `proof-contract` citation-uses failure
  (`fs-folner-sequences-exist-for-every-uncountable-amenable-group`) before the
  final clean runs.

## Blockers

- None.
