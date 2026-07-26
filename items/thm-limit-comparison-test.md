---
id: thm-limit-comparison-test
kind: theorem
title: "For $a_k, b_k > 0$ with $a_k/b_k \\to L$: if $L \\in (0,\\infty)$ the two series share their behaviour, while $L = 0$ and $L = \\infty$ give one implication each"
status: draft
origin: session
deps: [thm-direct-comparison-test, def-real-limit, def-series, def-divergence-to-infinity, lem-series-linearity, cor-archimedean-reciprocal, def-sequence, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Limit comparison test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_comparison_test"
    - title: "T. Tao, Analysis I, 3rd ed., §7.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals with $a_k > 0$ and $b_k > 0$ for
every $k \in \mathbb{N}$, and put $q_k := a_k / b_k$. Then:

1. if $(q_k)$ converges with $\lim_k q_k = L$ for a real $L > 0$
   ([[def-real-limit]]), then $\sum a_k$ converges **if and only if** $\sum b_k$
   converges;
2. if $(q_k)$ converges with $\lim_k q_k = 0$, then convergence of $\sum b_k$
   implies convergence of $\sum a_k$; equivalently, divergence of $\sum a_k$
   implies divergence of $\sum b_k$;
3. if $(q_k)$ diverges to $+\infty$ ([[def-divergence-to-infinity]]), then
   convergence of $\sum a_k$ implies convergence of $\sum b_k$; equivalently,
   divergence of $\sum b_k$ implies divergence of $\sum a_k$.

In each clause the convergence of $(q_k)$, or its divergence to $+\infty$, is
part of the hypothesis, so the symbol $\lim_k q_k$ denotes wherever it is written
([[lem-limit-unique]]).

Neither implication in claim 2 can be reversed, and by symmetry neither can the
one in claim 3; the companion page exhibits a pair with $\lim_k q_k = 0$,
$\sum a_k$ convergent and $\sum b_k$ divergent.

For families from a general starting index $m$ the statement is the same, applied
to the shifted sequences $j \mapsto a_{j+m}$ and $j \mapsto b_{j+m}$
([[def-series]]).

**On the third regime.** "$L = \infty$" is written here as divergence of $(q_k)$
to $+\infty$ in the sense of [[def-divergence-to-infinity]], and never as a limit
equation with an infinite right-hand side. A sequence diverging to $+\infty$ has
no limit in $\mathbb{R}$, and this library does not write $\lim q_k = +\infty$.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals with $a_k > 0$ and $b_k > 0$ for every $k$, the quotients $q_k = a_k/b_k$, and the assumption that one of the three regimes of the Statement holds: $(q_k)$ converges with $\lim_k q_k = L$ for some real $L > 0$; or $(q_k)$ converges with $\lim_k q_k = 0$; or $(q_k)$ diverges to $+\infty$ ([[lem-limit-unique]]).

[L1] Convergence to $x$ means: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$; and the same holds for every *real* $\varepsilon > 0$, since every real $\varepsilon > 0$ exceeds some rational $1/n$ with $n \ge 1$ natural ([[def-real-limit]], [[cor-archimedean-reciprocal]], [[def-sequence]]).

[L2] $q_k \to +\infty$ means: for every real $M$ there is $K$ with $q_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L3] Direct comparison: if $0 \le x_k \le y_k$ for all $k$ from some index on, then convergence of $\sum y_k$ gives convergence of $\sum x_k$ ([[thm-direct-comparison-test]]).

[L4] For $c \ne 0$: $\sum c\,x_k$ converges if and only if $\sum x_k$ converges ([[lem-series-linearity]]).

[L5] Since $b_k > 0$, the identity $a_k = q_k b_k$ holds for every $k$, and multiplying an inequality between reals by $b_k > 0$ preserves it ([[def-series]]).

## Proof

**Proof technique:** cases.

1.1 Assume $(q_k)$ converges with $\lim_k q_k = L$ for a real $L > 0$. [assume-case pos]

