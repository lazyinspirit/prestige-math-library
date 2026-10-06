---
page: projective-git-from-linearized-line-bundles
title: "Projective GIT from Linearized Line Bundles"
status: draft
requires: [reductive-affine-invariant-theory-and-geometric-quotients,
           quasi-coherent-and-coherent-sheaves-and-vector-bundles,
           proj-projective-schemes-twisting-sheaves-and-ampleness,
           cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes]
items: [def-g-linearization-of-an-invertible-sheaf,
        lem-proj-of-finitely-generated-graded-algebra-is-projective,
        rem-linearization-existence-outside-this-pair,
        lem-linearizations-powers-and-equivariant-section-ring,
        def-good-and-geometric-quotients-for-group-actions,
        def-invariant-section-ring-and-projective-git-quotient,
        lem-ample-linearization-power-equivariant-embedding,
        lem-good-quotient-local-on-target,
        def-semistable-and-stable-points-for-a-linearization,
        lem-graded-invariants-of-localization-at-an-invariant-element,
        lem-ample-invariant-section-charts-are-affine,
        lem-section-ring-of-ample-line-bundle-finitely-generated,
        lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated,
        lem-affine-chart-quotients-for-invariant-sections,
        thm-linear-action-projective-git-quotient,
        thm-projective-git-quotient-from-invariant-section-ring,
        thm-good-and-geometric-quotient-on-stable-locus]
examples: []
---

This page constructs the projective GIT quotient of a projective variety by a
reductive group with respect to an ample linearized invertible sheaf, and it
proves which quotient properties hold on the semistable and on the stable
locus. The construction is the classical one: take the graded ring of invariant
sections of all positive tensor powers of the linearized sheaf and form its
Proj. The linearization is part of the data, not a consequence of it, so every
theorem assumes a linearized sheaf outright and no item asserts that an
arbitrary ample sheaf can be linearized; the recorded existence result for a
positive power, with its connectedness and normality hypotheses, stays outside
the pair.

The first definitions fix the vocabulary. A $G$-linearization of an invertible
sheaf is an action on the total space covering the action on $X$ whose fibre
maps are linear; equivalently it is a cocycle isomorphism
$\sigma^*L\to\operatorname{pr}_2^*L$ on $G\times X$. Tensor powers inherit
linearizations, their section spaces are rational $G$-modules, and the direct
sum of these spaces is a graded rational $G$-algebra, the section ring
$R(X,L)$. Twisting a linearization by a character changes the induced action on
sections and hence the invariant rings, so the linearization genuinely matters.

The quotient is then built chart by chart. For a homogeneous invariant section
$f$ the nonvanishing locus $X_f$ is an affine $G$-stable open subset, and the
invariant functions on it are the degree-zero part $(R(X,L)^G)_{(f)}$ of the
localized invariant ring. The resulting affine quotients are good quotients
and agree on overlaps, so they glue to a good quotient from the semistable
locus onto $\operatorname{Proj}R(X,L)^G$; the fibre description is the expected
one, in terms of closures of orbits meeting inside the semistable locus. The
tools are proved on this page: finite generation of the invariant ring in the
linear case and of the full section ring in the ample case, affineness of the
invariant charts, the affine localization computation for invariants, and
projectivity of the Proj, which rests on a corrected Veronese generation lemma
for finitely generated graded algebras.

On the stable locus the quotient becomes an orbit space. A point is stable when
its orbit is closed in the semistable locus and its stabilizer is finite, and
equivalently when it has finite stabilizer and lies in an invariant section
chart on which every orbit is closed; the
stable locus is open, its image in the quotient is open, and the restriction of
the quotient to it is a geometric quotient. The ample case is reduced to the
linear one by an equivariant embedding after a positive tensor power, using the
same reduction that turns invariant sections of powers of $L$ into invariant
homogeneous forms on projective space.

No Hilbert--Mumford criterion is stated or used anywhere on the page:
semistability and stability are read off from invariant sections and orbit
closures alone. The companion page shows in two computations that the
(semi)stable loci and the quotient depend on the chosen linearization and not
only on the isomorphism class of the underlying ample sheaf.
