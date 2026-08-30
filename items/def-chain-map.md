---
id: def-chain-map
kind: definition
title: "Chain map"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-chain-complex-in-an-abelian-category]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-24
---

## Definition

Let $C_\bullet$ and $D_\bullet$ be chain complexes. A **chain map**
$f:C_\bullet\to D_\bullet$ is a family of morphisms
$$f_n:C_n\to D_n$$
such that for every $n\in\mathbb Z$,
$$d^D_n\circ f_n=f_{n-1}\circ d^C_n.$$

Equivalently, each square
$$\begin{matrix} C_n&\xrightarrow{f_n}&D_n\\ d^C_n\downarrow&&\downarrow d^D_n\\ C_{n-1}&\xrightarrow{f_{n-1}}&D_{n-1} \end{matrix}$$
commutes.
