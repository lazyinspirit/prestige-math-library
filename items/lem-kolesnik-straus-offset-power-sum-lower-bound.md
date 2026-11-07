---
id: lem-kolesnik-straus-offset-power-sum-lower-bound
kind: lemma
title: The Kolesnik–Straus offset bound for finite unit-coefficient power sums
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-real-stirling-formula
- lem-qa-13-pi-rational-bounds
- def-complex-exponential
- def-real-exponential-function-and-e
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-real-power-continuity-and-derivatives
- thm-real-power-laws
- thm-integration-by-parts
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-cauchy-integral-formula-circle
- thm-riemann-stieltjes-and-parametric-contour-integrals-agree
- thm-geometric-series
- thm-complex-exponential-is-entire-with-derivative-itself
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-complex-exponential-addition-and-real-extension
justified_by: []
proof_strategy: direct
axiom_use: None. Specified finite lists, finite rational grids, compact Riemann integration
  by parts and explicit rational-circle calculations suffice.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: Theorem5.2 exact1.007/(4e) statement, printed1161, read in the full cached
      source. Its primary Kolesnik–Straus1983 proof was not retrieved and is not imported.
  - title: H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III
    url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
    locator: AppendixK §K.2 finite interpolation/rational-circle method, previously
      fully read in accepted Turan authoring. The sharper weighted Rodrigues and finite-grid
      calculation is independently supplied locally here.
---

## Statement

Let $N\ge1$ and $M\ge0$ be integers, and let $z_1,\ldots,z_N$ be a specified finite list of complex numbers. Put $R=\max_{1\le j\le N}|z_j|$. There is an integer $h$ with $M+1\le h\le M+N$ such that
$$\left|\sum_{j=1}^Nz_j^h\right|\ge\frac{1007}{1000}\left(\frac{N}{4e(M+N)}\right)^N R^h.$$
In particular one may replace $R^h$ by $|z_1|^h$. Repeated and zero nodes and $M=0$ are included. No choice axiom is assumed.

## Facts & Assumptions

**Given:** The specified finite list and integers $N\ge1$, $M\ge0$; $e=\exp(1)$.

[F1] Real Stirling gives $n!/[\sqrt{2\pi n}(n/e)^n]\to1$. The circle constant obeys $3<\pi<22/7$. [[thm-real-stirling-formula]] [[lem-qa-13-pi-rational-bounds]]

[F2] Exponential is defined by its convergent factorial power series, extends the real exponential and has its addition, derivative and modulus laws. Positive real powers use logarithms; $\log'=1/x$ and logarithms have their product laws. [[def-complex-exponential]] [[def-real-exponential-function-and-e]] [[thm-complex-exponential-is-entire-with-derivative-itself]] [[thm-complex-exponential-addition-and-real-extension]] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]] [[thm-real-power-continuity-and-derivatives]] [[thm-real-power-laws]]

[F3] Continuous compact functions have their finite Riemann integral, with linearity and order; differentiable functions with integrable derivative satisfy FTC, and continuously differentiable factors satisfy finite integration by parts. [[lem-continuous-functions-riemann-integrable]] [[lem-riemann-integral-linearity]] [[thm-ftc-second-part]] [[thm-integration-by-parts]]

[F4] Cauchy's integral formula applies on a circle inside a holomorphic disc. Parametric finite piecewise-smooth contour integrals agree with their componentwise Riemann integrals. [[thm-cauchy-integral-formula-circle]] [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]

[F5] Geometric series have their exact finite partial sums and scalar tails. [[thm-geometric-series]]

## Proof

1.1 If $R=0$, every power sum and the desired lower bound is zero, so choose $h=M+1$. Otherwise replace $z_j$ by $z_j/R$ to normalize $R=1$. Every original power sum is $R^h$ times the normalized one. Finite sorting by decreasing modulus, breaking ties by the given index, does not change these unit-coefficient sums. Write $L=M+N$. All integrations below are finite Riemann integrations, except explicitly bounded rational-circle limits; no measure-theoretic selection or inversion theorem is used. [F2, given, construct, algebra]

