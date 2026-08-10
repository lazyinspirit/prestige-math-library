---
id: def-invariant-factor-data-for-a-finite-abelian-group
kind: definition
title: "Invariant-factor data for a finite abelian group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-external-direct-product-of-groups, thm-classification-of-cyclic-groups]
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

An **invariant-factor list** for a finite abelian group $G$ is a finite list of integers $$1<n_1\mid n_2\mid\cdots\mid n_r$$ together with an isomorphism $G\cong C_{n_1}\times\cdots\times C_{n_r}$. The cyclic factors and product use [[thm-classification-of-cyclic-groups]] and [[def-external-direct-product-of-groups]]. Unit factors are omitted. The trivial group has the empty list.
