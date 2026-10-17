---
id: thm-emg-einstein-gauge-propagation
kind: theorem
title: "Einstein harmonic gauge propagation with Maxwell on shell"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-emg-electrovacuum-cauchy-system
  - lem-emg-coupled-reduced-einstein-evolution
  - thm-emg-maxwell-gauss-propagation
  - lem-emg-classical-maxwell-stress-identity
  - thm-emg-gauss-codazzi-maxwell-constraints
  - lem-emg-fixed-smooth-background-harmonic-data
  - lem-gr-einstein-residual-and-subsidiary-identity
  - lem-gr-reduced-einstein-principal-part
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  lem-emg-coupled-reduced-einstein-evolution: mathematical-premise
  thm-emg-maxwell-gauss-propagation: mathematical-premise
  lem-emg-classical-maxwell-stress-identity: mathematical-premise
  thm-emg-gauss-codazzi-maxwell-constraints: mathematical-premise
  lem-emg-fixed-smooth-background-harmonic-data: mathematical-premise
  lem-gr-einstein-residual-and-subsidiary-identity: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
sources:
  references:
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), §1.6, printed pp. 23–25."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), §II, printed pp. 3–8."
      url: "https://arxiv.org/pdf/0907.1151"
verification:
  precheck: pending
---

## Statement

Use the signature $(-,+,+,+)$, orientation and constants of [[def-emg-electrovacuum-cauchy-system]]. Let $\Sigma_0$ be a smooth spacelike hypersurface in a neighborhood with a smooth spacelike foliation and future unit normal field $n$. Fix a smooth background Lorentzian metric $\bar g$ there, with Levi-Civita connection $\bar\nabla$. Let $g\in C^3$ be a Lorentzian metric and $F\in C^2$ a real two-form. Write $\nabla$ for the metric-selected connection of $g$ and $\star_g$ for its oriented Lorentzian Hodge star. Let $h$ be the induced metric, set $K(X,Y)=g(\nabla_Xn,Y)$ for tangent vectors, and regard the following frame components as spatial vectors $e,b$ on $\Sigma_0$:
$$e_i:=F(\mathsf e_i,n),\qquad b_i:=\tfrac12\epsilon_i{}^{jk}F(\mathsf e_j,\mathsf e_k),$$
in a positively oriented orthonormal spatial frame $(\mathsf e_i)$ with $\epsilon_{123}=1$. Define
$$H^a:=g^{bc}(\Gamma^a{}_{bc}[g]-\bar\Gamma^a{}_{bc}),\qquad H_b:=g_{bc}H^c.$$
Suppose the harmonic-reduced Einstein equation
$$\operatorname{Ric}_{ab}[g]-\nabla_{(a}H_{b)}=\kappa\left(T^{\rm EM}_{ab}-\tfrac12g^{cd}T^{\rm EM}_{cd}\,g_{ab}\right)+\Lambda g_{ab},\qquad T^{\rm EM}_{ab}:=\mu_0^{-1}\left(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd}\right),$$
and the six normal Maxwell evolution equations $\iota_n dF=0$ and $\iota_n d(\star_gF)=0$ hold on that neighborhood. Assume $H|_{\Sigma_0}=0$. Let $h$ be the induced metric, use $K(X,Y)=g(\nabla_Xn,Y)$, and, in a positively oriented orthonormal spatial frame $(\mathsf e_i)$, define $e_i:=F(\mathsf e_i,n)$ and $b_i:=\tfrac12\epsilon_i{}^{jk}F(\mathsf e_j,\mathsf e_k)$ with $\epsilon_{123}=1$. Assume the initial constraints
$$D_ie^i=D_ib^i=0,\qquad R(h)+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+\frac{\kappa}{\mu_0}(|e|_h^2+|b|_h^2),\qquad D^jK_{ji}-D_i\operatorname{tr}_hK=-\frac{\kappa}{\mu_0}(e\times_hb)_i$$
hold on $\Sigma_0$, where $D$ is the Levi-Civita derivative of $h$, $D_ie^i$ and $D_ib^i$ are the spatial divergences, $R(h)$ is its scalar curvature, $\operatorname{tr}_hK$ and $|K|_h$ are the induced trace and norm, and $e\times_hb$ is the oriented cross product. Then $H=0$ on a neighborhood of each point of $\Sigma_0$, and the reduced metric equation there is the full Einstein–Maxwell equation. In the periodic torus setting, [[lem-emg-fixed-smooth-background-harmonic-data]] supplies one explicit initial jet satisfying $H|_{\Sigma_0}=0$; that construction is not assumed for a general $\Sigma_0$.

