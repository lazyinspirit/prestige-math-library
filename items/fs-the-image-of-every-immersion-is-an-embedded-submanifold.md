---
id: fs-the-image-of-every-immersion-is-an-embedded-submanifold
kind: false-statement
title: "The image of every immersion need not be an embedded submanifold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-embedded-submanifold-and-slice-chart, def-immersed-submanifold,
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

## Statement

**False claim:** the image of every immersion is an embedded submanifold.

## Facts & Assumptions

**Given:** The smooth map $\gamma:\mathbb R\to\mathbb R^2$,
$\gamma(t)=(\sin t,\sin 2t)$.

[F1] Embedded submanifolds are locally modeled on coordinate slices, hence on a
one-manifold they cannot have a self-crossing neighbourhood
([[def-embedded-submanifold-and-slice-chart]]).

[F2] An immersed submanifold need only come from an injective immersion on its
own manifold ([[def-immersed-submanifold]]).

[L1] $(\sin t)'=\cos t$ ([[thm-sine-and-cosine-derivatives]]), and the chain
rule gives $(\sin 2t)'=2\cos 2t$
([[thm-chain-rule-for-total-derivatives]]).

## Refutation
**Proof technique:** direct.

1.1 By [L1], $\gamma'(t)=(\cos t,2\cos 2t)$. If $\cos t=0$, then $t=\pi/2+k\pi$, so $\cos 2t=-1$ and the second component of $\gamma'(t)$ is not zero. Thus $\gamma'(t)\neq0$ for all $t$, and $\gamma$ is an immersion. [L1, given]

2.1 The points $t=0$ and $t=\pi$ both map to $(0,0)$, and the two tangent directions there are $(1,2)$ and $(-1,2)$. Hence the image has a transverse self-crossing at the origin. A neighbourhood of that crossing is not homeomorphic to an interval, so by [F1] the image is not an embedded one-submanifold. [F1, step 1.1]

3.1 Therefore the image of the immersion $\gamma$ fails to be embedded, refuting the claim. [F2, step 1.1, step 2.1] ∎
