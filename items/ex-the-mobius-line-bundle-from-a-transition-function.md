---
id: ex-the-mobius-line-bundle-from-a-transition-function
kind: example
title: "The Mobius line bundle from a transition function"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-vector-bundle-construction-from-a-smooth-cocycle, fs-every-vector-bundle-is-globally-trivial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Example

The Mobius line bundle over $S^1$ is obtained by gluing two trivial line bundles
over the standard arcs with transition function $1$ on one overlap component and
$-1$ on the other.

## Facts & Assumptions

**Given:** The two-arc cover $U_0=S^1\setminus\{(-1,0)\}$ and
$U_1=S^1\setminus\{(1,0)\}$ of the circle.

[L1] A smooth cocycle on a countable cover constructs a smooth vector bundle
([[thm-vector-bundle-construction-from-a-smooth-cocycle]]).

[L2] The claim that every vector bundle is globally trivial is false
([[fs-every-vector-bundle-is-globally-trivial]]).

## Verification

**Proof technique:** direct.

1.1 The overlap $U_0\cap U_1$ has two connected components. Defining the rank-one transition function to be $1$ on the upper component and $-1$ on the lower one gives a locally constant smooth cocycle, so [L1] constructs a smooth line bundle $L\to S^1$. [L1, given, construct]
2.1 The refutation recorded in [L2] is exactly the argument that this line bundle admits no global frame, so $L$ is not trivial. This smooth nontrivial line bundle is the Mobius bundle. [L2, step 1.1] ∎
