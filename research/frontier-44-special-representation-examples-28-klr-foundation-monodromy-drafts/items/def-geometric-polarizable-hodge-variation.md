---
id: def-geometric-polarizable-hodge-variation
kind: definition
title: "Geometric polarizable Hodge variations on algebraic bases"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-local-system-of-r-modules-and-its-pullback, def-rational-mixed-hodge-structure]
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Definition

Let $S$ be a connected smooth quasiprojective complex variety. A geometric polarizable rational Hodge variation on $S$ consists of a finite-rank rational local system $H$, a continuous pure Hodge decomposition of its fibers (or finite direct sum of pure weights), and an algebraic realization on a nonempty Zariski open $U\subseteq S$: there are smooth projective morphisms $f_i:X_i\to U$, degrees $m_i$ and integers $r_i$ such that $H|_U$ is a Hodge direct summand of
$$\bigoplus_i R^{m_i}(f_i)_*\mathbb Q(r_i).$$
A Hodge direct summand means the image of a flat rational idempotent that is a Hodge morphism at every point. A morphism of variations is a flat rational map that is a Hodge morphism at every point. A pure object's polarization is a flat rational bilinear form with the Hodge positivity property on every fiber; it exists for the geometric realizations by smooth-projective Hodge–Riemann and is inherited by Hodge direct summands. The polarization is required or supplied by that theorem, not postulated for arbitrary local subsystems.

The geometric category is closed under finite sums, tensor products, Hodge direct summands and Tate twists: product families and Künneth realize tensors, disjoint unions realize sums, and the last two closures are part of the direct-summand/twist construction. Exterior powers are Hodge direct summands of tensor powers by the rational alternating idempotent. Duals of a polarized pure object are identified with an appropriate Tate twist of it using its polarization; general objects decompose by weight. The integral lattices used later are full monodromy-stable lattices: intersections with rational direct summands of the torsion-free integral Gauss–Manin lattice produce them on $U$, and surjectivity of $\pi_1(U)\to\pi_1(S)$ extends them. The algebraic-open fundamental-group assertion and the Gauss–Manin construction remain separate proof suppliers.
