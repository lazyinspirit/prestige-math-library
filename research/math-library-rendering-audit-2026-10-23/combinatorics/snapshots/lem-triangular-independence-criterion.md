---
id: lem-triangular-independence-criterion
kind: lemma
title: "Triangular criterion: if $\\langle v_i,w_i\\rangle\\ne0$ and $\\langle v_i,w_j\\rangle=0$ for $j<i$, then $v_1,\\dots,v_m$ are linearly independent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-diagonal-independence-criterion, def-bilinear-symmetric-skew-and-alternating-forms, def-linear-independence, def-vector-space, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.1.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $V$ be an $F$-vector space, and let
$\langle\cdot,\cdot\rangle:V\times V\to F$ be a bilinear form. Suppose vectors
$v_1,\dots,v_m,w_1,\dots,w_m\in V$ satisfy

$$\langle v_i,w_i\rangle\ne0\qquad\text{and}\qquad \langle v_i,w_j\rangle=0\ \text{ whenever }j<i.$$

Then $v_1,\dots,v_m$ are linearly independent.

## Facts & Assumptions

**Given:** a field $F$, a vector space $V$ over $F$, a bilinear form $\langle\cdot,\cdot\rangle$ on $V$, and vectors $v_1,\dots,v_m,w_1,\dots,w_m\in V$ satisfying the displayed hypotheses.

[F1] A bilinear form is linear in each variable separately ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[F2] A field has no zero divisors ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\sum_{i=1}^{m}c_iv_i=0$ with some coefficient nonzero, and let $i$ be the least index with $c_i\ne0$. [assume-contra]

2.1 Pairing with $w_i$ and using [F1] gives $\sum_{j=1}^{m}c_j\langle v_j,w_i\rangle=0$. The terms with $j<i$ vanish by the choice of $i$, and the terms with $j>i$ vanish by the triangular hypothesis, so only $c_i\langle v_i,w_i\rangle$ remains. [F1, step 1.1]

3.1 Since $\langle v_i,w_i\rangle\ne0$ and a field has no zero divisors by [F2], this forces $c_i=0$, contradicting step 1.1. Therefore $v_1,\dots,v_m$ are linearly independent. [F2, step 2.1, discharge-contradiction] ∎

## Remarks

- The direction of the triangular hypothesis matters. The proof chooses the least nonzero coefficient, so it kills the terms below the diagonal by minimality and the terms above it by hypothesis.
