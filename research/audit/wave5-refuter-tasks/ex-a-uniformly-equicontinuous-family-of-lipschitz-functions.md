# Adversarial proof reading — `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions`

## The item under review, in full

`items/ex-a-uniformly-equicontinuous-family-of-lipschitz-functions.md`

```markdown
---
id: ex-a-uniformly-equicontinuous-family-of-lipschitz-functions
kind: example
title: "The $1$-Lipschitz maps of a metric space into $\\mathbb{R}$ form a uniformly equicontinuous family, and the distance functions $x \\mapsto d(x,A)$ all belong to it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-equicontinuity, def-lipschitz-holder-contraction, lem-distance-to-set-is-lipschitz,
       def-metric-bounded-diameter, def-metric-uniform-continuity,
       lem-real-line-is-a-metric-space, def-metrizable-space, def-metric-space,
       def-metric-continuity, thm-metric-regularity-hierarchy, def-abs-value,
       def-topology-of-pointwise-convergence, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
short: "the $1$-Lipschitz maps are uniformly equicontinuous"
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
    - title: "Equicontinuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equicontinuity"
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
pipeline_run: null
---

## Example

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $\mathbb{R}$ carry
its usual metric ([[lem-real-line-is-a-metric-space]]). Put

$$\mathcal{L} \;:=\; \{\, f : X \to \mathbb{R} \;:\; f \text{ is Lipschitz with constant } 1 \,\} \;\subseteq\; \mathbb{R}^{X}$$

([[def-lipschitz-holder-contraction]], [[def-topology-of-pointwise-convergence]]).
Then:

1. $\mathcal{L}$ is **uniformly equicontinuous** ([[def-equicontinuity]]), with
   $\delta := \varepsilon$ serving at every $\varepsilon$;
2. for every nonempty $A \subseteq X$ the distance function
   $\varphi_A(x) := d(x,A)$ ([[def-metric-bounded-diameter]]) belongs to
   $\mathcal{L}$;
3. if $X \ne \varnothing$ then $\mathcal{L}$ is **not** pointwise bounded, since
   it contains every constant function.

So equicontinuity and pointwise boundedness are genuinely independent hypotheses:
this family has the first and not the second, and the next counterexample on this
page has the second and not the first.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, the target $\mathbb{R}$ with the metric $d_{\mathbb{R}}(s,t) = |s-t|$, and the family $\mathcal{L}$ displayed above.

[L1] $f$ is Lipschitz with constant $1$ when $|f(x) - f(x')| \le d(x,x')$ for all $x, x' \in X$ ([[def-lipschitz-holder-contraction]], [[lem-real-line-is-a-metric-space]], [[def-abs-value]]).

[L2] A family $\mathcal{F}$ is uniformly equicontinuous when for every real $\varepsilon > 0$ there is a real $\delta > 0$ with $|f(x) - f(x')| < \varepsilon$ for every $f \in \mathcal{F}$ and all $x,x'$ with $d(x,x') < \delta$; and $\mathcal{F}$ is pointwise bounded when each set $\{\, f(x) : f \in \mathcal{F} \,\}$ is bounded ([[def-equicontinuity]], [[def-metric-uniform-continuity]], [[def-metric-bounded-diameter]]).

[L3] For nonempty $A \subseteq X$ the function $x \mapsto d(x,A)$ is defined and satisfies $|d(x,A) - d(x',A)| \le d(x,x')$ ([[lem-distance-to-set-is-lipschitz]], [[def-metric-bounded-diameter]]).

[L4] A subset $S \subseteq \mathbb{R}$ is bounded exactly when it lies in some ball of $\mathbb{R}$, so an unbounded set of reals lies in no ball ([[def-metric-bounded-diameter]], [[lem-real-line-is-a-metric-space]]).

[L5] A Lipschitz map is uniformly continuous and hence continuous ([[thm-metric-regularity-hierarchy]], claims 2 and 3, [[def-metric-continuity]], [[def-metrizable-space]]).

## Verification

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be real and put $\delta := \varepsilon$; for every $f \in \mathcal{L}$ and all $x, x' \in X$ with $d(x,x') < \delta$ we get $|f(x) - f(x')| \le d(x,x') < \varepsilon$. [L1, L2]

1.2 For nonempty $A \subseteq X$ the function $\varphi_A$ is defined at every point and satisfies $|\varphi_A(x) - \varphi_A(x')| \le d(x,x')$, so it is Lipschitz with constant $1$ and lies in $\mathcal{L}$; this is claim 2. [L1, L3]

2.1 As $\varepsilon$ was arbitrary, step 1.1 is exactly uniform equicontinuity of $\mathcal{L}$, which is claim 1; in particular every member of $\mathcal{L}$ is uniformly continuous and continuous. [step 1.1, L2, L5]

3.1 Every constant function $c : X \to \mathbb{R}$ satisfies $|c(x)-c(x')| = 0 \le d(x,x')$, so lies in $\mathcal{L}$; hence for $X \ne \varnothing$ and any $x \in X$ the set $\{\, f(x) : f \in \mathcal{L} \,\}$ contains every real and so lies in no ball of $\mathbb{R}$, and $\mathcal{L}$ is not pointwise bounded, which is claim 3. [L1, L2, L4] ∎

## Remarks

- **A common constant is what makes the family equicontinuous, not Lipschitzness of each member.** Every member of $\mathcal{L}$ is Lipschitz, but so is every member of $\{\, x \mapsto \iota(k) x : k \in \mathbb{N} \,\}$ on $\mathbb{R}$, and that family is not equicontinuous at any point: the constants grow without bound. Fixing the constant at $1$ is the hypothesis doing the work, exactly as the last remark of [[def-equicontinuity]] records.

- **Claim 2 is why equicontinuity is worth defining at all here.** The distance functions $\varphi_A$ are the standard supply of Lipschitz maps in a metric space, and they are what an Ascoli-type argument on a later page will use; that they all sit in one uniformly equicontinuous family is the reason such arguments do not need any hypothesis on $A$ beyond nonemptiness.

- **Claim 3 is a warning about reading the two hypotheses as one.** Pointwise boundedness is a condition on the *values* and equicontinuity a condition on the *variation*; a family may satisfy either without the other, and the theorem that uses both needs both.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-equicontinuity` — definition — Equicontinuity at a point, uniform equicontinuity, and pointwise boundedness of a family of maps between metric spaces

