---
id: prop-emg-fx-conditional-horizon-growth
kind: proposition
title: Second derivative growth under an explicit horizon decay hypothesis
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - cor-mean-value-theorem
  - cor-primitives-of-a-continuous-function
  - def-countable-choice
  - def-emg-fx-extremal-test-scalar
  - lem-gr-metric-divergence-and-density-formula
  - thm-emg-fx-aretakis-spherical-charge
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-fx-extremal-test-scalar: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  thm-emg-fx-aretakis-spherical-charge: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stefanos Aretakis, Stability and Instability of Extreme Reissner–Nordström Black Hole Spacetimes for Linear Scalar Perturbations II, Annales Henri Poincaré 12 (2011), arXiv:1110.2009"
      url: https://arxiv.org/pdf/1110.2009
      locator: "§2, Theorem 6 and §7.4, PDF pp. 7–8 and 31, give global higher-derivative conclusions under the paper's initial-data, angular-mode, and decay framework; no such theorem is assumed in this conditional local deduction."
    - title: "Harvey Reall, What happens at the horizon of an extreme black hole?, complete 34-page lecture presentation (2013)"
      url: https://hep.physics.uoc.gr/Erasmus-IP-2013/files/lectures/Reall/Reall.pdf
      locator: "PDF pp. 9–11, presents the spherical second-derivative growth calculation assuming decay; the proof here retains the exact phi(v,m)/m^3 term and proves the stated limit."
    - title: "Stefanos Aretakis, Stability and Instability of Extreme Reissner–Nordström Black Hole Spacetimes for Linear Scalar Perturbations I, Communications in Mathematical Physics 307 (2011), arXiv:1110.2007"
      url: https://arxiv.org/pdf/1110.2007
      locator: "§12.1, Proposition 12.1.1, PDF p. 28, supplies context for the conserved spherical charge; the conditional derivative limit is derived locally."
    - title: "Martin Taylor, Lectures on the nonlinear stability of the Schwarzschild family of black holes, complete lecture notes (Spring 2022)"
      url: https://www.ma.imperial.ac.uk/~mtaylor5/HarvardLectures.pdf
      locator: "§6.4, PDF pp. 40–41, supports the fixed-background scope boundary; no nonlinear conclusion is imported."
physical_scope: null
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Fix $m>0$ and real $q_e,q_m$ with $q_e^2+q_m^2=m^2$, and let $\psi$ be an admissible neutral spherical $C^3$ solution of $\Box_g\psi=0$ on the regular ingoing extremal RN metric. Put $\phi=r\psi$ and let $H=\partial_r\phi(v,m)$ be its constant spherical horizon charge. If $H\ne0$ and

$$\lim_{v\to+\infty}\phi(v,m)=0,$$

then

$$\lim_{v\to+\infty}\frac{\partial_r^2\phi(v,m)}{v}=-\frac{H}{m^2}.$$

Thus this transverse second derivative grows linearly in magnitude with rate $|H|/m^2$ under the stated horizon-trace decay hypothesis. Both sides of the limit have unit $[\psi]\,\mathrm m^{-2}$. The hypothesis is conditional: this proposition proves no global decay theorem, and it concerns neither coupled Einstein–Maxwell perturbations nor a nonlinear instability.

## Statement references

[[def-emg-fx-extremal-test-scalar]]

[[thm-emg-fx-aretakis-spherical-charge]]

[[lem-gr-metric-divergence-and-density-formula]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[cor-primitives-of-a-continuous-function]]

