---
id: lem-return-cycle-occupation-measure-and-minimality
kind: lemma
title: "Return-cycle occupation measure and minimality"
status: draft
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-hitting-return-and-visit-times
  - def-transition-matrix-and-n-step-transition-probabilities
  - thm-finite-dimensional-laws-of-a-markov-chain
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-for-nonnegative-double-series
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5, expected occupation measure and its minimality"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Statement

Assume AC, let $p$ be a transition matrix on a countable state space $E$, and
let $X$ be a $p$-chain started at $b\in E$, with law $\mathbb P_b$. Let

$$T_b^+=\inf\{n\ge1:X_n=b\}$$

and define the **return-cycle occupation measure** by

$$\mu_b(y):=\mathbb E_b\sum_{0\le n<T_b^+}\mathbf 1_{\{X_n=y\}},\qquad y\in E .$$

Then:

1. $\mu_b(b)=1$ and $\displaystyle\sum_{y\in E}\mu_b(y)=\mathbb E_bT_b^+$.
2. $\mu_b(y)=\sum_{x\in E}\mu_b(x)\,p(x,y)$ for every $y\ne b$, and
   $(\mu_bp)(b)=\mathbb P_b(T_b^+<\infty)$.
3. $\mu_b$ is pointwise minimal: if $\nu:E\to[0,+\infty]$ satisfies $\nu(b)=1$
   and $\nu(y)=\sum_{x\in E}\nu(x)p(x,y)$ for every $y\ne b$, then
   $\mu_b(y)\le\nu(y)$ for every $y\in E$.
4. If $b$ is recurrent, then $\mu_bp=\mu_b$, that is, $\mu_b$ is invariant.

Neither the series defining $\mu_b(y)$, nor the sums in items 2–3, is asserted
to be finite except where stated; all are nonnegative extended sums.

## Facts & Assumptions

**Given:** AC, a countable transition matrix $p$ on $E$, a $p$-chain $X$ started at $b$ with law $\mathbb P_b$, and $T_b^+$ as in the statement.

[A1] Every family of nonempty sets has a choice function; AC is used through the cited finite-dimensional-law supplier. ([[def-axiom-of-choice]])

[F1] $T_x^+=\inf\{n\ge1:X_n=x\}$ is a stopping time with values in $\mathbb N\cup\{+\infty\}$; the value $X_\infty$ is never used, and the initial visit at time zero is not counted as a return. ([[def-hitting-return-and-visit-times]])

[F2] The transition entries are $p^{(n)}(x,y)=K^n(x,\{y\})$ with $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$, and every row of $p$ sums to one. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F3] Under AC, the joint law of $(X_{n_0},\ldots,X_{n_r})$ for a chain with initial law $\mu$ is given by the iterated kernel integrals, the $n_0=0$ integral reducing to evaluation; taking indicators gives the probability of every finite cylinder. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F4] For every double sequence $a_{ij}\ge0$, the two iterated sums and the supremum of finite partial sums coincide, possibly at $+\infty$. ([[thm-tonelli-for-nonnegative-double-series]])

[F5] If $0\le f_1\le f_2\le\cdots$ are measurable and $f_n\uparrow f$ pointwise, then $\int f_n\,d\mu\uparrow\int f\,d\mu$. ([[thm-monotone-convergence-for-the-integral]])

## Proof

**Given:** AC, a countable transition matrix $p$ on $E$, a $p$-chain $X$ started at $b$ with law $\mathbb P_b$, and $T_b^+$ as in the statement.

[A1] Every family of nonempty sets has a choice function; AC is used through the cited finite-dimensional-law supplier. ([[def-axiom-of-choice]])

[F1] $T_x^+=\inf\{n\ge1:X_n=x\}$ is a stopping time with values in $\mathbb N\cup\{+\infty\}$; the value $X_\infty$ is never used, and the initial visit at time zero is not counted as a return. ([[def-hitting-return-and-visit-times]])

[F2] The transition entries are $p^{(n)}(x,y)=K^n(x,\{y\})$ with $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$, and every row of $p$ sums to one. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F3] Under AC, the joint law of $(X_{n_0},\ldots,X_{n_r})$ for a chain with initial law $\mu$ is given by the iterated kernel integrals, the $n_0=0$ integral reducing to evaluation; taking indicators gives the probability of every finite cylinder. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F4] For every double sequence $a_{ij}\ge0$, the two iterated sums and the supremum of finite partial sums coincide, possibly at $+\infty$. ([[thm-tonelli-for-nonnegative-double-series]])

