---
id: pthm-cm10-kinetic-splitting
kind: physics-theorem
title: "Total momentum, kinetic-energy splitting and centre-of-mass angular momentum of a rigid-material motion"
status: draft
origin: session
domain: physics
dependency_level: 9
deps: [post-cm10-rigid-material, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm10-inertia-tensor, def-cm-mass-distribution-and-inertia-matrix, lem-cm-mass-moments-are-finite, def-countable-choice, thm-cm-rigid-kinetic-energy-and-angular-momentum, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, def-cm-special-orthogonal-group, def-euclidean-inner-product, def-cross-product-in-r3, def-cm01-units, def-interval]
dependency_roles:
  post-cm10-rigid-material: physical-assumption
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-cm-rigid-kinetic-energy-and-angular-momentum: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional inertial identities of the rigid-material model branch of [[post-cm10-rigid-material]] along a $C^{2}$ motion in one inertial frame: the total momentum equals the total mass times the centre-of-mass velocity; the kinetic energy splits into the centre-of-mass term and the rotational term $\\tfrac12\\omega^{\\mathsf T}I\\omega$; and the angular momentum about the centre of mass equals $RI\\omega$. The statements are identities for the model's measure, motion and inertia data, under the countable-choice assumption used only for the finiteness of the integrals. No conservation law, no force law and no measured value is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.2.2, Eqs. (3.27)-(3.30), printed pages 51-53 (PDF pages 57-59): the angular momentum $L=I\\omega$ of a body about its centre of mass and the kinetic-energy split into translational and rotational parts"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.2, Eqs. (4.14)-(4.22), chapter pages 4-6 (PDF pages 58-60): rotational kinetic energy through the inertia tensor and the angular momentum $\\mathbf L=I\\boldsymbol\\omega$"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.1, Eq. (2.10), and Section 2.6, Eq. (2.51): the kinetic-energy split for a rigid body and the vector angular momentum through the inertia tensor"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), used only to make the integrals below finite.
Adopt the model and notation of [[post-cm10-rigid-material]]: a reference
mass distribution $\nu$ with total mass $m$ and centred reference coordinates,
a fixed inertial frame, and a motion
$x(t,\rho)=c(t)+R(t)\rho$ with configuration path $(c,R)$ of class $C^{2}$ on
the time window $I_0$, body angular velocity $\omega$
([[def-cm10-angular-velocity]]) and body inertia matrix $I$
([[def-cm10-inertia-tensor]]). Define the **total momentum**, **kinetic
energy** and **angular momentum about the centre of mass** of the model along
the motion by the componentwise integrals
$$P(t):=\int\partial_tx(t,\rho)\,d\nu(\rho),\qquad K(t):=\frac12\int\lVert\partial_tx(t,\rho)\rVert_2^{2}\,d\nu(\rho),$$
$$L_c(t):=\int\bigl(x(t,\rho)-c(t)\bigr)\times\bigl(\partial_tx(t,\rho)-c'(t)\bigr)\,d\nu(\rho),$$
with dimensions $\mu\ell\tau^{-1}$, $\mu\ell^{2}\tau^{-2}$ and
$\mu\ell^{2}\tau^{-1}$ ([[def-cm01-units]]). Then for every $t\in I_0$:

1. the three integrands are $\nu$-integrable, so $P(t)$, $K(t)$ and
   $L_c(t)$ are a well-defined finite vector and finite real numbers;
2. $P(t)=m\,c'(t)$;
3. $K(t)=\dfrac12m\lVert c'(t)\rVert_2^{2}+\dfrac12\omega(t)^{\mathsf T}I\omega(t)$;
4. $L_c(t)=R(t)\,I\,\omega(t)$.

The identities hold for every $C^{2}$ configuration path; no equation of
motion, force law or conservation statement is used or asserted.

## Facts & Assumptions
**Given:** The model data of [[post-cm10-rigid-material]], one inertial frame, a $C^{2}$ motion $x(t,\rho)=c(t)+R(t)\rho$, its body angular velocity $\omega$, its body inertia matrix $I$, and a time $t\in I_0$.

[L1] The mathematical supplier ([[thm-cm-rigid-kinetic-energy-and-angular-momentum]]): under $\mathrm{AC}_\omega$, for a centred mass distribution $\nu$ with total mass $m$ and inertia matrix $I$, an interval $I$ with at least two points, differentiable $c:I\to\mathbb R^3$ and $R:I\to SO(3)$ and the rigid placement $x(t,\rho)=c(t)+R(t)\rho$ with body angular velocity $\omega$, the identities $\partial_tx(t,\rho)=c'(t)+R(t)(\omega(t)\times\rho)$, the integrability of $\lVert\partial_tx\rVert_2^{2}$ and of the angular-momentum integrand, and the identities of clauses 2 and 3 hold; the integral definitions of $K$ and $L_c$ there are the ones displayed in the statement.

[L2] The model's definitions ([[def-cm10-angular-velocity]], [[def-cm10-inertia-tensor]]): $\omega$ is the unique vector with $R^{\mathsf T}R'=[\omega]_\times$ and $\omega_{\mathrm s}=R\omega$; $I=I(\nu)$ is the body inertia matrix; $\int\rho\,d\nu=0$ and $m=\nu(\mathbb R^3)$.

[L3] Integrability and integral rules ([[lem-cm-mass-moments-are-finite]], [[def-cm-mass-distribution-and-inertia-matrix]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]]): the coordinate functions $\rho\mapsto\rho_j$ are $\nu$-integrable and bounded on the support; the constant function satisfies $\int1\,d\nu=m$; integrals of real integrable functions are linear, and vector integrals are componentwise.


