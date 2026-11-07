---
dependency_level: 3
id: lem-dirichlet-local-zero-mass-and-logfree-prime-detector
kind: lemma
title: Local Dirichlet zero mass and a logarithm-free prime detector
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-principal-dirichlet-character
  - def-dirichlet-l-function
  - def-von-mangoldt-function
  - lem-dirichlet-character-values
  - lem-dirichlet-global-zero-powers-and-square-mass
  - lem-dirichlet-bounded-family-common-zero-free-region
  - thm-turan-power-sum-lower-bound
  - thm-dirichlet-l-euler-product
  - thm-dirichlet-series-absolute-half-plane-holomorphy
  - thm-identity-theorem-holomorphic-functions
  - cor-derivative-operators-are-continuous-for-local-uniform-convergence
  - thm-fundamental-theorem-of-arithmetic
  - thm-geometric-series
  - def-factorial-and-falling-factorial
  - lem-ceiling-and-least-positive-integer-threshold
  - def-real-exponential-function-and-e
  - def-complex-exponential
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-ftc-second-part
  - lem-continuous-functions-riemann-integrable
  - lem-riemann-integral-linearity
  - thm-weierstrass-convergence-holomorphic-functions
justified_by: []
proof_strategy: direct
axiom_use: None. The zero multisets have the accepted specified indexing; all further selections are finite. Infinite passages use normal convergence or explicit scalar tails, and all integrals are compact or controlled improper Riemann integrals.
sources:
  references:
    - title: Montgomery–Vaughan, Multiplicative Number Theory III
      url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
      locator: Section 28.7, printed pp. 218–225, Lemma 28.16 and equations (28.65)–(28.88). The unweighted detector and all tails are reconstructed below; ceiling and exponential-tail constants are corrected, and local mass is derived from the exact global zero-power supplier.
---

## Statement

Put
$$r_0=\min\{10^{-8},10^{-17}/\log12\}.$$
There are absolute constants $C,c>0$ and $A>6000$ with the following properties.

1. Let $T\ge2$, let $q\le T$ be a positive integer, and let $\chi$ be any Dirichlet character modulo its actual modulus $q$. Put $e_\chi=1$ if $\chi$ is principal and $e_\chi=0$ otherwise, and let $Z_\chi$ be the full zero multiset of $(s-1)^{e_\chi}L(s,\chi)$, including trivial zeros, induction Euler-factor zeros and all multiplicities. For every real $v$ with $|v|\le T+1$ and every $0<\lambda\le1$,
$$\#\{\rho\in Z_\chi:|\rho-(1+iv)|\le\lambda\}\le C(\lambda\log T+1).$$

2. Let $T\ge2$, let $\chi$ be primitive of integer conductor $q\le T$, and let $\rho_0=\beta_0+i\gamma_0$ be a zero of $L(s,\chi)$. Suppose
$$\frac1{\log T}\le r\le r_0,\qquad \beta_0\ge1-r/2,\qquad |\gamma_0|\le T.$$
For every real $x\ge T^A$, put $X=x^{1/900}$ and $Y=x^{60}$. Then, for every real $v$ with $|v-\gamma_0|\le r/2$,
$$\int_X^Y\left|\sum_{X<p\le y}\frac{(\log p)\chi(p)}{p^{1+iv}}\right|^2\frac{dy}{y}\ge c(\log x)^3x^{-40r},$$
where $p$ ranges over primes. The integral is a Riemann integral, split at the finitely many prime cutoffs. All constants are independent of $q,\chi,T,\lambda,r,x,v$ and the chosen zero occurrence.

## Statement references

[[lem-dirichlet-global-zero-powers-and-square-mass]]

[[lem-dirichlet-bounded-family-common-zero-free-region]]

[[thm-turan-power-sum-lower-bound]]

