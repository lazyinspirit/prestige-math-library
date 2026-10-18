---
id: lem-pe11-smooth-nedelec-approximation
kind: lemma
title: Smooth fields are approximated by the lowest-order edge family
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-na-pe11-maxwell-cavity-eigenproblem
  - def-na-zero-tangential-hcurl
  - def-na-lowest-order-whitney-de-rham-spaces
  - def-matching-affine-simplicial-meshes
  - lem-na-nedelec-edge-unisolvence
  - lem-na-whitney-moments-commute-with-grad-curl-div
  - thm-l-one-approximate-identities-converge-in-l-p
  - def-l-one-approximate-identity-on-rn
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§1.1, pp. 1–3: lowest-order Nedelec basis and edge moments; §1.2, pp. 4–5: commuting curl moment identity."
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^3$ be a bounded
Lipschitz polyhedron with a shape-regular refining family of matching affine
tetrahedral meshes $\mathcal T_h$, with maximum cell diameter $h\to0$. For
every $w\in C_c^\infty(\Omega;\mathbb R^3)$, the canonical lowest-order
Nedelec edge interpolant $I_hw$, defined by its six oriented edge
circulations on each tetrahedron, is well-defined. For all sufficiently
small $h$ it belongs to $H_0(\operatorname{curl};\Omega)$, and
$$\|I_hw-w\|_{H(\operatorname{curl};\Omega)}\longrightarrow0.$$
The edge moments are applied only to smooth fields here; this statement does
not extend them to arbitrary $H(\operatorname{curl})$ inputs.

## Facts & Assumptions

**Given:** Countable Choice; the domain and mesh family; a compactly supported smooth vector field $w$; and the lowest-order local edge shape functions.

[A1] Countable Choice is assumed by the imported $L^2$ approximate-identity convergence theorem and supplies the countable mollification sequence. ([[def-countable-choice]])

[F1] On an affine tetrahedron the six edge shape functions span the local first-family Nedelec space. If $K$ is the image of the reference tetrahedron under $x=B_K\widehat x+b$, then $\nabla\lambda_i=B_K^{-T}\nabla\widehat\lambda_i$. Shape regularity gives $\|B_K^{-1}\|\le C h_K^{-1}$ and $|K|^{1/2}\le C h_K^{3/2}$, so each Whitney basis field has $L^2(K)$ norm at most $C h_K^{1/2}$. ([[def-na-lowest-order-whitney-de-rham-spaces]], [[def-matching-affine-simplicial-meshes]])

[F2] The six oriented edge circulations are unisolvent, so prescribed edge moments determine a unique local field. ([[lem-na-nedelec-edge-unisolvence]])

[F3] Matching edge moments assemble a global $H(\operatorname{curl})$ edge field, and Stokes gives the face-flux identity for its curl. The supplier's proof establishes these statements for the stated smooth inputs. ([[lem-na-whitney-moments-commute-with-grad-curl-div]])

[F4] Every $L^2$ approximate identity on $\mathbb R^3$ converges strongly in $L^2$; this applies separately to a compactly supported field and its distributional curl. ([[thm-l-one-approximate-identities-converge-in-l-p]])

## Proof

**Given:** Countable Choice; a shape-regular matching tetrahedral family; and $w\in C_c^\infty(\Omega;\mathbb R^3)$.

