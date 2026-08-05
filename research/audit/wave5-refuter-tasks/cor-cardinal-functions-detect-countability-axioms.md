# Adversarial proof reading — `cor-cardinal-functions-detect-countability-axioms`

## The item under review, in full

`items/cor-cardinal-functions-detect-countability-axioms.md`

```markdown
---
id: cor-cardinal-functions-detect-countability-axioms
kind: corollary
title: "Under choice, the five cardinal functions recover first countability, second countability, separability, Lindelöfness, and ccc at the $\\aleph_0$ threshold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-first-countable-top, def-second-countable-space, def-separable-space, def-countable-chain-condition, def-compactness-variants, lem-weight-is-well-defined, lem-density-is-well-defined, lem-character-is-well-defined, lem-lindelof-degree-is-well-defined, lem-cellularity-is-well-defined]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---

## Statement

Assuming choice, $X$ is first countable iff $\chi(X)\le\aleph_0$, second countable iff $w(X)\le\aleph_0$, separable iff $d(X)\le\aleph_0$, Lindelöf iff $L(X)\le\aleph_0$, and ccc iff $c(X)\le\aleph_0$.

## Facts & Assumptions

**Given:** A topological space $X$ and the Axiom of Choice, with the five raw cardinal functions and the named countability properties.

[L1] The minima defining $w(X)$, $d(X)$, $\chi(x,X)$ and $L(X)$, and the suprema defining $\chi(X)$ and $c(X)$, exist as cardinals ([[lem-weight-is-well-defined]], [[lem-density-is-well-defined]], [[lem-character-is-well-defined]], [[lem-lindelof-degree-is-well-defined]], [[lem-cellularity-is-well-defined]]).

[L2] First countability means a countable local base at every point, second countability means a countable basis, separability means a countable dense subset, ccc means that every pairwise-disjoint family of nonempty open sets is countable, and Lindelöfness means that every open cover has a countable subcover ([[def-first-countable-top]], [[def-second-countable-space]], [[def-separable-space]], [[def-countable-chain-condition]], [[def-compactness-variants]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $w(X)$ and $d(X)$ are the least cardinalities of a basis and a dense subset, respectively; hence $w(X)\le\aleph_0$ and $d(X)\le\aleph_0$ say exactly that such a basis and such a dense subset are at most countable. [L1]

1.2 By [L1], $L(X)\le\aleph_0$ says that every open cover has a subcover of at most countable cardinality, and $c(X)\le\aleph_0$ says that every pairwise-disjoint family of nonempty open sets is at most countable. [L1]

1.3 Since $\chi(X)=\sup\{\chi(x,X):x\in X\}$, one has $\chi(X)\le\aleph_0$ exactly when every point has a local base of cardinality at most $\aleph_0$. [L1]

2.1 The descriptions in steps 1.1, 1.2 and 1.3 are precisely the definitions in [L2], so they yield the five asserted equivalences. [step 1.1, step 1.2, step 1.3, L2] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-first-countable-top` — definition — First countable space: a countable neighbourhood base at every point

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is **first
countable** if every point of $X$ has an at most countable neighbourhood base:
for each $x \in X$ there is a family
$\mathcal{B}_x \subseteq \mathcal{N}(x)$ that is at most countable
([[def-countable]], [[def-equinumerous]]) and such that every neighbourhood of
$x$ contains a member of $\mathcal{B}_x$ ([[def-neighbourhood-top]]).

**"Countable" here means "at most countable"**, as everywhere in this library
([[def-countable]]), so a *finite* neighbourhood base is permitted. That is not a
degenerate case: in a discrete space the one-element family $\{\{x\}\}$ is a
neighbourhood base at $x$, so every discrete space is first countable, and in an
indiscrete space $\{X\}$ is a neighbourhood base at every point.

