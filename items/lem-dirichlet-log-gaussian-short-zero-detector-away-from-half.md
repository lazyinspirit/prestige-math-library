---
dependency_level: 0
id: lem-dirichlet-log-gaussian-short-zero-detector-away-from-half
kind: lemma
title: A short Gaussian zero detector uniformly away from the critical line
deps:
- def-dirichlet-character-modulo-q
- def-primitive-dirichlet-character-and-conductor
- def-dirichlet-l-function
- lem-dirichlet-character-values
- thm-primitive-dirichlet-l-analytic-continuation
- thm-primitive-dirichlet-l-functional-equation
- def-completed-dirichlet-l-function
- thm-primitive-gauss-sum-norm
- def-gauss-sum-dirichlet-character
- thm-gamma-functional-equation
- thm-gamma-meromorphic-continuation
- thm-gamma-weierstrass-product
- thm-stirling-formula-gamma
- thm-residue-theorem-null-homologous-cycle
- thm-riemann-stieltjes-and-parametric-contour-integrals-agree
- thm-identity-theorem-holomorphic-functions
- def-divisor-counting-function
- thm-canonical-prime-factorisation
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-complex-exponential-is-entire-with-derivative-itself
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-logarithm-derivative-and-integral
- thm-p-series-real-exponents
- def-number-theoretic-mobius-function
- lem-fourier-transform-of-a-gaussian
- thm-gaussian-integral
- thm-continuous-on-a-rectangle-is-riemann-integrable
- thm-riemann-fubini-on-product-rectangles
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
axiom_use: None. Finite arithmetic/character sums, compact Riemann and parametric
  contour integrals, and explicitly bounded Gaussian/Dirichlet-series tails.
sources:
  references:
  - title: H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III
    url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
    locator: Sections28.2–28.4, printed pp.186–201. Adapted zero-detection/reflection
      method with a different log-Gaussian kernel, explicit fixed-power cutoffs and
      a conjugated dual integral. The Statement is not the source Theorem28.3 with
      arbitrary cutoffs.
---

## Statement

For every $0<\delta\le1/4$ and $0<\alpha\le\min(1/8,10\delta)$ there are constants $C_{\alpha,\delta}\ge1$ and $P_{\alpha,\delta}\ge e^{64}$ with the following property. Let $R\ge1$, $T\ge1$ be real and set
$$\epsilon=\alpha/100,\quad \kappa=\alpha/20,\quad P=C_{\alpha,\delta} R(T+4),\quad Y=P^{1/2+\epsilon},\quad X=P^{1/2+2\epsilon},\quad Z=P^{1/2},\quad K=\lfloor P^\kappa\rfloor,\quad N=\lfloor KX\rfloor.$$
Suppose $P\ge P_{\alpha,\delta}$. Let $1/2+\delta\le\theta\le\beta\le1$ and let $\rho=\beta+i\gamma$ be a zero of a primitive Dirichlet $L$-function $L(s,\psi)$ of conductor $d\le R$, with $|\gamma|\le T$. If $d=1$, assume additionally $|\gamma|>(\log P)^2$.

Define, for $x>0$,
$$f(x)=\frac1{2\sqrt\pi}\int_{\log x}^{\infty}e^{-u^2/4}du.$$
For integers $K<n\le N$ and $v\in\mathbb R$, put
$$a(n)=\sum_{\substack{lm=n\\l\le K,\ m\le X}}\mu(l)f(m/Y),\qquad b(n;v)=\sum_{\substack{lm=n\\l\le K,\ m\le Z}}\mu(l)(m/Z)^{\theta-1/2}m^{iv};$$
put both coefficients equal to zero outside that range. All factor indices are positive integers. These coefficients depend only on $\theta,P$ and the displayed cutoffs, not on $\psi,\beta,\gamma$ or the individual zero, and satisfy $|a(n)|,|b(n;v)|\le\tau(n)$, where $\tau(n)$ is the positive-divisor count. Uniformly for these data,
$$1\le C_{\alpha,\delta}\left(\left|\sum_{K<n\le N}a(n)\psi(n)n^{-\rho}\right|+\int_{\mathbb R}e^{-v^2/2}\left|\sum_{K<n\le N}b(n;v)\psi(n)n^{-\rho}\right|dv\right).$$
The integral is absolutely convergent improper Riemann. Positive-base powers use the real logarithm. In particular $KX\le P^{1/2+7\alpha/100}$. This Statement uses its specified cutoffs and $\theta\ge1/2+\delta$, with the displayed conductor-one exclusion.

