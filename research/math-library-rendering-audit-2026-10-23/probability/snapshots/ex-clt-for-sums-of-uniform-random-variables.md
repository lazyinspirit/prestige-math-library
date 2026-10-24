---
id: ex-clt-for-sums-of-uniform-random-variables
kind: example
title: CLT for sums of uniform random variables
deps: ["thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-integration-against-a-density", "def-integrable-real-and-complex-functions-and-their-integrals", "thm-ftc-second-part", "lem-derivative-of-a-power", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "cor-countable-independent-copies-exist", "lem-ac-supplies-sequential-choices-for-probability-constructions", "thm-lindeberg-levy-iid-central-limit-theorem", "thm-continuous-implies-integrable", "def-moments-variance-and-covariance", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Section 3.4.1'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Aldous and Chewi, Probability Theory notes, Theorem 5.2
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC. If $(U_k)$ are iid with density $\mathbf1_{[0,1]}$, then $$\sqrt{12/n}\left(\sum_{k=1}^nU_k-n/2\right)\Rightarrow N(0,1).$$

## Facts & Assumptions

[F1] The indicator density of [0,1] defines a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F2] For nonnegative measurable functions, integration under this law equals integration of the function times its density. [[thm-integration-against-a-density]].

[F3] Continuous polynomial derivatives integrate to primitive differences. [[thm-ftc-second-part]].

[F4] The derivatives of the relevant integer powers have the usual coefficients. [[lem-derivative-of-a-power]].

[F5] The compact Riemann and Lebesgue integrals agree under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F6] Under DC and countable choice a given law has countably many independent copies. [[cor-countable-independent-copies-exist]].

[F7] AC implies the two choice principles required for independent copies. [[lem-ac-supplies-sequential-choices-for-probability-constructions]].

[F8] The iid CLT applies to finite positive variance. [[thm-lindeberg-levy-iid-central-limit-theorem]].

[F9] Continuous compact-interval powers are Riemann integrable. [[thm-continuous-implies-integrable]].

[F10] A real integral is the integral of the positive part minus the integral of the negative part. [[def-integrable-real-and-complex-functions-and-their-integrals]].

## Verification

**Given:** Assume AC. If $(U_k)$ are iid with density $\mathbf1_{[0,1]}$, then $$\sqrt{12/n}\left(\sum_{k=1}^nU_k-n/2\right)\Rightarrow N(0,1).$$

1.1 The nonnegative Borel density $\mathbf1_{[0,1]}$ defines a measure by [F1]. On [0,1] the primitives x, $x^2/2$ and $x^3/3$ have derivatives 1,x and $x^2$ by [F4]. Those derivatives are continuous and integrable by [F9], so [F3] and [F5] give integrals 1,1/2 and 1/3 respectively. Thus the measure is a probability. Apply [F2] separately to the globally nonnegative functions $x^+=\max\{x,0\}$ and $x^-=\max\{-x,0\}$. Their products with the density are respectively $x\mathbf1_{[0,1]}$ and zero, so [F10] gives $\mathbb EU=1/2-0=1/2$. Applying [F2] to the nonnegative function $x^2$ gives $\mathbb EU^2=1/3$, hence $\operatorname{Var}(U)=1/3-1/4=1/12$. The density-supported integrands are bounded, so no tail or improper integral is involved. [F1, F2, F3, F4, F5, F9, F10]

2.1 If copies need realization, [F7] lets AC supply the DC and countable choice in [F6]; the resulting coordinate variables have exactly this density law and are iid. For given iid U_k the same moment computation applies. [F8] gives $(\sum_kU_k-n/2)/\sqrt{n/12}\Rightarrow N(0,1)$, and $1/\sqrt{n/12}=\sqrt{12/n}$ proves the displayed form. The variance is strictly positive and n>=1, so the normalization is defined. AC is used in the integral bridge, copy construction when needed, and CLT supplier. [step 1.1, F6, F7, F8] ∎
