# Step 8 — group **c**, run `frontier-22`

You are the group Alpha for batches **4**, **9**: 3 A/B pair(s), 6 page(s), 89 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-22-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-22-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `algebraic-and-spectral-graph-theory` | A | combinatorics | 227 | `block-designs-and-finite-projective-planes`, `the-spectral-theorem-and-singular-value-decomposition`, `determinants-of-matrices-over-a-commutative-ring`, `trees-forests-and-spanning-trees`, `linear-recurrences-and-rational-generating-functions` |
| 4 | `algebraic-and-spectral-graph-theory-examples` | B | combinatorics | 228 | `algebraic-and-spectral-graph-theory` |
| 4 | `bull-free-graphs-and-the-erdos-hajnal-property` | A | combinatorics | 411 | `modules-substitution-and-prime-graphs`, `pure-pairs-forests-and-path-antipath-classes` |
| 4 | `bull-free-graphs-and-the-erdos-hajnal-property-examples` | B | combinatorics | 412 | `bull-free-graphs-and-the-erdos-hajnal-property` |
| 9 | `cographs-perfect-patterns-and-pure-pairs` | A | combinatorics | 413 | `modules-substitution-and-prime-graphs`, `pure-pairs-forests-and-path-antipath-classes` |
| 9 | `cographs-perfect-patterns-and-pure-pairs-examples` | B | combinatorics | 414 | `cographs-perfect-patterns-and-pure-pairs` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `algebraic-and-spectral-graph-theory` — Algebraic and Spectral Graph Theory (24 item(s))

- `def-adjacency-matrix-of-a-finite-simple-graph` · definition — The adjacency matrix of a finite simple graph
- `def-graph-spectrum-spectral-radius-and-cospectrality` · definition — Adjacency spectrum, spectral radius, and cospectral graphs
- `thm-adjacency-matrix-powers-count-walks` · theorem — The $(i,j)$ entry of $A(G)^k$ counts walks of length $k$
- `cor-trace-of-adjacency-power-counts-closed-walks` · corollary — The trace of $A(G)^k$ counts closed walks of length $k$
- `prop-spectrum-is-an-isomorphism-invariant` · proposition — The adjacency spectrum is an isomorphism invariant
- `thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric` · theorem — A finite simple graph is bipartite if and only if its adjacency spectrum is symmetric about $0$
- `thm-spectral-radius-is-bounded-by-average-and-maximum-degree` · theorem — The adjacency spectral radius lies between the average degree and the maximum degree
- `def-oriented-incidence-matrix-of-a-graph` · definition — An oriented incidence matrix of a finite simple graph
- `def-laplacian-matrix-of-a-finite-simple-graph` · definition — The Laplacian matrix of a finite simple graph
- `thm-laplacian-is-the-oriented-incidence-product` · theorem — The Laplacian equals $BB^{\mathsf T}$ for every oriented incidence matrix $B$
- `thm-laplacian-is-positive-semidefinite-and-annihilates-ones` · theorem — The Laplacian is positive semidefinite and sends the all-ones vector to zero
- `thm-laplacian-kernel-dimension-counts-components` · theorem — The multiplicity of the Laplacian eigenvalue $0$ equals the number of connected components
- `def-algebraic-connectivity-of-a-graph` · definition — The algebraic connectivity of a finite simple graph
- `cor-algebraic-connectivity-characterises-connectedness` · corollary — A finite simple graph is connected if and only if its algebraic connectivity is positive
- `thm-binet-cauchy-formula` · theorem — The Binet-Cauchy formula
- `thm-spectrum-of-the-complete-graph` · theorem — The complete graph $K_n$ has adjacency spectrum $\{n-1,(-1)^{n-1}\}$
- `thm-matrix-tree-theorem` · theorem — Kirchhoff's matrix-tree theorem
- `cor-kirchhoff-eigenvalue-product-formula` · corollary — The matrix-tree theorem becomes an eigenvalue product formula
- `cor-cayley-formula-from-the-matrix-tree-theorem` · corollary — Cayley's formula follows again from the matrix-tree theorem
- `def-n-d-lambda-graph-and-expander` · definition — An $(n,d,\lambda)$-graph and an expander
- `thm-spectral-gap-implies-connectivity-and-edge-expansion` · theorem — For an $(n,d,\lambda)$-graph with $\lambda<d$, every nontrivial cut has many crossing edges
- `thm-spectrum-of-the-cycle-graph` · theorem — The cycle graph $C_n$ has adjacency spectrum $\{2\cos(2\pi j/n):0\le j<n\}$
- `thm-spectrum-of-the-complete-bipartite-graph` · theorem — The complete bipartite graph $K_{m,n}$ has adjacency spectrum $\{\sqrt{mn},0^{m+n-2},-\sqrt{mn}\}$
- `thm-spectrum-of-the-petersen-graph` · theorem — The Petersen graph has adjacency spectrum $\{3,1^5,(-2)^4\}$

