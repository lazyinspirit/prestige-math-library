---
id: prop-riccati-sensitivity-and-graph-subspace-conditioning
kind: proposition
title: "Riccati residual sensitivity and invariant graph conditioning retain
  spectral separation"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - thm-care-stabilizing-psd-solution-and-value
  - thm-dare-stabilizing-psd-solution-and-value
  - prop-care-hamiltonian-stable-graph
  - prop-dare-symplectic-pencil-graph-and-stable-spectrum
  - def-standard-continuous-and-discrete-riccati-equations
  - thm-care-local-residual-ball-certificate
  - thm-dare-local-residual-ball-certificate
  - def-sylvester-operator-and-separation-number
  - thm-sylvester-unique-solvability-spectral-separation
  - thm-continuous-lyapunov-integral-and-positivity
  - lem-powers-of-a-schur-stable-matrix-decay
  - def-frobenius-matrix-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - cor-finite-dimensional-normed-spaces-are-banach
  - prop-dare-stable-deflating-subspace-perturbation-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Valeria Simoncini, Computational Methods for Linear Matrix Equations"
      url: "https://www.dm.unibo.it/~simoncin/matrixeq.pdf"
      locator: "Lyapunov and Sylvester separation, conditioning of matrix equations"
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, Hamiltonian invariant graph and Riccati sensitivity"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $X_c$ and $X_d$ be the stabilizing CARE and DARE solutions under the hypotheses of [[thm-care-stabilizing-psd-solution-and-value]] and [[thm-dare-stabilizing-psd-solution-and-value]]. Their residual derivatives on Hermitian matrices are
$$\mathcal L_c(E)=A_c(X_c)^*E+EA_c(X_c),\qquad \mathcal L_d(E)=A_c(X_d)^*EA_c(X_d)-E.$$
When invertible, the local residual condition numbers are $\kappa_c=\|\mathcal L_c^{-1}\|_{F\to F}$ and $\kappa_d=\|\mathcal L_d^{-1}\|_{F\to F}$. If additive Hermitian residual perturbations admit radii satisfying the contraction and separate stability-margin hypotheses of [[thm-care-local-residual-ball-certificate]] or [[thm-dare-local-residual-ball-certificate]], the perturbed equations have stabilizing roots within those radii; the linear leading sensitivity is $-\mathcal L_c^{-1}\Delta$ or $-\mathcal L_d^{-1}\Delta$.

For CARE, write $T_X=\begin{bmatrix}I&0\\X_c&I\end{bmatrix}$ and let $\sigma=\operatorname{sep}(-A_c(X_c)^*,A_c(X_c))>0$, with $\kappa_s=1/\sigma$. For a Hamiltonian perturbation $\Delta H$, put $Z=T_X^{-1}\Delta H T_X$, $\zeta=\|Z\|_F$, $\theta=\kappa_s\zeta$, and $\mu=\kappa_s\|G\|_2$. If $6\theta+4\mu\theta+4\theta^2<1$, the perturbed Hamiltonian has an invariant graph $\operatorname{Ran}[I;X_c+Y]$ with $\|Y\|_F\le2\theta$. If its restriction is certified Hurwitz and the perturbed Hamiltonian is certified to have exactly $n$ left-half-plane eigenvalues, this graph is its stable subspace.

Finally, for either an exact CARE invariant graph basis or DARE deflating graph basis $U=[U_1;U_2]$ with invertible $U_1$, let $X=U_2U_1^{-1}$ and let $\widetilde U=U+\Delta U$. If $\|U_1^{-1}\|_2\|\Delta U_1\|_2<1$, then $\widetilde U_1$ remains invertible and
$$\|\widetilde U_2\widetilde U_1^{-1}-X\|_2\le\frac{\|\Delta U_2\|_2+\|X\|_2\|\Delta U_1\|_2}{\|U_1^{-1}\|_2^{-1}-\|\Delta U_1\|_2}.$$
This basis-chart estimate does not by itself certify a perturbed QZ deflating subspace.

For the DARE pencil, [[prop-dare-stable-deflating-subspace-perturbation-bound]] gives a separate perturbation-to-stable-deflating-space estimate from a generalized Sylvester separation, explicit contraction inequalities, and distinct leading/trailing Stein margins. Under those conditions its aligned orthonormal stable basis changes by at most $\beta(r)\le r$. The computable physical chart estimate additionally requires $\|U_1^{-1}\|_2\beta(r)<1$; without that margin the chart remains inconclusive. A QZ pencil backward-error bound alone supplies none of these conditions.

