---
id: ex-td-reactive-phase-rule-three-component
kind: example
title: A regular two-phase three-species reaction model
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed smooth local two-phase Gibbs model with one formal internal reaction, used to verify the local equation-map nonsingular-minor hypothesis only; no stable or realized coexistence claim, empirical system, or chemical data are made.
dependency_level: 9
deps:
  - def-td-phase-and-coexistence-domain
  - def-td-temperature-pressure-chemical-potential
  - thm-tdmath-phase-dimension
  - thm-chain-rule-for-total-derivatives
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  thm-tdmath-phase-dimension: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
aliases: []
relations:
  motivated_by:
    - pthm-td-regular-gibbs-phase-rule
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §5.1.1"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
---

## Example

Take $C=3$ species and $P=2$ phases. Write $x_3:=1-x_1-x_2$, and center the open composition charts at $x_1=x_2=x_3=1/3$. Fix $T_0>0$, $p_0>0$, $s_0,c,v_0,\kappa,q>0$, and $\eta=1\,\mathrm{J\,mol^{-1}}$. The parameters have units $s_0,c\in\mathrm{J\,mol^{-1}K^{-1}}$, $v_0\in\mathrm{m^3\,mol^{-1}}$, $\kappa\in\mathrm{m^3\,mol^{-1}Pa^{-1}}$, and $q\in\mathrm{m^3\,mol^{-1}}$. For $\gamma\in\{\alpha,\beta\}$, set $a_\alpha=2\eta$, $a_\beta=\eta$, $q_\alpha=0$, and $q_\beta=q$, and define molar Gibbs potentials
$$
g^\gamma(T,p,x)=-s_0(T-T_0)-\frac{c}{2T_0}(T-T_0)^2+v_0(p-p_0)-\frac{\kappa}{2}(p-p_0)^2+\frac{a_\gamma}{2}(x_1^2+x_2^2)-\frac{a_\gamma}{3}(x_1+x_2)+\frac{a_\gamma}{9}+q_\gamma(p-p_0)x_3.
$$
Set $G^\gamma=m_\gamma g^\gamma$ on each fixed-tag branch and adopt the natural Gibbs assignments $S=-G_T$, $V=G_p$, and $\mu_j=G_{n_j}$, with $U=G+TS-pV$. These smooth charts are scale-invariant in amount. Near the centered point the volumes are positive, and the $(U,V)$ chart Jacobian at fixed composition and amount is nonsingular: $U_T=m_\gamma c$, $V_p=-m_\gamma\kappa$, and $V_T=0$ there, so its determinant is $-m_\gamma^2c\kappa\ne0$. The reaction vector is $\nu=(-1,-1/2,1)^{\mathsf T}$, of rank $R=1$. At $(T_0,p_0,x_1,x_2)=(T_0,p_0,1/3,1/3)$, both phases have $\mu^\gamma=(0,0,0)$, so the phase-equality equations and reaction affinity vanish.

The constructed branch's local physical state map is $\chi:(T,p,n)\mapsto(U,V,n)$ (using the positive amount and interior composition coordinates displayed here). On the inverse patch verified below, define its numerical domain $O_c=\Phi_c^{-1}(\chi(\mathcal O))$ and declare this patch to be the local model's $D_c$ patch, where $\Phi_c(\hat U,\hat V,\hat n)=(\hat U\,\mathrm J,\hat V\,\mathrm{m^3},\hat n\,\mathrm{mol})$ is the unit map of [[def-td-temperature-pressure-chemical-potential]]. Define the numerical entropy by $S_c=S^{\rm SI}\circ\Phi_c$, with $S^{\rm SI}$ supplied by the Gibbs assignments through this inverse. Thus the displayed derivatives are derivatives in physical SI coordinates on $\Phi_c(O_c)$; the model patch is not an empirical claim about an independently specified material domain.

## Facts & Assumptions

**Given:** The two Gibbs branches, their conjugate assignments and parameter units in the Example, the open positive-temperature and positive-pressure simplex charts, and the reaction vector $\nu$. These define a constructed local model for checking the rank condition; no measured or realized material is claimed.

