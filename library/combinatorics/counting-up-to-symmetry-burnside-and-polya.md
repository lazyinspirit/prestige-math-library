---
page: counting-up-to-symmetry-burnside-and-polya
title: "Counting up to Symmetry: Burnside and Pólya"
status: published
items: [rem-cycle-index-and-polya-naming-conventions,
        def-cycle-index-of-a-permutation-group,
        def-colouring-action-weight-function-and-pattern-inventory,
        def-cycle-index-series-of-a-graded-symmetric-family,
        lem-fixed-colourings-factor-by-cycle-type,
        thm-polya-enumeration-theorem,
        thm-weighted-pattern-inventory-formula,
        thm-cycle-index-of-cyclic-group,
        thm-cycle-index-of-dihedral-group,
        lem-permutations-with-a-given-cycle-type-count,
        thm-cycle-index-of-symmetric-group,
        thm-cycle-index-of-alternating-group,
        cor-necklace-count-via-cycle-index,
        rem-necklace-count-agrees-with-the-published-cycle-construction,
        cor-bracelet-count-via-cycle-index,
        thm-edge-set-orbits-on-two-subsets-by-polya,
        cor-symmetric-group-cycle-index-series-is-exponential]
examples: [fs-distinct-groups-have-distinct-cycle-indices,
           fs-cycle-index-determines-the-abstract-group,
           fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment]
---

Burnside's orbit count is already published elsewhere in the library, so this
page starts where that theorem becomes a reusable machine: cycle indices,
colouring actions, and Pólya's enumeration formulas. The key move is that a
group element fixes a colouring exactly when the colouring is constant on each
cycle of the induced permutation, turning orbit counts into substitutions in a
polynomial.

The page then computes the cycle indices of the cyclic, dihedral, symmetric,
and alternating groups, derives necklace and bracelet formulas, and records the
agreement with the earlier symbolic-method necklace count. The closing items
push the same mechanism to weighted inventories and to the edge-set action on
two-element subsets, where graph isomorphism is expressed without widening the
page's prerequisite boundary.
