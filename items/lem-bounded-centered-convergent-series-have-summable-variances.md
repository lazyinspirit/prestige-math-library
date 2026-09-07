---
id: lem-bounded-centered-convergent-series-have-summable-variances
title: "Bounded centered convergent series have summable variances"
kind: lemma
status: draft
origin: pipeline
deps: ["def-almost-sure-convergence-of-a-random-series", "def-partial-sums-and-sample-means", "def-independent-random-elements", "thm-grouping-independent-sigma-algebras", "thm-factorization-of-expectations-for-independent-variables", "lem-variance-and-covariance-identities-for-random-variables", "thm-continuity-from-below-for-measures", "cor-expectation-linearity-monotonicity-and-modulus-bound"]
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
    - title: "Lemma 3.13 and complete proof, pp. 67\u201368"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
proof_strategy: "Choose l and delta>0 with P(sup_k|S_k|<=l)>=delta. Set F_n={max_{k<=n}|S_k|<=l}, F_0=Omega. The stopped integral identity gives delta Var(X_n)<=E[S_n^2;F_n]-E[S_{n-1}^2;F_{n-1}]+(l+C)^2 P(F_{n-1} minus F_n). Telescope: delta sum_{k<=n}Var(X_k)<=l^2+(l+C)^2. This uses no stopping-time theorem."
---

## Statement

Let $(X_n)_{n\ge1}$ be independent centered real random variables with $|X_n|\le C$ almost surely for one finite constant $C\ge0$. If $\sum_nX_n$ converges almost surely, then $\sum_n\operatorname{Var}(X_n)<\infty$. The bound is two-sided and uniform in $n$.

## Facts & Assumptions

[F1] [[def-almost-sure-convergence-of-a-random-series]]: For real random variables $(X_n)_{n\ge1}$, the series $\sum_{n\ge1}X_n$ **converges almost surely** if its partial sums $S_n$ converge to a finite real limit on an event of probability one, as in def-almost-sure-convergence-of-random-variables. With $S_0=0$ from def-partial-sums-and-sample-means, its convergence event is $C=\bigcap_{r\ge1}\bigcup_{N\ge1}\bigcap_{j\ge i\ge N}\{|S_j-S_i|<1/r\}.$ This is exactly the real Cauchy condition, with the indexing of thm-series-cauchy-criterion shifted by one. Measurable arithmetic makes every event in this countable expression measurable. For any fixed $m$, the union over $N$ may be restricted to $N\ge m$; then each difference uses only $X_{m+1},X_{m+2},\ldots$. Thus $C$ is in the tail sigma-algebra, without assuming independence. Under independence, cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event gives $\mathbb P(C)\in\{0,1\}$. Set $S=\lim_n S_n$ on $C$ and $S=0$ off $C$. The functions $\mathbf1_C S_n$ converge everywhere to $S$, so thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable and thm-arithmetic-and-lattice-operations-preserve-measurability make $S$ measurable. For Borel sets $B_n$, the event $\{X_n\in B_n\text{ infinitely often}\}=\bigcap_m\bigcup_{n\ge m}\{X_n\in B_n\}$ is likewise tail measurable. Changing finitely many summands adds an eventually constant finite difference to $S_n$; divided by deterministic $c_n>0$ tending to infinity that difference tends to zero, so the normalized limsup is unchanged. The sign of the unnormalized limsup need not be unchanged: the all-zero sequence has limsup zero, while changing its first term to $1$ makes the limsup of partial sums equal to $1$.

[F2] [[thm-grouping-independent-sigma-algebras]]: Let $(\mathcal F_i)_{i\in I}$ be an independent family of sigma-algebras on a probability space, and let $J_0,\dots,J_{m-1}\subseteq I$ be pairwise disjoint index sets. For each $r<m$, define $\mathcal G_r:=\sigma\left(\bigcup_{i\in J_r}\mathcal F_i\right).$ Then the sigma-algebras $\mathcal G_0,\dots,\mathcal G_{m-1}$ are independent.

[F3] [[thm-factorization-of-expectations-for-independent-variables]]: Let $n\ge1$, let $X_0,\dots,X_{n-1}$ be independent real random variables on a common probability space, and let $g_i:\mathbb R\to\mathbb R$ be Borel measurable for each $i<n$. 1. If every $g_i$ is nonnegative, then $\mathbb E\left[\prod_{i<n}g_i(X_i)\right]=\prod_{i<n}\mathbb E[g_i(X_i)]$ in $[0,+\infty]$. 2. If every $g_i(X_i)$ is integrable, then $\prod_{i<n}g_i(X_i)$ is integrable and the same factorization holds in $\mathbb R$.

[F4] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space. Then $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$ $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$ Moreover, covariance is symmetric and bilinear on finite linear combinations. On finite full-power-set probability spaces these formulas reduce to the published finite identities.

[F5] [[thm-continuity-from-below-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then $\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$ No finiteness hypothesis is required.

[F6] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: Let $X,Y$ be integrable real or complex random variables on one probability space. 1. For scalars $a,b$, $\mathbb E[aX+bY]=a\,\mathbb E[X]+b\,\mathbb E[Y].$ 2. If $X$ and $Y$ are real-valued and $X\le Y$ almost surely, then $\mathbb E[X]\le\mathbb E[Y].$ 3. $|\mathbb E[X]|\le\mathbb E[|X|].$

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Put $S_0=0$ and $S_n=\sum_{k=1}^nX_k$. Almost every convergent path is bounded. The measurable events $\{\sup_n|S_n|\le l\}$ for positive integers $l$ increase to a probability-one event. Continuity from below supplies one integer $l$ with probability $\delta>0$. Set $F_0=\Omega$ and $F_n=\{\max_{k\le n}|S_k|\le l\}$; thus $\mathbb P(F_n)\ge\delta$. [F1, F5, given]

2.1 The past event $F_{n-1}$ and $S_{n-1}$ are independent of $X_n$ by grouping. All moments below are finite by boundedness. Expanding and factoring the cross term and the square term gives $\mathbb E[S_n^2\mathbf1_{F_{n-1}}]=\mathbb E[S_{n-1}^2\mathbf1_{F_{n-1}}]+\operatorname{Var}(X_n)\mathbb P(F_{n-1})$. This also holds at $n=1$, where the past sum is zero. [F2, F3, F4, step 1.1]

3.1 On $F_{n-1}\setminus F_n$, the triangle inequality and $|X_n|\le C$ give $|S_n|\le l+C$ almost surely. Split the expectation in the previous identity over $F_n$ and $F_{n-1}\setminus F_n$. Monotonicity yields $\delta\operatorname{Var}(X_n)\le\mathbb E[S_n^2\mathbf1_{F_n}]-\mathbb E[S_{n-1}^2\mathbf1_{F_{n-1}}]+(l+C)^2\mathbb P(F_{n-1}\setminus F_n)$. [F6, step 2.1, algebra]

4.1 Sum from $1$ to $N$. The expectation differences telescope, the exit events are disjoint, and $S_N^2\le l^2$ on $F_N$. Thus $\delta\sum_{n=1}^N\operatorname{Var}(X_n)\le l^2+(l+C)^2$ for every $N$. The increasing nonnegative partial sums are bounded, so their series is finite. No division by $C$ or a variance is used, and $C=0$ is included. [step 1.1, step 3.1, algebra] ∎
