---
id: pthm-csm-canonical-momentum-equipartition
kind: physics-theorem
title: "Canonical momentum distribution and equipartition"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-counting-and-physical-observables
  - post-csm-canonical-preparation
  - def-csm-phase-space-reference
  - thm-gaussian-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-cm01-units
  - def-td-si-quantities
dependency_roles:
  post-csm-counting-and-physical-observables: physical-assumption
  post-csm-canonical-preparation: physical-assumption
  def-csm-phase-space-reference: formulation-prerequisite
  thm-gaussian-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
physical_scope: "Finite classical canonical model with quadratic unconstrained momenta and bounded potential on a finite-volume configuration space; excludes constraints, relativistic dispersion, and empirical equilibration."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.3.1"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.4.6"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

Let $d,N\ge1$, put $n=dN$, and let $Q_N=Q^N$ be a compact configuration
domain of finite positive volume for $N$ identical particles of common mass
$m>0$. Let $U:Q_N\to\mathbb R$ be bounded and measurable.
Adopt the canonical preparation of
[[post-csm-canonical-preparation]] with the physical reference convention of
[[post-csm-counting-and-physical-observables]], Hamiltonian
$$H(q,p)=\sum_{j=1}^n\frac{p_j^2}{2m}+U(q),\qquad p\in\mathbb R^n,$$
and $\beta=(k_BT)^{-1}>0$. Then the partition function is finite and
positive, and the momentum components are independent centered Gaussians
with variance $m/\beta=mk_BT$. In particular,
$$\left\langle\frac{p_j^2}{2m}\right\rangle=\frac{1}{2\beta} =\frac{k_BT}{2},\qquad \langle K\rangle=\frac{n k_BT}{2}.$$
These are conditional deductions of the chosen canonical model.

## Facts & Assumptions

**Given:** The canonical preparation and counting convention, positive
quadratic momentum coefficients, bounded potential and finite configuration
volume.

[A1] The state has density proportional to $e^{-\beta H}$ relative to
$dq\,dp/(N!a_0^n)$, with $a_0>0$ the fixed action reference
([[post-csm-canonical-preparation]],
[[post-csm-counting-and-physical-observables]]).

[A2] $Q_N$ has finite positive volume, $U$ is bounded, $\beta>0$, and
$m>0$.

[F1] The one-dimensional Gaussian integral is finite and equals
$\int_{\mathbb R}e^{-a x^2}dx=\sqrt{\pi/a}$ for $a>0$
([[thm-gaussian-integral]]).

[F2] Nonnegative product integrals may be evaluated in either order
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F3] The canonical phase coordinates, action reference and SI units have the
stated conventions ([[def-csm-phase-space-reference]], [[def-cm01-units]]).

[F4] The SI kelvin, Boltzmann constant and relation $\beta=(k_BT)^{-1}$ use
the published thermodynamic units convention ([[def-td-si-quantities]]).

## Proof

**Given:** [A1]–[A2] and the Gaussian, Tonelli and coordinate conventions
[F1]–[F4].

1.1 Factor $e^{-\beta H}=e^{-\beta U(q)}\prod_j e^{-\beta p_j^2/(2m)}$. By [F1]–[F2], $$Z=\frac{1}{N!a_0^n}\left(\int_{Q_N}e^{-\beta U(q)}dq\right) \left(\frac{2\pi m}{\beta}\right)^{n/2}.$$ Boundedness of $U$, positive finite configuration volume, and positive finite Gaussian factors imply $0<Z<\infty$, so the adopted preparation is normalized. [A1, A2, F1, F2, algebra]

2.1 The factorized density makes the momentum marginal the product of densities proportional to $e^{-\beta p_j^2/(2m)}$, independent of $q$. Set $a=\beta/(2m)$ and integrate $\frac{d}{dp}(p e^{-ap^2})=e^{-ap^2}-2ap^2e^{-ap^2}$ over $\mathbb R$; the boundary term vanishes since $p e^{-ap^2}\to0$ at both ends. Dividing by the positive Gaussian integral gives $\langle p_j^2\rangle=1/(2a)=m/\beta$. This second moment makes the first absolute moment finite by Cauchy–Schwarz; since the density is even its centered mean is zero. The product form proves independence. Summing the $n$ quadratic contributions proves both equipartition identities. [A1, F1, F3, F4, step 1.1, algebra] ∎