## Statement references

[Montgomery–Vaughan, Sections28.2–28.4](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf). The log-Gaussian smoothing below is locally reconstructed; it is not attributed as the source's different smoothing kernel or its general Theorem28.3 parameter range.

## Facts & Assumptions

**Given:** Exactly the data in the Statement, with the two $\alpha$-dependent constants enlarged only as described below.

[F1] Characters are multiplicative and have modulus at most one. The Möbius function is zero on nonsquarefree integers and $(-1)^r$ on products of $r$ distinct primes, including $\mu(1)=1$; divisor sets and their prime-power decompositions are finite ([[def-dirichlet-character-modulo-q]], [[def-primitive-dirichlet-character-and-conductor]], [[lem-dirichlet-character-values]], [[def-number-theoretic-mobius-function]], [[def-divisor-counting-function]], [[thm-canonical-prime-factorisation]]).

[F2] On $\operatorname{Re}s>1$ the defining $L$-series converges absolutely. A primitive nonprincipal $L$-function is entire; conductor one is zeta with its unique simple pole at one. The completion $(d/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\psi)$ obeys the primitive FE with $\varepsilon_\psi=\tau(\psi)/(i^a\sqrt d)$, $|\varepsilon_\psi|=1$, including $d=1$, $\varepsilon=1$. Holomorphic identity determines continuation from the convergence half-plane ([[def-dirichlet-l-function]], [[thm-primitive-dirichlet-l-analytic-continuation]], [[thm-primitive-dirichlet-l-functional-equation]], [[def-completed-dirichlet-l-function]], [[def-gauss-sum-dirichlet-character]], [[thm-primitive-gauss-sum-norm]], [[thm-identity-theorem-holomorphic-functions]]).

[F3] Gamma has recurrence, meromorphic continuation, entire reciprocal with a real-coefficient product, and uniform sector Stirling asymptotics ([[thm-gamma-functional-equation]], [[thm-gamma-meromorphic-continuation]], [[thm-gamma-weierstrass-product]], [[thm-stirling-formula-gamma]]).

[F4] The Gaussian integral is $\int_{\mathbb R}e^{-x^2}dx=\sqrt\pi$, and with Fourier convention $\widehat h(\xi)=\int h(x)e^{-2\pi ix\xi}dx$, the transform of $e^{-\pi t x^2}$ is $t^{-1/2}e^{-\pi\xi^2/t}$ for $t>0$ ([[thm-gaussian-integral]], [[lem-fourier-transform-of-a-gaussian]]).

[F5] Rectangular residue integrals equal the sums of their enclosed residues, and piecewise-$C^1$ contour integrals equal their parametric Riemann integrals ([[thm-residue-theorem-null-homologous-cycle]], [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[F6] Continuous compact Riemann integrals are linear and obey FTC; finite point changes and subdivision at finitely many bounded jumps can be checked by upper/lower sums ([[thm-ftc-second-part]], [[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]]).

[F7] A continuous function on a compact rectangle is Riemann integrable; compact Riemann–Fubini applies when the sections are integrable, in particular when continuous ([[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-riemann-fubini-on-product-rectangles]]).

[F8] Exponential is entire with derivative itself and $|e^z|=e^{\operatorname{Re}z}$; $\log x=\int_1^xdt/t$ and $\sum n^{-p}$ converges for $p>1$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-logarithm-derivative-and-integral]], [[thm-p-series-real-exponents]]).

## Proof

