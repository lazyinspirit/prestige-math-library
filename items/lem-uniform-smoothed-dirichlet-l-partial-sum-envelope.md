---
dependency_level: 2
id: lem-uniform-smoothed-dirichlet-l-partial-sum-envelope
kind: lemma
title: Uniform smoothed partial-sum envelope for primitive Dirichlet L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: None. Finite sums, compact piecewise-continuous Riemann integrals and explicit Gaussian or exponential improper tails suffice.
deps:
  - lem-density-primitive-dirichlet-theta-integral-representation
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-principal-dirichlet-character
  - def-induced-dirichlet-character
  - lem-dirichlet-character-values
  - thm-primitive-gauss-sum-norm
  - thm-twisted-poisson-summation
  - lem-fourier-transform-of-a-gaussian
  - def-schwartz-space-and-its-seminorms
  - thm-exponential-beats-every-polynomial
  - def-euler-gamma-function
  - lem-gamma-integral-converges-locally-uniformly
  - cor-gamma-function-has-no-zeros
  - thm-stirling-formula-gamma
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-identity-theorem-holomorphic-functions
  - cor-cauchy-theorem-convex-domain
  - thm-path-independence-and-complex-primitive-criterion
  - thm-riemann-stieltjes-and-parametric-contour-integrals-agree
  - thm-integration-by-parts-with-interior-derivatives
  - thm-ftc-second-part
  - lem-continuous-functions-riemann-integrable
  - lem-riemann-integral-linearity
  - thm-riemann-fubini-on-product-rectangles
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-logarithm-derivative-and-integral
  - thm-tangent-cotangent-secant-cosecant-derivatives-and-periods
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
justified_by: []
sources:
  references:
    - title: H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory III
      url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
      locator: Chapter25, equations25.27–25.38, Lemma25.3 and Theorem25.4. Adapted with explicit multiplier, conjugate character, parity and conductor-one poles; the annular Gamma bound is reconstructed below.
---

## Statement

Let $\chi$ be primitive of conductor $d\ge1$, with $L(s,\chi)=\zeta(s)$ for the principal character of conductor $1$. Let $s=\sigma+it$, $1/4\le\sigma\le3/4$, $t\in\mathbb R$, and $\tau=|t|+4$. For $u,r>0$ set
$$A(s,\chi;u)=\sum_{1\le n\le u}\chi(n)n^{-s},\qquad V(u,r)=\exp(-u^2/(4r))(u^2/r)^{1/8}/u.$$
Positive-base powers use the real logarithm. There is an absolute constant $C>0$ such that
$$|L(s,\chi)|\le C\int_0^\infty\left[|A(s,\chi;u)|+(d\tau)^{1/2-\sigma}|A(1-s,\overline\chi;u)|\right]V(u,d\tau)\,du+C\mathbf1_{d=1}\tau^{-(1+\sigma)/2}.\tag{1}$$
These are absolutely convergent improper Riemann integrals, and
$$\int_0^\infty V(u,r)\,du=\tfrac12\,4^{1/8}\Gamma(1/8)\qquad(r>0).\tag{2}$$
In particular, if $|\sigma-1/2|\log(d\tau)\le1$, then
$$|L(s,\chi)|^4\le C\int_0^\infty\left[|A(s,\chi;u)|^4+|A(1-s,\overline\chi;u)|^4\right]V(u,d\tau)\,du+C\mathbf1_{d=1}\tau^{-5/2}.\tag{3}$$
The constants are uniform in the conductor, character, both parities, both signs of $t$ and bounded heights, including $t=0$. No choice axiom is assumed.

## Statement references

[[def-dirichlet-character-modulo-q]]

[[def-primitive-dirichlet-character-and-conductor]]

