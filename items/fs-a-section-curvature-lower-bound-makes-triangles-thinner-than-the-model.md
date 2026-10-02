---
id: fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model
kind: false-statement
title: A section curvature lower bound makes triangles thinner than the model
status: published
origin: pipeline
deps:
  - thm-toponogov-triangle-comparison
  - def-comparison-triangle-in-the-two-dimensional-space-form
  - def-countable-choice
  - ex-the-round-sphere-has-positive-constant-sectional-curvature
  - cor-euclidean-spheres-are-path-connected
  - ex-great-circles-as-round-sphere-geodesics
  - prop-round-sphere-model-geometry
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
  - def-pointwise-norm-and-angle-from-a-riemannian-metric
  - thm-quarter-turn-values-and-shift-formulas
  - def-principal-inverse-sine-and-cosine
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "U. Lang, Riemannian and Metric Geometry (lecture notes)"
      url: https://people.math.ethz.ch/~lang/RG.pdf
      locator: "Chapter 5, Theorem 5.15 (Toponogov angle comparison for curvature at least κ)"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§6, pp.21–25: triangle comparison in the lower-curvature convention"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. **False
claim:** let $(M,g)$ be a complete, connected, boundaryless Riemannian manifold
of dimension $n\ge2$ with sectional curvature $K\ge k$ for a real number $k$,
and let three points of $M$ be joined by minimizing geodesic segments whose
positive side lengths admit a comparison triangle in the two-dimensional space
form $M^2_k$. Then the triangle in $M$ is **thinner** than its comparison
triangle: every actual vertex angle is at most the corresponding comparison
angle. The claim is refuted below by the octant triangle of the unit round
sphere at $k=0$: its three actual angles are right angles, while the three
angles of its Euclidean comparison triangle are $\pi/3$, so the actual
triangle is strictly fatter than the model. The general correct direction is
the reverse angle inequality of [[thm-toponogov-triangle-comparison]]: a
curvature lower bound makes fixed-side triangles fatter, not thinner.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; the unit round sphere $S^2=\{x\in\mathbb R^3:|x|=1\}$ with the Riemannian metric $g$ induced from the Euclidean inner product; the standard orthonormal basis $e_1,e_2,e_3$ of $\mathbb R^3$; and the false claim above, to be refuted.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the round-sphere, cut-locus and angle interfaces cited below; the three points and tangent directions used in the refutation are explicit and no family is selected.

[F1] The witness manifold ([[ex-the-round-sphere-has-positive-constant-sectional-curvature]], [[prop-round-sphere-model-geometry]], [[cor-euclidean-spheres-are-path-connected]], [[ex-great-circles-as-round-sphere-geodesics]]): the unit round sphere $S^2$ with the metric induced from $\mathbb R^3$ is a smooth boundaryless $2$-manifold, is complete, is connected, and has constant sectional curvature $K=1$. Thus $(M,g)=(S^2,g)$ is a complete, connected, boundaryless Riemannian manifold of dimension $n=2\ge2$ with $K=1\ge0=k$ for $k=0$, so the curvature hypothesis of the false claim holds at $k=0$.

[F2] Sphere distance and geodesics ([[ex-great-circles-as-round-sphere-geodesics]], [[prop-round-sphere-model-geometry]]): for orthonormal $p,u\in\mathbb R^3$ — so that $p\in S^2$ and $u$ is a unit tangent vector at $p$ — the curve $$\sigma(t)=\cos t\,p+\sin t\,u,\qquad t\in\mathbb R,$$ is the maximal unit-speed geodesic of $(S^2,g)$ with $\sigma(0)=p$ and $\sigma'(0)=u$, and it is defined for all real $t$. Moreover the round-sphere distance formula proved by the same suppliers reads, for all $p,q\in S^2$, $$d_g(p,q)=R\arccos\frac{\langle p,q\rangle}{R^2},$$ which at the radius $R=1$ of our witness is $d_g(p,q)=\arccos\langle p,q\rangle$.

