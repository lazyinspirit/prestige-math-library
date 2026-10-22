---
id: prop-gr-fx-diffeomorphism-current-identity
kind: proposition
title: Diffeomorphism Noether current identity and local charge
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-covariant-field-variations
  - def-gr-fx-covariant-presymplectic-current
  - lem-gr-fx-star-shaped-poincare-homotopy
  - thm-cartans-magic-formula
  - def-lie-derivative-of-a-differential-form
  - def-lie-derivative-of-a-tensor-field
dependency_roles:
  def-gr-fx-covariant-field-variations: mathematical-premise
  def-gr-fx-covariant-presymplectic-current: mathematical-premise
  lem-gr-fx-star-shaped-poincare-homotopy: mathematical-premise
  thm-cartans-magic-formula: mathematical-premise
  def-lie-derivative-of-a-differential-form: mathematical-premise
  def-lie-derivative-of-a-tensor-field: mathematical-premise
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §4, equations (49)–(51)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.3"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.3–2.4"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pending
---

## Statement

Let $\mathcal L$ be a local Lagrangian four-form on an oriented smooth
four-manifold, with a chosen first-variation decomposition
$\delta\mathcal L=E_\phi[\delta\phi]+d_M\theta(\phi;\delta\phi)$. Let
$\xi$ be a smooth spacetime vector field that has a local flow acting on the
fields, and assume the Lagrangian is diffeomorphism covariant, meaning
$\delta_\xi\mathcal L=\mathcal L_\xi\mathcal L$ for
$\delta_\xi\phi=\mathcal L_\xi\phi$. Define the Noether current three-form

$$J_\xi:=\theta(\phi;\mathcal L_\xi\phi)-\iota_\xi\mathcal L .$$

Then

$$d_MJ_\xi=-E_\phi[\mathcal L_\xi\phi].$$

Thus $J_\xi$ is closed on solutions. On every star-shaped coordinate
neighborhood $U$, a solution has a local two-form $Q_\xi$ with
$J_\xi|_U=d_MQ_\xi$.

## Statement references

[Some Properties of Noether Charge, §4](https://arxiv.org/pdf/gr-qc/9403028)

[Advanced Lectures on General Relativity, §1.3.3](https://arxiv.org/pdf/1801.07064)

[Covariant phase space with boundaries, §§2.3–2.4](https://arxiv.org/pdf/1906.08616)

[[def-gr-fx-covariant-field-variations]]

[[def-gr-fx-covariant-presymplectic-current]]

[[lem-gr-fx-star-shaped-poincare-homotopy]]

[[thm-cartans-magic-formula]]

[[def-lie-derivative-of-a-differential-form]]

[[def-lie-derivative-of-a-tensor-field]]

## Facts & Assumptions

**Given:** The selected first-variation decomposition, a smooth vector field
$\xi$, its local action on the fields, and diffeomorphism covariance of
$\mathcal L$.

[A1] $\delta_\xi\phi=\mathcal L_\xi\phi$ and
$\delta_\xi\mathcal L=\mathcal L_\xi\mathcal L$.

[F1] The first-variation decomposition is
$\delta\mathcal L=E_\phi[\delta\phi]+d_M\theta(\phi;\delta\phi)$.
[[def-gr-fx-covariant-presymplectic-current]]

[F2] Cartan's identity is
$\mathcal L_\xi\alpha=d_M(\iota_\xi\alpha)+\iota_\xi(d_M\alpha)$ for every
differential form $\alpha$. [[thm-cartans-magic-formula]]

[F3] A closed smooth $k$-form on a star-shaped coordinate domain has a
primitive for each $1\le k\le4$.
[[lem-gr-fx-star-shaped-poincare-homotopy]]

[F4] For a tensor field and the local flow $\Phi_t$ of $\xi$,
$\mathcal L_\xi T=\left.\frac{d}{dt}\right|_0\Phi_t^*T$.
[[def-lie-derivative-of-a-tensor-field]]

## Proof

**Given:** As in [A1] and [F1]–[F4].

1.1 By [F4], $\mathcal L_\xi\mathcal L$ is the derivative of the pullback
of $\mathcal L$ along the local flow. Since $\mathcal L$ is a four-form on a
four-manifold, $d_M\mathcal L=0$ by degree. Cartan's identity [F2] gives
$\delta_\xi\mathcal L=\mathcal L_\xi\mathcal L
=d_M(\iota_\xi\mathcal L)$. [A1, F2, F4, algebra]

1.2 Apply [F1] to the variation $\delta_\xi\phi=\mathcal L_\xi\phi$ and
equate it with step 1.1:
$E_\phi[\mathcal L_\xi\phi]+d_M\theta(\phi;\mathcal L_\xi\phi)
=d_M(\iota_\xi\mathcal L)$. Rearranging gives
$d_MJ_\xi=-E_\phi[\mathcal L_\xi\phi]$. [A1, F1, step 1.1, algebra]

2.1 If $E_\phi=0$, step 1.2 gives $d_MJ_\xi=0$. Restrict to any
star-shaped coordinate neighborhood and apply [F3] with $k=3$; this yields
a two-form $Q_\xi$ on that neighborhood such that $J_\xi=d_MQ_\xi$ there.
[F3, step 1.2] ∎

## Remarks

The primitive is local. This proposition gives no global Noether charge
without a separate cohomological argument. It asserts a classical identity
only; it constructs no measure, Hilbert space, or anomaly-free quantization.
