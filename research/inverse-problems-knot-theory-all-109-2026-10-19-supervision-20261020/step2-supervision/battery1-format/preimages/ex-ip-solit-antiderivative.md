---
id: ex-ip-solit-antiderivative
kind: example
title: SOLIT for a Dirichlet second-antiderivative model
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - alg-ip-solit-parameter-choice
  - lem-ip-solit-filter-risk-decomposition-and-monotone-bias
  - def-ip-ordered-filter-grid-and-source-index
  - def-ip-gaussian-sequence-inverse-model
  - def-countable-choice
  - def-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-holder-inequality-for-integrals
  - cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous
  - thm-first-fundamental-theorem-of-calculus-for-l-one
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - thm-trigonometric-system-is-complete-in-l-two-of-the-torus
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is inherited from the fixed singular and Fourier bases; the displayed Green-kernel, eigenvalue, and truth-coordinate calculations use no further choice."
sources:
  references:
    - title: "Housen Li and Frank Werner, Adaptive minimax optimality in statistical inverse problems via SOLIT, §5.3.1"
      url: https://arxiv.org/pdf/2304.10356
    - title: "Christian Clason, Regularization of Inverse Problems, complete lecture notes, Chapter 5"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
---

## Example

Assume Countable Choice.

Let $X=Y=L^2((0,1);\mathbb R)$ with its canonical real Hilbert inner product. For $f\in L^2(0,1)$ define $T$ by the Green kernel $G(x,t)=\min(x,t)(1-\max(x,t))$, so $(Tf)(x)=\int_0^1G(x,t)f(t)\,dt$. We use the Dirichlet solution class of continuous functions $u\in C([0,1])$ satisfying $u(0)=u(1)=0$ and $u''=-f$ in distributions on $(0,1)$; the Green formula specifies its unique member. Take the truth
$$
f^\dagger(x)=x\mathbf 1_{[0,1/2]}(x)+(1-x)\mathbf 1_{[1/2,1]}(x)
$$
and exact data
$$
g^\dagger(x)=-\frac{x(4x^2-3)}{24}\mathbf 1_{[0,1/2]}(x)+\frac{(x-1)(4x^2-8x+1)}{24}\mathbf 1_{[1/2,1]}(x).
$$
In the normalized Dirichlet sine basis $e_j(x)=\sqrt2\sin(\pi jx)$, $T e_j=(\pi j)^{-2}e_j$, so the eigenvalues of $T^*T$ are $\lambda_j=(\pi j)^{-4}$. The positive-noise observation is the weak white-noise experiment $Y_{f^\dagger}(h)=\langle Tf^\dagger,h\rangle+\sigma Z(h)$, with known $\sigma>0$. Use the ordered Tikhonov filter $q_\alpha(\lambda)=(\lambda+\alpha)^{-1}$ and a geometric-variance candidate sequence. This example makes no simulation or minimax-rate claim.

## Example references

[[alg-ip-solit-parameter-choice|The SOLIT selector used in this example]]

[[def-ip-ordered-filter-grid-and-source-index|Ordered filters and geometric-variance candidates]]

