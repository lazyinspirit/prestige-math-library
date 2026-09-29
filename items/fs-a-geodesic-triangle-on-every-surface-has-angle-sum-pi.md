---
id: fs-a-geodesic-triangle-on-every-surface-has-angle-sum-pi
kind: false-statement
title: Geodesic triangles need not have Euclidean angle sum
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-gauss-bonnet-for-a-geodesic-triangle
  - def-geodesic-of-an-affine-connection
  - ex-great-circles-as-round-sphere-geodesics
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 156-172; Theorems 9.1, 9.3 and 9.7 and Problem 9-5 supply the local and global formulas against which the octant is checked."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.0.1, printed pp. 10-13 (PDF pp. 17-20): the local Gauss-Bonnet formula with the angle sum on a sphere of positive curvature."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

False: every geodesic triangle on every Riemannian surface has angle sum $\pi$.
The unit round sphere carries a geodesic triangle with three right angles, so
the flat angle sum fails there; a spherical octant has angle sum $3\pi/2$.

## Facts & Assumptions

**Given:** The claim that a geodesic triangle on every Riemannian surface has angle sum $\pi$, to be refuted by one explicit geodesic triangle.

[F1] For $n\geq1$ with the round metric induced by the Euclidean inner product, every constant-speed parametrization of a great circle $S^n\cap\operatorname{span}\{p,u\}$ is an affinely parametrized geodesic, and conversely every nonconstant affinely parametrized geodesic has a great-circle arc as its image ([[ex-great-circles-as-round-sphere-geodesics]]).

[F2] The Euclidean inclusion of $S^n$ induces its round metric; in particular for tangent vectors $u,v$ at a point of $S^2\subset\mathbb R^3$ the round inner product is the ambient Euclidean inner product $\langle u,v\rangle$, so intrinsic angles of tangent vectors equal their ambient angles ([[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[F3] Assuming the axiom of choice ([[def-axiom-of-choice]]), for a positively oriented compact regular disk region with exactly three vertices whose boundary is the cyclic concatenation of three regular $C^2$ geodesic segments with non-antipodal one-sided tangents, and which lies in a frameable neighbourhood, $\int_TK\,dA=\alpha+\beta+\gamma-\pi$ where $\alpha,\beta,\gamma$ are the interior sector angles ([[thm-gauss-bonnet-for-a-geodesic-triangle]]).

## Refutation

**Proof technique:** exhibit the first-octant spherical triangle, compute its three interior angles as right angles, and compare with the flat angle sum.

1.1 Let $e_1,e_2,e_3$ be the standard orthonormal basis of $\mathbb R^3$ and set $O:=S^2\cap\{x_1\geq0,\,x_2\geq0,\,x_3\geq0\}$ in the unit round sphere. Its boundary is the cyclic concatenation of the three great-circle arcs $\sigma_1(t)=\cos t\,e_1+\sin t\,e_2$, $\sigma_2(t)=\cos t\,e_2+\sin t\,e_3$ and $\sigma_3(t)=\cos t\,e_3+\sin t\,e_1$, $0\leq t\leq\pi/2$, which meet only at the distinct vertices $e_1,e_2,e_3$. Each $\sigma_i$ is a constant-speed parametrization of a great circle with speed $1$, so by [F1] each is an affinely parametrized geodesic; the one-sided unit tangents at every vertex are distinct non-antipodal orthonormal vectors. [F1, given]

1.2 At the vertex $e_1$ the two directions into $O$ along the boundary arcs are the ambient vectors $e_2$ and $e_3$: the arc $\sigma_1$ leaves $e_1$ with velocity $\sigma_1'(0)=e_2$, and the arc $\sigma_3$ approaches $e_1$ with velocity $\sigma_3'(\pi/2)=-e_3$, so its direction toward $e_3$ is $e_3$. The same holds cyclically: the directions into $O$ at $e_2$ are $e_3$ and $e_1$, and at $e_3$ they are $e_1$ and $e_2$. Each listed pair is orthonormal in the ambient inner product and lies in the tangent space at the corresponding vertex, so by [F2] each interior sector angle of $O$ is $\arccos 0=\pi/2$. [F2, given]

2.1 By steps 1.1 and 1.2 the three interior angles of the octant $O$ are equal to $\pi/2$, so their sum is $3\pi/2$, which differs from $\pi$. This single geodesic triangle therefore refutes the asserted universal angle sum. [step 1.1, step 1.2, algebra]

3.1 For the additional curvature check, assume AC as in [F3]. The map $x\mapsto x/(x_1+x_2+x_3)$ identifies $O$ with the closed planar simplex of nonnegative coordinates summing to $1$, with inverse $u\mapsto u/|u|$; thus $O$ is a regular disk with the three ordinary corners already computed. It lies in the open hemisphere $x_1+x_2+x_3>0$, which has one smooth coordinate chart; orthonormalizing its coordinate frame supplies a positive frame. Give $O$ the ambient orientation. The true local formula [F3] then reads $\int_OK\,dA=3\pi/2-\pi=\pi/2$; the nonzero curvature integral is exactly the obstruction to the flat angle sum. The refutation in steps 1.1–2.1 uses only a single explicit triangle and no choice principle; this supplementary invocation of [F3] inherits its AC assumption. [F3, step 1.1, step 2.1, algebra] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, printed pp. 156-172, states and proves the local Gauss-Bonnet formula and notes the spherical case of positive curvature in which angle sums exceed $\pi$; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.0.1, printed pp. 10-13, states the same formula. The great-circle geodesics and the induced round metric used in the computation are the published library items [[ex-great-circles-as-round-sphere-geodesics]] and [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]; the right-angle count is computed directly here from orthonormality of the ambient basis vectors.
