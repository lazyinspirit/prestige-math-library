# Frontier-27 Reader-7 Report

Run: `frontier-27`  
Role: Step 6a independent reader  
Batch: `7`  
Date: `2026-08-31`

## Opened scope

- Control artifacts: `README.md`, `CLAUDE.md`, `research/frontier-27-reader.task.md`, `research/frontier-27-beta-7.task.md`, `research/frontier-27-batch-7.pages.json`, `research/frontier-27-batch-7.coverage.json`, `research/frontier-27-batch-7.notes.md`, `research/frontier-27-batch-7.proof-contracts.json`, `research/plan-combinatorics-and-categories.md` at the batch rows and item-requirement block, `research/plan-spec.json` at the matching page entries, `.autopilot/status.md`, and the recent `git log` over `.autopilot` and the batch artifacts.
- Live-run context: `.autopilot/status.md` still reports `frontier-23` in `5-author`. I used the task-named `frontier-27` batch-7 artifacts as the scope authority and treated the run mismatch as context rather than a blocker.
- Assigned pages: `library/combinatorics/small-graph-erdos-hajnal-consequences.md`, `library/combinatorics/small-graph-erdos-hajnal-consequences-examples.md`, `library/combinatorics/iterative-restriction-and-comb-extraction-lemmas.md`, `library/combinatorics/iterative-restriction-and-comb-extraction-lemmas-examples.md`.
- Assigned A-page items opened: `cor-the-four-vertex-path-has-the-erdos-hajnal-property`, `thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property`, `cor-the-bull-graph-has-the-erdos-hajnal-property`, `lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement`, `thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property`, `def-left-six-vertex-prime-h-graph`, `def-right-six-vertex-prime-h-graph`, `cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property`, `def-e-graph-and-co-e-graph`, `def-bird-graph-and-co-bird-graph`, `def-h-plus-and-h-minus-for-two-special-vertices`, `def-h-zero-through-h-five`, `cor-the-h-zero-graph-has-the-erdos-hajnal-property`, `def-leaf-reducible-finite-family`, `lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair`, `lem-leaf-reducible-families-yield-a-large-anticomplete-pair-or-a-more-restricted-induced-subgraph`, `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold`, `lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair`.
- Assigned B-page items opened: `ex-the-left-six-vertex-prime-h-graph-is-prime-and-leaf-deletes-to-the-bull`, `ex-the-right-six-vertex-prime-h-graph-is-the-complement-of-the-left-one-and-is-prime`, `ex-the-e-graph-and-co-e-graph-by-adjacency`, `ex-the-bird-graph-and-co-bird-graph-by-adjacency`, `ex-h-zero-is-the-five-wheel`, `ex-h-one-and-h-five-arise-by-the-prescribed-leaf-attachments`, `ex-the-five-vertex-path-is-leaf-reducible`, `ex-a-nearly-covered-sparse-pair-at-small-parameters`, `ex-a-numeric-run-of-the-lemma-two-nine-iteration`, `ex-a-four-tooth-comb-with-an-external-complete-vertex`.
- Unique direct dependency items opened outside the batch: 29 total — `cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter`, `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property`, `cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order`, `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence`, `cor-the-five-cycle-has-the-erdos-hajnal-property`, `cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property`, `def-bull-graph`, `def-c-sparse-and-c-restricted-vertex-set`, `def-comb-in-a-graph`, `def-directional-and-weak-sparsity-between-vertex-sets`, `def-erdos-hajnal-property-and-constant`, `def-graph-adjacency-incidence-neighbourhood-and-degree`, `def-graph-isomorphism-and-complement`, `def-h-free-and-family-free-graph`, `def-induced-copy-number`, `def-module-of-a-graph`, `def-prime-graph`, `def-standard-complete-bipartite-path-and-cycle-graphs`, `def-substitution-of-a-graph-for-a-vertex`, `def-tree-forest-and-leaf`, `def-viral-property-for-a-finite-family`, `lem-a-dense-bipartite-side-has-a-small-hitting-set`, `prop-erdos-hajnal-property-is-complement-invariant`, `thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side`, `thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four`, `thm-finite-family-erdos-hajnal-polynomial-rodl-and-viral-equivalence`, `thm-leaf-deletion-preserves-virality-of-a-finite-family`, `thm-prime-graphs-are-the-graphs-that-are-not-substitutions`, `thm-substitution-preserves-the-erdos-hajnal-property`.

## Design/spec check

- The design rows at `research/plan-combinatorics-and-categories.md:3910-3911`, the live `research/plan-spec.json` entries, and `research/frontier-27-batch-7.pages.json` agree on page order, titles, companions, and prerequisites.
- The design requirement that B pages verify the figures by explicit adjacency data is met by the current examples pages.

