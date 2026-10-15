---
id: lem-tdmath-finite-ground-degeneracy
kind: lemma
title: "Finite ground-state degeneracy entropy limit"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-natural-logarithm","def-real-exponential-function-and-e","def-tdmath-countable-canonical-model","thm-exponential-beats-every-polynomial","thm-logarithm-derivative-and-integral","thm-natural-logarithm-laws"]
justified_by: []
dependency_roles: {"def-natural-logarithm":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise","def-tdmath-countable-canonical-model":"mathematical-premise","thm-exponential-beats-every-polynomial":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","thm-natural-logarithm-laws":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
---

## Statement

Let a finite canonical model have energies $E_i$, ground energy $E_0$, and exactly $g\ge1$ states at $E_0$, with every other energy strictly larger. As $\beta\to+\infty$, each ground-state probability tends to $1/g$, each excited-state probability tends to zero, and the Shannon entropy $-\sum_i p_i(\beta)\log p_i(\beta)$ tends to $\log g$. This is a finite-model statement only.

## Facts & Assumptions

**Given:** As stated in the item.

[A1] The state set is finite and nonempty, $E_0=\min_iE_i$, exactly $g$ states attain it, and every remaining gap $E_i-E_0$ is positive.

[F1] [[def-tdmath-countable-canonical-model]]: finite canonical weights are $p_i=e^{-\beta E_i}/Z$ and Shannon entropy uses natural logarithms.

[F2] [[def-real-exponential-function-and-e]], [[def-natural-logarithm]], and [[thm-natural-logarithm-laws]]: exponential is positive; logarithms convert products to sums and are continuous on positive reals.

[F3] [[thm-exponential-beats-every-polynomial]]: $\beta e^{-\beta\Delta}\to0$ for every fixed $\Delta>0$.

## Proof

**Given:** A finite energy list with ground energy $E_0$, degeneracy $g\ge1$, and positive gaps for all other states.

1.1 Factor $e^{-\beta E_0}$ from the partition sum to obtain $Z=e^{-\beta E_0}(g+\sum_{i:E_i>E_0}e^{-\beta(E_i-E_0)})$. Every gap is positive, and there are finitely many, so the parenthesized sum tends to $g$. Thus each ground probability tends to $1/g$ and every excited probability tends to zero. [A1, F1, F2]

1.2 Ground-state entropy terms tend to $-g(1/g)\log(1/g)=\log g$. For an excited state with gap $\Delta_i>0$, step 1.1 gives $p_i=O(e^{-\beta\Delta_i})$ and $\log p_i=-\beta\Delta_i-\log D(\beta)$, where $D(\beta):=g+\sum_{j:E_j>E_0}e^{-\beta(E_j-E_0)}\to g>0$ by step 1.1, so $\log D(\beta)$ is bounded by continuity of $\log$; hence $|p_i\log p_i|=O((1+\beta)e^{-\beta\Delta_i})\to0$ by [F3]. The excited sum is finite, so its limit is zero and the total entropy tends to $\log g$. [A1, F2, F3, step 1.1] ∎
