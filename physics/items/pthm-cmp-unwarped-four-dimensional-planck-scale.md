---
id: pthm-cmp-unwarped-four-dimensional-planck-scale
kind: physics-theorem
title: Planck coefficient from unwarped and warped products
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
page: cmp-kaluza-klein-reduction-and-effective-theory
dependency_level: 7
physical_scope: "Coefficient of the two-derivative Einstein–Hilbert term for fixed product, fixed internal-only warped, or block-diagonal variable-volume product metrics. Flux/source actions, higher-curvature terms, loop corrections, and dynamical dilaton terms are excluded. A constant dilaton appears only in the stated ten-dimensional frame conversion."
deps:
  - def-cmp-kaluza-klein-reduction-ansatz-and-frames
  - def-supergravity-conventions-and-normalizations
dependency_roles:
  def-cmp-kaluza-klein-reduction-ansatz-and-frames: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§3.2, PDF pp. 11–13; dimensional reduction and four-dimensional Weyl normalization"
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "Appendix, constant-warp large-radius four-dimensional reduction, with its explicit restricted assumptions"
---

## Statement

In natural units $\hbar=c=1$, let $d,n\geq1$, $D=d+n$, take $G_D$ to be a declared $D$-dimensional Einstein-frame metric, and let $\kappa_D>0$ be the coupling in that frame's Einstein–Hilbert action, with $[\kappa_D^2]=(\mathrm{length})^{D-2}$. Assume that action is
$$S_D=\frac1{2\kappa_D^2}\int_{M_d\times Y_n}d^{d+n}X\sqrt{-G}\,R[G],$$
and take either a fixed product metric $G_D=g_d\oplus h_Y$, where $M_d$ is smooth Lorentzian and $Y_n$ is smooth, compact, Riemannian, and boundaryless, or the following internal-only warped metric with smooth $A,B:Y_n\to\mathbb R$:
$$ds_D^2=e^{2A(y)}g_d+e^{2B(y)}\hat g_Y.$$
For the fixed product, $\operatorname{Vol}_E(Y):=\int_Yd^ny\,\sqrt{\det h_Y}$ and the coefficient of the $d$-dimensional Einstein–Hilbert term is
$$\frac1{2\kappa_d^2}=\frac{\operatorname{Vol}_E(Y)}{2\kappa_D^2},\qquad \kappa_d^{-2}=\operatorname{Vol}_E(Y)\kappa_D^{-2}.$$
For $d>2$, define the reduced Planck scale by $M_{d,\mathrm{Pl}}^{d-2}:=\kappa_d^{-2}$, taking the positive root when $\kappa_d^{-2}>0$. In $d=4$ this gives $M_{4,\mathrm{Pl}}^2=\kappa_4^{-2}=(8\pi G_N)^{-1}$ under the convention $\kappa_4^2=8\pi G_N$, and hence $M_{4,\mathrm{Pl}}^2=\operatorname{Vol}_E(Y)/\kappa_D^2$. The internal-curvature integral contributes a separate term without external curvature.

For the warped metric, the coefficient of the external Einstein–Hilbert term is
$$\frac1{2\kappa_D^2}\int_Yd^ny\sqrt{\det\hat g_Y}\,e^{(d-2)A+nB}.$$

For a block-diagonal variable-volume product metric $G_D(x,y)=g_J(x)\oplus\gamma_Y(x,y)$, let $g_J$ be a smooth Lorentzian metric and let $\gamma_Y(x,\cdot)$ be a smooth family of positive-definite metrics on the compact boundaryless $Y_n$, with no mixed components. Define
$$V_J(x):=\int_Yd^ny\,\sqrt{\det\gamma_Y(x,y)}.$$
The coefficient of $R[g_J]$ is $V_J(x)/(2\kappa_D^2)$ in the Jordan metric. If $d>2$, $V_J$ is positive and smooth, and $V_*>0$ is a fixed reference volume, the Weyl rescaling $g_E=(V_J/V_*)^{2/(d-2)}g_J$ makes the coefficient constant, $V_*/(2\kappa_D^2)$, and also produces modulus-derivative terms. All metrics and couplings in each formula are in the same declared frame.

## Statement references

