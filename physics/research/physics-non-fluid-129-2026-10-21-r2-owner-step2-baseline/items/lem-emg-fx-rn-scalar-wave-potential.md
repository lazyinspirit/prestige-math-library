---
id: lem-emg-fx-rn-scalar-wave-potential
kind: lemma
title: Subextremal RN scalar mode potential and conditional energy
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-fx-wave-currents
  - def-emg-xs-rn-data
  - lem-gr-metric-divergence-and-density-formula
  - cor-primitives-of-a-continuous-function
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-emg-fx-coupled-potential-energy
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-fx-wave-currents: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  thm-emg-fx-coupled-potential-energy: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Mihalis Dafermos and Igor Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), full lecture notes"
      url: https://arxiv.org/pdf/0811.0354
      locator: "Sections 3.2.2–3.2.4 and Appendix F.2, PDF pp. 30–32 and 105–106: scalar-wave Killing currents, horizon degeneration and the Schwarzschild separated radial equation. The exact charged RN reduction below is computed directly from the local RN metric."
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020), full paper"
      url: https://arxiv.org/pdf/1904.04926
      locator: "Sections 1.2–1.3 and 8.1.2–8.4, PDF pp. 3–6 and 56–60: the coupled Einstein–Maxwell master systems, transformations and low-mode distinctions. Those results are not used to identify the scalar test equation with a coupled perturbation system."
verification:
  precheck: pass
---

## Statement

