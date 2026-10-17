---
id: def-csm-dk-hamiltonian-flow-measure
kind: definition
title: Hamiltonian phase, complete-domain flow and reference measure
status: published
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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: David Tong, Classical Dynamics, complete author-hosted lecture notes, §4.2
      url: https://davidtong.org/teaching/classical-dynamics/dynhtml/S4
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §3.2
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/03:_Ergodicity_and_the_Approach_to_Equilibrium/3.02:_Phase_Flows_in_Classical_Mechanics
    - title: David Tong, Statistical Physics, §§1.2.1 and 1.3.1
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
    - title: David Tong, Statistical Physics, §2.1
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S2
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
For each $z\in M$, let $I_z\subseteq\mathbb R$ be the maximal open interval
containing $0$ on which the unique maximal $C^\infty$ integral curve
$\gamma_z:I_z\to M$ satisfying $\dot\gamma_z(t)=X_H(\gamma_z(t))$ and
$\gamma_z(0)=z$ is defined; its existence and uniqueness follow from the
smooth ODE theorem ([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).
Set $D=\{(t,z):z\in M,\ t\in I_z\}$ and define the maximal local flow
$\Phi:D\to M$ by $\Phi(t,z)=\gamma_z(t)$. Write $\Phi_t(z)=\Phi(t,z)$ when
$(t,z)\in D$. Uniqueness gives $\Phi_0(z)=z$ and
$\Phi_t(\Phi_s(z))=\Phi_{t+s}(z)$ whenever the terms are defined.
The domain $D$ is open, and in local charts $\Phi$ is smooth in the initial
state and $C^1$ in time, as supplied by the stated ODE theorem.
Completeness of the flow on all of $M$ is not part of this datum.

A Borel set $R\subseteq M$ is a **complete invariant domain** for this datum
if $\{t\}\times R\subseteq D$ and $\Phi_t(R)=R$ for every
$t\in\mathbb R$. Thus each restricted map $\Phi_t|_R:R\to R$ is defined
everywhere on $R$. The definition makes no assertion that $M$ itself is
complete or that such an $R$ has finite measure.

The symplectic orientation has volume form $\Omega=\omega^n/n!$
([[cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form]]).
For a fixed positive reference action $a_0$, define the positive smooth density
$\eta_0=|\Omega|/a_0^n$ and let $m_0$ be its intrinsic Borel measure
([[def-density-bundle-and-smooth-density]],
[[def-borel-measurable-nonnegative-density-on-a-manifold]],
[[thm-density-measure-is-independent-of-the-chart-gluing]],
[[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]).
The measure $m_0$ may have infinite total mass. Use SI units for a physical
interpretation. In a standard mechanical cotangent chart, $q^i$ has unit m,
$p_i$ has unit kg m/s, $H$ has unit J, $\omega$ and $a_0$ have unit J s, and
$\eta_0$ is dimensionless. The scale $a_0$ is a normalization convention and
does not assert quantization.

An **ensemble** on $R$ is a Borel probability measure $\mu$ on $R$, distinct
from an individual trajectory. If $\mu$ has density $\rho$ with respect to
$m_0|_R$, then $\rho\ge0$ is Borel and $\int_R\rho\,dm_0=1$. For $\beta>0$,
the **canonical probability**, when it exists, is the Borel measure
$$\mu_\beta(B)=Z_\beta^{-1}\int_B e^{-\beta H}\,dm_0,\qquad Z_\beta=\int_R e^{-\beta H}\,dm_0,$$
for Borel $B\subseteq R$, provided $0<Z_\beta<\infty$. For a
temperature-parameterized physical interpretation, take $T>0$ as an absolute
temperature in K and $k_B>0$ as a supplied energy-temperature conversion
constant in J/K, and set $\beta=(k_BT)^{-1}$ in J$^{-1}$.

## Remarks

The flow's actual domain, its complete invariant subsets, the reference
measure, and any ensemble probability are separate data. Smoothness alone
does not imply completeness, finite phase volume, normalizability of a
canonical weight, recurrence, or ergodicity.