1.1 All integral passages below are compact Riemann passages followed by explicit scalar tails. Order and linearity give $|\int h|\le\int|h|$ by rotating its complex value; finite and compact Cauchy–Schwarz follow by expanding a nonnegative quadratic, including its zero leading-coefficient case. Bounded functions continuous off finitely many integer breaks are integrable: subdivide at the breaks, isolate their values in intervals of arbitrarily small total length, and use upper-minus-lower sums. This proves invariance under finite point changes and finite Abel summation by FTC and telescoping on each intervening interval. No step-function integrand is treated as globally continuous. [F6, F8, construct, algebra]

1.2 The primitive FE in [F2] gives $$L(z,\psi)=A_\psi(z)L(1-z,\overline\psi),\qquad A_\psi(z)=\varepsilon_\psi(d/\pi)^{1/2-z}\frac{\Gamma((1-z+a)/2)}{\Gamma((z+a)/2)}.$$ The numerator poles are at $z=1+a+2j\ge1$, and reciprocal Gamma is entire, so $A_\psi$ is holomorphic on $\operatorname{Re}z<1$. On any FIXED strip $-M\le\sigma\le1/2$, $$|A_\psi(\sigma+it)|\le C_M[d(|t|+2)]^{1/2-\sigma}.\tag{2}$$ To see uniformity, use sector Stirling for both Gamma arguments at large height, applying recurrence first if the denominator has negative real part. Taking real parts of $(z-1/2)\operatorname{Log}z-z$ gives $|\Gamma((1-\sigma+a-it)/2)|\asymp_M(|t|/2)^{(a-\sigma)/2}e^{-\pi|t|/4}$ and $|1/\Gamma((\sigma+a+it)/2)|\asymp_M(|t|/2)^{(1-\sigma-a)/2}e^{\pi|t|/4}$. Their product has power $|t|^{1/2-\sigma}$ and the exponentials cancel. The compact remainder is uniformly bounded for the two parities, since the numerator has real part at least $1/4$ and the reciprocal denominator is entire. Only the displayed elementary conductor power is present. Constants may depend on $M$, never on $d,\psi,t$. [F2, F3, F8, algebra]

2.1 Put $g(w)=e^{w^2}/w$. The Gaussian integral and reflection $u\mapsto-u$ give $0\le f\le1$, $f(x)+f(1/x)=1$, and for $x\ge1$, $f(x)\le C\exp(- (\log x)^2/8)$: on $u\ge\log x$ use $u^2/4\ge u^2/8+(\log x)^2/8$ and integrate the remaining Gaussian. For $c>0$ we have $$f(x)=\frac1{2\pi i}\int_{(c)}g(w)x^{-w}dw.\tag{1}$$ Indeed set $w=c+iv$ and insert $(c+iv)^{-1}=\int_0^\infty e^{-(c+iv)y}dy$. First truncate to a compact $(v,y)$ rectangle; [F7] applies componentwise. The absolute majorant $e^{c^2-c\log x}e^{-v^2}e^{-cy}$ has product Gaussian/exponential tails, so both improper orders agree. The Fourier–Gaussian integral is $\sqrt\pi e^{-(2c-\log x-y)^2/4}$. Completing the square gives the remaining integrand $e^{-(\log x+y)^2/4}/(2\sqrt\pi)$, whose $y$ integral is exactly $f(x)$. This proves (1) even at $x=1$, without a Perron endpoint. The only pole of $g$ is zero, of residue one, and on every fixed pole-free real line its modulus is a fixed constant times $e^{-v^2}/|c+iv|$. [F4, F6, F7, F8, step 1.1, algebra]

2.2 The polynomial horizontal bounds needed for contour shifts require no global-order constant. For nonprincipal primitive $\psi$, its period sum vanishes (multiply the period by a unit on which it is not one), so $|\sum_{n\le x}\psi(n)|\le d$. Finite Abel summation gives $L(z,\psi)=z\int_1^\infty S_\psi(x)x^{-z-1}dx$ on $\operatorname{Re}z>0$, hence $|L(z,\psi)|\le4d|z|$ when $\operatorname{Re}z\ge1/4$. On each compact parameter set its differentiated tails are bounded by $Cd x^{-1-\delta}(1+\log^j x)$; $u=\log x$ and finite integration by parts prove convergence and holomorphy. For $d=1$ the same finite calculation with $\lfloor x\rfloor=x-\{x\}$ gives $\zeta(z)=z/(z-1)-z\int_1^\infty\{x\}x^{-z-1}dx$ on that half-plane, proving its residue one and the same polynomial bound away from its pole. On the remaining part of a fixed horizontal real strip, reflect using (2) and the positive-half-plane bound at $1-z$. At large heights no pole is met. Thus every subsequent finite strip has polynomial height growth, killed by $e^{-v^2}$. [F1, F2, F6, F8, step 1.1, step 1.2, algebra]

