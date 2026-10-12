---
id: thm-gr-constraint-equations-in-normal-frame
kind: theorem
title: "Gauss-Codazzi decomposition in Gaussian normal coordinates and the constraint equations in terms of the induced metric and second fundamental form"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-curvature-algebraic-symmetries, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, lem-gr-constraint-projections, def-gr-curvature-tensor-and-derived-tensors, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, def-embedded-submanifold-and-slice-chart, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
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

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, and let $\Sigma\subseteq M$ be a smooth spacelike embedded hypersurface with future unit normal $n$, induced Riemannian metric $h$ and second fundamental form $K(X,Y)=g(\nabla_Xn,Y)$ ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]], [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]). Write $D$ for the Levi-Civita connection of $h$, $R^h$ for its curvature operator in the same operator convention as the ambient curvature, and $S_h$ for its scalar curvature. Explicitly distinguish the lowered tensor from the operator pairing by setting
$$\mathcal R^g(A,B,C,D):=g(R^g(C,D)B,A),\qquad \mathcal R^h(A,B,C,D):=h(R^h(C,D)B,A).$$
Thus $\mathcal R^g_{abcd}=R_{abcd}$ in [[def-gr-curvature-tensor-and-derived-tensors]]; in particular $g(R^g(X,Y)Z,W)=\mathcal R^g(W,Z,X,Y)$. Let $G$ be the Einstein tensor defined there. At every $p\in\Sigma$ and for all $X,Y,Z,W\in T_p\Sigma$:

**(a) Gauss equation.**
$$\mathcal R^g(X,Y,Z,W)=\mathcal R^h(X,Y,Z,W)+K(X,Z)K(Y,W)-K(X,W)K(Y,Z).$$
Equivalently, in operator order,
$$g(R^g(X,Y)Z,W)=h(R^h(X,Y)Z,W)+K(Y,Z)K(X,W)-K(X,Z)K(Y,W).$$

**(b) Codazzi equation.**
$$g(R^g(X,Y)Z,n)=(D_YK)(X,Z)-(D_XK)(Y,Z).$$

**(c) Normal projections.** Define $(\operatorname{div}_hK)(Y)=h^{ij}(D_{e_i}K)(e_j,Y)$, $\tau=\operatorname{tr}_hK=h^{ij}K_{ij}$ and $|K|_h^2=h^{ik}h^{jl}K_{ij}K_{kl}$. Then
$$G(n,n)=\tfrac12(S_h+\tau^2-|K|_h^2),\qquad G(n,Y)=(\operatorname{div}_hK)(Y)-D_Y\tau.$$

**(d) Constraint equations.** If the tensor equation $G+\Lambda g=\kappa T$ holds at $p$, for a smooth symmetric covariant $2$-tensor $T$ and real constants $\kappa,\Lambda$, then
$$S_h+\tau^2-|K|_h^2=2\Lambda+2\kappa T(n,n),\qquad (\operatorname{div}_hK)(Y)-D_Y\tau=\kappa T(n,Y).$$
With $\rho=T(n,n)$ and $j(Y)=-T(n,Y)$, the second equation is $(\operatorname{div}_hK)(Y)-D_Y\tau=-\kappa j(Y)$.

## Facts & Assumptions

**Given:** The smooth Lorentzian manifold, spacelike embedded hypersurface, normal and tensors in the Statement; in (d), the field equation at the selected point.

[L1] The normal and second fundamental form are smooth, $g(n,n)=-1$, $g(n,X)=0$, $K$ is symmetric, $g(\nabla_XY,n)=-K(X,Y)$ and $\nabla_Xn$ is tangential with $h(\nabla_Xn,Y)=K(X,Y)$ ([[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]] clauses (a)-(d)).

[L2] The ambient connection is torsion-free and metric-compatible ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]); tangent vector fields have tangential bracket as proved in [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]] proof 6.1.

