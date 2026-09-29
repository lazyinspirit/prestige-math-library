---
id: def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
kind: definition
title: Signed geodesic curvature
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-oriented-riemannian-surface-and-positive-quarter-turn
  - def-levi-civita-connection
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - def-christoffel-symbols-of-an-affine-connection
  - thm-christoffel-symbol-transformation-law
  - def-affine-connection-on-a-smooth-manifold
  - def-covariant-derivative-along-a-curve
  - thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, §The Gauss–Bonnet Formula, printed pp. 163–164 (PDF pp. 179–180), lines 6421–6431: the positive tangent-normal frame, inward normal on a positively oriented boundary, signed curvature as the normal component of covariant acceleration, and orthogonality from unit speed."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2 opening, PDF p. 16, lines 480–497, defines signed geodesic curvature of a smooth unit-speed surface curve from metric compatibility and the positive normal; lines 525–530 specify that the positive boundary normal points inward."
---

## Definition

Let $(M,g,J)$ be an oriented Riemannian surface with its Levi–Civita
connection, and let $\gamma:I\to M$ be a regular $C^2$ unit-speed curve on an
interval $I$ with nonempty interior. Write $T=\dot\gamma$. In a coordinate
chart $x=(x^1,x^2)$ around $\gamma(t)$, define the components of its covariant
acceleration by
$$ A^k(t)=\frac{d^2(x^k\circ\gamma)}{dt^2}(t)+\sum_{i,j=1}^2\Gamma^k{}_{ij}(\gamma(t))\frac{d(x^i\circ\gamma)}{dt}(t)\frac{d(x^j\circ\gamma)}{dt}(t) $$
where $\Gamma^k{}_{ij}$ are the Levi–Civita Christoffel symbols in that
chart. For a smooth curve this is the coordinate expression for $D_tT$. The
Christoffel transformation law and the chain rule show that the components
transform as a tangent vector. For a $C^2$ curve, the same chart-independent
formula defines its covariant acceleration $A_\gamma$, also denoted
$\nabla_TT$. At an included endpoint, use the one-sided second derivative.

Unit speed and metric compatibility give $g(A_\gamma,T)=0$. Since $(T,JT)$ is
a positive orthonormal basis of the tangent plane, the **signed geodesic
curvature** is the scalar $k_g$ specified by
$$
A_\gamma=k_g JT,\qquad k_g=g(A_\gamma,JT).
$$
For a unit-speed parametrization of a positively oriented regular-region
boundary arc, the outward-normal-first convention makes $JT$ the inward unit
conormal. For any regular parametrization of a positively oriented boundary
arc with tangent $T$, the corresponding inward unit conormal is $JT/|T|$.
The definition applies on each smooth arc
separately; it assigns no value at a corner. A singleton parameter interval
has no unit-speed curve under this definition.

## Facts & Assumptions

**Given:** An oriented Riemannian surface, its Levi–Civita connection, and a regular $C^2$ unit-speed curve on an interval with nonempty interior. A boundary interpretation additionally supplies a regular region and a positively oriented boundary arc.

[F1] In a positive orthonormal frame, $JE_1=E_2$ and $JE_2=-E_1$; equivalently $(v,Jv)$ is positive for every nonzero $v$ ([[def-oriented-riemannian-surface-and-positive-quarter-turn]]).

[F2] The Levi–Civita connection is metric compatible and torsion free, so $$Xg(Y,Z)=g(\nabla_XY,Z)+g(Y,\nabla_XZ),\qquad \nabla_XY-\nabla_YX=[X,Y]$$ for local fields ([[def-levi-civita-connection]]).

[F3] In coordinates, $\nabla_{\partial_i}\partial_j=\sum_k\Gamma^k{}_{ij}\partial_k$ ([[def-christoffel-symbols-of-an-affine-connection]]).

[F4] Under a change from coordinates $x$ to $y$, $$ \widetilde\Gamma^c{}_{ab}=\frac{\partial y^c}{\partial x^k} \left(\frac{\partial x^i}{\partial y^a} \frac{\partial x^j}{\partial y^b}\Gamma^k{}_{ij} +\frac{\partial^2x^k}{\partial y^a\partial y^b}\right) $$ ([[thm-christoffel-symbol-transformation-law]]).

[F5] Boundary arcs in a regular region are regular $C^2$ embedded arcs ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

[F6] On each smooth boundary arc the tangent is oriented by the outward-normal-first rule ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]]).

[F7] An affine connection is function-linear in its differentiating field and obeys the Leibniz rule in its differentiated field ([[def-affine-connection-on-a-smooth-manifold]]).

[F8] Covariant differentiation along a smooth curve is pullback differentiation, and on a pulled-back local field $s\circ\gamma$ it agrees with $(\nabla s)(\dot\gamma)$ ([[def-covariant-derivative-along-a-curve]], [[thm-covariant-derivative-along-a-curve-is-independent-of-frame-and-extension]]).

## Proof

**Proof technique:** Coordinate covariant acceleration, metric compatibility, and the oriented tangent-plane basis.

