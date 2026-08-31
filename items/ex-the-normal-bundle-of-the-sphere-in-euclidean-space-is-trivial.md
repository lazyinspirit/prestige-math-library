---
id: ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial
kind: example
title: "Assuming countable choice, the normal bundle of the sphere is trivial"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-normal-and-conormal-bundles-are-smooth-vector-bundles, prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle, prop-tangent-space-of-a-regular-level-set-is-the-kernel, cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
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

Assume $\mathrm{AC}_\omega$. For the unit sphere $S^n\subseteq\mathbb R^{n+1}$, the normal bundle is a trivial
line bundle.

## Facts & Assumptions

**Given:** The axiom $\mathrm{AC}_\omega$ and the unit sphere $S^n\subseteq\mathbb R^{n+1}$ with the Euclidean metric.

[L1] The normal bundle is a smooth vector bundle and Euclidean orthogonality
identifies it with the orthogonal normal line bundle
([[prop-normal-and-conormal-bundles-are-smooth-vector-bundles]],
[[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]]).

[L2] A vector bundle is trivial exactly when it has a global frame
([[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]).

[L3] The tangent space of a regular level set is the kernel of the defining map's differential ([[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

## Verification

**Proof technique:** direct.

1.1 Write $S^n$ as the regular level set of $F(z)=\langle z,z\rangle$. Since $dF_x(v)=2\langle x,v\rangle$, [L3] gives $T_xS^n=x^\perp$. Its Euclidean orthogonal complement is therefore the one-dimensional space $\mathbb Rx$, so [L1] identifies the normal bundle with a line bundle spanned by the radial vector. [L1, L3, given, algebra]

2.1 The smooth section $x\mapsto x$ is nowhere zero and spans that line at every point, so it is a global frame. Therefore [L2] implies that the normal bundle of $S^n$ is trivial. [L2, step 1.1] ∎
