# Step 8 adjudication — group **g**, run `frontier-33`

You are the group Alpha for batches **11**, **17**, **18**: 4 A/B pair(s), 8 page(s), 109 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-33-alpha-g-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-33-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 11 | `co-bird-free-comb-structure` | A | combinatorics | 439 | `co-e-free-comb-structure` |
| 11 | `co-bird-free-comb-structure-examples` | B | combinatorics | 440 | `co-bird-free-comb-structure` |
| 17 | `the-polynomial-hierarchy-and-relativization` | A | computability-theory | 633 | `boolean-circuits-and-nonuniform-complexity`, `space-complexity-savitch-and-tqbf` |
| 17 | `the-polynomial-hierarchy-and-relativization-examples` | B | computability-theory | 634 | `the-polynomial-hierarchy-and-relativization` |
| 17 | `expander-graphs-and-constraint-graphs` | A | computability-theory | 645 | `boolean-circuits-and-nonuniform-complexity`, `the-spectral-theorem-and-singular-value-decomposition`, `graphs-walks-and-connectivity` |
| 17 | `expander-graphs-and-constraint-graphs-examples` | B | computability-theory | 646 | `expander-graphs-and-constraint-graphs` |
| 18 | `arithmetization-and-the-sum-check-protocol` | A | computability-theory | 641 | `interactive-proof-systems-and-public-coins`, `algebraic-extensions-degree-and-finite-fields`, `the-cook-levin-theorem` |
| 18 | `arithmetization-and-the-sum-check-protocol-examples` | B | computability-theory | 642 | `arithmetization-and-the-sum-check-protocol` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `co-bird-free-comb-structure` — Comb Structure in co-Bird-Free Graphs (13 item(s))

- `lem-co-bird-free-edge-plus-isolate-witness-obstruction` · lemma — The edge-plus-isolate co-Bird obstruction
- `lem-co-bird-free-path-plus-isolate-witness-obstruction` · lemma — The path-plus-isolate co-Bird obstruction
- `lem-co-bird-free-e-mixed-vertices-are-pure-on-terminal-edges` · lemma — A mixed vertex on E is pure on both terminal edges
- `lem-co-bird-free-complete-nonedge-pairs-are-pure-to-induced-e-graphs` · lemma — Complete nonedge pairs force purity on induced E graphs
- `def-e-overlap-chain-relation-in-a-comb-block` · definition — E overlap chains inside one comb block
- `lem-e-overlap-classes-form-an-anticonnected-partition` · lemma — E overlap classes form an anticonnected partition
- `lem-purity-on-every-e-propagates-along-an-overlap-class` · lemma — Purity propagates through E overlap chains
- `def-e-overlap-blockade-and-iterated-mixed-quotients` · definition — The E overlap blockade and mixed quotient sequence
- `lem-e-overlap-quotient-iteration-terminates-at-a-pure-blockade` · lemma — E overlap quotients terminate at a pure blockade
- `lem-co-bird-free-separated-anticonnected-blocks-forbid-forward-mixing` · lemma — A separated anticonnected block pair forbids mixing in one direction
- `lem-co-bird-free-external-purity-survives-e-overlap-quotients` · lemma — External purity survives every E overlap quotient
- `lem-terminal-e-overlap-quotient-pattern-is-e-free` · lemma — The terminal E overlap pattern is E-free
- `thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition` · theorem — A special-vertex co-Bird-free comb admits an E-free structural partition

### `co-bird-free-comb-structure-examples` — Comb Structure in co-Bird-Free Graphs — Examples (4 item(s))

- `ex-co-bird-edge-plus-isolate-adjacency-witness` · example — The first co-Bird witness by adjacency
- `ex-co-bird-path-plus-isolate-adjacency-witness` · example — The second co-Bird witness by adjacency
- `ex-co-bird-e-neighbourhood-case-table` · example — All E neighbourhood patterns under a complete nonedge pair
- `ex-co-bird-e-free-comb-singleton-partition` · example — The no-E-copy boundary case of the comb partition

