---
id: def-geometric-polarizable-hodge-variation
kind: definition
title: "Geometric polarizable Hodge variations on algebraic bases"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-local-system-of-r-modules-and-its-pullback, def-rational-mixed-hodge-structure]
justified_by: [lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57; SS4.2.1-4.2.5, printed pp. 43-45 (continuous families of Q-Hodge structures, polarizations, the algebraic category)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
    - title: "Claire Voisin, Hodge structures and the topology of algebraic varieties, author-hosted lecture notes (Harvard CMSA revision); SS3.2, printed pp. 38-41 (the local systems attached to smooth projective families)"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
---

## Definition

Let $S$ be a connected smooth quasiprojective complex variety. A **geometric
polarizable rational Hodge variation** on $S$ consists of a finite-rank rational
local system $H$ ([[def-local-system-of-r-modules-and-its-pullback]]), a
continuous pure Hodge decomposition of its fibers, or a finite direct sum of
pure weights, in the sense of [[def-rational-mixed-hodge-structure]], and an
algebraic realization on a nonempty Zariski open $U\subseteq S$: there are
smooth projective morphisms $f_i:X_i\to U$, degrees $m_i$ and integers $r_i$
such that $H|_U$ is a Hodge direct summand of
$$\bigoplus_iR^{m_i}(f_i)_*\mathbb Q(r_i),$$
where $\mathbb Q(r)$ is the Tate structure of
[[def-rational-mixed-hodge-structure]]. A **Hodge direct summand** means the
image of a flat rational idempotent that is a Hodge morphism at every point.

A **morphism of variations** is a flat rational map that is a Hodge morphism at
every point. A **polarization** of a pure object is a flat rational bilinear
form with the Hodge positivity property on every fiber; it is not postulated for
arbitrary local subsystems: a geometric realization carries one by relative
ampleness, and Hodge direct summands inherit it.

The closures recorded here under finite sums, tensor products, Hodge direct
summands and Tate twists, the exterior-power realizability, the duals via the
polarization, and the full monodromy-stable integral lattices are proved by the
family construction later on this page
([[lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations]]);
that forward mention is explanatory and is not a prerequisite of the definition.
The algebraic-open fundamental-group assertion and the Gauss-Manin construction
remain separate proof suppliers, and no claim is made for arbitrary analytic
variations on a punctured disk. No choice principle is needed: the definition
quantifies over finite data.
