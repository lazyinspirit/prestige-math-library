---
id: fs-positive-ricci-curvature-without-a-uniform-lower-bound-implies-compactness
kind: false-statement
title: Positive ricci curvature without a uniform lower bound implies compactness
status: draft
origin: pipeline
deps:
  - thm-bonnet-myers
  - def-ricci-curvature
  - prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures
  - def-countable-choice
  - def-sectional-curvature
  - def-shape-operator
  - def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface
  - def-induced-connection-and-second-fundamental-form
  - prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold
  - lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed
  - cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric
  - thm-euclidean-space-complete
  - def-complete-metric-space
  - def-metric-compactness
  - def-infimum
  - cor-rn-is-polygonally-connected-and-locally-path-connected
  - thm-path-connected-implies-connected
  - thm-continuous-image-of-a-connected-space
  - lem-ricci-curvature-is-symmetric-and-basis-independent
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - def-riemann-curvature-four-tensor
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
      locator: "§§27.1 and 28.2, pp.199–200, 210–212: Myers' theorem needs a uniform positive lower bound"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§12, pp.59–62: positivity without a uniform bound does not force compactness"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. **False
claim:** if $(M,g)$ is a complete, connected, boundaryless Riemannian manifold
whose Ricci curvature is pointwise positive,
$\operatorname{Ric}_p(v,v)>0$ for every $p\in M$ and every $0\ne v\in T_pM$,
then $M$ is compact.

The claim drops the uniformity of the lower bound in Bonnet–Myers: it asks
only for a positive value at each point, with no common $k>0$ satisfying
$\operatorname{Ric}\ge(n-1)k\,g$. The paraboloid, the standard surface whose
positive curvature decays to zero, refutes it.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], the paraboloid
$P=\{(x,y,z)\in\mathbb R^3:z=x^2+y^2\}$ with the Riemannian metric induced from
Euclidean $\mathbb R^3$, and the false claim displayed in the statement.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the hypersurface-curvature and
submanifold-completeness suppliers cited below; the paraboloid computation
itself selects nothing.

[F1] Hypersurface curvature and the shape operator of a graph
([[prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures]],
[[def-shape-operator]],
[[def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface]],
[[def-induced-connection-and-second-fundamental-form]]): for an embedded
Euclidean hypersurface of dimension $m\ge2$ with a smooth unit normal and
orthonormal principal directions $e_i,e_j$ of principal curvatures
$\kappa_i,\kappa_j$, the sectional curvature of
$\operatorname{span}(e_i,e_j)$ is $\kappa_i\kappa_j$; the principal curvatures
are the eigenvalues of the shape operator $S$, so on a surface the only
sectional curvature is $K=\det S$. For a parametrized surface with first and
second fundamental forms $g$ and $h$ one has $S=g^{-1}h$ and
$\det S=\det h/\det g$; for the graph of a smooth $f$ over the $(x,y)$-plane
with unit normal $N=(-f_x,-f_y,1)/W$, $W=\sqrt{1+|\nabla f|^2}$, one has
$g_{ij}=\delta_{ij}+f_if_j$, $\det g=1+|\nabla f|^2$ and $h_{ij}=f_{ij}/W$.

[F2] Ricci curvature is
$\operatorname{Ric}(X,Y)=\operatorname{tr}(Z\mapsto R(Z,X)Y)$
([[def-ricci-curvature]]), computed in an orthonormal basis by
$\operatorname{Ric}(X,Y)=\sum_i\operatorname{Rm}(e_i,X,Y,e_i)$
([[lem-ricci-curvature-is-symmetric-and-basis-independent]]), and the
sectional curvature of an orthonormal two-plane spanned by $u,v$ is
$K=\operatorname{Rm}(u,v,v,u)$ ([[def-sectional-curvature]]). The four-tensor
satisfies first-pair and last-pair skewness and pair interchange
([[thm-algebraic-symmetries-of-the-riemann-tensor]]).

