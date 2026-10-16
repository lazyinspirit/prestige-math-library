---
id: lem-qc-commutator-error-cancellation
kind: lemma
title: Error Cancellation in an SU(2) Commutator
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - lem-qc-su2-balanced-commutator
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: Lemma 1, §4.2, PDF pp. 9–10
    - title: Dieter van Melkebeek and Thomas Watson, Time-Space Efficient Simulations of Quantum Computations
      url: https://theoryofcomputing.org/articles/v008a001/v008a001.pdf
      locator: §4.2–§4.3, PDF pp. 27–39
---

## Statement

Let $V,W,\widetilde V,\widetilde W\in SU(2)$ and $0\le\eta\le1/16$, with
$\|V-I\|,\|W-I\|\le\sqrt\eta$ and
$\|\widetilde V-V\|,\|\widetilde W-W\|\le\eta$. Then
$$\|VWV^*W^*-\widetilde V\widetilde W\widetilde V^*\widetilde W^*\|\le4\eta^{3/2}+2\eta^2\le5\eta^{3/2}.$$

## Facts & Assumptions

**Given:** Four unitary matrices with the stated distances, where $0\le\eta\le1/16$.

[F1] The operator norm is defined as the maximum over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F2] The operator norm is submultiplicative ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

## Proof

1.1 From [F1], left multiplication by a unitary $Q$ preserves norm because $\|QXv\|=\|Xv\|$ for each unit vector $v$; right multiplication preserves norm because $Q$ maps the unit sphere bijectively to itself. Taking $X=I$ also gives $\|Q\|=1$. Set $E=V^*\widetilde V$ and $F=W^*\widetilde W$. Then $E,F$ are unitary, $\|E-I\|=\|V^*(\widetilde V-V)\|=\|\widetilde V-V\|\le\eta$, and $\|F-I\|=\|W^*(\widetilde W-W)\|=\|\widetilde W-W\|\le\eta$. [given, F1, algebra]

2.1 Keeping $W$ fixed, the commutator difference caused by replacing $V$ by $\widetilde V=VE$ is $V(EWE^*-W)V^*W^*$. Unitary left and right multiplication from [F1] leave its norm equal to $\|EWE^*-W\|$. Since $EE^*=I$, $EWE^*-W=E(W-I)E^*-(W-I)=(E-I)(W-I)E^*+(W-I)(E^*-I)$. Unitary norm invariance, $\|E^*\|=1$, and $\|E^*-I\|=\|E-I\|$ bound this by $2\|E-I\|\|W-I\|\le2\eta^{3/2}$; the equality $\|E^*-I\|=\|E-I\|$ follows from $E^*-I=-E^*(E-I)$. [F1, F2, step 1.1, algebra]

3.1 After the first replacement, keep $\widetilde V$ fixed and replace $W$ by $\widetilde W=WF$. The commutator difference is $\widetilde V W(F\widetilde V^*F^*-\widetilde V^*)W^*$. The expansion in step 2.1, with $\widetilde V^*-I$ in place of $W-I$, bounds its norm by $2\|F-I\|\|\widetilde V-I\|\le2\eta(\sqrt\eta+\eta)$, since $\|\widetilde V-I\|\le\|V-I\|+\|\widetilde V-V\|\le\sqrt\eta+\eta$. The operator-norm triangle inequality follows from [F1] and the vector triangle inequality by taking the maximum over unit vectors. Combining the two replacements gives $4\eta^{3/2}+2\eta^2\le5\eta^{3/2}$ because $\eta\le1/16$. [F1, F2, step 1.1, step 2.1, algebra] ∎
