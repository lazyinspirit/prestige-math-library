---
id: thm-normalized-finite-continued-fraction-uniqueness
kind: theorem
title: "Normalized finite regular continued fractions are unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-continued-fraction-convergent-recurrence, thm-rational-continued-fraction-termination]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

Every rational number has a unique **normalized** finite regular continued
fraction: either the expansion has length $0$, or its last digit is at least
$2$. If the rational is not an integer, then it has exactly one other finite
regular continued-fraction expansion, obtained by replacing the last digit
$a_n\ge2$ by the pair $a_n-1,1$. An integer $m$ has exactly the two expansions
$[m]$ and $[m-1;1]$.

## Facts & Assumptions

**Given:** A rational number and its finite regular continued-fraction
expansions.

[F1] The continued-fraction algorithm terminates exactly on rational numbers,
and its digit list is the Euclidean-algorithm digit list.
([[thm-rational-continued-fraction-termination]]).

[F2] For every finite regular continued fraction,
$$[a_0; a_1,\ldots,a_n,t] = \frac{t p_n+p_{n-1}}{t q_n+q_{n-1}},$$
so in particular
$$[a_0; a_1,\ldots,a_n,1] = [a_0; a_1,\ldots,a_n+1].$$
([[lem-continued-fraction-convergent-recurrence]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], every rational number has a terminating continued-fraction expansion. If the rational is not an integer, the last complete quotient is a positive integer greater than $1$. [F1, given]
Because every complete quotient after the first is greater than $1$, the
algorithm already produces a normalized finite expansion. [F1, given]

1.2 If $a_n\ge2$, then [F2] gives. [F2, algebra]
$$[a_0; a_1,\ldots,a_n] = [a_0; a_1,\ldots,a_n-1,1].$$
For an integer $m$, the same identity reads
$$[m]=[m-1,1]=[m-1;1].$$
So every normalized finite expansion produces a second finite expansion. [F2, algebra]

1.3 Conversely, any finite expansion with last digit $1$ and length at least $1$ can be shortened by the identity. [F2, induction]
$$[a_0; a_1,\ldots,a_{n-1},1] = [a_0; a_1,\ldots,a_{n-1}+1].$$
Repeating this collapse removes every terminal $1$ and ends at a normalized
expansion. Thus every finite expansion is obtained from a normalized one by at
most one final split of the last digit. [F2, induction]

2.1 The normalized expansion is unique because the continued-fraction algorithm on a rational has unique digits at each step. [F1, step 1.2, step 1.3]
Each digit is the unique integer
part of the current complete quotient, and [F1] says the process terminates.
Therefore nonintegers have exactly two finite expansions, while integers have
exactly the two listed in step 1.2. [F1, step 1.2, step 1.3] ∎