## Confirmed defects repaired

1. `items/lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair.md`
   defect: the proof constructs a high-degree witness vertex `v`, but the Statement discarded that witness. The downstream comb-extraction lemma then relied on data hidden in this proof rather than in the cited statement.
   repair: strengthened the conclusion to return `v` explicitly, with `A \subseteq V(G)\setminus N_G[v]` and `B \subseteq N_G(v)`, and updated the closing proof step to certify the four stated clauses.

2. `items/lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair.md`
   defect: step `6.1` appealed to “the witness vertex used in the proof of [L1]”, but [L1] cited only the predecessor's Statement. That was an unlicensed inference from a hidden dependency proof.
   repair: rewrote step `1.3` to import the repaired predecessor conclusion directly, made the `d=\tfrac12` instantiation of the comb theorem explicit in step `3.1`, and rewrote step `6.1` to use only facts present in the cited statement.

3. `research/frontier-27-batch-7.proof-contracts.json`
   repair: regenerated the two changed contract entries so the updated predecessor quote, derivations, and citation-use data match current disk. No stale `verification.judge` record was present on the repaired draft items.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair.md items/lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair.md items/lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair.md`
- `node tools/regen-contract-entries.mjs research/frontier-27-batch-7.proof-contracts.json lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair`
- full-batch precheck over the 21 proof-bearing batch-7 items from the contract scope
- `node tools/proof-contract.mjs research/frontier-27-batch-7.proof-contracts.json --strict --items lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair,lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair`
- `node tools/proof-contract.mjs research/frontier-27-batch-7.proof-contracts.json --strict`
- `node tools/rendercheck.mjs library/combinatorics/small-graph-erdos-hajnal-consequences.md library/combinatorics/small-graph-erdos-hajnal-consequences-examples.md library/combinatorics/iterative-restriction-and-comb-extraction-lemmas.md library/combinatorics/iterative-restriction-and-comb-extraction-lemmas-examples.md items/lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair.md items/lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair.md`
- `node tools/content-policy.mjs research/frontier-27-batch-7.pages.json`
- `node tools/citation-fidelity.mjs research/frontier-27-batch-7.proof-contracts.json --items-dir items`
- `node tools/boundary-audit.mjs research/frontier-27-batch-7.proof-contracts.json --items-dir items`
- `node tools/finite-smoke.mjs research/frontier-27-batch-7.proof-contracts.json --items lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair,lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair`
- `git diff --check -- items/lem-a-sparse-graph-without-a-large-sparse-pair-has-a-large-nearly-covered-sparse-pair.md items/lem-a-sparse-graph-either-sparsifies-further-or-yields-a-comb-or-a-large-sparse-pair.md research/frontier-27-batch-7.proof-contracts.json`

Results:

- changed-item precheck: `2/2` clean
- full-batch precheck: `21/21` clean
- changed-item `proof-contract --strict`: `0` errors, `0` warnings, `2/2` checked
- full-batch `proof-contract --strict`: `0` errors, `3` shotgun-bracket warnings on three small-graph inventory items; after manual reread I did not find a mathematical defect behind those advisory warnings
- `rendercheck`: clean on the four page files and the two repaired items
- `content-policy`: `28` scoped items, `0` errors, `0` warnings
- `citation-fidelity`: `66` citations, no missing quote and no widening candidates
- `boundary-audit`: two contradicted-disposition candidates, both false positives on manual read; no boundary defect remained
- `finite-smoke`: `0` obligations over `0/2` changed items
- `git diff --check`: clean on the touched batch-local paths

## Page verdicts

- `small-graph-erdos-hajnal-consequences`: pass. The current title, summary, small-graph consequences, six-vertex figure definitions, and `H_0` corollary match the opened dependencies and the design scope.
- `small-graph-erdos-hajnal-consequences-examples`: pass. The examples do the required adjacency-data checks for the six-vertex figures, `E`, Bird, and the `H_i` family; no B-page-body edit was needed.
- `iterative-restriction-and-comb-extraction-lemmas`: pass after the two sparse-pair/comb repairs above. The repaired witness exposure now makes the comb-outcome vertex legitimate from cited statements alone.
- `iterative-restriction-and-comb-extraction-lemmas-examples`: pass. The numerical and finite-adjacency examples remain consistent with the repaired A-page lemmas; no B-page-body edit was needed.

## Uneditable defects and blockers

- No remaining uneditable in-scope defect was found in an `in-flight-item`, `page`, or `published-dependency`.
- No blocker remains.
