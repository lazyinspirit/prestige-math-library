---
id: ex-tdmath-countable-partition-divergence
kind: example
title: "A lower energy bound does not ensure a countable partition function"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-tdmath-countable-canonical-model"]
justified_by: []
dependency_roles: {"def-tdmath-countable-canonical-model":"mathematical-premise"}
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

[F1] [[def-tdmath-countable-canonical-model]]: $Z$ is the extended nonnegative sum and a canonical probability law is defined only when $0<Z<\infty$.

[A1] The state set is $\mathbb N$ and every state has zero energy and unit weight.

## Example

Take $I=\mathbb N$, $E_n=0$, and $g_n=1$ for every $n$. The energy list is bounded below, but $Z(\beta)=+\infty$ for every real $\beta$, so this model has no normalized canonical law.

## Verification

**Given:** The countable model in [F1] with the data in [A1].

1.1 Every summand is $g_ne^{-\beta E_n}=1$, so the first $N$ terms sum to $N$ for every $N$; their supremum is infinite. [F1, A1, algebra]

1.2 Thus $Z(\beta)=+\infty$, which violates the finite-normalization condition in [F1]; no normalized canonical probabilities $p_n$ are defined. [F1, step 1.1] ∎