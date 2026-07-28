---
id: ex-one-point-compactifications-of-the-line-and-of-the-naturals
kind: example
title: "$\\mathbb{R}^{*}$ is homeomorphic to the unit circle by inverse stereographic projection, and $\\mathbb{N}^{*}$ is the ordinal space $\\omega + 1$"
status: published
origin: session
deps: [thm-heine-borel-r, def-one-point-compactification, thm-one-point-compactification-properties, lem-the-order-topology-on-an-ordinal, thm-ordinal-spaces-and-compactness, def-ordinal-addition, lem-omega-least-limit-ordinal, lem-ordinal-basics, def-ordinal, def-standard-topologies, def-natural-numbers, def-compact-space, def-subspace-topology-top, def-homeomorphism-and-open-maps, thm-compactness-under-continuous-maps, def-hausdorff-space, def-metrizable-space, cor-metrizability-and-first-countability-are-hereditary, lem-real-line-is-a-metric-space, def-metric-topology, def-metric-ball, lem-metrics-on-rn, lem-product-topology-on-rn, cor-heine-borel-in-the-product-topology, def-continuous-map-top, thm-continuity-characterisations-top, thm-product-universal-property, thm-algebra-of-continuous-functions, lem-real-and-metric-notions-agree, cor-archimedean-reciprocal, def-canonical-natural, def-topological-space, def-interval, def-product-topology, def-metric-bounded-diameter, def-complete-ordered-field, ex-compactness-in-the-standard-topologies]
justified_by: []
aliases: []
landmark: true
short: "two one-point compactifications"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
    - title: "Stereographic projection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stereographic_projection"
pipeline_run: null
---

## Example

Let $X^{*} = X \cup \{\infty\}$ denote the one-point compactification
([[def-one-point-compactification]]), whose added point is
$\infty = \{\, y \in X : y \notin y \,\}$. Then:

1. **The naturals.** Give $\mathbb{N}$ the discrete topology
   ([[def-standard-topologies]]). Then $\mathbb{N}^{*}$ **is** the ordinal
   $\omega + 1$ ([[def-ordinal-addition]]) as a set, and the topology
   $\mathcal{T}^{*}$ **is** the order topology of that ordinal
   ([[lem-the-order-topology-on-an-ordinal]]); so the identity map is a
   homeomorphism ([[def-homeomorphism-and-open-maps]]) and no construction is
   needed.
2. **The line.** Give $\mathbb{R}$ its usual topology and let
   $$S^1 \;:=\; \{\, (x,y) \in \mathbb{R}^2 : x^2 + y^2 = 1 \,\}$$
   carry the subspace topology from $\mathbb{R}^2$
   ([[lem-metrics-on-rn]], [[lem-product-topology-on-rn]],
   [[def-subspace-topology-top]]). The map
   $$h : \mathbb{R}^{*} \to S^1, \qquad h(t) := \Big(\tfrac{2t}{t^2+1},\ \tfrac{t^2-1}{t^2+1}\Big) \ \ (t \in \mathbb{R}), \qquad h(\infty) := (0,1),$$
   the inverse of stereographic projection from the north pole, is a
   homeomorphism.

No trigonometry is used, and no circle is described by angles; the map above and
its inverse $(x,y) \mapsto x/(1-y)$ are rational.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with the discrete topology, $\mathbb{R}$ with its usual topology, the one-point compactifications $\mathbb{N}^{*}$ and $\mathbb{R}^{*}$, the circle $S^1 \subseteq \mathbb{R}^2$, and the map $h$.

[L1] $\mathcal{T}^{*}$ consists of the open sets of $X$ together with the sets $X^{*} \setminus C$ for $C \subseteq X$ closed in $X$ and a compact subset of $X$; the added point is $\infty = \{y \in X : y \notin y\}$ ([[def-one-point-compactification]]); and $X^{*}$ is compact ([[thm-one-point-compactification-properties]], claim 1).

[L2] Every natural number satisfies $n \notin n$, $\mathbb{N} = \omega$ is an ordinal, $\omega + 1 = \omega^{+} = \omega \cup \{\omega\}$, and the elements of $\omega$ are exactly the naturals ([[lem-ordinal-basics]], [[def-ordinal]], [[lem-omega-least-limit-ordinal]], [[def-ordinal-addition]], [[def-natural-numbers]]).

