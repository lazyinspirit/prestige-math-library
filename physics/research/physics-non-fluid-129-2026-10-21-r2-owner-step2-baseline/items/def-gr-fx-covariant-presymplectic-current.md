---
id: def-gr-fx-covariant-presymplectic-current
kind: definition
title: Covariant presymplectic current
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gr-fx-covariant-field-variations
  - def-smooth-differential-k-form
  - def-exterior-derivative-by-the-invariant-vector-field-formula
  - def-smooth-singular-chain-and-cochain-complexes
  - def-integral-of-a-form-over-a-smooth-singular-simplex
dependency_roles:
  def-gr-fx-covariant-field-variations: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §3, equations (40)–(47)"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.1"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.2–2.3"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pending
---

## Definition

Let $M$ be an oriented smooth four-manifold and let $\phi$ be a field
configuration in a specified smooth field bundle. A **local Lagrangian
four-form** $\mathcal L(\phi)$ is a smooth four-form whose coordinate
coefficients depend smoothly on the field components and finitely many
spacetime derivatives at each point. A **chosen first-variation
decomposition** consists of a linear Euler functional $E_\phi[\eta]$ with
values in four-forms and a three-form $\theta(\phi;\eta)$, each linear in the
field variation $\eta$ and its derivatives, such that every smooth
one-parameter field family satisfies

$$\delta\mathcal L=E_\phi[\delta\phi]+d_M\theta(\phi;\delta\phi).$$

The choice is part of the data; it is not asserted to be unique. In a
parameter family, $\delta_iE_\phi$ means the derivative of the coefficients
of $E_\phi$ with its variation input held fixed. Thus the total derivative of
$E_{\phi(p)}[\eta(p)]$ is
$(\delta_iE_\phi)[\eta]+E_\phi[\delta_i\eta]$. For a smooth
finite-dimensional field family with parameter exterior derivative $d_P$,
the one-form $\Theta$ on parameter space with values in spacetime three-forms
is $\Theta_p(v)=\theta(\phi_p;\delta_v\phi_p)$. Define the **covariant
presymplectic current** by $\omega:=-d_P\Theta$. For commuting parameter
coordinates $s_1,s_2$ this is

$$\omega(\delta_1\phi,\delta_2\phi) =\delta_2\theta(\phi;\delta_1\phi) -\delta_1\theta(\phi;\delta_2\phi).$$

For a finite oriented smooth singular three-chain $\Sigma$, define the
integrated two-form by
$\Omega_\Sigma(\delta_1\phi,\delta_2\phi)=\int_\Sigma\omega$.

## Definition references

[Some Properties of Noether Charge, §3](https://arxiv.org/pdf/gr-qc/9403028)

[Advanced Lectures on General Relativity, §1.3.1](https://arxiv.org/pdf/1801.07064)

[Covariant phase space with boundaries, §§2.2–2.3](https://arxiv.org/pdf/1906.08616)

[[def-gr-fx-covariant-field-variations]]

[[def-smooth-differential-k-form]]

[[def-exterior-derivative-by-the-invariant-vector-field-formula]]

[[def-smooth-singular-chain-and-cochain-complexes]]

[[def-integral-of-a-form-over-a-smooth-singular-simplex]]

## Remarks

The definition uses finite-dimensional smooth families to specify all
variations and their derivatives. It does not assume a global smooth
infinite-dimensional configuration or solution manifold. No asymptotic
falloff, boundary condition, or uniqueness of $\theta$ is included.
