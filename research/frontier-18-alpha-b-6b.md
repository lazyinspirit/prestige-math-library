# frontier-18 alpha-b 6b

Run: `frontier-18`
Role: `alpha`
Group: `b`
Batches: `5`, `10`
Date: `2026-08-24`

## Reader reports received

- `reader-5`: received and audited. Coverage was partial by the reader's own account: 13 item files opened, 10 nonfatal repairs recorded, no full-batch clearance.
- `reader-10`: received and audited. Coverage was broader but still not exhaustive: 41 item files opened, 2 fatal repairs and 1 nonfatal contract repair recorded.

## Reader findings adjudicated

### Batch 5

#### R5-1 — `thm-catalan-generating-function-satisfies-a-quadratic-equation`
- Verdict: `confirmed_nonfatal`.
- Evidence: the fact line now keeps the quantified coefficient statement tied to `n\in\mathbb N`, and the item-scoped contract passes on current disk.
- Change accepted: fact restatement tightened and stale boundary rows re-anchored.

#### R5-2 — `thm-catalan-generating-function-closed-form`
- Verdict: `confirmed_nonfatal`.
- Evidence: the current fact line preserves the `n\in\mathbb N` scope from the cited definition, and the item-scoped contract passes.
- Change accepted: fact restatement tightened and stale boundary rows re-anchored.

#### R5-3 — `thm-the-catalan-generating-function-is-not-rational`
- Verdict: `confirmed_nonfatal`.
- Evidence: the unused fact/dependency is gone on disk, and the item-scoped contract passes.
- Change accepted: dead fact/dependency removed.

#### R5-4 — `thm-motzkin-numbers-by-first-return-decomposition`
- Verdict: `confirmed_nonfatal`.
- Evidence: the live proof now cites its inputs on the first numbered line, the unused induction fact is gone, and the item-scoped contract passes.
- Change accepted: proof-line citations moved, dead fact/dependency removed, stale boundary row re-anchored.

#### R5-5 — `thm-large-schroder-numbers-by-first-return-decomposition`
- Verdict: `confirmed_nonfatal`.
- Evidence: the live proof now cites its inputs on the first numbered line, and the item-scoped contract passes.
- Change accepted: proof-line citations moved and stale boundary row re-anchored.

#### R5-6 — `lem-reflection-at-the-first-visit-to-a-level-is-a-bijection`
- Verdict: `confirmed_nonfatal`.
- Evidence: the reader's corrected degenerate-case interpretation is consistent with the current proof, and the item-scoped contract passes.
- Change accepted: boundary evidence rewritten and re-anchored.

#### R5-7 — `lem-dyck-paths-of-a-given-semilength-form-a-finite-set`
- Verdict: `confirmed_nonfatal`.
- Evidence: the stale boundary references are gone in the item-scoped contract.
- Change accepted: boundary rows re-anchored.

#### R5-8 — `thm-catalan-numbers-by-reflection`
- Verdict: `confirmed_nonfatal`.
- Evidence: the current contract no longer points at the deleted step and the reverse-direction note matches the proof on disk.
- Change accepted: boundary rows re-anchored.

#### R5-9 — `thm-catalan-numbers-from-the-generating-function`
- Verdict: `confirmed_nonfatal`.
- Evidence: the item-scoped contract passes on current disk.
- Change accepted: low-index boundary rows re-anchored.

#### R5-10 — `thm-chung-feller`
- Verdict: `confirmed_nonfatal`.
- Evidence: the item-scoped contract passes on current disk.
- Change accepted: stale boundary rows re-anchored.

Batch-5 reader repairs were verified by item-scoped contract checks on the full touched slice:
`thm-catalan-generating-function-satisfies-a-quadratic-equation`,
`thm-catalan-generating-function-closed-form`,
`thm-the-catalan-generating-function-is-not-rational`,
`thm-motzkin-numbers-by-first-return-decomposition`,
`thm-large-schroder-numbers-by-first-return-decomposition`,
`lem-reflection-at-the-first-visit-to-a-level-is-a-bijection`,
`lem-dyck-paths-of-a-given-semilength-form-a-finite-set`,
`thm-catalan-numbers-by-reflection`,
`thm-catalan-numbers-from-the-generating-function`,
`thm-chung-feller`.

### Batch 10

