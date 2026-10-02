---
id: ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity
kind: example
title: A flat torus showing simple connectedness is needed for global exp injectivity
status: draft
origin: pipeline
deps:
  - thm-cartan-hadamard
  - thm-a-complete-local-isometry-is-a-covering-map
  - def-countable-choice
  - prop-flat-torus-model-geometry
  - prop-christoffel-formula-for-the-levi-civita-connection
  - prop-coordinate-geodesic-equation
  - prop-coordinate-formula-for-the-curvature-tensor
  - def-sectional-curvature
  - def-riemann-curvature-four-tensor
  - def-riemannian-isometry-and-local-isometry
  - thm-euclidean-space-complete
  - thm-homotopy-lifting-for-covering-maps
  - thm-path-lifting-for-covering-maps
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-based-loops-and-fundamental-group
  - thm-fundamental-group-laws
  - def-simply-connected
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
      locator: "§§20.1 and 24.3, pp.147–149, 178–179: the flat torus as the model complete flat manifold, and the role of simple connectedness in Cartan–Hadamard"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, pp.17–19: Cartan–Hadamard and the flat torus as the standard counterexample to global injectivity"
---

## Example

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$n\ge2$, let $\mathbb Z^n\subseteq\mathbb R^n$ be the integer lattice acting on
$\mathbb R^n$ by translations, and let $T^n=\mathbb R^n/\mathbb Z^n$ carry the
flat torus metric descended from the Euclidean metric, with quotient map
$q:\mathbb R^n\to T^n$. Then:

1. $(T^n,g)$ is complete and has constant sectional curvature $K=0$;
2. under the chart identification of $T_pT^n$ with $\mathbb R^n$, and for
   $p=[x]$, the exponential map is the translated quotient map
   $$\exp_p(v)=[x+v],$$
   which is not injective;
3. $T^n$ is not simply connected.

Thus $(T^n,g)$ satisfies the completeness and nonpositive-curvature hypotheses
of [[thm-cartan-hadamard]] — indeed $K=0$ — while failing only its simple
connectedness hypothesis, and the conclusion of that theorem fails as well.
Simple connectedness cannot be dropped from Cartan–Hadamard.

## Facts & Assumptions

**Given:** The integer $n\ge2$, the integer lattice $\mathbb Z^n$, the quotient $T^n=\mathbb R^n/\mathbb Z^n$ with quotient map $q$, the flat torus metric $g$ of [[prop-flat-torus-model-geometry]], and the inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the existence and uniqueness theory of geodesics used below; all manifolds, charts and curves below are explicit.

[F1] The flat torus metric: the quotient $T^n=\mathbb R^n/\mathbb Z^n$ carries a Riemannian metric $g$, unique with $q^*g=\sum_i dx_i^2$, whose quotient charts are boxes with integer-translation transitions; $(T^n,g)$ is a connected boundaryless smooth $n$-manifold on which $q$ is a surjective local isometry ([[prop-flat-torus-model-geometry]]).

[F2] Coordinate calculus: a curve is a geodesic of a coordinate chart exactly when its coordinate acceleration plus the Christoffel term vanishes ([[prop-coordinate-geodesic-equation]]), the Christoffel symbols of a metric with constant coordinate matrix vanish ([[prop-christoffel-formula-for-the-levi-civita-connection]]), and the curvature components are given by the coordinate formula ([[prop-coordinate-formula-for-the-curvature-tensor]]) for the Riemann curvature four-tensor of [[def-riemann-curvature-four-tensor]]. The sectional curvature normalizes $\operatorname{Rm}(X,Y,Y,X)$ by the Gram determinant of an independent pair ([[def-sectional-curvature]]).

[F3] The completeness and covering theorem: a local isometry $F:(N,\hat g)\to(M,g)$ between connected boundaryless Riemannian manifolds with $N$ complete and nonempty has $F$ a covering map and $(M,g)$ complete ([[thm-a-complete-local-isometry-is-a-covering-map]]); a local isometry is a smooth local diffeomorphism preserving the metric under the differential ([[def-riemannian-isometry-and-local-isometry]]).

