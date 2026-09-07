---
id: lem-symmetrization-for-independent-random-series
title: "Independent-copy symmetrization of random series"
kind: lemma
status: draft
origin: pipeline
deps: ["def-independent-random-elements", "def-symmetric-real-random-variable", "def-almost-sure-convergence-of-a-random-series", "thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique", "thm-grouping-independent-sigma-algebras", "lem-measurable-functions-preserve-independence", "thm-factorization-of-expectations-for-independent-variables", "lem-variance-and-covariance-identities-for-random-variables"]
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
    - title: "Theorem 3.12 necessity, p. 67"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
    - title: "Appendix A, Example 4.17, p. 9"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf
proof_strategy: "The product rectangle formula gives the independent copies; grouping gives independence of coordinate pairs and exchange of the two coordinates gives symmetry. Intersect the two probability-one convergence events. No converse without centering is claimed."
---

## Statement

Given an independent sequence $(X_n)_{n\ge1}$ on $(\Omega,\mathcal F,\mathbb P)$, form the product probability space $(\Omega^2,\mathcal F\otimes\mathcal F,\mathbb P\otimes\mathbb P)$. Write $U_n(\omega,\omega')=X_n(\omega)$, $V_n(\omega,\omega')=X_n(\omega')$, and $Z_n=U_n-V_n$. Then $(U_n)$ and $(V_n)$ are independent copies of the whole sequence, and the $Z_n$ are independent symmetric real random variables. Almost-sure convergence of $\sum_nX_n$ implies almost-sure convergence of $\sum_nZ_n$. If $|X_n|\le A$ almost surely for every $n$, with $0\le A<\infty$, then $|Z_n|\le2A$ almost surely, $\mathbb EZ_n=0$, and $\operatorname{Var}(Z_n)=2\operatorname{Var}(X_n)$.

## Facts & Assumptions

[F1] [[def-independent-random-elements]]: Let $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$ be random elements on a common probability space. For each $i$, write $\sigma(X_i):=\{X_i^{-1}(B):B\in\Sigma_i\}\subseteq\mathcal F.$ The family $(X_i)_{i\in I}$ is **independent** when the sigma-algebras $(\sigma(X_i))_{i\in I}$ are independent in the sense of def-independent-sigma-algebras-and-events. When $\Sigma_i$ is a Borel sigma-algebra, this agrees with the notation $\sigma(X_i)$ from def-sigma-algebra-generated-by-a-function.

[F2] [[def-symmetric-real-random-variable]]: A real random variable $X$ is **symmetric** if its law as defined in def-law-or-distribution-of-a-random-element equals the law of $-X$. Equivalently, $\mathbb P(X\in B)=\mathbb P(X\in -B)$ for every Borel $B\subseteq\mathbb R$, where $-B=\{-b:b\in B\}$. No existence of an expectation is assumed in this definition. In particular atoms, including an atom at zero, are allowed.

[F3] [[def-almost-sure-convergence-of-a-random-series]]: For real random variables $(X_n)_{n\ge1}$, the series $\sum_{n\ge1}X_n$ **converges almost surely** if its partial sums $S_n$ converge to a finite real limit on an event of probability one, as in def-almost-sure-convergence-of-random-variables. With $S_0=0$ from def-partial-sums-and-sample-means, its convergence event is $C=\bigcap_{r\ge1}\bigcup_{N\ge1}\bigcap_{j\ge i\ge N}\{|S_j-S_i|<1/r\}.$ This is exactly the real Cauchy condition, with the indexing of thm-series-cauchy-criterion shifted by one. Measurable arithmetic makes every event in this countable expression measurable. For any fixed $m$, the union over $N$ may be restricted to $N\ge m$; then each difference uses only $X_{m+1},X_{m+2},\ldots$. Thus $C$ is in the tail sigma-algebra, without assuming independence. Under independence, cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event gives $\mathbb P(C)\in\{0,1\}$. Set $S=\lim_n S_n$ on $C$ and $S=0$ off $C$. The functions $\mathbf1_C S_n$ converge everywhere to $S$, so thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable and thm-arithmetic-and-lattice-operations-preserve-measurability make $S$ measurable. For Borel sets $B_n$, the event $\{X_n\in B_n\text{ infinitely often}\}=\bigcap_m\bigcup_{n\ge m}\{X_n\in B_n\}$ is likewise tail measurable. Changing finitely many summands adds an eventually constant finite difference to $S_n$; divided by deterministic $c_n>0$ tending to infinity that difference tends to zero, so the normalized limsup is unchanged. The sign of the unnormalized limsup need not be unchanged: the all-zero sequence has limsup zero, while changing its first term to $1$ makes the limsup of partial sums equal to $1$.

[F4] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be sigma-finite measure spaces. Then: 1. the set function $E \mapsto (\mu \times \nu)(E)$ of def-product-measure-on-sigma-finite-spaces is a measure on $\mathcal A \otimes \mathcal B$; 2. for measurable rectangles, $(\mu \times \nu)(A \times B)=\mu(A)\nu(B);$ 3. the measure $\mu \times \nu$ is sigma-finite; and 4. it is the unique measure on $\mathcal A \otimes \mathcal B$ with the rectangle formula.

[F5] [[thm-grouping-independent-sigma-algebras]]: Let $(\mathcal F_i)_{i\in I}$ be an independent family of sigma-algebras on a probability space, and let $J_0,\dots,J_{m-1}\subseteq I$ be pairwise disjoint index sets. For each $r<m$, define $\mathcal G_r:=\sigma\left(\bigcup_{i\in J_r}\mathcal F_i\right).$ Then the sigma-algebras $\mathcal G_0,\dots,\mathcal G_{m-1}$ are independent.

[F6] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements $X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let $g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family $(g_i\circ X_i)_{i\in I}$ is independent.

[F7] [[thm-factorization-of-expectations-for-independent-variables]]: Let $n\ge1$, let $X_0,\dots,X_{n-1}$ be independent real random variables on a common probability space, and let $g_i:\mathbb R\to\mathbb R$ be Borel measurable for each $i<n$. 1. If every $g_i$ is nonnegative, then $\mathbb E\left[\prod_{i<n}g_i(X_i)\right]=\prod_{i<n}\mathbb E[g_i(X_i)]$ in $[0,+\infty]$. 2. If every $g_i(X_i)$ is integrable, then $\prod_{i<n}g_i(X_i)$ is integrable and the same factorization holds in $\mathbb R$.

[F8] [[lem-variance-and-covariance-identities-for-random-variables]]: Let $X,Y$ be square-integrable real random variables on one probability space. Then $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,$ $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y].$ Moreover, covariance is symmetric and bilinear on finite linear combinations. On finite full-power-set probability spaces these formulas reduce to the published finite identities.

