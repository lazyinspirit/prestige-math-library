---
id: cor-the-biproduct-of-morphisms-is-the-diagonal-matrix
kind: corollary
title: "The biproduct of morphisms is the diagonal matrix"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-morphisms-between-finite-biproducts-correspond-to-matrices, thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-20
---

## Statement

For morphisms $f:A\to A'$ and $g:B\to B'$, the induced morphism

$$f\oplus g:A\oplus B\to A'\oplus B'$$

has matrix

$$\begin{pmatrix}f&0\\0&g\end{pmatrix}.$$

## Facts & Assumptions

**Given:** Morphisms $f:A\to A'$ and $g:B\to B'$ in an additive category.

[L1] Morphisms between finite biproducts are determined by their matrix entries
([[thm-morphisms-between-finite-biproducts-correspond-to-matrices]]).

[L2] Composition of those morphisms is ordinary matrix multiplication
([[thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication]]).

## Proof

**Proof technique:** direct.

1.1 By definition, $f\oplus g$ is the unique morphism whose composites with the two injections and two projections act as $f$ and $g$ on the matching summands and as zero on the off-diagonal summands. [L1]

2.1 Therefore its four matrix entries are $f$, $0$, $0$, and $g$ in the expected positions. The multiplication rule of [L2] is exactly what makes this diagonal description functorial under further direct sums and composition. [L1, L2, step 1.1] ∎
