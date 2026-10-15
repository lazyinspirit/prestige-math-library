---
id: thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment
kind: theorem
title: Adaptive MCMC marginal convergence under diminishing adaptation with uniform ergodicity or containment
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-adaptive-mcmc-containment
  - def-diminishing-adaptation
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
  - lem-adaptive-mcmc-block-perturbation-bound
  - lem-total-variation-coupling-and-kernel-contraction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, Coupling and Ergodicity of Adaptive MCMC"
      url: "https://www.probability.ca/jeff/ftpdir/adapt.pdf"
      locator: "§5, Theorem 5 and proof, pp. 7–9; §6, Theorem 13 and proof, pp. 13–14."
    - title: "Gersende Fort, Adaptive MCMC: theory and methods, Warwick lecture notes"
      url: "https://www.math.univ-toulouse.fr/~gfort/Slides/Warwick09.pdf"
      locator: "Slides 21–25: diminishing adaptation, containment, and frozen-kernel comparison."
---

## Statement

Let $(\mathsf X,\mathcal X)$ and $(\Gamma,\mathcal G)$, the jointly
measurable probability-kernel family $(P_\gamma)_{\gamma\in\Gamma}$, common
invariant probability $\pi$, and adaptive process $(X_n,\Gamma_n)$ satisfy
[[def-diminishing-adaptation]]. Fix an initial law $\mu_0$ for
$(X_0,\Gamma_0)$; a fixed initial pair is the Dirac-law special case. If
diminishing adaptation holds under this law and either of the following
conditions holds, then
$$\lVert\mathcal L_{\mu_0}(X_n)-\pi\rVert_{\rm TV}\longrightarrow0.$$

1. **Simultaneous uniform ergodicity:** for every $\epsilon>0$ there is an
   integer $N(\epsilon)\ge1$ such that
   $$\sup_{x\in\mathsf X,\,\gamma\in\Gamma}\lVert P_\gamma^{N(\epsilon)}(x,\cdot)-\pi\rVert_{\rm TV}\le\epsilon.$$

2. **Containment:** for every $\epsilon,\delta>0$ there is an integer $N$
   such that
   $$\mathbb P_{\mu_0}\!\left(M_\epsilon(X_n,\Gamma_n)\le N\right)\ge1-\delta\quad\text{for every }n\ge0,$$
   where $M_\epsilon$ is the fixed-kernel convergence time from
   [[def-adaptive-mcmc-containment]].

The conclusion is convergence of the one-time marginal distributions. It does
not itself assert a strong law, a central limit theorem, or convergence of
sample averages.

## Facts & Assumptions

**Given:** A common target probability $\pi$, probability kernels $(P_\gamma)$ satisfying $\pi P_\gamma=\pi$, an initial law $\mu_0$, and an adaptive process whose conditional transition at time $n$ is $P_{\Gamma_n}(X_n,\cdot)$.

[F1] [[def-diminishing-adaptation]]: $D_n=\sup_x\lVert P_{\Gamma_{n+1}}(x,\cdot)-P_{\Gamma_n}(x,\cdot)\rVert_{\rm TV}$ is measurable, lies in $[0,1]$, and tends to zero in probability.

[F2] [[def-adaptive-mcmc-containment]]: $M_\epsilon(x,\gamma)$ is the first positive iterate at which the fixed kernel $P_\gamma$ is within $\epsilon$ of $\pi$, and containment gives a uniform-in-$n$ probability bound for it.

[F3] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: $\pi P_\gamma=\pi$ for every fixed $\gamma$.

[F4] [[def-total-variation-distance-for-probability-laws]]: total variation is the supremum of setwise probability differences.

[F5] [[lem-total-variation-coupling-and-kernel-contraction]]: Markov kernels contract total variation; hence $\lVert P_\gamma^{m+1}(x,\cdot)-\pi\rVert_{\rm TV}\le \lVert P_\gamma^m(x,\cdot)-\pi\rVert_{\rm TV}$.

[F6] [[lem-adaptive-mcmc-block-perturbation-bound]]: over a fixed block of $N$ steps, the adaptive marginal differs from the mixture obtained by freezing $\Gamma_n$ by at most $\sum_{i=0}^{N-1}\sum_{j=0}^{i-1}\mathbb E D_{n+j}$.

## Proof

**Given:** The hypotheses and facts [F1]–[F6]. All probabilities and expectations below use the specified initial law $\mu_0$.

1.1 Since $0\le D_n\le1$ and $D_n\to0$ in probability, for each fixed $j\ge0$ we have $\mathbb E D_{n+j}\to0$: for any $t>0$, $\mathbb E D_{n+j}\le t+\mathbb P(D_{n+j}>t)$; first let $n\to\infty$ and then $t\downarrow0$. [F1, algebra]

1.2 Assume simultaneous uniform ergodicity and fix a desired tolerance $\eta>0$. Choose $N=N(\eta/2)$ as in alternative 1. For the frozen mixture $Q_{n,N}$ from [F6], every state and parameter has $\lVert P_{\Gamma_n}^{N}(X_n,\cdot)-\pi\rVert_{\rm TV}\le\eta/2$, so convexity of the setwise supremum gives $\lVert Q_{n,N}-\pi\rVert_{\rm TV}\le\eta/2$. [F3, F4, F6, given]

1.3 Now assume containment. Fix $\eta>0$, take $\epsilon=\delta=\eta/3$, and choose $N$ from alternative 2. On the event $M_\epsilon(X_n,\Gamma_n)\le N$, the definition gives an iterate $m\le N$ within $\epsilon$ of $\pi$; [F5] propagates this bound to the $N$th iterate. On the complementary event total variation is at most one. Therefore the frozen mixture satisfies $\lVert Q_{n,N}-\pi\rVert_{\rm TV}\le\epsilon+\delta=2\eta/3$ for every $n$. [F2, F4, F5, given]

2.1 For this fixed $N$, [F6] and step 1.1 imply $\lVert\mathcal L(X_{n+N})-Q_{n,N}\rVert_{\rm TV}\to0$, since its upper bound is a finite sum of expectations tending to zero. The triangle inequality and step 1.2 yield $\limsup_{n\to\infty}\lVert\mathcal L(X_{n+N})-\pi\rVert_{\rm TV}\le\eta/2$. As $n+N$ ranges over all sufficiently large times and $\eta>0$ is arbitrary, the asserted convergence follows in alternative 1. [F4, F6, step 1.1, step 1.2, algebra]

3.1 The same fixed-block bound [F6] tends to zero by step 1.1. The triangle inequality gives $\limsup_{n\to\infty}\lVert\mathcal L(X_{n+N})-\pi\rVert_{\rm TV}\le2\eta/3<\eta$. Again $N$ is fixed and $\eta$ is arbitrary, proving the asserted convergence in alternative 2. [F4, F6, step 1.1, step 1.3, algebra] ∎
