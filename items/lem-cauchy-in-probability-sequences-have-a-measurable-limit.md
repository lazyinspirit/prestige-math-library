---
id: lem-cauchy-in-probability-sequences-have-a-measurable-limit
title: "Cauchy sequences in probability have a measurable limit"
kind: lemma
status: draft
origin: pipeline
deps: ["def-convergence-in-probability", "cor-first-borel-cantelli-lemma-for-events", "thm-series-cauchy-criterion", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable", "thm-almost-sure-convergence-implies-convergence-in-probability", "thm-finite-and-countable-subadditivity-of-measures"]
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
    - title: "Varadhan, Chapter 3, Exercise 3.11, p. 65"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Choose strictly increasing least indices n_k so that all pairs beyond n_k have probability at most 2^-k of separation exceeding 2^-k. BC1 gives eventual summability of the selected successive differences, so the subsequence converges a.s. by completeness of R. Extend its finite limit by zero off its measurable convergence event. Triangle and union bounds, first taking k large and then n>=n_k, show convergence of the entire sequence in probability."
---

## Statement

Let $(Y_n)_{n\ge1}$ be real random variables on one probability space. Suppose that for every $\varepsilon,\eta>0$ there is $N$ such that
$$\mathbb P(|Y_n-Y_m|>\varepsilon)<\eta\quad(n,m\ge N).$$
Then there is a finite measurable real random variable $Y$ such that $Y_n\to Y$ in probability.

## Facts & Assumptions

[F1] [[def-convergence-in-probability]]: For real random variables $(X_n)$ and $X$ on one probability space, write $X_n\to X$ **in probability** when, for every $\varepsilon>0$, $\mathbb P(|X_n-X|>\varepsilon)\longrightarrow0.$ This is precisely def-convergence-in-measure for the probability measure.

[F2] [[cor-first-borel-cantelli-lemma-for-events]]: Let $(A_n)_{n\in\mathbb N}$ be events in a probability space. If $\sum_{n=0}^\infty \mathbb P(A_n)<+\infty,$ then $\mathbb P(A_n\ \mathrm{i.o.})=0.$ No independence hypothesis is needed.

[F3] [[thm-series-cauchy-criterion]]: Let $(a_k)$ be a sequence of reals, with partial sums $s_n = \sum_{k<n} a_k$ (def-series). Then $\sum a_k$ converges **if and only if** $\text{for every real } \varepsilon > 0 \text{ there is } N \in \mathbb{N} \text{ such that } \Big| \sum_{k=m+1}^{n} a_k \Big| < \varepsilon \text{ for all } n > m \ge N .$ The block $\sum_{k=m+1}^{n} a_k$ is the finite sum $a_{m+1} + \dots + a_n$ of def-finite-sum, and it equals $s_{n+1} - s_{m+1}$. This is the Cauchy criterion transported from sequences to series. Its value is that it decides convergence without producing, or even naming, the sum.

[F4] [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]: Let $(X,\mathcal{A})$ be a measurable space and let $f_n : X \to \overline{\mathbb{R}}$ be measurable for every $n \in \mathbb{N}$. Then the functions $\sup_n f_n,\qquad \inf_n f_n,\qquad \limsup_n f_n,\qquad \liminf_n f_n$ are measurable. The set $\{\, x : \lim_n f_n(x) \text{ exists in } \overline{\mathbb{R}} \,\}$ is measurable. In particular, if $f_n \to f$ pointwise, then $f$ is measurable.

[F5] [[thm-almost-sure-convergence-implies-convergence-in-probability]]: If $X_n\to X$ almost surely, then $X_n\to X$ in probability.

[F6] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then $\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$ For every $m\in\mathbb N$ one also has $\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$ including $m=0$, where both sides are $0$.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Set $n_0=1$. For each $k\ge1$, choose recursively the least integer $n_k>n_{k-1}$ for which all pairs of indices at least $n_k$ have probability less than $2^{-k}$ of separation exceeding $2^{-k}$. Such an integer exists by the hypothesis. Thus, for every $k\ge1$, $\mathbb P(|Y_{n_{k+1}}-Y_{n_k}|>2^{-k})<2^{-k}$. The first Borel–Cantelli lemma gives a measurable probability-one event where these inequalities fail only finitely often. [F2, given]

2.1 On that event the series of absolute successive differences is finite: its finite initial part is finite because all values are real, and its remaining part is bounded by a geometric series. Therefore the subsequence is Cauchy and has a finite real limit. Its finite convergence event is measurable: intersect the measurable extended-limit event with $\{\sup_k|Y_{n_k}|<\infty\}$, a countable union of countable intersections. Define $Y$ to be this limit there and zero outside. The corresponding restricted sequence converges everywhere, so measurable limits give a real random variable. [F3, F4, step 1.1, algebra]

3.1 This subsequence converges almost surely and hence in probability to $Y$. Fix $\varepsilon,\eta>0$, choose $N$ so late-pair errors at $\varepsilon/2$ are below $\eta/2$, and then choose $k$ with $n_k\ge N$ and $\mathbb P(|Y_{n_k}-Y|>\varepsilon/2)<\eta/2$. For all $n\ge N$, the triangle and union bounds give $\mathbb P(|Y_n-Y|>\varepsilon)<\eta$. This proves convergence of the full sequence, including constant sequences. [F5, F6, F1, step 2.1, given, algebra] ∎