3.1 By (1) on the right line $\operatorname{Re}w=2$, $$F(s,Y):=\sum_{n\ge1}\psi(n)n^{-s}f(n/Y)=\frac1{2\pi i}\int_{(2)}L(s+w,\psi)Y^wg(w)dw.\tag{3}$$ At $s=\rho$ the series exchange is justified by finite truncation and the product tail $Y^2\sum_{n>B}n^{-\beta-2}\int|g(2+iv)|dv$, independent of the vertical cutoff; the vertical tail has the same scalar majorant. Shift to the left line $-2$, using rectangles of heights greater than $2(T+1)$. Their horizontal sides vanish by step 2.2 and Gaussian decay. The only enclosed poles are zero, with residue $L(\rho,\psi)=0$, and, only for $d=1$, $1-\rho$, with residue $Y^{1-\rho}g(1-\rho)$. The latter is distinct from zero and not on a side by the q1 exclusion; zeta's pole is not a zero. Apply the primitive FE on the LEFT line, where its reflected series has real part $3-\beta\ge2$, even at $\beta=1$. No Gamma pole is shifted separately. Define $E_\psi(\rho)=Y^{1-\rho}g(1-\rho)$ when $d=1$, and $E_\psi(\rho)=0$ otherwise; the latter case does not evaluate $g(1-\rho)$. We get $$F(\rho,Y)=E_\psi(\rho)+\sum_{m\ge1}\overline{\psi(m)}m^{\rho-1}h_\rho(mY),\qquad h_s(V)=\frac1{2\pi i}\int_{(-2)}A_\psi(s+w)V^wg(w)dw.\tag{4}$$ The reflected exchange is bounded by its convergent scalar $m^{-2}$ tail times a Gaussian polynomial integral from (2). Each finite contour side is linear with continuous integrand on its trace, so the parametric bridge applies. Positive zero multiplicity suffices to cancel the pole at zero. [F1, F2, F3, F5, F8, step 1.1, step 2.1, step 1.2, step 2.2, algebra]

4.1 Fix an integer $\lambda\ge3$ and move the $h$ contour from $-2$ to $-\lambda$. Here $\operatorname{Re}(s+w)\le-1$, so $A_\psi$ is holomorphic throughout, $g$ has no pole there, and (2) and $e^{-v^2}$ kill the horizontal sides. Since $d(T+4)\le P/C_{\alpha,\delta}$, (2) gives $|h_\rho(V)|\le C_\lambda P^{\lambda+1/2-\beta}V^{-\lambda}$. Its constant includes $e^{\lambda^2}$ and $\int e^{-v^2}(1+|v|)^{\lambda+1/2-\beta}dv$, uniformly for $1/2+\delta\le\beta\le1$; it is NOT asserted uniform in $\lambda$. Adjacent-interval comparison, absorbing its fixed factor into $C_\lambda$, now gives $$\sum_{m>Z}m^{\beta-1}|h_\rho(mY)|\le C_\lambda P^{1/2-\beta}(P/Y)^\lambda Z^{\beta-\lambda}=C_\lambda P^{1/2-\beta/2-\epsilon\lambda}.$$ Choose $\lambda\ge12/\epsilon$ ONCE for this $\alpha$. Since the exponent is at most $1/4-12<-10$, increasing $P_{\alpha,\delta}$ gives a uniform $P^{-10}$ dual-tail bound. No unbounded-strip Stirling assertion is used. [F3, F5, F8, step 1.2, step 3.1, algebra]

