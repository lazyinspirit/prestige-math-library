---
id: thm-kac-return-time-formula
kind: theorem
title: Kac return-time formula without invertibility
deps: ["prop-first-return-time-and-induced-map-are-measurable", "prop-ergodic-positive-sets-sweep-out-almost-every-point", "thm-integrals-are-invariant-under-measure-preserving-maps", "thm-monotone-convergence-for-the-integral", "thm-continuity-from-above-for-measures"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig Theorem 1.7(3), pp.28–29 (specialization f=1)
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

If $T$ preserves an ergodic probability measure and $E$ is measurable with $\mu(E)>0$, then $\int_Er_E\,d\mu=1$. Equivalently, $\int_{E_\infty}r_E\,d\mu_E=1/\mu(E)$. The formula does not require invertibility.

## Facts & Assumptions

[F1] Return-time tails are measurable. [[prop-first-return-time-and-induced-map-are-measurable]].

[F2] Avoiding a positive set forever is a null event. [[prop-ergodic-positive-sets-sweep-out-almost-every-point]].

[F3] Apply integral invariance to measurable indicators. [[thm-integrals-are-invariant-under-measure-preserving-maps]].

[F4] Increasing finite tail sums converge in integral. [[thm-monotone-convergence-for-the-integral]].

[F5] Decreasing avoidance sets have limiting measure equal to their intersection. [[thm-continuity-from-above-for-measures]].

## Proof

**Given:** If $T$ preserves an ergodic probability measure and $E$ is measurable with $\mu(E)>0$, then $\int_Er_E\,d\mu=1$. Equivalently, $\int_{E_\infty}r_E\,d\mu_E=1/\mu(E)$. The formula does not require invertibility.

1.1 Put $C_0=X$ and $C_j=\bigcap_{i=0}^{j-1}T^{-i}E^c$ for $j\ge1$. Since $T^{-1}C_j=\bigcap_{i=1}^jT^{-i}E^c$, its disjoint split at E consists of $E\cap\{r_E>j\}$ and $C_{j+1}$. Indicator invariance and finite additivity therefore give $\mu(E\cap\{r_E>j\})=\mu(C_j)-\mu(C_{j+1})$ for $j\ge0$. In particular at j=0 this is $\mu(E)=1-\mu(E^c)$. [F1, F3]

2.1 For $N\ge1$, the simple function $\sum_{j=0}^{N-1}\mathbf1_{E\cap\{r_E>j\}}$ equals $\min(r_E,N)$ on E and zero elsewhere. Its integral telescopes to $1-\mu(C_N)$. The sets C_N decrease to points avoiding E at all nonnegative times, a null set by sweep-out. Since $\mu(C_0)=1$, continuity from above yields $\mu(C_N)\to0$. [step 1.1, F2, F5]

3.1 The tail sums increase pointwise to $r_E\mathbf1_E$, including infinite return times. Monotone convergence gives $\int_Er_E\,d\mu=1$. The complement of the infinitely returning core in E is measurable null, so its nonnegative integral is zero, even where $r_E=\infty$. Restriction and normalization therefore give $\int_{E_\infty}r_E\,d\mu_E=1/\mu(E)$; multiplying by the positive denominator reverses the equivalence. [step 2.1, F1, F4] ∎

