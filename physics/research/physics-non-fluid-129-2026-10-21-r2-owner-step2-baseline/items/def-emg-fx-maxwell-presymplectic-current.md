---
id: def-emg-fx-maxwell-presymplectic-current
kind: definition
title: "Fixed-background Maxwell presymplectic current"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - prop-emg-fx-affine-connection-sector
  - def-emg-local-potentials-and-circle-data
  - def-emg-fx-linearized-electrovac
  - lem-emg-fx-linearized-hodge
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  def-countable-choice: mathematical-premise
  prop-emg-fx-affine-connection-sector: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  def-emg-fx-linearized-electrovac: mathematical-premise
  lem-emg-fx-linearized-hodge: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, JHEP 2020, 146, arXiv:1906.08616v4"
      url: "https://arxiv.org/pdf/1906.08616"
      locator: "Complete 61-page paper inspected. §3.3, Maxwell theory, printed pp. 26–27 (PDF pp. 27–28), including the variation, pre-symplectic form, and boundary gauge charge."
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, Physical Review D 50 (1994), 846–864, arXiv:gr-qc/9403028v1"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
      locator: "Complete 31-page paper inspected. §3, equations (44)–(47), printed pp. 8–9 (PDF pp. 9–10): symplectic current, integrated pre-symplectic form, and boundary ambiguity."
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, lecture notes, arXiv:1801.07064v4"
      url: "https://arxiv.org/pdf/1801.07064"
      locator: "Complete 125-page lecture notes inspected. Lecture 1, §§1.3.1–1.3.3, printed pp. 14–22 (PDF pp. 14–22): field-space forms, symplectic current, and local boundary identities; their current ordering is translated explicitly."
---

## Definition

Assume $\mathrm{AC}_\omega$ as inherited from the smooth principal-connection convention. Fix an oriented, time-oriented smooth Lorentzian four-manifold $(M,g,N,o)$ and a fixed normalized $U(1)$ connection sector as in the fixed-topology affine-sector result. Its connection variations are global smooth real one-forms $\alpha,\beta\in\Omega^1(M)$, with components of unit $\mathrm m^{-1}$ in length-coordinate charts. Impose the fixed-background Maxwell operator equations $d\star_g d\alpha=0$ and $d\star_g d\beta=0$, where $\star_g$ is the oriented Lorentzian Hodge map of signature $(-,+,+,+)$. Define the real three-form

$$\omega_g(\alpha,\beta):=\alpha\wedge\star_g d\beta-\beta\wedge\star_g d\alpha.$$

For an oriented smooth spacelike embedded three-dimensional submanifold $\iota_\Sigma:\Sigma\hookrightarrow M$, with $g|_{T\Sigma}$ positive definite, its presymplectic pairing on these two variations is $\Omega_\Sigma(\alpha,\beta):=\int_\Sigma\iota_\Sigma^*\omega_g(\alpha,\beta)$ whenever this integral converges. In length coordinates, the coefficients of $d\alpha$ and $d\beta$ have units $\mathrm m^{-2}$, those of $\omega_g$ have units $\mathrm m^{-3}$, and the normalized integral is dimensionless. Replacing normalized variations by physical-potential variations $\kappa_0\alpha$ and $\kappa_0\beta$ multiplies the current by $\kappa_0^2$; an action prefactor is not fixed here.

This is a mathematical fixed-metric Maxwell-block definition. The equations are imposed on the normalized connection variations. The item does not identify $\kappa_0d\alpha$ with the geometric-normalized electrovac field of the coupled Einstein–Maxwell equations, prescribe a conversion between those normalizations, include metric variations, or claim to define the full coupled covariant phase-space current.

## Definition references

[[def-countable-choice]]

[[prop-emg-fx-affine-connection-sector]]

[[def-emg-local-potentials-and-circle-data]]

[[lem-emg-fx-linearized-hodge]]

[[lem-emg-lorentz-hodge-calculus]]

## Remarks

The fixed-metric restriction is essential: the Hodge-variation result gives $\delta(\star_g\mathcal F)=\star_g f$ when the metric perturbation is zero. For nonzero metric perturbations the terms involving $h$ in the Hodge variation remain, and the full Einstein–Maxwell current needs additional gravitational and mixed contributions. The current formula is bilinear and antisymmetric by the symmetry of the Lorentzian two-form pairing.
