# Adversarial proof reading — `cor-rn-is-polygonally-connected-and-locally-path-connected`

## The item under review, in full

`items/cor-rn-is-polygonally-connected-and-locally-path-connected.md`

```markdown
---
id: cor-rn-is-polygonally-connected-and-locally-path-connected
kind: corollary
title: "$\\mathbb{R}^n$ is polygonally connected, connected, locally path-connected and locally connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polygonal-path-and-polygonal-connectedness, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected, def-locally-connected, def-metric-ball, def-norm-and-normed-space, def-metric-topology]
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
    - title: "Euclidean space"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Locally connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Statement

For $n\ge1$, $\mathbb{R}^n$ is polygonally connected and connected, and it is locally path-connected and locally connected.

## Facts & Assumptions

**Given:** $\mathbb{R}^n$ with $n\ge1$ and its Euclidean topology.

[L1] A segment $t\mapsto(1-t)x+ty$ is a continuous polygonal path in $\mathbb{R}^n$ ([[lem-euclidean-polygonal-paths-are-continuous]], [[def-polygonal-path-and-polygonal-connectedness]]).

[L2] Euclidean balls are open and every open neighbourhood contains a Euclidean ball about its point ([[def-metric-ball]], [[def-metric-topology]]).

[L3] Every path-connected space is connected, and every locally path-connected space is locally connected ([[thm-path-connected-implies-connected]], [[def-locally-connected]]).

[L4] The norm triangle inequality keeps a segment joining two points of an open ball inside that ball ([[def-norm-and-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 For $x,y\in\mathbb{R}^n$, the one-segment path $t\mapsto(1-t)x+ty$ joins them. Hence $\mathbb{R}^n$ is polygonally connected. [L1]

1.2 Let $x\in\mathbb{R}^n$ and let $U$ be open with $x\in U$. Choose $r>0$ with $B(x,r)\subseteq U$. Each pair of points in this ball is joined by its segment, which stays in the ball by [L4]. [L1, L2, L4, choose]

2.1 It is path-connected and therefore connected by [L3]. [L3, step 1.1]

3.1 Thus every open neighbourhood contains an open path-connected ball, so $\mathbb{R}^n$ is locally path-connected, and it is locally connected by [L3]. [L2, L3, step 1.2] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-polygonal-path-and-polygonal-connectedness` — definition — Polygonal paths and polygonally connected subsets of $\\mathbb{R}^n$

(statement provenance: ai-altered)

### Definition

Let $A\subseteq\mathbb{R}^n$. A **polygonal path in $A$** from $x$ to $y$ is a path $\gamma:[0,1]\to A$ ([[def-path-connected]], [[def-interval]]) for which there are a finite list of vertices $v_0,\ldots,v_m\in A$ and a partition $0=t_0<t_1<\cdots<t_m=1$ such that $v_0=x$, $v_m=y$, and

$$\gamma(t)=\frac{t_i-t}{t_i-t_{i-1}}v_{i-1}+\frac{t-t_{i-1}}{t_i-t_{i-1}}v_i\quad\text{when }t_{i-1}\le t\le t_i.$$

The formula uses only scalar multiplication and vector addition in $\mathbb{R}^n$ ([[def-vector-space]]). The finite list is indexed by a natural number ([[def-finite-cardinality]]).

The subset $A$ is **polygonally connected** when every pair of its points is joined by a polygonal path in $A$.

### `lem-euclidean-polygonal-paths-are-continuous` — lemma — A finite concatenation of straight segments in $\\mathbb{R}^n$ is a continuous path

(statement provenance: ai-altered)

### Statement

Let $v_0,\ldots,v_m\in\mathbb{R}^n$ and $0=t_0<\cdots<t_m=1$. The affine pieces joining $v_{i-1}$ to $v_i$ define a continuous map $[0,1]\to\mathbb{R}^n$. If every piece lies in a subset $A$, the map is a polygonal path ([[def-polygonal-path-and-polygonal-connectedness]]) in $A$ from $v_0$ to $v_m$.

