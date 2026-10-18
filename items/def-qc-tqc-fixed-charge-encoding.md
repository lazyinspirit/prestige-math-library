---
id: def-qc-tqc-fixed-charge-encoding
kind: definition
title: Fixed-charge encoding and code projector
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-fusion-tree-basis
  - def-fusion-and-multifusion-category
  - def-qc-tqc-unitary-fusion-category
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
dependency_level: 4
axiom_use: None; the finite-dimensional isometry and adjoint identities are choice-free.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B, PDF pp. 7–11
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §§9.14 and 9.17, PDF pp. 53–62
---

## Definition

Fix a unitary fusion category $\mathcal D$ and the representative set
$\operatorname{Irr}(\mathcal D)$ of [[def-qc-tqc-fusion-tree-basis]].
For an ordered list $x_1,\ldots,x_n\in\operatorname{Irr}(\mathcal D)$,
$n\ge1$, a total charge $c\in\operatorname{Irr}(\mathcal D)$, and a
parenthesized input tensor $T$, let $V=\operatorname{Hom}(T,c)\ne0$,
equipped with that definition's orthonormal fusion-tree inner product.
The identical-input case $x_1=\cdots=x_n=x$ retains the notation
$V=V(x^n\to c)$. Let
$\mathcal C=\mathbb C^k$ with its ordered orthonormal computational basis,
where $k\ge1$. A **fixed-charge encoding** is an isometry
$J:\mathcal C\to V$, so $J^*J=I_{\mathcal C}$. Its code subspace is
$J\mathcal C$, and its code projector is
$$P:=JJ^*:V\to V.$$
An encoding records a chosen subspace of a fusion space; it does not identify
that subspace with an object of the fusion category.

## Facts & Assumptions

**Given:** The finite-dimensional fusion space $V$, the computational space
$\mathcal C$, and an isometry $J:\mathcal C\to V$.

[F1] An isometry satisfies $J^*J=I_{\mathcal C}$.
[[def-linear-isometry-and-orthogonal-or-unitary-operator]]

[F2] The adjoint satisfies $(AB)^*=B^*A^*$ and $(J^*)^*=J$.
[[def-adjoint-of-a-linear-map-between-inner-product-spaces]]



## Proof

1.1 By [F2], $P^*=(JJ^*)^*=(J^*)^*J^*=JJ^*=P$. Also $P^2=JJ^*JJ^*=J(J^*J)J^*=JI_{\mathcal C}J^*=P$ by [F1]. Hence $P$ is an orthogonal projection. [given, F1, F2, algebra]

2.1 For every $u\in\mathcal C$, $P(Ju)=JJ^*Ju=Ju$ by [F1], so $J\mathcal C\subseteq\operatorname{ran}P$. Conversely $Pv=J(J^*v)$ lies in $J\mathcal C$ for every $v\in V$, so $\operatorname{ran}P\subseteq J\mathcal C$. Therefore $\operatorname{ran}P=J\mathcal C$. [given, F1, step 1.1, algebra] ∎
