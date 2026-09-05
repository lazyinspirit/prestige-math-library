---
id: thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions
kind: theorem
title: "Fubini's theorem on term-by-term differentiation for pointwise sums of nondecreasing functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice, def-sequence, thm-countable-union-of-null-is-null, thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun, thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Statement

Assume the Axiom of Countable Choice.

Let $(F_n)_{n \ge 1}$ be a sequence ([[def-sequence]]) of nondecreasing
functions on $[a,b]$, and suppose that the pointwise sum

$$
F(x) := \sum_{n \ge 1} F_n(x)
$$

converges to a finite real number for every $x \in [a,b]$. Then $F$ is
nondecreasing, and for almost every $x \in (a,b)$,

$$
F'(x) = \sum_{n \ge 1} F_n'(x).
$$

## Facts & Assumptions

**Given:** Countable choice and a pointwise convergent series of nondecreasing functions $F = \sum_{n \ge 1} F_n$ on $[a,b]$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 Every partial sum $G_N := \sum_{n=1}^{N} F_n$ and every tail $H_N := \sum_{n>N} F_n = F-G_N$ is nondecreasing. By [[thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun]], the derivatives of $F$, all $F_n$, all $G_N$, and all $H_N$ exist on a common full-measure set. On that set, $G_N' = \sum_{n=1}^{N} F_n'$ and $H_N' = F' - G_N'$. [given]

2.1 Fix $N$. Since $H_N$ is increasing, the derivative bound theorem [[thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase]] gives $0 \le \int_a^b \left(F' - \sum_{n=1}^{N} F_n'\right)\,d\lambda = \int_a^b H_N'(x)\,d\lambda(x) \le H_N(b)-H_N(a)$. But $H_N(b)-H_N(a) \to 0$ because the series defining $F(a)$ and $F(b)$ both converge. [step 1.1]

3.1 The nonnegative functions $F' - \sum_{n=1}^{N}F_n'$ decrease pointwise almost everywhere to $F' - \sum_{n \ge 1}F_n'$. Step 2.1 therefore forces $\int_a^b \left(F' - \sum_{n \ge 1} F_n'\right)\,d\lambda = 0$. Since the integrand is nonnegative, it vanishes almost everywhere. Thus $F' = \sum_{n \ge 1}F_n'$ almost everywhere. [step 2.1]

4.1 Steps 1.1 through 3.1 prove the theorem. [step 1.1, step 2.1, step 3.1] ∎
