---
id: "fs-the-de-rham-map-is-a-cochain-map-without-stokes-on-simplices"
kind: "false-statement"
title: "The de Rham map is a cochain map without Stokes on simplices"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-de-rham-integration-is-a-cochain-map"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem, Theorem 3.1, PDF p.5
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

**False.** The integration map can be shown to satisfy $\delta I=I d$ without establishing Stokes' identity on smooth singular simplices.

## Facts & Assumptions

[F1] [[thm-de-rham-integration-is-a-cochain-map]] states $\delta I=Id$ for the integration cochain.

## Refutation

**Given:** A smooth $(k+1)$-simplex $\sigma:\Delta^{k+1}\to M$ and a smooth $k$-form $\omega$.

1.1 Directly from the definitions of the singular coboundary and integration cochain, $$\bigl(\delta I^k(\omega)\bigr)(\sigma)=I^k(\omega)(\partial\sigma)=\int_{\partial\sigma}\omega,$$ while $$I^{k+1}(d\omega)(\sigma)=\int_\sigma d\omega.$$ Consequently the cochain-map equality evaluated on this one simplex is precisely $\int_{\partial\sigma}\omega=\int_\sigma d\omega$, with the alternating face orientations built into $\partial\sigma$. [F1, given]

2.1 Thus simplex Stokes implies the cochain identity by linearity over finite chains, and conversely the cochain identity for every $\omega$ and every simplex implies every one of these Stokes identities by step 1.1. This is the identity asserted in [F1]. The zero form, a degenerate simplex, $k=0$, and an empty manifold merely give special instances of the same equality; they do not establish the general claim. Hence omitting simplex Stokes (or a result logically equivalent to all its instances) leaves the cochain-map assertion unproved. No choice principle is involved. [F1, step 1.1] ∎
