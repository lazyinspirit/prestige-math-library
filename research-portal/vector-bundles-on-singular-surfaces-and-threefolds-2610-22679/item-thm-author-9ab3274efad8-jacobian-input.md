---
title: Degree-zero Picard group as points of an abelian variety
status: published
research_item: thm-author-9ab3274efad8-jacobian-input
dependency_level: 0
sources:
  references:
    - title: "The Stacks Project, Section 59.69: Picard groups of curves"
      url: https://stacks.math.columbia.edu/tag/03RN
      locator: Opening degree exact sequence and following identification, before
        Lemma 59.69.1
      statement: The degree map Pic(X) to Z is a homomorphism with kernel Pic⁰(X), and
        this kernel is isomorphic to J(k) for an abelian variety J.
      hypotheses: X is a smooth projective integral curve over an algebraically closed
        field k.
      reading_limits: Checked the opening exact sequence and identification; the
        Picard-scheme construction and representability proof were not
        reconstructed.
    - title: "The Stacks Project, Definition 39.9.1: Abelian variety"
      url: https://stacks.math.columbia.edu/tag/03RO
      locator: Definition 39.9.1, definition paragraph
      statement: An abelian variety is a group scheme over a field that is also a
        proper geometrically integral variety over that field.
      hypotheses: The base k is a field; variety includes finite type over k.
      reading_limits: Checked the definition paragraph only for this convention; no
        equivalence between alternative definitions is used.
external_input: true
---

PDF p. 13: Picard group of a smooth affine curve

## Prerequisites

- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:def-algebraic-curve-over-field](https://alphabetamath.cc/item/def-algebraic-curve-over-field)
- [math:def-integral-scheme](https://alphabetamath.cc/item/def-integral-scheme)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-projective-morphism-pre-proj](https://alphabetamath.cc/item/def-projective-morphism-pre-proj)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-group-scheme-over-a-field](https://alphabetamath.cc/item/def-group-scheme-over-a-field)
- [math:def-proper-morphism](https://alphabetamath.cc/item/def-proper-morphism)
- [math:def-geometrically-reduced-integral-connected-fibre](https://alphabetamath.cc/item/def-geometrically-reduced-integral-connected-fibre)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [` The Stacks Project, Section 59.69: Picard groups of curves · Opening degree exact sequence and following identification, before Lemma 59.69.1 `](https://stacks.math.columbia.edu/tag/03RN)
- [` The Stacks Project, Definition 39.9.1: Abelian variety · Definition 39.9.1, definition paragraph `](https://stacks.math.columbia.edu/tag/03RO)


## Statement
For a smooth projective integral curve X over an algebraically closed field k, the group of degree-zero line-bundle classes Pic⁰(X) is isomorphic to J(k), where J is an abelian variety over k.

A line bundle is a locally free module of rank one; Pic⁰(X) is the kernel of the degree homomorphism on its tensor-product Picard group. An abelian variety is a proper geometrically integral group scheme of finite type over k; J(k) is its group of k-rational points.

## External input
The degree homomorphism and its kernel description, together with the group identification, are imported from the opening paragraphs of Stacks §59.69. The abelian-variety convention is Definition 39.9.1. No local construction of the Picard scheme or proof of representability is claimed.