1.1 On each cell $K$, [F2] defines the local interpolant $I_Kw$ by its six edge moments. To verify constants belong to the local space, write $\phi_{ij}=\lambda_i\nabla\lambda_j-\lambda_j\nabla\lambda_i$ with $\phi_{ji}=-\phi_{ij}$. Then $\sum_{j\ne i}\phi_{ij}=-\nabla\lambda_i$ because $\sum_j\lambda_j=1$. For each coordinate $\ell$, the barycentric identity $x_\ell=\sum_i(x_i)_\ell\lambda_i$ gives $e_\ell=\nabla x_\ell=\sum_i(x_i)_\ell\nabla\lambda_i$, so every constant vector lies in the local span. Unisolvence [F2] then makes $I_K$ reproduce constants. Fix $x_K\in K$ and put $r_K(x)=w(x)-w(x_K)$. Then $\|r_K\|_{L^\infty(K)}\le h_K\|Dw\|_{L^\infty(K)}$, so every edge moment of $r_K$ has absolute value at most $h_K^2\|Dw\|_{L^\infty(K)}$. By [F1], summing the six moment coefficients against their basis functions gives $\|I_Kr_K\|_{L^2(K)}\le C h_K^{5/2}\|Dw\|_{L^\infty(K)}$ and $\|r_K\|_{L^2(K)}\le C h_K^{5/2}\|Dw\|_{L^\infty(K)}$. Consequently $\|I_Kw-w\|_{L^2(K)}\le C h_K^{5/2}\|Dw\|_{L^\infty(K)}$. [F1, F2, given, construct]

1.2 By [F3] the local fields assemble to a global $H(\operatorname{curl})$ field. If $d=\operatorname{dist}(\operatorname{supp}w,\partial\Omega)>0$ and $h<d/2$, any cell with a nonzero edge moment lies within distance $h$ of $\operatorname{supp}w$; hence the assembled interpolant has compact support in $\Omega$. Its zero extension to $\mathbb R^3$ is in $H(\operatorname{curl};\mathbb R^3)$: the cellwise integration-by-parts formula has cancelling interior face terms by [F3], and there is no boundary jump because the field vanishes near $\partial\Omega$. Mollify that extension with a smooth approximate identity whose support radius is less than $d-h$. The mollifications belong to $C_c^\infty(\Omega;\mathbb R^3)$; distributional curl commutes with convolution, and [F4] makes both the field and its curl converge in $L^2$. Thus $I_hw\in H_0(\operatorname{curl};\Omega)$ by the closure definition. [A1, F3, F4, given, construct]

2.1 By [F1], $\operatorname{curl}I_Kw$ is a constant vector $c_K$ on $K$. For each oriented face $F\subset\partial K$, [F3] and the defining edge moments give $\int_F c_K\cdot n_F\,dS=\int_F\operatorname{curl}w\cdot n_F\,dS$. With $c_0=\operatorname{curl}w(x_K)$, smoothness bounds the difference between the right side and $|F|c_0\cdot n_F$ by $|F|h_K\|D(\operatorname{curl}w)\|_{L^\infty(K)}$. Three face normals span $\mathbb R^3$. More precisely, choose three reference faces whose unit normals form a basis. Their physical normals are normalized cofactor images under $B_K^{-T}$; shape regularity bounds the condition number of $B_K/h_K$, so the inverse of this three-normal matrix is uniformly bounded. Hence $|c_K-c_0|\le C h_K\|D(\operatorname{curl}w)\|_{L^\infty(K)}$ and $\|\operatorname{curl}I_Kw-\operatorname{curl}w\|_{L^2(K)}\le C h_K^{5/2}\|D(\operatorname{curl}w)\|_{L^\infty(K)}$. [F1, F3, step 1.1, algebra]

3.1 Shape regularity gives $|K|\ge c h_K^3$, so $\sum_Kh_K^5\le h^2\sum_Kh_K^3\le C h^2|\Omega|$. Squaring the local bounds in steps 1.1–1.2, summing over the mesh, and taking square roots gives $\|I_hw-w\|_{H(\operatorname{curl};\Omega)}\le C_w h\longrightarrow0$. The constant depends on the fixed smooth field, the domain and the mesh shape-regularity bound, but not on $h$. [step 1.1, step 2.1, algebra] ∎

## Source notes

Chen uses the oriented edge-circulation interpolation and Stokes identity. The local estimate above derives the affine scaling and global $H(\operatorname{curl})$ convergence for fixed smooth compactly supported inputs; it never applies an edge moment to a general graph-space field.
