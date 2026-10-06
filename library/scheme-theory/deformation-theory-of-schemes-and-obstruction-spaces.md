---
page: "deformation-theory-of-schemes-and-obstruction-spaces"
title: "Deformation Theory of Schemes and Obstruction Spaces"
status: published
requires: [algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations,
           kahler-differentials-conormal-sequences-and-infinitesimal-lifting,
           quasi-coherent-and-coherent-sheaves-and-vector-bundles,
           sheaf-cohomology-cech-cohomology-and-comparison,
           ext-and-balanced-resolutions]
items: [def-square-zero-extension-and-small-extension,
        lem-cohomology-of-hypersurface-twists,
        def-infinitesimal-deformation-functor-over-square-zero-extension,
        def-embedded-deformations-of-a-closed-subscheme,
        lem-flat-deformations-form-a-zariski-sheaf-of-groupoids,
        lem-hypersurface-deformations-classified-by-equation-deformations,
        def-cotangent-complex-of-a-scheme-morphism,
        def-ext-groups-of-the-cotangent-complex,
        lem-cotangent-complex-truncation-and-smooth-case,
        lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex,
        lem-ext-of-locally-free-sheaf-via-cohomology,
        lem-lichtenbaum-schlessinger-complex-and-cotangent-ext,
        lem-affine-deformations-obstruction-and-torsor,
        thm-first-order-deformations-controlled-by-ext-one-cotangent-complex,
        thm-obstructions-lie-in-ext-two-cotangent-complex,
        cor-deformation-cohomology-of-a-smooth-scheme,
        cor-vanishing-ext-one-implies-rigidity-of-deformation-classes,
        lem-tangent-and-obstruction-spaces-for-hypersurface-deformations]
examples: []
---

Deformation theory measures the flat families through which a scheme moves.
This page fixes the conventions first: square-zero extensions and small
extensions of local Artin algebras with their factorization property,
first-order thickenings of schemes with their conormal sheaves, the groupoid
$\operatorname{Def}_X$ of flat deformations of a scheme over a small extension,
its tangent space and its infinitesimal automorphism group, and the embedded
(Hilbert-scheme) deformation problem of a closed subscheme inside a fixed
ambient scheme. Flat deformations satisfy effective Zariski descent, so the
global deformation groupoid is computed from affine local data and their
gluing.

The second block introduces the cotangent complex of a morphism of schemes,
constructed by the sheaf-ring standard resolution and compared with the
ring-map complexes over affine charts, and its Ext groups. For
a ring map the truncation of the cotangent complex is the naive cotangent
complex and computes $\operatorname{Ext}^0$ and $\operatorname{Ext}^1$; for a
smooth morphism the complex reduces to the sheaf of relative differentials in
degree zero, and for a locally free sheaf the Ext groups are sheaf cohomology
of the Hom sheaf. The Cech hypercohomology of an affine cover assembles the
local Ext classes into the global groups, and the Lichtenbaum-Schlessinger
complex from a presentation computes the same groups in degrees at most two.

The classification theorems follow: first-order deformations are classified by
$\operatorname{Ext}^1$ of the cotangent complex, obstructions lie in
$\operatorname{Ext}^2$, the lifts form an $\operatorname{Ext}^1$-torsor, and
automorphisms are given by $\operatorname{Ext}^0$ (derivations in the affine
case). For a smooth scheme this is the classical Kodaira-Spencer description
$H^1(X,T_X)$ with obstructions in $H^2(X,T_X)$, and vanishing of $H^1$ forces
rigidity of isomorphism classes. The page closes with the hypersurface
analysis: embedded flat deformations of a smooth hypersurface in fixed projective
space are deformations of its equation, the tangent space is the graded piece $(S/(f))_d$ of dimension
$\binom{n+d}{n}-1$, the obstruction group $H^1(X,\mathcal O_X(d))$ vanishes so
the embedded functor is unobstructed, and the abstract and embedded problems
are compared through the normal bundle sequence.
