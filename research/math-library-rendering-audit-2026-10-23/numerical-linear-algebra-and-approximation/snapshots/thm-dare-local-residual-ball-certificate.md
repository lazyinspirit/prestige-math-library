---
id: thm-dare-local-residual-ball-certificate
kind: theorem
title: "A DARE residual, Stein inverse bound, and Lyapunov margin certify a
  stabilizing root"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-standard-continuous-and-discrete-riccati-equations
  - thm-dare-stabilizing-psd-solution-and-value
  - lem-powers-of-a-schur-stable-matrix-decay
  - def-frobenius-matrix-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - cor-finite-dimensional-normed-spaces-are-banach
  - def-verified-linear-residual-certificate-data
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§§5.1–5.2, DARE and doubling"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation
        and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§§2.5–2.7, DARE pencil and infinite eigenvalues"
verification:
  precheck: pass
---

## Statement

Let $\widehat X=\widehat X^*$ be a DARE candidate, $S(X)=R+B^*XB$, $K(X)=S(X)^{-1}B^*XA$, $A_c(X)=A-BK(X)$, and let
$$F_d(X)=Q+A^*XA-A^*XB S(X)^{-1}B^*XA-X.$$
Suppose $S(\widehat X)\succeq\delta_0I$ is outward-certified. For a proposed radius $\rho>0$ put
$$a=\|A\|_2,\quad b=\|B\|_2,\quad m=\|\widehat X\|_F+\rho,\quad \delta=\delta_0-b^2\rho.$$
Require $\delta>0$ and define
$$L_K=\frac{ab}{\delta}+\frac{ab^3m}{\delta^2},\quad M_c=a+\frac{ab^2m}{\delta},\quad L_c=bL_K,\quad L_D=2M_cL_c.$$
Let $D(E)=A_c(\widehat X)^*EA_c(\widehat X)-E$ be invertible on Hermitian matrices, with outward-certified $\kappa\ge\|D^{-1}\|_{F\to F}$ and $r\ge\|F_d(\widehat X)\|_F$. If
$$\kappa(r+L_D\rho^2/2)\le\rho,\qquad \kappa L_D\rho<1,$$
there is exactly one Hermitian DARE root in the closed Frobenius $\rho$-ball, and $R+B^*XB\succeq\delta I$ throughout that ball.

For the stabilizing branch, additionally suppose $\widehat A_c=A_c(\widehat X)$ is Schur stable and an outward-certified $W\succ0$ satisfies
$$W-\widehat A_c^*W\widehat A_c\succeq\gamma I.$$
If, with $\eta=L_c\rho$,
$$\|W\|_2(2M_c\eta+\eta^2)<\gamma,$$
then the root is Schur-stabilizing. Under the standard DARE hypotheses of [[thm-dare-stabilizing-psd-solution-and-value]], it is the unique stabilizing positive-semidefinite solution.

## Facts & Assumptions

**Given:** The DARE data and residual map of [[def-standard-continuous-and-discrete-riccati-equations]], a Hermitian candidate, and the verified constants in the Statement.

[F1] [[def-standard-continuous-and-discrete-riccati-equations]]: $S(X)=R+B^*XB$, $A_c(X)=A-BS(X)^{-1}B^*XA$, and $F_d(X)=Q+A^*XA-A^*XB S(X)^{-1}B^*XA-X$.

[F2] [[def-verified-linear-residual-certificate-data]] specifies mathematical bounds for a linear approximate-inverse defect and preconditioned residual, and does not prescribe how to establish them. The DARE bounds used here are the separate hypotheses in [A1].

[F3] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: a finite outward-rounded expression DAG encloses every exact node value.

[F4] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: $\|AXB\|_F\le\|A\|_2\|X\|_F\|B\|_2$ and $\|X\|_2\le\|X\|_F$.

[F5] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: operator norms are submultiplicative.

[F6] [[thm-dare-stabilizing-psd-solution-and-value]]: under the standard discrete hypotheses there is a unique stabilizing positive-semidefinite DARE solution.

[F7] [[lem-powers-of-a-schur-stable-matrix-decay]]: if $A_c$ is Schur stable, then $|A_c^k|_2\to0$ geometrically.

[F8] [[cor-finite-dimensional-normed-spaces-are-banach]]: every finite-dimensional normed space is complete, so a Cauchy sequence in the Hermitian matrix ball converges there.

[A1] The lower eigenvalue bound $\delta_0$, norm bounds, residual bound, inverse bound $\kappa$, and Lyapunov margin are outward-verified inputs. If any bound is unavailable, this item supplies no certificate.

## Proof