#### R10-1 — `thm-a-bounded-partition-into-weakly-restricted-sets`
- Verdict: `confirmed_fatal`.
- Evidence: the reader's diagnosis of the old dense-branch absorption step is correct; the current proof no longer uses that unquantified small-order absorption and instead proves the theorem by repeated extraction plus an explicit remainder estimate.
- Change accepted: full proof rewrite retained.

#### R10-2 — `fs-a-sparse-set-contains-a-stable-set-of-half-its-size`
- Verdict: `confirmed_fatal`.
- Evidence: the old witness depended on `1/c` being an integer; the current witness is concrete (`n>8`, `4|n`, four cliques of order `n/4`) and the refutation now works as written.
- Change accepted: witness rewrite retained.

#### R10-3 — `research/frontier-18-batch-10.proof-contracts.json`
- Verdict: `confirmed_nonfatal`.
- Evidence: the `iff-forward` / `iff-reverse` rows for `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph` are now `checked`, not `not_applicable`, and the full batch-10 contract passes.
- Change accepted: contract-only repair retained.

## Refuter findings adjudicated

### Batch 5

Coverage received:
- initial pass: `thm-catalan-generating-function-satisfies-a-quadratic-equation`, `thm-catalan-generating-function-closed-form`, `thm-the-catalan-generating-function-is-not-rational`, `thm-motzkin-numbers-by-first-return-decomposition`, `thm-large-schroder-numbers-by-first-return-decomposition`, `thm-combinatorial-nullstellensatz`, `thm-polynomial-identity-lemma`, `lem-grid-reduction-of-a-multivariate-polynomial`, `thm-cauchy-davenport`
- second pass: `thm-cycle-lemma`, `thm-chung-feller`, `thm-lindstrom-gessel-viennot`, `thm-every-maximal-eventown-family-is-maximum`, `thm-eventown`, `thm-graham-pollak`, `thm-frankl-wilson-nonuniform-bound`, `lem-iterated-down-shifting-terminates-in-a-downward-closed-family`

#### RB5-1 — `thm-every-maximal-eventown-family-is-maximum`
- Verdict: `confirmed_fatal`.
- Evidence: the old step `4.1` asserted the codimension-one drop from `U^\perp` to `U^\perp\cap H` without any licensed fact that `H` cuts `U^\perp` by exactly one dimension in the odd case or equals it in the even case.
- Change made: I repaired step `4.1` by splitting the parity cases. For odd `n`, the linear functional `x \mapsto \langle x,\mathbf1\rangle` on `U^\perp` is nonzero and its kernel is `U^\perp \cap H`, so rank-nullity gives the codimension-one step. For even `n`, maximality forces `[n] \in \mathcal F`, hence `\mathbf1 \in U`, so `U^\perp \subseteq H` and therefore `U=U^\perp`.
- Verification: `precheck` passes, and the theorem now passes an item-scoped proof-contract check.

### Batch 10

Coverage received:
- initial pass: `thm-a-bounded-partition-into-weakly-restricted-sets`, `fs-a-sparse-set-contains-a-stable-set-of-half-its-size`, `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph`, `thm-gallai-modular-decomposition`, `thm-substitution-preserves-the-erdos-hajnal-property`
- second pass: `lem-modules-are-complement-invariant`, `lem-unions-of-components-and-of-anticomponents-are-modules`, `lem-differences-of-overlapping-modules-are-modules`, `lem-a-proper-module-of-a-connected-graph-has-a-complete-neighbour`, `lem-graphs-on-three-vertices-are-not-prime`, `thm-prime-graphs-are-the-graphs-that-are-not-substitutions`, `cor-the-erdos-hajnal-conjecture-reduces-to-prime-graphs`, `cor-blowing-up-a-vertex-preserves-the-erdos-hajnal-property`, `cor-rodl-every-h-free-graph-has-a-linear-restricted-set`, `cor-rodl-in-the-edge-density-form`, `cor-nikiforov-applies-to-every-linearly-large-induced-subgraph`, `cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction`

#### RB10-1 — `cor-rodl-every-h-free-graph-has-a-linear-restricted-set`
- Verdict: `confirmed_fatal`.
- Evidence: the source theorem and the current proof both require `G` to be nonempty, and `\epsilon`-restricted sets are defined only for nonempty vertex sets. The old Statement and title quantified over all `H`-free finite simple graphs, including the null graph.
- Change made: title and Statement narrowed to nonempty `H`-free finite simple graphs; step `1.2` now states the nonempty hypothesis explicitly.

