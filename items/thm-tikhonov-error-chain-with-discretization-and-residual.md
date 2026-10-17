---
id: thm-tikhonov-error-chain-with-discretization-and-residual
kind: theorem
title: "Tikhonov error separates bias, data noise, discretization and solve residual"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - lem-hilbert-tikhonov-normal-operator-invertible
  - lem-hilbert-tikhonov-noise-amplification-bound
  - def-hilbert-space
  - def-compact-linear-operator
  - def-hilbert-space-adjoint
  - def-countable-choice
  - def-bounded-linear-operator
  - def-operator-norm
  - cor-inner-product-induces-a-norm
  - def-tikhonov-regularised-least-squares
  - thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
  - lem-computed-augmented-tikhonov-solve-residual-and-output-error
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
      locator: "Complete 27-slide chapter, especially slides 2–6 on the exact finite-matrix bias/data-perturbation identity."
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 6, equations (6.1)–(6.4) and Theorem 6.5 with proof, PDF pp. 56–63."
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: "https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf"
      locator: "Complete 29-slide chapter, especially slides 11–17 on discrete Tikhonov filtering."
---

## Statement

Assume Countable Choice. Let $X,Y$ be real or complex Hilbert spaces, let
$A:X\to Y$ be compact (hence bounded), and let $A_h:X\to Y$ be a bounded
discrete operator whose range is a finite-dimensional subspace of $Y$. For
$\lambda>0$,
define

$$R_\lambda=(A^*A+\lambda I_X)^{-1}A^*,\qquad R_{\lambda,h}=(A_h^*A_h+\lambda I_X)^{-1}A_h^*.$$

These maps are well-defined by [[lem-hilbert-tikhonov-normal-operator-invertible]]. Let $x^\dagger\in X$, $y=Ax^\dagger$, $y_\delta=y+e$ with $\|e\|\le\delta$ and $\delta\ge0$, and let $\widetilde x\in X$. Define the exact discrete normal-equation residual

$$r_h=(A_h^*A_h+\lambda I_X)\widetilde x-A_h^*y_\delta.$$

Then the following chain is exact:

$$x^\dagger-\widetilde x=(x^\dagger-R_\lambda y) +(R_\lambda y-R_\lambda y_\delta) +(R_\lambda y_\delta-R_{\lambda,h}y_\delta) +(R_{\lambda,h}y_\delta-\widetilde x).$$

Its norm satisfies

$$\|x^\dagger-\widetilde x\|\le \|x^\dagger-R_\lambda y\|+\frac{\delta}{2\sqrt\lambda} +\|(R_\lambda-R_{\lambda,h})y_\delta\|+\frac{\|r_h\|}{\lambda}.$$

The first term is regularization bias, the second is data noise, the third is the regularized-operator discretization difference, and the fourth is the solve residual. The third term receives a numerical bound only when an operator-perturbation bound is supplied: if $\|R_\lambda-R_{\lambda,h}\|\le\eta_{\lambda,h}$, it is at most $\eta_{\lambda,h}\|y_\delta\|$. If residual evaluation returns $\widehat r_h$ with a certified $\|r_h-\widehat r_h\|\le\rho_h$, the last term is at most $(\|\widehat r_h\|+\rho_h)/\lambda$. If an algorithm has a specified exact-arithmetic stopping output $x_{\mathrm{stop}}$ and returns a computed output $\widetilde x$, the last difference can further split as

$$R_{\lambda,h}y_\delta-\widetilde x= (R_{\lambda,h}y_\delta-x_{\mathrm{stop}}) +(x_{\mathrm{stop}}-\widetilde x).$$

Writing $r_{\mathrm{stop}}=(A_h^*A_h+\lambda I_X)x_{\mathrm{stop}} -A_h^*y_\delta$, the first term is at most $\|r_{\mathrm{stop}}\|/\lambda$; the second is the separate returned-output roundoff term. Any bound on that roundoff or on residual-evaluation error requires its own arithmetic hypotheses. For a discretized datum $y_{h,\delta}=A_hx^\dagger+e$ formed before inversion, put $d_h=(A-A_h)x^\dagger=y_\delta-y_{h,\delta}$. Let $\widetilde x_h\in X$ be a computed discrete output. The corresponding exact refinement is

$$x^\dagger-\widetilde x_h=(x^\dagger-R_\lambda y) +(R_\lambda y-R_\lambda y_\delta) +R_\lambda d_h+(R_\lambda-R_{\lambda,h})y_{h,\delta} +(R_{\lambda,h}y_{h,\delta}-\widetilde x_h),$$

