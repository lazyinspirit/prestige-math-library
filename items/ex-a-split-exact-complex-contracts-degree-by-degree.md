---
id: ex-a-split-exact-complex-contracts-degree-by-degree
kind: example
title: "A split exact complex contracts degree by degree"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-split-short-exact-sequence-in-an-abelian-category,
       thm-splitting-lemma-in-an-abelian-category,
       thm-modules-over-a-ring-form-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Example

Consider the split short exact sequence
$$0\to\mathbb Z\xrightarrow{i}\mathbb Z\oplus\mathbb Z\xrightarrow{p}\mathbb Z\to0,$$
where $i(a)=(a,0)$ and $p(a,b)=b$. As a three-term chain complex in degrees
$2$, $1$, and $0$, it admits explicit maps
$$h_1(a,b)=a,\qquad h_0(c)=(0,c)$$
satisfying
$$d h+h d=1.$$

## Facts & Assumptions

**Given:** The maps $i(a)=(a,0)$ and $p(a,b)=b$.

[L1] Split short exact sequences are the ones equipped with compatible section and retraction data ([[def-split-short-exact-sequence-in-an-abelian-category]], [[thm-splitting-lemma-in-an-abelian-category]]).

[L2] $\mathbf{Ab}$ is an abelian category ([[thm-modules-over-a-ring-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 The sequence is split: $r(a,b)=a$ is a retraction of $i$, and $s(c)=(0,c)$ is a section of $p$. This is exactly the structure in [L1]. [L1, L2, given, algebra]

2.1 With $h_1=r$ and $h_0=s$, one computes $$h_1 i=1_{\mathbb Z},\qquad i h_1+h_0 p=1_{\mathbb Z\oplus\mathbb Z}, \qquad p h_0=1_{\mathbb Z}.$$ So the identity on this complex is written degreewise as $d h+h d$, which is the promised contraction formula. [step 1.1, algebra] ∎
