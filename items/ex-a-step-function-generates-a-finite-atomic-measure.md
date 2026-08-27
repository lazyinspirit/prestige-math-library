---
id: ex-a-step-function-generates-a-finite-atomic-measure
kind: example
title: "A step function generates a finite atomic measure"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-dirac-measure, prop-dirac-measure-is-a-probability-measure, thm-nonnegative-weighted-sums-of-measures, thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

Fix numbers $x_1 < \cdots < x_m$ and positive masses $\alpha_1,\dots,\alpha_m$,
and define

$$F(x) := \sum_{x_j \le x} \alpha_j.$$

Then the Lebesgue-Stieltjes measure of $F$ is the finite atomic measure

$$\mu_F = \sum_{j=1}^m \alpha_j\,\delta_{x_j}.$$

## Facts & Assumptions

**Given:** Points $x_1 < \cdots < x_m$, positive numbers $\alpha_1,\dots,\alpha_m$, the step function $F(x)=\sum_{x_j \le x}\alpha_j$, and its Lebesgue-Stieltjes measure $\mu_F$.

[L1] Finite weighted sums of Dirac measures are measures. ([[prop-dirac-measure-is-a-probability-measure]], [[thm-nonnegative-weighted-sums-of-measures]])

[L2] A Borel measure on $\mathbb{R}$ finite on compact sets is uniquely determined by its values on half-open intervals. ([[thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r]])

## Verification

**Proof technique:** direct.

1.1 Let $\nu := \sum_{j=1}^m \alpha_j\,\delta_{x_j}$. By [L1], this is a Borel measure on $\mathbb{R}$. [L1]

2.1 For every $a<b$, [given, step 1.1, algebra]

$$\nu((a,b]) = \sum_{a < x_j \le b} \alpha_j.$$

On the other hand, because $F(x)=\sum_{x_j \le x}\alpha_j$, one has

$$F(b)-F(a) = \sum_{x_j \le b}\alpha_j - \sum_{x_j \le a}\alpha_j = \sum_{a < x_j \le b}\alpha_j = \nu((a,b]).$$

So $\mu_F$ and $\nu$ agree on every half-open interval $(a,b]$. [given, step 1.1, algebra]

3.1 Both $\mu_F$ and $\nu$ are Borel measures on $\mathbb{R}$ finite on [step 2.1, L2] compact sets. By step 2.1 and [L2], they are equal on every Borel set. Thus $\mu_F = \sum_{j=1}^m \alpha_j\,\delta_{x_j}$, which is the claimed formula. [step 2.1, L2] ∎