[Montgomery–Vaughan, Chapter25, smoothing and partial sums](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The character, conductor and strip in the Statement. Throughout, complex powers on the right half-plane use the principal logarithm.

[F1] The actual primitive nonprincipal theta-integral identity is $2\Lambda(s,\chi)=F_{\chi,p}(1)+\epsilon(\chi)F_{\overline\chi,h}(1)$, where $p=(s+a)/2$, $h=(1-s+a)/2$, $\Lambda=(d/\pi)^p\Gamma(p)L(s,\chi)$, $F_{\chi,p}(x)=\int_x^\infty\Theta_\chi(v)v^{p-1}dv$ and $\Theta_\chi(v)=\sum_{n\ne0}\chi(n)n^a e^{-\pi n^2v/d}$. It holds for all $s$, with absolute entire tails ([[lem-density-primitive-dirichlet-theta-integral-representation]]). The needed transformation is rederived locally below.

[F2] Characters have modulus at most one, are completely multiplicative and have parity $\chi(-1)=(-1)^a$, $a\in\{0,1\}$. The principal character modulo $d>1$ is induced from modulus1, hence is not primitive. The primitive root number $\epsilon(\chi)=\tau(\chi)/(i^a\sqrt d)$ has modulus1 ([[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]], [[def-primitive-dirichlet-character-and-conductor]], [[def-principal-dirichlet-character]], [[def-induced-dirichlet-character]], [[thm-primitive-gauss-sum-norm]]).

[F3] Twisted Poisson holds for primitive characters and Schwartz functions, including modulus1; the Fourier transform of $e^{-\pi v x^2}$ is $v^{-1/2}e^{-\pi\xi^2/v}$. Polynomial multiples of a Gaussian are Schwartz: repeated derivatives are polynomial multiples and exponential decay beats every polynomial ([[thm-twisted-poisson-summation]], [[lem-fourier-transform-of-a-gaussian]], [[def-schwartz-space-and-its-seminorms]], [[thm-exponential-beats-every-polynomial]]).

[F4] Gamma is the locally uniformly convergent Euler integral on $\operatorname{Re}z>0$, has no zeros there, and satisfies uniform sectorial Stirling on $|\arg z|\le\pi-\delta$ ([[def-euler-gamma-function]], [[lem-gamma-integral-converges-locally-uniformly]], [[cor-gamma-function-has-no-zeros]], [[thm-stirling-formula-gamma]]).

[F5] Zeta has its choice-free meromorphic continuation to $\operatorname{Re}s>0$ with a simple residue-one pole at1, given by the fractional-part integral ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[F6] The principal logarithm is holomorphic with derivative $1/z$ on the slit plane. Locally uniform limits of holomorphic functions are holomorphic with their derivative limits; the identity theorem applies on a connected domain. Holomorphic integrands on a convex complex domain have zero closed-contour integrals and primitives, and compact piecewise-$C^1$ contour integrals agree with their parametric Riemann integrals ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]], [[thm-weierstrass-convergence-holomorphic-functions]], [[thm-identity-theorem-holomorphic-functions]], [[cor-cauchy-theorem-convex-domain]], [[thm-path-independence-and-complex-primitive-criterion]], [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[F7] Compact continuous factors with Riemann-integrable interior derivatives satisfy integration by parts; an integrable derivative has integral equal to its endpoint difference ([[thm-integration-by-parts-with-interior-derivatives]], [[thm-ftc-second-part]]). Apply real formulas to real and imaginary components.

[F8] Continuous compact functions are Riemann integrable, with linearity, monotonicity and interval additivity. Continuous compact-rectangle functions are Riemann integrable and their iterated Riemann integrals agree ([[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]], [[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-riemann-fubini-on-product-rectangles]]).

[F9] The exponential has derivative itself and $|e^{x+iy}|=e^x$; $\log'=1/x$. On its domain $\tan'=\sec^2=1+\tan^2$; consequently $\theta\le\tan\theta$ for $0\le\theta<\pi/2$, by FTC ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-logarithm-derivative-and-integral]], [[thm-tangent-cotangent-secant-cosecant-derivatives-and-periods]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

## Proof

1.1 We use only finite or explicitly controlled improper Riemann integrals. A bounded function continuous except at finitely many breakpoints is integrable on a compact interval: subdivide at the breakpoints and isolate them in intervals of arbitrarily small total length. Its integral is the sum of the integrals of its continuous pieces; changing finitely many values has no effect. Linearity and order extend by this finite subdivision. Rotating a complex integral to the positive real axis gives $|\int f|\le\int|f|$. Integrating $(f-\lambda g)^2\ge0$ and using its discriminant proves Cauchy–Schwarz for real piecewise-continuous functions; if its quadratic coefficient is zero the linear coefficient is zero too. The same argument gives finite-sum Cauchy–Schwarz. These facts include positive continuous weights multiplied by finite step functions. Every improper passage below will have a displayed Gaussian, exponential or integrable power tail. [F8, algebra]

1.2 For $d>1$, [F2] makes the primitive character nonprincipal, so [F1] applies. To derive its theta transformation, apply [F3] to $x^a e^{-\pi vx^2/d}$. For $a=0$ its transform is $\sqrt{d/v}e^{-\pi d\xi^2/v}$. For $a=1$, the Gaussian derivative and [F7] on finite intervals, followed by Gaussian tails, give $-i(d\xi/v)\sqrt{d/v}e^{-\pi d\xi^2/v}$. Substitution at $\xi=n/d$ into twisted Poisson gives $\Theta_\chi(v)=\epsilon(\chi)v^{-a-1/2}\Theta_{\overline\chi}(1/v)$ in both cases; zero frequencies vanish since $\chi(0)=0$ or the odd factor is zero. The theta series extend holomorphically to $\operatorname{Re}z>0$: on each compact subset, every fixed derivative is bounded by a convergent $\sum n^B e^{-c n^2}$. The real transformation extends by [F6]. Put $p=(s+a)/2$, $h=(1-s+a)/2$. Define $F_{\chi,p}(z)$ by a finite path from $z$ to1 followed by its real tail. Path independence follows from [F6]. It equals the outward-ray integral: the closing arc at radius $M$ has bound $C M^B e^{-cM\cos|\arg z|/d}\to0$ for each fixed $z$. Since $p+h=a+1/2$, differentiation gives $$\frac d{dz}\left[F_{\chi,p}(z)+\epsilon(\chi)F_{\overline\chi,h}(1/z)\right]=-\Theta_\chi(z)z^{p-1}+\epsilon(\chi)\Theta_{\overline\chi}(1/z)z^{-h-1}=0.$$ At $z=1$ its value is $2\Lambda(s,\chi)$ by [F1]. Thus the split identity holds without any division at a Gamma pole. [F1, F2, F3, F6, F7, F8, F9, algebra]

2.1 First derive the conductor-one theta identity locally. Apply [F3] with the modulus-one character to obtain $\theta(v)=v^{-1/2}\theta(1/v)$, where $\theta(v)=\sum_{n\in\mathbb Z}e^{-\pi n^2v}$. For $v\ge1$, separating the first exponential and summing a geometric majorant gives $|\theta(v)-1|\le Ce^{-\pi v}$; transformation gives $\theta(v)\le Cv^{-1/2}$ for $0<v\le1$. Initially $\operatorname{Re}s>1$, finite theta-sum integration using [F4] gives $$\pi^{-s/2}\Gamma(s/2)\zeta(s)=\tfrac12\int_0^\infty(\theta(v)-1)v^{s/2-1}dv.$$ To justify the series limit, its absolute integrated tail is at most $C_\sigma\sum_{n>M}n^{-\sigma}\to0$: first pass to the theta limit uniformly on a compact $v$ interval, then use the integrable bounds $v^{(\sigma-1)/2-1}$ near0 and $e^{-\pi v}v^B$ at infinity. Splitting at1 and substituting $v=1/u$ below1 gives $$\Lambda(s)=\frac1{s(s-1)}+\tfrac12\int_1^\infty(\theta(v)-1)\left[v^{s/2-1}+v^{(1-s)/2-1}\right]dv.\tag{4}$$ The remaining integral and its fixed $s$ derivatives have compact-$s$ uniform exponential tails, hence are entire by [F6] and finite Riemann sums. By [F5] and the identity theorem this identifies the completion on $\operatorname{Re}s>0$, away from1. Its rational correction has residues $-1$ at0 and $+1$ at1; no zero-frequency term is dropped. [F3, F4, F5, F6, F8, F9, step 1.1, algebra]

3.1 For $d=1$ use $p=s/2$, $h=(1-s)/2$ and $F_c(z)=\int_z^\infty(\theta(v)-1)v^{c-1}dv$, justified by the same compact Gaussian bounds and ray deformation. The transform in step 2.1 shows that the derivative in $z$ of $$\tfrac12F_p(z)+\tfrac12F_h(1/z)+\frac{z^{(s-1)/2}}{s-1}-\frac{z^{s/2}}s$$ is zero: the derivatives of the two rational powers cancel the zero-frequency leftovers. At1 it equals (4). This proves the conductor-one split with both polar terms for every $z$ in the right half-plane and our strip. [F5, F6, F8, F9, step 2.1, step 1.2, algebra]

4.1 For $\operatorname{Re}g>0$ and $\operatorname{Re}x>0$, define $\Gamma(g,x)=\int_x^\infty e^{-v}v^{g-1}dv$ along an outward ray. Compact Cauchy deformation justifies this definition and its endpoint derivative $-e^{-x}x^{g-1}$; the large connecting arc has bound $CM^B e^{-M\cos|\arg x|}$, and the small arc for the full integral from0 has bound $C\varepsilon^{\operatorname{Re}g}$. Termwise Gaussian integration in step 1.2 therefore gives $$L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}\frac{\Gamma(p,\pi n^2z/d)}{\Gamma(p)}+\Delta(s,\chi)\sum_{n\ge1}\overline\chi(n)n^{s-1}\frac{\Gamma(h,\pi n^2/(dz))}{\Gamma(h)},\quad \Delta=\epsilon(\chi)(d/\pi)^{1/2-s}\frac{\Gamma(h)}{\Gamma(p)}.\tag{5}$$ The factors $n^a$ cancel exactly, so this formula includes odd parity. Here $\operatorname{Re}p,\operatorname{Re}h\in[1/8,7/8]$, and [F4] permits division. For $d=1$, take $a=0$, $\epsilon=1$ and add exactly $$P(s,z)=\frac{\pi^{s/2}}{\Gamma(s/2)}\left[\frac{z^{(s-1)/2}}{s-1}-\frac{z^{s/2}}s\right].\tag{6}$$ Each series and its compact $z$ derivatives are bounded by $Cn^B e^{-cn^2}$ on compact subsets of the right half-plane; hence every termwise integration and extension used here has an explicit Gaussian tail. Fixed-parameter constants here are not asserted to be conductor-uniform. [F4, F6, F8, F9, step 1.2, step 3.1, algebra]

