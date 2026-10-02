---
id: thm-cesaro-convergence-for-irreducible-positive-recurrent-chains
kind: theorem
title: "Cesaro convergence for irreducible positive-recurrent chains"
status: draft
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - thm-markov-chain-ergodic-theorem
  - cor-bounded-convergence-on-a-finite-measure-space
  - def-transition-matrix-and-n-step-transition-probabilities
  - thm-chapman-kolmogorov-equations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.6, Cesàro averages of transition probabilities"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $p$ be an irreducible positive-recurrent
transition matrix on a countable state space $E$ with invariant probability
$\pi$. Then for every $x,y\in E$,

$$\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)\ \longrightarrow\ \pi(y) \qquad(n\to\infty).$$

No aperiodicity hypothesis is required, and the time-zero term $k=0$ is
included in the average.

## Facts & Assumptions

**Given:** AC, an irreducible positive-recurrent $p$ on countable $E$ with invariant probability $\pi$, and states $x,y\in E$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the ergodic theorem supplier [F1], whose statement assumes it. ([[def-axiom-of-choice]])

[F1] Assume AC. For an irreducible positive-recurrent countable $p$-chain with invariant probability $\pi$ and $f$ with $\sum_z\pi(z)|f(z)|<\infty$, $\frac1n\sum_{k<n}f(X_k)\to\sum_z\pi(z)f(z)$ almost surely under $\mathbb P_x$ for every starting state $x$. ([[thm-markov-chain-ergodic-theorem]])

[F2] If measurable functions $f_n$ on a finite measure space are bounded by one constant $M$ and converge almost everywhere to $f$, then $\int f_n\to\int f$. ([[cor-bounded-convergence-on-a-finite-measure-space]])

[F3] Assume Choice. For a Markov chain with kernel $K$ and bounded measurable $f$, $\mathbb E[f(X_{m+n})\mid\mathcal F_m]=K^nf(X_m)$ almost surely; in particular, for $m=0$, $\mathbb E_x[f(X_n)]=K^nf(x)$ with $K^n f(x)=\int_Ef\,dK^n(x,\cdot)$. ([[thm-chapman-kolmogorov-equations]])

[F4] The transition entries are $p^{(k)}(x,y)=K^k(x,\{y\})$ for $k\ge0$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

## Proof

**Given:** AC, an irreducible positive-recurrent $p$ on countable $E$ with invariant probability $\pi$, and fixed $x,y\in E$.

**Proof technique:** apply the chain ergodic theorem to the indicator of the target state and pass to expectations by bounded convergence, identifying each expectation with an $n$-step transition probability.

1.1 Let $f:=\mathbf 1_{\{y\}}$. It is bounded with $0\le f\le1$, and $\sum_z\pi(z)|f(z)|=\pi(y)\le1<\infty$, so [F1] applies: $\frac1n\sum_{k=0}^{n-1}\mathbf 1_{\{X_k=y\}}\to\pi(y)$ almost surely under $\mathbb P_x$, for the fixed starting state $x$. [F1, given]

1.2 For each $k\ge0$, $\mathbb E_x[\mathbf 1_{\{X_k=y\}}]=\mathbb P_x(X_k=y)=K^k(x,\{y\})=p^{(k)}(x,y)$: the second equality is the $m=0$ case of the Chapman–Kolmogorov identity [F3] applied to the indicator of the singleton, and the third is the definition of the $k$-step entries [F4]. [F3, F4, given]

2.1 Each average $A_n:=\frac1n\sum_{k<n}\mathbf 1_{\{X_k=y\}}$ satisfies $0\le A_n\le1$ for every $n\ge1$, and $A_n\to\pi(y)$ almost surely by step 1.1; since $\mathbb P_x$ is a probability measure, the bounded convergence corollary [F2] applied to the constant limit gives $\mathbb E_xA_n\to\pi(y)$. [F2, step 1.1, given]

3.1 By linearity of expectation, $\mathbb E_xA_n=\frac1n\sum_{k=0}^{n-1}\mathbb E_x[\mathbf 1_{\{X_k=y\}}]=\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)$; combining with step 2.1 gives $\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)\to\pi(y)$. Since $x,y$ were arbitrary, the theorem follows. [step 2.1, step 1.2, given]

4.1 The average is formed for $n\ge1$ and includes $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$. For the periodic two-state alternation it equals $\lceil n/2\rceil/n$ or $\lfloor n/2\rfloor/n$, according to $x,y$, and tends to $1/2$; thus no aperiodicity is needed. The bounded indicator satisfies the integrability hypothesis, and AC [A1] is used through [F1] and [F3]. [A1, F1, F2, F3, step 3.1, given] ∎
