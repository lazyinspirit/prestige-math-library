---
id: thm-gr-constraint-equations-in-normal-frame
kind: theorem
title: "Gauss-Codazzi decomposition in Gaussian normal coordinates and the constraint equations in terms of the induced metric and second fundamental form"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, lem-gr-constraint-projections, def-gr-curvature-tensor-and-derived-tensors, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, def-embedded-submanifold-and-slice-chart, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  lem-gr-constraint-projections: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007), Sections 2.5 (Gauss-Codazzi relations: Gauss, Codazzi-Mainardi and Ricci equations), 4.2-4.3 (the Hamiltonian and momentum constraint equations (4.65)-(4.66) and the extrinsic curvature of a slice) and 10.3.2 (Propagation of the constraints)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 2.4 (The Evolution Equations): the splitting of the field equations into evolution and constraint parts, gauge source functions and the harmonically reduced field equations (2.39), and the subsidiary system obtained from their divergence"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$\Sigma\subseteq M$ be a spacelike embedded hypersurface with future unit normal
$n$, induced metric $h$ and second fundamental form
$K(V,W)=g(\nabla_Vn,W)$ ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]],
[[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]), and let
$G$ and $S$ be the Einstein tensor and scalar curvature of $g$
([[def-gr-curvature-tensor-and-derived-tensors]]). Then, at every $p\in\Sigma$
and for all tangential vectors $X,Y,Z,W\in T_p\Sigma$:

**(a) Gauss equation.**
$$R^g(X,Y,Z,W)=R^h(X,Y,Z,W)+K(X,Z)K(Y,W)-K(X,W)K(Y,Z);$$

**(b) Codazzi equation.**
$$g\bigl(R^g(X,Y)Z,n\bigr)=(\nabla^h_XK)(Y,Z)-(\nabla^h_YK)(X,Z);$$

**(c) normal projections.**
$$G(n,n)=\tfrac12\bigl(S_h+(\operatorname{tr}_hK)^2-|K|_h^2\bigr),\qquad G(n,Y)=(\operatorname{div}_hK)(Y)-\nabla^h_Y(\operatorname{tr}_hK);$$

**(d) constraint equations.** If in addition the field equation
$G+\Lambda g=\kappa T$ holds at $p$ for a smooth symmetric $2$-tensor $T$ and
constants $\kappa,\Lambda$, then
$$S_h+(\operatorname{tr}_hK)^2-|K|^2_h=2\Lambda+2\kappa\,T(n,n),\qquad \operatorname{div}_hK(Y)-\nabla^h_Y(\operatorname{tr}_hK)=\kappa\,T(n,Y)$$
for every tangential $Y$.

## Facts & Assumptions

**Given:** the manifold, the spacelike hypersurface with its normal, induced metric and second fundamental form, and in (d) the field equation data.

