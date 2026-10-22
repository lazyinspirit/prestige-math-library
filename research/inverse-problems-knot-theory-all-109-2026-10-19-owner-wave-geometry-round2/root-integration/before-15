---
id: lem-ip-simple-geodesic-polar-extension
kind: lemma
title: Global geodesic-polar coordinates from a boundary point on a simple manifold
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
axiom_base: Countable Choice
dependency_level: 3
deps:
  - prop-compact-local-homeomorphism-is-finite-covering
  - thm-regular-covering-characterizations
  - thm-brouwer-fixed-point-theorem
  - thm-uniqueness-of-lifts-from-a-connected-space
  - def-ip-simple-riemannian-background
  - lem-ip-simple-manifold-no-return-extension
  - def-riemannian-metric-and-riemannian-manifold
  - def-levi-civita-connection
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-jacobi-field
  - thm-hopf-rinow
  - thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves
  - thm-riemannian-distance-is-a-metric
  - def-riemannian-distance-on-a-connected-manifold
  - prop-length-dominates-endpoint-distance
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions (2022 monograph)"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 3, Definition 3.8.1, Theorem 3.8.2 and Propositions 3.8.4–3.8.7, printed pp. 102–104 (PDF pp. 118–120): simplicity and global exponential coordinates. The compact radial covering and Brouwer argument below supplies a different local proof of global uniqueness."
    - title: "Jan Bohr, Stability of the Non-abelian X-ray Transform in Dimension ≥ 3"
      url: "https://d-nb.info/1246268426/34"
      locator: "Appendix §7.1, Lemma 7.1, PDF pp. 39–40: complete no-return extension of a strictly convex manifold."
proof_strategy: compact radial covering and Brouwer fixed point
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty simple Riemannian background of dimension $n\ge2$ with smooth strictly convex boundary, no conjugate points, and nontrapping geodesics. Fix $x_0\in\partial M$. For an inward unit vector $\omega\in T_{x_0}M$ with $g(\omega,\nu_{out})<0$, let $\gamma_{x_0,\omega}$ be the unit-speed geodesic starting at $(x_0,\omega)$, and let $\tau(x_0,\omega)>0$ be its first positive boundary-exit time. Define
$$\mathcal D_{x_0}=\{s\omega: g(\omega,\omega)=1,\ g(\omega,\nu_{out})<0,\ 0<s<\tau(x_0,\omega)\}\subset T_{x_0}M,$$
and define $E_{x_0}:\mathcal D_{x_0}\to M^\circ$ by $E_{x_0}(s\omega)=\gamma_{x_0,\omega}(s)$. Then $E_{x_0}$ is a diffeomorphism. In particular every interior point is joined to $x_0$ by a unique minimizing geodesic, the function $r_{x_0}(y)=d_g(x_0,y)$ is smooth on $M^\circ$, and on each ray tube it satisfies $|\nabla_g r_{x_0}|_g=1$. The no-return extension of $M$ across its boundary is complete, and each outward or tangent geodesic launched from the boundary leaves $M$ permanently.

## Statement references

[[def-ip-simple-riemannian-background]]

[[lem-ip-simple-manifold-no-return-extension]]