#### RB10-2 — `cor-rodl-in-the-edge-density-form`
- Verdict: `confirmed_fatal`.
- Evidence: the old Statement and title again quantified over all `H`-free graphs, but the density `d_G(X,X)` is defined only for nonempty `X`, and the proof uses the nonempty form inherited from `cor-rodl-every-h-free-graph-has-a-linear-restricted-set`.
- Change made: title and Statement narrowed to nonempty `H`-free finite simple graphs.

#### RB10-3 — `cor-nikiforov-applies-to-every-linearly-large-induced-subgraph`
- Verdict: `confirmed_fatal`.
- Evidence: the old proof set `\delta:=\delta_0/\lambda` and then concluded `\delta_0|W| \ge \delta|W|`, which is backwards whenever `0<\lambda\le1`.
- Change made: step `1.1` now sets `\delta:=\min\{\delta_0,\lambda\delta_0\}`, step `2.1` carries the threshold as `((\delta/\lambda)|W|)^h \le (\delta_0|W|)^h`, and step `3.1` uses `\delta \le \delta_0` in the correct direction.

#### RB10-4 — `cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction`
- Verdict: `confirmed_fatal`.
- Evidence: the old Statement claimed existence of exactly `t` nonempty restricted sets, while the proof only showed the extraction process stops after some number of steps bounded by `t`.
- Change made: the Statement now says there are sets `X_1,\dots,X_s` for some `s\le t`, and step `3.1` is aligned with that bound.

## Risk reviews

Completed `risk_review` dispositions were written into the owning batch contracts for the items that actually received an extra refuter read and that I rechecked locally:

- Batch 5: `thm-catalan-generating-function-satisfies-a-quadratic-equation`, `thm-catalan-generating-function-closed-form`, `thm-the-catalan-generating-function-is-not-rational`, `thm-motzkin-numbers-by-first-return-decomposition`, `thm-large-schroder-numbers-by-first-return-decomposition`, `thm-polynomial-identity-lemma`, `thm-combinatorial-nullstellensatz`, `lem-grid-reduction-of-a-multivariate-polynomial`, `thm-cauchy-davenport`, `thm-every-maximal-eventown-family-is-maximum`.
- Batch 10: `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph`, `thm-gallai-modular-decomposition`, `thm-substitution-preserves-the-erdos-hajnal-property`, `thm-a-bounded-partition-into-weakly-restricted-sets`, `fs-a-sparse-set-contains-a-stable-set-of-half-its-size`.

Honest remaining gap:
- Batch 5 still has `68` routed high/critical items without a complete Alpha `risk_review`.
- Batch 10 still has `41` routed high/critical items without a complete Alpha `risk_review`.

I did not fabricate those missing reviews. The current contracts now distinguish the actually reviewed subset from the still-unreviewed routed remainder.

## Verification and current state

- Batch 5 reader-touched slice: item-scoped `proof-contract --strict` passes on all 10 reader-touched items, and `precheck` passes on the 5 proof-edited generating-function / Motzkin / Schröder items.
- Batch 5 repaired fatal: item-scoped `proof-contract --strict` and `precheck` pass on `thm-every-maximal-eventown-family-is-maximum`.
- Batch 5 whole contract: `proof-contract --strict` now passes after the gate-adjudication contract repair; the whole-level rerun leaves only three unrelated non-gating `shotgun-bracket` warnings.
- Batch 10 whole contract: `proof-contract --strict`, `citation-fidelity --fail-on-missing-quote`, and `boundary-audit --fail-on-contradicted` all pass after the accepted reader repairs and the four additional Alpha repairs.
- A-page summary contract: verified on all four owned A pages. Each has exactly two nonempty paragraphs under 150 words; all four B pages have no authored summary body.

## Items changed

Accepted reader repairs:
- Batch 5: the 10 nonfatal reader fixes named `R5-1` through `R5-10`.
- Batch 10: `thm-a-bounded-partition-into-weakly-restricted-sets`, `fs-a-sparse-set-contains-a-stable-set-of-half-its-size`, and the contract repair for `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph`.

