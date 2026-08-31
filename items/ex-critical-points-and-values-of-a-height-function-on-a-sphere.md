---
id: ex-critical-points-and-values-of-a-height-function-on-a-sphere
kind: example
title: "Critical points and values of a height function on a sphere"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-critical-locus-and-critical-value-set,
       prop-transversality-to-a-point-is-the-regular-value-condition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

Let $h:S^2\to\mathbb R$ be the height function $h(x,y,z)=z$. Its critical points
are the north and south poles, and its critical values are $1$ and $-1$.

## Facts & Assumptions

**Given:** The sphere $S^2=\{x^2+y^2+z^2=1\}$ and the height function $h(x,y,z)=z$.

[F1] The critical locus and critical value set record the critical points and their images ([[def-critical-locus-and-critical-value-set]]).

## Verification
**Proof technique:** direct.

1.1 The tangent space at $(x,y,z)\in S^2$ consists of vectors orthogonal to $(x,y,z)$. The differential of $h$ is the projection $v\mapsto v_z$, so it vanishes on that tangent space exactly when every tangent vector has zero $z$-component, which happens only at $(0,0,\pm1)$. [given, algebra]

2.1 Therefore the critical locus from [F1] is $\{(0,0,1),(0,0,-1)\}$, and the critical value set is $\{1,-1\}$. [F1, step 1.1]

3.1 Thus the sphere height function has exactly the two expected critical points and values. [step 2.1] ∎