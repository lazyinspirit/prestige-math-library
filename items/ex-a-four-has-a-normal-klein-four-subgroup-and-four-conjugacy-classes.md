---
id: ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes
kind: example
title: "$A_4$ has a normal Klein four subgroup and four conjugacy classes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-order-of-a-quotient-group, thm-alternating-conjugacy-class-splitting-criterion, thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Example

Let
$V_4=\{1,(12)(34),(13)(24),(14)(23)\}\subseteq A_4$. Then $V_4$ is a normal
subgroup of $A_4$ of order $4$, the quotient $A_4/V_4$ has order $3$, and
$A_4$ has four conjugacy classes, of sizes $1$, $3$, $4$, and $4$.

## Facts & Assumptions

**Given:** The alternating group $A_4\subseteq S_4$ and the subset $V_4=\{1,(12)(34),(13)(24),(14)(23)\}$.

[F1] Two permutations of $S_n$ are conjugate exactly when they have the same cycle type ([[thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]]).

[F2] For $n\ge2$, the $S_n$-class of an element of $A_n$ splits into two $A_n$-classes of equal size exactly when all cycle lengths, $1$-cycles included, are odd and pairwise distinct. ([[thm-alternating-conjugacy-class-splitting-criterion]])

[F3] For finite $G$ and $N\mathrel{\trianglelefteq}G$, $|G/N|=|G|/|N|$ ([[cor-order-of-a-quotient-group]]).

[A1] The product of two distinct double transpositions on four letters is the remaining double transposition, and a product of two transpositions is an even permutation; $|A_4|=12$.

[A2] Conjugating a double transposition $(ab)(cd)$ by a permutation $\sigma$ of the four letters gives the double transposition $(\sigma(a)\sigma(b))(\sigma(c)\sigma(d))$.

## Verification

**Proof technique:** direct.

1.1 By [A1] the three nonidentity elements of $V_4$ are even permutations and multiply pairwise to the third, so $V_4$ is a subgroup of $A_4$ of order $4$. [A1, given]

1.2 For the $3$-cycle $(123)$, the cycle lengths are $3$ and $1$, odd and distinct, so [F2] applies: its $S_4$-class, of size $8$, splits into two $A_4$-classes of equal size $4$. These two classes account for all eight $3$-cycles of $A_4$. [F2, given, algebra]

2.1 By [A2], any conjugate of a double transposition is again a double transposition, and there are exactly three of them; by [F1] they all lie in the single $S_4$-class of cycle type $(2,2)$. Hence every conjugate of every element of $V_4$ lies in $V_4$, so $V_4\mathrel{\trianglelefteq}A_4$. [F1, A2, step 1.1, given]

2.2 By [F3], $|A_4/V_4|=|A_4|/|V_4|=12/4=3$. [F3, step 1.1, A1]

3.1 The identity class of $A_4$ is $\{1\}$. For the double transposition $(12)(34)$, the cycle type $(2,2)$ has two equal lengths, so [F2] does not apply and its $S_4$-class does not split: its $A_4$-class is the whole class of double transpositions, of size $3$ by step 2.1. [F2, step 2.1, given]

4.1 Every nonidentity element of $A_4$ is a double transposition or a $3$-cycle, so steps 3.1 and 1.2 list all classes: sizes $1$, $3$, $4$, $4$. [step 3.1, step 1.2, algebra] ∎
