---
id: thm-dirichlet-test
kind: theorem
title: "Dirichlet's test: if the partial sums of $\\sum a_k$ are bounded and $(b_k)$ is nonincreasing with $b_k \\to 0$, then $\\sum a_k b_k$ converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-abel-summation-by-parts, def-series, def-monotone-sequence, def-bounded-set, lem-telescoping-series, thm-direct-comparison-test, lem-absolute-convergence-implies-convergence, lem-series-linearity, lem-null-times-bounded, thm-algebra-of-limits, lem-limit-preserves-order, lem-limit-of-tail, lem-of-abs-value, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Dirichlet's test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet%27s_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Thomson, Bruckner, and Bruckner, Elementary Real Analysis"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals, and let $A_n = \sum_{k<n} a_k$ be
the partial sums of $\sum a_k$ ([[def-series]]). Suppose that

1. the range $\{\, A_n : n \in \mathbb{N} \,\}$ is bounded ([[def-bounded-set]]),
   that is there is a real $M \ge 0$ with $|A_n| \le M$ for every $n$; and
2. $(b_k)$ is nonincreasing ([[def-monotone-sequence]]) and converges to $0$
   ([[def-real-limit]]).

Then $\sum a_k b_k$ converges.

Under hypothesis 2 the terms $b_k$ are automatically nonnegative, and the proof
says so before using it: a nonincreasing sequence is bounded below by each of its
own later terms, and passing to the limit gives $b_k \ge 0$
([[lem-limit-preserves-order]]).

**Nothing is assumed about $\sum a_k$ itself.** Its partial sums need only stay
bounded; they need not converge. That is what makes this test the source of the
alternating series test ([[thm-alternating-series-test]]) and of examples whose
sign pattern is not alternating at all.

## Facts & Assumptions

**Given:** Sequences $(a_k)$ and $(b_k)$ of reals with $A_n = \sum_{k<n} a_k$ bounded in absolute value, and $(b_k)$ nonincreasing with $b_k \to 0$.

[L1] Abel summation by parts: for every $n \ge 1$, $\sum_{k<n} a_k b_k = A_n b_{n-1} - \sum_{k<n-1} A_{k+1}(b_{k+1} - b_k)$ ([[lem-abel-summation-by-parts]]).

[L2] Nonincreasing means $b_j \ge b_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L3] Limits preserve non-strict inequalities holding eventually ([[lem-limit-preserves-order]], [[def-real-limit]]).

[L4] Telescoping: with $d_k := b_k - b_{k+1}$, the partial sums of $\sum d_k$ are $b_0 - b_n$, and $\sum d_k$ converges if and only if $(b_k)$ converges, with sum $b_0 - \lim_k b_k$ ([[lem-telescoping-series]]).

[L5] Direct comparison: if $0 \le x_k \le y_k$ from some index on and $\sum y_k$ converges, then $\sum x_k$ converges ([[thm-direct-comparison-test]]).

[L6] If $\sum |x_k|$ converges then $\sum x_k$ converges ([[lem-absolute-convergence-implies-convergence]]).

[L7] Linearity: if $\sum x_k$ converges then so does $\sum c\,x_k$ for every real $c$ ([[lem-series-linearity]]).

[L8] A null sequence times a bounded sequence is null ([[lem-null-times-bounded]]).

[L9] Algebra of limits for differences of convergent sequences ([[thm-algebra-of-limits]]).

[L10] A sequence converges to $x$ if and only if some tail of it converges to $x$ ([[lem-limit-of-tail]]).

[L11] Absolute value: $|xy| = |x||y|$, $|x| \ge 0$, and $|-x| = |x|$ ([[lem-of-abs-value]]).

[L12] A bounded set of reals admits a bound in absolute value ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 Fix a real $M \ge 0$ with $|A_n| \le M$ for every $n \in \mathbb{N}$. [given, L12, choose]