[F5] If $0\le f_1\le f_2\le\cdots$ are measurable and $f_n\uparrow f$ pointwise, then $\int f_n\,d\mu\uparrow\int f\,d\mu$. ([[thm-monotone-convergence-for-the-integral]])



**Proof technique:** direct survival-prefix recursion, with nonnegative summation and a minimality iteration.

1.1 Define the survival masses $\alpha_n(y):=\mathbb P_b(X_n=y,\ T_b^+>n)$ for $n\ge0$, $y\in E$. For $n\ge1$, $T_b^+>n$ requires $X_1,\ldots,X_n$ all to avoid $b$, so $\alpha_n(y)=\mathbb P_b(X_1\ne b,\ldots,X_n\ne b,\ X_n=y)$ and in particular $\alpha_n(b)=0$. At $n=0$ the avoidance condition is empty, and [F3] with initial law $\delta_b$ gives $X_0=b$ almost surely, so $\alpha_0(b)=1$ and $\alpha_0(y)=0$ for $y\ne b$. [A1, F1, F3, given]

1.2 For every $y$ we have $\mu_b(y)=\sum_{n\ge0}\alpha_n(y)$: by the monotone convergence theorem [F5] applied to the partial sums of the nonnegative terms $\mathbf 1_{\{X_n=y\}}\mathbf 1_{\{n<T_b^+\}}$, the expectation of the series is the series of the expectations $\mathbb P_b(X_n=y,\ T_b^+>n)=\alpha_n(y)$. [F5, given]

1.3 Put $Q(x,y):=p(x,y)\mathbf 1_{\{y\ne b\}}$. A nonnegative $\nu$ satisfies $\nu(b)=1$ and $\nu(y)=\sum_x\nu(x)p(x,y)$ for all $y\ne b$ if and only if $\nu=\delta_b+\nu Q$ as extended nonnegative functions, because at $y=b$ the right side is $1+0=\nu(b)$ and at $y\ne b$ it is $(\nu p)(y)$. [F2, given]

1.4 If $E=\varnothing$ there is no starting state $b$, so the hypotheses cannot be met. [given]

1.5 If $b$ is absorbing, the finite-dimensional law [F3] and the initial law $\delta_b$ imply $X_n=b$ almost surely for every $n\ge0$; hence $T_b^+=1$ by [F1]. [A1, F1, F3, given]

2.1 The absorbing path of step 1.5 has exactly one occupation before $T_b^+$, at time $0$, so $\mu_b=\delta_b$, $\sum_y\mu_b(y)=1=\mathbb E_bT_b^+$. [step 1.5, given]

2.2 For every $n\ge0$ and $y\ne b$ the recursion $\alpha_{n+1}(y)=\sum_{x\in E}\alpha_n(x)p(x,y)$ holds. Since $y\ne b$, the event $\{T_b^+>n,\ X_{n+1}=y\}$ equals $\{T_b^+>n+1,\ X_{n+1}=y\}$. Partition the first event by $X_n=x$: the cylinder formula [F3] gives $\mathbb P_b(T_b^+>n,\ X_n=x,\ X_{n+1}=y)=\alpha_n(x)p(x,y)$ for each $x$, and countable additivity gives the displayed sum. At $n=0$ only $x=b$ contributes, with mass $p(b,y)$; for $n\ge1$, the $x=b$ term is zero by step 1.1. [A1, F2, F3, step 1.1, given]

2.3 $\mu_b(b)=1$ by steps 1.1 and 1.2, since the series for $\mu_b(b)$ has the single nonzero term $\alpha_0(b)=1$. [step 1.1, step 1.2]

2.4 $\sum_{y\in E}\mu_b(y)=\mathbb E_bT_b^+$: for every outcome the sum $\sum_{y\in E}\mathbf 1_{\{X_n=y\}}$ equals one exactly for the $T_b^+$ indices $n<T_b^+$, so both sides equal the expectation of $\sum_{n\ge0}\mathbf 1_{\{n<T_b^+\}}$; applying [F4] to the nonnegative double sequence $\mathbb P_b(X_n=y,\ n<T_b^+)$ interchanges the sums over $y$ and $n$, [F5] identifies $\sum_n\mathbb P_b(T_b^+>n)$ with $\mathbb E_bT_b^+$ by the indicator tail identity, and infinite values are allowed on both sides. [F4, F5, step 1.2, given]