Alpha repairs made in this pass:
- `thm-every-maximal-eventown-family-is-maximum`
- `cor-rodl-every-h-free-graph-has-a-linear-restricted-set`
- `cor-rodl-in-the-edge-density-form`
- `cor-nikiforov-applies-to-every-linearly-large-induced-subgraph`
- `cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction`

No items were added or deleted. No page files were edited. The only batch artifacts changed were:
- `research/frontier-18-batch-5.proof-contracts.json`
- `research/frontier-18-batch-10.proof-contracts.json`

Twice-touched items in this pass:
- none. The accepted reader repairs were either left intact (`R5-*`, `R10-*`) or complemented by separate Alpha repairs on different items.

## Anything not checked

- I did not independently reopen the harvested source PDFs/notes to re-audit source faithfulness in this 6b pass; that remains reader/batch-note evidence plus Alpha step-6 follow-through still to be deepened if needed.
- The broader batch-5 boundary-contract backlog from the earlier 6b checkpoint was cleared in the proof-contract gate adjudication recorded below; the current whole-level contract rerun is clean apart from three non-gating warnings.
- Cross-batch and cross-level citation audit is `6c`, owned by the lead Alpha, and is not part of this group-`b` 6b artifact.


## Gate adjudication — proof-contract

Reproduced from the current tree after a fresh merge. The blocking findings were real defects in `research/frontier-18-batch-5.proof-contracts.json`, not defects in the item mathematics: 255 checked boundary rows carried only narrative evidence with no anchored step or section reference, and 20 rows named stale deleted steps after earlier proof edits. I repaired the contract by anchoring each checked boundary to a live proof step and replacing stale step references; no item statement, proof, or page file changed.

Whole-level rerun left the gate clean:

`proof-contract: 0 error(s), 3 warning(s), 669/669 item(s) checked`

The remaining warnings are non-gating `shotgun-bracket` warnings outside this repair scope.

