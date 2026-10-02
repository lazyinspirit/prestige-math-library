---
id: ex-empirical-state-frequencies-converge-to-stationary-masses
kind: example
title: "Empirical state frequencies converge to stationary masses"
status: draft
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-positive-recurrent-and-null-recurrent-state
  - thm-markov-chain-ergodic-theorem
  - thm-cesaro-convergence-for-irreducible-positive-recurrent-chains
  - thm-chapman-kolmogorov-equations
  - def-transition-matrix-and-n-step-transition-probabilities
  - cor-bounded-convergence-on-a-finite-measure-space
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
proof_strategy: direct
---

## Example

Assume AC ([[def-axiom-of-choice]]). Let $p$ be an irreducible
positive-recurrent transition matrix on a countable state space $E$ with
invariant probability $\pi$, let $y\in E$, and let $\mathbb P_x$ be the law of
the $p$-chain started at the deterministic state $x\in E$. Then the empirical
frequency of visits to $y$ converges,

$$\frac1n\#\{0\le k<n:X_k=y\}\ \longrightarrow\ \pi(y) \qquad\mathbb P_x\text{-almost surely},$$

and the expectation of that frequency converges to the same number,

$$\mathbb E_x\Bigl[\frac1n\#\{0\le k<n:X_k=y\}\Bigr]\ \longrightarrow\ \pi(y).$$

No aperiodicity is used, and the statements hold for every fixed pair of states
$x,y$; the second is a convergence statement about real numbers, with no
almost-sure qualifier.

## Facts & Assumptions

**Given:** AC; an irreducible positive-recurrent $p$ on the countable state space $E$ with invariant probability $\pi$, and states $x,y\in E$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the ergodic theorem supplier [F2], the Cesàro supplier [F3] and the chain-law supplier [F4]. ([[def-axiom-of-choice]])

[F1] A recurrent state $z$ is positive recurrent when $\mathbb E_zT_z^+<+\infty$ and null recurrent when $\mathbb E_zT_z^+=+\infty$; positive recurrence of the chain means that every state is positive recurrent. ([[def-positive-recurrent-and-null-recurrent-state]])

[F2] Assume AC. For an irreducible positive-recurrent countable chain with invariant probability $\pi$ and a function $f$ with $\sum_z\pi(z)|f(z)|<\infty$, $\frac1n\sum_{k=0}^{n-1}f(X_k)\to\sum_z\pi(z)f(z)$ almost surely under $\mathbb P_x$, for every starting state $x$. ([[thm-markov-chain-ergodic-theorem]])

[F3] Assume AC. For an irreducible positive-recurrent $p$ on countable $E$ with invariant probability $\pi$, $\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)\to\pi(y)$ for all $x,y\in E$. ([[thm-cesaro-convergence-for-irreducible-positive-recurrent-chains]])

[F4] Assume Choice. For a Markov chain with kernel $K$ and bounded measurable real $f$, $\mathbb E[f(X_{m+n})\mid\mathcal F_m]=K^nf(X_m)$ almost surely, with $m=0$ included, so that $\mathbb E_x[f(X_n)]=K^nf(x)$; equivalently $\mathbb P(X_{n}\in A\mid\mathcal F_0)=K^n(X_0,A)$ almost surely. ([[thm-chapman-kolmogorov-equations]])

[F5] On a finite measure space, if measurable $f_n\to f$ almost everywhere and $|f_n|\le M$ almost everywhere for one real $M\ge0$, then $\int f_n\to\int f$. ([[cor-bounded-convergence-on-a-finite-measure-space]])

[F6] The $k$-step transition probabilities are $p^{(k)}(x,y)=K^k(x,\{y\})$ for $k\ge0$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

## Verification

**Given:** AC; an irreducible positive-recurrent $p$ on countable $E$ with invariant probability $\pi$, and fixed states $x,y\in E$.

**Proof technique:** apply the chain ergodic theorem to the indicator of the target state, then evaluate the expectation of the empirical frequency both by linearity with the Cesàro theorem and by bounded convergence.

1.1 Let $f:=\mathbf 1_{\{y\}}$. Then $0\le f\le1$ and $\sum_{z\in E}\pi(z)|f(z)|=\pi(y)\le1<+\infty$, so the ergodic theorem [F2] applies to $f$ and the fixed starting state $x$; for every $n\ge1$ and every path, $\sum_{k=0}^{n-1}\mathbf 1_{\{X_k=y\}}=\#\{0\le k<n:X_k=y\}$ by the definition of the counting notation. [F2, given]

1.2 For every $k\ge0$, $\mathbb E_x[\mathbf 1_{\{X_k=y\}}]=\mathbb P_x(X_k=y)=K^k(x,\{y\})=p^{(k)}(x,y)$: the second equality is the $m=0$ case of [F4] applied to the singleton event $\{y\}$, and the third is [F6]. [F4, F6, given]

2.1 Dividing the identity of step 1.1 by $n\ge1$ and applying the almost-sure conclusion of [F2] to $f$ gives $\frac1n\#\{0\le k<n:X_k=y\}=\frac1n\sum_{k=0}^{n-1}f(X_k)\to\sum_z\pi(z)f(z)=\pi(y)$ almost surely under $\mathbb P_x$, which is the first displayed assertion. [F2, step 1.1, given]

2.2 Expectation by linearity: $\mathbb E_x\bigl[\frac1n\#\{0\le k<n:X_k=y\}\bigr]=\frac1n\sum_{k=0}^{n-1}\mathbb E_x[\mathbf 1_{\{X_k=y\}}]=\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)$, and [F3] makes this tend to $\pi(y)$, which is the second displayed assertion. [F3, step 1.2, given]

3.1 Consistency by bounded convergence: the averages of step 2.1 are measurable, converge $\mathbb P_x$-almost everywhere to the constant $\pi(y)$, and satisfy $0\le\frac1n\#\{0\le k<n:X_k=y\}\le1$ for every $n\ge1$; since $\mathbb P_x$ is a probability measure, [F5] gives $\mathbb E_x\bigl[\frac1n\#\{0\le k<n:X_k=y\}\bigr]\to\pi(y)$, the same limit as in step 2.2, and the two expressions for the expectation agree term by term by step 1.2. [F5, step 2.1, step 2.2]

4.1 The averages are formed for $n\ge1$. For the periodic two-cycle started at $0$ with $y=0$, the frequency is $\lceil n/2\rceil/n$, which tends to $1/2$ despite periodicity. The indicator remains bounded and integrable on an infinite state space; the almost-sure and expectation limits were proved separately in steps 2.1 and 2.2. AC [A1] enters through [F2]–[F4]. [A1, F1, F2, F3, F4, F5, step 2.1, step 2.2, step 3.1, given] ∎
