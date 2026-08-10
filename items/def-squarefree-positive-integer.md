---
id: def-squarefree-positive-integer
kind: definition
title: "Squarefree positive integers"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-canonical-prime-factorisation]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Definition

A positive integer $n$ is **squarefree** if no square of a prime divides $n$. Equivalently, every exponent in its [[thm-canonical-prime-factorisation|canonical prime factorisation]] is $0$ or $1$. The integer $1$ is squarefree by the empty factorisation.
