---
id: lem-na-whitney-moments-commute-with-grad-curl-div
kind: lemma
title: Whitney edge, face, and cell moments commute with grad, curl, and div
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-na-lowest-order-whitney-de-rham-spaces, def-na-hcurl-space, def-na-hdiv-space, def-countable-choice, lem-na-nedelec-edge-unisolvence, lem-stokes-theorem-for-the-standard-simplex, lem-affine-simplex-gauss-green-formula, lem-oriented-facet-cancellation-on-matching-meshes, thm-affine-piola-differential-and-trace-moment-identities, cor-vector-valued-ftc-and-lipschitz-bound]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
---

## Statement

Let $\mathcal T$ be a finite matching affine tetrahedral mesh. The four face-normal fluxes are unisolvent on each $RT_0(K)$, and matching face fluxes assemble a global $H(\operatorname{div})$ field. For smooth scalar $f$, smooth vector fields $u,v$, and the canonical interpolants determined by vertex values, oriented edge circulations, oriented face-normal fluxes, and cell integrals, the interpolation maps satisfy cellwise
$$\nabla I_h^0f=I_h^1\nabla f,\qquad \operatorname{curl}I_h^1u=I_h^2\operatorname{curl}u,\qquad \operatorname{div}I_h^2v=I_h^3\operatorname{div}v.$$
Any assignment of one real oriented value to each global mesh edge determines a unique assembled field in $N_h^1$; any assignment of one real oriented flux to each global mesh face determines a unique assembled field in $N_h^2$. These assemblies belong to $H(\operatorname{curl};\Omega)$ and $H(\operatorname{div};\Omega)$, respectively, with the global spaces and conventions of [[def-na-lowest-order-whitney-de-rham-spaces]]. Applying the local moment identities to polynomial cell restrictions also proves that the global finite-element spaces form the subcomplex $W_h^0\xrightarrow{\nabla}N_h^1\xrightarrow{\operatorname{curl}}N_h^2\xrightarrow{\operatorname{div}}N_h^3$. The canonical interpolation identities themselves apply to smooth inputs; they do not extend the canonical edge moments to arbitrary $H(\operatorname{curl})$ inputs.

## Facts & Assumptions

**Given:** Countable Choice for the H(curl) and H(div) graph-space conventions; a finite matching affine tetrahedral mesh, the local spaces and oriented degrees of freedom of [[def-na-lowest-order-whitney-de-rham-spaces]], a smooth scalar $f$, and smooth vector fields $u,v$ on a neighborhood of $\overline\Omega$.

[A1] Countable Choice is assumed by the distributional derivative uniqueness interfaces used to identify the global H(curl) and H(div) classes; no full Axiom of Choice is used. ([[def-countable-choice]])

[F1] The local edge basis is $\phi_{ij}=\lambda_i\nabla\lambda_j-\lambda_j\nabla\lambda_i$, its six edge circulations are unisolvent, and the local face target is $RT_0(K)=\{a+cx\}$. ([[def-na-lowest-order-whitney-de-rham-spaces]], [[lem-na-nedelec-edge-unisolvence]])

[F2] Stokes on an oriented affine simplex identifies the integral of $d\eta$ with the signed sum of its face integrals. ([[lem-stokes-theorem-for-the-standard-simplex]])

[F3] Gauss–Green holds on each affine tetrahedron for a smooth vector field. ([[lem-affine-simplex-gauss-green-formula]])

[F4] Interior face orientations on a matching mesh are opposite and cancel in sums of oriented cell boundaries. ([[lem-oriented-facet-cancellation-on-matching-meshes]])

[F5] The affine covariant and contravariant Piola maps preserve oriented edge and face moments and commute with the corresponding weak differentials. ([[thm-affine-piola-differential-and-trace-moment-identities]])

[F6] The integral of a derivative along a smooth segment is the difference of its endpoint values. ([[cor-vector-valued-ftc-and-lipschitz-bound]])

## Proof

1.1 For each cell $K$, define $I_K^0f$ by its four vertex values, $I_K^1u$ by its six edge circulations, $I_K^2v$ by its four face-normal fluxes, and $I_K^3g$ by its cell integral. The vertex basis $\lambda_i$ is dual to vertex evaluation. By [F1], the local edge-moment map is bijective, so any six prescribed edge values determine one local field; in particular they define $I_K^1u$. For $RT_0(K)$, the face flux map is injective: if all four fluxes of $q(x)=a+cx$ vanish, [F3] gives $3c|K|=\int_K\operatorname{div}q=0$, so $c=0$; then $a\cdot n_F=0$ for all four face normals. Three reference-tetrahedron face area vectors are linearly independent, and the invertible cofactor map in [F5] preserves this independence on $K$, so $a=0$. Since $RT_0(K)$ has dimension four, the four moments are bijective and any four prescribed values determine one field, defining $I_K^2v$. A constant is determined by its cell integral, so $I_K^3g$ is also unique. [F1, F3, F5, given, construct]

