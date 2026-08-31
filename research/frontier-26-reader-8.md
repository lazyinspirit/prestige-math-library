# frontier-26 reader-8 report

Date: Sunday, August 30, 2026.

## Opened scope

- Control and task artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`,
  `research/frontier-26-reader.task.md`,
  `research/frontier-26-dispatch/reader-reader-8.prompt.md`, live run state from
  `.autopilot/state.json`, and the Step-6 driver/checking code in
  `tools/autopilot/stages/mathlib.step6.mts` and `tools/step6-scope.mjs`.
- Batch artifacts: `research/frontier-26-batch-8.pages.json`,
  `research/frontier-26-batch-8.coverage.json`,
  `research/frontier-26-batch-8.notes.md`,
  `research/frontier-26-batch-8.proof-contracts.json`, and
  `research/frontier-26-step6-hash-8-pre.json`.
- Assigned pages: `library/combinatorics/star-expansions-and-erdos-hajnal.md`,
  `library/combinatorics/star-expansions-and-erdos-hajnal-examples.md`,
  `library/combinatorics/iterative-sparsification-and-the-five-vertex-path.md`,
  and
  `library/combinatorics/iterative-sparsification-and-the-five-vertex-path-examples.md`.
- Assigned items: all 47 manifest items under `items/` for pages `417`-`420`
  (16 A-page items and 5 B-page examples for `star-expansions-and-erdos-hajnal`,
  plus 22 A-page items and 4 B-page examples for
  `iterative-sparsification-and-the-five-vertex-path`).
- External dependency items opened for verification: `cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree`,
  `cor-rodl-every-h-free-graph-has-a-linear-restricted-set`,
  `cor-single-graph-erdos-hajnal-polynomial-rodl-and-viral-equivalence`,
  `def-anticonnected-graph-and-anticonnected-component`,
  `def-blockade-length-and-width`, `def-blockade-rainbow-induced-copy`,
  `def-c-sparse-and-c-restricted-vertex-set`,
  `def-cograph-by-singletons-disjoint-union-and-complete-connection`,
  `def-complete-anticomplete-pure-and-x-sparse-blockades`,
  `def-connected-graph-and-connected-component`,
  `def-directional-and-weak-sparsity-between-vertex-sets`,
  `def-edge-density-between-vertex-sets`, `def-finite-simple-graph`,
  `def-graph-adjacency-incidence-neighbourhood-and-degree`,
  `def-graph-isomorphism-and-complement`,
  `def-h-free-and-family-free-graph`,
  `def-induced-embedding-and-induced-copy`,
  `def-pattern-graph-of-a-pure-blockade`,
  `def-polynomial-rodl-property-for-a-finite-family`,
  `def-rooted-stable-tooth-comb`,
  `def-sparse-orientation-of-a-blockade`,
  `def-standard-complete-bipartite-path-and-cycle-graphs`,
  `def-subgraph-induced-subgraph-and-spanning-subgraph`,
  `def-substitution-of-a-graph-for-a-vertex`,
  `def-tree-forest-and-leaf`,
  `lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree`,
  `lem-components-are-anticomplete-and-anticomponents-complete`,
  `lem-restrictedness-is-complement-invariant`,
  `prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical`,
  `prop-erdos-hajnal-property-is-complement-invariant`,
  `prop-erdos-hajnal-property-passes-to-hereditary-subclasses`,
  `thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side`,
  `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb`,
  `thm-complete-or-anticomplete-blockade-hypotheses-force-restricted-induced-subgraphs`,
  `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex`,
  `thm-nikiforov-few-induced-copies-force-a-linear-restricted-set`,
  `thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades`, and
  `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations`.
- Source slices reopened independently in the cited primaries: `arXiv:2102.04994v1`
  at Sections `6`-`8` (especially Theorems `6.6`, `6.7`, `7.2`, and `8.1`),
  `arXiv:2312.15333v2` at Lemma `5.2`, Lemma `5.3`, Lemma `5.4`, Theorem `6.1`,
  Lemma `7.1`, Lemma `7.2`, and Lemma `7.3`, `arXiv:2606.06258v2` at
  Theorems `1.2`, `1.3`, `1.6`, and the Theorem `1.9` discussion, and
  `arXiv:1809.00919` at Theorem `2.1` and its sketch route.

## Edits kept

- `items/lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components.md`
  Replaced the incorrect six-vertex description with the actual hatted-five-cycle
  witness on `v,a_i,a_j,x,y,u`, matching the source proof route.
- `items/ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five.md`
  Rewrote the witness as the source's five-vertex obstruction
  `v,a_i,u,z,w`, with the complement-of-`P_5` edge/nonedge pattern stated
  exactly.
- `research/frontier-26-batch-8.proof-contracts.json`
  Regenerated the repaired contract entry for
  `lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components`.
  The example entry is still manual-only because `regen-contract-entries` skips
  items with no parsed facts.

## Confirmed defects repaired

1. `items/lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components.md:49`
   The prior proof called the six-vertex walk `v-a_i-x-y-z-a_j-v` a
   "five-cycle with a hat", which is false on its face and did not match the
   source's actual witness.
2. `items/ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five.md:28`
   The previous example used the wrong finite witness. Its five chosen vertices
   did not realize `\overline{P_5}`; the source obstruction instead uses one
   outside vertex, one tooth, and three block vertices.

## Remaining confirmed defects

1. `items/lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair.md:49`
   The current proof sets `A:=N(v)` for a maximum-degree vertex in a
   `c`-sparse graph, so it gives `|A|\le c|V(G)|`, while the statement requires
   `|A|\ge c|V(G)|`. The source Claim `5.2.1` instead constructs a large set
   `A\subseteq V(G)\setminus(N[v])` with size about `(1-3y)|V(G)|`. This is a
   fatal mathematical defect, not a contract-only drift.
2. `items/lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs.md:51`
   The proof collapses the full maximal-blockade iteration of source Lemma `5.4`
   into a two-line "minimal density threshold" contradiction. Local input `[L1]`
   does not supply conclusion `2` as written, and the quantitative iteration
   hypotheses from the source are missing.
3. `items/lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade.md:44`
   Step `2.1` appeals to an unnamed "source case analysis" and omits the
   quantitative mixed-block union argument used in source Claim `7.1.2`. On the
   current bytes, no contradiction is derived from the stated local data.
4. `items/thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement.md:62`
   Step `3.1` jumps from a bounded-degree induced subgraph to an
   `|V(F)|`-block subblockade whose cross-relations realize either `F` or
   `\overline F`. That extraction is the core content of source Theorem `6.6`
   and is not immediate from the two local inputs presently cited.
5. `items/thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest.md:60`
   The induction step assumes that applying `[L1]` to the gap between the two
   inductive tails yields the specific complete or anticomplete pure pair needed
   to connect those tails. Source Theorem `6.7` needs much more width and
   placement bookkeeping; the present proof does not justify the claimed
   concatenation.
6. `research/frontier-26-batch-8.proof-contracts.json`
   Batch-wide contract drift remains substantial on current bytes. After the
   limited reader repairs, `node tools/proof-contract.mjs --strict research/frontier-26-batch-8.proof-contracts.json`
   still reports `92` errors, and `citation-fidelity` still reports `74`
   missing verbatim quotes plus the `local-fact` hole in
   `cor-the-star-expansion-of-the-four-vertex-path-and-its-complement-have-the-erdos-hajnal-property`.
   Those rows are editable but were not normalized here because the underlying
   A-page mathematics above still needs real repair first.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components.md items/ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five.md`
  Result: both changed items reflowed cleanly.
