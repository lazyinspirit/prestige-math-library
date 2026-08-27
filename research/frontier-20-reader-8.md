# Frontier-20 Reader-8 Report

Date: Wednesday, August 26, 2026.
Batch: `research/frontier-20-batch-8.pages.json`
Pages audited: `set-partitions-stirling-numbers-and-exponential-generating-functions`, `set-partitions-stirling-numbers-and-exponential-generating-functions-examples`, `blockades-combs-and-pattern-graphs`, `blockades-combs-and-pattern-graphs-examples`

## Opened scope

- Dispatch and batch artifacts opened: `CLAUDE.md`, `README.md`, `research/frontier-20-dispatch/reader-reader-8.prompt.md`, `research/frontier-20-batch-8.pages.json`, `research/frontier-20-batch-8.coverage.json`, `research/frontier-20-batch-8.proof-contracts.json`, `research/frontier-20-batch-8.notes.md`, and the live autopilot status (`node --import tsx tools/autopilot/bin/autopilot.mts status --repo ../..` via the documented entrypoint).
- Assigned page files opened: `library/combinatorics/set-partitions-stirling-numbers-and-exponential-generating-functions.md`, `library/combinatorics/set-partitions-stirling-numbers-and-exponential-generating-functions-examples.md`, `library/combinatorics/blockades-combs-and-pattern-graphs.md`, `library/combinatorics/blockades-combs-and-pattern-graphs-examples.md`.
- Assigned batch item files opened: all `54` current batch-8 items from the manifest, across both A/B pairs.
- Direct published dependency items opened for verification: `22`.

```text
cor-exponential-reciprocal-and-positivity
cor-power-series-sums-are-smooth-with-coefficient-formula
cor-symmetric-group-has-factorial-cardinality-again
def-c-sparse-and-c-restricted-vertex-set
def-combinatorial-class-and-ordinary-generating-function
def-directional-and-weak-sparsity-between-vertex-sets
def-edges-between-sets-and-pure-mixed-pairs
def-factorial-and-falling-factorial
def-formal-exponential-logarithm-and-powers
def-formal-power-series-and-coefficient-extraction
def-homogeneous-set-and-homogeneous-number
def-permutation-support-disjoint-cycles-and-cycle-type
def-real-exponential-function-and-e
lem-components-are-anticomplete-and-anticomponents-complete
thm-cardinality-of-a-set-of-functions
thm-double-series-fubini
thm-every-nontrivial-graph-is-connected-or-anticonnected
thm-exponential-addition-formula
thm-formal-composition-laws
thm-formal-exponential-logarithm-identities
thm-summable-families-and-rearrangement
thm-the-number-of-surjections
```

- Primary source loci reopened directly for the source-backed blockade items:
  - Chudnovsky--Scott--Seymour--Spirkl, `arXiv:2102.04994v1`, §5 lines `320-322`.
  - Huang--Ju--Zhou, `arXiv:2606.06258v2`, Lemmas `2.3/2.4/2.8` at lines `277-317`.
  - Nguyen--Scott--Seymour, `arXiv:2312.15333v2`, Theorem `7.4` and its proof at lines `547-568`.

## Confirmed defects repaired

1. Subject: `items/lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets.md`
   Location: `Facts & Assumptions`, local fact `[L1]`
   Defect: `unlicensed-inference` / `citation-inaccurate`
   Severity: `fatal`
   Evidence: the proof depended on the cograph pure-pair split for nontrivial `P_4`-free graphs, but the current item cited no exact dependency or source locator for that structural fact.
   Repair: added the exact primary-source locator to `[L1]` and refreshed the touched proof-contract entry.

2. Subject: `items/cor-touchards-congruence-for-bell-numbers.md`
   Location: proof classification step, now steps `1.2` and `2.1`
   Defect: `unlicensed-inference`
   Severity: `fatal`
   Evidence: the previous proof asserted, without justification, that a `\sigma`-fixed partition can only realize the moved `p`-cycle as `p` singletons or one all-encompassing block. That classification is the core orbit argument.
   Repair: added explicit block-orbit reasoning, introduced `[L1]` for the block-permutation fact, renumbered the closing step canonically, and refreshed the touched proof-contract entry.

3. Subject: `items/fs-blockade-order-never-matters-for-x-sparsity.md`
   Location: `Facts & Assumptions`, section header, and steps `1.1-1.2`
   Defect: `ill-formed`
   Severity: `nonfatal`
   Evidence: the witness reused `x` both for the unique vertex of `X` and for the sparsity parameter, and the noncanonical `## Refutation` header left the current contract-regeneration tool unable to re-read the item from disk.
   Repair: renamed the vertex/parameter to `u` and `c`, restored the canonical `## Proof` header, added the exact ordered-blockade fact `[L1]`, and refreshed the touched proof-contract entry.