[[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]

[[def-supergravity-conventions-and-normalizations]]

## Facts & Assumptions

**Given:** A smooth compact boundaryless $Y_n$, the stated Einstein–Hilbert action and product metric, or the displayed warped metric; $V_*>0$ is a fixed reference volume.

[F1] [[def-cmp-kaluza-klein-reduction-ansatz-and-frames]]: the fixed product, internal-only warped, and block-diagonal variable-volume ansätze are defined, including $V_J(x)$ and the Weyl rescaling for $d>2$.

[F2] [[def-supergravity-conventions-and-normalizations]]: in ten dimensions $G^{(E)}=e^{-\Phi/2}G^{(s)}$ and, when the constant asymptotic dilaton is absorbed, $\kappa_{10,\mathrm{phys}}^2=e^{2\Phi_\infty}\kappa_0^2$ with $2\kappa_0^2=(2\pi)^7\alpha'^4$. The coupling convention is not changed during a frame conversion.

[A1] Each coefficient calculation uses the displayed Einstein–Hilbert action and metrics in one common frame; other action terms are excluded. External boundary terms vanish or are discarded under the declared boundary conditions.

[A2] When $V_J$ varies, it is positive and smooth, $d>2$, and the external Weyl factor is smooth; its boundary term is discarded under the stated boundary conditions.

[A3] For the constant-dilaton frame conversion in step 3.1, set $D=10$, $d=4$, $n=6$, $\Phi=\Phi_0=\Phi_\infty$ constant, and use $\kappa_{10,\mathrm{phys}}^2=e^{2\Phi_0}\kappa_0^2$. This conversion does not include derivatives or dynamics of the dilaton.

## Proof


1.1 For $G_D=g_d\oplus h_Y$, block diagonality gives $\det G_D=(\det g_d)(\det h_Y)$ and hence $\sqrt{-\det G_D}=\sqrt{-\det g_d}\sqrt{\det h_Y}$. The mixed Christoffel symbols vanish because the two blocks depend on separate coordinates; the remaining Christoffel symbols are those of $g_d$ and $h_Y$. Contracting their block-diagonal curvature gives $R[G_D]=R[g_d]+R[h_Y]$. [given, F1, A1, algebra]

1.2 For the internal-only warped metric, block determinants give $\sqrt{-\det G_D}=e^{dA+nB}\sqrt{-\det g_d}\sqrt{\det\hat g_Y}$. The external-curvature part of $R[G_D]$ is $e^{-2A}R[g_d]$; warp-derivative terms carry no factor $R[g_d]$. Multiplication therefore leaves $e^{(d-2)A+nB}$, proving the warped coefficient. [given, F1, A1, algebra]

1.3 For the block-diagonal variable-volume metric $G_D(x,y)=g_J(x)\oplus\gamma_Y(x,y)$, its determinant gives $\sqrt{-\det G_D}=\sqrt{-\det g_J}\sqrt{\det\gamma_Y}$. In the scalar curvature, the term containing the external scalar curvature is $R[g_J]$; terms involving $x$-derivatives of $\gamma_Y$ contain no $R[g_J]$. Integrating the coefficient over $Y$ therefore gives $V_J(x)/(2\kappa_D^2)$. [given, F1, A1, A2, algebra]

2.1 Put $\Omega=(V_J/V_*)^{1/(d-2)}$ and $g_E=\Omega^2g_J$. The curvature transformation has $R[g_J]=\Omega^2(R[g_E]+\text{terms with derivatives of }\Omega)$ and $\sqrt{-\det g_J}=\Omega^{-d}\sqrt{-\det g_E}$. Thus the coefficient of $R[g_E]$ is $V_J\Omega^{2-d}=V_*$; derivatives of $\Omega$ remain as scalar kinetic terms after the boundary term is treated. [given, A2, step 1.3, algebra]

2.2 Substituting these identities into $S_D$ and integrating over $Y$ yields $$S_D=\frac{\operatorname{Vol}_E(Y)}{2\kappa_D^2}\int_{M_d}\sqrt{-g_d}R[g_d] +\frac1{2\kappa_D^2}\left(\int_Y\sqrt{h_Y}R[h_Y]\right)\int_{M_d}\sqrt{-g_d}.$$ The first term is the stated external Einstein coefficient; the second contains no external curvature and is a separate potential/cosmological contribution. For $d=4$, matching $1/(2\kappa_4^2)$ to $M_{4,\mathrm{Pl}}^2/2$ gives the Planck formula. [given, A1, step 1.1, algebra]

3.1 Under [A3], put $V_E:=\operatorname{Vol}_E(Y)$ and let $V_s$ be the volume in the string metric. The constant rescaling gives $V_s=e^{3\Phi_0/2}V_E$ and $\sqrt{-\det g_{4,s}}R[g_{4,s}]=e^{\Phi_0/2}\sqrt{-\det g_{4,E}}R[g_{4,E}]$. Consequently, for the fixed coupling $\kappa_{10}$ in the adopted Einstein action, its external curvature density obeys $\frac{V_E}{2\kappa_{10}^2}\sqrt{-\det g_{4,E}}R[g_{4,E}]=\frac{V_s e^{-2\Phi_0}}{2\kappa_{10}^2}\sqrt{-\det g_{4,s}}R[g_{4,s}]$. In particular, if that action uses $\kappa_{10}=\kappa_0$, then $V_s e^{-2\Phi_0}/(2\kappa_0^2)=V_s/(2\kappa_{10,\mathrm{phys}}^2)$ is the string-frame coefficient. Converting its external density back gives the Einstein-frame coefficient $V_s e^{\Phi_0/2}/(2\kappa_{10,\mathrm{phys}}^2)=V_E/(2\kappa_0^2)$. If the adopted Einstein action instead uses $\kappa_{10}=\kappa_{10,\mathrm{phys}}$, its string-frame coefficient is $V_s e^{-2\Phi_0}/(2\kappa_{10,\mathrm{phys}}^2)$; the coupling is held fixed in each conversion. A varying dilaton adds terms and is excluded. [given, F2, A3, algebra] ∎

