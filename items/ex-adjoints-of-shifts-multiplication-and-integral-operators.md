---
id: ex-adjoints-of-shifts-multiplication-and-integral-operators
kind: example
title: Adjoints of shifts, multiplication and integral operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space-adjoint, ex-standard-inner-products-on-kn-ell-two-and-l-two, def-complex-lp-and-euclidean-test-function-conventions, lem-complex-lp-completeness-density-and-inner-product, thm-complex-holder-minkowski-and-the-quotient-norm, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-finite-sigma-finite-and-semifinite-measures, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3.1 and Example 5.35 ff."
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Example 186"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Example

Assume the Axiom of Countable Choice. Then:

1. On $\ell^2(\mathbb N;\mathbb K)$ the right shift $S(x_0,x_1,x_2,\dots)=(0,x_0,x_1,\dots)$ has Hilbert adjoint the left shift $L(y_0,y_1,y_2,\dots)=(y_1,y_2,y_3,\dots)$.
2. For $m\in L^\infty(X,\mu;\mathbb C)$ the multiplication operator $M_m[f]=[mf]$ on complex $L^2(\mu)$ is bounded and $M_m^*=M_{\overline m}$.
3. Let $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$ be $\sigma$-finite measure spaces and let $k$ represent a class in $L^2(\mu\times\nu;\mathbb C)$. Then $(Kf)(x)=\int_Yk(x,y)f(y)\,d\nu(y)$ defines a bounded operator $K:L^2(\nu)\to L^2(\mu)$ independently of the representatives of $k$ and $f$, and its adjoint is $K^*g(y)=\int_X\overline{k(x,y)}g(x)\,d\mu(x)$.

## Facts & Assumptions

[A1] The Hilbert adjoint of $T$ is the unique operator with $\langle Tx,y\rangle=\langle x,T^*y\rangle$ ([[def-hilbert-space-adjoint]]).

[A2] $\ell^2$ carries the first-variable-linear pairing $\langle x,y\rangle=\sum_kx_k\overline{y_k}$ and is a Hilbert space; the complex $L^2$ pairing is $\langle f,g\rangle=\int f\overline g$ with Cauchy–Schwarz $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$ ([[ex-standard-inner-products-on-kn-ell-two-and-l-two]], [[lem-complex-lp-completeness-density-and-inner-product]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[A3] For $m\in L^\infty$ and $f\in L^2$ the product $mf$ lies in $L^2$ with $\|mf\|_2\le\|m\|_\infty\|f\|_2$ ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[A4] On a $\sigma$-finite product, Tonelli applies to nonnegative measurable functions and Fubini to $L^1$ functions, with the iterated integrals equal to the product integral ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[def-finite-sigma-finite-and-semifinite-measures]]).

[A5] Countable Choice is the hypothesis under which the adjoint and the $L^2$ completions are available ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

**Given:** The spaces and operators of the statement.

1.1 For $x,y\in\ell^2$ the series in $\langle Sx,y\rangle=\sum_{n\ge0}(Sx)_n\overline{y_n}=\sum_{n\ge1}x_{n-1}\overline{y_n}=\sum_{k\ge0}x_k\overline{y_{k+1}}=\langle x,Ly\rangle$ converge absolutely by Cauchy–Schwarz, so $S^*=L$ by uniqueness of the adjoint. [A1, A2]

1.2 The multiplication operator satisfies $\|M_mf\|_2\le\|m\|_\infty\|f\|_2$ by [A3], and $\langle M_mf,g\rangle=\int mf\overline g=\int f\overline{\overline mg}=\langle f,M_{\overline m}g\rangle$ for all $f,g\in L^2$, so $M_m$ is bounded with $M_m^*=M_{\overline m}$. [A1, A2, A3]

1.3 For $f\in L^2(\nu)$ put $h(x):=\bigl(\int_Y|k(x,y)|^2d\nu(y)\bigr)^{1/2}\in[0,+\infty]$. Wherever the section integral converges absolutely, the Cauchy–Schwarz inequality in the $y$-variable gives $\bigl|\int_Yk(x,y)f(y)\,d\nu(y)\bigr|\le\int_Y|k(x,y)f(y)|\,d\nu(y)\le h(x)\|f\|_2$; by Tonelli [A4] applied to the nonnegative $(\mu\times\nu)$-measurable function $|k|^2$, the function $h^2$ is $\mu$-measurable with $\int_Xh(x)^2d\mu(x)=\|k\|_2^2<+\infty$, so $h\in L^2(\mu)$ and $h(x)<+\infty$ for $\mu$-almost every $x$. Hence $(Kf)(x)=\int_Yk(x,y)f(y)\,d\nu(y)$ is defined and finite for $\mu$-almost every $x$, and it is $\mu$-measurable after zero extension: Tonelli [A4] makes the section integrals of the positive and negative parts of $\operatorname{Re}(kf)$ and $\operatorname{Im}(kf)$ $\mu$-measurable, and on the conull set where the integral of $kf$ is finite the real and imaginary parts of $(Kf)(x)$ are differences of these measurable functions. Since $|Kf|\le h\|f\|_2$ almost everywhere and $h\|f\|_2\in L^2(\mu)$, the class of $Kf$ lies in $L^2(\mu)$ with $\|Kf\|_2\le\|k\|_2\|f\|_2$. Finally, if $k=k'$ and $f=f'$ almost everywhere, then the function $(x,y)\mapsto|k(x,y)f(y)-k'(x,y)f'(y)|$ is nonnegative and measurable with vanishing product integral, so for $\mu$-almost every $x$ its section vanishes $\nu$-almost everywhere by Tonelli [A4], that is, $Kf=Kf'$ $\mu$-almost everywhere. [A2, A4]

2.1 For $f\in L^2(\nu)$ and $g\in L^2(\mu)$ the function $(x,y)\mapsto k(x,y)f(y)\overline{g(x)}$ lies in $L^1(\mu\times\nu)$: with $h$ as in step 1.3, Tonelli and Cauchy–Schwarz in $L^2(\mu)$ give $\int_{X\times Y}|k(x,y)f(y)\overline{g(x)}|\,d(\mu\times\nu)=\int_X|g(x)|\bigl(\int_Y|k(x,y)f(y)|\,d\nu(y)\bigr)d\mu(x)\le\|f\|_2\int_Xh(x)|g(x)|\,d\mu(x)\le\|f\|_2\|h\|_2\|g\|_2=\|k\|_2\|f\|_2\|g\|_2<+\infty$. Hence Fubini [A4] applies and $\langle Kf,g\rangle=\int_X\int_Yk(x,y)f(y)\overline{g(x)}\,d\nu(y)d\mu(x)=\int_Yf(y)\overline{\int_X\overline{k(x,y)}g(x)\,d\mu(x)}\,d\nu(y)=\langle f,K^*g\rangle$ with $K^*g(y)=\int_X\overline{k(x,y)}g(x)d\mu(x)$; applying the same estimate to the conjugate kernel $\overline k$, which also lies in $L^2(\mu\times\nu)$ with the same norm, gives $\|K^*g\|_2\le\|k\|_2\|g\|_2$, so $K^*$ is a bounded operator and is the Hilbert adjoint of $K$. [step 1.3, A1, A2, A4]

3.1 Steps 1.1, 1.2 and 2.1 exhibit the three displayed adjoints, so the claimed formulas hold, under the countable-choice hypothesis recorded in [A5]. [step 1.1, step 1.2, step 2.1, A5] ∎