### `thm-path-connected-implies-connected` — theorem — Every path-connected space is connected, and every path component lies inside a component

(statement provenance: ai-altered)

### Statement

Let $X$ be a topological space, with subsets carrying the subspace topology
([[def-subspace-topology-top]]). Then:

1. **The unit interval is connected.** $I = [0,1]$ is a connected subset of
   $\mathbb{R}$, hence a connected space.
2. **Path-connected implies connected.** If $X$ is path-connected
   ([[def-path-connected]]) then $X$ is connected ([[def-connected-space]]). The
   same holds for a subset: a path-connected subset of $X$ is a connected subset
   of $X$.
3. **Path components refine components.** For every $x \in X$,
   $$P(x) \;\subseteq\; C(x),$$
   the path component inside the component
   ([[def-connected-component-and-quasicomponent]]). So every component is a
   union of path components.

**No converse is claimed.** Claim 2 is one-directional and claim 3 is an
inclusion; the question of when a connected space is path-connected is not
settled here.

**No choice principle is used.** The proof takes the union over the **set of all**
paths issuing from a fixed point rather than selecting one path per endpoint,
which is what an appeal to the Axiom of Choice would be. The point at which the
temptation arises is flagged in the remarks.

### `def-locally-connected` — definition — Locally connected and locally path-connected spaces: a neighbourhood base of open connected, respectively open path-connected, sets at every point

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$. Subsets carry the subspace topology
([[def-subspace-topology-top]]); connectedness is [[def-connected-space]] and
path-connectedness is [[def-path-connected]].

- $X$ is **locally connected at $x$** when for every open $U$ with $x \in U$
  there is an **open connected** $V$ with $x \in V \subseteq U$.
- $X$ is **locally connected** when it is locally connected at every point.
- $X$ is **locally path-connected at $x$** when for every open $U$ with
  $x \in U$ there is an **open path-connected** $V$ with $x \in V \subseteq U$;
  and **locally path-connected** when this holds at every point.

**The neighbourhood-base reading.** $X$ is locally connected at $x$ exactly when
the open connected sets containing $x$ form a neighbourhood base at $x$
([[def-neighbourhood-top]]). Indeed a neighbourhood $N$ of $x$ contains an open
$U$ with $x \in U \subseteq N$, and an open connected $V$ with
$x \in V \subseteq U$ is then a member of that family inside $N$; conversely a
base member inside an open $U \ni x$ is exactly what the displayed condition
asks. The same sentence with "path-connected" in place of "connected" gives the
reading for local path-connectedness. Recall that in this library a neighbourhood
need not be open ([[def-neighbourhood-top]]), which is why "open" is written out
in both clauses above.

**Openness in the clauses is not removable and is a live fork.** Asking only for
a *connected neighbourhood* inside every open $U \ni x$ — with no openness
demanded of the connected set — defines an a priori weaker condition at a single
point, called *connectedness im kleinen at $x$* in the literature. This library
takes the definition above, with openness, and **no statement here asserts that
the two agree**, at a point or globally.

**Local and global connectedness are independent conditions, and neither clause
above mentions the other.** A two-point discrete space
([[def-standard-topologies]]) is locally connected, every singleton being open
and connected, and is not connected, the two singletons separating it. So local
connectedness does not imply connectedness. The reverse implication is not
asserted here either.

**Both notions are properties of the space, not of an ambient pair.** "A locally
connected subset $A \subseteq X$" means that the space $A$ with its subspace
topology is locally connected, and the open sets tested are then the sets open in
$A$.

### `def-metric-ball` — definition — Open ball, closed ball and sphere in a metric space

(statement provenance: ai-altered)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $x \in X$ and let
$r \in \mathbb{R}$ with $r > 0$ ([[def-real-order]]). Define

