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
sources:
  references:
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions (2022 monograph)"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 3, §§3.7–3.8, printed pp. 89–109: no-return extension, exponential coordinates, and the simplicity equivalence; global uniqueness invokes path-space Morse theory."
    - title: "Jan Bohr, Stability of the Non-abelian X-ray Transform in Dimension ≥ 3"
      url: "https://d-nb.info/1246268426/34"
      locator: "Appendix §7.1, Lemma 7.1, PDF pp. 39–40: complete no-return extension of a strictly convex manifold."
proof_strategy: Jacobi nonsingularity and global simplicity; proof escalated
---

## Statement

Assume Countable Choice. Let $(M,g)$ be a compact, connected, nonempty simple Riemannian background of dimension $n\ge2$ with smooth strictly convex boundary, no conjugate points, and nontrapping geodesics. Fix $x_0\in\partial M$. For an inward unit vector $\omega\in T_{x_0}M$ with $g(\omega,\nu_{out})<0$, let $\gamma_{x_0,\omega}$ be the unit-speed geodesic starting at $(x_0,\omega)$, and let $\tau(x_0,\omega)>0$ be its first positive boundary-exit time. Define
$$\mathcal D_{x_0}=\{s\omega: g(\omega,\omega)=1,\ g(\omega,\nu_{out})<0,\ 0<s<\tau(x_0,\omega)\}\subset T_{x_0}M,$$
and define $E_{x_0}:\mathcal D_{x_0}\to M^\circ$ by $E_{x_0}(s\omega)=\gamma_{x_0,\omega}(s)$. Then $E_{x_0}$ is a diffeomorphism. In particular every interior point is joined to $x_0$ by a unique minimizing geodesic, the function $r_{x_0}(y)=d_g(x_0,y)$ is smooth on $M^\circ$, and on each ray tube it satisfies $|\nabla_g r_{x_0}|_g=1$. The no-return extension of $M$ across its boundary is complete, and each outward or tangent geodesic launched from the boundary leaves $M$ permanently.

## Statement references

[[def-ip-simple-riemannian-background]]

## Statement references

[[def-ip-simple-riemannian-background]]

[[lem-ip-simple-manifold-no-return-extension]]

[[def-riemannian-distance-on-a-connected-manifold]]

[[def-countable-choice]]

## Proof status

The full global polar-coordinate claim is retained. The Jacobi-field hypothesis supplies local nonsingularity of the exponential map, and the no-return extension is proved in its own carrier. The unresolved step is global injectivity/unique minimization: the inspected monograph route uses contractibility of the path space from Serre's theorem, the Morse index theorem, Palais–Smale compactness, and a mountain-pass argument. No complete local proof or supplier for those steps is currently present; this item remains escalated.
