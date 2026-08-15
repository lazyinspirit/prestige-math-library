---
page: symmetric-polynomials
title: "Symmetric Polynomials and the Fundamental Theorem of Symmetric Functions"
status: draft
items: [def-symmetric-polynomial,
        prop-symmetric-polynomials-form-a-subring,
        def-elementary-symmetric-polynomials,
        thm-vieta-expansion-in-elementary-symmetric-polynomials,
        cor-vietas-formulas-for-a-split-monic-polynomial,
        def-monomial-symmetric-polynomials,
        thm-monomial-symmetric-polynomials-form-a-basis,
        def-lexicographic-order-and-polynomial-multidegree,
        lem-leading-multidegree-of-a-symmetric-polynomial-is-a-partition,
        lem-leading-multidegrees-of-elementary-symmetric-monomials,
        thm-fundamental-theorem-of-symmetric-polynomials-existence,
        thm-elementary-symmetric-polynomials-are-algebraically-independent,
        thm-fundamental-theorem-of-symmetric-polynomials,
        cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field,
        def-power-sum-and-complete-homogeneous-symmetric-polynomials,
        prop-elementary-and-complete-generating-series-identity,
        cor-complete-homogeneous-symmetric-polynomials-freely-generate,
        thm-newtons-identities,
        cor-power-sums-generate-when-factorial-is-invertible,
        def-vandermonde-polynomial,
        prop-vandermonde-square-is-symmetric,
        def-discriminant-of-a-monic-polynomial,
        thm-discriminant-root-formula-and-repeated-root-criterion,
        def-monic-resultant,
        thm-monic-resultant-root-product-and-common-root-criterion,
        thm-monic-resultant-as-a-double-root-product,
        cor-monic-resultant-symmetry,
        cor-monic-resultant-is-unchanged-modulo-f,
        cor-discriminant-as-a-resultant-with-the-derivative]
examples: []
---

A splitting field presents a monic polynomial as a product of linear factors, so its roots are available in an extension field. Over a commutative coefficient ring, a finite multivariate polynomial ring built by iteration and the symmetric group permuting its variables provide the setting for symmetric polynomials. The published formal derivative and its repeated-root criterion supply the interface against which discriminants are measured.

The page defines elementary, monomial, power-sum, and complete homogeneous symmetric polynomials, and proves the Vieta expansion identifying the coefficients of a split monic polynomial with the elementary symmetric functions of its roots. Lexicographic leading terms give both existence and uniqueness in the fundamental theorem, after which Newton's identities compare the standard generators. The Vandermonde square defines the discriminant and detects repeated roots in every characteristic. A monic resultant is then defined through its symmetric root product, giving the common-root criterion and the signed resultant formula for the discriminant.