[L3] The operator is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, and $R_{abcd}=g(R(e_c,e_d)e_b,e_a)$, $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$, $S=g^{bd}\operatorname{Ric}_{bd}$ and $G=\operatorname{Ric}-\tfrac12Sg$ ([[def-gr-curvature-tensor-and-derived-tensors]]). Curvature is tensorial and is antisymmetric in its first pair and last pair of lowered slots ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a), [[thm-gr-curvature-algebraic-symmetries]]).

[L4] Tangential trace, inverse metric and contractions use the usual tensor operations ([[def-gr-tensor-fields-and-components]], [[def-gr-inverse-metric-and-musical-isomorphisms]]); the normal projections of the field equation are $G(n,n)-\Lambda=\kappa T(n,n)$ and $G(n,Y)=\kappa T(n,Y)$ ([[lem-gr-constraint-projections]]).

## Proof

**Proof technique:** direct.

1.1 (Induced connection.) On tangent fields define $D_XY=(\nabla_XY)^\top$, where $V^\top=V+g(V,n)n$. This defines a smooth connection on $\Sigma$ because tangential differentiation is independent of ambient extensions. By [L1], $\nabla_XY=D_XY+K(X,Y)n$ and $\nabla_Xn=AX$ with $h(AX,Y)=K(X,Y)$. Projecting the torsion identity gives $D_XY-D_YX=[X,Y]$, and restricting metric compatibility gives $Xh(Y,Z)=h(D_XY,Z)+h(Y,D_XZ)$. Thus $D$ is torsion-free and $h$-compatible. Uniqueness follows directly by solving these two identities for $2h(D_XY,Z)$: it equals $Xh(Y,Z)+Yh(X,Z)-Zh(X,Y)-h(X,[Y,Z])+h(Y,[Z,X])+h(Z,[X,Y])$. Hence $D$ is the Levi-Civita connection of $h$, with its curvature and Ricci/scalar contractions defined in the same slot order as [L3]. [L1, L2, L3, algebra]

2.1 (Full tangential and normal curvature decomposition.) Expand $\nabla_X\nabla_YZ$ using step 1.1: its tangential part is $D_XD_YZ+K(Y,Z)AX$, and its coefficient of $n$ is $K(X,D_YZ)+X(K(Y,Z))$. Subtract the analogous expression with $X,Y$ exchanged and subtract $\nabla_{[X,Y]}Z$. The tangential part is $R^h(X,Y)Z+K(Y,Z)AX-K(X,Z)AY$. The coefficient of $n$ is $X(K(Y,Z))-Y(K(X,Z))+K(X,D_YZ)-K(Y,D_XZ)-K([X,Y],Z)$. Writing $(D_XK)(Y,Z)=X(K(Y,Z))-K(D_XY,Z)-K(Y,D_XZ)$, and using $D_XY-D_YX=[X,Y]$, that coefficient is $(D_XK)(Y,Z)-(D_YK)(X,Z)$. Pairing the tangential part with $W$ yields the operator Gauss display, and replacing $(X,Y,Z,W)$ by $(Z,W,Y,X)$ yields its lowered-slot display. Pairing the normal part with $n$ multiplies its coefficient by $g(n,n)=-1$, yielding exactly (b). [step 1.1, L1, L2, L3, algebra]

3.1 (Double tangential contraction.) Choose any tangent basis $e_i$ at $p$ and complete it by $e_0=n$. Then $g^{00}=-1$, $g^{0i}=0$ and $g^{ij}=h^{ij}$. Let $U_{ij}=R_{0i0j}$ and $Q=h^{ik}h^{jl}R_{ijkl}$ in the lowered-slot convention of [L3]. Contracting the Gauss identity of step 2.1 gives $Q=S_h+\tau^2-|K|_h^2$: its first contraction is the intrinsic scalar by definition, its $K_{ik}K_{jl}$ contraction is $\tau^2$, and its $K_{il}K_{jk}$ contraction is $|K|_h^2$. No normal derivative enters $Q$. [step 2.1, L3, L4, algebra]

