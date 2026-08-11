---
id: def-elementary-divisor-data-for-a-finite-abelian-group
kind: definition
title: "Elementary-divisor data for a finite abelian group"
status: published
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
  audited: 2026-08-11
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

An **elementary-divisor decomposition** of a finite abelian group $G$ is an isomorphism $$G\cong C_{q_0}\times\cdots\times C_{q_{r-1}},$$ where every $q_i>1$ is a prime power. The unordered multiset of the $q_i$, counted with multiplicity, is the **elementary-divisor data**. The cyclic factors and product use [[thm-classification-of-cyclic-groups]] and [[def-external-direct-product-of-groups]]. The data records factor isomorphism types, not distinguished internal subgroups; the trivial group has empty data.
