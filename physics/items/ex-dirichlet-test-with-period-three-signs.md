---
id: ex-dirichlet-test-with-period-three-signs
kind: example
title: "The period-three pattern $1, 1, -2$ has partial sums in $\\{0,1,2\\}$, so $\\sum a_k/(k+1)$ converges by Dirichlet's test although the alternating series test does not apply"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [thm-dirichlet-test, thm-alternating-series-test, lem-alternating-sequence, thm-recursion, thm-induction-principle, def-absolute-and-conditional-convergence, thm-p-series-rational, thm-direct-comparison-test, def-monotone-sequence, def-bounded-set, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-rational-power, thm-nth-roots-exist, def-integer-power, def-finite-sum, lem-finite-sum-laws, def-series, def-real-limit]
justified_by: []
aliases: []
landmark: false
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
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
pipeline_run: null
---

## Example

Let $(g_k)$ be the sequence of naturals with values in $\{0,1,2\}$ defined by the
recursion $g_0 = 0$ and $g_{k+1} = g_k + 1$ for $g_k \in \{0,1\}$, $g_{k+1} = 0$
for $g_k = 2$ ([[thm-recursion]]), and put

$$a_k := \begin{cases} 1 & \text{if } g_k \in \{0,1\}, \\ -2 & \text{if } g_k = 2, \end{cases} \qquad b_k := \frac{1}{\iota(k+1)} .$$

So $(a_k)$ is the repeating pattern $1, 1, -2, 1, 1, -2, \dots$ Its partial sums
$A_n = \sum_{k<n} a_k$ take only the values $0, 1, 2$, hence are bounded
([[def-bounded-set]]), while $(b_k)$ is nonincreasing with $b_k \to 0$. By
Dirichlet's test ([[thm-dirichlet-test]]) the series

$$\sum_k \frac{a_k}{k+1}$$

converges. It converges **conditionally**
([[def-absolute-and-conditional-convergence]]), since $|a_k| \ge 1$ for every $k$
and $\sum 1/\iota(k+1)$ is the harmonic series.

**The alternating series test does not reach this example.**
[[thm-alternating-series-test]] is a statement about $\sum \varepsilon_k b_k$ for
the alternating sequence $(\varepsilon_k)$, whose values strictly alternate in
sign; here $a_0 = a_1 = 1$, so $(a_k)$ is not that sequence, nor any constant
multiple of it, and no reading of the test applies. This is the item on the page
showing that Dirichlet's test is strictly stronger than the Leibniz criterion, and
an alternating witness would not show it.

## Facts & Assumptions

**Given:** The sequence $(g_k)$ with values in $\{0,1,2\}$ defined by the displayed recursion, the terms $a_k \in \{1,-2\}$ read off from it, $b_k = 1/\iota(k+1)$, and the partial sums $A_n = \sum_{k<n} a_k$.

[L1] The recursion theorem and the principle of induction ([[thm-recursion]], [[thm-induction-principle]]).

[L2] Partial sums satisfy $A_0 = 0$ and $A_{n+1} = A_n + a_n$ ([[def-series]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] The canonical naturals are positive for $n \ge 1$ and strictly increasing; reciprocation reverses the order on the positives; and for every real $\varepsilon > 0$ there is $n \ge 1$ with $1/\iota(n) < \varepsilon$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[cor-archimedean-reciprocal]]).

[L4] Dirichlet's test: bounded partial sums of $\sum a_k$ and a nonincreasing $(b_k)$ with $b_k \to 0$ give convergence of $\sum a_k b_k$ ([[thm-dirichlet-test]], [[def-monotone-sequence]], [[def-bounded-set]], [[def-real-limit]]).

[L5] $\sum_{k\ge1}1/k^{p}$ converges if and only if $p > 1$, with $\iota(k)^{1} = \iota(k)$; and $\sum_{k\ge1}x_k$ is the series of $j \mapsto x_{j+1}$ ([[thm-p-series-rational]], [[def-rational-power]], [[thm-nth-roots-exist]], [[def-integer-power]], [[def-series]]).

