---
id: def-lattice-path-and-step-set
kind: definition
title: "Lattice paths, step sets and step words"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-integers, def-finite-words-factor-avoidance-and-prefix-states, def-finite-cardinality, def-semigroup-and-monoid, def-monoid-finite-product, thm-int-comm-ring, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.1'
      url: "https://arxiv.org/pdf/1503.05930"
    - title: "A. Postnikov (notes by A. Lin), MIT 18.212 Algebraic Combinatorics, Spring 2019"
      url: "https://web.stanford.edu/~lindrew/18.212.pdf"
pipeline_run: null
---

## Definition

Points of the plane are pairs of integers ([[def-integers]]), added
componentwise:

$$(x,y)+(x',y') := (x+x',\, y+y'), \qquad -(x,y) := (-x,-y).$$

Since $(\mathbb{Z},+,0)$ is a commutative group ([[thm-int-comm-ring]]) and each
monoid axiom holds one coordinate at a time,
$(\mathbb{Z}\times\mathbb{Z},+,(0,0))$ is a commutative monoid
([[def-semigroup-and-monoid]]). A natural number written where an integer is
expected denotes its image under the embedding $\mathbb{N}\to\mathbb{Z}$,
$k\mapsto[(k,0)]$, of [[lem-nat-embeds-int]], which is injective and preserves
addition, multiplication and the order; no symbol is written for it, so $2$, $n$
and $\lvert S\rvert$ denote integers when they occur in an integer expression.

A **step set** is a finite subset $S\subseteq\mathbb{Z}\times\mathbb{Z}$
([[def-finite-cardinality]]); its elements are **steps**.

**Definition.** Let $n\in\mathbb{N}$ and $P\in\mathbb{Z}\times\mathbb{Z}$. A
**lattice path of length $n$ with steps in $S$ from $P$** is a function
$v:\{0,1,\dots,n\}\to\mathbb{Z}\times\mathbb{Z}$ with $v(0)=P$ and
$v(i)-v(i-1)\in S$ for every $i$ with $1\le i\le n$. It is a path **from $P$ to
$Q$** when moreover $v(n)=Q$. Write

$$\mathcal{L}_S(P;n) := \{\, v : v \text{ is a lattice path of length } n \text{ with steps in } S \text{ from } P \,\},$$

and $\mathcal{L}_S(P,Q;n)$ for the subset of those with $v(n)=Q$.

A path is nothing but this function. No geometry of the plane is used, no
continuous curve is attached to it, and the points $v(0),\dots,v(n)$ are the only
data.

**The length-zero case, stated rather than left implicit.** For $n=0$ the domain
$\{0\}$ has one point and the condition on differences is vacuous, so
$\mathcal{L}_S(P;0)$ has exactly one element, the function $v$ with $v(0)=P$.
This is the **empty path at $P$**; it is a path from $P$ to $P$, and it exists
even when $S=\varnothing$.

**The step word.** Words of length $n$ over an alphabet are the functions
$\{0,\dots,n-1\}\to S$, and $S^{n}$ denotes the set of them
([[def-finite-words-factor-avoidance-and-prefix-states]]). The **step word** of a
path $v\in\mathcal{L}_S(P;n)$ is the word $w\in S^{n}$ with

$$w_{i-1} := v(i)-v(i-1) \qquad (1\le i\le n),$$

equivalently $w_{j}=v(j+1)-v(j)$ for $0\le j\le n-1$. The step word of the empty
path is the empty word.

**The path traced by a word.** Conversely let $w\in S^{n}$ and
$P\in\mathbb{Z}\times\mathbb{Z}$. The **path traced by $w$ from $P$** is

$$v_{w}(i) := P+\sum_{j<i}w_{j} \qquad (0\le i\le n),$$

the sum being the finite product of [[def-monoid-finite-product]] in the
commutative monoid $\mathbb{Z}\times\mathbb{Z}$, written additively. Its two
defining clauses read $\sum_{j<0}w_j=(0,0)$ and
$\sum_{j<i+1}w_j=\sum_{j<i}w_j+w_i$, so

$$v_{w}(0)=P, \qquad v_{w}(i)=v_{w}(i-1)+w_{i-1} \quad (1\le i\le n),$$

and $v_w$ is a lattice path of length $n$ with steps in $S$ from $P$, since each
displayed difference is the letter $w_{i-1}\in S$.

**Concatenation.** Let $v$ be a path of length $m$ from $P$ to $Q$ and let $v'$
be a path of length $n$ from $Q$ to $R$, with step words $w$ and $w'$. Their
**concatenation** $v\cdot v'$ is the path of length $m+n$ traced from $P$ by the
concatenated word $ww'$ ([[def-finite-words-factor-avoidance-and-prefix-states]]).
The common endpoint condition ensures that its first $m$ steps are $v$ and its
last $n$ steps are $v'$. Concatenating on the left with the empty path at $P$, or
on the right with the empty path at $Q$, changes nothing because
$\varepsilon w=w=w\varepsilon$.

## Remarks

- **Why the step set is required to be finite.** Nothing in the definition of a
  path needs it; it is imposed because every count on this page is a count of
  words over $S$, and a finite $S$ makes every $S^n$ finite. If the finiteness
  requirement were relaxed, the converse would hold for $n\ge1$; at $n=0$ the
  set $S^0$ is the singleton containing the empty word for every $S$.

- **A path records where it starts.** Two paths with the same step word and
  different starting points are different functions. Every set of paths written
  down here therefore fixes a start point, and translation from one start point
  to another is a separate statement each time it is used.
