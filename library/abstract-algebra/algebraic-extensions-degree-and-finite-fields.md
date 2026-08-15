---
page: algebraic-extensions-degree-and-finite-fields
title: "Algebraic Extensions, Extension Degree, and Finite Fields"
status: draft
items: [def-extension-degree-and-finite-extension,
        prop-extension-degree-one-iff-equal-fields,
        lem-product-basis-for-a-tower-of-finite-extensions,
        thm-tower-law-for-finite-field-extensions,
        cor-intermediate-field-degrees-divide,
        thm-finite-field-extensions-are-algebraic,
        cor-element-algebraic-iff-simple-extension-finite,
        def-finitely-generated-field-extension,
        thm-finitely-generated-algebraic-extensions-are-finite,
        thm-algebraic-elements-form-a-subfield,
        def-relative-algebraic-closure,
        thm-transitivity-of-algebraicity,
        prop-relative-algebraic-closure-is-relatively-algebraically-closed,
        prop-degree-bound-for-composita,
        def-prime-subfield,
        thm-characteristic-of-a-field-is-zero-or-prime,
        thm-prime-subfield-classification,
        thm-binomial-theorem-over-a-commutative-ring,
        lem-prime-divides-intermediate-binomial-coefficients,
        thm-frobenius-endomorphism-and-finite-field-automorphism,
        def-finite-field-and-its-order,
        thm-finite-fields-have-prime-power-order,
        thm-multiplicative-group-of-a-finite-field-is-cyclic,
        lem-roots-of-x-q-minus-x-form-a-field,
        thm-existence-of-finite-fields,
        prop-finite-fields-are-splitting-fields-of-x-q-minus-x,
        thm-uniqueness-of-finite-fields,
        thm-subfield-lattice-of-a-finite-field,
        thm-factorization-of-x-qn-minus-x,
        cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree,
        cor-finite-extensions-of-finite-fields-are-simple,
        def-algebraically-constructible-real-number,
        thm-quadratic-tower-characterization-of-algebraic-constructibility,
        cor-algebraically-constructible-numbers-have-power-of-two-degree,
        cex-cube-root-of-two-is-not-algebraically-constructible]
examples: []
---

A field extension is a vector space over its base, so the published theory of bases and dimension measures its size: a basis has a well-defined cardinality and every element has unique coordinates with respect to it. The published simple-extension theorem describes an element algebraic over the base by its minimal polynomial, presents the subfield it generates as a quotient of a polynomial ring, and reads the degree off a power basis. Splitting fields exist for every nonzero polynomial and are unique up to base isomorphism; the root bound for polynomials over a domain, the cyclicity of a finite subgroup of the units of a domain, and Euclid's lemma are the tools the finite-field arguments rest on.

The page defines the degree of an extension, proves the product-basis lemma and the tower law, and derives that finite extensions are algebraic, that finitely generated algebraic extensions are finite, that the elements algebraic over the base form a subfield, and that algebraicity is transitive; relative algebraic closure and a degree bound for composita follow. Prime subfields and the Frobenius endomorphism lead to finite fields: their orders are prime powers, their multiplicative groups are cyclic, and the roots of $x^{p^n}-x$ construct the unique field of each prime-power order. The page then proves the subfield lattice, the factorization of $x^{q^n}-x$, existence of irreducibles in every degree, and simplicity of finite-field extensions, and ends with an explicitly algebraic notion of constructibility, its quadratic tower description, the power-of-two degree obstruction, and the cube-root-of-two counterexample.