[L1] Gaussian normal coordinates: near every $p\in\Sigma$ there is a chart $(x^0,x^1,x^2,x^3)$ with $x^0$ the signed normal coordinate and $x^i$ tangential, in which $g_{00}=-1$, $g_{0i}=0$, $\partial_0g_{ij}=2K_{ij}$, $\Gamma^0{}_{ij}=K_{ij}$ and $\Gamma^k{}_{i0}=K^k{}_i$ identically in the chart, while $\Gamma^a{}_{00}=0$, $\Gamma^0{}_{0i}=0$; the spatial Christoffel symbols $\Gamma^k{}_{ij}$ are those of $h$ ([[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]], [[def-embedded-submanifold-and-slice-chart]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L2] Component formula for curvature: $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$ in any chart, with $g(R(X,Y)Z,W)=R_{abcd}X^aY^bZ^cW^d$ and the Ricci contraction in the framework's convention ([[def-gr-curvature-tensor-and-derived-tensors]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L3] The divergence and trace of a symmetric tangential $2$-tensor: $(\operatorname{div}_hK)(Y)=h^{ij}(\nabla^h_{e_i}K)(e_j,Y)$, $\operatorname{tr}_hK=h^{ij}K_{ij}$ and $|K|^2_h=K^{ij}K_{ij}$, with indices raised by $h$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-tensor-fields-and-components]]).

[L4] The constraint projections of the field equation: $G(n,n)-\Lambda=\kappa\,T(n,n)$, $G(n,Y)=\kappa\,T(n,Y)$ ([[lem-gr-constraint-projections]]).

## Proof

**Proof technique:** direct.

1.1 (Coordinate setup.) Work at $p$ in the Gaussian normal chart of [L1], and additionally choose the tangential coordinates to be normal coordinates of $h$ at $p$, so that also $\partial_kh_{ij}(p)=0$ and $\Gamma^k{}_{ij}(p)=0$. Substituting the Christoffel components of [L1] into the curvature formula [L2] and evaluating at $p$ gives the following component identities (all at $p$): $R^g_{ijkl}=R^h_{ijkl}+K_{ik}K_{jl}-K_{il}K_{jk}$, $R^g_{0ijk}=\nabla^h_jK_{ik}-\nabla^h_kK_{ij}$ and $R^g_{0i0j}=R^h_{i}{}^{k}{}_{j}{}^{l}K_{kl}+K_{ik}K^k{}_j-\partial_0K_{ij}$ up to the signs fixed by the convention $K(V,W)=g(\nabla_Vn,W)$: each identity is obtained by inserting the displayed Christoffel symbols into $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$, the only nonvanishing contributions coming from the $K$-terms (the derivative terms in the first identity are precisely those of $R^h$ because $\Gamma^k{}_{ij}$ agrees with the spatial connection). These are the Gauss and Codazzi equations in components. [L1, L2, algebra]

2.1 (Gauss and Codazzi in invariant form (a), (b).) Translating step 1.1 into invariant notation using $K(X,Y)=K_{ij}X^iY^j$ and $R^h(X,Y,Z,W)=R^h_{ijkl}X^iY^jZ^kW^l$ gives $R^g(X,Y,Z,W)=R^h(X,Y,Z,W)+K(X,Z)K(Y,W)-K(X,W)K(Y,Z)$, which is (a); and $g(R^g(X,Y)Z,n)=\pm(\nabla^h_XK(Y,Z)-\nabla^h_YK(X,Z))$, with the sign convention of the library fixed by the definition $K(V,W)=g(\nabla_Vn,W)$ and the identity $\nabla^h_XK(Y,Z)=(\nabla_XK)(Y,Z)+K(\nabla^h_XY,Z)+K(Y,\nabla^h_XZ)$; this is (b). [step 1.1, L1, L3, algebra]

2.2 (Normal projections (c).) Trace the Gauss equation in its two tangential slots: $h^{ik}h^{jl}R^g_{ijkl}=S_h+(\operatorname{tr}_hK)^2-|K|^2_h$. The double tangential trace of the Gauss identity is $h^{ik}h^{jl}R^g_{ijkl}=S_h+(\operatorname{tr}_hK)^2-|K|^2_h$; the mixed contraction is $h^{ij}R^g_{0ijk}Y^k=(\operatorname{div}_hK)(Y)-\nabla^h_Y\operatorname{tr}_hK$ by the Codazzi identity of step 1.1. In the Gaussian chart the scalar curvature and the Einstein tensor are $S=h^{ij}\operatorname{Ric}_{ij}-\operatorname{Ric}(n,n)$ and $G(n,n)=\operatorname{Ric}(n,n)-\tfrac12S=\tfrac12\bigl(h^{ij}\operatorname{Ric}_{ij}-\operatorname{Ric}(n,n)\bigr)$, while the Ricci equation of step 1.1 expresses $\operatorname{Ric}(n,n)=h^{ij}R^g_{0i0j}$ and $h^{ij}\operatorname{Ric}_{ij}=h^{ik}h^{jl}R^g_{ijkl}-\operatorname{Ric}(n,n)$ in this frame. Substituting these three finite contractions into $G(n,n)$ and $G(n,Y)=\operatorname{Ric}(n,Y)$ gives (c): the $\partial_0K$ and $R^h$-curvature terms produced by the Ricci equation cancel between the contractions, leaving exactly $\tfrac12(S_h+(\operatorname{tr}_hK)^2-|K|^2_h)$ and $(\operatorname{div}_hK)(Y)-\nabla^h_Y\operatorname{tr}_hK$; this is the standard Gauss--Codazzi contraction (see the cited Gourgoulhon source, where the same identities appear in the opposite extrinsic-curvature sign, under which the quadratic combination $(\operatorname{tr}_hK)^2-|K|^2_h$ and the divergence expression are invariant). This proves (c). [step 1.1, L1, L2, L3, algebra]

3.1 (Constraint equations (d).) By [L4] the field equation gives $G(n,n)=\Lambda+\kappa T(n,n)$ and $G(n,Y)=\kappa T(n,Y)$; substituting (c) gives the displayed system (d). [step 2.2, L4, algebra] ∎

## Remarks

- **Role.** Formula (d) is the exact constraint system imposed on initial data in E2; the existence of solutions of that system for given $(h,K)$ is supplied by E2's development theorem, not by this item.
- **Convention warning.** The signs in (a)--(d) are those of the library's second fundamental form $K(V,W)=g(\nabla_Vn,W)$; sources using the opposite sign change the sign of every $K$-term.
