---
id: cor-additivity-of-the-nonnegative-lebesgue-integral
kind: corollary
title: "Additivity of the nonnegative Lebesgue integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, prop-closure-properties-of-measurable-functions-used-by-the-integral, prop-basic-properties-of-the-nonnegative-simple-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Proposition 4.7"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

If $f,g:X\to[0,+\infty]$ are measurable, then
$$\int(f+g)\,d\mu=\int f\,d\mu+\int g\,d\mu.$$

## Facts & Assumptions

**Given:** Nonnegative measurable functions $f$ and $g$.

[L1] Nonnegative measurable functions admit increasing simple approximations ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]).

[L2] The sum of two measurable nonnegative functions is measurable, and pointwise increasing limits stay measurable ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

[L3] Monotone convergence holds for the nonnegative integral ([[thm-monotone-convergence-for-the-integral]]).

[L4] On simple functions, the nonnegative integral agrees with the simple integral, and the latter is additive ([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[prop-basic-properties-of-the-nonnegative-simple-integral]]).

## Proof

**Proof technique:** direct.

1.1 Choose simple functions $s_n\uparrow f$ and $t_n\uparrow g$ by [L1]. Then [L1, L2, construct]
$s_n+t_n$ is simple for each $n$, and $s_n+t_n\uparrow f+g$ by [L2].

2.1 By [L3] and [L4],[step 1.1, L3, L4, algebra] ∎
$$\int(f+g)\,d\mu=\lim_n\int(s_n+t_n)\,d\mu =\lim_n\left(\int s_n\,d\mu+\int t_n\,d\mu\right) =\int f\,d\mu+\int g\,d\mu.$$