### `the-polynomial-hierarchy-and-relativization` — The Polynomial Hierarchy and Relativization (25 item(s))

- `def-polynomial-hierarchy-levels` · definition
- `def-relativized-complexity-class` · definition
- `lem-ph-quantifier-block-closure` · lemma
- `prop-np-and-conp-are-the-first-levels` · proposition
- `lem-ph-circuit-matrix-final-block-encoding` · lemma
- `thm-bounded-alternation-qbf-is-level-complete` · theorem
- `lem-ph-adaptive-oracle-transcript-normal-form` · lemma
- `thm-quantifier-and-oracle-characterizations-of-ph` · theorem
- `prop-ph-containments-and-polynomial-space` · proposition
- `lem-collapse-at-one-level-propagates` · lemma
- `thm-sigma-k-equals-pi-k-implies-ph-collapse` · theorem
- `cor-ph-complete-language-forces-collapse` · corollary
- `lem-standard-containments-relativize` · lemma
- `def-relativizing-proof-technique` · definition
- `lem-oracle-diagonalization-finite-extension` · lemma
- `thm-an-oracle-separates-p-from-np` · theorem
- `lem-polynomial-space-oracle-absorption` · lemma
- `thm-an-oracle-collapses-p-and-np` · theorem
- `cor-relativization-alone-cannot-resolve-p-versus-np` · corollary
- `def-lowness-and-highness` · definition
- `prop-elementary-high-low-identities` · proposition
- `def-promise-problem` · definition
- `def-promise-preserving-reduction` · definition
- `rem-oracle-and-promise-conventions-are-distinct` · remark
- `fs-relativized-separations-prove-unrelativized-separations` · false-statement

### `the-polynomial-hierarchy-and-relativization-examples` — The Polynomial Hierarchy and Relativization: Examples and Counterexamples (4 item(s))

- `ex-np-and-conp-are-the-first-levels` · example
- `ex-relativization-alone-cannot-resolve-p-versus-np` · example
- `cex-relativized-separations-prove-unrelativized-separations` · counterexample
- `ex-promise-oracle-off-promise-answers` · example

### `expander-graphs-and-constraint-graphs` — Expander Graphs and Constraint Graphs (31 item(s))

- `def-regular-multigraph-and-normalized-adjacency` · definition
- `lem-constant-vector-is-a-top-eigenvector` · lemma
- `def-spectral-edge-and-vertex-expansion` · definition
- `thm-expander-mixing-lemma` · theorem
- `lem-cheeger-indicator-and-positive-part-energy` · lemma
- `lem-cheeger-sweep-and-layer-cake` · lemma
- `thm-cheeger-inequalities-for-finite-regular-graphs` · theorem
- `cor-expander-independent-sets-coloring-and-diameter` · corollary
- `def-margulis-gabber-galil-graph` · definition
- `lem-margulis-family-is-constant-degree-and-neighbor-computable` · lemma
- `def-finite-torus-fourier-transform` · definition
- `lem-finite-torus-fourier-orthogonality-and-affine-change` · lemma
- `lem-fourier-analysis-of-margulis-adjacency` · lemma
- `lem-margulis-diamond-weight-bound` · lemma
- `thm-margulis-family-has-uniform-spectral-gap` · theorem
- `lem-expander-size-adjustment-and-laziness` · lemma
- `cor-explicit-polynomial-time-constant-degree-expanders-exist` · corollary
- `def-constraint-graph-and-labeling-value` · definition
- `def-constraint-graph-regularization` · definition
- `lem-cloud-plurality-rounding` · lemma
- `lem-regularization-preserves-value-quantitatively` · lemma
- `lem-constraint-expander-overlay` · lemma
- `def-graph-power-and-walk-constraint` · definition
- `lem-expander-walk-contraction` · lemma
- `lem-expander-walk-restricted-operator` · lemma
- `thm-expander-walk-hits-dense-bad-sets` · theorem
- `prop-expander-walk-sampled-and-moving-sets` · proposition
- `lem-expander-walk-bad-edge-return` · lemma
- `prop-expander-walk-hits-bad-edges` · proposition
- `def-gap-csp` · definition
- `fs-nonconstructive-expanders-suffice-for-uniform-reductions` · false-statement

