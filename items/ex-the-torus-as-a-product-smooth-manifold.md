---
id: ex-the-torus-as-a-product-smooth-manifold
kind: example
title: "The torus as a product smooth manifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure,
       ex-the-circle-from-two-stereographic-charts]
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
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Example

The torus

$$T^2:=S^1\times S^1$$

is a smooth $2$-manifold with the product smooth structure.

## Facts & Assumptions

**Given:** The circle $S^1$ with its two-chart smooth atlas and the product $T^2=S^1\times S^1$.

[F1] The circle is a smooth $1$-manifold ([[ex-the-circle-from-two-stereographic-charts]]).

[F2] Products of smooth manifolds carry canonical product smooth structures ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], each factor $S^1$ is a smooth $1$-manifold. [F1]

2.1 Applying [F2] to the two circle factors gives a canonical product smooth [F2, step 1.1] structure on $S^1\times S^1$, making it a smooth $(1+1)$-manifold. This is the torus $T^2$. [F2, step 1.1] ∎
