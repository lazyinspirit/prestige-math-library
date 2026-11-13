---
title: Star-shaped multiplier signs
status: published
research_item: prop-se-star-shaped-sign
dependency_level: 0
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 3: ` Remark 1, first two sentences `

## Prerequisites

- [math:def-star-shaped-open-subset-of-rn](https://alphabetamath.cc/item/def-star-shaped-open-subset-of-rn)
- [math:def-bounded-c-one-domain-boundary-charts-and-outward-normal](https://alphabetamath.cc/item/def-bounded-c-one-domain-boundary-charts-and-outward-normal)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)
- [math:def-compact-space](https://alphabetamath.cc/item/def-compact-space)
- [math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball)
- [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)
- [math:thm-closure-characterisation-top](https://alphabetamath.cc/item/thm-closure-characterisation-top)
- [math:def-total-derivative-in-euclidean-space](https://alphabetamath.cc/item/def-total-derivative-in-euclidean-space)
- [math:thm-total-derivative-computes-directional-and-partial-derivatives](https://alphabetamath.cc/item/thm-total-derivative-computes-directional-and-partial-derivatives)


## Statement

Assume countable choice. Let $n\ge2$, let $U\subset\mathbb R^n$ be a bounded $C^1$ domain, and let the compact obstacle be the solid $\Theta=\overline U$. Thus its boundary is locally a $C^1$ graph with $U$ on exactly one side. Let $\Omega_0=B_{R_0}(0)\setminus\Theta$, where $\Theta\subset B_{R_0}(0)$, and write $\Gamma_1=\partial B_{R_0}(0)$ and $\Gamma_2=\partial\Theta$. Suppose $x_0\in\Theta$ and that $x_0+t(x-x_0)\in\Theta$ for every $x\in\Theta$ and $0\le t\le1$; this is the closed-set segment convention for star-shapedness. For $q(x)=x-x_0$ and the outward unit normal $\nu$ of $\Omega_0$, one has $q\cdot\nu>0$ on $\Gamma_1$ and $q\cdot\nu\le0$ on $\Gamma_2$. Consequently $\Gamma_1=\{x\in\partial\Omega_0:q(x)\cdot\nu(x)>0\}$.

## Statement references

[math:def-star-shaped-open-subset-of-rn](https://alphabetamath.cc/item/def-star-shaped-open-subset-of-rn)

[math:def-bounded-c-one-domain-boundary-charts-and-outward-normal](https://alphabetamath.cc/item/def-bounded-c-one-domain-boundary-charts-and-outward-normal)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-compact-space](https://alphabetamath.cc/item/def-compact-space)

[math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball)

[math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top)

## Facts & Assumptions

[F1] Compact subset means compact in its subspace topology, as in [math:def-compact-space](https://alphabetamath.cc/item/def-compact-space). The Euclidean ball $B_{R_0}(0)=\{x:|x|<R_0\}$ has positive radius, as in [math:def-metric-ball](https://alphabetamath.cc/item/def-metric-ball). Closure and boundary are those of [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top) in the Euclidean topology.

[F2] The segment condition in the statement is the closed-set counterpart of the open-set star-shapedness convention in [math:def-star-shaped-open-subset-of-rn](https://alphabetamath.cc/item/def-star-shaped-open-subset-of-rn); it is stated explicitly and permits a centre on the obstacle boundary.

[F3] Under countable choice, [math:def-bounded-c-one-domain-boundary-charts-and-outward-normal](https://alphabetamath.cc/item/def-bounded-c-one-domain-boundary-charts-and-outward-normal) gives the local subgraph convention and the outward normal $(-Dh,1)/\sqrt{1+|Dh|^2}$ to $U$ in graph coordinates; [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) supplies the stated choice convention. The normal formula is transported by the orthogonal coordinate map.

[F4] [math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm) gives $|x\cdot x_0|\le |x|\,|x_0|$ and the Euclidean triangle inequality.

[F5] The remainder criterion in [math:def-total-derivative-in-euclidean-space](https://alphabetamath.cc/item/def-total-derivative-in-euclidean-space) defines $Dh(y)$. For a totally differentiable chart function on its open parameter set, [math:thm-total-derivative-computes-directional-and-partial-derivatives](https://alphabetamath.cc/item/thm-total-derivative-computes-directional-and-partial-derivatives) gives $\lim_{t\to0}(h(y+td\prime)-h(y))/t=Dh(y)d\prime$ for every direction $d\prime$, including zero.

[F6] [math:thm-closure-characterisation-top](https://alphabetamath.cc/item/thm-closure-characterisation-top) identifies membership in a closure with meeting every open neighborhood, and supplies closedness of the closure. By [math:def-interior-closure-boundary-top](https://alphabetamath.cc/item/def-interior-closure-boundary-top), a boundary point is a closure point that is not interior; equivalently, every neighborhood meets the set and its complement.

## Proof

**Given:** The obstacle, centre and truncated exterior in the statement.

**Goal:** Establish the boundary geometry, both signs and the positive boundary part.

1.1 First establish the geometry under the stated $C^1$ hypotheses. Because $U$ is open, $\partial U=\overline U\setminus U$. At any $p\in\partial U$, shrink a one-sided chart: $U$ is locally $s<h(y)$, and its closure is locally $s\le h(y)$. Indeed, points strictly above the graph have an open neighborhood disjoint from $U$ by continuity of $h$, while graph points are approached from below and points below are in $U$; the neighborhood characterization of closure gives both inclusions. Every graph point also has points strictly above arbitrarily close, so it is not interior to $\Theta$. Consequently $\operatorname{int}\Theta=U$ and $\partial\Theta=\partial U$, and $\Theta$ is closed. Locally its complement is $s>h(y)$; reversing the last coordinate writes this side as a subgraph and gives its outward normal $-n_U$, where $n_U$ is the outward normal of $U$. [given, F1, F3, F6]

2.1 The open set $\Omega_0=B_{R_0}(0)\setminus\Theta$ has boundary exactly $\Gamma_1\cup\Gamma_2$. To see this, the Euclidean triangle inequality and the points $(1\pm\varepsilon)x$ for $|x|=R_0$ give $\partial B_{R_0}(0)=\{x:|x|=R_0\}$. At a point of this sphere, closedness of $\Theta$ and $\Theta\subset B_{R_0}(0)$ give a neighborhood disjoint from $\Theta$, so $\Omega_0$ locally agrees with the ball and both sides meet every neighborhood. At a point of $\partial\Theta$, a small neighborhood lies inside the ball and the two chart sides from step 1.1 meet every neighborhood, so this too is a boundary point of $\Omega_0$. A point on neither boundary has a neighborhood wholly on one side of each of the ball and $\Theta$; intersecting these neighborhoods shows that it is either interior to $\Omega_0$ or exterior to its closure. No other boundary points occur. The pieces are disjoint since $\partial\Theta\subset\Theta\subset B_{R_0}(0)$. Thus $\Omega_0$ has one-sided $C^1$ boundary, and on $\Gamma_2$ its outward normal is $\nu=-n_U$. [given, F1, F3, F4, F6, step 1.1]

3.1 At a point $x\in\Gamma_1$, rotate coordinates so that $x=R_0e_n$. The ball is locally the subgraph of $H(y)=\sqrt{R_0^2-|y|^2}$ near $y=0$. Here $|H(y)-R_0|=|y|^2/(R_0+\sqrt{R_0^2-|y|^2})\le |y|^2/R_0$, so the total derivative of $H$ at zero is zero by its remainder criterion. The graph-normal formula therefore gives $e_n$ at this point; transporting back yields $\nu=x/R_0$ on $\Gamma_1$. The local agreement with the ball in step 2.1 makes this also the outward normal of $\Omega_0$. [given, F3, F5, step 2.1]

3.2 Fix $x\in\Gamma_2$ and use the chart of step 1.1, with $x$ represented by $(y,s)$ and $s=h(y)$. Put $d=x_0-x$, with chart vector components $(d\prime,d_n)$. The segment hypothesis applied to $x\in\Theta$ puts $x+td$ in $\Theta$ for $0\le t\le1$; for sufficiently small positive $t$ this point remains in the chart, hence $s+td_n\le h(y+td\prime)$. Subtract $s=h(y)$ and divide by $t>0$. Since $h$ is $C^1$ on an open parameter set, the directional-derivative theorem gives $(h(y+td\prime)-h(y))/t\to Dh(y)d\prime$ as $t\downarrow0$, also when $d\prime=0$. Therefore $d_n\le Dh(y)d\prime$, and $d\cdot n_U=(d_n-Dh(y)d\prime)/\sqrt{1+|Dh(y)|^2}\le0$. Scalar products are preserved by the rigid chart, and $q=-d$ while $\nu=-n_U$, so $q\cdot\nu=d\cdot n_U\le0$ on $\Gamma_2$. [given, F2, F3, F5, step 1.1, step 2.1]

4.1 Since $x_0\in\Theta\subset B_{R_0}(0)$ and $|x|=R_0$ on $\Gamma_1$, the Euclidean Cauchy–Schwarz inequality gives $q\cdot\nu=R_0-x_0\cdot x/R_0\ge R_0-|x_0|>0$ there. [given, F1, F4, step 3.1]

5.1 The disjoint boundary decomposition in step 2.1, the positive sign on $\Gamma_1$ in step 4.1 and the nonpositive sign on $\Gamma_2$ in step 3.2 give $\Gamma_1=\{x\in\partial\Omega_0:q(x)\cdot\nu(x)>0\}$. [step 2.1, step 4.1, step 3.2] ∎

## Source notes

Remark 1 of the article is attribution for the multiplier-sign claim. The argument uses the explicit segment condition, the published mathematical inputs and the local geometry calculation above. It does not use the article's assertion as proof. No smoothness beyond $C^1$, connectedness of the exterior, or non-trapping condition is needed for this sign calculation.
