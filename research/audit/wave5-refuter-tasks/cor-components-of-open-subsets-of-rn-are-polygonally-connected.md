# Adversarial proof reading — `cor-components-of-open-subsets-of-rn-are-polygonally-connected`

## The item under review, in full

`items/cor-components-of-open-subsets-of-rn-are-polygonally-connected.md`

```markdown
---
id: cor-components-of-open-subsets-of-rn-are-polygonally-connected
kind: corollary
title: "Every connected component of an open subset of $\\mathbb{R}^n$ is open and polygonally connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-open-connected-subsets-of-rn-are-polygonally-connected, def-metric-ball, def-norm-and-normed-space, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected, def-connected-component-and-quasicomponent]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Locally connected space"
      url: "https://en.wikipedia.org/wiki/Locally_connected_space"
pipeline_run: null
---

## Statement

Every connected component of an open subset $U\subseteq\mathbb{R}^n$ is open in $\mathbb{R}^n$ and polygonally connected.

## Facts & Assumptions

**Given:** An open subset $U\subseteq\mathbb{R}^n$ and a connected component $C$ of $U$.

[L1] A Euclidean ball is path-connected, hence connected: the norm triangle inequality keeps every straight segment in the ball, the segment is continuous, and every path-connected space is connected ([[def-metric-ball]], [[def-norm-and-normed-space]], [[lem-euclidean-polygonal-paths-are-continuous]], [[thm-path-connected-implies-connected]]).

[L2] A component is the largest connected subset containing each of its points ([[def-connected-component-and-quasicomponent]]).

[L3] An open connected Euclidean subset is polygonally connected ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in C$. Since $U$ is open, choose $r>0$ with $B(x,r)\subseteq U$. The ball is connected by [L1], meets $C$ at $x$, and so lies in $C$ by maximality of the component. [L1, L2, choose]

2.1 Therefore every point of $C$ has a Euclidean ball contained in $C$, so $C$ is open in $\mathbb{R}^n$. [step 1.1]

3.1 The component $C$ is connected and now open, so [L3] makes it polygonally connected. [L3, step 2.1] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `thm-open-connected-subsets-of-rn-are-polygonally-connected` — theorem — For an open subset of $\\mathbb{R}^n$, connectedness, path-connectedness and polygonal connectedness are equivalent

(statement provenance: ai-altered)

### Statement

Let $U\subseteq\mathbb{R}^n$ be open. Then $U$ is connected if and only if it is path-connected, if and only if it is polygonally connected.

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

### `def-connected-component-and-quasicomponent` — definition — Connected components, quasicomponents, and totally disconnected spaces

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
subsets carrying the subspace topology ([[def-subspace-topology-top]]) and
connectedness as in [[def-connected-space]]. Let $x \in X$.

- The **connected component of $x$** is
  $$C(x) \;:=\; \bigcup \{\, A \subseteq X : x \in A \text{ and } A \text{ is connected} \,\} .$$
  A **component of $X$** is a set of the form $C(x)$ for some $x \in X$.
- The **quasicomponent of $x$** is
  $$Q(x) \;:=\; \bigcap \{\, K \subseteq X : x \in K \text{ and } K \text{ is clopen in } X \,\} .$$
  A **quasicomponent of $X$** is a set of the form $Q(x)$.
- $X$ is **totally disconnected** when $C(x) = \{x\}$ for every $x \in X$.

**Both are well posed, and the obligations are discharged here.** The family
united in the definition of $C(x)$ is nonempty, since the singleton $\{x\}$ is
connected: a singleton admits no separation, a separation requiring two disjoint
nonempty pieces. Every member of that family contains $x$, so
[[thm-unions-of-connected-sets]] claim 1 applies and **$C(x)$ is connected**;
being a union of every connected set through $x$, it contains each of them, so
$C(x)$ is *the largest connected subset of $X$ containing $x$*. The family
intersected in the definition of $Q(x)$ is nonempty as well, since $X$ itself is
clopen ([[def-topological-space]]), so the intersection is a set; it contains
$x$, every member doing so.

**Both notions are defined by a property of $X$, not of an ambient space.** A
component of a subspace $S \subseteq X$ means a component of the space $S$, and
is written $C_S(y)$ when the space needs naming. The same holds for
quasicomponents.

**Totally disconnected, spelled out.** $X$ is totally disconnected exactly when
every connected subset of $X$ has at most one point: if some connected $A$ had
two points $x \ne y$ then $A \subseteq C(x)$ would give $C(x) \ne \{x\}$, and
conversely if $C(x) \ne \{x\}$ then $C(x)$ is a connected set with at least two
points. The empty space is totally disconnected, having no point to test.

**A discrete space is totally disconnected.** Let $X$ carry the discrete topology
([[def-standard-topologies]]) and let $A \subseteq X$ have two distinct points
$x, y$. Every subset of $A$ is open in $A$, so $(\{x\}, A \setminus \{x\})$ is a
pair of open, disjoint, nonempty sets covering $A$, that is a separation. Hence
no connected subset has two points and every component is a singleton. The
converse fails: total disconnectedness does not force the topology to be
discrete.

## What to return

Read `cor-components-of-open-subsets-of-rn-are-polygonally-connected` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
