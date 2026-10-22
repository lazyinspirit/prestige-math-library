---
id: ex-ip-solit-satellite-gradiometry
kind: example
title: SOLIT in the mean-zero 2D satellite-gradiometry model
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
  - lem-square-summable-sequences-form-a-hilbert-space
  - thm-trigonometric-system-is-complete-in-l-two-of-the-torus
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is inherited from the fixed Fourier and singular-system coordinates; the multiplier, compactness, and grid-ratio calculations are choice-free."
sources:
  references:
    - title: "Housen Li and Frank Werner, Adaptive minimax optimality in statistical inverse problems via SOLIT, §5.3.2"
      url: https://arxiv.org/pdf/2304.10356
    - title: "Christian Clason, Regularization of Inverse Problems, complete lecture notes, Chapter 5"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
---

## Example

Assume Countable Choice.

For a relative satellite radius $R>1$, identify the mean-zero real Fourier coefficients of a function on the unit circle with $X=\ell^2(\mathbb N_{>0};\mathbb R^2)$, where the two coordinates at frequency $n$ are its normalized cosine and sine coefficients, and give this space the canonical inner product $\langle(a_n,b_n),(c_n,d_n)\rangle=\sum_{n\ge1}(a_nc_n+b_nd_n)$. Interleaving with scalar coordinates $z_{2n-1}=a_n$ and $z_{2n}=b_n$ identifies it isometrically with real $\ell^2(\mathbb N_{>0})$, so $X$ is a real Hilbert space. In these coordinates define the 2D satellite-gradiometry operator by
$$
(T_R(a_n,b_n))_{n\ge1}=(t_n a_n,t_n b_n)_{n\ge1},\qquad t_n=n(n+1)R^{-n-2}.
$$
This is the Fourier-coordinate map for recovering the mean-zero gravitational potential from the radial second derivative measured at relative satellite radius $R$. Take the truth to be the Fourier coefficient sequence of $f^\dagger(x)=\pi/2-|x|$ on $[-\pi,\pi]$. Its constant coefficient is zero, so the omitted zero-frequency component is not part of this mean-zero model. The per-frequency eigenvalue of $T_R^*T_R$ is $\mu_n=n^2(n+1)^2R^{-2n-4}$, each with multiplicity two. For the inverse sequence model, order the cosine–sine modes by nonincreasing multiplier $t_n$, breaking ties by frequency and then placing cosine before sine; write the resulting ordered singular values as $(s_j)$ and their squares as $\lambda_j=s_j^2$. Such an ordering exists because $t_n\to0$ and only finitely many modes exceed any positive threshold. Use the Tikhonov filter $q_\alpha(\lambda)=(\lambda+\alpha)^{-1}$ and its continuous geometric-variance candidate grid in the SOLIT rule with known $\sigma>0$.

## Example references

[[alg-ip-solit-parameter-choice|The SOLIT selector used in this example]]

[[def-ip-ordered-filter-grid-and-source-index|Ordered filters and geometric-variance candidate grids]]

