---
id: cor-finite-nonnegative-integral-implies-finite-almost-everywhere
kind: corollary
title: "A nonnegative measurable function with finite integral is finite almost everywhere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory Notes, Proposition 4.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.20"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

If $f:X\to[0,+\infty]$ is measurable and $\int f\,d\mu<+\infty$, then
$f(x)<+\infty$ for almost every $x$.

## Facts & Assumptions

**Given:** A nonnegative measurable function $f$ with finite integral.

[L1] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L2] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Proof

**Proof technique:** direct.

1.1 Let $F:=\{f=+\infty\}$. Then $F\subseteq\{f\ge n\}$ for every $n\ge1$, so[L1, given]
$$n\chi_F\le f.$$
By [L1],
$$n\,\mu(F)=\int n\chi_F\,d\mu\le\int f\,d\mu<+\infty.$$


2.1 If $\mu(F)>0$, the inequality in step 1.1 would fail for large $n$. [step 1.1, L2] ∎
Therefore $\mu(F)=0$, so the indicator $\chi_F$ has integral $0$ and hence
vanishes almost everywhere by [L2]. Equivalently, $f<+\infty$ almost
everywhere.