[F3] Bonnet–Myers: a nonempty, complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$ for a constant $k>0$
is compact ([[thm-bonnet-myers]]). Its hypothesis is a uniform lower bound,
not pointwise positivity.

[F4] Graphs, closedness, completeness and compactness
([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]],
[[lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed]],
[[cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric]],
[[thm-euclidean-space-complete]], [[def-complete-metric-space]],
[[def-metric-compactness]], [[def-infimum]]): the graph of a smooth map is an
embedded submanifold and is closed in the product, and a closed embedded
submanifold of a complete Riemannian manifold whose connected components are
complete is complete in the induced Riemannian metric; Euclidean
$\mathbb R^3$ is complete. A metric space is compact exactly when every
sequence in it has a convergent subsequence, and a convergent sequence in
$\mathbb R^3$ is bounded. The infimum of a nonempty set of reals bounded below
is its greatest lower bound.

[F5] Connectedness ([[cor-rn-is-polygonally-connected-and-locally-path-connected]],
[[thm-path-connected-implies-connected]],
[[thm-continuous-image-of-a-connected-space]]): $\mathbb R^2$ is path
connected, hence connected, and a continuous image of a connected space is
connected.

## Refutation

**Proof technique:** direct: the paraboloid is an embedded complete noncompact
graph; its first and second fundamental forms give $K=4/(1+4r^2)^2$, which is
positive everywhere with infimum zero; on a surface the Ricci tensor is $K$
times the metric, so the paraboloid has pointwise positive Ricci curvature
while its curvature infimum is zero, and it is complete and noncompact.

1.1 The paraboloid is a complete, connected, noncompact surface. [F4, F5, given]
The map $f:\mathbb R^2\to\mathbb R$, $f(x,y)=x^2+y^2$, is smooth and
continuous, so its graph $P=\{(x,y,f(x,y))\}$ is an embedded submanifold of
$\mathbb R^2\times\mathbb R\cong\mathbb R^3$ and is closed in $\mathbb R^3$
by [F4]. The Euclidean metric of $\mathbb R^3$ is complete and its Riemannian
distance is the Euclidean distance, so [F4] makes $P$ complete in the induced
Riemannian metric. The map $(x,y)\mapsto(x,y,x^2+y^2)$ is continuous with
image $P$, and $\mathbb R^2$ is path connected by [F5], so $P$ is path
connected, hence connected, by [F5]. For noncompactness consider
$p_t:=(t,0,t^2)\in P$ for $t=1,2,\dots$: the Euclidean norms
$|p_t|^2=t^2+t^4$ are unbounded, so $(p_t)$ has no convergent subsequence and
[F4] shows that $P$ is not compact. [F4, F5, given]

1.2 The curvature at each point is $K=4/(1+4r^2)^2$. [F1, given]
Parametrize $P$ by $X(x,y)=(x,y,f(x,y))$, so that
$X_x=(1,0,2x)$, $X_y=(0,1,2y)$ and
$$g=\begin{pmatrix}1+4x^2&4xy\\4xy&1+4y^2\end{pmatrix},\qquad \det g=1+4(x^2+y^2)=1+4r^2,$$
where $r^2=x^2+y^2$. The upward unit normal is
$N=(1+4r^2)^{-1/2}(-2x,-2y,1)$, and the second fundamental form has matrix
$$h=(1+4r^2)^{-1/2}\operatorname{Hess}f=(1+4r^2)^{-1/2}\begin{pmatrix}2&0\\0&2\end{pmatrix},\qquad \det h=\frac{4}{1+4r^2}.$$
By [F1] the shape operator satisfies $S=g^{-1}h$ and
$$\det S=\frac{\det h}{\det g}=\frac{4/(1+4r^2)}{1+4r^2}=\frac{4}{(1+4r^2)^2}.$$
By [F1] the sectional curvature of the tangent plane at $X(x,y)$, the only
tangent two-plane of the surface, is $K=\det S=4/(1+4r^2)^2$. [F1, given]

