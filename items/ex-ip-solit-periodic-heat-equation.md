---
id: ex-ip-solit-periodic-heat-equation
kind: example
title: SOLIT for the periodic heat equation (reported simulation)
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
axiom_use: "Countable Choice is inherited from the fixed Fourier and singular-system coordinates; the multiplier and variance-grid calculations are choice-free."
sources:
  references:
    - title: "Housen Li and Frank Werner, Adaptive minimax optimality in statistical inverse problems via SOLIT, §§5.3.3 and 6"
      url: https://arxiv.org/pdf/2304.10356
    - title: "Christian Clason, Regularization of Inverse Problems, complete lecture notes, Chapter 5"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
---

## Example

Assume Countable Choice.

Let the real periodic Fourier coefficient space be $X=Y=\mathbb R\oplus\ell^2(\mathbb N_{>0};\mathbb R^2)$, with one constant coordinate and cosine–sine coordinate pairs for each positive frequency, and give it the canonical inner product $\langle(c_0,(a_n,b_n)),(d_0,(c_n,d_n))\rangle=c_0d_0+\sum_{n\ge1}(a_nc_n+b_nd_n)$. The interleaving map $(c_0,(a_n,b_n))\mapsto(c_0,a_1,b_1,a_2,b_2,\ldots)$ places $c_0$ at scalar index $1$, $a_n$ at $2n$, and $b_n$ at $2n+1$, and is an isometry onto real $\ell^2(\mathbb N_{>0})$, so this is a real Hilbert space. For a heat time $\bar t>0$, define the periodic heat forward operator by
$$
T_{\bar t}(c_0,(a_n,b_n)_{n\ge1})=(c_0,(e^{-n^2\bar t}a_n,e^{-n^2\bar t}b_n)_{n\ge1}).
$$
Its eigenvalues for $T_{\bar t}^*T_{\bar t}$ are $1$ on the constant mode and $e^{-2n^2\bar t}$ on both modes of frequency $n$. The singular system for the sequence model is ordered as the constant mode, then cosine and sine modes in increasing positive frequency; its singular values are nonincreasing. Use the truth whose function is $f^\dagger(x)=\pi/2-|x|$ on $[-\pi,\pi]$, and observe its weak Gaussian white-noise data with known standard deviation $\sigma>0$. Li and Werner report an empirical SOLIT simulation at $\bar t=0.1$ using $10^4$ Monte Carlo runs: they find that SOLIT's rate is very close to the oracle rate, while whether it equals the minimax rate is unclear; the empirical price of adaptation is somewhat irregular, especially for spectral cut-off. These are reported simulation findings, not a theorem or a simulation performed for this library.

For the spectral-cutoff candidate sequence $\alpha_n=e^{-2n^2\bar t}$, indexed by $n\in\mathbb N_0$, the variance sums $V_n=1+2\sum_{k=1}^n e^{2k^2\bar t}$ do not have a uniformly bounded consecutive ratio: $V_n/V_{n-1}\to\infty$. Thus this infinite spectral-cutoff sequence does not meet the uniform geometric-variance-grid condition. A continuous Tikhonov filter $q_\alpha(\lambda)=(\lambda+\alpha)^{-1}$ does admit such a grid because its variance function is continuous, decreases from $+\infty$ to $0$, and can be sampled at successive fixed variance ratios.

## Example references

[[alg-ip-solit-parameter-choice|The SOLIT selector used in this example]]

[[def-ip-ordered-filter-grid-and-source-index|Ordered filters and geometric-variance candidate grids]]

