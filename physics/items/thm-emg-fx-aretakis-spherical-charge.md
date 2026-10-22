---
id: thm-emg-fx-aretakis-spherical-charge
kind: theorem
title: Exact spherical horizon charge
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - cor-zero-derivative-implies-constant
  - def-countable-choice
  - def-emg-fx-extremal-test-scalar
  - lem-gr-metric-divergence-and-density-formula
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  cor-zero-derivative-implies-constant: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-fx-extremal-test-scalar: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefanos Aretakis, Stability and Instability of Extreme Reissner–Nordström Black Hole Spacetimes for Linear Scalar Perturbations I, Communications in Mathematical Physics 307 (2011), arXiv:1110.2007"
      url: https://arxiv.org/pdf/1110.2007
      locator: "§12.1, Proposition 12.1.1, PDF p. 28, spherical horizon conservation law; the local proof derives its exact H=∂r(rψ) normalization."
    - title: "Stefanos Aretakis, Stability and Instability of Extreme Reissner–Nordström Black Hole Spacetimes for Linear Scalar Perturbations II, Annales Henri Poincaré 12 (2011), arXiv:1110.2009"
      url: https://arxiv.org/pdf/1110.2009
      locator: "§3, Proposition 3.0.1, PDF p. 8, records the spherical conserved quantity; its global initial-data estimates are not used here."
    - title: "Harvey Reall, What happens at the horizon of an extreme black hole?, complete 34-page lecture presentation (2013)"
      url: https://hep.physics.uoc.gr/Erasmus-IP-2013/files/lectures/Reall/Reall.pdf
      locator: "PDF pp. 9–10, independent spherical charge calculation on the extremal RN horizon."
    - title: "Martin Taylor, Lectures on the nonlinear stability of the Schwarzschild family of black holes, complete lecture notes (Spring 2022)"
      url: https://www.ma.imperial.ac.uk/~mtaylor5/HarvardLectures.pdf
      locator: "§6.4, PDF pp. 40–41, distinguishes fixed-background linear horizon growth from nonlinear stability claims."
physical_scope: null
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Fix $m>0$ and real $q_e,q_m$ with $q_e^2+q_m^2=m^2$, and take the ingoing extremal RN metric and coordinates specified by the spherical test-scalar definition. Let $\psi$ be any admissible neutral spherical $C^3$ solution of $\Box_g\psi=0$, set $\phi=r\psi$, and define its spherical horizon charge by

$$H_\psi(v):=\partial_r\phi(v,m).$$

Then $H_\psi$ is constant for all $v\in\mathbb R$. If this constant is nonzero, the regular ingoing-chart transverse derivative $\partial_r\phi(v,m)$ is nonzero and does not tend to zero along the horizon. If $[\psi]$ is the scalar-field unit, then $[H_\psi]=[\psi]$. This is a local fixed-background statement and asserts no global decay or nonlinear instability.

## Statement references

[[def-emg-fx-extremal-test-scalar]]

