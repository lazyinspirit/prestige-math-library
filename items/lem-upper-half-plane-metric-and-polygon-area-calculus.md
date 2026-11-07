---
id: lem-upper-half-plane-metric-and-polygon-area-calculus
kind: lemma
title: Upper-half-plane metric and finite polygon area calculus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-fuchsian-dirichlet-domains-and-cusp-data
- thm-poincare-distance-formula-and-disc-automorphism-invariance
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
  - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups, author text
    url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
    locator: 'Sections 4.10-4.11, printed pp.75-77: fundamental/Dirichlet domains
      and face-cycle setup. The finite-area and cusp arguments here are supplied locally.'
  - title: William P. Thurston, The Geometry and Topology of Three-Manifolds, electronic
      version 1.1 (2002)
    url: https://library.slmath.org/books/gt3m/PDF/Thurston-gt3m.pdf
    locator: 'Sections 2.1-2.4 and 3.8-3.9: models and horospheres. Sections 5.10-5.11
      are a distinct thick-thin treatment in the manifold setting, not an imported
      proof of the torsion-bearing Fuchsian assertion.'
dependency_level: 1
---

## Statement

For the upper-half-plane metric, real determinant-one fractional-linear
maps preserve length and area, and
$$\cosh d(z,w)=1+\frac{|z-w|^2}{2\operatorname{Im}z\,\operatorname{Im}w}, \qquad \operatorname{Im}\frac{az+b}{cz+d} =\frac{\operatorname{Im}z}{|cz+d|^2}.$$
A point stabilizer is conjugate to the rotation group, and maps fixing
$\infty$ have the affine form $z\mapsto\lambda z+b$ with $\lambda>0$.
Closed metric balls are compact. Complete geodesics are vertical lines
and semicircles orthogonal to the real axis; they separate geodesically
convex half-planes. The bisector of two distinct points is such a
geodesic, and each distance comparison defines one of its closed
half-planes. A compact convex geodesic polygon with ordinary interior
angles $\alpha_1,\ldots,\alpha_n$ has area
$$\operatorname{area}(P)=\sum_{j=1}^n(\pi-\alpha_j)-2\pi.$$
An ideal triangle has area $\pi$ and an ideal convex $n$-gon has area
$(n-2)\pi$. These assertions use only the stated model and finite
calculus, with no compact-surface triangulation or choice axiom.

## Facts & Assumptions

**Given:** The model and finite polygons in the Statement.

[F1] The metric, area, real matrix action and ideal boundary are as in
[[def-fuchsian-dirichlet-domains-and-cusp-data]].

[F2] The disc distance is $2\operatorname{artanh}|\varphi_z(w)|$ and is
invariant under disc automorphisms.
[[thm-poincare-distance-formula-and-disc-automorphism-invariance]]

## Proof

1.1 For $g(z)=(az+b)/(cz+d)$, direct subtraction and differentiation give $\operatorname{Im}g(z)=y/|cz+d|^2$ and $g'(z)=1/(cz+d)^2$; these identities preserve $|dz|/y$ and $dx\,dy/y^2$. The Cayley map $C(z)=(z-i)/(z+i)$ has $2|C'(z)|/(1-|C(z)|^2)=1/y$. Transporting [F2] through it and simplifying $\cosh(2\operatorname{artanh}r)=(1+r^2)/(1-r^2)$ gives the displayed distance formula. In particular the closed radius-$R$ ball at $i$ is the Euclidean disc $x^2+(y-\cosh R)^2\le\sinh^2R$, whose lowest height is $e^{-R}>0$. It is compact in $\mathbb H$, and matrix invariance transports this conclusion to every center. Solving $g(i)=i$ gives $g=k(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$ modulo sign; conjugation gives every other point stabilizer. Solving $g(\infty)=\infty$ gives $c=0$, hence $g(z)=\lambda z+b$ with $\lambda>0$. [F1, F2, given, algebra]

2.1 On a vertical segment, $\int |dz|/y=|\log(y_2/y_1)|$; every competing piecewise smooth path has length at least $|\int dy/y|=|\log(y_2/y_1)|$. Equality forces horizontal velocity zero and vertical velocity of one sign, so this minimizing segment is unique. Through any two distinct points there is a unique vertical line or boundary-orthogonal semicircle; a real fractional-linear map carries this circle to a vertical line. Thus its segment is the unique shortest geodesic. Conjugating the half-plane models by the disc radial map $w\mapsto 2w/(1+|w|^2)$ gives the Klein disc: direct substitution sends each boundary-orthogonal circle to its straight chord and fixes ideal endpoints. The two sides of each chord are Euclidean convex, so their inverse images are geodesically convex. Finally the equality $d(z,p)=d(z,q)$, on using step 1.1 and clearing positive denominators, is a circle with center on the real axis or a vertical line; its distance sublevel set is one side of that circle. This proves the half-plane and bisector assertions, including closedness. [F1, step 1.1, algebra]

3.1 For a compact polygon, subdivide its Euclidean $x$-projection at the finitely many side endpoints and vertical tangencies of its circular sides. In each remaining interval the region is a finite union of strips between smooth lower and upper graphs. Integration of $y^{-2}$ in the vertical variable gives $1/y_{\mathrm{lower}}-1/y_{\mathrm{upper}}$; summing the finite pieces yields $\operatorname{area}(P)=\int_{\partial P}dx/y$ for the positive boundary orientation. Vertical edges contribute zero. On a circular edge write $x=c+R\cos\theta$, $y=R\sin\theta$; then $dx/y=-d\theta$, whereas its continuous tangent angle changes by $d\theta$. Thus area is the negative sum of tangent-angle changes along the smooth edges. The total tangent turning, including the ordinary corners, is $2\pi$. To justify that total directly, use the Klein-disc identification of step 2.1: a convex polygon there has one full turn of tangent directions, and the radial diffeomorphism is orientation preserving, with explicit isotopy $r\mapsto(1-t)r+t\,2r/(1+r^2)$ having positive radial derivative for $r<1$, so it preserves the total turning: during this deformation the tangent direction makes a continuous finite closed path, whose lifted argument changes by an integer multiple of $2\pi$; that integer is continuous in the deformation and hence constant. Each corner contributes its exterior angle $\pi-\alpha_j$, since the original model is conformal. Consequently $2\pi=-\operatorname{area}(P)+\sum_j(\pi-\alpha_j)$, the claimed formula. This argument is a finite decomposition into elementary one-variable integrals. [F1, step 2.1, construct, algebra]

4.1 A real fractional-linear map carries any ordered ideal triangle to the one with vertices $0,1,\infty$. Its area is $\int_0^1\int_{\sqrt{x(1-x)}}^\infty y^{-2}\,dy\,dx=\int_0^1 dx/\sqrt{x(1-x)}=\pi$, by $x=(1+\cos\theta)/2$ with the orientation of the interval reversed. Nonnegative integration over the finitely many pieces also handles the ideal endpoints by taking increasing compact truncations. An ideal convex $n$-gon decomposes along noncrossing diagonals into $n-2$ ideal triangles, so its area is $(n-2)\pi$. All decompositions and substitutions are finite, and none uses a choice principle. [F1, step 1.1, step 2.1, construct, algebra] ∎
