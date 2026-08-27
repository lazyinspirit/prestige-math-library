---
page: integer-partitions-and-the-twelvefold-way
title: "Integer Partitions and the Twelvefold Way"
status: published
items: [def-twelvefold-way-ball-box-conventions,
        def-ferrers-young-diagram-conjugate-partition-and-durfee-square,
        def-partition-counting-functions-and-restricted-families,
        lem-partition-conjugation-is-an-involution,
        thm-partitions-with-k-parts-equal-largest-part-k,
        cor-partitions-with-at-most-k-parts-equal-parts-at-most-k,
        thm-partitions-into-k-parts-recurrence,
        rem-euler-product-agrees-with-the-published-multiset-corollary,
        cor-distinct-partitions-have-product-generating-function,
        cor-odd-partitions-have-product-generating-function,
        thm-euler-distinct-parts-equal-odd-parts-by-generating-functions,
        thm-glaisher-bijection-between-odd-and-distinct-partitions,
        rem-distinct-odd-proof-agreement,
        thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions,
        thm-durfee-square-identity,
        thm-unlabelled-unlabelled-placement-counts,
        thm-twelvefold-way,
        thm-euler-pentagonal-number-theorem-by-franklin,
        cor-pentagonal-recurrence-for-partition-numbers]
examples: [fs-partitions-into-k-parts-are-counted-by-binomial-coefficients,
           fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions]
---

This page fixes one partition convention and then uses it in two directions.
Ferrers diagrams turn partitions into visible combinatorial objects, while the
same occupancy data also supply the unlabelled-to-unlabelled cells of the
twelvefold way. Conjugation swaps rows and columns, so "number of parts" and
"largest part" become the same count under a diagram transpose.

The generating-function side stays formal rather than analytic. The published
Euler product is reused, its direct coefficientwise interpretation is recorded,
and the page then derives the distinct-part and odd-part products, Euler's
identity, the self-conjugate/odd-hook bijection, the Durfee-square
decomposition, Franklin's sign-reversing involution for the pentagonal number
theorem, and the resulting recurrence for $p(n)$.
