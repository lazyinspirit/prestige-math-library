---
id: def-csm-frontier-gaussian-lattice
kind: definition
title: Finite periodic Gaussian lattice field with positive mass
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-countable-choice
  - lem-csm-frontier-periodic-laplacian-spectrum
  - lem-csm-frontier-massless-torus-normalization-diverges
  - def-csm-frontier-finite-gaussian-precision
  - thm-csm-examples-quadratic-covariance
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-csm-frontier-periodic-laplacian-spectrum: mathematical-premise
  lem-csm-frontier-massless-torus-normalization-diverges: mathematical-premise
  def-csm-frontier-finite-gaussian-precision: mathematical-premise
  thm-csm-examples-quadratic-covariance: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §2.2.2, printed pp. 44–46 / PDF pp. 45–47, lattice Fourier Green functions and massive Gaussian covariance.
    - title: Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems (A Concrete Mathematical Introduction), complete book PDF
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 8, §§8.2–8.3, printed pp. 385–389, finite Gaussian fields, discrete Laplacians and Green functions.
---

## Definition

Assume the Axiom of Countable Choice from [[def-countable-choice]]. Let integers $d,L\ge1$ specify the periodic lattice $\Lambda_{d,L}=(\mathbb Z/L\mathbb Z)^d$ and let $m^2>0$ and $\kappa>0$ be dimensionless real parameters in lattice units. On the real coordinate space $\mathbb R^{\Lambda_{d,L}}$, let

$$K_{d,L,m,\kappa}:=m^2I+\kappa(-\Delta),$$

where $-\Delta$ is the periodic Laplacian of [[lem-csm-frontier-periodic-laplacian-spectrum]]. Its eigenvalues are

$$m^2+4\kappa\sum_{j=1}^d\sin^2(\pi r_j/L),\qquad r\in\{0,\ldots,L-1\}^d,$$

so it is symmetric positive definite. The finite periodic Gaussian lattice field is the centered probability $\gamma_{K_{d,L,m,\kappa}}$ of [[def-csm-frontier-finite-gaussian-precision]], with density proportional to $\exp(-z^{\mathsf T}K_{d,L,m,\kappa}z/2)$ against Lebesgue measure on $\mathbb R^{L^d}$ and covariance $K_{d,L,m,\kappa}^{-1}$ by [[thm-csm-examples-quadratic-covariance]] at $\beta=1$.

The lattice coordinates $z_x$ and the quadratic exponent are dimensionless. Under the physical quadratic convention of [[def-csm-frontier-finite-gaussian-precision]], where $H(\Phi)=\frac12\Phi^{\mathsf T}K_{\rm phys}\Phi$ and each field component has unit $\Phi_*$, choosing $z_x=\Phi_x/\Phi_*$ gives dimensionless precision $K=\beta\Phi_*^2K_{\rm phys}$ when the energy is divided by $k_BT$. Here $\beta=(k_BT)^{-1}$ with the SI units for $k_B$ and $T$ specified in [[def-csm-frontier-finite-gaussian-precision]]; equivalently the physical precision for this lattice model is $K_{\rm phys}=(k_BT/\Phi_*^2)K_{d,L,m,\kappa}$. This conversion makes no empirical claim. At $m^2=0$, the constant field is a zero mode and the unrestricted normalizer diverges by [[lem-csm-frontier-massless-torus-normalization-diverges]], so the full-space positive-precision definition does not apply. A finite-volume massless model must first specify a restriction such as the subspace $\sum_{x\in\Lambda_{d,L}}z_x=0$ before inverting the Laplacian.

## Definition references

[[def-countable-choice]]

[[lem-csm-frontier-periodic-laplacian-spectrum]]

[[lem-csm-frontier-massless-torus-normalization-diverges]]

[[def-csm-frontier-finite-gaussian-precision]]

[[thm-csm-examples-quadratic-covariance]]
