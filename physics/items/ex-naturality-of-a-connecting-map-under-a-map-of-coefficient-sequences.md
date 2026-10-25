---
id: ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences
kind: example
title: "Naturality of a connecting map under a map of coefficient sequences"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-naturality-of-the-homology-connecting-morphism,
       prop-elementwise-formula-for-the-connecting-map-in-module-categories]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Example

Compare the cone sequences of $\times2$ and $\times4$ on $\mathbb Z[0]$.
There is a morphism of short exact sequences
$$ \begin{matrix} 0&\to&\mathbb Z[0]&\to&\operatorname{Cone}(\times2)&\to&\mathbb Z[1]&\to&0\\ &&\downarrow{\times2}&&\downarrow\theta&&\downarrow 1&&\\ 0&\to&\mathbb Z[0]&\to&\operatorname{Cone}(\times4)&\to&\mathbb Z[1]&\to&0, \end{matrix} $$
where $\theta$ is the identity in degree $1$ and multiplication by $2$ in
degree $0$. The connecting square commutes because the top connecting map is
$\times2$ and the bottom one is $\times4$.

## Facts & Assumptions

**Given:** The morphism of cone sequences displayed in the example.

[L1] The homology connecting morphism is natural under morphisms of short exact sequences ([[thm-naturality-of-the-homology-connecting-morphism]]).

[L2] In module categories, the connecting morphism is computed by the lift-boundary formula ([[prop-elementwise-formula-for-the-connecting-map-in-module-categories]]).

## Verification

**Proof technique:** direct.

1.1 The map $\theta$ is a chain map because the top differential is multiplication by $2$ and the bottom one is multiplication by $4$, so $$4\cdot1=2\cdot2$$ on degree $1$. Thus the displayed diagram is a morphism of short exact sequences. [L1, given, construct]

2.1 By [L2], the top connecting morphism is multiplication by $2$ and the bottom one is multiplication by $4$. Therefore $(\times2)\circ\partial_{\mathrm{top}}=\partial_{\mathrm{bottom}}\circ1$ on $H_1(\mathbb Z[1])$. This is exactly the commuting square asserted by [L1]. [L1, L2, step 1.1, algebra] ∎
