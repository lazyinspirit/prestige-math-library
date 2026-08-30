---
id: fs-a-tangent-vector-at-p-is-a-vector-whose-tail-is-drawn-at-p
kind: false-statement
title: "A tangent vector is not an ambient arrow by definition"
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

**False claim:** a tangent vector at $p$ is, by definition, just a vector whose tail is drawn at $p$.

## Facts & Assumptions

**Given:** A point $p$ of a smooth manifold $M$.

[F1] A tangent vector at $p$ is defined as a derivation on smooth germs at $p$ ([[def-derivation-at-a-point-and-tangent-space]]).

## Refutation

**Proof technique:** direct.

1.1 The definition in [F1] uses only the local algebra of smooth germs and the Leibniz rule. [F1, given]

2.1 No ambient Euclidean arrow appears in that definition, so the picture of a drawn arrow is at best a later model, not the definition itself. [step 1.1]

3.1 Therefore the claim is false. [step 1.1, step 2.1] ∎
