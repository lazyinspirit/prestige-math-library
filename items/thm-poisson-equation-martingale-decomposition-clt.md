---
id: thm-poisson-equation-martingale-decomposition-clt
kind: theorem
title: Poisson-equation martingale decomposition and MCMC CLT
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - cor-canonical-markov-chain-on-path-space
  - def-ergodic-measure-preserving-system
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-long-run-variance-for-stationary-markov-chain
  - def-measure-preserving-transformation-and-system
  - def-measure-kernel-and-probability-kernel
  - def-moments-variance-and-covariance
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - lem-square-integrable-markov-transition-conditional-expectation
  - thm-converging-together-lemma
  - thm-continuous-mapping-theorem
  - thm-holder-inequality-for-integrals
  - thm-martingale-central-limit-theorem
  - thm-dominated-convergence
  - thm-lp-convergence-implies-convergence-in-probability
  - thm-stationary-process-birkhoff-ergodic-limit
  - thm-taking-out-what-is-known
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §4.8.2"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, §5"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §4"
      url: "https://arxiv.org/pdf/math/0409112"
verification:
  precheck: pass
axiom_use: "AC is used through conditional-expectation classes and the supplied martingale CLT; no additional choice is used."
---

## Statement

Assume AC. Let $(X_k)_{k\ge0}$ be a stationary time-homogeneous Markov chain with invariant probability $\pi$, natural filtration $\mathcal F_k$, and ergodic canonical path shift. Let $f$ be real Borel with $\pi(f)=0$ and $f\in L^2(\pi)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]). Suppose there is a measurable $g\in L^2(\pi)$ such that $f=g-Pg$ $\pi$-almost everywhere, where $Pg(x)=\int g(y)P(x,dy)$. Put $D_{k+1}:=g(X_{k+1})-Pg(X_k)$ and $\tau_f^2:=\mathbb E[D_1^2]$. Then for every $n\ge1$,
$$\sum_{k=0}^{n-1}f(X_k)=g(X_0)-g(X_n)+\sum_{k=0}^{n-1}D_{k+1},$$
and
$$\frac1{\sqrt n}\sum_{k=0}^{n-1}f(X_k)\Rightarrow N(0,\tau_f^2),$$
including the degenerate case $\tau_f^2=0$. If additionally $\sum_{k\ge1}|\operatorname{Cov}_{\pi}(f(X_0),f(X_k))|<\infty$, then
$$\tau_f^2=\pi(f^2)+2\sum_{k=1}^{\infty}\operatorname{Cov}_{\pi}(f(X_0),f(X_k)),$$
so this CLT's variance equals the covariance long-run variance of [[def-long-run-variance-for-stationary-markov-chain]].

## Facts & Assumptions

**Given:** AC, a stationary Markov chain with invariant probability $\pi$, natural filtration $\mathcal F_k$, ergodic canonical shift, centered real $f\in L^2(\pi)$, and a solution $g\in L^2(\pi)$ of $f=g-Pg$ $\pi$-almost everywhere.

[A1] AC is the choice principle for the conditional-expectation classes used below. ([[def-axiom-of-choice]])

[F1] For $g\in L^2(\pi)$, $D_{k+1}=g(X_{k+1})-Pg(X_k)$ is square-integrable, has conditional mean zero, and conditional variance $P(g^2)(X_k)-(Pg(X_k))^2$. ([[lem-square-integrable-markov-transition-conditional-expectation]])

[F2] For a stationary ergodic process $Y$, its averages converge almost surely to $\mathbb E[Y_0]$. ([[thm-stationary-process-birkhoff-ergodic-limit]])

[F3] A square-integrable martingale-difference array with terminal conditional variance clock converging to $1$ in probability and vanishing unconditional Lindeberg sums has terminal sum converging in distribution to $N(0,1)$. ([[thm-martingale-central-limit-theorem]])

