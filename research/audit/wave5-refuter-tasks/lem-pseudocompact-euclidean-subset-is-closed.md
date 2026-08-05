# Adversarial proof reading — `lem-pseudocompact-euclidean-subset-is-closed`

## The item under review, in full

`items/lem-pseudocompact-euclidean-subset-is-closed.md`

```markdown
---
id: lem-pseudocompact-euclidean-subset-is-closed
kind: lemma
title: "A pseudocompact subset of $\\mathbb{R}^n$ is closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pseudocompact-space, thm-closure-characterisation-top, def-metric-topology, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-metrics-on-rn]
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "Pseudocompact space"
      url: "https://en.wikipedia.org/wiki/Pseudocompact_space"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
pipeline_run: null
---

## Statement

Let $n\ge1$. Every pseudocompact subset $A\subseteq\mathbb{R}^n$ is closed in the Euclidean topology.

## Facts & Assumptions

**Given:** A pseudocompact subset $A\subseteq\mathbb{R}^n$, with Euclidean metric $d_2$ and norm $\lVert\cdot\rVert_2$.

[L1] A set is closed if and only if it equals its closure; and $p\in\overline A$ means every open neighbourhood of $p$ meets $A$ ([[thm-closure-characterisation-top]]).

[L2] Euclidean open sets are the sets that contain a Euclidean ball about each of their points ([[def-metric-topology]], [[lem-metrics-on-rn]]).

[L3] The reverse triangle inequality gives $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$, and the Euclidean norm is continuous ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L4] Pseudocompactness requires every continuous real-valued function on $A$ to have bounded image ([[def-pseudocompact-space]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $A$ is not closed. By [L1], fix $p\in\overline A\setminus A$. [assume-contra, L1, choose]

2.1 Define $f:A\to\mathbb{R}$ by $f(x):=1/\lVert x-p\rVert_2$. This is defined because $p\notin A$, so every denominator is positive. [step 1.1, construct]

2.2 For every real $M>0$, [L1] and [L2] give $x\in A$ with $\lVert x-p\rVert_2<1/M$; then $f(x)>M$. Hence $f[A]$ is unbounded. [step 1.1, L1, L2]

3.1 The function $f$ is continuous on $A$: at $a\in A$ put $d:=\lVert a-p\rVert_2>0$. If $\lVert x-a\rVert_2<d/2$, then [L3] gives $\lVert x-p\rVert_2>d/2$, and $$ |f(x)-f(a)| \le \frac{2}{d^2}\lVert x-a\rVert_2. $$ Thus a sufficiently small Euclidean ball about $a$ maps into any prescribed real neighbourhood of $f(a)$. [step 2.1, L2, L3]

4.1 Steps 3.1 and 2.2 contradict pseudocompactness through [L4]. Therefore $A$ is closed. [step 3.1, step 2.2, L4, discharge-contradiction] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-pseudocompact-space` — definition — Pseudocompact space: every continuous real-valued function has bounded image

(statement provenance: ai-altered)

### Definition

A topological space $X$ is **pseudocompact** when every continuous map $f:X\to\mathbb{R}$ ([[def-continuous-map-top]]) has bounded image: there are reals $\ell,u$ with $\ell\le f(x)\le u$ for every $x\in X$ ([[def-bounded-set]]).

A subset $A$ of a topological space is **pseudocompact** when $A$, equipped with its subspace topology, is pseudocompact ([[def-subspace-topology-top]]).

### `thm-closure-characterisation-top` — theorem — A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \subseteq X$ and let
$x \in X$. Closure, derived set and limit points are as in
[[def-interior-closure-boundary-top]]. Then:

1. The following four conditions are equivalent.
   - (a) $x \in \overline{A}$;
   - (b) $N \cap A \ne \varnothing$ for every neighbourhood $N$ of $x$
     ([[def-neighbourhood-top]]);
   - (c) $U \cap A \ne \varnothing$ for every open $U$ with $x \in U$;
   - (d) $B \cap A \ne \varnothing$ for every $B \in \mathcal{B}$ with $x \in B$.
2. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$; so it is the smallest closed superset of
   $A$, and $A$ is closed if and only if $A = \overline{A}$.
3. $\overline{A} = A \cup A'$.

Claim 2 is recorded here for reference and is discharged in
[[def-interior-closure-boundary-top]], where it is what makes the definition of
$\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in
which the closure is used everywhere afterwards, and clause (d) is what makes a
closure computable from a basis rather than from all open sets.

