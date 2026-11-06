---
id: ex-r5-ekpyrotic-cyclic-cosmology
kind: example
title: Ekpyrotic/cyclic contracting cosmology proposal
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
dependency_level: 2
deps:
- def-r5-alternative-cosmology-model-data
dependency_roles:
  def-r5-alternative-cosmology-model-data: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: 'M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early
      Universe to Today, arXiv:2303.04819v2'
    url: https://arxiv.org/pdf/2303.04819v2
    locator: §7.4, PDF pp. 137–141, for the source model family, contracting branch, canonical-scalar equations, and the separate
      unresolved bounce, moduli and string-control assumptions. The w>1 branch and homogeneous-shear estimate are derived
      locally under the displayed action.
physical_scope: Conditional four-dimensional Einstein-frame canonical-scalar contracting model. It proves the exact exponential-potential
  branch and linear homogeneous Bianchi-I shear suppression for c^2>6; it asserts no nonsingular bounce, global string realization,
  or perturbation transfer.
---

## Example

Use natural units $\hbar=c_{\rm light}=1$, and call $g$ Einstein-frame when the gravitational action has the constant coefficient $M_P^2/2$ multiplying its Ricci scalar. Let $t,x^i$ have mass dimension $-1$ and $a$ be positive, smooth and dimensionless. The flat FLRW metric is $ds^2=-dt^2+a(t)^2\delta_{ij}dx^i dx^j$, with $H:=\dot a/a$. For a canonical scalar, meaning kinetic density $-\frac12g^{\mu\nu}\partial_\mu\phi\partial_\nu\phi$, set $\rho_\phi:=\dot\phi^2/2+V$ and $P_\phi:=\dot\phi^2/2-V$, and define $w:=P_\phi/\rho_\phi$ where $\rho_\phi\ne0$. For the linear homogeneous Bianchi-I deformation $ds_{\rm BI}^2=-dt^2+\sum_{i=1}^3a_i(t)^2(dx^i)^2$, $a_i=ae^{\beta_i}$, $\beta_i\in C^2(I)$, and $\sum_i\beta_i=0$, define directional rates $H_i:=\dot a_i/a_i$ and shear components $\sigma_i:=H_i-H$. With $\phi$ and $M_P$ of mass dimension one, $V_0$ of mass dimension four, and $c$ a dimensionless potential slope (not the speed of light), the potential $V=-V_0e^{-c\phi/M_P}$ with $c^2>6$ gives a contracting branch with $w>1$ and suppresses this linear homogeneous shear relative to the scalar density. A proposed bounce and perturbation transfer require additional premises and are not consequences of this calculation.

Use natural units $\hbar=c_{\rm light}=1$. The Einstein-frame FLRW line element is $ds^2=-dt^2+a(t)^2\delta_{ij}dx^idx^j$ on $I=(-\infty,0)$, with signature $(-,+,+,+)$, $t,x^i$ of mass dimension $-1$, and dimensionless smooth scale factor $a>0$. Let $\phi\in C^2(I,\mathbb R)$ be a homogeneous canonical scalar, $M_P>0$ a mass, $V_0>0$ of mass dimension four, and $c$ a dimensionless potential slope. Then $V(\phi)=-V_0e^{-c\phi/M_P}$ has mass dimension four, $H=\dot a/a$ has mass dimension one, and $w=P_\phi/\rho_\phi$ is dimensionless. Adopt [A1] with $c^2>6$. The exhibited ekpyrotic branch contracts toward $t=0$. For the shear calculation, the Bianchi-I metric is $ds_{\rm BI}^2=-dt^2+\sum_{i=1}^3a_i(t)^2(dx^i)^2$, with $a_i=ae^{\beta_i}$, $\sum_i\beta_i=0$, and only terms linear in the smooth homogeneous $\beta_i$ retained; shear-energy backreaction is omitted at this order. This is a formal classical Einstein-scalar model: no EFT cutoff or omitted-mode bounds are supplied, and no controlled string compactification or validity at $t=0$ is asserted. Bounce dynamics, perturbation matching/transfer, and moduli stabilization are additional missing inputs; no bounce or perturbation spectrum is asserted.

## Example references

[[def-r5-alternative-cosmology-model-data]]

