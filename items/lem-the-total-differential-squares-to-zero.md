---
id: lem-the-total-differential-squares-to-zero
kind: lemma
title: The total differential squares to zero
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-direct-sum-total-complex-of-a-double-complex, def-homological-double-complex, def-products-and-coproducts]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Definition 12.18.3; direct verification with translated signs"
      url: https://stacks.math.columbia.edu/tag/0FNB
---

## Statement

For the direct-sum totalisation of an anticommuting homological double
complex, $d_{n-1}d_n=0$ for every integer $n$.

## Facts & Assumptions

[F1] [[def-direct-sum-total-complex-of-a-double-complex]] defines $d_n$ by its composites with the diagonal coproduct injections.

[F2] [[def-homological-double-complex]] gives $h^2=0$, $v^2=0$ and the indexed anticommuting-square identity.

[F3] [[def-products-and-coproducts]] gives uniqueness of an arrow out of a coproduct from its composites with all injections.

## Proof

**Given:** Such a double complex $C$ and its existing diagonal coproducts $T_n$, with injections $\iota^n_{p,q}$ and differentials $d_n$.

1.1 Fix $n$ and $p+q=n$. Substitute the defining formula for $d$ twice and distribute composition over addition. This gives $d_{n-1}d_n\iota^n_{p,q}=\iota^{n-2}_{p-2,q}h_{p-1,q}h_{p,q}+\iota^{n-2}_{p-1,q-1}(v_{p-1,q}h_{p,q}+h_{p,q-1}v_{p,q})+\iota^{n-2}_{p,q-2}v_{p,q-1}v_{p,q}$. Each term is an arrow from $C_{p,q}$ to $T_{n-2}$. [F1, algebra]

2.1 The first and last composites vanish by the two square-zero axioms; the middle parenthesis vanishes by anticommutation. Therefore $d_{n-1}d_n\iota^n_{p,q}=0$ for every $p+q=n$, including when any of the source or target components is zero. [F2, step 1.1]

3.1 The zero arrow $T_n\to T_{n-2}$ has these same composites with every injection. Coproduct uniqueness therefore gives $d_{n-1}d_n=0$. Since $n$ was arbitrary, all chain identities hold. The argument also covers an all-zero or a single-supported diagonal and uses no exactness of infinite coproducts or representative selections. [F3, step 2.1] ∎
