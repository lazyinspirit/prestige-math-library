---
id: lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected
kind: lemma
title: "Multipartitions with fixed component cores are cyclotomic Jantzen-connected"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 27
deps: [lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage,
       thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations,
       def-e-core-e-quotient-and-e-weight,
       thm-e-core-is-independent-of-the-rim-hook-removal-order,
       prop-core-quotient-size-and-weight-formula,
       cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core,
       prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451"
      locator: "Actually read full PDF pp. 1–20; relevant Prop. 2.3/2.9/Theorem 2.11 and §3. Local proof bodies and Q/J suppliers replace citation-only use."
---

## Statement

Under the arbitrary-field finite-$e$ nondegenerate cyclotomic hypotheses of
[[lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage]], any
two $\ell$-multipartitions of a common rank $n$ with equal componentwise
$e$-cores are $J$-equivalent, even if their component sizes differ. At fixed
component sizes, the full-level coefficient for a change in a single
component equals its level-one coefficient. The proof consumes the actual
same-$e$-core Hecke Specht block theorem for all ranks
([[cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]])
rather than a readiness receipt, and imports no Carter-partition
classification.

## Facts & Assumptions

**Given:** The Jantzen linkage equivalence [F1], the exact $J$ formula [F2],
the level-one identification [F3], the same-core Hecke block theorem [F4],
and the $e$-core/e-weight conventions [F5]–[F7].

[F1] $\lambda\sim_J\mu$ iff the corresponding Schur standards share a block
iff the Murphy Specht modules share a Hecke block, at any level and over any
field in the stated regime
([[lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage]]).

[F2] The integer $J_{\lambda\mu}$ is the signed sum of
$\nu_\pi(\operatorname{res}_{\mathcal O}(f_x^\lambda)-\operatorname{res}_{\mathcal O}(f_y^\mu))$
over equal-remainder equal-length hook pairs, $0$ unless $\lambda$ strictly
dominates $\mu$, and every foot difference is nonzero in $K$
([[thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations]]).

[F3] At level one the arbitrary-level cyclotomic Hecke algebra is the finite
type-A Hecke algebra
([[prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras]]).

[F4] Two type-A Hecke Specht modules are in the same block exactly when their
labels have the same $e$-core
([[cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]]).

[F5] $e$-core, $e$-quotient and $e$-weight of a partition
([[def-e-core-e-quotient-and-e-weight]]), with the core independent of the
removal order ([[thm-e-core-is-independent-of-the-rim-hook-removal-order]])
and the size/weight formula ([[prop-core-quotient-size-and-weight-formula]]).

## Proof

**Proof technique:** direct.

**Given:** The rank $n$, the charges, and the suppliers of [F1]–[F5].

1.1 One component at a time, at level one. Suppose first that the component sizes agree. For a single component $a$ of rank $m$, the actual level-one Hecke algebra is the finite Hecke algebra by [F3]. Its same-core Specht-block clause [F4], together with the level-one case of the Jantzen linkage equivalence [F1], connects any two rank-$m$ partitions with equal $e$-core by level-one Jantzen edges. The Dipper–James to Murphy convention change is conjugate-dual, and core equality is preserved because the core of the transpose is the transpose of the core, so the exact existing clause applies over the original field $F$ without an algebraic-closure hypothesis. The rank $m=0$ case has a single empty partition and needs no block theorem. [F1, F3, F4, F5]

1.2 Equalizing the component weights. If the component weights differ, choose a component whose weight exceeds its target and one whose weight is deficient; a positive-weight component has a removable $e$-hook by its core construction [F5]. For any prescribed foot residue $f$, moving the lowest bead on runner $f-1$ down by $e$ creates an $e$-hook with that foot residue, since its foot residue is the starting beta position plus one; wrap this hook in the deficient component with the same foot residue. The changed components determine the removed and added hook pair uniquely, and in the appropriate dominance orientation their $J$ contribution is one signed valuation with no cancellation; equal foot residues mean the nonzero generic difference is divisible by $t-1$, so the valuation is a positive integer. Nonzero generic foot differences are part of the exact formula [F2], and no unit-difference or characteristic-zero restriction is inserted. Thus the transfer is a Jantzen edge; it lowers the sum of squares of the discrepancies of the component hook weights by at least $2$, so finitely many such transfers equalize the component weights. Every moved $e$-hook preserves its component's core by [F5], and every step preserves the total rank. [F2, F5]

2.1 Fixed component sizes. For two full multipartitions that differ only in component $a$, every contributing equal-remainder hook pair in $J$ lies in $a$: the other components are unchanged on both sides and cancelling hooks between two unchanged components would return the same multipartition. The common residue factor $Q_at^{na}$ is a unit of $\mathcal O$, and replacing it by the level-one factor $Q_at^m$ multiplies each foot difference by a Laurent unit, so the valuation is unchanged and the full-level $J$ coefficient equals the level-one coefficient of [F2]. Inserting the level-one paths of step 1.1 in component $a$ and leaving the other components fixed connects all multipartitions with equal component sizes and the same component cores. [F1, F2, step 1.1]

3.1 Conclusion. Steps 1.2 equalize component sizes along Jantzen edges from any starting multipartition, and step 2.1 connects all multipartitions of fixed component sizes with equal component cores. Composing the two finite chains connects any two multipartitions of rank $n$ with equal componentwise $e$-cores, proving that they are $J$-equivalent; the fixed-size comparison of coefficients is step 2.1. [F1, F2, step 2.1, step 1.2] ∎

## Remarks

The lemma reduces the multipartition block question to the componentwise
$e$-core data and the level-one Hecke theorem, using the exact level-one to
finite-Hecke identification and the explicit hook transfer between
components. No choice principle is used: all chains and hook moves are
finite and explicitly constructed.
