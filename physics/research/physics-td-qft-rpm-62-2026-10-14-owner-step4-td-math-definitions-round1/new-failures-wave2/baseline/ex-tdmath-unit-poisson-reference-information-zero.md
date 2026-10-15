---
id: ex-tdmath-unit-poisson-reference-information-zero
kind: example
title: The Reference Has Zero Specific Relative Entropy
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [thm-tdmath-poisson-reference-count-properties, def-axiom-of-choice, def-tdmath-poisson-configuration-reference, def-tdmath-finite-region-relative-entropy, thm-tdmath-specific-entropy-density]
justified_by: []
dependency_roles:
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

Take $P=Q$, the unit-intensity Poisson configuration reference. This gives the zero-information baseline for the A-page specific relative entropy.

## Facts & Assumptions

**Given:** $P=Q$ as probability laws on the configuration space.

[F1] Finite-region relative entropy is $D(P_G\Vert Q_G)=\int h_G\log h_G\,dQ_G$ when $h_G=dP_G/dQ_G$ ([[def-tdmath-finite-region-relative-entropy]]).

[F2] Specific relative entropy is the large-cube limit of normalized finite-region relative entropies ([[thm-tdmath-specific-entropy-density]]).

[F3] [[thm-tdmath-poisson-reference-count-properties]]: under the declared AC hypothesis, $Q=Q_1$ is stationary and has expected unit-cell count one, so it belongs to the stationary finite-intensity domain of [F2].

## Verification

**Given:** $P=Q$.

1.1 By [F3], $P=Q$ satisfies the stationary finite-intensity hypotheses of [F2]. For every bounded cube $G$, equality of the laws gives $P_G=Q_G$ and the Radon–Nikodym derivative $h_G=1$ $Q_G$-almost everywhere. Thus $D(P_G\Vert Q_G)=\int1\log1\,dQ_G=0$. [given, F1, F3, algebra]

2.1 Every normalized cube entropy is therefore zero, so its limit is $I(P)=0$ by [F2]. Also $|G|^{-1}\log h_G=0$ $P$-almost surely for every such $G$. [F2, step 1.1] ∎

