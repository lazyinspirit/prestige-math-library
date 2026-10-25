---
id: thm-gaussian-mixture-test-supermartingale
kind: theorem
title: The Gaussian mixture is a sub-Gaussian test supermartingale
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-conditional-subgaussian-increments
  - lem-conditional-subgaussian-exponential-process
  - lem-gaussian-exponential-mixture-integral
  - thm-mixture-of-null-supermartingales
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Steven R. Howard, Aaditya Ramdas, Jon McAuliffe, and Jasjeet Sekhon, Time-uniform, nonparametric, nonasymptotic confidence sequences, Lemma 2 and Appendix A.3
      url: https://arxiv.org/pdf/1810.08240
    - title: "Aaditya Ramdas, Martingales 1: Concentration Inequalities — Conjugate Mixtures, 36-771 lecture notes, Carnegie Mellon University, Fall 2018"
      url: https://stat.cmu.edu/~aramdas/martingales18/L18-conjugate.pdf
---

## Statement

Assume AC. Let $(\Omega,\mathcal F,(\mathcal F_t)_{t\in\mathbb N_0},P)$ and $(X_t)_{t\ge1}$ satisfy
[[def-conditional-subgaussian-increments]] for $\mu\in\mathbb R$ with known proxy $\sigma^2>0$.
Fix $\rho>0$. Define $S_0(\mu)=0$, $S_t(\mu)=\sum_{i=1}^t(X_i-\mu)$, $V_t=t\sigma^2$, and
$$M_t(\mu):=\sqrt{\frac{\rho}{V_t+\rho}}\exp\!\left(\frac{S_t(\mu)^2}{2(V_t+\rho)}\right)\quad(t\in\mathbb N_0).$$
Then $M(\mu)$ is a nonnegative test supermartingale for $\{P\}$, with $M_0(\mu)=1$.

## Facts & Assumptions

**Given:** Assume AC and the conditional sub-Gaussian model for fixed $\mu$, $\sigma^2>0$, and $\rho>0$.

[F1] [[lem-conditional-subgaussian-exponential-process]]: for each fixed $\lambda\in\mathbb R$, $L_t^\lambda(\mu)=\exp(\lambda S_t(\mu)-\lambda^2t\sigma^2/2)$ is a nonnegative test supermartingale with initial value one.

[F2] [[thm-mixture-of-null-supermartingales]]: if each component is a nonnegative test supermartingale under every null law and $(\lambda,\omega)\mapsto L_t^\lambda(\omega)$ is product-measurable, its probability mixture is a test supermartingale; the theorem uses a real-valued modification only where the integral is infinite.

[F3] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for sigma-finite measure spaces and nonnegative product-measurable functions, section integrals are measurable and equal the corresponding iterated integrals.

[F4] [[lem-gaussian-exponential-mixture-integral]]: for $v\ge0$, $s\in\mathbb R$, and $\rho>0$, the mixture of $\exp(\lambda s-v\lambda^2/2)$ under $N(0,1/\rho)$ equals $\sqrt{\rho/(v+\rho)}\exp(s^2/[2(v+\rho)])$.

[F5] [[def-standard-normal-and-normal-laws]]: $N(0,1/\rho)$ is a probability law under the affine-image normal-law convention.

[A1] [[def-axiom-of-choice]]: AC is required by the conditional-expectation and test-supermartingale conventions in [F1] and [F2].

## Proof

1.1 For each fixed $\lambda$, [F1] supplies the component process $L_t^\lambda(\mu)$. At fixed $t$, $S_t(\mu)$ is $\mathcal F_t$-measurable, so $(\lambda,\omega)\mapsto\exp(\lambda S_t(\mu)(\omega)-\lambda^2t\sigma^2/2)$ is measurable on $\mathcal B(\mathbb R)\otimes\mathcal F_t$: it is the composition of the measurable coordinate maps with continuous arithmetic and exponential operations. Each component is nonnegative. [given, F1, construct]

2.1 Mix these components using the probability law $N(0,1/\rho)$ from [F5]. Both this prior and $P$ are probability measures, hence sigma-finite. The product-measurability in step 1.1 and the component conditions in [F1] meet [F2]; [F3] gives the needed measurable nonnegative section integrals. Therefore the mixture process is a nonnegative test supermartingale. By [F4] its value is the displayed finite formula for every finite $S_t(\mu)$, so the mixture theorem's infinite-integral modification is never applied. At $t=0$ the formula gives $M_0(\mu)=1$. [F2, F3, F4, F5, A1, step 1.1] ∎