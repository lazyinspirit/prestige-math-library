---
id: fs-a-bijective-smooth-map-is-a-diffeomorphism
kind: false-statement
title: "A bijective smooth map need not be a diffeomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement

**False claim:** every bijective smooth map is a diffeomorphism.

## Facts & Assumptions

**Given:** The map $F:\mathbb R\to\mathbb R$, $F(x)=x^3$.

[F1] A smooth map is a continuous map whose coordinate representatives are smooth ([[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[F2] A diffeomorphism is a bijective smooth map whose inverse is also smooth ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Refutation

**Proof technique:** direct.

1.1 The map $F(x)=x^3$ is smooth on $\mathbb R$ and bijective, with inverse [F1] $F^{-1}(y)=y^{1/3}$. [F1]

2.1 The inverse is not differentiable at $0$, because [step 1.1]

$$\frac{d}{dy}y^{1/3}=\frac{1}{3}y^{-2/3}$$

for $y\neq0$, and these derivatives are unbounded near $0$. So $F^{-1}$ is not smooth. [step 1.1]

3.1 By [F2], steps 1.1 and 2.1 show that $F$ is a bijective smooth map that is [F2, step 1.1, step 2.1] not a diffeomorphism. [F2, step 1.1, step 2.1] ∎
