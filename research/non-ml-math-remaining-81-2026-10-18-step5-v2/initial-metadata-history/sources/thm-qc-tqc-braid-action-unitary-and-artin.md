---
id: thm-qc-tqc-braid-action-unitary-and-artin
kind: theorem
title: Unitary Artin braid representation on fixed-charge fusion spaces
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-braid-action-from-fusion-data
  - def-qc-tqc-unitary-fusion-category
  - def-qc-tqc-fusion-tree-basis
  - lem-qc-tqc-fusion-tree-dimension
  - def-braiding
  - thm-qc-tqc-f-symbol-unitary
  - thm-qc-tqc-r-symbol-unitary
  - thm-qc-tqc-pentagon-coordinates
  - thm-qc-tqc-hexagon-coordinates
  - cor-an-object-of-a-braided-category-carries-canonical-braid-actions
  - def-braid-group-by-the-artin-presentation
dependency_level: 7
axiom_use: None; categorical coherence, finite semisimplicity, and unitary F/R maps suffice.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.A, PDF pp. 3–6
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §9.5, PDF pp. 13–16
---

## Statement

For a unitary braided fusion category $\mathcal C$, simple representatives
$x,c\in\operatorname{Irr}(\mathcal C)$ as in
[[def-qc-tqc-fusion-tree-basis]], $n\ge2$, and a nonzero fixed-total fusion
space, the operators in
[[def-qc-tqc-braid-action-from-fusion-data]] define a unitary group
homomorphism
$$\rho_c:B_n\longrightarrow U(V(x^n\to c)).$$
In particular, the adjacent Artin relations and distant commutation relations
hold in each fixed-charge block.

## Facts & Assumptions

**Given:** A unitary fusion category with a specified unitary braiding, the
simple representatives $x,c$, the nonzero fixed-charge fusion space $V(x^n\to c)$, and the
generator matrices $T_i^{-1}R_iT_i$.

[F1] In a braided monoidal category, the local braidings on $X^{\otimes n}$
give a canonical homomorphism from the Artin group; the associator transports
the action to a fixed parenthesization.
[[cor-an-object-of-a-braided-category-carries-canonical-braid-actions]]

[F2] The current QC25 bodies define finite semisimple orthogonal fusion-tree
spaces, unitary associators and braidings, and unitary F/R coordinates; their
pentagon and hexagon coordinate identities match the categorical coherence
maps. The fusion-tree dimension lemma supplies complete bases.
[[def-qc-tqc-unitary-fusion-category]]
[[def-qc-tqc-fusion-tree-basis]]
[[lem-qc-tqc-fusion-tree-dimension]] [[def-braiding]]
[[thm-qc-tqc-f-symbol-unitary]] [[thm-qc-tqc-r-symbol-unitary]]
[[thm-qc-tqc-pentagon-coordinates]] [[thm-qc-tqc-hexagon-coordinates]]

## Proof

1.1 By [F2], each generator matrix is a product of unitary operators: $T_i$ and $T_i^{-1}$ are unitary changes of orthonormal fusion-tree basis, and $R_i$ is unitary on every orthogonal pair-charge summand. Therefore $\rho_c(\sigma_i)^*\rho_c(\sigma_i)=I$ and every generator, as well as its inverse, is unitary. [given, F2, algebra]

2.1 By [F1], the local categorical braidings on the full tensor power satisfy the Artin relations and define a homomorphism for the fixed parenthesization. Finite semisimplicity and orthogonality in [F2] decompose that tensor power into total-charge blocks; naturality of the braiding makes each block invariant, so restriction to $V(x^n\to c)$ preserves the same relations. In the fusion-tree basis, these restricted operators are exactly $T_i^{-1}R_iT_i$ by the definition in [[def-qc-tqc-braid-action-from-fusion-data]]. The pentagon and hexagon coordinate identities in [F2] identify those matrices with the same parenthesized composites; distant generators commute because they act on disjoint tensor factors. Hence the restricted assignment is a unitary representation of the Artin presentation. [F1, F2, given, algebra] ∎
