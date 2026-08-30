---
id: thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures
kind: theorem
title: "The Lebesgue decomposition of a sigma-finite signed measure is unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure-concentrated-on-a-measurable-set, thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero, thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 13.5"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, 9.35"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $\mu$ be a positive measure and let $\nu$ be a signed measure satisfying the common finite-exhaustion hypothesis of [[thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures]]. If
$$\nu=\nu_a+\nu_s=\widetilde\nu_a+\widetilde\nu_s,$$
with $\nu_a,\widetilde\nu_a\ll\mu$ and $\nu_s,\widetilde\nu_s\perp\mu$, then
$$\nu_a=\widetilde\nu_a,\qquad \nu_s=\widetilde\nu_s.$$

## Facts & Assumptions

**Given:** Two Lebesgue decompositions of the same signed measure $\nu$ relative to a positive measure $\mu$.

[L1] A measure concentrated on a $\mu$-null set is singular with respect to $\mu$. ([[def-measure-concentrated-on-a-measurable-set]])

[L2] A signed or complex measure that is both absolutely continuous and singular with respect to $\mu$ is zero. ([[thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero]])

## Proof

**Proof technique:** direct.

1.1 Subtract the two decompositions to obtain $$\nu_a-\widetilde\nu_a=\widetilde\nu_s-\nu_s.$$ The left-hand side is absolutely continuous with respect to $\mu$, because differences of absolutely continuous measures are again absolutely continuous. [given, algebra]

1.2 Choose $\mu$-null sets $N$ and $\widetilde N$ on which $\nu_s$ and $\widetilde\nu_s$ are concentrated. Then $\widetilde\nu_s-\nu_s$ is concentrated on $N\cup\widetilde N$, which is still $\mu$-null, so [L1] makes the right-hand side singular with respect to $\mu$. [given, L1, choose]

2.1 The common difference in steps 1.1 and 1.2 is therefore both absolutely continuous and singular with respect to $\mu$, so [L2] forces $\nu_a-\widetilde\nu_a=0$. Substituting back into the decomposition identity gives $\nu_s-\widetilde\nu_s=0$ as well. [step 1.1, step 1.2, L2] ∎