1.2 For each fixed $k$ the inequality $b_m \le b_k$ holds for all $m \ge k$, and $(b_m)_m$ converges to $0$ while the constant sequence with value $b_k$ converges to $b_k$; hence $0 \le b_k$. [given, L2, L3]

1.3 Put $d_k := b_k - b_{k+1}$ and $c_k := A_{k+1}(b_{k+1} - b_k)$ for $k \in \mathbb{N}$, and let $s_n := \sum_{k<n} a_k b_k$, $t_n := \sum_{k<n} c_k$ and $u_n := A_{n+1} b_n$. [given]

1.4 Each $d_k \ge 0$, since $(b_k)$ is nonincreasing; and $\sum d_k$ converges, with sum $b_0 - 0 = b_0$, because $(b_k)$ converges to $0$. [given, L2, L4]

2.1 For every $k$, $|c_k| = |A_{k+1}|\,|b_{k+1} - b_k| = |A_{k+1}|\, d_k \le M d_k$, using $b_{k+1} - b_k = -d_k$ and $d_k \ge 0$. [step 1.1, step 1.3, step 1.4, L11]

2.2 The sequence $(A_{n+1})_{n}$ is bounded by $M$ and $(b_n)$ converges to $0$, so $u_n = A_{n+1} b_n$ converges to $0$. [step 1.1, step 1.3, given, L8]

2.3 The series $\sum M d_k$ converges, by step 1.4 and linearity. [step 1.4, L7]

2.4 For every $n \in \mathbb{N}$, applying [L1] at the index $n+1 \ge 1$ gives $s_{n+1} = A_{n+1} b_n - \sum_{k<n} A_{k+1}(b_{k+1}-b_k) = u_n - t_n$. [step 1.3, L1]

3.1 Since $0 \le |c_k| \le M d_k$ for every $k$, the series $\sum |c_k|$ converges by comparison, and therefore $\sum c_k$ converges; write $T$ for its sum, so that $t_n \to T$. [step 2.1, step 2.3, L5, L6]

4.1 By step 2.2, step 3.1 and the algebra of limits, $s_{n+1} \to 0 - T = -T$ as $n \to \infty$. [step 2.2, step 3.1, step 2.4, L9]

5.1 The sequence $(s_{n+1})_{n \in \mathbb{N}}$ is the first tail of $(s_n)$, so $(s_n)$ itself converges to $-T$; that is, $\sum a_k b_k$ converges, with sum $-T$. [step 4.1, L10] ∎

## Remarks

- **Where each hypothesis is used, and none is decorative.** Boundedness of $(A_n)$ is used twice: once to bound $|c_k|$ in step 2.1, and once to kill the boundary term in step 2.2. Monotonicity of $(b_k)$ is what makes $|b_{k+1} - b_k|$ equal to $b_k - b_{k+1}$, so that the bound in step 2.1 telescopes; without it the differences need not sum to anything. And $b_k \to 0$ is used both in the telescoping sum of step 1.4 and in the boundary term of step 2.2.

- **Why *nonincreasing* and not *monotone*, although either would do.** Hypothesis 2 could equally be stated with "monotone", and the theorem would still be true: a nondecreasing $(b_k)$ converging to $0$ is nonpositive, so $(-b_k)$ is nonincreasing and converges to $0$, and applying the theorem to it gives convergence of $\sum a_k(-b_k)$ and hence of $\sum a_k b_k$ ([[lem-series-linearity]]). What "monotone" may not be weakened to is "monotone and bounded": a monotone $(b_k)$ with a nonzero limit is not covered, and for such a factor the conclusion fails in general. The nonincreasing form is chosen here because it is the form the proof uses, and because it makes $b_k \ge 0$ immediate. [[thm-abel-test]] is the result that handles monotone bounded factors, and it has a different hypothesis on $\sum a_k$.

- **The sum is not computed.** The proof produces the limit as $-T$, where $T$ is the sum of a series that the argument only proves convergent. This is a convergence test and nothing more.
