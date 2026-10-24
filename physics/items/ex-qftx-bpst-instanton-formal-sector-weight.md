---
id: ex-qftx-bpst-instanton-formal-sector-weight
kind: example
title: A charge-one BPST saddle and its formal sector weight
status: draft
origin: session
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
physical_scope: Conditional classical SU(2) Euclidean Yang–Mills example on compactified oriented S4; the displayed exponential is only a formal single-saddle factor, not a continuum observable or measured value.
deps:
- def-qftx-euclidean-yang-mills-sector
- def-qftx-instanton-number-and-asd-sector
- def-axiom-of-choice
- thm-qftx-yang-mills-selfdual-action-bound
- prop-qftx-su2-bpst-explicit-connection-on-s4
- thm-general-stokes-theorem
dependency_roles:
  def-qftx-euclidean-yang-mills-sector: formulation-prerequisite
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-qftx-yang-mills-selfdual-action-bound: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  prop-qftx-su2-bpst-explicit-connection-on-s4: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: 'David Tong, TASI Lectures on Solitons, Lecture 1: Instantons'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf
    locator: §1.1.1, printed pp. 8–9, self-duality bound and the charge-one SU(2) solution.
  - title: Stefan Vandoren and Peter van Nieuwenhuizen, Lectures on instantons
    url: https://arxiv.org/pdf/0802.1862
    locator: §2, printed pp. 7–9, SU(2) trace/charge convention, action bound, and theta-angle factor.
  - title: A. A. Belavin, A. M. Polyakov, A. S. Schwartz, and Yu. S. Tyupkin, Pseudoparticle Solutions of the Yang-Mills Equations
    url: https://strings.itp.ac.ru/Papers/belavin1975.pdf
    locator: 'Printed pp. 85–87: the finite-action Euclidean SU(2) charge-one self-dual connection and action-bound saturation.'
verification:
  precheck: pass
---

## Example

Assume full AC, meaning that every family of nonempty sets has a choice function; in particular, countable choice holds. Let $S^4=\{z\in\mathbb R^5:|z|=1\}$ have its unit round metric. Let $p_\infty$ be the point omitted by the north stereographic chart, let $p_0$ have north-chart coordinate $x=0$, and orient $S^4$ so $dx^1\wedge dx^2\wedge dx^3\wedge dx^4>0$. In the north chart put $r^2=\sum_{\mu=1}^4(x^\mu)^2$; the metric is $4(1+r^2)^{-2}\sum_\mu(dx^\mu)^2$. In the south chart put $y=x/r^2$; the metric is $4(1+|y|^2)^{-2}\sum_\mu(dy^\mu)^2$. Define $SU(2)=\{U\in M_2(\mathbb C):U^*U=I_2,\det U=1\}$, with Lie algebra $\mathfrak{su}(2)=\{X\in M_2(\mathbb C):X^*=-X,\operatorname{tr}_{\mathbf2}X=0\}$ and commutator bracket; for $U\in SU(2)$ set $\operatorname{Ad}_U X:=UXU^{-1}$. Use the Pauli matrices $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ and anti-Hermitian generators $T_a=-i\sigma_a/2$ with $\operatorname{tr}_{\mathbf2}(T_aT_b)=-\tfrac12\delta_{ab}$. Let $\epsilon_{ijk}$ be totally antisymmetric with $\epsilon_{123}=1$, set $\eta_{aij}=\epsilon_{aij}$, $\eta_{ai4}=\delta_{ai}$, $\bar\eta_{aij}=-\epsilon_{aij}$, and $\bar\eta_{ai4}=\delta_{ai}$ for $i,j\in\{1,2,3\}$, and extend both arrays antisymmetrically in their last two indices. For any $\rho>0$, put $u(x)=(x^4I_2-i x^j\sigma_j)/r$ on the overlap, and glue two trivial right $SU(2)$ bundles with local sections satisfying $s_S=s_Nu^{-1}$. The local connection potentials are

$$A_N=\frac{2\eta_{a\mu\nu}x^\nu}{r^2+\rho^2}T_a\,dx^\mu,\qquad A_S=-\frac{2\rho^2\bar\eta_{a\mu\nu}y^\nu}{1+\rho^2|y|^2}T_a\,dy^\mu.$$

