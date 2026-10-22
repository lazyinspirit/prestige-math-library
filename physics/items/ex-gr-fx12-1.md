---
id: ex-gr-fx12-1
kind: example
title: Scalar-field potential and Cauchy-data pairing
status: published
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
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Let $\mathbb T^3:=\mathbb R^3/\mathbb Z^3$ with quotient map
$q:\mathbb R^3\to\mathbb T^3$, and let $M:=\mathbb R_t\times\mathbb T^3$.
The one-forms $dx,dy,dz$ on $\mathbb T^3$ are the forms descended from the
translation-invariant coordinate one-forms on $\mathbb R^3$; $\partial_x,
\partial_y,\partial_z$ denote their dual descended coordinate vector fields.
For $f\in C^\infty(M,\mathbb R)$, spatial derivatives mean derivatives of its
$\mathbb Z^3$-periodic lift to $\mathbb R_t\times\mathbb R^3$. Define
$$\nabla f:=(\partial_xf,\partial_yf,\partial_zf),\qquad |\nabla f|^2:=(\partial_xf)^2+(\partial_yf)^2+(\partial_zf)^2,\qquad \Delta f:=\partial_x^2f+\partial_y^2f+\partial_z^2f.$$
Give $M$ the orientation $dt\wedge dx\wedge dy\wedge dz$ and flat metric
$g=-dt^2+dx^2+dy^2+dz^2$, and write
$\mathrm{vol}=dt\wedge dx\wedge dy\wedge dz$. The constant-time cut
$\Sigma_t=\{t\}\times\mathbb T^3$ has orientation $dx\wedge dy\wedge dz$,
equal to contraction of $\mathrm{vol}$ with $\partial_t$.

Distinguish this geometric cut from its representing chain. Let
$i_t:\mathbb T^3\to M$ be the inclusion $i_t(p)=(t,p)$, with image
$\Sigma_t$. In positive affine coordinates on the standard simplex, put
$$T_3:=\{r\in\mathbb R^3:r_j\ge0,\ r_1+r_2+r_3\le1\}$$
with orientation $dr_1\wedge dr_2\wedge dr_3$. For each permutation
$\rho\in S_3$, put $v_0^\rho=0$ and
$v_j^\rho:=\sum_{k=1}^j e_{\rho(k)}$ for $1\le j\le3$, where
$e_1,e_2,e_3$ is the standard basis of $\mathbb R^3$. Define
$$a_\rho(r):=\sum_{j=1}^3r_jv_j^\rho,\qquad Q:=\sum_{\rho\in S_3}\operatorname{sgn}(\rho)\,a_\rho.$$
Here $Q$ is a finite smooth singular three-chain in $\mathbb R^3$.
For a smooth map $f$, its chain pushforward means composition of each
simplex: $f_\#(\sum_jc_j\sigma_j):=\sum_jc_j(f\circ\sigma_j)$.
The representing chain in $M$ is
$$C_t:=(i_t\circ q)_\#Q=\sum_{\rho\in S_3}\operatorname{sgn}(\rho)\,\tau_{t,\rho},\qquad \tau_{t,\rho}:=i_t\circ q\circ a_\rho.$$
Every simplex has the stated domain orientation and coefficient
$\operatorname{sgn}(\rho)$. The affine images are the six ordered-coordinate
regions of the cube. Adjacent regions have identical ordered face maps
and opposite signed face coefficients; on the exterior, opposite cube
faces have matching ordered face maps after $q$, again with opposite
coefficients. Thus $\partial C_t=0$. By saying that $C_t$ represents the
oriented cut $\Sigma_t$, we mean precisely that for every smooth three-form
$\alpha$ on $M$,
$$\int_{C_t}\alpha=\int_{[0,1]^3}(i_t\circ q)^*\alpha.$$
The right side integrates the coefficient relative to
$dx\wedge dy\wedge dz$. This equality follows by summing the six simplex
pullbacks with their orientation coefficients, as checked in step 3.1;
it invokes only this explicit cube decomposition. Restrictions of fields
and forms below are to the geometric cut $\Sigma_t$, whereas boundary
and chain-integration operations use $C_t$.

