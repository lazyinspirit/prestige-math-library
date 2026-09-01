---
id: fs-every-injective-immersion-is-a-proper-embedding
kind: false-statement
title: "FALSE: every injective immersion is a proper embedding"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-a-proper-injective-immersion-is-a-smooth-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Embeddings"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** every injective immersion is a proper embedding.

## Facts & Assumptions

**Given:** The map $$f:(0,1)\to\mathbb R^2,\qquad f(t):=(\cos 2\pi t,\sin 2\pi t).$$

[L1] A proper injective immersion is a smooth embedding ([[prop-a-proper-injective-immersion-is-a-smooth-embedding]]).

## Refutation
**Proof technique:** direct.

1.1 The map $f$ is smooth and injective, and its derivative $$f'(t)=(-2\pi\sin 2\pi t,2\pi\cos 2\pi t)$$ never vanishes. Thus $f$ is an injective immersion. [given, algebra]

2.1 The compact set $K:=S^1\subseteq\mathbb R^2$ has inverse image $(0,1)$, which is not compact. So $f$ is not proper. Its image is also not closed in $\mathbb R^2$. [step 1.1, algebra]

3.1 By [L1], properness is exactly the extra hypothesis missing from this example. Therefore the displayed injective immersion is not a proper embedding, and the claim is false. [L1, step 2.1] ∎