1.2 We supply the finite rational-circle comparison used for interpolation. On $|z|=r>0$, the parametric integral bound $|\int g(z)dz|\le2\pi r\sup|g|$ follows from [F3] and [F4] by rotating a complex integral to the nonnegative real axis. Polynomials and $(z-b)^{-j}$ for $j\ge2$ have primitives and have zero circle integral by componentwise FTC. For $(z-b)^{-1}$, Cauchy's formula [F4] gives $2\pi i$ if $|b|<r$; if $|b|>r$, geometric polynomial partial sums and [F5]'s uniform tail give zero. A rational function with denominator a finite product of linear factors has a polynomial part and finitely many principal parts, obtained by polynomial division and finite Taylor expansion of nonvanishing factors at each pole. Subtracting those principal parts leaves a numerator divisible by the full denominator. Therefore its circle integral is $2\pi i$ times the sum of its simple-pole coefficients inside the circle. Two circles without poles between them have equal integrals. This proves the required rational case locally, without a choice-dependent residue theorem. [F3, F4, F5, construct, algebra]

1.3 $27/10<e<11/4$: the first five exponential-series terms give $e>65/24$, while the tail beginning at $1/4!$ is at most $(1/24)/(1-1/5)=5/96$, giving $e\le87/32<11/4$. [F2, F5, algebra]

2.1 We prove a weighted monic-polynomial bound. Put $A=L/N\ge1$, $p=A-1\ge0$, and $\alpha=2M+p$. Define $$Q_N(x)=\frac{x^{-\alpha}}{N!}\frac{d^N}{dx^N}\left[x^{\alpha+N}(x-1)^N\right]\quad(x>0).$$ Expansion of $(x-1)^N$ shows this is a polynomial, defining its value at zero as well, with leading coefficient $\ell_N=\prod_{j=N+1}^{2N}(\alpha+j)/N!$. Every derivative of the bracket of order less than $N$ vanishes at both endpoints: at zero each term has exponent at least $\alpha+1>0$, and at one a factor $x-1$ remains. The derivative of order $N$ is continuous, including when $\alpha=0$; this follows termwise from the displayed finite powers and their one-sided endpoint derivatives. Repeated integration by parts [F3] therefore gives $\int_0^1x^\alpha Q_N(x)x^kdx=0$ for $0\le k<N$. Applying the same calculation to $Q_N$, whose $N$th derivative is $N!\ell_N$, gives $$\int_0^1x^\alpha Q_N(x)^2dx=\ell_N\int_0^1x^{\alpha+N}(1-x)^Ndx=\frac1{\alpha+2N+1}.$$ The middle integral equals $N!/\prod_{j=N+1}^{2N+1}(\alpha+j)$ by $N$ further finite integrations by parts. All integrands and derivatives used here are continuous on the compact interval; $x^0$ at zero is the constant one. [F2, F3, step 1.1, construct, algebra]

3.1 If $f$ is any real monic polynomial of degree $N$, the polynomial $f-Q_N/\ell_N$ has degree less than $N$. The orthogonality just proved makes the cross term vanish when its square is expanded. Hence $$\int_0^1x^\alpha f(x)^2dx\ge\frac1{\ell_N^2(\alpha+2N+1)}.$$ The positive measure $Ax^pdx$ has total integral one by FTC. Since $\alpha=p+2M$, the square root of the weighted integral of $(x^Mf(x))^2$ is therefore at least $$\frac{N!\sqrt{A/(2L+A)}}{\prod_{j=N}^{2N-1}(2M+A+j)}\ge\frac{N!}{[2L]^N(1+1/(2N))^N\sqrt{2N+1}}.$$ For the last inequality every denominator factor is at most $2L+A$, and $A=L/N$. This computation is a finite orthogonal-polynomial argument, not an invocation of a Jacobi-polynomial theorem. [F2, F3, step 2.1, algebra]

