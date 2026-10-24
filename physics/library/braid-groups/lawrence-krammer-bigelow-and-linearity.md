---
page: lawrence-krammer-bigelow-and-linearity
title: "Lawrence–Krammer–Bigelow Representations and Linearity"
status: published
requires: [ordered-and-unordered-configuration-spaces,
           braids-as-fundamental-groups-of-configuration-spaces,
           covering-spaces-and-lifting,
           singular-chains-and-singular-homology,
           modules-over-a-pid-and-canonical-forms,
           punctured-disks-mapping-classes-and-point-pushing,
           garside-structure-normal-forms-and-the-center,
           classification-of-compact-connected-surfaces,
           the-artin-action-on-a-free-group]
items: [def-two-point-configuration-space-of-a-punctured-disk,
        lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions,
        lem-lkb-small-end-neighbourhoods-stabilize-equivariantly,
        lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model,
        def-lkb-two-variable-covering-homomorphism,
        lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank,
        def-lawrence-krammer-bigelow-cover,
        lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion,
        def-lkb-absolute-second-homology-module,
        def-lkb-relative-pairing-modules,
        lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly,
        def-forks-noodles-and-their-lkb-intersection-pairing,
        def-lexicographic-order-on-fork-noodle-deck-monomials,
        lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement,
        lem-the-fork-noodle-pairing-is-well-defined-and-equivariant,
        lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors,
        lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel,
        lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials,
        lem-the-fork-noodle-pairing-detects-essential-intersections,
        lem-fork-detection-transports-to-arbitrary-boundary-crosscuts,
        thm-the-integral-lkb-module-is-free-of-rank-n-choose-two,
        def-lawrence-krammer-bigelow-representation,
        lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy,
        lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared,
        lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power,
        thm-the-lawrence-krammer-bigelow-representation-is-faithful,
        cor-every-classical-braid-group-is-linear]
examples: []
---

This page builds the Lawrence–Krammer–Bigelow (LKB) representation of the
classical braid group and proves that it is faithful, so that every braid
group is linear. The construction starts from the unordered two-point
configuration space $C$ of the $n$-times punctured disk. Its fundamental
group maps onto the two-strand braid factor, and the two-variable covering
homomorphism $\Phi(\alpha)=q^at^b$ records both the total winding of the two
mobile points around the punctures and their mutual half-twist exponent;
its kernel classifies the regular cover $\widetilde C\to C$, whose deck group is
$\pi_1(C,c_0)/\ker\Phi\cong\mathbb Z^2=\langle q\rangle\oplus\langle t\rangle$.
Its absolute homology
$H_2(\widetilde C;\mathbb Z)$ is the integral LKB module over
$\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$. The relative collision-and-puncture
end neighbourhoods are stabilized to direct limits and used only as targets
of the intersection pairing; the representation itself lives on the absolute
module.

The proof of integrality runs through the intersection pairing of noodles and
forks. A closed compact replacement makes the pairing finite and well defined;
the lexicographic order on deck monomials turns a minimal-position
intersection pattern into a nonzero extremal coefficient, so the pairing
detects exactly when a tine can be isotoped off a noodle. The closed surfaces $v_{i,j}$
have nonzero closing factors multiplying the end-relative squares and triangles
$v'_{i,j}$. The primed pairings of $v'_{i,j}$ with the boundary-relative dual
classes $x_{i,j}$ form a triangular matrix with Laurent-unit diagonal; the
absolute pairings include the closing factors and need not be units. The
denominator-elimination argument shows that
fraction-field coefficients of integral classes are Laurent polynomials. It
follows that $H_2(\widetilde C;\mathbb Z)$ is free of rank $\binom n2$, with
the closed surfaces as an integral basis; for $n\ge3$ this integral lattice is
only fraction-field isomorphic to Krammer's matrix model, and no integral
identification of the two bases is asserted.

The normalized lifts of boundary-fixed homeomorphisms act on the integral
module by $\Lambda$-linear automorphisms, defining
$\rho_{\mathrm{LKB}}$ after the classical braid group is identified with the
boundary-fixed mapping class group of the punctured disk. Faithfulness is
Bigelow's topological closure: a braid in the kernel can be isotoped so that
every standard adjacent edge is fixed up to isotopy. A label-preserving mapping
class fixing these edges is a power of the full twist, as proved by fixing the
spine pointwise and completing its slit complement to a compact annulus. The
full twist acts by the scalar $q^{2n}t^2$, whose powers act trivially only for
the zeroth power when $n\ge2$; for $n=1$ the braid group is trivial. Hence the kernel is
trivial, and $B_n$ embeds into $\mathrm{GL}_{\binom n2}(\Lambda)$ and hence
into $\mathrm{GL}_{\binom n2}(\mathbb Q(q,t))$. The companion examples page
computes a fork–noodle pairing, exhibits the $B_3$ Krammer matrices in the
fraction-field model, and separates mere linear representability from
faithfulness.