$$B(x,r) := \{\, y \in X : d(x,y) < r \,\}, \qquad \bar B(x,r) := \{\, y \in X : d(x,y) \le r \,\}, \qquad S(x,r) := \{\, y \in X : d(x,y) = r \,\}.$$

$B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the
**sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly
positive real; a ball of radius $0$ or of negative radius is never written in
this library.

**Immediate consequences of the definitions.** For every $x \in X$ and $r > 0$:

- $x \in B(x,r)$, because $d(x,x) = 0 < r$ (axiom (M1) of [[def-metric-space]]);
  in particular open and closed balls are nonempty.
- $B(x,r) \subseteq \bar B(x,r)$ and $S(x,r) \subseteq \bar B(x,r)$, and
  $\bar B(x,r)$ is the disjoint union of $B(x,r)$ and $S(x,r)$, by trichotomy of
  the order of $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]):
  each $y$ satisfies exactly one of $d(x,y) < r$, $d(x,y) = r$, $d(x,y) > r$.
- If $0 < s \le r$ then $B(x,s) \subseteq B(x,r)$ and
  $\bar B(x,s) \subseteq \bar B(x,r)$, by transitivity of the order.
- Nonnegativity of the metric ([[lem-metric-nonnegativity]]) is what forces the
  radius convention, and it forces it for the **open** ball only: if $r \le 0$
  then $B(x,r) = \{y : d(x,y) < r\}$ is empty, because $d(x,y) \ge 0 \ge r$
  for every $y$. The other two sets behave differently at $r = 0$, and the
  convention $r > 0$ excludes them for uniformity rather than for emptiness:
  $\bar B(x,0) = S(x,0) = \{x\}$, since $d(x,y) \le 0$ together with
  $d(x,y) \ge 0$ gives $d(x,y) = 0$ and hence $y = x$ by (M1). For $r < 0$ all
  three sets are empty.

**A sphere may be empty, and so the three sets are not on a par.** For $r > 0$
the open and closed balls always contain $x$, but nothing in the definition
produces a point at distance exactly $r$ from $x$. If a metric takes only the
values $0$ and $1$, as the discrete metric on the companion page does, then
$S(x,2) = \emptyset$ while $B(x,2) = \bar B(x,2)$ is the whole space. So
nonemptiness of a sphere is never available by convention: where it is used, it
is proved.

**The ambient space is part of the notation.** $B(x,r)$ depends on $(X,d)$ and
not on $x$ and $r$ alone. When more than one space or more than one metric is in
play we write $B_X(x,r)$, or $B_d(x,r)$, and likewise for $\bar B$ and $S$. This
matters as soon as subspaces appear ([[def-isometry-and-metric-embedding]]): a
ball of a subspace is the trace on it of a ball of the ambient space, and the two
are different sets.

### `def-norm-and-normed-space` — definition — A norm on a real vector space, the induced metric, and the dictionary with the metric axioms

(statement provenance: untagged)

### Definition

Throughout this page $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]]) constructed in this library, in particular a
field, so that "vector space" below always means vector space over $\mathbb{R}$
([[def-vector-space]]).

Let $V$ be a vector space over $\mathbb{R}$, with zero vector $0_V$. A **norm on
$V$** is a function $N : V \to \mathbb{R}$ such that for all $u, v \in V$ and all
$\lambda \in \mathbb{R}$:

- **(N1) Separation.** $N(v) = 0$ if and only if $v = 0_V$.
- **(N2) Absolute homogeneity.** $N(\lambda v) = |\lambda|\,N(v)$, the absolute
  value being that of [[def-abs-value]].
- **(N3) Triangle inequality.** $N(u + v) \le N(u) + N(v)$.

A **normed space** is a pair $(V, N)$ consisting of a vector space $V$ over
$\mathbb{R}$ and a norm $N$ on it. When only one norm is in play we write
$\lVert v\rVert$ for $N(v)$; when several are, the norm is always named.

