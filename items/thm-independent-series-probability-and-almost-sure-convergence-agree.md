---
id: thm-independent-series-probability-and-almost-sure-convergence-agree
title: "Convergence in probability and almost surely agree for independent series"
kind: theorem
status: draft
origin: pipeline
deps: ["lem-levy-maximal-inequality-for-independent-tail-sums", "def-almost-sure-convergence-of-a-random-series", "def-convergence-in-probability", "thm-continuity-from-below-for-measures", "thm-continuity-from-above-for-measures", "thm-series-cauchy-criterion", "thm-almost-sure-convergence-implies-convergence-in-probability", "thm-limits-in-probability-are-unique-almost-surely", "lem-cauchy-in-probability-sequences-have-a-measurable-limit"]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 3.9, implication (ii) to (iii), pp. 63\u201365"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Probability convergence makes all sufficiently late increments uniformly small in probability. Apply the preceding maximal bound to finite tail blocks, pass to the infinite supremum, and use decreasing Cauchy oscillations. Identify limits by uniqueness. Distribution-only convergence is deferred to the characteristic-function page. The preceding completeness lemma makes the Cauchy-in-probability formulation equivalent to convergence in probability."
---

## Statement

For partial sums $S_n=\sum_{k=1}^nX_k$ of independent real random variables $(X_n)_{n\ge1}$ on one probability space, the following are equivalent: $(S_n)$ is Cauchy in probability; $(S_n)$ converges in probability to a finite real random variable; $(S_n)$ converges almost surely to a finite real random variable. The probability and almost-sure limits agree almost surely.

## Facts & Assumptions

[F1] [[lem-levy-maximal-inequality-for-independent-tail-sums]]: Let $X_1,\ldots,X_n$ be independent real random variables, $n\ge1$, with $S_k=\sum_{j=1}^kX_j$. Let $l>0$ and $0\le\delta<1$. If $\mathbb P\left(\left|\sum_{j=i}^nX_j\right|\ge l/2\right)\le\delta\quad(1\le i\le n),$ then $\mathbb P(\max_{k\le n}|S_k|\ge l)\le\frac\delta{1-\delta}.$ No centering or moment assumption is required.

[F2] [[def-almost-sure-convergence-of-a-random-series]]: For real random variables $(X_n)_{n\ge1}$, the series $\sum_{n\ge1}X_n$ **converges almost surely** if its partial sums $S_n$ converge to a finite real limit on an event of probability one, as in def-almost-sure-convergence-of-random-variables. With $S_0=0$ from def-partial-sums-and-sample-means, its convergence event is $C=\bigcap_{r\ge1}\bigcup_{N\ge1}\bigcap_{j\ge i\ge N}\{|S_j-S_i|<1/r\}.$ This is exactly the real Cauchy condition, with the indexing of thm-series-cauchy-criterion shifted by one. Measurable arithmetic makes every event in this countable expression measurable. For any fixed $m$, the union over $N$ may be restricted to $N\ge m$; then each difference uses only $X_{m+1},X_{m+2},\ldots$. Thus $C$ is in the tail sigma-algebra, without assuming independence. Under independence, cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event gives $\mathbb P(C)\in\{0,1\}$. Set $S=\lim_n S_n$ on $C$ and $S=0$ off $C$. The functions $\mathbf1_C S_n$ converge everywhere to $S$, so thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable and thm-arithmetic-and-lattice-operations-preserve-measurability make $S$ measurable. For Borel sets $B_n$, the event $\{X_n\in B_n\text{ infinitely often}\}=\bigcap_m\bigcup_{n\ge m}\{X_n\in B_n\}$ is likewise tail measurable. Changing finitely many summands adds an eventually constant finite difference to $S_n$; divided by deterministic $c_n>0$ tending to infinity that difference tends to zero, so the normalized limsup is unchanged. The sign of the unnormalized limsup need not be unchanged: the all-zero sequence has limsup zero, while changing its first term to $1$ makes the limsup of partial sums equal to $1$.