## Proof

**Given:** The objects and hypotheses of the statement.

1.1 Probability measures are finite and hence sigma-finite, so the two-factor product theorem applies. Its rectangle formula gives independent coordinate sigma-algebras with the original marginals. For any finite list of restrictions on the $U_i$ and $V_i$, the rectangle formula followed by independence of the original $X_i$ factors its probability into all the individual probabilities. Thus the combined family is independent. [F4, F1, given]

2.1 Group each pair $(U_i,V_i)$: distinct pair sigma-algebras are independent, so their measurable differences are independent. The pair law is the product of two equal marginal laws, invariant under exchanging coordinates (first on rectangles, then by product-measure uniqueness). Its difference therefore has the same law as its negative. [F5, F6, F4, F2, step 1.1]

2.2 If $C$ is the original probability-one convergence event, then $C\times C$ has probability one. On it the partial sums of $Z_n$ are differences of two convergent real sequences, hence converge finitely. This is almost-sure series convergence. [F3, F4, step 1.1, algebra]

3.1 Under the boundedness hypothesis, $|Z_n|\le2A$ and $\mathbb EU_n=\mathbb EV_n$, so $\mathbb EZ_n=0$. Factorization gives $\mathbb E(U_nV_n)=(\mathbb EX_n)^2$. Expanding the square gives $\mathbb EZ_n^2=2\mathbb EX_n^2-2(\mathbb EX_n)^2=2\operatorname{Var}(X_n)$. This includes $A=0$ and deterministic laws. [F7, F8, step 1.1, algebra] ∎
