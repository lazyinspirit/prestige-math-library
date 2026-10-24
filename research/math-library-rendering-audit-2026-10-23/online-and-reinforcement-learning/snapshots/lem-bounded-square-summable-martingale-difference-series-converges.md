---
id: lem-bounded-square-summable-martingale-difference-series-converges
kind: lemma
title: Predictably weighted bounded martingale differences have a convergent series
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-martingale-difference-sequence
  - def-martingale-submartingale-and-supermartingale
  - thm-tower-property-of-conditional-expectation
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-probability-measure
  - thm-dominated-convergence
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-continuity-from-below-for-measures
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-reals-cauchy-complete
  - thm-well-ordering-principle
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "John N. Tsitsiklis, Asynchronous Stochastic Approximation and Q-Learning"
      url: "https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf"
      locator: "§3, Lemma 1 and its weighted-noise convergence argument; the bounded predictable-weighted case is proved locally."
---

## Statement

Assume the Axiom of Choice. Let $(\Omega,\mathcal F,(\mathcal F_n)_{n\ge0},P)$ be a discrete filtered probability space. Let $(D_n)_{n\ge1}$ be a real martingale-difference sequence relative to the filtration, with $|D_n|\le C$ almost surely for a finite constant $C\ge0$. For each $n\ge1$, let $B_n$ be a real $\mathcal F_{n-1}$-measurable random variable. Suppose that a finite deterministic $K\ge0$ satisfies

$$\sum_{n=1}^{\infty} B_n^2\le K\quad\text{almost surely}.$$

Then the partial sums $\sum_{n=1}^N B_nD_n$ converge almost surely to a finite real limit.

## Statement references

