---
id: ex-arctangent-generates-a-borel-probability-measure
kind: example
title: "The arctangent distribution function generates a Borel probability measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuity-from-below-for-measures, thm-existence-of-the-lebesgue-stieltjes-measure]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

Assume the Axiom of Countable Choice and let

$$F(x) := \frac{\arctan(x)}{\pi} + \frac12.$$

Then $F$ is increasing and continuous, so it defines a Lebesgue-Stieltjes
measure $\mu_F$. Its half-open interval values are

$$\mu_F((a,b]) = \frac{\arctan(b)-\arctan(a)}{\pi},$$

and $\mu_F$ is a probability measure.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the function
$F(x)=\arctan(x)/\pi + 1/2$, and its Lebesgue-Stieltjes
measure $\mu_F$.

[L1] Assuming Countable Choice, every increasing right-continuous function defines a
Lebesgue-Stieltjes measure, with half-open interval values given by increments.
([[thm-existence-of-the-lebesgue-stieltjes-measure]])

[L2] Measures are continuous from below along increasing sets.
([[thm-continuity-from-below-for-measures]])

## Verification

**Proof technique:** direct.

1.1 The function $F$ is increasing and continuous, hence right-continuous, so [L1] gives a measure $\mu_F$ with the following interval values. [given, L1]

$$\mu_F((a,b]) = F(b)-F(a) = \frac{\arctan(b)-\arctan(a)}{\pi}.$$

2.1 The intervals $(-n-1,n+1]$ increase to $\mathbb{R}$. [step 1.1, L2]

$$\mu_F((-n-1,n+1]) = F(n+1)-F(-n-1) = \frac{2\arctan(n+1)}{\pi}.$$

Because $\arctan(n+1) \to \pi/2$, [L2] gives
$\mu_F(\mathbb{R})=\lim_n 2\arctan(n+1)/\pi = 1$. So $\mu_F$ is a probability
measure. [step 1.1, L2] ∎
