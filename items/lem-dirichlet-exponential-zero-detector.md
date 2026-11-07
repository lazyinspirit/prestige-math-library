---
dependency_level: 1
id: lem-dirichlet-exponential-zero-detector
kind: lemma
title: An exponential zero detector for primitive Dirichlet L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: None. Finite sums, compact contour and Riemann integrals, and explicit
  absolute tails for improper Riemann integrals.
deps:
- def-dirichlet-character-modulo-q
- def-primitive-dirichlet-character-and-conductor
- def-principal-dirichlet-character
- def-dirichlet-l-function
- def-number-theoretic-mobius-function
- def-divisor-counting-function
- thm-canonical-prime-factorisation
- lem-dirichlet-character-values
- thm-dirichlet-character-orthogonality
- lem-density-mellin-inversion-for-exponential-kernel
- thm-gamma-functional-equation
- thm-gamma-meromorphic-continuation
- thm-stirling-formula-gamma
- thm-residue-theorem-null-homologous-cycle
- thm-identity-theorem-holomorphic-functions
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-p-series-real-exponents
- thm-logarithm-derivative-and-integral
- thm-complex-exponential-is-entire-with-derivative-itself
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-riemann-stieltjes-and-parametric-contour-integrals-agree
justified_by: []
sources:
  references:
  - title: H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III
    url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
    locator: Section28.4.1, exponential Mellin detector in the proof of Theorem28.6,
      printed pp.193–196. Adapted with explicit near-critical Gamma logarithm, conductor-one
      residue and finite Riemann limits.
---

## Statement

There are absolute constants $H_0\ge\exp(64)$ and $C>0$ with the following property. Let $H\ge H_0$, $H\le Y\le H^2$, let $K$ be an integer with $1\le K\le H$, and let $\psi$ be a primitive Dirichlet character of conductor $d\le H$, including $d=1$. Put $L_H=\log H$ and
$$M(s,\psi)=\sum_{l\le K}\mu(l)\psi(l)l^{-s},\qquad a_K(n)=\sum_{l\mid n,\ l\le K}\mu(l),\qquad Z=Y L_H^2.$$
Let $\rho=\beta+i\gamma$ be a zero of the analytic continuation of $L(s,\psi)$, with
$$\tfrac12+L_H^{-1}\le\beta\le1,\qquad |\gamma|\le H.$$
If $d=1$, suppose additionally that $|\gamma|>L_H^2$. Then
$$1\le C\left(\left|\sum_{K<n\le Z}a_K(n)\psi(n)n^{-\rho}e^{-n/Y}\right|+L_H Y^{1/2-\beta}\int_{\mathbb R}|L(1/2+i\gamma+iv,\psi)M(1/2+i\gamma+iv,\psi)|e^{-|v|}\,dv\right).$$
The integral is an absolutely convergent improper Riemann integral; all sums use integer indices and include their displayed endpoints. The constant is independent of $H,Y,K,d,\psi,\rho$. Here $\mu$ is the number-theoretic Möbius function and $n^{-s}=\exp(-s\log n)$.

## Statement references

[Montgomery–Vaughan, Section28.4.1](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf). The explicit factor $L_H$ records Gamma's growth as $\beta$ approaches $1/2$; the conductor-one pole is retained in the proof before its stated exclusion is used.

## Facts & Assumptions

**Given:** Exactly the parameters, character and zero in the Statement.

[F1] Characters are periodic, multiplicative, bounded in modulus by one, and nonprincipal characters have period sum zero. A primitive character with conductor greater than one is nonprincipal; the conductor-one character is identically one. On $\operatorname{Re}s>1$ the defining $L$-series is $\sum\psi(n)n^{-s}$ ([[def-dirichlet-character-modulo-q]], [[def-primitive-dirichlet-character-and-conductor]], [[def-principal-dirichlet-character]], [[lem-dirichlet-character-values]], [[thm-dirichlet-character-orthogonality]], [[def-dirichlet-l-function]]).

