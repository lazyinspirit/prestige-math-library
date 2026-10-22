---
id: ex-csm-frontier-ssep-density-mode
kind: example
title: "A single Fourier density mode under SSEP hydrodynamics"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-axiom-of-choice
  - lem-csm-frontier-ssep-heat-flow
  - thm-csm-frontier-ssep-heat-limit
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-csm-frontier-ssep-heat-flow: mathematical-premise
  thm-csm-frontier-ssep-heat-limit: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: null
sources:
  references:
    - title: "S. R. S. Varadhan, Hydrodynamic Scaling, Chapter 4 lecture notes"
      url: "https://math.nyu.edu/~varadhan/Spring2012/Chapter4.pdf"
      locator: "Section 4.3, Theorem 4.3.1: SSEP empirical measures converge to the heat profile under the stated initial-profile condition."
    - title: "Claudio Landim, Hydrodynamic Limit of Interacting Particle Systems, complete lecture notes"
      url: "https://math.arizona.edu/~sethuram/588/Landim.pdf"
      locator: "Chapter 2, Theorem 2.5, printed pp. 83–84: convergence in probability from initial empirical-profile convergence."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Fix $d\ge1$, $k\in\mathbb Z^d$, $a\in[0,1]$, and $b\in\mathbb R$ with $|b|\le\min(a,1-a)$. For initial density $\rho_0(x)=a+b\cos(2\pi k\cdot x)$, the continuum heat profile is

$$\rho_t(x)=a+b\exp(-4\pi^2|k|^2t)\cos(2\pi k\cdot x),\qquad t\ge0.$$

For any sequence of SSEP initial laws whose empirical measures converge in probability against every smooth periodic test to this $\rho_0(x)\,dx$, the empirical-field conclusion of the diffusive heat-limit theorem holds uniformly for $0\le t\le T$ for each finite $T$. This is a conditional model prediction, not a measured diffusion profile.

## Example references

[[lem-csm-frontier-ssep-heat-flow]]

[[thm-csm-frontier-ssep-heat-limit]]

## Facts & Assumptions

**Given:** The Axiom of Choice; $d\ge1$, $k\in\mathbb Z^d$, $a\in[0,1]$, $|b|\le\min(a,1-a)$; and an SSEP initial-law sequence satisfying the theorem's empirical-profile hypothesis.

[A1] Assume the Axiom of Choice, meaning every family of nonempty sets has a choice function, as required by the heat-limit theorem ([[def-axiom-of-choice]]).

[F1] [[lem-csm-frontier-ssep-heat-flow]]: the weak heat solution is unique and its Fourier modes evolve with multiplier $e^{-4\pi^2|k|^2t}$.

[F2] [[thm-csm-frontier-ssep-heat-limit]]: under the stated initial empirical-profile convergence, SSEP empirical fields converge uniformly in time against each smooth periodic test to the heat profile.

## Verification

1.1 The constant function has Laplacian zero. Direct differentiation of $\cos(2\pi k\cdot x)$ gives $\Delta\cos(2\pi k\cdot x)=-4\pi^2|k|^2\cos(2\pi k\cdot x)$. Therefore the displayed $\rho_t$ solves $\partial_t\rho_t=\Delta\rho_t$ and has the stated initial value. The bound on $b$ gives $0\le\rho_0\le1$. [given, algebra]

2.1 By uniqueness in [F1], this explicit solution is the heat profile used in [F2]. Applying [F2] to the assumed SSEP sequence gives the uniform-in-time convergence statement. The formula is therefore a conditional model prediction and contains no empirical observation. [A1, F1, F2, step 1.1] ∎