[Li and Werner, *Adaptive minimax optimality in statistical inverse problems via SOLIT*, §5.3.1](https://arxiv.org/pdf/2304.10356)

[Clason, *Regularization of Inverse Problems*, complete lecture notes, Chapter 5](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

## Facts & Assumptions

**Given:** The real Hilbert space $L^2((0,1);\mathbb R)$, the Green-kernel operator and truth in the Example, and the Fourier basis conventions on the period-two extension of $(0,1)$.

[F1] [[def-the-one-dimensional-torus-and-normalized-haar-integral]]: The one-dimensional torus is the quotient $\mathbb R/\mathbb Z$.

[A1] [[def-countable-choice]]: Countable Choice is assumed for the fixed countable singular-system and Fourier-basis coordinates.

[F2] [[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]]: The characters $(e^{2\pi i kx})_{k\in\mathbb Z}$ form an orthonormal basis of complex $L^2$ on the circle.

[F3] [[def-ip-gaussian-sequence-inverse-model]]: For positive noise and a fixed complete singular system, the normalized observations have independent coordinates $Z_j=\theta_j+\sigma s_j^{-1}\xi_j$ with $\xi_j\sim N(0,1)$.

[F4] [[def-ip-ordered-filter-grid-and-source-index]]: An ordered filter is nonnegative, satisfies $0\le\alpha q_\alpha(t)\le C_q'$ and $0\le tq_\alpha(t)\le1$, and increases pointwise as $\alpha$ decreases.

[F5] [[alg-ip-solit-parameter-choice]]: The algorithm forms the filtered sequence estimates and accepts an index when all finer-index differences lie below their pairwise threshold.

[F6] [[lem-ip-solit-filter-risk-decomposition-and-monotone-bias]]: Each filtered estimate is a measurable square-integrable Hilbert-valued random element, with the stated bias–variance decomposition.

[F7] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]: Real $L^2(0,1)$ with the integral pairing is a complete real Hilbert space.

[F8] [[thm-holder-inequality-for-integrals]]: On the finite interval $(0,1)$, Cauchy–Schwarz gives $\|f\|_1\le\|f\|_2$ and makes $tf(t)$ and $(1-t)f(t)$ integrable.

[F9] [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]]: The indefinite integral of an $L^1$ function on a compact interval is absolutely continuous.

[F10] [[thm-first-fundamental-theorem-of-calculus-for-l-one]]: An indefinite Lebesgue integral of an $L^1$ function has derivative equal to its integrand almost everywhere.

[F11] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: Absolutely integrable functions on the product of the two finite intervals may be integrated in either order.

[F12] [[thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant]]: A distribution on the connected interval $(0,1)$ with zero derivative is constant; applying this twice shows that a distribution with zero second derivative is affine.

## Verification

1.1 The functions $e_j(x)=\sqrt2\sin(\pi jx)$ are orthonormal on $(0,1)$ by the product-to-sum identities and direct integration. If $h\in L^2(0,1)$ is orthogonal to all of them, its odd extension to $(-1,1)$, continued periodically with period $2$, has zero constant and cosine coefficients by oddness and zero sine coefficients by the assumed orthogonality. Rescaling to the circle in [F1], every Fourier coefficient of this extension vanishes; completeness in [F2] therefore makes the extension, and hence $h$, zero almost everywhere. Thus $(e_j)$ is a complete orthonormal basis, and [F7] supplies the real Hilbert structure used below. [given, A1, F1, F2, F7, construct, algebra]

1.2 For $f\in L^2(0,1)$, [F8] gives $f\in L^1(0,1)$. Since $0\le G(x,t)\le1/4$, $|Tf(x)|\le\|f\|_1/4\le\|f\|_2/4$ for every $x$, so the integral formula defines a bounded linear operator from $L^2(0,1)$ to itself. The kernel formula also gives
$$
(Tf)(x)=(1-x)\int_0^x t f(t)\,dt+x\int_x^1(1-t)f(t)\,dt.
$$
The two indefinite integrals are absolutely continuous by [F9], and [F10] gives their derivatives almost everywhere. They show that $Tf$ is continuous, has zero endpoint values, and has first derivative almost everywhere equal to the absolutely continuous function $g(x)=-\int_0^x tf(t)\,dt+\int_x^1(1-t)f(t)\,dt$, whose derivative is $g'(x)=-xf(x)-(1-x)f(x)=-f(x)$ almost everywhere. To verify the claimed distributional equation directly, take any $\phi\in C_c^\infty(0,1)$. The function $(x,t)\mapsto G(x,t)f(t)\phi''(x)$ is integrable on $(0,1)^2$, so [F11] permits reversing the integrals; splitting at $x=t$ and integrating the smooth test function twice gives
$$
\int_0^1(Tf)(x)\phi''(x)\,dx
=\int_0^1 f(t)\left(\int_0^1G(x,t)\phi''(x)\,dx\right)dt
=-\int_0^1 f(t)\phi(t)\,dt.
$$
Thus $(Tf)''=-f$ in distributions. If two continuous Dirichlet solutions exist, their difference $h$ has $h''=0$ in distributions. Applying [F12] to $h'$ makes $h'$ constant, and applying it to $h-cx$ makes $h$ affine; continuity identifies the distribution with its pointwise affine representative. The two zero endpoint values force $h=0$. [given, F8, F9, F10, F11, F12, construct, algebra]

