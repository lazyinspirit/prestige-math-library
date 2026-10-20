# Step 5 adjudication — group **k**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 32, 33, 34: 3 A/B pair(s), 6 page(s), 50 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **32**: `research/machine-learning-all-101-2026-10-19-batch-32-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **33**: `research/machine-learning-all-101-2026-10-19-batch-33-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **34**: `research/machine-learning-all-101-2026-10-19-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/machine-learning-all-101-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 32 | `relu-approximation-rates-and-depth-expressivity` | A | machine-learning | 2758 | `feedforward-networks-and-universal-approximation`, `chern-and-pontryagin-classes-by-splitting-and-complexification`, `sobolev-poincare-and-morrey-inequalities`, `symmetrization-rademacher-complexity-and-covering-entropy` |
| 32 | `relu-approximation-rates-and-depth-expressivity-examples` | B | machine-learning | 2759 | `relu-approximation-rates-and-depth-expressivity` |
| 33 | `convolution-and-group-equivariance` | A | machine-learning | 2760 | `group-actions-and-cayleys-theorem` |
| 33 | `convolution-and-group-equivariance-examples` | B | machine-learning | 2761 | `convolution-and-group-equivariance` |
| 34 | `message-passing-graph-neural-networks` | A | machine-learning | 2762 | — |
| 34 | `message-passing-graph-neural-networks-examples` | B | machine-learning | 2763 | `message-passing-graph-neural-networks` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `relu-approximation-rates-and-depth-expressivity` — ReLU approximation rates, depth separation, and linear regions (22 item(s))

- `def-relu-network` · definition — ReLU feedforward networks and complexity conventions
- `def-relu-linear-region` · definition — Connected activation-pattern regions
- `lem-univariate-relu-affine-interval-count` · lemma — A depth-H univariate ReLU network has a product bound on affine intervals
- `lem-relu-tent-iterate-depth` · lemma — Tent-map iterates and ReLU implementation
- `lem-relu-square-approximation` · lemma — Logarithmic-size ReLU approximation of the square
- `lem-relu-bounded-product-approximation` · lemma — Correctly scaled bounded product approximation
- `lem-sobolev-taylor-grid-approximation` · lemma — Local Taylor approximation on a Sobolev grid
- `thm-yarotsky-fixed-architecture-sobolev-approximation-rate` · theorem — Target-independent ReLU rate on the unit Sobolev ball
- `thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation` · theorem — Target-dependent depth-six approximation of Lipschitz functions
- `thm-borsuk-ulam-general` · theorem — Borsuk–Ulam theorem in every dimension
- `thm-warren-polynomial-sign-pattern-bound` · theorem — An elementary polynomial sign-pattern bound
- `thm-sobolev-continuous-nonlinear-width-lower-bound` · theorem — Sobolev lower bound for continuous parameter selection
- `lem-relu-network-vc-dimension-bound` · lemma — VC bounds for a fixed ReLU architecture
- `thm-yarotsky-approximation-lower-bounds` · theorem — Approximation lower bounds under distinct selection assumptions
- `lem-hyperplane-arrangement-region-count` · lemma — Hyperplane arrangement upper count and general-position count
- `lem-relu-rank-sensitive-region-recursion` · lemma — Rank-sensitive layer recursion for ReLU regions
- `thm-relu-linear-region-upper-bound` · theorem — Rank-sensitive upper bound for ReLU linear regions
- `lem-relu-folding-block` · lemma — A width-n ReLU block makes n+1 full folds
- `thm-relu-linear-region-lower-bounds` · theorem — One-dimensional and multidimensional ReLU region lower bounds
- `lem-bernstein-polynomial-lipschitz-error` · lemma — Uniform error bound for Bernstein approximation of a Lipschitz function
- `thm-telgarsky-depth-separation-l1` · theorem — Depth separation with explicit semi-algebraic crossing budgets
- `fs-telgarsky-unrestricted-gate-parameter-separation` · false-statement — The unrestricted all-parameter depth separation is false

