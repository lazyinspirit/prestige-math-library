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
label: adjudicate-rejudge-c-round-1

# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-22",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "c",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cor-dominated-convergence-is-a-vitali-corollary]: cor-dominated-convergence-is-a-vitali-corollary: current gpt-5.6-terra rejection has no exact Alpha outcome for context 32d16d277d33e43066d7f5e3a2b024b4f072",
      "output": "level-coverage --judge-only: 425/425 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 17 unadjudicated, 0 open fatal, 170 adjudicated rejection(s) closed nonfatally; legacy gate counter 425/425 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cor-dominated-convergence-is-a-vitali-corollary]: cor-dominated-convergence-is-a-vitali-corollary: current gpt-5.6-terra rejection has no exact Alpha outcome for context 32d16d277d33e43066d7f5e3a2b024b4f072c4ef38e6b31de6a76828e44e8812\nERROR judge-adjudication-missing [def-algebraic-connectivity-of-a-graph]: def-algebraic-connectivity-of-a-graph: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0bed17ddc01711e56e2a6dc625038609a5b8cccf7d5e01c7b6915e197e3ccdb4\nERROR judge-adjudication-missing [def-the-axioms-ab5-and-ab5-star]: def-the-axioms-ab5-and-ab5-star: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2f21fdb1fb542f7610d96c287699e061d92d96e7375497bbdcd02dc29c993974\nERROR judge-adjudication-missing [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval: current gpt-5.6-terra rejection has no exact Alpha outcome for context 33328bbbf66ddbd92689abbbc3c3d76877ff0b653018bd23a9787e5594f944af\nERROR judge-adjudication-missing [ex-redundant-primary-component-deletion]: ex-redundant-primary-component-deletion: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4398256c6a4a627d2e0cc0cbb69aff5414f8c0a1e655a99e3dcd50d7cd96af86\nERROR judge-adjudication-missing [ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise]: ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise: current gpt-5.6-terra rejection has no exact Alpha outcome for context 97822e44048f55f36e410280a79f0e758eb9c19ca30846086a22a171f14412d9\nERROR judge-adjudication-missing [fs-arzela-ascoli-alone-proves-montel]: fs-arzela-ascoli-alone-proves-montel: current gpt-5.6-terra rejection has no exact Alpha outcome for context 83d2d9b15db08597988e16227838c2a1cbe06bed11c202ea4362fef4e6773925\nERROR judge-adjudication-missing [fs-convergence-in-measure-implies-almost-everywhere-convergence]: fs-convergence-in-measure-implies-almost-everywhere-convergence: current gpt-5.6-terra rejection has no exact Alpha outcome for context 001d2cad733cb586e16b3f944ad3405f10a260d76964afcbb820c5ea0a492fe0\nERROR judge-adjudication-missing [lem-basic-bull-free-hole-with-a-complete-outside-vertex]: lem-basic-bull-free-hole-with-a-complete-outside-vertex: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3ec50aefeca6fb186b8213fef98d46605170e18e9f02cfa27a35a084606d2549\nERROR judge-adjudication-missing [lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy]: lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4f96b56f8c391cc4a78ece4c02aa7a1a27313c51e114a8e34ec4d73a98f3c7e1\nERROR judge-adjudication-missing [rem-finite-measure-implication-table-for-the-main-modes-of-convergence]: rem-finite-measure-implication-table-for-the-main-modes-of-convergence: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7a2e5ff21195734e733b02cdde43e2bd393073a44a59d0d3bc09e2035186726d\nERROR judge-adjudication-missing [thm-binet-cauchy-formula]: thm-binet-cauchy-formula: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2870dad27d26aae477bc954fb7de8a55abe6ba7d5a527f66e03628ee9b76581c\nERROR judge-adjudication-missing [thm-hnn-normal-form-theorem]: thm-hnn-normal-form-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6c2113c42c1da70c72463df10e5008de5045351f5a0ed79eac35f3b3dc4367a3\nERROR judge-adjudication-missing [thm-lasker-noether-primary-decomposition]: thm-lasker-noether-primary-decomposition: current gpt-5.6-terra rejection has no exact Alpha outcome for context adc871af5a08fd4077c21d2534641fb256c2aa8678b96ae1a19d03f5d53ee052\nERROR judge-adjudication-missing [thm-mobius-preserves-circlines-and-reflections]: thm-mobius-preserves-circlines-and-reflections: current gpt-5.6-terra rejection has no exact Alpha outcome for context 160101f1d2c3fa7fd3b758792aef98f17b0325434c06ddd5aeafbf905a9effa6\nERROR judge-adjudication-missing [thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module]: thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2f895f99cdbe1cd3be404498f7039dad8e33c77bbdee666d750a6be22ccdaf26\nERROR judge-adjudication-missing [thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations]: thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5c720cb569130dd9d3ccb1cfe9df86200aff206ac585248484a1b71b8fd8baba\n",
      "named_ids": [
        "cor-dominated-convergence-is-a-vitali-corollary",
        "def-algebraic-connectivity-of-a-graph",
        "def-the-axioms-ab5-and-ab5-star",
        "ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval",
        "ex-redundant-primary-component-deletion",
        "ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise",
        "fs-arzela-ascoli-alone-proves-montel",
        "fs-convergence-in-measure-implies-almost-everywhere-convergence",
        "lem-basic-bull-free-hole-with-a-complete-outside-vertex",
        "lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy",
        "rem-finite-measure-implication-table-for-the-main-modes-of-convergence",
        "thm-binet-cauchy-formula",
        "thm-hnn-normal-form-theorem",
        "thm-lasker-noether-primary-decomposition",
        "thm-mobius-preserves-circlines-and-reflections",
        "thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module",
        "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cor-dominated-convergence-is-a-vitali-corollary",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-algebraic-connectivity-of-a-graph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-the-axioms-ab5-and-ab5-star",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-redundant-primary-component-deletion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-arzela-ascoli-alone-proves-montel",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-convergence-in-measure-implies-almost-everywhere-convergence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-basic-bull-free-hole-with-a-complete-outside-vertex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "rem-finite-measure-implication-table-for-the-main-modes-of-convergence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-binet-cauchy-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hnn-normal-form-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-lasker-noether-primary-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-mobius-preserves-circlines-and-reflections",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "def-algebraic-connectivity-of-a-graph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-basic-bull-free-hole-with-a-complete-outside-vertex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-binet-cauchy-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations",
      "scope": "run",
      "owner": "c"
    }
  ],
  "live_tuples": [
    {
      "id": "def-algebraic-connectivity-of-a-graph",
      "model": "gpt-5.6-terra",
      "context_sha256": "0bed17ddc01711e56e2a6dc625038609a5b8cccf7d5e01c7b6915e197e3ccdb4",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "lem-basic-bull-free-hole-with-a-complete-outside-vertex",
      "model": "gpt-5.6-terra",
      "context_sha256": "3ec50aefeca6fb186b8213fef98d46605170e18e9f02cfa27a35a084606d2549",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-binet-cauchy-formula",
      "model": "gpt-5.6-terra",
      "context_sha256": "2870dad27d26aae477bc954fb7de8a55abe6ba7d5a527f66e03628ee9b76581c",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module",
      "model": "gpt-5.6-terra",
      "context_sha256": "2f895f99cdbe1cd3be404498f7039dad8e33c77bbdee666d750a6be22ccdaf26",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations",
      "model": "gpt-5.6-terra",
      "context_sha256": "5c720cb569130dd9d3ccb1cfe9df86200aff206ac585248484a1b71b8fd8baba",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **c**, run `frontier-22`

You are the group Alpha for batches **4**, **9**: 3 A/B pair(s), 6 page(s), 89 item(s), 5 open rejection(s) over 5 item(s).

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
| `def-algebraic-connectivity-of-a-graph` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `0bed17ddc01711e56e2a6dc625038609a5b8cccf7d5e01c7b6915e197e3ccdb4` |
| `lem-basic-bull-free-hole-with-a-complete-outside-vertex` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `3ec50aefeca6fb186b8213fef98d46605170e18e9f02cfa27a35a084606d2549` |
| `thm-binet-cauchy-formula` | `algebraic-and-spectral-graph-theory` | gpt-5.6-terra | `2870dad27d26aae477bc954fb7de8a55abe6ba7d5a527f66e03628ee9b76581c` |
| `thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module` | `bull-free-graphs-and-the-erdos-hajnal-property` | gpt-5.6-terra | `2f895f99cdbe1cd3be404498f7039dad8e33c77bbdee666d750a6be22ccdaf26` |
| `thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations` | `cographs-perfect-patterns-and-pure-pairs` | gpt-5.6-terra | `5c720cb569130dd9d3ccb1cfe9df86200aff206ac585248484a1b71b8fd8baba` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-22`

Read `research/frontier-22-judge-closure.json`,
`research/frontier-22-judge.jsonl`,
`research/frontier-22-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-22-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-22-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-22-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