so the forward residual discarded by quadrature or collocation is counted before inversion as $R_\lambda d_h$, with $\|R_\lambda d_h\|\le\|d_h\|/(2\sqrt\lambda)$. The separate operator discretization and solve terms remain. For this refined chain, define $r_{h,h}=(A_h^*A_h+\lambda I_X)\widetilde x_h-A_h^*y_{h,\delta}$; then $\|R_{\lambda,h}y_{h,\delta}-\widetilde x_h\|\le\|r_{h,h}\|/\lambda$. If its evaluation returns $\widehat r_{h,h}$ with a certified $\|r_{h,h}-\widehat r_{h,h}\|\le\rho_{h,h}$, the last term is at most $(\|\widehat r_{h,h}\|+\rho_{h,h})/\lambda$. No rate for $d_h$, no operator perturbation estimate, and no floating-point residual bound is implicit. When $X,Y$ are finite-dimensional and $b=Ax^\dagger+e$, the same identity is the canonical Tikhonov bias/noise formula

$$x^\dagger-A^\#_\lambda b=(I-A^\#_\lambda A)x^\dagger-A^\#_\lambda e, \qquad A^\#_\lambda=(A^*A+\lambda I)^{-1}A^*.$$

Here $\lambda$ is the coefficient of $\|x\|^2$ in
$\|Ax-b\|^2+\lambda\|x\|^2$.

For stored finite matrices, [[lem-computed-augmented-tikhonov-solve-residual-and-output-error]] supplies the concrete augmented-QR or independently certified-residual application: take its $\rho$ as $\rho_h$ with datum $y_\delta$, or as $\rho_{h,h}$ with datum $y_{h,\delta}$. It bounds returned-output roundoff for the exact direct-solve target and retains explicit real/complex realization, square-root representation, successful-operation and nonsingularity conditions.

## Facts & Assumptions

**Given:** Countable Choice, real or complex Hilbert spaces $X,Y$, bounded operators $A,A_h:X\to Y$, $A_h$ of finite rank, $x^\dagger\in X$, $e\in Y$, $\lambda>0$, $\delta\ge0$, $\|e\|\le\delta$, and the exact residual $r_h$. For the refined chain also take $\widetilde x_h\in X$ and its exact residual $r_{h,h}$ as defined in the Statement. If evaluated residuals are used, assume the stated certified bounds $\rho_h,\rho_{h,h}$. For the optional stopping/roundoff split, assume the algorithm's specified exact-arithmetic output $x_{\mathrm{stop}}$ exists.

[A1] [[def-countable-choice]]: The Hilbert-adjoint definition used here assumes Countable Choice; no use of full Choice is claimed.

[F1] [[lem-hilbert-tikhonov-normal-operator-invertible]]: For a bounded map $T$ between Hilbert spaces and $\lambda>0$, $(T^*T+\lambda I)^{-1}$ exists and has norm at most $1/\lambda$.

[F2] [[lem-hilbert-tikhonov-noise-amplification-bound]]: For bounded $T$ and $g$ in its codomain, $R_\lambda g=(T^*T+\lambda I)^{-1}T^*g$ satisfies $\|R_\lambda g\|\le\|g\|/(2\sqrt\lambda)$.

[F3] [[def-hilbert-space-adjoint]]: The adjoint satisfies $\langle Tx,y\rangle=\langle x,T^*y\rangle$.

[F4] [[def-operator-norm]]: The operator norm bounds every image by $\|Tz\|\le\|T\|\,\|z\|$.

[F5] [[def-tikhonov-regularised-least-squares]]: For a finite matrix, the regularized objective is $\|Ax-b\|_2^2+\lambda\|x\|_2^2$ with $\lambda>0$.

[F6] [[thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]]: Its unique minimizer is $(A^*A+\lambda I)^{-1}A^*b$.

[F7] [[def-compact-linear-operator]]: A compact operator maps bounded sets to sets with compact closure; every compact operator is bounded.

[F8] [[def-hilbert-space]]: A real or complex Hilbert space is an inner-product space complete in the norm induced by its inner product.

[F9] [[cor-inner-product-induces-a-norm]]: The induced norm satisfies $\|u+v\|\le\|u\|+\|v\|$.

[F10] [[lem-computed-augmented-tikhonov-solve-residual-and-output-error]]: Finite stored real/complex data admit the stated normal-residual certificate and augmented-QR returned-output bound, with all arithmetic and representation hypotheses explicit.

## Proof

1.1 By [F7], $A$ is bounded, and [F8] supplies the Hilbert-space hypotheses. By [F1], both shifted normal operators are invertible, so the displayed $R_\lambda$ and $R_{\lambda,h}$ are defined. Multiplying their definitions by their normal operators gives $(A^*A+\lambda I)R_\lambda=A^*$ and $(A_h^*A_h+\lambda I)R_{\lambda,h}=A_h^*$. [given, A1, F1, F3, F7, F8, algebra]

