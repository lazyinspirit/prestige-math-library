---
id: def-exponent-of-a-finite-group
kind: definition
title: "The exponent of a finite group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [cor-g-to-the-group-order-is-identity, thm-well-ordering-principle, def-group-power]
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

For a finite group $G$, its **exponent** is $$\exp(G)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in G\}.$$ The set is nonempty by [[cor-g-to-the-group-order-is-identity]], and [[thm-well-ordering-principle]] gives its least member; powers use [[def-group-power]]. Thus the definition is well-defined. For the trivial group $\exp(G)=1$.