For one-forms, define the Hodge map by
$$*dt=-dx\wedge dy\wedge dz,\quad *dx=-dt\wedge dy\wedge dz,\quad *dy=dt\wedge dx\wedge dz,\quad *dz=-dt\wedge dx\wedge dy,$$
and extend it linearly with smooth coefficients. Let
$\psi\in C^\infty(M,\mathbb R)$, let $\mu\ge0$ be a fixed real parameter,
and take
$$\mathcal L=-\frac12d\psi\wedge *d\psi-\frac12\mu^2\psi^2\mathrm{vol}.$$
All objects here are mathematical; no physical units or empirical
interpretation are assigned. Let $u_1,u_2\in C^\infty(M,\mathbb R)$ satisfy
$$(-\partial_t^2+\Delta-\mu^2)u_i=0\qquad(i=1,2),$$
and define the smooth two-parameter field family
$\psi_{a,b}:=a u_1+b u_2$ on $P=\mathbb R^2$. At $(a,b)=(0,0)$ the base
solution is $\psi=0$; the commuting parameter variations are
$\delta_1\psi:=\partial_a\psi_{a,b}=u_1$ and
$\delta_2\psi:=\partial_b\psi_{a,b}=u_2$. The chosen potential and current
are
$$\theta(\psi;\delta\psi)=-\delta\psi*d\psi,\qquad \omega(\delta_1,\delta_2) =\delta_2\psi*d\delta_1\psi-\delta_1\psi*d\delta_2\psi.$$
On the oriented finite smooth singular cycle $C_t$ defined above, the
integrated form is
$$\Omega_{C_t}(\delta_1,\delta_2) =\int_{[0,1]^3} \bigl(\delta_1\psi\,\partial_t\delta_2\psi -\delta_2\psi\,\partial_t\delta_1\psi\bigr)\,dx\,dy\,dz.$$
The integral on the right is over the fundamental cube for the descended
three-form. The initial-data pair used here is
$(\psi|_{\Sigma_t},\partial_t\psi|_{\Sigma_t})$. Write
$\mathcal L=\mathcal L_{\mathrm{coord}}\,\mathrm{vol}$; then
$$\mathcal L_{\mathrm{coord}}=\frac12(\partial_t\psi)^2-\frac12|\nabla\psi|^2-\frac12\mu^2\psi^2.$$
Define its canonical momentum density by
$$\pi:=\frac{\partial\mathcal L_{\mathrm{coord}}}{\partial(\partial_t\psi)}=\partial_t\psi.$$
Thus the displayed form is the canonical pairing of the variations of
$(\psi|_{\Sigma_t},\pi|_{\Sigma_t})$.

## Example references

