# frontier-22 reader-9 report

Date: Friday, August 28, 2026.
Batch: `research/frontier-22-batch-9.pages.json`

## Opened scope

- Control artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-22-reader.task.md`, `research/frontier-22-beta-9.task.md`, `research/frontier-22-batch-9.pages.json`, `research/frontier-22-batch-9.coverage.json`, `research/frontier-22-batch-9.proof-contracts.json`, `research/frontier-22-batch-9.notes.md`, `research/frontier-22-step6-hash-9-pre.json`, `research/plan-combinatorics-and-categories.md`, the relevant `research/plan-spec.json` slice, and the live run state from `(cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..)`.
- Assigned page paths checked: `library/combinatorics/cographs-perfect-patterns-and-pure-pairs.md` and `library/combinatorics/cographs-perfect-patterns-and-pure-pairs-examples.md`.
- Prerequisite page paths opened for dependency context: `library/combinatorics/modules-substitution-and-prime-graphs.md`, `library/combinatorics/modules-substitution-and-prime-graphs-examples.md`, `library/combinatorics/pure-pairs-forests-and-path-antipath-classes.md`, and `library/combinatorics/pure-pairs-forests-and-path-antipath-classes-examples.md`.
- Assigned item scope: opened all `26` batch-owned item files on the current bytes (`21` A-page items and `5` B-page items).
- Dependency items opened for verification: `28`.

```text
cor-connected-components-partition-the-vertex-set
def-anticonnected-graph-and-anticonnected-component
def-blockade-length-and-width
def-clique-stable-set-and-numbers
def-complete-anticomplete-pure-and-x-sparse-blockades
def-connected-graph-and-connected-component
def-edges-between-sets-and-pure-mixed-pairs
def-erdos-hajnal-property-and-constant
def-graph-isomorphism-and-complement
def-h-free-and-family-free-graph
def-homogeneous-set-and-homogeneous-number
def-induced-embedding-and-induced-copy
def-module-of-a-graph
def-pattern-graph-of-a-pure-blockade
def-prime-graph
def-proper-vertex-colouring-and-chromatic-number
def-real-power
def-standard-complete-bipartite-path-and-cycle-graphs
def-subgraph-induced-subgraph-and-spanning-subgraph
def-finite-cardinality
lem-anticonnected-components-are-complement-components
lem-complement-commutes-with-induced-subgraphs
lem-components-are-anticomplete-and-anticomponents-complete
lem-purity-symmetry-and-complementation
lem-unions-of-components-and-of-anticomponents-are-modules
thm-clique-independence-chromatic-bounds
thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected
thm-real-power-laws
```

## Confirmed defects

1. [items/def-cograph-by-singletons-disjoint-union-and-complete-connection.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-cograph-by-singletons-disjoint-union-and-complete-connection.md:27)
   Disposition: repaired in the owned A-page item.
   Severity: fatal.
   Evidence: the old recursive definition omitted the null graph, but the live downstream proofs in [items/lem-induced-subgraphs-of-cographs-are-cographs.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-induced-subgraphs-of-cographs-are-cographs.md:44) and [items/thm-cographs-are-exactly-the-p-four-free-graphs.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-cographs-are-exactly-the-p-four-free-graphs.md:86) both treated the null graph as a cograph. I added the null-graph clause and rewrote the equivalence accordingly.

2. [items/lem-induced-subgraphs-of-cographs-are-cographs.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-induced-subgraphs-of-cographs-are-cographs.md:44)
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: step `1.1` had said the recursive definition already made the null graph a cograph; that was false on the old bytes. The repaired base case now matches the repaired definition explicitly.

3. [items/thm-cographs-are-perfect.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-cographs-are-perfect.md:38)
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: fatal.
   Evidence: the theorem states every cograph is perfect, but the old base case only handled one-vertex cographs even though the live page also needed the null cograph case. I widened the setup and base step to cover null and one-vertex graphs.

4. [items/ex-the-four-cycle-is-a-cograph.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-the-four-cycle-is-a-cograph.md:35)
   Disposition: repaired in the owned B-item and synced into the batch proof contract.
   Severity: nonfatal.
   Evidence: after the cograph-definition repair, fact `L1` could no longer be stated as an equivalence using only singleton-generated graphs; the example only needs the forward implication, so I narrowed the fact to that claim.

5. [items/def-tau-critical-graph.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-tau-critical-graph.md:36)
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: nonfatal.
   Evidence: the old final sentence attributed nonemptiness to clause `2`, but the null graph already fails clause `1` because the library convention gives `0^\tau=0` for `\tau>0`.

6. [items/def-blockade-rainbow-induced-copy.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-blockade-rainbow-induced-copy.md:31)
   Disposition: repaired in the owned A-page item and synced into the batch proof contract.
   Severity: nonfatal.
   Evidence: the displayed definition was split across two source lines inside one `$$...$$` block, and `rendercheck` flagged it as a real renderer failure. I rewrote it onto one source line.

## Edits

- Patched [items/def-cograph-by-singletons-disjoint-union-and-complete-connection.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-cograph-by-singletons-disjoint-union-and-complete-connection.md:1).
- Patched [items/lem-induced-subgraphs-of-cographs-are-cographs.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-induced-subgraphs-of-cographs-are-cographs.md:1).
- Patched [items/thm-cographs-are-perfect.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-cographs-are-perfect.md:1).
- Patched [items/ex-the-four-cycle-is-a-cograph.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-the-four-cycle-is-a-cograph.md:1).
- Patched [items/def-tau-critical-graph.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-tau-critical-graph.md:1).
- Patched [items/def-blockade-rainbow-induced-copy.md](/home/lazyinspirit/Projects/prestige-math-library/items/def-blockade-rainbow-induced-copy.md:1).
- Refreshed the affected citation and derivation rows in [research/frontier-22-batch-9.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-22-batch-9.proof-contracts.json:1).
- Wrote this report.
- Wrote `research/frontier-22-reader-findings-9.json`.

## Uneditable control-artifact drift

- [research/frontier-22-batch-9.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-22-batch-9.pages.json:78) still records the earlier Harju/degree-count strategy and old dependency list for `thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four`, while the live item file now proves the theorem by contradiction through `P_4`-freeness, cographs, and modules.
- [research/frontier-22-batch-9.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-22-batch-9.pages.json:288) still says `ex-the-four-cycle-is-a-cograph` is the complete connection of two disjoint edges. The live example at [items/ex-the-four-cycle-is-a-cograph.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-the-four-cycle-is-a-cograph.md:45) correctly uses two edgeless two-vertex graphs; the join of two edges is `K_4`, not `C_4`.
- I left those rows untouched because this dispatch permits item/A-page repair, not manifest rewrites. They are report-only and out of the findings JSON schema.

## Page verdicts

- `library/combinatorics/cographs-perfect-patterns-and-pure-pairs.md`: sufficient on the current bytes after the six batch-local repairs.
- `library/combinatorics/cographs-perfect-patterns-and-pure-pairs-examples.md`: sufficient on the current bytes.

## Verification

- `node tools/coverage-checklist.mjs research/frontier-22-batch-9.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 26 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-22-batch-9.pages.json`
  Result: `content-policy: 26 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/tsx-run.mjs tools/reflow.mts items/def-cograph-by-singletons-disjoint-union-and-complete-connection.md items/lem-induced-subgraphs-of-cographs-are-cographs.md items/thm-cographs-are-perfect.md items/ex-the-four-cycle-is-a-cograph.md items/def-tau-critical-graph.md items/def-blockade-rainbow-induced-copy.md`
  Result: `lem-induced-subgraphs-of-cographs-are-cographs`, `thm-cographs-are-perfect`, and `ex-the-four-cycle-is-a-cograph` reflowed; the other three changed items were already stable.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-cograph-by-singletons-disjoint-union-and-complete-connection.md items/lem-induced-subgraphs-of-cographs-are-cographs.md items/thm-cographs-are-perfect.md items/ex-the-four-cycle-is-a-cograph.md items/def-tau-critical-graph.md items/def-blockade-rainbow-induced-copy.md`
  Result: `3 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-22-batch-9.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 19/19 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-22-batch-9.proof-contracts.json --items-dir items`
  Result: `96 citation(s) over 19 authored item(s)` with no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-22-batch-9.proof-contracts.json --items-dir items`
  Result: `152 rows` with `3` heuristic candidates. I re-read all three and did not confirm a live defect: the empty-family parameters in `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations` and `prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical` do not create a missing proof branch on the current text, and the sum in `thm-pure-blockades-with-cograph-patterns-have-additive-kappa` ranges over blockade length `t>=1`.
- `node tools/rendercheck.mjs ...batch-9 item/page file list...`
  Result: `OK — 28 file(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json | tail -n 5`
  Result: `OK`, with only the standing note that many planned pages still have no item list.

## Blockers

- No mathematical blocker remains on the current page/item bytes.
- The only live issue is the report-only `research/frontier-22-batch-9.pages.json` drift above, which this dispatch does not authorize me to rewrite.
