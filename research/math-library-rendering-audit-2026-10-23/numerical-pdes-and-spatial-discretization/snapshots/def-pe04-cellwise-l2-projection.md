---
id: def-pe04-cellwise-l2-projection
kind: definition
title: Cellwise L2 projection relation onto broken polynomials
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-pe04-upwind-dg-transport-discretization
  - def-measure-space
  - def-calligraphic-l-p-on-a-measure-space
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bernardo Cockburn, An Introduction to the Discontinuous Galerkin Method for Convection-Dominated Problems, CIME lecture notes"
      url: "https://www-users.cse.umn.edu/~bcockbur/lecture_notes/DG-1.pdf"
      locator: "§3.5, printed p. 164: local L2 projection for the initial DG data."
---

## Definition

Let $K$ be a cell in the one-dimensional interval or $d\ge2$ matching affine-simplex branch of [[def-pe04-upwind-dg-transport-discretization]], and fix an integer degree $p\ge0$. Let $(K,\mathcal A,\mu)$ be a finite measure space as in [[def-measure-space]], let $\mathcal L^2(\mu)$ have the raw measurable-function meaning of [[def-calligraphic-l-p-on-a-measure-space]], and let $W=\mathbb P_p(K)\subseteq\mathcal L^2(\mu)$. For $u\in\mathcal L^2(\mu)$ define its **cellwise L2 projection relation** to be the set
$$\mathcal P_K(u)=\left\{p\in\mathbb P_p(K):\int_K(u-p)w\,d\mu=0\text{ for every }w\in\mathbb P_p(K)\right\}.$$
For a mesh, the broken relation is the product of these cell relations. The measure $\mu$ is required to give positive measure to every nonempty relatively open subset of $K$ when existence and uniqueness are claimed. This definition does not itself assert that the set is a singleton. Whenever a later result proves that the relation has a unique member, write $\Pi_Ku$ for that member.
