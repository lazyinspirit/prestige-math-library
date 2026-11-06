---
id: ex-st-pure-spinor-bv-density-counted-once
kind: example
title: A Finite BV Density Counted Once
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
deps:
  - lem-st-pure-spinor-bv-semidensity-transfer-defect
dependency_roles:
  lem-st-pure-spinor-bv-semidensity-transfer-defect: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Joaquim Gomis, Jordi París, and Stuart Samuel, Antibracket, Antifields and Gauge-Theory Quantization"
      url: "https://arxiv.org/pdf/hep-th/9412228v1"
      locator: "§§4.2–4.3 and 8.5–8.7: finite BV measure/operator conventions; no physical double-counting claim is sourced."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

In [[lem-st-pure-spinor-bv-semidensity-transfer-defect]], fix a finite Darboux chart, even classical master action $S_0$, even field-only $f$, and even parameter $\sigma$. Let $\mu_\sigma=e^{\sigma f}$ and $\rho_\sigma=\mu_\sigma^2\rho_0$. Then the representations $I_1$ with $\Delta_{\rho_\sigma}$ and $J_1=I_1-\sigma f$ with $\Delta_0$ have the same one-loop defect. Pairing $J_1$ with $\Delta_{\rho_\sigma}$ instead adds the spurious term $-\sigma(S_0,f)$. Here $\sigma$ is a finite variation parameter, not a continuum Weyl anomaly, and no prior calculation is alleged to have double-counted a density.

## Statement references

[[lem-st-pure-spinor-bv-semidensity-transfer-defect]]

## Facts & Assumptions

**Given:** A fixed finite Darboux chart, even field-only $f$, and the finite density/action bridge of [F1].

[F1] [[lem-st-pure-spinor-bv-semidensity-transfer-defect]]: $\Delta_\rho=\Delta_0+(\log\mu,-)$, $J_1=I_1-\log\mu$, and $(S_0,I_1)-\Delta_\rho S_0=(S_0,J_1)-\Delta_0S_0$.

## Proof

1.1 Since $\log\mu_\sigma=\sigma f$, $\Delta_{\rho_\sigma}=\Delta_0+\sigma(f,-)$ and $J_1=I_1-\sigma f$. The even shifted-skew rule gives $(f,S_0)=(S_0,f)$, so $(S_0,I_1)-\Delta_{\rho_\sigma}S_0=(S_0,I_1)-\Delta_0S_0-\sigma(f,S_0)=(S_0,I_1-\sigma f)-\Delta_0S_0$. This is equality of the two defect representatives. [F1, algebra]

2.1 If one instead retains $J_1$ and also uses $\Delta_{\rho_\sigma}$, the defect becomes $(S_0,J_1)-\Delta_0S_0-\sigma(f,S_0)$, differing from the reference-density defect by $-\sigma(S_0,f)$. The term is exactly the same density variation already used in defining $J_1$, so the finite example identifies the algebraic double count without alleging that it occurred in a physical source calculation. [F1, step 1.1, algebra] ∎
