---
id: lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
kind: lemma
title: "Regularity, compactness, and gluing for pointed Heegaard disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-countable-choice
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "§§3.2–3.8; Fredholm setup, generic-path transversality, energy bounds, compactness, and index-two boundary/gluing analysis, printed pp.19–33"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "§3, Theorem 3.1 and proof, printed pp.14–17; doubly-pointed filtered invariance and its dependence on the analytic Heegaard Floer theory"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapter 16"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.325–338; analytic Heegaard Floer complex and comparison with grid counts"
---

## Statement

Assume countable choice. Let $\mathcal H$ be any admissible $2k$-pointed Heegaard diagram for an oriented knot in $S^3$, with transverse attaching curves, product tori, and marked points as specified in the pointed-data definition. Admissibility means every nonzero periodic domain with all $w$-multiplicities zero has both positive and negative region coefficients. There is a smooth path $\mathbb J=(J_t)_{t\in[0,1]}$, constant near its endpoints and chosen among perturbations for which all holomorphic-strip representatives used in the differential have nonnegative local multiplicity at every marked point, such that the linearized Cauchy–Riemann operator is surjective for every Maslov-index-$1$ strip class with all $w$-multiplicities nonnegative. Each corresponding moduli space modulo translation is finite. For every Maslov-index-$2$ class with all $w$-multiplicities nonnegative, the compactification of the one-dimensional moduli space modulo translation has as codimension-one boundary broken pairs of index-one strips meeting at an intermediate generator and disk bubbles whose entire boundary lies on one of the product tori (the boundary-degeneration strata). Gluing gives a collar at every broken end, and the boundary-degeneration contributions cancel modulo two in the differential-square count. No sphere bubbling or escape through a nonzero periodic domain gives an additional codimension-one end. Consequently the disk-count differential in the pointed-data definition squares to zero and preserves its Alexander filtration.
## Statement references

[[def-admissible-pointed-heegaard-floer-data|Admissibility, disk classes, basepoint multiplicities, and the Maslov index]]

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*](https://arxiv.org/pdf/math/0101206)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapter 16](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

