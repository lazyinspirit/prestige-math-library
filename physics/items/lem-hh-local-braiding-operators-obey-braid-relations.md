---
id: lem-hh-local-braiding-operators-obey-braid-relations
kind: lemma
title: "Local braiding operators satisfy adjacent braid and distant commutation relations"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 6
deps: [lem-hh-quasitriangular-counit-and-yang-baxter-identities, lem-hh-tensor-coherence-on-elementary-tensors, thm-hh-r-matrix-constructs-a-module-braiding]
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
      locator: "Propositions 4.6 and 4.12–4.13, printed pp. 64 and 68: local YBE, braid relations and disjoint-factor commutation"
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups, arXiv:2106.05252v3 (2024)"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Proposition 3.4, PDF p. 12: adjacent braiding operators on tensor powers"
verification:
  precheck: pass
---

## Statement

Let $V$ be a left module over a quasitriangular Hopf algebra and let $n\ge2$. Set $\check R:=c_{V,V}$, with $c$ as in [[thm-hh-r-matrix-constructs-a-module-braiding]]. For $1\le i<n$, let $T_i$ be the operator on $V^{\otimes n}$ that acts by $\check R$ on tensor positions $i,i+1$ and by the identity on every other position, using the canonical associators of [[lem-hh-tensor-coherence-on-elementary-tensors]]. Then
$T_iT_{i+1}T_i=T_{i+1}T_iT_{i+1}\quad(1\le i<n-1),\qquad T_iT_j=T_jT_i\quad(|i-j|>1).$
These relations are the local operator facts used by later Hecke constructions; no quadratic relation is asserted.

## Facts & Assumptions

**Given:** A field $k$, a quasitriangular Hopf algebra $(H,R)$, a left $H$-module $V$, and an integer $n\ge2$.

[F1] [[thm-hh-r-matrix-constructs-a-module-braiding]]: $\check R=c_{V,V}=\tau(\rho_V\otimes\rho_V)(R)$ is an invertible operator and satisfies the three-factor braid relation by the QYBE.

[F2] [[lem-hh-quasitriangular-counit-and-yang-baxter-identities]]: $R$ satisfies $R_{12}R_{13}R_{23}=R_{23}R_{13}R_{12}$.

[F3] [[lem-hh-tensor-coherence-on-elementary-tensors]]: the canonical associators identify parenthesizations on pure tensors and preserve identities and compositions.

## Proof

**Proof technique:** direct.

1.1 On $V^{\otimes3}$ write $T_1=\tau_{12}R_{12}$ and $T_2=\tau_{23}R_{23}$. Conjugating a leg operator by an adjacent flip relabels its two tensor positions, so $T_1T_2T_1=\tau_{12}\tau_{23}\tau_{12}R_{23}R_{13}R_{12},\qquad T_2T_1T_2=\tau_{23}\tau_{12}\tau_{23}R_{12}R_{13}R_{23}.$ The two flip products agree on every pure tensor by the permutation braid calculation, and [F2] identifies the R-products, proving the adjacent relation on three factors. [given, F1, F2, F3, algebra]

2.1 For any $n\ge3$ and any adjacent positions $i,i+1,i+2$, the corresponding three operators are the maps of step 1.1 tensored with identities before and after those positions. Functoriality of tensor maps and the canonical reassociations in [F3] preserve their equality, so $T_iT_{i+1}T_i=T_{i+1}T_iT_{i+1}$ on $V^{\otimes n}$. [step 1.1, F3, algebra]

3.1 If $|i-j|>1$, then $T_i$ and $T_j$ alter disjoint tensor positions. On each pure tensor, applying them in either order gives the same finite sum because each operator leaves every position used by the other unchanged; linearity extends equality to $V^{\otimes n}$. [given, F1, F3, algebra] ∎
