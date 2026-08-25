---
id: ex-the-ballot-problem-with-three-and-two-votes
kind: example
title: "The ballot problem with three votes for $A$ and two for $B$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-ballot-problem, cor-weak-ballot-problem, def-catalan-number, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.3'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Example

The ten orderings of three $A$ votes and two $B$ votes are:

$$AAABB,\ AABAB,\ AABBA,\ ABAAB,\ ABABA,\ ABBAA,\ BAAAB,\ BAABA,\ BABAA,\ BBAAA.$$

Exactly two of them, `AAABB` and `AABAB`, keep candidate $A$ strictly ahead after
every vote.

## Facts & Assumptions

**Given:** $p=3$ and $q=2$.

[L1] The ballot theorem gives $(p+q)N=(p-q)\binom{p+q}{p}$ ([[thm-ballot-problem]]).

[L2] For $p\ge q\ge0$, if $N$ counts the orderings in which the first candidate is never behind, then $(p+1)N=(p-q+1)\binom{p+q}{q}$ ([[cor-weak-ballot-problem]]).

## Verification

**Proof technique:** direct.

1.1 The ten words displayed above are exactly the words of length $5$ with three $A$ letters and two $B$ letters, so there are $\binom{5}{3}=10$ of them. [given]

2.1 Reading the lead $A-B$ after each vote shows that only `AAABB` and `AABAB` stay strictly positive at every stage, so $N=2$. [step 1.1]

3.1 This agrees with [L1], since $(3+2)N=(3-2)\binom{5}{3}$ reads $5N=10$ and therefore $N=2$. [L1, step 2.1]

4.1 For the weak form with $p=q=2$, the orderings `AABB` and `ABAB` are exactly the ones in which $A$ is never behind, so the weak count is $2$; that is $C_2$ and agrees with [L2]. [L2] ∎

## Remarks

- The strict and weak counts differ because ties are allowed only in the second statement. At this size the difference is already visible.