## Facts & Assumptions

**Given:** Standard CARE/DARE data, their stabilizing solutions and graph representations, and the indicated residual or basis perturbation bounds.

[F1] [[thm-care-stabilizing-psd-solution-and-value]]: the CARE has a unique Hermitian positive-semidefinite solution whose closed loop is Hurwitz.

[F2] [[thm-dare-stabilizing-psd-solution-and-value]]: the DARE has a unique Hermitian positive-semidefinite solution whose closed loop is Schur stable.

[F3] [[def-standard-continuous-and-discrete-riccati-equations]]: $F_c(X)=A^*X+XA-XGX+Q$ and $F_d(X)=Q+A^*X(I+GX)^{-1}A-X$ on their stated domains.

[F4] [[prop-care-hamiltonian-stable-graph]]: $H[I;X_c]=[I;X_c]A_c(X_c)$.

[F5] [[prop-dare-symplectic-pencil-graph-and-stable-spectrum]]: $N[I;X_d]=M[I;X_d]A_c(X_d)$ for the stated homogeneous DARE pencil.

[F6] [[def-sylvester-operator-and-separation-number]]: $\operatorname{sep}(P,-Q)$ is the smallest singular value of $Y\mapsto PY+YQ$ in Frobenius norm.

[F7] [[thm-care-local-residual-ball-certificate]]: CARE residual radius conditions are $\kappa(r+g\rho^2)\le\rho$ and $2\kappa g\rho<1$, with a separate Lyapunov stability margin.

[F8] [[thm-dare-local-residual-ball-certificate]]: DARE residual radius conditions use $\kappa(r+L_D\rho^2/2)\le\rho$ and $\kappa L_D\rho<1$, with a separate Stein stability margin.

[F9] [[thm-sylvester-unique-solvability-spectral-separation]]: $Y\mapsto PY+YQ$ is invertible when $\sigma(P)\cap[-\sigma(Q)]=\varnothing$.

[F10] [[cor-finite-dimensional-normed-spaces-are-banach]]: finite-dimensional Frobenius matrix spaces are complete.

[F11] [[lem-powers-of-a-schur-stable-matrix-decay]]: powers of a Schur-stable matrix decay geometrically, so the Stein series in the proof converges.

[F12] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: compatible operator norms are submultiplicative.

[F13] [[thm-continuous-lyapunov-integral-and-positivity]]: for a Hurwitz matrix, the Lyapunov integral with positive-definite forcing is positive definite and solves the associated Lyapunov equation.

[F14] [[prop-dare-stable-deflating-subspace-perturbation-bound]]: generalized Sylvester separation, paired-graph contraction, separate leading and reciprocal-trailing Stein margins, and normalized basis/chart estimates bound the perturbed DARE stable deflating graph, including infinite roots.

[A1] Residual perturbations are Hermitian and the verified norm and stability bounds in the applicable radius certificate enclose their exact values.

[A2] For the CARE subspace part, the perturbed stable eigenvalue count and the Hurwitz property of the restriction are supplied as verified inputs when stable-subspace identity is asserted.

## Proof

1.1 By [F3], expanding the CARE polynomial at a Hermitian $X$ gives $F_c(X+E)-F_c(X)=\mathcal L_c^X(E)-EGE,$ where $\mathcal L_c^X(E)=(A-GX)^*E+E(A-GX)$. For the DARE, set $f(X)=Q+A^*X(I+GX)^{-1}A$. Direct multiplication gives $\Phi_G(X+E)-\Phi_G(X)=(I+(X+E)G)^{-1}E(I+GX)^{-1},\quad \Phi_G(X)=X(I+GX)^{-1}.$ Taking the derivative at $E=0$ and multiplying by $A^*,A$ gives $Df(X)[E]=A_c(X)^*EA_c(X)$; since $F_d=f-X$, this gives $DF_d(X)[E]=A_c(X)^*EA_c(X)-E$. [F3, given, algebra]

