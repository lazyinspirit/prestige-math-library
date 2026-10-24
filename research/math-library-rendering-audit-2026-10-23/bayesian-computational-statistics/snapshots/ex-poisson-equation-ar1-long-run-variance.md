---
id: ex-poisson-equation-ar1-long-run-variance
kind: example
title: Poisson equation and long-run variance for a stationary AR(1) chain
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-long-run-variance-for-stationary-markov-chain
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-measure-kernel-and-probability-kernel
  - def-stationary-process-and-canonical-shift
  - def-time-homogeneous-markov-chain-with-transition-kernel
  - def-total-variation-distance-for-probability-laws
  - lem-stationary-chain-tv-convergence-implies-strong-mixing
  - thm-dominated-convergence
  - thm-invariant-initial-law-makes-the-chain-stationary
  - thm-poisson-equation-martingale-decomposition-clt
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
axiom_use: "The calculation uses a specified Gaussian law and the local Poisson-equation theorem's declared assumptions."
---

## Example

Take $a\in(-1,1)$ and innovation variance $v_\epsilon>0$. Let
$X_{k+1}=aX_k+\epsilon_{k+1}$, where the innovations are independent
$N(0,v_\epsilon)$ variables and $X_0\sim N(0,v_\epsilon/(1-a^2))$ is
independent of them. For $f(x)=x$, the Poisson solution is
$g(x)=x/(1-a)$ and the long-run variance is
$v_\epsilon/(1-a)^2$.

## Facts & Assumptions

**Given:** The Gaussian AR(1) chain and observable in the Example.

[A1] AC supplies the Markov-chain and conditional-expectation conventions used by the stationary-chain theorem. ([[def-axiom-of-choice]])

[F1] An invariant initial law makes all finite-dimensional laws stationary. ([[thm-invariant-initial-law-makes-the-chain-stationary]])

[F2] Dominated convergence passes a pointwise-convergent sequence of densities through the Lebesgue integral under one integrable majorant. ([[thm-dominated-convergence]])

[F3] For a stationary chain on a countably generated state space, pointwise total-variation convergence for $\pi$-almost every start implies strong mixing. ([[lem-stationary-chain-tv-convergence-implies-strong-mixing]])

[F4] Strong mixing means $\alpha_X(n)\to0$, and its coefficient bounds event dependence between separated past and future sigma-algebras. ([[def-mixing-coefficients-for-stationary-markov-chain]])

[F5] The local Poisson theorem proves the martingale decomposition and identifies its variance with the covariance long-run variance under absolute covariance summability. ([[thm-poisson-equation-martingale-decomposition-clt]])

[F6] The covariance long-run variance is $\gamma_0+2\sum_{k\ge1}\gamma_k$ when the covariance series is absolutely convergent and the CLT holds. ([[def-long-run-variance-for-stationary-markov-chain]])

[F7] A stationary real process has a measure-preserving canonical left shift, and ergodicity means every shift-invariant event has probability zero or one. ([[def-stationary-process-and-canonical-shift]])

## Verification
1.1 Put $v=v_\epsilon/(1-a^2)$. If $X_k\sim N(0,v)$ independently of $\epsilon_{k+1}$, then $aX_k+\epsilon_{k+1}$ is normal with mean zero and variance $a^2v+v_\epsilon=v$. Thus $\pi=N(0,v)$ is invariant, and initializing with $\pi$ gives a stationary chain by [F1]. [A1, F1, given, algebra]

1.2 Iterating the recursion gives $X_n=a^n x+\sum_{j=1}^n a^{n-j}\epsilon_j$ when $X_0=x$, so $P^n(x,\cdot)=N(a^nx,v_n)$ with $v_n=v(1-a^{2n})$. For each fixed $x$, $a^nx\to0$ and $v_n\to v$, so the Gaussian densities $p_n^x(y)$ converge pointwise to the density $p(y)$ of $N(0,v)$. For sufficiently large $n$, $v/2\le v_n\le v$ and $|a^nx|\le1$. On $|y|\le2$, $p_n^x(y)\le(\pi v)^{-1/2}$; on $|y|>2$, $|y-a^nx|\ge|y|/2$, hence $p_n^x(y)\le(\pi v)^{-1/2}e^{-y^2/(8v)}$. This gives one integrable majorant for $p_n^x$; with $p$ added it also dominates $|p_n^x-p|$. By [F2], $\int|p_n^x-p|\,dy\to0$. Therefore $\|P^n(x,\cdot)-\pi\|_{\mathrm{TV}}\le\int|p_n^x-p|\,dy\to0$ for every $x$. [F2, given, algebra]

2.1 The Borel sigma-algebra of $\mathbb R$ has the countable generating algebra of finite unions of rational half-open intervals and rational rays. Applying [F3] to step 1.2 gives $\alpha_X(n)\to0$. [F3, step 1.2, given]

3.1 Let $E$ be an event invariant under every power of the canonical left shift and put $p=\mathbb P(E)$. Finite-coordinate cylinders form a generating pi-system. The events approximable in probability by such cylinders form a sigma-algebra: complements preserve symmetric-difference probability, and for a countable union one first truncates by continuity from below and then approximates the finitely many sets. Hence for every $\eta>0$ there are $j$ and $A\in\sigma(X_0,\ldots,X_j)$ with $\mathbb P(E\triangle A)<\eta$. For $m>j$, $B=\theta^{-m}E$ is measurable with respect to $\sigma(X_m,X_{m+1},\ldots)$, stationarity gives $\mathbb P(B)=p$, and shift invariance gives $E=B$. Thus $|p-p^2|=|\mathbb P(E\cap B)-p\mathbb P(B)|\le2\eta+\alpha_X(m-j)$. Let $m\to\infty$ using step 2.1 and then $\eta\downarrow0$; we obtain $p(1-p)=0$. By [F7], every invariant event having probability zero or one is precisely ergodicity of the canonical shift. [F4, F7, step 2.1, given]

4.1 Set $f(x)=x$ and $g(x)=x/(1-a)$. Both are in $L^2(\pi)$ and $\pi(f)=0$. The kernel action is $Pg(x)=\mathbb E[(ax+\epsilon_1)/(1-a)]=ax/(1-a)$, so $g-Pg=f$. Also $D_{k+1}=(aX_k+\epsilon_{k+1})/(1-a)-aX_k/(1-a)=\epsilon_{k+1}/(1-a)$, whence $\mathbb E[D_{k+1}^2]=v_\epsilon/(1-a)^2$. Steps 1.1 and 3.1 verify the stationary and ergodic hypotheses of [F5], so this is the Poisson CLT variance. [F5, step 1.1, step 3.1, given, algebra]

5.1 Iterating the recursion gives $X_k=a^kX_0+\sum_{j=1}^ka^{k-j}\epsilon_j$. Independence implies $\gamma_k=\operatorname{Cov}(X_0,X_k)=va^k$. Since $|a|<1$, the covariance series is absolutely summable, and [F6] gives $\sigma_f^2=v+2v\sum_{k\ge1}a^k=v+2va/(1-a)=v_\epsilon/(1-a)^2$. This agrees with step 4.1, including $a=0$ and negative $a$. [F6, step 1.1, step 4.1, given, algebra] ∎
