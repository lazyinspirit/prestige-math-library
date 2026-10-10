---
page: em-maxwell-integral-and-constraints
title: "Integral Maxwell and constraints"
status: draft
items: [lem-em-coordinate-cell-localization,
        lem-em-surface-density-localization,
        def-em-fixed-test-geometry,
        def-em-weak-sources,
        pthm-em-integral-maxwell,
        post-em-distributional-vacuum-maxwell,
        pthm-em-charge-continuity,
        pthm-em-fixed-vacuum-jumps,
        pthm-em-gauss-constraint-propagation]
examples: []
---

**Objective.** This page develops the integral form of the vacuum Maxwell
equations, the distributional source model with its jump identities, and the
constraint structure of the evolution system. It is the base machinery on
which the electrostatic, magnetostatic, material, wave and radiation pages
rest: every later boundary-value or interface argument consumes either the
test-geometry class fixed here, the weak solution predicate, the jump
theorem, or the propagation statement for the Gauss defects.

**Fixed test geometries.** The spatial test geometries of the integral form
are fixed subsets of the laboratory region: a volume test geometry is a
nonempty bounded open set with compact closure inside the spatial region, a
specified finite piecewise $C^1$ presentation of its boundary, and the
outward unit normal, with the closed-surface flux defined as the finite face
sum ([[def-em-fixed-test-geometry]]). A patch test geometry is a regular $C^2$
surface patch over a finite elementary Green region, with its induced
boundary chain, circulation, induced orientation and oriented flux; the open
interiors of all closed axis-parallel boxes and all affine regular patches
over axis-parallel squares are explicit instances. The regularity convention
is local to a neighbourhood of the compact test set, and no motion of a test
geometry is defined.

**The equivalence theorem.** For the smooth branch of the adopted postulate,
the four differential equations and the four integral identities over the
exact test-geometry class are equivalent ([[pthm-em-integral-maxwell]]): the
forward direction applies the divergence theorem and the classical Stokes
theorem with the flux-differentiability of parameter integrals, and the
converse recovers the divergence and the three curl components by localizing
over all boxes and all affine square patches. The recovery uses the
localization lemma for continuous functions whose integrals over every closed
axis-parallel cube vanish ([[lem-em-coordinate-cell-localization]]), whose
planar clause covers the coordinate-plane squares; its proof and its
one-centre sharpness witness are complete mathematical arguments on this page.

**Distributional sources.** Point sources are defined by their pairings along
a proper $C^1$ trajectory, with the finite-endpoint variant contributing the
endpoint Dirac terms; stationary-sheet sources are defined by surface charge
and tangential surface current densities ([[def-em-weak-sources]]). The
definition states the weak solution predicate as the vanishing of the four
residual pairings, excludes products of distributions, moving sheets, line
currents and normal sheet currents, and asserts no existence. The separate
physical adoption that field and source tuples with these singular sources
satisfy the four distributional identities is recorded as its own postulate
([[post-em-distributional-vacuum-maxwell]]); it is not a consequence of the
locally integrable branch.

**Compatibility and jumps.** Charge continuity is a compatibility condition
of the field equations: in the smooth branch it follows by the
divergence-of-curl cancellation, and in the distributional branch by the same
cancellation with commuting distributional derivatives, with no claim of
conservation of matter ([[pthm-em-charge-continuity]]). At a stationary
interface the one-sided traces of the fields satisfy the four vacuum jump
identities ([[pthm-em-fixed-vacuum-jumps]]): the normal electric jump carries
the surface charge, the tangential magnetic jump the surface current, and the
normal magnetic and tangential electric jumps vanish. The proof separates the
off-sheet residuals, uses the interface-derivative identities in spacetime,
and applies the surface-density localization lemma
([[lem-em-surface-density-localization]]) to reach the pointwise values under
the stated joint one-sided regularity; a general weak-trace branch with
almost-everywhere conclusions and its continuity upgrade are retained
separately.

**Constraints.** The two evolution equations propagate both Gauss defects
when source continuity is independently assumed: the defects are constant in
time, zero initial constraints persist, and nonzero defects persist and
cannot be repaired by evolution ([[pthm-em-gauss-constraint-propagation]]).
Full-Maxwell solutions satisfy the hypotheses and have zero defects, and
adding zero defects to the evolution pair recovers all four equations. The
statement is conditional on its equations and regularity and proves no
existence claim; Countable Choice is confined to the continuous-representative
localization and the inherited singular-source formulation.


The page's mathematical content is carried by the imported abstract measure,
Darboux, surface-measure and distribution items cited in place; the cited
textbook treatments supply the physical formulation, the orientation
conventions and the source-model idealisations, not the deductions.
