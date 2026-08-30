---
id: ex-the-tangent-bundle-of-euclidean-space-is-trivial
kind: example
title: "The tangent bundle of Euclidean space is trivial"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]
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

## Example

For every $n$, the tangent bundle $T\mathbb R^n$ is canonically diffeomorphic to $\mathbb R^n\times\mathbb R^n$.

## Facts & Assumptions

**Given:** Euclidean space $\mathbb R^n$ with its standard chart.

[L1] The tangent bundle is built from the induced bundle charts of the base atlas ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]).

## Verification

**Proof technique:** direct.

1.1 The standard global chart on $\mathbb R^n$ induces a global tangent-bundle chart $T\mathbb R^n\to \mathbb R^n\times\mathbb R^n$. [L1, given]

2.1 Because there is only one chart, there are no nontrivial transition maps, so this induced chart is a global diffeomorphism. [step 1.1]

3.1 Therefore $T\mathbb R^n$ is trivial. [step 2.1] ∎
