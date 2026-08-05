# Adversarial proof reading — `thm-uniform-limit-theorem`

## The item under review, in full

`items/thm-uniform-limit-theorem.md`

```markdown
---
id: thm-uniform-limit-theorem
kind: theorem
title: "A uniform limit of continuous functions is continuous, so $C(X,Y)$ is closed in $Y^{X}$ under the uniform metric"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topology-of-uniform-convergence, lem-uniform-convergence-in-the-uniform-metric,
       lem-uniform-metric-on-a-function-space, def-continuous-map-top,
       thm-continuity-characterisations-top, def-neighbourhood-top, def-metric-ball,
       def-metric-topology, def-metrizable-space, def-metric-convergence,
       thm-metric-closure-characterisation, def-metric-bounded-diameter,
       lem-inf-epsilon, def-infimum, def-metric-space, def-topological-space,
       lem-bounded-remetrisation, def-max-min, lem-finite-set-has-max,
       def-topology-of-pointwise-convergence, lem-metric-ball-neighbourhood-base,
       thm-metric-sequential-closure]
justified_by: []
aliases: [thm-uniform-limit-of-continuous-is-continuous]
landmark: true
short: "uniform limit theorem"
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
    - title: "Uniform limit theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_limit_theorem"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

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

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T}_X)$, a metric space $(Y,d)$ with its metric topology, and where claims 2 and 3 apply, a nonempty $X$ and the uniform metric $\bar\rho$ on $Y^{X}$ with $\bar d = \min\{d,1\}$.

[L1] $h : X \to Y$ is continuous at $a$ exactly when for every open $V \subseteq Y$ with $h(a) \in V$ there is an open $U \subseteq X$ with $a \in U$ and $h[U] \subseteq V$; and $h$ is continuous exactly when it is continuous at every point ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-neighbourhood-top]]).

[L2] In a metric space the balls $B(p,\varepsilon)$, $\varepsilon > 0$, are open and form a neighbourhood base at $p$: an open $V$ with $p \in V$ contains some $B(p,\varepsilon)$ ([[def-metric-topology]], [[def-metric-ball]], [[lem-metric-ball-neighbourhood-base]], [[def-metrizable-space]]).

[L3] The triangle inequality (M3) and symmetry (M2) of $d$ ([[def-metric-space]]).

[L4] Uniform convergence of $(f_k)$ to $f$ gives, for each real $\varepsilon > 0$, an index $K$ with $d(f_k(x),f(x)) < \varepsilon$ for every $x \in X$ and every $k \ge K$ ([[def-topology-of-uniform-convergence]], [[lem-uniform-convergence-in-the-uniform-metric]]).

[L5] For nonempty $A \subseteq Y^{X}$ the closure in $(Y^{X},\bar\rho)$ is $\overline{A} = \{\, u : \bar\rho(u,A) = 0 \,\}$, a set is closed exactly when it equals its closure, and $\varnothing$ is closed ([[thm-metric-closure-characterisation]], [[def-metric-bounded-diameter]], [[def-metric-topology]]).

[L6] If $\inf S = 0$ and $\eta > 0$ is real, then some $s \in S$ satisfies $s < \eta$ ([[lem-inf-epsilon]], [[def-infimum]]).

[L7] $\bar d \le d$ and $\bar d \le 1$; if $\bar d(u,v) < 1$ then $\bar d(u,v) = d(u,v)$; and $\bar d(u(x),v(x)) \le \bar\rho(u,v)$ for every $x \in X$ ([[lem-bounded-remetrisation]], [[lem-uniform-metric-on-a-function-space]], [[lem-finite-set-has-max]], [[def-max-min]]).

[L8] Two elements of $Y^{X}$ are equal exactly when they agree at every point of $X$, and $Y^{X}$ is the set of all functions $X \to Y$ ([[def-topology-of-pointwise-convergence]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1, assume the displayed hypothesis, fix $a \in X$, and let $V \subseteq Y$ be open with $f(a) \in V$; fix a real $\varepsilon > 0$ with $B(f(a),\varepsilon) \subseteq V$. [assume-hyp, L1, L2, choose]

1.2 For claim 3, if $C(X,Y) = \varnothing$ then it is closed and there is nothing to prove; so assume $C(X,Y) \ne \varnothing$ and let $f$ lie in the closure of $C(X,Y)$ in $(Y^{X},\bar\rho)$, so that $\bar\rho(f, C(X,Y)) = 0$. [L5, assume-hyp]

2.1 Apply the hypothesis at $\varepsilon/3$: fix a continuous $g : X \to Y$ with $d(f(x),g(x)) < \varepsilon/3$ for every $x \in X$. [step 1.1, choose]

2.2 Let $\varepsilon_1 > 0$ be real and put $\eta := \min\{\varepsilon_1, 1\}/2$, a real with $0 < \eta \le 1/2 < 1$ and $\eta < \varepsilon_1$; since the infimum of the distances from $f$ to the members of $C(X,Y)$ is $0 < \eta$, there is $g \in C(X,Y)$ with $\bar\rho(f,g) < \eta$. [step 1.2, L6, L7, choose]

3.1 $B(g(a),\varepsilon/3)$ is open in $Y$ and contains $g(a)$, so continuity of $g$ at $a$ gives an open $U \subseteq X$ with $a \in U$ and $g[U] \subseteq B(g(a),\varepsilon/3)$. [step 2.1, L1, L2, choose]

3.2 For every $x \in X$: $\bar d(f(x),g(x)) \le \bar\rho(f,g) < \eta < 1$, hence $d(f(x),g(x)) = \bar d(f(x),g(x)) < \eta < \varepsilon_1$. [step 2.2, L7]

4.1 For every $x \in U$: $d(f(x),f(a)) \le d(f(x),g(x)) + d(g(x),g(a)) + d(g(a),f(a)) < \varepsilon/3 + \varepsilon/3 + \varepsilon/3 = \varepsilon$, so $f[U] \subseteq B(f(a),\varepsilon) \subseteq V$. [step 1.1, step 2.1, step 3.1, L3]

5.1 As $V$ was an arbitrary open set containing $f(a)$ and $a$ an arbitrary point of $X$, step 4.1 makes $f$ continuous at every point, hence continuous; this is claim 1. [step 1.1, step 4.1, L1]

6.1 For claim 2, let $\varepsilon > 0$ be real; uniform convergence gives an index $K$ with $d(f_k(x),f(x)) < \varepsilon$ for every $x \in X$ and every $k \ge K$, so the continuous map $g := f_K$ witnesses the hypothesis of claim 1 at $\varepsilon$; hence $f$ is continuous by claim 1. [step 5.1, L4]

6.2 Steps 2.2 and 3.2 supply, for each real $\varepsilon_1 > 0$, a continuous $g$ with $d(f(x),g(x)) < \varepsilon_1$ for every $x \in X$, which is the hypothesis of claim 1; so $f$ is continuous, that is $f \in C(X,Y)$. [step 5.1, step 2.2, step 3.2, L8]

7.1 Hence the closure of $C(X,Y)$ is contained in $C(X,Y)$, and containing it always, it equals it; so $C(X,Y)$ is closed in $(Y^{X},\bar\rho)$, which is claim 3. [step 1.2, step 6.2, L5] ∎

## Remarks

- **The three thirds are the three legs of the estimate**, and each is a different approximation: $f$ to $g$ at $x$, $g$ at $x$ to $g$ at $a$, and $g$ to $f$ at $a$. Only the middle one uses continuity, and only the outer two use that the approximation of $f$ by $g$ is uniform. If the approximation were merely pointwise, the third leg would still hold but the first would need an $\varepsilon$ depending on $x$, and the argument collapses; the companion page exhibits exactly that collapse.

- **Claim 3 is what makes $C(X,Y)$ a complete space when $Y$ is complete**, by the next item, and it is the reason the uniform topology and not the pointwise one is the natural home for limits of continuous functions. In the pointwise topology $C(X,Y)$ is in general **not** closed, and the companion page carries a witness on $[0,1]$.

- **Why the choice-free route was taken.** The usual proof of claim 3 shows that $C(X,Y)$ is sequentially closed and then invokes [[thm-metric-sequential-closure]] to conclude closedness; that item's forward direction spends the Axiom of Countable Choice, since it manufactures a sequence out of adherence. The argument above instead works with the distance to the set directly and instantiates a single $g$ at each $\varepsilon$, so claim 3 is a theorem of ZF.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

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

### `lem-uniform-convergence-in-the-uniform-metric` — lemma — Convergence in the uniform metric is exactly uniform convergence: one $N$ serving every point

(statement provenance: literature-derived)

### Statement

Let $X$ be a nonempty set, let $(Y,d)$ be a metric space
([[def-metric-space]]), and let $\bar\rho$ be the uniform metric on $Y^{X}$
([[lem-uniform-metric-on-a-function-space]]). Let $(f_k)$ be a sequence in
$Y^{X}$ and let $f \in Y^{X}$. Then

$$f_k \to f \text{ in } (Y^{X}, \bar\rho) \qquad \Longleftrightarrow \qquad (f_k) \text{ converges uniformly to } f ,$$

convergence in a metric space being [[def-metric-convergence]] and uniform
convergence being [[def-topology-of-uniform-convergence]].

**This is what makes the name of the topology accurate**, and it is the reason
the truncation at $1$ in the uniform metric costs nothing: below the threshold the
truncated and untruncated distances agree, and convergence is a statement about
arbitrarily small distances. No choice principle is used.

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

### `def-continuous-map-top` — definition — Continuity of a map of topological spaces at a point and globally

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces
([[def-topological-space]]), let $f : X \to Y$ be a function and let $x \in X$.
Neighbourhoods are as in [[def-neighbourhood-top]].

$f$ is **continuous at $x$** if for every neighbourhood $V$ of $f(x)$ in $Y$ the
preimage $f^{-1}[V]$ is a neighbourhood of $x$ in $X$.

$f$ is **continuous** if it is continuous at every point of $X$.

**The same condition with open sets only.** $f$ is continuous at $x$ if and only
if for every open $V \subseteq Y$ with $f(x) \in V$ there is an open
$U \subseteq X$ with $x \in U$ and $f[U] \subseteq V$. Indeed, if $f$ is
continuous at $x$ and $V$ is such an open set, then $V$ is a neighbourhood of
$f(x)$, so $f^{-1}[V]$ is a neighbourhood of $x$ and contains an open $U \ni x$,
which satisfies $f[U] \subseteq V$. Conversely, given the displayed condition and
a neighbourhood $V$ of $f(x)$, fix open $V_0$ with $f(x) \in V_0 \subseteq V$ and
then open $U \ni x$ with $f[U] \subseteq V_0$; then $x \in U \subseteq f^{-1}[V_0] \subseteq f^{-1}[V]$,
so $f^{-1}[V]$ is a neighbourhood of $x$. Both forms are used below and are the
same statement written twice.

**Preimage, not image.** $f^{-1}[V] = \{\, x \in X : f(x) \in V \,\}$
is the preimage in the sense of [[def-injection-surjection-bijection]] and is
defined for every function, invertible or not; no inverse function is being
asserted to exist. Continuity is a condition on preimages throughout, and the
corresponding conditions on images define the *open* and *closed* maps of a later
item, which are different notions.

### `thm-continuity-characterisations-top` — theorem — For a map of spaces the following agree: continuity at every point, preimages of open sets open, preimages of closed sets closed, preimages of subbasic open sets open, and $f(\\overline{A}) \\subseteq \\overline{f(A)}$

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces, let
$f : X \to Y$ be a function, and let $\mathcal{S}$ be a subbasis for
$\mathcal{T}_Y$ ([[def-topology-basis-subbasis]]). The following five conditions
are equivalent.

- **(a)** $f$ is continuous at every point of $X$ ([[def-continuous-map-top]]).
- **(b)** $f^{-1}[V]$ is open in $X$ for every open $V \subseteq Y$.
- **(c)** $f^{-1}[F]$ is closed in $X$ for every closed $F \subseteq Y$.
- **(d)** $f^{-1}[S]$ is open in $X$ for every $S \in \mathcal{S}$.
- **(e)** $f[\overline{A}] \subseteq \overline{f[A]}$ for every $A \subseteq X$,
  closures being taken in $X$ and in $Y$ respectively
  ([[def-interior-closure-boundary-top]]).

Condition (d) is what makes continuity checkable against a generating family
rather than against every open set, and it holds for a *basis* as well, a basis
being in particular a subbasis for the topology it generates.

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

### `def-metric-convergence` — definition — Convergence of a sequence in a metric space: $x_k \\to x$ iff $d(x_k, x) \\to 0$ in $\\mathbb{R}$

(statement provenance: ai-altered)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library, $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here.

Let $(x_k)$ be a sequence in $X$ and $p \in X$. The function
$k \mapsto d(x_k, p)$ is a sequence of reals ([[def-sequence]]), and it is
nonnegative ([[lem-metric-nonnegativity]]), so $|d(x_k,p)| = d(x_k,p)$
([[def-abs-value]]). Define

$$x_k \longrightarrow p \text{ in } (X,d) \quad :\Longleftrightarrow \quad d(x_k,p) \longrightarrow 0 \text{ in } \mathbb{R},$$

the convergence on the right being that of [[def-real-limit]]. Unwound, this
says: for every **rational** $\varepsilon > 0$ there is $K \in \mathbb{N}$ with
$d(x_k, p) < \varepsilon$ for every $k \ge K$. We then call $p$ a **limit** of
$(x_k)$, and say $(x_k)$ **converges** in $(X,d)$ if it has a limit.

**Rational and real $\varepsilon$ agree here, as they do on the real line.**
[[def-real-limit]] tests convergence against rational $\varepsilon$ only, and its
own remark, restated for sequences in [[def-sequence]], records that nothing is
lost: below any real $\eta > 0$ lies a positive rational
([[lem-rat-embeds-dense]]), and the index belonging to that rational serves for
$\eta$. So a proof may establish convergence by producing an index for every
real $\varepsilon > 0$, and may use a convergence hypothesis at a real
$\varepsilon$ by first passing to a rational below it. Both moves are used on
this page and are always cited.

**Subsequences and subsequential limits.** A **subsequence** of $(x_k)$ is the
composite $x \circ n$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$,
written $(x_{n_j})$, exactly as for sequences of reals ([[def-sequence]]); and
$p$ is a **subsequential limit** of $(x_k)$ in $(X,d)$ when some subsequence
converges to $p$, which is the metric-space form of [[def-subsequential-limit]].

### `thm-metric-closure-characterisation` — theorem — The closure of a nonempty $A$ is $\\{x : d(x,A) = 0\\}$, equals $A$ together with its limit points, and is the smallest closed superset

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$,
with closure, derived set and limit points as in
[[def-metric-interior-closure-boundary]]. Then:

1. If $A \ne \emptyset$, then $\overline{A} = \{\, x \in X : d(x,A) = 0 \,\}$,
   where $d(x,A)$ is the distance from a point to a nonempty set
   ([[def-metric-bounded-diameter]]).
2. $\overline{A} = A \cup A'$.
3. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$. So $\overline{A}$ is the smallest closed
   superset of $A$, and $A$ is closed if and only if $A = \overline{A}$.

Claims 2 and 3 hold for every $A$, the empty set included: $\overline{\emptyset}$
is empty because no ball meets $\emptyset$, and $\emptyset$ is closed because $X$
is open ([[def-metric-topology]]). Claim 1 carries the hypothesis $A \ne \emptyset$
because $d(x,A)$ is defined only for nonempty $A$
([[def-metric-bounded-diameter]]).

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

### `lem-inf-epsilon` — lemma — Epsilon characterisation of the infimum

(statement provenance: ai-altered)

### Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below, and let $\ell$ be a
lower bound of $S$ ([[def-bounded-set]]). Then

$$\ell = \inf S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } s < \ell + \varepsilon.$$

In words: among the lower bounds of $S$, the infimum is exactly the one that
cannot be raised by any positive amount and still bound $S$ from below.

### `def-infimum` — definition — Greatest lower bound (infimum)

(statement provenance: literature-derived)

### Definition

Let $S \subseteq \mathbb{R}$ and $\ell \in \mathbb{R}$. Then $\ell$ is a
**greatest lower bound**, or **infimum**, of $S$ if both of the following hold:

- $\ell$ is a lower bound of $S$ ([[def-bounded-set]]), that is, $\ell \le s$ for
  every $s \in S$;
- $\ell' \le \ell$ for every lower bound $\ell'$ of $S$.

Written out in one line:

$$\ell \text{ is an infimum of } S \iff \big[(\forall s \in S)\, \ell \le s\big] \text{ and } \big[(\forall \ell' \in \mathbb{R})\, \big((\forall s \in S)\, \ell' \le s\big) \Rightarrow \ell' \le \ell\big].$$

An infimum, when it exists, is unique ([[lem-sup-unique]]), so we may write
$\inf S$ for it.

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

### `lem-bounded-remetrisation` — lemma — $\\min(d,1)$ and $d/(1+d)$ are metrics uniformly equivalent to $d$, so every metric space carries a bounded metric with the same topology

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and define, for
$x, y \in X$,

$$d'(x,y) := \min\{\, d(x,y),\ 1 \,\}, \qquad d''(x,y) := \frac{d(x,y)}{1 + d(x,y)} .$$

Both are well defined: $d(x,y) \ge 0$ ([[lem-metric-nonnegativity]]), so
$1 + d(x,y) > 0$ and is invertible, and the minimum of a two-element set of
reals exists ([[lem-finite-set-has-max]], [[def-max-min]]). Then:

1. $d'$ and $d''$ are metrics on $X$.
2. $d'(x,y) \le 1$ and $d''(x,y) < 1$ for all $x,y$; hence $(X,d')$ and
   $(X,d'')$ are bounded metric spaces
   ([[def-metric-bounded-diameter]]), and if $X \ne \emptyset$ then
   $\operatorname{diam}(X) \le 1$ for both.
3. $d'$ and $d''$ are each uniformly equivalent to $d$, hence topologically
   equivalent to it ([[def-equivalent-metrics]],
   [[thm-metric-equivalence-hierarchy]]).

**Consequently every metric space carries a bounded metric with exactly the same
topology**, so boundedness cannot be read off the topology alone.

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

### `lem-metric-ball-neighbourhood-base` — lemma — The balls $B(x, 1/n)$, $n \\ge 1$, form a countable neighbourhood base at $x$, so every metric space is first countable

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $x \in X$. For a
natural $n \ge 1$ write $1/n$ for the inverse of the canonical natural
$n \cdot 1_{\mathbb{R}}$, a positive real, and put

$$\beta_n := B\big(x, 1/n\big), \qquad \mathcal{B}_x := \{\, \beta_n : n \in \mathbb{N},\ n \ge 1 \,\}.$$

Then:

1. $\mathcal{B}_x$ is at most countable ([[def-countable]]).
2. Every $\beta_n$ is an open subset of $X$ containing $x$.
3. For every open $U \subseteq X$ with $x \in U$ there is $n \ge 1$ with
   $\beta_n \subseteq U$.

**The two names used in the title are introduced by this statement, not cited
from elsewhere.** A family of open sets each containing $x$, such that every open
set containing $x$ contains a member of the family, is a **neighbourhood base at
$x$**; a space in which every point has an at most countable neighbourhood base
is **first countable**. Claims 1 to 3 say that $\mathcal{B}_x$ is an at most
countable neighbourhood base at $x$, so **every metric space is first
countable**.

### `thm-metric-sequential-closure` — theorem — A point lies in the closure of $A$ iff some sequence in $A$ converges to it, and a set is closed iff it is sequentially closed

(statement provenance: ai-altered)

### Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$, let
$x \in X$ and let $F \subseteq X$. Call $F$ **sequentially closed** when every
sequence in $F$ that converges in $X$ has its limit in $F$. Then:

1. $x \in \overline{A}$ ([[def-metric-interior-closure-boundary]]) if and only if
   there is a sequence $(a_k)$ with $a_k \in A$ for every $k$ and $a_k \to x$ in
   $(X,d)$ ([[def-metric-convergence]]).
2. $F$ is closed ([[def-metric-topology]]) if and only if $F$ is sequentially
   closed.

**The Axiom of Countable Choice is used, once.** The direction of claim 1 that
manufactures a sequence out of adherence makes one choice per natural number, and
that is exactly $\mathrm{AC}_\omega$ ([[def-countable-choice]]). The converse
direction, and the direction of claim 2 that goes from closed to sequentially
closed, are choice free. This is flagged at the step that spends it.

## What to return

Read `thm-uniform-limit-theorem` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
