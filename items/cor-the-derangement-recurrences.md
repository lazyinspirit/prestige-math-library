---
id: cor-the-derangement-recurrences
kind: corollary
title: "$\\iota(D_n) = \\iota(n)\\,\\iota(D_{n-1}) + (-1)^{n}$ for $n \\ge 1$, and $D_n = (n-1)(D_{n-1} + D_{n-2})$ for $n \\ge 2$"
status: published
origin: session
deps: [thm-the-derangement-formula, def-the-derangement-number, def-factorial-and-falling-factorial,
       def-canonical-natural, def-integer-power, def-finite-sum, lem-finite-sum-laws,
       lem-nat-finite-sum-laws-and-the-canonical-embedding, def-nat-order,
       def-nat-finite-sum-and-product, lem-nat-nonzero-is-successor, def-ordered-field,
       def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Derangement (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derangement"
    - title: "Rencontres numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rencontres_numbers"
pipeline_run: null
---

## Statement

Let $D_n$ be the derangement numbers ([[def-the-derangement-number]]) and $\iota$
the canonical natural ([[def-canonical-natural]]). Then:

1. **For every $n \ge 1$**, in $\mathbb{R}$,
   $$\iota(D_n) \;=\; \iota(n)\,\iota(D_{n-1}) + (-1)^{n} .$$
2. **For every $n \ge 2$**, in $\mathbb{N}$,
   $$D_n \;=\; (n-1)\,\big(D_{n-1} + D_{n-2}\big).$$

All differences are the truncated ones ([[def-nat-finite-sum-and-product]]),
which in the stated ranges are the ordinary ones.

**Both hypotheses are exactly what the proofs need, and nothing is asserted
outside them.** Clause 1 is proved from the identity $n = (n-1)+1$ and its
consequence $n! = (n-1)!\cdot n$, both of which fail at $n = 0$ under the
truncated difference, where $n-1$ is $0$; so $n = 1$ is its first legal index,
and there it reads $\iota(D_1) = \iota(1)\,\iota(D_0) - 1 = 0$. Clause 2 is
derived by applying clause 1 twice, at $n$ and at $n-1$, so it needs
$n - 1 \ge 1$; its first legal index is $n = 2$, where it reads
$D_2 = 1\cdot(D_1 + D_0) = 1$. Under the truncated difference the two displayed
formulas happen also to be true at $n = 0$ and at $n = 1$ respectively, both
sides being $1$ in the first case and $0$ in the second, but neither of those
readings is proved here and neither is claimed.

## Facts & Assumptions

**Given:** A natural number $n$ with $n \ge 1$ in clause 1 and $n \ge 2$ in clause 2; the abbreviation $p := n-1$, so that $p + 1 = n$ ([[def-nat-order]], [[def-nat-finite-sum-and-product]], [[lem-nat-nonzero-is-successor]]).

[L1] The derangement formula: $\iota(D_m) = \iota(m!)\sum_{i<m+1}(-1)^{i}/\iota(i!)$ for every $m \in \mathbb{N}$ ([[thm-the-derangement-formula]]).

[L2] Recursion clause of the real finite sum: $\sum_{i<q+1}u_i = \sum_{i<q}u_i + u_q$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] Factorials: $\sigma(m)! = m!\cdot\sigma(m)$, so $n! = p!\cdot n$ when $p+1 = n$; and $m! \ne 0$ for every $m$ ([[def-factorial-and-falling-factorial]]).

[L4] $\iota$ is additive and multiplicative with $\iota(1) = 1$, and it is injective ([[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clauses 0 and 7, [[def-canonical-natural]]). In particular $\iota(n) - 1 = \iota(p)$ when $p+1 = n$, and $\iota(m!) \ne 0$.

[L5] Powers of $-1$: $(-1)^{0} = 1$ and $(-1)^{q+1} = -(-1)^{q}$ ([[def-integer-power]]).

[L6] $\mathbb{R}$ is an ordered field, so subtraction and division by a nonzero element are available ([[def-ordered-field]], [[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $n \ge 1$ and put $p := n-1$, so $p+1 = n$. Then $n! = p!\cdot n$ by [L3], hence $\iota(n!) = \iota(p!)\,\iota(n)$ by [L4], and both $\iota(n!)$ and $\iota(p!)$ are nonzero. [given, L3, L4]

1.2 The formula at $p$. By [L1] and $p+1 = n$, $\iota(D_p) = \iota(p!)\sum_{i<n}(-1)^{i}/\iota(i!)$. [L1]

1.3 Splitting the sum at its last index. By [L2], $\sum_{i<n+1}(-1)^{i}/\iota(i!) = \sum_{i<n}(-1)^{i}/\iota(i!) + (-1)^{n}/\iota(n!)$. [L2]

2.1 Clause 1. Multiplying step 1.3 by $\iota(n!)$ and using [L1] at $m = n$, step 1.1 and step 1.2, $\iota(D_n) = \iota(n!)\sum_{i<n}(-1)^{i}/\iota(i!) + (-1)^{n} = \iota(n)\,\iota(p!)\sum_{i<n}(-1)^{i}/\iota(i!) + (-1)^{n} = \iota(n)\,\iota(D_p) + (-1)^{n}$. [step 1.1, step 1.2, step 1.3, L1, L6]

3.1 Now let $n \ge 2$, so that $p = n-1 \ge 1$ and $p - 1 = n-2$. Applying step 2.1 at $p$ in place of $n$ gives $\iota(D_p) = \iota(p)\,\iota(D_{n-2}) + (-1)^{p}$, hence $(-1)^{p} = \iota(D_p) - \iota(p)\,\iota(D_{n-2})$; and $(-1)^{n} = (-1)^{p+1} = -(-1)^{p}$ by [L5], so $(-1)^{n} = \iota(p)\,\iota(D_{n-2}) - \iota(D_p)$. [step 2.1, L5, L6]

4.1 Clause 2. Substituting step 3.1 into step 2.1, $\iota(D_n) = \iota(n)\,\iota(D_p) - \iota(D_p) + \iota(p)\,\iota(D_{n-2}) = \big(\iota(n)-1\big)\iota(D_p) + \iota(p)\,\iota(D_{n-2}) = \iota(p)\big(\iota(D_p) + \iota(D_{n-2})\big)$, using $\iota(n)-1 = \iota(p)$ from [L4]; the right-hand side is $\iota\big(p\,(D_{n-1} + D_{n-2})\big)$ by the additivity and multiplicativity of $\iota$, so $D_n = (n-1)(D_{n-1} + D_{n-2})$ by injectivity. [step 2.1, step 3.1, L4, L6, algebra] ∎

## Remarks

- **Clause 2 is derived from clause 1 and not from the formula.** Two instances of clause 1, at $n$ and at $n-1$, are enough, and that is why clause 2 begins one index later: the second instance needs $n-1 \ge 1$.

- **Why clause 1 is stated in $\mathbb{R}$ and clause 2 in $\mathbb{N}$.** Clause 1 carries the term $(-1)^{n}$, which is not a natural number when $n$ is odd. Clause 2 has no signs left in it, both sides are counts, and injectivity of $\iota$ carries the identity back into $\mathbb{N}$ where it belongs.

- **The truncated difference is why the hypotheses have to be written out.** Under it the symbols $D_{n-1}$ and $D_{n-2}$ never become ill formed: at $n = 0$ the first reads $D_0$ and at $n = 1$ the second reads $D_0$ as well. So a reader cannot tell from the shape of the formula where it stops being proved, and the ranges $n \ge 1$ and $n \ge 2$ have to be stated rather than inferred.