**The values of a norm are real numbers.** The codomain is $\mathbb{R}$, so
$N(v)$ is an honest element of the complete ordered field and no infinite value
is permitted. This is the same convention [[rem-metric-axiom-conventions]]
records for metrics.

### Nonnegativity is a theorem, not an axiom

Many texts add a fourth condition $N(v) \ge 0$. It is redundant. Applying (N2)
with $\lambda = -1$ gives $N(-v) = |-1|\,N(v) = N(v)$ ([[lem-of-abs-value]],
[[lem-vector-space-elementary-consequences]] for $(-1)v = -v$), and then (N3)
with $u = v$ and $-v$ gives

$$0 \;=\; N(0_V) \;=\; N\bigl(v + (-v)\bigr) \;\le\; N(v) + N(-v) \;=\; N(v) + N(v),$$

where $N(0_V) = 0$ is (N1). So $N(v) + N(v) \ge 0$, and if $N(v) < 0$ then
$N(v) + N(v) < 0$ by addition of inequalities, which trichotomy forbids
([[def-complete-ordered-field]]). Hence $N(v) \ge 0$ for every $v \in V$.

**Consequently the verification of a candidate norm has three things to check and
not four**, exactly as the verification of a candidate metric has three and not
four ([[def-metric-space]], [[lem-metric-nonnegativity]]). No item in this
library assumes nonnegativity of a norm before the argument above.

### The induced metric

Let $N$ be a norm on $V$ and define

$$d_N(u,v) \;:=\; N(u - v) \qquad (u, v \in V),$$

where $u - v = u + (-v)$ ([[def-vector-space]]). **Then $d_N$ is a metric on
$V$** ([[def-metric-space]]), and the three axioms are the three conditions
above, in order:

- **(M1)** $d_N(u,v) = 0$ means $N(u-v) = 0$, which by (N1) says $u - v = 0_V$,
  that is $u = v$; and conversely $d_N(v,v) = N(0_V) = 0$.
- **(M2)** $d_N(v,u) = N(v-u) = N\bigl((-1)(u-v)\bigr) = |-1|\,N(u-v) = d_N(u,v)$,
  by (N2), [[lem-of-abs-value]] and $(-1)w = -w$
  ([[lem-vector-space-elementary-consequences]]).
- **(M3)** $d_N(u,w) = N\bigl((u-v) + (v-w)\bigr) \le N(u-v) + N(v-w) = d_N(u,v) + d_N(v,w)$,
  by (N3).

A normed space is therefore a metric space, and every notion defined for metric
spaces — open set ([[def-metric-topology]]), convergence, Cauchyness,
continuity, compactness — is available in it with no further definition. **This
library never introduces a second notion of any of them for normed spaces.**

### Two properties an arbitrary metric need not have

The metric $d_N$ satisfies, for all $u, v, w \in V$ and $\lambda \in \mathbb{R}$:

- **translation invariance**, $d_N(u + w, v + w) = N\bigl((u+w)-(v+w)\bigr) = N(u-v) = d_N(u,v)$;
- **absolute homogeneity**, $d_N(\lambda u, \lambda v) = N\bigl(\lambda(u-v)\bigr) = |\lambda|\,d_N(u,v)$, by (N2).

**Not every metric on a vector space arises from a norm**, and homogeneity is
what fails. The published bounded remetrisation [[lem-bounded-remetrisation]]
replaces a metric $d$ by $d' = \min\{d, 1\}$, a metric with the same topology
whose values never exceed $1$; on a vector space $V$ containing a vector $v$ with
$d(v, 0_V) > 0$ this $d'$ cannot be $d_M$ for any norm $M$, since absolute
homogeneity would force $d'(\lambda v, 0_V) = |\lambda|\,d'(v, 0_V)$, which is
unbounded in $\lambda$, while $d'$ is bounded by $1$. So the passage from norms
to metrics is not reversible, and a statement about a metric on a vector space is
strictly weaker than the corresponding statement about a norm.

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

## What to return

Read `cor-rn-is-polygonally-connected-and-locally-path-connected` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