1.1 For any Hermitian $E$ with $\|E\|_F\le\rho$, [F3] and [F4] give $S(\widehat X+E)=S(\widehat X)+B^*EB\succeq(\delta_0-b^2\rho)I=\delta I.$ Thus $S(X)$ is invertible on the ball and $\|S(X)^{-1}\|_2\le\delta^{-1}$. The resolvent identity gives $\|S(X)^{-1}-S(Y)^{-1}\|_2\le b^2\delta^{-2}\|X-Y\|_F.$ Using $K(X)=S(X)^{-1}B^*XA$ and splitting the difference into the change in $X$ and the change in $S^{-1}$ yields $\|K(X)-K(Y)\|_F\le L_K\|X-Y\|_F,\qquad \|A_c(X)\|_2\le M_c,\quad \|A_c(X)-A_c(Y)\|_2\le L_c\|X-Y\|_F.$ [F1, A1, F3, F4, F5, algebra]

2.1 Differentiating $S^{-1}S=I$ gives $d(S^{-1})[E]=-S^{-1}(B^*EB)S^{-1}$. Substituting this in the derivative of $F_d$ and using $K=S^{-1}B^*XA$ gives $F_d'(X)[E]=A_c(X)^*EA_c(X)-E.$ Consequently, for $D_X=F_d'(X)$ and $D_Y=F_d'(Y)$, [F4]–[F5] give $\|D_X-D_Y\|_{F\to F}\le(\|A_c(X)\|_2+\|A_c(Y)\|_2)\|A_c(X)-A_c(Y)\|_2\le L_D\|X-Y\|_F.$ Integrating the derivative along the segment from $\widehat X$ to $\widehat X+E$ gives a Taylor remainder $R(E)$ with $F_d(\widehat X+E)=F_d(\widehat X)+D(E)+R(E),\qquad \|R(E)\|_F\le L_D\|E\|_F^2/2.$ [F1, A1, F4, F5, step 1.1, algebra]

3.1 The root equation is the fixed-point equation $E=\mathcal T(E):=-D^{-1}F_d(\widehat X)-D^{-1}R(E).$ The bounds in [A1], separate from the linear certificate data in [F2], make $\mathcal T$ a self-map of the closed ball. For $E,F$ in that ball, integrating $D_X-D$ along the segment between them gives $\|R(E)-R(F)\|_F\le L_D\rho\|E-F\|_F,$ so $\mathcal T$ has contraction factor at most $\kappa L_D\rho<1$. Iteration from zero has successive differences bounded by a geometric sequence, hence is Cauchy. The closed Hermitian ball is complete by [F8], so the sequence converges in the ball; continuity makes its limit a fixed point. The same contraction inequality makes it unique. [A1, F2, F8, step 2.1, algebra]

4.1 Let $X=\widehat X+E$ be the root. Then $\|A_c(X)-\widehat A_c\|_2\le L_c\rho=\eta$. Expanding the Stein form, $A_c(X)^*WA_c(X)-\widehat A_c^*W\widehat A_c=\widehat A_c^*W\Delta+\Delta^*W\widehat A_c+\Delta^*W\Delta,$ where $\Delta=A_c(X)-\widehat A_c$. Its norm is at most $\|W\|_2(2M_c\eta+\eta^2)<\gamma$. Hence $W-A_c(X)^*WA_c(X)\succ0$. For an eigenvector $A_c(X)v=\lambda v$, this gives $(1-|\lambda|^2)v^*Wv>0$, so $|\lambda|<1$. Let $K=K(X)$, $S=R+B^*XB$, and $x_{k+1}=A_c(X)x_k$, $u_k=-Kx_k$. Since $SK=B^*XA$, we have $K^*SK=A^*XB S^{-1}B^*XA$. Expanding $A_c^*XA_c=(A-BK)^*X(A-BK)$ gives $A_c^*XA_c=A^*XA-K^*SK-K^*SK+K^*B^*XBK=A^*XA-K^*SK-K^*RK.$ The DARE root equation therefore gives $X=Q+K^*RK+A_c^*XA_c$, which along $x_{k+1}=A_c x_k$ and $u_k=-Kx_k$ is the exact square identity $x_k^*Qx_k+u_k^*Ru_k+x_{k+1}^*Xx_{k+1}=x_k^*Xx_k.$ Summing to $N-1$ yields $x_0^*Xx_0=\sum_{k<N}(x_k^*Qx_k+u_k^*Ru_k)+x_N^*Xx_N$. By [F7], $x_N\to0$, so $x_0^*Xx_0$ is a sum of nonnegative terms; hence $X\succeq0$. Now [F6] identifies it as the unique stabilizing positive-semidefinite solution. [A1, F1, F6, F7, step 3.1, algebra] ∎
