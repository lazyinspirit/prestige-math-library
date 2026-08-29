---
id: fs-product-measure-is-unique-without-sigma-finiteness
kind: false-statement
title: "FALSE: the rectangle formula determines a unique product measure without any sigma-finiteness hypothesis"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Remark 1.7.12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

For arbitrary measure spaces, any two measures on $\mathcal A \otimes \mathcal B$
that agree on every measurable rectangle must agree everywhere.

## Facts & Assumptions

**Given:** Lebesgue measure $\mu$ on $[0,1]$, counting measure $\nu$ on $[0,1]$, the diagonal $D:=\{(x,y)\in[0,1]^2:x=y\}$, and the two measures $\rho,\tau$ on the same product sigma-algebra supplied by the standard non-sigma-finite Lebesgue/counting construction in the listed Tao source, with $\rho(A\times B)=\mu(A)\nu(B)=\tau(A\times B)$ on measurable rectangles and $\rho(D)=1\ne 0=\tau(D)$.

[L1] Under sigma-finiteness, the rectangle formula does determine a unique product measure. ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]])

## Refutation

**Proof technique:** direct.

1.1 The witness in the Given line satisfies exactly the hypothesis of the displayed claim: $\rho$ and $\tau$ are measures on the same product sigma-algebra and agree on every measurable rectangle. [given]

2.1 The same witness also satisfies $\rho(D)=1\ne 0=\tau(D)$, so $\rho\ne\tau$. Hence the displayed universal uniqueness claim is false. This shows why the sigma-finiteness hypothesis in [L1] is essential. [L1, given, step 1.1] ∎