2.5 For every $n\ge0$, using the survival-mass definition in step 1.1, the last-step factorization [F3] gives $\sum_{x\in E}\alpha_n(x)p(x,b)=\mathbb P_b(X_{n+1}=b,\ T_b^+>n)=\mathbb P_b(T_b^+=n+1)$, since $T_b^+>n$ rules out an earlier return and $X_{n+1}=b$ makes the next time the first return. [A1, F1, F3, step 1.1, given]

3.1 Since $b$ is absorbing, $p(b,b)=1$; with $\mu_b=\delta_b$ from step 2.1 and the matrix convention [F2], $(\mu_bp)(b)=1$. Thus the absorbing case satisfies the occupation-mass, return-time, and return-flow identities. [F2, step 2.1, given]

3.2 Interchanging the nonnegative sums by [F4] and using step 1.2 gives $(\mu_bp)(b)=\sum_{x\in E}\mu_b(x)p(x,b)=\sum_{n\ge0}\mathbb P_b(T_b^+=n+1)=\mathbb P_b(T_b^+<\infty)$, since the positive finite return times partition $\{T_b^+<\infty\}$. [F4, step 1.2, step 2.5, given]

3.3 For $y\ne b$, $\mu_b(y)=\sum_{x\in E}\mu_b(x)p(x,y)$: by step 1.2, [F4] applied to the nonnegative terms $\alpha_n(x)p(x,y)$, and step 2.2, $$\sum_{x\in E}\mu_b(x)p(x,y)=\sum_{n\ge0}\sum_{x\in E}\alpha_n(x)p(x,y)=\sum_{n\ge0}\alpha_{n+1}(y)=\mu_b(y)-\alpha_0(y)=\mu_b(y),$$ the last step because $\alpha_0(y)=0$ for $y\ne b$. [F4, step 2.2, step 1.2, given]

3.4 For such $\nu$ and every $N\ge1$, $\nu=\sum_{n<N}\delta_bQ^n+\nu Q^N$, where $Q^n$ are powers of the substochastic matrix $Q$. Induct on $N$ from step 1.3; each reassociation of the countable nonnegative matrix sums is justified by [F4]. By step 2.2 and the zero $b$-coordinate in step 1.1, $\alpha_n=\delta_bQ^n$ with $\alpha_0=\delta_b$, so the first sum is the $N$th partial sum of the series in step 1.2. [F4, step 1.1, step 2.2, step 1.2, step 1.3, given]

3.5 The time-$0$ term contributes $\mu_b(b)=1$ although no return has occurred, since the occupation sum starts at $n=0$ while the return time is strictly positive. [F1, step 1.1, step 2.3, given]

4.1 If $b$ is transient then $(\mu_bp)(b)=\mathbb P_b(T_b^+<\infty)<1$ by step 3.2, so item 4 genuinely uses recurrence; item 3's minimality inequality remains valid. [F1, step 3.2, given]

4.2 Letting $N\to\infty$ in step 3.4 gives $\nu(y)\ge\sup_{N\ge1}\sum_{n<N}\alpha_n(y)=\mu_b(y)$ for every $y$, since the remainder $\nu Q^N(y)$ is nonnegative and a nonnegative series is the supremum of its partial sums; this is the asserted pointwise minimality. [step 1.2, step 3.4, given]

4.3 If $b$ is recurrent then $\mathbb P_b(T_b^+<\infty)=1$, so $(\mu_bp)(b)=1=\mu_b(b)$ by steps 2.3 and 3.2, while step 3.3 gives equality at every $y\ne b$; hence $\mu_bp=\mu_b$. [F1, step 2.3, step 3.3, step 3.2, given]

5.1 AC [A1] is used through the finite-dimensional-law supplier [F3]; once that chain law is supplied, the recursion and nonnegative summations are finite-time or Tonelli/monotone-convergence calculations with no further choice. The pointwise minimality assertion is one-way, not an if-and-only-if. [A1, F3, step 1.1, step 2.2, step 2.5, step 4.2, given] ∎
