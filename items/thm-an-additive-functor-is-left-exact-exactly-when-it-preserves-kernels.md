---
id: thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels
kind: theorem
title: "An additive functor is left exact exactly when it preserves kernels"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-additive-category, thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference, thm-an-additive-functor-preserves-finite-biproducts, thm-finite-limit-and-colimit-criteria]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7, Lemma 12.7.2"
      url: "https://stacks.math.columbia.edu/tag/010M"
pipeline_run: frontier-20
---

## Statement

Let $F:\mathcal C\to\mathcal D$ be an additive functor between additive
categories. Then $F$ is left exact if and only if it preserves kernels.

## Facts & Assumptions

**Given:** An additive functor $F:\mathcal C\to\mathcal D$.

[L1] Additive categories are preadditive with finite biproducts
([[def-additive-category]]).

[L2] In a preadditive category, equalizers are kernels of differences
([[thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference]]).

[L3] An additive functor preserves finite biproducts, hence finite products
([[thm-an-additive-functor-preserves-finite-biproducts]]).

[L4] A functor preserves finite limits exactly when it preserves finite products
and equalizers
([[thm-finite-limit-and-colimit-criteria]]).

## Proof

**Proof technique:** direct.

1.1 If $F$ is left exact, then it preserves all finite limits by definition, so in particular it preserves kernels because a kernel is a finite limit. [L4]

1.2 Conversely, assume $F$ preserves kernels. By [L1] the source and target are preadditive, and by [L3] the functor preserves finite products. If $e:E\to A$ equalizes $f,g:A\rightrightarrows B$, then [L2] identifies $e$ as a kernel of $f-g$. Since $F$ is additive, $F(f-g)=Ff-Fg$, so the image of $e$ is a kernel of $Ff-Fg$, hence again an equalizer of $Ff$ and $Fg$ by [L2]. Therefore $F$ preserves equalizers. [L1, L2, L3]

2.1 Now [L4] applied to step 1.2 shows that $F$ preserves all finite limits. So $F$ is left exact. [L4, step 1.2]

3.1 Thus left exactness and kernel preservation are equivalent for additive functors. [step 1.1, step 2.1] ∎
