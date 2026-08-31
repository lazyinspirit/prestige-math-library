---
id: ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely
kind: example
title: "Generic affine hyperplanes meet an embedded submanifold transversely"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-generic-translations-of-a-map-to-euclidean-space-are-transverse,
       cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Example

For the unit circle $S^1\subseteq\mathbb R^2$, the vertical line
$H_a=\{x=a\}$ meets $S^1$ transversely for every $a\in\mathbb R\setminus\{-1,1\}$.
For $|a|>1$ the intersection is empty, and for $|a|<1$ it consists of two
transverse points.

## Facts & Assumptions

**Given:** The height map $h:S^1\to\mathbb R$, $h(x,y)=x$, and a real parameter $a$.

[L1] Outside a null subset of parameters, translating a Euclidean-valued map makes a chosen point a regular value ([[cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation]]).

## Verification
**Proof technique:** direct.

1.1 The fibre $h^{-1}(a)$ is $S^1\cap H_a$. When $|a|<1$, the equation $x=a$ on $x^2+y^2=1$ gives the two points $(a,\pm\sqrt{1-a^2})$. At either point, $dh$ is nonzero on the circle tangent line exactly when $a\neq\pm1$. [given, algebra]
2.1 Therefore for every $a\neq\pm1$, the line $H_a$ either misses the circle or meets it transversely. The exceptional set $\{-1,1\}$ is finite, hence null, exactly as [L1] predicts in this one-parameter family. [L1, step 1.1]
3.1 Thus generic affine hyperplanes meet the embedded circle transversely. [step 2.1] ∎