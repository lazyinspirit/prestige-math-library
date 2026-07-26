---
id: cex-condensation-needs-monotonicity
kind: counterexample
title: "A nonnegative non-monotone sequence for which $\\sum a_k$ and $\\sum 2^k a_{2^k}$ behave differently"
status: published
origin: session
deps: [thm-cauchy-condensation, def-monotone-sequence, def-series, lem-nth-term-test, def-integer-power, lem-power-monotone, thm-induction-principle, lem-nat-discrete, def-finite-sum, lem-finite-sum-laws, def-real-limit, lem-of-naturals-positive]
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
    - title: "Cauchy condensation test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_condensation_test"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** for every family $(a_k)_{k \ge 1}$ with $a_k \ge 0$,
$\sum_{k \ge 1} a_k$ converges if and only if $\sum_{j \ge 0} 2^{j} a_{2^{j}}$
converges.

This is [[thm-cauchy-condensation]] with its monotonicity hypothesis deleted. Let
$P := \{2^{j} : j \in \mathbb{N}\}$ be the set of powers of $2$ and define, for
naturals $k \ge 1$,

$$a_k \;:=\; \begin{cases} 0 & \text{if } k \in P, \\ 1 & \text{if } k \notin P. \end{cases}$$

Every term is nonnegative, and the family is not monotone in either direction:
$a_1 = 0 < 1 = a_3$ and $a_3 = 1 > 0 = a_4$, since $1 = 2^{0}$ and $4 = 2^{2}$
belong to $P$ while $3$ does not.

The condensed series is $\sum_{j \ge 0} 2^{j} a_{2^{j}} = \sum_{j \ge 0} 0$,
which converges with sum $0$. The original series $\sum_{k \ge 1} a_k$ diverges,
because $a_k = 1$ at arbitrarily large indices, so its terms do not tend to $0$
([[lem-nth-term-test]]).

## Facts & Assumptions

**Given:** $P = \{2^{j} : j \in \mathbb{N}\}$ and the family $a_k$ defined above for naturals $k \ge 1$ ([[def-series]], [[def-integer-power]]).

[L1] Powers of $2$: $2^{j} \ge 1$, $2^{j+1} = 2 \cdot 2^{j}$, and $j \mapsto 2^{j}$ is strictly increasing, since $2 > 1$ ([[def-integer-power]], [[lem-power-monotone]], [[lem-of-naturals-positive]]).

[L2] The naturals are discrete: no natural lies strictly between $n$ and $n+1$ ([[lem-nat-discrete]]).

[L3] The principle of induction ([[thm-induction-principle]]).

[L4] A finite sum of zeros is zero, and a constant sequence converges to its value ([[lem-finite-sum-laws]], [[def-finite-sum]], [[def-real-limit]]).

[L5] A series whose terms do not converge to $0$ diverges ([[lem-nth-term-test]], [[def-real-limit]]).

[L6] Condensation requires the family to be nonnegative **and** nonincreasing ([[thm-cauchy-condensation]], [[def-monotone-sequence]]).

[L7] The refuted claim: nonnegativity alone suffices for the condensation equivalence.

## Counterexample

**Proof technique:** direct.

1.1 Every $a_k$ is $0$ or $1$, hence nonnegative, so the family satisfies the hypothesis of the claim. [given, L7]

1.2 The family is not monotone: $1 = 2^{0} \in P$ and $4 = 2^{2} \in P$ give $a_1 = a_4 = 0$, while $3 \notin P$ gives $a_3 = 1$; so $a_1 < a_3$ rules out nonincreasing and $a_3 > a_4$ rules out nondecreasing. That $3 \notin P$ holds because $2^{1} = 2 < 3 < 4 = 2^{2}$ and $j \mapsto 2^{j}$ is strictly increasing, so a power of $2$ equal to $3$ would force a natural strictly between $1$ and $2$. [given, L1, L2]

1.3 Every condensed term is $2^{j} a_{2^{j}} = 2^{j} \cdot 0 = 0$, since $2^{j} \in P$ for every $j$. [given, L1]

1.4 An induction gives $2^{n} > \iota(n)$ for every $n \in \mathbb{N}$: at $n = 0$ this reads $1 > 0$; and if $2^{n} > \iota(n)$ then $2^{n+1} = 2^{n} + 2^{n} \ge 2^{n} + 1 > \iota(n) + 1 = \iota(n+1)$. [L1, L3]

1.5 For every $n \ge 1$ the natural $2^{n}+1$ is not in $P$: it satisfies $2^{n} < 2^{n}+1 < 2^{n+1}$, the second inequality because $2^{n+1} = 2^{n} + 2^{n} \ge 2^{n} + 2$; so a power of $2$ equal to it would force a natural strictly between $n$ and $n+1$. [L1, L2]

2.1 So the condensed series has all partial sums equal to $0$ and converges, with sum $0$. [step 1.3, L4]

2.2 Hence for every $n \ge 1$ the index $k := 2^{n}+1$ satisfies $k > \iota(n) \ge n$ and $a_k = 1$, so $a_k = 1$ at indices exceeding any prescribed bound. [step 1.4, step 1.5, given]

3.1 Therefore the terms of $\sum_{k \ge 1} a_k$ do not converge to $0$: with the rational tolerance $1/2$ no index $K$ satisfies $|a_k| < 1/2$ for all $k \ge K$. So that series diverges. [step 2.2, L5]

4.1 The condensed series converges while the original diverges, so the claimed equivalence fails and the claim is false; the genuine condensation theorem is untouched, since its monotonicity hypothesis is violated here. [step 2.1, step 3.1, step 1.2, L6, L7] ∎

## Remarks

- **The witness knocks out exactly one estimate.** Condensation squeezes the block $a_{2^{n}}, \dots, a_{2^{n+1}-1}$ between $2^{n}$ copies of its last term and $2^{n}$ copies of its first, and both bounds are consequences of monotonicity. Here the first term of each block is $0$ and the rest are $1$, so the upper bound $2^{n} a_{2^{n}} = 0$ is wildly wrong, and it is the upper bound that the convergence direction of the theorem uses.

- **The failure is one-directional here, and the other direction can fail too.** This witness has a convergent condensed series and a divergent original. The complementary family $a_k := 1/k$ for $k \in P$ and $a_k := 0$ otherwise reverses the roles, its original series being a geometric one and its condensed series having every term equal to $1$; that variant is not verified here, and only the direction exhibited above is claimed.
