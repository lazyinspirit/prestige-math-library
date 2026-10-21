---
id: lem-ip-orientation-cover-preserves-simplicity
kind: lemma
title: "The tangent orientation cover preserves simple-surface X-ray data"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-simple-surface-and-geodesic-xray-transform
  - def-ip-tangent-orientation-double-cover
  - thm-compactness-is-invariant-under-finite-sheeted-coverings
  - def-riemannian-metric-and-riemannian-manifold
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-curvature-of-an-affine-connection
  - def-jacobi-field
  - thm-path-lifting-for-covering-maps
  - thm-connected-and-locally-path-connected-implies-path-connected
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 3, §3.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf"
      locator: "Printed pp. 234–235 (PDF pp. 49–50), two-sheeted cover from local orientations; the proof here gives the tangent-line and boundary-chart version."
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 4, §§4.1–4.4, printed pp. 110–121, scalar geodesic transform and its two-dimensional injectivity proof."
proof_strategy: direct
---

## Statement

Let $(M,g)$ be a compact, connected, nonempty smooth Riemannian surface with smooth boundary, and assume its boundary is strictly convex, it has no conjugate points, and it is nontrapping. Let $\pi:\widetilde M\to M$ be the tangent orientation double cover, give $\widetilde M$ the pullback metric $\widetilde g=\pi^*g$, and let $C$ be any connected component of $\widetilde M$. Then $C$ is a compact, connected, oriented simple Riemannian surface with smooth boundary, and $\pi|_C:C\to M$ is a local isometry mapping $\partial C$ onto $\partial M$. For every $f\in C_c^\infty(M^\circ)$, define $\widetilde f=f\circ\pi$. For each incoming unit vector $\widetilde z\in\partial_+SC$, the scalar geodesic X-ray transform satisfies
$$
I_{0,C}\widetilde f(\widetilde z)=I_{0,M}f(\pi(\widetilde z)).
$$
In particular, zero data for $f$ on $M$ gives zero data for $\widetilde f$ on every component $C$.

## Statement references

[[def-ip-simple-surface-and-geodesic-xray-transform|Definition of simple surfaces and the scalar geodesic X-ray transform]]

[[def-ip-tangent-orientation-double-cover|Definition of the tangent orientation double cover]]

[[thm-compactness-is-invariant-under-finite-sheeted-coverings|Compactness theorem for finite-sheeted covers]]

[[thm-path-lifting-for-covering-maps|Path lifting theorem for covering maps]]

## Facts & Assumptions

**Given:** A compact connected nonempty simple Riemannian surface $M$, its tangent orientation double cover, a component $C$, and $f\in C_c^\infty(M^\circ)$.

[F1] [[def-ip-simple-surface-and-geodesic-xray-transform]]: strict convexity means $g(\nabla_w\nu_{\mathrm{out}},w)>0$ for nonzero boundary-tangent $w$; no conjugate points means every Jacobi field vanishing at the two endpoints of a geodesic segment is zero; nontrapping means every maximal interior unit-speed geodesic exits in both time directions in finite time.

[F2] [[def-ip-tangent-orientation-double-cover]]: $\pi:\widetilde M\to M$ is a two-sheeted smooth covering and local diffeomorphism including over the boundary; its points are tangent orientation rays and its second coordinate defines a canonical orientation.

[F3] [[thm-compactness-is-invariant-under-finite-sheeted-coverings]]: a finite-sheeted covering has compact total space exactly when its base is compact.

[F4] [[def-riemannian-metric-and-riemannian-manifold]]: a Riemannian metric is a smooth positive-definite symmetric covariant two-tensor; [[thm-fundamental-theorem-of-riemannian-geometry]]: each supplied smooth Riemannian metric, also up to a boundary, has a unique Levi-Civita connection.

[F5] [[def-curvature-of-an-affine-connection]]: $R(A,B)C=\nabla_A\nabla_BC-\nabla_B\nabla_AC-\nabla_{[A,B]}C$; [[def-jacobi-field]]: a Jacobi field satisfies $D_t^2J+R(J,\dot\gamma)\dot\gamma=0$.

