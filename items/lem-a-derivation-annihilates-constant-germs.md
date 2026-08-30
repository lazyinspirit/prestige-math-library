---
id: lem-a-derivation-annihilates-constant-germs
kind: lemma
title: "A derivation annihilates constant germs"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-derivation-at-a-point-and-tangent-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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

Every derivation at $p$ sends every constant germ to $0$.

## Facts & Assumptions

**Given:** A derivation $v\in T_pM$.

[F1] A derivation is linear and satisfies the Leibniz rule on germs ([[def-derivation-at-a-point-and-tangent-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $1$ denote the constant germ with value $1$. Applying the Leibniz rule from [F1] to $1\cdot 1$ gives $v(1)=1\,v(1)+1\,v(1)=2v(1)$, so $v(1)=0$. [F1, given]

2.1 Every constant germ is $c\cdot 1$ for some $c\in\mathbb R$, so linearity from [F1] gives $v(c\cdot 1)=c\,v(1)=0$. [F1, step 1.1]

3.1 Thus every constant germ is annihilated by $v$. [step 2.1] ∎
