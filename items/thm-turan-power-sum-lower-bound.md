---
id: thm-turan-power-sum-lower-bound
kind: theorem
title: Turán power-sum lower bound for a finite complex sequence
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-finite-cardinality
- thm-cauchy-schwarz-and-the-euclidean-norm
- thm-cauchy-integral-formula-circle
- thm-riemann-stieltjes-and-parametric-contour-integrals-agree
- thm-intermediate-value
- thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-complex-exponential-is-entire-with-derivative-itself
- thm-complex-exponential-addition-and-real-extension
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- def-natural-logarithm
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-sine-and-cosine-addition-formulas
- thm-sine-and-cosine-derivatives
- thm-sine-cosine-signs-monotonicity-and-ranges
- lem-real-part-power-sum-for-summable-complex-family
- thm-geometric-series
proof_strategy: direct
axiom_use: None. Specified finite enumeration, explicit finite perturbations and compact Riemann computations; the accepted summable real-part supplier has specified indexing.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Appendix K
    url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
    locator: Appendix K §K.2, Theorem K.3, Corollaries K.4–K.5, and the complete proof, printed pp. 334–337; Chebyshev polynomial estimate in Exercise K.2.1, printed pp. 337–338.
  - title: Asif Zaman, Analytic Estimates for the Chebotarev Density Theorem and Their Applications
    url: https://www.math.toronto.edu/zaman/files/thesis.pdf
    locator: Chapter 6 §6.2.1, Lemma 6.2.1 and the complete proof of Theorem 6.2.2, printed pp. 140–142.
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: §5B Theorem 5.2 and §7 Theorem 7.1; the former states the stronger Kolesnik–Straus offset bound, while the latter uses the Lagarias–Montgomery–Odlyzko bound proved locally below.
---

## Statement

Let $A$ be a finite nonempty set, let $N=|A|$, fix an enumeration $A=(a_1,\ldots,a_N)$, and let $c_j,z_j\in\mathbb C$. For each integer $h\ge0$ put $S_h=\sum_{j=1}^N c_jz_j^h$, and for $1\le J\le N$ put $C_J=\sum_{j=1}^Jc_j$ and $R=\max_{1\le j\le N}|z_j|$. Then:

1. If $|z_1|\ge\cdots\ge|z_N|$, then for every integer $M\ge0$ there is an integer $h$ with $M+1\le h\le M+N$ such that
$$|S_h|\ge 2R^h\left(\frac{N}{8e(M+N)}\right)^N\min_{1\le J\le N}|C_J|.$$

2. If $c_j=1$ for every $j$ and $R>0$, then for every $\varepsilon>0$ there is an integer $h$ with
$$1\le h\le\left\lceil(12+\varepsilon)\frac{\sqrt N\left(\sum_{j=1}^N|z_j|^2\right)^{1/2}}{R}\right\rceil$$
such that
$$\left|\sum_{j=1}^N z_j^h\right|\ge\frac{\varepsilon}{48+5\varepsilon}R^h.$$

The enumeration is part of the data; no choice of an enumeration is asserted.

## Statement references

[[def-finite-cardinality]]

[[thm-cauchy-schwarz-and-the-euclidean-norm]]

[[thm-cauchy-integral-formula-circle]]

