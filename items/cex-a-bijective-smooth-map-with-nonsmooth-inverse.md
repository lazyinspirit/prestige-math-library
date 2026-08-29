---
id: cex-a-bijective-smooth-map-with-nonsmooth-inverse
kind: counterexample
title: "A bijective smooth map with nonsmooth inverse"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-a-bijective-smooth-map-is-a-diffeomorphism,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement refuted

Every bijective smooth map is a diffeomorphism.

## Facts & Assumptions

**Given:** The bijection $F:\mathbb R\to\mathbb R$, $F(x)=x^3$.

[L1] The A-page false statement already proves that $F$ is smooth and bijective
but that $F^{-1}(y)=y^{1/3}$ is not smooth
([[fs-a-bijective-smooth-map-is-a-diffeomorphism]]).

[F1] A diffeomorphism is a bijective smooth map with smooth inverse
([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the map $F$ is smooth and bijective. [L1]

1.2 The same cited refutation shows that $F^{-1}$ is not smooth, so [F1] rules [F1, L1]
out $F$ being a diffeomorphism. [F1, L1]

2.1 Hence $F(x)=x^3$ is the desired counterexample. [step 1.1, step 1.2] ∎