[F4] The exponential map of a flat torus: for the lattice quotient $\mathbb R^n/\mathbb Z^n$ with the descended flat metric, every fibrewise exponential map has domain all of $T_{[x]}T^n$ and satisfies $\exp_{[x]}(v)=[x+v]$ ([[prop-flat-torus-model-geometry]]).

[F5] Covering theory: a covering map is a surjective local homeomorphism whose points have evenly covered neighbourhoods ([[def-covering-map-and-evenly-covered-neighbourhoods]]); a path in the base lifts uniquely once its starting point in the total space is fixed ([[thm-path-lifting-for-covering-maps]]), and a homotopy with a lift of its initial map lifts uniquely ([[thm-homotopy-lifting-for-covering-maps]]).

[F6] Fundamental group and simple connectedness: based loop classes form $\pi_1$ ([[def-based-loops-and-fundamental-group]]), the class of the constant loop $c_{x_0}$ is its identity element ([[thm-fundamental-group-laws]]), and a space is simply connected when it is nonempty, path connected and every $\pi_1(X,x_0)$ has exactly one element ([[def-simply-connected]]).

[F7] Cartan–Hadamard: a complete, connected, boundaryless Riemannian manifold with $K\le0$ that is simply connected has $\exp_p$ a diffeomorphism for every $p$ ([[thm-cartan-hadamard]]).

[F8] $(\mathbb R^n,d_2)$ is a complete metric space for $n\ge1$ ([[thm-euclidean-space-complete]]).

## Verification

**Proof technique:** direct: the quotient charts make $q$ a local isometry from the complete Euclidean space, so the completeness/covering theorem makes $q$ a covering map and the torus complete; the constant coordinate metric kills all curvature; straight lines are the geodesics, so $\exp$ is a translated quotient map and is noninjective; a lift of the standard loop through the covering proves that the loop is essential.

1.1 The quotient map $q$ is a local isometry, a covering map, and $(T^n,g)$ is complete. [F1, F3, F8, given]
In a periodic chart of [F1] the metric matrix is the identity. The local inverse charts of $q$ are the inverses of the restrictions of $q$ to boxes of side lengths less than $1$, and in those coordinates $q$ is the identity map of an open subset of $\mathbb R^n$; hence the differential of $q$ preserves the Euclidean metric of $\mathbb R^n$ and the flat metric of $T^n$ at every point. By [F3] this makes $q$ a local isometry from the boundaryless connected Riemannian manifold $(\mathbb R^n,g_{\mathrm E})$ onto $(T^n,g)$, where $T^n$ is connected and boundaryless by [F1]. The Euclidean space is complete by [F8] and nonempty since $n\ge2$. The local isometry is therefore a covering map by [F3], and part 3 of [F3] makes $(T^n,g)$ complete. [F1, F3, F8, given]

2.1 The torus has constant sectional curvature $K=0$. [F2, step 1.1]
Take a periodic chart of [F1] with coordinates $x^1,\dots,x^n$, in which the metric matrix is constantly $I_n$. Its first derivatives vanish identically, so every Christoffel symbol vanishes by the formula of [F2]. Substituting the vanishing symbols into the coordinate formula of [F2] gives $R^\ell{}_{kij}=0$ in the chart, that is, the Riemann curvature four-tensor vanishes there, and since the charts cover $T^n$ it vanishes on all of $T^n$. Hence $\operatorname{Rm}(X,Y,Y,X)=0$ for every tangent pair, and dividing by the Gram determinant, which is positive for an independent pair by [F2], gives $K=0$ at every tangent two-plane; in particular $K\le0$. [F2, step 1.1]

2.2 Straight lines are the geodesics and the exponential map is $v\mapsto[x+v]$. [F2, F4, step 1.1]
Fix $x,v\in\mathbb R^n$ and let $\gamma(t)=q(x+tv)$ for $t\in\mathbb R$. In a periodic chart containing $q(x+tv)$ the coordinate expression of $\gamma$ is $t\mapsto x+tv$ up to a constant integer translation, and its coordinate acceleration is identically zero; since the Christoffel symbols of [F1] vanish in these charts, [F2] makes $\gamma$ a geodesic. Its initial point is $[x]$ and its initial tangent is the vector identified with $v$, and it is defined on all of $\mathbb R$; by uniqueness of the maximal geodesic with given initial data the world line is complete. Thus every fibrewise exponential map has domain all of $T_{[x]}T^n$ and $\exp_{[x]}(v)=\gamma(1)=[x+v]$, the formula recorded in [F4]. [F2, F4, step 1.1]