[F3] [[def-convergence-in-probability]]: For real random variables $(X_n)$ and $X$ on one probability space, write $X_n\to X$ **in probability** when, for every $\varepsilon>0$, $\mathbb P(|X_n-X|>\varepsilon)\longrightarrow0.$ This is precisely def-convergence-in-measure for the probability measure.

[F4] [[thm-continuity-from-below-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then $\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$ No finiteness hypothesis is required.

[F5] [[thm-continuity-from-above-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be a decreasing sequence of measurable sets for a measure $\mu$. If $\mu(E_{n_0})<+\infty$ for some $n_0$, then $\mu\left(\bigcap_{n\in\mathbb N}E_n\right)=\inf_{n\in\mathbb N}\mu(E_n).$

[F6] [[thm-series-cauchy-criterion]]: Let $(a_k)$ be a sequence of reals, with partial sums $s_n = \sum_{k<n} a_k$ (def-series). Then $\sum a_k$ converges **if and only if** $\text{for every real } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } \Big| \sum_{k=m+1}^{n} a_k \Big| < \varepsilon \text{ for all } n > m \ge N .$ The block $\sum_{k=m+1}^{n} a_k$ is the finite sum $a_{m+1} + \dots + a_n$ of def-finite-sum, and it equals $s_{n+1} - s_{m+1}$. This is the Cauchy criterion transported from sequences to series. Its value is that it decides convergence without producing, or even naming, the sum.

[F7] [[thm-almost-sure-convergence-implies-convergence-in-probability]]: If $X_n\to X$ almost surely, then $X_n\to X$ in probability.

[F8] [[thm-limits-in-probability-are-unique-almost-surely]]: If $X_n\to X$ and $X_n\to Y$ in probability, then $X=Y$ almost surely.

[F9] [[lem-cauchy-in-probability-sequences-have-a-measurable-limit]]: Let $(Y_n)_{n\ge1}$ be real random variables on one probability space. Suppose that for every $\varepsilon,\eta>0$ there is $N$ such that $\mathbb P(|Y_n-Y_m|>\varepsilon)<\eta\quad(n,m\ge N).$ Then there is a finite measurable real random variable $Y$ such that $Y_n\to Y$ in probability.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Convergence in probability implies the Cauchy condition: for $\varepsilon>0$, the event $|S_n-S_m|>\varepsilon$ is contained in $\{|S_n-S|>\varepsilon/2\}\cup\{|S_m-S|>\varepsilon/2\}$, whose probabilities are uniformly small for sufficiently large $n,m$. Conversely the Cauchy-in-probability completeness lemma gives a measurable finite probability limit. [F3, F9, given, algebra]

2.1 Assume the Cauchy condition. Fix $t>0$ and $0<\delta<1$. For all sufficiently large $m$ and all $N>m$, every tail of the finite block $X_{m+1},\ldots,X_N$ is an increment $S_N-S_{i-1}$ with both indices sufficiently large. Its probability of magnitude at least $t/2$ is at most $\delta$: use the Cauchy condition at the strictly smaller tolerance $t/4$. The tail maximal lemma gives $\mathbb P(\max_{m<j\le N}|S_j-S_m|\ge t)\le\delta/(1-\delta)$. [F1, step 1.1, given]

3.1 Pass to the infinite strict supremum by continuity from below. Let $w_m=\sup_{i,j\ge m}|S_i-S_j|$. Since $w_m\le2\sup_{j\ge m}|S_j-S_m|$, the previous estimate bounds $\mathbb P(w_m>2t)$ by $\delta/(1-\delta)$ for sufficiently large $m$. These events decrease with $m$. Continuity from above and arbitrariness of $\delta$ show $\mathbb P(\bigcap_m\{w_m>2t\})=0$. Take $t=1/r$ for all positive integers $r$. Outside a single null set the partial sums are real Cauchy, hence converge finitely; their limit extended by zero is measurable as in the series definition. [F4, F5, F6, F2, step 2.1]

4.1 Almost-sure convergence implies convergence in probability. Its probability limit and any probability limit from the first step coincide almost surely by uniqueness. Thus all three conditions are equivalent. No moment hypothesis was introduced, and zero or deterministic increments cause no exception. [F7, F8, step 1.1, step 3.1] ∎
