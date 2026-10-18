---
id: thm-psd-nystrom-order-and-exactness
kind: theorem
title: "Nyström is positive semidefinite, dominated by A, and exact when it captures the range"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-psd-nystrom-approximation
  - lem-nystrom-square-root-projector-identity
  - thm-non-negative-operator-characterisations
  - thm-non-negative-square-root-exists-and-is-unique
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Per-Gunnar Martinsson and Joel A. Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §14.2"
      url: "https://www.tropp.caltech.edu/books/MT20-Randomized-Numerical-arXiv-v3.pdf"
    - title: "Alex Gittens and Michael W. Mahoney, Revisiting the Nyström Method, §4.1"
      url: "https://www.jmlr.org/papers/volume17/gittens16a/gittens16a.pdf"
---

## Statement

Let $n\ge1$, $s\ge0$, $A\in\mathbb F^{n\times n}$ be Hermitian positive semidefinite, and $S\in\mathbb F^{n\times s}$. In the Loewner order, where $B\preceq C$ means $C-B$ is positive semidefinite, the Nyström approximation in [[def-psd-nystrom-approximation]] satisfies
$0\preceq\widehat A_{\mathrm{nys}}\preceq A$.
If the selected columns capture the range in the sense that $\operatorname{Ran}(AS)=\operatorname{Ran}(A)$, then $\widehat A_{\mathrm{nys}}=A$. Here rank, when used in the proof, means dimension of the range.

## Facts & Assumptions

**Given:** A finite Hermitian positive-semidefinite matrix $A$ and a conformal sketch $S$.

[F1] [[lem-nystrom-square-root-projector-identity]]: $\widehat A_{\mathrm{nys}}=A^{1/2}P_{\operatorname{Ran}(A^{1/2}S)}A^{1/2}$.

[F2] [[thm-non-negative-operator-characterisations]]: a finite-dimensional positive-semidefinite operator has an orthonormal eigenbasis with nonnegative eigenvalues.

[F3] [[thm-non-negative-square-root-exists-and-is-unique]]: $A^{1/2}$ is Hermitian positive semidefinite and $(A^{1/2})^2=A$.
 
## Proof

1.1 Put $M=A^{1/2}$ and $P=P_{\operatorname{Ran}(MS)}$. By [F1], for every vector $x$, $x^*\widehat A_{\mathrm{nys}}x=\|PMx\|_2^2\ge0$ and $x^*(A-\widehat A_{\mathrm{nys}})x=\|(I-P)Mx\|_2^2\ge0$. Both matrices are Hermitian, so these quadratic-form inequalities prove $0\preceq\widehat A_{\mathrm{nys}}\preceq A$. [F1, F3, algebra]

1.2 Assume $\operatorname{Ran}(AS)=\operatorname{Ran}(A)$. By [F2], choose an orthonormal eigenbasis of $A$ with eigenvalues $\lambda_i\ge0$. In that basis the diagonal matrix with entries $\sqrt{\lambda_i}$ is positive semidefinite and squares to $A$, so it equals $A^{1/2}$ by uniqueness [F3]. Thus $A$ and $A^{1/2}$ have the same range and the same rank. [F2, F3, algebra]

2.1 Let $B=A^{1/2}S$. Then $\operatorname{Ran}(B)\subseteq\operatorname{Ran}(A^{1/2})$ and $AS=A^{1/2}B$. The assumption gives $\operatorname{rank}(AS)=\operatorname{rank}(A)$, while a linear map cannot increase the dimension of a subspace's image, so $\operatorname{rank}(AS)\le\operatorname{rank}(B)\le\operatorname{rank}(A^{1/2})=\operatorname{rank}(A)$ by step 1.2. The ranks are equal, and the range inclusion therefore yields $\operatorname{Ran}(B)=\operatorname{Ran}(A^{1/2})$. [given, step 1.2, algebra]

3.1 The projection in [F1] is consequently the identity on $\operatorname{Ran}(A^{1/2})$. Since $A^{1/2}x$ lies in that range for every $x$, [F1] gives $\widehat A_{\mathrm{nys}}x=A^{1/2}A^{1/2}x=Ax$ for every $x$. Thus $\widehat A_{\mathrm{nys}}=A$. [F1, step 2.1, algebra] ∎
