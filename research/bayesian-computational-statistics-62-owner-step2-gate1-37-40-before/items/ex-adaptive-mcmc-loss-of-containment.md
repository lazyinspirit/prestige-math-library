---
id: ex-adaptive-mcmc-loss-of-containment
kind: example
title: Diminishing adaptation with loss of containment
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
proof_strategy: direct
deps:
  - def-adaptive-mcmc-containment
  - def-diminishing-adaptation
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
---

## Example

On $\mathsf X=\{0,1\}$ with uniform target $\pi$, let
$P_\gamma=(1-\gamma)I+\gamma\Pi$ for $\gamma\in(0,1]$, where
$\Pi(x,\cdot)=\pi(\cdot)$. Starting from $X_0=0$, choose the deterministic
schedule $\Gamma_n=2^{-n-2}$. Every fixed kernel is ergodic for $\pi$ and
adaptation diminishes, but the adaptive marginal does not converge to $\pi$;
containment fails.

## Facts & Assumptions

**Given:** The two-state space, uniform target, refresh kernels, deterministic
schedule, and initial state in the Example.

[F1] [[def-measure-kernel-and-probability-kernel]]: the displayed rows define
probability kernels.

[F2] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]:
invariance means $\pi P_\gamma=\pi$.

[F3] [[def-total-variation-distance-for-probability-laws]]: total variation
is the supremum of setwise probability differences.

[F4] [[def-diminishing-adaptation]]: $D_n$ is the supremum over states of
successive-kernel total variation distances.

[F5] [[def-adaptive-mcmc-containment]]: containment requires boundedness in
probability of the current fixed-kernel convergence times, uniformly over
iteration $n$.

## Verification

**Given:** [F1]–[F5] and the Example.

1.1 For every $\gamma>0$, $\pi P_\gamma=(1-\gamma)\pi+\gamma\pi=\pi$. The same projection identity $\Pi^2=\Pi$ gives $P_\gamma^m(x,\cdot)=(1-\gamma)^m\delta_x+\bigl(1-(1-\gamma)^m\bigr)\pi,$ so $\lVert P_\gamma^m(x,\cdot)-\pi\rVert_{\rm TV}=(1-\gamma)^m/2\to0$ for each fixed $\gamma$. Thus all individual kernels are ergodic for the common invariant target. [F1, F2, F3, given, algebra]

1.2 The difference of two successive rows is $(\Gamma_{n+1}-\Gamma_n)(\pi-\delta_x)$, so $D_n=|\Gamma_{n+1}-\Gamma_n|/2\to0$. [F3, F4, given, algebra]

1.3 Let $r_0=1$ and $r_n=\prod_{j=0}^{n-1}(1-\Gamma_j)$. The law recursion $\mu_{n+1}=\mu_nP_{\Gamma_n}$ gives $\mu_n=r_n\delta_0+(1-r_n)\pi$. Since $\sum_j\Gamma_j=1/2$ and $\Gamma_j\le1/4$, the elementary bound $\log(1-u)\ge-2u$ for $0\le u\le1/2$ yields $r_n\ge\exp(-2\sum_j\Gamma_j)=e^{-1}$. Hence $\lVert\mu_n-\pi\rVert_{\rm TV}=r_n/2\ge e^{-1}/2$, so the marginal law does not converge to $\pi$. [F2, F3, given, algebra]

2.1 For $\epsilon=1/4$, the formula in step 1.1 shows $M_\epsilon(x,\Gamma_n)\to\infty$ for both states as $\Gamma_n\to0$. Thus for every finite $N$, the probability of $M_\epsilon(X_n,\Gamma_n)\le N$ is eventually zero, contradicting containment in [F5]. [F3, F5, step 1.1, given] ∎
