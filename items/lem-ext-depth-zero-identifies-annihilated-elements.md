---
id: lem-ext-depth-zero-identifies-annihilated-elements
title: Ext degree zero identifies ideal-annihilated elements
kind: lemma
status: draft
origin: pipeline
deps: [def-balanced-ext-bifunctor]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

For a commutative ring $R$, an ideal $I$, and an $R$-module $M$, evaluation at
$1+I$ gives a natural isomorphism
$$\operatorname{Ext}^0_R(R/I,M)=\operatorname{Hom}_R(R/I,M) \cong (0:_MI).$$

## Facts & Assumptions

**Given:** A ring $R$, ideal $I$, and module $M$.

## Proof

**Proof technique:** direct.

1.1 An $R$-linear map $f:R/I\to M$ is determined by $m=f(1+I)$, and $Im=0$. Conversely, every $m\in(0:_MI)$ defines $f_m(r+I)=rm$. [given, construct]

2.1 These constructions are inverse and natural. Since degree-zero Ext is Hom, they give the asserted isomorphism. [step 1.1, algebra] ∎