[[cor-mean-value-theorem]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** $m>0$, $q_e^2+q_m^2=m^2$, $\mathrm{AC}_\omega$, an admissible real spherical $C^3$ solution $\psi$ of $\Box_g\psi=0$, its constant charge $H\ne0$, and $\lim_{v\to+\infty}\phi(v,m)=0$.

[F1] [[def-emg-fx-extremal-test-scalar]]: the background is $g=-D\,dv^2+2\,dv\,dr+r^2\gamma_{S^2}$ with $D=(1-m/r)^2$ and fixed Maxwell field $\mathcal F_{\mathrm{in}}=-q_e r^{-2}dv\wedge dr+q_m\omega_{S^2}$. The vector field $\xi=\partial_v$ generates the null level $r=m$ with zero signed surface gravity. The reduced $C^3$ profile $\psi(v,r)$ lifts to $\widetilde\psi(v,r,\omega)=\psi(v,r)$, $\phi=r\psi$, and its wave operator is the trace of the $C^1$ scalar Hessian, equivalently $w^{-1}\partial_a(wg^{ab}\partial_b\widetilde\psi)$; it is $C^1$.

[F2] [[thm-emg-fx-aretakis-spherical-charge]]: $H(v)=\partial_r\phi(v,m)$ is constant on $\mathbb R$.

[F3] [[lem-gr-metric-divergence-and-density-formula]]: for a smooth vector field $J$, $\nabla_aJ^a=w^{-1}\partial_a(wJ^a)$ with $w=\sqrt{|\det(g_{ab})|}$. Its coordinate proof uses only first derivatives of $J$ and the product rule, so it extends to $C^1$ vector fields. Here $J^a=g^{ab}\partial_b\widetilde\psi$ is $C^2$, since $\psi$ is $C^3$ and $g$ is smooth.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: the connection is metric compatible, so $\nabla_cg^{ab}=0$; its coordinate tensor derivatives have the stated component formula.

[F5] [[cor-primitives-of-a-continuous-function]]: every continuous real function on an interval has a primitive; its oriented integral from a base point is such a primitive, and any primitive evaluates the integral by endpoint differences.

[F6] [[cor-mean-value-theorem]]: for a continuous function on $[a,b]$, differentiable on $(a,b)$, some $c\in(a,b)$ satisfies $F(b)-F(a)=F'(c)(b-a)$.

[F7] [[cor-primitives-of-a-continuous-function]]: any two primitives of the same continuous function on an interval differ by a constant.

[A1] [[def-countable-choice]]: the geometric connection suppliers assume only $\mathrm{AC}_\omega$ for the tangent-bundle smooth structure; no full axiom of choice is assumed.

[A2] The charge $H$ is nonzero and the horizon trace $\phi(v,m)$ tends to zero as $v\to+\infty$. This is an explicit conditional hypothesis, not a consequence of the charge theorem.

## Proof

1.1 In a local sphere chart with angular metric components $\gamma_{AB}$, the inverse of the ingoing $(v,r)$ metric block is $\begin{pmatrix}0&1\\1&D\end{pmatrix}$ and the full density is $w=r^2\sqrt{\det(\gamma_{AB})}$. For $J^a=g^{ab}\partial_b\widetilde\psi$, spherical symmetry gives $J^v=\psi_r$, $J^r=\psi_v+D\psi_r$, and $J^A=0$. This vector field is $C^2$, so [F3] applies. By [F1], [F4] and metric compatibility, $\Box_g\widetilde\psi=\nabla_aJ^a$. Applying the density formula and cancelling the angular density, which is independent of $v,r$, yields
$$0=\Box_g\widetilde\psi=\frac1{r^2}\left[\partial_v(r^2\psi_r)+\partial_r\!\left(r^2(\psi_v+D\psi_r)\right)\right].$$
Expanding and using equality of the continuous mixed partials gives $2r^2\psi_{vr}+2r\psi_v+\partial_r(r^2D\psi_r)=0$. With $\phi=r\psi$, the identities $2r^2\psi_{vr}+2r\psi_v=2r\phi_{vr}$ and $r^2D\psi_r=D(r\phi_r-\phi)$ reduce this to
$$2\phi_{vr}+D\phi_{rr}+D'\phi_r-\frac{D'}r\phi=0.$$
[given, F1, F3, F4, A1, algebra]

1.2 Let $f(v):=\phi(v,m)$, which is continuous and tends to zero by [A2], and define $F(v):=\int_{v_0}^v f(s)\,ds$ for any fixed $v_0\in\mathbb R$. By [F5], $F$ exists and $F'=f$. Given $\varepsilon>0$, choose $S\ge v_0$ so that $|f(s)|<\varepsilon$ for every $s\ge S$. For each $v>\max\{S,0\}$, the mean value theorem [F6] on $[S,v]$ gives a $c\in(S,v)$ with $F(v)-F(S)=f(c)(v-S)$; hence
$$\left|\frac{F(v)}v\right|\le\frac{|F(S)|}{v}+\varepsilon\frac{v-S}{v}.$$
Taking $v\to+\infty$ gives $\limsup |F(v)/v|\le\varepsilon$. Since $\varepsilon$ was arbitrary, $F(v)/v\to0$. [given, F5, F6, A2, algebra]

2.1 Differentiate the equation in step 1.1 once in $r$, which is permitted because $\phi$ is $C^3$. The result is
$$2\phi_{vrr}+D\phi_{rrr}+2D'\phi_{rr}+\left(D''-\frac{D'}r\right)\phi_r-\left(\frac{D''}r-\frac{D'}{r^2}\right)\phi=0.$$
Direct differentiation gives $D(m)=D'(m)=0$ and $D''(m)=2/m^2$. Evaluating at $r=m$ and using [F2] therefore yields the exact horizon transport identity
$$\partial_v\phi_{rr}(v,m)=-\frac{H}{m^2}+\frac{\phi(v,m)}{m^3}.$$
[step 1.1, F2, A1, algebra]

3.1 Define $P(v):=-H(v-v_0)/m^2+F(v)/m^3$ and $G(v):=\phi_{rr}(v,m)$. By [F5], $F'(v)=\phi(v,m)$, so $P'(v)=-H/m^2+\phi(v,m)/m^3=G'(v)$ by step 2.1. Both $P$ and $G$ are continuous on $[v_0,\infty)$ and differentiable on its interior; [F7] makes $G-P$ constant there. Since $P(v_0)=0$, this gives
$$\phi_{rr}(v,m)-\phi_{rr}(v_0,m)=-\frac{H}{m^2}(v-v_0)+\frac{F(v)}{m^3}.$$
Divide by $v$ and use step 1.2; the fixed terms $\phi_{rr}(v_0,m)/v$ and $Hv_0/(m^2v)$ tend to zero, while $F(v)/(m^3v)\to0$. Therefore $\phi_{rr}(v,m)/v\to-H/m^2$. Since $H\ne0$, the limit is nonzero and its absolute value is $|H|/m^2$, proving the stated linear growth. [given, F2, F5, F7, step 1.2, step 2.1, A2, algebra] ∎

## Remarks

The exact transport equation contains the term $\phi(v,m)/m^3$. The decay hypothesis makes its integrated contribution sublinear, as proved in step 1.2; the equation does not assert that the horizon value vanishes from the wave equation alone. No global decay theorem or generic-data statement is imported.