[[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]

[[thm-intermediate-value]]

[[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]

[[lem-real-part-power-sum-for-summable-complex-family]]

## Facts & Assumptions

**Given:** The finite nonempty set, specified enumeration, coefficients, nodes and quantities in the original Statement.

[F1] Finite cardinality is a natural number and is zero exactly for the empty set ([[def-finite-cardinality]]).

[F2] Cauchy–Schwarz for finite real lists gives $|\sum x_jy_j|\le(\sum x_j^2)^{1/2}(\sum y_j^2)^{1/2}$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] The circle Cauchy formula holds for a holomorphic function on a disc, a strictly smaller positive-radius circle, and its interior evaluation point ([[thm-cauchy-integral-formula-circle]]).

[F4] For a piecewise-$C^1$ contour and a function continuous on its trace, the complex line integral is the componentwise parametric Riemann integral ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[F5] A continuous real function on a closed interval takes every value between its endpoint values ([[thm-intermediate-value]]).

[F6] A nonzero real polynomial of degree $d$ has at most $d$ distinct real roots ([[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]).

[F7] In particular the nonempty specified finite enumeration has $N\ge1$ ([[def-finite-cardinality]]).

[F8] Continuous compact Riemann integrals are linear, monotone, bounded by interval length times the supremum, and satisfy FTC. Exponential has its addition law, derivative and Cartesian modulus formula; logarithm is its inverse, is increasing, has product laws and satisfies $\log x=\int_1^xdt/t$ ([[thm-ftc-second-part]], [[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]]).

[F9] Sine and cosine have their addition formulas and derivatives, and cosine is strictly decreasing on $[0,\pi]$ with range $[-1,1]$ ([[thm-sine-and-cosine-addition-formulas]], [[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F10] For a specified summable complex family of positive mass $S$, maximum modulus $R$ and $M_1=S/R$, every $\varepsilon>0$ admits an integer $1\le h\le\lfloor(12+\varepsilon)M_1\rfloor$ with $\operatorname{Re}\sum z_j^h\ge\varepsilon R^h/(48+5\varepsilon)$ ([[lem-real-part-power-sum-for-summable-complex-family]]).

[F11] Real geometric tails with ratio in $[0,1)$ tend to zero with sum $(1-r)^{-1}$ ([[thm-geometric-series]]). Complex finite geometric identities are algebraic and their absolute tails are bounded by this real assertion.

## Proof

1.1 By [F1] the given $N=|A|$ is a natural number, and by [F7] nonempty $A$ implies $N\ge1$. If $R=0$, every $z_j=0$, so the first lower bound is $0$ and any $h=M+1$ works; clause 2 excludes this case. If $\min_J|C_J|=0$, clause 1 is also immediate. We may therefore prove clause 1 when $R>0$ and the minimum is positive, and by replacing every $z_j$ by $z_j/R$ first assume $R=1$; the power sums are divided by $R^h$, so this normalization preserves clause 1. [given, F1, F7, algebra]

1.2 We derive the exact circle comparison needed for these rational functions. For $C_r(t)=re^{it}$, $r>0$, [F4] and the continuous-integral bound in [F8] give $|\int_{C_r}g|\le2\pi r\sup_{C_r}|g|$: rotate the value of the complex integral to a nonnegative real number and apply real integral order. Every polynomial has a polynomial primitive, so its circle integral is zero by componentwise FTC. For a pole $b$ off the circle, $(z-b)^{-l}$ has the rational primitive $(z-b)^{1-l}/(1-l)$ if $l\ge2$, hence integral zero. For $l=1$ and $|b|<r$, [F3] applied to the constant one on a disc of radius greater than $r$ gives integral $2\pi i$. For $|b|>r$, the finite identity for $-b^{-1}\sum_{n\ge0}(z/b)^n$ and [F11] give a uniformly vanishing tail on the circle; its polynomial partial sums all have integral zero, so the same supremum bound gives integral zero. Finally every rational function with denominator a finite product of powers of linear factors has a polynomial part and finitely many principal parts $a_{b,l}(z-b)^{-l}$. This finite decomposition can be obtained by polynomial division, expanding each nonvanishing denominator factor at a given $b$ through the required finite order by the finite geometric identity, and subtracting the resulting negative powers. The remaining numerator is divisible by every denominator power, so the remainder is polynomial. Thus its circle integral is $2\pi i$ times the sum of the $a_{b,1}$ at poles strictly inside the circle. In particular two circles with no poles between them and none on their traces have equal integrals; a rational function with no poles inside or on a circle has zero integral. This proves just the bounded rational case locally, without a general residue-theorem premise. [F3, F4, F8, F11, construct, algebra]

2.1 Define $T_0(x)=1$, $T_1(x)=x$, and $T_{n+1}(x)=2xT_n(x)-T_{n-1}(x)$. The cosine addition formula gives $T_N(\cos\theta)=\cos(N\theta)$; finite induction gives leading coefficient $2^{N-1}$ for $N\ge1$. At the $N+1$ strictly ordered points $x_k=\cos(k\pi/N)$, its monic normalization $2^{1-N}T_N$ takes alternating values $(-1)^k2^{1-N}$. These values follow also from $e^{ik\pi}=(-1)^k$ in [F8]. If a monic real polynomial $f$ of degree $N$ had $|f(x_k)|<2^{1-N}$ at EVERY such point, then $f-2^{1-N}T_N$ would have alternating nonzero signs there. By [F5] it would have a distinct root in each successive interval, contradicting [F6], since its leading terms cancel and its degree is at most $N-1$. Consequently at least one of these FINITELY MANY explicit points has $|f(x_k)|\ge2^{1-N}$. For an interval $I=[a,b]$ of length $\ell>0$, apply this finite-grid result to the monic polynomial $(2/\ell)^Nf((a+b)/2+(\ell/2)t)$; it supplies a point of $I$ with $|f|\ge2(\ell/4)^N$. No arbitrary-interval supremum attainment is needed. If $\ell=0$, its sole point gives the bound zero. [F5, F6, F8, F9, step 1.1, construct, algebra]

3.1 First suppose the nodes are distinct and $R=1$. Put $r_0=M/(M+N)$ and $f(x)=\prod_{j=1}^N(x-|z_j|)$. By step 2.1 on the interval $[r_0,1]$, some $r\in[r_0,1]$ satisfies $|f(r)|\ge2((1-r_0)/4)^N=2(N/(4(M+N)))^N$. If $M>0$, then $r^M\ge(M/(M+N))^M=(1+N/M)^{-M}\ge e^{-N}$ because $\log(1+x)\le x$ for $x\ge0$; if $M=0$, $r^M=1\ge e^{-N}$. Thus $$r^M\prod_{j=1}^N|r-|z_j||\ge2\left(\frac{N}{4e(M+N)}\right)^N,$$ with $r^0=1$ when $M=0$. The right side is positive, so $r\ne |z_j|$ for every $j$. Since $|z_1|=1$, we have $r<1$. Let $J$ be the largest index with $|z_J|>r$; then $1\le J\le N$ and $|z_j|<r$ for $j>J$. [step 2.1, F8, given, algebra]

4.1 For $1\le j\le N$, set $L_j(z)=\prod_{1\le q\le N,\ q\ne j}(z-z_q)/(z_j-z_q)$; distinctness makes every denominator nonzero and $L_j(z_q)$ equals $1$ when $q=j$ and $0$ otherwise. The polynomial $P(z)=\sum_{j=1}^Jz_j^{-M-1}L_j(z)$ has degree at most $N-1$ and satisfies $P(z_j)=z_j^{-M-1}$ for $j\le J$ and $P(z_j)=0$ for $j>J$. Write $P(z)=\sum_{\ell=0}^{N-1}b_\ell z^\ell$. Then $$C_J=\sum_{j=1}^Nc_jz_j^{M+1}P(z_j)=\sum_{\ell=0}^{N-1}b_\ell S_{M+1+\ell},$$ so $|C_J|\le(\sum_\ell|b_\ell|)\max_{M+1\le h\le M+N}|S_h|$. In particular $|C_J|\ge\min_{1\le q\le N}|C_q|$. [step 3.1, given, construct, algebra]

5.1 Put $Q_0(z)=1$ and $Q_k(z)=\prod_{j=1}^k(z-z_j)$ for $1\le k\le N$, and fix $0\le k\le N-1$. Since these monic polynomials have successive degrees, they form a basis of polynomials of degree at most $N-1$, so write $P=\sum_{\ell=0}^{N-1}d_\ell Q_\ell$. For a sufficiently large circle $|z|=R_0$, each quotient $Q_\ell/Q_{k+1}$ with $\ell>k$ is a polynomial and has zero integral by parametrization. The quotient with $\ell=k$ is $(z-z_{k+1})^{-1}$, whose normalized integral is $1$ by [F3] applied to the constant function $1$ at $z_{k+1}$. For $\ell<k$, $Q_\ell/Q_{k+1}=O(R_0^{-2})$ on the circle, so its integral tends to $0$ as $R_0\to\infty$. Also $z^{-M-1}/Q_{k+1}(z)=O(R_0^{-M-k-2})$, whose integral tends to $0$. Therefore $$\lim_{R_0\to\infty}\frac1{2\pi i}\int_{|z|=R_0}\frac{P(z)-z^{-M-1}}{Q_{k+1}(z)}\,dz=d_k.$$ [F3, F4, F8, step 4.1, step 1.2, algebra]

6.1 Suppose $r>0$. The rational function $(P-z^{-M-1})/Q_{k+1}$ has removable singularities at all nodes of modulus greater than $r$: those indices are at most $J$, where $z^{M+1}P(z)-1$ vanishes. Its only other possible poles are at zero or at nodes of modulus less than $r$, and no node has modulus $r$. Therefore step 1.2 equates its integral on every sufficiently large circle to the integral on $|z|=r$. Taking the large-radius limit in step 5.1 gives $d_k$. The rational function $P/Q_{k+1}$ has no pole inside or on the latter circle, since every denominator node there has index greater than $J$ and is a zero of $P$, with simple denominator multiplicity. Its integral is zero by step 1.2. Hence $$d_k=-\frac1{2\pi i}\int_{|z|=r}\frac{z^{-M-1}}{Q_{k+1}(z)}\,dz.$$ On that circle $|z-z_j|\ge|r-|z_j||$. Each such radial factor is at most one, so the product over the first $k+1$ nodes is at least the product over all $N$ nodes. All poles and trace exclusions have been checked explicitly. [step 3.1, step 1.2, step 5.1, algebra]

7.1 When $r>0$, step 6.1 and $|z-z_j|\ge|r-|z_j||$ on $|z|=r$ give $$|d_k|\le\frac1{r^M\prod_{j=1}^{k+1}|r-|z_j||}\le\frac1{r^M\prod_{j=1}^{N}|r-|z_j||}\le\frac12\left(\frac{4e(M+N)}N\right)^N,$$ because every factor $|r-|z_j||$ is at most $1$. If $r=0$, then necessarily $M=0$ and all nodes are nonzero. For $0<\rho<\min_j|z_j|$, the same rational circle comparison as in steps 1.2 and 6.1 applies with inner radius $\rho$ and cutoff $J=N$, and yields $|d_k|\le(\prod_{j=1}^N|\rho-|z_j||)^{-1}$. Letting $\rho\to0$ and using step 3.1's bound for $\prod_j|z_j|$ proves the same estimate. [F4, F8, step 3.1, step 1.2, step 6.1, algebra]

8.1 The sum of the absolute values of the coefficients of $Q_k$ is at most $\prod_{j=1}^k(1+|z_j|)\le2^k$. Hence $\sum_\ell|b_\ell|\le\sum_{k=0}^{N-1}|d_k|2^k<\frac12(8e(M+N)/N)^N$. Substitution into step 4.1 proves clause 1 for distinct nodes. [step 4.1, step 7.1, algebra]

9.1 For repeated nodes, first normalize to $R=1$ as in step 1.1. For $0<\eta<1$, replace each modulus $r_j=|z_j|$ by $$r_j^{(\eta)}=\frac{(1-\eta)r_j+\eta(N+1-j)/(N+1)}{(1-\eta)r_1+\eta N/(N+1)}.$$ These moduli are strictly decreasing, positive, have first term $1$, and tend to $r_j$ as $\eta\to0$. Define its phase explicitly as $z_j/|z_j|$ when $z_j\ne0$ and as $1$ when $z_j=0$. The resulting nodes are distinct, have maximum modulus $1$, and converge to the original nodes. The coefficients and every $C_J$ are unchanged. Each $S_h$ is a polynomial in the nodes, hence continuous, and the difference between two finite maxima is at most the maximum of their termwise differences, so the finite maximum is continuous; passing to the limit in the already proved distinct-node inequality proves clause 1. The cases $R=0$ and $\min_J|C_J|=0$ were handled in step 1.1. [step 1.1, step 8.1, given, algebra]

10.1 For clause 2, the finite family indexed by $1,\ldots,N$ has positive mass $S=\sum_j|z_j|$ because $R>0$. Apply the accepted real-part bound [F10] directly to these original nodes, normalized there by a positive real number rather than a complex phase. It supplies an integer $1\le h\le\lfloor(12+\varepsilon)S/R\rfloor$ with $\operatorname{Re}\sum_jz_j^h\ge\varepsilon R^h/(48+5\varepsilon)$. Applying [F2] to the real lists $1$ and $|z_j|$ gives $S\le\sqrt N(\sum_j|z_j|^2)^{1/2}$. Therefore this $h$ lies within the stated ceiling bound, and $|\sum_jz_j^h|\ge\operatorname{Re}\sum_jz_j^h$ proves exactly clause 2. Steps 1.1 through 9.1 establish the entire weighted offset clause, including zero and repeated nodes, $M=0$, $N=1$ and vanishing prefix minimum. The original full Statement is proved without any choice premise. [F2, F10, given, step 1.1, step 9.1, algebra] ∎

## Remarks

The complete full-Statement proof is supplied for independent review. Clause 1 locally replays the source's finite interpolation and radial Chebyshev argument, with a finite explicit grid and a direct rational circle calculation. Clause 2 uses the accepted specified-index real-part power-sum lemma without reopening its proof. Primary read the actual complete Appendix K.2 proof and Chebyshev exercise, and the full Zaman Theorem6.2.2 proof in the preceding accepted helper work; no fresh full reading of the historical Thorner–Zaman source is claimed, and it is not a theorem premise. The three historical source references are retained.
