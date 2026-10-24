---
id: lem-complex-projector-tangent-commutator-curves
kind: lemma
title: "Complex projector tangents are skew-Hermitian commutator directions"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-rank-r-orthogonal-projector-domain
  - lem-rank-r-projector-grassmann-chart-and-tangent
  - def-real-and-complex-inner-product-space
  - def-inner-product-norm
  - thm-rank-nullity
  - thm-dimension-of-a-linear-subspace
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-matrix-product-and-identity-matrix
  - def-trace-of-a-square-matrix
  - thm-derivative-of-matrix-inversion
  - prop-matrix-differentials-obey-sum-product-and-adjoint-rules
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Alan Edelman, Tomás A. Arias, and Steven T. Smith, The Geometry of Algorithms with Orthogonality Constraints, SIAM Journal on Matrix Analysis and Applications 20 (1998), §2.5"
      url: https://math.mit.edu/~edelman/publications/geometry_of_algorithms.pdf
    - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 3, Princeton University Press (2008), §§3.4.4 and 3.5.7"
      url: https://assets.press.princeton.edu/chapters/absil/Absil_Chap3.pdf
verification: {}
---

## Statement

Let $P\in\mathcal P_r$ and define the tangent space by velocities of differentiable curves in $\mathcal P_r$. Then
$$T_P\mathcal P_r=\{[K,P]:K^*=-K\},\qquad [K,P]:=KP-PK.$$
For each skew-Hermitian $K$, the curve can be realized near $t=0$ as
$P_K(t)=Q_K(t)P Q_K(t)^*$, where
$$Q_K(t):=(I+tK/2)(I-tK/2)^{-1}.$$

## Facts & Assumptions

**Given:** $P\in\mathcal P_r$ in a finite-dimensional complex inner-product space and a skew-Hermitian matrix $K^*=-K$.

[F1] The rank-$r$ projector domain consists of Hermitian idempotents with trace $r$ ([[def-rank-r-orthogonal-projector-domain]]).

[F2] At $P$, the tangent directions are exactly the Hermitian off-diagonal blocks between $\operatorname{range}P$ and its orthogonal complement; every such block is realized by the graph chart ([[lem-rank-r-projector-grassmann-chart-and-tangent]]).

[F3] The inner product is linear in its first argument, conjugate-linear in its second, and positive definite; the adjoint satisfies $\langle Ax,y\rangle=\langle x,A^*y\rangle$ ([[def-real-and-complex-inner-product-space]], [[def-inner-product-norm]], [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[F4] For a linear map on an $n$-dimensional space, $\dim\ker T+\dim\operatorname{im}T=n$ ([[thm-rank-nullity]]). A subspace of an $n$-dimensional space having dimension $n$ equals the whole space ([[thm-dimension-of-a-linear-subspace]], claim 2).

[F5] Matrix inversion has derivative $D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$, and matrix differentials obey product and adjoint rules ([[thm-derivative-of-matrix-inversion]], [[prop-matrix-differentials-obey-sum-product-and-adjoint-rules]]).

[F6] Matrix multiplication, identity, and trace use their finite-coordinate definitions ([[def-matrix-product-and-identity-matrix]], [[def-trace-of-a-square-matrix]]).

## Proof

1.1 Put $M_t=I-tK/2$. If $t\ne0$ and $M_tx=0$ for a nonzero $x$, then $Kx=(2/t)x$. By [F3], $\operatorname{Re}\langle Kx,x\rangle=0$, while this equation gives $\langle Kx,x\rangle=(2/t)\|x\|^2$, a nonzero real number. This contradiction shows $\ker M_t=\{0\}$; $M_0=I$ is also injective. By [F4], $\dim\operatorname{im}M_t=n$, hence $\operatorname{im}M_t=\mathbb C^n$. Thus each vector has a unique preimage. This inverse map is linear: if $M_tx=u$ and $M_ty=v$, then $M_t(ax+by)=au+bv$, so uniqueness identifies the inverse of $au+bv$ with $ax+by$. Therefore $M_t$ is invertible for every real $t$. [F3, F4, given, algebra]

2.1 Put $N_t=I+tK/2$, so $M_t^*=N_t$. Since $M_t$ and $N_t$ are polynomials in $K$, they commute, and the same holds for $M_t^{-1}$. For $Q_K(t)=N_tM_t^{-1}$, the adjoint rules in [F5] give $Q_K(t)^*=N_t^{-1}M_t$. Thus $Q_K(t)^*Q_K(t)=N_t^{-1}M_tN_tM_t^{-1}=I$. In finite dimension this makes $Q_K(t)$ unitary. [F5, F6, step 1.1, algebra]

3.1 We have $Q_K(0)=I$. From $M'_0=-K/2$ and [F5], $(M_t^{-1})'|_{t=0}=K/2$, hence the product rule gives $Q'_K(0)=K$. The curve $P_K(t)=Q_K(t)P Q_K(t)^*$ lies in $\mathcal P_r$: unitarity preserves self-adjointness and idempotence, and $\operatorname{tr}(Q_K(t)P Q_K(t)^*)=\operatorname{tr}(P Q_K(t)^*Q_K(t))=\operatorname{tr}P$ by the finite trace identity $\operatorname{tr}(AB)=\operatorname{tr}(BA)$. Its derivative at zero is $P'_K(0)=KP-PK=[K,P]$, so every such commutator is tangent. [F1, F5, F6, step 2.1, algebra]

4.1 Conversely, by [F2] any tangent at $P$ has block form $H_X=\begin{pmatrix}0&X^*\\X&0\end{pmatrix}$ in $\operatorname{range}P\oplus(\operatorname{range}P)^\perp$. Set $K_X=\begin{pmatrix}0&-X^*\\X&0\end{pmatrix}$, which satisfies $K_X^*=-K_X$. With $P=\begin{pmatrix}I&0\\0&0\end{pmatrix}$, block multiplication gives $[K_X,P]=H_X$. Thus every tangent is a skew-Hermitian commutator direction, proving the equality. [F2, F6, algebra] ∎