5.1 We prove the uniform averaged-Gamma bound directly. For $g=\alpha+i\beta$, $1/8\le\alpha\le7/8$, put $\rho=\sqrt{1+\beta^2}$ and choose $\phi=\arg(1+i\beta)$, so $\cos\phi=1/\rho$, $\sin\phi=\beta/\rho$. Define $$\mathcal W(g,x)=\frac1{\Gamma(g)\log4}\int_{1/2}^2\Gamma(g,xr e^{i\phi})\frac{dr}r.$$ Finite differentiation and the substitution $u=xr$ give $$\partial_x\mathcal W=-\frac{e^{i\phi g}}{x\Gamma(g)\log4}\int_{x/2}^{2x}e^{-u e^{i\phi}}u^{g-1}du.$$ Set $b=x/\rho$ and $v=u/\rho$. Its absolute value is the modulus of the annular integral $$\int_{b/2}^{2b}e^{-v}v^{\alpha-1}e^{i\beta(\log v-v)}dv\tag{7}$$ times $|e^{i\phi g}|\rho^\alpha/(x|\Gamma(g)|\log4)$. Differentiation under the compact $r$ integral follows from the continuous endpoint derivative; all fixed-parameter improper tails are exponential, uniformly for $1/2\le r\le2$. [F4, F6, F7, F8, F9, step 4.1, construct, algebra]