[F6] [[thm-path-lifting-for-covering-maps]]: every path in the base and every chosen initial point in its fibre have a unique continuous lift.

[F7] [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]: smooth local vector fields have unique local integral curves depending smoothly on initial state.

[F8] [[thm-connected-and-locally-path-connected-implies-path-connected]]: a connected locally path-connected space is path-connected; smooth boundary charts have path-connected smaller half-ball neighborhoods.

## Proof

1.1 By [F2], $\pi$ is a two-sheeted covering; applying [F3] to compact $M$ shows that $\widetilde M$ is compact. In each boundary chart the two sheets are copies of the same half-space chart, so $\pi^{-1}(\partial M)=\partial\widetilde M$ and $\pi^{-1}(M^\circ)=\widetilde M^\circ$. [F2, F3, given]

1.2 Every connected component $C$ of the smooth manifold $\widetilde M$ is open, since each point has a connected chart neighborhood contained in its component, and it is closed, since connected components are closed. Thus $C$ is compact. Smooth boundary charts have path-connected smaller half-ball neighborhoods, so $M$ is locally path-connected and [F8] makes connected $M$ path-connected. Fix $\widetilde x\in C$ and any $y\in M$; lift a path from $\pi(\widetilde x)$ to $y$ starting at $\widetilde x$ by [F6]. Its connected image stays in $C$, so its endpoint lies over $y$ and $\pi(C)=M$. The canonical orientation from [F2] restricts to $C$. [F2, F6, F8, given]

2.1 The pullback $\widetilde g=\pi^*g$ is smooth and positive definite because $d\pi$ is a smooth isomorphism on each sheet and $g$ is smooth positive definite by [F4]. In the sheet coordinates of [F2], $\pi$ is the identity and the metric coefficient matrices of $\widetilde g$ and $g$ coincide. The unique Levi-Civita connections therefore have identical coordinate coefficients; the geodesic equations and curvature coefficients also coincide by [F4, F5]. Boundary normals and their second fundamental forms correspond under $d\pi$, so strict convexity of $\partial M$ gives strict convexity of $\partial C$. [F1, F2, F4, F5, step 1.1]

3.1 If $\widetilde J$ is a Jacobi field along a geodesic segment in $C$, then [F5] and the identical local connection and curvature coefficients in step 2.1 show that $d\pi(\widetilde J)$ is a Jacobi field along the projected geodesic. If $\widetilde J$ vanishes at both endpoints, its projection vanishes there; [F1] makes the projected field zero, and invertibility of $d\pi$ gives $\widetilde J=0$. Thus $C$ has no conjugate points. [F1, F2, F5, step 2.1]

4.1 A unit-speed geodesic in $C^\circ$ projects by step 2.1 to a unit-speed geodesic in $M^\circ$. By [F1] that projected geodesic reaches $\partial M$ in finite forward and backward time. Lift each finite projected segment from the specified initial point by [F6]. In every sheet the lift solves the same geodesic ODE as the original curve, so uniqueness from [F7] makes it an extension of that curve to the exit time; the endpoint lies in $\partial C$ by step 1.1. Hence $C$ is nontrapping in both directions. Together with steps 1.2–2.1, $C$ is simple. [F1, F2, F6, F7, step 1.1, step 1.2, step 2.1, step 3.1]

5.1 Since $f$ is supported in the interior, $\widetilde f=f\circ\pi$ is smooth and vanishes near $\partial\widetilde M$. Its support is a closed subset of compact $\widetilde M$, hence compact, and it lies in $C^\circ$ after restriction to $C$. For an incoming $\widetilde z\in\partial_+SC$, local isometry maps its inward normal component to that of $z=\pi(\widetilde z)\in\partial_+SM$. The projected unit geodesic and the lifted unit geodesic have the same parameter and first boundary-exit time by steps 1.1 and 4.1; hence $I_{0,C}\widetilde f(\widetilde z)=\int_0^{\tau_+(z)}f(\gamma_z(t))\,dt=I_{0,M}f(z)$. This proves the transform identity and the zero-data implication. [F1, F2, step 1.1, step 2.1, step 4.1, construct] ∎






## Source locator

The source comparisons and item-specific dispositions are recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-38.coverage.json` and the batch notes.
