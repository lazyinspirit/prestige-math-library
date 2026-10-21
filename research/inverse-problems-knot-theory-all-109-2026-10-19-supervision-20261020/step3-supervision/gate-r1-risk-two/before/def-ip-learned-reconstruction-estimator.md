---
id: def-ip-learned-reconstruction-estimator
kind: definition
title: Learned inverse estimators and reconstruction targets
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-forward-map-and-solution-classes
  - def-ip-identifiability-and-stability-modulus
  - def-ip-misfit-evidence-and-posterior-law
  - def-hilbert-space
  - def-measurable-space
  - def-probability-measure
  - def-measurable-function-between-measurable-spaces
  - def-measure-kernel-and-probability-kernel
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gregory Ongie, Ajil Jalal, Christopher A. Metzler, Richard G. Baraniuk, Alexandros G. Dimakis, and Rebecca Willett, Deep Learning Techniques for Inverse Problems in Imaging, arXiv:2005.06001v1"
      url: "https://arxiv.org/pdf/2005.06001v1"
      locator: "§3.1 and §4.1, PDF pp. 6–11, for matched training pairs, direct reconstruction maps, and finite unrolled updates; §4.2.1, PDF pp. 11–13, for denoisers and learned generative priors."
    - title: "Giannis Daras et al., A Survey on Diffusion Models for Inverse Problems, arXiv:2410.00083v1"
      url: "https://arxiv.org/pdf/2410.00083v1"
      locator: "§1.2 and §§2.4.2–2.4.3, PDF pp. 4 and 8, distinguish point reconstruction, score fields, conditional-score updates, and posterior sampling. The survey reports method-specific scope and does not establish generic sampler correctness."
    - title: "Masoumeh Dashti and Andrew M. Stuart, The Bayesian Approach to Inverse Problems, arXiv:1302.6989v4"
      url: "https://arxiv.org/pdf/1302.6989v4"
      locator: "§3.2, Theorem 3.4 and proof, for a supplied data-indexed posterior kernel and its evidence/version conventions; §4.1, Theorem 4.3, for posterior well-posedness under stated potential hypotheses."
verification:
  precheck: n/a
axiom_use: "No choice axiom is required; all fitting laws, maps, and probability kernels are supplied as inputs."
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric parameter and data spaces, let $U\subseteq X$ be a nonempty admissible truth class, let $F:U\to Y$ be a forward map, and let $(Q,d_Q)$ be a metric target space. All metric spaces in this definition carry their Borel sigma-algebras. Give $U$ the subspace Borel sigma-algebra $\mathcal B(U):=\{U\cap A:A\in\mathcal B(X)\}$, and assume that $q:U\to Q$ is measurable from $(U,\mathcal B(U))$ to $(Q,\mathcal B(Q))$. The target $q(x)$ is the recovery object assigned to truth $x$; $Q$ may be the parameter space itself or a quotient solution-class space. A **point reconstruction rule** is a Borel map $g:Y\to Q$, and its output at data $y$ is $g(y)$. A **learned point estimator** is such a map $\widehat q_\phi$ with a fitted parameter $\phi$ in a specified parameter set. A complete training description names the probability law $P_{\rm fit}$ of all variables used to fit $\phi$; those variables may be paired or unpaired. A complete test description names a probability law $P_{\rm test}$ for evaluation pairs $(Y,q(X))$. No equality between fitting and test laws is assumed.

A finite **unrolled learned update** consists of an integer $K\geq1$, a Borel initialization $u_0:Y\to Q$, and Borel maps $T_{\phi,k}:Q\times Y\to Q$ for $0\leq k<K$, with $u_{k+1}(y)=T_{\phi,k}(u_k(y),y)$. Its output $u_K(y)$ is a point reconstruction rule. An **amortized inverse map** is a learned point estimator applied to multiple data inputs after a single fit; this term adds a reuse convention, not an accuracy guarantee.

For a real Hilbert signal space $H$, a **denoiser** is a Borel map $D_\phi:H\to H$ trained under a specified signal-corruption law and used to transform a corrupted signal into a signal estimate or an update. A denoiser is the exact minimum mean-square error map only when it equals the conditional mean for the specified signal and corruption laws. A **learned prior** is a supplied Borel probability measure $\rho_\phi$ on $H$; one construction is the pushforward law $\rho_\phi(A)=\nu(G_\phi^{-1}(A))$ for $A\in\mathcal B(H)$, where $\nu$ is a specified probability measure on a measurable source space $(Z,\mathcal Z)$ and $G_\phi:(Z,\mathcal Z)\to(H,\mathcal B(H))$ is measurable. The law or generator alone is not a data-to-target estimator.

For a finite horizon $T>0$, a specified parameter set $\Phi$, and $\phi\in\Phi$, a **score field model** in a finite-dimensional signal space $\mathbb R^d$ is a Borel map $s_\phi:[0,T]\times\mathbb R^d\to\mathbb R^d$ intended to approximate the target field $s^*(t,x)=\nabla_x\log p_t(x)$ for a specified family $(p_t)_{t\in[0,T]}$ of positive continuously differentiable probability densities for which $s^*$ is jointly Borel. Its complete description names a probability law $P_{\rm fit}$ for all variables used to fit $\phi$ and a probability law $P_{\rm test}$ on $[0,T]\times\mathbb R^d$ for evaluation inputs $(t,x)$; the target on those inputs is $s^*(t,x)$. These laws need not agree, and no approximation guarantee under either law is implied. A score field is not itself a posterior law, posterior sample, or point reconstruction rule. A **posterior sampler** is a probability kernel $S:Y\to Q$; relative to a supplied posterior target kernel $\Pi_y$, it is exact on a data domain $D$ when $S_y=\Pi_y$ as probability measures for every $y\in D$. A draw from $S_y$ is random; obtaining a point estimate from it requires an additional summary rule. The name “learned” by itself asserts no exact recovery, stability, convergence, calibration, or train-to-test guarantee.

## Definition references

[[def-ip-forward-map-and-solution-classes|Metric parameter/data model, admissible truths, forward map, and target-class map]]

[[def-ip-identifiability-and-stability-modulus|Deterministic data-only estimator interface and its exactness convention]]

[[def-ip-misfit-evidence-and-posterior-law|Evidence-normalized inverse posterior and data-indexed kernel convention]]

[[def-hilbert-space|Real Hilbert signal spaces are complete real inner-product spaces]]

[[def-measurable-space|Measurable spaces and their sigma-algebras]]

[[def-probability-measure|Probability measures used for fitting and signal laws]]

[[def-measurable-function-between-measurable-spaces|Borel measurability of reconstruction maps]]

[[def-measure-kernel-and-probability-kernel|Probability kernels for posterior samplers]]

[Ongie et al., §§3.1 and 4.1–4.2.1, full paper](https://arxiv.org/pdf/2005.06001v1)

[Daras et al., §§1.2 and 2.4.2–2.4.3, full survey](https://arxiv.org/pdf/2410.00083v1)

[Dashti and Stuart, §3.2, full lecture notes](https://arxiv.org/pdf/1302.6989v4)
