---
id: cor-real-stone-weierstrass-nowhere-vanishing-form
kind: corollary
title: "A point-separating nowhere-vanishing real function algebra is uniformly dense"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-stone-weierstrass-dichotomy-for-separating-algebras]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, consequence of Theorem 1.26"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space and let $A\subseteq C(X,\mathbb R)$ be a point-separating nowhere-vanishing real function algebra. Then $A$ is uniformly dense in $C(X,\mathbb R)$.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and a point-separating nowhere-vanishing real function algebra $A\subseteq C(X,\mathbb R)$.

[L1] A point-separating real function algebra either has full uniform closure, or all its members vanish at one fixed point and its closure is exactly the functions vanishing there; the empty space lies in the full-closure alternative ([[thm-real-stone-weierstrass-dichotomy-for-separating-algebras]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, [L1] gives the full-closure conclusion directly. [L1]

2.1 If $X\ne\varnothing$, the proper alternative in [L1] would give a point $x_0$ at which every member of $A$ vanishes, contradicting nowhere-vanishing at $x_0$; therefore the full-closure alternative holds and $A$ is uniformly dense. [L1, given] ∎
