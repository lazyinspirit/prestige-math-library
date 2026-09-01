---
id: ex-projecting-a-space-curve-can-create-a-double-point
kind: example
title: "Projecting a space curve can create a double point"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-a-generic-linear-projection-preserves-injectivity-and-immersion,
       fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding]
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

## Example

On $S^1=\mathbb R/2\pi\mathbb Z$, consider the embedded space curve
$$
\gamma([t]):=(\cos t,\sin t,\cos 2t)\subseteq\mathbb R^3.
$$
Projecting along the $y$-axis gives
$$
\pi(\gamma([t]))=(\cos t,\cos 2t)\in\mathbb R^2.
$$
The distinct parameters $t$ and $-t$ have the same projected image, so this
projection creates double points.

## Facts & Assumptions

**Given:** The space curve $\gamma:S^1\to\mathbb R^3$ above and the
$y$-coordinate projection $\pi$.

## Verification
**Proof technique:** direct.

1.1 The curve $\gamma$ is smooth and embedded: the first two coordinates already parametrize the standard unit circle, so the third coordinate only lifts that circle into space. [given, algebra]

2.1 The projection $\pi$ forgets the $y$-coordinate. Since $\cos(-t)=\cos t$ and $\cos(-2t)=\cos2t$, one has $\pi(\gamma([-t]))=\pi(\gamma([t]))$ for every $t$, while $\gamma([-t])\ne\gamma([t])$ away from $[0]$ and $[\pi]$. Thus the projected curve has double points. [step 1.1, algebra]

3.1 This is a concrete bad direction of the type excluded by [[lem-a-generic-linear-projection-preserves-injectivity-and-immersion]], so it witnesses the false claim [[fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding]]. [step 2.1] ∎
