# Adversarial proof reading — `lem-compact-closed-balls-in-a-locally-compact-metric-space`

## The item under review, in full

`items/lem-compact-closed-balls-in-a-locally-compact-metric-space.md`

```markdown
---
id: lem-compact-closed-balls-in-a-locally-compact-metric-space
kind: lemma
title: "In a locally compact metric space every point has arbitrarily small compact closed balls, hence a neighbourhood base of compact sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-locally-compact-metric-space, def-metric-compactness, lem-compactness-is-intrinsic,
       lem-closed-subset-of-a-compact-space-is-compact, def-metric-ball, def-metric-topology,
       thm-metric-open-set-algebra, def-isometry-and-metric-embedding, def-metric-space,
       def-neighbourhood-top, def-max-min, lem-finite-set-has-max, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
short: "compact closed balls, small ones"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Locally compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §29"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a locally compact metric space
([[def-locally-compact-metric-space]]) and let $x \in X$. Then there is a real
$r_0 > 0$ such that

1. $\bar B(x,r)$ is a compact subset of $X$ ([[def-metric-ball]],
   [[def-metric-compactness]]) for **every** real $r$ with $0 < r < r_0$; and
2. the family $\{\, \bar B(x,r) : 0 < r < r_0 \,\}$ is a neighbourhood base at
   $x$ ([[def-neighbourhood-top]]) consisting of compact sets: every
   neighbourhood of $x$ contains one of these closed balls.

Note that the closed ball itself is compact, not merely its closure; a closed
ball is already closed ([[thm-metric-open-set-algebra]]). No choice principle is
used.

## Facts & Assumptions

**Given:** A locally compact metric space $(X,d)$ and a point $x \in X$; balls $B(x,r)$ and $\bar B(x,r)$ as in [[def-metric-ball]].

[A1] Local compactness at $x$: there are a compact subset $K \subseteq X$ and a real $r_0 > 0$ with $B(x,r_0) \subseteq K$ ([[def-locally-compact-metric-space]]).

[L1] $\bar B(x,r)$ is closed in $(X,d)$ for every real $r > 0$, and a set is closed exactly when its complement is open ([[thm-metric-open-set-algebra]], [[def-metric-topology]]).

[L2] A subset $A \subseteq X$ is compact exactly when the metric subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of $d$; and for $A \subseteq K \subseteq X$ the metric $A$ inherits from $(K,d_K)$ is $d_A$, both being the restriction of $d$ to $A \times A$ ([[def-metric-compactness]], [[def-isometry-and-metric-embedding]]).

[L3] A subset of a metric subspace is open in that subspace exactly when it is the trace on it of a set open in the ambient space ([[lem-compactness-is-intrinsic]], claim 1).

[L4] A closed subset of a compact metric space is a compact subset of it ([[lem-closed-subset-of-a-compact-space-is-compact]]).

[L5] $B(x,s) \subseteq \bar B(x,s)$, and $0 < s \le t$ gives $B(x,s) \subseteq B(x,t)$ and $\bar B(x,s) \subseteq \bar B(x,t)$; moreover $\bar B(x,s) \subseteq B(x,t)$ whenever $0 < s < t$, since $d(x,y) \le s < t$ ([[def-metric-ball]]).

[L6] A set $N$ is a neighbourhood of $x$ exactly when there is a real $s > 0$ with $B(x,s) \subseteq N$, the balls around $x$ being a neighbourhood base there ([[def-neighbourhood-top]], [[def-metric-topology]]).

[L7] The minimum of a two-element set of reals exists and is one of the two elements ([[lem-finite-set-has-max]], [[def-max-min]]).

## Proof

**Proof technique:** direct.

1.1 Fix $K$ and $r_0$ as in [A1], so that $K$ is compact and $B(x,r_0) \subseteq K$. [A1, choose]

1.2 Let $r$ be a real with $0 < r < r_0$. [given]

1.3 For claim 2, let $N$ be a neighbourhood of $x$ and fix a real $s > 0$ with $B(x,s) \subseteq N$. [L6, choose]

2.1 $\bar B(x,r) \subseteq B(x,r_0) \subseteq K$, the first inclusion because $r < r_0$. [step 1.1, step 1.2, L5]

2.2 $X \setminus \bar B(x,r)$ is open in $(X,d)$, since $\bar B(x,r)$ is closed. [step 1.2, L1]

2.3 Put $r := \min\{s, r_0\}/2$, a real with $0 < r$, $r < r_0$ and $r < s$, since $\min\{s,r_0\}$ is one of $s$ and $r_0$ and is at most each of them. [step 1.3, step 1.1, L7]

3.1 $K \setminus \bar B(x,r) = (X \setminus \bar B(x,r)) \cap K$ is open in the metric subspace $(K, d_K)$, being the trace on $K$ of a set open in $X$; hence $\bar B(x,r) = \bar B(x,r) \cap K$ is closed in $(K,d_K)$. [step 2.1, step 2.2, L2, L3]

4.1 $(K,d_K)$ is a compact metric space by step 1.1, so its closed subset $\bar B(x,r)$ is a compact subset of it, that is the metric subspace of $(K,d_K)$ on $\bar B(x,r)$ is a compact metric space. [step 1.1, step 3.1, L2, L4]

5.1 That metric subspace is $(\bar B(x,r), d_{\bar B(x,r)})$, the metric being the restriction of $d$ either way, so $\bar B(x,r)$ is a compact subset of $X$; this is claim 1. [step 4.1, L2]

6.1 By step 5.1 the set $\bar B(x,r)$ is compact, and $\bar B(x,r) \subseteq B(x,s) \subseteq N$ because $r < s$; moreover $\bar B(x,r)$ is a neighbourhood of $x$, since $B(x,r) \subseteq \bar B(x,r)$ and $B(x,r)$ is open and contains $x$. [step 5.1, step 1.3, step 2.3, L5, L6]

7.1 Steps 5.1 and 6.1 give claims 1 and 2: every $\bar B(x,r)$ with $0 < r < r_0$ is a compact neighbourhood of $x$, and every neighbourhood of $x$ contains one of them. [step 5.1, step 6.1] ∎

## Remarks

- **Where local compactness is spent.** Once, at step 1.1, to produce a single compact set with nonempty interior around $x$. Everything after that is the hereditary behaviour of compactness: a closed subset of a compact space is compact ([[lem-closed-subset-of-a-compact-space-is-compact]]), and closed balls are closed ([[thm-metric-open-set-algebra]]).

- **The bound $r < r_0$ is not cosmetic.** The closed ball $\bar B(x,r_0)$ itself need not be contained in $K$, since $B(x,r_0) \subseteq K$ says nothing about points at distance exactly $r_0$, so the argument is run strictly below $r_0$. That costs nothing, because arbitrarily small radii are what the neighbourhood base of claim 2 needs.

- **Compactness of every closed ball is a strictly stronger property.** The lemma asserts compactness of the *small* closed balls at each point, with the threshold depending on the point. In $\mathbb{R}^{n}$ every closed ball is compact ([[thm-heine-borel-rn]]), but that is a feature of $\mathbb{R}^{n}$ and not a consequence of local compactness.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-locally-compact-metric-space` — definition — Locally compact metric space: every point has a compact neighbourhood