[F3] Angles and the induced metric ([[ex-the-round-metric-on-the-sphere-as-an-induced-metric]], [[def-pointwise-norm-and-angle-from-a-riemannian-metric]]): the round metric of $S^2$ at a point $p$ is the restriction of the Euclidean inner product to $T_pS^2$, so $g_p(u,w)=\langle u,w\rangle$ and $|u|_g=|u|$ for tangent vectors $u,w\in T_pS^2$. For nonzero tangent vectors the Riemannian angle is the unique $\theta\in[0,\pi]$ with $\cos\theta=g_p(u,w)/(|u|_g|w|_g)$.

[F4] Comparison triangles in $M^2_k$ ([[def-comparison-triangle-in-the-two-dimensional-space-form]]): $M^2_0$ is the Euclidean plane, and a triple $(a,b,c)$ of positive side lengths admits a comparison triangle in $M^2_0$ exactly when the strict triangle inequalities hold, no upper restriction being imposed when $k=0$. The comparison angle at the vertex opposite the side $a$ is the unique $\bar\alpha\in(0,\pi)$ with $$\cos\bar\alpha=\frac{b^2+c^2-a^2}{2bc},$$ the other two angles are given by the same formulas with the roles of the sides cycled, and the three comparison angles sum to more than $\pi$, to $\pi$, or to less than $\pi$ according as $k>0$, $k=0$ or $k<0$. In particular, for $k=0$ the sum of the three comparison angles is exactly $\pi$.

[F5] Quarter-turn values and the principal inverse cosine ([[thm-quarter-turn-values-and-shift-formulas]], [[def-principal-inverse-sine-and-cosine]]): $$\cos\frac{\pi}{2}=0,\qquad \sin\frac{\pi}{2}=1 .$$ The principal inverse cosine is the function $\arccos:[-1,1]\to[0,\pi]$ characterised by $\cos(\arccos y)=y$, and cosine is strictly decreasing on $[0,\pi]$; hence $\arccos 0=\pi/2$.

[F6] The correct direction ([[thm-toponogov-triangle-comparison]]): if $(M,g)$ is complete, connected and boundaryless of dimension $n\ge2$ with $K\ge k$, and a triangle in $M$ has positive side lengths admitting a comparison triangle in $M^2_k$, then every actual vertex angle is **at least** the corresponding comparison angle.

## Refutation

**Proof technique:** direct: exhibit the octant triangle with vertices $e_1,e_2,e_3$ on the unit round sphere at $k=0$, compute its actual angles as $\pi/2$ from orthonormality of the basis, compute the Euclidean comparison angles from the model cosine law and the $k=0$ angle sum $\pi$, and observe that $\pi/2>\pi/3$.

1.1 The witness satisfies the hypothesis at $k=0$. [F1]
By [F1] the unit round sphere is a complete, connected, boundaryless Riemannian surface and $K=1\ge0=k$. [F1]

1.2 The octant triangle and its side lengths. [F2, F4, F5]
Let $e_1,e_2,e_3$ be the standard orthonormal basis of $\mathbb R^3$; each $e_i$ lies in $S^2$, and for $i\ne j$ the vector $e_j$ is a unit tangent vector at $e_i$. For $i\ne j$ put $\sigma_{ij}(t):=\cos t\,e_i+\sin t\,e_j$. By [F2] and [F5], $\sigma_{ij}$ is the unit-speed geodesic from $e_i$ in the direction $e_j$, and $$\sigma_{ij}(\pi/2)=\cos(\pi/2)e_i+\sin(\pi/2)e_j=e_j .$$ The distance formula of [F2] gives $d_g(e_i,e_j)=\arccos\langle e_i,e_j\rangle=\arccos 0$; by [F5] the principal inverse cosine satisfies $\cos(\arccos 0)=0=\cos(\pi/2)$ with both $\arccos 0$ and $\pi/2$ in $[0,\pi]$, and strict decrease of cosine on $[0,\pi]$ gives $\arccos 0=\pi/2$. Hence each $\sigma_{ij}|_{[0,\pi/2]}$ is a minimizing geodesic segment of length $\pi/2$ joining $e_i$ and $e_j$, and the three side lengths of the triangle with vertices $e_1,e_2,e_3$ are all $\pi/2$. They are positive and satisfy the strict triangle inequalities $\pi/2<\pi/2+\pi/2$; since $k=0$, [F4] provides a comparison triangle in the Euclidean plane $M^2_0$ with side lengths $(\pi/2,\pi/2,\pi/2)$. [F2, F4, F5]