### Gate findings
- `thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient` / `zero` — `repaired` — boundary evidence newly anchored to step 4.1.
- `thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient` / `one` — `repaired` — boundary evidence newly anchored to step 4.1.
- `thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient` / `degenerate` — `repaired` — boundary evidence newly anchored to step 4.1.
- `lem-monotone-and-diagonal-lattice-paths-correspond` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-monotone-and-diagonal-lattice-paths-correspond` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-diagonal-lattice-paths-with-a-prescribed-endpoint-are-counted-by-a-binomial-coefficient` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-a-diagonal-path-that-changes-side-of-a-level-meets-it` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-reflection-principle-for-diagonal-lattice-paths` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-reflection-principle-for-diagonal-lattice-paths` / `degenerate` — `repaired` — boundary evidence newly anchored to step 4.1.
- `thm-reflection-principle-for-diagonal-lattice-paths` / `endpoints` — `repaired` — boundary evidence newly anchored to step 4.1.
- `thm-ballot-problem` / `zero` — `repaired` — boundary evidence newly anchored to step 1.2.
- `thm-ballot-problem` / `one` — `repaired` — boundary evidence newly anchored to step 4.1.
- `cor-weak-ballot-problem` / `empty` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-weak-ballot-problem` / `zero` — `repaired` — boundary evidence newly anchored to step 1.2.
- `cor-catalan-closed-formula` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cor-catalan-closed-formula` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cor-one-more-than-n-divides-the-central-binomial-coefficient` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-one-more-than-n-divides-the-central-binomial-coefficient` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-a-word-whose-weight-is-coprime-to-its-length-has-a-trivial-shift-stabiliser` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 4.1.
- `lem-strict-right-minima-of-a-quasiperiodic-partial-sum-function` / `one` — `repaired` — boundary evidence newly anchored to step 4.1.
- `thm-cycle-lemma` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-cycle-lemma` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-catalan-numbers-by-the-cycle-lemma` / `empty` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-catalan-numbers-by-the-cycle-lemma` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-first-return-decomposition-of-a-nonempty-dyck-path` / `zero` — `repaired` — boundary evidence newly anchored to step 1.2.
- `lem-first-return-decomposition-of-a-nonempty-dyck-path` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-first-return-decomposition-of-a-nonempty-dyck-path` / `degenerate` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-first-return-decomposition-of-a-nonempty-dyck-path` / `endpoints` — `repaired` — boundary evidence newly anchored to step 1.2.
- `thm-catalan-recurrence` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-catalan-recurrence` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-catalan-recurrence` / `endpoints` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-the-coefficients-of-the-formal-square-root-of-one-minus-four-x` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.2.
- `thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words` / `degenerate` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-balanced-bracket-words-are-counted-by-the-catalan-numbers` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-balanced-bracket-words-are-counted-by-the-catalan-numbers` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-balanced-bracket-words-are-counted-by-the-catalan-numbers` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-balanced-bracket-words-are-counted-by-the-catalan-numbers` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-binary-trees-of-a-given-size-form-a-finite-set` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-binary-trees-of-a-given-size-form-a-finite-set` / `endpoints` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-binary-trees-correspond-to-dyck-paths` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-binary-trees-correspond-to-dyck-paths` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-binary-trees-correspond-to-dyck-paths` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-binary-trees-correspond-to-dyck-paths` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-binary-trees-are-counted-by-the-catalan-numbers` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-binary-trees-are-counted-by-the-catalan-numbers` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-binary-trees-are-counted-by-the-catalan-numbers` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-binary-trees-are-counted-by-the-catalan-numbers` / `degenerate` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-a-triangulation-has-a-unique-triangle-on-the-closing-side` / `zero` — `repaired` — boundary evidence newly anchored to step 4.1.
- `lem-a-triangulation-has-a-unique-triangle-on-the-closing-side` / `endpoints` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 2.2.
- `cor-triangulations-of-a-convex-polygon-are-counted-by-the-catalan-numbers` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-triangulations-of-a-convex-polygon-are-counted-by-the-catalan-numbers` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-sign-reversing-involution-on-intersecting-path-systems` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-sign-reversing-involution-on-intersecting-path-systems` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-lindstrom-gessel-viennot` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-lindstrom-gessel-viennot` / `one` — `repaired` — boundary evidence newly anchored to step 4.1.
- `thm-lindstrom-gessel-viennot` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 4.1.
- `cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant` / `one` — `repaired` — stale step 4.1 repaired to step 3.1.
- `ex-the-five-dyck-paths-of-semilength-three` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-the-five-dyck-paths-of-semilength-three` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-the-three-catalan-families-matched-at-semilength-three` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `ex-the-three-catalan-families-matched-at-semilength-three` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.2.
- `ex-the-three-catalan-families-matched-at-semilength-three` / `endpoints` — `repaired` — stale step 3.1 repaired to step 1.2.
- `ex-the-reflection-bijection-on-a-concrete-path` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-the-reflection-bijection-on-a-concrete-path` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-the-cycle-lemma-on-a-word-of-length-seven` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-the-cycle-lemma-on-a-word-of-length-seven` / `endpoints` — `repaired` — boundary evidence newly anchored to step 3.1.
- `ex-catalan-numbers-to-six-computed-two-ways` / `empty` — `repaired` — boundary evidence newly anchored to step 1.2.
- `ex-catalan-numbers-to-six-computed-two-ways` / `zero` — `repaired` — boundary evidence newly anchored to step 1.2.
- `ex-catalan-numbers-to-six-computed-two-ways` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `ex-catalan-numbers-to-six-computed-two-ways` / `endpoints` — `repaired` — boundary evidence newly anchored to step 2.1.
- `ex-the-fourteen-triangulations-of-a-convex-hexagon` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `ex-the-first-coefficients-of-the-catalan-generating-function` / `zero` — `repaired` — boundary evidence newly anchored to step 1.2.
- `ex-the-first-coefficients-of-the-catalan-generating-function` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `ex-the-first-coefficients-of-the-catalan-generating-function` / `endpoints` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-non-intersecting-path-pairs-by-a-two-by-two-determinant` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `ex-non-intersecting-path-pairs-by-a-two-by-two-determinant` / `degenerate` — `repaired` — boundary evidence newly anchored to step 2.1.
- `ex-the-tail-swap-involution-on-an-intersecting-pair` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-central-binomial-quotient-is-an-integer-only-for-small-n` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-central-binomial-quotient-is-an-integer-only-for-small-n` / `degenerate` — `repaired` — boundary evidence newly anchored to step 2.1.
- `fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths` / `empty` — `repaired` — stale step 3.1 repaired to step 2.1.
- `fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths` / `degenerate` — `repaired` — boundary evidence newly anchored to step 2.1.
- `fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths` / `endpoints` — `repaired` — boundary evidence newly anchored to step 2.1.
- `fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence` / `degenerate` — `repaired` — boundary evidence newly anchored to step 3.1.
- `fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence` / `iff-forward` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cex-a-map-between-two-catalan-families-that-is-not-injective` / `endpoints` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-a-map-between-two-catalan-families-that-is-not-injective` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-a-step-set-for-which-the-reflection-argument-fails` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-a-step-set-for-which-the-reflection-argument-fails` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-a-step-set-for-which-the-reflection-argument-fails` / `endpoints` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-a-step-set-for-which-the-reflection-argument-fails` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-a-family-with-independent-incidence-vectors-has-at-most-n-members` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-a-family-with-independent-incidence-vectors-has-at-most-n-members` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-a-family-with-independent-incidence-vectors-has-at-most-n-members` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-diagonal-independence-criterion` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-diagonal-independence-criterion` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-diagonal-independence-criterion` / `degenerate` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-diagonal-independence-criterion` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-triangular-independence-criterion` / `empty` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-triangular-independence-criterion` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-triangular-independence-criterion` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-triangular-independence-criterion` / `degenerate` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-triangular-independence-criterion` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-determinant-independence-criterion` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-determinant-independence-criterion` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-determinant-independence-criterion` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-determinant-independence-criterion` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-oddtown` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-oddtown` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-oddtown` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cor-the-oddtown-bound-is-attained` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-the-oddtown-bound-is-attained` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cor-the-oddtown-bound-is-attained` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` / `degenerate` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-the-orthogonal-complement-of-a-subspace-under-the-standard-form` / `endpoints` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-eventown` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-eventown` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-eventown` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 4.1.
- `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent` / `degenerate` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-nonuniform-fisher-inequality` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-nonuniform-fisher-inequality` / `endpoints` — `repaired` — stale step 4.1 repaired to step 1.1.
- `thm-nonuniform-fisher-inequality` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 1.2.
- `cor-uniform-fisher-inequality` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-uniform-fisher-inequality` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cor-uniform-fisher-inequality` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-graham-pollak` / `empty` — `repaired` — stale step 4.1 repaired to step 2.1.
- `thm-graham-pollak` / `zero` — `repaired` — stale step 3.1 repaired to step 2.1.
- `thm-graham-pollak` / `one` — `repaired` — boundary evidence newly anchored to step 1.2.
- `thm-graham-pollak` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-graham-pollak` / `iff-reverse` — `repaired` — stale step 4.1 repaired to step 1.2.
- `lem-the-down-shift-preserves-the-number-of-sets` / `empty` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-the-down-shift-preserves-the-number-of-sets` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-the-down-shift-creates-no-new-shattered-set` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-the-down-shift-creates-no-new-shattered-set` / `endpoints` — `repaired` — stale step 3.1 repaired to step 1.1.
- `lem-the-down-shift-creates-no-new-shattered-set` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.2.
- `lem-the-down-shift-creates-no-new-shattered-set` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-iterated-down-shifting-terminates-in-a-downward-closed-family` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-iterated-down-shifting-terminates-in-a-downward-closed-family` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-iterated-down-shifting-terminates-in-a-downward-closed-family` / `endpoints` — `repaired` — stale step 3.1 repaired to step 2.1.
- `lem-iterated-down-shifting-terminates-in-a-downward-closed-family` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-a-downward-closed-family-shatters-each-of-its-members` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-a-downward-closed-family-shatters-each-of-its-members` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-a-downward-closed-family-shatters-each-of-its-members` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-sauer-shelah` / `zero` — `repaired` — boundary evidence newly anchored to step 4.1.
- `thm-sauer-shelah` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-sauer-shelah` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cor-sauer-shelah-polynomial-bound` / `empty` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-sauer-shelah-polynomial-bound` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-sauer-shelah-polynomial-bound` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-rank-of-the-point-inclusion-matrix` / `empty` — `repaired` — stale step 2.1, step 4.1 repaired to step 2.1, step 3.1.
- `thm-rank-of-the-point-inclusion-matrix` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-rank-of-the-point-inclusion-matrix` / `degenerate` — `repaired` — stale step 4.1 repaired to step 3.1.
- `thm-rank-of-the-point-inclusion-matrix` / `endpoints` — `repaired` — stale step 2.1, step 4.1 repaired to step 2.1, step 2.1.
- `thm-polynomial-identity-lemma` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-polynomial-identity-lemma` / `degenerate` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-grid-reduction-of-a-multivariate-polynomial` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-grid-reduction-of-a-multivariate-polynomial` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-grid-reduction-of-a-multivariate-polynomial` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-grid-reduction-of-a-multivariate-polynomial` / `degenerate` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-grid-reduction-of-a-multivariate-polynomial` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-combinatorial-nullstellensatz` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-combinatorial-nullstellensatz` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-combinatorial-nullstellensatz` / `degenerate` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-combinatorial-nullstellensatz` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-combinatorial-nullstellensatz` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` / `endpoints` — `repaired` — stale step 3.1 repaired to step 2.1.
- `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-cauchy-davenport` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-cauchy-davenport` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-cauchy-davenport` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-cauchy-davenport` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-alon-furedi-hyperplane-cover-of-the-cube` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-alon-furedi-hyperplane-cover-of-the-cube` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-alon-furedi-hyperplane-cover-of-the-cube` / `endpoints` — `repaired` — stale step 4.1 repaired to step 3.1.
- `thm-alon-furedi-hyperplane-cover-of-the-cube` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube` / `zero` — `repaired` — boundary evidence newly anchored to step 2.1.
- `lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-the-multilinear-monomials-of-bounded-degree-are-independent-on-the-cube` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-frankl-wilson-nonuniform-bound` / `empty` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-frankl-wilson-nonuniform-bound` / `zero` — `repaired` — boundary evidence newly anchored to step 4.1.
- `thm-frankl-wilson-nonuniform-bound` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-frankl-wilson-nonuniform-bound` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-frankl-wilson-nonuniform-bound` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 4.1.
- `lem-an-unshattered-set-reduces-a-monomial-on-a-family` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-an-unshattered-set-reduces-a-monomial-on-a-family` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `lem-an-unshattered-set-reduces-a-monomial-on-a-family` / `iff-reverse` — `repaired` — boundary evidence newly anchored to step 2.1.
- `thm-sauer-shelah-by-multilinear-polynomials` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `thm-sauer-shelah-by-multilinear-polynomials` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-sauer-shelah-by-multilinear-polynomials` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-sauer-shelah-by-multilinear-polynomials` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 3.1.
- `thm-sauer-shelah-by-multilinear-polynomials` / `iff-reverse` — `repaired` — stale step 4.1 repaired to step 3.1.
- `ex-an-oddtown-family-on-four-points` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-an-oddtown-family-on-four-points` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-an-eventown-family-of-maximum-size` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-an-eventown-family-of-maximum-size` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-an-eventown-family-of-maximum-size` / `endpoints` — `repaired` — boundary evidence newly anchored to step 3.1.
- `ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane` / `endpoints` — `repaired` — boundary evidence newly anchored to step 3.1.
- `ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound` / `degenerate` — `repaired` — stale step 4.1 repaired to step 3.1.
- `ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound` / `endpoints` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-cauchy-davenport-in-the-integers-modulo-seven` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial` / `endpoints` — `repaired` — boundary evidence newly anchored to step 3.1.
- `ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `ex-covering-the-cube-minus-the-origin-with-n-hyperplanes` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `fs-the-oddtown-bound-can-be-improved-to-n-minus-one` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-oddtown-bound-can-be-improved-to-n-minus-one` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-oddtown-bound-can-be-improved-to-n-minus-one` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-oddtown-bound-can-be-improved-to-n-minus-one` / `degenerate` — `repaired` — boundary evidence newly anchored to step 2.1.
- `fs-fisher-inequality-holds-over-the-two-element-field` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-fisher-inequality-holds-over-the-two-element-field` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members` / `endpoints` — `repaired` — stale step 3.1 repaired to step 2.1.
- `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product` / `zero` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product` / `degenerate` — `repaired` — stale step 3.1 repaired to step 2.1.
- `fs-the-standard-bilinear-form-on-the-two-element-field-is-an-inner-product` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-combinatorial-nullstellensatz-holds-without-the-top-coefficient-hypothesis` / `empty` — `repaired` — boundary evidence newly anchored to step 3.1.
- `fs-the-combinatorial-nullstellensatz-holds-without-the-top-coefficient-hypothesis` / `one` — `repaired` — boundary evidence newly anchored to step 1.1.
- `fs-the-combinatorial-nullstellensatz-holds-without-the-top-coefficient-hypothesis` / `endpoints` — `repaired` — boundary evidence newly anchored to step 3.1.
- `fs-the-combinatorial-nullstellensatz-holds-without-the-top-coefficient-hypothesis` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals` / `zero` — `repaired` — stale step 3.1 repaired to step 2.1.
- `cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cex-cauchy-davenport-fails-for-a-composite-modulus` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-cauchy-davenport-fails-for-a-composite-modulus` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cex-cauchy-davenport-fails-for-a-composite-modulus` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree` / `empty` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree` / `endpoints` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree` / `nonempty-choice` — `repaired` — boundary evidence newly anchored to step 1.1.
- `lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once` / `zero` — `repaired` — stale step 6.1 repaired to step 3.2.
- `lem-shifts-of-a-weight-one-word-realise-each-count-of-nonpositive-partial-sums-once` / `one` — `repaired` — boundary evidence newly anchored to step 2.1.
- `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` / `one` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers` / `degenerate` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers` / `empty` — `repaired` — boundary evidence newly anchored to step 1.1.
- `cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers` / `zero` — `repaired` — boundary evidence newly anchored to step 3.1.
- `cor-large-schroder-numbers-as-a-binomial-sum-of-catalan-numbers` / `degenerate` — `repaired` — boundary evidence newly anchored to step 1.1.