(statement provenance: ai-altered)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with balls as in
[[def-metric-ball]] and compact subsets as in [[def-metric-compactness]].

$(X,d)$ is **locally compact** if for every $x \in X$ there are a compact subset
$K \subseteq X$ and a real $r > 0$ with

$$B(x,r) \;\subseteq\; K .$$

**This is the condition "every point has a compact neighbourhood", written out.**
Give $X$ its metric topology $\mathcal{T}_d$ ([[def-metric-topology]]), so that
$(X, \mathcal{T}_d)$ is a topological space ([[def-metrizable-space]]). A set
$K \subseteq X$ is a neighbourhood of $x$ in the sense of
[[def-neighbourhood-top]] exactly when some open $U$ satisfies
$x \in U \subseteq K$, and by [[def-metric-topology]] that holds exactly when some
ball $B(x,r)$ satisfies $B(x,r) \subseteq K$. So the displayed condition says
precisely that $x$ has a compact neighbourhood, and the two readings are the same
condition and not two notions.

**Two conventions are fixed here, because both are live in the literature.**

- *Neighbourhoods need not be open.* This library's convention is
  [[def-neighbourhood-top]]'s, and it is what makes "compact neighbourhood" a
  useful phrase at all: a compact set is rarely open. Note that
  [[def-metric-topology]] uses the word *neighbourhood* for an open set
  containing the point; that narrower usage is confined to that item, and the
  present definition never relies on it.
