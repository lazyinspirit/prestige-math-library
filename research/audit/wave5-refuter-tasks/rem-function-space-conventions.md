# Adversarial proof reading — `rem-function-space-conventions`

## The item under review, in full

`items/rem-function-space-conventions.md`

```markdown
---
id: rem-function-space-conventions
kind: remark
title: "Standing hypotheses on this page: a metric domain, where the target must be metric, and why the compact-open topology is built from metric compactness"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-topology-of-pointwise-convergence, def-topology-of-uniform-convergence,
       def-topology-of-compact-convergence, def-compact-open-topology,
       def-locally-compact-metric-space, def-evaluation-map, def-metric-compactness,
       def-metrizable-space, def-hausdorff-space,
       rem-metric-axiom-conventions, rem-sup-conventions,
       lem-uniform-metric-on-a-function-space, lem-sup-metric-is-a-metric,
       def-function-space, def-product-topology, def-equicontinuity,
       thm-compact-open-equals-compact-convergence, def-metric-space,
       def-topological-space, def-metric-ball, thm-the-exponential-law,
       thm-uniform-limit-theorem]
justified_by: []
aliases: []
landmark: false
short: "conventions of this page"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Compact-open topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact-open_topology"
    - title: "Function space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_space"
    - title: "J. Munkres, Topology, 2nd ed., §§21, 46"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

This page carries several standing hypotheses, and a reader who does not know
which are essential and which are bookkeeping will misread its scope. They are
collected here once and then used silently.

**1. "The domain is a metric space" is this page's standing convention, not a
hypothesis every item needs; each Statement carries exactly what its own proof
uses.** Where the domain *must* be metric, the hypothesis is inherited rather
than decorative: an item quantifying over the **compact** subsets of the domain
reads compactness through [[def-metric-compactness]], and it does so because
[[def-compact-open-topology]], the definition this development is built over, is
stated for a metric $(X,d)$. That restriction is a scope choice of this page and
not a gap in the library. Compactness for an arbitrary topological space
([[def-compact-space]]) is developed *earlier* in the reading order and is
available here; on a metric space the two readings of "compact subset" agree
([[thm-compactness-agrees-with-metric-compactness]]), so nothing below is
weakened by taking the metric one. The items with a metric domain for that
reason are
[[def-locally-compact-metric-space]],
[[lem-compact-closed-balls-in-a-locally-compact-metric-space]],
[[lem-tube-lemma-for-a-compact-metric-factor]], [[def-compact-open-topology]],
[[def-topology-of-compact-convergence]],
[[thm-compact-open-equals-compact-convergence]],
[[thm-comparison-of-the-three-function-space-topologies]],
[[def-evaluation-map]],
[[thm-evaluation-is-continuous-on-a-locally-compact-metric-domain]],
[[thm-exponential-correspondence-is-continuous]], [[thm-the-exponential-law]] and
[[thm-dini]], together with the three false statements, whose witnesses are metric
spaces. [[def-equicontinuity]] also takes a metric domain, for a different reason:
it writes a distance in the domain.

**Several items on this page need no metric on the domain at all, and say so.**
[[def-topology-of-pointwise-convergence]] and
[[lem-convergence-in-the-pointwise-topology]] are stated for a bare **set** $X$.
[[lem-uniform-metric-on-a-function-space]],
[[def-topology-of-uniform-convergence]],
[[lem-uniform-convergence-in-the-uniform-metric]] and
[[thm-function-space-is-complete-for-a-complete-target]] are stated for a nonempty
**set** $X$. [[thm-uniform-limit-theorem]] is stated for an arbitrary
**topological space** $X$, no distance in the domain being used anywhere in its
proof. Where any of these speaks of $C(X,Y)$ it asks in addition only that $X$
carry a topology, continuity being meaningless otherwise.

Where a purely topological statement is nevertheless made about a metric domain,
it is made through [[def-metrizable-space]]: the metric topology *is* the
topology, so the two vocabularies name one thing.

**2. The target is metric exactly where a distance in it is written.** The
topology of pointwise convergence ([[def-topology-of-pointwise-convergence]]),
the compact-open topology ([[def-compact-open-topology]]), the evaluation map
([[def-evaluation-map]]) and the exponential law ([[thm-the-exponential-law]])
need only the open sets of the target, so there $Y$ is an arbitrary topological
space ([[def-topological-space]]). The uniform metric
([[lem-uniform-metric-on-a-function-space]]), the topology of uniform convergence
([[def-topology-of-uniform-convergence]]), the topology of compact convergence
([[def-topology-of-compact-convergence]]), the comparison theorem, completeness,
Dini's theorem and equicontinuity ([[def-equicontinuity]]) all write a distance
$d(f(x),g(x))$, and there $Y$ is required to be metric. The theorem that the
compact-open and compact-convergence topologies agree
([[thm-compact-open-equals-compact-convergence]]) is exactly the bridge between
the two regimes, and it is stated with both spaces metric because that is where
both topologies are defined.

**3. $X$ is nonempty wherever a supremum over $X$ is taken.** The uniform metric
is a supremum over $X$, and this library has no extended real line and no
convention $\sup \varnothing = -\infty$ ([[rem-sup-conventions]]). So
[[lem-uniform-metric-on-a-function-space]] carries the hypothesis $X \ne \varnothing$
and everything resting on it inherits it. Nothing is lost: for $X = \varnothing$
the set of functions has exactly one element ([[def-product-topology]]) and all
questions on this page are trivial there.

**4. $C(X,Y)$ never carries a default topology.** Four topologies appear on this
page, and every statement names the one it means at the point of use. Where a
subset of $C(X,Y)$ is topologised, it carries the subspace topology of the named
one.

**5. Compact sets carry no separation hypothesis, and the sets $S(K,V)$ are not
spheres.** No Hausdorff assumption is made about the target anywhere on this page
([[def-hausdorff-space]]); where the target is metric it is Hausdorff for free
([[def-metrizable-space]]), and where it is not metric nothing here needs it. And
the notation $S(K,V)$ of [[def-compact-open-topology]] is unrelated to the sphere
$S(x,r)$ of [[def-metric-ball]]; no sphere is written on this page.

**6. Two objects on this page are deliberately new rather than reused, and each
says so where it is defined.**

- [[lem-uniform-metric-on-a-function-space]] is **not** the published supremum
  metric. [[lem-sup-metric-is-a-metric]] is stated for the **bounded real-valued**
  functions on a nonempty set; it cannot carry an arbitrary metric target and it
  cannot carry unbounded functions. The uniform metric here truncates distances at
  $1$ and needs no boundedness hypothesis. The companion page checks that on
  $C([0,1],\mathbb{R})$, where both are defined, they induce the same topology,
  so no second notion of convergence is created.
- [[def-locally-compact-metric-space]] is a metric special case of a notion this
  library does not yet define in general. Its own dictionary remark records the
  agreement and why the agreement is immediate.

**7. $Y^{X}$ here is a bare set of functions with the product topology, not the
vector space of [[def-function-space]].** That item writes $F^{X}$ for the same
underlying set when the target is a field and equips it with pointwise addition
and scalar multiplication. Nothing on this page uses those operations, and the
target is not assumed to carry any algebraic structure at all. Where both are in
play, the algebraic structure is named.

**8. General conventions of the two ambient developments apply unchanged**:
topologies are compared as *coarser* and *finer*, never *weaker* and *stronger*,
and neighbourhoods are not required to be open. The metric conventions of
[[rem-metric-axiom-conventions]] also apply — real-valued metrics only, no
extended metrics. $\mathbb{N}$ contains $0$ and every sequence on this page is
indexed from $0$, so every reciprocal written here is $1/(k+1)$ or $1/(k+2)$ and
never $1/k$.

**What this page does not do.** It does not prove the Ascoli-Arzelà theorem or
the Stone-Weierstrass theorem, both of which belong to later pages;
[[def-equicontinuity]] is placed here only so that the first of those pages has
its vocabulary earlier in the reading order. It does not claim that the
exponential law is a homeomorphism — [[thm-the-exponential-law]] is a bijection of
sets of continuous maps, and its own remark records exactly what the homeomorphism
form would additionally require. And it does not claim that the compact-open
topology is metrizable; the negative statement, with a witness, is on this page.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `def-topology-of-uniform-convergence` — definition — Uniform convergence, and the topology of uniform convergence: the metric topology of the uniform metric on $Y^{X}$ and on $C(X,Y)$

(statement provenance: literature-derived)

### Definition

Let $X$ be a nonempty set and let $(Y,d)$ be a metric space
([[def-metric-space]]).

**Uniform convergence.** A sequence $(f_k)$ in $Y^{X}$
([[def-topology-of-pointwise-convergence]]) **converges uniformly** to
$f \in Y^{X}$ if for every real $\varepsilon > 0$ there is $K \in \mathbb{N}$
such that

$$d\big(f_k(x), f(x)\big) < \varepsilon \qquad \text{for every } x \in X \text{ and every } k \ge K .$$

The whole content is the quantifier order: one index $K$ must serve **every**
point of $X$ at once, whereas pointwise convergence allows $K$ to depend on the
point as well as on $\varepsilon$. As everywhere in this library $\mathbb{N}$
contains $0$ and a sequence is indexed from $0$
([[def-topology-of-pointwise-convergence]]).

**The topology.** The **topology of uniform convergence** (the *uniform
topology*) on $Y^{X}$ is the metric topology $\mathcal{T}_{\bar\rho}$
([[def-metric-topology]]) of the uniform metric

$$\bar\rho(f,g) = \sup_{x \in X} \min\{\, d(f(x),g(x)),\ 1 \,\}$$

of [[lem-uniform-metric-on-a-function-space]]. Its basic open sets are the balls
$B_{\bar\rho}(f,\varepsilon)$ ([[def-metric-ball]]), and $Y^{X}$ with this
topology is a metrizable space ([[def-metrizable-space]]).

**On $C(X,Y)$.** If $X$ carries a topology, the **topology of uniform
convergence on $C(X,Y)$** ([[def-continuous-map-top]]) is the subspace topology
inherited from $Y^{X}$ ([[def-subspace-topology-top]]). It is the metric topology
of the restriction of $\bar\rho$ to $C(X,Y) \times C(X,Y)$: the subspace topology
of a metric topology is the metric topology of the subspace metric
([[def-isometry-and-metric-embedding]], [[def-metrizable-space]]). So the two
readings of the phrase agree, and $C(X,Y)$ carrying it is again metrizable.

**The name is justified by the next item.** That convergence in
$\mathcal{T}_{\bar\rho}$ is exactly uniform convergence in the sense defined above
is not part of the definition; it is
[[lem-uniform-convergence-in-the-uniform-metric]], and it is what entitles the
topology to the name.

**$X$ is nonempty throughout.** The uniform metric is defined only for nonempty
$X$ ([[lem-uniform-metric-on-a-function-space]]), so the topology of uniform
convergence is defined only there. The notion of uniform convergence itself makes
sense for $X = \varnothing$ and is vacuous, every sequence converging uniformly
to the unique element of $Y^{\varnothing}$; nothing below uses that case.

### `def-topology-of-compact-convergence` — definition — The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

(statement provenance: literature-derived)

### Definition

Let $(X,d_X)$ and $(Y,d)$ be metric spaces ([[def-metric-space]]), each carrying
its metric topology ([[def-metric-topology]], [[def-metrizable-space]]), and let
$C(X,Y)$ be the set of continuous maps $X \to Y$ ([[def-continuous-map-top]]).
For a compact subset $K \subseteq X$ ([[def-metric-compactness]]), a function
$f \in C(X,Y)$ and a real $\varepsilon > 0$ put

$$B_K(f,\varepsilon) \;:=\; \{\, g \in C(X,Y) \;:\; d\big(f(x), g(x)\big) < \varepsilon \text{ for every } x \in K \,\} .$$

No supremum appears in this definition, deliberately: for $K = \varnothing$ the
condition is vacuous and $B_{\varnothing}(f,\varepsilon) = C(X,Y)$, whereas a
supremum over the empty set does not exist in this library.

**The family $\mathcal{B}_{\mathrm{cc}} := \{\, B_K(f,\varepsilon) : K \subseteq X
\text{ compact},\ f \in C(X,Y),\ \varepsilon > 0 \,\}$ is a basis for a unique
topology on $C(X,Y)$** ([[thm-basis-criterion]], claim 1); that topology is the
**topology of compact convergence** (also called the topology of uniform
convergence on compact sets). The verification is carried out below.

### Three facts, discharged here and reused on this page

**(U1) A union of two compact subsets of $X$ is compact.** Let $K_1, K_2 \subseteq X$
be compact and let $(U_i)_{i \in I}$ be open subsets of $X$ with
$K_1 \cup K_2 \subseteq \bigcup_{i \in I} U_i$. If $K_1 \cup K_2 = \varnothing$
there is nothing to prove. Otherwise each $K_m$ is covered by the same family, so
by [[lem-compactness-is-intrinsic]] (claim 3) either $K_m = \varnothing$, and we
take the empty list for it, or there are finitely many indices whose sets cover
$K_m$; concatenating the two lists gives finitely many indices whose sets cover
$K_1 \cup K_2$, and that list is nonempty because $K_1 \cup K_2$ is. By
[[lem-compactness-is-intrinsic]] again, $K_1 \cup K_2$ is compact. Nothing is
selected: the indices are returned by the indexed form of compactness.

**(U2) For $f, g \in C(X,Y)$ the function $\varphi(x) := d(f(x),g(x))$ is a
continuous map $X \to \mathbb{R}$**, $\mathbb{R}$ carrying its usual metric
([[lem-real-line-is-a-metric-space]]). Indeed for $x, x' \in X$,

$$|\varphi(x) - \varphi(x')| \le \big|d(f(x),g(x)) - d(f(x'),g(x))\big| + \big|d(f(x'),g(x)) - d(f(x'),g(x'))\big| \le d\big(f(x),f(x')\big) + d\big(g(x),g(x')\big),$$

the first inequality by the triangle inequality for the absolute value
([[lem-of-triangle-inequality]], [[def-abs-value]]) applied after inserting and
removing $d(f(x'),g(x))$, and the second by the reverse triangle inequality
([[lem-metric-reverse-triangle]]) applied twice, the second time after using the
symmetry of $d$. Given $a \in X$ and a real $\varepsilon > 0$, continuity of $f$
and of $g$ at $a$ ([[def-metric-continuity]], [[def-metrizable-space]]) supplies
reals $\delta_1, \delta_2 > 0$ with $d(f(x),f(a)) < \varepsilon/2$ for
$d_X(x,a) < \delta_1$ and $d(g(x),g(a)) < \varepsilon/2$ for $d_X(x,a) < \delta_2$;
then $\delta := \min\{\delta_1,\delta_2\} > 0$ ([[lem-finite-set-has-max]],
[[def-max-min]]) gives $|\varphi(x)-\varphi(a)| < \varepsilon$ whenever
$d_X(x,a) < \delta$.

**(U3) For $f, g \in C(X,Y)$ and a nonempty compact $K \subseteq X$ the value
$\max_{x \in K} d(f(x),g(x))$ exists.** The restriction of $\varphi$ to the metric
subspace $(K, d_K)$ ([[def-isometry-and-metric-embedding]]) is continuous, the
$\varepsilon$-$\delta$ condition at a point of $K$ being the condition for
$\varphi$ read for the points of $K$ only; $(K,d_K)$ is a nonempty compact metric
space ([[def-metric-compactness]]); so [[thm-extreme-value-metric]] gives a point
of $K$ at which $\varphi$ attains a greatest value.

### Discharge of the basis conditions

**(B1)** Every $f \in C(X,Y)$ lies in $B_{\varnothing}(f,1) \in \mathcal{B}_{\mathrm{cc}}$,
so $\bigcup \mathcal{B}_{\mathrm{cc}} = C(X,Y)$.

**(B2)** Let $h \in B_{K_1}(f_1,\varepsilon_1) \cap B_{K_2}(f_2,\varepsilon_2)$.
For $m \in \{1,2\}$ put $\delta_m := \varepsilon_m$ if $K_m = \varnothing$, and
otherwise $\delta_m := \varepsilon_m - M_m$ where
$M_m := \max_{x \in K_m} d(f_m(x),h(x))$, which exists by (U3) and satisfies
$M_m < \varepsilon_m$ because $h \in B_{K_m}(f_m,\varepsilon_m)$; either way
$\delta_m > 0$. Put $K := K_1 \cup K_2$, compact by (U1), and
$\delta := \min\{\delta_1,\delta_2\} > 0$ ([[lem-finite-set-has-max]],
[[def-max-min]]). Then $h \in B_K(h,\delta)$, and
$B_K(h,\delta) \subseteq B_{K_m}(f_m,\varepsilon_m)$ for $m \in \{1,2\}$: for
$g \in B_K(h,\delta)$ and $x \in K_m \subseteq K$,

$$d\big(f_m(x), g(x)\big) \le d\big(f_m(x), h(x)\big) + d\big(h(x), g(x)\big) < M_m + \delta \le M_m + \delta_m = \varepsilon_m$$

when $K_m \ne \varnothing$, and the condition is vacuous when $K_m = \varnothing$.
So $B_K(h,\delta) \in \mathcal{B}_{\mathrm{cc}}$ contains $h$ and lies inside the
intersection, which is (B2).

By [[thm-basis-criterion]] the family $\mathcal{B}_{\mathrm{cc}}$ is therefore a
basis for exactly one topology on $C(X,Y)$, and the open sets of that topology are
exactly the unions of members of $\mathcal{B}_{\mathrm{cc}}$
([[def-topology-basis-subbasis]]).

**(U4) For each $f \in C(X,Y)$ the sets $B_K(f,\varepsilon)$ *centred at $f$* form
a neighbourhood base at $f$** ([[def-neighbourhood-top]]). Indeed a neighbourhood
of $f$ contains a basic set $B_{K_1}(f_1,\varepsilon_1)$ containing $f$, and the
(B2) computation above run with $h := f$, $K_2 := \varnothing$ and
$\varepsilon_2 := 1$ produces $\delta > 0$ with
$f \in B_{K_1}(f,\delta) \subseteq B_{K_1}(f_1,\varepsilon_1)$. This is the form in
which the topology is used in practice: convergence to $f$ in it is exactly uniform
convergence to $f$ on each compact subset of $X$.

### `def-compact-open-topology` — definition — The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

(statement provenance: literature-derived)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) carrying its metric topology
([[def-metric-topology]], [[def-metrizable-space]]), let $(Y, \mathcal{T}_Y)$ be
a topological space ([[def-topological-space]]), and let

$$C(X,Y) \;=\; \{\, f : X \to Y \;:\; f \text{ is continuous} \,\}$$

([[def-continuous-map-top]]). For a compact subset $K \subseteq X$
([[def-metric-compactness]]) and an open $V \in \mathcal{T}_Y$ put

$$S(K,V) \;:=\; \{\, f \in C(X,Y) \;:\; f[K] \subseteq V \,\} \;=\; \{\, f \in C(X,Y) : f(x) \in V \text{ for every } x \in K \,\} .$$

The **compact-open topology** on $C(X,Y)$ is the topology generated by

$$\mathcal{S}_{\mathrm{co}} \;:=\; \{\, S(K,V) \;:\; K \subseteq X \text{ compact},\ V \in \mathcal{T}_Y \,\}$$

as a subbasis ([[def-topology-basis-subbasis]]). By [[thm-basis-criterion]] the
finite intersections

$$S(K_0,V_0) \cap \dots \cap S(K_{n-1},V_{n-1}) \qquad (n \in \mathbb{N})$$

form a basis for it, the value $n = 0$ giving the empty intersection $C(X,Y)$.
Nothing has to be checked for this to be a topology: a topology generated by an
arbitrary family exists and is the coarsest one containing it
([[def-topology-basis-subbasis]]).

**Two degenerate members, recorded because they are used.** $S(\varnothing, V) = C(X,Y)$
for every open $V$, the empty set being compact and $f[\varnothing] = \varnothing$;
and $S(K, Y) = C(X,Y)$ for every compact $K$. Both are the whole space, so neither
constrains anything, and arguments below dispose of them separately rather than
dividing by a distance that does not exist.

**The domain is metric, and the target is not.** Compactness of $K$ is
[[def-metric-compactness]], which is defined for subsets of a metric space and,
at this point in the reading order, for nothing else; that is why $X$ carries a
metric here. The target $Y$ needs only its open sets, so it is an arbitrary
topological space throughout this definition and wherever the compact-open
topology alone is in play. Where a distance in the target is used — the uniform
metric, compact convergence, the comparison theorem — $Y$ is required to be
metric and the requirement is stated.

**Compactness of $K$ is intrinsic** ([[def-metric-compactness]]): it means that
the metric subspace $(K, d_K)$ is a compact metric space. The equivalent
description by families of open subsets of $X$ covering $K$ is
[[lem-compactness-is-intrinsic]], and it is cited at every step that uses it.

**Notation.** The letter $S$ carries two unrelated meanings in this library:
$S(x,r)$ is the sphere of centre $x$ and radius $r$ in a metric space
([[def-metric-ball]]), and $S(K,V)$ is the set defined above. The two are never
ambiguous, because the first argument of a sphere is a point and its second a
positive real, while the first argument of $S(K,V)$ is a compact set and its
second an open set; no item on this page writes a sphere.

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

### `def-evaluation-map` — definition — The evaluation map $e : C(X,Y) \\times X \\to Y$, $e(f,x) = f(x)$

(statement provenance: literature-derived)

### Definition

Let $(X,d)$ be a metric space carrying its metric topology
([[def-metric-topology]], [[def-metrizable-space]]), let $(Y,\mathcal{T}_Y)$ be a
topological space ([[def-topological-space]]), and let $C(X,Y)$ carry the
compact-open topology ([[def-compact-open-topology]]). The **evaluation map** is

$$e : C(X,Y) \times X \longrightarrow Y, \qquad e(f,x) := f(x),$$

the domain carrying the product topology ([[def-product-topology]]) of the
compact-open topology on $C(X,Y)$ and the metric topology on $X$.

**This is a function.** For $f \in C(X,Y)$ and $x \in X$ the value $f(x)$ is a
well-determined element of $Y$, and a pair $(f,x)$ of the product determines both
entries ([[def-product-topology]]), so $e$ is defined on all of
$C(X,Y) \times X$ with no further condition.

**Which topology is meant is part of the definition.** Continuity of $e$ is a
statement about the pair of topologies on the source and the topology on the
target ([[def-continuous-map-top]]), and $C(X,Y)$ carries several topologies on
this page. Unless another is named, the topology on $C(X,Y)$ inside an evaluation
map is the compact-open one; where a subspace of $C(X,Y)$ is evaluated, it carries
the subspace topology ([[def-subspace-topology-top]]).

**Separate continuity is immediate; joint continuity is not.** For fixed
$f \in C(X,Y)$ the map $x \mapsto e(f,x) = f(x)$ is continuous, being $f$ itself.
For fixed $x \in X$ the map $f \mapsto e(f,x) = f(x)$ is continuous as well, since
for open $V \subseteq Y$ its preimage is $S(\{x\},V)$, a subbasic open set of the
compact-open topology, $\{x\}$ being compact ([[def-compact-open-topology]]).
What is at issue on this page is **joint** continuity, that is continuity of $e$
on the product, and that genuinely needs a hypothesis on $X$: it holds when $X$ is
locally compact, and this page records as a false statement that it holds for
every metric $X$, with an explicit witness.

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

### `def-hausdorff-space` — definition — Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

### `rem-metric-axiom-conventions` — remark — Which metric axiom list this library uses, the live naming fork between semimetric and pseudometric, and why extended metrics are not treated here

(statement provenance: ai-altered)

_(no Statement/Definition section found in this item)_

### `rem-sup-conventions` — remark — Conventions: $\\sup \\emptyset$, unbounded sets, and the extended reals

(statement provenance: ai-altered)

_(no Statement/Definition section found in this item)_

### `lem-uniform-metric-on-a-function-space` — lemma — For a nonempty set $X$ and a metric space $(Y,d)$ the uniform metric $\\bar\\rho(f,g) = \\sup_{x} \\min\\{d(f(x),g(x)), 1\\}$ is a metric on $Y^{X}$

(statement provenance: literature-derived)

### Statement

Let $X$ be a **nonempty** set, let $(Y,d)$ be a metric space
([[def-metric-space]]) and write

$$\bar d(u,v) \;:=\; \min\{\, d(u,v),\ 1 \,\} \qquad (u, v \in Y),$$

which is a metric on $Y$ with $\bar d \le 1$ everywhere
([[lem-bounded-remetrisation]], claims 1 and 2). For $f, g \in Y^{X}$
([[def-topology-of-pointwise-convergence]]) put

$$R(f,g) \;:=\; \{\, \bar d\big(f(x), g(x)\big) : x \in X \,\} \subseteq \mathbb{R}, \qquad \bar\rho(f,g) \;:=\; \sup R(f,g) .$$

This is well defined: $R(f,g)$ is nonempty because $X$ is, and $1$ is an upper
bound of it, so the least upper bound exists ([[def-complete-ordered-field]]) and
is unique ([[lem-sup-unique]]).

**Then $\bar\rho$ is a metric on $Y^{X}$** ([[def-metric-space]]), the **uniform
metric**, and $\bar\rho(f,g) \le 1$ for all $f, g$.

**Both hypotheses are used and neither is decoration.** Nonemptiness of $X$ is
what makes $R(f,g)$ nonempty; for $X = \varnothing$ the set $Y^{X}$ has a single
element and $\sup \varnothing$ does not exist in this library, which has no
extended real line ([[rem-sup-conventions]]). Truncating $d$ at $1$ is what makes
$R(f,g)$ bounded above **with no boundedness hypothesis on $f$ and $g$**; that is
the whole reason the truncation is there.

### `lem-sup-metric-is-a-metric` — lemma — The supremum metric $d_\\infty(f,g) = \\sup_x |f(x) - g(x)|$ is a metric on the bounded real-valued functions on a nonempty set

(statement provenance: ai-altered)

### Statement

Let $S$ be a nonempty set. Call a function $f : S \to \mathbb{R}$ **bounded** when
its range $f[S] = \{f(s) : s \in S\}$ is a bounded subset of $\mathbb{R}$
([[def-bounded-set]]), and write

$$\mathcal{B}(S) := \{\, f : f \text{ is a bounded function } S \to \mathbb{R} \,\}.$$

For $f, g \in \mathcal{B}(S)$ put $D(f,g) := \{\, |f(s) - g(s)| : s \in S \,\}$ and

$$d_\infty(f,g) := \sup D(f,g).$$

This is well defined: $D(f,g)$ is nonempty because $S$ is, and it is bounded
above (step 1.1 below), so its least upper bound exists
([[def-complete-ordered-field]]) and is unique ([[lem-sup-unique]]).

**Then $d_\infty$ is a metric on $\mathcal{B}(S)$** ([[def-metric-space]]), the
**supremum metric** (also called the uniform metric).

The hypotheses ensure that the formula is a finite real-valued metric for every
pair in the stated function space. Boundedness of $f$ and $g$ makes $D(f,g)$
bounded above, and nonemptiness of $S$ makes it nonempty. Some unbounded pairs
can still have a finite supremum, but allowing all real-valued functions would
not give a finite-valued metric: for example, on $S=\mathbb{R}$ the functions
$f(s)=s$ and $g(s)=0$ make $D(f,g)$ unbounded above
([[rem-sup-conventions]]).

### `def-function-space` — definition — The vector space $F^{X}$ of all functions $X \\to F$ with pointwise operations, and $F^{n}$ as the case $X = n = \\{0, 1, \\dots, n-1\\}$

(statement provenance: ai-altered)

### Definition

Let $F$ be a field ([[def-field]]) and let $X$ be any set. Write

$$F^{X} \;:=\; \{\, f \;:\; f \text{ is a function } X \to F \,\},$$

and for $f \in F^{X}$ write $f(x)$ for its value at $x \in X$. Two elements of
$F^{X}$ are equal exactly when they agree at every point of $X$. Define

$$(f + g)(x) \;:=\; f(x) + g(x), \qquad (\lambda f)(x) \;:=\; \lambda\, f(x), \qquad 0_{F^{X}}(x) \;:=\; 0_F,$$

for $f, g \in F^{X}$, $\lambda \in F$ and $x \in X$, the operations on the right
being those of $F$. These are the **pointwise** operations.

**These rules really are the required data.** For $f, g \in F^{X}$ the assignment
$x \mapsto f(x) + g(x)$ is a function $X \to F$, so $+$ is a binary operation
$F^{X} \times F^{X} \to F^{X}$ ([[def-binary-operation]]); for $\lambda \in F$ and
$f \in F^{X}$ the assignment $x \mapsto \lambda f(x)$ is a function $X \to F$, so
scalar multiplication is a map $F \times F^{X} \to F^{X}$; and $0_{F^{X}}$, the
constant function at $0_F$, is an element of $F^{X}$.

**$F^{X}$ is a vector space over $F$** ([[def-vector-space]]). Each axiom is an
equation between elements of $F^{X}$, hence holds exactly when it holds at every
$x \in X$ after evaluation, and there it is the corresponding field axiom applied
to the values $f(x), g(x), \lambda, \mu$:

- associativity and commutativity of $+$, and $f + 0_{F^{X}} = f$, come from the
  same laws for $+$ in $F$; the additive inverse of $f$ is $x \mapsto -f(x)$,
  which lies in $F^{X}$ and satisfies $f + (-f) = 0_{F^{X}}$ pointwise. This is
  axiom (V1);
- $\bigl(\lambda(f+g)\bigr)(x) = \lambda(f(x)+g(x)) = \lambda f(x) + \lambda g(x)$
  is (V2), by distributivity in $F$;
- $\bigl((\lambda+\mu)f\bigr)(x) = (\lambda+\mu)f(x) = \lambda f(x) + \mu f(x)$ is
  (V3), by distributivity in $F$;
- $\bigl((\lambda\mu)f\bigr)(x) = (\lambda\mu)f(x) = \lambda(\mu f(x))$ is (V4),
  by associativity of multiplication in $F$;
- $(1_F f)(x) = 1_F f(x) = f(x)$ is (V5), by the multiplicative identity law
  in $F$.

### The case $X = n$

A natural number is a von Neumann natural ([[def-natural-numbers]]), that is a
set, and $n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$
([[lem-nat-order-is-membership]]). Taking $X = n$ therefore gives

$$F^{n} \;=\; \{\, x \;:\; x \text{ is a function } n \to F \,\},$$

whose elements are written $x = (x_0, x_1, \dots, x_{n-1})$ with $x_i := x(i)$ for
$i < n$. **The coordinates are indexed from $0$**, because $0 \in n$ whenever
$n \ne 0$ and $n \notin n$ always. The operations read

$$(x + y)_i = x_i + y_i, \qquad (\lambda x)_i = \lambda x_i \qquad (i < n),$$

and the zero of $F^{n}$ is the tuple all of whose coordinates are $0_F$.

**The two boundary cases.** $\mathbb{N}$ contains $0$, so $n = 0$ is a genuine
case. Since $0 = \varnothing$, the set $F^{0} = F^{\varnothing}$ has exactly one
element, the empty function; that element is $0_{F^{0}}$, so $F^{0}$ is the
**zero space** $\{0_{F^{0}}\}$, not the empty set. For $n = 1$ we have
$1 = \{0\}$, and the map $F^{1} \to F$ sending $x$ to its single coordinate $x_0$
is a bijection satisfying $(x+y)_0 = x_0 + y_0$ and $(\lambda x)_0 = \lambda x_0$;
we use it to read $F^{1}$ as $F$ where convenient. (No general notion of
isomorphism of vector spaces is available on this page, and none is claimed here:
what is asserted is exactly the displayed bijection and the two displayed
equations.)

### `def-product-topology` — definition — The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space

(statement provenance: ai-altered)

### Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

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

### `thm-compact-open-equals-compact-convergence` — theorem — For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

(statement provenance: ai-altered)

### Statement

Let $(X,d_X)$ and $(Y,d)$ be metric spaces ([[def-metric-space]]), each carrying
its metric topology, and let $C(X,Y)$ be the set of continuous maps $X \to Y$
([[def-continuous-map-top]]). Then the compact-open topology
([[def-compact-open-topology]]) and the topology of compact convergence
([[def-topology-of-compact-convergence]]) on $C(X,Y)$ are **the same topology**.

Both halves are proved by exhibiting, around each point of a generating set of
one topology, a generating set of the other inside it. No choice principle is
used: the only cover produced below is indexed by pairs, so the indexed form of
compactness ([[lem-compactness-is-intrinsic]]) returns everything that is needed.

**The metric hypothesis on the target is not removable by anything on this page.**
The topology of compact convergence is defined only for a metric target, since its
basic sets are written with a distance in $Y$; the compact-open topology needs
only the open sets of $Y$. The theorem is a statement about the case where both
are defined.

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

### `def-topological-space` — definition — Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison

(statement provenance: ai-altered)

### Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

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

### `thm-the-exponential-law` — theorem — The exponential law: for a locally compact metric $X$ and any spaces $Z$ and $Y$, transposition is a bijection between $C(X \\times Z, Y)$ and $C(Z, C(X,Y))$ with the compact-open topology

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a **locally compact** metric space
([[def-locally-compact-metric-space]]) carrying its metric topology, and let $Z$
and $Y$ be topological spaces ([[def-topological-space]]). Give $C(X,Y)$ the
compact-open topology ([[def-compact-open-topology]]) and $X \times Z$ the
product topology ([[def-product-topology]]). Define, for
$f \in C(X \times Z, Y)$,

$$\Phi(f) : Z \to C(X,Y), \qquad \Phi(f)(z)(x) := f(x,z) .$$

Then $\Phi$ is a well-defined map
$C(X \times Z, Y) \to C\big(Z, C(X,Y)\big)$ and it is a **bijection**
([[def-injection-surjection-bijection]]); its inverse sends a continuous
$F : Z \to C(X,Y)$ to the continuous map $(x,z) \mapsto F(z)(x)$.

### Exactly what is and is not claimed

**This is an assertion about two *sets* of continuous maps and a bijection
between them.** No topology is placed on $C(X \times Z, Y)$ or on
$C(Z, C(X,Y))$ anywhere in the statement, and **it is not claimed that $\Phi$ is
a homeomorphism.** The homeomorphism form of the exponential law is a genuinely
stronger statement, and this library does not have what it needs; the last remark
below says exactly what is missing. A reader who wants the categorical slogan
"$Y^{X \times Z} \cong (Y^{X})^{Z}$" should read it here as a bijection of
underlying sets, natural in the evident way, and no more.

No choice principle is used.

### `thm-uniform-limit-theorem` — theorem — A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric

(statement provenance: literature-derived)

### Statement

Let $(X,\mathcal{T}_X)$ be a topological space ([[def-topological-space]]) and
let $(Y,d)$ be a metric space ([[def-metric-space]]) carrying its metric
topology. Then:

1. **The $\varepsilon/3$ criterion.** Let $f : X \to Y$ be a function such that
   for every real $\varepsilon > 0$ there is a **continuous** $g : X \to Y$ with
   $$d\big(f(x), g(x)\big) < \varepsilon \qquad \text{for every } x \in X .$$
   Then $f$ is continuous ([[def-continuous-map-top]]).
2. **Uniform limit theorem.** If $X$ is nonempty, $(f_k)$ is a sequence of
   continuous maps $X \to Y$ and $(f_k)$ converges uniformly to $f$
   ([[def-topology-of-uniform-convergence]]), then $f$ is continuous.
3. **Closedness.** If $X$ is nonempty, $C(X,Y)$ is a closed subset of
   $(Y^{X}, \bar\rho)$, the uniform metric being that of
   [[lem-uniform-metric-on-a-function-space]].

**The domain is an arbitrary topological space**, not a metric space: nothing in
the argument uses a distance in $X$. Only the target carries a metric, and it
carries one because the hypothesis of claim 1 is a statement about distances in
$Y$.

**No choice principle is used, and claim 3 in particular is choice free.** The
proof of claim 3 instantiates *one* continuous $g$ for each $\varepsilon$ and uses
it immediately, rather than manufacturing a sequence of them; a sequential
argument through [[thm-metric-sequential-closure]] would spend the Axiom of
Countable Choice, and that route is deliberately not taken.

## What to return

Read `rem-function-space-conventions` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
