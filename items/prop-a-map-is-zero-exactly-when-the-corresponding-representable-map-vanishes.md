---
id: prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes
kind: proposition
title: "A map is zero exactly when the corresponding representable map vanishes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-category, thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Amnon Yekutieli, A Course on Derived Categories, Proposition 8.2.6"
      url: "https://arxiv.org/pdf/1206.6632"
---

## Statement

For $a:X\to Y$ in a triangulated category, $a=0$ if and only if the natural
transformation $\mathcal T(-,a):\mathcal T(-,X)\to\mathcal T(-,Y)$ vanishes.

## Facts & Assumptions

**Given:** A morphism $a:X\to Y$.

## Proof

1.1 If $a=0$, composition with $a$ is zero at every object, so the natural transformation vanishes. [given]

2.1 Conversely its component at $X$ sends $1_X$ to $a$; if that component is zero then $a=0$. [step 1.1, given] ∎
