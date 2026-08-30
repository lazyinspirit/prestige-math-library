---
id: def-hom-complex-of-chain-complexes
kind: definition
title: "The Hom complex of chain complexes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graded-morphism-of-chain-complexes, thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]
justified_by: [lem-the-hom-complex-differential-squares-to-zero]
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
    - title: "The Stacks Project, Section 12.16: Graded objects"
      url: "https://stacks.math.columbia.edu/tag/09MF"
pipeline_run: frontier-25
---

## Definition

Let $C_\bullet$ and $D_\bullet$ be chain complexes in an abelian category
$\mathcal A$. Their **Hom complex**
$$\underline{\operatorname{Hom}}(C,D)_\bullet$$
is the chain complex of abelian groups whose degree-$r$ term is
$$\underline{\operatorname{Hom}}(C,D)_r:=\prod_{n\in\mathbb Z}\operatorname{Hom}_{\mathcal A}(C_n,D_{n+r}),$$
so a degree-$r$ element is exactly a graded morphism $u=(u_n)_n$ of degree
$r$.

The differential
$$\partial_r:\underline{\operatorname{Hom}}(C,D)_r\to\underline{\operatorname{Hom}}(C,D)_{r-1}$$
is defined componentwise by
$$ (\partial u)_n=d^D_{n+r}u_n-(-1)^r u_{n-1}d^C_n. $$

By [[lem-the-hom-complex-differential-squares-to-zero]], this formula makes
$\underline{\operatorname{Hom}}(C,D)_\bullet$ into a chain complex.
