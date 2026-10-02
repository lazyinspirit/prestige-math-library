---
id: cex-ricci-lower-bound-does-not-control-every-sectional-curvature-in-dimension-at-least-three
kind: counterexample
title: Ricci lower bound does not control every sectional curvature in dimension at least three
status: draft
origin: pipeline
deps:
  - def-ricci-curvature
  - def-sectional-curvature
  - def-riemannian-metric-and-riemannian-manifold
  - def-countable-choice
  - def-riemann-curvature-four-tensor
  - lem-ricci-curvature-is-symmetric-and-basis-independent
  - prop-half-space-model-geometry
  - ex-euclidean-space-has-zero-curvature
  - thm-euclidean-space-complete
  - prop-a-riemannian-product-is-complete-iff-each-factor-is-complete
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - thm-canonical-tangent-and-cotangent-splittings-for-products
  - prop-coordinate-criterion-for-a-riemannian-metric
  - thm-fundamental-theorem-of-riemannian-geometry
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-connection-laws-in-directional-form
  - prop-coordinate-formula-for-the-curvature-tensor
  - thm-curvature-is-a-type-one-three-tensor
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: Ricci versus sectional control and the product examples"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§2–4, pp.6–16: curvature bounds of product metrics"
---

## Statement refuted

**False claim:** if a Riemannian manifold of dimension $n\ge3$ satisfies a
Ricci lower bound $\operatorname{Ric}\ge(n-1)k\,g$, then every sectional
curvature satisfies $K\ge k$; in particular the Ricci lower bound controls the
individual sectional curvatures.

The product $M:=\mathbb H^2(-1)\times\mathbb R^{\,n-2}$ of the hyperbolic plane
$\mathbb H^2(-1)$ of constant sectional curvature $-1$ with the flat Euclidean
factor, with the product metric, is a counterexample for every $n\ge3$:

1. $M$ is complete;
2. $\operatorname{Ric}\ge-g=(n-1)k\,g$ for $k:=-\dfrac{1}{n-1}$;
3. a two-plane tangent to the $\mathbb H^2$ factor at any point has
   $K=-1<k$.

So a Ricci lower bound with $k<0$ does not force the sectional curvature bound
$K\ge k$ once $n\ge3$. Both factors are needed: on a surface Ricci is the
sectional curvature, so no such failure occurs when $n=2$.

## Facts & Assumptions

**Given:** The hyperbolic plane $\mathbb H^2(-1)$ realized as the upper half-plane $U^2=\{y>0\}$ with $g_1=y^{-2}(dx^2+dy^2)$, the Euclidean space $\mathbb R^{\,n-2}$ with the Euclidean metric and $n\ge3$, the product $M=\mathbb H^2(-1)\times\mathbb R^{\,n-2}$ with the product metric, and the inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the hyperbolic-completeness and product-completeness suppliers used below; the curvature and trace computations add no selection.

[F1] Product manifolds and metrics ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[thm-canonical-tangent-and-cotangent-splittings-for-products]], [[prop-coordinate-criterion-for-a-riemannian-metric]]): the product of smooth manifolds carries its canonical product smooth structure, its tangent spaces split canonically as $T_{(p_1,p_2)}(M_1\times M_2)\cong T_{p_1}M_1\oplus T_{p_2}M_2$, and a smooth symmetric positive-definite $(0,2)$-tensor field is a Riemannian metric; in a product chart $(x^1,\dots,x^{n_1},y^1,\dots,y^{n_2})$ the product metric has the block-diagonal matrix $\operatorname{diag}\bigl((g_{1,ij}(x)),(g_{2,\alpha\beta}(y))\bigr)$, the first block depending only on $x$ and the second only on $y$.

[F2] Levi-Civita symbols and coordinate curvature ([[thm-fundamental-theorem-of-riemannian-geometry]], [[prop-christoffel-formula-for-the-levi-civita-connection]], [[prop-connection-laws-in-directional-form]], [[prop-coordinate-formula-for-the-curvature-tensor]], [[thm-curvature-is-a-type-one-three-tensor]]): the Levi-Civita connection is unique; in a chart its Christoffel symbols are $\Gamma^a{}_{bc}=\tfrac12g^{ad}\bigl(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc}\bigr)$, and the curvature components are $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb} +\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$; the curvature is $C^\infty$-linear in all three argument fields, so a formula verified on a coordinate frame holds for all tangent vectors.

[F3] The two factors ([[prop-half-space-model-geometry]], [[ex-euclidean-space-has-zero-curvature]], [[thm-euclidean-space-complete]]): the upper half-plane $U^2=\{y>0\}$ with $g_1=y^{-2}(dx^2+dy^2)$ is the case $a=1$, $n=2$ of the half-space model, hence a complete Riemannian surface of constant sectional curvature $-1$; Euclidean $\mathbb R^{\,n-2}$ has identically zero Riemann curvature and is metrically complete.

[F4] Ricci is the trace $\operatorname{Ric}(X,Y)=\operatorname{tr}(Z\mapsto R(Z,X)Y)$ and, in an orthonormal basis $(e_1,\dots,e_n)$, $\operatorname{Ric}(X,Y)=\sum_i\operatorname{Rm}(e_i,X,Y,e_i)$, independently of the basis ([[def-ricci-curvature]], [[lem-ricci-curvature-is-symmetric-and-basis-independent]]). For orthonormal $e_i,e_j$, $\operatorname{Rm}(e_i,e_j,e_j,e_i)=K(\operatorname{span}(e_i,e_j))$ ([[def-sectional-curvature]]).

