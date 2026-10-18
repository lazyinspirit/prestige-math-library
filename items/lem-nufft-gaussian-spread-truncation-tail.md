---
id: lem-nufft-gaussian-spread-truncation-tail
kind: lemma
title: Explicit periodized Gaussian spread-tail bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 2
proof_strategy: direct
deps:
  - def-nufft-periodized-gaussian-gridding-kernel
  - lem-nufft-gaussian-periodization-converges
  - def-real-elementary-functions-and-domains
  - def-continuity-and-derivative-on-real-interval
  - thm-derivative-of-exponential
  - lem-derivative-algebra-and-chain-rules
  - thm-ftc-second-part
  - thm-exponential-beats-every-polynomial
  - thm-geometric-series
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice principle is used; the proof uses only finite product sums,
  explicit geometric tails, and one-variable calculus.
sources:
  references:
    - title: "Jens Keiner, Stefan Kunis, and Antje Vollrath, The Nonequispaced FFT and
        its Applications, Part I, slides 48 and 54–58"
      url: "https://math.aalto.fi/numericsyear/NFFT/nfft.pdf"
      locator: "Finite Gaussian window truncation and the aliasing/truncation error
        proof"
    - title: "Leslie Greengard and June-Yub Lee, Accelerating the Nonuniform Fast
        Fourier Transform"
      url: "https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf"
      locator: "§3, printed pp. 447–448, local Gaussian spreading to nearest grid
        points"
verification:
  precheck: pass
---
## Statement
Let $d\ge1$, $\tau_r>0$, and integers $M_r,w_r\ge1$ satisfy $M_r\ge2w_r+1$. Define $a_r=\pi/(\tau_rM_r^2)$ and
$$S_r=\frac{2}{1-\exp(-a_r)},\qquad T_r=2\exp(-a_rw_r^2)\left(1+\frac{1}{2a_rw_r}\right).$$
For $x=(x_r)_{r=1}^d\in[0,1)^d$, let
$$W_r(x_r)=\left\{\ell\in\{0,\ldots,M_r-1\}:\min_{n\in\mathbb Z}|\ell/M_r-x_r-n|\le w_r/M_r\right\},\quad W(x)=\prod_{r=1}^dW_r(x_r).$$
With $\Phi_\tau(z)=\prod_{r=1}^d\phi_{\tau_r}(z_r)$, the omitted spreading mass obeys
$$\sum_{\ell\in\prod_r\{0,\ldots,M_r-1\}\setminus W(x)}\Phi_\tau(\ell_1/M_1-x_1,\ldots,\ell_d/M_d-x_d)\le T_d,\qquad T_d:=\sum_{r=1}^dT_r\prod_{s\ne r}S_s.$$
Also $\sum_{\ell_r=0}^{M_r-1}\phi_{\tau_r}(\ell_r/M_r-x_r)\le S_r$ for every coordinate and point.

## Facts & Assumptions
**Given:** The stated finite dimension, positive $\tau_r$, integers $M_r,w_r$, and point $x$.

[F1] [[lem-nufft-gaussian-periodization-converges]]: each periodized Gaussian is nonnegative, one-periodic, and its defining integer series converges absolutely and locally uniformly.

[F2] [[thm-geometric-series]]: for $0<q<1$, the geometric series converges and its finite tails have the usual explicit sum.

[F3] [[def-continuity-and-derivative-on-real-interval]], [[thm-derivative-of-exponential]], and [[lem-derivative-algebra-and-chain-rules]]: the power and product rules give $(t^2)'=2t$, and the constant function has zero derivative by its difference quotient; hence $(t\mapsto-at^2)'=-2at$. Combining this with $(\exp)'=\exp$ and the scalar chain rule shows that $f_a(t)=\exp(-at^2)$ is differentiable with derivative $f_a'(t)=-2at\exp(-at^2)$ for $a>0$.

[F4] [[thm-ftc-second-part]]: if $G'=g$ on a compact interval and $g$ is integrable, then $\int_u^v g=G(v)-G(u)$.

[F5] [[thm-exponential-beats-every-polynomial]] and [[cor-exponential-reciprocal-and-positivity]]: $\exp(-aR^2)=1/\exp(aR^2)\to0$ as $R\to\infty$ for $a>0$.

[F6] [[def-real-elementary-functions-and-domains]], [[thm-exponential-is-strictly-increasing]], and [[cor-exponential-reciprocal-and-positivity]]: $\pi=4\int_0^1(1+t^2)^{-1}\,dt\ge2>0$, $\exp(0)=1$, and the exponential is positive and strictly increasing; hence $a_r>0$ and $0<\exp(-a_r)<1$.

## Proof

1.1 Fix one coordinate, write $M=M_r$, $\tau=\tau_r$, $w=w_r$, $a=\pi/(\tau M^2)>0$ by [F6], and $y=Mx_r$. Reindexing the finite grid index and period index by $m=\ell+nM$ gives $\sum_{\ell=0}^{M-1}\phi_\tau(\ell/M-x_r)=\sum_{m\in\mathbb Z}\exp(-a(m-y)^2).$ For every integer $s\ge0$, at most two integers satisfy $s\le|m-y|<s+1$. Their terms are at most $\exp(-as^2)$; for $s\ge1$, $s^2\ge s$. Thus the sum is at most $2\sum_{s=0}^{\infty}\exp(-as)=2/(1-\exp(-a))=S_r$ by [F2]. [F1, F2, F6, construct, algebra]

1.2 If $\ell\notin W_r(x_r)$, then every $m=\ell+nM$ satisfies $|m-y|>w$. On either side of $y$, the lattice distances form a unit-spaced sequence $d+n$ with $d>w$. The first term is at most $\exp(-aw^2)$. For each later term, monotonicity of $f_a$ gives $f_a(d+n)\le\int_{d+n-1}^{d+n}f_a(t)\,dt$. For $R>w$, [F3]–[F4] give $\int_w^R f_a(t)\,dt\le\frac1w\int_w^Rt f_a(t)\,dt=\frac{\exp(-aw^2)-\exp(-aR^2)}{2aw}\le\frac{\exp(-aw^2)}{2aw}.$ By [F5], the last subtracted term tends to zero as $R\to\infty$. Taking limits of the finite tail sums, which converge by [F1], bounds each side by $\exp(-aw^2)(1+1/(2aw))$. Both sides together yield $\sum_{\ell\notin W_r(x_r)}\phi_\tau(\ell/M-x_r)\le T_r$. [F1, F3, F4, F5, algebra]

2.1 The complement of the product set $W(x)$ is the union of the $d$ sets where at least one coordinate index is outside its $W_r(x_r)$. Since all kernel terms are nonnegative, the total omitted product mass is at most the sum of the $d$ coordinate-tail product sums. Each such finite product factors into the one-coordinate tail in step 1.2 and the full-coordinate masses in step 1.1; hence it is at most $T_r\prod_{s\ne r}S_s$. Summing over $r$ gives $T_d$. [step 1.1, step 1.2, algebra] ∎