On the overlap the potentials obey $A_S=\operatorname{Ad}_uA_N+u\,d(u^{-1})$, with the right-action section convention above. Their curvature representatives are $F_N=dA_N+\tfrac12[A_N\wedge A_N]$ and $F_S=dA_S+\tfrac12[A_S\wedge A_S]$, using the alternating wedge–Lie bracket normalized by $\tfrac12[A\wedge A](Y,Z)=[A(Y),A(Z)]$; the transition makes them representatives of one global adjoint-bundle-valued curvature $F$. For smooth $\mathfrak{su}(2)$-valued forms $\alpha=\sum_aT_a\alpha^a$ and $\beta=\sum_bT_b\beta^b$ with real coefficient forms, use $\kappa(\alpha\wedge\beta)=\sum_{a,b}\kappa(T_a,T_b)\alpha^a\wedge\beta^b$, where $\kappa(X,Y)=-2\operatorname{tr}_{\mathbf2}(XY)$. The conditional Euclidean action is $S_E=(2g_{\mathrm{YM}}^2)^{-1}\int_{S^4}\kappa(F\wedge *F)$, and the compactified charge $\nu=-(8\pi^2)^{-1}\int_{S^4}\operatorname{tr}_{\mathbf2}(F\wedge F)$, for fixed $g_{\mathrm{YM}}>0$. For this specified smooth two-chart connection, the charge is $\nu=1$, the curvature is self-dual, and $S_E=8\pi^2/g_{\mathrm{YM}}^2$. A classical saddle means a smooth admissible connection whose first variation of $S_E$ vanishes for every smooth compactly supported adjoint-bundle-valued one-form variation preserving the supplied data. This connection is a classical saddle, and its nonzero charge and self-duality make it an instanton saddle. If the formal sector expression includes the dimensionless theta coupling $\theta$, the corresponding formal single-saddle factor is $e^{-8\pi^2/g_{\mathrm{YM}}^2+i\theta}$. This factor is not an evaluated continuum path integral.

## Example references

[Tong, §1.1.1, self-duality bound and charge-one solution](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)

