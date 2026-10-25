---
id: thm-integral-test-for-series
kind: theorem
title: "The integral test: for $f \\ge 0$ nonincreasing on $[0,\\infty)$, $\\sum_k f(k)$ converges if and only if the sequence $\\bigl(\\int_0^N f\\bigr)_N$ is bounded, with $\\int_0^N f \\le \\sum_{k<N} f(k) \\le f(0) + \\int_0^N f$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monotonicity-of-the-integral, thm-additivity-over-subintervals, lem-integral-elementary-bounds, thm-monotone-implies-integrable, lem-integrability-on-a-subinterval, def-monotone-function, def-series, thm-nonnegative-series-bounded-partial-sums, lem-finite-sum-laws, def-finite-sum, def-sequence, def-canonical-natural, lem-of-naturals-positive, def-oriented-integral, def-bounded-set, def-interval, def-darboux-integral, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-cauchy-integral-test]
landmark: true
short: "integral test for series"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Integral test for convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integral_test_for_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Improper Riemann integrals"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
pipeline_run: null
---

## Statement

Let $f : [0,\infty) \to \mathbb{R}$ be nonincreasing ([[def-monotone-function]])
with $f(t) \ge 0$ for every $t \ge 0$. For $N \in \mathbb{N}$ write

$$J_N \;:=\; \int_0^{N} f ,$$

which is defined for every $N$: for $N \ge 1$ the restriction of $f$ to $[0,N]$
is monotone, hence bounded and integrable ([[thm-monotone-implies-integrable]]),
and $J_0 = \int_0^0 f = 0$ ([[def-oriented-integral]]). Here $N$ inside the
integral means the canonical natural $\iota(N) \in \mathbb{R}$
([[def-canonical-natural]]), as everywhere in this library. Let
$s_N := \sum_{k<N} f(k)$ be the partial sums of $\sum_k f(k)$
([[def-series]], [[def-finite-sum]]), the index $k$ ranging over $\mathbb{N}$,
which **contains $0$**. Then:

1. **The bracket.** For every $N \in \mathbb{N}$,
   $$J_N \;\le\; s_N \;\le\; f(0) + J_N .$$
2. **The test.** $(J_N)_{N\in\mathbb{N}}$ is nondecreasing, and $\sum_k f(k)$
   converges **if and only if** the set $\{\,J_N : N \in \mathbb{N}\,\}$ is
   bounded above ([[def-bounded-set]]).

**The conclusion is about a sequence of proper integrals, and that is
deliberate.** This library has not defined $\int_0^{\infty} f$ at this point in
the reading order — improper integrals are developed on a later page — so the
statement that a reader may expect, "$\sum_k f(k)$ converges if and only if
$\int_0^{\infty} f$ converges", is not available and is not made. What is proved
is the statement above, which is what that one abbreviates; the later page is
where the two are identified.

**The index starts at $0$.** Both the sum and the integral begin at $0$, because
$\mathbb{N}$ contains $0$ and a sequence is a function on $\mathbb{N}$
([[def-sequence]]). The classical statement, which starts at $1$, is the
statement about the first tail of $\sum_k f(k)$ and is not the statement above.

## Facts & Assumptions

**Given:** A nonincreasing $f : [0,\infty) \to \mathbb{R}$ with $f \ge 0$, and the notation $J_N = \int_0^N f$, $s_N = \sum_{k<N} f(k)$ for $N \in \mathbb{N}$.

[L1] A monotone function on a closed bounded interval with distinct endpoints is bounded and integrable there, as is its restriction to any closed subinterval with distinct endpoints ([[thm-monotone-implies-integrable]], [[lem-integrability-on-a-subinterval]], [[def-monotone-function]], [[def-darboux-integral]]).

[L2] If $\kappa \le u \le \mu$ on $[p,q]$ with $p<q$ and $u$ is integrable there, then $\kappa(q-p) \le \int_p^q u \le \mu(q-p)$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L3] Additivity over adjacent intervals, in the oriented form valid for arbitrary points ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]]).

[L4] Finite sums: telescoping $\sum_{k<n}(c_{k+1}-c_k) = c_n - c_0$, splitting, additivity, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] For a sequence $(a_k)$ of nonnegative reals, the partial sums are nondecreasing and $\sum a_k$ converges if and only if the set of partial sums is bounded above ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-sequence]]).