[Tsitsiklis, *Asynchronous Stochastic Approximation and Q-Learning*](https://www.mit.edu/~jnt/Papers/J052-94-jnt-q.pdf).

## Facts & Assumptions

**Given:** The Axiom of Choice, the filtered probability space, the bounded martingale differences, the predictable coefficients, and the almost-sure square-sum bound in the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this is assumed for the conditional-expectation classes in the martingale-difference definition.

[F1] [[def-filtration-and-filtered-probability-space]]: $\mathcal F_i\subseteq\mathcal F_j$ whenever $i\le j$.

[F2] [[def-martingale-difference-sequence]]: each $D_n$ is $\mathcal F_n$-measurable and integrable, and $E[D_n\mid\mathcal F_{n-1}]=0$ almost surely; conditional expectations are almost-sure classes under AC.

[F3] [[def-martingale-submartingale-and-supermartingale]]: an integrable adapted process $X_n$ is a submartingale when $E[X_{n+1}\mid\mathcal F_n]\ge X_n$ almost surely.

[F4] [[thm-tower-property-of-conditional-expectation]]: if $\mathcal H\subseteq\mathcal G$ and $X$ is integrable, then $E[E[X\mid\mathcal G]\mid\mathcal H]=E[X\mid\mathcal H]$ almost surely.

[F5] [[thm-taking-out-what-is-known]]: an integrable factor measurable with respect to the conditioning sigma-algebra can be taken outside conditional expectation when the products are integrable.

[F6] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear, order preserving, and expectation preserving.

[F7] [[def-probability-measure]] and [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: $P(\Omega)=1$, and a nonnegative integrable constant has expectation equal to that constant.

[F8] [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]: a pointwise limit of measurable functions is measurable.

[F9] [[thm-dominated-convergence]]: pointwise convergence under one integrable majorant permits convergence of expectations.

[F10] [[thm-continuity-from-below-for-measures]]: for increasing measurable events, the measure of their union is the limit of their measures.

[F11] [[thm-finite-and-countable-subadditivity-of-measures]]: the measure of a countable union is at most the sum of the measures.

[F12] [[thm-reals-cauchy-complete]]: every Cauchy sequence of real numbers converges in $\mathbb R$.

[F13] [[thm-well-ordering-principle]]: every nonempty subset of the natural numbers has a least element.

## Proof

**Given:** In addition to the hypotheses in the Statement, all conditional-expectation identities are interpreted almost surely.

1.1 Put $Y_n=B_nD_n$. The square-sum bound implies $|B_n|\le\sqrt K$ almost surely, so $Y_n$ is square integrable. Since $B_n$ is $\mathcal F_{n-1}$-measurable, [F2] and [F5] give $E[Y_n\mid\mathcal F_{n-1}]=0$. For $i<j$, [F1] gives $\mathcal F_i\subseteq\mathcal F_{j-1}$, and [F4] gives $E[Y_j\mid\mathcal F_i]=0$. Taking out the bounded $\mathcal F_i$-measurable factor $Y_i$ with [F5], then using expectation preservation [F6], gives $E[Y_iY_j]=0$. Expanding a finite square therefore yields $E\!\left[\left(\sum_{n=N}^{m}Y_n\right)^2\right]=\sum_{n=N}^{m}E[Y_n^2]\le C^2E\!\left[\sum_{n=N}^{m}B_n^2\right].$ [given, A1, F1, F2, F4, F5, F6, algebra]

1.2 Let $R_N=\sum_{n=N}^{\infty}B_n^2$. By [F8], $R_N$ is measurable; the hypothesis gives $0\le R_N\le K$ and $R_N\downarrow0$ almost surely. The constant $K$ is integrable by [F7], so [F9] gives $E[R_N]\to0$. [given, F7, F8, F9]

2.1 For finite $m\ge N$, put $S_j=\sum_{n=N}^{j}Y_n$ for $N\le j\le m$, with $S_{N-1}=0$. Each $S_j$ is adapted and integrable; [F2] and [F6] give $E[S_{j+1}\mid\mathcal F_j]=S_j+E[Y_{j+1}\mid\mathcal F_j]=S_j$, so $(S_j)$ is a martingale. Since $S_j$ is $\mathcal F_j$-measurable, [F5] takes it out of the conditional expectation; the MDS identity from step 1.1 gives $E[2S_jY_{j+1}\mid\mathcal F_j]=2S_jE[Y_{j+1}\mid\mathcal F_j]=0$. The conditional square expansion therefore gives $E[S_{j+1}^2\mid\mathcal F_j]=S_j^2+E[Y_{j+1}^2\mid\mathcal F_j]\ge S_j^2,$ so $(S_j^2)$ is a nonnegative submartingale by [F3]. Let $A_j$ be the event that $j$ is the first index in $[N,m]$ with $|S_j|\ge\varepsilon$. These events are disjoint and $A_j\in\mathcal F_j$. Repeated use of the submartingale inequality and [F4] gives $E[S_m^2\mid\mathcal F_j]\ge S_j^2$, hence $E[\mathbf1_{A_j}S_m^2]\ge E[\mathbf1_{A_j}S_j^2]\ge\varepsilon^2P(A_j).$ Summing over $j$ and using $S_m^2\ge0$ gives $P\!\left(\max_{N\le j\le m}|S_j|\ge\varepsilon\right)\le \frac{E[S_m^2]}{\varepsilon^2}\le \frac{C^2E[R_N]}{\varepsilon^2}.$ [given, F1, F2, F3, F4, F5, F6, step 1.1, step 1.2, algebra]

3.1 Since $C^2E[R_N]\to0$, for each integer $r\ge1$ choose the least $N_r>N_{r-1}$ (with $N_0=0$) such that $C^2E[R_{N_r}]\le2^{-4r}$; it exists by [F13]. For finite $m\ge N_r$, step 2.1 with $\varepsilon=2^{-r}$ bounds the event $\max_{N_r\le j\le m}|\sum_{n=N_r}^{j}Y_n|\ge2^{-r}$ by $2^{-2r}$. These events increase with $m$, so [F10] gives the same bound for their union $A_r$ over all $m$. For each $R$, [F11] gives $P(\bigcup_{r\ge R}A_r)\le\sum_{r\ge R}2^{-2r}$, which tends to zero; hence almost surely only finitely many $A_r$ occur. Outside that null event, for every sufficiently large $r$ and all $p\le q$ with $p,q\ge N_r$, the tail sum satisfies $|\sum_{n=p}^{q}Y_n|\le2^{1-r}$. Thus the partial sums are Cauchy. [step 1.2, step 2.1, F10, F11, F13, algebra]

4.1 Completeness [F12] makes the Cauchy sequence of partial sums converge in $\mathbb R$. Since $Y_n=B_nD_n$, this is the asserted convergence of $\sum_{n\ge1}B_nD_n$. [step 3.1, F12, algebra] ∎