4.1 The last quantity in step 3.1 is greater than $\frac{101}{100}(N/(2eL))^N$. To prove the constant uniformly, put $a_n=n!e^n/n^{n+1/2}$. The function $\log(1+x)-2x/(2+x)$ has derivative $x^2/[(1+x)(2+x)^2]>0$ for $x>0$ and is zero at zero. Thus $a_{n+1}/a_n=\exp(1-(n+1/2)\log(1+1/n))<1$. By [F1], $a_n>\sqrt{2\pi}$ for all $n$. Finally $(1+1/(2N))^{2N}<e$ follows from $\log(1+x)<x$. Consequently, for $N\ge8$, the square of the normalized constant in step 3.1 is greater than $$\frac{2\pi N}{e(2N+1)}>\frac{24N}{11(2N+1)}\ge\frac{192}{187}>\left(\frac{101}{100}\right)^2.$$ [F1, F2, F3, step 3.1, step 1.3, algebra]

5.1 For $1\le N\le7$, use $e>27/10$ instead. The squared normalized constant is greater than $(N!)^2 27^{2N}/[5^{2N}(2N+1)^{2N+1}]$, which is greater than $103/100>(101/100)^2$. For transparency the seven integer differences $$100(N!)^2 27^{2N}-103\,5^{2N}(2N+1)^{2N+1}$$ are, in increasing $N$, $3375$, $11404525$, $69324244775$, $680320064196225$, $9499811535308231875$, $164661758297884872093125$ and $2654442623046357555589299375$, all positive. These are explicit finite arithmetic identities, not an external computation input. Together with step 4.1 this proves that the normalized constant in step 3.1 is greater than $101/100$ for every $N\ge1$. [F2, step 3.1, step 1.3, step 4.1, algebra]

6.1 Apply the polynomial bound to $f(x)=\prod_{j=1}^N(x-|z_j|)$ and put $B=(N/(2eL))^N$. The polynomial $g(x)=x^Mf(x)$ has coefficient absolute sum at most $2^N$, and $|g'(x)|\le L2^N$ on $[0,1]$. Choose an integer $J>500L2^N/B$, for example one more than the integer part of the rational number $500L2^N(11L/(2N))^N$, using $e<11/4$ and let $G$ be the largest of the finitely many values $|g(k/J)|$, $0\le k\le J$. FTC gives $|g(x)|\le G+L2^N/J$ for every $x\in[0,1]$. Integrating its square against the normalized weight $Ax^pdx$ and using steps 3.1 and 5.1 yields $G>1.01B-B/500=1.008B$. Choose the least grid index attaining $G$, and call its point $r$. Then $$r^M\prod_{j=1}^N|r-|z_j||>1.008\left(\frac{N}{2e(M+N)}\right)^N=:S>0.$$ Here $r^0=1$ if $M=0$. No radius equals a node modulus, and $r<1$ since some node has modulus one. Finite grid selection avoids an arbitrary maximum-attainment premise. [F2, F3, step 3.1, step 5.1, construct, algebra]

7.1 First suppose the normalized nodes are distinct. Sort them as in step 1.1 and let $K$ count those with modulus greater than $r$. Since a largest node has modulus one, $1\le K\le N$. Finite Lagrange interpolation gives a polynomial $P$ of degree less than $N$ with $P(z_j)=z_j^{-M-1}$ for $j\le K$ and $P(z_j)=0$ for $j>K$: explicitly sum those prescribed values times $\prod_{u\ne j}(z-z_u)/(z_j-z_u)$. All denominator nodes used outside are nonzero. Write $P(z)=\sum_{l=0}^{N-1}b_lz^l$ and $S_h=\sum_jz_j^h$. Then $$K=\sum_jz_j^{M+1}P(z_j)=\sum_{l=0}^{N-1}b_lS_{M+1+l},$$ so $1\le(\sum|b_l|)\max_{M+1\le h\le M+N}|S_h|$. [step 1.1, step 6.1, construct, algebra]