[Montgomery–Vaughan, Section 28.7](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The data of either clause. Write $\ell=\log T$, $D_\chi=L'/L$, and $\zeta(s)=L(s,\mathbf1)$ for the principal character modulo one. Zeros always retain their multiplicities.

[F1] Characters are completely multiplicative, have modulus at most one, and are zero on nonunits; primitive and principal have their stated meanings, and the Dirichlet series defines $L$ on real part greater than one. The von Mangoldt function satisfies $\Lambda(p^j)=\log p$ and is zero off prime powers. [[def-dirichlet-character-modulo-q]] [[def-primitive-dirichlet-character-and-conductor]] [[def-principal-dirichlet-character]] [[def-dirichlet-l-function]] [[def-von-mangoldt-function]] [[lem-dirichlet-character-values]]

[F2] For every actual character, $(s-1)^{e_\chi}L(s,\chi)$ is nonzero entire; its full zero multiset has real parts at most one and specified natural indexing. For $h\ge1$, its exact differentiated logarithmic derivative at $2+it$ is the sum of $(2+it-\rho)^{-h-1}$ minus $e_\chi(1+it)^{-h-1}$. The zero series are absolutely convergent and locally normally convergent in the complex variable away from their poles, and $\sum_\rho|2+it-\rho|^{-2}\le C_0\log(q(|t|+3))$ with an absolute constant. [[lem-dirichlet-global-zero-powers-and-square-mass]]

[F3] The Euler product is nonzero on real part greater than one, and absolutely convergent Dirichlet series and their derivative series are locally uniformly convergent on strictly smaller half-planes of absolute convergence. [[thm-dirichlet-l-euler-product]] [[thm-dirichlet-series-absolute-half-plane-holomorphy]]

[F4] Locally uniform limits of holomorphic functions are holomorphic; all fixed derivatives converge locally uniformly. Holomorphic functions agreeing on a set with an interior accumulation point agree on their domain. [[thm-weierstrass-convergence-holomorphic-functions]] [[cor-derivative-operators-are-continuous-for-local-uniform-convergence]] [[thm-identity-theorem-holomorphic-functions]]

[F5] For a specified finite nonempty ordered family of $N$ nodes with maximum modulus $R$, coefficients all one, and integer offset $M\ge0$, some $k\in[M+1,M+N]$ satisfies $|\sum_jz_j^k|\ge2R^k[N/(8e(M+N))]^N$. Repeated nodes are allowed. [[thm-turan-power-sum-lower-bound]]

[F6] For real $Q,U\ge2$, the primitive family of conductors at most $Q$ has at most one zero occurrence in $\operatorname{Re}s>1-10^{-17}/\log(Q(U+3))$, $|\operatorname{Im}s|\le U$; any such occurrence belongs to a real nonprincipal primitive character. [[lem-dirichlet-bounded-family-common-zero-free-region]]

[F7] Prime factorization is unique, real geometric series with ratio of modulus less than one converge with their usual sum, factorials have their finite product recursion, and ceilings have their least-integer property. [[thm-fundamental-theorem-of-arithmetic]] [[thm-geometric-series]] [[def-factorial-and-falling-factorial]] [[lem-ceiling-and-least-positive-integer-threshold]]

[F8] Exponentials have their convergent power-series definitions, addition law, derivative and Cartesian modulus formula. Real logarithms are continuous and increasing, have their product laws and derivative $1/u$, and satisfy $\log u=\int_1^u dt/t$. [[def-real-exponential-function-and-e]] [[def-complex-exponential]] [[thm-complex-exponential-is-entire-with-derivative-itself]] [[thm-complex-exponential-addition-and-real-extension]] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]]

[F9] Continuous scalar functions have compact Riemann integrals with order, interval additivity, the supremum bound and linearity, and integrable derivatives satisfy FTC. Complex integrals mean their real and imaginary components. [[thm-ftc-second-part]] [[lem-continuous-functions-riemann-integrable]] [[lem-riemann-integral-linearity]]

## Proof