- *Compactness of a subset is intrinsic.* $K$ compact means the metric subspace
  $(K, d_K)$ is a compact metric space ([[def-metric-compactness]],
  [[def-isometry-and-metric-embedding]]); the equivalent description by families
  of open subsets of the ambient $X$ is [[lem-compactness-is-intrinsic]] and is
  cited wherever it is used.

**Every compact metric space is locally compact**, since $K := X$ and any $r > 0$
serve at every point. The empty metric space is locally compact, the condition
being vacuous.

### `def-metric-compactness` — definition — Open cover, subcover, compact metric space, and compact subset of a metric space

(statement provenance: ai-altered)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open sets as in
[[def-metric-topology]] and balls as in [[def-metric-ball]].

- An **open cover** of $(X,d)$ is a family $\mathcal{U}$ of open subsets of $X$
  with $X = \bigcup \mathcal{U}$, where
  $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily
  $\mathcal{V} \subseteq \mathcal{U}$ that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \emptyset$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,d)$ is **compact** when every open cover of it has a finite subcover: for
  every open cover $\mathcal{U}$, either $X = \emptyset$ and the empty subfamily
  covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the metric
  subspace $(A, d_A)$ is a compact metric space, $d_A$ being the restriction of
  $d$ to $A \times A$ ([[def-isometry-and-metric-embedding]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A,d_A)$ and its own open sets, not
about families of open subsets of the ambient $X$. The two readings do agree,
but that is a theorem and not a convention: it is
[[lem-compactness-is-intrinsic]], and no item of this library may use the
ambient reading without citing it. Taking the intrinsic reading as the
definition is what makes "compact" a property of the metric space $(A,d_A)$
alone, so that a set compact in one ambient space is compact in every other one
containing it isometrically.

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. The
one-point space is compact too, and so is every space listed as
$\{x_0, \dots, x_n\}$: given a cover, each $x_i$ lies in some member, and
finitely many members chosen in this way already cover.

**The finiteness convention, and how it is used both ways.** "Finite" above is
the listing form, matching the finite lists of
[[def-finite-intersection-property]]. It agrees with the definition of
finiteness by equinumerosity with a natural number ([[def-countable]]), and
both directions of the agreement are available and are used below:

- A nonempty finite set $F$ in the sense of [[def-countable]] satisfies
  $F \approx m$ for some $m \ge 1$, and a bijection $m \to F$ is exactly a
  listing $F = \{a_0, \dots, a_{m-1}\}$.
- Conversely a set listed as $A = \{a_0, \dots, a_n\}$, that is the image of a
  function $a$ with domain $\sigma(n)$, is finite in the sense of
  [[def-countable]]: the map sending $x \in A$ to the least $i \le n$ with
  $a_i = x$ is an injection of $A$ into $\sigma(n)$, so $A$ is equinumerous with
  a subset of $\mathbb{N}$ bounded above, and such a subset is finite
  ([[lem-subset-of-countable]]).

Neither direction uses a choice principle: the second selects nothing, taking a
least index instead.

### `lem-compactness-is-intrinsic` — lemma — A subset of a metric space is open in the subspace metric exactly when it is the trace of an open set of the ambient space, and it is compact as a metric space in its own right exactly when every family of open subsets of the ambient space covering it, indexed or not, has finitely many members covering it

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ and let
$(A,d_A)$ be the metric subspace ([[def-isometry-and-metric-embedding]]). Then:

1. **Relative openness is a trace.** A set $V \subseteq A$ is open in $(A,d_A)$
   ([[def-metric-topology]]) if and only if $V = U \cap A$ for some $U$ open in
   $(X,d)$.
2. **Compactness read in the ambient space.** $A$ is a compact subset of $X$
   ([[def-metric-compactness]]), that is $(A,d_A)$ is a compact metric space, if
   and only if for every family $\mathcal{U}$ of open subsets of $X$ with
   $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and
   $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$,
   or else $A = \emptyset$.
3. **The same in indexed form.** $A$ is a compact subset of $X$ if and only if
   for every set $I$ and every family $(U_i)_{i \in I}$ of open subsets of $X$
   with $A \subseteq \bigcup_{i \in I} U_i$ there are $n \in \mathbb{N}$ and
   indices $i_0, \dots, i_n \in I$ with
   $A \subseteq U_{i_0} \cup \dots \cup U_{i_n}$, or else $A = \emptyset$.

Claim 3 is the form used by almost every later proof on this page, because a
cover is usually produced by a rule that attaches an open set to each point or to
each index, and a set of open sets forgets that rule. No choice principle is used
anywhere below; the one place a selection is made is over a finite index set, and
[[lem-finite-choice]] is a theorem of ZF.

### `lem-closed-subset-of-a-compact-space-is-compact` — lemma — A closed subset of a compact metric space is compact

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a compact metric space ([[def-metric-compactness]],
[[def-metric-space]]) and let $F \subseteq X$ be closed in $X$
([[def-metric-topology]]). Then $F$ is a compact subset of $X$: the metric
subspace $(F, d_F)$ is a compact metric space
([[def-isometry-and-metric-embedding]]).

No choice principle is used.

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

### `thm-metric-open-set-algebra` — theorem — Arbitrary unions and finite intersections of open sets are open, open balls are open and closed balls are closed

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), with open and closed sets
as in [[def-metric-topology]] and balls as in [[def-metric-ball]]. Then:

