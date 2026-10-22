---
id: ex-gr-fx12-1
kind: example
title: Scalar-field potential and Cauchy-data pairing
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps:
  - def-gr-fx-covariant-presymplectic-current
  - prop-gr-fx-on-shell-current-closure
  - prop-gr-fx-potential-ambiguity
  - def-gr-fx-admissible-phase-reduction
  - def-wedge-product-of-differential-forms
  - thm-the-exterior-derivative-is-a-graded-derivation
  - thm-local-coordinate-formula-for-the-exterior-derivative
dependency_roles:
  def-gr-fx-covariant-presymplectic-current: mathematical-premise
  prop-gr-fx-on-shell-current-closure: mathematical-premise
  prop-gr-fx-potential-ambiguity: mathematical-premise
  def-gr-fx-admissible-phase-reduction: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
sources:
  references:
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §3.2, Two-derivative scalar field"
      url: "https://arxiv.org/pdf/1906.08616"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §1.3.1"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §3"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
verification:
  precheck: pending
---

## Example

Let $M=\mathbb R_t\times\mathbb T^3$ with periodic spatial coordinates
$(x,y,z)$ of period one, orientation
$dt\wedge dx\wedge dy\wedge dz$, and flat metric
$g=-dt^2+dx^2+dy^2+dz^2$. Write
$\mathrm{vol}=dt\wedge dx\wedge dy\wedge dz$. For one-forms, define the
Hodge map by
$$*dt=-dx\wedge dy\wedge dz,\quad *dx=-dt\wedge dy\wedge dz,\quad *dy=dt\wedge dx\wedge dz,\quad *dz=-dt\wedge dx\wedge dy,$$
and extend it linearly with smooth coefficients. Let
$\psi\in C^\infty(M,\mathbb R)$, let $\mu\ge0$ be a fixed real parameter,
and take
$$\mathcal L=-\frac12d\psi\wedge *d\psi-\frac12\mu^2\psi^2\mathrm{vol}.$$
All objects here are mathematical; no physical units or empirical
interpretation are assigned. At the base solution $\psi=0$, take smooth
commuting variations satisfying
$(-\partial_t^2+\Delta-\mu^2)\delta_i\psi=0$. The chosen potential and
current are
$$\theta(\psi;\delta\psi)=-\delta\psi*d\psi,\qquad \omega(\delta_1,\delta_2) =\delta_2\psi*d\delta_1\psi-\delta_1\psi*d\delta_2\psi.$$
On the oriented cut $\Sigma_t=\{t\}\times\mathbb T^3$, with finite smooth
singular cycle obtained by triangulating the unit cube, the integrated form is
$$\Omega_{\Sigma_t}(\delta_1,\delta_2) =\int_{[0,1]^3} \bigl(\delta_1\psi\,\partial_t\delta_2\psi -\delta_2\psi\,\partial_t\delta_1\psi\bigr)\,dx\,dy\,dz.$$
With coordinate Lagrangian density
$\frac12(\partial_t\psi)^2-\frac12|\nabla\psi|^2-\frac12\mu^2\psi^2$,
the canonical momentum density is $\pi=\partial_t\psi$, so this is the
canonical Cauchy-data pairing.

## Example references