1.3 For every $\lambda\ge0$, the Tikhonov filter is nonnegative and satisfies $\alpha q_\alpha(\lambda)=\alpha/(\lambda+\alpha)\le1$ and $\lambda q_\alpha(\lambda)=\lambda/(\lambda+\alpha)\le1$. If $\widetilde\alpha<\alpha$, then $\lambda+\widetilde\alpha<\lambda+\alpha$, so $q_\alpha(\lambda)\le q_{\widetilde\alpha}(\lambda)$. Thus the Tikhonov family is an ordered filter with $C_q'=1$. [F4, algebra]

2.1 Since $-e_j''=(\pi j)^2e_j$ and $e_j(0)=e_j(1)=0$, uniqueness of the Dirichlet solution from step 1.2 gives $Te_j=(\pi j)^{-2}e_j$. Completeness from step 1.1 therefore diagonalizes $T$ and $T^*T$, with singular values $s_j=(\pi j)^{-2}$ and eigenvalues $\lambda_j=(\pi j)^{-4}$. All singular values are positive, so $T$ is injective. The truncations $T_Nf=\sum_{j=1}^N(\pi j)^{-2}\langle f,e_j\rangle e_j$ have finite rank and satisfy $\|T-T_N\|=\sup_{j>N}(\pi j)^{-2}\to0$, so $T$ is compact. Also $\sum_j s_j^2=\pi^{-4}\sum_jj^{-4}<\infty$ by comparison with $\int_1^\infty x^{-4}\,dx$, so $T$ is Hilbert–Schmidt. [F2, step 1.1, step 1.2, algebra]

3.1 For the Tikhonov filter, put $V(\alpha):=\sum_{j\ge1}\lambda_j(\lambda_j+\alpha)^{-2}$. On every compact interval $[a,b]\subset(0,\infty)$ its summands are continuous and bounded above by $\lambda_j/a^2$, a summable sequence by step 1.3, so $V$ is continuous there. Each summand strictly decreases with $\alpha$. Also $V(\alpha)\le\alpha^{-2}\sum_j\lambda_j\to0$ as $\alpha\to\infty$. For every fixed $j$, $V(\alpha)\ge\lambda_j(\lambda_j+\alpha)^{-2}\to1/\lambda_j$ as $\alpha\downarrow0$; since $\lambda_j\to0$, these lower bounds show $V(\alpha)\to\infty$. Given $c>0$ and $\theta>1$, continuity and strict decrease give a unique $\alpha_m>0$ with $V(\alpha_m)=c\theta^m$ for each $m\in\mathbb N_0$. Thus $\alpha_m$ decreases to zero and $v_m=\sigma^2V(\alpha_m)$ has consecutive ratio $\theta$, so [F4] holds. [F4, step 1.3, step 2.1, algebra]

4.1 Direct integration of the two pieces of $f^\dagger$ gives $\langle f^\dagger,e_j\rangle=2\sqrt2\sin(\pi j/2)/(\pi^2j^2)$. On the first half, $g^\dagger(x)=-x^3/6+x/8$, so $g^{\dagger\prime\prime}(x)=-x$; on the second half, $g^\dagger(x)=x^3/6-x^2/2+3x/8-1/24$, so $g^{\dagger\prime\prime}(x)=x-1$. The two values at $x=1/2$ both equal $1/24$, and both first derivatives there equal zero; the endpoint values are zero. Hence $-g^{\dagger\prime\prime}=f^\dagger$ weakly with Dirichlet boundary values, so uniqueness from step 1.2 gives $Tf^\dagger=g^\dagger$. The sequence model in [F3] and the filter conditions in [F4] therefore supply an admissible white-noise input to the finite selector in [F5], whose estimates are well-defined by [F6]. [given, F3, F4, F5, F6, step 1.2, step 1.3, step 2.1, step 3.1, algebra] ∎