1.2 Apply [F14] to the exact ordered unitary DARE pencil representation and the supplied perturbations of both pencil matrices. Its paired generalized Sylvester operator and contraction inequalities give the radius-$r$ right and left deflating graphs; its separate Neumann and Stein margins establish the perturbed stable split. Its normalized basis construction gives distance at most $\beta(r)\le r$, and its computable physical chart estimate retains the inverse graph-block norm and the strict margin $\|U_1^{-1}\|_2\beta(r)<1$. No part of this conclusion follows from QZ backward error alone. [F14, given]

2.1 For a CARE additive residual perturbation $\Delta$, write $X=X_c+E$ and let $\delta=\|\Delta\|_F$. Then $F_c(X_c)=0$ and step 1.1 makes the perturbed root equation equivalent to $E=-\mathcal L_c^{-1}\Delta+\mathcal L_c^{-1}(EGE).$ If $\rho$ satisfies $\kappa_c(\delta+\|G\|_2\rho^2)\le\rho$ and $2\kappa_c\|G\|_2\rho<1$, the map sends the closed radius-$\rho$ Hermitian ball to itself and has Lipschitz constant at most the second displayed quantity. Iteration from zero gives geometric successive differences; [F10] gives a limit in the ball, continuity gives a fixed point, and contraction gives uniqueness. Let $W_c=\int_0^\infty e^{tA_c^*}e^{tA_c}\,dt\succ0$; then $A_c^*W_c+W_cA_c=-I$. If also $2\|W_c\|_2\|G\|_2\rho<1$, then $\|EGW_c+W_cGE\|_2\le2\|W_c\|_2\|G\|_2\rho<1$. Hence $(A_c-GE)^*W_c+W_c(A_c-GE)\prec0$; an eigenvector $v$ with eigenvalue $\lambda$ gives $2\operatorname{Re}(\lambda)v^*W_cv<0$, so the perturbed loop is Hurwitz. For DARE, [F2] gives Schur stability and [F11] gives the Stein inverse $\mathcal L_d^{-1}(Y)=-\sum_{k\ge0}(A_c^*)^kYA_c^k$. On a sufficiently small ball, $S(X)=R+B^*XB\succeq\delta_S I$, where $\delta_S=\lambda_{\min}S(X_d)-b^2\rho>0$. Put $a=\|A\|_2$, $b=\|B\|_2$, and $m=\|X_d\|_F+\rho$. The resolvent identity gives $\|S(X)^{-1}\|_2\le\delta_S^{-1}$ and $\|S(X)^{-1}-S(Y)^{-1}\|_2\le b^2\delta_S^{-2}\|X-Y\|_F$. Splitting $K(X)-K(Y)$ into its $X$ and inverse-factor changes yields $\|K(X)-K(Y)\|_F\le L_K\|X-Y\|_F$, where $L_K=ab/\delta_S+ab^3m/\delta_S^2$; hence $\|A_c(X)\|_2\le M_c=a+ab^2m/\delta_S$ and $\|A_c(X)-A_c(Y)\|_2\le L_c\|X-Y\|_F$, $L_c=bL_K$. Since $DF_d(X)[E]=A_c(X)^*EA_c(X)-E$, subtraction gives $\|DF_d(X)-DF_d(Y)\|_{F\to F}\le2M_cL_c\|X-Y\|_F=:L_D\|X-Y\|_F$. Integrating this derivative along line segments gives $R(E)=F_d(X_d+E)-F_d(X_d)-\mathcal L_d(E)$ with $\|R(E)\|_F\le L_D\|E\|_F^2/2$ and $\|R(E)-R(F)\|_F\le L_D\rho\|E-F\|_F$ on the ball. Thus $E=-\mathcal L_d^{-1}(\Delta+R(E))$ is a self-map when $\kappa_d(\delta+L_D\rho^2/2)\le\rho$ and a contraction when $\kappa_d L_D\rho<1$. The same completeness argument gives its unique local root. For a separate stability margin, take $W_d=\sum_{k\ge0}(A_c^*)^kA_c^k\succ0$, so $W_d-A_c^*W_dA_c=I$ by [F11]. Put $\eta=L_c\rho$. Expanding the Stein form bounds its change by $\|W_d\|_2(2M_c\eta+\eta^2)$; choose $\rho$ so this is below $1$. Then $W_d-A_c(X)^*W_dA_c(X)\succ0$, and an eigenvector gives $(1-|\lambda|^2)v^*W_dv>0$, so the perturbed loop is Schur stable. For sufficiently small $\delta>0$, take $\rho=2\kappa_c\delta$ in CARE when $\|G\|_2>0$; the contraction and stability inequalities hold for small enough $\delta$, giving $\|E\|_F=O(\delta)$. If $G=0$, the equation is linear and this order bound is exact. In DARE, take $\rho=2\kappa_d\delta$ when $L_D>0$; for sufficiently small $\delta$ this satisfies the self-map, contraction, $S(X)\succ0$, and Stein-margin bounds, again giving $\|E\|_F=O(\delta)$. If $L_D=0$, the local equation is linear. The remainders are therefore $O(\delta^2)$, proving the first-order terms $-\mathcal L_c^{-1}\Delta$ and $-\mathcal L_d^{-1}\Delta$. [A1, F1, F2, F7, F8, F10, F11, F12, F13, step 1.1, algebra]

