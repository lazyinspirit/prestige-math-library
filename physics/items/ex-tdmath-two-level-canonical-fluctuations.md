---
id: ex-tdmath-two-level-canonical-fluctuations
kind: example
title: "Canonical mean and variance for a two-level system"
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

[F1] [[def-tdmath-countable-canonical-model]]: the finite partition sum and normalized state weights are defined as stated there.

[F2] [[thm-tdmath-summable-canonical-differentiation]]: a finite energy list has the required local summable moment envelope on every compact parameter interval (each of finitely many terms is bounded there), so $-\partial_\beta\log Z$ is the mean and $\partial_\beta^2\log Z$ is the variance.

[A1] $E_0=0$, $E_1=\varepsilon>0$, $g_0=g_1=1$, and $\beta>0$.

## Example

Let the state set be $\{0,1\}$, with energies $E_0=0$, $E_1=\varepsilon>0$, unit weights, and $\beta>0$. Writing $q=e^{-\beta\varepsilon}$, the excited-state probability is $q/(1+q)$, the mean energy is $\varepsilon q/(1+q)$, and the energy variance is $\varepsilon^2q/(1+q)^2>0$.

## Verification

**Given:** The finite canonical model [F1] with data [A1].

1.1 Direct summation gives $Z=1+e^{-\beta\varepsilon}=1+q$, hence $p_1=q/(1+q)$ and $p_0=1/(1+q)$. [F1, A1, algebra]

2.1 The finite weighted sum gives $\bar E=\varepsilon p_1=\varepsilon q/(1+q)$. The second centered moment is $p_0(0-\bar E)^2+p_1(\varepsilon-\bar E)^2=\varepsilon^2q/(1+q)^2$, which is positive because $q\in(0,1)$. The values also agree with the finite-list derivative identities of [F2]. [F1, F2, A1, step 1.1, algebra] ∎
