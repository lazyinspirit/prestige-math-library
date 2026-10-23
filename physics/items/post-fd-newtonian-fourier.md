---
id: post-fd-newtonian-fourier
kind: postulate
title: "Newtonian stress and Fourier conductive closure"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-quantity-and-frame-conventions
  - lem-fd-isotropic-linear-classification
dependency_roles:
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-isotropic-linear-classification: formulation-prerequisite
justified_by: []
aliases: []
physical_scope: >-
  An adopted smooth, single-component Newtonian/Fourier closure with an
  isotropic symmetric linear viscous response, specified nonnegative shear and
  bulk coefficient laws, and a tensor-valued conductivity whose symmetric part
  is positive semidefinite; anisotropic conduction is allowed. No coefficient
  is inferred from a measurement and no universal fluid applicability is
  asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§§3.1–3.1.1, printed pp. 58–61"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§§6.5.1–6.5.3 and §6.7.2, printed pp. 242–245, 251–252"
verification:
  precheck: pending
  sources_checked:
    date: 2026-10-23
    scope: Completed native formulation/status, source-evidence and applicability review; exact evidence and reading limits in research/fluid-dynamics-all-47-2026-10-23-publication.json. No new retrieval, measurement or solution is claimed.
    by: owner-authorized native reviewers (gpt-6.1-sol)
---

## Postulate

Use a Cartesian inertial frame in Newtonian spacetime. At an event let $u$ be the fluid velocity, $T>0$ its temperature, $\rho>0$ its mass density, and $\xi=(\rho,T)$ its local state in a specified open set $\mathcal S\subset(0,\infty)^2$. The velocity gradient has components $L_{ij}=\partial_{x_j}u_i$; define the symmetric rate matrix $D=(L+L^T)/2$, its trace $\theta=\operatorname{tr}D$, and its trace-free part $D_0=D-\theta I_3/3$, where $I_3$ is the $3\times3$ identity matrix. For $A,B\in\mathbb R^{3\times3}$, use the Frobenius contraction $A:B=\sum_{i,j=1}^3A_{ij}B_{ij}$.

Adopt specified scalar state laws $\mu,\zeta:\mathcal S\to[0,\infty)$ and a specified conductivity matrix law $K:\mathcal S\to\mathbb R^{3\times3}$, with
$$ x^T\operatorname{sym}K(\xi)x\ge0\quad(x\in\mathbb R^3),\qquad \operatorname{sym}K:=(K+K^T)/2. $$
The conductivity law is tensor-valued and may be anisotropic; no restriction $K=kI_3$ is imposed. Define $\operatorname{Sym}(3):=\{D\in\mathbb R^{3\times3}:D^T=D\}$ and $\operatorname{SO}(3):=\{Q\in\mathbb R^{3\times3}:Q^TQ=I_3,\ \det Q=1\}$. At a fixed state, let $\mathcal A_\xi:\operatorname{Sym}(3)\to\operatorname{Sym}(3)$ assign the viscous stress to the symmetric rate matrix. Assume it is real-linear, meaning $\mathcal A_\xi(aD+bE)=a\mathcal A_\xi(D)+b\mathcal A_\xi(E)$ for all $a,b\in\mathbb R$ and $D,E\in\operatorname{Sym}(3)$, and equivariant in the sense $\mathcal A_\xi(QDQ^T)=Q\mathcal A_\xi(D)Q^T$ for every $Q\in\operatorname{SO}(3)$. Adopt
$$ \tau=\mathcal A_\xi(D)=2\mu(\xi)D_0+\zeta(\xi)\theta I_3,\qquad \sigma=-pI_3+\tau,\qquad q=-K(\xi)\nabla T. $$
Here $p$ is the scalar pressure field in the tension-positive convention: the traction on an outward unit normal $n$ is $\sigma n$. Under a rigid observer rotation $Q\in\operatorname{SO}(3)$, tensor fields transform by $S^*=QSQ^T$; $\mu,\zeta$ are scalar state functions and $K^*=QKQ^T$. The viscous response is isotropic in this proper-rotation sense, while the conductivity tensor transforms covariantly and may be anisotropic. The mathematical linear-isotropic classification identifies this stress form from the stated domain, codomain, linearity and equivariance hypotheses; it does not establish that any material adopts them.

In SI units, $D,\theta,D_0$ are in $\mathrm{s^{-1}}$, $\mu,\zeta$ in $\mathrm{Pa\,s}$, $K$ in $\mathrm{W\,m^{-1}\,K^{-1}}$, $q$ in $\mathrm{W\,m^{-2}}$, and $\sigma,\tau,p$ in $\mathrm{Pa}$. If the same stress is written $2\mu D+\lambda\theta I_3$, then $\lambda=\zeta-2\mu/3$; no nonnegativity of $\lambda$ is assumed. These specified constitutive functions are adopted model inputs, not measured coefficient values or consequences of balance laws.

## Postulate references

[David Tong, *Fluid Mechanics*, Part II lecture notes, §§3.1–3.1.1, printed pp. 58–61](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §§6.5.1–6.5.3 and §6.7.2, printed pp. 242–245 and 251–252](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** The adopted smooth fields, state set, SI conventions, stress sign, and coefficient functions in the Postulate.

[L1] [[def-fd-quantity-and-frame-conventions]]: $D=(\nabla u+\nabla u^T)/2$, $D_0=D-\theta I_3/3$, $\theta=\operatorname{div}u$, stress acts by traction $\sigma n$, and stress transforms as $S^*=QSQ^T$. Its current batch-3 carrier and SI dictionary were inspected, and step1Decision currently reports ready; this records authoring readiness only, not independent proof acceptance.

[L2] [[lem-fd-isotropic-linear-classification]]: $\operatorname{Sym}(3)=\{D\in\mathbb R^{3\times3}:D^T=D\}$; if a real-linear map $A:\operatorname{Sym}(3)\to\operatorname{Sym}(3)$ obeys $A(QDQ^T)=QA(D)Q^T$ for every $Q\in\operatorname{SO}(3)$, then it has the unique form $A(D)=2\mu D+\lambda(\operatorname{tr}D)I_3$. The current batch-10 Statement and complete proof were inspected, and step1Decision currently reports ready; this classification identifies the form only after linearity and isotropy are assumed.

[A1] The stated state laws, linear response, rotational equivariance, coefficient restrictions, and Fourier flux are adopted physical premises. No experiment, material coefficient, or universal constitutive validity is asserted.
