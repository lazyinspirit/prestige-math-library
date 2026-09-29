---
id: cex-using-inward-normal-first-reverses-the-boundary-term
kind: counterexample
title: Wrong boundary orientation reverses the disk term
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-axiom-of-choice
  - def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve
  - def-regular-oriented-surface-region-with-piecewise-smooth-boundary
  - def-oriented-riemannian-surface-and-positive-quarter-turn
  - cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary
  - thm-gaussian-curvature-structure-equation
  - def-curvilinear-triangulation-of-a-compact-surface
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
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
      locator: "Chapter 9, Theorem 9.3 and the preceding convention on the boundary orientation, printed pp. 163-167 (PDF pp. 179-183): the boundary orientation is fixed by the outward normal, and reversing it reverses the sign of the geodesic-curvature integral."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13 (PDF pp. 17-20): the boundary term with the orientation convention."
---

## Statement refuted

Assume the axiom of choice.
The boundary integral $\int_{\partial M}k_g\,ds$ appearing in the
Gauss-Bonnet formula is unchanged if the boundary orientation convention
"outward normal first" is replaced by "inward normal first". On a Euclidean
disk the replacement makes the boundary clockwise and changes $\int k_g\,ds$
from $+2\pi$ to $-2\pi$ while $\chi(D)=1$, so the outward-normal-first
identity would fail if the reversed convention were used.

## Facts & Assumptions

**Given:** A Euclidean disk of radius $R>0$ in the standard oriented plane, and the two candidate boundary conventions compared on the same circle.

[A1] full AC is assumed; it is inherited through the smooth-boundary Gauss-Bonnet corollary quoted below and is used nowhere else in this Euclidean computation ([[def-axiom-of-choice]]).

[F1] On each smooth boundary arc the outward-normal-first rule selects the unit tangent $T$ for which $(\nu,T)$ is positive, where $\nu$ is an outward transverse vector; with the positive quarter-turn $J$, the vector $JT$ is then the inward unit conormal. The signed geodesic curvature is $k_g=g(\nabla_TT,JT)$ for a regular $C^2$ unit-speed curve ([[def-regular-oriented-surface-region-with-piecewise-smooth-boundary]], [[def-oriented-riemannian-surface-and-positive-quarter-turn]], [[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]]).

[F2] For a compact oriented Riemannian surface with smooth boundary, $\int_MK\,dA+\int_{\partial M}k_g\,ds=2\pi\chi(M)$ with the outward-normal-first boundary orientation ([[cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary]]).

[F3] The Euclidean Levi-Civita derivative in Cartesian coordinates is $\nabla_XY=\sum_jX(Y^j)\partial_j$ with vanishing Christoffel symbols: ordinary directional differentiation is torsion free and metric compatible for the constant Euclidean metric, so uniqueness identifies it as the Levi-Civita connection; thus $\nabla_TT$ along a curve is the ordinary derivative of the unit tangent ([[thm-fundamental-theorem-of-riemannian-geometry]]).

[F4] For a smooth positive orthonormal frame with connection form $\omega$, $d\omega=-K\,dA$ ([[thm-gaussian-curvature-structure-equation]]).

[F5] A finite curvilinear triangulation of a compact smooth surface with boundary has the well-defined count $\chi(M)=V-E+F$ ([[def-curvilinear-triangulation-of-a-compact-surface]], [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]]).

## Counterexample

**Proof technique:** compute the boundary term of the same Euclidean disk in both conventions and show that the identity fails with the reversed one.

1.1 Let $D=\{x\in\mathbb R^2:|x|\le R\}$ with $R>0$, the standard orientation and Euclidean metric. The frame $(\partial_1,\partial_2)$ is orthonormal with $\nabla\partial_i=0$ by [F3], so its connection form vanishes and $d\omega=0$; [F4] gives $K\,dA=0$, hence $K\equiv0$ and $\int_DK\,dA=0$. The three vertices $R(1,0)$, $R(-1/2,\sqrt3/2)$, $R(-1/2,-\sqrt3/2)$ divide the boundary circle into three regular $C^2$ arcs bounding a single closed face, a curvilinear triangulation with $V=3$, $E=3$, $F=1$; by [F5], $\chi(D)=1$. [F3, F4, F5, given, algebra]

1.2 In the outward-normal-first convention, $\nu=(\cos t,\sin t)$ is the outward normal at $\gamma(t)=R(\cos t,\sin t)$ and $T=(-\sin t,\cos t)$ is the unit tangent with $(\nu,T)$ positive; $JT=-(\cos t,\sin t)$ is the inward unit conormal. By [F3], $\nabla_TT=-(1/R)(\cos t,\sin t)$, so $k_g=g(-(1/R)(\cos t,\sin t),-(\cos t,\sin t))=1/R$ and $\int_{\partial D}k_g\,ds=(1/R)\cdot2\pi R=+2\pi$. [F1, F3, algebra]

1.3 In the inward-normal-first convention the same circle is oriented by the inward normal $\nu'=-(\cos t,\sin t)$: the selected tangent $T'$ must satisfy that $(\nu',T')$ is positive, so $T'=(\sin t,-\cos t)=-T$, the clockwise unit tangent. Then $JT'=+(\cos t,\sin t)$ and by [F3] $\nabla_{T'}T'=-(1/R)(\cos t,\sin t)$, so $k_g'=g(-(1/R)(\cos t,\sin t),(\cos t,\sin t))=-1/R$ and $\int_{\partial D}k_g'\,ds=-2\pi$. [F1, F3, algebra]

2.1 With the outward-normal-first boundary of step 1.2, the identity [F2] reads $0+2\pi=2\pi\chi(D)=2\pi$, which is true. With the inward-normal-first boundary of step 1.3 the same identity would read $0+(-2\pi)=2\pi\chi(D)=2\pi$, which is false. Hence the boundary term is not convention-independent: replacing outward-normal-first by inward-normal-first reverses it, and the reversed convention is incompatible with the Gauss-Bonnet identity. [F2, step 1.1, step 1.2, step 1.3, algebra]

3.1 No new choice is made: the disk, the two parametrizations and the triangulation are explicit, and full AC entered only through the inherited smooth-boundary corollary of [F2]. [A1, step 2.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.3 and the convention preceding it, printed pp. 163-167, fixes the boundary orientation by the outward normal and yields the positive disk contribution; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, uses the same convention. The sign reversal under the opposite normal-first convention is computed here from the definition [[def-signed-geodesic-curvature-of-an-oriented-unit-speed-curve]] with the Euclidean connection [[thm-fundamental-theorem-of-riemannian-geometry]].
