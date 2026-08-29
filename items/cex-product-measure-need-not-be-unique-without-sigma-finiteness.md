---
id: cex-product-measure-need-not-be-unique-without-sigma-finiteness
kind: counterexample
title: "Without sigma-finiteness, the rectangle formula need not determine a unique product measure"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
proof_strategy: direct
verification:
  audited: 2026-08-29
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

## Statement refuted

The rectangle formula determines at most one product measure even without
sigma-finiteness.

## Counterexample

**Proof technique:** direct.

Let $\mu$ be Lebesgue measure on $[0,1]$, let $\nu$ be counting measure on
$[0,1]$, let $D:=\{(x,y)\in[0,1]^2:x=y\}$, and let $\rho,\tau$ be the two
measures on the product sigma-algebra supplied by the standard non-sigma-finite
Lebesgue/counting construction in the listed Tao source.

## Facts & Assumptions

**Given:** Lebesgue measure $\mu$ on $[0,1]$, counting measure $\nu$ on $[0,1]$, and the diagonal $D:=\{(x,y)\in[0,1]^2:x=y\}$.

[L1] The listed Tao source's standard non-sigma-finite Lebesgue/counting construction yields measures $\rho,\tau$ on the product sigma-algebra such that $\rho(A\times B)=\mu(A)\nu(B)=\tau(A\times B)$ on measurable rectangles and $\rho(D)=1\ne 0=\tau(D)$.

## Verification

1.1 By [L1], $\rho$ and $\tau$ agree on every measurable rectangle. [L1]

2.1 The same fact [L1, step 1.1] gives $\rho(D)=1\ne 0=\tau(D)$, so the two measures are distinct. Therefore the rectangle formula does not determine a unique product measure without sigma-finiteness. [L1, step 1.1] ∎
