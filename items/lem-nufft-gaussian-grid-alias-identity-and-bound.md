---
id: lem-nufft-gaussian-grid-alias-identity-and-bound
kind: lemma
title: Exact Gaussian grid alias identity and explicit alias bound
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 3
proof_strategy: direct
deps:
  - def-nufft-transform-types-and-mode-conventions
  - def-nufft-periodized-gaussian-gridding-kernel
  - lem-nufft-gaussian-periodization-fourier-series
  - def-countable-choice
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-geometric-series
  - def-real-elementary-functions-and-domains
  - cor-exponential-reciprocal-and-positivity
  - thm-exponential-is-strictly-increasing
  - lem-nonnegative-square-root-exists-and-unique
  - lem-complex-conjugation-and-modulus-laws
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: Countable Choice is inherited only through the Schwartz
  Poisson-summation formula for the Gaussian periodization; the finite DFT
  root-sum and geometric alias bound are choice-free.
sources:
  references:
    - title: "Jens Keiner, Stefan Kunis, and Antje Vollrath, The Nonequispaced FFT and
        its Applications, Part I, slides 44–58"
      url: "https://math.aalto.fi/numericsyear/NFFT/nfft.pdf"
      locator: "Gaussian gridding/deconvolution and the full aliasing plus truncation
        error derivation"
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast
        Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "§2, printed pp. 445–447, periodic Gaussian smoothing and deconvolution"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Statement
Assume Countable Choice. Let $d\ge1$, $N\ge0$, $c_j\in\mathbb C$, $x_j\in[0,1)^d$, integers $K_r\ge0$, positive integers $M_r>2K_r$, and $\tau_r>0$. Write $P=\prod_{r=1}^dM_r$, define $\Phi_\tau(z)=\prod_{r=1}^d\phi_{\tau_r}(z_r)$, and let
$$g_\ell=\sum_{j=0}^{N-1}c_j\Phi_\tau(\ell_1/M_1-x_{j,1},\ldots,\ell_d/M_d-x_{j,d}),\quad 0\le\ell_r<M_r.$$
For $k\in\mathcal K=\prod_r\{-K_r,\ldots,K_r\}$ define the normalized grid DFT
$$\widetilde g_k=\frac1P\sum_{\ell_1=0}^{M_1-1}\cdots\sum_{\ell_d=0}^{M_d-1}g_\ell\exp\!\left(-2\pi i\sum_{r=1}^d k_r\ell_r/M_r\right).$$
Put $\widehat\Phi(m)=\prod_r\sqrt{\tau_r}\exp(-\pi\tau_r m_r^2)$. Then
$$\widetilde g_k=\sum_{q\in\mathbb Z^d}\widehat\Phi(k+q\odot M)\sum_{j=0}^{N-1}c_j\exp(-2\pi i(k+q\odot M)\cdot x_j),$$
where $(q\odot M)_r=q_rM_r$. In particular, $\widehat\Phi(k)>0$ and
$$\frac{\widetilde g_k}{\widehat\Phi(k)}=F_k+\sum_{q\ne0}\left[\prod_{r=1}^d\exp\!\left(-\pi\tau_r((k_r+q_rM_r)^2-k_r^2)\right)\right]\sum_{j=0}^{N-1}c_j\exp(-2\pi i(k+q\odot M)\cdot x_j).$$
For $s_r=\exp(-\pi\tau_rM_r(M_r-2K_r))\in(0,1)$ and
$$A=\prod_{r=1}^d\left(1+\frac{2s_r}{1-s_r}\right)-1,$$
the alias error satisfies
$$\left|\frac{\widetilde g_k}{\widehat\Phi(k)}-F_k\right|\le A\sum_{j=0}^{N-1}|c_j|.$$

## Facts & Assumptions
**Given:** The finite data above and Countable Choice.

[A1] [[def-countable-choice]]: Countable Choice, inherited through the periodized-Gaussian Fourier-series supplier.

[F1] [[lem-nufft-gaussian-periodization-fourier-series]]: $\phi_\tau(x)=\sum_{m\in\mathbb Z}\sqrt\tau\,e^{-\pi\tau m^2}e^{2\pi i m x}$, absolutely and uniformly.