1.3 The actual angles are right angles. [F2, F3, F5]
At the vertex $e_1$ the two minimizing sides are $\sigma_{12}|_{[0,\pi/2]}$ and the side toward $e_3$, namely $t\mapsto\cos t\,e_1+\sin t\,e_3$ (the reverse of $\sigma_{31}|_{[0,\pi/2]}$). Their unit tangent vectors at $e_1$ are $\sigma_{12}'(0)=e_2$ and $e_3$. Both are unit vectors in $T_{e_1}S^2$, and by [F3] $g_{e_1}(e_2,e_3)=\langle e_2,e_3\rangle=0$; hence the angle at $e_1$ is the unique $\theta\in[0,\pi]$ with $\cos\theta=0$, which is $\theta=\pi/2$ by [F5]. Replacing $(e_1,e_2,e_3)$ cyclically, the same computation gives angle $\pi/2$ at $e_2$ and at $e_3$. Thus all three actual vertex angles equal $\pi/2$. [F2, F3, F5]

1.4 The comparison angles. [F4]
Let $\bar\alpha,\bar\beta,\bar\gamma$ be the angles of a comparison triangle in $M^2_0$ with sides $(a,b,c)=(\pi/2,\pi/2,\pi/2)$. Since $a=b=c$, the three cosine-law formulas of [F4], cycled, all read $$\cos(\text{angle})=\frac{\pi^2/4+\pi^2/4-\pi^2/4}{2\cdot\pi^2/4}=\frac12 .$$ By [F4] each comparison angle lies in $(0,\pi)$ and is the unique such angle with the displayed cosine, so the three are equal; and since $k=0$, [F4] also gives $\bar\alpha+\bar\beta+\bar\gamma=\pi$. Therefore $3\bar\alpha=\pi$, that is $\bar\alpha=\bar\beta=\bar\gamma=\pi/3$, and $\pi/3<\pi/2$ because $\pi>0$. [F4]

2.1 The claim fails. [F6, step 1.3, step 1.4]
By step 1.3 the actual angle at $e_1$ is $\pi/2$, while by step 1.4 the corresponding comparison angle is $\pi/3<\pi/2$. The actual angle therefore strictly exceeds the model angle: this triangle of the manifold with $K=1\ge0=k$ is strictly fatter than its $k=0$ comparison triangle, and the false claim fails — both in the weak reading (all actual angles at most the comparison angles) and in any strict reading. This is the special case of the general direction [F6], which asserts the reverse inequality: a curvature lower bound makes fixed-side triangles fatter than the model. The triangle and the model comparisons are explicit, so the inherited $\mathrm{AC}_\omega$ of [A1] is not drawn on beyond its declaration. [F6, step 1.3, step 1.4] ∎

## Source locator

Lang, *Riemannian and Metric Geometry*, Chapter 5, Theorem 5.15 (printed pp.70–71, PDF pp.73–74), and Eschenburg §6, pp.21–25, prove triangle angle comparison in the lower-curvature convention: $K\ge k$ makes the actual angles at least the model angles, opposite to the false claim. The refutation is the octant triangle of the unit round sphere, whose geodesics are the great circles of the published items [[ex-great-circles-as-round-sphere-geodesics]] and [[prop-round-sphere-model-geometry]], with the induced round metric of [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]; the right angles are read off from orthonormality of the standard basis, and the Euclidean comparison angles $\pi/3$ from the model cosine law and the $k=0$ angle sum of [[def-comparison-triangle-in-the-two-dimensional-space-form]].