[[lem-gr-metric-divergence-and-density-formula]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[cor-zero-derivative-implies-constant]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** $m>0$, $q_e^2+q_m^2=m^2$, $\mathrm{AC}_\omega$, and an admissible real spherical $C^3$ neutral solution $\psi$ of $\Box_g\psi=0$ on the selected ingoing RN model.

[F1] [[def-emg-fx-extremal-test-scalar]]: the background is $g=-D\,dv^2+2\,dv\,dr+r^2\gamma_{S^2}$ with $D=(1-m/r)^2$ and fixed Maxwell field $\mathcal F_{\mathrm{in}}=-q_e r^{-2}dv\wedge dr+q_m\omega_{S^2}$. The vector field $\xi=\partial_v$ generates the null level $r=m$ with zero signed surface gravity. The reduced $C^3$ profile $\psi(v,r)$ lifts to $\widetilde\psi(v,r,\omega)=\psi(v,r)$, $\phi=r\psi$, and the wave operator on this lift is the trace of its $C^1$ Hessian, equivalently $w^{-1}\partial_a(wg^{ab}\partial_b\widetilde\psi)$; it is $C^1$. All radial derivatives are ingoing-chart derivatives.

[F2] [[lem-gr-metric-divergence-and-density-formula]]: for a smooth vector field $J$, $\nabla_aJ^a=w^{-1}\partial_a(wJ^a)$, where $w=\sqrt{|\det(g_{ab})|}$. Its coordinate proof uses only first derivatives of $J$ and the product rule, so the same formula holds for $C^1$ vector fields. Since $\psi$ is $C^3$ and $g$ is smooth, $J^a=g^{ab}\partial_b\widetilde\psi$ is $C^2$ and the extension applies.

[F3] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: the metric-selected connection is metric compatible and torsion free; in particular $\nabla_ag^{bc}=0$ and its tensor derivatives have the stated coordinate formula.

[F4] [[cor-zero-derivative-implies-constant]]: a continuous real function on an order-convex interval whose derivative vanishes at every interior point is constant on that interval.

[A1] [[def-countable-choice]]: the tangent-bundle smooth structure used by [F1] and [F3] assumes $\mathrm{AC}_\omega$. This is the only choice assumption inherited here; no full axiom of choice is used.

## Proof

1.1 In a local sphere chart with angular metric components $\gamma_{AB}$, the ingoing $(v,r)$ metric block and its inverse are
$$\begin{pmatrix}-D&1\\1&0\end{pmatrix},\qquad \begin{pmatrix}0&1\\1&D\end{pmatrix}.$$
The first block has determinant $-1$, so the full metric density is $w=r^2\sqrt{\det(\gamma_{AB})}$. Put $J^a:=g^{ab}\partial_b\widetilde\psi$. The spherical lift gives $J^v=\psi_r$, $J^r=\psi_v+D\psi_r$, and $J^A=0$; this vector field is $C^2$, so [F2] applies. By [F1], [F3] and metric compatibility, $\Box_g\widetilde\psi=\nabla_aJ^a$. Applying the density formula and cancelling the angular density, which is independent of $v,r$, gives
$$0=\Box_g\widetilde\psi=\frac1{r^2}\left[\partial_v(r^2\psi_r)+\partial_r\!\left(r^2(\psi_v+D\psi_r)\right)\right].$$
Expanding the derivatives and using equality of the continuous mixed partials yields
$$2r^2\psi_{vr}+2r\psi_v+\partial_r(r^2D\psi_r)=0.$$
[given, F1, F2, F3, A1, algebra]

2.1 Since $\phi=r\psi$, one has $2r^2\psi_{vr}+2r\psi_v=2r\phi_{vr}$ and $r^2D\psi_r=D(r\phi_r-\phi)$. Differentiating the latter expression gives $\partial_r(r^2D\psi_r)=rD\phi_{rr}+rD'\phi_r-D'\phi$. Divide the equation of step 1.1 by $r>0$ to obtain
$$2\phi_{vr}+D\phi_{rr}+D'\phi_r-\frac{D'}r\phi=0.$$
[step 1.1, F1, algebra]

3.1 From $D=(1-m/r)^2$ it follows by direct differentiation that $D(m)=D'(m)=0$. Substituting $r=m$ into step 2.1 leaves $2\phi_{vr}(v,m)=0$. The assumed $C^3$ regularity makes $H_\psi(v)=\phi_r(v,m)$ continuous and differentiable with $H_\psi'(v)=\phi_{rv}(v,m)=\phi_{vr}(v,m)=0$. [step 2.1, F1, algebra]

4.1 The real line is an order-convex interval, so [F4] applied to $H_\psi$ and step 3.1 shows that $H_\psi(v)=H_\psi(v_0)$ for every pair $v,v_0\in\mathbb R$. If this common value is nonzero, the defining equality $\partial_r\phi(v,m)=H_\psi(v)$ shows that the ingoing transverse derivative is the same nonzero number for every $v$ and therefore cannot tend to zero. [F1, F4, step 3.1, algebra] ∎

## Remarks

The charge is the derivative of $\phi=r\psi$ in the regular ingoing chart. It is not the derivative of $\psi$ alone and is not computed in a singular static chart. In Aretakis Part I's convention $H_0=\partial_r\psi+\psi/m$, this normalization is $H_\psi=mH_0$, since $\partial_r(r\psi)|_{r=m}=\psi+m\partial_r\psi$. The result is proved directly from the local wave equation; no decay estimate or initial-data theorem is assumed.
