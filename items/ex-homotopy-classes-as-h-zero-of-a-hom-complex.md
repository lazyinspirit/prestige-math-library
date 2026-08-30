---
id: ex-homotopy-classes-as-h-zero-of-a-hom-complex
kind: example
title: "Homotopy classes as H-zero of a Hom complex"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-the-hom-complex-of-two-two-term-complexes, thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex]
proof_strategy: direct
verification:
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
pipeline_run: frontier-25
---

## Example

For the two-term identity complex
$$0\to\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z\to0,$$
the Hom complex from the previous example has
$$\ker(\partial_0)=\{(a,a):a\in\mathbb Z\},\qquad \operatorname{im}(\partial_1)=\{(a,a):a\in\mathbb Z\},$$
so
$$H_0(\underline{\operatorname{Hom}}(C,C))=0.$$
Hence every endomorphism of $C$ is zero in $K(\mathbf{Ab})$.

## Facts & Assumptions

**Given:** The Hom complex of the two-term identity complex with itself.

[L1] The previous example computes $$\partial_1(m)=(m,m),\qquad \partial_0(a,b)=b-a$$ ([[ex-the-hom-complex-of-two-two-term-complexes]]).

[L2] Hom in the homotopy category is $H_0$ of the Hom complex ([[thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], a degree-$0$ element $(a,b)$ lies in $\ker(\partial_0)$ exactly when $b-a=0$, so $\ker(\partial_0)=\{(a,a)\}$. The same formula shows $(a,a)=\partial_1(a)$, hence $$\ker(\partial_0)=\operatorname{im}(\partial_1).$$ [L1, given, algebra]

2.1 Therefore $H_0(\underline{\operatorname{Hom}}(C,C))=0$. By [L2], applied in the abelian category $\mathbf{Ab}$, this means $$\operatorname{Hom}_{K(\mathbf{Ab})}(C,C)=0,$$ so every endomorphism class of $C$ is zero in the homotopy category. [L2, step 1.1, algebra] ∎
