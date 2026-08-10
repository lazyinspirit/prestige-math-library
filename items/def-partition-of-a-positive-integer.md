---
id: def-partition-of-a-positive-integer
kind: definition
title: "Partitions of a positive integer"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-nat-finite-sum-and-product, def-natural-numbers]
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

For $n>0$, a **partition of $n$** is a finite nondecreasing list of positive integers $(e_1,\ldots,e_r)$ with $e_1+\cdots+e_r=n$, using finite natural sums as in [[def-nat-finite-sum-and-product]] and naturals as in [[def-natural-numbers]]. Equality is equality of these lists. The nondecreasing convention removes permutations from the data.