8.1 Let $Q_0(z)=1$, $Q_k(z)=\prod_{j=1}^k(z-z_j)$, and expand $P=\sum_{k=0}^{N-1}d_kQ_k$; these monic polynomials of successive degree form a basis by triangular coefficient elimination. On a circle of large radius, the normalized integral of $P/Q_{k+1}$ tends to $d_k$: the $Q_k$ term has integral one by [F4], later terms are polynomials, and earlier terms are $O(|z|^{-2})$. The normalized integral of $z^{-M-1}/Q_{k+1}$ tends to zero too. If $r>0$, the rational function $(P-z^{-M-1})/Q_{k+1}$ has removable poles at every node outside $r$ by the interpolation conditions. Its other possible poles are inside $r$, so step 1.2 shrinks its large circle to $|z|=r$. The rational function $P/Q_{k+1}$ has no pole inside that circle, since every inside denominator node is a zero of $P$, and distinctness makes the denominator multiplicity one. Consequently $$d_k=-\frac1{2\pi i}\int_{|z|=r}\frac{z^{-M-1}}{Q_{k+1}(z)}dz.$$ Every trace pole is excluded by step 6.1, and all removable poles have just been checked. [F4, step 1.2, step 7.1, algebra]

9.1 On the circle $|z|=r$, $|z-z_j|\ge|r-|z_j||$, and every latter factor is at most one. Steps 6.1, 1.2 and 8.1 therefore give $|d_k|<1/S$ for all $k$. If $r=0$, positivity in step 6.1 forces $M=0$ and all nodes nonzero. Use an inner circle $0<\rho<\min_j|z_j|$ instead, with $K=N$; step 8.1's same removable-pole calculation applies. Its bound tends as $\rho\downarrow0$ to $1/\prod_j|z_j|<1/S$. Thus in both cases $|d_k|\le1/S$ suffices. The coefficient absolute sum of $Q_k$ is at most $\prod_{j\le k}(1+|z_j|)\le2^k$, so $$\sum_l|b_l|\le\sum_{k=0}^{N-1}|d_k|2^k\le\frac{2^N-1}{S}<\frac{2^N}{S}.$$ Step 7.1 now yields an offset power sum larger than $S/2^N=1.008(N/(4e(M+N)))^N$, which is stronger than the desired factor $1.007$. [step 6.1, step 1.2, step 7.1, step 8.1, algebra]

10.1 For repeated nodes retain the decreasing-modulus order, and for $0<\eta<1$ replace $r_j=|z_j|$ by $$r_j^{(\eta)}=\frac{(1-\eta)r_j+\eta(N+1-j)/(N+1)}{(1-\eta)r_1+\eta N/(N+1)}.$$ These are strictly decreasing and positive, the first is one, and they tend to $r_j$ as $\eta\to0$. Assign phase $z_j/|z_j|$ when $z_j\ne0$ and phase one otherwise. The resulting nodes are distinct, retain largest modulus one, and converge to the original nodes. Every one of the finitely many power sums in the offset interval is a polynomial in the nodes. Their absolute values and their finite maximum therefore converge: the difference of two finite maxima is bounded by the largest termwise difference. Passing to the limit in step 9.1 gives a normalized maximum at least $1.008(N/(4e(M+N)))^N$, hence at least the claimed factor $1007/1000$. Choose the least offset index reaching the required finite bound and restore the positive normalization $R^h$ from step 1.1. This proves all repeated/zero-node, $M=0$, $N=1$ and $R=0$ cases without a choice premise. [F2, step 1.1, step 9.1, construct, algebra] ∎

## Remarks

The full local proof supplies the exact offset unit-coefficient bound needed by the explicit Hecke zero detector. It does not relabel the earlier8e theorem. No original1983 full proof reading, independent review, source-history reset, theorem import or external computation is claimed. All previously accepted Turan/RP and analytic bodies remain untouched.
