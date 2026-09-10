---
id: lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
kind: lemma
title: Haar measure is positive on nonempty open sets and finite on compact sets
deps: [def-left-haar-integral-and-left-haar-measure, lem-haar-covering-ratios-are-finite-and-positive, def-radon-measure-on-an-lch-space]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
sources:
  references:
    - title: Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2
      url: https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf
proof_strategy: direct
---

## Statement

Every left Haar measure is positive on every nonempty open set and finite on every compact set, and is locally finite. Every left Haar integral is strictly positive on every nonzero nonnegative $C_c$ function.

## Facts & Assumptions

**Given:** A Haar measure $\mu$ or Haar integral $I$ on an LCH group.

[F1] Haar objects are nonzero and left invariant; measures are compact-finite and regular. ([[def-left-haar-integral-and-left-haar-measure]])

[F2] A nonnegative compactly supported function has a finite translating cover by any nonzero nonnegative test function. ([[lem-haar-covering-ratios-are-finite-and-positive]])

[F3] Open inner regularity and Borel outer regularity are required. ([[def-radon-measure-on-an-lch-space]])

## Proof

**Proof technique:** direct.

1.1 Since $I\ne0$, some real $h$ has $I(h)\ne0$. From $h=h^+-h^-$ and positivity at least one nonnegative part $g$ has $I(g)>0$. For $0\ne f\ge0$ choose $g\le\sum c_jL_{x_j}f$. Positivity and invariance imply $0<I(g)\le(\sum c_j)I(f)$, so $I(f)>0$. [F1, F2]

1.2 If a nonempty open $U$ had $\mu(U)=0$, fix $u\in U$. The translates $xu^{-1}U$ cover $G$. Any compact $K$ is covered by finitely many and hence has zero measure. Open inner regularity would give zero measure to every open set, and outer regularity would then give zero measure to every Borel set, contrary to nonzeroness. Thus every nonempty open set has positive measure. [F1, F3]

2.1 Compact finiteness is part of the definition. A compact neighbourhood of any point contains an open neighbourhood of no larger measure, proving local finiteness. The empty set still has measure zero and the zero test function has integral zero, so neither is incorrectly included in the strict positivity assertions. [F1, step 1.1, step 1.2] ∎

## Sources

Pedersen, Haar integral, p.2 definitions and lemma; p.3 Theorem 1; pp.4–5 second proof and Remark 2. Local argument and conventions as displayed above.