3.1 The exponential map is the quotient map and is not injective. [step 2.2]
The chart identification of $T_{[x]}T^n$ with $\mathbb R^n$ is linear, so step 2.2 says that $\exp_{[x]}$ is exactly the quotient projection $q$ composed with the translation $v\mapsto x+v$; explicitly, $q(w)=[w]$ and $\exp_{[x]}(v)=q(x+v)$. Thus it is the
quotient projection after translation, and is surjective. Let $z=e_1\in\mathbb Z^n$ be the first standard basis vector; this is a nonzero lattice vector because $n\ge2$. The tangent vectors $0$ and $z$ are distinct, but step 2.2 gives $$\exp_{[x]}(0)=[x]=[x+z]=\exp_{[x]}(z).$$ Hence $\exp_p$ is not injective for any $p=[x]\in T^n$. [step 2.2]

3.2 The torus is not simply connected. [F5, F6, step 1.1, step 2.2]
Define $\gamma:[0,1]\to T^n$ by $\gamma(s)=[se_1]$, a based loop at $[0]$. Its lift starting at $0$ is $s\mapsto se_1$, so its endpoint is $e_1\ne0$ ([[thm-path-lifting-for-covering-maps]] in [F5]). Suppose it were homotopic relative endpoints to the constant loop, via $H:[0,1]^2\to T^n$ with $H(s,0)=\gamma(s)$, $H(s,1)=[0]$, and $H(0,t)=H(1,t)=[0]$. Lift $H$ with $\widetilde H(0,0)=0$ by [F5]. The lower edge lifts $\gamma$, so $\widetilde H(1,0)=e_1$. The right edge lifts the constant path starting at $e_1$, hence is constantly $e_1$. The top edge lifts the constant path starting at $\widetilde H(0,1)=0$, hence is constantly $0$. Thus $\widetilde H(1,1)=e_1=0$, a contradiction. Therefore $[\gamma]$ is not the identity in $\pi_1(T^n,[0])$. Since $T^n$ is nonempty and path connected, it is not simply connected by [F6]. [F5, F6, step 1.1, step 2.2]

4.1 Conclusion, and the hypotheses of Cartan–Hadamard. [F3, F7, step 2.1, step 3.1, step 3.2] By step 1.1 the torus is complete, by step 2.1 it has $K=0\le0$, and it is a connected boundaryless Riemannian manifold; by step 3.2 it is not simply connected. It therefore satisfies every hypothesis of [[thm-cartan-hadamard]] except simple connectedness, and by step 3.1 the conclusion of that theorem — injectivity of $\exp_p$ — fails at every point. Hence simple connectedness cannot be omitted from Cartan–Hadamard. The failure is exactly the deck-group phenomenon: for every $p$ the fibre of $\exp_p$ over $p$ is the lattice $\mathbb Z^n$ of step 3.1 translations, and the covering $q$ of step 1.1 is nontrivial precisely because the deck translations are nontrivial. Boundary cases: the word "constant curvature $0$" is two-plane curvature, so it is asserted only for $n\ge2$ as in the statement; the vector $z=e_1$ used in step 3.1 is nonzero exactly because $n\ge1$; the case $v=0$ of step 2.2 is the constant geodesic through $[x]$, and $0$ and $z$ are distinct vectors with the same image, so the failure of injectivity is not an artefact of a degenerate vector. No choice beyond the inherited [A1] is used: the lattice, the charts, the loop and the homotopy argument are all explicit. [F3, F7, step 2.1, step 3.1, step 3.2] ∎

## Source locator

Datar §20.1 and §24.3, pp.147–149 and 178–179, presents the flat torus as the standard complete flat manifold for which global exponential injectivity fails, with simple connectedness the missing Cartan–Hadamard hypothesis; Eschenburg §5, pp.17–19, uses the same model. The chart, curvature, exponential and homotopy-lifting computations are carried out locally above from the published quotient-chart and covering-space suppliers.