6.1 Integral (7) is at most $C\rho^{-1/2}e^{-b/4}b^\alpha$, uniformly. If $|\beta|\le1$, its absolute integral is at most $Ce^{-b/4}b^\alpha$ and $\rho$ is bounded. Otherwise conjugate to suppose $\beta>1$. Write $r(v)=e^{-v}v^{\alpha-1}$ and $f(v)=\log v-v$. For $b\le1/4$, $v\le1/2$ and $r/(\beta f')=e^{-v}v^\alpha/[\beta(1-v)]$ is positive increasing, since its logarithmic derivative is $\alpha/v+v/(1-v)>0$. Finite integration by parts bounds (7) by its endpoints and total variation, at most $C\beta^{-1}b^\alpha$. For $b\ge4$, the absolute ratio $e^{-v}v^\alpha/[\beta(v-1)]$ is decreasing on $v\ge2$, since its logarithmic derivative is $-1+\alpha/v-1/(v-1)<0$. Its endpoints and variation give $C\beta^{-1}e^{-b/2}b^{\alpha-1}$, also sufficient. [F7, F9, step 5.1, algebra]

6.2 Return to $s=\sigma+it$ and use $\beta=t/2$, $\rho=\sqrt{1+t^2/4}$, $\phi=\arg(1+it/2)$. Average (5) over $z=r e^{i\phi}$, $1/2\le r\le2$, with $dr/(r\log4)$. The reciprocal substitution preserves this interval and measure, and the imaginary parts of $p,h$ are $t/2,-t/2$. Therefore $$L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}\mathcal W(p,\pi n^2/d)+\Delta(s,\chi)\sum_{n\ge1}\overline\chi(n)n^{s-1}\mathcal W(h,\pi n^2/d)+\mathbf1_{d=1}\overline P(s),\tag{9}$$ where $\overline P$ denotes the average of (6), not conjugation. The series have Gaussian tails uniformly over this compact $r$ interval for each fixed $d,s$, justifying termwise averaging. There is no conjugation of $s$ and no erased conjugation of $\chi$. [F6, F8, F9, step 4.1, step 5.1, algebra]

