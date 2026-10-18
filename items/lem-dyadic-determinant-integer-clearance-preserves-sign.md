---
id: lem-dyadic-determinant-integer-clearance-preserves-sign
kind: lemma
title: Clearing dyadic row denominators preserves determinant sign
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: certified-geometric-predicates
dependency_level: 1
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-certified-geometric-predicate-determinants, def-dyadic-floating-point-format-and-directed-rounding]
sources:
  references:
    - title: "Jonathan R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, §4.2"
      url: "https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf"
    - title: "CGAL Developer Manual, Robustness Issues, §11.1"
      url: "https://cgal.geometryfactory.com/CGAL/doc/main/Manual/devman_robustness.html"
---

## Statement

For every finite $s\times s$ matrix over dyadic rationals with $s\ge1$, multiplying each row by a
suitable positive power of two gives an integer matrix whose determinant has
the same sign and is zero exactly when the original determinant is zero.

## Facts & Assumptions

**Given:** A finite $s\times s$ matrix $M$ with dyadic entries, and the Leibniz definition of determinant from [[def-certified-geometric-predicate-determinants]].

[F1] [[def-dyadic-floating-point-format-and-directed-rounding]]: an exact dyadic rational is $m2^e$ for integers $m,e$.

[F2] [[def-certified-geometric-predicate-determinants]]: the determinant is the finite signed sum over permutations, with one entry from each row and column.

## Proof

1.1 For each row $i$, write its entries as $M_{ij}=m_{ij}2^{e_{ij}}$ using [F1], and choose $k_i=\max(0,-\min_j e_{ij})$. The row is finite, so this integer exists; then every $N_{ij}=2^{k_i}M_{ij}$ is an integer. [given, F1, choose, algebra]

2.1 In every Leibniz term of $\det N$, the product contains exactly one entry from each row, so it equals $(\prod_i2^{k_i})$ times the corresponding term of $\det M$. Summing the finite terms using [F2] gives $\det N=(\prod_i2^{k_i})\det M$. [given, step 1.1, F2, algebra]

3.1 Every factor $2^{k_i}$ is positive. Therefore $\det N$ and $\det M$ have the same sign and vanish simultaneously. [step 2.1, algebra] ∎

