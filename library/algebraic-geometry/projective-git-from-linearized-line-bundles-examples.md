---
page: projective-git-from-linearized-line-bundles-examples
title: "Projective GIT from Linearized Line Bundles — Examples"
status: draft
requires: [projective-git-from-linearized-line-bundles]
items: []
examples: [cex-semistable-locus-depends-on-linearization,
           ex-gm-on-projective-line-with-two-linearizations]
---

The two examples on this page make the dependence of GIT data on the
linearization precise. In both, the group, the variety and the underlying
invertible sheaf are fixed and only the linearization varies, changing the
semistable locus and the quotient. The projective-line example also changes
the stable locus; in the one-point counterexample it is empty for both
linearizations.

The counterexample does this in the smallest possible setting: the one-point
projective variety with the trivial action of $\mathbf G_m$ and the trivial
ample sheaf. The trivial linearization makes the unique point semistable and
produces a one-point quotient, while the twist by the identity character makes
every positive-degree invariant vanish, so the semistable locus and the GIT
quotient are empty. Since the two linearizations have the same underlying
sheaf, the assertion that semistability depends only on the isomorphism class
of the sheaf is false.

The worked example carries out the same computation on the projective line
with the action $t\cdot[e_0:e_1]=[t^{-1}e_0:te_1]$ and $L=\mathcal O(1)$.
Weights of monomials are computed from the standard linearization and from the
twists by characters. For the standard linearization the invariant sections
are the multiples of $(e_0e_1)^{n/2}$, the semistable locus is the complement
of the two fixed points, the action there is transitive with finite stabilizer,
and the quotient is a point, so the restriction to the stable locus is a
geometric quotient. The twists by $\chi$ and $\chi^{-1}$ collapse one of the
affine charts to a point with an empty stable locus, and the remaining twists
leave no invariant section of positive degree, so the GIT quotient is empty.
The case $n=1$ matches the classical computations of Newstead and Hoskins; the
twist computation also drives the one-point counterexample above.
