---
id: ex-class-equation-of-s-three
kind: example
title: "The class equation of $S_3$ is $6=1+2+3$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-class-equation, thm-conjugacy-class-cardinality, def-symmetric-group, lem-symmetric-group-is-a-group, thm-number-of-bijections-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.2"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
pipeline_run: null
---

## Example

For $S_3=\operatorname{Sym}(\{1,2,3\})$, the conjugacy classes are

$$\{e\},\qquad\{(1\,2\,3),(1\,3\,2)\},\qquad\{(1\,2),(1\,3),(2\,3)\}.$$

Thus the class equation is $6=1+2+3$.

## Facts & Assumptions

**Given:** The symmetric group $S_3$ on $\{1,2,3\}$.

[L1] The class equation splits a finite group into its central singleton classes and its non-singleton conjugacy classes ([[thm-class-equation]]).

[L2] Conjugacy-class size is a centralizer index ([[thm-conjugacy-class-cardinality]]).

[L3] The symmetric group consists of all permutations of the underlying set ([[def-symmetric-group]]).

[L4] The symmetric group is a group under composition ([[lem-symmetric-group-is-a-group]]).

[L5] A three-element set has $3!=6$ bijections to itself ([[thm-number-of-bijections-of-a-finite-set]]).

## Verification

**Proof technique:** direct.

1.1 The identity, the three transpositions, and the two $3$-cycles are six distinct permutations; by [L3] and [L5], they exhaust $S_3$. [L3, L4, L5]

2.1 Conjugation relabels cycle entries: every transposition is conjugate to every other, and the two $3$-cycles are conjugate. Cycle type is preserved by conjugation, so the three displayed sets are exactly the conjugacy classes. [step 1.1, L2, algebra]

3.1 Their cardinalities are $1$, $2$, and $3$, so [L1] gives $6=1+2+3$. [step 1.1, step 2.1, L1, L2, algebra] ∎