[L6] $\iota(0) = 0$, $\iota(N+1) = \iota(N)+1$, and $\iota$ is nondecreasing on $\mathbb{N}$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L7] Ordered-field arithmetic: the order is total and transitive, and adding constants preserves inequalities ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 For $k \in \mathbb{N}$ the interval $[\iota(k), \iota(k+1)]$ is nondegenerate of length $1$ by [L6], $f$ is integrable on it by [L1], and $f(k+1) \le f(t) \le f(k)$ for every $t$ in it, $f$ being nonincreasing. [given, L1, L6]

1.2 By [L3] and [L4], $J_N = \int_0^N f = \sum_{k<N}\int_k^{k+1} f$ for every $N \in \mathbb{N}$: writing $\Phi(x) := \int_0^x f$, each summand is $\Phi(k+1)-\Phi(k)$ and the sum telescopes to $\Phi(N) - \Phi(0) = J_N$. [L1, L3, L4, L6]

1.3 By [L4], $\sum_{k<N}f(k+1) = s_{N+1} - f(0)$, since splitting $s_{N+1} = \sum_{k<N+1}f(k)$ at index $1$ gives $f(0) + \sum_{j<N}f(1+j)$. [L4]

2.1 Hence $f(k+1) \le \int_{k}^{k+1} f \le f(k)$ for every $k \in \mathbb{N}$, by [L2] with $q - p = 1$. [step 1.1, L2]

3.1 Summing step 2.1 over $k < N$ with [L4] gives $\sum_{k<N} f(k+1) \;\le\; J_N \;\le\; \sum_{k<N} f(k) \;=\; s_N$, which is the left half of claim 1. [step 2.1, step 1.2, L4]

3.2 $(J_N)$ is nondecreasing: $J_{N+1} - J_N = \int_N^{N+1} f \ge 0$ by step 1.2 and [L2], since $f \ge 0$. [step 2.1, step 1.2, given, L2, L7]

4.1 So $s_{N+1} \le f(0) + J_N$ by step 3.1 and step 1.3; and $s_N \le s_{N+1}$ because $f(N) \ge 0$, so $s_N \le f(0) + J_N$, which is the right half of claim 1. [step 3.1, step 1.3, given, L4, L7]

4.2 **If $\sum_k f(k)$ converges**, then by [L5] the partial sums are bounded above, say $s_N \le S$ for every $N$, and step 3.1 gives $J_N \le s_N \le S$; so the set of $J_N$ is bounded above. [step 3.1, given, L5, L7]

5.1 **If the set of $J_N$ is bounded above**, say by a real $B$, then $s_N \le f(0) + B$ for every $N$ by step 4.1, so the partial sums are bounded above and $\sum_k f(k)$ converges by [L5], the terms $f(k)$ being nonnegative. [step 4.1, given, L5, L7]

6.1 Steps 5.1 and 4.2 are the two implications of claim 2, and step 3.2 is its first clause; claim 1 is steps 3.1 and 4.1. [step 3.1, step 4.1, step 3.2, step 5.1, step 4.2] ∎

## Remarks

- **Why the bracket is stated with $f(0)$ and not with a tail.** The two sums in step 3.1 differ by exactly the first term $f(0)$ and the last term $f(N)$; the clean two-sided statement that survives at every $N \ge 0$, including $N = 0$ where it reads $0 \le 0 \le f(0)$, is the one displayed in claim 1.

- **The version beginning at $k = 1$ is a statement about a tail.** For the family $(f(k))_{k \ge 1}$ the same argument on $[1,N]$ gives $\int_1^N f \le \sum_{k=1}^{N-1} f(k) \le f(1) + \int_1^N f$, and convergence of the two series is equivalent by [[lem-series-tail-invariance]]. Nothing above silently starts at $1$, and a reader comparing with a classical text should check which convention that text uses for $\mathbb{N}$.

- **Monotonicity of $f$ is used exactly twice**, in step 1.1, to bracket $f$ on a unit interval by its two endpoint values, and through [[thm-monotone-implies-integrable]] to know that $f$ is integrable on $[0,N]$ at all. Nonnegativity is used in three named places: to make $(J_N)$ nondecreasing in step 3.2, to pass from $s_{N+1}$ to $s_N$ in step 4.1, and to apply [[thm-nonnegative-series-bounded-partial-sums]], whose own hypothesis is that the terms are nonnegative. No claim is made here about what happens to the test if that hypothesis is dropped.
