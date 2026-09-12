---
id: cor-lyapunov-central-limit-theorem
kind: corollary
title: Lyapunov central limit theorem
deps: ["def-total-row-variance-and-lindeberg-condition", "thm-lindeberg-feller-central-limit-theorem-sufficiency", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "def-axiom-of-choice", "thm-real-power-laws", "def-real-power", "thm-natural-logarithm-laws", "thm-exponential-is-strictly-increasing"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, Exercise 3.4.12'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: Aldous and Chewi, Probability Theory notes, Corollary 6.2
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. Let a centered row-wise independent triangular array have finite second moments and $s_n>0$. If for some $\delta>0$ its $(2+\delta)$ moments are finite and $$s_n^{-(2+\delta)}\sum_k\mathbb E|X_{n,k}|^{2+\delta}\longrightarrow0,$$ then $s_n^{-1}\sum_kX_{n,k}\Rightarrow N(0,1)$.

## Facts & Assumptions

[F1] The unnormalized tail expression defines Lindeberg. [[def-total-row-variance-and-lindeberg-condition]].

[F2] Under AC Lindeberg implies a standard-normal limit for the normalized row sums. [[thm-lindeberg-feller-central-limit-theorem-sufficiency]].

[F3] Pointwise bounds pass to nonnegative expectations. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[F4] Positive real powers obey product and exponent laws. [[thm-real-power-laws]].

[F5] For positive a, a^r=exp(r log a); zero to a positive power is zero. [[def-real-power]].

## Proof

**Given:** Assume AC. Let a centered row-wise independent triangular array have finite second moments and $s_n>0$. If for some $\delta>0$ its $(2+\delta)$ moments are finite and $$s_n^{-(2+\delta)}\sum_k\mathbb E|X_{n,k}|^{2+\delta}\longrightarrow0,$$ then $s_n^{-1}\sum_kX_{n,k}\Rightarrow N(0,1)$.

1.1 Fix $\varepsilon>0$. On $|X_{n,k}|>\varepsilon s_n>0$, monotonicity of the positive real power gives $|X_{n,k}|^\delta>(\varepsilon s_n)^\delta$. Multiplying by $X_{n,k}^2/(\varepsilon s_n)^\delta$ gives $X_{n,k}^2\le |X_{n,k}|^{2+\delta}/(\varepsilon s_n)^\delta$ there. Off that event the truncated square is zero and the right side is nonnegative, including X=0. [F3] therefore bounds $L_n(\varepsilon)\le\varepsilon^{-\delta}s_n^{-(2+\delta)}\sum_k\mathbb E|X_{n,k}|^{2+\delta}$. The exponent simplification uses [F4]. For positive delta, monotonicity of log and exp in the defining formula [F5] gives the asserted power monotonicity. [F1, F3, F4, F5]

2.1 The right side tends to zero for this fixed positive epsilon, so Lindeberg holds for every epsilon. All hypotheses of [F2] are now satisfied: finite second moments, centered independent rows and positive total standard deviations were given. Apply it to obtain the stated limit. The positive delta is fixed across all rows; delta=0 is excluded because the displayed normalized second-moment sum would be one. AC is inherited from [F2]. [step 1.1, F2] ∎

