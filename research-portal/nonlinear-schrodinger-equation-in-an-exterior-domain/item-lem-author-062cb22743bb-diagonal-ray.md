---
title: Diagonal gluing without a single-valued reflected flow
status: draft
research_item: lem-author-062cb22743bb-diagonal-ray
dependency_level: 1
sources:
  references: []
---

## Prerequisites

- [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract)
- [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice)
- [math:def-metric-space](https://alphabetamath.cc/item/def-metric-space)
- [math:def-topology-of-uniform-convergence](https://alphabetamath.cc/item/def-topology-of-uniform-convergence)
- [math:lem-metric-limits-unique](https://alphabetamath.cc/item/lem-metric-limits-unique)
- [math:def-continuous-map-top](https://alphabetamath.cc/item/def-continuous-map-top)
- [math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)


## Statement

Assume Dependent Choice. Let $(Z,\delta)$ be a metric space with its metric topology. Every time interval carries the subspace topology inherited from the usual metric $|s-t|$ on $\mathbb R$. For each nonempty time interval $I\subset[0,\infty)$, let $\mathcal A(I)$ be a specified class of continuous maps $I\to Z$, called admissible phase curves. Assume the following local admissibility contract: restrictions to nonempty subintervals remain admissible, and a continuous curve on $I$ is admissible whenever every $t\in I$ has a relative interval neighborhood $J\subset I$ on which its restriction belongs to $\mathcal A(J)$.

Let $q_j\in\mathcal A([0,j])$ for positive integers $j$. Require the following hereditary finite-interval extraction property: for every positive integer $m$ and every strictly increasing sequence of indices $j_k\ge m$, some further subsequence of $q_{j_k}|_{[0,m]}$ converges uniformly with respect to $\delta$ to an element of $\mathcal A([0,m])$. Then there are strictly increasing indices $n_k$ and a curve $q\in\mathcal A([0,\infty))$ such that $q_{n_k}|_{[0,T]}\to q|_{[0,T]}$ uniformly for every finite $T\ge0$, using the tail with $n_k\ge T$.

For the generalized-ray application, let $D\subset\mathbb R^d$, $d\ge2$, have smooth boundary and use the stationary wave symbol $p(t,x,\tau,\xi)=-\tau^2+|\xi|^2$. Let $j$ be boundary compression, locally $(y;\eta',\eta_n)\mapsto(y;\eta',y_n\eta_n)$ in boundary normal coordinates with $y_n\ge0$. Take $Z=j\{(0,x,-1,\xi):x\in\overline D,\ |\xi|=1\}$ with a specified metric $\delta$ inducing its compressed subspace topology. Time translation identifies this slice with the normalized compressed characteristic slice at any time $t$; denote that identification by $\iota_t$. Here an admissible phase curve $a:I\to Z$ means that the time lift $t\mapsto\iota_t(a(t))$ is locally a compressed generalized-bicharacteristic segment reparametrized by its physical-time coordinate, with one-sided interpretation at included endpoints. Its spatial projection is the generalized ray. The conclusion therefore gives one complete forward admissible phase curve and its generalized ray, without assuming uniqueness through a phase point or finite-order boundary contact.

## Facts & Assumptions

[F1] The metric-space notion is [math:def-metric-space](https://alphabetamath.cc/item/def-metric-space). Uniform convergence is the metric-valued epsilon condition of [math:def-topology-of-uniform-convergence](https://alphabetamath.cc/item/def-topology-of-uniform-convergence): for every $\varepsilon>0$, all sufficiently late terms have distance less than $\varepsilon$ from the limit at every time in the specified interval. Restricting the interval or taking a subsequence preserves that condition directly. Continuity is continuity at every point in the sense of [math:def-continuous-map-top](https://alphabetamath.cc/item/def-continuous-map-top), with the metric topology of [math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology) on $Z$ and the interval subspace topologies of [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top). These relative topologies agree under nested interval restrictions.

[F2] Assume [math:def-dependent-choice](https://alphabetamath.cc/item/def-dependent-choice). It is used to choose successively nested infinite index sets together with their admissible finite-interval limits. The hereditary extraction hypothesis supplies a successor for every finite selection state; Dependent Choice supplies the infinite sequence of states.

[F3] A sequence in a metric space has at most one limit by [math:lem-metric-limits-unique](https://alphabetamath.cc/item/lem-metric-limits-unique). Applying the uniform epsilon condition at a fixed time gives the pointwise convergence needed for this result.

[F4] The compressed wave phase space, its topology, local reflected and glancing rules, and the distinction between a compressed bicharacteristic and its spatial generalized ray are from [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract). The time-zero normalization and physical-time parametrization of admissible phase curves are specified in the Statement; the local Hamiltonian rules are understood after this reparametrization. Restriction preserves these local rules; conversely, if they hold on relative interval neighborhoods, they hold at every time, which is precisely the local admissibility contract. A metric inducing the compressed topology is part of the supplied data, not a metrizability conclusion. Finite-interval closedness and extraction are hypotheses here, not deductions from the ray convention.

## Proof

**Given:** The metric space, local admissibility contract, sequence of admissible segments, hereditary finite-interval extraction property, and Dependent Choice. **Goal:** A single subsequence converging uniformly on each bounded interval to one complete admissible phase curve.

1.1 Put $S_0=\{1,2,\ldots\}$. A selection state of length $m$ records nested infinite sets $S_0\supset S_1\supset\cdots\supset S_m$, with $S_r\subset\{j:j\ge r\}$, and curves $v_r\in\mathcal A([0,r])$ such that $q_j|_{[0,r]}\to v_r$ uniformly as $j$ increases through $S_r$, for $1\le r\le m$. Include the empty state. From any state of length $m$, discard indices below $m+1$ from $S_m$ and enumerate the remaining infinite set increasingly. The hereditary extraction hypothesis at $m+1$ gives an infinite subset $S_{m+1}$ and an admissible limit $v_{m+1}$, so appending them is a successor state. Thus the relation of extension by one stage is entire on the set of such finite states. Dependent Choice, starting from the empty state, supplies nested states of all lengths and hence compatible sets $S_m$ and limits $v_m$. [given, F1, F2]

2.1 Set $n_0=0$ and let $n_k$ be the least member of $S_k$ greater than $n_{k-1}$ for $k\ge1$. Each $S_k$ is infinite, so this defines strictly increasing indices with $n_k\ge k$. For fixed $m$ and $k\ge m$, $n_k\in S_k\subset S_m$; thus the diagonal tail is a subsequence of the $S_m$-indexed sequence and converges uniformly on $[0,m]$ to $v_m$. In epsilon terms, once every index in $S_m$ above a fixed threshold works uniformly on $[0,m]$, every sufficiently late $n_k$ exceeds that threshold and works on the whole interval as well. [step 1.1, F1]

3.1 Fix $m\ge1$ and $t\in[0,m]$. The same sequence $q_{n_k}(t)$ converges to $v_m(t)$ by step 2.1 and to $v_{m+1}(t)$ by that step at $m+1$ followed by restriction. Uniqueness of metric limits gives $v_{m+1}(t)=v_m(t)$. Hence all the $v_m$ agree on overlaps, and setting $q(t)=v_m(t)$ for any integer $m\ge t$ with $m\ge1$ defines one map on $[0,\infty)$. [step 2.1, F1, F3]

4.1 For every finite $t\ge0$ choose an integer $m>t$. On a relative interval neighborhood of $t$ in $[0,\infty)$ contained in $[0,m]$, the map $q$ agrees with the continuous admissible curve $v_m$. Thus $q$ is continuous and the local admissibility contract gives $q\in\mathcal A([0,\infty))$. In particular, each positive integer time lies strictly inside a larger interval carrying one admissible $v_m$, so gluing inserts no additional reflection or corner. For finite $T\ge0$ choose an integer $m\ge\max\{1,T\}$; step 2.1 restricted to $[0,T]$ gives the claimed uniform convergence to $q$. In the wave application, the local phase-curve convention gives the asserted complete forward generalized ray by spatial projection. No step selects a unique curve through any phase point. [given, step 2.1, step 3.1, F1, F4] ∎
