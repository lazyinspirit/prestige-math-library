---
id: cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals
kind: counterexample
title: Sum and product totalisations can differ on infinite diagonals
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-direct-sum-total-complex-of-a-double-complex, lem-the-total-differential-squares-to-zero, def-product-total-complex-of-a-double-complex, lem-countable-sequence-groups-and-tail-filtrations]
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
    - title: "Weibel, Chapter 5; explicit infinite-diagonal binary witness"
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
---

## Statement refuted

Whenever both totalisations of a homological double complex exist, they are
isomorphic as chain complexes.

## Facts & Assumptions

[F1] [[def-direct-sum-total-complex-of-a-double-complex]] and [[lem-the-total-differential-squares-to-zero]] give the direct-sum total complex.

[F2] [[def-product-total-complex-of-a-double-complex]] gives the product total complex.

[F3] [[lem-countable-sequence-groups-and-tail-filtrations]] constructs $S=(\mathbb Z/2)^{(\mathbb N)}$ and $P=(\mathbb Z/2)^{\mathbb N}$ and proves that $S$ is countably infinite while $P$ is uncountable.

## Counterexample

**Given:** The category of abelian groups, and $C_{j,-j}=\mathbb Z/2$ for $j\ge0$, with every other component zero and every horizontal and vertical arrow zero.

1.1 Each individual square and each mixed composite is zero, so these data are an anticommuting double complex. Its only nonzero diagonal is total degree zero. The two total objects there are respectively $S$ and $P$ by their universal properties; all other total degrees are zero. The total differentials are zero by their defining formulas, so both constructions exist as chain complexes. [F1, F2, F3, given]

2.1 Any chain-complex isomorphism between them would have an isomorphism $S\to P$ in degree zero, hence a bijection of the underlying sets. Composing it with the enumeration of $S$ would enumerate $P$, contrary to its proved uncountability. Thus even an abstract chain isomorphism is impossible. In particular the canonical comparison is the finite-support inclusion, which misses the constant-one sequence. The infinitely many nonzero components in degree zero are essential to this witness; the zero groups in other degrees cause no exception. [F3, step 1.1] ∎
