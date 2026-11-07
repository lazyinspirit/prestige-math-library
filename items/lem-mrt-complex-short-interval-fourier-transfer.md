---
id: lem-mrt-complex-short-interval-fourier-transfer
kind: lemma
title: "Full-frequency short-interval transfer for complex Dirichlet polynomials"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - lem-perron-kernel
  - lem-truncated-perron-kernel
  - lem-fourier-transform-of-a-gaussian
  - thm-riemann-fubini-on-product-rectangles
  - thm-ftc-second-part
  - thm-integration-by-parts-with-interior-derivatives
  - thm-monotonicity-of-the-integral
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-logarithm-derivative-and-integral
sources:
  references:
    - title: "Matomäki–Radziwiłł–Tao, An averaged form of Chowla's conjecture, v3, Appendix A, Parseval bound following Theorem A.2, p. 21"
      url: https://arxiv.org/pdf/1503.05121v3
    - title: "Matomäki–Radziwiłł, Multiplicative functions in short intervals, Lemma 14, pp. 21–23; full-frequency adaptation retaining both signs"
      url: https://arxiv.org/pdf/1501.04585v4
---

## Statement

Let $X\ge2$, $1\le h\le X$, and $|a_n|\le1$, supported on the finitely many integers in $[X,2X]$. Define
$$F(s)=\sum_{X\le n\le2X}a_nn^{-s},\quad D_h(x)=\frac1h\sum_{x<n\le x+h}a_n,\quad U=X/h.$$
There is an absolute constant $C$ such that
$$\frac1X\int_X^{2X}|D_h(x)|^2dx\le C\left(\int_{-U}^U|F(1+it)|^2dt+\sup_{V\ge U}\frac UV\int_{V\le|t|\le2V}|F(1+it)|^2dt\right).$$
Both signs are included even when the coefficients are complex. The left side is unchanged if its short sums are closed at both endpoints. All compact integrals are Riemann integrals; the whole-line integrals used in the proof converge absolutely. No assertion about multiplicative cancellation is made.

## Statement references

