---
id: def-n-torsion-of-an-abelian-variety-as-a-finite-flat-group-scheme
kind: definition
title: "The n-torsion subgroup scheme of an abelian variety"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-abelian-variety-over-a-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, Chapter I, Theorem 8.2 and Chapter XX, Proposition 20.7"
      url: "https://www.jmilne.org/math/xnotes/AVs.pdf"
    - title: "The Stacks Project, Groupoid Schemes, Section 39.9, Lemma 39.9.8"
      url: "https://stacks.math.columbia.edu/tag/0BFG"
---

## Definition

Let $K$ be a field, let $A/K$ be an abelian variety, and let $n\ge2$. Define the $n$-torsion subgroup scheme $A[n]$ to be the scheme-theoretic kernel of multiplication by $n$, namely the fiber product $A\times_{A,[n],e}\operatorname{Spec}K$ over the identity section $e$. Its group law is the restriction of the group law of $A$. This definition retains the scheme-theoretic kernel, including any nonreduced structure.

## Definition references

[[def-abelian-variety-over-a-field|Abelian varieties over a field]]

[Milne, Abelian Varieties, Theorem 8.2 and Proposition 20.7](https://www.jmilne.org/math/xnotes/AVs.pdf)

[The Stacks Project, Groupoid Schemes, Lemma 39.9.8](https://stacks.math.columbia.edu/tag/0BFG)