7.1 For $1/4\le b\le4$, the integration interval lies in $[1/8,8]$, where $r$ and $r'$ are uniformly bounded. Set $h_0=\beta^{-1/2}$. The part $|v-1|\le h_0$ has absolute integral $Ch_0$. On each remaining interval integrate by parts using $\beta f'$, whose reciprocal is $v/[\beta(1-v)]$ and has derivative $1/[\beta(1-v)^2]$. Endpoints and derivative integrals are bounded by $$\frac C{\beta h_0}+\frac C\beta\int_{h_0\le|v-1|\le7}\left(|v-1|^{-1}+|v-1|^{-2}\right)dv\le C\beta^{-1/2}.$$ Omit empty intervals; all others have endpoints away from1 and continuous derivatives, as [F7] requires. Since $e^{-b/4}b^\alpha$ is bounded below on this compact range, this finishes the asserted bound for (7). No stationary-phase theorem or improper integration by parts has been imported. [F7, F8, F9, step 6.1, algebra]

8.1 Uniform sectorial Stirling in [F4] gives $|\Gamma(\alpha+i\beta)|\asymp\rho^{\alpha-1/2}e^{-\pi|\beta|/2}$ for $|\beta|\ge1$; the remaining compact range follows by continuity and nonvanishing. Also $0\le(\pi/2)|\beta|-\beta\phi\le1$: for $\beta>0$ apply $\theta\le\tan\theta$ to $\theta=\pi/2-\phi$, then use symmetry and the case $\beta=0$. Thus $|e^{i\phi g}|\rho^\alpha/|\Gamma(g)|\le C\rho^{1/2}$. Combining steps 5.1, 6.1 and 7.1 proves $$|\partial_x\mathcal W(g,x)|\le Cx^{-1}e^{-x/(4\rho)}(x/\rho)^\alpha.\tag{8}$$ Its integral over $x>0$ is bounded uniformly, by the positive Gamma substitution $x=4\rho v$ and $1/8\le\alpha\le7/8$. The ray definition also gives $\mathcal W(g,x)\to0$ exponentially for each fixed $g$ as $x\to\infty$; equivalently integrate (8) from infinity. [F4, F7, F8, F9, step 5.1, step 6.1, step 7.1, algebra]

9.1 With $\tau=|t|+4$, direct squaring gives $2\le\tau/\rho\le\sqrt{20}<5$. Apply (8) at $x=\pi u^2/d$ and multiply by $2x/u$. If $v=u^2/(d\tau)$, then $x/\rho$ lies between $2\pi v$ and $5\pi v$. For $v\le1$, $v^\alpha\le v^{1/8}$; for $v\ge1$, the extra power $v^{\alpha-1/8}\le v^{3/4}$ is absorbed into the spare exponential $e^{-\pi v/2}$. Consequently $$\left|\frac d{du}\mathcal W(p,\pi u^2/d)\right|+\left|\frac d{du}\mathcal W(h,\pi u^2/d)\right|\le C V(u,d\tau).\tag{10}$$ Stirling at $p,h$, whose imaginary parts have opposite signs and equal size, likewise gives $|\Delta(s,\chi)|\le C(d\tau)^{1/2-\sigma}$. Compact bounded-height ranges are included by Gamma nonvanishing; $|\epsilon|=1$ by [F2]. These constants are genuinely conductor-uniform. [F2, F4, F8, F9, step 8.1, step 6.2, algebra]