[Li and Werner, *Adaptive minimax optimality in statistical inverse problems via SOLIT*, §§5.3.3 and 6](https://arxiv.org/pdf/2304.10356)

[Clason, *Regularization of Inverse Problems*, complete lecture notes, Chapter 5](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

## Facts & Assumptions

**Given:** The periodic real Fourier coefficient space, the multiplier operator $T_{\bar t}$ with $\bar t>0$, and its constant and positive-frequency modes.

[A1] [[def-countable-choice]]: Countable Choice is assumed for the upstream Fourier and compact singular-system coordinates.

[F1] [[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]]: The complex characters form a complete orthonormal basis of $L^2$ on the circle; their real and imaginary parts give the real Fourier modes.

[F2] [[def-ip-ordered-filter-grid-and-source-index]]: The grid condition requires consecutive candidate variances to have ratios in a fixed interval $[\theta_1,\theta_2]$ with $1<\theta_1\le\theta_2<\infty$.

[F3] [[def-ip-gaussian-sequence-inverse-model]]: Positive-noise observations in a fixed singular basis have independent Gaussian coordinates with the stated singular-value scaling.

[F4] [[alg-ip-solit-parameter-choice]]: SOLIT compares the filtered estimator at each candidate with every finer candidate and returns the smallest index passing all comparisons.

[F5] [[lem-ip-solit-filter-risk-decomposition-and-monotone-bias]]: For each candidate, the filtered noise has finite trace variance, and the estimator is a measurable square-integrable Hilbert-valued random element.

[F6] [[def-ip-ordered-filter-grid-and-source-index]]: An ordered filter is nonnegative, satisfies $0\le\alpha q_\alpha(t)\le C_q'$ and $0\le tq_\alpha(t)\le1$, and increases pointwise as $\alpha$ decreases.

[F7] [[lem-square-summable-sequences-form-a-hilbert-space]]: Real $\ell^2(\mathbb N)$ with its canonical inner product is complete. The shift $z\mapsto(z_{k+1})_{k\ge0}$ is an isometric bijection from $\ell^2(\mathbb N_{>0})$ to that space.

## Verification

1.1 Interleaving the constant coordinate and cosine–sine pairs is a linear isometry onto real $\ell^2(\mathbb N_{>0})$, so [F7] gives the stated real Hilbert structure. With normalized Haar measure $dx/(2\pi)$ and characters $e_n(x)=e^{inx}$, use the real modes $1$, $C_n=(e_n+e_{-n})/\sqrt2=\sqrt2\cos(nx)$ and $S_n=(e_n-e_{-n})/(i\sqrt2)=\sqrt2\sin(nx)$ for $n\ge1$. Character orthonormality in [F1] gives their orthonormality. They are complete in real $L^2$: a real function orthogonal to all these modes is orthogonal to every character, hence is zero by [F1]. Thus their coefficient map is an isometry onto the stated coefficient space. The bounded truth lies in $L^2$ and has such coordinates. On each positive frequency, $\partial_{xx}C_n=-n^2C_n$ and $\partial_{xx}S_n=-n^2S_n$, so solving $\partial_tu=\partial_{xx}u$ multiplies both coefficients by $e^{-n^2\bar t}$; the constant mode is unchanged. Therefore the operator in the Example is the periodic heat forward map in normalized Fourier coordinates. [given, A1, F1, F7, algebra]

1.2 Every multiplier of $T_{\bar t}$ is positive, so $T_{\bar t}$ is injective. The positive-frequency multipliers tend to zero, so finite-frequency truncations converge in operator norm and $T_{\bar t}$ is compact. Moreover, $\sum_{n\ge1}2e^{-2n^2\bar t}<\infty$ by comparison with the geometric series $\sum_{n\ge1}2e^{-2n\bar t}$, so the operator is Hilbert–Schmidt. Squaring the multipliers gives the stated eigenvalues of $T_{\bar t}^*T_{\bar t}$. [given, algebra]

1.3 For spectral cut-off, the inverse-eigenvalue contribution at frequency $n$ is $2e^{2n^2\bar t}$. Since $V_{n-1}\le(2n-1)e^{2(n-1)^2\bar t}$,
$$
\frac{V_n}{V_{n-1}}=1+\frac{2e^{2n^2\bar t}}{V_{n-1}}\ge1+\frac{2}{2n-1}e^{2(2n-1)\bar t}\longrightarrow\infty.
$$
Hence no finite $\theta_2$ bounds all consecutive ratios in this sequence, as claimed. [F2, algebra]

2.1 For every $\lambda\ge0$, $q_\alpha(\lambda)=(\lambda+\alpha)^{-1}$ is nonnegative, $\alpha q_\alpha(\lambda)\le1$, and $\lambda q_\alpha(\lambda)\le1$. If $\widetilde\alpha<\alpha$, then $\lambda+\widetilde\alpha<\lambda+\alpha$, so $q_\alpha(\lambda)\le q_{\widetilde\alpha}(\lambda)$. Thus it is an ordered filter with $C_q'=1$ by [F6]. Its variance is $V(\alpha)=1/(1+\alpha)^2+2\sum_{n\ge1}e^{-2n^2\bar t}(e^{-2n^2\bar t}+\alpha)^{-2}$. On each compact interval $\alpha\ge a>0$, the summands are continuous and bounded by $2a^{-2}e^{-2n^2\bar t}$, a summable sequence, so $V$ is continuous there by uniform convergence. It is strictly decreasing. For $\alpha\ge1$, $V(\alpha)\le\alpha^{-2}(1+2\sum_{n\ge1}e^{-2n^2\bar t})\to0$ as $\alpha\to\infty$. It tends to infinity as $\alpha\downarrow0$: for every $N$, its first $N$ positive-frequency terms tend to $2\sum_{n=1}^N e^{2n^2\bar t}$, and these partial sums are unbounded in $N$. The intermediate value theorem therefore selects recursively a decreasing sequence with any prescribed fixed ratio $\theta_1>1$ between consecutive variance values; its upper ratio is the same $\theta_1$. The estimator and each finite comparison are well-defined by [F3]–[F5]. [given, F2, F3, F4, F5, F6, algebra] ∎

## Finite checks

At frequencies $0$ and $1$, the eigenvalues of $T_{\bar t}^*T_{\bar t}$ are $1$ and $e^{-2\bar t}$ (with multiplicity two for frequency $1$). For $n=1$, $V_1=1+2e^{2\bar t}$; for $n=2$, $V_2=1+2e^{2\bar t}+2e^{8\bar t}$. The displayed consecutive-ratio lower bound is $V_2/V_1>1$.