[Li and Werner, *Adaptive minimax optimality in statistical inverse problems via SOLIT*, §5.3.2](https://arxiv.org/pdf/2304.10356)

[Clason, *Regularization of Inverse Problems*, complete lecture notes, Chapter 5](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

## Facts & Assumptions

**Given:** The real cosine–sine Fourier coefficient model on the circle, $R>1$, the multiplier sequence $t_n$, and the truth $f^\dagger(x)=\pi/2-|x|$.

[A1] [[def-countable-choice]]: Countable Choice is assumed for the upstream Fourier and compact singular-system coordinates.

[F1] [[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]]: The complex characters form a complete orthonormal basis of $L^2$ on the circle; their real and imaginary parts give the real cosine–sine coefficient basis.

[F2] [[def-ip-ordered-filter-grid-and-source-index]]: A candidate grid has geometric variance growth when its consecutive variance ratios lie in a fixed interval $[\theta_1,\theta_2]$ with $1<\theta_1\le\theta_2<\infty$.

[F3] [[def-ip-gaussian-sequence-inverse-model]]: The positive-noise sequence experiment has observations $Y_j=\theta_j+\sigma s_j^{-1}\xi_j$ in singular coordinates.

[F4] [[alg-ip-solit-parameter-choice]]: SOLIT accepts a candidate only after its estimator differences from all finer candidates pass the two-index variance and Gaussian-quantile threshold.

[F5] [[lem-ip-solit-filter-risk-decomposition-and-monotone-bias]]: For each candidate, the regularized estimator is a measurable square-integrable Hilbert-valued random element.

[F6] [[def-ip-ordered-filter-grid-and-source-index]]: An ordered filter is nonnegative, satisfies $0\le\alpha q_\alpha(t)\le C_q'$ and $0\le tq_\alpha(t)\le1$, and increases pointwise as $\alpha$ decreases.

[F7] [[lem-square-summable-sequences-form-a-hilbert-space]]: Real $\ell^2(\mathbb N)$ with its canonical inner product is complete. The shift $z\mapsto(z_{k+1})_{k\ge0}$ is an isometric bijection from $\ell^2(\mathbb N_{>0})$ to that space.

## Verification

1.1 Interleaving $(a_n,b_n)_{n\ge1}$ as $(a_1,b_1,a_2,b_2,\ldots)$ is a linear isometry onto real $\ell^2(\mathbb N_{>0})$, so [F7] gives the stated real Hilbert structure. In angular coordinates with normalized Haar measure $dx/(2\pi)$, write the characters as $e_n(x)=e^{inx}$ and use $C_n=(e_n+e_{-n})/\sqrt2=\sqrt2\cos(nx)$ and $S_n=(e_n-e_{-n})/(i\sqrt2)=\sqrt2\sin(nx)$ for $n\ge1$. Their orthonormality follows from character orthonormality in [F1]. They are complete in mean-zero real $L^2$: a real mean-zero function orthogonal to all $C_n,S_n$ is orthogonal to every character, hence is zero by [F1]. Thus their coefficient map identifies this function space isometrically with $X$. The bounded truth belongs to $L^2$, and its integral over $[-\pi,\pi]$ is $\pi^2-\pi^2=0$, so its constant Fourier coefficient vanishes and its normalized real Fourier coefficient sequence lies in $X$. [given, A1, F1, F7, algebra]

1.2 For every $n\ge1$, $t_n>0$ and $t_n\to0$ exponentially since $R>1$. The ratio of consecutive squared multipliers is $((n+1)/n)^2((n+2)/(n+1))^2R^{-2}$, which tends to $R^{-2}<1$; choose $\rho$ strictly between $R^{-2}$ and $1$, then the ratio is at most $\rho$ for all sufficiently large $n$. Thus $\sum_{n\ge1}2t_n^2<\infty$. The operator is injective because all its diagonal multipliers are positive. Its truncation to frequencies $n\le N$ is finite rank and the operator-norm error is $\sup_{n>N}t_n\to0$, so $T_R$ is compact and Hilbert–Schmidt. [given, algebra]

1.3 The frequency multipliers satisfy $t_{n+1}/t_n=(n+2)/(nR)$, which can exceed $1$ for small $n$; thus the frequency order is not always the singular-value order. The multiset of modes has a nonincreasing enumeration: at every stage a remaining maximum exists because $t_n\to0$ and only finitely many modes lie above any fixed positive threshold, and the fixed tie rule selects one uniquely. Every mode is eventually listed because only finitely many modes have multiplier at least its positive multiplier. The operator is diagonal on the orthonormal cosine–sine basis, so the frequency eigenvalue is $\mu_n=t_n^2=n^2(n+1)^2R^{-2n-4}$ twice at each frequency, and the enumerated singular system has these values in nonincreasing order. Since $(n+1)^2\asymp n^2$, $\mu_n\asymp n^4e^{-2n\log R}$, an exponential spectrum with exponent $\vartheta=1$. [given, F1, algebra]

1.4 For every $\lambda\ge0$, $q_\alpha(\lambda)=(\lambda+\alpha)^{-1}$ is nonnegative, $\alpha q_\alpha(\lambda)\le1$, and $\lambda q_\alpha(\lambda)\le1$. If $\widetilde\alpha<\alpha$, then $\lambda+\widetilde\alpha<\lambda+\alpha$, so $q_\alpha(\lambda)\le q_{\widetilde\alpha}(\lambda)$. Thus it is an ordered filter with $C_q'=1$ by [F6]. Its trace variance is
$$
V(\alpha):=2\sum_{n\ge1}\frac{\mu_n}{(\mu_n+\alpha)^2},\qquad \alpha>0.
$$
On every compact interval $[a,b]\subset(0,\infty)$, each summand is continuous and is bounded above by $2\mu_n/a^2$. Since $\sum_n2\mu_n<\infty$ by step 1.2, the series converges uniformly there, so $V$ is continuous. Each summand strictly decreases as $\alpha$ increases, hence so does $V$. Also $V(\alpha)\le2\alpha^{-2}\sum_n\mu_n\to0$ as $\alpha\to\infty$. For every fixed $n$, $V(\alpha)\ge2\mu_n/(\mu_n+\alpha)^2\to2/\mu_n$ as $\alpha\downarrow0$; because $\mu_n\to0$, these lower bounds imply $V(\alpha)\to\infty$. Fix any $c>0$ and $\theta>1$. Continuity, strict decrease, and these endpoint limits give a unique $\alpha_m>0$ with $V(\alpha_m)=c\theta^m$ for every $m\in\mathbb N_0$. Thus $\alpha_m$ decreases to zero and the variances $v_m=\sigma^2V(\alpha_m)$ have the constant consecutive ratio $\theta$. The resulting infinite grid meets [F2], and the SOLIT rule truncates it at its finite $m_{\max}$. [given, F2, F6, step 1.2, algebra]

2.1 The truth lies in $L^2$ because it is bounded, and its Fourier coefficients are coordinates in the model by [F1]. The positive diagonal multipliers give the injective compact Hilbert–Schmidt operator verified in step 1.2; the Tikhonov filter satisfies [F6] and its candidates satisfy [F2], and the positive-noise experiment and finite selector are [F3]–[F4]. The well-definedness and moment properties of its estimators follow from [F5]. This example asserts no rate for the resulting estimator. [given, F1, F2, F3, F4, F5, F6, step 1.2, step 1.4] ∎

## Finite checks

At frequencies $n=1,2$, $t_1=2R^{-3}$, $t_2=6R^{-4}$, $\mu_1=4R^{-6}$, and $\mu_2=36R^{-8}$. The first two Tikhonov variance terms are $2\mu_1(\mu_1+\alpha)^{-2}$ and $2\mu_2(\mu_2+\alpha)^{-2}$; both are finite, positive, and continuous for $\alpha>0$.