### `relu-approximation-rates-and-depth-expressivity-examples` — ReLU approximation rates, depth separation, and linear regions — Examples (4 item(s))

- `cex-telgarsky-small-k-large-degree-gate` · counterexample — A single high-degree gate defeats the stated small-k separation
- `ex-relu-tent-map-depth-vs-width` · example — Tent-map composition gives exponentially many intervals
- `ex-target-specific-vs-target-independent-approximation` · example — Same target with adaptive and target-independent architectures
- `ex-linear-regions-do-not-guarantee-learning` · example — Many linear regions give no training or generalization guarantee

### `convolution-and-group-equivariance` — Convolution and finite-group equivariance (7 item(s))

- `def-discrete-convolutional-layer` · definition — Discrete convolutional layer with local receptive fields, channel mixing, stride, and padding
- `def-group-action-on-feature-maps` · definition — The left action on feature maps induced by an action on sites
- `def-p4-p4m-lattice-symmetry-groups` · definition — The p4 and p4m square-lattice symmetry groups
- `def-equivariant-neural-layer` · definition — Equivariant neural layers between group-action feature spaces
- `def-group-convolution` · definition — First-layer and group-to-group cross-correlation
- `def-pointwise-nonlinearity-and-pooling-on-group-features` · definition — Pointwise nonlinearities, neighborhood pooling, subgroup sampling, and coset pooling
- `thm-group-convolution-equivariance` · theorem — Group cross-correlation and compatible layers are equivariant

### `convolution-and-group-equivariance-examples` — Convolution and finite-group equivariance — Examples (3 item(s))

- `ex-translation-equivariance-and-zero-padding` · example — Full-lattice translation equivariance and a zero-padding boundary failure
- `ex-p4-and-p4m-orientation-indexed-features` · example — p4 and p4m orientation-indexed feature maps
- `ex-nonstrided-subgroup-and-coset-pooling` · example — Non-strided, subgroup, and coset pooling on p4 features

### `message-passing-graph-neural-networks` — Message-passing GNNs and the 1-WL ceiling (11 item(s))

- `def-finite-labeled-graph` · definition — Finite simple undirected graphs with vertex labels
- `def-multiset` · definition — Finite multisets as finitely supported multiplicity functions
- `def-graph-isomorphism` · definition — Label-preserving graph isomorphisms
- `def-message-passing-gnn` · definition — Aggregation-based message-passing graph neural networks
- `def-one-dimensional-weisfeiler-lehman-test` · definition — Finite-round one-dimensional Weisfeiler–Leman color refinement
- `lem-countable-bounded-multiset-sum-encoding` · lemma — Countable bounded multisets admit injective sum encodings
- `alg-message-passing-forward-pass` · algorithm — Finite-depth message-passing forward pass
- `def-graph-isomorphism-network` · definition — Graph Isomorphism Network update rule
- `lem-one-wl-isomorphism-invariance` · lemma — One-dimensional Weisfeiler–Leman refinement is invariant under graph isomorphism
- `thm-message-passing-gnn-no-more-powerful-than-1wl` · theorem — Message-passing GNNs cannot distinguish beyond one-dimensional Weisfeiler–Leman
- `thm-injective-message-passing-matches-1wl` · theorem — Injective message passing matches the one-dimensional Weisfeiler–Leman test

### `message-passing-graph-neural-networks-examples` — Message-passing GNNs and the 1-WL ceiling — Examples (3 item(s))

- `ex-nonisomorphic-regular-graphs-indistinguishable-by-1wl` · example — A six-cycle and two disjoint triangles are regular but one-WL-indistinguishable
- `ex-mean-max-aggregation-lose-multiplicity` · example — Mean and max aggregation can lose multiset multiplicity
- `ex-gin-irrational-self-weight-encoding` · example — An irrational GIN self-weight separates two bounded color neighborhoods

## Your seams

Your pages depend on another group's:

- `relu-approximation-rates-and-depth-expressivity` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/machine-learning-all-101-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `machine-learning-all-101-2026-10-19`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