## Facts & Assumptions
**Given:** The coupled reduced evolution, $H|_{\Sigma_0}=0$, and the Maxwell and Einstein initial constraints.

[L1] [[thm-emg-maxwell-gauss-propagation]] gives $dF=d\star_gF=0$ locally for $C^1$ metric and field, an explicit $C^1$ transverse future unit normal, the normal-slot evolution equations $\iota_n dF=\iota_n d\star_gF=0$, and zero initial Gauss divergences. The smooth coordinate slices and $g\in C^3$, $F\in C^2$ here meet those hypotheses.

[L2] [[lem-emg-classical-maxwell-stress-identity]] proves the sourced identity $\nabla^aT_{ab}=-F_{bc}j^c$ for a $C^1$ Lorentzian metric and $C^1$ closed two-form with continuous $j$ satisfying $\nabla_aF^{ab}=-\mu_0j^b$. Thus its exact regularity hypotheses are met here. Here is the exact source-free conversion needed to apply it: with $\varepsilon_{abcd}:=(\mathrm{vol}_g)_{abcd}$ and indices raised by $g^{-1}$, the Lorentzian Hodge formula gives $$\nabla_aF^{ab}=\frac1{3!}\varepsilon^{bacd}(d\star_gF)_{acd}=\frac1{\sqrt{|\det g|}}\partial_a\bigl(\sqrt{|\det g|}F^{ab}\bigr).$$ The first equality follows by expanding $d\star_gF=3\nabla_{[a}(\star_gF)_{cd]}$, using metric-compatibility $\nabla_a\varepsilon_{bcde}=0$, substituting $({\star_gF})_{cd}=\tfrac12\varepsilon_{cdef}F^{ef}$, and using $\varepsilon^{bacd}\varepsilon_{cdef}=-2(\delta^b_e\delta^a_f-\delta^b_f\delta^a_e)$; the second uses $\Gamma^a{}_{ac}=\partial_c\log\sqrt{|\det g|}$ and $\Gamma^b{}_{ac}F^{ac}=0$. Thus $d\star_gF=0$ gives $\nabla_aF^{ab}=0$, while $dF=0$ is the supplier's other hypothesis, so the supplier applies with $j=0$ and yields $\nabla^aT_{ab}=0$.

[L3] The proof of draft supplier [[thm-emg-gauss-codazzi-maxwell-constraints]] uses the pointwise Gauss–Codazzi identities $G(n,n)=\tfrac12(R(h)+(\operatorname{tr}_hK)^2-|K|_h^2)$ and $G(n,V)=D^jK_{ji}V^i-D_V\operatorname{tr}_hK$ for tangent $V$, as well as the Maxwell stress projections. These geometric identities depend only on the metric's second jet and hold for the $C^3$ metric here; combining them with the stated initial constraints makes $E(n,n)=E(n,V)=0$. The EM constraint supplier's item is listed in batch 6; its status is draft and its precheck is pending, so the Maxwell constraint and stress conventions remain conditional on that actual draft proof.

[F1] [[lem-gr-einstein-residual-and-subsidiary-identity]]: on a solution of the harmonic-reduced Einstein equation with constant $\kappa,\Lambda$ and $\nabla^aT_{ab}=0$, the unreduced residual is $E_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$ and $H$ satisfies $\Box_gH_b+\operatorname{Ric}_{ba}H^a=0$.

[F2] [[lem-gr-reduced-einstein-principal-part]] gives a symmetric first-order reduction of the wave operator, with positive definite time matrix on an admissible spacelike-slice chart and symmetric spatial matrices.

## Proof

1.1 By [L1], the reduced Maxwell evolution and its initial divergence constraints give $dF=d\star_gF=0$. The coordinate/Hodge identity in [L2] therefore supplies the divergence hypothesis for the stress lemma with $j=0$, giving $\nabla^aT_{ab}=0$ before using the unreduced Einstein equations. The Bianchi identity and the divergence identity for a trace-adjusted symmetric covector derivative are local identities in the third jet of $g$ and second jet of $H$. At each point these jets are exactly realized by smooth Taylor polynomials in a chart, whose metric remains Lorentzian nearby. Hence the unrestricted coordinate identities underlying [F1] transfer at $g\in C^3$, $H\in C^2$; substituting the actual reduced equation and conserved stress gives its homogeneous wave equation. This transfers a differential identity only, not a smooth solution. [given, L1, L2, F1]