[F2] [[def-nufft-transform-types-and-mode-conventions]]: $F_k=\sum_jc_j e^{-2\pi i k\cdot x_j}$ for $k\in\mathcal K$.

[F3] [[thm-complex-exponential-addition-and-real-extension]] and [[thm-kernel-and-fibres-of-complex-exponential]]: the exponential is multiplicative under addition, $e^{z+w}=e^ze^w$, and $e^z=1$ exactly when $z\in2\pi i\mathbb Z$.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $|e^{it}|=1$ for real $t$.

[F5] [[thm-geometric-series]]: for $0<s<1$, $\sum_{h=1}^\infty s^h=s/(1-s)$.

[F6] [[def-real-elementary-functions-and-domains]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-is-strictly-increasing]], and [[lem-nonnegative-square-root-exists-and-unique]]: $\pi\ge2>0$, $\exp(0)=1$, the exponential is positive and strictly increasing, and $\sqrt{\tau_r}>0$ for $\tau_r>0$.

[F7] [[lem-complex-conjugation-and-modulus-laws]]: $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ for complex numbers.

## Proof

1.1 Substitute [F1] into each factor of $\Phi_\tau$ and then into $\widetilde g_k$. Absolute uniform convergence in [F1] permits interchanging the finite grid/source sums with the absolutely convergent Fourier series. For an integer $m_r$, the coordinate root sum is $\frac1{M_r}\sum_{\ell_r=0}^{M_r-1}e^{2\pi i(m_r-k_r)\ell_r/M_r}=\begin{cases}1,&m_r-k_r\in M_r\mathbb Z,\\0,&m_r-k_r\notin M_r\mathbb Z.\end{cases}$ Indeed, in the first case every term is $1$; in the second, $z=e^{2\pi i(m_r-k_r)/M_r}\ne1$ by [F3] while $z^{M_r}=1$, so the finite geometric sum is $(1-z^{M_r})/(1-z)=0$. Thus only $m_r=k_r+q_rM_r$ remain in each coordinate, giving the displayed exact alias identity. [A1, F1, F3, given, construct, algebra]

2.1 The $q=0$ term of that identity is $\widehat\Phi(k)F_k$ by [F1]–[F2]. Each factor $\sqrt{\tau_r}\exp(-\pi\tau_r k_r^2)$ is positive by [F6], so division by $\widehat\Phi(k)$ is valid. For each $q$, its coefficient ratio is $\frac{\widehat\Phi(k+q\odot M)}{\widehat\Phi(k)}=\prod_r\exp\!\left(-\pi\tau_r((k_r+q_rM_r)^2-k_r^2)\right).$ Separating $q=0$ proves the deconvolution identity. [F1, F2, F6, step 1.1, algebra]

3.1 Since $M_r>2K_r$, $\tau_r>0$ and $\pi>0$ by [F6], the exponent parameter $\lambda_r=\pi\tau_rM_r(M_r-2K_r)$ is positive. Positivity and strict monotonicity of $\exp$ in [F6] imply $0<s_r=e^{-\lambda_r}<1$. Fix one coordinate $r$. If $q_r=\pm h$ with integer $h\ge1$ and $|k_r|\le K_r$, then $(k_r+q_rM_r)^2-k_r^2=q_r^2M_r^2+2q_rM_rk_r\ge h^2M_r^2-2hM_rK_r\ge hM_r(M_r-2K_r)>0.$ Hence the absolute alias multiplier for that coordinate is at most $s_r^h$. By [F5] its sum over nonzero $q_r$ is at most $2s_r/(1-s_r)$, so the sum over all coordinate multi-indices other than zero is at most the product of the coordinate sums including their unit terms, minus the all-zero term, namely $A$. The unit-modulus fact [F4], multiplicativity, and the triangle inequality in [F7] bound each source phase sum by $\sum_j|c_j|$. This gives the asserted alias bound. [given, F4, F5, F6, F7, step 1.1, step 2.1, algebra] ∎