## Gate adjudication — `finite-smoke`

I reproduced the blocker from the current tree after rebuilding `research/frontier-18-proof-contracts.json`. Every finding on my group’s batches was a real proof-contract defect rather than a mathematical defect in the authored items: two batch-5 rows named registry checks that did not genuinely match the claims on disk, and all six batch-10 rows were provisional step-2 placeholders that the authored items never turned into genuine smoke obligations. I repaired only the contracts and reran the gate clean:

`finite-smoke: 0 error(s), 22 check(s) over 20/669 item(s) carrying obligations`

### Gate findings

- `thm-oddtown` / `matrix-ring-laws-mod-n` — `repaired` — removed the smoke row from `research/frontier-18-batch-5.proof-contracts.json`; the theorem proves a parity/independence bound, not the general matrix-ring law that registry check probes.
- `lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime` / `binomial-congruence-solution-count` — `repaired` — removed the smoke row; the lemma is about nonvanishing of binomial coefficients modulo a prime, not the exact solution-count claim of the registered congruence check.
- `lem-module-criteria` / `induced-complement-commutes` — `repaired` — removed the provisional smoke row from `research/frontier-18-batch-10.proof-contracts.json`; the authored item does not explicitly assert the induced-complement identity.
- `lem-modules-are-complement-invariant` / `induced-complement-commutes` — `repaired` — removed the provisional smoke row; the authored item proves complement-invariance of modules, not the registry’s induced-subgraph identity.
- `lem-a-module-meets-an-induced-subgraph-in-a-module` / `induced-complement-commutes` — `repaired` — removed the provisional smoke row; the authored item is about module restriction to an induced subgraph and does not explicitly assert the registry claim.
- `lem-substitution-commutes-with-complementation` / `induced-complement-commutes` — `repaired` — removed the provisional smoke row; the authored item is about substitution and complementation, not about induced subgraphs.
- `lem-sparsity-depends-only-on-the-induced-subgraph` / `induced-complement-commutes` — `repaired` — removed the provisional smoke row; the item’s claim is induced-subgraph invariance of sparsity, not the complement/induced commutation law.
- `lem-restrictedness-is-complement-invariant` / `induced-complement-commutes` — `repaired` — removed the provisional smoke row; the item proves complement-invariance of restrictedness, not the registry’s induced-subgraph identity.

I also updated the batch-10 contract note so it now states honestly that the provisional `induced-complement-commutes` selections from step 2 were removed at step 6 because none of the authored items explicitly asserts that identity.
