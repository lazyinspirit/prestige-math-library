---
id: cex-extension-by-zero-without-support-away-from-the-boundary-is-not-smooth
kind: counterexample
title: "Extension by zero without support away from the boundary is not smooth"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [lem-smooth-extension-from-a-closed-neighbourhood]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement refuted

Any smooth function on an open set extends smoothly to the ambient manifold by setting it equal to zero outside the open set.

## Facts & Assumptions

**Given:** The open set $(0,\infty)\subseteq \mathbb R$ and the smooth function $f(x)=1$ on it.

[L1] Smooth extension works only after the support is kept away from the boundary by a cutoff ([[lem-smooth-extension-from-a-closed-neighbourhood]]).

## Counterexample

**Proof technique:** direct.

1.1 The naive zero extension is the step function $F(x):=1$ for $x>0$ and $F(x):=0$ for $x\le 0$. [given]

2.1 The function $F$ is not continuous at $0$, so it is not smooth. [step 1.1]

3.1 Hence the hypothesis singled out in [L1] is essential. [L1, step 2.1] ∎