Let $m>0$ and $q_e,q_m\in\mathbb R$ be length parameters, put $Q^2=q_e^2+q_m^2$, and assume $Q^2<m^2$. Define
$$r_\pm:=m\pm\sqrt{m^2-Q^2},\qquad f(r):=1-\frac{2m}{r}+\frac{Q^2}{r^2}\quad(r>0).$$
On the fixed exterior $\mathcal M_{\mathrm{ext}}=\mathbb R_t\times(r_+,\infty)_r\times S^2$, use the exact dyonic Reissner–Nordström metric specified by the preceding mathematical definition with its mass parameter identified as $M=m$ and charges $q_e,q_m$, and set $t=x^0$. Define a real normalized spherical harmonic of degree $\ell\in\{0,1,2,\ldots\}$ to mean a smooth real $Y:S^2\to\mathbb R$ such that
$$\int_{S^2}Y^2\,d\omega_{S^2}=1,\qquad \Delta_{\gamma_{S^2}}Y=-\ell(\ell+1)Y,$$
where in the standard polar chart
$$\Delta_{\gamma_{S^2}}Y=\frac1{\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta Y)+\frac1{\sin^2\theta}\partial_\phi^2Y.$$
Here $d\omega_{S^2}$ is the area measure of the unit round metric $\gamma_{S^2}$, and $f'(r)$ denotes the ordinary derivative of $f$ with respect to $r$. Since $r_+>0$, the basepoint $r_0:=2r_+$ lies in the exterior; define the tortoise coordinate by the oriented integral $r_*(r):=\int_{r_0}^{r}f(\rho)^{-1}\,d\rho$. For any such $Y$, let $\psi(t,r,\omega)=\phi(t,r)Y(\omega)$ be a smooth real solution of $\Box_g\psi=0$, and put $U_\ell(t,r_*):=r\phi(t,r)$. Then $r_*$ is a smooth coordinate from $(r_+,\infty)$ onto $\mathbb R$, and
$$\partial_t^2U_\ell-\partial_{r_*}^2U_\ell+V_\ell(r_*)U_\ell=0,\qquad V_\ell(r_*):=f(r)\left(\frac{\ell(\ell+1)}{r^2}+\frac{f'(r)}r\right).$$
The potential is smooth, bounded, and strictly positive on $\mathbb R$. If $U_\ell$ and its derivatives satisfy the decay assumptions of the positive matrix-potential wave-energy theorem on the time interval considered, then
$$E_\ell(t):=\frac12\int_{\mathbb R}\left((\partial_tU_\ell)^2+(\partial_{r_*}U_\ell)^2+V_\ell U_\ell^2\right)\,dr_*$$
is constant there. In the original radial coordinate, its radial derivative term is $\frac12\int_{r_+}^{\infty}f(r)|\partial_rU_\ell|^2\,dr$; this energy loses control of $\partial_rU_\ell$ as $r\downarrow r_+$. It asserts no nondegenerate horizon-crossing derivative estimate, decay estimate, or coupled Einstein–Maxwell stability result. The coordinates $t,r,r_*$ and parameters $m,q_e,q_m$ have unit metres, $f$ is dimensionless, and $V_\ell$ has unit $\mathrm m^{-2}$. If $\psi,\phi$ have a common arbitrary field unit $\Phi$, then $Y$ is dimensionless, $U_\ell$ has unit $\Phi\,\mathrm m$, and $E_\ell$ has unit $\Phi^2\,\mathrm m$.

## Statement references

[[def-countable-choice]]

[[def-emg-xs-rn-data]]

[[def-emg-fx-wave-currents]]

[[lem-gr-metric-divergence-and-density-formula]]

[[cor-primitives-of-a-continuous-function]]

[[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]

[[thm-emg-fx-coupled-potential-energy]]

## Facts & Assumptions

**Given:** The exact subextremal RN exterior, the real normalized angular eigenfunction $Y$, the separated smooth solution $\psi=\phi Y$, and the inherited countable-choice background of the geometric suppliers.

[F1] [[def-emg-xs-rn-data]]: the exterior metric is $g=-f\,dt^2+f^{-1}dr^2+r^2\gamma_{S^2}$ with $f=1-2m/r+Q^2/r^2$ and unit round sphere metric $\gamma_{S^2}$.

[F2] [[lem-gr-metric-divergence-and-density-formula]]: in a chart, $\nabla_aJ^a=w^{-1}\partial_a(wJ^a)$ for $w=\sqrt{|\det(g_{ab})|}$; applying this to $J^a=g^{ab}\partial_b\psi$ gives the scalar wave operator in divergence form.

[F3] [[thm-emg-fx-coupled-potential-energy]]: for a smooth one-component wave on $\mathbb R_t\times\mathbb R_{r_*}$ with bounded static nonnegative potential and zero source, its finite energy has derivative zero under the stated decay hypotheses.

[F4] [[def-countable-choice]]: the geometric supplier background includes $\mathrm{AC}_\omega$; no further choice principle is used.

[F5] [[def-emg-fx-wave-currents]]: $\Box_g\psi$ is the metric trace $g^{ab}\nabla_a\nabla_b\psi$ of the scalar Hessian for the metric-selected Levi-Civita connection.

[F6] [[cor-primitives-of-a-continuous-function]]: for a continuous function on an interval and a supplied basepoint, its oriented integral defines a primitive whose derivative is that function.

[F7] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]: a smooth map on an open subset of $\mathbb R$ with nonzero derivative at a point has a smooth local inverse near that point.

[A1] $m>0$, $q_e,q_m\in\mathbb R$, $Q^2=q_e^2+q_m^2<m^2$, and $\ell\in\{0,1,2,\ldots\}$.

[A2] $Y$ is a smooth real normalized eigenfunction as defined in the Statement, and $\psi=\phi Y$ is a smooth solution of $\Box_g\psi=0$. These are conditional inputs; this item makes no spectral existence assertion.

[A3] The metric suppliers use their stated $\mathrm{AC}_\omega$ background; no additional choice is taken.

## Proof

1.1 Put $d:=\sqrt{m^2-Q^2}>0$. By [F6] the specified oriented integral defines $r_*$ with $dr_*/dr=f^{-1}$; its integrand is smooth on the exterior, so $r_*$ is smooth. Then $r_+-r_-=2d$, $r_+r_-=Q^2$, and
$$f(r)=\frac{(r-r_+)(r-r_-)}{r^2}>0\quad(r>r_+),\qquad f'(r)=\frac{2(mr-Q^2)}{r^3}.$$
Since $mr>mr_+=m^2+md>Q^2=m^2-d^2$, we have $f'(r)>0$ throughout the exterior. Also $f'(r_+)=(r_+-r_-)/r_+^2>0$, so near $r_+$ the positive function $f(r)$ is bounded above and below by positive multiples of $r-r_+$. Therefore the specified integral diverges to $-\infty$ as $r\downarrow r_+$; as $r\to\infty$, $f(r)\to1$, so it diverges to $+\infty$. Thus $r_*$ is strictly increasing and onto $\mathbb R$. Its derivative is nonzero everywhere, so [F7] gives a smooth local inverse at every point; strict increase makes these local inverses agree with the global inverse. It is therefore a smooth coordinate on the whole exterior. [given, F1, F6, F7, A1, algebra]

1.2 In the polar chart, $\sqrt{|\det g|}=r^2\sin\theta$, $g^{tt}=-f^{-1}$, $g^{rr}=f$, and $g^{AB}=r^{-2}\gamma^{AB}$. Applying the divergence formula in [F2] to $g^{ab}\partial_b\psi$ gives
$$\Box_g\psi=-f^{-1}\partial_t^2\psi+\frac1{r^2}\partial_r(r^2f\partial_r\psi)+\frac1{r^2}\Delta_{\gamma_{S^2}}\psi.$$
Substitution of $\psi=\phi Y$ and the specified eigenvalue gives
$$-f^{-1}\phi_{tt}+\frac1{r^2}\partial_r(r^2f\phi_r)-\frac{\ell(\ell+1)}{r^2}\phi=0.$$
This scalar coefficient vanishes because its product with $Y$ vanishes for all angles and $\int_{S^2}Y^2\,d\omega_{S^2}=1$. [given, F1, F2, F4, F5, A1, A2, A3, algebra]

2.1 With $U_\ell=r\phi$ and $\partial_{r_*}=f\partial_r$, direct differentiation gives $r^2f\phi_r=r\,\partial_{r_*}U_\ell-fU_\ell$. Multiply the equation in step 1.2 by $fr$, then
$$\frac f r\partial_r(r^2f\phi_r)=\frac1r\partial_{r_*}(r\,\partial_{r_*}U_\ell-fU_\ell)=\partial_{r_*}^2U_\ell-\frac{ff'}rU_\ell.$$
Together with $-r\phi_{tt}=-\partial_t^2U_\ell$, and using $\partial_{r_*}f=ff'$, this yields the stated one-dimensional equation and $V_\ell=f[\ell(\ell+1)/r^2+f'/r]$. [step 1.1, step 1.2, A1, algebra]

3.1 The factorization in step 1.1 gives $f>0$, and $f'>0$ there, so $V_\ell>0$ for every $\ell\ge0$. The formula is smooth for $r>r_+$; it tends to $0$ at $r\downarrow r_+$ because $f\to0$ while the bracket stays finite, and it tends to $0$ at infinity because $f\to1$ and both bracket terms tend to $0$. Thus $V_\ell$ is bounded as a continuous function on the $r_*$ line. Under the additional decay hypothesis, apply [F3] with $N=1$, $V=V_\ell$, and $S=0$ to obtain $E_\ell'(t)=0$. Finally, $dr_*=dr/f$ and $\partial_{r_*}U_\ell=f\partial_rU_\ell$ give $\int|\partial_{r_*}U_\ell|^2dr_*=\int f|\partial_rU_\ell|^2dr$, whose coefficient vanishes at the horizon. This proves the stated degeneracy and no stronger horizon estimate. [step 1.1, F3, algebra] ∎

## Remarks

This is a test scalar on a fixed RN geometry, not a metric or Maxwell perturbation. A coupled gravitational/electromagnetic master system must be derived with its exact low angular modes and reconstruction before this positive scalar potential argument can be applied to it.
