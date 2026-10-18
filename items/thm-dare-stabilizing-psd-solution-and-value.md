---
id: thm-dare-stabilizing-psd-solution-and-value
kind: theorem
title: "Stabilizability and detectability give the unique stabilizing
  positive-semidefinite DARE solution"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-lqr-stabilizability-and-detectability
  - def-standard-continuous-and-discrete-riccati-equations
  - lem-powers-of-a-schur-stable-matrix-decay
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-rank-nullity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§§5.1–5.2, DARE graph, symplectic matrix, and doubling"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation
        and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§§2.5–2.7, finite invariant subspaces, pencil regularity, and infinite
        eigenvalues"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $A\in F^{n\times n}$, $B\in F^{n\times m}$, $C\in F^{p\times n}$, $R=R^*\succ0$, and $Q=C^*C$. Assume $(A,B)$ is discretely stabilizable and $(A,C)$ discretely detectable, using [[def-lqr-stabilizability-and-detectability]]. Then the DARE of [[def-standard-continuous-and-discrete-riccati-equations]] has exactly one Hermitian positive-semidefinite solution $X$. For the equivalent Riccati map $f(P)=Q+A^*P(I+GP)^{-1}A$, its finite-horizon iterates $P_0=0$, $P_{k+1}=f(P_k)$ satisfy $0\preceq P_k\uparrow X$. For all Hermitian positive-semidefinite $Y,Z$,
$$f(Y)-f(Z)=A_c(Y)^*(Y-Z)A_c(Z),\qquad A_c(Y)=(I+GY)^{-1}A.$$
The solution satisfies $R+B^*XB\succ0$, and its closed loop $A_c=A-B(R+B^*XB)^{-1}B^*XA$ is Schur stable. For each $x_0$, the infinite-horizon discrete cost
$$\inf_{(u_k)}\sum_{k=0}^\infty(x_k^*Qx_k+u_k^*Ru_k),\qquad x_{k+1}=Ax_k+Bu_k,$$
over sequences with finite cost equals $x_0^*Xx_0$ and is attained by $u_k=-K_dx_k$. Singular $A$ is allowed throughout; no inverse of $A$ is used.

## Facts & Assumptions

**Given:** The finite matrices in the statement, discrete stabilizability/detectability, $R\succ0$, $Q=C^*C$, and the discrete-time dynamics.

[F1] [[def-lqr-stabilizability-and-detectability]]: discrete stabilizability/detectability mean there exist a feedback/injection making the corresponding matrix Schur stable.

[F2] [[def-standard-continuous-and-discrete-riccati-equations]]: $G=BR^{-1}B^*$ and the DARE residual and feedback are defined there.

[F3] [[lem-powers-of-a-schur-stable-matrix-decay]]: if $M$ is Schur stable, then for any $r$ with $\rho(M)<r<1$, $\|M^k\|_2\le C_r r^k$.

[F4] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: $R\succ0$ gives an invertible factor $R=LL^*$.

[F5] [[thm-non-negative-square-root-exists-and-is-unique]]: if $P\succeq0$ and $v^*Pv=0$, then $Pv=0$.

[F6] [[thm-rank-nullity]]: an injective endomorphism of a finite-dimensional space is invertible.

## Proof

1.1 Define $P_0=0$ and recursively $S_j=R+B^*P_jB,\quad K_j=S_j^{-1}B^*P_jA,\quad P_{j+1}=Q+A^*P_jA-A^*P_jB S_j^{-1}B^*P_jA.$ If $P_j\succeq0$, then for nonzero $v$, $v^*S_jv=v^*Rv+(Bv)^*P_j(Bv)>0$, so $S_j^{-1}$ exists. For each $x,u$, expansion and completion of the positive square gives $x^*Qx+u^*Ru+(Ax+Bu)^*P_j(Ax+Bu)=x^*P_{j+1}x+(u+K_jx)^*S_j(u+K_jx).$ Thus $x^*P_{j+1}x$ is the finite-horizon value for $j+1$ stages, attained by the minimizing first control; induction gives $P_j\succeq0$. [F2, F4, algebra, induction]


