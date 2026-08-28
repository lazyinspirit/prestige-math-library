# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-22-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-22
role: alpha-adjudicate
label: step8-c
covers: 4, 9

# Step 8 — group **c**, run `frontier-22`

You are the group Alpha for batches **4**, **9**: 3 A/B pair(s), 6 page(s), 89 item(s), 48 open rejection(s) over 48 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-cospectral-graphs-need-not-be-isomorphic` | `algebraic-and-spectral-graph-theory-examples` | gpt-5.6-terra | `f2d6ae11319fb5eb079c8fb9d942f03b2d1d0c0a70e01a46d5806ec5f1940657` |
| `cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `d8a4dd466a49f83479aa623093a286802dbcf5c62bd7324f9c58d728941a25b6` |
| `cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `987d43798799dd61619601c6e416d2c7c8b0db7c75427a1daf80c0ee6c7987ca` |
| `cor-cayley-formula-from-the-matrix-tree-theorem` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `68e58c0680fa249c17059e35c5dc7c24b95284ad32b09c5f3992a784e01ed54c` |
| `cor-kirchhoff-eigenvalue-product-formula` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `6c36daf51f659288fe6cd310eb16ed5ec6aba5a6b57a93a22d367926fa34f2cd` |
| `cor-trace-of-adjacency-power-counts-closed-walks` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `8c2beabba950212ac00178d7faed10d7cda03b20a4f6261e177a201772e714b3` |
| `def-adjacency-matrix-of-a-finite-simple-graph` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `4b45647ee5daca160907fa8d4fe7ce4f1f732d1439aa9547cfac6f0660401989` |
| `def-algebraic-connectivity-of-a-graph` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `3ee7f9e167b23e7a665f81b26db0e3aaefb5c153d6f17e054d771980a125a8c9` |
| `def-graph-spectrum-spectral-radius-and-cospectrality` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `9748fc53e4dc908b3e3d08900faa135c6c579875285bf695dbd08c0bb7fcc27b` |
| `def-laplacian-matrix-of-a-finite-simple-graph` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `93c397ae65a6b20d9d479bf71fd090089bd3541a22f02d2fadbdb9f6803cef9f` |
| `def-n-d-lambda-graph-and-expander` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `0f08a38fd8c0ff7c25fa41fea96b7ccdfcee4debcc903d1845549003f0ad30a1` |
| `def-oriented-incidence-matrix-of-a-graph` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `995f01ade44dff17a6894688dd6195b49d59ee9c91886634f1945dbe5f7d993d` |
| `def-split-set-in-a-bull-free-graph` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `0d2eae9e96cf4acc12d27cfd7081b620f1280c41a4833c34957faa785da639c2` |
| `ex-a-pure-blockade-with-perfect-but-not-cograph-pattern` | `cographs-perfect-patterns-and-pure-pairs-examples` | gpt-5.6-terra | `f6f5c130ca7537da30732d3afea7a33ba39b3ebc09e6881994e38a9543271232` |
| `ex-a-two-block-pure-blockade-has-additive-kappa` | `cographs-perfect-patterns-and-pure-pairs-examples` | gpt-5.6-terra | `152c6a62d614e0963884101323fb35ea0de81f8c43aebc060a21d3fadd55fc5e` |
| `ex-k-four-has-sixteen-spanning-trees-by-kirchhoff` | `algebraic-and-spectral-graph-theory-examples` | gpt-5.6-terra | `50b43d73c48f9542ab9d53ccb37034b3481f45a0653cea0435bb5cb54b8d3b6d` |
| `ex-k-four-is-bull-free-with-a-nontrivial-module` | `bull-free-graphs-and-the-erdos-hajnal-property-examples` | gpt-5.6-terra | `ba53be5b3645a54b2dcd7077b3396f2126833f316b59d3436345994e7b23c480` |
| `ex-laplacian-kernel-of-a-disconnected-graph` | `algebraic-and-spectral-graph-theory-examples` | gpt-5.6-terra | `89d6e6a9a2690b395566ff2f3805cfa6eae57654dd5159259eba86ae2329a6c5` |
| `fs-matrix-tree-theorem-needs-a-particular-cofactor` | `algebraic-and-spectral-graph-theory-examples` | gpt-5.6-terra | `9275e357b5d2bb2146b1cdfe69e3674248fe1c76da1783253325cdc32da8a1bd` |
| `fs-positive-second-laplacian-eigenvalue-characterises-two-connectivity` | `algebraic-and-spectral-graph-theory-examples` | gpt-5.6-terra | `868c8ad9cce29de4d6639518bdfdcd19cd15ff5f295812aef6c02b7f304d7096` |
| `lem-basic-bull-free-hole-with-a-complete-outside-vertex` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `843717ce3c0ede6b66b0a12970c2925725d075ec369ae383e12709bc59d15c7c` |
| `lem-complete-connection-of-perfect-graphs-is-perfect` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `27f1b14e11e0aa3485d7c39d45a5da8ed1ec9a1df98d865f41547665e2ddf52c` |
| `lem-disjoint-union-of-perfect-graphs-is-perfect` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `0e6f8f66f0eef82de3372d41522bd5f003c111fdd84b53662e0f3ec4558f158f` |
| `lem-induced-subgraphs-of-cographs-are-cographs` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `4b2f175425d8d475618988ce89c089c2d4e29cd63eac7c817ae63f5834005ff4` |
| `prop-a-minimal-counterexample-to-a-kappa-bound-is-tau-critical` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `571a0097bc84c0f0464879679365fbfc69c8bf5bd53597b91d5bb2374ba71565` |
| `prop-spectrum-is-an-isomorphism-invariant` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `c9ffc1025c2f965760444891304f60ad6acb757498b696226ee50a338da21d3f` |
| `thm-adjacency-matrix-powers-count-walks` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `b3b19bbfe70af821d4a0f28077744a25ba24b5c005fdf6b778e37eede6318272` |
| `thm-alpha-narrow-graphs-contain-large-perfect-induced-subgraphs` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `cd1e583f68a550f24a8f7a70573d3348b7ba8fb4af6e7574997a3b20ee968b68` |
| `thm-alpha-narrowness-is-preserved-under-substitution` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `666324e6d3070a08de15ba90c364ef693baef934075c711a4e6e765ffb902385` |
| `thm-basic-bull-free-graphs-are-two-narrow` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `7bea0bdd6f5ae68df5dc6df81abe4228ebc63a9cd8ab070ea4664d13bb80e229` |
| `thm-binet-cauchy-formula` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `e68c71b1341c79b6dca579172fe0400037d39a9416024d7e55a7f95064be1e17` |
| `thm-bipartite-graph-iff-adjacency-spectrum-is-symmetric` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `e20e626aca8256cc3020ac2d683a5e5b2471a1be7fcc54cb73e295e533563372` |
| `thm-cographs-are-exactly-the-p-four-free-graphs` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `114445c125e5b15d677cb445ddc5572b3bb27b6ee09a66c1f5a6443ef677aebf` |
| `thm-cographs-are-perfect` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `e55e3c4603613b0977b30eff066125d8d7739833ecda472ba615070088daf060` |
| `thm-every-nontrivial-cograph-is-disconnected-or-has-disconnected-complement` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `d56f843285c0de149bc08bccdebf4875514ddbf999fd23e8d1d1a0b0d7564dc6` |
| `thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `7fe288cb3c8ad186ee82c2a82623272562efaadee7e36f06efdf40e6ff96ea4d` |
| `thm-laplacian-is-positive-semidefinite-and-annihilates-ones` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `68bc7434640c0661b80101035a5db0fd7565fe958520284f058eed549f11f194` |
| `thm-laplacian-is-the-oriented-incidence-product` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `6e1e59ea4796a2ebc9d9aa98be9a7ff8b039420136321aab59aa32e1bc6a38b3` |
| `thm-laplacian-kernel-dimension-counts-components` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `ed08d00756488d3fa00f8ad09589554e73620b2c89a5ec45b5975c8810416ca9` |
| `thm-matrix-tree-theorem` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `4eb655f338fd9171b05d59b68b9f093bc4c9044245d39fca8695426937f7949f` |
| `thm-pure-blockades-with-cograph-patterns-have-additive-kappa` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `e6703b85c62fb5556140fd060898d48983ed71fedba696dddeb6cc1f1d17ab3e` |
| `thm-pure-blockades-with-perfect-patterns-contain-large-homogeneous-subblockades` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `0ffe7d6f80a2cf7835748bf418adb62bce188f5886c3c38b8a1ccab3f20fd5b7` |
| `thm-spectral-gap-implies-connectivity-and-edge-expansion` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `3f40f627229ec4808b9a3b4702164aa33938132432cb2e7455afc0c141fcb4c2` |
| `thm-spectral-radius-is-bounded-by-average-and-maximum-degree` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `fcf3e1f5fa24e7330256fa4f890238b00e1f74b941b24f91f6092d31ac82b108` |
| `thm-spectrum-of-the-cycle-graph` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `d70cf22ab3484f21b7904f885ba8a57b925e0b9d572eb8fad7319e60101a943c` |
| `thm-spectrum-of-the-petersen-graph` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `7cc6c20393cc42849e946c8405619244965ba3b510ce7db2f195e315a7e47c32` |
| `thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `ec5f0fdc5f452775b736eaeafa184fbf48f6ffcb0ceeb73662ef34efc7fbd359` |
| `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `883218064b72f321301d456d1438b011aa84ccdfdfea265762a8e80928d3c146` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-22`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-22-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-22-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-22-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-22-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