(statement provenance: literature-derived)

### Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$\mathcal{F} \subseteq Y^{X}$ be a set of functions $X \to Y$
([[def-topology-of-pointwise-convergence]]). Let $a \in X$.

- $\mathcal{F}$ is **equicontinuous at $a$** if for every real $\varepsilon > 0$
  there is a real $\delta > 0$ such that
  $$d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for every } f \in \mathcal{F} \text{ and every } x \in X \text{ with } d_X(x,a) < \delta .$$
- $\mathcal{F}$ is **equicontinuous** if it is equicontinuous at every point of
  $X$.
- $\mathcal{F}$ is **uniformly equicontinuous** if for every real
  $\varepsilon > 0$ there is a real $\delta > 0$ such that
  $$d_Y\big(f(x), f(x')\big) < \varepsilon \qquad \text{for every } f \in \mathcal{F} \text{ and all } x, x' \in X \text{ with } d_X(x,x') < \delta .$$
- $\mathcal{F}$ is **pointwise bounded** if for every $x \in X$ the set
  $\mathcal{F}(x) := \{\, f(x) : f \in \mathcal{F} \,\}$ is a bounded subset of
  $Y$ ([[def-metric-bounded-diameter]]).

**Everything is in the quantifier order, and the order is the only difference
from ordinary continuity.** Continuity of each single $f \in \mathcal{F}$ at $a$
allows $\delta$ to depend on $\varepsilon$, on $a$ **and on $f$**
([[def-metric-continuity]]); equicontinuity at $a$ demands one $\delta$ serving
every member of the family at once. Uniform continuity of each single $f$ allows
$\delta$ to depend on $\varepsilon$ and on $f$
([[def-metric-uniform-continuity]]); uniform equicontinuity demands one $\delta$
serving every member and every pair of points at once. Written with the
quantifiers in order, the four conditions are

$$\forall \varepsilon\, \forall f\, \forall a\, \exists \delta, \qquad \forall \varepsilon\, \forall a\, \exists \delta\, \forall f, \qquad \forall \varepsilon\, \forall f\, \exists \delta\, \forall a, \qquad \forall \varepsilon\, \exists \delta\, \forall f\, \forall a$$

for pointwise continuity of each member, equicontinuity, uniform continuity of
each member, and uniform equicontinuity respectively.

**Immediate consequences, recorded because they are used.**

1. *Every member of an equicontinuous family is continuous*, and every member of
   a uniformly equicontinuous family is uniformly continuous: the $\delta$ that
   serves the whole family serves each member
   ([[def-metric-continuity]], [[def-metric-uniform-continuity]]).
2. *Uniform equicontinuity implies equicontinuity*, by taking $x' = a$.
3. *Both conditions are about the metrics $d_X$ and $d_Y$, not about the
   topologies they induce.* Replacing a metric by a topologically equivalent one
   can destroy either, exactly as it can destroy uniform continuity.
4. *A one-element family $\{f\}$ is equicontinuous exactly when $f$ is
   continuous*, and uniformly equicontinuous exactly when $f$ is uniformly
   continuous; so the notions do generalise the single-function ones and do not
   merely resemble them.

**Pointwise boundedness is a hypothesis about the values, not about the
functions.** It says that at each individual point the family's values stay in
one ball of $Y$; the radius may depend on the point, and no single ball need
contain all the values at all the points. The stronger condition, that
$\bigcup_{x} \mathcal{F}(x)$ is bounded, is *uniform boundedness* and is not
defined here, nothing on this page using it.

### `def-lipschitz-holder-contraction` — definition — Lipschitz map, $\\alpha$-Hölder map for rational $0 < \\alpha \\le 1$, and contraction

(statement provenance: ai-altered)

### Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function. Recall that a metric takes nonnegative real values
([[lem-metric-nonnegativity]]).

- $f$ is **Lipschitz** with **constant** $L$, where $L \in \mathbb{R}$ and
  $L \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; L \, d_X(x,x') \qquad \text{for all } x, x' \in X .$$
  $f$ is *Lipschitz* if it is Lipschitz with some such constant.
- Let $\alpha \in \mathbb{Q}$ with $0 < \alpha \le 1$ ([[def-rat-order]]). $f$ is
  **$\alpha$-Hölder** with **constant** $C$, where $C \in \mathbb{R}$ and
  $C \ge 0$, if
  $$d_Y\big(f(x), f(x')\big) \;\le\; C \, d_X(x,x')^{\alpha} \qquad \text{for all } x, x' \in X ,$$
  the power being the rational power of a nonnegative base
  ([[def-rational-power]]). $f$ is *$\alpha$-Hölder* if it is so with some such
  constant, and *Hölder* if it is $\alpha$-Hölder for some rational
  $\alpha \in (0,1]$.
- $f$ is a **contraction** with constant $q$ if it is Lipschitz with constant $q$
  and $0 \le q < 1$. The number $q$ is then called a **contraction constant** for
  $f$.

**The power $d_X(x,x')^{\alpha}$ is defined at every pair, including $x = x'$.**
The base $d_X(x,x')$ is a nonnegative real, and [[def-rational-power]] defines
$a^{\alpha}$ for every $a > 0$ and, by its supplementary clause, sets
$0^{\alpha} = 0$ for every rational $\alpha > 0$. Since $\alpha > 0$ is required
here, the displayed inequality at $x = x'$ reads $0 \le C \cdot 0$, which holds;
so no separate clause and no restriction to $x \ne x'$ is needed. Note that this
does not by itself explain the strict inequality $\alpha>0$: if one extended the
formula to $\alpha=0$ using the convention $0^0=1$ of [[def-integer-power]], the
equal-point inequality would still be the automatic $0\le C$. Globally, however,
that extension would reduce to the bounded-diameter condition
$d_Y(f(x),f(x'))\le C$, outside the standard Hölder range adopted here.

**Why the exponent is a rational and why it is at most $1$.** This library has no
real exponents ([[def-rational-power]]), so $\alpha$ ranges over the rationals;
that is a limitation of the ambient toolkit and not of the notion. The upper
bound $\alpha \le 1$ is the standard convention, and it is where the notion is
useful: the classical theory reserves the name for $\alpha \in (0,1]$, and
nothing in this library uses an exponent outside that range. No claim is made
here about what an exponent $\alpha > 1$ would do.

**Constants are not unique and are not part of the data.** If $f$ is Lipschitz
with constant $L$ it is Lipschitz with every constant $L' \ge L$, and likewise
for Hölder constants; the adjectives above are existential statements. A
*contraction*, by contrast, requires a constant strictly below $1$, and that is a
real restriction: exhibiting the constant is part of exhibiting a contraction, and
a map that shrinks every distance without admitting one uniform constant is not a
contraction here.

### `lem-distance-to-set-is-lipschitz` — lemma — $|d(x,A) - d(y,A)| \\le d(x,y)$, so the distance to a fixed nonempty set is $1$-Lipschitz

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set ([[def-metric-bounded-diameter]]).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

### `def-metric-bounded-diameter` — definition — Bounded subset, diameter, distance from a point to a set, and distance between two sets in a metric space

(statement provenance: ai-altered)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let
$A, B \subseteq X$.

**Bounded subset.** $A$ is **bounded** if $A = \emptyset$ or there are $x_0 \in X$
and a real $r > 0$ with $A \subseteq B(x_0, r)$ ([[def-metric-ball]]). The space
$(X,d)$ is a **bounded metric space** if $X$ is a bounded subset of itself.

**Diameter, for nonempty bounded $A$ only.** Suppose $A$ is nonempty and
bounded, and put

$$D(A) := \{\, d(a,b) : a, b \in A \,\} \subseteq \mathbb{R}.$$

Then $D(A)$ is nonempty, since $A$ is, and it is bounded above: fixing $x_0$ and
$r$ with $A \subseteq B(x_0,r)$, every $a, b \in A$ satisfy
$d(a,b) \le d(a,x_0) + d(x_0,b) < r + r$ by the triangle inequality, symmetry
([[def-metric-space]]) and addition of inequalities ([[lem-of-add-order]],
[[def-ordered-field]]), so $r + r$ is an upper bound of $D(A)$
([[def-bounded-set]]). Hence $D(A)$ has a least upper bound in $\mathbb{R}$ by
the least-upper-bound property ([[def-complete-ordered-field]]), and that bound
is unique ([[lem-sup-unique]]). Define

$$\operatorname{diam}(A) := \sup D(A).$$

**Distance from a point to a set, for nonempty $A$ only.** Let $x \in X$ and let
$A$ be nonempty, and put $E(x,A) := \{\, d(x,a) : a \in A \,\}$. Then $E(x,A)$ is
nonempty and bounded below by $0$, since a metric is nonnegative
([[lem-metric-nonnegativity]], [[def-bounded-set]]), so it has a greatest lower
bound ([[thm-infimum-property]], [[def-infimum]]), unique by [[lem-sup-unique]].
Define

$$d(x,A) := \inf E(x,A).$$

**Distance between two sets, for nonempty $A$ and $B$ only.** Put
$E(A,B) := \{\, d(a,b) : a \in A,\ b \in B \,\}$, again nonempty and bounded
below by $0$, and define

$$d(A,B) := \inf E(A,B).$$

**Every one of the three scope restrictions is load bearing.** In this library
$\sup$ and $\inf$ denote real numbers and are written only after existence has
been established; the extended real line is introduced on a later page and is
not used for the suprema and infima taken here, and no convention
$\sup \emptyset = -\infty$ is in force in this development
([[rem-sup-conventions]]). Accordingly:

- $\operatorname{diam}(A)$ is defined exactly when $A$ is nonempty **and**
  bounded. It is not defined for $A = \emptyset$, and it is not defined, not even
  as an infinite value, for an unbounded $A$.
- $d(x,A)$ is defined exactly when $A \ne \emptyset$, and $d(A,B)$ exactly when
  both $A$ and $B$ are nonempty. No boundedness is needed for these two, because
  $0$ is always a lower bound.

### `def-metric-uniform-continuity` — definition — Uniform continuity of a map of metric spaces: one $\\delta$ serving every point

(statement provenance: ai-altered)

### Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function.

$f$ is **uniformly continuous** if for every real $\varepsilon > 0$ there is a
real $\delta > 0$ such that

$$d_X(x,x') < \delta \;\Longrightarrow\; d_Y\big(f(x), f(x')\big) < \varepsilon \qquad \text{for all } x, x' \in X .$$

**The whole content is in the quantifier order.** Continuity at a point $a$
allows $\delta$ to depend on $\varepsilon$ *and on $a$*
([[def-metric-continuity]]); uniform continuity demands one $\delta$ that works
for every pair of points at once. Written with the quantifiers in order,
continuity on $X$ is
$\forall \varepsilon\, \forall a\, \exists \delta\, \forall x$ and uniform
continuity is $\forall \varepsilon\, \exists \delta\, \forall a\, \forall x$;
moving $\exists \delta$ to the left is the entire difference, and it is a
strictly stronger condition.

**Uniform continuity is a property of the triple $(d_X, d_Y, f)$.** Both metrics
are named, and neither may be replaced by a merely topologically equivalent one
without changing the notion.

**This definition was promised earlier and is now discharged.**
[[def-metric-continuity]] records that uniform continuity is not defined there,
and [[def-equivalent-metrics]] writes the condition out in full for the identity
maps of two metrics on one set rather than naming it. With the definition above,
*uniform equivalence* of $d$ and $d'$ says exactly that
$\mathrm{id} : (X,d) \to (X,d')$ and $\mathrm{id} : (X,d') \to (X,d)$ are both
uniformly continuous, which is how that condition is read from here on.

### `lem-real-line-is-a-metric-space` — lemma — The absolute value makes $\\mathbb{R}$ a metric space: $d(x,y) = |x-y|$ is a metric, its open balls are the intervals $(x-r, x+r)$, and it is unbounded

(statement provenance: ai-altered)

### Statement

Define $d_{\mathbb{R}} : \mathbb{R} \times \mathbb{R} \to \mathbb{R}$ by
$d_{\mathbb{R}}(x,y) := |x - y|$ ([[def-abs-value]]). Then:

1. $d_{\mathbb{R}}$ is a metric on $\mathbb{R}$ ([[def-metric-space]]); it is
   called the **usual metric** of $\mathbb{R}$.
2. For $x \in \mathbb{R}$ and $r > 0$ the open ball is the bounded open interval
   ([[def-interval]], [[def-metric-ball]])
   $$B(x,r) = (x-r,\ x+r),$$
   and the closed ball is $\bar B(x,r) = [x-r,\ x+r]$.
3. Consequently $U \subseteq \mathbb{R}$ is open in the metric topology of
   $d_{\mathbb{R}}$ ([[def-metric-topology]]) exactly when for every $x \in U$
   there is $r > 0$ with $(x-r, x+r) \subseteq U$. This topology is called the
   **usual topology** of $\mathbb{R}$.
4. $(\mathbb{R}, d_{\mathbb{R}})$ is not a bounded metric space
   ([[def-metric-bounded-diameter]]): no ball contains $\mathbb{R}$, so
   $\operatorname{diam}(\mathbb{R})$ is not defined.

### `def-metrizable-space` — definition — Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The standard local notions in the two developments agree after translating
their neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the
topology $\mathcal{T}_d$.

- *Neighbourhoods and balls.* [[def-metric-topology]] uses "neighbourhood" for
  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a
  non-open superset of such a set. Thus the two collections are not literally
  equal, but the open metric neighbourhoods are cofinal in the broader
  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are
  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:
  any neighbourhood $N$ contains an open $U \ni x$, hence a ball around $x$ by
  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice
  ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

- *Subspaces.* For $A \subseteq X$ the subspace topology
  $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ of [[def-subspace-topology-top]] is
  exactly the metric topology of the subspace metric $d_A$
  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase
  *subspace topology* in this library name one thing. Indeed
  $B_A(a,r) = B_X(a,r) \cap A$: a trace $U \cap A$ is $d_A$-open, since each of
  its points $a$ has $B_X(a,r) \subseteq U$ and hence $B_A(a,r) \subseteq U \cap A$;
  and a $d_A$-open $W$ is the trace of
  $U := \bigcup \{\, B_X(a,r) : a \in W,\ r > 0,\ B_X(a,r) \cap A \subseteq W \,\}$,
  which is $d_X$-open, satisfies $U \cap A = W$, and involves no choice principle,
  the union being taken over a set of pairs rather than over a selection.

Consequently the metric-space notions of interior, closure, boundary, density,
convergence, continuity and subspace agree with the topological notions here,
and statements about them transfer once a metric is named. For neighbourhoods
the transfer uses the explicit convention change above: a metric-page
neighbourhood is an open topological neighbourhood, while every topological
neighbourhood contains one.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

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

### `def-metric-continuity` — definition — Continuity of a map between metric spaces, at a point and globally, in the $\\varepsilon$-$\\delta$ form

(statement provenance: literature-derived)

### Definition

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces ([[def-metric-space]]), let
$f : X \to Y$ be a function and let $a \in X$.

$f$ is **continuous at $a$** if for every real $\varepsilon > 0$ there is a real
$\delta > 0$ such that

$$d_X(x,a) < \delta \;\Longrightarrow\; d_Y\big(f(x), f(a)\big) < \varepsilon \qquad \text{for all } x \in X .$$

$f$ is **continuous** (globally, or on $X$) if it is continuous at every point of
$X$.

**The same condition in balls.** Since $d_X(x,a) < \delta$ says $x \in B_X(a,\delta)$
and $d_Y(f(x),f(a)) < \varepsilon$ says $f(x) \in B_Y(f(a),\varepsilon)$
([[def-metric-ball]]), continuity at $a$ reads: for every $\varepsilon > 0$ there
is $\delta > 0$ with

$$f\big[B_X(a,\delta)\big] \subseteq B_Y\big(f(a), \varepsilon\big).$$

Both forms are used below and are the same statement written twice.

**Both metrics matter, and both are named.** Continuity is a property of the
triple $(d_X, d_Y, f)$, not of $f$ alone. When several metrics on the same
underlying sets are in play, as in [[def-equivalent-metrics]], the metrics are
always written out.

**Quantifier order.** The $\delta$ is allowed to depend on $\varepsilon$ **and on
the point $a$**. Requiring one $\delta$ to work at every point simultaneously is
a strictly stronger condition, uniform continuity; it is defined on a later page
of this library, and at this point in the reading order it is written out in full
where needed ([[def-equivalent-metrics]]).

### `thm-metric-regularity-hierarchy` — theorem — Contraction implies Lipschitz implies uniformly continuous implies continuous; every Hölder map is uniformly continuous, and a Lipschitz map on a bounded space is Hölder for every exponent

(statement provenance: ai-altered)

### Statement

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function, with the three regularity conditions as in
[[def-lipschitz-holder-contraction]]. Then:

1. If $f$ is a contraction, it is Lipschitz.
2. If $f$ is Lipschitz, it is uniformly continuous
   ([[def-metric-uniform-continuity]]).
3. If $f$ is uniformly continuous, it is continuous
   ([[def-metric-continuity]]).
4. If $f$ is $\alpha$-Hölder for some rational $\alpha$ with $0 < \alpha \le 1$,
   it is uniformly continuous.
5. Suppose $X$ is nonempty and bounded, and put
   $R := \operatorname{diam}(X) + 1$, a real with $R > 0$
   ([[def-metric-bounded-diameter]]). If $f$ is Lipschitz with constant $L$, then
   for **every** rational $\alpha$ with $0 < \alpha \le 1$ the map $f$ is
   $\alpha$-Hölder with constant $L\,R^{\,1-\alpha}$.

**Claim 5 carries its boundedness hypothesis for a reason, and no unconditional
"Lipschitz implies Hölder" is asserted anywhere here.** On an unbounded space the
implication is false; the witness and its verification are in the first remark
below.

**Strictness is not claimed.** The five implications are asserted and nothing
more; that none of them reverses is witnessed elsewhere, and those witnesses are
not prerequisites of this theorem. See the second remark.

### `def-abs-value` — definition — Absolute value in an ordered field

(statement provenance: literature-derived)

### Definition

Let $F$ be an ordered field ([[def-ordered-field]]). The **absolute value** of
$x \in F$ is

$$|x| \;:=\; \begin{cases} x & \text{if } x \ge 0, \\ -x & \text{if } x < 0. \end{cases}$$

### `def-topology-of-pointwise-convergence` — definition — The topology of pointwise convergence on $Y^{X}$, which is the product topology, and its restriction to $C(X,Y)$

(statement provenance: literature-derived)

### Definition

Let $X$ be a set and let $(Y, \mathcal{T}_Y)$ be a topological space
([[def-topological-space]]). Write

$$Y^{X} \;:=\; \prod_{x \in X} Y ,$$

the product of the constant family whose factor at every index $x \in X$ is $Y$
([[def-product-topology]]). Unwinding that definition, an element of $Y^{X}$ is a
function with domain $X$ taking its value at each $x$ in $Y$; so $Y^{X}$ **is**
the set of all functions $X \to Y$, and the projection at $x$ is evaluation,

$$\pi_x : Y^{X} \to Y, \qquad \pi_x(f) = f(x) .$$

The **topology of pointwise convergence** on $Y^{X}$ is the product topology: the
initial topology of the family $(\pi_x)_{x \in X}$
([[def-initial-and-final-topology]]), that is the topology generated by the
subbasis

$$\mathcal{G} \;:=\; \{\, \pi_x^{-1}[V] \;:\; x \in X,\ V \in \mathcal{T}_Y \,\}, \qquad \pi_x^{-1}[V] = \{\, f \in Y^{X} : f(x) \in V \,\} .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for it ([[def-topology-basis-subbasis]]), so the basic open sets are
exactly the sets

$$\{\, f \in Y^{X} \;:\; f(x_j) \in V_j \text{ for every } j < n \,\} \qquad (n \in \mathbb{N},\ x_0, \dots, x_{n-1} \in X,\ V_0, \dots, V_{n-1} \in \mathcal{T}_Y),$$

the value $n = 0$ giving the empty intersection $Y^{X}$ itself. A basic open set
therefore constrains a member of $Y^{X}$ at **finitely many points only**, and
that is the whole content of the topology.

**The restriction to the continuous maps.** Suppose in addition that $X$ carries
a topology, and write

$$C(X,Y) \;:=\; \{\, f \in Y^{X} : f \text{ is continuous} \,\}$$

([[def-continuous-map-top]]). The **topology of pointwise convergence on
$C(X,Y)$** is the subspace topology inherited from $Y^{X}$
([[def-subspace-topology-top]]); its subbasic open sets are the traces
$\pi_x^{-1}[V] \cap C(X,Y)$, since tracing carries a subbasis to a subbasis
([[def-subspace-topology-top]]).

**Nothing on this page gives $C(X,Y)$ a default topology.** The set $C(X,Y)$
carries several different topologies below, and every statement names the one it
means at the point of use.

### `def-canonical-natural` — definition — The canonical natural $\\iota(n) = n \\cdot 1_F$ of a field

(statement provenance: ai-altered)

### Definition

Let $F$ be a field ([[def-field]]) with additive identity $0_F$ and
multiplicative identity $1_F$. Define
$\iota : \mathbb{N} \to F$ by recursion on $\mathbb{N}$
([[def-natural-numbers]], [[thm-recursion]]):

$$\iota(0) \;:=\; 0_F, \qquad \iota(n+1) \;:=\; \iota(n) + 1_F .$$

$\iota(n)$ is the **canonical natural** of $n$ in $F$. It is also written
$n \cdot 1_F$, and for $n \ge 1$ it is $1_F$ added to itself $n$ times.

**Why the notation is needed at all.** A natural number in this library is a von
Neumann natural, that is a set ([[def-natural-numbers]]), and a set is not an
element of $F$. So $1/n$, $n^{\alpha}$ and $x/n$ are not expressions of $F$ when
$n$ is a natural: what they mean is $1/\iota(n)$, $\iota(n)^{\alpha}$ and
$x/\iota(n)$. The map $\iota$ is what carries a counting number into the field,
and writing it is the whole reason a reader meets $1/\iota(k+1)$ where an
informal text would write $1/(k+1)$.

## What to return

Read `ex-a-uniformly-equicontinuous-family-of-lipschitz-functions` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
