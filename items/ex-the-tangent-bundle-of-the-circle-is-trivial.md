---
id: ex-the-tangent-bundle-of-the-circle-is-trivial
kind: example
title: "Assuming countable choice, the tangent bundle of the circle is trivial"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame, ex-the-tangent-and-cotangent-bundles-as-vector-bundles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Example

Assume $\mathrm{AC}_\omega$. The tangent bundle of $S^1$ is a trivial line bundle.

## Facts & Assumptions

**Given:** The axiom $\mathrm{AC}_\omega$ and the circle $S^1\subseteq\mathbb R^2$.

[L1] The tangent bundle of the circle is a smooth rank-one vector bundle
([[ex-the-tangent-and-cotangent-bundles-as-vector-bundles]]).

[L2] A smooth vector bundle is trivial exactly when it has a global frame
([[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]).

## Verification

**Proof technique:** direct.

1.1 Define $X:S^1\to TS^1$ by $X(x,y)=(-y,x)$. This vector is tangent to $S^1$ at $(x,y)$ because it is orthogonal to the radial vector $(x,y)$, and it is never zero on the circle. [L1, given, construct]
2.1 Because $TS^1$ has rank $1$, the nowhere-zero tangent field $X$ is a global frame. Hence [L2] shows that $TS^1$ is trivial. [L2, step 1.1] ∎
