# frontier-30 reader-14 report

Date: 2026-09-04.
Run: `frontier-30`
Batch: `14`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-30-reader.task.md`, `research/frontier-30-dispatch/reader-reader-14.prompt.md`, `research/frontier-30-beta-14.task.md`, `research/frontier-30-batch-14.pages.json`, `research/frontier-30-batch-14.coverage.json`, `research/frontier-30-batch-14.proof-contracts.json`, `research/frontier-30-batch-14.notes.md`, `research/frontier-30-splice-14.json`, and the live controller state via `tools/autopilot/bin/autopilot.mts status`.
- Controlling design and plan entries: `research/plan-combinatorics-and-categories.md` around Section `16.4` and `16.5`, plus the matching `research/plan-spec.json` entries for orders `429` through `432`.
- Assigned pages: `library/combinatorics/from-generalized-niceness-to-erdos-hajnal.md`, `library/combinatorics/from-generalized-niceness-to-erdos-hajnal-examples.md`, `library/combinatorics/property-star-and-comb-outcomes.md`, and `library/combinatorics/property-star-and-comb-outcomes-examples.md`.
- Assigned items on `from-generalized-niceness-to-erdos-hajnal`: `lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set`, `lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades`, `thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property`.
- Assigned items on `from-generalized-niceness-to-erdos-hajnal-examples`: `ex-the-lemma-three-five-parameter-choice-on-a-large-graph`, `ex-a-complete-four-blockade-gives-a-four-vertex-clique`, `ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set`.
- Assigned items on `property-star-and-comb-outcomes`: `def-property-star-for-a-finite-family`, `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes`, `lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome`, `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph`, `lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives`, `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem`, `lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade`, `thm-property-star-and-leaf-reducibility-imply-generalized-niceness`.
- Assigned items on `property-star-and-comb-outcomes-examples`: `ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star`, `ex-the-third-outcome-of-property-star-gives-a-pure-four-blockade`, `ex-the-square-root-rescaling-in-lemma-four-four`, `ex-the-epsilon-to-five-d-substitution-in-lemma-four-five-one`.
- Published dependency items opened for verification: `def-generalized-nice-finite-family`, `cor-rodl-every-h-free-graph-has-a-linear-restricted-set`, `lem-constant-scale-restricted-generalized-niceness-yields-an-x-scale-restricted-subgraph-a-polynomial-clique-or-stable-set-or-a-blockade`, `def-c-sparse-and-c-restricted-vertex-set`, `lem-greedy-colouring-bound`, `thm-clique-independence-chromatic-bounds`, `lem-restrictedness-is-complement-invariant`, `lem-complement-swaps-cliques-and-stable-sets`, `def-erdos-hajnal-property-and-constant`, `prop-erdos-hajnal-property-is-complement-invariant`, `def-leaf-reducible-finite-family`, `def-wonderful-finite-family`, `thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs`, `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair`, `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`, `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades`, `lem-iterated-restricted-sparsification-reaches-the-target-scale`, `thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade`, `def-comb-in-a-graph`, `def-complete-anticomplete-pure-and-x-sparse-blockades`, `def-clique-stable-set-and-numbers`, and `def-h-free-and-family-free-graph`.
- Source sections opened directly in the cited primary paper: `https://arxiv.org/html/2606.06258v2` at Section `1.4` for property `(*)` and Lemmas `1.12-1.13`, Section `3` around Claim `3.5.1`, and Section `4` around Claim `4.3.1` and Lemma `4.5`.

## Confirmed defects and edits

1. Repaired `items/lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades.md`.
   The old proof incorrectly erased the blockade branch of the preceding Rödl-initialized lemma. In the source Claim `3.5.1`, that branch is not impossible; it instead forces `k>\epsilon^{-1}`, after which one vertex from each block gives the forbidden polynomial clique or stable set. I restored that missing branch and kept the restricted and clique/stable branches unchanged.
2. Repaired `items/lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph.md`.
   The old proof handled the fourth outcome only when the blockade parameter satisfied `k\ge 2`. Source Claim `4.3.1` also needs the leftover subcase `1<k<2`, where the real-length blockade still contains two blocks. I added that reduction to a `2`-blockade and completed the contradiction.
3. Repaired `items/thm-property-star-and-leaf-reducibility-imply-generalized-niceness.md`.
   The old proof invoked the local blockade theorem without first treating the small-graph regimes required by source Lemma `4.5`: when `|G|<\epsilon^{-1}`, outcome `2` is immediate from a single vertex, and when `\epsilon^{-1}\le |G|\le \epsilon^{-10d^2}`, outcome `1` is immediate from singleton blocks. I inserted those size cases, re-numbered the proof into canonical phase order, and recorded the constant lower bounds needed by the generalized-niceness definition.
4. Repaired `items/ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star.md`.
   The old example used singleton tooth blocks, so it produced a `(4,1)`-comb and did not satisfy the trigger hypothesis of property `(*)`, which requires both `\ell` and `w` to be at least `4`. I replaced the singleton blocks with four-vertex blocks so the example now witnesses a genuine `(4,4)` trigger configuration.
5. Updated `research/frontier-30-batch-14.proof-contracts.json`.
   I synchronized the repaired derivation entries and citation-use maps with the four repaired items.

No `verification.judge` block was present on any repaired item, so there was no stale judge record to remove.

## Per-page verdicts

- `from-generalized-niceness-to-erdos-hajnal`: pass after the Claim `3.5.1` repair. The A-page summary still matches the repaired item route.
- `from-generalized-niceness-to-erdos-hajnal-examples`: pass. I re-read all three example items against the A-page proofs and found no remaining defect.
- `property-star-and-comb-outcomes`: pass after the Claim `4.3.1` and Lemma `4.5` repairs. The page stays aligned with the design route for Section `4`.
- `property-star-and-comb-outcomes-examples`: pass after repairing the property-`(*)` trigger example. No B-page prose edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades.md items/lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph.md items/thm-property-star-and-leaf-reducibility-imply-generalized-niceness.md items/ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star.md`
  Result: all four repaired items were reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades.md items/lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph.md items/thm-property-star-and-leaf-reducibility-imply-generalized-niceness.md items/ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star.md`
  Result: `4 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts` over the remaining proof-bearing assigned batch-14 items
  Result: `17 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-30-batch-14.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 17/17 item(s) checked`.
- `node tools/rendercheck.mjs` on the four repaired items and the four assigned page files
  Result: all `8` files passed YAML and KaTeX checks.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-14.proof-contracts.json`
  Result: no missing quotes and no widening candidates.
- `node tools/content-policy.mjs research/frontier-30-batch-14.pages.json`
  Result: `18 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/boundary-audit.mjs research/frontier-30-batch-14.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted dispositions.
- `git diff --check -- items/lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades.md items/lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph.md items/thm-property-star-and-leaf-reducibility-imply-generalized-niceness.md items/ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star.md research/frontier-30-batch-14.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
