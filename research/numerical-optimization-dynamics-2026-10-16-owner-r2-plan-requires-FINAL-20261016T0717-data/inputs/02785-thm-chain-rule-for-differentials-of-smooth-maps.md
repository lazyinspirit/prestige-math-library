---
id: thm-chain-rule-for-differentials-of-smooth-maps
kind: theorem
title: "The chain rule for differentials of smooth maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-differential-of-a-smooth-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
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

If $F:M\to N$ and $G:N\to P$ are smooth, then $d(G\circ F)_p=dG_{F(p)}\circ dF_p$ for every $p\in M$.

## Facts & Assumptions

**Given:** Smooth maps $F:M\to N$ and $G:N\to P$ and a point $p\in M$.

[F1] The differential is defined by pullback of target germs ([[def-differential-of-a-smooth-map]]).

## Proof

**Proof technique:** direct.

1.1 Let $v\in T_pM$ and let $[h]$ be a smooth germ at $G(F(p))$. Then $d(G\circ F)_p(v)([h])=v([h\circ G\circ F])$ by [F1]. [F1, given]

2.1 Also $(dG_{F(p)}\circ dF_p)(v)([h])=dF_p(v)([h\circ G])=v([h\circ G\circ F])$ by two uses of [F1]. [F1, step 1.1]

3.1 The two linear maps agree on every $v$ and every $[h]$, so they are equal. [step 1.1, step 2.1] ∎