[F5] Product completeness ([[prop-a-riemannian-product-is-complete-iff-each-factor-is-complete]]): a finite Riemannian product is metrically complete exactly when each factor is metrically complete.



## Counterexample

1.1 The product connection splits. [F1, F2, given]
In a product chart of [F1] the metric matrix is block diagonal, the first block a function of $x$ alone and the second a function of $y$ alone, and its inverse has the same block structure and dependence. In the Christoffel formula of [F2], if the upper index and the two lower indices are not all contained in the same block, then each of the three derivative terms either differentiates a mixed component, which vanishes identically, or differentiates a component of one block with respect to a coordinate of the other block, and each term $g^{ad}$ with $a$ in one block and $d$ in the other vanishes; hence $\Gamma^a{}_{bc}=0$ whenever the three indices do not all lie in one block. When all three do lie in one block the formula is literally the Christoffel formula of that factor's metric. [F1, F2, given]

2.1 The curvature splits accordingly. [F1, F2, step 1.1]
Insert the symbols of step 1.1 into the coordinate curvature formula of [F2]. If all four indices lie in the first block, then the symbols with all indices in that block are exactly those of $g_1$ and the first block of the inverse depends only on $x$, so the formula reproduces the coordinate formula for the curvature of $g_1$; the same holds in the second block. If the indices meet both blocks, then every derivative term differentiates either an identically zero symbol or a block symbol with respect to a coordinate of the other block, and every quadratic term contains a symbol whose indices meet both blocks; so the component vanishes. By the tensoriality in [F2] and the canonical splitting of [F1], for tangent vectors decomposed accordingly, $$R^{M_1\times M_2}\bigl((u_1,u_2),(v_1,v_2)\bigr)(w_1,w_2)=\bigl(R^{M_1}(u_1,v_1)w_1,\,R^{M_2}(u_2,v_2)w_2\bigr).$$ Consequently a two-plane inside the first factor has the sectional curvature computed from $g_1$ with the same Gram determinant, and a plane inside the second factor has the sectional curvature computed from $g_2$; in particular the planes inside the Euclidean factor are flat. [F1, F2, step 1.1]

3.1 The curvature table of the product. [F3, step 2.1, given]
Fix a point of $M$ and an orthonormal frame $e_1,\dots,e_n$ with $e_1,e_2$ tangent to the $\mathbb H^2$ factor and $e_3,\dots,e_n$ tangent to the $\mathbb R^{\,n-2}$ factor. By [F3] the hyperbolic factor has constant sectional curvature $-1$ and the Euclidean factor has identically zero curvature, so step 2.1 gives: $$K(\operatorname{span}(e_1,e_2))=-1,\qquad K(\operatorname{span}(e_i,e_j))=0\quad\text{otherwise},$$ because every other pair of frame vectors either lies inside the flat factor, where [F3] gives vanishing curvature, or is mixed, in which case the curvature endomorphism of step 2.1 annihilates the pair. [F3, step 2.1, given]

4.1 The Ricci tensor of the product. [F4, step 3.1]
By the orthonormal-basis formula of [F4], the diagonal Ricci entries are $\operatorname{Ric}(e_j,e_j)=\sum_{i\neq j}K(\operatorname{span}(e_i,e_j))$. Step 3.1 gives $\operatorname{Ric}(e_1,e_1)=\operatorname{Ric}(e_2,e_2)=-1$ and $\operatorname{Ric}(e_j,e_j)=0$ for $j\ge3$. The curvature splitting of step 2.1 makes the mixed Ricci entries zero; on the two-dimensional hyperbolic factor the Ricci tensor is $-g_1$, so its off-diagonal entry in the chosen orthonormal frame is also zero. Hence for $X=\sum_jx^je_j$, $$\operatorname{Ric}(X,X)=-(x^1)^2-(x^2)^2\ge-\sum_{j=1}^n(x^j)^2=-|X|^2,$$ with equality exactly on $\operatorname{span}(e_1,e_2)$. Thus $\operatorname{Ric}\ge-g$, and since $k=-1/(n-1)$ gives $(n-1)k=-1$, this is exactly $\operatorname{Ric}\ge(n-1)k\,g$. [F4, step 3.1]

5.1 The sectional bound fails and $M$ is complete. [F3, F5, step 4.1]
The two-plane tangent to the hyperbolic factor has $K=-1<-\frac{1}{n-1}=k$, because $n\ge3$ makes $\frac{1}{n-1}<1$. So the Ricci lower bound does not imply $K\ge k$. For completeness: by [F5] the product is metrically complete exactly when both factors are, and the hyperbolic plane and Euclidean space are metrically complete by [F3]; hence $M$ is metrically complete. In $n=2$ the same construction degenerates to $\mathbb H^2(-1)$ alone, and there Ricci is the sectional curvature, so the failure genuinely needs dimension at least three. The product, its factors and the two-plane are explicit, so the inherited $\mathrm{AC}_\omega$ of [A1] is not drawn on beyond its declaration. [F3, F5, step 4.1] ∎
