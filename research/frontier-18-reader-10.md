# Frontier 18 Reader 10 Report

Run: `frontier-18`
Role: independent reader (`reader-10`)
Batch: `10`
Scope: `library/combinatorics/modules-substitution-and-prime-graphs.md`, `library/combinatorics/modules-substitution-and-prime-graphs-examples.md`, `library/combinatorics/sparse-restricted-subgraphs-and-rodl-nikiforov.md`, and `library/combinatorics/sparse-restricted-subgraphs-and-rodl-nikiforov-examples.md`

Audit in progress. Findings below keep stable ids.

## Findings

### R10-1
Item: `thm-a-bounded-partition-into-weakly-restricted-sets`
Location: [items/thm-a-bounded-partition-into-weakly-restricted-sets.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-a-bounded-partition-into-weakly-restricted-sets.md:54)
Severity: fatal

Step `4.1` does not license the theorem as stated. In the dense branch it uses
`d_G(X_i,X_i)\ge 1-\epsilon/2-1/|X_i|` from
`lem-a-sparse-set-has-small-self-density`, then claims the enlarged part
`Y_i=X_i\cup R` still has self-density at least `1-\epsilon` because `|X_i|` is
"bounded below by step 3.1 and the small-order cases can be absorbed into the
final bound below." No threshold is actually chosen to force
`1/|X_i|+2\lambda\le\epsilon/2`, and no small-order partition is stated. The
current proof therefore establishes the conclusion only after an unstated lower
bound on `|X_i|` and an unstated small-`|V(G)|` exception, while the Statement
quantifies over every `H`-free finite simple graph.

Status: repaired in item text and batch contract.

### R10-2
Item: `fs-a-sparse-set-contains-a-stable-set-of-half-its-size`
Location: [items/fs-a-sparse-set-contains-a-stable-set-of-half-its-size.md](/home/lazyinspirit/Projects/prestige-math-library/items/fs-a-sparse-set-contains-a-stable-set-of-half-its-size.md:31)
Severity: fatal

The refutation’s witness is not well-defined as written. The item says "take a
real `c>0`" and then defines `G` as a disjoint union of `1/c` cliques, each of
order `cn`. That construction only makes sense once `1/c` is chosen to be an
integer, but the proof never makes that choice. A false-statement refutation
needs a concrete witness, and this one is presently invalid.

Status: repaired in item text and batch contract.

### R10-3
Item: `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph`
Location: [research/frontier-18-batch-10.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-10.proof-contracts.json:1)
Severity: nonfatal

The proof contract marks the `iff-forward` and `iff-reverse` boundary rows as
`not_applicable`, but the item’s own Statement contains two explicit
`if and only if` clauses:

- `M≠N`: `\{x,y\}\in E(G)` iff `\{M,N\}\in E(G/\mathcal P)`
- `M=N`: `\{x,y\}\in E(G)` iff `\{x,y\}\in E(G[M])`

This is a contract-disposition error, not a mathematical defect in the item.

Status: repaired in the batch contract.

## Changes

- Rewrote [items/thm-a-bounded-partition-into-weakly-restricted-sets.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-a-bounded-partition-into-weakly-restricted-sets.md:1) so the theorem is proved by a direct repeated-extraction argument from the edge-density form of Rödl’s theorem, with the leftover absorbed into the first extracted part under an explicit quantitative bound.
- Repaired the witness in [items/fs-a-sparse-set-contains-a-stable-set-of-half-its-size.md](/home/lazyinspirit/Projects/prestige-math-library/items/fs-a-sparse-set-contains-a-stable-set-of-half-its-size.md:1) by replacing the ill-defined “`1/c` cliques” construction with a concrete graph: four cliques of order `n/4` for `n>8` divisible by `4`.
- Updated [research/frontier-18-batch-10.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-10.proof-contracts.json:1) for the new theorem proof, the new false-statement witness, and the repaired `iff-forward` / `iff-reverse` rows on `thm-a-modular-partition-its-quotient-and-its-parts-determine-the-graph`.
- Verified the two A-page summaries satisfy the two-paragraph contract and stay under 150 words per paragraph; both B pages still have empty authored bodies.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-a-bounded-partition-into-weakly-restricted-sets.md items/fs-a-sparse-set-contains-a-stable-set-of-half-its-size.md` — pass
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-a-bounded-partition-into-weakly-restricted-sets.md items/fs-a-sparse-set-contains-a-stable-set-of-half-its-size.md` — pass
- `node tools/proof-contract.mjs research/frontier-18-batch-10.proof-contracts.json --strict` — pass
- `node tools/citation-fidelity.mjs research/frontier-18-batch-10.proof-contracts.json --fail-on-missing-quote` — pass
- `node tools/boundary-audit.mjs research/frontier-18-batch-10.proof-contracts.json --fail-on-contradicted` — pass

## Verdicts

- `library/combinatorics/modules-substitution-and-prime-graphs.md`: no fatal mathematical defect confirmed in the opened scoped items on this page. One nonfatal contract-boundary drift was found and repaired (`R10-3`).
- `library/combinatorics/modules-substitution-and-prime-graphs-examples.md`: no finding confirmed in the opened scoped items on this page.
- `library/combinatorics/sparse-restricted-subgraphs-and-rodl-nikiforov.md`: one fatal proof defect was confirmed and repaired in `thm-a-bounded-partition-into-weakly-restricted-sets` (`R10-1`).
- `library/combinatorics/sparse-restricted-subgraphs-and-rodl-nikiforov-examples.md`: one fatal witness defect was confirmed and repaired in `fs-a-sparse-set-contains-a-stable-set-of-half-its-size` (`R10-2`).

Items opened: 41