- `node tools/regen-contract-entries.mjs research/frontier-26-batch-8.proof-contracts.json lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five`
  Result: regenerated the lemma entry; skipped the example because it has no
  parsed facts.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components.md items/ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five.md`
  Result: pass, `2 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-26-batch-8.proof-contracts.json --strict --items lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components`
  Result: pass, `0 error(s), 0 warning(s), 1/1 item(s) checked`.
- `node tools/rendercheck.mjs library/combinatorics/star-expansions-and-erdos-hajnal.md library/combinatorics/star-expansions-and-erdos-hajnal-examples.md library/combinatorics/iterative-sparsification-and-the-five-vertex-path.md library/combinatorics/iterative-sparsification-and-the-five-vertex-path-examples.md items/lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components.md items/ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five.md`
  Result: pass, `OK — 6 file(s)`.
- `git diff --check -- items/lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components.md items/ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five.md research/frontier-26-batch-8.proof-contracts.json`
  Result: pass.
- `node tools/proof-contract.mjs --strict research/frontier-26-batch-8.proof-contracts.json`
  Result: still failing on the untouched remainder, `92 error(s), 0 warning(s), 45/45 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-26-batch-8.proof-contracts.json --items-dir items`
  Result: still failing on the untouched remainder, `74` quote mismatches and
  one missing local fact target on the current batch contract.

## Page verdicts

- `library/combinatorics/star-expansions-and-erdos-hajnal.md`
  Insufficient on current bytes. The Theorem `6.6` and `6.7` lifts are still
  materially underproved, and the later EH theorems that depend on them remain
  unsupported.
- `library/combinatorics/star-expansions-and-erdos-hajnal-examples.md`
  Sufficient on the opened finite-witness scope after the reader repairs.
- `library/combinatorics/iterative-sparsification-and-the-five-vertex-path.md`
  Insufficient on current bytes. The sparse-pair, iterative-sparsification, and
  mixed-block lemmas do not presently preserve the source hypotheses,
  quantitative conclusions, or contradiction route.
- `library/combinatorics/iterative-sparsification-and-the-five-vertex-path-examples.md`
  Sufficient on the opened finite-witness scope after the reader repairs.

## Blockers

- No uneditable published-dependency defect was confirmed on the opened
  dependency closure.
- The live blocker is editable and local to batch `8`: both A pages still need
  substantive mathematical and contract repair before Alpha can treat them as
  closed.
