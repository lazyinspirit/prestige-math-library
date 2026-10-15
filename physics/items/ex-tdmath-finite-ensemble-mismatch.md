---
id: ex-tdmath-finite-ensemble-mismatch
kind: example
title: "A finite canonical law differs from a narrow-shell microcanonical law"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: ["def-tdmath-countable-canonical-model","thm-tdmath-summable-canonical-differentiation","def-natural-logarithm","thm-exponential-is-strictly-increasing"]
justified_by: []
dependency_roles: {"def-tdmath-countable-canonical-model":"mathematical-premise","thm-tdmath-summable-canonical-differentiation":"mathematical-premise","def-natural-logarithm":"mathematical-premise","thm-exponential-is-strictly-increasing":"mathematical-premise"}
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical ensemble and finite-state examples §§1.2–1.3, printed pp.2–26."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; probability §§1.3–1.5 pp.8–30 and ensemble examples §§4.2–4.6 pp.192–217."
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

## Facts & Assumptions

**Given:** As stated in the item.

[F1] [[def-tdmath-countable-canonical-model]]: finite canonical probabilities are normalized exponential weights.

[F2] [[thm-tdmath-summable-canonical-differentiation]]: if each compact interval $K\subset J$ admits a summable nonnegative majorant $a_i$ with $g_i(1+|E_i|^2)e^{-\beta E_i}\le a_i$ for all $i$ and $\beta\in K$, then $Z$ is positive, finite and $C^2$ on $J$, and the canonical law is normalized.

[F3] [[def-natural-logarithm]] identifies the exponential as a bijection from $\mathbb R$ onto $(0,\infty)$; [[thm-exponential-is-strictly-increasing]] supplies its monotonicity.

[A1] The state set has energies $0$ and $\varepsilon>0$, the weights are one, $\beta>0$, and $0<\Delta<\varepsilon$. The finite-shell convention is the uniform law on states with energies in $[0,\Delta)$ when the shell is nonempty.

## Example

Let a two-state model have energies $0$ and $\varepsilon>0$, with unit state weights and $\beta>0$. Adopt the finite-shell convention that the microcanonical law is uniform over states whose energy lies in $[0,\Delta)$ when the shell is nonempty. For $0<\Delta<\varepsilon$, that shell contains only the ground state, whereas the canonical law assigns the excited state probability $e^{-\beta\varepsilon}/(1+e^{-\beta\varepsilon})>0$. Thus the two finite-ensemble laws differ.

## Verification

**Given:** The finite model and shell convention in [A1].

1.1 Take $J=(0,\infty)$. For any nonempty compact interval $K\subset J$, set $a_0=1$ and $a_1=(1+\varepsilon^2)e^{-\varepsilon\min K}$. These two finite nonnegative numbers are summable and bound the ground and excited terms in [F2], by [F3]. Thus the hypotheses of [F2] hold on $J$. The canonical partition sum is $1+e^{-\beta\varepsilon}$; its excited probability is $e^{-\beta\varepsilon}/(1+e^{-\beta\varepsilon})$, strictly positive because the exponential is positive. [F1, F2, F3, A1]

2.1 The shell condition $0\le E_i<\Delta$ includes the state of energy zero and excludes the state of energy $\varepsilon$, since $\Delta<\varepsilon$. Uniform weighting of this one-state shell gives excited probability zero, which differs from step 1.1. [A1, step 1.1] ∎
