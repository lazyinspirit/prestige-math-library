---
id: ex-circle-as-r-mod-z
kind: example
title: "$\\mathbb{R}/\\mathbb{Z}$: the quotient map is open, and the quotient is homeomorphic to $[0,1]$ with its endpoints identified"
status: published
origin: session
deps: [def-quotient-topology, thm-quotient-universal-property, lem-open-or-closed-surjection-is-quotient,
       def-subspace-topology-top, def-homeomorphism-and-open-maps, def-integers,
       lem-integer-part, def-interval, def-metrizable-space, lem-real-line-is-a-metric-space,
       lem-continuity-is-local-and-pastes, def-continuous-map-top,
       thm-continuity-characterisations-top]
justified_by: []
aliases: [ex-circle-as-a-quotient]
landmark: true
short: "$\\mathbb{R}/\\mathbb{Z}$ and the interval with endpoints identified"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
    - title: "Circle group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Circle_group"
pipeline_run: null
---

## Example

Identify $\mathbb{Z}$ with its canonical copy inside $\mathbb{R}$
([[def-integers]], [[lem-integer-part]]) and give $\mathbb{R}$ its usual topology
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]). Let

$$x \sim y \quad :\Longleftrightarrow \quad x - y \in \mathbb{Z},$$

an equivalence relation, and let $T := \mathbb{R}/\mathbb{Z}$ be the quotient
with its canonical projection $q$ ([[def-quotient-topology]]). Let $[0,1]$ carry
the subspace topology ([[def-interval]], [[def-subspace-topology-top]]), let
$\approx$ be the relation on $[0,1]$ whose classes are $\{0,1\}$ and the
singletons $\{t\}$ for $0 < t < 1$, and let $K := [0,1]/\{0,1\}$ be that quotient
with projection $p$. Then:

1. **$q$ is an open map**, hence an open quotient map
   ([[lem-open-or-closed-surjection-is-quotient]]): for open $U \subseteq \mathbb{R}$
   the saturation of $U$ is $\bigcup_{m \in \mathbb{Z}} (U + m)$, a union of
   translates of $U$ and hence open.
2. **$T$ and $K$ are homeomorphic** ([[def-homeomorphism-and-open-maps]]). Two
   mutually inverse continuous maps are exhibited: the map induced by
   $q \restriction [0,1]$ in one direction, and in the other the map induced by
   the fractional part $x \mapsto x - \lfloor x \rfloor$ ([[lem-integer-part]]).

So "the interval with its endpoints glued" and "the line modulo the integers"
name one space. This library does **not** identify either of them with a circle
in $\mathbb{R}^2$: parametrising the unit circle needs the trigonometric
functions, which are not available at this point in the reading order.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology; the relation $\sim$ and the quotient $T = \mathbb{R}/\mathbb{Z}$ with projection $q$; the subspace $[0,1]$, the relation $\approx$ and the quotient $K = [0,1]/\{0,1\}$ with projection $p$; the map $j := q \restriction [0,1] : [0,1] \to T$; and the map $r : \mathbb{R} \to K$, $r(x) := p(x - \lfloor x \rfloor)$.

[A1] $q$ and $p$ are surjections; $V$ is open in $T$ exactly when $q^{-1}[V]$ is open in $\mathbb{R}$, and $W$ is open in $K$ exactly when $p^{-1}[W]$ is open in $[0,1]$; both are quotient maps and both are continuous ([[def-quotient-topology]], [[def-continuous-map-top]]).

[A2] For every real $x$ there is exactly one integer $\lfloor x \rfloor$ with $\lfloor x \rfloor \le x < \lfloor x \rfloor + 1$ ([[lem-integer-part]], [[def-integers]]).

[L1] $U \subseteq \mathbb{R}$ is open exactly when every point of $U$ has a bounded open interval around it inside $U$; bounded open intervals are open ([[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-metrizable-space]]).

[L2] A restriction of a continuous map to a subspace is continuous, and a map into a subspace is continuous exactly when its composite with the inclusion is ([[def-subspace-topology-top]], [[thm-continuity-characterisations-top]]).

[L3] Composites of continuous maps are continuous; continuity may be checked on an open cover, and on a finite closed cover ([[lem-continuity-is-local-and-pastes]], claims 1, 2 and 3).

[L4] For a quotient map $s$ and a continuous $f$ constant on the fibres of $s$, there is exactly one $\bar f$ with $\bar f \circ s = f$ and it is continuous ([[thm-quotient-universal-property]], claim 2).

[L5] A continuous open surjection is a quotient map ([[lem-open-or-closed-surjection-is-quotient]], clause 1).

## Verification

**Proof technique:** direct.

1.1 For $c \in \mathbb{R}$ the translation $\tau_c(t) := t + c$ carries an open $U$ to an open set: if $y \in U + c$ then $y - c \in U$, so [L1] gives $r_0 > 0$ with $(y-c-r_0,\ y-c+r_0) \subseteq U$, whence $(y-r_0,\ y+r_0) \subseteq U + c$. [L1]

1.2 For $U \subseteq \mathbb{R}$: $q^{-1}[q[U]] = \bigcup_{m \in \mathbb{Z}}(U+m)$, since $q(x) = q(u)$ for some $u \in U$ exactly when $x - u \in \mathbb{Z}$, that is $x \in U + m$ for some integer $m$. [given, A1]

1.3 $j$ is continuous, being a restriction of the continuous $q$; and $j$ is surjective, since for $x \in \mathbb{R}$ the number $x - \lfloor x \rfloor$ lies in $[0,1)$ by [A2] and satisfies $q(x - \lfloor x \rfloor) = q(x)$. [A1, A2, L2]