1.2 On a shared triangular face, the tangential trace of a local Nedelec field is a linear combination of the three Whitney edge traces on that face: a basis function from an edge containing the opposite vertex has zero tangential trace because the gradient of the opposite barycentric coordinate is normal to the face. The three face-edge circulations are unisolvent by the same endpoint calculation as [F1]. A global assignment gives the same oriented circulation from either incident tetrahedron, so the two tangential traces agree. Cellwise curl integration by parts, using [F3] on $u\times\varphi$ for a compactly supported smooth test $\varphi$, then cancels all interior face terms by [F4]; boundary terms vanish because $\varphi$ is compactly supported. Hence the assembled edge field has a distributional curl equal to its piecewise polynomial curl in $L^2$ and lies in the global $H(\operatorname{curl})$ space. [A1, F1, F3, F4, given, algebra]

2.1 The identity $\sum_{j\ne i}\phi_{ij}=-\nabla\lambda_i$ (where $\phi_{ji}:=-\phi_{ij}$) follows from $\sum_j\lambda_j=1$ and $\sum_j\nabla\lambda_j=0$; hence $\nabla I_K^0f\in N_0(K)$. On an oriented edge $e=[x_i,x_j]$, [F6] gives $\int_e\nabla I_K^0f\cdot t_e\,ds=I_K^0f(x_j)-I_K^0f(x_i)=f(x_j)-f(x_i)=\int_e\nabla f\cdot t_e\,ds$. The two fields lie in the local Nedelec space, and [F1] makes the edge moments unisolvent, so $\nabla I_K^0f=I_K^1\nabla f$ on every cell. [F1, F6, given, algebra]

2.2 Each $\operatorname{curl}\phi_{ij}=2\nabla\lambda_i\times\nabla\lambda_j$ is constant, so $\operatorname{curl}I_K^1u\in RT_0(K)$. For every oriented face $F$, Stokes [F2] gives $\int_F\operatorname{curl}(I_K^1u)\cdot n_F\,dS=\sum_{e\subset\partial F}\operatorname{sgn}(e,F)\int_e I_K^1u\cdot t_e\,ds=\int_F\operatorname{curl}u\cdot n_F\,dS$. The first equality uses the affine moment convention [F5]; the second uses the defining edge moments. Both curls are in $RT_0(K)$ and the four face moments are unisolvent by step 1.1, so $\operatorname{curl}I_K^1u=I_K^2\operatorname{curl}u$. [F1, F2, F5, step 1.1, algebra]

3.1 On a tetrahedron $K$, Gauss–Green [F3] gives $\int_K\operatorname{div}(I_K^2v)\,dx=\sum_{F\subset\partial K}\operatorname{sgn}(F,K)\int_F I_K^2v\cdot n_F\,dS=\int_K\operatorname{div}v\,dx$. Since $\operatorname{div}(a+cx)=3c$ is constant, equality of these cell integrals proves $\operatorname{div}I_K^2v=I_K^3\operatorname{div}v$ on $K$. More generally, every local RT0 normal trace is constant on a planar face because $x\cdot n_F$ is constant there; a shared oriented face moment therefore determines the same physical normal component from both cells. Summing cellwise Gauss–Green against a compact test function cancels interior terms by [F4], while boundary terms vanish, so the assembled face field has distributional divergence equal to its piecewise constant divergence in $L^2$. [A1, F1, F3, F4, step 1.1, algebra]

3.2 For any discrete $q_h\in W_h^0$, $u_h\in N_h^1$, or $v_h\in N_h^2$, its restriction to each cell is a polynomial and extends smoothly to a neighborhood of that cell. Apply the local identities in steps 2.1–3.1 to these restrictions. The local interpolant is the identity on the corresponding finite-element input by the local moment unisolvence and construction in step 1.1, so the identities show $\nabla q_h|_K$, $\operatorname{curl}u_h|_K$, and $\operatorname{div}v_h|_K$ lie in their next local spaces. The edge moments of $\nabla q_h$ are endpoint differences of shared vertex values by step 2.1. The face fluxes of $\operatorname{curl}u_h$ are signed sums of the shared global edge values by step 2.2, so adjacent cells assign the same oriented flux to every shared face. The divergence target $N_h^3$ has only cellwise constant data and imposes no cross-cell matching. The assemblies in steps 1.2 and 3.1 give the required H(curl) and H(div) membership. Hence all three discrete differentials map between the stated global spaces, proving the subcomplex assertion. [A1, F1, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, algebra] ∎

