---
id: ex-ext-zero-as-hom-in-both-constructions
kind: example
title: "Ext zero as Hom in both constructions"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [prop-ext-zero-is-hom-for-the-injective-construction, prop-ext-zero-is-hom-for-the-projective-construction, def-balanced-ext-bifunctor]
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Example

Write the degree-zero identifications in the projective and injective complexes and compare them through balanced Ext.

## Facts & Assumptions

**Given:** Objects $M,N$ in an abelian category, an augmented projective resolution $P_\bullet\twoheadrightarrow M$, and an augmented injective resolution $N\hookrightarrow I^\bullet$.

## Verification

**Proof technique:** direct.

1.1 The augmentation identifies $M=\operatorname{coker}(d_1:P_1\to P_0)$, so left exactness of $\operatorname{Hom}(-,N)$ identifies $\ker(\operatorname{Hom}(P_0,N)\to\operatorname{Hom}(P_1,N))$ with $\operatorname{Hom}(M,N)$. Thus $\operatorname{Ext}_P^0(M,N)=\operatorname{Hom}(M,N)$. [given, algebra]

2.1 Likewise $N=\ker(d^0:I^0\to I^1)$, and left exactness of $\operatorname{Hom}(M,-)$ gives $\ker(\operatorname{Hom}(M,I^0)\to\operatorname{Hom}(M,I^1))=\operatorname{Hom}(M,N)$. The two identifications are the degree-zero maps used in balanced $\operatorname{Ext}^0(M,N)$. [step 1.1, algebra] ∎
