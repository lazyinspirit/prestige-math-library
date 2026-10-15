---
id: ex-qftmath-x05
kind: example
title: Two-body symmetry factors and massless daughter rate units
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-countable-choice
  - cor-qft-example-scalar-tree-coefficients
  - lem-qft-example-two-body-phase-space
dependency_roles:
  def-countable-choice: mathematical-premise
  cor-qft-example-scalar-tree-coefficients: mathematical-premise
  lem-qft-example-two-body-phase-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 3, sections 3.5.3 and 3.6
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html
      locator: Complete author-hosted HTML chapter; quartic scalar tree amplitude, two-body phase space, and decay coefficients.
    - title: Mark Srednicki, Quantum Field Theory, author-posted prepublication draft, section 11
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted textbook draft; two-body phase-space and identical-particle symmetry-factor calculation.
---

## Facts & Assumptions

**Given:** Assume Countable Choice $\mathrm{AC}_\omega$ [[def-countable-choice]]. Use the formal scalar coefficient conventions of [[cor-qft-example-scalar-tree-coefficients]] and [[lem-qft-example-two-body-phase-space]]. Set the equal scalar rest energy to $m=0$ and take $s>0$. For scattering, write $p_i=(E_i,\mathbf p_i)$ and $k_i=(\varepsilon_i,\mathbf k_i)$ with $E_i=|\mathbf p_i|>0$ and $\varepsilon_i=|\mathbf k_i|>0$, and require $P=p_1+p_2=k_1+k_2$ and $h(P,P)=s$, evaluating the scattering coefficients in the center-of-momentum frame of [[lem-qft-example-two-body-phase-space]]. For decay, take both daughters on that same positive shell with total parent $P_0=(\mathsf M_0,\mathbf0)$, $\mathsf M_0>0$. Let the constant quartic amplitude $\lambda\in\mathbb R$ and cubic parent amplitude $G_E\in\mathbb C$ have the units specified by those suppliers.

[A1] Countable Choice $\mathrm{AC}_\omega$ [[def-countable-choice]] is assumed; no stronger choice axiom is used.

[F1] [[cor-qft-example-scalar-tree-coefficients]]: identical and distinguishable scalar scattering coefficients and the equal-daughter decay-rate coefficient.

[F2] [[lem-qft-example-two-body-phase-space]]: the phase-space integral and the units and definitions of the formal coefficient maps.

## Example

Assume Countable Choice, $\mathrm{AC}_\omega$ [[def-countable-choice]], as required by the phase-space and coefficient-map suppliers used below.

The massless special case makes the identical-final-state factor and the rate-coefficient units explicit without adding an exponential lifetime assumption.

## Verification

1.1 Under [A1], the scalar and phase-space suppliers apply. Setting $m=0$ in [F1] gives the identical-final total scattering coefficient $\lambda^2(\hbar c)^2/(32\pi s)$; the distinguishable coefficient is twice this value. The two differential coefficients have the corresponding $1/(128\pi^2s)$ and $1/(64\pi^2s)$ factors. [given, A1, F1, algebra]

2.1 Setting the daughter rest energy to zero in [F1] gives $\Gamma_{\mathrm{coeff}}=|G_E|^2/(32\pi\hbar\mathsf M_0)$. Since $G_E$ and $\mathsf M_0$ are in joules and $\hbar$ is in joule-seconds, the units reduce to $\mathrm s^{-1}$. This coefficient does not determine a survival-time law. [step 1.1, F1, F2, algebra] ∎
