---
id: thm-quillen-k-finite-generation-from-stable-gl-homology
kind: theorem
title: Quillen K-group finite generation from stable general-linear homology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-monoidal-bar-telescope-group-completion-homology
  - thm-split-exact-quillen-q-is-monoidal-group-completion
  - thm-connected-cw-h-space-finite-integral-homology-implies-finite-homotopy
  - def-higher-quillen-k-group-of-ring-of-integers
---

## Statement

Let $R$ be a commutative unital ring. Suppose that $H_j(B\operatorname{GL}_\infty(R);\mathbb Z)$ is finitely generated for every $j\ge0$. Then each positive Quillen group $K_n(R)$ is a finitely generated abelian group. This is conditional on the displayed stable integral homology hypothesis, uses no axiom of choice, and makes no claim about $K_0$.

## Statement references

[[thm-monoidal-bar-telescope-group-completion-homology]]

[[thm-split-exact-quillen-q-is-monoidal-group-completion]]

[[thm-connected-cw-h-space-finite-integral-homology-implies-finite-homotopy]]

[[def-higher-quillen-k-group-of-ring-of-integers]]

## Facts & Assumptions

**Given:** The ring R and the stable integral general-linear homology finiteness hypothesis in the Statement.

[F1] The actual stable matrix telescope has a specified based homotopy equivalence to BGL∞(R), and its map to the identity component of the localized projective groupoid is a homology isomorphism for every commutative coefficient ring. The localized groupoid is a homotopy-commutative H-space under direct sum. [[thm-monoidal-bar-telescope-group-completion-homology]]

[F2] The actual localized split-extension comparison gives a based weak zigzag between that group-completion space and the loop space of the Q-construction. [[thm-split-exact-quillen-q-is-monoidal-group-completion]]

[F3] A connected based CW H-space with pointed unit homotopies and finitely generated integral homology has finitely generated positive homotopy groups. [[thm-connected-cw-h-space-finite-integral-homology-implies-finite-homotopy]]

[F4] Quillen's K_n(R) is π_(n+1) of the classifying space of its Q-category. [[def-higher-quillen-k-group-of-ring-of-integers]]

## Proof

**Proof technique:** The actual stable matrix telescope and finite-homology H-space theorem.

1.1 Let T_R be the specified stable matrix telescope and L₀ the identity component of the actual direct-sum group-completion space in [F1]. The specified homotopy equivalence T_R→BGL∞(R) and the homology isomorphism T_R→L₀ with Z-coefficients give H_j(L₀;Z)≅H_j(BGL∞(R);Z) for every j. Thus the Given hypothesis makes all H_j(L₀;Z) finitely generated. [F1, given, construct, algebra]

2.1 L₀ is a connected CW complex: it is a union of components of the geometric realization of the supplied small groupoid nerve, with its simplicial characteristic cells. Its based direct-sum product has the actual pointed unit homotopies in [F1]. Apply [F3] to conclude that π_n(L₀) is finitely generated for every n≥1. The construction uses the supplied cells and product rather than a chosen arbitrary CW replacement. [F1, F3, step 1.1, construct, algebra]

3.1 The based weak zigzag of [F2] identifies π_n(L₀) with π_n(ΩBQ_R,0)=π_(n+1)(BQ_R,0); by [F4] the latter is K_n(R). Hence every positive K_n(R) is finitely generated. The zero group is allowed, and no K₀ or unconditional stable-homology claim is made. [F2, F4, step 2.1, algebra] ∎
