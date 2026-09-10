---
id: thm-kolmogorov-convergence-criterion
title: "Kolmogorov convergence criterion"
kind: theorem
status: published
origin: pipeline
deps: [thm-kolmogorov-maximal-inequality, def-almost-sure-convergence-of-a-random-series, thm-series-cauchy-criterion, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, lem-variance-and-covariance-identities-for-random-variables, thm-fatou-lemma, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-finite-and-countable-subadditivity-of-measures, def-convergence-in-lp-for-random-variables]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-fatou-and-choice-contract-repair
    delegated_by: owner
sources:
  references:
    - title: "Theorem 2.5.6, pp. 84\u201385"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Theorem 3.10, pp. 65\u201366; L2 strengthening is proved locally by Fatou"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Maximal inequality and monotone tail oscillations give one measurable probability-one Cauchy event. Apply Fatou to the supplied partial sums restricted to that event, first for square integrability of its limit and then for the L2 tail bound; no representative choice or abstract L2 completeness is used."
---

## Statement

For independent centered square-integrable real random variables $(X_n)_{n\ge1}$, if $\sum_{n\ge1}\operatorname{Var}(X_n)<\infty$, then $\sum_{n\ge1}X_n$ converges almost surely and in $L^2$ to the same finite real random variable.

## Facts & Assumptions

[F1] [[thm-kolmogorov-maximal-inequality]]: Let $X_1,\ldots,X_n$ be independent centered square-integrable real random variables, $n\ge1$, and $S_k=\sum_{j=1}^kX_j$. For every $\lambda>0$, $\mathbb P\left(\max_{1\le k\le n}|S_k|\ge\lambda\right)\le\frac{\operatorname{Var}(S_n)}{\lambda^2}=\frac{\sum_{j=1}^n\operatorname{Var}(X_j)}{\lambda^2}.$ Thus controlling the whole finite maximum costs no larger bound than controlling the final sum by Chebyshev.

[F2] [[def-almost-sure-convergence-of-a-random-series]]: For real random variables $(X_n)_{n\ge1}$, the series $\sum_{n\ge1}X_n$ **converges almost surely** if its partial sums $S_n$ converge to a finite real limit on an event of probability one, as in def-almost-sure-convergence-of-random-variables. With $S_0=0$ from def-partial-sums-and-sample-means, its convergence event is $C=\bigcap_{r\ge1}\bigcup_{N\ge1}\bigcap_{j\ge i\ge N}\{|S_j-S_i|<1/r\}.$ This is exactly the real Cauchy condition, with the indexing of thm-series-cauchy-criterion shifted by one. Measurable arithmetic makes every event in this countable expression measurable. For any fixed $m$, the union over $N$ may be restricted to $N\ge m$; then each difference uses only $X_{m+1},X_{m+2},\ldots$. Thus $C$ is in the tail sigma-algebra, without assuming independence. Under independence, cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event gives $\mathbb P(C)\in\{0,1\}$. Set $S=\lim_n S_n$ on $C$ and $S=0$ off $C$. The functions $\mathbf1_C S_n$ converge everywhere to $S$, so thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable and thm-arithmetic-and-lattice-operations-preserve-measurability make $S$ measurable. For Borel sets $B_n$, the event $\{X_n\in B_n\text{ infinitely often}\}=\bigcap_m\bigcup_{n\ge m}\{X_n\in B_n\}$ is likewise tail measurable. Changing finitely many summands adds an eventually constant finite difference to $S_n$; divided by deterministic $c_n>0$ tending to infinity that difference tends to zero, so the normalized limsup is unchanged. The sign of the unnormalized limsup need not be unchanged: the all-zero sequence has limsup zero, while changing its first term to $1$ makes the limsup of partial sums equal to $1$.

[F3] [[thm-series-cauchy-criterion]]: Let $(a_k)$ be a sequence of reals, with partial sums $s_n = \sum_{k<n} a_k$ (def-series). Then $\sum a_k$ converges **if and only if** $\text{for every real } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } \Big| \sum_{k=m+1}^{n} a_k \Big| < \varepsilon \text{ for all } n > m \ge N .$ The block $\sum_{k=m+1}^{n} a_k$ is the finite sum $a_{m+1} + \dots + a_n$ of def-finite-sum, and it equals $s_{n+1} - s_{m+1}$. This is the Cauchy criterion transported from sequences to series. Its value is that it decides convergence without producing, or even naming, the sum.

