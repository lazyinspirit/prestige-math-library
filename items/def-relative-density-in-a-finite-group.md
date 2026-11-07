---
id: def-relative-density-in-a-finite-group
kind: definition
title: "Relative density in a finite group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 10, §§10.1 and 10.3; Chapter 11, §11.1, normalized averages on finite groups"
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§1, Theorem 1.2, where density is cardinality divided by interval length"
verification:
  precheck: n/a
---

## Definition

Let $G$ be a nonempty finite set with an associative binary operation, an identity, and an inverse for each element, and let $A\subseteq G$. The relative density of $A$ in $G$ is $\rho_G(A):=|A|/|G|$, where $|\cdot|$ denotes the number of elements. The denominator is positive because $G$ contains its identity. When $G=\mathbb Z/N\mathbb Z$ with $N\ge1$, this is $|A|/N$.

## Definition references

[Tao and Vu, *Additive Combinatorics*, Chapter 10, §§10.1 and 10.3](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

[Gowers, *A new proof of Szemerédi’s theorem*, §1, Theorem 1.2](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)
