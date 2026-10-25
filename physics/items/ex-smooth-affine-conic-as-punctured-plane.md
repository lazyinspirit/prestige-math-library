---
id: ex-smooth-affine-conic-as-punctured-plane
kind: example
title: A nonsingular affine conic is a punctured-plane Riemann surface
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-affine-algebraic-set
  - def-jacobian-matrix-affine-algebraic-set
  - def-complex-annulus
  - ex-basic-riemann-surface-atlases
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
  - def-topological-manifold-without-boundary
  - lem-t0-t1-and-hausdorff-are-hereditary
  - prop-second-countability-is-hereditary
  - thm-continuous-image-of-a-connected-space
  - thm-algebra-of-complex-derivatives
  - cor-complex-differentiability-implies-continuity
  - def-biholomorphic-map
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2, Examples 1.9(iii) and the explicit conic example, printed pp. 10–11: the zero set x^2+y^2=1 is identified with the punctured plane by u=x+iy."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.csail.mit.edu/ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 1–2, elementary examples of Riemann surfaces; used as a cross-check of the parametrization."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

The affine algebraic curve $C_0=\{(x,y)\in\mathbb C^2:x^2+y^2=1\}$ is
nonsingular at every point, and the map
$$u:C_0\to\mathbb C^\times,\qquad u(x,y)=x+iy,$$
is a biholomorphism onto the punctured plane with inverse
$$u\mapsto\Bigl(\frac{u+u^{-1}}{2},\ \frac{u-u^{-1}}{2i}\Bigr).$$
Thus $C_0$ is a Riemann surface biholomorphic to $\mathbb C^\times$, and the
inverse components are $x=(u+u^{-1})/2$ and $y=(u-u^{-1})/(2i)$.

## Facts & Assumptions

**Given:** The affine curve $C_0=\{x^2+y^2=1\}\subseteq\mathbb C^2$ and the punctured plane $\mathbb C^\times=\mathbb C\setminus\{0\}=A(0;0,\infty)$.

[F1] An affine algebraic set is $V(S)=\{a\in\mathbb C^n:f(a)=0\ \text{for all }f\in S\}$, and the Jacobian matrix of a generating list is $(\partial f_i/\partial t_j)$; for a curve in $\mathbb C^2$ nonsingularity in the Jacobian-rank sense means the single gradient does not vanish ([[def-affine-algebraic-set]], [[def-jacobian-matrix-affine-algebraic-set]]).

[F2] $\mathbb C^\times=A(0;0,\infty)$ is a nonempty connected open subset of $\mathbb C$, hence a Riemann surface with its identity atlas ([[def-complex-annulus]], [[ex-basic-riemann-surface-atlases]]).

[F3] A Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas; holomorphic maps between Riemann surfaces are those whose chart expressions are holomorphic, and a biholomorphism is a holomorphic bijection with holomorphic inverse ([[def-riemann-surface-and-holomorphic-atlas]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-biholomorphic-map]]).

[F4] $\mathbb C^2$ is a topological $4$-manifold, hence Hausdorff and second countable, and both properties pass to subspaces ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]], [[def-topological-manifold-without-boundary]], [[lem-t0-t1-and-hausdorff-are-hereditary]], [[prop-second-countability-is-hereditary]]).

[F5] Continuous images of connected spaces are connected; homeomorphisms preserve connectedness ([[thm-continuous-image-of-a-connected-space]]).

[F6] Sums, products and quotients of complex differentiable functions are complex differentiable, with the usual derivative formulas, on the open set where the denominator does not vanish; complex differentiability implies continuity ([[thm-algebra-of-complex-derivatives]], [[cor-complex-differentiability-implies-continuity]]).



## Verification

**Proof technique:** direct.

1.1 (The conic is nonsingular.) The curve is cut out by the single polynomial $f(x,y)=x^2+y^2-1$ with gradient $\nabla f=(2x,2y)$; if $\nabla f$ vanished at a point of $C_0$ then $x=y=0$ and $x^2+y^2=0\ne1$, so $\nabla f$ is nowhere zero on $C_0$ and the Jacobian-rank condition of [F1] holds at every point. [F1, given]

1.2 (The two factors are reciprocal.) For $(x,y)\in C_0$ one has $(x+iy)(x-iy)=x^2+y^2=1$, so $u=x+iy$ satisfies $u\ne0$ and $x-iy=u^{-1}$; adding and subtracting the two equations gives $x=(u+u^{-1})/2$ and $y=(u-u^{-1})/(2i)$. [F6, given, algebra]

2.1 ($u$ is a bijection onto the punctured plane.) If $u(x,y)=u(x',y')$ then $x+iy=x'+iy'$ and, by step 1.2, also $x-iy=u^{-1}=x'-iy'$, so $(x,y)=(x',y')$ and $u$ is injective; conversely, for $u\in\mathbb C^\times$ the point $v(u)=\bigl((u+u^{-1})/2,(u-u^{-1})/(2i)\bigr)$ satisfies $v(u)\in C_0$ because its coordinates give $x+iy=u$ and $x-iy=u^{-1}$, whose product is $1$, and $u(v(u))=u$, so $u$ is surjective with the displayed inverse. [step 1.2, algebra]

3.1 ($u$ and its inverse are continuous.) The map $u$ is the restriction of the polynomial map $(x,y)\mapsto x+iy$, which is complex differentiable and hence continuous by [F6]; the inverse $v$ has components that are rational functions of $u$ and $u^{-1}$, complex differentiable on $\mathbb C^\times$ by [F6] and so continuous; hence $u:C_0\to\mathbb C^\times$ is a continuous bijection with continuous inverse, that is, a homeomorphism. [F6, step 2.1]

4.1 (Transport of the complex structure.) Give $C_0$ the one-chart atlas $\{u\}$, the chart $u$ being the homeomorphism of step 3.1 onto the plane domain $\mathbb C^\times$; its only transition with itself is the identity, which is holomorphic, and $C_0$ is nonempty, connected as a continuous image of the connected $\mathbb C^\times$ under $v$ by [F5], Hausdorff and second countable by [F4], so $C_0$ is a Riemann surface by [F3]; with these charts the chart expression of $u$ is the identity and the chart expression of its inverse $v$ is also the identity, so $u$ is a biholomorphism $C_0\to\mathbb C^\times$ by [F3]. [F2, F3, F4, F5, step 3.1]

5.1 (Conclusion.) The curve $x^2+y^2=1$ is nonsingular at every point by step 1.1, and step 4.1 exhibits it as a Riemann surface biholomorphic to $\mathbb C^\times$ through $u=x+iy$, with inverse $x=(u+u^{-1})/2$, $y=(u-u^{-1})/(2i)$, exactly as claimed. [step 1.1, step 4.1] ∎



## Remarks

The biholomorphism is global, so this conic is one of the few curves whose
Riemann-surface structure is visible without the implicit function theorem;
nevertheless the pair $(C_0,u)$ is the standard illustration of the
local-graph construction of
[[ex-nonsingular-algebraic-curve-charts]], where the same curve is treated as a
nonsingular affine instance. The map $u$ is not the restriction of a globally
defined injective ambient coordinate, which is why the conic is not a graph over
either axis. The curve contains no point with $u=0$, so its image is the
punctured plane and not the whole plane; consequently $C_0$ is noncompact, in
contrast with the compact curves of the projective examples.
