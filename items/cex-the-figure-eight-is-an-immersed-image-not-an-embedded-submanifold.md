---
id: cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold
kind: counterexample
title: "A figure-eight curve is an immersed image but not an embedded submanifold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-the-image-of-every-immersion-is-an-embedded-submanifold,
       thm-sine-and-cosine-derivatives,
       thm-chain-rule-for-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Immersed Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement refuted

Every immersed image is an embedded submanifold.

## Facts & Assumptions

**Given:** The map $\gamma(t)=(\sin t,\sin 2t)$ from $\mathbb R$ to $\mathbb R^2$.

[F1] The displayed claim is the false statement under discussion ([[fs-the-image-of-every-immersion-is-an-embedded-submanifold]]).

[L1] $(\sin t)'=\cos t$ ([[thm-sine-and-cosine-derivatives]]), and the chain
rule gives $(\sin 2t)'=2\cos 2t$
([[thm-chain-rule-for-total-derivatives]]).

## Counterexample
**Proof technique:** direct.

1.1 By [L1], $\gamma'(t)=(\cos t,2\cos 2t)$, and as in the false-statement proof this never vanishes. Hence $\gamma$ is an immersion. [L1, given]

2.1 The image passes through $(0,0)$ at $t=0$ and $t=\pi$, and in fact at every integer multiple of $\pi$. The two branches coming from $t=0$ and $t=\pi$ already have distinct tangent directions, so the image has a transverse self-crossing and is not locally homeomorphic to an interval at the origin. [step 1.1]

3.1 Thus $\gamma(\mathbb R)$ is an immersed image that is not an embedded submanifold, refuting [F1]. [F1, step 1.1, step 2.1] ∎
