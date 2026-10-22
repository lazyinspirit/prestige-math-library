---
id: prop-gr-fx-potential-ambiguity
kind: proposition
title: Potential ambiguity changes the current by a corner term
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-covariant-presymplectic-current
  - thm-stokes-theorem-for-smooth-singular-chains
  - def-gr-fx-covariant-field-variations
  - thm-the-exterior-derivative-squares-to-zero
dependency_roles:
  def-gr-fx-covariant-presymplectic-current: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  def-gr-fx-covariant-field-variations: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §3, equations (40)–(47)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.3, Some residual ambiguities"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.2–2.3"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pending
---

## Statement

For a fixed smooth two-parameter family of commuting variations, replace the
Lagrangian and its selected potential by

$$\mathcal L'=\mathcal L+d_M\mu,\qquad \theta'(\phi;\delta\phi) =\theta(\phi;\delta\phi)+\delta\mu(\phi;\delta\phi) +d_MY(\phi;\delta\phi),$$

where $\mu$ is a local spacetime three-form and $Y$ is a local spacetime
two-form linear in the variation. Then

$$\omega'-\omega =d_M\bigl(\delta_2Y(\delta_1\phi)-\delta_1Y(\delta_2\phi)\bigr).$$

Consequently, for a finite oriented smooth singular three-chain $\Sigma$,
the integrated form changes by the integral of this two-form over
$\partial\Sigma$.

## Statement references

[Some Properties of Noether Charge, §3](https://arxiv.org/pdf/gr-qc/9403028)

[Advanced Lectures on General Relativity, §1.3.3](https://arxiv.org/pdf/1801.07064)

[Covariant phase space with boundaries, §2.2](https://arxiv.org/pdf/1906.08616)

[[def-gr-fx-covariant-presymplectic-current]]

[[def-gr-fx-covariant-field-variations]]

[[thm-stokes-theorem-for-smooth-singular-chains]]

[[thm-the-exterior-derivative-squares-to-zero]]

## Facts & Assumptions

**Given:** The chosen decomposition, commuting variations, a local
three-form $\mu$, and a local variation-linear two-form $Y$.

[A1] $\omega(\delta_1,\delta_2)
=\delta_2\theta(\delta_1)-\delta_1\theta(\delta_2)$.
[[def-gr-fx-covariant-presymplectic-current]]

[A2] Mixed variations commute on the given smooth two-parameter family.
[[def-gr-fx-covariant-field-variations]]

[F1] The exterior derivative squares to zero: $d_M^2\beta=0$.
[[thm-the-exterior-derivative-squares-to-zero]]

[F2] The exterior derivative commutes with finite-chain integration:
$\int_\Sigma d_M\beta=\int_{\partial\Sigma}\beta$.
[[thm-stokes-theorem-for-smooth-singular-chains]]

## Proof

**Given:** As in [A1]–[A2].

1.1 Varying $\mathcal L'$ gives $\delta\mathcal L'=\delta\mathcal L+d_M(\delta\mu)$ because parameter differentiation commutes with spacetime differentiation on the smooth family. Since $d_M^2Y=0$ by [F1], the stated $\theta'$ is a valid selected potential for $\mathcal L'$. [A1, A2, F1, algebra]

2.1 Substitute $\theta'$ into [A1] for both ordered pairs. The added $\delta_2\delta_1\mu-\delta_1\delta_2\mu$ terms cancel by [A2], while the remaining terms are $d_M(\delta_2Y(\delta_1\phi)-\delta_1Y(\delta_2\phi))$. [A1, A2, step 1.1, algebra]

3.1 Integrate step 2.1 over $\Sigma$ and apply [F2]. This gives exactly the integral of the displayed two-form over $\partial\Sigma$; if $\partial\Sigma=0$, that contribution vanishes. [F2, step 2.1] ∎

## Remarks

The exact corner term need not vanish on a hypersurface with boundary.
Covariance alone supplies no boundary condition that removes it.
