---
id: lem-computed-augmented-tikhonov-solve-residual-and-output-error
kind: lemma
title: Computed augmented Tikhonov solves have certified residual and output-error bounds
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
- lem-rounded-linear-and-normal-residual-certificates
- thm-computed-full-rank-least-squares-backward-stability
- def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
- thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
- thm-cauchy-schwarz-in-an-inner-product-space
- def-operator-norm-on-a-finite-dimensional-inner-product-space
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Stuart and Voss, Matrix Analysis and Algorithms
    url: https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf
dependency_level: 5
---

## Statement

Let stored $A\in\mathbb F^{m\times n}$ and $y\in\mathbb F^m$ be real or complex, $m,n\ge1$, and let stored real $\lambda>0$. Let $x_\lambda=(A^*A+\lambda I)^{-1}A^*y$. Compute $\alpha=\operatorname{fl}(\sqrt\lambda)>0$ under the successful normal-range square-root model, and solve the stored augmented problem $\min_x\|[A;\alpha I]x-[y;0]\|_2$ by scaled Householder QR and rounded substitution. For complex inputs use the realification described below, so the backend uses only real triangular divisions. Every operation must succeed; failed pivots, invalid operations and out-of-range nonzero intermediates return range-failure.

For any returned $\widehat x$, let $\widehat r$ and $\rho\ge0$ certify $\|\widehat r-r\|_2\le\rho$ for the intended residual $r=(A^*A+\lambda I)\widehat x-A^*y$. One concrete certificate is supplied by [[lem-rounded-linear-and-normal-residual-certificates]] using its successful sequential-dot evaluation, exact norms or certified upper bounds, and $0<u<1$ with $(\max(m,n)-1)u<1$. These dimension restrictions concern evaluation on the original $m\times n$ matrix, including for complex data; if evaluating on the realified $2m\times2n$ matrix instead, require $(\max(2m,2n)-1)u<1$. Arithmetic success alone does not imply these restrictions. Then
$$\|\widehat x-x_\lambda\|_2\le\frac{\|\widehat r\|_2+\rho}{\lambda}.$$
This bounds returned-output roundoff relative to the exact direct-solve target $x_{\rm stop}=x_\lambda$. It also certifies the solve term in any larger analytic error chain, irrespective of the backend. The representation of $\sqrt\lambda$ contributes no hidden change of target: $|\alpha^2-\lambda|\le(2u+u^2)\lambda$. If residual evaluation instead uses exact $\alpha^2$, add $|\alpha^2-\lambda|\|\widehat x\|_2$ to its allowance; rounding a computed $\alpha^2$ needs its own scalar error as well.

The backend's nearby least-squares conclusion holds under the completed QR/solve hypotheses and nonsingularity condition of [[thm-computed-full-rank-least-squares-backward-stability]], including $Mu<1$ and $\gamma_{N+3}<1/8$ in the real backend dimensions $(M,N)=(m+n,n)$ or $(2m+2n,2n)$, respectively. In real dimension, write $C=[A;\alpha I]$ and $\epsilon_Q=\beta_Q\|C\|_F$. A sufficient check is $\epsilon_Q<\alpha$ and $\|\Delta R\|_F<\alpha-\epsilon_Q$. An explicit certified nonsingularity check may replace this sufficient margin.

For a Hilbert-space discrete operator, supply isometries $U:\mathbb F^n\to X$ and $V:\mathbb F^m\to Y$ with $A_h=VAU^*$, and return $U\widehat x$. With coefficient datum $y_c=V^*y_\delta$, the exact normal solution lies in $\operatorname{ran}U$ and the coefficient residual lifts isometrically, so the same certificate applies to $r_h$; likewise use $V^*y_{h,\delta}$ for $r_{h,h}$. If a stored coefficient datum $\widehat y_c$ differs from $V^*y$ by at most $\epsilon_y$, add $\|A\|_2\epsilon_y$ to the residual allowance. If the returned output also has an orthogonal component $z\perp\operatorname{ran}U$ of norm at most $\epsilon_\perp$, add $\lambda\epsilon_\perp$. Finite rank alone does not supply these coordinate or output certificates.

## Facts & Assumptions

**Given:** The stated stored finite inputs, successful augmented solve and residual evaluation, and certified upper bounds in the residual allowance. No convergence or automatic arithmetic success is assumed.

[F1] [[lem-rounded-linear-and-normal-residual-certificates]] supplies $\|\widehat r-r\|\le\rho$ with all multiplication, dot-product and residual-addition errors under its successful evaluation and dimension/precision hypotheses stated above. Any independently certified pair satisfying this inequality also suffices.

[F2] [[thm-computed-full-rank-least-squares-backward-stability]] supplies successful real augmented-QR nearby-data bounds with its explicit nonsingularity check.

[F3] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]] supplies the successful rounded square-root and no-underflow model.

