---
id: "prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition"
kind: "proposition"
title: "Quasi isomorphisms contain identities and are closed under composition"
deps: ["def-quasi-isomorphism"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RR"
      title: "13.11.1–13.11.6"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For complexes in an abelian category, identity maps are quasi-isomorphisms and composites of quasi-isomorphisms are quasi-isomorphisms. We use cochain indexing, so $H^n=H_{-n}$ under reindexing.

## Facts & Assumptions

**Given:** For complexes in an abelian category, identity maps are quasi-isomorphisms and composites of quasi-isomorphisms are quasi-isomorphisms. We use cochain indexing, so $H^n=H_{-n}$ under reindexing.

[F1] A quasi-isomorphism is a complex map inducing an isomorphism in every homology degree ([[def-quasi-isomorphism]]).

## Proof

1.1 In each integer degree $H^n(1_X)=1_{H^n(X)}$, including $H^n(X)=0$. Hence identities induce isomorphisms in every degree. [F1, algebra]

2.1 For quasi-isomorphisms $f:X\to Y,g:Y\to Z$, functoriality gives $H^n(gf)=H^n(g)H^n(f)$, an isomorphism with inverse $H^n(f)^{-1}H^n(g)^{-1}$. This holds for every $n$. [F1, algebra] ∎