[M. Cicoli, J. P. Conlon, A. Maharana, S. Parameswaran, F. Quevedo and I. Zavala, String Cosmology: from the Early Universe to Today, arXiv:2303.04819v2](https://arxiv.org/pdf/2303.04819v2)

## Facts & Assumptions

[F1] [[def-r5-alternative-cosmology-model-data]]: A datum states its metric frame, action and fields, background branch, initial and boundary data, transition prescription, perturbation/transfer information, and control regime; an absent bounce or transfer is not inferred.

[A1] Adopt the four-dimensional Einstein-scalar action $S=\int d^4x\sqrt{-g}\left(\frac{M_P^2}{2}R-\frac12g^{\mu\nu}\partial_\mu\phi\partial_\nu\phi-V(\phi)\right)$, the tensor equations $M_P^2G_{\mu\nu}=T_{\mu\nu}$ and $\Box_g\phi-V_{,\phi}=0$, with no other matter or cosmological constant. Here $T_{\mu\nu}:=\partial_\mu\phi\partial_\nu\phi-g_{\mu\nu}(\frac12g^{\alpha\beta}\partial_\alpha\phi\partial_\beta\phi+V)$, $G_{\mu\nu}:=R_{\mu\nu}-\frac12g_{\mu\nu}g^{\alpha\beta}R_{\alpha\beta}$, and $\Box_g\phi:=g^{\mu\nu}(\partial_\mu\partial_\nu\phi-\Gamma^\alpha{}_{\mu\nu}\partial_\alpha\phi)$. Use $\Gamma^\alpha{}_{\mu\nu}=\frac12g^{\alpha\beta}(\partial_\mu g_{\beta\nu}+\partial_\nu g_{\beta\mu}-\partial_\beta g_{\mu\nu})$ and $R_{\mu\nu}=\partial_\alpha\Gamma^\alpha{}_{\mu\nu}-\partial_\nu\Gamma^\alpha{}_{\mu\alpha}+\Gamma^\alpha{}_{\alpha\beta}\Gamma^\beta{}_{\mu\nu}-\Gamma^\alpha{}_{\nu\beta}\Gamma^\beta{}_{\mu\alpha}$, summing repeated Greek indices from 0 to 3. These are adopted model equations in the displayed action normalization, not a claimed derivation of the gravitational action. For homogeneous $\phi$, they give $T^0{}_0=-\rho_\phi$ and $T^i{}_j=P_\phi\delta^i{}_j$. Define $\rho_\phi=\dot\phi^2/2+V$ and $P_\phi=\dot\phi^2/2-V$. The FLRW equations are $3M_P^2H^2=\rho_\phi$, $\dot H=-\dot\phi^2/(2M_P^2)$, and $\ddot\phi+3H\dot\phi+V_{,\phi}=0$. For the shear calculation use the Bianchi-I metric $ds_{\rm BI}^2=-dt^2+\sum_{i=1}^3a_i(t)^2(dx^i)^2$ with $a_i=ae^{\beta_i}$, $a=(a_1a_2a_3)^{1/3}$, $\beta_i\in C^2(I)$, $\sum_i\beta_i=0$, and no anisotropic stress. Keep only linear order in $\beta_i$; the shear-energy backreaction is quadratic.

## Verification

**Given:** [A1], $V=-V_0e^{-c\phi/M_P}$, $V_0>0$, $c^2>6$, and $t<0$.

1.1 Put $p=2/c^2$, so $0<p<1/3$, and choose $a_0>0$ and $A>0$ by $A^2=V_0/[p(1-3p)M_P^2]$. The dimensions are $[A]=$ mass and $[A\tau]=1$, so $a_0$ and $A\tau$ are dimensionless. For $\tau=-t>0$, set $a(t)=a_0(A\tau)^p$ and $\phi(t)=(2M_P/c)\log(A\tau)$. Then $H=p/t<0$, $\dot\phi=2M_P/(ct)$, $K=\dot\phi^2/2=pM_P^2/t^2$, and $V=-p(1-3p)M_P^2/t^2$. [given, A1, algebra]

1.2 For the Bianchi-I metric, the only nonzero connection coefficients from [A1] are $\Gamma^0{}_{ii}=a_i^2H_i$ and $\Gamma^i{}_{0i}=\Gamma^i{}_{i0}=H_i$ (no sum over $i$). In the Ricci formula, the derivative term is $\partial_t(a_i^2H_i)=a_i^2(\dot H_i+2H_i^2)$, the connection trace product is $a_i^2H_i\sum_kH_k$, and the last two nonzero products total $-2a_i^2H_i^2$; spatial derivatives vanish. Thus $R^i{}_i=\dot H_i+H_i\sum_kH_k$ and $G^i{}_i-G^j{}_j=\dot H_i-\dot H_j+3H(H_i-H_j)$. The homogeneous stress in [A1] has equal spatial diagonal entries, so this difference vanishes. Write $\sigma_i=H_i-H=\dot\beta_i$, with $\sum_i\sigma_i=0$. The pairwise equations make all $\dot\sigma_i+3H\sigma_i$ equal; their sum is zero, so each is zero. Consequently $a^3\sigma_i=C_i$ is constant on the interval and $\sigma^2:=\frac12\sum_i\sigma_i^2=\frac12\sum_iC_i^2a^{-6}$. These identities hold for the exact diagonal homogeneous equations; in the stated perturbation calculation retain $\sigma_i$ to first order and its squared amplitude to second order, while evaluating $a$ and $\rho_\phi$ on the unperturbed branch. [given, A1, algebra]

2.1 The expressions in step 1.1 give $K+V=3p^2M_P^2/t^2=3M_P^2H^2$. Also $\ddot\phi=-2M_P/(ct^2)$ and $V_{,\phi}=-(c/M_P)V$; substituting $p=2/c^2$ gives $\ddot\phi+3H\dot\phi+V_{,\phi}=0$. Thus the prescribed contracting branch solves the adopted flat-FLRW equations. [A1, step 1.1, algebra]

3.1 Its pressure is $P_\phi=K-V$, so $w=P_\phi/(K+V)=(2p-3p^2)/(3p^2)=2/(3p)-1=c^2/3-1>1$. Since $a\to0$ as $t\to0^-$, the background scalar density $\rho_\phi=3M_P^2H^2$ scales as $a^{-2/p}=a^{-c^2}$. [A1, step 2.1, algebra]

4.1 Comparing this linearized homogeneous shear with the FLRW background density from step 3.1 gives $\sigma^2/\rho_\phi\propto a^{c^2-6}\to0$ during contraction because $c^2>6$. This proves suppression of the stated shear mode only; it does not prove nonlinear stability to every anisotropy or a controlled bounce. [F1, step 3.1, step 1.2, algebra]

5.1 On any smooth canonical-scalar FLRW segment, [A1] gives $\dot H=-\dot\phi^2/(2M_P^2)\leq0$. Therefore $H$ cannot pass from $H<0$ to $H>0$ on such a segment. A bounce requires an additional premise or a different regime, consistent with the source's statement that the ekpyrotic bounce is a separate unresolved construction. [F1, A1, step 2.1, algebra] ∎
