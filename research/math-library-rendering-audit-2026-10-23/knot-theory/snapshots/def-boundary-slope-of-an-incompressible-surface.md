---
id: def-boundary-slope-of-an-incompressible-surface
kind: definition
title: Boundary slope of an incompressible surface in a knot exterior
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - def-incompressibility-seifert-fibration-and-jsj-system
justified_by: []
proof_strategy: not-applicable
axiom_use: Uses full AC only through the existence and uniqueness of the
  preferred-longitude class in the exterior homology supplier.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Allen Hatcher, Boundary Slopes of Incompressible Surfaces
      url: https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), §4.1
      url: https://arxiv.org/pdf/2405.19197v2
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot with chosen compact exterior $E_K$ and boundary torus $T_K=\partial E_K$. A simple closed curve on a surface is **essential** if it is not null-homotopic there. All surfaces considered here are compact. A surface $S\subset E_K$ is properly embedded if $S\cap\partial E_K=\partial S$ and its interior lies in the interior of $E_K$. It is **incompressible** if it has no embedded disk with interior disjoint from $S$ and essential boundary in $S$; it is **boundary-incompressible** if there is no embedded disk $D\subset E_K$ with $\partial D=\alpha\cup\beta$, where $\alpha,\beta$ are arcs meeting exactly at their common endpoints, $D\cap S=\alpha$, $D\cap\partial E_K=\beta$, and $\alpha$ does not cobound a disk in $S$ with an arc of $\partial S$. A **boundary slope** of $K$ is the unoriented isotopy class of an essential simple closed curve on $T_K$ that occurs as a boundary component of a connected, properly embedded, orientable, incompressible, boundary-incompressible surface. Using the positive meridian $\mu$ and preferred longitude $\lambda$ as a homology basis, a primitive class $a[\lambda]+b[\mu]$ has slope $b/a\in\mathbb Q\cup\{\infty\}$, with $a=0$ interpreted as $\infty$. A boundary slope is **strict** if it has a connected realizing orientable, incompressible, boundary-incompressible surface which is not a fiber of any locally trivial fibration $E_K\to S^1$; a fiber is the inverse image of a point under that bundle projection.

## Definition references

[Hatcher, *Boundary Slopes of Incompressible Surfaces*](https://www.math.unl.edu/~mbrittenham2/classwk/990s08/public/hatcher.bdyslopes.pdf)

[Baldwin and Sivek, §4.1](https://arxiv.org/pdf/2405.19197v2)