[F2] The Möbius function is zero on nonsquarefree integers and equals $(-1)^r$ on a product of $r$ distinct primes, including $\mu(1)=1$. Canonical prime factorisation and the divisor-counting function give finite divisor lists ([[def-number-theoretic-mobius-function]], [[thm-canonical-prime-factorisation]], [[def-divisor-counting-function]]).

[F3] For $x,c>0$, $e^{-x}=(2\pi i)^{-1}\int_{c-i\infty}^{c+i\infty}\Gamma(w)x^{-w}\,dw$, absolutely ([[lem-density-mellin-inversion-for-exponential-kernel]]).

[F4] Gamma is meromorphic with simple poles at $0,-1,-2,\ldots$, residue one at zero, and $\Gamma(z+1)=z\Gamma(z)$. Uniformly on each fixed bounded real strip, its large-height modulus is at most $C(1+|v|)^A e^{-\pi|v|/2}$ ([[thm-gamma-functional-equation]], [[thm-gamma-meromorphic-continuation]], [[thm-stirling-formula-gamma]]).

[F5] On a rectangle with no boundary pole, the contour integral of a meromorphic function is $2\pi i$ times its enclosed residues. The contour integral equals its finite piecewise-$C^1$ parametric Riemann integrals ([[thm-residue-theorem-null-homologous-cycle]], [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[F6] Holomorphic functions agreeing on an open subset of a connected domain agree throughout that domain ([[thm-identity-theorem-holomorphic-functions]]).

[F7] Continuous functions on compact intervals are Riemann integrable, their integral is linear, and the integral of a continuous derivative is the endpoint difference. For $p>1$, $\sum n^{-p}$ converges; $\log x=\int_1^xdt/t$ ([[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]], [[thm-ftc-second-part]], [[thm-p-series-real-exponents]], [[thm-logarithm-derivative-and-integral]]).

[F8] The complex exponential is entire with derivative itself and $|\exp z|=\exp(\operatorname{Re}z)$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Proof technique:** direct, with finite rectangles and explicit Riemann tails.

1.1 By the finite prime-subset expansion, $\sum_{l\mid n}\mu(l)=\prod_{p\mid n}(1-1)$ is zero for $n>1$ and is one for $n=1$. Consequently $a_K(1)=1$, $a_K(n)=0$ for $2\le n\le K$, and $|a_K(n)|\le d(n)\le n$, where $d(n)$ denotes the number of positive divisors of $n$. Multiplying the absolutely convergent defining series by finite $M$ gives $L(s,\psi)M(s,\psi)=\sum_{n\ge1}a_K(n)\psi(n)n^{-s}$ for $\operatorname{Re}s>1$. Absolute convergence here follows, for example, from $d(n)=\sum_{ab=n}1$ and $(\sum n^{-u})^2<\infty$ for real $u>1$. [given, F1, F2, F7, algebra]

1.2 All real integrals used below are compact Riemann integrals followed by explicit tails. A bounded function continuous away from finitely many integer breakpoints is Riemann integrable: subdivide at the breakpoints and isolate them in intervals of arbitrarily small total length. Its finite point values do not change the integral. Linearity, order and $|\int f|\le\int|f|$ follow from upper and lower sums; for complex $f$, rotate its integral to the positive real axis. Finite Abel summation follows by applying the endpoint identity separately on each interval between consecutive integers and telescoping. Thus no globally continuous step-function integrand or measure-theoretic premise is assumed. [F7, F8, construct]

1.3 To extract the bounded-real-strip estimate from the literal sector formula in [F4], write $z=u+iv$, with $u$ in a fixed bounded interval and $|v|$ large. This lies in a fixed closed sector away from the negative real axis, and $\operatorname{Re}((z-1/2)\operatorname{Log}z-z)=(u-1/2)\log|z|-v\arg z-u$. Uniformly on that interval, $\arg(u+iv)=\operatorname{sgn}(v)\pi/2-u/v+O(|v|^{-3})$, so the last expression is $(u-1/2)\log|v|-\pi|v|/2+O(1)$. Taking moduli in the sector formula proves the stated polynomial-times-exponential strip bound. If $a=\beta-1/2\in[1/L_H,1/2]$ and $|v|\le1$, recurrence gives $\Gamma(-a+iv)=\Gamma(1-a+iv)/(-a+iv)$. The numerator is bounded on the compact pole-free rectangle $1/2\le\operatorname{Re}z\le1$, $|\operatorname{Im}z|\le1$, and the denominator has modulus at least $a\ge1/L_H$. For $|v|\ge1$, bounded-strip Stirling and the remaining compact annulus imply $|\Gamma(-a+iv)|\le C e^{-|v|}$. Increasing $C$ on $|v|\le1$ proves the single uniform bound $|\Gamma(1/2-\beta+iv)|\le C L_H e^{-|v|}$. [F4, given, algebra]

2.1 For $d>1$ put $A_\psi(x)=\sum_{n\le x}\psi(n)$. Complete periods sum to zero, so $|A_\psi(x)|\le d$. Finite Abel summation, with boundary remainder at $R$ bounded by $dR^{-\operatorname{Re}z}$, gives $L(z,\psi)=z\int_1^\infty A_\psi(x)x^{-z-1}dx$ on $\operatorname{Re}z>1$. The same integral converges on $\operatorname{Re}z>0$ and has $|L(z,\psi)|\le d|z|/\operatorname{Re}z$. On a compact subset of this half-plane every fixed differentiated integrand is bounded by $C d x^{-1-\epsilon}(1+(\log x)^j)$, with $\epsilon>0$; these tails converge by $u=\log x$ and finite integration by parts. Holomorphy can be checked directly: on a compact disk the derivative integrands converge uniformly in their tails, and the finite-interval integral difference quotient equals the integral of the difference quotient; the exponential power-series remainder bounds that quotient uniformly. Integrating its derivative along the segment between two nearby parameters and taking the explicit tail limit proves differentiability. Therefore [F6] identifies this holomorphic integral with the continuation used in the Statement. [F1, F6, F7, F8, step 1.2, algebra]

2.2 Apply [F3] to $x=n/Y,c=2$. On $\operatorname{Re}w=2$, the absolute coefficient sum is at most $\sum n^{-\beta-1}\le\sum n^{-3/2}$. First truncate both the $n$ sum and the vertical integral; the finite sum commutes with integration by linearity. The omitted $n$ tail is bounded by $Y^2\sum_{n>R}n^{-\beta-1}\int_{\mathbb R}|\Gamma(2+iv)|dv$, independently of the vertical cutoff. This tends to zero, and the Gamma integral is finite by its exponential bound. The vertical tails tend to zero by the same majorant. Hence $$\sum_{n\ge1}a_K(n)\psi(n)n^{-\rho}e^{-n/Y}=\frac1{2\pi i}\int_{(2)}L(\rho+w,\psi)M(\rho+w,\psi)Y^w\Gamma(w)\,dw.$$ This is a proof of the exchange by two scalar absolute-tail estimates. [F3, F4, F7, F8, step 1.1, step 1.2, algebra]

2.3 Since $Z=YL_H^2$, $|a_K(n)|n^{-\beta}\le n^{1/2}$ bounds the omitted $n>Z$ terms by $\sum_{n>Z}n^{1/2}e^{-n/Y}$. The summand is decreasing beyond $Y/2$, so comparison with its adjacent unit interval bounds this sum by $C Y^{3/2}(1+L_H^2)^2e^{-L_H^2}$. Indeed substitute $x=Yu$, use $u^{1/2}\le1+u$ for $u\ge0$, and integrate $e^{-u}(1+u)$ explicitly; changing the lower endpoint by at most $1/Y$ changes only an absolute factor. Since $Y\le H^2$, this is at most $H^{-2}$ once $H_0$ is sufficiently large. These inequalities are uniform for the entire public range $1\le K\le H$, not just $K=\lfloor H\rfloor$. [F7, F8, step 1.1, step 1.2, given, algebra]

3.1 For $d=1$, use $A(x)=\lfloor x\rfloor=x-\{x\}$ in the same finite identity. It gives $\zeta(z)=z/(z-1)-z\int_1^\infty\{x\}x^{-z-1}dx$ on $\operatorname{Re}z>0$, with its simple residue one at $z=1$. The fractional-part integral is holomorphic by the compact derivative/tail argument of step 2.1, since $0\le\{x\}<1$. This also supplies polynomial growth for $\zeta(z)$ on $\operatorname{Re}z\ge1/2$ away from its pole. For either conductor, $|M(z,\psi)|\le\sum_{l\le K}l^{-1/2}\le2\sqrt K$ on that half-plane, by comparison with $\int_0^Kx^{-1/2}dx$. [F1, F6, F7, step 1.2, step 2.1, algebra]

4.1 Move the finite rectangle's left side to $u=1/2-\beta\in[-1/2,-1/L_H]$. On horizontal sides of heights $V>2(H+1)$, $\operatorname{Re}(\rho+w)\ge1/2$ and its imaginary part stays away from the possible zeta pole. steps 2.1 and step 3.1 bound the $L$ factor polynomially in $V$; $M$ is bounded by $2\sqrt K$ and $|Y^w|\le Y^2$. Gamma's bounded-strip exponential estimate makes both horizontal integrals tend to zero along integer $V\to\infty$. The two vertical integrals converge absolutely, using the same bounds at large height and continuity on their compact remaining segments. On the left side $L(\rho+w)$ has real part $1/2$, so no zeta pole lies there. [F4, F8, step 2.1, step 3.1, step 2.2, algebra]

5.1 Only the Gamma pole at $w=0$ can occur in this strip. It is removable in the product, since $L(\rho+w)$ has a zero of positive order there; no assumption of simplicity is used. When $d=1$ there is additionally the simple pole $w=1-\rho$, with residue $M(1,\psi)Y^{1-\rho}\Gamma(1-\rho)$. This is not $w=0$, since the pole of zeta at one is not a zero; the conductor-one exclusion also ensures $\gamma\ne0$. Every rectangle side is linear and piecewise-$C^1$, with continuous integrand on its trace. Thus the parametric bridge in [F5] applies to all four sides. The rectangular residue identity and step 4.1 therefore give $$\sum_{n\ge1}a_K(n)\psi(n)n^{-\rho}e^{-n/Y}=\mathbf1_{d=1}M(1,\psi)Y^{1-\rho}\Gamma(1-\rho)+\frac{Y^{1/2-\beta}}{2\pi}\int_{\mathbb R}L(1/2+i\gamma+iv,\psi)M(1/2+i\gamma+iv,\psi)Y^{iv}\Gamma(1/2-\beta+iv)\,dv.$$ [F4, F5, F8, step 3.1, step 2.2, step 4.1, algebra]

6.1 If $d=1$, $|M(1,\psi)|\le1+\log K\le1+L_H$ and $Y^{1-\beta}\le H$, while $|\gamma|>L_H^2$. Bounded-strip Stirling for $0\le1-\beta\le1/2$ gives $|\Gamma(1-\rho)|\le C(1+|\gamma|)^A e^{-\pi|\gamma|/2}$. With $|\gamma|\le H$, or directly maximizing the polynomial against the exponential, the residue in step 5.1 is at most $H^{-2}$ after enlarging $H_0$. Thus the public conductor-one exclusion is used precisely to bound this additional residue; it is not silently omitted. [F4, F7, step 3.1, given, algebra]

7.1 In step 5.1 isolate the $n=1$ term $e^{-1/Y}\ge1-H^{-1}$ and use the vanishing for $2\le n\le K$. Discard the two errors bounded by $H^{-2}$ in steps 2.3 and step 6.1 and enlarge the absolute constant. Apply step 1.3 and $|Y^{iv}|=1$ to obtain the stated inequality. The integral there is absolutely convergent: on its tails steps 2.1 and step 3.1 give polynomial growth in $|v|$, $M$ is bounded, and $e^{-|v|}$ dominates that polynomial; on compact intervals both $L$ on the critical line and $M$ are continuous. This completes every public parameter case, including empty polynomial sums and any positive zero multiplicity. [F7, F8, step 1.1, step 5.1, step 1.3, step 2.3, step 6.1, algebra] ∎

