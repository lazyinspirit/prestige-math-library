---
id: fs-every-smooth-function-defined-near-a-closed-set-extends-globally-without-a-cutoff
kind: false-statement
title: "Naive extension by zero from an open set need not be smooth"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
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
    scope: "Owner-authorized explicit refutation and necessity-claim repair; local checks only"
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

## Statement

**False claim:** if a smooth function is defined on an open set containing a closed set, then declaring it to be zero outside that open set always gives a smooth global extension.

## Facts & Assumptions

**Given:** The closed set $C=\{1\}\subseteq\mathbb R$, the open set $U=(0,\infty)$ containing it, and the smooth function $f(x)=1$ on $U$.

[L1] Smooth maps are continuous ([[prop-smooth-maps-are-continuous]]).

[L2] Continuity at zero requires the epsilon-delta condition ([[def-continuity-real]]). A constant function is smooth because its positive-order derivatives vanish ([[def-ck-and-multi-index-notation-in-several-variables]]).

## Refutation

**Proof technique:** direct.

1.1 The set $C$ is closed: its complement is the union of the open intervals $(-\infty,1)$ and $(1,\infty)$. Thus $C\subseteq U$ and the constant smooth function $f$ satisfy the claim's hypotheses. Its prescribed zero extension is $F(x):=1$ for $x>0$ and $F(x):=0$ for $x\le 0$. [given, L2]

2.1 Take $\varepsilon=1/2$. For every $\delta>0$, the point $x=\delta/2$ satisfies $|x|<\delta$ and $|F(x)-F(0)|=1$. Hence $F$ is not continuous at zero by [L2], so it is not smooth by [L1]. [L1, L2, step 1.1]

3.1 Therefore extension by zero is not always smooth, even when the original open set contains the specified closed set. This does not deny the existence of another smooth extension: the constant function one on all of $\mathbb R$ already extends this $f$. No assertion that cutoffs are necessary for every extension, and no choice principle, is used. [step 1.1, step 2.1] ∎