3.2 (Exact mixed contraction.) From step 2.1 in the same basis, $R_{0ijk}=g(R(e_j,e_k)e_i,n)=(D_{e_k}K)(e_j,e_i)-(D_{e_j}K)(e_k,e_i)$. First-pair antisymmetry gives $R_{i0jk}=(D_{e_j}K)(e_k,e_i)-(D_{e_k}K)(e_j,e_i)$. Therefore $\operatorname{Ric}_{0k}=h^{ij}R_{i0jk}=h^{ij}(D_{e_j}K)(e_k,e_i)-h^{ij}(D_{e_k}K)(e_j,e_i)=(\operatorname{div}_hK)_k-D_{e_k}\tau$, using symmetry of $K$ and $Dh^{-1}=0$. Since $g_{0k}=0$, $G_{0k}=\operatorname{Ric}_{0k}$. This proves the second formula in (c). [step 1.1, step 2.1, L3, L4, algebra]

4.1 (Exact scalar and Einstein contractions.) By [L3] and the two pair antisymmetries, $\operatorname{Ric}_{00}=h^{ij}R_{i0j0}=h^{ij}U_{ij}$ and $\operatorname{Ric}_{ij}=-R_{0i0j}+h^{kl}R_{kilj}=-U_{ij}+h^{kl}R_{kilj}$. Hence $h^{ij}\operatorname{Ric}_{ij}=Q-h^{ij}U_{ij}=Q-\operatorname{Ric}_{00}$, and $S=-\operatorname{Ric}_{00}+h^{ij}\operatorname{Ric}_{ij}=Q-2\operatorname{Ric}_{00}$. Since $g_{00}=-1$, $G_{00}=\operatorname{Ric}_{00}+\tfrac12S=\tfrac12Q$. This proves the first formula in (c) without needing any value or normal derivative of $U$. [step 3.1, L3, algebra]

5.1 (Constraints.) Evaluate $G+\Lambda g=\kappa T$ on $(n,n)$ and $(n,Y)$. As $g(n,n)=-1$ and $g(n,Y)=0$, the results are $G(n,n)=\Lambda+\kappa T(n,n)$ and $G(n,Y)=\kappa T(n,Y)$; insert steps 3.1, 3.2 and 4.1 and multiply the first equation by $2$. The stated $j$ form follows from $j(Y)=-T(n,Y)$. No global, compactness, completeness or field-equation hypothesis is used in (a)-(c), and in (d) only the pointwise field equation is used. [step 3.1, step 4.1, step 3.2, L4, algebra] ∎

## Remarks

In any Gaussian normal chart in which $n=\partial_0$, $g=- (dx^0)^2+h_{ij}(x^0,x)dx^i dx^j$, one has $K_{ij}=\tfrac12\partial_0h_{ij}$, $\Gamma^0{}_{ij}=K_{ij}$, $\Gamma^k{}_{0i}=h^{kl}K_{li}$, $\Gamma^a{}_{00}=\Gamma^0{}_{0i}=0$ and $\Gamma^k{}_{ij}={}^{h}\Gamma^k{}_{ij}$. Direct substitution into [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b) gives $R^0{}_{i0j}=\partial_0K_{ij}-K_{jk}K^k{}_i$, so $R_{0i0j}=K_{ik}K^k{}_j-\partial_0K_{ij}$. The all-spatial formula is $R_{ijkl}=R^h_{ijkl}+K_{ik}K_{jl}-K_{il}K_{jk}$, and the one-normal formula is $R_{0ijk}=(D_{e_k}K)(e_i,e_j)-(D_{e_j}K)(e_i,e_k)$. These formulas use the lowered-slot order explicitly defined above. The proof does not require the construction of a Gaussian chart.

Reversing $n$ reverses $K$ and both mixed projections; the Gauss quadratic terms and $\tau^2-|K|_h^2$ remain unchanged. In particular replacing $K$ by $-K$ reverses the divergence expression, rather than leaving it invariant.