1.1 In a local $x$ chart write $x(t)=x\circ\gamma(t)$ and $T=\dot x^j(\partial_j\circ\gamma)$. By the pullback rule [F8], the affine-connection rules [F7], and the coordinate coefficients [F3], for a smooth curve $$D_tT=\ddot x^k\partial_k+\dot x^i\dot x^j\nabla_{\partial_i}\partial_j=\bigl(\ddot x^k+\Gamma^k{}_{ij}\dot x^i\dot x^j\bigr)\partial_k.$$ The same coordinate expression is defined for a $C^2$ curve. In a second chart $y=y(x)$, the chain rule gives $$ \ddot y^a=\frac{\partial y^a}{\partial x^k}\ddot x^k+ \frac{\partial^2y^a}{\partial x^i\partial x^j}\dot x^i\dot x^j. $$ Substitute $\dot y^b=(\partial y^b/\partial x^i)\dot x^i$ and [F4] into $\ddot y^a+\widetilde\Gamma^a{}_{bc}\dot y^b\dot y^c$. The second-derivative terms cancel by differentiating $y^a(x(y))=y^a$ twice, leaving $$ \ddot y^a+\widetilde\Gamma^a{}_{bc}\dot y^b\dot y^c =\frac{\partial y^a}{\partial x^k} \bigl(\ddot x^k+\Gamma^k{}_{ij}\dot x^i\dot x^j\bigr). $$ This is the tangent-vector coordinate transformation rule. Hence the formula defines a chart-independent covariant acceleration for $C^2$ curves; for smooth curves it is the usual $D_tT$, and [F5] supplies the regularity of the boundary arcs. At included endpoints all derivatives are one-sided. [F3, F4, F5, F7, F8]

1.2 Along a positively oriented boundary arc with regular-speed tangent $T$, let $\nu_{\rm out}$ be the outward unit conormal. It is perpendicular to $T$ and has unit length, so it equals either $JT/|T|$ or $-JT/|T|$. In the positive basis $(T,JT)$, the ordered pair $(-JT,T)$ has positive determinant. Thus the outward-normal-first rule [F6] selects $\nu_{\rm out}=-JT/|T|$; consequently $JT/|T|$ is the inward unit conormal. For unit speed this reduces to $JT$. [F1, F6]

2.1 In coordinates, metric compatibility [F2] says $$ \partial_k g_{ij}=\Gamma^\ell{}_{ki}g_{\ell j} +\Gamma^\ell{}_{kj}g_{i\ell}. $$ Differentiate the unit-speed identity $g_{ij}(x(t))\dot x^i\dot x^j=1$. Substituting this expression for $\partial_k g_{ij}$ and using $g_{ij}=g_{ji}$ gives $$ 0=2g_{\ell j}\bigl(\ddot x^\ell+ \Gamma^\ell{}_{ki}\dot x^k\dot x^i\bigr)\dot x^j =2g(A_\gamma,T). $$ So $A_\gamma$ is perpendicular to $T$, including when $A_\gamma=0$. [F2, step 1.1, given]

3.1 By [F1], $(T,JT)$ is a positive orthonormal basis. Since $g(A_\gamma,T)=0$, write $A_\gamma=bJT$; taking the inner product with $JT$ forces the unique coefficient $b=g(A_\gamma,JT)$. This defines the signed scalar $k_g$ and proves $A_\gamma=k_gJT$. If the curve is geodesic at a point, then $A_\gamma=0$ there and $k_g=0$. [F1, step 2.1]

4.1 In standard Cartesian coordinates on the Euclidean plane, $g_{ij}=\delta_{ij}$. Lower the first index of $\Gamma^k{}_{ij}$ using $\delta$. Torsion freeness in [F2] makes the resulting $\Gamma_{aij}$ symmetric in its last two indices, while metric compatibility with constant $g_{ij}$ makes it skew in its first two. Hence $\Gamma_{aij}=\Gamma_{aji}=-\Gamma_{jai}=-\Gamma_{jia}=\Gamma_{ija}=\Gamma_{iaj}=-\Gamma_{aij}$, so all these coefficients vanish. Now take $\gamma(s)=(R\cos(s/R),R\sin(s/R))$ with $R>0$. Its unit tangent is $T=(-\sin(s/R),\cos(s/R))$, the positive quarter-turn is $JT=(-\cos(s/R),-\sin(s/R))$, and its ordinary acceleration is $T'=(-\cos(s/R),-\sin(s/R))/R=(1/R)JT$. Hence $k_g=1/R>0$, consistent with the inward normal of the counterclockwise circle. [F1, F2, F3, step 3.1, given]

5.1 Reversing the curve parameter preserves $A_\gamma$ in local coordinates, because the second derivative and the product of the two first derivatives are unchanged, but replaces $T$ by $-T$ and $JT$ by $-JT$; hence it replaces $k_g$ by $-k_g$. Reversing the surface orientation also changes $J$ to $-J$ and so changes the sign of $k_g$ for the same curve. These checks include $k_g=0$. [F1, step 1.1, step 3.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, §“The Gauss–Bonnet Formula,” printed pp. 163–164 (PDF pp. 179–180), defines $N$ by requiring $(\dot\gamma,N)$ to be positive orthonormal, identifies $N$ with the inward normal for a positively oriented boundary, and sets $\kappa_N=\langle D_t\dot\gamma,N\rangle$. Lee then differentiates the unit-speed identity to obtain orthogonality and the signed normal component (lines 6421–6431). Datar, *Lectures on Riemannian Geometry*, Lecture 2 opening, PDF p. 16, lines 480–497, derives orthogonality from metric compatibility and defines $k_g=\langle D_s\dot\gamma,N\rangle$; lines 525–530 identify positive boundary orientation with inward $N$. Datar states the passage for a closed oriented surface; compactness and absence of boundary are part of his lecture setup but are not used by this pointwise definition. Both sources present smooth curves; the chart calculation above extends the definition with its proof to the $C^2$ boundary arcs supplied by this pair.
