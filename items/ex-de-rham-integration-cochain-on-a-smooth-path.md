---
id: "ex-de-rham-integration-cochain-on-a-smooth-path"
kind: "example"
title: "De Rham integration cochain on a smooth path"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-de-rham-integration-cochain-map"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem, §3, PDF p.5
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Example

For a smooth singular path $\sigma:[0,1]\to M$ and a smooth one-form $\omega$ on $M$, the de Rham integration cochain evaluates as
$$I_M^1(\omega)(\sigma)=\int_0^1\omega_{\sigma(t)}\bigl(\sigma'(t)\bigr)\,dt.$$

## Facts & Assumptions

**Given:** The path and one-form in the example.

[F1] [[def-de-rham-integration-cochain-map]] defines $I_M^1(\omega)(\sigma)=\int_\sigma\omega$ as the integral of the pullback form on the oriented standard one-simplex $[0,1]$.

## Verification

1.1 At $t\in[0,1]$, the pullback definition gives $$(\sigma^*\omega)_t(\partial_t)=\omega_{\sigma(t)}(d\sigma_t(\partial_t))=\omega_{\sigma(t)}(\sigma'(t)).$$ Therefore $\sigma^*\omega=f(t)\,dt$ with $f(t)=\omega_{\sigma(t)}(\sigma'(t))$. [F1, given]

2.1 Integrating this coefficient in the positive orientation of $[0,1]$ and using [F1] gives the displayed formula. If $\sigma$ is constant then $\sigma'=0$ and both sides are zero; if $\omega=0$ the same holds. Both parameter endpoints are included in the smooth-simplex convention and do not change the Riemann integral. The formula uses a single supplied path and no choice principle. [F1, step 1.1] ∎
