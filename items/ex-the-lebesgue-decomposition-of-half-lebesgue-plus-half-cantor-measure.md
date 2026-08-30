---
id: ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure
kind: example
title: "The Lebesgue decomposition of one half Lebesgue plus one half Cantor measure"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures, prop-cantor-measure-is-a-singular-atomless-probability-measure]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Example

Assume the Axiom of Countable Choice. Let
$$\nu:=\tfrac12\,\lambda\!\restriction_{[0,1]}+\tfrac12\,\mu_c,$$
where $\mu_c$ is the Cantor measure. Then the Lebesgue decomposition of $\nu$ relative to $\lambda$ is
$$\nu_a=\tfrac12\,\lambda\!\restriction_{[0,1]},\qquad \nu_s=\tfrac12\,\mu_c.$$

## Facts & Assumptions

**Given:** The measure $\nu=\tfrac12\,\lambda\!\restriction_{[0,1]}+\tfrac12\,\mu_c$.

[L1] The Cantor measure is singular with respect to Lebesgue measure. ([[prop-cantor-measure-is-a-singular-atomless-probability-measure]])

[A1] The restriction $\lambda\!\restriction_{[0,1]}$ is absolutely continuous with respect to $\lambda$ because intersection with $[0,1]$ preserves Lebesgue-null sets.

[L3] Under a common finite exhaustion, the Lebesgue decomposition relative to a
fixed positive measure is unique
([[thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures]]).

## Verification

**Proof technique:** direct.

1.1 The measure $\tfrac12\,\lambda\!\restriction_{[0,1]}$ is absolutely continuous with respect to $\lambda$ by [A1], while $\tfrac12\,\mu_c$ is singular with respect to $\lambda$ by [L1]. Their sum is $\nu$ by definition. [A1, L1, given]

2.1 The sets $X_n=[-n,n]$ form a common finite exhaustion for $\lambda$ and the finite measure $\nu$. Since $\nu=\tfrac12\,\lambda\!\restriction_{[0,1]}+\tfrac12\,\mu_c$ is already a decomposition into an absolutely continuous part and a singular part, [L3] forces it to be the Lebesgue decomposition of $\nu$ relative to $\lambda$. [step 1.1, L3] ∎
