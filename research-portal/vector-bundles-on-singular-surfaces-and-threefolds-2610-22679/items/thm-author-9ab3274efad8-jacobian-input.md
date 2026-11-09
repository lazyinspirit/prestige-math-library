---
id: thm-author-9ab3274efad8-jacobian-input
kind: theorem
title: Degree-zero Picard group as points of an abelian variety
status: published
domain: mathematics
external_input: true
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "The Stacks Project, Section 59.69: Picard groups of curves"
      url: https://stacks.math.columbia.edu/tag/03RN
      locator: Opening paragraphs, before Lemma 59.69.1
      statement: For a smooth projective curve X of genus g over an algebraically
        closed field k, Pic⁰(X) is the group of k-points of the abelian variety
        Pic⁰_{X/k} of dimension g.
      hypotheses: X is a smooth projective curve over an algebraically closed field k;
        Pic⁰ denotes degree-zero line-bundle classes.
      reading_limits: Read the displayed opening paragraphs and the identification
        stated there; the construction and proof of representability in the
        referenced Picard-schemes section were not reconstructed here.
dependency_level: 0
---

## Statement
For a smooth projective integral curve X over an algebraically closed field k, the group of degree-zero line-bundle classes Pic⁰(X) is isomorphic to J(k), where J is an abelian variety over k.

A line bundle is a locally free module of rank one; Pic⁰(X) is the kernel of the degree homomorphism on its tensor-product Picard group. An abelian variety is a proper geometrically integral group scheme of finite type over k; J(k) is its group of k-rational points.

## External input
This is the stated degree-zero Picard variety identification in the cited opening paragraphs, restricted to integral curves. It is imported from the literature; no local reconstruction of its construction or proof is claimed.