No touched draft item carried a `verification.judge` record, so no stale judge block had to be removed.

## Uneditable artifact drift

- `research/frontier-20-batch-8.pages.json` is stale against the current item dependency lists for `9` ids / `15` edges.

```text
missing from manifest:
cor-dobinski-formula-for-bell-numbers +cor-power-series-sums-are-smooth-with-coefficient-formula
def-sparse-orientation-of-a-blockade +def-directional-and-weak-sparsity-between-vertex-sets
def-sparse-orientation-of-a-blockade +def-blockade-length-and-width

extra in manifest:
cor-bell-number-binomial-recurrence -thm-stirling-second-kind-recurrence
thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials -thm-powers-expand-in-the-falling-factorial-basis
thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials -thm-signless-first-kind-recurrence-and-rising-factorial-expansion
cor-touchards-congruence-for-bell-numbers -def-binomial-coefficient
cor-touchards-congruence-for-bell-numbers -thm-binomial-closed-formula
cor-touchards-congruence-for-bell-numbers -thm-euclids-lemma
cor-touchards-congruence-for-bell-numbers -lem-coprime-divides-product
cor-touchards-congruence-for-bell-numbers -def-congruence-modulo-an-integer
ex-involutions-of-four-and-their-cycle-decomposition -def-signed-and-signless-stirling-first-kind
rem-blockade-conventions-and-order -def-directional-and-weak-sparsity-between-vertex-sets
def-comb-in-a-graph -def-edges-between-sets-and-pure-mixed-pairs
def-sparse-orientation-of-a-blockade -def-complete-anticomplete-pure-and-x-sparse-blockades
```

- Step-6a does not permit manifest edits, so this stayed in the report only. I did not place it in the findings JSON because the required schema has no manifest subject type.

## Page verdicts

- `library/combinatorics/set-partitions-stirling-numbers-and-exponential-generating-functions.md`: pass unchanged; no A-page prose defect confirmed.
- `library/combinatorics/set-partitions-stirling-numbers-and-exponential-generating-functions-examples.md`: pass unchanged; no B-page prose defect confirmed.
- `library/combinatorics/blockades-combs-and-pattern-graphs.md`: pass unchanged after the repaired in-flight item defects; no A-page prose edit was needed.
- `library/combinatorics/blockades-combs-and-pattern-graphs-examples.md`: pass unchanged; no B-page prose defect confirmed.

## Verification and blockers

- Ran `node tools/tsx-run.mjs tools/reflow.mts items/lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets.md items/cor-touchards-congruence-for-bell-numbers.md items/fs-blockade-order-never-matters-for-x-sparsity.md`.
  Result: the three touched items are now on canonical bytes.
- Ran `node tools/tsx-run.mjs tools/precheck.mts items/lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets.md items/cor-touchards-congruence-for-bell-numbers.md items/fs-blockade-order-never-matters-for-x-sparsity.md`.
  Result: `3 checked, 0 failing`.
- Ran `node tools/regen-contract-entries.mjs research/frontier-20-batch-8.proof-contracts.json lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets cor-touchards-congruence-for-bell-numbers fs-blockade-order-never-matters-for-x-sparsity`.
  Result: `regenerated 3, skipped 0`.
- Ran `node tools/proof-contract.mjs research/frontier-20-batch-8.proof-contracts.json --strict`.
  Result: `0 error(s), 0 warning(s), 28/28 item(s) checked`.
- Ran `node tools/rendercheck.mjs items/lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets.md items/cor-touchards-congruence-for-bell-numbers.md items/fs-blockade-order-never-matters-for-x-sparsity.md`.
  Result: clean on all `3` changed items.
- Ran `node tools/content-policy.mjs research/frontier-20-batch-8.pages.json`.
  Result: `54 scoped item(s), 0 error(s), 0 warning(s)`.
- Ran `node tools/boundary-audit.mjs research/frontier-20-batch-8.proof-contracts.json --fail-on-contradicted`.
  Result: the tool still reports candidate rows for `thm-vertical-egfs-for-the-stirling-triangles` and `lem-maximal-pattern-pure-blockades-force-many-blocks`; I read those items and did not confirm an additional page/item/dependency defect from the heuristic output.

Blocker: none.
