---
id: def-csm-dk-hamiltonian-flow-measure
kind: definition
title: Hamiltonian phase, complete-domain flow and reference measure
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-symplectic-form-and-symplectic-manifold
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions
  - thm-fundamental-theorem-for-autonomous-smooth-odes
  - cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form
  - def-density-bundle-and-smooth-density
  - def-borel-measurable-nonnegative-density-on-a-manifold
  - thm-density-measure-is-independent-of-the-chart-gluing
  - thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure
  - def-countable-choice
dependency_roles:
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions: mathematical-premise
  thm-fundamental-theorem-for-autonomous-smooth-odes: mathematical-premise
  cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form: mathematical-premise
  def-density-bundle-and-smooth-density: mathematical-premise
  def-borel-measurable-nonnegative-density-on-a-manifold: mathematical-premise
  thm-density-measure-is-independent-of-the-chart-gluing: mathematical-premise
  thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §§3.2–3.3
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.02:_Phase_Flows_in_Classical_Mechanics
---

## Definition

Adopt $\mathrm{AC}_\omega$ for the density-measure construction
([[def-countable-choice]]). A **Hamiltonian phase datum** consists of a
Hausdorff second-countable smooth manifold $M$ of finite even dimension $2n$
without boundary, a symplectic form $\omega$ on $M$, and an autonomous smooth
function $H:M\to\mathbb R$. Here symplectic means that $\omega$ is a smooth
closed two-form and is nondegenerate at every point
([[def-symplectic-form-and-symplectic-manifold]]). The Hamiltonian vector field
$X_H$ is the unique smooth field satisfying $\iota_{X_H}\omega=dH$
([[def-hamiltonian-vector-field-and-hamiltonian-function]],
[[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]]).
Its maximal local flow $\Phi_t$ is the family of unique local solutions of
$\dot z=X_H(z)$ supplied by the smooth ODE theorem
([[thm-fundamental-theorem-for-autonomous-smooth-odes]]); completeness is not
part of this data.

A Borel set $R\subseteq M$ is a **complete invariant domain** for this datum
if for every $t\in\mathbb R$, $\Phi_t$ is defined at every $z\in R$ and
$\Phi_t(R)=R$. The definition makes no assertion that $M$ itself is complete
or that such an $R$ has finite measure.

The symplectic orientation has volume form $\Omega=\omega^n/n!$
([[cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form]]).
For a fixed positive reference action $a_0$, define the positive smooth density
$\eta_0=|\Omega|/a_0^n$ and let $m_0$ be its intrinsic Borel measure
([[def-density-bundle-and-smooth-density]],
[[def-borel-measurable-nonnegative-density-on-a-manifold]],
[[thm-density-measure-is-independent-of-the-chart-gluing]],
[[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]).
The measure $m_0$ may have infinite total mass. In a standard mechanical
cotangent chart, $q^i$ has unit m, $p_i$ has unit kg m/s, $\omega$ and $a_0$
have unit J s, and $\eta_0$ is dimensionless. The scale $a_0$ is a
normalization convention and does not assert quantization.

An **ensemble** on $R$ is a Borel probability measure $\mu$ on $R$, distinct
from an individual trajectory. If $\mu$ has density $\rho$ with respect to
$m_0|_R$, then $\rho\ge0$ is Borel and $\int_R\rho\,dm_0=1$. For $\beta>0$,
the **canonical probability**, when it exists, is
$\mu_\beta=Z_\beta^{-1}e^{-\beta H}m_0|_R$, where
$Z_\beta=\int_R e^{-\beta H}\,dm_0$ must satisfy $0<Z_\beta<\infty$.
Here $H$ is measured in J, temperature $T$ in K, and
$\beta=(k_BT)^{-1}$ in J$^{-1}$.

## Remarks

The flow's actual domain, its complete invariant subsets, the reference
measure, and any ensemble probability are separate data. Smoothness alone
does not imply completeness, finite phase volume, normalizability of a
canonical weight, recurrence, or ergodicity.
