---
id: lem-ewald-pme-spline-alias-and-dft-normalization
kind: lemma
title: "Exact three-dimensional spline assignment aliases and FFT normalization"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-convolution-of-two-functions-on-rn,
    def-ewald-causal-cardinal-spline-window,
    def-ewald-three-dimensional-periodic-source-data,
    def-ewald-pme-cardinal-assignment-model,
    def-unitary-discrete-fourier-transform-on-z-mod-n,
    thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
    thm-p-series-real-exponents,
    thm-sine-and-cosine-derivatives,
    thm-tonelli-theorem-for-sigma-finite-product-spaces,
    thm-weierstrass-m-test-for-complex-function-series
  ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Markus Deserno and Christian Holm, How to mesh up Ewald sums (I): A
        theoretical and numerical comparison of various particle mesh routines
        (1998)"
      url: "https://arxiv.org/pdf/cond-mat/9807099"
      locator: "§3 and Appendix E: spline assignment and Fourier alias structure; the
        local proof fixes the signed three-dimensional and unitary-normalization
        conventions."
    - title: "Multi-Level Ewald: A hybrid multigrid / Fast Fourier Transform approach
        to the electrostatic particle-mesh problem (full-text article, 2011)"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3202610/"
      locator: "§2.1, equations (2)–(7): B-spline assignment, reciprocal mesh
        transform, and force interpolation."
verification:
  precheck: pass
---

## Statement

Use the periodic cardinal-assignment model of
[[def-ewald-pme-cardinal-assignment-model]], with integers $M_r\ge1$, order
$P\ge2$, grid size $N_g=\prod_rM_r$, a retained signed mode $k$ satisfying
$|k_r|<M_r/2$, and $D(k)\ne0$. Put $u_r=k_r/M_r$,
$a_k(t)=e^{-2\pi i k\cdot t}$, and
$$r_{k,n}=\prod_{r=1}^3 \frac{\overline{D_r(k_r+n_rM_r)}}{\overline{D_r(k_r)}},\qquad D_r(m)=e^{-\pi iPm/M_r}\operatorname{sinc}(\pi m/M_r)^P.$$
Then the single-particle assignment factor and the spread-grid coefficient obey
the absolutely convergent identities
$$b_k(t)=\sum_{n\in\mathbb Z^3}r_{k,n}a_{k+n\odot M}(t),\qquad z_k=\sum_{n\in\mathbb Z^3}r_{k,n}\rho_{k+n\odot M},$$
where $(n\odot M)_r=n_rM_r$ and
$\rho_j=\sum_iq_i e^{-2\pi i j\cdot t_i}$. In particular
$$z_k-\rho_k=\sum_{n\ne0}r_{k,n}\rho_{k+n\odot M}.$$
The mesh coefficient also has the exact finite representation
$z_k=\sum_iq_i b_k(t_i)$, so no cell-volume or grid-size factor remains after
the displayed $\sqrt{N_g}$ conversion. The alias bound below uses only the Fourier series of
the compact spline; the lattice Poisson theorem is not applied to that spline.

For $u_r\ne0$ define
$$a_r(P,u_r)=\sum_{m\ne0}\left|\frac{u_r}{u_r+m}\right|^P, \qquad a_r(P,0)=0,\qquad A_k=\prod_{r=1}^3(1+a_r(P,u_r))-1.$$
Then $|b_k(t)-a_k(t)|\le A_k$, $|b_k(t)|\le1+A_k$, and
$|z_k-\rho_k|\le Q A_k$ for $Q=\sum_i|q_i|$. For $J\ge1$ and
$0<|u_r|<1/2$,
$$a_r(P,u_r)\le 2\frac{|u_r|^P}{(1-|u_r|)^P}\sum_{m=1}^\infty m^{-P},\qquad \sum_{|m|>J}\left|\frac{u_r}{u_r+m}\right|^P\le 2\frac{|u_r|^P}{(1-|u_r|)^P}\frac{\lfloor J\rfloor^{1-P}}{P-1}.$$
Thus every alias controller has a finite p-series remainder bound.
The periodic assignment also satisfies $\sum_{\ell\in\mathcal G}w_\ell(t)=1$,
so the spread-grid zero mode is $\sum_{\ell}g_\ell=\sum_iq_i=0$ for neutral data.

## Facts & Assumptions

**Given:** A full-rank cell, neutral finite charges, integers $M_r\ge1$,
$P\ge2$, $k\in\mathbb Z^3$ with $|k_r|<M_r/2$, and the periodic assignment,
DFT, $D_r$, $b_k$, $z_k$, and $\rho_k$ definitions of
[[def-ewald-three-dimensional-periodic-source-data]] and
[[def-ewald-pme-cardinal-assignment-model]].

[F1] $W_1=\mathbf1_{[0,1]}$ and, for $P\ge2$, $W_P$ is the finite truncated-power formula supported on $[0,P]$; convolution is the integral operation defined in [[def-convolution-of-two-functions-on-rn]]. The periodic weights, signed mode restrictions, and denominator $D(k)=\prod_rD_r(k_r)$ have the definitions displayed on the A page ([[def-ewald-causal-cardinal-spline-window]], [[def-ewald-pme-cardinal-assignment-model]]).

