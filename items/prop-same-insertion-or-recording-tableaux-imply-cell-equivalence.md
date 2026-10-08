---
id: prop-same-insertion-or-recording-tableaux-imply-cell-equivalence
kind: proposition
title: Equal insertion or recording tableaux imply right or left equivalence
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells, thm-knuth-equivalence-classes-are-insertion-tableau-fibers, def-star-operations-on-the-symmetric-group, lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges, cor-rsk-symmetry-under-inversion]
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 — Proposition 3.8 and its complete proof via Knuth moves and star operations."
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§3.2, Definition 3.2 and Theorem 3.3, printed pp. 7–8; §3.4, Proposition 3.8 with its complete proof, printed p. 10. The proof here uses the completed local Knuth-fiber and star-cell suppliers."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Facts & Assumptions

**Given:** $n\ge1$, permutations $x,y\in S_n$, their insertion tableaux $P(x),P(y)$, recording tableaux $Q(x),Q(y)$, and the Kazhdan–Lusztig cell preorders.

[F1] Knuth equivalence satisfies $x\sim_Ky$ iff $P(x)=P(y)$, and dual Knuth equivalence satisfies $x\sim_{dK}y$ iff $Q(x)=Q(y)$ ([[thm-knuth-equivalence-classes-are-insertion-tableau-fibers]]).

[F2] The star table exchanges exactly the four local triples in the two elementary Knuth relations; thus every elementary Knuth move is a right star pair, and each such pair satisfies $w^*\sim_Rw$ ([[def-star-operations-on-the-symmetric-group]], [[lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges]]).

[F3] RSK is symmetric under inversion: $P(w^{-1})=Q(w)$ and $Q(w^{-1})=P(w)$ ([[cor-rsk-symmetry-under-inversion]]).

[F4] Inversion transports cell relations: $a\sim_Lb$ iff $a^{-1}\sim_Rb^{-1}$ ([[def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells]]).

## Statement

For $x,y\in S_n$: (a) $P(x)=P(y)\Rightarrow x\sim_Ry$; (b) $Q(x)=Q(y)\Rightarrow x\sim_Ly$. Equivalently, each Knuth class lies in a single right cell and each dual Knuth class lies in a single left cell.

## Proof

**Proof technique:** join equal-tableau permutations by elementary Knuth moves and transport the resulting cell equivalence through inversion.

1.1 **Insertion tableaux give right-cell equivalence.** Suppose $P(x)=P(y)$. By [F1], $x\sim_Ky$, so there is a finite chain $x=w_0,\ldots,w_m=y$ whose successive terms differ by an elementary Knuth move. By [F2], each adjacent pair satisfies $w_k\sim_Rw_{k+1}$; transitivity of the right-cell equivalence gives $x\sim_Ry$. If the chain has length zero, reflexivity gives the same conclusion. [F1, F2, algebra]

2.1 **Recording tableaux give left-cell equivalence.** Suppose $Q(x)=Q(y)$. By [F3], $P(x^{-1})=Q(x)=Q(y)=P(y^{-1})$, so step 1.1 applied to $x^{-1},y^{-1}$ gives $x^{-1}\sim_Ry^{-1}$. Inverting this cell equivalence by [F4] yields $x\sim_Ly$. [F3, F4, step 1.1, algebra]

3.1 **Class formulation.** By [F1], every pair in a Knuth class has equal insertion tableaux, so step 1.1 puts the whole class in one right cell. Every pair in a dual Knuth class has equal recording tableaux, so step 2.1 puts that class in one left cell. These are exactly the two equivalent class statements. [F1, step 1.1, step 2.1] ∎

## Remarks

The finite Knuth chains use the locally proved star-pair right-cell equivalence; recording-tableau equality is transported through inversion of cells. Coefficientwise positivity is not required.

No choice principle is used.
