---
id: lem-hh-quasitriangular-counit-and-yang-baxter-identities
kind: lemma
title: "Counit normalization and the Yang–Baxter identity for a quasitriangular structure"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [def-hh-hopf-algebra-and-antipode, def-hh-leg-notation-and-quasitriangular-hopf-algebra, def-hh-scalar-and-tensor-conventions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations (Helsinki lecture notes, Spring 2011)"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
      locator: "Proposition 4.9, printed p. 66: counit normalizations and the leg calculation for QYBE"
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups, arXiv:2106.05252v3 (2024)"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Exercise 3.30, PDF p. 17: QYBE from the quasitriangular axioms"
verification:
  precheck: pass
---

## Statement

Let $H$ be a Hopf algebra over a field $k$ and let $R\in H\otimes H$ be invertible and satisfy the quasitriangular axioms of [[def-hh-leg-notation-and-quasitriangular-hopf-algebra]]. Then
$(\varepsilon\otimes\operatorname{id})(R)=1_H=(\operatorname{id}\otimes\varepsilon)(R),$
and
$R_{12}R_{13}R_{23}=R_{23}R_{13}R_{12}\quad\text{in }H^{\otimes3}.$

## Facts & Assumptions

**Given:** A field $k$, a Hopf algebra $H$ over $k$, its counit $\varepsilon$, and an invertible quasitriangular element $R\in H\otimes H$.

[F1] [[def-hh-leg-notation-and-quasitriangular-hopf-algebra]]: $R$ is invertible, $R\Delta(h)=\Delta^{\mathrm{op}}(h)R$, $(\Delta\otimes\operatorname{id})R=R_{13}R_{23}$, and $\alpha^{-1}(\operatorname{id}\otimes\Delta)R=R_{13}R_{12}$.

[F2] [[def-hh-hopf-algebra-and-antipode]]: $\varepsilon$ is a counit, so $(\varepsilon\otimes\operatorname{id})\Delta=\operatorname{id}=(\operatorname{id}\otimes\varepsilon)\Delta$ and $\varepsilon(1_H)=1_k$.

[F3] [[def-hh-scalar-and-tensor-conventions]]: each algebraic tensor is a finite sum of elementary tensors and those tensors span the tensor product.

## Proof

**Proof technique:** direct.

1.1 Write $R=\sum_i a_i\otimes b_i$ and set $x=(\varepsilon\otimes\operatorname{id})(R)$. Apply $\varepsilon\otimes\operatorname{id}\otimes\operatorname{id}$ to $(\Delta\otimes\operatorname{id})(R)=R_{13}R_{23}$. The left side is $R$ by the left counit identity in [F2]. Expanding the right side as $\sum_{i,j}a_i\otimes a_j\otimes b_i b_j$ gives $(1_H\otimes x)R$. Thus $R=(1_H\otimes x)R$; multiplying on the right by $R^{-1}$ gives $1_H\otimes x=1_H\otimes1_H$, and applying $\varepsilon\otimes\operatorname{id}$ gives $x=1_H$. [given, F1, F2, F3, algebra]

1.2 Set $y=(\operatorname{id}\otimes\varepsilon)(R)$. Apply $\operatorname{id}\otimes\operatorname{id}\otimes\varepsilon$ to $\alpha^{-1}(\operatorname{id}\otimes\Delta)(R)=R_{13}R_{12}$. The left side is $R$ by the right counit identity in [F2]. Expanding $R_{13}R_{12}$ gives $\sum_{i,j}a_i a_j\otimes b_j\otimes b_i$, whose image under the counit map is $(y\otimes1_H)R$. Hence $R=(y\otimes1_H)R$, so invertibility gives $y\otimes1_H=1_H\otimes1_H$ and applying $\operatorname{id}\otimes\varepsilon$ gives $y=1_H$. [given, F1, F2, F3, algebra]

2.1 Using the first hexagon, $R_{12}R_{13}R_{23}=R_{12}(\Delta\otimes\operatorname{id})(R)$. Apply $R\Delta(a_i)=\Delta^{\mathrm{op}}(a_i)R$ term by term to obtain $R_{12}(\Delta\otimes\operatorname{id})(R)=(\Delta^{\mathrm{op}}\otimes\operatorname{id})(R)R_{12}$. The map that flips the first two vector-space factors sends $R_{13}R_{23}=\sum_{i,j}a_i\otimes a_j\otimes b_i b_j$ to $\sum_{i,j}a_j\otimes a_i\otimes b_i b_j=R_{23}R_{13}$ after reindexing; this is a direct tensor calculation, not an assertion that the flip preserves multiplication. Therefore $(\Delta^{\mathrm{op}}\otimes\operatorname{id})(R)=R_{23}R_{13}$, and the desired QYBE follows. [given, F1, F3, algebra] ∎