1.4 For $s,t \in [0,1]$: $j(s) = j(t)$ exactly when $s - t \in \mathbb{Z}$, and since $|s-t| \le 1$ that happens exactly when $s = t$ or $\{s,t\} = \{0,1\}$. So the fibres of $j$ are exactly the classes of $\approx$. [given, A2, L1]

1.5 $r$ is constant on the fibres of $q$: if $q(x) = q(y)$ then $y = x + m$ for an integer $m$, and $\lfloor y \rfloor = \lfloor x \rfloor + m$ by the uniqueness in [A2], so $y - \lfloor y \rfloor = x - \lfloor x \rfloor$ and $r(y) = r(x)$. [A2]

1.6 For each integer $m$ define $g_m : [m-1,\ m+1] \to K$ by $g_m(t) := p(t-m+1)$ for $t \in [m-1,m]$ and $g_m(t) := p(t-m)$ for $t \in [m,m+1]$. The two clauses agree at $t = m$, giving $p(1)$ and $p(0)$, which are equal because $\{0,1\}$ is one class of $\approx$. [given, A1]

2.1 By step 1.1 and step 1.2 the saturation of an open $U$ is a union of open sets, hence open; so $q[U]$ is open in $T$ by [A1], and $q$ is an open map, hence an open quotient map by [L5]. This is claim 1. [step 1.1, step 1.2, A1, L5]

2.2 Each clause of step 1.6 is continuous: $t \mapsto t - m + 1$ and $t \mapsto t - m$ are continuous by step 1.1 read through [L1], they map the stated closed interval into $[0,1]$, and $p$ is continuous; so [L2] and [L3] apply. By the finite closed cover $\{[m-1,m],\ [m,m+1]\}$ of $[m-1,m+1]$ and [L3], $g_m$ is continuous. [step 1.1, step 1.6, A1, L1, L2, L3]

2.3 $g_m$ agrees with $r$ on $[m-1,m+1]$: for $t \in [m-1,m)$ one has $\lfloor t \rfloor = m-1$ and $r(t) = p(t-m+1) = g_m(t)$; for $t \in [m,m+1)$ one has $\lfloor t \rfloor = m$ and $r(t) = p(t-m) = g_m(t)$; and at $t = m+1$ one has $r(t) = p(0) = p(1) = g_m(t)$. [step 1.6, A2]

3.1 $r$ is continuous: the open intervals $(m-1,\ m+1)$, $m \in \mathbb{Z}$, cover $\mathbb{R}$, and on each of them $r$ agrees with a restriction of the continuous $g_m$ by steps 2.2 and 2.3, hence is continuous there by [L2]; [L3] then gives continuity of $r$. [step 2.2, step 2.3, L1, L2, L3]

4.1 By step 1.4 and [L4] applied to the quotient map $p$ and the continuous $j$, there is exactly one continuous $\bar j : K \to T$ with $\bar j \circ p = j$; by step 1.5 and [L4] applied to the quotient map $q$ and the continuous $r$ of step 3.1, there is exactly one continuous $\bar r : T \to K$ with $\bar r \circ q = r$. [step 1.3, step 1.4, step 1.5, step 3.1, A1, L4]

5.1 $\bar r \circ \bar j = \mathrm{id}_K$: for $t \in [0,1]$ one has $\bar r(\bar j(p(t))) = \bar r(j(t)) = \bar r(q(t)) = r(t) = p(t - \lfloor t\rfloor)$, which is $p(t)$ for $t \in [0,1)$ and $p(0) = p(1)$ for $t = 1$; so $\bar r \circ \bar j \circ p = p$, and $p$ is surjective. [step 4.1, A1, A2]

5.2 $\bar j \circ \bar r = \mathrm{id}_T$: for $x \in \mathbb{R}$ one has $\bar j(\bar r(q(x))) = \bar j(r(x)) = \bar j(p(x - \lfloor x\rfloor)) = j(x - \lfloor x\rfloor) = q(x - \lfloor x \rfloor) = q(x)$; so $\bar j \circ \bar r \circ q = q$, and $q$ is surjective. [step 4.1, A1, A2]

6.1 By steps 5.1 and 5.2 the maps $\bar j$ and $\bar r$ are mutually inverse, and both are continuous by step 4.1; so $\bar j$ is a homeomorphism $K \to T$, which is claim 2. With step 2.1 both claims are proved. [step 2.1, step 4.1, step 5.1, step 5.2] ∎

## Remarks

- **The fractional part is not continuous, and $r$ nevertheless is.** The map
  $x \mapsto x - \lfloor x \rfloor$ jumps from values near $1$ to $0$ at every
  integer; composing it with $p$ repairs the jump, because $p(1) = p(0)$. That is
  the whole content of step 2.2, and it is why the closed pasting lemma of
  [[lem-continuity-is-local-and-pastes]] is used with exactly two pieces.

- **Why the quotient map being open matters here.** Claim 1 is not needed for
  claim 2, but it is what makes $T$ easy to work with: the images of the intervals
  $(a,b)$ form a basis of $T$, so a neighbourhood of a class is the image of a
  neighbourhood of any of its representatives. The torus example on this page uses
  the same fact for the product $q \times q$.

- **No circle appears.** Nothing above says that $T$ is the unit circle of
  $\mathbb{R}^2$, and nothing may: the map $t \mapsto (\cos 2\pi t, \sin 2\pi t)$
  needs the trigonometric functions, which are not available at this point in the
  reading order. The name "circle" is avoided in the statement for that reason.
