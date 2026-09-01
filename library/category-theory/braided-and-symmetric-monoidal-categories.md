---
page: braided-and-symmetric-monoidal-categories
title: "Braided and Symmetric Monoidal Categories"
status: draft
items: [def-braiding,
        def-braided-monoidal-category,
        thm-the-inverse-braiding-is-a-braiding,
        thm-the-braiding-is-compatible-with-the-unit-constraints,
        thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation,
        def-symmetric-monoidal-category,
        thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other,
        def-braided-monoidal-functor,
        rem-being-braided-is-a-property-of-a-monoidal-functor,
        thm-the-cartesian-swap-braiding-is-a-symmetry,
        thm-the-double-braiding-center-is-symmetric,
        thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one,
        def-braid-group-by-the-artin-presentation,
        thm-the-two-strand-braid-group-is-infinite-cyclic,
        thm-the-symmetric-group-has-the-coxeter-presentation,
        thm-the-braid-group-surjects-onto-the-symmetric-group,
        def-the-braid-category,
        thm-symmetric-coherence,
        cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category,
        thm-braided-coherence-fails-in-the-symmetric-form,
        thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator,
        thm-braided-coherence-via-underlying-braids,
        cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree,
        rem-the-symmetric-and-braided-coherence-theorems-compare-s-n-with-b-n,
        thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category,
        cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category]
examples: [cex-the-braid-category-is-braided-but-not-symmetric,
           fs-every-diagram-built-from-the-associator-and-the-braiding-commutes,
           fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one]
---

This page adds the commutativity data that ordinary monoidal categories do not
have. A braiding is not just a swap notation: it is a natural isomorphism with
two hexagon axioms, and those axioms remain genuinely asymmetric until the
symmetry relation $c_{Y,X}c_{X,Y}=1$ is imposed.

The page then separates the two coherence theorems. In the symmetric case,
canonical composites collapse to permutations and tensor words may be reordered
freely. In the merely braided case, the surviving braid-group data is exactly
what obstructs that stronger slogan, and it is also what makes the braid
category the correct free object.
