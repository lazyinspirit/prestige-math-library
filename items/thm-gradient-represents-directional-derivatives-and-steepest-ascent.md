---
id: thm-gradient-represents-directional-derivatives-and-steepest-ascent
kind: theorem
title: "For a differentiable scalar field, $D_vf(a)=\\langle\\nabla f(a),v\\rangle$ and the unit direction of steepest ascent is the normalized gradient"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-total-derivative-computes-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, thm-cauchy-schwarz-and-the-euclidean-norm]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement

If a scalar-valued $f:U\to\mathbb R$ is totally differentiable at $a$, then $D_vf(a)=\langle\nabla f(a),v\rangle$ for every $v$. Among unit vectors $v$, this is at most $\|\nabla f(a)\|_2$; if the gradient is nonzero, equality holds exactly in the direction $\nabla f(a)/\|\nabla f(a)\|_2$. If the gradient is zero, every unit direction has directional derivative zero.

## Facts & Assumptions

**Given:** A scalar-valued totally differentiable $f$ at $a$ and a direction $v$.

[L1] A total derivative computes every directional derivative, and its matrix is the Jacobian ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L2] **Cauchy--Schwarz:** $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Proof

**Proof technique:** cases.

1.1 By [L1], $D_vf(a)$ is the Jacobian row applied to $v$, namely $\sum_j\partial_jf(a)v_j=\langle\nabla f(a),v\rangle$. [L1, L2]

2.1 If $\nabla f(a)\ne0$ and $\|v\|_2=1$, [L2] gives $D_vf(a)\le\|\nabla f(a)\|_2$, with equality at $v=\nabla f(a)/\|\nabla f(a)\|_2$. [assume-case nonzero, step 1.1, L2, algebra]

3.1 If $\nabla f(a)=0$, step 1.1 makes every directional derivative zero; together with step 2.1 this proves the stated alternatives. [assume-case zero, step 1.1, step 2.1, cases-exhaustive] ∎
