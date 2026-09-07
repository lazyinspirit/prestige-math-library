---
id: prop-reversing-orientation-negates-the-integral
title: "Orientation reversal changes the integral sign"
kind: proposition
status: draft
origin: pipeline
deps: ["thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.6(b), pp.407–408"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $-M$ have the opposite orientation on every component of an oriented smooth manifold $M$. For every compactly supported top form, $\int_{-M}\omega=-\int_M\omega$, in all dimensions.

## Facts & Assumptions

[F1] [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]: The compact-support integral on an oriented manifold is independent of the chart cover, coordinate maps, subordinate partition, and refinement. If $U\subset M$ is open and contains $\operatorname{supp}\omega$, with its restricted orientation, then $\int_U\omega|_U=\int_M\omega$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Compute both integrals with the same chart cover and partition, as independence permits. In positive dimension each chart sign changes from $\sigma$ to $-\sigma$, with its coefficient and Riemann integral unchanged. [F1]

2.1 In dimension zero each point sign changes from $\varepsilon$ to $-\varepsilon$. Factoring $-1$ out of either finite sum proves the formula; for empty support or the zero form it reads $0=-0$. [step 1.1, algebra] ∎
