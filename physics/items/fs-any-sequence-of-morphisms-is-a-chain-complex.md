---
id: fs-any-sequence-of-morphisms-is-a-chain-complex
kind: false-statement
title: "FALSE: any sequence of morphisms is a chain complex"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-chain-complex-in-an-abelian-category,
       thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement

Any sequence of morphisms in an abelian category is a chain complex.

## Facts & Assumptions

**Given:** The sequence $$\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z$$ in $\mathbf{Ab}$.

[L1] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] A chain complex requires consecutive composites to be zero ([[def-chain-complex-in-an-abelian-category]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the displayed sequence is a sequence of morphisms in an abelian category. [L1, given]

2.1 Its consecutive composite is $1_{\mathbb Z}\circ1_{\mathbb Z}=1_{\mathbb Z}$, which is not the zero endomorphism of $\mathbb Z$. Therefore [L2] shows that this sequence is not a chain complex. [L2, step 1.1, algebra] ∎
