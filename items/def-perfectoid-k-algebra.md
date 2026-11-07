---
id: def-perfectoid-k-algebra
kind: definition
title: "Perfectoid Banach algebra over a perfectoid field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-perfectoid-field-and-its-tilt
  - def-tate-k-algebra-and-power-bounded-elements
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Scholze, Perfectoid Spaces, Definition 5.1(i)"
      url: "https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf"
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory, Lemma 3.20"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
verification:
  precheck: n/a
---

## Definition

Let $K$ be a perfectoid field and choose $\varpi\in K^\circ$ with
$0<|\varpi|_K<1$ and $p\in\varpi K^\circ$. A Banach $K$-algebra $R$ is a
**perfectoid $K$-algebra** if its subring $R^\circ$ of power-bounded
elements is open and bounded in $R$, and Frobenius
$R^\circ/\varpi R^\circ\to R^\circ/\varpi R^\circ$, $x\mapsto x^p$, is
surjective. A morphism of perfectoid $K$-algebras is a continuous
$K$-algebra homomorphism.

## Definition references

[[def-perfectoid-field-and-its-tilt]]

[[def-tate-k-algebra-and-power-bounded-elements]]

[Peter Scholze, *Perfectoid Spaces*, Definition 5.1(i)](https://www.numdam.org/article/PMIHES_2012__116__245_0.pdf)

[Bhargav Bhatt, Matthew Morrow, and Peter Scholze, *Integral p-adic Hodge Theory*, Lemma 3.20](https://arxiv.org/pdf/1602.03148v3.pdf)
