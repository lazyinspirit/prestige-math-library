---
id: lem-normal-subgroup-containing-a-three-cycle-is-a-n
kind: lemma
title: 'A normal subgroup of $A_n$ containing one $3$-cycle equals $A_n$ for $n\ge5$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-normal-subgroup, cor-three-cycles-form-one-conjugacy-class-in-a-n, thm-alternating-group-is-generated-by-three-cycles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Simplicity of $A_n$"
      url: "https://judsonbooks.org/aata-files/aata-html/normal-section-simplicity-of-an.html"
pipeline_run: frontier-11
---

## Statement

Let $n\ge5$. If $N\trianglelefteq A_n$ contains one $3$-cycle, then $N=A_n$.

## Facts & Assumptions

**Given:** $n\ge5$ and a normal subgroup $N\trianglelefteq A_n$ containing a $3$-cycle.

[F1] Normality makes a subgroup contain every conjugate of each of its elements ([[def-normal-subgroup]]).

[F2] All $3$-cycles form one conjugacy class in $A_n$ ([[cor-three-cycles-form-one-conjugacy-class-in-a-n]]).

[F3] The $3$-cycles generate $A_n$ ([[thm-alternating-group-is-generated-by-three-cycles]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $N$ contains the entire $A_n$-conjugacy class of its given $3$-cycle. [F1]

2.1 By [F2], this means that $N$ contains every $3$-cycle. [F2, step 1.1]

3.1 Since those cycles generate $A_n$ by [F3], one has $N=A_n$. [F3, step 2.1] ∎
