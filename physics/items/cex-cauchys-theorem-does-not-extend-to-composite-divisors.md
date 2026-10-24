---
id: cex-cauchys-theorem-does-not-extend-to-composite-divisors
kind: counterexample
title: 'The subgroup $\langle(1\,2\,3),(1\,2)(3\,4)\rangle\le S_4$ has order $12$ but no subgroup of order $6$, so Cauchy''s theorem does not extend to composite divisors'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchys-theorem-for-finite-groups, thm-index-two-subgroup-is-normal, def-symmetric-group, lem-symmetric-group-is-a-group, def-generated-subgroup, def-subgroup, thm-lagrange, thm-conjugation-is-an-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "K. Conrad, No Subgroup of A4 Has Index 2, Theorem 1"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/A4noindex2.pdf"
pipeline_run: null
---

## Statement refuted

**False claim.** If a positive integer $d$ divides the order of a finite group
$G$, then $G$ has a subgroup of order $d$.

## Facts & Assumptions

**Given:** In $S_4$, let $a=(1\,2\,3)$, $b=(1\,2)(3\,4)$, and $A=\langle a,b\rangle$.

[L1] Cauchy's theorem supplies an element of order $p$ when the prime $p$ divides a finite group order ([[thm-cauchys-theorem-for-finite-groups]]).

[L2] A subgroup of index $2$ is normal ([[thm-index-two-subgroup-is-normal]]).

[L3] The symmetric group contains all permutations under composition ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]).

[L4] The generated subgroup is the smallest subgroup containing the generators ([[def-generated-subgroup]], [[def-subgroup]]).

[L5] For a finite group, $|G|=[G:H]|H|$ ([[thm-lagrange]]).

[L6] Conjugation by a group element is an automorphism ([[thm-conjugation-is-an-automorphism]]).

## Counterexample

**Proof technique:** contradiction.

1.1 Direct multiplication shows that $A$ consists of the identity, the eight $3$-cycles on $\{1,2,3,4\}$, and the three double transpositions $(1\,2)(3\,4)$, $(1\,3)(2\,4)$, $(1\,4)(2\,3)$. This set is closed under multiplication by $a^{\pm1}$ and $b=b^{-1}$, and every listed element is a word in $a,b$, so [L3] and [L4] give $|A|=12$. [L3, L4, algebra]

2.1 Suppose, for contradiction, that $H\le A$ has order $6$. Then [L5] gives $[A:H]=2$, so $H\mathrel{\trianglelefteq}A$ by [L2]. Since $3\mid|H|$, [L1] gives an element $c\in H$ of order $3$, necessarily one of the eight $3$-cycles in step 1.1. [assume-contra, step 1.1, L1, L2, L5]

3.1 The subgroup $H$ contains $c^{-1}$. Normality and [L6] make it contain every $A$-conjugate of both $c$ and $c^{-1}$. Conjugating by the displayed generators gives two disjoint four-element classes, together all eight $3$-cycles, so $H$ would contain at least eight elements, contradicting $|H|=6$. [step 1.1, step 2.1, L3, L6, algebra]

4.1 Thus $6$ divides $|A|=12$ but is not the order of a subgroup of $A$. The arbitrary-divisor claim is false, whereas [L1] remains valid for prime divisors. [step 1.1, step 3.1, L1, discharge-contradiction] ∎