[Vandoren and van Nieuwenhuizen, §2, charge, bound, and theta term](https://arxiv.org/pdf/0802.1862)

[Belavin, Polyakov, Schwartz, and Tyupkin, pp. 85–87, original charge-one solution](https://strings.itp.ac.ru/Papers/belavin1975.pdf)

## Facts & Assumptions

**Given:** Full AC; the conditional Euclidean SU(2) model and compactified charge convention of the assigned Definition; $g_{\mathrm{YM}}>0$; the oriented round $S^4$ charts, Pauli matrices, symbols, scale $\rho>0$, two-chart gluing, and local potentials in the Example.

[A1] Full AC means that every family of nonempty sets has a choice function; it implies the $\mathrm{AC}_\omega$ model hypothesis and the full-choice hypotheses of the charge, action-bound, and BPST suppliers. [[def-axiom-of-choice]], [[def-qftx-instanton-number-and-asd-sector]], [[thm-qftx-yang-mills-selfdual-action-bound]], [[prop-qftx-su2-bpst-explicit-connection-on-s4]]

[A2] The Definition assumes $\mathrm{AC}_\omega$ for its smooth gauge data and connections, fixes the Euclidean action as $S_E=(2g_{\mathrm{YM}}^2)^{-1}\int\kappa(F\wedge *F)$ with positive invariant $\kappa=-2\operatorname{tr}_{\mathbf2}=2B_{\mathrm{top}}$, and defines a saddle by vanishing first variation under smooth compactly supported connection variations. [[def-qftx-euclidean-yang-mills-sector]]

[F1] The explicitly specified two-chart BPST connection obeys $A_S=\operatorname{Ad}_uA_N+u\,d(u^{-1})$, so its potentials define a smooth global connection on the glued bundle; it has $F=*F$, $q_B=1$ in the stated orientation and trace normalization, and $S_B(g)=g^{-2}\int_{S^4}B_{\mathrm{top}}(F\wedge *F)=8\pi^2/g^2<\infty$. [[prop-qftx-su2-bpst-explicit-connection-on-s4]]

[F2] The charge supplier defines $q_B=(8\pi^2)^{-1}\int_XB_{\mathrm{top}}(F\wedge F)$ with $B_{\mathrm{top}}=-\operatorname{tr}_{\mathbf2}$ in the defining SU(2) representation. [[def-qftx-instanton-number-and-asd-sector]]

[F3] For every self-dual supplied connection, the local Bianchi identity implies the source-free Euclidean equation $D_A(*F_A)=0$, where $D_A\eta=d\eta+[A\wedge\eta]$. [[thm-qftx-yang-mills-selfdual-action-bound]]

[F4] Assume $\mathrm{AC}_\omega$. If $X$ is an oriented smooth four-manifold with boundary and $\eta$ is a compactly supported smooth three-form, then $\int_Xd\eta=\int_{\partial X}\eta$; an empty boundary contributes zero. [[thm-general-stokes-theorem]]

[F5] The sector expression contains the factor $e^{i\theta\nu}$ and is only a formal continuum notation; it supplies no measure, gauge-fixing prescription, determinant, or limiting argument. [[def-qftx-euclidean-yang-mills-sector]]

## Verification

1.1 The actual two-chart construction in [F1] supplies a smooth global connection with the stated curvature and $q_B=1$. By [F2], its charge convention is exactly $\nu=q_B$ of the assigned Definition, so $\nu=1$. [given, F1, F2]

1.2 Self-duality and Bianchi give $D_A(*F_A)=D_AF_A=0$ by [F3]. Therefore the first-variation calculation below has a vanishing Euler–Lagrange term. [F1, F3]

2.1 Since $\kappa=2B_{\mathrm{top}}$, the Euclidean action is $S_E=(1/g_{\mathrm{YM}}^2)\int_{S^4}B_{\mathrm{top}}(F\wedge *F)$, which is the $S_B(g)$ of [F1] at $g=g_{\mathrm{YM}}$. Thus $S_E=8\pi^2/g_{\mathrm{YM}}^2$. [A1, F1, F2, step 1.1, algebra]

2.2 Let $a$ be any smooth adjoint-bundle-valued one-form on compact $S^4$ and vary $A_t=A+ta$. Expanding $F_{A_t}=dA_t+\tfrac12[A_t\wedge A_t]$ gives $F_{A_t}=F_A+t(da+[A\wedge a])+\tfrac12t^2[a\wedge a]$, because the bracket of two one-forms is symmetric under exchange. Symmetry of $\kappa$ and the two-form Hodge inner product then give $\left.\frac{d}{dt}\right|_0S_E[A_t]=g_{\mathrm{YM}}^{-2}\int_{S^4}\kappa((da+[A\wedge a])\wedge *F_A)$. The graded product rule gives $d\kappa(a\wedge *F_A)=\kappa(da\wedge *F_A)-\kappa(a\wedge d*F_A)$. Infinitesimal Ad-invariance, $\kappa([X,Y],Z)=\kappa(X,[Y,Z])$, gives $\kappa([A\wedge a]\wedge *F_A)=\kappa(a\wedge[A\wedge *F_A])$ after the degree-one wedge reorder; adding the identities yields $d\kappa(a\wedge *F_A)=\kappa((da+[A\wedge a])\wedge *F_A)-\kappa(a\wedge D_A*F_A)$. The scalar three-form $\kappa(a\wedge *F_A)$ is globally defined since $\kappa$ is Ad-invariant, and is compactly supported because $S^4$ is compact. By [F4] its exterior derivative integrates to zero on the closed manifold; using step 1.2, the first variation is $g_{\mathrm{YM}}^{-2}\int_{S^4}\kappa(a\wedge D_A*F_A)=0$. This holds for every such $a$, proving the saddle condition in [A1]. [A1, F3, F4, step 1.2, algebra]

3.1 Substitution of $\nu=1$ and the action from steps 1.1 and 2.1 into the formal sector factor $e^{-S_E+i\theta\nu}$ in [F5] gives $e^{-8\pi^2/g_{\mathrm{YM}}^2+i\theta}$. The Definition supplies only a formal expression and no continuum measure, gauge fixing, determinant, or limiting argument, so this is not a partition-function value. [F5, step 1.1, step 2.1, algebra] ∎