9.2 For the conductor-one term (6), powers of $r\in[1/2,2]$ have bounded modulus apart from $e^{-t\phi/2}$. Gamma normalization contributes at most $C\tau^{1/2-\sigma/2}e^{\pi|t|/4}$, and $0\le\pi|t|/4-t\phi/2\le1$. For $|t|\ge1$ the two denominators satisfy $|s|^{-1}+|s-1|^{-1}\le C/\tau$. Hence $|P(s,r e^{i\phi})|\le C\tau^{-(1+\sigma)/2}$, uniformly in $r$. For $|t|\le1$ the same bound follows by compactness: $\sigma\in[1/4,3/4]$ stays away from both0 and1 and both Gamma factors are nonzero. Averaging preserves this bound for $\overline P(s)$. Both signed rational terms in (6) remain present; no entire completion is substituted for the meromorphic conductor-one completion. [F4, F8, F9, step 3.1, step 4.1, step 8.1, step 6.2, algebra]

10.1 For either series in (9), finite Abel summation is an explicit telescoping identity. If $c_n$ is its coefficient and $B(u)=\sum_{n\le u}c_n$, then for integer $M\ge1$ and smooth $w$, $$\sum_{n\le M}c_n w(n)=B(M)w(M)-\int_1^M B(u)w'(u)du.$$ Indeed expand the finite integral as $\sum_{n\le M}c_n\int_n^M w'$ and apply FTC to each term. Here $B$ is a step function with integer jumps, not a globally continuous function. On each compact interval its product with $w'$ is piecewise continuous and Riemann integrable by step 1.1. The lower endpoint below1 is zero. In (9), $|B(M)|\le CM^{1-\sigma}$ or $CM^\sigma$, respectively, whereas $w(M)=\mathcal W(g,\pi M^2/d)$ decays exponentially for each fixed $g,d$. Thus the upper boundary vanishes. By (10) the absolute integral tails are bounded by a polynomial times $e^{-u^2/(4d\tau)}$, and both integrands vanish for $u<1$. Passing to the improper limit is therefore justified by these explicit tails and proves (1) using steps 9.1 and 9.2. No generic Riemann dominated-convergence assertion or Lebesgue premise is used. [F7, F8, F9, step 1.1, step 8.1, step 6.2, step 9.1, step 9.2, algebra]

11.1 The substitution $v=u^2/r$, $du/u=dv/(2v)$ and the positive Gamma integral give exactly (2). Its tails are integrable powers near0 and exponential at infinity. For a nonnegative piecewise-continuous $f$, compact weighted Cauchy–Schwarz twice gives $$\left(\int fV\right)^4\le\left(\int V\right)^3\int f^4V.$$ On each compact interval subdivide at the finitely many integer jumps of the partial sums; step 1.1 justifies this inequality and the finite sums of section integrals. For the functions here, polynomial partial-sum bounds times $V$ give explicit integrable tails, so the inequality passes to the improper endpoints. If $|\sigma-1/2|\log(d\tau)\le1$, the multiplier in (1) is bounded by an absolute constant. Apply the last inequality and $(x+y)^4\le8(x^4+y^4)$; the conductor-one remainder to the fourth power is at most $C\tau^{-2(1+\sigma)}\le C\tau^{-5/2}$. This proves (3), including zero partial sums for $u<1$, both parities and all bounded-height cases already treated. No further axiom is spent. [F4, F7, F8, F9, step 1.1, step 9.1, step 9.2, step 10.1, algebra] ∎

## Remarks

The pointwise envelope is an adaptation of the source's smoothing argument with the full off-critical multiplier retained. Its proof uses a locally derived finite-annular bound instead of importing an incomplete-Gamma estimate. The conductor-one regularization is replayed locally from Poisson and the Gaussian transform; it is not attributed to a nonexistent public conductor-one order Statement. This lemma proves no fourth-moment family estimate, zero detector or density theorem by itself. Those remain separate authoring and review obligations. All accepted theta, contour and mean-value supplier bodies are unchanged.
