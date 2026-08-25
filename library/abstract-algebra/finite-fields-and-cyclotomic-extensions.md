---
page: finite-fields-and-cyclotomic-extensions
title: "Finite Fields and Cyclotomic Extensions"
status: draft
items: [lem-subgroup-lattice-of-a-finite-cyclic-group,
        lem-a-finite-cyclic-group-has-euler-totient-many-generators,
        def-relative-frobenius-of-a-finite-field-extension,
        lem-fixed-field-of-the-relative-frobenius,
        lem-order-of-the-relative-frobenius,
        thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group,
        thm-intermediate-fields-of-an-extension-of-finite-fields,
        rem-the-two-descriptions-of-the-subfield-lattice-of-a-finite-field,
        thm-conjugates-over-a-finite-field-are-the-frobenius-powers,
        prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field,
        def-normal-basis,
        lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring,
        lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible,
        lem-the-galois-automorphisms-are-algebraically-independent-over-an-infinite-base-field,
        thm-normal-basis-theorem-over-an-infinite-base-field,
        thm-normal-basis-theorem-for-a-cyclic-extension,
        thm-normal-basis-theorem,
        def-roots-of-unity-in-a-field,
        prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group,
        thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity,
        prop-p-power-roots-of-unity-in-characteristic-p,
        def-cyclotomic-extension,
        thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n,
        cor-cyclotomic-extensions-are-abelian,
        thm-the-cyclotomic-galois-group-over-a-finite-field,
        def-cyclotomic-polynomial,
        thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient,
        lem-the-constant-term-of-a-cyclotomic-polynomial,
        thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity,
        prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group,
        prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate,
        lem-a-primitive-root-of-unity-and-its-prime-power-share-a-minimal-polynomial-over-the-rationals,
        thm-cyclotomic-polynomials-are-irreducible-over-the-rationals,
        cor-the-galois-group-of-a-rational-cyclotomic-field,
        thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field,
        cor-the-reduced-cyclotomic-polynomial-is-irreducible-exactly-when-q-generates-the-unit-group,
        lem-degree-of-a-compositum-with-a-galois-extension,
        thm-composita-of-cyclotomic-extensions,
        lem-the-totient-of-a-gcd-and-of-a-least-common-multiple,
        thm-intersections-of-rational-cyclotomic-fields,
        cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field,
        thm-infinitely-many-primes-congruent-to-one-modulo-n,
        lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group,
        thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals,
        prop-subfields-of-rational-cyclotomic-fields-are-abelian-over-the-rationals,
        rem-kronecker-weber]
examples: [ex-the-galois-group-of-f-eight-over-f-two,
           ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve,
           ex-the-monic-irreducible-cubics-over-f-two-and-the-divisor-sum-identity,
           ex-the-frobenius-conjugates-of-a-generator-of-f-sixteen,
           ex-a-normal-basis-of-f-eight-over-f-two,
           ex-a-normal-basis-of-the-complex-numbers-over-the-reals,
           fs-every-basis-of-a-finite-field-over-a-subfield-is-a-normal-basis,
           ex-the-first-twelve-cyclotomic-polynomials,
           ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial,
           ex-the-fifth-cyclotomic-polynomial-splits-into-linear-factors-over-f-eleven,
           ex-the-seventh-cyclotomic-polynomial-factors-into-two-cubics-over-f-two,
           ex-the-galois-group-of-the-twelfth-cyclotomic-field-and-its-quadratic-subfields,
           ex-roots-of-unity-in-characteristic-three,
           cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case,
           fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one,
           fs-the-cyclotomic-polynomial-is-irreducible-over-every-field,
           fs-the-group-of-n-th-roots-of-unity-has-n-elements-in-every-field,
           fs-every-finite-abelian-group-is-the-galois-group-of-a-cyclotomic-field,
           ex-a-cyclic-cubic-field-inside-the-seventh-cyclotomic-field]
---

Finite fields on this page are governed by the Frobenius endomorphism, Artin's
fixed-field theorem, and the finite Galois correspondence. The page uses the
published algebraic-extension and Galois pages for degree, splitting, and
automorphism machinery, then adds the relative Frobenius, the finite cyclic-group
lemmas it needs, Dedekind independence for normal bases, and the polynomial and
unit-group facts that control cyclotomic extensions and finite-field
factorisations.

The development begins with finite fields: the $q$-power map identifies the fixed
field, determines the full Galois group, describes every intermediate field, and
controls Frobenius conjugates and normal bases. It then turns to roots of unity
and cyclotomic extensions, defines $\Phi_n$ by the divisor recursion, proves the
primitive-root and irreducibility theorems, and uses the resulting Galois groups
to study finite-field factorisation, composita and intersections over
$\mathbb Q$, primes congruent to $1$ modulo $n$, and finite abelian Galois groups
over $\mathbb Q$.
