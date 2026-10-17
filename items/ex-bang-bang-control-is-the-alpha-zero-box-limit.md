---
id: ex-bang-bang-control-is-the-alpha-zero-box-limit
kind: example
title: The alpha-zero linear box problem has a bang-bang active set
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
generation:
  role: example
dependency_level: 2
deps:
  - def-pde-box-control-set
  - lem-box-control-projection-is-pointwise-clipping
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

On $E=(0,1)$ with box $0\le q\le1$, consider the separate unregularized linear functional $\mathcal L(q)=\int_0^1 s(x)q(x)\,dx$, where $s(x)=x-\frac12$. Its minimizer is $q_*(x)=1$ for $x<\frac12$ and $q_*(x)=0$ for $x>\frac12$; the value at the single switching point is immaterial in $L^2$. This is a bang-bang control (it takes only endpoint values a.e.) and is not an instance of the $\alpha>0$ strong-convexity theorem.

## Facts & Assumptions
**Given:** The $L^2(0,1)$ box, the linear objective, and Lebesgue measure on $(0,1)$.

[F1] The feasible controls satisfy $0\le q\le1$ almost everywhere ([[def-pde-box-control-set]]).

[F2] A box projection clips pointwise, but the $α=0$ linear objective is a distinct problem and has no Tikhonov term ([[lem-box-control-projection-is-pointwise-clipping]]).

[F3] A nonnegative measurable function has integral zero exactly when it vanishes almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

## Verification

1.1 If $x<1/2$, then $s(x)<0$, so $s(x)q(x)\ge s(x)$ for every $q(x)\in[0,1]$, with equality only when $q(x)=1$. If $x>1/2$, then $s(x)>0$, so $s(x)q(x)\ge0$, with equality only when $q(x)=0$. [F1, given, algebra]

2.1 Integrating the pointwise inequalities gives $\mathcal L(q)\ge\mathcal L(q_*)$. The gap $s(q-q_*)$ is nonnegative almost everywhere and integrable; if equality holds, [F3] makes it zero almost everywhere. Since $s(x)\ne0$ away from the single point $x=1/2$, equality forces the stated endpoint values almost everywhere, so the minimizer is unique as an $L^2$ equivalence class. It is bang-bang by construction. Because $\alpha=0$, the strict-convexity and unique-control conclusions that use $\alpha>0$ are not invoked. [F1, F3, step 1.1, algebra]

3.1 The exact box projection formula from [F2] concerns clipping a point to the interval; this example instead minimizes a linear integrand and reaches the interval endpoints according to the sign of $s$. Thus this is a separate limiting/example branch, not a consequence of substituting $\alpha=0$ into a formula that divides by $\alpha$. [F2, step 1.1, algebra] ∎