[F4] [[thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]] supplies the exact real/complex minimizer and its normal equation.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for real or complex inner-product vectors, $|\langle v,w\rangle|\le\|v\|\|w\|$.

[F6] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: throughout this item the matrix $2$-norm is the induced Euclidean operator norm, $\|M\|_2=\max_{\|z\|_2=1}\|Mz\|_2$ for a nonzero domain, with value zero on the zero domain. Rescaling gives $\|Mz\|_2\le\|M\|_2\|z\|_2$; rowwise Cauchy–Schwarz gives the useful bound $\|M\|_2\le\|M\|_F$.

## Proof

1.1 The stored augmented matrix has full column rank, since $\|[A;\alpha I]z\|_2^2=\|Az\|_2^2+\alpha^2\|z\|_2^2\ge\alpha^2\|z\|_2^2$. If $C+\Delta_Q=\widehat Q\widehat R$, then $\|\widehat Rz\|=\|(C+\Delta_Q)z\|\ge(\alpha-\epsilon_Q)\|z\|$. Under the sufficient margin, the further triangular perturbation preserves a positive lower bound. Thus the nonsingularity premise in [F2] holds under the stated check. The theorem still explicitly requires successful arithmetic; exact full rank alone does not ensure rounded success. [given, F2, F5, F6, algebra]

1.2 By [F3], $\alpha=\sqrt\lambda(1+\delta)$, $|\delta|\le u$, whence $|\alpha^2-\lambda|\le(2u+u^2)\lambda$. For any $z$, Cauchy-Schwarz gives $\|(A^*A+\lambda I)z\|\|z\|\ge\langle(A^*A+\lambda I)z,z\rangle=\|Az\|^2+\lambda\|z\|^2\ge\lambda\|z\|^2$. The normal equation [F4] therefore implies $\|\widehat x-x_\lambda\|\le\|r\|/\lambda\le(\|\widehat r\|+\rho)/\lambda$ using the assumed residual certificate, supplied by [F1] under the stated evaluation hypotheses. Replacing the coefficient in a residual by $\alpha^2$ changes that exact residual by $(\alpha^2-\lambda)\widehat x$, giving the stated additional allowance. [given, F1, F3, F4, F5, algebra]

2.1 For complex inputs identify $z=z_R+iz_I$ with $(z_R,z_I)\in\mathbb R^{2n}$. The real matrix $A_R=\begin{pmatrix}\operatorname{Re}A&-\operatorname{Im}A\\\operatorname{Im}A&\operatorname{Re}A\end{pmatrix}$ represents exactly the same linear map, preserves vector norms, and satisfies $\|A_R\|_2=\|A\|_2$, $\|A_R\|_F=\sqrt2\|A\|_F$ by direct component sums. Apply [F2] to $[A_R;\alpha I_{2n}]$ and datum $((\operatorname{Re}y,\operatorname{Im}y),0)$; this is exactly the original complex objective. Mapping its output back needs only component pairing, so introduces no arithmetic error or unmodeled complex division. [F2, F6, step 1.1, algebra]

3.1 In exact arithmetic with the intended $\sqrt\lambda$, full-rank augmented QR returns the unique minimizer in [F4], hence $x_{\rm stop}=x_\lambda$. Step 1.2 bounds the returned computed output's difference from that target, including square-root representation and all solve error through its certified residual. For an iterative stopping target different from $x_\lambda$, retain separate stopping and output terms rather than calling their sum pure roundoff. [F2, F4, step 1.1, step 2.1, step 1.2, algebra]

4.1 In the supplied Hilbert representation, $U^*U=I$, $V^*V=I$, and $A_h^*=UA^*V^*$. The subspaces $\operatorname{ran}U$ and its orthogonal complement are invariant under $A_h^*A_h+\lambda I$; on the complement that operator is $\lambda I$ and its right-hand side $A_h^*y$ has zero component. Thus the exact normal solution is $Ux_\lambda$, with coefficient datum $V^*y$. Direct substitution gives $r_h=U((A^*A+\lambda I)\widehat x-A^*V^*y)$, and isometry preserves its norm. For every coefficient vector $e$, put $w=A^*e$. Then $\|w\|_2^2=\langle Aw,e\rangle\le|\langle Aw,e\rangle|\le\|A\|_2\|w\|_2\|e\|_2$ by [F5]–[F6]; dividing for $w\ne0$ (and checking $w=0$ directly) gives $\|A^*e\|_2\le\|A\|_2\|e\|_2$. Perturbing the datum therefore adds $UA^*(\widehat y_c-V^*y)$ of norm at most $\|A\|_2\epsilon_y$; an orthogonal output component adds $\lambda z$. Triangle inequality gives the stated allowances. These explicit coordinate hypotheses preserve the general Hilbert theorem while justifying its concrete finite solve. [F5, F6, step 1.2, algebra] ∎
