---
page: block-designs-and-finite-projective-planes
title: "Block Designs and Finite Projective Planes"
status: published
items: [def-two-design,
        def-incidence-matrix-of-a-two-design,
        lem-replication-number-is-constant-in-a-two-design,
        thm-counting-identities-for-a-two-design,
        cor-divisibility-conditions-for-a-two-design,
        thm-incidence-matrix-identity-for-a-two-design,
        thm-fishers-inequality-for-two-designs,
        def-symmetric-design,
        thm-block-intersections-in-a-symmetric-design,
        def-steiner-systems-and-steiner-triple-systems,
        cor-steiner-triple-systems-force-v-congruent-one-or-three-mod-six,
        thm-bose-construction-produces-a-steiner-triple-system,
        rem-skolem-construction-produces-a-steiner-triple-system,
        thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six,
        def-finite-projective-plane,
        lem-every-line-in-a-finite-projective-plane-has-the-same-number-of-points,
        def-order-of-a-finite-projective-plane,
        thm-counts-in-a-finite-projective-plane,
        cor-finite-projective-planes-are-symmetric-two-designs,
        thm-pg-two-q-is-a-finite-projective-plane,
        def-latin-square,
        def-orthogonal-latin-squares-and-complete-families,
        thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal,
        cor-prime-power-orders-admit-complete-families-of-orthogonal-latin-squares]
examples: []
---

Double counting, modular arithmetic on $\mathbb Z/n$, finite fields, and the
linear-algebra view of incidence matrices are the prerequisites behind this
page. The design-theoretic items use only counting and matrix identities over
$\mathbb R$; the projective-plane and Latin-square items use finite-field vector
spaces and explicit modular constructions instead of new number-theory or
topological machinery.

The page defines $2$-designs, symmetric designs, Steiner triple systems, finite
projective planes, and Latin squares. It proves the parameter identities and
divisibility conditions, establishes Fisher's inequality and the constant
block-intersection property of symmetric designs, constructs the $3\bmod6$
Steiner triple systems of order greater than $3$ by Bose and records the
$1\bmod6$ Skolem branch as a sourced input before the existence theorem, then
counts points and lines in projective planes, builds $PG(2,q)$, and finishes
with the finite-field family of mutually orthogonal Latin squares.