## Proof

**Proof technique:** direct; the rotational identities are the cited mathematical supplier, and the total-momentum identity is the centring of the reference mass distribution together with linearity of the integral.

1.1 The hypotheses of [L1] are met with the interval $I_0$ and the differentiable maps $c$ and $R$: the measure $\nu$ is a centred mass distribution with total mass $m$ by [L2], $I_0$ is nondegenerate by [[post-cm10-rigid-material]] clause (ii), and $C^{2}$ implies differentiability. Clause 1 of [L1] gives $\partial_tx(t,\rho)=c'(t)+R(t)(\omega(t)\times\rho)$ for every $\rho$, and the $\nu$-integrability of the kinetic-energy integrand and of the angular-momentum integrand. [given, L1, L2]

2.1 The momentum integrand is a finite sum of the constant functions $\rho\mapsto c_j'(t)$ and the linear functions $\rho\mapsto\bigl(R(t)(\omega(t)\times\rho)\bigr)_j$, which are finite real linear combinations of the coordinate functions $\rho\mapsto\rho_l$; these are $\nu$-integrable and bounded on the support by [L3], so the momentum integrand is $\nu$-integrable by linearity of the integral [L3]. Together with step 1.1 this proves clause 1. [step 1.1, L2, L3]

2.2 Kinetic energy: clause 2 of [L1] gives, for the same placement data, $$K(t)=\frac12\int\lVert\partial_tx(t,\rho)\rVert_2^{2}\,d\nu(\rho)=\frac12m\lVert c'(t)\rVert_2^{2}+\frac12\omega(t)^{\mathsf T}I\omega(t),$$ which is clause 3. [step 1.1, L1]

3.1 Total momentum: by step 1.1, linearity of the integral and the componentwise reading of vector integrals [L3], $$P(t)=\int\bigl(c'(t)+R(t)(\omega(t)\times\rho)\bigr)\,d\nu(\rho)=c'(t)\int1\,d\nu+R(t)\int(\omega(t)\times\rho)\,d\nu(\rho).$$ The first integral is $m$ by [L3]. The second integral is zero componentwise: for example its first component is $\omega_2(t)\int\rho_3\,d\nu-\omega_3(t)\int\rho_2\,d\nu=0$, and its second and third components are the cyclic analogues, since $\int\rho\,d\nu=0$ by [L2] and each finite linear combination commutes with integration by [L3]. Hence $P(t)=mc'(t)$, which is clause 2. [step 2.1, L2, L3, algebra]

4.1 Angular momentum: clause 3 of [L1] gives $$L_c(t)=\int\bigl(x(t,\rho)-c(t)\bigr)\times\bigl(\partial_tx(t,\rho)-c'(t)\bigr)\,d\nu(\rho)=R(t)I\omega(t),$$ which is clause 4. [step 1.1, L1] ∎

## Remarks

- **Instantaneous identities.** The three displayed identities are
  identities at each time for the stated motion; they do not say that either
  term of the kinetic splitting is conserved, and no equation of motion for
  $(c,R)$ enters. The terms are the model's translational kinetic energy
  $\frac12m\lVert c'\rVert_2^{2}$ and rotational kinetic energy
  $\frac12\omega^{\mathsf T}I\omega$.

- **Frame dependence of the two terms.** The centre-of-mass velocity $c'$ and
  hence the translational term depend on the inertial frame; the rotational
  term $\frac12\omega^{\mathsf T}I\omega$ is built from the body angular
  velocity and the body inertia matrix and is therefore unchanged by a change
  of inertial frame. The precise transformation laws are proved in
  [[pthm-cm10-frame-covariance]] on this page.

- **The countable-choice hypothesis.** $\mathrm{AC}_\omega$ is used only to
  make the integrals finite through [L1] and [L3]; the algebraic identities
  themselves are choice-free once the integrals exist. A consumer that needs
  the identities under weak hypotheses must carry this assumption.

- **Degenerate shapes remain allowed.** The identities hold for every mass
  distribution of the branch, including those supported on a line; in that
  case $I\omega$ is not injective in $\omega$, so the angular momentum does
  not determine the body angular velocity, as the companion page's
  counterexample exhibits.