1. **Balls are open.** $B(x,r)$ is open, for every $x \in X$ and every $r > 0$.
2. **Arbitrary unions.** If $\mathcal{U}$ is any collection of open subsets of
   $X$, then $\bigcup \mathcal{U}$ is open.
3. **Finite intersections.** If $n \ge 1$ and $U_0, \dots, U_{n-1}$ are open,
   then $U_0 \cap \dots \cap U_{n-1}$ is open.
4. **Closed balls are closed.** $\bar B(x,r)$ is closed, for every $x \in X$ and
   every $r > 0$.

Together with the fact that $\emptyset$ and $X$ are open, recorded already in
[[def-metric-topology]], claims 2 and 3 say that $\mathcal{T}_d$ has exactly the
closure properties that the word *topology* names.

### `def-isometry-and-metric-embedding` — definition — Isometry, isometric embedding, and the subspace metric on a subset

(statement provenance: ai-altered)

### Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]).

**Isometric embedding and isometry.** A function $f : X \to Y$ is an
**isometric embedding** if

$$d_Y\big(f(x), f(x')\big) = d_X(x,x') \qquad \text{for all } x, x' \in X ,$$

and an **isometry** if it is in addition bijective
([[def-injection-surjection-bijection]]). Two metric spaces are **isometric** if
some isometry between them exists.

**Subspace metric.** Let $A \subseteq X$ and let

$$d_A := d_X \restriction (A \times A)$$

be the restriction of $d_X$ to pairs from $A$. Then $d_A$ is a metric on $A$:
the three axioms (M1), (M2), (M3) of [[def-metric-space]] are conditions on
triples of points, and each holds for points of $A$ because it holds for points
of $X$. The pair $(A, d_A)$ is the **metric subspace** $A$ of $X$, and the
inclusion $A \to X$ is an isometric embedding by construction. The metric
topology of $d_A$ ([[def-metric-topology]]) is the **subspace topology** of $A$.

**Balls of a subspace are traces of balls of the ambient space.** For $a \in A$
and $r > 0$,

$$B_A(a,r) = B_X(a,r) \cap A ,$$

directly from the definitions: a point $z$ lies in the left side exactly when
$z \in A$ and $d_A(a,z) = d_X(a,z) < r$ ([[def-metric-ball]]). This is why the
ambient space is always written into the ball notation, and it is the source of
every apparent paradox about balls in subspaces.

### `def-metric-space` — definition — Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric

(statement provenance: ai-altered)

### Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

### `def-neighbourhood-top` — definition — Neighbourhood of a point and neighbourhood base, with this library's convention that a neighbourhood need not be open

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$.

A set $N \subseteq X$ is a **neighbourhood of $x$** if there is an open
$U \in \mathcal{T}$ with $x \in U \subseteq N$. The family of all neighbourhoods
of $x$ is written $\mathcal{N}(x)$ and called the **neighbourhood filter** at
$x$. A neighbourhood that is itself open is an **open neighbourhood**.

**Convention, and it is a live fork: in this library a neighbourhood need not be
open.** The competing convention, used by Munkres among others, defines a
neighbourhood of $x$ to be an *open* set containing $x$. Both are in current use;
this library follows the one above and writes "open neighbourhood" in full
whenever openness is wanted, so that no statement here depends on which
convention a reader brings.

A family $\mathcal{B}_x \subseteq \mathcal{N}(x)$ is a **neighbourhood base at
$x$** if every neighbourhood of $x$ contains a member of $\mathcal{B}_x$: for
every $N \in \mathcal{N}(x)$ there is $B \in \mathcal{B}_x$ with $B \subseteq N$.

**Four immediate consequences, established here because they are used
constantly.**

1. *$X$ is a neighbourhood of each of its points*, since $x \in X \subseteq X$
   and $X$ is open by (T1); so $\mathcal{N}(x) \ne \varnothing$ and every point
   has at least one neighbourhood base, namely $\mathcal{N}(x)$ itself.
2. *A superset of a neighbourhood of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N \subseteq M$ with $U$ open then $x \in U \subseteq M$.
3. *The intersection of two neighbourhoods of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N$ and $x \in V \subseteq M$ with $U, V$ open, then
   $U \cap V$ is open by (T3) and $x \in U \cap V \subseteq N \cap M$. By
   iteration the same holds for any intersection of finitely many
   neighbourhoods of $x$.
4. *A set is open exactly when it is a neighbourhood of each of its points.* If
   $U$ is open and $x \in U$ then $x \in U \subseteq U$. Conversely, if $N$ is a
   neighbourhood of each of its points, choose for each $x \in N$ an open $U_x$
   with $x \in U_x \subseteq N$; then $N = \bigcup_{x \in N} U_x$ is open by (T2).
   No choice principle is involved: $U_x$ may be taken to be the union of *all*
   open subsets of $N$ containing $x$, which is determined by $x$ and $N$, and is
   open by (T2).

**Basic sets give neighbourhood bases.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_x := \{\, B \in \mathcal{B} : x \in B \,\}$ is a neighbourhood base
at $x$ consisting of open sets. Each such $B$ is open and contains $x$, hence is
a neighbourhood of $x$; and if $N \in \mathcal{N}(x)$, fix open $U$ with
$x \in U \subseteq N$ and then $B \in \mathcal{B}$ with $x \in B \subseteq U$,
which gives $B \in \mathcal{B}_x$ with $B \subseteq N$. A member of
$\mathcal{B}_x$ is called a **basic neighbourhood** of $x$.

### `def-max-min` — definition — Maximum and minimum of a set

(statement provenance: ai-altered)

### Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

### `lem-finite-set-has-max` — lemma — Every nonempty finite set of reals has a maximum and a minimum

(statement provenance: ai-altered)

### Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

### `thm-heine-borel-rn` — theorem — Heine-Borel in $\\mathbb{R}^n$: with the Euclidean metric a subset of $\\mathbb{R}^n$ is compact if and only if it is closed and bounded, and the proof by bisection uses no choice principle; the same holds on the real line

(statement provenance: ai-altered)

### Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^n$ be the set of functions
$n \to \mathbb{R}$ and let $d_2$ be the Euclidean metric on it
([[lem-metrics-on-rn]]). Then:

1. **Closed boxes are compact.** For reals $a_k \le b_k$ $(k < n)$ the box
   $Q = \{\, x \in \mathbb{R}^n : a_k \le x_k \le b_k \text{ for every } k < n \,\}$
   is a compact subset of $(\mathbb{R}^n, d_2)$ ([[def-metric-compactness]]).
2. **Heine-Borel.** A subset $K \subseteq \mathbb{R}^n$ is a compact subset of
   $(\mathbb{R}^n, d_2)$ if and only if $K$ is closed in $\mathbb{R}^n$
   ([[def-metric-topology]]) and bounded
   ([[def-metric-bounded-diameter]]).
3. **The real line.** A subset $K \subseteq \mathbb{R}$ is a compact subset of
   $(\mathbb{R}, d_{\mathbb{R}})$, the usual metric $d_{\mathbb{R}}(x,y) = |x-y|$
   ([[lem-real-line-is-a-metric-space]]), if and only if $K$ is closed in
   $\mathbb{R}$ and bounded.

**No choice principle is used.** The bisection below halves one coordinate at a
time and takes the **left** half whenever the left half still fails to be finitely
covered, the right half otherwise: a rule with two outcomes, decided by a
property of the box, not a selection. That is the whole reason the theorem is
available in ZF, while the general "complete and totally bounded implies compact"
([[thm-complete-and-totally-bounded-implies-compact]]) is not.

The hypothesis $n \ge 1$ is inherited from [[lem-metrics-on-rn]], which defines
$\mathbb{R}^n$ and its metrics only there; the last remark below records what
happens at $n = 0$.

## What to return

Read `lem-compact-closed-balls-in-a-locally-compact-metric-space` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