5.1 The main tail also satisfies $\sum_{n>X}n^{-\beta}f(n/Y)\le C_{\alpha,\delta} P^{-10}$. Use $n^{-\beta}\le1$, monotonicity of $f$, adjacent unit-interval comparison and $x=Ye^u$. Step 2.1 bounds the tail by $CY\int_{\epsilon\log P-O(1/Y)}^\infty e^{u-u^2/8}du$, which is at most $CY P^C e^{-\epsilon^2(\log P)^2/32}$ once $P$ is large. For fixed $\epsilon>0$ this beats every fixed negative power of $P$. If $d=1$, $|\gamma|>\log^2P$ gives $$|Y^{1-\rho}g(1-\rho)|=Y^{1-\beta}e^{(1-\beta)^2-\gamma^2}/|1-\rho|\le C_{\alpha,\delta} P^{-10},$$ since $|1-\rho|\ge|\gamma|\ge1$. Increase $P_{\alpha,\delta}$ to absorb the constants. These errors are not claimed small for the excluded bounded-height q1 zeros. [F6, F8, step 2.1, step 3.1, step 4.1, algebra]

5.2 Retain the finite sum $J_s=\sum_{m\le Z}\overline{\psi(m)}m^{s-1}h_s(mY)$ in (4). Move its line to $c=\theta+1/2-2\beta\in[-1+\delta,-\delta]$. There is no $g$ pole between these negative lines, and $\operatorname{Re}(s+w)\le\theta+1/2-\beta\le1/2$ keeps $A_\psi$ holomorphic. The finite sum and (2) have Gaussian horizontal tails. Finite substitution $r\mapsto-r$ in the Gauss sum proves $\tau(\overline\psi)=\psi(-1)\overline{\tau(\psi)}$, so $\varepsilon_{\overline\psi}=\overline{\varepsilon_\psi}$, including the odd-parity factor; for conductor one both are one. Gamma conjugation follows from its real reciprocal product. Consequently $A_{\overline\psi}(z)=\overline{A_\psi(\overline z)}$. Conjugate the finite dual integral, reverse its height variable and set $w'=w+2\beta-1$. The exact identity is $$\overline{J_s}=\frac1{2\pi i}\int_{(\theta-1/2)}\left(\sum_{m\le Z}\psi(m)m^{-s+w'}\right)A_{\overline\psi}(1-s+w')Y^{1-2\beta+w'}g(1-2\beta+w')dw'.\tag{5}$$ Indeed $\overline s+w-1=-s+w'$ and $\overline s+w=1-s+w'$. This is the CONJUGATE of $J_s$, not an unchanged complex identity for $J_s$ itself. [F1, F2, F3, F5, F8, step 1.2, step 3.1, step 4.1, construct, algebra]

6.1 On $w'=\theta-1/2+iv$, the real part of $1-s+w'$ is $\theta+1/2-\beta\in[\theta-1/2,1/2]$. Formula (2) therefore gives the CORRECT conductor factor $CP^{\beta-\theta}(1+|v|)^{\beta-\theta}$. The real part of $1-2\beta+w'$ lies in $[\theta-3/2,1/2-\theta]\subset[-1+\delta,-\delta]$, away from $g$'s pole. Combining the powers gives $$|A_{\overline\psi}(1-s+w')Y^{1-2\beta+w'}g(1-2\beta+w')|\le C_\delta Y^{1/2-\theta}(Y^2/P)^{\theta-\beta}e^{-v^2/2}\le C_\delta Y^{1/2-\theta}e^{-v^2/2}.\tag{6}$$ The fixed polynomial in $v$ is absorbed into half the Gaussian; the last inequality uses $Y^2/P=P^{2\epsilon}\ge1$ and $\beta\ge\theta$. This calculation retains the sign of the conductor exponent rather than replacing it by its reciprocal. [F3, F8, step 2.1, step 1.2, step 5.2, algebra]

6.2 Put $M(s,\psi)=\sum_{l\le K}\mu(l)\psi(l)l^{-s}$, with $|M(\rho)|\le K$. The finite prime-subset expansion gives $\sum_{l\mid n}\mu(l)=\mathbf1_{n=1}$. Multiply the truncated (4) by $M(\rho)$; steps 4.1 and step 5.1 leave error at most $C_{\alpha,\delta} KP^{-10}\le P^{-8}$ after increasing the threshold. The direct coefficient is $a_{\rm full}(n)=\sum_{lm=n,l\le K,m\le X}\mu(l)f(m/Y)$, of modulus at most $\tau(n)$. For $n\le K$ all $m=n/l\le K<X$, and $K/Y\le P^{-1/2+\kappa-\epsilon}$. Gaussian symmetry/tails in step 2.1 therefore give $f(m/Y)=1+O_\alpha(P^{-10})$ uniformly there. Thus $a_{\rm full}(n)=\mathbf1_{n=1}+O_\alpha(\tau(n)P^{-10})$ on these indices. The crude finite bound $\sum_{n\le K}\tau(n)\le K^2$ makes their total error at most $C_{\alpha,\delta} K^2P^{-10}\le P^{-8}$. The remaining direct coefficients are exactly the Statement's $a(n)$. [F1, F8, step 2.1, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 In (5), $m^{w'}=Z^{\theta-1/2}(m/Z)^{\theta-1/2}m^{iv}$. Multiplication by the UNCONJUGATED $M(\rho)$ is legitimate for the modulus bound since $|M(\rho)J_\rho|=|M(\rho)\overline{J_\rho}|$. It produces coefficients $b_{\rm full}(n;v)=\sum_{lm=n,l\le K,m\le Z}\mu(l)(m/Z)^{\theta-1/2}m^{iv}$, common to all zeros and characters, with modulus at most $\tau(n)$. Formula (6) supplies outside factor $Y^{1/2-\theta}Z^{\theta-1/2}=(Z/Y)^{\theta-1/2}\le1$. To remove $n\le K$, retain the UNNORMALIZED outside factor: their absolute contribution, including the finite Gaussian mass, is at most $$C_\delta Y^{1/2-\theta}\sum_{n\le K}\tau(n)n^{\theta-1/2-\beta}\le C_\delta Y^{-\delta}\sum_{n\le K}\tau(n)n^{-1/2}\le C_\delta Y^{-\delta}\sqrt K\log(2K).$$ For the last bound count ordered pairs $ab\le K$ and sum $b^{-1/2}\le2\sqrt{K/a}$ first, then $\sum_{a\le K}a^{-1}\le1+\log K$. Since $\alpha\le10\delta$, this tends to zero at least as $P^{-\delta/2+\alpha/40}\log(2P)\le P^{-\delta/4}\log(2P)$; enlarge $P_{\alpha,\delta}$ to make it at most $1/8$. This is a small-constant absorption, not a claimed $P^{-10}$ bound. The retained dual coefficients are precisely the Statement's $b(n;v)$, supported below $KZ\le KX$. [F1, F4, F8, step 1.1, step 5.2, step 6.1, step 6.2, algebra]

8.1 Isolate the direct constant one in the mollified zero identity from step 6.2. The two truncations, principal residue, direct small-index errors and dual small-index term have total modulus less than $1/2$ once $P_{\alpha,\delta}$ is large enough. Take absolute values and apply steps 6.1 and 7.1 to obtain the claimed inequality, increasing $C_{\alpha,\delta}$ if necessary. The same constant may be used in $P=C_{\alpha,\delta} R(T+4)$ by first choosing it to dominate the finitely many required bounds, then choosing its threshold; no uniformity in $\lambda$ is asserted. All retained coefficients are independent of $\psi,\beta,\gamma$, as shown by their explicit formulas; $|a|,|b|\le\tau(n)$ follows from $0\le f\le1$, $m\le Z$ and $\theta-1/2\ge0$. Their integer support is exactly within $K<n\le\lfloor KX\rfloor$, with missing products assigned zero, and $KX\le P^{1/2+\kappa+2\epsilon}=P^{1/2+7\alpha/100}$. Each dual coefficient is continuous in $v$ and uniformly bounded by the finite divisor count, so its weighted integral has an explicit Gaussian absolute tail. Empty support sums are permitted. The zero's multiplicity never entered except for cancelling its positive-order zero in step 3.1. This proves every public case without a choice or measure-space input. [F1, F4, F6, F8, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 6.2, step 7.1, algebra] ∎

