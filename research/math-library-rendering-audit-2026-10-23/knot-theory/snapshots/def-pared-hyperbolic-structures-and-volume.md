---
id: def-pared-hyperbolic-structures-and-volume
kind: definition
title: "Pared hyperbolic structures and volume"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ken’ichi Yoshida, The minimal volume orientable hyperbolic 3-manifold with 4 cusps"
      url: "https://msp.org/pjm/2013/266-2/pjm-v266-n2-s.pdf"
      locator: "§2, Definition 2.1 and the preceding finite-volume cusp convention"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §§4.1–4.4, developing and holonomy conventions"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

A compact orientable three-manifold $M$ is **irreducible** if every embedded $2$-sphere in its interior bounds an embedded $3$-ball in $M$. A properly embedded surface is **incompressible** if it admits no embedded disk whose interior misses the surface and whose boundary is an essential simple closed curve in it. A boundary subsurface is **$\pi_1$-injective** if the inclusion of each component induces an injection on fundamental groups. A **pared pair** is a pair $(M,P)$ in which $M$ is compact, orientable and irreducible, and $P$ is a possibly empty compact subsurface of $\partial M$ whose pairwise disjoint components are $\pi_1$-injective annuli or tori, every noncyclic abelian subgroup of $\pi_1(M)$ is conjugate into $\pi_1$ of a component of $P$ up to base-path conjugacy, and every map of pairs
$$
(S^1\times I,S^1\times\partial I)\longrightarrow(M,P)
$$
that induces injections on fundamental groups is homotopic through maps of pairs into $P$, so its boundary remains in $P$ during the homotopy. Write $\partial_0M=\partial M\setminus\operatorname{int}P$. A **horoball** is a region bounded by a horosphere, a Euclidean plane or sphere tangent to the ideal boundary at one point. The **peripheral subgroup** for a component of $P$ is the image of its fundamental group in $\pi_1(M)$, recorded up to conjugacy. A **hyperbolic metric** on $\operatorname{int}M$ is a curvature $-1$ metric described by an atlas of charts into $\mathbb H^3$ whose transition maps are in $\operatorname{Isom}^+(\mathbb H^3)$. Its developing map $\operatorname{dev}$ from the universal cover and holonomy homomorphism $\rho:\pi_1(M)\to\operatorname{Isom}^+(\mathbb H^3)$ satisfy $\operatorname{dev}(gx)=\rho(g)\operatorname{dev}(x)$. A **hyperbolic structure on the pared pair** $(M,P)$ is such a metric compatible with the pared marking: on the peripheral subgroup of each component of $P$, $\rho$ is injective and its image is conjugate to a discrete group of Euclidean translations fixing $\infty$, of rank one for an annulus and rank two for a torus. These images preserve horoballs based at their fixed ideal point. This compatibility does not assert that an arbitrary incomplete hyperbolic metric has cusp neighborhoods. The metric is **complete** when it is geodesically complete. A **torus cusp** corresponding to a torus component of $P$ is an embedded end neighborhood isometric to a horoball quotient by that component's holonomy image, with its cross-section parallel to the marked boundary torus. A rank-one horoball quotient is the full cusp model for an annular peripheral subgroup; when a structure has totally geodesic boundary, an annular cusp uses the portion between the incident boundary planes and has annular cross-sections. The hyperbolic volume is the integral of the Riemannian volume density over $\operatorname{int}M$; the structure has **finite volume** when this integral is finite.

## Definition references

[Ken’ichi Yoshida, *The minimal volume orientable hyperbolic 3-manifold with 4 cusps*, §2, Definition 2.1](https://msp.org/pjm/2013/266-2/pjm-v266-n2-s.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)