### `expander-graphs-and-constraint-graphs-examples` — Expander Graphs and Constraint Graphs: Examples and Counterexamples (4 item(s))

- `ex-expander-mixing-lemma` · example
- `ex-expander-walk-hits-dense-bad-sets` · example
- `cex-nonconstructive-expanders-suffice-for-uniform-reductions` · counterexample
- `ex-constraint-cloud-rounding-and-loop-counts` · example

### `arithmetization-and-the-sum-check-protocol` — Arithmetization and the Sum-Check Protocol (24 item(s))

- `def-arithmetization-of-a-boolean-formula` · definition — Arithmetization of Boolean formulas
- `lem-arithmetization-agrees-on-boolean-inputs` · lemma — Arithmetization preserves Boolean values
- `lem-formula-arithmetization-degree-and-evaluation-cost` · lemma — Formula degree and point-evaluation cost
- `def-multilinear-extension` · definition — Multilinear extension of a Boolean-cube table
- `thm-existence-and-uniqueness-of-multilinear-extension` · theorem — Boolean-cube interpolation
- `lem-multilinear-extension-streaming-evaluation` · lemma — Streaming evaluation from a full cube table
- `lem-multilinear-extension-table-evaluation` · lemma — Linear-time evaluation from a full cube table
- `lem-degree-under-arithmetized-quantifiers` · lemma — Degree under Boolean elimination operators
- `rem-polynomial-identity-bounds-for-sum-check` · remark — Existing polynomial identity bounds
- `def-sum-check-instance-and-protocol` · definition — Sum-check with explicit degree bounds
- `lem-sum-check-perfect-completeness` · lemma — Perfect completeness of sum-check
- `lem-first-false-round-is-caught-by-root-bound` · lemma — A false sum-check claim rarely becomes true
- `thm-sum-check-soundness` · theorem — Adaptive-prover soundness of sum-check
- `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation` · lemma — Sum-check verifier resources
- `cor-sum-check-field-size-error-budget` · corollary — Choosing a sum-check error budget
- `prop-arithmetized-formula-counting-sum` · proposition — Verifying formula counts over a supplied field
- `def-linearity-test` · definition — The BLR linearity test over F_2
- `def-boolean-cube-fourier-coefficients` · definition — Characters and normalized Fourier coefficients
- `lem-boolean-cube-fourier-inversion-and-parseval` · lemma — Character orthogonality, inversion and Parseval
- `lem-blr-acceptance-fourier-identity` · lemma — The cubic Fourier identity for BLR
- `thm-blr-linearity-test-soundness` · theorem — BLR acceptance implies agreement with a linear function
- `def-self-correction-of-a-noisy-linear-function` · definition — Two-query linear self-correction
- `thm-linear-self-correction` · theorem — Pointwise correctness under less than quarter noise
- `fs-sum-check-computes-all-exponential-summands` · false-statement — False: the sum-check verifier enumerates the cube

### `arithmetization-and-the-sum-check-protocol-examples` — Arithmetization and the Sum-Check Protocol: Examples and Counterexamples (4 item(s))

- `ex-existence-and-uniqueness-of-multilinear-extension` · example — Interpolating a two-bit table over F_5
- `ex-sum-check-three-variable-transcript` · example — A complete sum-check transcript over F_101
- `ex-linear-self-correction` · example — Correcting one corrupted table entry
- `cex-sum-check-computes-all-exponential-summands` · counterexample — One point evaluation for an exponentially large cube

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-33-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-33`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-33-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-8 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-33-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-33-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-33-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-33-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
