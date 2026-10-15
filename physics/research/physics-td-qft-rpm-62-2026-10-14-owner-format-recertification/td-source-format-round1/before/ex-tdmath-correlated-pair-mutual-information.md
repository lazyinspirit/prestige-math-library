---
id: ex-tdmath-correlated-pair-mutual-information
kind: example
title: "A perfectly correlated uniform pair has zero conditional entropy"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: ["lem-tdmath-conditional-memory-entropy","lem-tdmath-mutual-information"]
justified_by: []
dependency_roles: {"lem-tdmath-conditional-memory-entropy":"mathematical-premise","lem-tdmath-mutual-information":"mathematical-premise"}
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

[F1] [[lem-tdmath-mutual-information]]: $I(M;R)=H(M)+H(R)-H(M,R)=H(M)-H(M|R)$.

[F2] [[lem-tdmath-conditional-memory-entropy]]: conditional entropy is computed from the conditional laws on positive-probability register values.

[A1] The pair law assigns probability $1/2$ to $(0,0)$ and $(1,1)$ and zero to the other two pairs.

## Example

Let $M,R\in\{0,1\}$ have joint probabilities $p(0,0)=p(1,1)=1/2$ and $p(0,1)=p(1,0)=0$. Then $H(M)=H(R)=\log2$, $H(M,R)=\log2$, $H(M|R)=0$, and $I(M;R)=\log2$.

## Verification

**Given:** The finite joint probability law in [A1].

1.1 Both marginals are uniform, so their entropies are $-2(1/2)\log(1/2)=\log2$. The joint law has two positive entries of size $1/2$, so $H(M,R)=\log2$. [A1, algebra]

1.2 Conditional on either value of $R$, $M$ is determined, so its conditional law has one probability $1$ and one $0$; therefore $H(M|R)=0$. Substituting these values into [F1] gives $I(M;R)=\log2$. [F1, F2, A1, step 1.1] ∎