2.1 Since $H=0$ as a field on $\Sigma_0$, its covariant derivative in every tangential direction vanishes there. The normal-projection identities in [L3] involve only the second jet of $g$ and the algebraic stress, so the same finite-jet argument in step 1.1 applies. The stated Einstein constraints therefore give $E(n,n)=E(n,\mathsf e_i)=0$ for the unreduced residual. The residual formula of [F1], evaluated in the orthonormal frame $(n,\mathsf e_i)$, gives $E(n,n)=\tfrac12(\nabla_nH^\flat)(n)$ and $E(n,\mathsf e_i)=\tfrac12(\nabla_nH^\flat)(\mathsf e_i)$: the tangential derivatives vanish, and $\nabla_cH^c=-(\nabla_nH^\flat)(n)$. Hence $\nabla_nH^\flat=0$ and, by nondegeneracy of $g$, $\nabla_nH=0$ initially. [given, L3, F1, step 1.1, algebra]

3.1 Fix a point of $\Sigma_0$ and choose local coordinates $(s,x^1,x^2,x^3)$ with spacelike $s$-levels, $s=0$ on $\Sigma_0$, and $\partial_s$ normal to the slice at that point. Such coordinates follow by a linear change of the spatial coordinates by multiples of $s$ in any slice chart. At that point $g^{00}<0$ and $(g^{ij})>0$; these strict inequalities persist on a smaller cylinder. Set $P_b:=\partial_sH_b$ and $Q_{bi}:=\partial_iH_b$. The wave equation in [F1] has scalar principal part $g^{cd}\partial_c\partial_dH_b$; connection and Ricci terms are lower order. In the ordering $W=(H_b,P_b,Q_{bi})$, its first-order reduction consists of $\partial_sH_b-P_b=0$, the wave equation solved for $\partial_sP_b$, and the compatibility equations $\partial_sQ_{bi}-\partial_iP_b=0$. Multiplying the wave equation by $-1$ and the compatibility equations by $g^{ji}$ gives time matrix $A^0=\operatorname{diag}(I,-g^{00}I,(g^{ij})I)$ and, for each spatial index $k$, the only nonzero spatial blocks $A^k_{PP}=-2g^{0k}I$, $A^k_{P Q_j}=-g^{kj}I$, and $A^k_{Q_iP}=-g^{ik}I$. Thus $A^0$ is positive definite on a sufficiently small cylinder with spacelike $s$-levels, and each $A^k$ is symmetric; all remaining coefficients and their first derivatives are bounded there by $g\in C^3$ and $H\in C^2$. Choose a compact coordinate ball about the chosen point and shrink the time interval so that the shrinking balls $B_s$ of radius $r-\lambda s$ remain in this cylinder. If $A^0\succeq aI$ and $M:=\sup_{|\nu|=1}\|\nu_iA^i\|$, choose $\lambda>M/a$. For $s\ge0$ set $\mathcal E(s)=\int_{B_s}W^{\mathsf T}A^0W\,dx$. The symmetric system's product rule and spatial integration by parts give $\mathcal E'(s)\le C\mathcal E(s)-\int_{\partial B_s}W^{\mathsf T}(\lambda A^0+\nu_iA^i)W\,dS$. The boundary matrix is positive semidefinite because $\lambda a>M$, so $\mathcal E'\le C\mathcal E$. The zero initial values established in steps 1.1 and 2.1 and Gronwall force $\mathcal E=0$ in the shrinking cone. Reversing time proves the same on the past cone. Thus $H=0$ in a neighborhood of the chosen point, and the point was arbitrary. [step 1.1, step 2.1, F1, F2, algebra]

4.1 When $H=0$, the harmonic-reduced Einstein equation differs from the unreduced equation by terms linear in $\nabla H$, which now vanish. Step 1.1 already gives both Maxwell equations, so the full coupled Einstein–Maxwell equations hold near the initial surface. The stress identity is applied at its explicit classical regularity, with no smoothness improvement inferred. [step 3.1, step 1.1, L2, L3, F1, algebra] ∎
