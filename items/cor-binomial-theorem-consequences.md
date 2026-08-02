---
id: cor-binomial-theorem-consequences
kind: corollary
title: "$\\sum_{k<n+1}\\binom{n}{k} = 2^{n}$, and $\\sum_{k<n+1}(-1)^{k}\\iota\\!\\binom{n}{k} = 0$ for $n \\ge 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-binomial-theorem, cor-cardinality-of-the-power-set, thm-sum-rule,
       def-binomial-coefficient, def-nat-power, def-nat-finite-sum-and-product,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-integer-power,
       def-canonical-natural, def-finite-sum, lem-finite-sum-laws,
       def-sum-over-a-finite-index-set, def-finite-cardinality,
       thm-subset-of-a-finite-set, thm-induction-principle, lem-of-zero-mult, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Binomial coefficient (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_coefficient"
    - title: "Binomial theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binomial_theorem"
    - title: "Pascal's triangle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pascal%27s_triangle"
pipeline_run: null
---

## Statement

1. **The row sum.** For every $n \in \mathbb{N}$, in $\mathbb{N}$,
   $$\sum_{k<n+1}\binom{n}{k} = 2^{\,n} .$$
2. **The alternating row sum.** For every $n \ge 1$, in $\mathbb{R}$,
   $$\sum_{k<n+1}(-1)^{k}\,\iota\binom{n}{k} = 0 .$$

**Clause 2 is false at $n = 0$**, where the sum has the single term
$(-1)^{0}\iota\binom{0}{0} = 1$. The hypothesis $n \ge 1$ is therefore part of the
statement, and this page's companion records the version that drops it as a false
statement.

## Facts & Assumptions

**Given:** A natural $n$, a finite set $A$ with $\lvert A\rvert = n$, and $\iota$ the canonical natural ([[def-canonical-natural]]).

[L1] The binomial theorem: $(x+y)^{n} = \sum_{k<\sigma(n)}\iota\binom{n}{k}x^{k}y^{\,n-k}$ for reals $x$, $y$ ([[thm-binomial-theorem]]).

[L2] $\lvert\mathcal{P}(A)\rvert = 2^{\,n}$ ([[cor-cardinality-of-the-power-set]]), and $\lvert [A]^{k}\rvert = \binom{n}{k}$, with $[A]^{k} = \varnothing$ for $k > n$ ([[def-binomial-coefficient]]).

[L3] The sum rule for a partition indexed by a finite set ([[thm-sum-rule]]), the bridge $\sum_{i \in N} u_i = \sum_{k<N} u_k$ for an index set that is a natural number ([[def-sum-over-a-finite-index-set]]), and the $\mathbb{N}$-valued recursion clauses ([[def-nat-finite-sum-and-product]]).

[L4] $\iota$ is additive, multiplicative and injective, and $\iota\big(\sum^{\mathbb{N}}_{k<N} a_k\big) = \sum^{\mathbb{R}}_{k<N}\iota(a_k)$ (clauses 0, 6 and 7 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]).

[L5] Powers: $\iota(m^{j}) = \iota(m)^{j}$ ([[def-nat-power]], clause (d)); $a^{0} = 1$ and $a^{\sigma(j)} = a^{j}a$, so $1^{j} = 1$ and $0^{j} = 0$ for $j \ge 1$ ([[def-integer-power]], [[lem-of-zero-mult]], [[def-field]]).

[L6] Real finite sums: the recursion clauses and the scaling clause ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] Subsets of a finite set are finite and have cardinality at most $n$ ([[thm-subset-of-a-finite-set]], [[def-finite-cardinality]]); induction ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1, by counting. Every $S \subseteq A$ satisfies $\lvert S\rvert \le n$ by [L7], so $\mathcal{P}(A)$ is the union of the sets $[A]^{k}$ for $k \in \sigma(n) = \{0,1,\dots,n\}$; these are pairwise disjoint, since $S$ determines $\lvert S\rvert$. By [L3] and [L2], $2^{\,n} = \lvert\mathcal{P}(A)\rvert = \sum_{k \in \sigma(n)}\big\lvert [A]^{k}\big\rvert = \sum_{k<\sigma(n)}\binom{n}{k}$, the last equality being the bridge for an index set that is a natural number. [L2, L3, L7]

1.2 Clause 2. Apply [L1] with $x = -1$ and $y = 1$. The left-hand side is $(-1+1)^{n} = 0^{\,n}$, which is $0$ because $n \ge 1$ ([L5]). The right-hand side is $\sum_{k<\sigma(n)}\iota\binom{n}{k}(-1)^{k}1^{\,n-k} = \sum_{k<\sigma(n)}(-1)^{k}\iota\binom{n}{k}$, using $1^{j} = 1$ from [L5]. Hence the alternating sum is $0$. [L1, L5]

2.1 Clause 1 again, from the binomial theorem, as a check that the two routes agree. Taking $x = y = 1$ in [L1] gives $(1+1)^{n} = \sum_{k<\sigma(n)}\iota\binom{n}{k}$, and the right-hand side is $\iota\big(\sum^{\mathbb{N}}_{k<\sigma(n)}\binom{n}{k}\big)$ by the bridge clause of [L4], while the left-hand side is $\iota(2)^{n} = \iota(2^{\,n})$ by [L5]. Since $\iota$ is injective, $\sum^{\mathbb{N}}_{k<\sigma(n)}\binom{n}{k} = 2^{\,n}$, which is step 1.1. [step 1.1, L1, L4, L5]

2.2 The hypothesis of clause 2 is not removable. At $n = 0$ the sum is $\sum_{k<1}(-1)^{k}\iota\binom{0}{k} = (-1)^{0}\iota\binom{0}{0} = 1 \cdot 1 = 1 \ne 0$, by [L6], $\binom{0}{0} = 1$ and $a^{0} = 1$. What fails in the argument of step 1.2 is exactly one thing: $(-1+1)^{0} = 0^{0} = 1$ rather than $0$. [step 1.2, L2, L5, L6]

3.1 Clause 1 is step 1.1, confirmed by step 2.1; clause 2 is step 1.2, and step 2.2 shows why it carries the hypothesis $n \ge 1$. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- **Two proofs of the same identity, deliberately.** The counting proof is a
  statement about natural numbers and uses no embedding at all, while the
  analytic proof goes through $\mathbb{R}$ and comes back by the injectivity of
  $\iota$. Recording both is what makes the agreement of the two
  readings visible rather than assumed.

- **Where the hypothesis of clause 2 is spent.** In $0^{n} = 0$, and nowhere
  else. The convention $0^{0} = 1$ is not a defect here: it is what makes the
  binomial theorem hold at $n = 0$, and the price is that the alternating sum
  identity acquires a hypothesis. Both facts are consequences of the same
  convention.

- **The alternating sum is stated in $\mathbb{R}$** because $(-1)^{k}$ is not a
  natural number. The unsigned row sum, by contrast, is an identity between
  counts and is stated in $\mathbb{N}$.