[F2] The mesh transform has the negative-sign unitary normalization $N_g^{-1/2}$ in dimension three ([[def-ewald-pme-cardinal-assignment-model]], [[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F3] For every real $p>1$, the p-series $\sum_{m\ge1}m^{-p}$ converges ([[thm-p-series-real-exponents]]).

[F4] Nonnegative iterated integrals may be interchanged; this justifies the convolution and periodic partition calculations ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F5] An absolutely summable Fourier coefficient series converges uniformly by the complex Weierstrass test ([[thm-weierstrass-m-test-for-complex-function-series]]).

[F6] The derivatives of sine and cosine are cosine and minus sine, so the real and imaginary parts of $e^{i\omega x}$ have the elementary primitives used to evaluate its finite-interval integral ([[thm-sine-and-cosine-derivatives]]).

[F7] Absolutely integrable products may be interchanged and factored in the convolution transform calculation ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Define $V_1=\mathbf1_{[0,1]}$ and recursively $V_P(u)=\int_0^1V_{P-1}(u-s)ds$, so $V_P=V_{P-1}*\mathbf1_{[0,1]}$ by the convolution definition [F1]. For $P=2$, the integral is the length of $[0,1]\cap[u-1,u]$, giving $u$ on $[0,1]$, $2-u$ on $[1,2]$, and zero outside; this is the truncated-power formula. For $P\ge3$, integrate the formula for $V_{P-1}$ term by term; reindexing the second sum and applying Pascal's identity gives the stated formula for $W_P$. Thus $V_P=W_P$ for all $P\ge2$. The recursion gives nonnegativity and support in $[0,P]$. The formula gives $W_P(0)=0$, and its value at $P$ is the $P$th finite difference of the degree-$(P-1)$ polynomial $u^{P-1}$, hence is zero; therefore the zero extension is continuous at both support endpoints. Differentiating the formula on each polynomial interval and applying Pascal's identity gives $W_P'(u)=W_{P-1}(u)-W_{P-1}(u-1)$; for $P=2$ this identity holds on open intervals, with the one-sided values at integers. [F1, algebra]

1.2 From the transform factor, for $n_r\ne0$ and $u_r=k_r/M_r$, $|D_r(k_r+n_rM_r)/D_r(k_r)|=|u_r/(u_r+n_r)|^P$. The phase factors have modulus one; if $u_r=0$, every shifted sinc numerator vanishes. Since $|u_r|<1/2$, $|u_r+n|\ge(1-|u_r|)|n|$. Summing over positive and negative $n$ and applying [F3] gives the total bound for $a_r$. For real $J\ge1$ put $L=\lfloor J\rfloor\ge1$. Since $x^{-P}$ decreases, $n^{-P}\le\int_{n-1}^n x^{-P}dx$ for each integer $n>L$. Summing and taking the limit gives $\sum_{n>J}n^{-P}\le\int_L^\infty x^{-P}dx=L^{1-P}/(P-1)$, proving the stated finite remainder, including noninteger thresholds. The tensor product has total nonzero alias mass $A_k=\prod_r(1+a_r)-1$. [given, F3, algebra]

2.1 From step 1.1, $W_P$ is the convolution of $P$ copies of $\mathbf1_{[0,1]}$. Fubini [F7] factors its Fourier integral as $\widehat W_P(\omega)=(\int_0^1e^{-i\omega s}ds)^P$. For $\omega\ne0$, the sine and cosine primitives from [F6] give $\int_0^1e^{-i\omega s}ds=e^{-i\omega/2}\operatorname{sinc}(\omega/2)$; at $\omega=0$ the integral is $1$. Therefore $\widehat W_P(\omega)=e^{-iP\omega/2}\operatorname{sinc}(\omega/2)^P$ and $\int W_P=1$. The same primitive gives $\int_0^1e^{2\pi imv}dv=1$ for $m=0$ and $0$ for nonzero integers $m$. [F1, F6, F7, step 1.1, algebra]

2.2 For $P=2$, write $W_2(a-\ell)=\int_0^1W_1(a-\ell-s)ds$ and interchange the nonnegative sum and integral by [F4]. Except at finitely many $s$ for which $a-s$ is an integer, exactly one integer $\ell$ has $a-\ell-s\in[0,1]$; the exceptional set has integral zero, so $\sum_{\ell\in\mathbb Z}W_2(a-\ell)=1$. For $P>2$, use $W_P(x)=\int_0^1W_{P-1}(x-s)ds$ and Tonelli [F4]; the inductive identity for $P-1$ makes the sum inside the integral equal to $1$. Thus $\sum_{\ell\in\mathbb Z}W_P(a-\ell)=1$ for every $P\ge2$. [F1, F4, step 1.1, algebra]

3.1 For one coordinate, set $\theta=2\pi k/M$ and $H(a)=e^{i\theta a}\sum_{\ell\in\mathbb Z}W_P(a-\ell)e^{-i\theta\ell}$. The sum is locally finite and continuous, and reindexing shows $H(a+1)=H(a)$. Only finitely many $\ell$ contribute on $[0,1]$. Substitution $s=a-\ell$ and partition of $\mathbb R$ into $[-\ell,1-\ell]$ give its $m$th Fourier coefficient as $\int_{\mathbb R}W_P(s)e^{-i(2\pi m-\theta)s}ds=\widehat W_P(2\pi m-\theta)$, using step 2.1. For $|k|<M/2$, these coefficients are $O((1+|m|)^{-P})$, hence absolutely summable by [F3]. Their Fourier series converges uniformly by [F5] to a continuous function with the same coefficients as $H$. [F1, F3, F5, step 2.1, algebra]

3.2 In one coordinate, summing the periodic residue weights over $\ell=0,\ldots,M_r-1$ is the same as summing $W_P(M_rt_r-L)$ over all integers $L=\ell+jM_r$; by step 2.2 this sum is $1$. Taking the product over the three coordinates gives $\sum_{\ell\in\mathcal G}w_\ell(t)=1$. Therefore $\sum_\ell g_\ell=\sum_iq_i\sum_\ell w_\ell(t_i)=\sum_iq_i=0$ for neutral data. [given, F1, step 2.2, algebra]

4.1 Let $h$ be the difference between $H$ and the uniform Fourier sum in step 3.1. Every Fourier coefficient of $h$ is zero. For $J\ge1$, define $K_J(v)=J^{-1}|\sum_{r=0}^{J-1}e^{2\pi i rv}|^2$. It is a finite nonnegative trigonometric polynomial with integral $1$ by step 2.1; the vanishing coefficients of $h$ therefore give $K_J*h=0$. Given $\varepsilon>0$, uniform continuity of $h$ gives $\delta\in(0,1/2)$ such that $|h(a-v)-h(a)|<\varepsilon$ when $v$ is within $\delta$ of an integer. Away from those points, the geometric-sum formula gives $K_J(v)\le[J\sin^2(\pi\delta)]^{-1}$. Hence $\|K_J*h-h\|_\infty\le\varepsilon+2\|h\|_\infty/(J\sin^2(\pi\delta))$. Letting $J\to\infty$ and then $\varepsilon\downarrow0$ yields $h=0$. Thus the series in step 3.1 equals $H$. [step 2.1, step 3.1, algebra]

5.1 Multiply the identity $H(a)=\sum_m\widehat W_P(2\pi m-\theta)e^{2\pi ima}$ established by steps 3.1 and 4.1 by $e^{-i\theta a}$, put $a=Mt$, and reindex $n=-m$. Since $W_P$ is real, $\widehat W_P(-\omega)=\overline{\widehat W_P(\omega)}$; step 2.1 then gives $\sum_{\ell\in\mathbb Z}W_P(Mt-\ell)e^{-2\pi i k\ell/M}=\sum_{n\in\mathbb Z}\overline{D_r(k+nM)}e^{-2\pi i(k+nM)t}$. In the finite-grid periodic sum, each index $\ell+jM$ has the same phase as residue $\ell$, since $e^{-2\pi ikj}=1$. Thus the identity holds for the periodized assignment weights. [F1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Apply step 5.1 in each of the three coordinates and multiply the absolutely convergent series. Dividing by $\overline{D(k)}=\prod_r\overline{D_r(k_r)}$ yields $b_k(t)=\sum_{n\in\mathbb Z^3}r_{k,n}e^{-2\pi i(k+n\odot M)\cdot t}$. By [F2], $\sqrt{N_g}\widehat g_M(k)=\sum_iq_i\sum_\ell w_\ell(t_i)e^{-2\pi i k\cdot\ell/M}$. Substitute the single-particle identity, divide by $\overline{D(k)}$, and interchange the absolutely convergent alias series with the finite particle sum. This gives $z_k=\sum_n r_{k,n}\rho_{k+n\odot M}$ with exactly the stated $\sqrt{N_g}$ factor and no cell-volume factor. [given, F2, step 5.1, algebra]

7.1 Since $|a_k(t)|=1$, the identity for $b_k$ gives $|b_k-a_k|\le A_k$ and $|b_k|\le1+A_k$. Also $|\rho_j|\le\sum_i|q_i|=Q$ for every $j$, so the exact identity for $z_k$ gives $|z_k-\rho_k|\le Q A_k$. These are the asserted source-assignment alias bounds. [step 6.1, step 1.2, algebra] ∎

## Remarks

- The negative-sign unitary transform produces the conjugate multiplier
  $\overline{D(k)}$ for the causal window $W_P(Mt-\ell)$. Dividing by $D(k)$
  would introduce a deterministic phase error.
- Periodic wrapping accumulates all predecessor support residues, including
  duplicate residues when $P>M_r$; the proof uses that full finite sum.
- The proof of the spline Fourier series is local and choice-free. The
  Countable Choice branch enters later through Gaussian Poisson summation.