### `algebraic-and-spectral-graph-theory-examples` — Algebraic and Spectral Graph Theory — Examples (8 item(s))

- `ex-adjacency-spectrum-of-c-four` · example — The cycle $C_4$ has adjacency spectrum $\{2,0,0,-2\}$
- `ex-laplacian-kernel-of-a-disconnected-graph` · example — A disconnected graph has a Laplacian kernel spanned by its component indicators
- `ex-k-four-has-sixteen-spanning-trees-by-kirchhoff` · example — Kirchhoff's formula gives $\tau(K_4)=16$
- `ex-spectrum-of-k-three-three` · example — The graph $K_{3,3}$ has adjacency spectrum $\{3,0,0,0,0,-3\}$
- `ex-petersen-graph-spectrum-from-the-two-subset-model` · example — The two-subset model reproduces the Petersen spectrum
- `cex-cospectral-graphs-need-not-be-isomorphic` · counterexample — Two cospectral graphs need not be isomorphic
- `fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity` · false-statement — FALSE: positive second Laplacian eigenvalue characterises 2-connectivity
- `fs-matrix-tree-theorem-needs-a-particular-cofactor` · false-statement — FALSE: the matrix-tree theorem works only for one distinguished cofactor

### `bull-free-graphs-and-the-erdos-hajnal-property` — Bull-Free Graphs and the Erdős–Hajnal Property (25 item(s))

- `def-bull-graph` · definition — The bull graph
- `def-bull-free-graph` · definition — A bull-free graph
- `prop-bull-free-graphs-are-complement-invariant` · proposition — A graph is bull-free if and only if its complement is bull-free
- `def-hole-antihole-and-odd-hole` · definition — Holes, antiholes, and odd holes
- `def-perfect-graph-for-the-bull-route` · definition — A perfect graph
- `rem-weak-perfect-graph-theorem-for-the-bull-route` · remark — Weak Perfect Graph Theorem
- `rem-strong-perfect-graph-theorem-for-the-bull-route` · remark — Strong Perfect Graph Theorem
- `def-good-function-on-a-graph` · definition — A good function on a graph
- `def-alpha-narrow-graph` · definition — An $\alpha$-narrow graph
- `prop-perfect-graphs-are-one-narrow` · proposition — Every perfect graph is 1-narrow
- `thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs` · theorem — An $\alpha$-narrow graph contains a perfect induced subgraph of order at least $|V(G)|^{1/\alpha}$
- `cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets` · corollary — An $\alpha$-narrow graph has a clique or stable set of size at least $|V(G)|^{1/(2\alpha)}$
- `def-basic-and-composite-bull-free-graphs` · definition — Basic and composite bull-free graphs
- `def-split-set-in-a-bull-free-graph` · definition — A split set in a bull-free graph
- `thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module` · theorem — A split set with both a complete and an anticomplete outside vertex yields a nontrivial module
- `thm-composite-bull-free-graphs-have-a-nontrivial-module` · theorem — Every composite bull-free graph has a nontrivial module
- `cor-prime-bull-free-graphs-are-basic` · corollary — Every prime bull-free graph is basic
- `lem-basic-bull-free-hole-with-a-complete-outside-vertex` · lemma — In a basic bull-free graph, a hole with a complete outside vertex has tightly constrained neighbors
- `lem-basic-bull-free-hole-with-an-anticomplete-outside-vertex` · lemma — In a basic bull-free graph, a hole with an anticomplete outside vertex forbids consecutive neighbors
- `rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route` · remark — Substituting perfect graphs preserves perfection
- `thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect` · theorem — For a vertex in a basic bull-free graph, either its neighborhood or its antineighborhood is perfect
- `thm-basic-bull-free-graphs-are-two-narrow` · theorem — Every basic bull-free graph is 2-narrow
- `thm-alpha-narrowness-is-preserved-under-substitution` · theorem — Substituting two $\alpha$-narrow graphs yields another $\alpha$-narrow graph
- `thm-bull-free-graphs-are-two-narrow` · theorem — Every bull-free graph is 2-narrow
- `cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter` · corollary — Every bull-free graph has a clique or stable set of size at least $|V(G)|^{1/4}$

