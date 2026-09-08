# Phase 2 wave 1 — reader report, batch 9

## Scope opened

Current manifest: `research/phase-2-wave-1-batch-9.pages.json` (22 items; no
cross-batch dependencies in
`research/phase-2-wave-1-batch-9.cross-batch-dependencies.json`).  I read both
assigned pages and every assigned item, rather than relying on the manifest,
contract, or earlier review.

| Page | Kind | Opened item IDs | Verdict |
| --- | --- | --- | --- |
| `library/combinatorics/quantitative-induced-density-and-the-loglog-step.md` | A | `def-induced-copy-density-and-homogeneous-restriction-parameter`; `def-qid-restricted-blockade-with-empty-blocks`; `def-labelled-blowup-and-good-induced-copy`; `lem-good-copy-extension-count`; `lem-few-induced-copies-exclude-a-fixed-labelled-blowup`; `lem-qid-bipartite-density-trimming`; `lem-qid-fixed-size-density-selection`; `lem-local-special-copy-trichotomy`; `lem-qid-maximal-blowup-trichotomy`; `lem-special-copy-trichotomy-produces-a-restricted-blockade`; `def-subreciprocal-function-and-ell-divisibility`; `lem-subreciprocal-functions-close-under-the-density-recursion`; `def-qid-finite-density-recursion-profile`; `lem-qid-logarithmic-and-constant-divisibility`; `lem-ell-divisibility-amplifies-through-a-blockade`; `thm-quantitative-density-theorem-for-ell-divisive-graphs`; `cor-fox-sudakov-quantitative-induced-density-bound`; `thm-loglog-quantitative-induced-density-bound` | Pass after the repairs below. Definitions preserve the labelled-count, empty-block, directionality, floor, and logarithm conventions; the blowup, trichotomy, blockade, and density-profile arguments type-check at their stated boundary cases. |
| `library/combinatorics/quantitative-induced-density-and-the-loglog-step-examples.md` | B | `ex-a-labelled-blowup-and-its-good-copies`; `ex-checking-the-subreciprocal-condition-for-the-quadratic-log-bound`; `ex-checking-the-subreciprocal-condition-for-the-loglog-bound`; `ex-comparing-the-two-quantitative-density-scales` | Pass after the repairs below. The 27 good copies / 126 total labelled embeddings computation and both `x=1/16` substitutions check. |

For the proof interfaces I also opened the current direct suppliers:
`cor-cardinality-of-the-power-set`, `cor-the-averaging-principle`,
`def-blockade-length-and-width`,
`def-complete-anticomplete-pure-and-x-sparse-blockades`,
`def-directional-and-weak-sparsity-between-vertex-sets`,
`def-edge-density-between-vertex-sets`, `def-induced-copy-number`,
`def-induced-embedding-and-induced-copy`, `def-logarithm-to-a-base`,
`lem-integer-part`, `thm-binomial-closed-formula`,
`thm-cardinality-of-a-set-of-functions`, `thm-double-counting`,
`thm-logarithm-change-of-base`, `thm-natural-logarithm-laws`,
`thm-product-rule`, `thm-real-power-laws`, `thm-subset-of-a-finite-set`,
`thm-sum-rule`, and `thm-two-element-subsets-count`.

The primary source was opened independently:
Bucić--Nguyen--Scott--Seymour, *Induced subgraph density. I. A loglog step
towards Erdős--Hajnal*, [arXiv:2301.10147v3](https://arxiv.org/html/2301.10147v3),
sections 3--5 (in particular 2.4/3.1, 4.1--4.4, and 5.2).  Its hypotheses and
directions agree with the current local special-copy, maximal-blowup, blockade,
and density-recursion arguments.

The claim/convention review covered: labelled induced embeddings (including the
null pattern); ordered cross-edge counts when sets overlap; the distinction
between a directional sparse bound and a symmetric density bound; both
directions of a labelled blowup; the `0^0=1` boundary in the local trichotomy;
integer-rounding and singleton cases; QID's explicit empty-block convention;
base-two logarithms; the non-strict copy hypothesis in the density theorem; and
the symbolic, rather than universal numerical, constants in the examples.  The
case splits and inequalities used in each of the 17 proof-bearing items were
read against their stated dependencies and source locator; no unresolved
mathematical obligation remains.

## Repairs made

1. `items/lem-qid-fixed-size-density-selection.md`, proof step 1.1: replaced a
   literal tab followed by `imes` in the displayed ordered-pair domain with
   `\\times`.  The proof now renders the required domain as `$A\\times B$`.
2. `items/ex-checking-the-subreciprocal-condition-for-the-loglog-bound.md`,
   fact F2: added the missing inline-math delimiters around the cited loglog
   fraction and replaced the dangling comma with a period.
3. `items/ex-comparing-the-two-quantitative-density-scales.md`, fact F2: made
   the same rendering repair.
4. `research/phase-2-wave-1-batch-9.proof-contracts.json`: updated the two F2
   contract quotes to the exact current theorem formula.  None of the three
   repaired items had a `verification.judge` record to remove.

These were in-flight assigned items.  No page body, published item, other
batch, or plan was edited.

## Validation and blockers

- Ran `reflow.mts` and focused `precheck.mts` on each repaired item: all three
  passed (and reflow made no further change).
- Ran focused `precheck.mts` on all 17 proof-bearing assigned items: 17 passed,
  0 failed.  The five definitions were read directly.
- Ran `citation-fidelity.mjs` on the batch-9 contract: 49 citations over 22
  authored items, 0 missing quotes and 0 widening candidates.
- `git diff --check` passed for the resulting worktree changes.

There is no batch-9 blocker and no uneditable finding.  A full-repository
`depcheck` remains nonzero because of pre-existing, unrelated repository-wide
errors; it is not evidence against this batch and was not modified.  Next
action: hand this report and the empty findings artifact to the Step-6
collector.
