---
id: lem-diagonal-independence-criterion
kind: lemma
title: "Diagonal criterion: if $\\langle v_i,w_i\\rangle\\ne0$ and $\\langle v_i,w_j\\rangle=0$ for $i\\ne j$, then $v_1,\\dots,v_m$ are linearly independent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bilinear-symmetric-skew-and-alternating-forms, def-linear-independence, def-vector-space, def-field]
justified_by: []
aliases: []
landmark: true
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

$$\langle v_i,w_i\rangle\ne0\qquad\text{and}\qquad \langle v_i,w_j\rangle=0\ \text{ for }i\ne j.$$

Then $v_1,\dots,v_m$ are linearly independent.

## Facts & Assumptions

**Given:** a field $F$, a vector space $V$ over $F$, a bilinear form $\langle\cdot,\cdot\rangle$ on $V$, and vectors $v_1,\dots,v_m,w_1,\dots,w_m\in V$ satisfying the displayed hypotheses.

[F1] A bilinear form is linear in each variable separately ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[F2] A field has no zero divisors ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\sum_{i=1}^{m}c_iv_i=0$. Pairing with $w_j$ and using linearity in the first variable from [F1] gives $\sum_{i=1}^{m}c_i\langle v_i,w_j\rangle=0$. [F1, assume-contra]

2.1 Every term with $i\ne j$ vanishes by hypothesis, so this reduces to $c_j\langle v_j,w_j\rangle=0$. Since $\langle v_j,w_j\rangle\ne0$ and a field has no zero divisors by [F2], we get $c_j=0$. [F2, step 1.1]

3.1 The index $j$ was arbitrary, so every coefficient is $0$. Hence $v_1,\dots,v_m$ are linearly independent. [step 2.1, discharge-contradiction] ∎

## Remarks

- The argument uses only bilinearity and the diagonal pattern. No positivity and no nondegeneracy is involved, which is why the criterion works over $\mathbb{F}_2$ as well as over $\mathbb{R}$.
