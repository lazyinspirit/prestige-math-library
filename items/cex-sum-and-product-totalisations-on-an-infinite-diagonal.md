---
id: cex-sum-and-product-totalisations-on-an-infinite-diagonal
kind: counterexample
title: Sum and product totalisations on an infinite diagonal
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals", "lem-countable-sequence-groups-and-tail-filtrations", "def-homology-object-of-a-chain-complex", "def-direct-sum-total-complex-of-a-double-complex", "def-product-total-complex-of-a-double-complex"]
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
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement refuted

The two totalisations of an infinite-diagonal double complex need not have the same homology. In particular it is false that they are always isomorphic. Compute the witness $C_{j,-j}=\mathbb Z/2$ for $j\ge0$, with all other components and all arrows zero.

## Facts & Assumptions

[F1] [[def-direct-sum-total-complex-of-a-double-complex]] and [[def-product-total-complex-of-a-double-complex]] define the diagonal total objects and their differentials.

[F2] [[lem-countable-sequence-groups-and-tail-filtrations]] gives $S=k^{(\mathbb N)}$, $P=k^{\mathbb N}$, their universal properties and their distinct countable/uncountable cardinalities, with $k=\mathbb Z/2$.

[F3] [[def-homology-object-of-a-chain-complex]] defines homology as cycles modulo boundaries.

## Counterexample

**Given:** The zero-arrow double complex in the statement, as in [[cex-sum-and-product-totalisations-can-differ-on-infinite-diagonals]]. Its zero composites satisfy all double-complex identities.

1.1 Only total degree zero has nonzero components. Consequently $\operatorname{Tot}^{\oplus}_0C=S$ and $\operatorname{Tot}^{\Pi}_0C=P$ by [F1, F2]. All other total degrees and every total differential vanish. In either complex every degree-zero element is a cycle and the boundary subgroup is zero. Thus the homology groups in degree zero are $S$ and $P$ respectively, and all other homology groups are zero. [F1, F2, F3]

2.1 The canonical comparison has degree-zero component the finite-support inclusion. The tuple $(1,1,\ldots)$ has infinite support, so it is not in the image; its homology class is unchanged because there are no boundaries. Even an abstract homology isomorphism is impossible: $S$ has a bijection with $\mathbb N$, while every purported enumeration $e:\mathbb N\to P$ misses the sequence $y_j=1-e(j)_j$. Therefore a bijection $S\to P$ would contradict [F2]. [F2, F3, step 1.1]

3.1 The support includes $(j,-j)$ for every positive $j$, so is not first quadrant and is infinite on its sole nonzero diagonal. Hence neither first-quadrant finite-diagonal comparison nor finite-filtration convergence is contradicted. The index $j=0$ contributes one copy of $k$, the omitted total degrees are genuinely zero, and all constructions and diagonalization are explicit and choice-free. [F1, F2, step 1.1, step 2.1] ∎
