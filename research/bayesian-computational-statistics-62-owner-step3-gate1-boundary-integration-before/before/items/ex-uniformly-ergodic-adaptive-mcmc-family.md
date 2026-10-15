---
id: ex-uniformly-ergodic-adaptive-mcmc-family
kind: example
title: A uniformly ergodic adaptive refresh family
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
proof_strategy: direct
deps:
  - def-diminishing-adaptation
  - def-general-state-reversibility-by-symmetric-flow-measure
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-total-variation-distance-for-probability-laws
  - thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment
  - thm-general-state-reversibility-implies-invariance
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, Coupling and Ergodicity of Adaptive MCMC"
      url: "https://www.probability.ca/jeff/ftpdir/adapt.pdf"
      locator: "§5, Theorem 5, pp. 7–9."
---

## Example

Let $(\mathsf X,\mathcal X)=(\{0,1\},2^{\{0,1\}})$ with uniform target $\pi$,
let $(\Gamma,\mathcal G)=([1/2,1],\mathcal B([1/2,1]))$,
$\Pi(x,\cdot)=\pi(\cdot)$, and for $\gamma\in\Gamma$ set
$P_\gamma=(1-\gamma)I+\gamma\Pi$. Use the deterministic adaptation
$\Gamma_n=\tfrac12+\tfrac1{2(n+1)}$. The adaptive chain satisfies diminishing
adaptation and its family is simultaneously uniformly ergodic, so its
marginal law converges to $\pi$.

## Facts & Assumptions

**Given:** The two-state space, uniform probability $\pi$, kernels $P_\gamma$, and deterministic sequence $\Gamma_n$ in the Example.

[F1] [[def-measure-kernel-and-probability-kernel]]: a probability kernel has probability rows and measurable event evaluations.

[F2] [[def-general-state-reversibility-by-symmetric-flow-measure]]: a kernel is reversible when its joint flow measure under $\pi$ is symmetric.

[F3] [[thm-general-state-reversibility-implies-invariance]]: reversibility implies $\pi P=\pi$.

[F4] [[def-total-variation-distance-for-probability-laws]]: total variation is the supremum over measurable events.

[F5] [[def-diminishing-adaptation]]: $D_n$ is the uniform-in-state total variation change between successive kernels.

[F6] [[thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment]]: diminishing adaptation and simultaneous uniform ergodicity imply marginal convergence.

## Verification

**Given:** [F1]–[F6] and the finite state space and target in the Example.

1.1 The matrix of $P_\gamma$ is $\begin{pmatrix}1-\gamma/2&\gamma/2\\\gamma/2&1-\gamma/2\end{pmatrix}.$ Its entries are continuous in $\gamma$, so the family is jointly measurable on the stated spaces; its rows are probability vectors by $0\le\gamma\le1$ and [F1]. The matrix is symmetric, and $\pi$ assigns equal mass to both states, so the four joint-flow atoms are symmetric under coordinate swap. Thus $P_\gamma$ is reversible by [F2], and $\pi$ is invariant by [F3]. [F1, F2, F3, given, algebra]

1.2 The kernels satisfy $P_{\gamma'}(x,\cdot)-P_\gamma(x,\cdot)=(\gamma'-\gamma)(\pi-\delta_x)$, so $D_n=|\Gamma_{n+1}-\Gamma_n|/2\to0$. This is diminishing adaptation by [F5]. [F4, F5, given, algebra]

2.1 Since $\Pi^2=\Pi$ and $I\Pi=\Pi I=\Pi$, induction gives $P_\gamma^m=(1-\gamma)^mI+\bigl(1-(1-\gamma)^m\bigr)\Pi.$ For either state $x$, $\lVert\delta_x-\pi\rVert_{\rm TV}=1/2$, so $\lVert P_\gamma^m(x,\cdot)-\pi\rVert_{\rm TV}=(1-\gamma)^m/2\le2^{-m-1}$ uniformly in $x$ and $\gamma\in[1/2,1]$. Therefore the family is simultaneously uniformly ergodic. [F4, step 1.1, algebra]

3.1 Steps 2.1 and 1.2 verify the two hypotheses in alternative 1 of [F6]. Hence $\lVert\mathcal L(X_n)-\pi\rVert_{\rm TV}\to0$ for every initial state. [F6, step 2.1, step 1.2] ∎
