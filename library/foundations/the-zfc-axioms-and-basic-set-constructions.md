---
page: the-zfc-axioms-and-basic-set-constructions
title: "The ZFC Axioms and the Basic Set Constructions"
status: published
items: [def-language-of-set-theory,
        def-axiom-of-extensionality,
        def-axiom-schema-of-separation,
        def-axiom-of-pairing,
        def-axiom-of-union,
        def-axiom-of-power-set,
        def-axiom-schema-of-replacement,
        def-axiom-of-infinity,
        def-axiom-of-foundation,
        thm-the-empty-set-exists-and-is-unique,
        def-subset-and-proper-subset,
        lem-basic-laws-of-inclusion,
        def-unordered-pair-and-singleton,
        lem-unordered-pair-equality,
        def-union-of-a-set-and-binary-union,
        lem-the-intersection-of-a-nonempty-set-is-a-set,
        def-intersection-of-a-set-and-binary-intersection,
        lem-unions-and-intersections-of-small-families,
        def-set-difference-and-symmetric-difference,
        lem-the-power-set-of-a-set-is-a-set,
        def-power-set,
        prop-basic-properties-of-the-power-set,
        prop-algebra-of-union-intersection-and-difference,
        thm-distributive-laws-for-union-and-intersection,
        thm-de-morgan-laws,
        lem-monotonicity-of-union-and-intersection,
        thm-russells-paradox,
        cor-there-is-no-set-of-all-sets,
        cor-the-empty-family-has-no-intersection,
        rem-why-separation-replaces-unrestricted-comprehension,
        thm-foundation-excludes-membership-cycles,
        cor-the-successor-operation-is-injective,
        def-ordered-pair,
        thm-the-characterising-property-of-ordered-pairs,
        lem-ordered-pairs-lie-in-the-double-power-set,
        def-cartesian-product,
        prop-cartesian-products-and-set-operations,
        def-iterated-products-and-ordered-triples,
        rem-which-axiom-each-construction-uses]
examples: []
---

This development starts from first-order logic with equality over a single
binary relation symbol $\in$, in which every object of the domain is a set and
the domain is nonempty; nothing mathematical is assumed before that. The one
result taken from elsewhere is recorded rather than proved: neither the continuum
hypothesis nor its generalisation is decided by these axioms
([[rem-independence-of-ch-and-gch]]), and it is cited only to say what the Power
Set axiom leaves open about the size of a power set.

The ZF axioms are stated in that language, written without abbreviations
wherever the usual formulation would need notation introduced further down. The
Axiom of Choice is the one axiom of ZFC not stated here; this
library states it at [[def-axiom-of-choice]]. Separation and Extensionality yield
the empty set and its uniqueness; Pairing, Union, Separation and Power Set then
give unordered pairs, unions, intersections, differences and power sets, with the
commutative, associative, distributive and De Morgan laws proved from the
resulting membership criteria. Russell's paradox rules out a set of all sets and
with it an intersection of the empty family, Foundation rules out short
membership cycles and makes $x \mapsto x \cup \{x\}$ injective, and the
Kuratowski ordered pair and its characterising property produce the Cartesian
product.