[F4] For square-integrable real random variables, variance is the second centered moment and covariance is the centered product expectation. ([[def-moments-variance-and-covariance]])

[F5] When the covariance series is absolutely convergent and the CLT is established, the covariance long-run variance is the sum $\pi(f^2)+2\sum_{k\ge1}\operatorname{Cov}_{\pi}(f(X_0),f(X_k))$. ([[def-long-run-variance-for-stationary-markov-chain]])

[F6] A known measurable factor can be taken out of conditional expectation when products are integrable; Hölder bounds products of $L^2$ variables by their $L^2$ norms. ([[thm-taking-out-what-is-known]], [[thm-holder-inequality-for-integrals]])

[F7] If $U_n\Rightarrow U$ and $V_n\to0$ in probability, then $U_n+V_n\Rightarrow U$. ([[thm-converging-together-lemma]])

[F8] Dominated convergence passes limits through the integrals used below. ([[thm-dominated-convergence]])

[F9] Convergence to zero in $L^2$ implies convergence to zero in probability. ([[thm-lp-convergence-implies-convergence-in-probability]])

[F10] The canonical path law is shifted by the coordinate left shift; ergodic means the shift preserves the law and every invariant event has probability zero or one. ([[cor-canonical-markov-chain-on-path-space]], [[def-measure-preserving-transformation-and-system]], [[def-ergodic-measure-preserving-system]])

[F11] A continuous scaling map sends weak convergence to the correspondingly scaled limiting law. ([[thm-continuous-mapping-theorem]])

## Proof
1.1 By [F1], each $D_{k+1}$ is a square-integrable martingale difference, so $\mathbb E[D_{k+1}\mid\mathcal F_k]=0$. Since $f=g-Pg$ $\pi$-almost everywhere and each $X_k$ has law $\pi$, the identity holds at every $X_k$ simultaneously outside a countable union of null events. Therefore $f(X_k)=g(X_k)-g(X_{k+1})+D_{k+1}$ almost surely. [A1, F1, given]

1.2 Set $q(x)=P(g^2)(x)-(Pg(x))^2$ on the $\pi$-full set where these terms are finite, and set $q=0$ elsewhere. By [F1], $q(X_k)$ is the conditional variance of $D_{k+1}$, is nonnegative, and $\pi(q)=\mathbb E[D_1^2]=\tau_f^2$. Thus $q\in L^1(\pi)$. The process $(q(X_k))_{k\ge0}$ is a measurable factor of the stationary ergodic path process $(X_k)$: the inverse image of any shift-invariant event for $q(X)$ is shift-invariant for $X$. Hence it too is stationary and ergodic by [F10], and [F2] gives $n^{-1}\sum_{k=0}^{n-1}q(X_k)\to\tau_f^2$ almost surely. [F1, F2, F10, given]

1.3 Stationarity and $g\in L^2(\pi)$ give $\mathbb E[(g(X_0)-g(X_n))^2/n]\le4\pi(g^2)/n\to0$. The $L^2$-norm of the endpoint divided by $\sqrt n$ therefore tends to zero, so [F9] gives convergence to zero in probability. [F9, given, algebra]

2.1 Summing step 1.1 for $k=0,\ldots,n-1$ cancels the intermediate $g(X_k)$ terms and yields $S_n:=\sum_{k=0}^{n-1}f(X_k)=g(X_0)-g(X_n)+M_n$, where $M_n:=\sum_{k=0}^{n-1}D_{k+1}$. [step 1.1, algebra]

