---
id: ex-the-hat-check-ratio-as-a-quotient-of-counts
kind: example
title: "The ratio $\\iota(D_n)/\\iota(n!)$ computed for small $n$ as a quotient of two counts, with no probability space claimed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-the-derangement-number, thm-the-derangement-formula, cor-the-derangement-recurrences,
       def-factorial-and-falling-factorial, def-canonical-natural, def-integer-power,
       def-finite-sum, lem-finite-sum-laws, def-ordered-field, def-field,
       lem-nat-finite-sum-laws-and-the-canonical-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Derangement (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derangement"
    - title: "Rencontres numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rencontres_numbers"
    - title: "Derangements (OpenText at the University of Lethbridge)"
      url: "https://opentext.uleth.ca/Combinatorics/sect_gen-fns-apps-Derangements.html"
pipeline_run: null
---

## Example

For $n \in \mathbb{N}$ consider the real number

$$r_n \;:=\; \frac{\iota(D_n)}{\iota(n!)},$$

the quotient of the count of derangements of an $n$-element set
([[def-the-derangement-number]]) by the count of all its bijections,
$\lvert\operatorname{Bij}(n)\rvert = n!$
([[def-factorial-and-falling-factorial]]). The quotient is legitimate because
$n! \ne 0$. Dividing the derangement formula by $\iota(n!)$ gives

$$r_n \;=\; \sum_{i<n+1}\frac{(-1)^{i}}{\iota(i!)} ,$$

so $r_n$ is the truncated alternating sum itself. Its first values, obtained from
$D_0 = 1$, $D_1 = 0$, $D_2 = 1$ and the first recurrence
$\iota(D_n) = \iota(n)\iota(D_{n-1}) + (-1)^{n}$
([[cor-the-derangement-recurrences]]), are

| $n$ | $D_n$ | $n!$ | $r_n$ |
|---|---|---|---|
| $0$ | $1$ | $1$ | $1$ |
| $1$ | $0$ | $1$ | $0$ |
| $2$ | $1$ | $2$ | $1/2$ |
| $3$ | $2$ | $6$ | $1/3$ |
| $4$ | $9$ | $24$ | $3/8$ |
| $5$ | $44$ | $120$ | $11/30$ |
| $6$ | $265$ | $720$ | $53/144$ |

**This is a ratio of two counts and nothing else.** Nothing among this page's
declared prerequisites defines a probability space, a measure or an expectation,
so $r_n$ is not called a probability here and no statement about random
behaviour is made. What is asserted is exactly that the numerator counts the
fixed-point-free bijections, that the denominator counts all of them, and that
the quotient is the displayed alternating sum.

## Facts & Assumptions

**Given:** The derangement numbers $D_n$, the factorials $n!$, and the canonical natural $\iota$ ([[def-canonical-natural]]).

[L1] The derangement formula: $\iota(D_n) = \iota(n!)\sum_{i<n+1}(-1)^{i}/\iota(i!)$ ([[thm-the-derangement-formula]]).

[L2] $\lvert\operatorname{Bij}(n)\rvert = n!$ and $n! \ne 0$, hence $\iota(n!) \ne 0$ ([[def-the-derangement-number]], [[def-factorial-and-falling-factorial]], [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 7).

[L3] The first recurrence: $\iota(D_n) = \iota(n)\,\iota(D_{n-1}) + (-1)^{n}$ for $n \ge 1$; and $D_0 = 1$, $D_1 = 0$, $D_2 = 1$ ([[cor-the-derangement-recurrences]], [[def-the-derangement-number]]).

[L4] $\mathbb{R}$ is an ordered field, so division by a nonzero element is available and the displayed arithmetic is legitimate ([[def-ordered-field]], [[def-field]]); $(-1)^{p+1} = -(-1)^{p}$ and $(-1)^{0} = 1$ ([[def-integer-power]]); and real finite sums obey the recursion clause ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Factorials: $0! = 1$, $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$ ([[def-factorial-and-falling-factorial]]).

## Verification

**Proof technique:** direct.

1.1 The quotient form. Dividing the identity of [L1] by the nonzero $\iota(n!)$ gives $r_n = \sum_{i<n+1}(-1)^{i}/\iota(i!)$ for every $n \in \mathbb{N}$. [L1, L2, L4]

1.2 The derangement numbers up to $6$. From $D_2 = 1$ and [L3]: $\iota(D_3) = 3\cdot 1 - 1 = 2$, $\iota(D_4) = 4\cdot 2 + 1 = 9$, $\iota(D_5) = 5\cdot 9 - 1 = 44$ and $\iota(D_6) = 6\cdot 44 + 1 = 265$; since $\iota$ is injective these are the natural numbers $D_3 = 2$, $D_4 = 9$, $D_5 = 44$, $D_6 = 265$. [L2, L3, L4]

2.1 The tabulated ratios. Dividing the base values in [L3] and the values from step 1.2 by the factorials of [L5] gives $r_0 = 1/1 = 1$, $r_1 = 0/1 = 0$, $r_2 = 1/2$, $r_3 = 2/6 = 1/3$, $r_4 = 9/24 = 3/8$, $r_5 = 44/120 = 11/30$ and $r_6 = 265/720 = 53/144$. [step 1.2, L3, L4, L5]

2.2 A cross-check at $n = 4$ through step 1.1: $\sum_{i<5}(-1)^{i}/\iota(i!) = 1 - 1 + 1/2 - 1/6 + 1/24 = 9/24 = 3/8$, which is $r_4$. [step 1.1, L4, L5]

3.1 So $r_n$ is the truncated alternating sum, and its values through $n = 6$ are as tabulated. [step 2.1, step 2.2] ∎

## Remarks

- **The alternation is visible in the table.** $r_1 = 0$ is below $r_2 = 1/2$, which is above $r_3 = 1/3$, which is below $r_4 = 3/8$; each successive value differs from the previous one by the single term $(-1)^{n}/\iota(n!)$, whose sign alternates and whose size decreases.

- **No limit is claimed.** The quotient is computed at each $n$ from two counts, and nothing here asserts convergence or names a limiting value; the exponential function that would be needed to state such a limit is not among this page's declared prerequisites.

- **Why the division is legitimate at every $n$, including $n = 0$.** The denominator is $\iota(n!)$ and $n!$ is never $0$, its recursion starting at $0! = 1$ and multiplying by nonzero successors.