[L3] In the discrete topology every subset is open and closed, every subspace is discrete, and a discrete space is compact exactly when it is finite ([[def-standard-topologies]], [[def-subspace-topology-top]], [[ex-compactness-in-the-standard-topologies]], claim 1; [[def-compact-space]]).

[L4] On an ordinal $\gamma$ the sets $[0,\beta]$ and $(\alpha,\beta]$ form a basis for the order topology, so a subset of $\gamma$ is open exactly when each of its points lies in one of them inside it ([[lem-the-order-topology-on-an-ordinal]], claim 1; [[thm-ordinal-spaces-and-compactness]]).

[L5] $\mathbb{R}^2$ carries one topology, the product topology and the metric topology of $d_\infty(x,y) = \max\{|x_0-y_0|, |x_1-y_1|\}$ being the same; a subset of $\mathbb{R}^2$ is a compact subset exactly when it is closed and bounded; and every subspace of a metrizable space is metrizable and hence Hausdorff ([[lem-metrics-on-rn]], [[lem-product-topology-on-rn]], [[cor-heine-borel-in-the-product-topology]], [[def-metrizable-space]], [[cor-metrizability-and-first-countability-are-hereditary]], [[def-hausdorff-space]], [[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]]).

[L6] A map into a product is continuous exactly when both components are; a quotient of polynomial functions with nowhere vanishing denominator is continuous as a map $\mathbb{R} \to \mathbb{R}$, and continuity there agrees with continuity as a map of metric spaces and hence of topological spaces ([[thm-product-universal-property]], claim 2; [[thm-algebra-of-continuous-functions]], [[lem-real-and-metric-notions-agree]], claim 1; [[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-metrizable-space]], [[lem-real-line-is-a-metric-space]], [[def-product-topology]]).

[L7] A continuous bijection from a compact space to a Hausdorff space is a homeomorphism ([[thm-compactness-under-continuous-maps]], claim 3; [[def-homeomorphism-and-open-maps]]).

[L8] For every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/m < \varepsilon$, and $\mathbb{R}$ is an ordered field ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[def-complete-ordered-field]], [[def-interval]], [[def-topological-space]]).

[L9] A closed bounded interval of $\mathbb{R}$ is a compact subset of $\mathbb{R}$ ([[thm-heine-borel-r]]).

## Verification

**Proof technique:** direct.

1.1 For $X = \mathbb{N}$ the added point is $\infty = \{\, n \in \mathbb{N} : n \notin n \,\} = \mathbb{N} = \omega$ by [L2], since every natural satisfies $n \notin n$. Hence $\mathbb{N}^{*} = \omega \cup \{\omega\} = \omega^{+} = \omega + 1$, an equality of sets and not merely a bijection. [L1, L2]

1.2 For $X = \mathbb{R}$ the circle $S^1$ is closed in $\mathbb{R}^2$, being the set where the continuous function $(x,y) \mapsto x^2+y^2-1$ vanishes, and bounded, lying in the $d_\infty$-ball of radius $2$ about the origin; so it is a compact subset of $\mathbb{R}^2$ by [L5], and as a subspace of a metrizable space it is metrizable and Hausdorff. [L5, L6]

2.1 By [L3] the compact subsets of the discrete $\mathbb{N}$ are exactly its finite subsets, and every subset is closed; so by [L1] the open sets of $\mathbb{N}^{*}$ are the subsets of $\mathbb{N}$ together with the sets $\mathbb{N}^{*} \setminus F$ with $F \subseteq \mathbb{N}$ finite. [L1, L3, step 1.1]

2.2 By [L4] a subset $V$ of $\omega + 1$ is open in the order topology exactly when each of its points lies in a set $[0,\beta]$ or $(\alpha,\beta]$ inside $V$. A subset of $\omega$ is open, each of its naturals $n$ lying in $[0,0] = \{0\}$ or in $(n-1, n] = \{n\}$; and a set $V \ni \omega$ is open exactly when it contains $[0,\omega] = \omega+1$ or some $(\alpha,\omega]$ with $\alpha \in \omega$, that is exactly when $(\omega+1) \setminus V \subseteq [0,\alpha]$ for some natural $\alpha$, that is exactly when its complement is finite. [L2, L4, step 1.1]

