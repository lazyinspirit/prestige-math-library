---
id: def-preconnecting-arrow-on-cycles
kind: definition
title: "The preconnecting arrow on cycles"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes,
       thm-snake-lemma-under-the-weaker-stacks-hypotheses,
       def-homology-object-of-a-chain-complex]
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

Let
$$0\to A_\bullet\xrightarrow{i}B_\bullet\xrightarrow{p}C_\bullet\to0$$
be a short exact sequence of complexes in an abelian category, and fix
$n\in\mathbb Z$. Apply
[[thm-snake-lemma-under-the-weaker-stacks-hypotheses]] to the quotient-kernel
diagram of
[[lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes]].
The kernel of its right vertical map is canonically
$$H_n(C)=Z_n(C)/B_n(C),$$
and the cokernel of its left vertical map is canonically
$$H_{n-1}(A)=Z_{n-1}(A)/B_{n-1}(A).$$
Thus the snake construction supplies a canonical morphism
$$\delta_n^{\mathrm{snake}}:H_n(C)\to H_{n-1}(A).$$

Let $q_n:Z_n(C)\to H_n(C)$ be the homology quotient from
[[def-homology-object-of-a-chain-complex]]. The **preconnecting arrow on
cycles** is the categorical composite
$$\widetilde\partial_n:=\delta_n^{\mathrm{snake}}q_n:Z_n(C)\to H_{n-1}(A).$$

In a module category, applying this morphism to an element gives the usual
lift-and-boundary recipe. The definition above uses only kernels, cokernels,
and the canonical snake morphism, so it is valid in every abelian category.