1.2 Adding and subtracting the intermediate vectors $R_\lambda y$, $R_\lambda y_\delta$, and $R_{\lambda,h}y_\delta$ cancels the intervening terms and proves the stated four-term identity. Since $y_\delta=y+e$, [F2] gives $\|R_\lambda y-R_\lambda y_\delta\|=\|R_\lambda e\| \le\delta/(2\sqrt\lambda)$. [given, F2, algebra]

1.3 Adding and subtracting $x_{\mathrm{stop}}$ gives the optional stopping/roundoff identity. The normal equation for $R_{\lambda,h}y_\delta$ and the definition of $r_{\mathrm{stop}}$ imply $(A_h^*A_h+\lambda I)(x_{\mathrm{stop}}-R_{\lambda,h}y_\delta) =r_{\mathrm{stop}}$. By [F1], the stopping term is at most $\|r_{\mathrm{stop}}\|/\lambda$; the other term is exactly the stated roundoff difference. [given, F1, algebra]

1.4 In the refined datum case, $y_\delta-y_{h,\delta}=(Ax^\dagger+e)-(A_hx^\dagger+e)=d_h$. Inserting $R_\lambda y_{h,\delta}$ and $R_{\lambda,h}y_{h,\delta}$ into the chain therefore gives the displayed five-term identity by cancellation. [given, F3, algebra]

2.1 Let $z=R_{\lambda,h}y_\delta$. The normal equation in step 1.1 gives $(A_h^*A_h+\lambda I)(\widetilde x-z)=r_h$. By [F1], $\|\widetilde x-z\|\le\|r_h\|/\lambda$. The triangle inequality [F9] applied to the four-term identity, using step 1.2 for its noise term, proves the stated total error bound. [F1, F9, step 1.1, step 1.2, algebra]

2.2 Applying [F2] to $d_h$ bounds its pre-inversion contribution by $\|R_\lambda d_h\|\le\|d_h\|/(2\sqrt\lambda)$. Applying [F1] to $r_{h,h}=(A_h^*A_h+\lambda I)(\widetilde x_h-R_{\lambda,h}y_{h,\delta})$ gives the stated refined solve-residual bound. Under the residual-evaluation hypothesis, the triangle inequality [F9] gives $\|r_{h,h}\|\le\|\widehat r_{h,h}\|+\rho_{h,h}$. [F1, F2, F9, step 1.4, algebra]

2.3 In the finite-matrix case with $A_h=A$ and the exact regularized output $\widetilde x=R_\lambda y_\delta$, [F5]–[F6] identify $R_\lambda$ with the canonical Tikhonov minimizer. The baseline identity from step 1.2 then reduces to the displayed finite-matrix bias/noise formula. [F5, F6, step 1.2, algebra]

3.1 By [F4], an assumed operator-norm bound $\|R_\lambda-R_{\lambda,h}\|\le\eta_{\lambda,h}$ gives $\|(R_\lambda-R_{\lambda,h})y_\delta\| \le\eta_{\lambda,h}\|y_\delta\|$. Also, the triangle inequality [F9] gives $\|r_h\|\le\|\widehat r_h\|+\|r_h-\widehat r_h\| \le\|\widehat r_h\|+\rho_h$ under the stated residual-evaluation hypothesis. These are conditional estimates, not automatic stability claims. [given, F4, F9, step 2.1, algebra]

4.1 For stored finite data, or for supplied isometric coordinates $A_h=VMU^*$ and returned output $U\widehat x$, apply [F10] to the coefficient matrix $M$ (the matrix case uses identity embeddings) and datum $g=y_\delta$ or $g=y_{h,\delta}$. The exact normal residual lifts isometrically to $r_h$ or $r_{h,h}$, with any certified coordinate-data and orthogonal-output allowances from [F10]. Hence steps 2.2 and 3.1 apply. For the exact direct augmented solve, $x_{\mathrm{stop}}=R_{\lambda,h}g$, and [F10] bounds the returned-output term by $(\|\widehat r\|+\rho)/\lambda$. The analytic identity and its independent bias, noise and discretization terms are unchanged. [F10, step 1.3, step 2.2, step 3.1, algebra] ∎

## Remarks

Hansen's slides write the penalty as $\|Ax-b\|^2+\lambda_H^2\|x\|^2$; there $\lambda=\lambda_H^2$. Clason's coefficient $\alpha$ in front of the squared penalty maps directly to this item's $\lambda$. The concrete finite-matrix allowance is supplied by [[lem-computed-augmented-tikhonov-solve-residual-and-output-error]]; for general Hilbert-space computations any residual certificate still needs its own stated arithmetic realization.
