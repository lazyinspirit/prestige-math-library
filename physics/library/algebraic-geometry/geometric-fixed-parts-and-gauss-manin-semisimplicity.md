---
page: geometric-fixed-parts-and-gauss-manin-semisimplicity
title: "Geometric Fixed Parts And Gauss Manin Semisimplicity"
status: published
items: [def-geometric-polarizable-hodge-variation,
        lem-regular-trace-kernel-descends-the-complex-socle,
        lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity,
        lem-algebraic-open-inclusion-surjects-on-fundamental-groups,
        lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations,
        thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases,
        thm-smooth-projective-gauss-manin-local-systems-are-semisimple]
examples: []
requires:
  - analytic-constructible-sheaf-foundations
  - analytic-derived-six-operations-and-duality
  - chain-conditions-and-semisimple-modules
  - compact-kahler-hodge-foundations
  - flat-smooth-and-etale-morphisms
  - lefschetz-splitting-in-bounded-triangulated-categories
  - local-coefficients-twisted-homology-and-duality
  - logarithmic-hodge-complexes-and-smooth-open-weights
  - mixed-hodge-structures-and-strictness
  - modular-representations-and-projective-covers
  - principal-series-representations-of-gl-n-over-a-finite-field
  - projective-hodge-polarization-foundations
  - reeb-stability-and-global-foliation-constructions
  - relations-functions-and-quotients
  - sard-theorem-and-transversality
  - schemes-subschemes-and-morphisms-locally-of-finite-type
  - singular-cohomology-and-coefficient-theorems
  - triangularisation-and-jordan-canonical-form
  - whitney-embedding-tubular-neighbourhoods-and-approximation
  - zariski-tangent-spaces-regular-points-smoothness-and-bertini
---

**Objective.** This page assembles the geometric fixed-part and semisimplicity
package for the rational Gauss-Manin local systems of smooth projective
families. It fixes the category of geometric polarizable rational Hodge
variations on a smooth quasiprojective base, records the two finite-dimensional
algebra lemmas that control the monodromy module, proves the topological
codimension-two statement that nonempty Zariski open subsets are path connected
with surjective fundamental-group inclusion, constructs the cohomology local
systems with their integral lattices and flat polarizations, and proves the
theorem of the fixed part and the semisimplicity of the monodromy representation
over the rationals and over every characteristic-zero field. The analytic-level
statements, such as the unpublished Schmid results for arbitrary polarized
variations on a punctured disk, are deliberately outside this page: the
algebraic realization and the full integral lattice are essential hypotheses
here, and the Axiom of Choice is assumed exactly where the transversality,
elliptic and derived-category suppliers require it.

The dependency order inside the page is the order of the inventory list: the
definition first, then the two algebra lemmas, then the topological lemma, the
family construction, and finally the fixed-part and semisimplicity theorems. The
companion page computes the monodromy of the simplest finite étale families.
