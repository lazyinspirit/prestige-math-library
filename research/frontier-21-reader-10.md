# frontier-21 - reader-10 report

Run: `frontier-21`  
Role: independent reader (`reader-10`)  
Batch: `10`  
Date: Thursday, August 27, 2026

## Scope opened

- Control and design artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-21-reader.task.md`, `research/frontier-21-beta-10.task.md`, `research/frontier-21-dispatch/reader-reader-10.prompt.md`, `research/frontier-21-batch-10.pages.json`, `research/frontier-21-batch-10.coverage.json`, `research/frontier-21-batch-10.proof-contracts.json`, `research/frontier-21-batch-10.notes.md`, the relevant `research/plan-combinatorics-and-categories.md` design rows, and the live `.autopilot` status.
- Assigned page files opened:
  - `library/combinatorics/pure-pairs-forests-and-path-antipath-classes.md`
  - `library/combinatorics/pure-pairs-forests-and-path-antipath-classes-examples.md`
  - `library/combinatorics/quotient-blockades-and-mixing-relations.md`
  - `library/combinatorics/quotient-blockades-and-mixing-relations-examples.md`
- Assigned item scope: opened all `29` assigned item paths from the manifest.
  - Extant on current bytes: `20`
  - Missing on current bytes: `9`
- Dependency items opened for verification: `22`

```text
def-hereditary-graph-class
def-edges-between-sets-and-pure-mixed-pairs
def-h-free-and-family-free-graph
def-standard-complete-bipartite-path-and-cycle-graphs
def-connected-graph-and-connected-component
def-anticonnected-graph-and-anticonnected-component
def-graph-isomorphism-and-complement
thm-every-nontrivial-graph-is-connected-or-anticonnected
def-clique-stable-set-and-numbers
cor-connected-components-partition-the-vertex-set
lem-anticonnected-components-are-complement-components
lem-components-are-anticomplete-and-anticomponents-complete
def-homogeneous-set-and-homogeneous-number
def-erdos-hajnal-property-and-constant
thm-real-power-laws
cor-rodl-in-the-edge-density-form
lem-a-weakly-sparse-set-has-a-large-sparse-subset
def-graph-adjacency-incidence-neighbourhood-and-degree
def-tree-forest-and-leaf
def-blockade-length-and-width
lem-purity-symmetry-and-complementation
lem-complement-commutes-with-induced-subgraphs
```

## Editable defects confirmed and repaired

- `items/ex-the-quotient-witness-reduction-in-a-four-block-configuration.md`
  - Confirmed defect: the title and `Given:` line called the setup a "four-block configuration", but the current example uses exactly three original blocks `A_1`, `A_2`, and `B`.
  - Repair: renamed it to a three-block configuration, updated the matching `Given:` line, and regenerated the batch-10 proof-contract entry.
  - No `verification.judge` record existed on the item, so none was removed.

## Editable defects confirmed and left unrepaired

- Missing assigned batch items on the current bytes. These are fatal scope gaps, but filling them would require substantive step-5 authoring rather than a narrow reader-side repair.

```text
A-page items missing:
thm-erdos-hajnal-pach-pure-pair-theorem
thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex
thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property
cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property
thm-leaf-deletion-preserves-virality-of-a-finite-family
thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family
cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property

B-page items missing:
ex-the-forest-theorem-specialized-to-the-four-vertex-path
ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case
```

- I did not confirm any additional mathematical, citation, or rendering defect in the `20` extant assigned item files after opening their dependency closure.

## Uneditable defects

- None confirmed on the current page bytes or on published dependency items.

## Notes on artifact scope

- I did not edit `research/frontier-21-batch-10.pages.json`. It still carries the manifest snapshot for the nine missing items and still uses the pre-repair example title. Under the Step-6a license that generated manifest is evidence only; the live item bytes and refreshed proof contract are the editable content sources.

## Page verdicts

- `library/combinatorics/pure-pairs-forests-and-path-antipath-classes.md`: fail on current bytes because seven manifest-declared A-page items are still missing.
- `library/combinatorics/pure-pairs-forests-and-path-antipath-classes-examples.md`: fail on current bytes because two manifest-declared B-page examples are still missing.
- `library/combinatorics/quotient-blockades-and-mixing-relations.md`: pass; all seven assigned A-page items exist and the current proofs checked clean against the opened dependency closure.
- `library/combinatorics/quotient-blockades-and-mixing-relations-examples.md`: pass after the repaired title/`Given:` defect in `ex-the-quotient-witness-reduction-in-a-four-block-configuration`.

## Verification

- `node tools/rendercheck.mjs library/combinatorics/pure-pairs-forests-and-path-antipath-classes.md library/combinatorics/pure-pairs-forests-and-path-antipath-classes-examples.md library/combinatorics/quotient-blockades-and-mixing-relations.md library/combinatorics/quotient-blockades-and-mixing-relations-examples.md <20 extant assigned item files>`
  - Result: `24` files checked, all clean.
- `node tools/tsx-run.mjs tools/precheck.mts <16 extant proof-bearing assigned item files>`
  - Result: `16 checked, 0 failing - all clean`.
- `node tools/citation-fidelity.mjs research/frontier-21-batch-10.proof-contracts.json --fail-on-missing-quote`
  - Result: `52 citation(s) over 16 authored item(s)`; no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-21-batch-10.proof-contracts.json --fail-on-contradicted`
  - Result: no contradicted dispositions.
- `node tools/content-policy.mjs research/frontier-21-batch-10.pages.json`
  - Result: `29 scoped item(s), 9 error(s), 0 warning(s)`, all nine errors being the missing assigned item files listed above.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-the-quotient-witness-reduction-in-a-four-block-configuration.md`
  - Result: `unchanged`.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-the-quotient-witness-reduction-in-a-four-block-configuration.md`
  - Result: `1 checked, 0 failing - all clean`.
- `node tools/rendercheck.mjs items/ex-the-quotient-witness-reduction-in-a-four-block-configuration.md`
  - Result: clean.
- `node tools/regen-contract-entries.mjs research/frontier-21-batch-10.proof-contracts.json ex-the-quotient-witness-reduction-in-a-four-block-configuration`
  - Result: `regenerated 1, skipped 0`.
- `node tools/proof-contract.mjs research/frontier-21-batch-10.proof-contracts.json --strict`
  - Result: `0 error(s), 0 warning(s), 16/16 item(s) checked`.

## Blocker

- The page-409 pair is still incomplete on current bytes: nine manifest-declared item files are absent, seven on the A page and two on the B page. That is substantive authoring work rather than a local reader repair.

Opened count: `29` assigned item paths (`20` extant, `9` missing), `22` dependency items, `4` assigned page files, and `13` control/design artifacts.
