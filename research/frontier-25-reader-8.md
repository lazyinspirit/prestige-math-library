# frontier-25 reader-8 report

Date: Sunday, August 30, 2026.
Run: `frontier-25`.
Batch: `8`.
Role: independent Step-6 reader.

## Opened scope

- Batch artifacts:
  `research/frontier-25-reader.task.md`,
  `research/frontier-25-beta-8.task.md`,
  `research/frontier-25-batch-8.pages.json`,
  `research/frontier-25-batch-8.proof-contracts.json`,
  `research/frontier-25-batch-8.notes.md`,
  `research/frontier-25-step6-hash-8-pre.json`.
- Control and design material:
  `AGENTS.md`,
  `CLAUDE.md`,
  `README.md`,
  `research/plan-combinatorics-and-categories.md` over the `415/416` row and its adjacent `16.3` route constraints,
  `research/plan-spec.json`,
  and the live run status from `node tools/autopilot/bin/autopilot.mts status`.
- Assigned page files:
  `library/combinatorics/the-five-cycle-and-erdos-hajnal.md`,
  `library/combinatorics/the-five-cycle-and-erdos-hajnal-examples.md`.
- Assigned A-page items:
  `lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears`,
  `thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side`,
  `def-rooted-stable-tooth-comb`,
  `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb`,
  `lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree`,
  `cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree`,
  `lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle`,
  `thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound`,
  `cor-the-five-cycle-has-the-erdos-hajnal-property`.
- Assigned B-page items:
  `ex-a-rooted-stable-tooth-comb-with-two-teeth`,
  `ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle`,
  `cex-a-comb-can-have-an-edge-between-two-blocks`,
  `fs-every-comb-has-pairwise-anticomplete-blocks`.
- Dependency items opened to verify the current proofs and definitions:
  `def-comb-in-a-graph`,
  `def-edges-between-sets-and-pure-mixed-pairs`,
  `def-tau-critical-graph`,
  `def-kappa-of-a-graph`,
  `def-clique-stable-set-and-numbers`,
  `def-subgraph-induced-subgraph-and-spanning-subgraph`,
  `def-edge-density-between-vertex-sets`,
  `cor-rodl-in-the-edge-density-form`,
  `def-graph-isomorphism-and-complement`,
  `def-h-free-and-family-free-graph`,
  `def-induced-embedding-and-induced-copy`,
  `def-standard-complete-bipartite-path-and-cycle-graphs`,
  `prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical`,
  `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations`,
  `thm-geometric-series`,
  `thm-real-power-laws`.
- Source material reopened for the claimed route:
  `https://arxiv.org/html/2102.04994v1` over the introduction equivalence paragraph, Theorem `2.1`, Theorem `3.1`, and Section `4` through Theorem `4.4`;
  `https://web.math.princeton.edu/~tunghn/ehnotes.pdf` over the solved five-vertex graph list and the Rödl proof sketch on pages `1` to `3`.

## Repaired defects

- None. I did not confirm any editable defect in the assigned in-flight items or the assigned A-page prose.

## Verification notes

- The A-page route matches the design constraint to keep the direct `C_5` proof separate from the later star-expansion material.
- The current theorem chain is mathematically coherent on the current bytes:
  the layer lemma feeds the bipartite comb theorem, that theorem feeds the rooted comb extraction theorem, and the final contradiction proof uses the rooted-comb cross-edge witness exactly where the source does.
- The B-page examples and counterexample are finite and correctly distinguish bare combs from rooted stable-tooth combs.
- `boundary-audit` flagged one candidate on the `zero` row of the proof contract for
  `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb`.
  After reading the item, I did not confirm a mathematical defect:
  step `1.2` forces `|V(G)|>0`, the theorem hypothesis has `|X|>=delta|V(G)|` with `delta>0`, and the later divisions by `|X|` are therefore licensed.

## Contract updates

- None. Because no material repair was needed, I left `research/frontier-25-batch-8.proof-contracts.json` unchanged.
- No `verification.judge` record was removed; the assigned draft items have no judge stamp on disk.

## Uneditable defects

- None confirmed.

## Page verdicts

- `the-five-cycle-and-erdos-hajnal`: closed with no edit on the current bytes.
- `the-five-cycle-and-erdos-hajnal-examples`: closed with no edit on the current bytes.

## Checks run

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears.md items/thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side.md items/thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb.md items/lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree.md items/cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree.md items/lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle.md items/thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound.md items/cor-the-five-cycle-has-the-erdos-hajnal-property.md items/ex-a-rooted-stable-tooth-comb-with-two-teeth.md items/ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle.md items/cex-a-comb-can-have-an-edge-between-two-blocks.md items/fs-every-comb-has-pairwise-anticomplete-blocks.md`
  -> `12` checked, `0` failing.
- `node tools/rendercheck.mjs library/combinatorics/the-five-cycle-and-erdos-hajnal.md library/combinatorics/the-five-cycle-and-erdos-hajnal-examples.md`
  -> OK.
- `node tools/content-policy.mjs research/frontier-25-batch-8.pages.json`
  -> `13` scoped items, `0` errors, `0` warnings.
- `node tools/proof-contract.mjs research/frontier-25-batch-8.proof-contracts.json --strict`
  -> `0` errors, `0` warnings, `12/12` items checked.
- `node tools/citation-fidelity.mjs research/frontier-25-batch-8.proof-contracts.json --fail-on-missing-quote`
  -> `26` citations checked, no missing quote, no widening candidate.
- `node tools/boundary-audit.mjs research/frontier-25-batch-8.proof-contracts.json`
  -> one candidate row reviewed by hand, no confirmed defect.
- `git diff --check -- library/combinatorics/the-five-cycle-and-erdos-hajnal.md library/combinatorics/the-five-cycle-and-erdos-hajnal-examples.md items/lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears.md items/thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side.md items/def-rooted-stable-tooth-comb.md items/thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb.md items/lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree.md items/cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree.md items/lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle.md items/thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound.md items/cor-the-five-cycle-has-the-erdos-hajnal-property.md items/ex-a-rooted-stable-tooth-comb-with-two-teeth.md items/ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle.md items/cex-a-comb-can-have-an-edge-between-two-blocks.md items/fs-every-comb-has-pairwise-anticomplete-blocks.md research/frontier-25-batch-8.proof-contracts.json`
  -> clean.

## Blockers

- None.
