---
id: lem-st-pure-spinor-bv-semidensity-transfer-defect
kind: lemma
title: BV Density Bridge and Pushforward Master Defect
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
deps:
  - def-st-pure-spinor-cone-bv-geometry
dependency_roles:
  def-st-pure-spinor-cone-bv-geometry: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228v1"
      locator: "§§4.2–4.3: canonical odd antibracket; §§8.5–8.7: quantum-master-equation consistency and local counterterm removability; §10.7, equations (10.44)–(10.49), gives the density-based BV Laplacian and square-root measure on isotropic integration submanifolds. The finite pushforward and stationary identities here are derived locally and not attributed to this source."
proof_strategy: direct
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
---

## Statement

For finite compatible BV data of [[def-st-pure-spinor-cone-bv-geometry]], the density/action bridge below holds on the fixed chart. For the finite sourced pushforward identity, assume the selected high pushforward is invertible and the high cycle is fixed in the transported product Darboux coordinates under all low derivatives entering $\Delta_L$; for the stationary identity, also assume a formal nondegenerate stationary branch and a high cycle fixed under the low source derivatives. The one-loop source derivative is expressed by a total derivative along the stationary high-field section, so all induced classical antifield vertices, cubic Hessian terms, and upstream density/source derivatives are retained. These identities are finite-dimensional or formal stationary identities; they do not assert a continuum local anomaly primitive or a cone integration prescription.

## Statement references

[[def-st-pure-spinor-cone-bv-geometry]]

