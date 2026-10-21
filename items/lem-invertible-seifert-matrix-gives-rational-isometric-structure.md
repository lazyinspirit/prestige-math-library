---
id: lem-invertible-seifert-matrix-gives-rational-isometric-structure
kind: lemma
title: "An invertible Seifert matrix gives a rational isometric structure"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-knot-seifert-pairing-and-matrix
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - def-integral-witt-and-seifert-isometric-structures
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles Livingston, The concordance genus of a knot, II"
      url: "https://msp.org/agt/2009/9-1/agt-v9-n1-p06-p.pdf"
      locator: "§2, printed pp. 169–170"
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§3.4, printed pp. 326–328"
---

## Statement

Assume full AC for the knot Seifert-pairing convention. Let $V\in M_{2g}(\mathbb Z)$ be an invertible Seifert matrix and put $B=V+V^T$ and $T=V^{-1}V^T$ on $\mathbb Q^{2g}$. Then $B$ is a nonsingular symmetric bilinear form, $T$ is an invertible $B$-isometry, and $I-T$ is invertible; hence $(\mathbb Q^{2g},B,T)$ is a rational Seifert isometric structure.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push integral Seifert matrix]]

[[def-integral-witt-and-seifert-isometric-structures|The definition of a rational Seifert isometric structure]]

## Facts & Assumptions

**Given:** Full AC and an invertible integral Seifert matrix $V$.

[A1] Full AC is the stated hypothesis of the Seifert-pairing interface. [[def-axiom-of-choice]]

[F1] For a knot Seifert matrix, $V-V^T$ is the unimodular surface intersection matrix. [[lem-seifert-matrix-skew-part-is-surface-intersection]]

[F2] A rational Seifert isometric structure has a nonsingular symmetric form $B$, an invertible $B$-isometry $T$, and invertible $I-T$. [[def-integral-witt-and-seifert-isometric-structures]]

## Proof

1.1 The matrix $B=V+V^T$ is symmetric. Modulo $2$, $V+V^T\equiv V-V^T$; by [F1] the determinant of $V-V^T$ is odd, so $\det B$ is odd and in particular nonzero. Thus $B$ is nonsingular over $\mathbb Q$. [A1, F1, given, algebra]

2.1 Since $V$ and $V^T$ are invertible over $\mathbb Q$, $T=V^{-1}V^T$ is invertible. Direct multiplication gives $$ T^TBT=V(V^T)^{-1}(V+V^T)V^{-1}V^T=V+V^T=B, $$ because the two summands in the middle expression simplify respectively to $V$ and $V^T$. Therefore $T$ is a $B$-isometry. [F2, step 1.1, algebra]

3.1 Finally $I-T=V^{-1}(V-V^T)$, which is invertible by invertibility of $V$ and [F1]. The three defining conditions in [F2] hold, proving the claim. [F1, F2, step 2.1, algebra] ∎

