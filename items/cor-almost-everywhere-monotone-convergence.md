---
id: cor-almost-everywhere-monotone-convergence
kind: corollary
title: "Almost-everywhere monotone convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-monotone-convergence-for-the-integral, cor-integral-over-a-null-set-vanishes, cor-additivity-of-the-nonnegative-lebesgue-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Corollary 2.17"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $f$ be measurable, let $0\le f_1\le f_2\le\cdots$ be measurable, and
suppose $f_n\uparrow f$ almost
everywhere. Then
$$\int f_n\,d\mu\uparrow\int f\,d\mu.$$

## Facts & Assumptions

**Given:** A measurable nonnegative function $f$ and a nondecreasing sequence $(f_n)$ of nonnegative measurable functions with $f_n\uparrow f$ almost everywhere.

[L1] Monotone convergence holds when the pointwise increase is everywhere ([[thm-monotone-convergence-for-the-integral]]).

[L2] A nonnegative integral over a measurable null set is $0$ ([[cor-integral-over-a-null-set-vanishes]]).

[L3] The nonnegative integral is additive ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

## Proof

**Proof technique:** direct.

1.1 Let $N$ be a measurable null set outside which $f_n\uparrow f$, and define $g_n:=f_n\chi_{X\setminus N}$ and $g:=f\chi_{X\setminus N}$. [L1, given, construct]

Then $g_n\uparrow g$ everywhere, and $g$ is measurable because $f$ is. So [L1] gives $\int g_n\,d\mu\uparrow\int g\,d\mu$.

2.1 Each difference $f_n-g_n=f_n\chi_N$ and $f-g=f\chi_N$ is supported on the null set $N$. [step 1.1, L2, L3]

Therefore [L2] and [L3] give

$$\int f_n\,d\mu=\int g_n\,d\mu,\qquad \int f\,d\mu=\int g\,d\mu.$$

Substituting into step 1.1 yields the result. [step 1.1, L2, L3] ∎