[Covariant phase space with boundaries, §3.2](https://arxiv.org/pdf/1906.08616)

[Advanced Lectures on General Relativity, §1.3.1](https://arxiv.org/pdf/1801.07064)

[Some Properties of Noether Charge, §3](https://arxiv.org/pdf/gr-qc/9403028)

## Facts & Assumptions

**Given:** The flat oriented product spacetime, the real scalar $\psi$, the parameter $\mu\ge0$, the displayed Lagrangian and Hodge map, and a smooth two-parameter family of field variations.

[F1] The chosen current ordering is $\omega(\delta_1,\delta_2)=\delta_2\theta(\delta_1)-\delta_1\theta(\delta_2)$, and $\Omega_\Sigma=\int_\Sigma\omega$. [[def-gr-fx-covariant-presymplectic-current]]

[F2] If the Euler form vanishes and both variations solve the linearized equations, then $d_M\omega=0$. [[prop-gr-fx-on-shell-current-closure]]

[F3] A change $\mathcal L\mapsto\mathcal L+d_M\mu$, $\theta\mapsto\theta+\delta\mu+d_MY$ changes the integrated form only by the corresponding integral over $\partial\Sigma$. [[prop-gr-fx-potential-ambiguity]]

[F4] A reduced symplectic phase space is asserted only after a smooth solution space and smooth quotient satisfying the stated hypotheses are supplied. [[def-gr-fx-admissible-phase-reduction]]

[F5] The exterior derivative obeys the degree-one graded product rule. [[thm-the-exterior-derivative-is-a-graded-derivation]]

[F6] In coordinates, $d(\sum_I f_I\,dx^I)=\sum_I df_I\wedge dx^I$. [[thm-local-coordinate-formula-for-the-exterior-derivative]]

[F7] The wedge product of forms is the pointwise wedge of their alternating covariant tensors. [[def-wedge-product-of-differential-forms]]

## Verification

**Given:** As in [F1]–[F4]. The base field is $\psi=0$ when the on-shell closure clause is used; the displayed variations satisfy the linearized equation.

1.1 In coordinates, $\mathcal L=\bigl(\frac12\psi_t^2-\frac12|\nabla\psi|^2-\frac12\mu^2\psi^2\bigr)\mathrm{vol}$, so $\delta\mathcal L=(\psi_t\delta\psi_t-\nabla\psi\cdot\nabla\delta\psi-\mu^2\psi\delta\psi)\mathrm{vol}$. The graded product rule [F5] and the displayed Hodge map give $d_M(\delta\psi*d\psi)=d\delta\psi\wedge*d\psi+\delta\psi\,d_M*d_M\psi$, and [F6] gives $d_M*d_M\psi=(-\psi_{tt}+\Delta\psi)\mathrm{vol}$. Therefore $\delta\mathcal L=\delta\psi(-\psi_{tt}+\Delta\psi-\mu^2\psi)\mathrm{vol} -d_M(\delta\psi*d\psi)$, so the selected potential is $\theta=-\delta\psi*d\psi$. [given, F5, F6, F7, algebra]

2.1 Apply the two commuting parameter derivatives to $\theta$. The terms containing $\delta_1\delta_2\psi$ cancel, leaving $\delta_2\theta(\delta_1)-\delta_1\theta(\delta_2) =\delta_2\psi*d_M\delta_1\psi-\delta_1\psi*d_M\delta_2\psi$. This is [F1]'s current in the chosen sign order. [given, F1, algebra, step 1.1]

2.2 At $\psi=0$, the Euler equation is $-\psi_{tt}+\Delta\psi-\mu^2\psi=0$. The linearized variations obey the same equation, so [F2] gives $d_M\omega=0$. Since $\partial C_t=0$, [F3] shows that a potential ambiguity does not change the integrated pairing on this cut. [given, F2, F3, step 1.1]

3.1 On a constant-$t$ cut, the pullbacks satisfy $(*df)|_{\Sigma_t}=-(\partial_tf)\,dx\wedge dy\wedge dz$ for every smooth $f$. Step 2.1 therefore gives $\omega|_{\Sigma_t} =(\delta_1\psi\,\partial_t\delta_2\psi -\delta_2\psi\,\partial_t\delta_1\psi)\,dx\wedge dy\wedge dz$. The affine map for $\rho$ has Jacobian determinant $\operatorname{sgn}(\rho)$ and image $1\ge x_{\rho(1)}\ge x_{\rho(2)}\ge x_{\rho(3)}\ge0$. Hence the six regions partition the cube up to common faces, and the coefficient $\operatorname{sgn}(\rho)$ orients each simplex positively relative to $dx\wedge dy\wedge dz$. A common interior face is obtained by swapping adjacent entries of $\rho$; deleting the distinct intermediate vertex gives the same ordered face map, while the permutation coefficient changes sign, so these boundary terms cancel as singular chains. On opposite exterior faces, the remaining coordinate-order triangles have identical ordered vertex maps after translation by $e_i$, hence after applying $q$; their induced boundary orientations are opposite, so they cancel as well. Thus $\partial C_t=0$, and integration over this chain equals integration of the descended form over $[0,1]^3$, giving the displayed formula. [step 2.1, algebra]

4.1 The coordinate density gives $\pi=\partial\mathcal L_{\mathrm{coord}}/\partial\psi_t=\psi_t$. Substitution into step 3.1 yields $\Omega_{C_t}(\delta_1,\delta_2) =\int(\delta_1\psi\,\delta_2\pi-\delta_2\psi\,\delta_1\pi)$, the canonical Cauchy-data pairing. [given, step 3.1, algebra]

5.1 Step 4.1 computes the integrated two-form but does not prove the global smooth solution-space or quotient hypotheses in [F4]. Thus this example asserts the Cauchy pairing for the displayed model and cut only; it claims no general symplectic reduction. [F4, step 4.1] ∎
