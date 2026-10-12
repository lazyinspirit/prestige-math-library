---
id: thm-lebesgue-outer-regularity-for-arbitrary-subsets
kind: theorem
title: "Assuming countable choice, the Lebesgue outer measure of an arbitrary subset of $\\mathbb{R}^n$ is the infimum of the measures of the open sets containing it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lebesgue-outer-measure, thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume, thm-lebesgue-measure-is-a-complete-measure, lem-elementary-sets-admit-compact-inner-and-open-outer-approximations, thm-borel-sets-are-lebesgue-measurable, thm-elementary-volume-is-well-defined, prop-elementary-volume-is-finitely-additive-and-monotone, def-elementary-set-in-rn, def-metric-topology, def-metric-interior-closure-boundary, thm-metric-open-set-algebra, def-outer-measure, def-nonnegative-extended-series, thm-well-ordering-principle, thm-geometric-series, lem-finite-sum-laws, def-finite-sum, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "outer regularity"
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Lemma 1.2.12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$ and **assume the Axiom of Countable Choice**
([[def-countable-choice]]). For **every** subset $E \subseteq \mathbb{R}^n$,
measurable or not,

$$\lambda_n^*(E) \;=\; \inf\,\{\, \lambda_n(U) \;:\; U \subseteq \mathbb{R}^n \text{ open and } E \subseteq U \,\},$$

the infimum being taken in $[0,+\infty]$ over a family that is nonempty because
$\mathbb{R}^n$ is open.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, and a subset $E \subseteq \mathbb{R}^n$.

[L1] $\lambda_n^*(E) := \inf\{\sum_{k=0}^{\infty}\mu_0(A_k) : A_k \in \mathcal{E}_n$ for every $k$ and $E \subseteq \bigcup_k A_k\}$ ([[def-lebesgue-outer-measure]], [[def-elementary-set-in-rn]]).

[L2] Assuming countable choice, $\lambda_n^*$ is an outer measure on $\mathbb{R}^n$, hence monotone and countably subadditive, and $\lambda_n^*(A)=\mu_0(A)$ for every elementary set $A$ ([[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]], [[def-outer-measure]]).

[L3] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra and $\lambda_n$ is a complete measure on it ([[thm-lebesgue-measure-is-a-complete-measure]]).

[L4] Assuming countable choice, every Borel subset of $\mathbb{R}^n$ is Lebesgue measurable; in particular every open set is ([[thm-borel-sets-are-lebesgue-measurable]]).

[L5] $A^{+\delta}$ is an elementary set determined by $A$ and $\delta$ alone, it contains $A$, and every point of $A$ is an interior point of $A^{+\delta}$; and for every real $\varepsilon>0$ there is $m \in \mathbb{N}$ with $\mu_0\big(A^{+1/(m+1)}\big) \le \mu_0(A) + \varepsilon$ ([[lem-elementary-sets-admit-compact-inner-and-open-outer-approximations]], claims 1 and 2).

[L6] Elementary volume is finitely additive on pairwise disjoint elementary sets, monotone, and finitely subadditive ([[prop-elementary-volume-is-finitely-additive-and-monotone]], [[thm-elementary-volume-is-well-defined]]).

[F1] The interior $\operatorname{int}(A)$ is open, and an arbitrary union of open sets is open ([[def-metric-interior-closure-boundary]], [[def-metric-topology]], [[thm-metric-open-set-algebra]], claim 2).

[F2] The **nonnegative extended sum** of a sequence in $[0,+\infty]$ is $\sum_{k=0}^{\infty}a_k:=\sup_{n\in\mathbb N}s_n$, the supremum of its nondecreasing partial sums ([[def-nonnegative-extended-series]]).

[F3] Every nonempty subset $S \subseteq \mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[F4] If $|r| < 1$ then $\sum_{k=0}^{\infty} r^{k} = 1/(1-r)$; in particular $\sum_{k=0}^{\infty} 2^{-k} = 2$ ([[thm-geometric-series]]).

[F5] For sequences of reals, $\sum_{k<n}(a_k+b_k) = \sum_{k<n}a_k+\sum_{k<n}b_k$, and if $a_k \le b_k$ whenever $0\le k<n$ then $\sum_{k<n}a_k \le \sum_{k<n}b_k$ ([[lem-finite-sum-laws]], claims 1 and 4; [[def-finite-sum]]).

[F6] The **Axiom of Countable Choice** says that for every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that $f(n) \in X_n$ for every $n \in \mathbb{N}$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Every open $U$ is Lebesgue measurable with $\lambda_n(U)=\lambda_n^*(U)$, so monotonicity of the outer measure gives $\lambda_n^*(E) \le \lambda_n(U)$ for every open $U \supseteq E$, and therefore $\lambda_n^*(E)$ is a lower bound of the family whose infimum is displayed; that family is nonempty since $\mathbb{R}^n$ is open. [L2, L3, L4, F1]

1.2 Suppose $\lambda_n^*(E) < +\infty$ and let $\varepsilon$ be a positive real; by the definition of $\lambda_n^*$ as an infimum there is a sequence $(A_k)_{k\in\mathbb{N}}$ of elementary sets with $E \subseteq \bigcup_k A_k$ and $\sum_{k=0}^{\infty}\mu_0(A_k) \le \lambda_n^*(E)+\varepsilon$. [L1]

2.1 For each $k$ let $m_k$ be the least natural number with $\mu_0\big(A_k^{+1/(m_k+1)}\big) \le \mu_0(A_k)+\varepsilon 2^{-k}$, which exists because that set of naturals is nonempty and $\mathbb{N}$ is well ordered, and put $U_k := \operatorname{int}\big(A_k^{+1/(m_k+1)}\big)$; each $U_k$ is open and contains $A_k$, so $U := \bigcup_{k}U_k$ is open and contains $E$. [step 1.2, L5, F1, F3]

3.1 Countable subadditivity, monotonicity and the agreement of $\lambda_n^*$ with $\mu_0$ on elementary sets give $\lambda_n(U) \le \sum_{k=0}^{\infty}\lambda_n^*(U_k) \le \sum_{k=0}^{\infty}\mu_0\big(A_k^{+1/(m_k+1)}\big)$; every partial sum of the last series is at most $\sum_{k<N}\mu_0(A_k)+\varepsilon\sum_{k<N}2^{-k} \le \sum_{k=0}^{\infty}\mu_0(A_k)+2\varepsilon$, so the series itself, being the supremum of its partial sums, is at most $\lambda_n^*(E)+3\varepsilon$. [step 1.2, step 2.1, L2, L5, L6, F2, F4, F5]

4.1 So when $\lambda_n^*(E)<+\infty$ the infimum is at most $\lambda_n^*(E)+3\varepsilon$ for every positive real $\varepsilon$ and hence at most $\lambda_n^*(E)$; when $\lambda_n^*(E)=+\infty$ the infimum is at most $+\infty$ for the same reason of triviality; with step 1.1 the infimum equals $\lambda_n^*(E)$ in both cases. [step 1.1, step 3.1, F6] ∎
