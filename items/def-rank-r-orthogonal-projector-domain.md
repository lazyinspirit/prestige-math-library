---
id: def-rank-r-orthogonal-projector-domain
kind: definition
title: "Rank-r orthogonal projector domain"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-self-adjoint-and-normal-endomorphism
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - def-frobenius-matrix-norm
justified_by:
  - lem-hermitian-idempotent-trace-equals-rank
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Alan Edelman, Tomás A. Arias, and Steven T. Smith, The Geometry of Algorithms with Orthogonality Constraints, SIAM Journal on Matrix Analysis and Applications 20 (1998), §§2.3.2 and 2.5"
      url: https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf
    - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3, Princeton University Press (2008), §§3.4.4–3.6"
      url: https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $n\ge2$ and let $r$ be an integer with $1\le r<n$. Use Hermitian
adjoints and matrices as in [[def-self-adjoint-and-normal-endomorphism]] and
[[def-matrix-product-and-identity-matrix]], trace as in
[[def-trace-of-a-square-matrix]], and the Frobenius norm as in
[[def-frobenius-matrix-norm]]. Write
$$\mathbb H_n:=\{A\in\mathbb C^{n\times n}:A=A^*\}$$
for the real vector space of Hermitian matrices, with Frobenius inner product
$$\langle A,B\rangle_F:=\operatorname{Re}\operatorname{tr}(A^*B)=\operatorname{tr}(AB).$$
The **rank-$r$ orthogonal projector domain** is
$$\mathcal P_r:=\{P\in\mathbb H_n:P^2=P,\ \operatorname{tr}P=r\}.$$
An element of $\mathcal P_r$ is an orthogonal projector; its range is the occupied
subspace. The statement that its range has dimension $r$ is justified by
[[lem-hermitian-idempotent-trace-equals-rank]]. A frame $Y\in\mathbb C^{n\times r}$
with $Y^*Y=I_r$ represents $P=YY^*$; replacing $Y$ by $YQ$ for a unitary
$Q\in\mathbb C^{r\times r}$ leaves $P$ unchanged.

