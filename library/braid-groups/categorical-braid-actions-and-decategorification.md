---
page: categorical-braid-actions-and-decategorification
title: "Categorical Braid Actions and Decategorification"
status: draft
requires: [graded-quiver-algebras-and-derived-tensor-functors,
            geometric-braids-and-artin-generators,
            the-burau-representations,
            grothendieck-groups-and-graded-cartan-pairings,
            perfect-complexes-and-triangulated-grothendieck-groups,
            punctured-disks-mapping-classes-and-point-pushing,
            homological-gaussian-elimination]
items: [def-curves-and-geometric-intersection-numbers-on-the-marked-disk,
        def-graded-grothendieck-group-of-a-m-perfect-complexes,
        def-khovanov-seidel-complex-of-a-braid-word,
        def-khovanov-seidel-path-ideal,
        def-weak-action-of-a-group-on-a-category,
        lem-khovanov-seidel-complexes-satisfy-far-commutativity,
        lem-khovanov-seidel-generator-complexes-are-mutually-inverse,
        def-basic-arcs-admissible-curves-and-normal-form,
        def-faithful-weak-categorical-action,
        def-khovanov-seidel-bigraded-cover-and-bigraded-curves,
        lem-finite-graded-projective-a-m-modules-are-sums-of-shifted-vertex-projectives,
        lem-geometric-intersection-numbers-are-isotopy-invariants,
        lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation,
        def-khovanov-seidel-bigrading-cover-and-local-intersection-indices,
        lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action,
        lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives,
        lem-normal-form-string-types-and-their-geometric-intersection-contributions,
        lem-standard-twists-fix-the-complementary-basic-arcs-and-commute,
        thm-khovanov-seidel-complexes-give-a-weak-derived-braid-action,
        def-khovanov-seidel-complex-of-an-admissible-bigraded-curve,
        lem-standard-disk-twists-generate-a-free-abelian-subgroup,
        lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading,
        lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers,
        lem-khovanov-seidel-basic-arcs-detect-the-identity-braid,
        lem-the-khovanov-seidel-curve-complex-is-a-complex-and-is-invariant-under-normal-form-moves,
        lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators,
        prop-khovanov-seidel-decategorification-is-the-unreduced-burau-action,
        thm-khovanov-seidel-homs-compute-bigraded-arc-intersections,
        thm-the-khovanov-seidel-weak-braid-action-is-faithful,
        lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel]
examples: []
---

This page builds the Khovanov–Seidel categorical braid action for the type A
algebras $A_m$ and compares it with the unreduced Burau representation. It
starts with the topological layer: curves on the marked disk, minimal
intersection, the half-weighted geometric intersection number $I$ with its
flow extension, the basic arcs and vertical curves with their normal form, the
standard nested twists, and the bigraded intersection number $I^{\mathrm{bigr}}$
on the free abelian cover of the projectivized tangent bundle. On the algebraic
side the path ideal $J$ with $J^3=0$ controls the finite graded projectives, so
every one of them is a finite sum of shifted vertex projectives and the graded
Grothendieck group $G(A_m)$ is free on their classes.

The category $C_m$ of bounded complexes of finite graded projectives carries the
twist complexes $R_i=[U_i\to A_m]$ and their inverses; the page proves that they
are mutually inverse, satisfy far commutativity, and satisfy the three-term
braid relation, so every braid word gives an endofunctor and the assignment is a
weak action in the source's sense, with no coherence claimed. The
decategorification sends the twist classes to the unreduced Burau matrices after
one explicit invertible change of basis $C$ and the identification $q=t$, while
the bigraded Hom groups of the action recover the bigraded arc intersections;
specializing at $q_1=q_2=1$ gives twice the ordinary intersection number, and
the two-iterate detection lemma makes the categorical action faithful. The
final five-strand kernel lemma supplies an explicit nontrivial braid acting
trivially in the Burau representation, so the categorical action is faithful
precisely while its decategorification is not. The Axiom of Choice is declared
for the braid-to-mapping-class dictionary and for the supplied
representative-independence and isotopy invariance of ordinary and bigraded
intersection numbers.