**The base may be taken to consist of open sets, and it may be taken
decreasing.** If $\mathcal{B}_x$ is an at most countable neighbourhood base at
$x$, then replacing each $N \in \mathcal{B}_x$ by an open $U_N$ with
$x \in U_N \subseteq N$ gives an at most countable neighbourhood base of open
sets. Making the base decreasing, that is arranging
$M_0 \supseteq M_1 \supseteq \dots$, requires enumerating it and forming the
running finite intersections; both operations are carried out inside the proof of
the theorem that uses them, the next item, where the enumeration and the
recursion are cited explicitly rather than assumed here.

**First countability is a topological property**
([[def-homeomorphism-and-open-maps]]): a homeomorphism $h : X \to Y$ carries a
neighbourhood base at $x$ to a neighbourhood base at $h(x)$, since
$N \mapsto h[N]$ is a bijection between the neighbourhood filters preserving
inclusion, and a bijection preserves at most countability
([[def-equinumerous]]).

### `def-second-countable-space` — definition — Second countability: an at most countable basis for the topology

(statement provenance: literature-derived)

### Definition

A topological space $X$ is **second countable** when its topology has a basis $\mathcal B$ that is at most countable ([[def-topology-basis-subbasis]], [[def-countable]]). Thus every open set is a union of members of one at most countable family $\mathcal B$.

### `def-separable-space` — definition — Separability: the existence of an at most countable dense subset

(statement provenance: literature-derived)

### Definition

A topological space $X$ is **separable** if some at most countable subset $D\subseteq X$ is dense in $X$ ([[def-dense-top]], [[def-countable]]). Equivalently, every nonempty open subset of $X$ meets $D$.

### `def-countable-chain-condition` — definition — The countable chain condition: every pairwise-disjoint family of nonempty open sets is at most countable

(statement provenance: ai-altered)

### Definition

A topological space $X$ satisfies the **countable chain condition** (ccc) if every family $\mathcal U$ of nonempty open subsets of $X$ with $U\cap V=\varnothing$ whenever $U,V\in\mathcal U$ are distinct is at most countable ([[def-countable]]).

### `def-compactness-variants` — definition — Countably compact, Lindel\\\"of, sequentially compact, limit point compact and $\\sigma$-compact spaces, and relatively compact subsets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
open covers, subcovers, finiteness and compactness as in [[def-compact-space]],
and *finite*, *at most countable* and *uncountable* as in [[def-countable]].

- $(X, \mathcal{T})$ is **countably compact** when every open cover of $X$ that
  is at most countable has a finite subcover.
- $(X, \mathcal{T})$ is **Lindel&ouml;f** when every open cover of $X$ has an at
  most countable subcover.
- $(X, \mathcal{T})$ is **sequentially compact** when every sequence $(x_k)$ in
  $X$, that is every function $x : \mathbb{N} \to X$
  ([[def-sequence-convergence-top]]), has a subsequence $(x_{n_j})$ converging to
  a point of $X$, the index map $n : \mathbb{N} \to \mathbb{N}$ being strictly
  increasing ([[def-sequence]], [[lem-index-map-grows]]).
- $(X, \mathcal{T})$ is **limit point compact** when every infinite subset
  $A \subseteq X$ has a limit point in $X$, that is a point $p \in X$ every
  neighbourhood $N$ of which satisfies $N \cap (A \setminus \{p\}) \ne \varnothing$
  ([[def-interior-closure-boundary-top]]). Here *infinite* means not finite in
  the sense of [[def-countable]].
- $(X, \mathcal{T})$ is **$\sigma$-compact** when there is an at most countable
  family $\mathcal{K}$ of compact subsets of $X$ with $X = \bigcup \mathcal{K}$.
- A subset $A \subseteq X$ is **relatively compact in $X$** when its closure
  $\overline{A}$ ([[def-interior-closure-boundary-top]]) is a compact subset of
  $X$.

