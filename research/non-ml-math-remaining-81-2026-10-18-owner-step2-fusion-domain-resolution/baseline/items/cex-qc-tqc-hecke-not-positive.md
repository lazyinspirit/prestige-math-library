---
id: cex-qc-tqc-hecke-not-positive
kind: counterexample
title: A Hecke parameter does not certify a positive unitary structure
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-generic-type-a-hecke-algebra, def-linear-isometry-and-orthogonal-or-unitary-operator, def-real-and-complex-inner-product-space]
justified_by: []
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement refuted

The claim refuted is that the algebraic type-A Hecke relations at every
parameter automatically supply a positive-definite inner product making the
resulting module action unitary.

## Facts & Assumptions

**Given:** the root type-A Hecke algebra in its $v$-normalization, specialized
to $v=2$, and the one-dimensional complex vector space $V=\mathbb C$.

[F1] [[def-generic-type-a-hecke-algebra]]: at a unit specialization $v_0$,
the type-A generators satisfy $(T_i-v_0)(T_i+1)=0$ and the Artin braid and
distant-commutativity relations.

[F2] [[def-real-and-complex-inner-product-space]]: a positive-definite complex
inner product has induced norm $\|z\|=\sqrt{\langle z,z\rangle}$, with
$\|z\|>0$ for $z\ne0$ and $\|\lambda z\|=|\lambda|\,\|z\|$.

[F3] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary
operator is an invertible linear isometry and therefore preserves this norm.

## Counterexample
1.1 The specialization $v\mapsto2$ is valid because $2\in\mathbb C^\times$. Assign $T_1\mapsto2I_V$ and $T_2\mapsto2I_V$. The quadratic relator maps to $(2-2)(2+1)I_V=0$. The adjacent braid relator maps to $2I_V\,2I_V\,2I_V=8I_V$ on both sides; there is no distant pair for $n=3$. Thus every defining relator vanishes, so the assignment from the free algebra descends to a one-dimensional $H_2(3)$-module. [F1, given, construct, algebra]

2.1 Let $z\ne0$. For any positive-definite Hermitian form on $V$, $\|T_i z\|=\|2z\|=2\|z\|\ne\|z\|$ by [F2]. Therefore $T_i=2I_V$ is not an isometry and cannot be unitary by [F3], for any choice of positive inner product. [F2, F3, step 1.1, algebra]

3.1 The specialization satisfies the algebraic Hecke and braid relations but its one-dimensional module has no positive inner product making its generators unitary. Hence an algebraic Hecke parameter alone is not a positivity or unitarity certificate. This witness says nothing about other parameters or about modules supplied with a separately verified dagger structure. [F1, step 1.1, step 2.1] ∎
