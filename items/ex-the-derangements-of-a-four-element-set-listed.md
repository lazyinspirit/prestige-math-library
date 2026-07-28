---
id: ex-the-derangements-of-a-four-element-set-listed
kind: example
title: "All nine derangements of a four-element set listed, and the count checked against the formula and both recurrences"
status: draft
origin: session
deps: [def-the-derangement-number, thm-the-derangement-formula, cor-the-derangement-recurrences,
       thm-number-of-bijections-of-a-finite-set, def-factorial-and-falling-factorial,
       def-canonical-natural, def-integer-power, def-finite-cardinality, def-finite-sum,
       lem-finite-sum-laws, def-injection-surjection-bijection, def-ordered-field,
       thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
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

## Example

Take $A := 4 = \{0,1,2,3\}$ and write a bijection $f : A \to A$ as the tuple
$\big(f(0), f(1), f(2), f(3)\big)$. The derangements of $A$
([[def-the-derangement-number]]) are exactly

$$\begin{array}{lll} (1,0,3,2) & (1,2,3,0) & (1,3,0,2) \\ (2,0,3,1) & (2,3,0,1) & (2,3,1,0) \\ (3,0,1,2) & (3,2,0,1) & (3,2,1,0) \end{array}$$

so $D_4 = 9$. Each tuple lists four distinct values, hence is a bijection, and no
entry equals its position.

**Against the formula.** [[thm-the-derangement-formula]] gives

$$\iota(D_4) = \iota(4!)\sum_{i<5}\frac{(-1)^{i}}{\iota(i!)} = 24\Big(1 - 1 + \tfrac{1}{2} - \tfrac{1}{6} + \tfrac{1}{24}\Big) = 24\cdot\tfrac{9}{24} = 9 .$$

**Against the two recurrences.** The earlier values are $D_0 = 1$, $D_1 = 0$,
$D_2 = 1$ and, by the first recurrence, $D_3 = 3\,D_2 + (-1)^{3} = 3 - 1 = 2$.
Then [[cor-the-derangement-recurrences]] gives
$\iota(D_4) = \iota(4)\,\iota(D_3) + (-1)^{4} = 4\cdot 2 + 1 = 9$ from its first
clause, and $D_4 = 3\,(D_3 + D_2) = 3\,(2+1) = 9$ from its second.

## Facts & Assumptions

**Given:** $A = 4 = \{0,1,2,3\}$, the tuple notation above, and the canonical natural $\iota$ ([[def-canonical-natural]]).

[L1] $\lvert\operatorname{Bij}(A)\rvert = 4! = 24$ ([[thm-number-of-bijections-of-a-finite-set]], [[def-factorial-and-falling-factorial]]), and a tuple of four distinct entries drawn from $A$ is a bijection $A \to A$, a function on a finite set being injective exactly when it is a bijection ([[def-injection-surjection-bijection]], [[thm-subset-of-a-finite-set]], clause 4).

[L2] A bijection $f$ of $A$ is a derangement exactly when $f(a) \ne a$ for every $a \in A$ ([[def-the-derangement-number]]); and $D_0 = 1$, $D_1 = 0$, $D_2 = 1$ are recorded there.

[L3] The derangement formula ([[thm-the-derangement-formula]]) and the two recurrences ([[cor-the-derangement-recurrences]]).

[L4] Factorials: $0! = 1$, $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$ ([[def-factorial-and-falling-factorial]]).

[L5] Real finite sums and the arithmetic of $\mathbb{R}$: recursion clause, additivity and scaling ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-ordered-field]]); and $(-1)^{0} = 1$, $(-1)^{p+1} = -(-1)^{p}$ ([[def-integer-power]]).

[L6] Cardinality of a listed set with distinct entries ([[def-finite-cardinality]], clauses (a) and (c)).

## Verification

**Proof technique:** cases.

1.1 Each of the nine listed tuples has four distinct entries and no entry equal to its position, so each is a derangement of $A$ by [L1] and [L2]; and the nine tuples are pairwise distinct, so the listed set has nine elements by [L6]. [given, L1, L2, L6]

1.2 The enumeration is complete, and the cases are indexed by the value $f(0)$, which is $1$, $2$ or $3$ since $f(0) \ne 0$. [given, L2]

2.1 Case $f(0) = 1$. Then $f(1) \in \{0,2,3\}$. If $f(1) = 0$ the remaining values $\{2,3\}$ go to positions $2$ and $3$ with $f(2) \ne 2$, forcing $(1,0,3,2)$. If $f(1) = 2$ the remaining values are $\{0,3\}$ with $f(3) \ne 3$, forcing $(1,2,3,0)$. If $f(1) = 3$ the remaining values are $\{0,2\}$ with $f(2) \ne 2$, forcing $(1,3,0,2)$. [assume-case one, step 1.2, L2]

2.2 Case $f(0) = 2$. Then $f(1) \in \{0,3\}$. If $f(1) = 0$ the remaining values $\{1,3\}$ go to positions $2$ and $3$ with $f(3) \ne 3$, forcing $(2,0,3,1)$. If $f(1) = 3$ the remaining values are $\{0,1\}$ and neither placement is excluded, giving $(2,3,0,1)$ and $(2,3,1,0)$. [assume-case two, step 1.2, L2]

2.3 Case $f(0) = 3$. Then $f(1) \in \{0,2\}$. If $f(1) = 0$ the remaining values $\{1,2\}$ go to positions $2$ and $3$ with $f(2) \ne 2$, forcing $(3,0,1,2)$. If $f(1) = 2$ the remaining values are $\{0,1\}$ and neither placement is excluded, giving $(3,2,0,1)$ and $(3,2,1,0)$. [assume-case three, step 1.2, L2]

3.1 The three cases are exhaustive and produce exactly the nine listed tuples, so $D_4 = 9$. [step 1.1, step 2.1, step 2.2, step 2.3, cases-exhaustive]

4.1 Against the formula. By [L3] and [L4], $\iota(D_4) = \iota(24)\big(1 - 1 + 1/2 - 1/6 + 1/24\big)$; the bracket is $9/24$ by [L5], so $\iota(D_4) = 9$, matching step 3.1. [step 3.1, L3, L4, L5]

4.2 Against the recurrences. By [L2] and the first clause of [L3], $\iota(D_3) = \iota(3)\iota(D_2) + (-1)^{3} = 3 - 1 = 2$ and then $\iota(D_4) = \iota(4)\iota(D_3) + (-1)^{4} = 8 + 1 = 9$; by the second clause, $D_4 = 3(D_3 + D_2) = 3\cdot 3 = 9$. Both match step 3.1. [step 3.1, L2, L3, L5]

5.1 The list, the formula and the two recurrences therefore all give $D_4 = 9$. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **The case analysis is on $f(0)$ and then on $f(1)$**, and the remaining two positions are then forced or free according to whether the two leftover values can be placed without creating a fixed point. Where exactly one placement avoids a fixed point the tuple is determined; where both do, the subcase splits. The branching pattern therefore differs between the cases even though each contributes the same number of derangements.

- **The recurrences are checked at their first legal indices too.** The first recurrence is used at $n = 3$ and at $n = 4$, both at least $1$; the second at $n = 4$, which is at least $2$. Neither is evaluated where its hypothesis fails.