1.3 On a surface the Ricci tensor is $K$ times the metric. [F2]
Let $p\in P$ and let $(e_1,e_2)$ be an orthonormal basis of $T_pP$. Since $P$
is two-dimensional, $T_pP$ is its only tangent two-plane; every orthonormal
basis of this plane computes its basis-independent sectional curvature, so
$K=\operatorname{Rm}(e_1,e_2,e_2,e_1)$ by [F2]. Using the orthonormal-basis
formula of [F2] and the skew symmetries,
$$\operatorname{Ric}(e_1,e_1)=\operatorname{Rm}(e_1,e_1,e_1,e_1) +\operatorname{Rm}(e_2,e_1,e_1,e_2) =0+\operatorname{Rm}(e_1,e_2,e_2,e_1)=K,$$
the middle equality by pair interchange, and likewise
$\operatorname{Ric}(e_2,e_2)=K$; and
$$\operatorname{Ric}(e_1,e_2)=\operatorname{Rm}(e_1,e_1,e_2,e_1) +\operatorname{Rm}(e_2,e_1,e_2,e_2)=0+0=0,$$
because the two terms have respectively equal first and equal last entries. By
bilinearity and symmetry of the Ricci tensor,
$\operatorname{Ric}_p=K(p)\,g_p$ at every point. [F2]

2.1 The curvature is positive with infimum zero. [F4, step 1.2]
For every $(x,y)$ the numerator $4$ and the denominator $(1+4r^2)^2$ are
positive, so $K=4/(1+4r^2)^2>0$ by step 1.2: the paraboloid has positive
sectional curvature everywhere. On the other hand, given any $\delta>0$
choose $r>0$ with $(1+4r^2)^2>4/\delta$; then the point $(r,0,r^2)\in P$ has
$0<K<\delta$. Hence $0$ lies below every value of $K$ but no positive number
is a lower bound, so the greatest lower bound of the set of values of $K$ is
$\inf_PK=0$ by [F4]. [F4, step 1.2]

3.1 The paraboloid has pointwise positive Ricci curvature but no uniform positive lower bound. [step 1.3, step 2.1]
By steps 1.3 and 2.1, for every $p\in P$ and every $0\ne v\in T_pP$,
$$\operatorname{Ric}_p(v,v)=K(p)\,g_p(v,v)>0,$$
so the pointwise positivity hypothesis of the false claim holds. If there were
a constant $k>0$ with $\operatorname{Ric}\ge k\,g$ (the case $n=2$ of the
Bonnet–Myers bound $(n-1)k\,g$), then evaluating at a unit vector $v$ would
give $K(p)=\operatorname{Ric}_p(v,v)\ge k$ for every $p$, contradicting
$\inf_PK=0$ from step 2.1. Hence no uniform positive lower bound exists.
[step 1.3, step 2.1]

4.1 The false claim fails, and Bonnet–Myers is not contradicted. [F3, step 1.1, step 3.1]
The surface $P$ is complete, connected, boundaryless, two-dimensional, and has
pointwise positive Ricci curvature by step 3.1, but it is noncompact by
step 1.1. Therefore the claim that pointwise positive Ricci curvature forces
compactness is false. The theorem of [F3] is unaffected: its hypothesis
$\operatorname{Ric}\ge(n-1)k\,g$ with a fixed $k>0$ fails on $P$ by step 3.1,
so no contradiction arises; the example isolates the uniformity of the lower
bound, not the pointwise sign of the curvature, as the hypothesis that forces
compactness. Dimension zero and one are not witnesses, since Bonnet–Myers and
the deduction $\operatorname{Ric}=K\,g$ are stated in dimension at least two;
the paraboloid realizes the minimal dimension $n=2$. No choice beyond the
inherited [A1] is used. [F3, step 1.1, step 3.1] ∎

## Source locator

Datar §27.1 and §28.2, pp.199–200 and 210–212, and Eschenburg §12, pp.59–62,
state Myers' theorem with the uniform lower bound and note that positivity
alone does not suffice. The paraboloid computation (graph fundamental forms,
shape operator, Gauss curvature and completeness) is carried out above from
the published hypersurface-curvature, graph-submanifold and completeness
suppliers.