2.3 $h$ is a bijection $\mathbb{R}^{*} \to S^1$. For $t \in \mathbb{R}$ one computes $(2t)^2 + (t^2-1)^2 = (t^2+1)^2$, so $h(t) \in S^1$, and $h(t) \ne (0,1)$ since $t^2 - 1 = t^2+1$ is impossible. Conversely for $(x,y) \in S^1$ with $y \ne 1$ put $t := x/(1-y)$; then $t^2 = x^2/(1-y)^2 = (1-y^2)/(1-y)^2 = (1+y)/(1-y)$, so $t^2+1 = 2/(1-y)$ and $t^2-1 = 2y/(1-y)$, whence $h(t) = (x,y)$; and $t$ is the unique such real, being recovered from $h(t)$ by the same formula. With $h(\infty) = (0,1)$ this makes $h$ a bijection. [L8, step 1.2]

3.1 $h$ is continuous at every point of $\mathbb{R}$: its two components are $t \mapsto 2t/(t^2+1)$ and $t \mapsto (t^2-1)/(t^2+1)$, quotients of polynomials whose denominator never vanishes, hence continuous by [L6], so $h$ restricted to $\mathbb{R}$ is continuous into $\mathbb{R}^2$ by [L6] and hence into the subspace $S^1$, which contains its image. [L5, L6, step 2.3]

3.2 Claim 1 follows: by steps 2.1 and 2.2 the two topologies on the set $\omega+1$ of step 1.1 are the same family of subsets, so the identity map is a bijection carrying open sets to open sets in both directions and is a homeomorphism. [L1, step 1.1, step 2.1, step 2.2]

4.1 $h$ is continuous at $\infty$. Let $V$ be open in $S^1$ with $(0,1) \in V$; by [L5] there is a real $r > 0$ with every point of $S^1$ at $d_\infty$-distance less than $r$ from $(0,1)$ lying in $V$. By [L8] fix a natural $M \ge 1$ with $1/M < r/2$, and put $C := \{\, s \in \mathbb{R} : |s| \le M \,\}$, which is a closed bounded interval of $\mathbb{R}$, hence a compact subset of $\mathbb{R}$ by [L9]. For $t \notin C$ one has $|t| > M \ge 1$, so $|2t/(t^2+1)| \le 2|t|/t^2 = 2/|t| < 2/M < r$ and $|(t^2-1)/(t^2+1) - 1| = 2/(t^2+1) \le 2/t^2 \le 2/M < r$; hence $h(t) \in V$. So $W := \mathbb{R}^{*} \setminus C$ is open in $\mathbb{R}^{*}$ by [L1], contains $\infty$, and satisfies $h[W] \subseteq V$. [L1, L5, L8, L9, step 2.3, step 3.1]

5.1 $h$ is therefore a continuous bijection from $\mathbb{R}^{*}$, which is compact by [L1], to $S^1$, which is Hausdorff by step 1.2; so [L7] makes it a homeomorphism, which is claim 2. With claim 1 at step 3.2 both statements are proved. [L1, L7, step 1.2, step 2.3, step 3.1, step 3.2, step 4.1] ∎

## Remarks

**The naturals need no map at all.** The added point of [[def-one-point-compactification]] is constructed from the space, and for $\mathbb{N}$ that construction returns $\omega$ itself; the compactification is then literally the ordinal $\omega+1$ with its order topology, which is compact by [[thm-ordinal-spaces-and-compactness]], claim 1, as it must be.

**Where compactness does the work for the circle.** Producing the inverse of $h$ explicitly is possible here and was done at step 2.3, but continuity of that inverse is never checked: [L7] supplies it from compactness of $\mathbb{R}^{*}$ and the Hausdorff property of $S^1$. That is the standard use of claim 3 of [[thm-compactness-under-continuous-maps]].