1.2 For positive-semidefinite $P,Q$, if $(I+PQ)v=0$, multiplication by $v^*Q$ gives $v^*Qv+(Qv)^*P(Qv)=0$. Both terms are nonnegative, so [F5] gives $Qv=0$ and then $v=0$. Interchanging $P,Q$ proves the same for $I+QP$. Thus $I+YG$, $I+GY$, $I+GZ$, and $I+ZG$ are injective and hence invertible by [F6]. Since $(I+YG)Y=Y(I+GY)$, multiplication by the established inverses gives $(I+YG)^{-1}Y=Y(I+GY)^{-1}$. Further, multiplying both sides of $Y(I+GY)^{-1}-Z(I+GZ)^{-1}=(I+YG)^{-1}(Y-Z)(I+GZ)^{-1}$ by $I+YG$ on the left and $I+GZ$ on the right reduces both sides to $Y-Z$. Substitution into $f(Y)-f(Z)$ proves the difference identity in the Statement. [F2, F5, F6, algebra]


2.1 Longer horizons add nonnegative stage costs, so their value matrices increase in the Loewner order: $0\preceq P_j\preceq P_{j+1}$. By stabilizability [F1], choose $K_0$ so $A_0=A-BK_0$ is Schur stable. Under that fixed feedback the cost is bounded by $\sum_{k\ge0}(\|C\|_2^2+\|K_0^*RK_0\|_2)\|A_0^kx_0\|_2^2\le c\|x_0\|_2^2,$ because [F3] gives a summable geometric-square bound. Therefore $P_j\preceq cI$. The forms on $e_i$, $e_i+e_j$, and $e_i+\mathrm i e_j$ are bounded and monotone; they determine the diagonal entries and the real and imaginary parts of each Hermitian off-diagonal entry. Thus all entries converge to a Hermitian $X\succeq0$. [F1, F3, step 1.1, algebra]


3.1 The update map is continuous on $P\succeq0$: $R+B^*PB\succeq R\succ0$, so its inverse varies continuously there. Passing to the limit in step 1.1 gives the DARE for $X$, and the same inequality gives $R+B^*XB\succ0$. [F2, F4, step 1.1, step 2.1, algebra]


4.1 Put $S=R+B^*XB$, $K=S^{-1}B^*XA$, and $A_c=A-BK$. The square identity in step 1.1 with $P_j=X$ yields $x^*Qx+u^*Ru+(Ax+Bu)^*X(Ax+Bu)-x^*Xx=(u+Kx)^*S(u+Kx).$ For $u=-Kx$, summing from $k=0$ to $N-1$ gives total stage cost $x_0^*Xx_0-x_N^*Xx_N\le x_0^*Xx_0$. Thus $u,Cx\in\ell^2$. [F1, F2, step 1.1, step 3.1, algebra]


5.1 By detectability [F1], choose $L$ such that $A_o=A-LC$ is Schur stable. Along the feedback trajectory, $x_{k+1}=A_ox_k+w_k,\qquad w_k=Bu_k+LCx_k\in\ell^2.$ Variation of constants gives $x_k=A_o^kx_0+\sum_{j=0}^{k-1}A_o^{k-1-j}w_j$. The first term tends to zero by [F3]. For any fixed $J$, the finite sum over $j<J$ also tends to zero. The remaining sum is bounded by $\Big(\sum_{\ell\ge0}\|A_o^\ell\|_2^2\Big)^{1/2}\Big(\sum_{j\ge J}\|w_j\|_2^2\Big)^{1/2}.$ The first factor is finite by [F3], and the second tends to zero as $J\to\infty$. Hence $x_k\to0$. This holds for every initial state, so no eigenvalue of $A_c$ can satisfy $|\lambda|\ge1$; therefore $A_c$ is Schur stable. [F1, F3, step 4.1, algebra, contradiction]


6.1 For any finite-cost control, $u,Cx\in\ell^2$; the same detectability argument in step 5.1, now with its state equation, gives $x_k\to0$. Summing the square identity in step 4.1 and taking $N\to\infty$ gives cost at least $x_0^*Xx_0$. The stabilizing feedback makes the square term zero and has $x_N\to0$, so it attains equality. [F1, F2, step 4.1, step 5.1, algebra]


7.1 Let $Y\succeq0$ be another DARE solution. Step 5.1 applied to $Y$ shows its closed loop $A_Y=(I+GY)^{-1}A$ is Schur stable. Since both $X$ and $Y$ are fixed points, step 1.2 gives $X-Y=A_c(X)^*(X-Y)A_Y$. Iteration yields $X-Y=(A_c(X)^*)^k(X-Y)A_Y^k$. By [F3], both powers tend to zero, so the right side tends to zero and $X=Y$. [F2, F3, step 5.1, step 1.2, algebra] ∎