[F4] [[thm-continuity-from-below-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then $\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$ No finiteness hypothesis is required.

[F5] [[thm-continuity-from-above-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be a decreasing sequence of measurable sets for a measure $\mu$. If $\mu(E_{n_0})<+\infty$ for some $n_0$, then $\mu\left(\bigcap_{n\in\mathbb N}E_n\right)=\inf_{n\in\mathbb N}\mu(E_n).$

[F6] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space. Then $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$ $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$ Moreover, covariance is symmetric and bilinear on finite linear combinations. On finite full-power-set probability spaces these formulas reduce to the published finite identities.

[F7] Fatou's lemma holds for supplied nonnegative measurable functions ([[thm-fatou-lemma]]); the nonnegative integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F8] Integrable functions equal almost everywhere have equal integrals ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F9] A supplied countable union of measurable null sets is null ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F10] For square-integrable real random variables, $L^2$ convergence means $\mathbb E|S_n-S|^2\to0$ ([[def-convergence-in-lp-for-random-variables]]).

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Write $S_0=0$, $S_n=\sum_{k=1}^nX_k$, and $v_m=\sum_{k>m}\operatorname{Var}(X_k)$. Applying the maximal inequality to each block $X_{m+1},\ldots,X_N$ and then continuity from below gives $\mathbb P(\sup_{j\ge m}|S_j-S_m|>t)\le v_m/t^2$ for $t>0$. The strict supremum event is the increasing union of finite strict maximum events, each bounded by the corresponding non-strict estimate. [F1, F4, given]

1.2 For $n>m\ge0$, the variance identity in the maximal inequality gives $\mathbb E|S_n-S_m|^2=\sum_{k=m+1}^n\operatorname{Var}(X_k)\le v_m$, where $v_m\to0$ and $v_0<\infty$. In particular all supplied partial sums are square-integrable. [F1, F6, given]

2.1 Let $w_m=\sup_{i,j\ge m}|S_i-S_j|$. Its strict level events are countable unions of measurable events and decrease with $m$. Since $w_m\le2\sup_{j\ge m}|S_j-S_m|$, continuity from above gives $\mathbb P(\bigcap_m\{w_m>2/r\})=0$ for every integer $r\ge1$. By [F9], the complement $C$ of the union of these null events is measurable and has probability one. On $C$, for each $r$ some $m$ has $w_m\le2/r$; this is the real Cauchy condition. Let $S$ be its finite pointwise limit on $C$ and zero off $C$. The measurable functions $U_n=\mathbf1_C S_n$ converge everywhere to $S$, which is measurable by the construction in [F2]. [F5, F3, F2, F9, step 1.1]

3.1 Fatou applied to $|U_n|^2$ and monotonicity give $\mathbb E|S|^2\le\liminf_n\mathbb E|U_n|^2\le v_0<\infty$, so $S$ is square-integrable. For fixed $m$, the functions $|U_n-U_m|^2$ converge everywhere to $|S-U_m|^2$, and $|U_n-U_m|^2=\mathbf1_C|S_n-S_m|^2$. Fatou and step 1.2 therefore give $\mathbb E|S-U_m|^2\le v_m$. Since $S_m,U_m,S$ are square-integrable, both squared differences with $S$ are integrable (use $|a-b|^2\le2|a|^2+2|b|^2$); they agree almost everywhere. Thus [F8] gives $\mathbb E|S-S_m|^2=\mathbb E|S-U_m|^2\le v_m\to0$. By [F10] this is convergence in $L^2$ to the very same $S$ as the almost-sure limit. Zero variances and identically zero tails are included. [F7, F8, F10, step 1.2, step 2.1] ∎

## Remarks

No Choice assumption is required by this proof. The random variables and
their partial sums are already supplied as measurable functions; the conull
set and limit are explicitly defined. Abstract completeness for a sequence
of $L^2$ equivalence classes may require countable choice of representatives,
but that theorem is not used here.
