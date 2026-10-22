---
id: ex-ip-failed-nsp-two-column-nonunique-basis-pursuit
kind: example
title: "A two-column matrix where basis pursuit is not unique"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-nullspace-property
  - def-p-norms-on-rn
  - lem-of-triangle-inequality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references: []
---

## Example

Let $A=[1\;1]\in M_{1\times2}(\mathbb R)$ and $s=1$, using one-based
coordinate labels $j=1,2$ corresponding to library indices $j-1$. The vector
$h=(1,-1)$ lies in $\ker A$, and for
$S=\{1\}$ the strict nullspace inequality fails because
$\|h_S\|_1=\|h_{S^c}\|_1=1$. Under the constraint $z_1+z_2=1$, the function
$|z_1|+|z_2|$ has minimum $1$, attained both by $x^\dagger=(1,0)$ and by
$z=(0,1)$; therefore the displayed optimization problem has two distinct
minimizers.

## Example references

[[def-ip-nullspace-property|Strict nullspace property and coordinate conventions]]

[[def-p-norms-on-rn|Finite-dimensional one-norm]]

[[lem-of-triangle-inequality|Triangle inequality for real absolute values]]

## Facts & Assumptions

**Given:** $A=[1\;1]$, $s=1$, and the vectors $h=(1,-1)$, $x^\dagger=(1,0)$, and $z=(0,1)$ in $\mathbb R^2$.

[F1] [[def-ip-nullspace-property]]: strict NSP requires $\|h_S\|_1<\|h_{S^c}\|_1$ for every nonzero kernel vector and every $S$ of size at most $s$.

[F2] [[def-p-norms-on-rn]]: on $\mathbb R^2$, $\|u\|_1=|u_1|+|u_2|$.

[F3] [[lem-of-triangle-inequality]]: $|a+b|\le|a|+|b|$ for real $a,b$.

[F4] [[def-ip-nullspace-property]]: the matrix-vector product is computed by the one-based row formula in the definition.

## Verification

1.1 By [F4], $Ah=1-1=0$, and $h\ne0$. For $S=\varnothing$, $h_S=(0,0)$ and $h_{S^c}=h$, so [F2] gives $\|h_S\|_1=0<2=\|h_{S^c}\|_1$. For $S=\{1\}$, $h_S=(1,0)$ and $h_{S^c}=(0,-1)$, so [F2] gives $\|h_S\|_1=1=\|h_{S^c}\|_1$. Thus the required strict inequality fails for this admissible support, as claimed by [F1]. [given, F1, F2, F4, algebra]

2.1 By [F4], every vector $w=(w_1,w_2)$ feasible for this datum satisfies $w_1+w_2=1$, so [F3] gives $1=|w_1+w_2|\le|w_1|+|w_2|$. Both $x^\dagger$ and $z$ are feasible and have objective value $1$ by [F2]; they are distinct, so both attain the minimum of the displayed objective and it is not unique. [given, F2, F3, F4, algebra] ∎
