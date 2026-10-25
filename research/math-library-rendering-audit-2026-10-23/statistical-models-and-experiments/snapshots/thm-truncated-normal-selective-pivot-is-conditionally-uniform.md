---
id: thm-truncated-normal-selective-pivot-is-conditionally-uniform
kind: theorem
title: The truncated normal selective pivot is conditionally uniform
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-polyhedral-selection-event-and-contrast-interval
  - def-polyhedral-selective-normal-pivot
  - lem-standard-normal-cdf-is-continuous-and-strictly-increasing
  - lem-polyhedral-event-restricts-contrast-to-interval
  - thm-gaussian-contrast-independent-of-orthogonal-residual
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - thm-independent-random-elements-have-product-joint-law
  - thm-conditional-density-formula
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
sources:
  references:
    - title: "Jason D. Lee, Dennis L. Sun, Yuekai Sun, and Jonathan E. Taylor, Exact Post-Selection Inference, with Application to the Lasso"
      url: "https://arxiv.org/pdf/1311.6238"
    - title: "Daniel García Rasines, LTCC Week 3: Selective Inference"
      url: "https://ltcc.ac.uk/media/london-taught-course-centre/LTCC_week3.pdf"
---

## Statement

Assume AC and the setup of [[def-polyhedral-selective-normal-pivot]], with $P_\mu(S)>0$. For $P_\mu(Z\in\cdot\mid S)$-almost every $z$, the conditional law of $T$ given $Z=z$ and $S$ is the $N(\theta,s^2)$ law restricted to $[L(z),U(z)]$ and normalized by $\Delta_\theta(z)>0$. Its CDF on that interval is $q_\theta(t,z)$. The pivot is Borel measurable on the selected data space. Consequently $q_\theta(Y)$ is Uniform$(0,1)$ conditionally on $(Z,S)$ wherever the normalizer is positive, and is also Uniform$(0,1)$ conditionally on $S$ alone. The event $S$ is a single fixed polyhedron; no union-of-polyhedra claim is made.

## Facts & Assumptions

**Given:** AC, known $\sigma>0$, nonzero fixed $\eta$, fixed $A,b$, $Y\sim N_n(\mu,\sigma^2I_n)$, and $P_\mu(S)>0$.

[A1] The Axiom of Choice is inherited from the Gaussian suppliers. [[def-axiom-of-choice]]

[F1] The polyhedron is exactly the feasible contrast interval with the zero-coefficient feasibility condition, and the interval fibers are Borel. [[lem-polyhedral-event-restricts-contrast-to-interval]]

[F2] $T$ and $Z$ are independent, and $T\sim N(\theta,s^2)$. [[thm-gaussian-contrast-independent-of-orthogonal-residual]]

[F3] Independent random elements have their product joint law. [[thm-independent-random-elements-have-product-joint-law]]

[F4] For a joint density relative to a product of sigma-finite measures and a supplied probability filler, the section integral is the marginal density; wherever that integral is finite and positive, the normalized section is a regular conditional distribution, and such sections have full marginal probability. [[thm-conditional-density-formula]]

[F5] The standard normal CDF is continuous and strictly increasing with limits zero and one at the extended endpoints. [[lem-standard-normal-cdf-is-continuous-and-strictly-increasing]]

[F6] A scalar law $N(\theta,s^2)$ for $s>0$ is the image of the standard normal by $x\mapsto\theta+sx$, so its CDF is $\Phi((t-\theta)/s)$. [[def-standard-normal-and-normal-laws]]

[F7] The functions $T,Z,L,U,G,\Delta_\theta$ and the pivot formula are those defined in the two local definition items. [[def-polyhedral-selection-event-and-contrast-interval]] [[def-polyhedral-selective-normal-pivot]]

## Proof

1.1 Under $P_\mu$, $T$ and $Z$ are independent by [F2], so their joint law is the product of their marginal laws by [F3]. Write $\nu_T=N(\theta,s^2)$ and let $\nu_Z$ be the marginal law of $Z$. Both are probability measures and hence sigma-finite. By [F1] and [F7], the selection event in these coordinates is the Borel set $D=\{(t,z):G(z),\ L(z)\le t\le U(z)\}$. For every product-measurable set $B$, conditioning the product law on $D$ gives $Q_\mu((T,Z)\in B)=\int_B\mathbf 1_D(t,z)/P_\mu(S)\,d(\nu_T\times\nu_Z)(t,z)$. Thus the selected joint law has this product density. [A1, F1, F2, F3, F7, given]

2.1 Put $H(z)=G(z)\land(L(z)\le U(z))$. If $H(z)$ fails, the fiber is empty and its section integral is zero. If $H(z)$ holds, the section is $[L(z),U(z)]$; by [F5], [F6], and the endpoint convention in [F7], its $\nu_T$-probability is $\Delta_\theta(z)$, including a singleton interval and infinite endpoints. Thus the section integral of the selected density is $m(z)=\mathbf 1_{H(z)}\Delta_\theta(z)/P_\mu(S)$. It is finite because $0\le\Delta_\theta(z)\le1$ on feasible fibers and $P_\mu(S)>0$. Apply [F4] with filler probability $\nu_T$: for almost every selected $z$, $m(z)>0$, so $H(z)$ holds, $L(z)<U(z)$, and $\Delta_\theta(z)>0$; the conditional law of $T$ is $K_z(B)=\nu_T(B\cap[L(z),U(z)])/\Delta_\theta(z)$. Fibers with zero section integral have zero selected marginal probability, so their arbitrary extension value in the pivot definition is immaterial. [A1, F1, F2, F4, F5, F6, F7, step 1.1]

3.1 For $L(z)\le t\le U(z)$, [F6] gives $K_z((-\infty,t])=[\Phi((t-\theta)/s)-\Phi((L(z)-\theta)/s)]/[\Phi((U(z)-\theta)/s)-\Phi((L(z)-\theta)/s)]=q_\theta(t,z)$. The denominator is positive exactly on the selected fibers under consideration. The finite max/min formulas make $L,U,G$ Borel, and [F5] with [F7] makes $\Delta_\theta$ Borel. On the Borel set of $y\in S$ for which $G(Z(y))$, $L(Z(y))<U(Z(y))$, and $\Delta_\theta(Z(y))>0$, the pivot's numerator and reciprocal denominator are Borel, so the ratio is Borel; the definition extends it by zero on the complement. [A1, F5, F6, F7, step 2.1, algebra]

4.1 Fix such a $z$. The conditional density in step 2.1 is positive throughout the interval and has no atoms; [F5] makes its CDF continuous and strictly increasing from zero to one, including when an endpoint is infinite. For any $u\in(0,1)$ there is a unique $t_u$ in the interval with $q_\theta(t_u,z)=u$, so $K_z\{t:q_\theta(t,z)\le u\}=K_z((-\infty,t_u])=q_\theta(t_u,z)=u$. At $u=0$ the probability is zero and at $u=1$ it is one because the conditional law has a density. Thus the pivot is uniform given $Z=z,S$. [A1, F4, F5, step 2.1, step 3.1, construct]

5.1 Integrating the conditional identity in step 4.1 against the selected marginal law of $Z$ supplied by [F4] gives $P_\mu(q_\theta(Y)\le u\mid S)=u$ for every $u\in[0,1]$. Hence the pivot is uniform given $S$ as well. [F4, step 4.1] ∎

## Remarks

The probability guarantee is conditional on the fixed selection event under the stated Gaussian sampling law. It does not establish that the Gaussian model is adequate for data, robustness to model misspecification, or simultaneous validity for several contrasts chosen after observing the data.