### `def-metric-topology` — definition — The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement

(statement provenance: literature-derived)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

### `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` — lemma — The finite and reverse triangle inequalities for a norm; and for $n \\ge 1$ every norm $N$ on $\\mathbb{R}^n$ satisfies $N(x) \\le C\\lVert x\\rVert_1$ and is Lipschitz, hence continuous, for $d_2$

(statement provenance: untagged)

### Statement

**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about
$\mathbb{R}^{n}$ with $n \ge 1$.**

1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over
   $\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every
   $p \in \mathbb{N}$ and every list $u : p \to V$
   ([[def-linear-combination-and-span]]),
   $$N\Bigl(\sum_{j<p} u_j\Bigr) \;\le\; \sum_{j<p} N(u_j),$$
   and for all $u, w \in V$,
   $$\bigl|N(u) - N(w)\bigr| \;\le\; N(u - w).$$

Now let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the norms of
[[def-p-norms-on-rn]] and write $\iota$ for the canonical natural
([[def-canonical-natural]]).

2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on
   $\mathbb{R}^{n}$ and put $C := \max\{\, N(e_k) : k<n \,\}$, a maximum over a
   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],
   [[lem-finite-set-has-max]]). Then $C \ge 0$ and
   $$N(x) \;\le\; C\,\lVert x\rVert_1 \qquad \text{for every } x \in \mathbb{R}^{n}.$$
3. **The comparison chain.** For every $x \in \mathbb{R}^{n}$,
   $$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(n)\,\lVert x\rVert_\infty , \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(n)}\;\lVert x\rVert_2 .$$
   In particular $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
   $\lVert\cdot\rVert_\infty$ are pairwise equivalent norms on $\mathbb{R}^{n}$,
   with the constants displayed ([[def-equivalent-norms]]).
4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in
   clause 2, $N : (\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ is
   Lipschitz with constant $C\sqrt{\iota(n)}$
   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],
   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and
   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

**Where $n \ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to
exist, and clause 3 mentions $\lVert\cdot\rVert_\infty$; at $n = 0$ each is a
maximum over the empty index set and does not exist, exactly as in
[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis
on the dimension and no hypothesis on the space.

### `lem-metrics-on-rn` — lemma — $\\mathbb{R}^n$ as the set of functions $n \\to \\mathbb{R}$, and $d_1$, $d_2$, $d_\\infty$ are metrics on it

(statement provenance: ai-altered)

### Statement

Let $n \in \mathbb{N}$ with $n \ge 1$. A von Neumann natural is the set of its
predecessors, $n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so it can be
used directly as an index set. Define

$$\mathbb{R}^n := \{\, x : x \text{ is a function } n \to \mathbb{R} \,\},$$

and write $x_k$ for $x(k)$, $k < n$. Two elements of $\mathbb{R}^n$ are equal
exactly when they agree at every $k < n$, functions being equal when they have
the same values. For $x, y \in \mathbb{R}^n$ put

$$d_1(x,y) := \sum_{k<n} |x_k - y_k|, \qquad d_2(x,y) := \sqrt{\ \sum_{k<n} (x_k - y_k)^2\ }, \qquad d_\infty(x,y) := \max\{\, |x_k - y_k| : k < n \,\}.$$

All three are well defined: the finite sums are those of [[def-finite-sum]]; the
sum of squares is nonnegative ([[lem-finite-sum-laws]], [[lem-of-square-positive]])
so it has a unique nonnegative square root ([[thm-of-square-roots]]); and
$\{|x_k - y_k| : k < n\}$ is a nonempty finite subset of $\mathbb{R}$, because
$n \ge 1$, so it has a maximum ([[lem-finite-set-has-max]], [[def-max-min]]).

**Then $d_1$, $d_2$ and $d_\infty$ are metrics on $\mathbb{R}^n$**
([[def-metric-space]]).

**Why $n \ge 1$.** For $n = 0$ the set $\mathbb{R}^0$ has exactly one element,
the empty function, and $d_1$ and $d_2$ are the empty sum $0$ and its root; but
$d_\infty$ would be the maximum of the empty set, which does not exist. The
hypothesis $n \ge 1$ is therefore not decoration, and it is carried by every
statement about $d_\infty$ in this library.

## What to return

Read `lem-pseudocompact-euclidean-subset-is-closed` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