1.2 Assume instead $(q_k)$ converges with $\lim_k q_k = 0$. [assume-case zero]

1.3 Assume instead $(q_k)$ diverges to $+\infty$. [assume-case inf]

2.1 In the case $\lim_k q_k = L > 0$, apply [L1] with the real tolerance $L/2 > 0$: there is $K$ with $|q_k - L| < L/2$, hence $L/2 < q_k < 3L/2$, for all $k \ge K$. [step 1.1, L1, choose]

2.2 In the case $\lim_k q_k = 0$, apply [L1] with the rational tolerance $1$: there is $K$ with $|q_k| < 1$, hence $q_k < 1$, for all $k \ge K$. [step 1.2, L1, choose]

2.3 In the case $q_k \to +\infty$, apply [L2] with $M = 1$: there is $K$ with $q_k > 1$ for all $k \ge K$. [step 1.3, L2, choose]

3.1 In the case $\lim_k q_k = L > 0$, multiplying by $b_k > 0$ turns step 2.1 into $(L/2)\,b_k < a_k < (3L/2)\,b_k$ for all $k \ge K$, and all three quantities are positive. [step 2.1, L5, algebra]

3.2 In the case $\lim_k q_k = 0$, multiplying by $b_k > 0$ turns step 2.2 into $0 < a_k < b_k$ for all $k \ge K$. [step 2.2, L5, algebra]

3.3 In the case $q_k \to +\infty$, multiplying by $b_k > 0$ turns step 2.3 into $0 < b_k < a_k$ for all $k \ge K$. [step 2.3, L5, algebra]

4.1 In the case $L > 0$: if $\sum b_k$ converges then so does $\sum (3L/2)b_k$, and $0 \le a_k \le (3L/2) b_k$ for $k \ge K$, so $\sum a_k$ converges. [step 3.1, L3, L4]

4.2 In the case $L > 0$: if $\sum a_k$ converges then, since $0 \le (L/2)b_k \le a_k$ for $k \ge K$, the series $\sum (L/2) b_k$ converges, and $L/2 \ne 0$ gives convergence of $\sum b_k$. [step 3.1, L3, L4]

4.3 In the case $\lim_k q_k = 0$: $0 \le a_k \le b_k$ for $k \ge K$, so convergence of $\sum b_k$ gives convergence of $\sum a_k$, and the contrapositive is the divergence form. [step 3.2, L3]

4.4 In the case $q_k \to +\infty$: $0 \le b_k \le a_k$ for $k \ge K$, so convergence of $\sum a_k$ gives convergence of $\sum b_k$, and the contrapositive is the divergence form. [step 3.3, L3]

5.1 The two implications in the case $L > 0$ are the two directions of claim 1, and the remaining two cases give claims 2 and 3. The three assumed regimes are the cases of the disjunction in the Given, and they exhaust it, so every instance of the theorem is covered: outside those three regimes each of the three implications is vacuous, its hypothesis being false. [step 4.1, step 4.2, step 4.3, step 4.4, cases-exhaustive] ∎

## Remarks

- **Why the three regimes are treated as one proof.** The Statement is a conjunction of three implications, each with its own hypothesis on $(q_k)$. Fixing the two sequences and arguing by cases on which regime holds proves all three at once, and costs nothing: if none of the regimes holds, every one of the three implications is vacuously true.

- **Positivity of $(b_k)$ is needed twice.** It is what makes $q_k$ defined at all, and it is what lets an inequality between the $q_k$ be multiplied through to an inequality between the $a_k$ and the $b_k$ without reversing. Positivity of $(a_k)$ is what supplies the lower bound $0$ that the direct comparison test requires.

- **The limit is only used through an eventual two-sided estimate.** No step needs the exact value of $L$, only that $q_k$ is eventually trapped strictly between two positive multiples of it. That is why the test still works when the quotients merely stay between two positive constants, and why the hypothesis $\lim_k q_k = L$ is stronger than what the proof consumes.
