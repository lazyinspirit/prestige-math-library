---
id: lem-equality-near-a-point-is-an-equivalence-relation-on-local-smooth-functions
kind: lemma
title: "Equality near a point is an equivalence relation on local smooth functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-germ-of-a-smooth-function-at-a-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Equality on some neighbourhood of a fixed point $p$ is an equivalence relation on smooth real-valued functions defined near $p$.

## Facts & Assumptions

**Given:** Smooth functions defined on open neighbourhoods of a fixed point $p$.

[F1] The germ relation declares $(U,f)$ and $(V,g)$ equivalent when $f$ and $g$ agree on some open neighbourhood of $p$ inside $U\cap V$ ([[def-germ-of-a-smooth-function-at-a-point]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity holds because each function agrees with itself on its whole domain, and symmetry holds because equality of functions is symmetric. [F1, given]

1.2 If $(U,f)$ agrees with $(V,g)$ on a neighbourhood $W_1$ of $p$ and $(V,g)$ agrees with $(Z,h)$ on a neighbourhood $W_2$ of $p$, then all three agree on the neighbourhood $W_1\cap W_2$ of $p$, so transitivity holds. [F1, given]

2.1 Therefore the relation is reflexive, symmetric, and transitive, hence an equivalence relation. [step 1.1, step 1.2] ∎