2.2 Suppose $\tau_f^2>0$. For row $n$, set $Z_{n,j}=D_j/\sqrt{n\tau_f^2}$ for $1\le j\le n$, set $Z_{n,j}=0$ for $j>n$, and use $\mathcal F_{n,j}=\mathcal F_{\min(j,n)}$ for every $j\ge0$. These are square-integrable martingale-difference rows by step 1.1. Their terminal variance clock is $\Gamma_{n,\infty}=(n\tau_f^2)^{-1}\sum_{k=0}^{n-1}q(X_k)\to1$ almost surely by step 1.2. For every $\varepsilon>0$, stationarity of the transition pairs $(X_{j-1},X_j)$ gives $\sum_{j=1}^n\mathbb E[Z_{n,j}^2\mathbf1_{\{|Z_{n,j}|>\varepsilon\}}]=\tau_f^{-2}\mathbb E[D_1^2\mathbf1_{\{|D_1|>\varepsilon\sqrt{n\tau_f^2}\}}]\to0$ by [F8], since $D_1^2$ is integrable. Extending each row by zeros makes it an infinite array with the same terminal sum and clock. Therefore [F3] gives $M_n/\sqrt{n\tau_f^2}\Rightarrow N(0,1)$; scaling by $\tau_f$ using [F11] yields $M_n/\sqrt n\Rightarrow N(0,\tau_f^2)$. [A1, F1, F3, F8, F11, step 1.1, step 1.2, given, construct]

3.1 If $\tau_f^2=0$, stationarity and [F1] imply $\mathbb E[D_{k+1}^2]=0$, so $D_{k+1}=0$ almost surely and hence $M_n=0$. By step 2.1, $S_n=g(X_0)-g(X_n)$. Step 1.3 shows $S_n/\sqrt n\to0$ in probability; [F7] then gives convergence to the point mass $N(0,0)$. [F1, F7, step 1.3, step 2.1, given]

3.2 If $\tau_f^2>0$, step 2.2 gives $M_n/\sqrt n\Rightarrow N(0,\tau_f^2)$. Combining this with step 1.3, the decomposition in step 2.1, and [F7] gives $S_n/\sqrt n\Rightarrow N(0,\tau_f^2)$. [F7, step 1.3, step 2.1, step 2.2, algebra]

4.1 Assume additionally that the covariance series is absolutely convergent. Stationarity and expansion of the finite square give $n^{-1}\operatorname{Var}(S_n)=\gamma_0+2\sum_{k=1}^{n-1}(1-k/n)\gamma_k\to\gamma_0+2\sum_{k=1}^{\infty}\gamma_k$, where $\gamma_k=\operatorname{Cov}_{\pi}(f(X_0),f(X_k))$; [F8] applies to the series because $|\gamma_k|$ is summable. On the other hand, step 2.1 writes $S_n=R_n+M_n$ with $R_n=g(X_0)-g(X_n)$. For $i<j$, $D_{i+1}$ is $\mathcal F_j$-measurable and $\mathbb E[D_{j+1}\mid\mathcal F_j]=0$, so [F1, F6] give $\mathbb E[D_{i+1}D_{j+1}]=0$. Stationarity gives $\operatorname{Var}(M_n)=\sum_{j=0}^{n-1}\mathbb E[D_{j+1}^2]=n\tau_f^2$. Also $\operatorname{Var}(R_n)\le4\pi(g^2)$ and [F6] gives $|\operatorname{Cov}(R_n,M_n)|\le\sqrt{\operatorname{Var}(R_n)\operatorname{Var}(M_n)}=O(\sqrt n)$. Dividing $\operatorname{Var}(S_n)=\operatorname{Var}(R_n)+\operatorname{Var}(M_n)+2\operatorname{Cov}(R_n,M_n)$ by $n$ therefore shows that its limit is $\tau_f^2$. Steps 3.1 and 3.2 give the CLT, so [F5] identifies its variance with the displayed covariance sum. [F1, F4, F5, F6, F8, step 2.1, step 3.1, step 3.2, algebra, given] ∎

## Source notes

The decomposition is proved directly by telescoping. The CLT uses the conditional-variance ergodic theorem and the stated martingale-array CLT; finite variance of $f$ alone is not used as a CLT criterion. The covariance formula is proved only in the stated Poisson-equation case.