[Gomis, París, and Samuel, BV antibracket and master-equation context](https://arxiv.org/pdf/hep-th/9412228v1)

## Facts & Assumptions

**Given:** A finite odd-symplectic split into low/high dual pairs, product reference semidensity, compatible odd Laplacian, specified high cycle, and a formal stationary prescription where used.

[F1] [[def-st-pure-spinor-cone-bv-geometry]] fixes $\rho_{\rm BV}=\mu^2\rho_0$, $\Delta_\rho=\Delta_0+(\log\mu,-)$, the odd-Laplacian product identity, and the boundary remainder as the actual high integral of $\Delta_H$.

[A1] Differentiation, the finite BV integral, and any determinant are defined on the chosen chart/cycle. For the pushforward identity, the high cycle is fixed in the transported product Darboux coordinates under every low derivative entering $\Delta_L$, and those derivatives commute with the integral. Whenever $e^{-S_L/\hbar}=\int_H\Psi$ or a normalized high expectation is used, this pushforward is invertible in the chosen formal coefficient ring and its logarithm branch is fixed.

[A2] For stationary transfer, the high cycle is fixed in the transported product Darboux coordinates under the low source derivatives. The even full action $S_0$ satisfies the classical master equation, and the high Hessian $H$ is an invertible even supermatrix with invertible body on the stationary branch. The high semidensity factor is $\mu_H$ relative to the product reference measure. Here $\operatorname{STr}$ is the trace with even coordinates counted positively and odd coordinates negatively, and $\operatorname{sdet}$ is the Berezinian, with $\operatorname{sdet}H=\exp(\operatorname{STr}\log H)$ on the chosen branch. Use the formal finite-dimensional Gaussian stationary-phase prescription with this fixed determinant branch, normalized so the quadratic high integral contributes $(\operatorname{sdet}H)^{-1/2}$; absorb its field-independent normalization into $I_{1,\rm up}$. A nonzero high boundary integral is retained; it is set to zero only when that specific specialization is invoked.

## Proof

1.1 Put $f=\log\mu$. Because $f$ is field-only, $\Delta_0f=0$ and $(f,f)=0$; the odd-Laplacian product identity therefore gives $\Delta_\rho^2=0$ on this chart. The same semidensity has the two expressions $e^{-S_0/\hbar-I_1}\sqrt{\rho_{\rm BV}}=e^{-S_0/\hbar-J_1}\sqrt{\rho_0}$ exactly when $J_1=I_1-f$. For even $S_0,f$, the shifted graded-skew rule makes $(S_0,f)=(f,S_0)$, and hence $(S_0,I_1)-\Delta_\rho S_0=(S_0,J_1)-\Delta_0S_0$. A metric derivative at fixed Darboux coordinates gives $\delta_\sigma\Delta_\rho=(\delta_\sigma f,-)$ and $\delta_\sigma J_1=\delta_\sigma I_1-\delta_\sigma f$. [F1, algebra]

1.2 For an even full action $S$, set $A=\frac12(S,S)-\hbar\Delta S$ and $\Psi=e^{-S/\hbar}$. Applying the second-order product identity to the exponential gives $\Delta\Psi=\hbar^{-2}A\Psi$. Split $\Delta=\Delta_L+\Delta_H$ in fixed product Darboux coordinates and integrate over the specified high cycle; because that cycle is fixed, $\Delta_L$ commutes with the high integration. Define $e^{-S_L/\hbar}=\int_H\Psi$ and $A_L=\frac12(S_L,S_L)_L-\hbar\Delta_LS_L$; the same exponential identity gives $A_Le^{-S_L/\hbar}=\hbar^2\Delta_L\int_H\Psi$. Therefore $A_Le^{-S_L/\hbar}=\int_H A\Psi-\hbar^2\int_H\Delta_H\Psi$. The last integral is the exact boundary remainder; deleting it requires a separate zero-boundary hypothesis on the actual cycle. When it vanishes, $A_L=\langle A\rangle_H$, where $\langle A\rangle_H=(\int_HA\Psi)/(\int_H\Psi)$. [F1, A1, algebra]

1.3 Let the high Lagrangian be $y^*=0$ and suppose $S_0$ satisfies the classical master equation. On a branch where $H=\partial_y^2S_0$ is invertible, the formal implicit-function theorem gives a stationary section $y=y_*(x,x^*)$ solving $\partial_yS_0=0$. Define $S_{0,L}=S_0(x,y_*;x^*,0)$. Differentiating this composite in a low coordinate produces no term from $D y_*$ because its coefficient is $\partial_yS_0=0$. In the full classical master equation, the high bracket term also contains $\partial_yS_0$ and vanishes on the graph; the remaining low bracket is therefore $(S_{0,L},S_{0,L})_L=0$. No induced low antifield vertex is discarded. [A2, algebra]

2.1 Let $I_{1,\rm up}$ be the upstream one-loop functional, $\mu_H$ the high density factor, and $H=D_y^2S_0|_{y_*}$. Translating to $y=y_*+\eta$, the normalized formal Gaussian stationary-phase integral contributes $(\operatorname{sdet}H)^{-1/2}$ and the high density contributes $\mu_H(x,y_*)$; hence $J_{1,L}=I_{1,\rm up}(x,y_*)+\frac12\operatorname{STr}\log H-\log\mu_H(x,y_*)$, up to the field-independent normalization absorbed in $I_{1,\rm up}$. Here $\operatorname{STr}$ counts even high coordinates positively and odd high coordinates negatively; all source derivatives use the fixed graded left/right ordering of the antibracket. Differentiating the stationarity equation gives $U_I:=\partial_{x_I^*}y_*=-H^{-1}D_y\partial_{x_I^*}S_0$. The superdeterminant identity $D\log\operatorname{sdet}H=\operatorname{STr}(H^{-1}DH)$ then yields $\partial_{x_I^*}J_{1,L}=D_{x_I^*}^{\rm stat}(I_{1,\rm up}-\log\mu_H)+\tfrac12\operatorname{STr}\!\left[H^{-1}\left(D_y^2\partial_{x_I^*}S_0+(D_y^3S_0)[U_I]\right)\right]$, where $D_{x_I^*}^{\rm stat}F=\partial_{x_I^*}F+D_yF[U_I]$ is the total derivative along the stationary section. Thus the cubic term and every explicit source/density derivative are included. If the upstream one-loop functional contains $S_{\rm FT}$, its source derivative contributes $\partial_{x_I^*}S_{\rm FT}|_y+D_yS_{\rm FT}[U_I]$ inside the total derivative; neither term is promoted to a leading-action Hessian vertex. [A1, A2, step 1.3, algebra]

3.1 In a fixed reference chart suppose $S_0$ obeys the classical master equation and write $s=(S_0,-)$ and $A_1=(S_0,J_1)-\Delta_0S_0$. The graded Jacobi identity gives $s^2=0$. Applying $\Delta_0$ to $(S_0,S_0)=0$ and using its second-order identity gives $s\Delta_0S_0=0$; Jacobi also gives $s(S_0,J_1)=0$. Therefore $sA_1=0$. This is a consistency identity only. If a local $C_1$ is separately supplied with $sC_1=-A_1$, substitution into $S_0+\hbar(J_1+C_1)$ cancels the coefficient of $\hbar$ in $\frac12(S,S)-\hbar\Delta_0S$, which is precisely the one-loop master equation. The lemma proves no existence or locality of such $C_1$. [F1, A2, step 1.1, algebra] ∎

## Scope boundary

The pushforward identity retains the high boundary term and applies only to the finite/formal integration data in its hypotheses. It supplies no Stokes result for the noncompact punctured pure-spinor cone, no continuum gluing theorem, and no anomaly-cancellation premise.
