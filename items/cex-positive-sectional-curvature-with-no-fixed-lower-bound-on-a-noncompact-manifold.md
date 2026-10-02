---
id: cex-positive-sectional-curvature-with-no-fixed-lower-bound-on-a-noncompact-manifold
kind: counterexample
title: Positive sectional curvature with no fixed lower bound on a noncompact manifold
status: draft
origin: pipeline
deps:
  - def-sectional-curvature
  - prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures
  - def-countable-choice
  - def-shape-operator
  - def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface
  - def-induced-connection-and-second-fundamental-form
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-distance-on-a-connected-manifold
  - prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold
  - lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed
  - cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric
  - thm-euclidean-space-complete
  - def-complete-metric-space
  - def-metric-compactness
  - def-infimum
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§27.1 and 28.2, pp.199–200, 210–212: curvature of graphs and the absence of a uniform lower bound in the noncompact case"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§12, pp.59–62: positive curvature without a positive lower bound"
---

## Statement refuted

**False claim:** every complete, noncompact Riemannian manifold of everywhere
positive sectional curvature has sectional curvature bounded below by a
positive constant, $\inf K>0$.

The claim is false already in the simplest noncompact model surface: the
paraboloid
$$P:=\{(x,y,z)\in\mathbb R^3:z=x^2+y^2\}$$
with the Riemannian metric induced from Euclidean $\mathbb R^3$ is complete and
noncompact, has positive sectional curvature at every point, and its sectional
curvature takes the values
$$K=\frac{4}{(1+4r^2)^2}>0,\qquad r^2=x^2+y^2,$$
at the point $(x,y,x^2+y^2)$, so $\inf_PK=0$: there is no positive lower bound.

## Facts & Assumptions

**Given:** The paraboloid $P\subseteq\mathbb R^3$ with the metric induced by the Euclidean metric, and the inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the hypersurface curvature and submanifold-completeness suppliers used below; the computation itself selects nothing.

[F1] For an embedded Euclidean hypersurface of dimension $m\ge2$ with a smooth unit normal and orthonormal principal directions $e_i,e_j$ of principal curvatures $\kappa_i,\kappa_j$, the sectional curvature of $\operatorname{span}(e_i,e_j)$ is $\kappa_i\kappa_j$ ([[prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures]]). The principal curvatures are the eigenvalues of the shape operator $S$, so in dimension $2$ the only sectional curvature is $K=\det S=\kappa_1\kappa_2$ ([[def-shape-operator]], [[def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface]]).

[F2] For a parametrized surface with first fundamental form $g=(g_{ij})$ and second fundamental form $h=(h_{ij})$, the identity $h_{ij}=g(SX_i,X_j)$ gives $S=g^{-1}h$ in any coordinate basis, so $\det S=\det h/\det g$ ([[def-induced-connection-and-second-fundamental-form]], [[def-shape-operator]]). For the graph of a smooth $f$ over the $(x,y)$-plane with unit normal $N=(-f_x,-f_y,1)/W$, $W=\sqrt{1+|\nabla f|^2}$, one has $g_{ij}=\delta_{ij}+f_if_j$, $\det g=1+|\nabla f|^2$, and $h_{ij}=f_{ij}/W$.

[F3] The graph of a smooth map is an embedded submanifold ([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]]), and the graph of a continuous map into a Hausdorff space is closed in the product ([[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]]).

[F4] A closed embedded submanifold of a Riemannian manifold whose connected components are complete is complete in the induced Riemannian metric ([[cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric]]); $\mathbb R^3$ with the Euclidean metric is a complete metric space ([[thm-euclidean-space-complete]], [[def-complete-metric-space]]), and its Riemannian distance is the Euclidean distance ([[def-riemannian-distance-on-a-connected-manifold]]).

[F5] A metric space is compact exactly when every sequence in it has a convergent subsequence ([[def-metric-compactness]]); a convergent sequence in $\mathbb R^3$ is bounded. The infimum of a nonempty set of reals bounded below is its greatest lower bound ([[def-infimum]]).

## Counterexample

1.1 The paraboloid is a complete, noncompact surface. [F3, F4, given]
The map $f:\mathbb R^2\to\mathbb R$, $f(x,y)=x^2+y^2$, is smooth and continuous, so its graph $P=\{(x,y,f(x,y))\}$ is an embedded submanifold of $\mathbb R^2\times\mathbb R\cong\mathbb R^3$ by [F3] and is closed in $\mathbb R^3$ by [F3]. The Euclidean metric of $\mathbb R^3$ is complete [F4], and its Riemannian distance is the Euclidean distance; hence [F4] makes $P$ complete in the induced Riemannian metric. For noncompactness consider $p_t:=(t,0,t^2)\in P$ for $t=1,2,\dots$: the Euclidean norms $|p_t|^2=t^2+t^4$ are unbounded, so $(p_t)$ has no convergent subsequence and [F5] shows that $P$ is not compact. [F3, F4, given]

2.1 The curvature at each point. [F1, F2, step 1.1]
Parametrize $P$ by $X(x,y)=(x,y,f(x,y))$, so that $X_x=(1,0,2x)$, $X_y=(0,1,2y)$ and $$g=\begin{pmatrix}1+4x^2&4xy\\4xy&1+4y^2\end{pmatrix},\qquad \det g=1+4(x^2+y^2)=1+4r^2,$$ where $r^2=x^2+y^2$. The upward unit normal is $N=(1+4r^2)^{-1/2}(-2x,-2y,1)$, and the second fundamental form has matrix $$h=(1+4r^2)^{-1/2}\operatorname{Hess}f=(1+4r^2)^{-1/2}\begin{pmatrix}2&0\\0&2\end{pmatrix},\qquad \det h=\frac{4}{1+4r^2}.$$ By [F2] the shape operator satisfies $S=g^{-1}h$ and $$\det S=\frac{\det h}{\det g}=\frac{4/(1+4r^2)}{1+4r^2}=\frac{4}{(1+4r^2)^2}.$$ By [F1] the sectional curvature of the tangent plane at $X(x,y)$, the only tangent two-plane of the surface, is $K=\det S=4/(1+4r^2)^2$. [F1, F2, step 1.1]

3.1 The curvature is positive but its infimum is zero. [F5, step 2.1]
For every $(x,y)$ the numerator $4$ and the denominator $(1+4r^2)^2$ are positive, so $K=4/(1+4r^2)^2>0$: the paraboloid has positive sectional curvature everywhere. On the other hand, given any $\delta>0$ choose $r>0$ with $(1+4r^2)^2>4/\delta$; then the point $(r,0,r^2)\in P$ has $0<K<\delta$. Hence $0$ lies below every value of $K$ but no positive number is a lower bound, so the greatest lower bound of the set of values of $K$ is $\inf_PK=0$ by [F5]: a uniform lower bound $K\ge c>0$ fails on the complete noncompact manifold $P$, refuting the displayed claim. The paraboloid and the chosen radii are explicit, so the inherited $\mathrm{AC}_\omega$ of [A1] is not drawn on beyond its declaration. [F5, step 2.1] ∎
