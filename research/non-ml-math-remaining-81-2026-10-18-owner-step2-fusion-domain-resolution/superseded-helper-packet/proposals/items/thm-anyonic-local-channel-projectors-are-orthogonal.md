---
id: thm-anyonic-local-channel-projectors-are-orthogonal
kind: theorem
title: "Local channel projections are orthogonal idempotents"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-anyonic-local-channel-projector, def-qc-tqc-unitary-fusion-category, lem-anyonic-general-split-tree-recoupling]
justified_by: []
proof_strategy: direct
axiom_use: None; the proof is finite-dimensional linear algebra.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Penneys, Unitary Fusion Categories, Math 8800 lecture notes"
      url: "https://people.math.osu.edu/penneys.2/UQSL/ArchivedNotes/TPM/FusionCats.pdf"
      locator: "§§3.2–3.5, PDF pp. 4–16: unitary associators and orthonormal F-matrices."
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§3.4.1, PDF pp. 34–35, equations (3.68)–(3.70): F-move channel operators."
verification:
  precheck: pass
---

## Statement

For a unitary fusion category and any fixed adjacent pair of simple site charges, the family $(P_{i,s})_s$ from [[def-anyonic-local-channel-projector]] is pairwise orthogonal, self-adjoint, and idempotent, and its sum over all simple pair outputs $s$ is the identity on the path space.

## Facts & Assumptions

**Given:** A unitary fusion category, a fusion-path Hilbert space, orthonormal tree bases, and an adjacent pair of simple charges.

[F1] [[def-anyonic-local-channel-projector]]: $P_{i,s}=F_i^{-1}\Pi_sF_i$, where $\Pi_s$ projects onto all basis coordinates of pair output $s$.

[F2] [[def-qc-tqc-unitary-fusion-category]]: the associator is unitary and tensor product preserves daggers.

[F3] [[lem-anyonic-general-split-tree-recoupling]]: postcomposition by a unitary associator preserves the split Hom inner product, so every split-tree recoupling matrix in orthonormal bases and its finite composite $F_i$ are unitary.

## Proof

**Given:** The category, pair, tree bases, and operators specified in the Statement.

1.1 In the pair-first tree, the direct-sum decomposition by simple outputs is orthogonal by [F2]. Hence each block projection satisfies $\Pi_s^\dagger=\Pi_s$, $\Pi_s^2=\Pi_s$, $\Pi_s\Pi_t=0$ for $s\ne t$, and $\sum_s\Pi_s=I$, including all multiplicity coordinates. [F1, F2, algebra]

2.1 By [F3], $F_i^{-1}=F_i^\dagger$. Thus $P_{i,s}=F_i^\dagger\Pi_sF_i$, so $P_{i,s}^\dagger=P_{i,s}$ and $P_{i,s}^2=F_i^\dagger\Pi_s^2F_i=P_{i,s}$. For $s\ne t$, $P_{i,s}P_{i,t}=F_i^\dagger\Pi_s\Pi_tF_i=0$, and $\sum_sP_{i,s}=F_i^\dagger I F_i=I$. [F1, F3, algebra] ∎
