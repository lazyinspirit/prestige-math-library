---
id: def-direct-sum-total-complex-of-a-double-complex
kind: definition
title: Direct sum total complex of a double complex
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-homological-double-complex, def-products-and-coproducts]
justified_by: [lem-the-total-differential-squares-to-zero]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Definition 12.18.3 (anticommuting convention)"
      url: https://stacks.math.columbia.edu/tag/0FNB
---

## Definition

Let $C$ be a [[def-homological-double-complex|homological double complex]] in
an abelian category. Suppose that for every integer $n$ the diagonal
[[def-products-and-coproducts|coproduct]] below exists, and write its injections
as $\iota^n_{p,q}$:
$$T_n=\operatorname{Tot}^{\oplus}_n(C)=\coprod_{p+q=n}C_{p,q}.$$
Define $d_n:T_n\to T_{n-1}$ to be the unique arrow with
$$d_n\iota^n_{p,q}=\iota^{n-1}_{p-1,q}h_{p,q}+\iota^{n-1}_{p,q-1}v_{p,q}\quad(p+q=n).$$
Each right-hand side is the sum of two morphisms with the same source and
target. The coproduct universal property supplies a unique $d_n$ from this
family; no infinite sum in a morphism group is required.

The resulting **direct-sum total complex** has differential of degree $-1$.
Its chain condition is established in
[[lem-the-total-differential-squares-to-zero]]. A diagonal with only zero
objects has zero coproduct: every family of maps from its objects is the
unique zero family. A diagonal with exactly one nonzero object has that
object as coproduct. For general infinite diagonals existence is a hypothesis,
not an implication of being an abelian category. No choices of elements or
representatives enter this construction.
