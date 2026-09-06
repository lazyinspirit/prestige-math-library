---
id: cex-tensor-product-of-domains-not-domain
kind: counterexample
title: Tensor products of domains need not be domains over a nonclosed field
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-affine-variety-product-coordinate-ring, rem-products-need-scheme-fibre-products]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, Remark 5.18
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement refuted

The tensor product of two domains over every field is a domain.

## Counterexample

**Given:** The domains $\mathbb C$ over the non-algebraically-closed field $\mathbb R$.

1.1 As an $\mathbb R$-algebra, $\mathbb C\cong\mathbb R[t]/(t^2+1)$, so $\mathbb C\otimes_{\mathbb R}\mathbb C\cong\mathbb C[t]/(t^2+1)$. [given, algebra]

2.1 In $\mathbb C[t]$, $t^2+1=(t-i)(t+i)$ with distinct factors, so the Chinese remainder calculation gives $\mathbb C[t]/(t^2+1)\cong\mathbb C\times\mathbb C$. [step 1.1, algebra]

3.1 The two nonzero coordinate idempotents have zero product, so this tensor product is not a domain. This refutes the statement and explains the base-field hypothesis in the affine product theorem. [step 2.1] ∎
