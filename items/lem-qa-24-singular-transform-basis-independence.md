---
id: lem-qa-24-singular-transform-basis-independence
kind: lemma
title: Singular-value transform is independent of SVD choices
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qa-24-singular-value-transform
  - def-qa-24-pue-svd-data
  - thm-singular-value-decomposition
  - def-orthogonal-projection
  - prop-adjoint-algebra
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
axiom_use: "None; all eigenspaces and orthogonal projections are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Definitions 12 and 16, Theorem 17"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF pp. 15–19."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.2–29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed pp. 144–147; PDF pp. 152–155, Hermitian special case."
---

## Statement

For a finite-dimensional PUE map $A:H_R\to H_L$, the odd singular-value transform and both even singular-value transforms of [[def-qa-24-singular-value-transform]] are independent of the chosen singular-vector bases. On a positive singular-value subspace, $A/\sigma$ canonically pairs the right and left eigenspaces; on repeated singular values the transform is scalar on the whole corresponding subspace. The even transforms use the canonical orthogonal projection onto $\ker A$ or $\ker A^*$ with coefficient $p(0)$; the odd transform has no zero-singular cross term.

## Facts & Assumptions

**Given:** A finite-dimensional PUE map $A:H_R\to H_L$ and an even or odd function $p:[-1,1]\to\mathbb C$.

[F1] [[def-qa-24-singular-value-transform]]: the odd transform sums $p(\sigma_j)|u_j\rangle\langle v_j|$ over positive singular values; the even right and left transforms sum $p(\sigma_j)$ on their singular-vector bases and use $p(0)$ on the respective kernels.

[F2] [[def-qa-24-pue-svd-data]]: the positive singular pairs satisfy $Av_j=\sigma_j u_j$ and $A^*u_j=\sigma_j v_j$, and the complete right and left bases identify $\ker A$ and $\ker A^*$.

[F3] [[thm-singular-value-decomposition]]: every finite-dimensional map has complete orthonormal singular bases and a positive-term SVD formula.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Ax,y\rangle=\langle x,A^*y\rangle$.

[F5] [[prop-adjoint-algebra]]: adjoints reverse compositions and preserve sums.

[F6] [[def-orthogonal-projection]]: each finite-dimensional subspace has a unique orthogonal projection.

## Proof

1.1 For each distinct positive singular value $\sigma$, define $E_\sigma=\ker(A^*A-\sigma^2I)$ in $H_R$ and $F_\sigma=\ker(AA^*-\sigma^2I)$ in $H_L$. The adjoint rule [F4] and adjoint algebra [F5] make $A^*A$ and $AA^*$ self-adjoint, and [F2]–[F3] identify these eigenspaces with the right and left singular subspaces. If $v\in E_\sigma$, then $Av\in F_\sigma$ because $AA^*Av=A(A^*Av)=\sigma^2Av$. Also [F4] gives $\|Av\|^2=\langle v,A^*Av\rangle=\sigma^2\|v\|^2$. Thus $J_\sigma:=A/\sigma$ is an isometry from $E_\sigma$ into $F_\sigma$. For $y\in F_\sigma$, [F5] gives $A^*y\in E_\sigma$, and $J_\sigma(A^*y/\sigma)=y$; hence $J_\sigma$ maps $E_\sigma$ onto $F_\sigma$. [F2, F3, F4, F5, algebra]

2.1 Group the positive singular terms in the odd transform by their common value $\sigma$. In any orthonormal basis $(v_j)$ of $E_\sigma$, the paired left vectors are $u_j=J_\sigma v_j$, so $\sum_{j:\sigma_j=\sigma}|u_j\rangle\langle v_j|=J_\sigma\Pi_{E_\sigma}$, where $\Pi_{E_\sigma}$ is the unique projection from [F6]. The grouped term is therefore $p(\sigma)J_\sigma\Pi_{E_\sigma}$, independent of the basis. [F1, F2, F6, step 1.1, algebra]

3.1 For the even right transform, grouping by positive singular value gives $p(\sigma)\Pi_{E_\sigma}$, and the zero-singular part is $p(0)\Pi_{\ker A}$; both are canonical projections. For the even left transform the corresponding terms are $p(\sigma)\Pi_{F_\sigma}$ and $p(0)\Pi_{\ker A^*}$. The zero right and left singular vectors may be chosen independently, but the even definitions use only these unique subspace projections, while the odd definition omits zero singular pairs. Thus all three transforms are independent of the SVD choices. [F1, F2, F3, F6, step 1.1, step 2.1, algebra] ∎
