---
id: def-connecting-morphism-in-homology
kind: definition
title: "The connecting morphism in homology"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-preconnecting-arrow-on-cycles,
       def-homology-object-of-a-chain-complex,
       lem-the-preconnecting-arrow-annihilates-boundaries]
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Definition

Fix a short exact sequence of complexes in an abelian category,
$$ 0\to A_\bullet\to B_\bullet\to C_\bullet\to0, $$
and an integer $n$. Let
$$q_n:Z_n(C)\to H_n(C)$$
be the homology quotient of [[def-homology-object-of-a-chain-complex]]. By
[[lem-the-preconnecting-arrow-annihilates-boundaries]], the preconnecting arrow
$\widetilde\partial_n:Z_n(C)\to H_{n-1}(A)$ kills the boundary subobject
$B_n(C)$. Therefore the cokernel property of $q_n$ gives a unique morphism
$$\partial_n:H_n(C)\to H_{n-1}(A)$$
such that
$$\partial_n q_n=\widetilde\partial_n.$$

This morphism is the **connecting morphism in homology** attached to the short
exact sequence of complexes.
