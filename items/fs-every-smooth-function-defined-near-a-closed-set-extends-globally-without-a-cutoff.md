---
id: fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff
kind: false-statement
title: "Naive extension by zero from an open set need not be smooth"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
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

## Statement

**False claim:** if a smooth function is defined on an open set containing a closed set, then declaring it to be zero outside that open set always gives a smooth global extension.

## Facts & Assumptions

**Given:** The open set $(0,\infty)\subseteq \mathbb R$ and the smooth function $f(x)=1$ on it.

[L1] Smooth extension requires a cutoff supported away from the boundary of the original open set ([[lem-smooth-extension-from-a-closed-neighbourhood]]).

## Refutation

**Proof technique:** direct.

1.1 The naive zero extension is $F(x):=1$ for $x>0$ and $F(x):=0$ for $x\le 0$. [given]

2.1 This function has a jump at $0$, so it is not smooth. [step 1.1]

3.1 Therefore the cutoff in [L1] is genuinely necessary. [L1, step 2.1] ∎