2.2 Put $T_X=[I\ 0;X_c\ I]$. Multiplying the Hamiltonian in [F4] on the right by $T_X$ and then on the left by $T_X^{-1}=[I\ 0;-X_c\ I]$, and using the CARE identity in [F3], gives $T_X^{-1}HT_X=\begin{bmatrix}A_c&-G\\0&-A_c^*\end{bmatrix}.$ The Sylvester map $\mathcal S(Y)=-A_c^*Y-YA_c$ has smallest singular value $\sigma=\operatorname{sep}(-A_c^*,A_c)>0$: [F9] applies because $\sigma(-A_c^*)$ lies in the right half-plane while $-\sigma(-A_c)=\sigma(A_c)$ lies in the left half-plane; [F6] gives inverse norm $\kappa_s=1/\sigma$. In the perturbed coordinates, write $Z=[Z_{ij}]$ and seek an invariant graph $[I;Y]$. Its lower-block graph equation is $-A_c^*Y-YA_c+Z_{21}+Z_{22}Y-YZ_{11}+YGY-YZ_{12}Y=0.$ Hence $Y$ is a fixed point of $\mathcal T(Y)=-\mathcal S^{-1}(Z_{21}+Z_{22}Y-YZ_{11}+YGY-YZ_{12}Y).$ On the Frobenius ball $\|Y\|_F\le2\theta$, each block norm of $Z$ is at most $\zeta$. The map norm is at most $\kappa_s[\zeta+2\zeta\|Y\|_F+(\|G\|_2+\zeta)\|Y\|_F^2]$, hence at most $\theta+4\theta^2+4\mu\theta^2+4\theta^3\le2\theta$ under the displayed smallness condition. Its Lipschitz constant is at most $2\theta+4\mu\theta+4\theta^2<1$. Completeness [F10] and iteration therefore give a unique fixed point in the ball. Returning through $T_X$ turns $[I;Y]$ into $[I;X_c+Y]$, proving the graph bound. Under [A2], the restriction has $n$ stable eigenvalues and the perturbed matrix has exactly $n$ stable eigenvalues in total. In a basis beginning with this invariant graph, the perturbed matrix is block upper triangular with this stable restriction as its first diagonal block; the quotient block therefore has no stable eigenvalues. A stable generalized eigenvector must project to a stable generalized eigenvector of the quotient, which is impossible, so every stable generalized eigenspace lies in the graph. Both spaces have dimension $n$, hence the graph is the stable spectral subspace. [A2, F3, F4, F6, F9, F10, F12, step 1.1, algebra]

3.1 Since $\widetilde U_1=U_1+\Delta U_1=U_1(I+U_1^{-1}\Delta U_1)$ and $\|U_1^{-1}\Delta U_1\|_2<1$, the Neumann geometric series makes the second factor invertible and gives $\|\widetilde U_1^{-1}\|_2\le(\|U_1^{-1}\|_2^{-1}-\|\Delta U_1\|_2)^{-1}$. Using $U_2=XU_1$, $\widetilde U_2\widetilde U_1^{-1}-X=(\Delta U_2-X\Delta U_1)\widetilde U_1^{-1}.$ Submultiplicativity [F12] proves the displayed basis-chart bound. This derivation uses only the graph equation, so it applies to both the CARE invariant graph and the DARE deflating graph; it does not convert a pencil backward error into a deflating-subspace error. [F4, F5, F12, given, algebra] ∎
