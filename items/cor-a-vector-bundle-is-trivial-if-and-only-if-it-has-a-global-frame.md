---
id: cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame
kind: corollary
title: "A vector bundle is trivial if and only if it has a global frame"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-local-frame-and-global-frame-of-a-vector-bundle, prop-local-frames-and-local-trivializations-are-equivalent-data]
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
## Statement

A smooth rank-$r$ vector bundle is trivial if and only if it has a global frame.

## Facts & Assumptions

**Given:** A smooth rank-$r$ vector bundle $E\to M$.

[L1] Local frames and local trivializations are equivalent data on any open set
([[prop-local-frames-and-local-trivializations-are-equivalent-data]]).

## Proof

**Proof technique:** direct.

1.1 If $E$ is trivial, then the global bundle chart $E\cong M\times\mathbb R^r$ exists. Applying [L1] on $U=M$ to that chart produces a global frame. [L1, given]
1.2 If $E$ has a global frame, then applying [L1] on $U=M$ to that frame gives a global trivialization $E\cong M\times\mathbb R^r$. Therefore $E$ is trivial. [L1, given]
2.1 Steps 1.1 and 1.2 prove both directions of the biconditional. [step 1.1, step 1.2] ∎
