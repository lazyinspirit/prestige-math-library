---
id: ex-td-ornstein-uhlenbeck-spectrum
kind: example
title: "The stationary harmonic bath has a Lorentzian position spectrum"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps: [def-axiom-of-choice, post-td-linear-ornstein-uhlenbeck-bath, pthm-td-ornstein-uhlenbeck-thermal-fluctuations]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  post-td-linear-ornstein-uhlenbeck-bath: physical-assumption
  pthm-td-ornstein-uhlenbeck-thermal-fluctuations: physical-result
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
physical_scope: "A calculated stationary spectrum and averaging bound in the adopted scalar harmonic Ornstein-Uhlenbeck model; in the specified common fixed Galilean rest chart with constant trap-and-bath center-of-mass velocity throughout the modeled interval; no measured spectrum is asserted."
sources:
  references:
    - title: "U. Seifert, Stochastic thermodynamics, fluctuation theorems, and molecular machines"
      url: "https://arxiv.org/html/1205.4176v1"
      locator: "Sections 2.1 and 5.2.2."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Assume the Axiom of Choice [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is inherited from the Brownian and Itô-integral suppliers used for the stationary Gaussian model.

Use mobility $\mu>0$, stiffness $k>0$, and fixed bath temperature $T_b>0$. Under the adopted linear bath model, the stationary position spectrum has angular-frequency convention $S(\omega)=(2\pi)^{-1}\int_{\mathbb R}C(\tau)e^{i\omega\tau}\,d\tau$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the stationary Gaussian preparation of the specified linear model.

[F1] [[post-td-linear-ornstein-uhlenbeck-bath]]: its supplied center-of-mass data and constant velocity select one common rest chart throughout the modeled interval; $\gamma=\mu k$ and $\sigma^2=2\mu k_{\mathrm B}T_b$.

[F2] [[pthm-td-ornstein-uhlenbeck-thermal-fluctuations]]: $C(\tau)=(k_{\mathrm B}T_b/k)e^{-\mu k|\tau|}$ and the exact model spectrum is known.

## Verification

**Given:** The Axiom of Choice and $\gamma=\mu k>0$ and $V=k_{\mathrm B}T_b/k$.

1.1 Substituting $V=k_{\mathrm B}T_b/k$ and $\gamma=\mu k$ into the exact spectrum supplied by [F2] gives $S(\omega)=\mu k_{\mathrm B}T_b/(\pi[(\mu k)^2+\omega^2])$. [F1, F2, algebra]

2.1 The same supplier bound becomes $\operatorname{Var}(T^{-1}\int_0^T X_tdt)\le2k_{\mathrm B}T_b/(\mu k^2T)$, which tends to zero as $T\to\infty$. Both formulas are conditional model predictions, not measurements. [F2, step 1.1, algebra] ∎