[[def-riemannian-distance-on-a-connected-manifold]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The simple compact connected manifold and the boundary basepoint $x_0$ in the statement.

[F1] [[def-ip-simple-riemannian-background]] gives strict convexity, nontrapping, and absence of endpoint-zero nontrivial Jacobi fields. The geodesic ODE and its smooth dependence are supplied by [[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]].

[F2] [[lem-ip-simple-manifold-no-return-extension]] gives a complete exterior extension, with no return after exit.

[F3] [[prop-compact-local-homeomorphism-is-finite-covering]] turns a local homeomorphism from a nonempty compact Hausdorff domain onto a connected Hausdorff target into a finite covering. [[thm-regular-covering-characterizations]] makes a covering with simply connected total space regular and its deck group transitive on each fibre. [[thm-uniqueness-of-lifts-from-a-connected-space]] makes a deck transformation fixing one point the identity.

[F4] [[thm-brouwer-fixed-point-theorem]] gives a fixed point for every continuous self-map of a closed ball.

[F5] [[thm-hopf-rinow]] gives a minimizing geodesic in the complete exterior between any two points. [[prop-length-dominates-endpoint-distance]] compares its length with distance; [[def-jacobi-field]] describes derivatives of the exponential map by Jacobi fields.


## Proof

1.1 Choose a smooth boundary defining function $\rho$ positive inside. At a tangent unit vector $\omega$ at $x_0$, strict convexity says $(\rho\circ\gamma_\omega)''(0)<0$. Compactness of the tangent sphere makes this bound uniform near tangency. For a nearby inward direction, put $a=d\rho_{x_0}(\omega)>0$. Taylor's formula factors the boundary equation as $\rho(\gamma_\omega(s))=s(a+sB(\omega,s))$, with $B<0$ uniformly near tangency. The implicit function theorem gives the first positive exit $\tau(\omega)$ there, with $\tau/a$ extending continuously and positively to tangent directions. Every other exit is transverse: a first exit with zero normal derivative would have $\rho=0$, $\rho'=0$, $\rho''<0$, forcing $\rho<0$ immediately before the exit. Thus all inward exits vary smoothly, and $\tau\to0$ at the equator. [F1, given, algebra]

2.1 These exit times are uniformly bounded. Otherwise take inward unit directions $\omega_j$ and increasing lengths tending to infinity with no exit before those lengths. Compactness gives a limiting direction. Step 1.1 excludes a tangent limit. Smooth dependence then gives an inward geodesic remaining in $M$ for every positive time, contrary to nontrapping. Define $$B_{x_0}=\{s\omega:\omega\text{ inward unit},\ 0\le s\le\tau(\omega)\},$$ including $0$ and tangent endpoints only as $0$. It is compact. Identify the inward normal with the last Euclidean coordinate and compare this radial set with the closed ball of radius one centred at the inward normal, whose radial length is $2\omega_n$ on the inward hemisphere. The radial map multiplies by $\tau(\omega)/(2\omega_n)$. Step 1.1 makes this ratio extend positively and continuously to the equator, so the radial map and its inverse are continuous also at zero. Hence $B_{x_0}$ is homeomorphic to a closed $n$-ball. [F1, step 1.1, construct, algebra]

3.1 In the complete exterior of [F2], the exponential map $E(v)=\exp_{x_0}(v)$ is smooth on a neighborhood of $B_{x_0}$. Its differential is nonsingular for $v\ne0$ in that set: a kernel vector produces a Jacobi field vanishing at the two endpoints, excluded by [F1]; its radial component cannot be in the kernel since the geodesic has unit speed. At $0$ the differential is the identity. On the radial boundary $s=\tau(\omega)>0$, transversality from step 1.1 identifies $B_{x_0}$ locally with the inverse image of $M$ under this inverse chart, so the restricted map is a local homeomorphism of manifolds with boundary. The same is true at $0$: in a small normal neighborhood the inverse image of $M$ is precisely the short inward radial segments; tangent and outward rays immediately leave by strict convexity, and inward directions with very small exit time have already left. The exterior no-return property excludes extra portions of a ray in this local description. Thus $E:B_{x_0}\to M$ is a local homeomorphism everywhere. [F1, F2, F5, step 1.1, step 2.1, algebra]

4.1 Apply [F3] to this compact radial ball. It is a finite covering of $M$, and its simply connected total space makes it regular. If a fibre had two points, transitivity would supply a nonidentity deck transformation of $B_{x_0}$. Conjugate it by the ball homeomorphism of step 2.1. By [F4] it has a fixed point, and by uniqueness of lifts in [F3] a deck transformation with a fixed point is the identity, a contradiction. Every fibre therefore has one point. Interior inverse charts show that $E$ restricted to $\mathcal D_{x_0}$ is a smooth diffeomorphism onto $M^\circ$. This proves global injectivity without a path-space Morse theorem. [F3, F4, step 2.1, step 3.1, algebra]

5.1 A minimizing exterior geodesic from $x_0$ to $y\in M^\circ$ exists by [F5]. It cannot leave $M$ and return, by [F2]; it must start inward, since an outward or tangent launch never enters $M$. It is therefore one of the radial segments just shown unique. Its length equals exterior distance and, being contained in $M$, equals intrinsic distance as well. To compute the metric in polar coordinates, vary the unit initial direction. The resulting Jacobi field $J$ has $J(0)=0$ and $g(D_sJ(0),\dot\gamma(0))=0$. Metric compatibility and the Jacobi equation give $(g(D_sJ,\dot\gamma))'=0$, and hence $(g(J,\dot\gamma))'=0$ with zero initial value. Thus the radial vector has unit length and is orthogonal to every angular vector. Consequently $r_{x_0}=s$ is smooth in the interior and $|\nabla r_{x_0}|_g=1$. Completeness and no return are exactly [F2]. [F1, F2, F5, step 4.1, algebra] ∎
