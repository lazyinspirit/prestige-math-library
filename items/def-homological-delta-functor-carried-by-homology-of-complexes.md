---
id: def-homological-delta-functor-carried-by-homology-of-complexes
kind: definition
title: "The homological delta-functor carried by homology of complexes"
status: draft
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-homology-is-an-additive-functor,
       def-connecting-morphism-in-homology]
verification:
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
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-27
---

## Definition

Fix an abelian category $\mathcal A$. For each integer $n$, let
$$H_n:\operatorname{Ch}(\mathcal A)\to\mathcal A$$
be the homology functor of [[thm-homology-is-an-additive-functor]]. For every
short exact sequence of complexes in $\mathcal A$, equip this family with the
connecting morphisms
$$\partial_n:H_n(C)\to H_{n-1}(A)$$
of [[def-connecting-morphism-in-homology]].

The resulting family $(H_n,\partial_n)_{n\in\mathbb Z}$ is the **homological
$\delta$-functor carried by homology of complexes**. This page uses it only as
this concrete example; the abstract theory is deferred to the later
$\delta$-functor page.