[MRT Appendix A, Parseval reduction, p. 21](https://arxiv.org/pdf/1503.05121v3)

[Matomäki–Radziwiłł, Lemma 14](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** The data and conventions in the Statement.

[F1] [[lem-perron-kernel]] gives the symmetric Perron limit and [[lem-truncated-perron-kernel]] gives its scalar truncation bound, uniformly away from argument $1$.

[F2] [[lem-fourier-transform-of-a-gaussian]] gives the Fourier transform of every real Gaussian, with the $e^{-2\pi i x\xi}$ convention.

[F3] [[thm-riemann-fubini-on-product-rectangles]], [[thm-ftc-second-part]], and [[thm-integration-by-parts-with-interior-derivatives]] allow finite-rectangle interchange, integration of continuous derivatives, and integration by parts. Complex formulas follow by real and imaginary parts.

[F4] [[thm-monotonicity-of-the-integral]] compares integrals of nonnegative functions. The integral Cauchy–Schwarz inequality used below follows by expanding $\int_I|g-|I|^{-1}\int_Ig|^2\ge0$, first for continuous complex $g$ on a finite interval $I$.

[F5] [[thm-complex-exponential-is-entire-with-derivative-itself]] and [[thm-logarithm-derivative-and-integral]] give the derivatives of the exponential and logarithm used for the kernels and the changes of variable.

## Proof

1.1 For real $R>0$, put $K_h(s,x)=((x+h)^s-x^s)/s$ and $D_{h,R}(x)=(2\pi h)^{-1}\int_{-R}^R F(1+it)K_h(1+it,x)dt$. Termwise use of [F1] gives $D_{h,R}(x)\to D_h(x)$ away from the finitely many points where $x$ or $x+h$ is a supported integer. On the complement of any fixed neighborhoods of these points the convergence is uniform, since each scalar argument $(x+h)/n$ or $x/n$ lies in a fixed compact positive interval and stays a positive distance from $1$. [F1, given, algebra]

1.2 We will use the finite-band identity $\int_{\mathbb R}|\int B(t)e^{itv}dt|^2dv=2\pi\int_{\mathbb R}|B(t)|^2dt$ for a compactly supported, piecewise $C^1$ function $B$ with finitely many pieces. Here is a proof sufficient for every $B$ below. Insert $e^{-\epsilon v^2}$ on the left, expand the finite $t$ integrals, and use [F2–F3], first on compact $v$ intervals and then passing the absolutely convergent Gaussian tails. The result is $\int\int B(t)\overline{B(w)}\sqrt{\pi/\epsilon}\exp(-(t-w)^2/(4\epsilon))dt\,dw$. The Gaussian kernel has mass $2\pi$ and its mass outside every fixed neighborhood of zero tends to zero. On the compact support, uniform continuity away from finitely many jump points, followed by neighborhoods of those points of arbitrarily small total length, makes this double integral tend to $2\pi\int|B(t)|^2dt$. Integration by parts on the finitely many smooth pieces gives $\int B(t)e^{itv}dt=O((1+|v|)^{-1})$. The integrable square tail allows the inserted Gaussian to be removed by first fixing a compact $v$ interval and then bounding its complement uniformly. This proves the identity using only explicit compact approximations and improper integrals. [F2, F3, F4, construct, algebra]

2.1 Write $k_u(s)=((1+u)^s-1)/s$ for $u\ge0$. The exact identity $K_h(s,x)=\frac{x}{2h}\int_{h/x}^{3h/x}x^sk_u(s)du-\frac{x+h}{2h}\int_0^{2h/(x+h)}(x+h)^sk_u(s)du$ follows by substituting $w=xu$ and $w=h+(x+h)u$: the two integrals before subtraction have the same $\int_h^{3h}(x+w)^sdw$ term, leaving $((x+h)^s-x^s)/s$. Define $H_{u,R}(v)=(2\pi)^{-1}\int_{-R}^R F(1+it)k_u(1+it)e^{itv}dt$. Finite-rectangle interchange then gives $D_{h,R}(x)=\frac{x^2}{2h^2}\int_{h/x}^{3h/x}H_{u,R}(\log x)du-\frac{(x+h)^2}{2h^2}\int_0^{2h/(x+h)}H_{u,R}(\log(x+h))du$. [F3, F5, step 1.1, given, algebra]

3.1 All $u$ intervals in step 2.1 have length at most $3h/X$ and lie in $[0,3h/X]$, while $X\le x,x+h\le3X$. Apply the integral Cauchy–Schwarz inequality from [F4] to each term, and then use $|z+w|^2\le2|z|^2+2|w|^2$. Integration in $x$, interchange, and the changes of variable $v=\log x$ and $v=\log(x+h)$ yield $\frac1X\int_X^{2X}|D_{h,R}(x)|^2dx\ll (X/h)^3\int_0^{3h/X}\int_{\mathbb R}|H_{u,R}(v)|^2dv\,du$. The Jacobian divided by $X$ is at most $3$ on the two original $x$ ranges; extending the $v$ integrals is legitimate by nonnegativity. In step 1.2 take $B(t)=\mathbf1_{[-R,R]}F(1+it)k_u(1+it)$, which is smooth inside its band. Also $k_u(1+it)=\int_0^u(1+w)^{it}dw$ gives $|k_u(1+it)|\le u$, while its defining quotient gives $|k_u(1+it)|\le5/|t|$ when $u\le3$ and $t\ne0$. Since $u\le3h/X\le3$, these bounds give $\frac1X\int_X^{2X}|D_{h,R}(x)|^2dx\ll\int_{-R}^R|F(1+it)|^2\min\{1,U^2/t^2\}dt$, with the minimum taken as $1$ at $t=0$. [F3, F4, F5, step 1.2, step 2.1, given, algebra]

4.1 The whole-line weighted integral on the right is finite: $F(1+it)$ is uniformly bounded by the finite number $\sum|a_n|/n$, and its tail weight is $U^2/t^2$. Fix neighborhoods of the finitely many exceptional starts in step 1.1. Uniform convergence on their complement passes the bound of step 3.1 to $D_h$ there. On the neighborhoods $|D_h(x)|\le(h+1)/h\le2$, so their normalized contribution tends to zero with their total length. Letting those lengths tend to zero proves the same bound with $R=\infty$. This passage needs neither a choice of almost-everywhere convergent subsequences nor an $L^2$ completion. [F1, F4, step 1.1, step 3.1, given, algebra]

5.1 Split the whole-line integral at $|t|=U$. On $2^kU\le|t|\le2^{k+1}U$ its weight is at most $4^{-k}$, whereas the band integral is at most $2^k\sup_{V\ge U}(U/V)\int_{V\le|t|\le2V}|F(1+it)|^2dt$. The sum of $2^{-k}$ for $k\ge0$ is $2$, so the claimed bound follows. Changing the endpoint convention changes the finite short sums only at finitely many starts, and the integral of a bounded function is unaffected by such changes, by enclosing those points in intervals of arbitrarily small total length. [step 4.1, F4, algebra] ∎