### `bull-free-graphs-and-the-erdos-hajnal-property-examples` — Bull-Free Graphs and the Erdős–Hajnal Property — Examples (6 item(s))

- `ex-the-bull-graph-is-self-complementary` · example — The bull graph is self-complementary
- `cex-the-five-cycle-is-bull-free-but-not-perfect` · counterexample — The five-cycle is bull-free but not perfect
- `ex-k-four-is-bull-free-with-a-nontrivial-module` · example — $K_4$ is bull-free and has a nontrivial module
- `ex-the-five-cycle-is-not-one-narrow` · example — The five-cycle is 2-narrow but not 1-narrow
- `fs-every-bull-free-graph-is-perfect` · false-statement — FALSE: every bull-free graph is perfect
- `fs-two-narrow-implies-one-narrow` · false-statement — FALSE: every 2-narrow graph is 1-narrow

### `cographs-perfect-patterns-and-pure-pairs` — Cographs, Perfect Patterns and Pure Pairs (21 item(s))

- `def-complete-connection-of-two-disjoint-graphs` · definition — The complete connection of two disjoint graphs
- `def-cograph-by-singletons-disjoint-union-and-complete-connection` · definition — Cographs by the singleton, disjoint-union, and complete-connection recursion
- `lem-induced-subgraphs-of-cographs-are-cographs` · lemma — Every induced subgraph of a cograph is a cograph
- `thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement` · theorem — Every nontrivial cograph is disconnected or has disconnected complement
- `thm-cographs-are-exactly-the-p-four-free-graphs` · theorem — The cographs are exactly the $P_4$-free graphs
- `thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four` · theorem — Every prime graph on at least four vertices contains an induced $P_4$
- `def-perfect-graph` · definition — Perfect graphs
- `def-kappa-of-a-graph` · definition — The parameter $\kappa(G)=\alpha(G)\omega(G)$
- `lem-disjoint-union-of-perfect-graphs-is-perfect` · lemma — A disjoint union of two perfect graphs is perfect
- `lem-complete-connection-of-perfect-graphs-is-perfect` · lemma — A complete connection of two perfect graphs is perfect
- `thm-cographs-are-perfect` · theorem — Every cograph is perfect
- `thm-perfect-graphs-satisfy-kappa-at-least-their-order` · theorem — Every perfect graph satisfies $|V(G)|\leq\kappa(G)$
- `cor-perfect-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order` · corollary — Every perfect graph has a clique or stable set of size at least the square root of its order
- `rem-the-perfect-induced-subgraph-formulation-of-the-erdos-hajnal-conjecture` · remark — The perfect-induced-subgraph formulation of the Erdős–Hajnal conjecture
- `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations` · theorem — The Erdős–Hajnal property is equivalent to the large-cograph, large-perfect, and $\kappa$ formulations
- `thm-pure-blockades-with-perfect-patterns-contain-large-homogeneous-subblockades` · theorem — A pure blockade with a perfect pattern has a large complete or anticomplete subblockade
- `def-tau-critical-graph` · definition — A $\tau$-critical graph
- `prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical` · proposition — A minimal counterexample to a $\kappa$-bound is $\tau$-critical
- `thm-pure-blockades-with-cograph-patterns-have-additive-kappa` · theorem — A pure blockade with a cograph pattern has additive $\kappa$
- `thm-tau-critical-graphs-have-no-wide-cograph-pattern-blockades` · theorem — A $\tau$-critical graph has no wide pure blockade with cograph pattern
- `def-blockade-rainbow-induced-copy` · definition — A blockade-rainbow induced copy

### `cographs-perfect-patterns-and-pure-pairs-examples` — Cographs, Perfect Patterns and Pure Pairs — Examples (5 item(s))

- `ex-the-four-cycle-is-a-cograph` · example — The four-cycle is a cograph
- `ex-the-five-vertex-path-is-perfect-but-not-a-cograph` · example — The five-vertex path is perfect but not a cograph
- `ex-a-two-block-pure-blockade-has-additive-kappa` · example — A two-block pure blockade can realize equality in the additive $\kappa$ theorem
- `ex-a-pure-blockade-with-perfect-but-not-cograph-pattern` · example — A pure blockade can have a perfect pattern that is not a cograph
- `ex-a-blockade-rainbow-copy-of-the-four-vertex-path` · example — A four-block blockade-rainbow copy of $P_4$

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-22-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-22`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
