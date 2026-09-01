---
id: fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding
kind: false-statement
title: "FALSE: an arbitrary linear projection of an embedding is an embedding"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-a-generic-linear-projection-preserves-injectivity-and-immersion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 6.13"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** every linear projection of an embedded submanifold is again an
embedding.

## Facts & Assumptions

**Given:** The standard unit circle
$$
S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}
$$
and the projection $\pi(x,y)=x$ onto the first coordinate.

[L1] Only generic projection directions preserve injectivity and immersion
([[lem-a-generic-linear-projection-preserves-injectivity-and-immersion]]).

## Refutation
**Proof technique:** direct.

1.1 The restriction $\pi|_{S^1}:S^1\to\mathbb R$ identifies the antipodal pairs $(x,y)$ and $(x,-y)$ whenever $y\ne0$. Thus it is not injective. [given, algebra]

1.2 At the left and right points $(\pm1,0)$, the tangent line to $S^1$ is vertical, so $d(\pi|_{S^1})$ vanishes there. Hence the projection is not even an immersion. [given, algebra]

2.1 Step 1.1 shows that one bad secant direction destroys injectivity, and step 1.2 shows that one bad tangent direction destroys immersion. So [L1] cannot be weakened to "every projection," and the claim is false. [L1, step 1.1, step 1.2] ∎
