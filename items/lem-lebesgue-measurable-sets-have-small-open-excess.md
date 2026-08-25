---
id: lem-lebesgue-measurable-sets-have-small-open-excess
kind: lemma
title: "For a Lebesgue measurable set and every positive $\\varepsilon$ there is an open superset whose difference from it has outer measure below $\\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-outer-regularity-for-arbitrary-subsets, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-measure-of-a-set-difference, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, def-outer-measure, thm-borel-sets-are-lebesgue-measurable, def-half-open-box, thm-metric-open-set-algebra, def-metric-topology, thm-geometric-series, def-nonnegative-extended-series, lem-finite-sum-laws, def-finite-sum, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Theorem 2.24"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.2.7"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). For every Lebesgue measurable
$E \subseteq \mathbb{R}^n$ and every real $\varepsilon > 0$ there is an open set
$U$ with

$$E \subseteq U \qquad\text{and}\qquad \lambda_n^*(U \setminus E) < \varepsilon .$$

No finiteness hypothesis on $\lambda_n(E)$ is imposed; the excess is measured by
the outer measure of the difference, not by a difference of measures, which is
what lets the statement hold when $\lambda_n(E) = +\infty$.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, a Lebesgue measurable set $E$, and a real $\varepsilon>0$.

[L1] Assuming countable choice, $\lambda_n^*(E) = \inf\{\lambda_n(U) : U \subseteq \mathbb{R}^n$ open and $E \subseteq U\}$ for every subset $E$ ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[L2] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra, $\lambda_n$ is a complete measure on it, and $\lambda_n$ is the restriction of $\lambda_n^*$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L3] Assuming countable choice, $\lambda_n^*$ is an outer measure on $\mathbb{R}^n$, hence monotone and countably subadditive ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]], [[def-outer-measure]]).

[L4] Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]]).

[L5] Every bounded subset $E \subseteq \mathbb{R}^n$ has $\lambda_n^*(E) < +\infty$ ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[L6] Every set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue measurable with $\lambda_n(R) = \prod_{i<n}(b_i-a_i)$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]), and $(u,v]^n := B(\mathbf{u},\mathbf{v})$ ([[def-half-open-box]]).

[F1] Let $\mu$ be a measure and let $A\subseteq B$ be measurable with $\mu(A)<+\infty$; then $\mu(B)=\mu(A)+\mu(B\setminus A)$ ([[prop-measure-of-a-set-difference]]).

[F2] An arbitrary union of open sets is open ([[thm-metric-open-set-algebra]], claim 2; [[def-metric-topology]]).

[F3] If $|r| < 1$ then $\sum_{k=0}^{\infty} r^{k} = 1/(1-r)$; in particular $\sum_{k=0}^{\infty} 2^{-k} = 2$ ([[thm-geometric-series]]).

[F4] The **nonnegative extended sum** of a sequence in $[0,+\infty]$ is $\sum_{k=0}^{\infty}a_k:=\sup_{n\in\mathbb N}s_n$, the supremum of its nondecreasing partial sums ([[def-nonnegative-extended-series]]).

[F5] For sequences of reals, $\sum_{k<n} \lambda a_k = \lambda \sum_{k<n} a_k$, and if $a_k \le b_k$ whenever $0\le k<n$ then $\sum_{k<n}a_k \le \sum_{k<n}b_k$ ([[lem-finite-sum-laws]], claims 2 and 4; [[def-finite-sum]]).

[F6] The **Axiom of Countable Choice** says that for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n) \in X_n$ for every $n \in \mathbb{N}$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first $\lambda_n(E) < +\infty$ and let $\eta$ be a positive real. Outer regularity supplies an open $U \supseteq E$ with $\lambda_n(U) < \lambda_n(E)+\eta$; both $E$ and $U$ are measurable, so the difference formula gives $\lambda_n(U) = \lambda_n(E)+\lambda_n(U\setminus E)$ and hence $\lambda_n^*(U\setminus E) = \lambda_n(U\setminus E) < \eta$. [L1, L2, L4, F1]

1.2 For $k \in \mathbb{N}$ put $S_k := E \cap \big((-(k+1),k+1]^n \setminus (-k,k]^n\big)$; each $S_k$ is Lebesgue measurable, being an intersection and difference of measurable sets, is bounded and therefore of finite measure, and $\bigcup_{k\in\mathbb{N}}S_k = E$ because the cubes $(-k,k]^n$ increase to $\mathbb{R}^n$. [L2, L5, L6]

2.1 By step 1.1 applied to each $S_k$ with $\eta := \varepsilon 2^{-k-2}$, the family of open $V \supseteq S_k$ with $\lambda_n^*(V\setminus S_k) < \varepsilon 2^{-k-2}$ is nonempty for every $k$, so countable choice selects such a $U_k$ for every $k$; the union $U := \bigcup_{k}U_k$ is open and contains $E$. [step 1.1, step 1.2, F2, F6]

3.1 Since $S_k \subseteq E$, one has $U\setminus E \subseteq \bigcup_k(U_k\setminus S_k)$, so countable subadditivity gives $\lambda_n^*(U\setminus E) \le \sum_{k=0}^{\infty}\varepsilon 2^{-k-2}$, whose partial sums are $\varepsilon 2^{-2}\sum_{k<N}2^{-k} \le \varepsilon/2$, so the sum is at most $\varepsilon/2 < \varepsilon$. [step 1.2, step 2.1, L3, F3, F4, F5] ∎
