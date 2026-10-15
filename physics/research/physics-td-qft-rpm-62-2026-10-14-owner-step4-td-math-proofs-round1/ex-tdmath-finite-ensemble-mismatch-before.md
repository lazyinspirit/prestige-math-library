---
id: ex-tdmath-finite-ensemble-mismatch
kind: example
title: "A finite canonical law differs from a narrow-shell microcanonical law"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: ["def-tdmath-countable-canonical-model","thm-tdmath-summable-canonical-differentiation"]
justified_by: []
dependency_roles: {"def-tdmath-countable-canonical-model":"mathematical-premise","thm-tdmath-summable-canonical-differentiation":"mathematical-premise"}
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
---

## Facts & Assumptions

**Given:** As stated in the item.

[F1] [[def-tdmath-countable-canonical-model]]: finite canonical probabilities are normalized exponential weights.

[F2] [[thm-tdmath-summable-canonical-differentiation]]: the finite canonical partition sum and its normalized law are valid whenever $Z$ is positive and finite.

[A1] The state set has energies $0$ and $\varepsilon>0$, the weights are one, $\beta>0$, and $0<\Delta<\varepsilon$. The finite-shell convention is the uniform law on states with energies in $[0,\Delta)$ when the shell is nonempty.

## Example

Let a two-state model have energies $0$ and $\varepsilon>0$, with unit state weights and $\beta>0$. Adopt the finite-shell convention that the microcanonical law is uniform over states whose energy lies in $[0,\Delta)$ when the shell is nonempty. For $0<\Delta<\varepsilon$, that shell contains only the ground state, whereas the canonical law assigns the excited state probability $e^{-\beta\varepsilon}/(1+e^{-\beta\varepsilon})>0$. Thus the two finite-ensemble laws differ.

## Verification

**Given:** The finite model and shell convention in [A1].

1.1 The canonical partition sum is $1+e^{-\beta\varepsilon}$; its excited probability is $e^{-\beta\varepsilon}/(1+e^{-\beta\varepsilon})$, strictly positive because the exponential is positive. [F1, F2, A1]

2.1 The shell condition $0\le E_i<\Delta$ includes the state of energy zero and excludes the state of energy $\varepsilon$, since $\Delta<\varepsilon$. Uniform weighting of this one-state shell gives excited probability zero, which differs from step 1.1. [A1, step 1.1] ∎
