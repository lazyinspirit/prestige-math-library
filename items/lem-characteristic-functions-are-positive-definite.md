---
id: "lem-characteristic-functions-are-positive-definite"
kind: "lemma"
title: "Characteristic functions are positive definite"
deps: ["def-characteristic-function-of-a-real-random-variable", "def-positive-definite-function-on-the-real-line", "thm-complex-exponential-addition-and-real-extension", "thm-linearity-of-the-lebesgue-integral-on-l-one"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Every characteristic function is positive definite.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] The characteristic function integrates the exponential. [[def-characteristic-function-of-a-real-random-variable]].

[F2] Positive definiteness is the finite nonnegative quadratic-form condition. [[def-positive-definite-function-on-the-real-line]].

[F3] Products of exponentials add exponents. [[thm-complex-exponential-addition-and-real-extension]].

[F4] Integration commutes with finite complex linear combinations. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

## Proof

**Proof technique:** direct.

1.1 Fix $n\ge1$, real $t_j$ and complex $z_j$. Set $Z(x)=\sum_{j=1}^n z_j e^{it_jx}$. By the unit-modulus formula in the characteristic-function definition, $|Z(x)|\le\sum_j|z_j|$, so $|Z|^2$ is integrable against the probability law $\mu$. Moreover $\overline{e^{it_kx}}=e^{-it_kx}$, so $$|Z(x)|^2=\sum_{j,k}z_j\overline{z_k}e^{i(t_j-t_k)x}.$$ [F1, F3]

2.1 Integrating this finite sum gives $$\sum_{j,k}z_j\overline{z_k}\varphi_\mu(t_j-t_k)=\int |Z(x)|^2\,\mu(dx)\ge0.$$ The integral is real because its integrand is real and nonnegative. This verifies every quadratic form required by the definition. [step 1.1, F1, F2, F4] ∎