A subset $A \subseteq X$ is called countably compact, Lindel&ouml;f,
sequentially compact, limit point compact or $\sigma$-compact when the subspace
$(A, \mathcal{T}_A)$ is ([[def-subspace-topology-top]]), exactly as for
compactness. **Relative compactness is the exception and is deliberately not of
that form**: it is a statement about $A$ *inside* $X$, since $\overline{A}$ is
computed in $X$, and a set may be relatively compact in one space and not in
another that contains it. Every other notion on this list is intrinsic to the
subspace.

**The countable covers may be listed.** A nonempty at most countable family
$\mathcal{U}$ admits a surjection $\mathbb{N} \to \mathcal{U}$
([[lem-countable-iff-surjection-from-n]]), so countable compactness says: for
every sequence $(U_n)_{n \in \mathbb{N}}$ of open sets with
$X = \bigcup_{n \in \mathbb{N}} U_n$ there are finitely many indices whose sets
already cover $X$. That surjection is produced from the countability assumption
alone and no choice principle is involved; the empty family covers only the empty
space, which is compact anyway.

**Indexing starts at $0$.** A sequence here is a function on $\mathbb{N}$ and
$\mathbb{N}$ contains $0$ ([[def-sequence]]), so a subsequence is
$(x_{n_j})_{j \in \mathbb{N}}$ with $n_0 < n_1 < \cdots$ and $n_j \ge j$
([[lem-index-map-grows]]). An index range taken from a text that starts at $1$
must be shifted before it is used here.

**Agreement with the metric definitions.** Let $(X,d)$ be a metric space carrying
its metric topology $\mathcal{T}_d$ ([[def-metric-topology]],
[[def-metrizable-space]]). Then the three notions that
[[def-metric-compactness-variants]] defines metrically are the three defined
above, read in $(X, \mathcal{T}_d)$:

- *Countably compact.* The open sets used there are the members of
  $\mathcal{T}_d$, so the at most countable open covers are the same families and
  the condition is the same condition, exactly as for compactness itself
  ([[thm-compactness-agrees-with-metric-compactness]]).
- *Sequentially compact.* Convergence of a sequence in the metric sense and in
  the sense of [[def-sequence-convergence-top]] agree on a metric topology,
  because the balls around a point are a neighbourhood base at it
  ([[def-metrizable-space]]); the subsequences quantified over are the same.
- *Limit point compact.* A point $p$ is a limit point of $A$ in the metric sense
  when every ball around $p$ meets $A \setminus \{p\}$, and in the sense above
  when every neighbourhood does; the same neighbourhood base makes the two
  conditions one ([[def-metrizable-space]],
  [[def-interior-closure-boundary-top]]).

So no statement below about a metrizable space introduces a second notion, and
every theorem of the metric development about these three properties may be
quoted here once a metric inducing the topology is named. Lindel&ouml;fness,
$\sigma$-compactness and relative compactness have no metric counterpart in this
library and are defined here for the first time.

### `lem-weight-is-well-defined` — lemma — Under choice, $w(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, the collection of cardinalities of bases for $X$ is nonempty and has a least member. Hence $w(X)$ is well-defined.

### `lem-density-is-well-defined` — lemma — Under choice, $d(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $d(X)$ is a well-defined cardinal.

### `lem-character-is-well-defined` — lemma — Under choice, $\\chi(x,X)$ and $\\chi(X)$ are well-defined cardinals

(statement provenance: ai-altered)

### Statement

Assuming choice, every $\chi(x,X)$ and the raw supremum $\chi(X)$ are well-defined cardinals.

### `lem-lindelof-degree-is-well-defined` — lemma — Under choice, $L(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $L(X)$ is a well-defined cardinal.

### `lem-cellularity-is-well-defined` — lemma — Under choice, $c(X)$ is a well-defined cardinal

(statement provenance: ai-altered)

### Statement

Assuming choice, $c(X)$ is a well-defined cardinal.

## What to return

Read `cor-cardinal-functions-detect-countability-axioms` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