1.1 We record the compact inequalities used below. For continuous real $f,g$, expanding $\int(f-ag)^2\ge0$ for real $a$ proves $(\int fg)^2\le\int f^2\int g^2$, including a zero second integral by the vanishing linear coefficient; the same argument works with the positive continuous density $1/y$ on a compact positive interval and for finite sums. For complex $f$, rotate $\int f$ to a nonnegative real number and use real integral order to obtain $|\int f|\le\int|f|$. A bounded function continuous except at a prescribed finite set is Riemann integrable: split at those points, isolate them in intervals of arbitrarily small total length and apply the continuous criterion on the remaining intervals. Finite point changes do not change that integral. Thus all subsequent finite prime/zero cutoffs and their compact integrals are justified by [F9]. Improper integral estimates follow by the Cauchy criterion from their explicitly bounded absolute tails. Finite integration by parts follows by FTC applied to a product and integration of its derivative. [F9, construct, algebra]

2.1 On a compact sub-half-plane $\operatorname{Re}s>1$, the Euler logarithm $H_\chi(s)=\sum_p\sum_{j\ge1}\chi(p)^jp^{-js}/j$ and every fixed derivative have absolute scalar majorants: powers of $\log n$ times $n^{-1-a}$ have convergent integral tails after $n=e^u$, for every fixed $a>0$. The scalar identity $\exp(\sum_{j\ge1}z^j/j)=(1-z)^{-1}$ follows by differentiation and its value at zero. Finite Euler products followed by their uniform absolute tails therefore give $\exp H_\chi=L(s,\chi)$ and $$-D_\chi(s)=\sum_{n\ge1}\Lambda(n)\chi(n)n^{-s}.$$ For $0<a\le1$, decreasing integral comparison gives $\zeta(1+a)\ge1/a$. The function $(\log u)u^{-1-a}$ increases and then decreases, so comparison on the two sides of its maximum gives $\sum_n(\log n)n^{-1-a}\le a^{-2}+2$; its integral is $a^{-2}$ by the substitution $u=e^t$ and finite integration by parts with explicit exponential tails. Consequently $$0\le-\frac{\zeta'}\zeta(1+a)=\frac{\sum_n(\log n)n^{-1-a}}{\zeta(1+a)}\le3/a,\qquad |D_\chi(1+a+iv)|\le3/a.$$ In particular $D_\chi(2+iv)=O(1)$. For every $z\ge e$, take $a=1/\log z$ and use $n^a\le e$ for $n\le z$ to obtain the internal bound $$\sum_{n\le z}\frac{\Lambda(n)}n\le3e\log z.$$ No Chebyshev or Mertens estimate is used. [F1, F3, F4, F7, F8, F9, step 1.1, construct, algebra]

2.2 For each fixed $h\ge1$, the reciprocal-zero series in [F2] is a locally uniform limit of holomorphic finite sums on $\operatorname{Re}s>1$, so [F4] makes its sum holomorphic there. The logarithmic derivative is holomorphic there by [F3]. The two holomorphic functions in the [F2] identity agree at every $2+it$, a line with accumulation points inside this half-plane; [F4] extends that identity throughout it. Integrate its $h=1$ instance horizontally from $z=2+iv$ to $s=1+\lambda+iv$, using compact normal convergence to integrate finite sums and their uniform tails. This gives $$D_\chi(s)-D_\chi(z)=\sum_\rho\left(\frac1{s-\rho}-\frac1{z-\rho}\right)-e_\chi\left(\frac1{s-1}-\frac1{z-1}\right).$$ The argument applies to every actual character and all $0<\lambda\le1$; when $\lambda=1$ the integral is zero and the same identity holds. [F2, F3, F4, F9, step 1.1, algebra]

3.1 We prove clause 1. For $\operatorname{Re}\rho<0$ and $1\le u\le2$, $|u+iv-\rho|\ge|2+iv-\rho|/2$, so the absolute sum of their integrated differences in step 2.2 is at most four times the square mass in [F2], hence $O(\ell)$ for $q\le T$, $|v|\le T+1$. Do not separate the potentially divergent first reciprocal sums of these negative zeros. For $0\le\operatorname{Re}\rho\le1$, $$0\le\operatorname{Re}(z-\rho)^{-1}\le2|z-\rho|^{-2}.$$ Their real-kernel series at $s$ converges as well: the denominator $|s-\rho|$ is at least a fixed positive $\lambda$-dependent multiple of $|z-\rho|$, and its real numerator lies between $\lambda$ and $2$. Taking real parts in step 2.2 and using step 2.1, $|s-1|\ge\lambda$ and [F2] therefore yields $$\sum_{0\le\operatorname{Re}\rho\le1}\operatorname{Re}(s-\rho)^{-1}\le C(\ell+\lambda^{-1}).$$ Every zero in $|\rho-(1+iv)|\le\lambda$ has nonnegative real part, since $\lambda\le1$, and contributes at least $1/(4\lambda)$: $\operatorname{Re}(s-\rho)\ge\lambda$ and $|s-\rho|\le2\lambda$. Discarding the other nonnegative terms proves the stated $C(\lambda\ell+1)$ count, including its boundary and all multiplicities. [F1, F2, F9, step 2.1, step 2.2, algebra]

4.1 For clause 2 fix a permitted $v$, put $w=1+iv$, $s_0=w+r$ and $\lambda=200r$. The target has $|\rho_0-w|\le r$ and $|s_0-\rho_0|\le2r$. Let $B$ be the zero multiset $|\rho-w|\le\lambda$; it is finite by clause 1, nonempty, and has $N\le C_1r\ell$, because $r\ell\ge1$. For every integer $k\ge2$, the extended identity of step 2.2 gives $$\frac{(-1)^{k-1}}{(k-1)!}D_\chi^{(k-1)}(s_0)=\sum_{\rho\in B}(s_0-\rho)^{-k}-e_\chi(s_0-1)^{-k}+E_k,\qquad |E_k|\le C_2\lambda\ell(199r)^{-k}.$$ Indeed partition $\lambda<d=|\rho-w|\le1$ into $2^j\lambda<d\le\min(2^{j+1}\lambda,1)$. Clause 1 bounds each annulus by $C2^j\lambda\ell$ and $|s_0-\rho|\ge199r\,2^j$ there; summing $2^{-j(k-1)}$ proves that part. For $d>1$, $|s_0-\rho|\ge d/2$ and $|2+iv-\rho|\le2d$, so [F2] bounds the remainder by $C2^k\ell$. For $r\le10^{-8}$ and $k\ge2$, $(398r)^k\le(398r)^2\le C\,200r$, which absorbs it into the displayed error. All annular limits have geometric tails; no local-disc Cauchy remainder or classification of trivial zeros was assumed. [F2, F7, F8, step 2.2, step 3.1, construct, algebra]

5.1 If $q=1$, [F6] at the fixed $Q=2,U=3$ excludes every zeta zero in $\operatorname{Re}s>1-10^{-17}/\log12$, $|\operatorname{Im}s|\le3$, because any occurrence in that region must be nonprincipal. Here $1-\beta_0\le r/2\le r_0/2<10^{-17}/\log12$, so $|\gamma_0|>3$, hence $|v|>2$. Therefore the principal term in step 4.1 is bounded by $2^{-k}$. For every other primitive conductor $e_\chi=0$, so that term vanishes. This handles conductor one solely with the literal public common region, without a numerical assertion about its first zero. [F1, F6, given, step 4.1, algebra]

6.1 Let $A>6000$ be an absolute constant subject to the finitely many lower bounds imposed here and below. For any $x\ge T^A$ put $m=r\log x\ge A r\ell\ge A$ and $K=\lceil m\rceil$. Choose $A\ge C_1$ from step 4.1 so $K\ge N$. Sort the finite nodes $(s_0-\rho)^{-1}$ by decreasing modulus, using their specified index to break ties, and apply [F5] with offset $M=K$ and coefficients one. Their maximum is at least $1/(2r)$, so some $k\in[K+1,K+N]$ has power sum at least $2(100r)^{-k}$. To verify the constant, put $y=K/N\ge1$. The function $y\log2-\log(1+y)$ is zero at one and has positive derivative thereafter, so $1+y\le2^y$. Thus the Turan factor is at least $(8e)^{-N}2^{-K}\ge(16e)^{-K}\ge(16e)^{-k}$, and $32e<100$. Dividing the error in step 4.1 by $(100r)^{-k}$ gives at most $200C_2u(100/199)^{Au}$, where $u=r\ell\ge1$. Increase the fixed $A$ so this is at most $1/2$ for all $u\ge1$; the exponential decreases faster than $u$, as follows by differentiation of its logarithm. The ratio of the principal term is $(50r)^k\le1/2$ by $r\le10^{-8}$ and $k\ge2$. With $h=k-1$, we obtain $$m\le h\le2\lceil m\rceil-1\le3m,\qquad \left|D_\chi^{(h)}(s_0)/h!\right|\ge(100r)^{-h-1}.$$ These estimates hold for every $x\ge T^A$, with no upper bound on $x$ and no choice of infinitely many zeros or derivative orders. [F2, F5, F7, F8, step 4.1, step 5.1, choose, algebra]

7.1 Define $\omega_h(y)=e^{-y}y^h/h!$ for $y\ge0$. Termwise differentiation of the Euler series in step 2.1 is valid to this fixed order $h$, with absolute tails dominated by $(\log n)^{h+1}n^{-1-r}$. Multiplying the bound of step 6.1 by $r^h$ gives $$\left|\sum_{n\ge1}\Lambda(n)\chi(n)n^{-1-iv}\omega_h(r\log n)\right|\ge\frac1{100r}100^{-h}.$$ From $\sum_{j=1}^h\log j\ge\int_1^h\log u\,du$ we have $h!\ge(h/e)^h$. Hence $$\omega_h(y)\le300^{-h}\quad(y\le h/900),\qquad \omega_h(y)\le300^{-h}e^{-y/2}\quad(y\ge20h).$$ For full numerical justification, the exponential series gives $e>\sum_{j=0}^5 1/j!=163/60$ and $e<5/2+(1/6)/(1-1/4)<3$. Since $(163/60)^3>20$, $\log20<3$, and $e^6>400>300$, $\log300<6$. Now $1+\log z-z/2$ decreases for $z\ge2$ and is less than $-6$ at $20$; apply this with $z=y/h$. The lower-range bound uses $e<3$. Also $0\le\omega_h\le1$ follows from $e^y\ge y^h/h!$, and $\omega_h'=\omega_{h-1}-\omega_h$ gives $|\omega_h'|\le1$. [F1, F3, F4, F7, F8, F9, step 1.1, step 2.1, step 6.1, construct, algebra]

8.1 Put $X=x^{1/900}$ and $Y=x^{60}$. If $n\le X$, then $r\log n\le m/900\le h/900$; if $n>Y$, then $r\log n>60m\ge20h$. Step 7.1, the internal harmonic bound of step 2.1 and $\sum_n\Lambda(n)n^{-1-r/2}\le6/r$ show that the contributions of these two ranges have total modulus at most $$C_3\,300^{-h}(\log x+r^{-1}).$$ Relative to $r^{-1}100^{-h}$ this is at most $C_3(m+1)3^{-h}\le C_3(m+1)3^{-m}$. Increase $A$ so it is less than $1/400$ for all $m\ge A$, which is possible by its explicit decreasing exponential tail. We have thus removed both infinite Euler tails uniformly, without using a prime-counting estimate. [F1, F7, F8, step 2.1, step 6.1, step 7.1, choose, algebra]

9.1 Since $\omega_h\le1$, the prime-power contribution left inside $(X,Y]$ is at most $$\sum_{p^j>X,\ j\ge2}\frac{\log p}{p^j}\le C_4X^{-1/4}\log(2X).$$ For $p>X^{1/4}$, sum the geometric tail from $j=2$ and enlarge to the integers $n>X^{1/4}$; integration of $(\log u)u^{-2}$ bounds it by $CX^{-1/4}\log(2X)$. For $p\le X^{1/4}$, the first qualifying exponent has $p^{-j}<X^{-1}$ and the remaining tail is at most $2/X$; summing over at most $X^{1/4}$ integers gives $CX^{-3/4}\log(2X)$. This proves the displayed estimate for every modulus, including zero character values on prime divisors of $q$. Since $r\le10^{-8}$, $3r\log100\le1/7200$, so its ratio to $r^{-1}100^{-h}$ is at most $$C_5m\exp(-\log x/7200)\le C_5m\exp(-m/(7200r_0)).$$ Increase $A$ so this is at most $1/400$ for every $m\ge A$. Combining steps 7.1–8.1 therefore gives, for an absolute $c_1>0$, $$\left|\sum_{X<p\le Y}(\log p)\chi(p)p^{-1-iv}\omega_h(r\log p)\right|\ge c_1r^{-1}100^{-h}.$$ All discarded prime-power sums were bounded by explicit nonnegative scalar tails. [F1, F7, F8, F9, step 1.1, step 6.1, step 7.1, step 8.1, choose, algebra]

10.1 Write $F(y,v)=\sum_{X<p\le y}(\log p)\chi(p)p^{-1-iv}$. It is a finite step function of $y$ with $F(X,v)=0$. Applying finite FTC on the intervals between successive primes and telescoping gives $$\sum_{X<p\le Y}(\log p)\chi(p)p^{-1-iv}\omega_h(r\log p)=F(Y,v)\omega_h(r\log Y)-r\int_X^YF(y,v)\omega_h'(r\log y)\frac{dy}{y}.$$ This identity includes a prime equal to $Y$ and excludes a prime equal to $X$, exactly as in the sums. By step 2.1, $|F(Y,v)|\le C\log Y\le C\log x$. Since $r\log Y=60m\ge20h$, step 7.1 bounds the upper boundary by $C(\log x)300^{-h}e^{-30m}$, at most half the lower bound in step 9.1 after increasing $A$ once more. The correct exponent here is $-r\log Y/2$, not $-\log Y/2$. With $|\omega_h'|\le1$, the resulting integral satisfies $$\int_X^Y|F(y,v)|\frac{dy}{y}\ge c_2r^{-2}100^{-h}.$$ Step 1.1 justifies the finite-jump Riemann integrals and absolute-value inequality used here. [F1, F8, F9, step 1.1, step 2.1, step 6.1, step 7.1, step 9.1, choose, algebra]

11.1 The positive density $dy/y$ has total mass $(60-1/900)\log x<60\log x$. Apply the compact Cauchy–Schwarz calculation of step 1.1, subdividing at the finite prime jumps, to obtain $$\int_X^Y|F(y,v)|^2\frac{dy}{y}\ge\frac{c_3}{r^4\log x}100^{-2h}\ge c_3(\log x)^3m^{-4}x^{-6r\log100}.$$ Here $h\le3m$ and $m=r\log x$. Since $m\ge1$ and $\log m\le m$, $m^{-4}\ge e^{-4m}=x^{-4r}$. The internal numerical bounds of step 7.1 imply $\log100<5$, so $6\log100+4<40$. The last display is therefore at least $c_3(\log x)^3x^{-40r}$. All restrictions imposed on $A$ are finitely many absolute lower bounds: $A>6000$, $A\ge C_1$, and thresholds making the explicitly displayed functions $u b^{-Au}$ or $(m+1)b^{-m}$ smaller than fixed constants on $u\ge1$ or $m\ge A$. Each decreases eventually by its logarithmic derivative and has an explicit exponential tail, so one fixed sufficiently large absolute $A$ satisfies them simultaneously. The proof used only $m\ge A r\ell\ge A$, hence is uniform for every real $x\ge T^A$. The successful $h$ may depend on the fixed $v$, but it has disappeared from this inequality; no function of $v$ is selected or integrated. Together with step 3.1 this proves both full clauses. [F7, F8, F9, step 1.1, step 6.1, step 7.1, step 10.1, choose, algebra] ∎

## Remarks

The proof reconstructs the unweighted detector in the cited complete Montgomery–Vaughan passage. It uses the actual public global zero powers and square mass instead of an additional finite-disc logarithmic-derivative theorem. The source's ceiling choice does not imply $h\le2r\log x$; the safe bound $h\le3r\log x$ is used with $Y=x^{60}$. The prime-power and Euler tails, and every Riemann partial-summation endpoint, are included locally. No separated-zero or family-overlap assertion is part of this supplier; those finite integrations belong to its consumer. This staged carrier asserts no independent acceptance, publication, readiness or gate result.
