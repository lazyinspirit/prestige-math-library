---
id: def-kummer-extension
kind: definition
title: "Kummer extensions from adjoining $n$-th roots over a base field containing $\\mu_n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-roots-of-unity-in-a-field, thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
sources:
  scraped: []
  references:
    - title: "B. Conrad, Kummer Theory, Theorem 5.12"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/linearchar.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.7"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Definition

Let $F$ be a field, let $n\ge1$, assume $\operatorname{char}F\nmid n$, and
assume $F$ contains the full group $\mu_n$ of $n$-th roots of unity
([[def-roots-of-unity-in-a-field]]).

For a subgroup $B$ with

$$(F^\times)^n\subseteq B\subseteq F^\times$$

and finite quotient $B/(F^\times)^n$, choose for each $b\in B$ an $n$-th root
$b^{1/n}$ in an algebraic closure and write

$$F(B^{1/n}) := F\bigl(b^{1/n}:b\in B\bigr).$$

A finite Galois extension $K/F$ is a **Kummer extension of exponent dividing
$n$** when $K=F(B^{1/n})$ for some such subgroup $B$.

The cyclic one-generator case is the earlier theorem
[[thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer]].
