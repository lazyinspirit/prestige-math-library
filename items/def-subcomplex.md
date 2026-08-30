---
id: def-subcomplex
kind: definition
title: "Subcomplex"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-complex-in-an-abelian-category,
       def-subobject-and-quotient-object]
  audited: 2026-08-30
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Definition

Let $C_\bullet$ be a chain complex. A **subcomplex** of $C$ is a family of
subobjects
$$S_n\hookrightarrow C_n$$
such that for every $n$ the differential $d_n^C:C_n\to C_{n-1}$ restricts to a
morphism $d_n^S:S_n\to S_{n-1}$ making
$$\begin{matrix} S_n&\hookrightarrow&C_n\\ d_n^S\downarrow&&\downarrow d_n^C\\ S_{n-1}&\hookrightarrow&C_{n-1} \end{matrix}$$
commute.

Because the structure maps of a subobject are monic, each restricted
differential is unique when it exists.