[A1] Adopted local model: The C2 function $G(T,p,n)$ has conjugates $S=-G_T$, $V=G_p$, and $\mu_j=G_{n_j}$, with $U=G+TS-pV$. These relations define the model's natural Gibbs chart.

[F1] [[thm-tdmath-phase-dimension]]: For $C=3$, $P=2$, $R=1$, a full-rank combined equation map has local equation-zero-set dimension $C-P+2-R=2$.

[F2] [[def-td-temperature-pressure-chemical-potential]]: The derivative-defined quantities obey $S_U=1/T$, $S_V=p/T$, and $S_{n_j}=-\mu_j/T$ in a valid physical state chart.

[F3] The model and calculation verify only the equation-map rank and dimension; no stable or realized coexistence endpoint is assumed.

[L1] [[thm-chain-rule-for-total-derivatives]]: The derivative of a differentiable composition is the composition of its derivatives.

[L2] [[thm-euclidean-inverse-function-theorem]]: A C1 map between open Euclidean neighborhoods with invertible derivative at a point has a local C1 inverse.

## Verification

1.1 Differentiating the conjugate assignments in [A1] gives $dG=-S\,dT+V\,dp+\sum_j\mu_j\,dn_j$; differentiating $U=G+TS-pV$ gives $dU=T\,dS-p\,dV+\sum_j\mu_j\,dn_j$. Thus $S_U=1/T$, $S_V=p/T$, and $S_{n_j}=-\mu_j/T$, as in [F2]. From the displayed $g^\gamma$, at the center $S_T=m_\gamma c/T_0$, $U_T=m_\gamma c$, $V_T=0$, and $V_p=-m_\gamma\kappa$, so the fixed-composition/amount $(T,p)$ Jacobian for $(U,V)$ is $-m_\gamma^2c\kappa$. The map $(x_1,x_2,m_\gamma)\mapsto(n_1,n_2,n_3)$ has determinant $m_\gamma^2(x_1+x_2+x_3)=m_\gamma^2$. Hence the full state-map Jacobian is $-m_\gamma^4c\kappa\ne0$, and [L2] gives a local physical state chart. [given, A1, F2, L2, algebra]

2.1 For $m=n_1+n_2+n_3$ and $x_j=n_j/m$, [L1] at fixed $T,p$ and the other two species amounts gives
$$
\mu_1=g+(1-x_1)g_{x_1}-x_2g_{x_2},\quad \mu_2=g-x_1g_{x_1}+(1-x_2)g_{x_2},\quad \mu_3=g-x_1g_{x_1}-x_2g_{x_2}.
$$
Substitution of the two stated $g^\gamma$ at the centered point gives $\mu^\alpha=\mu^\beta=(0,0,0)$. Thus $F_i=\mu_i^\beta-\mu_i^\alpha=0$ and $A=\nu^{\mathsf T}\mu^\alpha=0$. [given, A1, L1, step 1.1, algebra]

3.1 In columns $(x_1^\beta,x_2^\beta,p,x_1^\alpha)$, the derivative minor of $(F_1,F_2,F_3,A)$ at the centered point is
$$
\begin{pmatrix} 2\eta/3&-\eta/3&0&0\\ -\eta/3&2\eta/3&0&0\\ -\eta/3&-\eta/3&q&0\\ 0&0&0&-5a_\alpha/6 \end{pmatrix}.
$$
It is nonsingular: the upper-left $2\times2$ block has determinant $\eta^2/3\ne0$, and the remaining diagonal factors are $q>0$ and $-5a_\alpha/6\ne0$. The combined equation map therefore has the required rank four. [given, step 2.1, algebra]

4.1 The ambient coordinate dimension is $n=2+P(C-1)=6$, and the number of equations is $q+R=C(P-1)+R=3+1=4$. By [F1], the local equation zero set has dimension $6-4=2$, agreeing with $C-P+2-R=3-2+2-1=2$. This is only the full-rank equation-set calculation. [F1, F3, step 3.1, algebra] ∎
