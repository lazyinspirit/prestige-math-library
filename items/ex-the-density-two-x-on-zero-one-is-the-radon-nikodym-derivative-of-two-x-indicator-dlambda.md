---
id: ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda
kind: example
title: "The density $2x$ on $[0,1]$ is the Radon-Nikodym derivative of its density measure"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-radon-nikodym-derivative, def-measure-with-density, thm-integration-against-a-density]
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Let $\nu$ be the measure on $(\mathbb R,\mathcal B(\mathbb R))$ defined by
$$\nu(E):=\int_E 2x\,\chi_{[0,1]}(x)\,d\lambda(x).$$
Then $\nu\ll\lambda$ and
$$\frac{d\nu}{d\lambda}=2x\,\chi_{[0,1]}(x)\qquad\lambda\text{-almost everywhere.}$$

## Facts & Assumptions

**Given:** The measurable function $h(x)=2x\,\chi_{[0,1]}(x)$.

[L1] A nonnegative measurable function defines a measure by $E\mapsto\int_E h\,d\lambda$. ([[def-measure-with-density]])

[L2] Integrating against a density recovers the product integral. ([[thm-integration-against-a-density]])

[L3] For a sigma-finite positive base and a signed measure satisfying the
common finite-exhaustion hypothesis, the Radon--Nikodym derivative is the
almost-everywhere class of a function whose measurable-set integrals recover
the measure ([[def-radon-nikodym-derivative]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $\nu$ is a measure with density $h$ relative to $\lambda$, so in particular $\nu\ll\lambda$. [L1, given]

2.1 The measure $\lambda$ is sigma-finite, $\nu$ is finite because $\nu(\mathbb R)=1$, and $[-n,n]$ is a common finite exhaustion. For every measurable $E$, the definition of $\nu$ gives $\nu(E)=\int_E h\,d\lambda$. Therefore [L3] identifies $h$ as a representative of $d\nu/d\lambda$. [step 1.1, L2, L3, algebra] ∎