[L6] Direct comparison, in its divergence form: if $0 \le x_k \le y_k$ from some index on and $\sum x_k$ diverges then $\sum y_k$ diverges ([[thm-direct-comparison-test]]).

[L7] Absolute value: $|x| \ge 0$ and $|xy| = |x|\,|y|$ ([[lem-of-abs-value]]).

[L8] Absolute and conditional convergence ([[def-absolute-and-conditional-convergence]]).

[L9] The alternating series test is stated for $\sum \varepsilon_k b_k$ with $(\varepsilon_k)$ the alternating sequence, which satisfies $\varepsilon_0 = 1$ and $\varepsilon_{k+1} = -\varepsilon_k$ ([[thm-alternating-series-test]], [[lem-alternating-sequence]]).

## Verification

**Proof technique:** direct.

1.1 The recursion defines $(g_k)$ as a function $\mathbb{N} \to \{0,1,2\}$, the transition being a total function of the set $\{0,1,2\}$ to itself; hence $(a_k)$ is a well-defined sequence of reals with values in $\{1, -2\}$. [given, L1]

1.2 Every $b_k = 1/\iota(k+1)$ is positive, $(b_k)$ is nonincreasing since $0 < \iota(k+1) < \iota(k+2)$, and $b_k \to 0$: given a rational $\varepsilon > 0$, an $n \ge 1$ with $1/\iota(n) < \varepsilon$ gives $b_k \le 1/\iota(n) < \varepsilon$ for every $k \ge n$. [given, L3]

2.1 An induction gives $A_n = \iota(g_n)$ for every $n$: at $n = 0$ both sides are $0$; and if $A_n = \iota(g_n)$ then, when $g_n \in \{0,1\}$ we have $a_n = 1$ and $g_{n+1} = g_n + 1$, so $A_{n+1} = \iota(g_n) + 1 = \iota(g_{n+1})$, while when $g_n = 2$ we have $a_n = -2$ and $g_{n+1} = 0$, so $A_{n+1} = \iota(2) - 2 = 0 = \iota(g_{n+1})$. [step 1.1, L1, L2]

2.2 For every $k$, $|a_k b_k| = |a_k| b_k \ge b_k = 1/\iota(k+1) \ge 0$, since $|a_k|$ is $1$ or $2$. [step 1.1, step 1.2, L7]

3.1 Hence $A_n \in \{0, 1, 2\}$ for every $n$ and $|A_n| \le 2$: the range of the partial sums is bounded. [step 2.1, L7]

3.2 The series $\sum_k 1/\iota(k+1)$ is the $p$-series $\sum_{k\ge1}1/k$ at $p = 1$, which diverges; so by comparison $\sum_k |a_k b_k|$ diverges. [step 2.2, L5, L6]

4.1 By Dirichlet's test, $\sum_k a_k b_k$ converges. [step 3.1, step 1.2, L4]

5.1 Therefore $\sum_k a_k b_k$ converges conditionally: it converges by step 4.1 and does not converge absolutely by step 3.2. [step 4.1, step 3.2, L8]

6.1 The alternating series test does not apply to this series: it is a statement about the alternating sequence $(\varepsilon_k)$, for which $\varepsilon_0 = 1$ and $\varepsilon_1 = -1$, whereas here $a_0 = a_1 = 1$. [step 1.1, L9] ∎

## Remarks

- **Dirichlet's test needs only boundedness of the partial sums.** Here they cycle through $0, 1, 2$ and never converge, so $\sum a_k$ itself diverges; the test nevertheless applies, and that is precisely what distinguishes it from [[thm-abel-test]], which requires $\sum a_k$ to converge.

- **Why the pattern is $1, 1, -2$ and not $1, -1$.** The blocks must have mean zero for the partial sums to stay bounded, and they must not alternate, or the example would be covered by the alternating series test. The smallest integer pattern with both properties has period three.

- **The parity object is not used, and could not be.** [[lem-alternating-sequence]] supplies the period-two structure of this library; a period-three pattern needs its own recursion, which is what the state set $\{0,1,2\}$ provides. No claim is made that the two constructions are instances of a common one.