[Covariant phase space with boundaries, §3.2](https://arxiv.org/pdf/1906.08616)

[Advanced Lectures on General Relativity, §1.3.1](https://arxiv.org/pdf/1801.07064)

[Some Properties of Noether Charge, §3](https://arxiv.org/pdf/gr-qc/9403028)

## Facts & Assumptions

**Given:** The flat oriented product spacetime, the real scalar $\psi$, the
parameter $\mu\ge0$, the displayed Lagrangian and Hodge map, and a smooth
two-parameter family of field variations.

[F1] The chosen current ordering is
$\omega(\delta_1,\delta_2)=\delta_2\theta(\delta_1)-\delta_1\theta(\delta_2)$,
and $\Omega_\Sigma=\int_\Sigma\omega$.
[[def-gr-fx-covariant-presymplectic-current]]

[F2] If the Euler form vanishes and both variations solve the linearized
equations, then $d_M\omega=0$.
[[prop-gr-fx-on-shell-current-closure]]

[F3] A change $\mathcal L\mapsto\mathcal L+d_M\mu$,
$\theta\mapsto\theta+\delta\mu+d_MY$ changes the integrated form only by
the corresponding integral over $\partial\Sigma$.
[[prop-gr-fx-potential-ambiguity]]

[F4] A reduced symplectic phase space is asserted only after a smooth
solution space and smooth quotient satisfying the stated hypotheses are
supplied. [[def-gr-fx-admissible-phase-reduction]]

[F5] The exterior derivative obeys the degree-one graded product rule.
[[thm-the-exterior-derivative-is-a-graded-derivation]]

[F6] In coordinates, $d(\sum_I f_I\,dx^I)=\sum_I df_I\wedge dx^I$.
[[thm-local-coordinate-formula-for-the-exterior-derivative]]

[F7] The wedge product of forms is the pointwise wedge of their alternating
covariant tensors. [[def-wedge-product-of-differential-forms]]

## Verification

**Given:** As in [F1]–[F4]. The base field is $\psi=0$ when the on-shell
closure clause is used; the displayed variations satisfy the linearized
equation.

1.1 In coordinates, $\mathcal L=\bigl(\frac12\psi_t^2-\frac12|\nabla\psi|^2-\frac12\mu^2\psi^2\bigr)\mathrm{vol}$, so $\delta\mathcal L=(\psi_t\delta\psi_t-\nabla\psi\cdot\nabla\delta\psi-\mu^2\psi\delta\psi)\mathrm{vol}$. The graded product rule [F5] and the displayed Hodge map give $d_M(\delta\psi*d\psi)=d\delta\psi\wedge*d\psi+\delta\psi\,d_M*d_M\psi$, and [F6] gives $d_M*d_M\psi=(-\psi_{tt}+\Delta\psi)\mathrm{vol}$. Therefore $\delta\mathcal L=\delta\psi(-\psi_{tt}+\Delta\psi-\mu^2\psi)\mathrm{vol} -d_M(\delta\psi*d\psi)$, so the selected potential is $\theta=-\delta\psi*d\psi$. [given, F5, F6, F7, algebra]

1.2 Apply the two commuting parameter derivatives to $\theta$. The terms containing $\delta_1\delta_2\psi$ cancel, leaving $\delta_2\theta(\delta_1)-\delta_1\theta(\delta_2) =\delta_2\psi*d_M\delta_1\psi-\delta_1\psi*d_M\delta_2\psi$. This is [F1]'s current in the chosen sign order. [given, F1, algebra, step 1.1]

2.1 On a constant-$t$ cut, the pullbacks satisfy $(*df)|_{\Sigma_t}=-(\partial_tf)\,dx\wedge dy\wedge dz$ for every smooth $f$. Step 1.2 therefore gives $\omega|_{\Sigma_t} =(\delta_1\psi\,\partial_t\delta_2\psi -\delta_2\psi\,\partial_t\delta_1\psi)\,dx\wedge dy\wedge dz$. Integrating over the six tetrahedra of the unit-cube triangulation gives the displayed integral. The tetrahedra cover the cube by coordinate-order regions; internal faces cancel with opposite induced orientations, and the identified opposite outer faces cancel on $\mathbb T^3$. [step 1.2, algebra]

2.2 The coordinate density gives $\pi=\partial\mathcal L_{\mathrm{coord}}/\partial\psi_t=\psi_t$. Substitution into step 2.1 yields $\Omega_{\Sigma_t}(\delta_1,\delta_2) =\int(\delta_1\psi\,\delta_2\pi-\delta_2\psi\,\delta_1\pi)$, the canonical Cauchy-data pairing. [given, step 2.1, algebra]

3.1 At $\psi=0$, the Euler equation is $-\psi_{tt}+\Delta\psi-\mu^2\psi=0$. The linearized variations obey the same equation, so [F2] gives $d_M\omega=0$. Since $\partial\Sigma_t=0$, [F3] shows that a potential ambiguity does not change the integrated pairing on this cut. [given, F2, F3, step 1.1]

3.2 Step 2.2 computes the integrated two-form but does not prove the global smooth solution-space or quotient hypotheses in [F4]. Thus this example asserts the Cauchy pairing for the displayed model and cut only; it claims no general symplectic reduction. [F4, step 2.2] ∎ 