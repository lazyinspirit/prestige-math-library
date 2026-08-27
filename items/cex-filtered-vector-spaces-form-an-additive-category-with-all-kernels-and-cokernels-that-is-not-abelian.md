---
id: cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian
kind: counterexample
title: "Filtered vector spaces can be additive with kernels and cokernels without being abelian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-category, def-abelian-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Example 12.3.13"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-21
---

## Statement refuted

Every additive category with all kernels and cokernels is abelian.

## Facts & Assumptions

**Given:** A field $k$.

[L1] An abelian category is in particular additive and requires the canonical
coimage-to-image map to be an isomorphism
([[def-additive-category]], [[def-abelian-category]]).

## Counterexample

1.1 Let $\mathcal F_k$ be the category whose objects are $\mathbb Z$-filtered $k$-vector spaces $(V,F^\bullet V)$ and whose morphisms preserve the filtrations. Pointwise addition on linear maps and direct sums with $F^i(V\oplus W)=F^iV\oplus F^iW$ make $\mathcal F_k$ additive, and kernels and cokernels are computed on the underlying linear map with the induced and quotient filtrations. [L1]

2.1 Take $V=W=k$ with $F^iV=k$ for $i<0$ and $F^iV=0$ for $i\ge0$, while $F^iW=k$ for $i\le0$ and $F^iW=0$ for $i>0$. The identity linear map $\iota:V\to W$ preserves filtrations, has zero kernel and zero cokernel, so $\operatorname{coim}(\iota)=V$ and $\operatorname{im}(\iota)=W$. But $\iota$ is not an isomorphism in $\mathcal F_k$, because its inverse does not preserve $F^0$. Hence the canonical map $\operatorname{coim}(\iota)\to\operatorname{im}(\iota)$ is not an isomorphism, so $\mathcal F_k$ is not abelian. [L1, step 1.1] ∎
