---
title: Uniform spectral control transfers past connectivity
status: draft
research_item: lem-author-fc0d6c95270f-uniform-spectrum-after-connectivity
dependency_level: 4
---

## Prerequisites

- [def-author-fc0d6c95270f-normalized-laplacian](item-def-author-fc0d6c95270f-normalized-laplacian)
- [lem-author-fc0d6c95270f-spectral-window-ratio](item-lem-author-fc0d6c95270f-spectral-window-ratio)
- [lem-author-fc0d6c95270f-exponential-process-transfer](item-lem-author-fc0d6c95270f-exponential-process-transfer)
- [lem-author-fc0d6c95270f-isolated-vertex-before-onset](item-lem-author-fc0d6c95270f-isolated-vertex-before-onset)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Statement

Assume countable choice. Use the independent-label process, its exponential-clock form $H_t$, and $p_0=3\log n/(4n)$, $t_0=-\log(1-p_0)$, $d(t)=(n-1)(1-e^{-t})$. Let $Q$ be any predicate on connected graphs with the deterministic property that $\kappa(G)<2$ implies $Q(G)$. Suppose a constant $C>0$, independent of $n$, and events $E_n$ of probability tending to one satisfy: for every $t\ge t_0$ for which $H_t$ is connected, $\eta(H_t)<C/\sqrt{d(t)}$. Then with probability tending to one, $Q(G(n,m))$ holds simultaneously for every $\tau\le m\le\binom n2$.

## Facts & Assumptions

[F1] Normalized Laplacians and the quantities $\eta$ and $\kappa$ are defined in [def-author-fc0d6c95270f-normalized-laplacian](item-def-author-fc0d6c95270f-normalized-laplacian); a spectral window of width less than $1/3$ implies $\kappa<2$ by [lem-author-fc0d6c95270f-spectral-window-ratio](item-lem-author-fc0d6c95270f-spectral-window-ratio).

[F2] The exponential-clock process has the uniform edge ordering, and a pathwise assertion after its connectivity time transfers to every later edge index ([lem-author-fc0d6c95270f-exponential-process-transfer](item-lem-author-fc0d6c95270f-exponential-process-transfer)).

[F3] With probability tending to one the graph at $p_0$ has an isolated vertex, so the connectivity time is later than $t_0$ ([lem-author-fc0d6c95270f-isolated-vertex-before-onset](item-lem-author-fc0d6c95270f-isolated-vertex-before-onset)).

[F4] A probability measure is a nonnegative countably additive measure of total mass one, and high probability means convergence of event probabilities to one ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure), [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)).

[A1] Countable choice is assumed in the sense of [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice); it supplies the hypothesis required to invoke the process-transfer and isolated-vertex results in [F2] and [F3].

## Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 Under [A1], intersect $E_n$ with the event in [F3] and the probability-one coupling event in [F2]. The complement of this intersection has probability at most the sum of the first two failure probabilities: decompose the union into the first event and the portion of the second outside it, use additivity on these disjoint sets, and then monotonicity. Thus the intersection still has probability tending to one. [A1, F2, F3, F4, algebra]

2.1 On this intersection, the connectivity time $s_\tau$ exceeds $t_0$. For every $t\ge s_\tau$, connectedness persists and the assumed bound applies. Since $p(t)$ is increasing, $d(t)\ge d(t_0)=3(n-1)\log n/(4n)\to\infty$. Therefore, for all sufficiently large $n$, the common upper bound $C/\sqrt{d(t_0)}$ is less than $1/3$, simultaneously for all such $t$. [given, F2, F3, F4, step 1.1, algebra]

3.1 By [F1], every graph on this whole time interval has $\kappa<2$, so the assumed deterministic implication gives $Q(H_t)$. Applying [F2] at every edge arrival proves the single simultaneous assertion for all indices from $\tau$ to $\binom n2$. The intersection already has probability tending to one, which proves the claim. [given, F1, F2, step 1.1, step 2.1] ∎
