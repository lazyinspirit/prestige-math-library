---
id: thm-cft-strongly-rational-character-modularity
kind: theorem
title: Modular transformation of strongly rational VOA characters
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: mathematics
deps:
- def-cft-strong-rational-voa
- def-cft-ordinary-character
- def-rational-vertex-algebra
- def-admissible-vertex-algebra-module
- lem-cft-c2-finite-higher-zhu-and-convergent-ordinary-characters
- lem-cft-rational-one-point-ward-blocks-ordinary-trace-completeness
- lem-cft-genus-one-ward-identities-modular-covariant
dependency_roles:
  def-cft-strong-rational-voa: mathematical-premise
  def-cft-ordinary-character: mathematical-premise
  def-rational-vertex-algebra: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  lem-cft-c2-finite-higher-zhu-and-convergent-ordinary-characters: mathematical-premise
  lem-cft-rational-one-point-ward-blocks-ordinary-trace-completeness: mathematical-premise
  lem-cft-genus-one-ward-identities-modular-covariant: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: Yi-Zhi Huang, Vertex operator algebras and the Verlinde conjecture
    url: https://arxiv.org/pdf/math/0406291v3
    locator: Section 1, PDF pages 2–4; Theorems 5.2 and 5.5 and their adjacent proof,
      PDF pages 52–56.
  - title: Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks
      of Rational Vertex Operator Algebras
    url: https://arxiv.org/pdf/2507.05845v2
    locator: Theorem 4.2.2, Sections 4.2–4.5, and the genus-one mapping-class discussion
      in Sections 5.3–5.5.
---

## Statement

Let $V$ be a strongly rational VOA in the shared five-condition convention, and let $I$ be the complete set of inequivalent irreducible ordinary $V$-modules. Then $I$ is finite, every formal character $\chi_i(\tau)=\operatorname{Tr}_{M_i}(q^{L_M(0)-c/24})$ converges on the upper half-plane $\mathbb H$, and the resulting finite character vector $\chi=(\chi_i)_{i\in I}$ spans a finite-dimensional space invariant under the modular transformations $S:\tau\mapsto-1/\tau$ and $T:\tau\mapsto\tau+1$. Use the source convention in which $S$ acts by $\chi_i(-1/\tau)=\sum_j S_{ij}\chi_j(\tau)$, and $T$ acts diagonally with entries $T_{ii}=e^{2\pi i(h_i-c/24)}$, where $h_i$ is the lowest conformal weight of $M_i$. The multiplier and projective-representation conventions are part of the theorem.

## Statement references

[[def-cft-strong-rational-voa]]

[[def-cft-ordinary-character]]

[[def-rational-vertex-algebra]]

[[def-admissible-vertex-algebra-module]]

## Facts & Assumptions

**Given:** V has the unchanged strongly rational hypotheses in the Statement.

[F1] [[lem-cft-c2-finite-higher-zhu-and-convergent-ordinary-characters]] proves finiteness of the irreducible ordinary-module set and absolute locally uniform convergence of the ordinary characters on H, directly from difference-one spanning.

[F2] [[lem-cft-rational-one-point-ward-blocks-ordinary-trace-completeness]] proves that the geometrically modified ordinary trace maps on V are holomorphic one-point Ward blocks on H and span all such blocks with constant coefficients. Its proof includes the exact central shift −c/24 and requires no modular-functor or rigidity result.

[F3] [[lem-cft-genus-one-ward-identities-modular-covariant]] proves that every modular substitution maps a Ward block F to the Ward block v↦F((cτ+d)^{−L(0)}v;(aτ+b)/(cτ+d)), with the chosen logarithm branch.

[F4] [[def-cft-ordinary-character]] fixes the shifted trace. [[def-rational-vertex-algebra]] and [[def-admissible-vertex-algebra-module]] match the source's nonnegative weak-module convention exactly.

## Proof

1.1 By F1 the complete set I of irreducible ordinary module classes is finite and every formal character converges absolutely and locally uniformly on the upper half-plane, hence is holomorphic there. These hypotheses hold because strong rationality includes C2-cofiniteness and CFT type. [given, F1, F4, algebra]

2.1 Let F_i be the ordinary trace map furnished by F2 for M_i. Apply F3 with the matrix representing τ↦−1/τ. The result is a Ward block on V, so F2 supplies constants S_ij with F_i(τ^{−L(0)}v;−1/τ)=Σ_j S_ijF_j(v;τ), in the selected branch and lift convention. Evaluate at v=1: L(0)1=0, U1=1 and F_i(1;τ)=χ_i(τ). Therefore χ_i(−1/τ)=Σ_jS_ijχ_j(τ). Coefficients are obtained from the full trace maps on V, not by assuming that scalar characters alone are linearly independent. No categorical Hopf-link identification is used. [given, F2, F3, F4, step 1.1, algebra]

2.2 The weights of M_i lie in h_i+Z_{≥0}. Absolute convergence from F1 permits termwise translation τ↦τ+1. Each term is multiplied by exp(2πi(h_i−c/24)), so χ_i(τ+1)=exp(2πi(h_i−c/24))χ_i(τ). This gives the asserted diagonal T matrix. [given, F1, F4, step 1.1, algebra]

3.1 Steps 2.1 and 2.2 give invariance of the finite character span under S and T. The chosen logarithms implement the lifted action on full Ward blocks in F3; forgetting those choices gives the source projective convention. Vacuum evaluation has weight zero, and the shift is exactly the one in F2, so no extra τ-dependent automorphy factor is introduced. This proves all assertions of the unchanged Statement without using a modular-functor construction. [given, F2, F3, step 2.1, step 2.2, algebra] ∎
