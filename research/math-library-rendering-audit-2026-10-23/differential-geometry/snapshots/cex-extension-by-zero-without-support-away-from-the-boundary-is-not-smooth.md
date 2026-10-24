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
deps: [def-continuity-real, prop-smooth-maps-are-continuous, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-09
    scope: "Owner-authorized explicit counterexample and necessity-claim repair; local checks only"
    delegated_by: owner
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

[L1] Smooth maps are continuous ([[prop-smooth-maps-are-continuous]]).

[L2] Continuity at zero requires the epsilon-delta condition ([[def-continuity-real]]). Constant functions are smooth: all positive-order coordinate derivatives vanish ([[def-ck-and-multi-index-notation-in-several-variables]]).

## Counterexample

**Proof technique:** direct.

1.1 The constant function $f=1$ is smooth on the open set $(0,\infty)$ by [L2]. Its prescribed zero extension is $F(x):=1$ for $x>0$ and $F(x):=0$ for $x\le 0$. [given, L2]

2.1 For $\varepsilon=1/2$ and every $\delta>0$, put $x=\delta/2$. Then $|x|<\delta$ but $|F(x)-F(0)|=1$. Thus $F$ is not continuous at zero by [L2], and cannot be smooth by [L1]. [L1, L2, step 1.1]

3.1 This refutes the universal zero-extension claim. It does not assert that every smooth zero extension requires a cutoff or support separated from the boundary; the counterexample proves only that the recipe fails in general. No choice principle or existence-of-cutoff theorem is used. [step 1.1, step 2.1] ∎
