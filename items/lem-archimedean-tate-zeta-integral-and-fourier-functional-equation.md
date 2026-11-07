---
dependency_level: 0
id: lem-archimedean-tate-zeta-integral-and-fourier-functional-equation
kind: lemma
title: "Archimedean Tate integrals with both Fourier signs"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-schwartz-space-and-its-seminorms
  - def-euler-gamma-function
  - lem-gamma-functional-equation-meromorphic-extension
  - cor-gamma-function-has-no-zeros
  - lem-fourier-transform-of-a-gaussian
  - thm-distributions-supported-at-one-point
  - cor-multivariable-taylor-formula-with-peano-remainder
sources:
  references:
    - title: "Hervé Jacquet, Archimedean Rankin–Selberg Integrals"
      url: "https://www.math.columbia.edu/~hj/PerfectRankinSelberg.pdf"
      locator: "§16, printed pp. 109–111: recalled one-dimensional factors and Tate equation; the source refers elsewhere for Tate theory. The full Schwartz proof below is locally reconstructed, not imported."
    - title: "J.-S. Li, Dongwen Liu, Feng Su, and Binyong Sun, Rankin–Selberg Convolutions for Principal Series"
      url: "https://arxiv.org/pdf/2109.05272v2"
      locator: "§1.4, equation (12) and the following Fourier-transform definition: positive-character Fourier convention, distinguished below from Jacquet's negative sign."
---

## Statement

In this lemma the symbols $d\mu_a$ and $d^\times x$ denote the explicitly displayed invariant integration densities, or equivalently their integration functionals on continuous compactly supported functions. All integrals used below are their absolutely convergent improper Riemann extensions, with the stated Taylor subtractions for meromorphic continuation. The term **Haar measure** here refers only to these invariant integration functionals: no existence of a countably additive measure on all Borel sets is asserted in bare ZF. Whenever a countably additive Haar measure with these densities is available, its integrals on the functions considered here equal the displayed ones.

Let $K=\mathbb R$ or $\mathbb C$, with $|x|_K=|x|$ or $|z|_K=z\bar z$, respectively. Put $\psi_0(x)=e^{2\pi ix}$ over $\mathbb R$ and $\psi_0(z)=e^{2\pi i(z+\bar z)}$ over $\mathbb C$. Every nontrivial continuous unitary additive character is uniquely $\psi_a(x)=\psi_0(ax)$ with $a\in K^\times$. Its self-dual additive measure is $d\mu_a=|a|_K^{1/2}d\mu_0$, where $d\mu_0=dx$ over $\mathbb R$ and $d\mu_0=2\,dx\,dy$ over $\mathbb C$. For either $\sigma\in\{1,-1\}$ define

$$\mathcal F_{a,\sigma}\phi(y)=\int_K\phi(x)\psi_0(\sigma axy)\,d\mu_a(x).$$

This maps Schwartz space continuously into itself and its square is reflection. Fix $d^\times x=dx/|x|$ over $\mathbb R$ and $d^\times z=2\,dx\,dy/(\pi|z|_K)$ over $\mathbb C$. Write any continuous quasicharacter uniquely as

$$\chi(x)=\operatorname{sgn}(x)^\epsilon|x|^u\quad(\epsilon\in\{0,1\},\ u\in\mathbb C),\qquad
\chi(z)=(z/|z|)^m|z|_K^u\quad(m\in\mathbb Z,\ u\in\mathbb C).$$

Here $|z|$ in $z/|z|$ is the ordinary complex modulus. Define $\ell=\epsilon$ over $\mathbb R$ and $\ell=|m|$ over $\mathbb C$, and put

$$L(s,\chi)=\begin{cases}\pi^{-(s+u+\epsilon)/2}\Gamma((s+u+\epsilon)/2),&K=\mathbb R,\\2(2\pi)^{-(s+u+|m|/2)}\Gamma(s+u+|m|/2),&K=\mathbb C.\end{cases}$$

For every $\phi\in\mathcal S(K)$ the integral

$$Z(s,\chi,\phi)=\int_{K^\times}\phi(x)\chi(x)|x|_K^s\,d^\times x$$

converges absolutely for $\operatorname{Re}(s+u)>0$, continues meromorphically to $\mathbb C$, and $Z(s,\chi,\phi)/L(s,\chi)$ is entire. There is a single Schwartz function of finite rotation type for which $Z=L$. On each finite real strip the continued $Z$ decreases faster than every inverse power of $|\operatorname{Im}s|$ at large imaginary height. With the displayed conventions its full Fourier functional equation is

$$\frac{Z(1-s,\chi^{-1},\mathcal F_{a,\sigma}\phi)}{L(1-s,\chi^{-1})}
=\chi(a)|a|_K^{s-1/2}(\sigma i)^\ell\frac{Z(s,\chi,\phi)}{L(s,\chi)}.$$

Multiplying the multiplicative Haar measure by a fixed positive constant changes neither this equation nor the entire-quotient assertion; rescale the generating test by the reciprocal constant. In particular one may instead use $d\mu_a(x)/|x|_K$. No choice axiom is assumed.

## Facts & Assumptions

**Given:** The fields, characters, measures and Fourier signs displayed in the Statement. All distribution pairings are complex bilinear. The integration-density convention in the Statement applies throughout; the Schwartz integrals are defined by absolutely convergent improper Riemann integrals with explicit polynomial tail bounds.

[F1] [[def-schwartz-space-and-its-seminorms]]: every polynomially weighted derivative of a Schwartz function is bounded.

[F2] [[def-euler-gamma-function]]: $\Gamma(w)=\int_0^\infty e^{-t}t^{w-1}\,dt$ for $\operatorname{Re}w>0$. [[lem-gamma-functional-equation-meromorphic-extension]] gives its meromorphic extension, and [[cor-gamma-function-has-no-zeros]] gives that $1/\Gamma$ is entire with simple zeros exactly at the nonpositive integers.

[F3] [[lem-fourier-transform-of-a-gaussian]]: the negative-sign real Fourier transform of $e^{-\pi t x^2}$ is $t^{-1/2}e^{-\pi\xi^2/t}$ for $t>0$.

[F4] [[thm-distributions-supported-at-one-point]]: a distribution supported at zero is a finite linear combination of derivatives of $\delta_0$, with unique coefficients; this statement holds in ZF.

[F5] [[cor-multivariable-taylor-formula-with-peano-remainder]] supplies finite Taylor expansion. Applied through degree $M+1$, it gives an $O(r^{M+1})$ remainder after retaining degrees at most $M$, uniformly in directions, for each smooth function on a ball.

## Proof

1.1 A continuous homomorphism from $\mathbb R$ to $\mathbb C^\times$ has the form $t\mapsto e^{ct}$. Indeed its modulus has continuous additive logarithm, determined on rationals by its value at one and then on reals by continuity. For its unitary part, choose a continuous argument on a sufficiently short interval about zero. The homomorphism identity makes the argument additive whenever both sides stay in this interval: the possible $2\pi$ integer discrepancy is continuous and zero at zero. Rational subdivisions and continuity make this argument linear there; subdividing any real input extends the formula to the whole line. On $S^1$, pull back by $t\mapsto e^{it}$ and use $2\pi$-periodicity: the exponent is $imt$ for an integer $m$. On $\mathbb R^\times$ the value at $-1$ is $\pm1$; on $\mathbb C^\times$ use $z=re^{i\theta}$ and its direct product of positive radii and $S^1$. These facts give exactly the stated quasicharacters. Applying the unitary real result to each coordinate of the additive groups $\mathbb R$ and $\mathbb R^2$ gives exactly the displayed $\psi_a$, uniquely; nontriviality means $a\ne0$. These arguments use only local arguments, rational subdivisions and continuity, not a simultaneous choice of logarithms. [given, algebra]

1.2 We record the needed Fourier estimates directly, rather than invoke a stronger full-distribution Fourier theorem with additional set-theoretic hypotheses. For Euclidean negative-sign Fourier transform in dimension $d=1,2$, differentiation under the integral and integration by parts give
$$\xi^\alpha\partial_\xi^\beta\widehat\phi(\xi)=(2\pi i)^{-|\alpha|}\mathcal F\bigl(\partial^\alpha((-2\pi ix)^\beta\phi)\bigr)(\xi).$$
Every absolute integral on the right is bounded by a finite sum of input Schwartz seminorms: multiply the integrand by $(1+|x|)^{d+1}$ and integrate its reciprocal. To justify the operations, first use a finite box, where differentiation and iterated integration are ordinary continuous-parameter Riemann calculations; the weighted bounds make the tails, derivative tails and integration-by-parts boundary terms tend uniformly to zero. This proves the formula, Schwartz preservation and continuity without a choice principle. Products of [F3] give the Euclidean Gaussian transform. Inserting $e^{-\pi t|\xi|^2}$ into the second Fourier integral, absolute integrability permits interchanging the two integrals (first on boxes, then by the same tail bounds); the result is convolution with $t^{-d/2}e^{-\pi|x|^2/t}$, evaluated at $-x$. This tends to $\phi(-x)$: split the convolution into a fixed small ball, using uniform continuity, and its Gaussian tail. Since $\widehat\phi$ is integrable, the inserted factor may also be removed in its integral by this box-and-tail argument. Thus the Euclidean transform squared is reflection. Over $\mathbb C$, $\psi_0(zw)$ corresponds to the symmetric matrix $\operatorname{diag}(2,-2)$ on $\mathbb R^2$. Its determinant has absolute value $4$, giving the measure factor $2$; linear substitution reduces its square to the same Euclidean identity. Multiplication by $a$ has real determinant of absolute value $|a|_K$. Consequently
$$\mathcal F_{a,\sigma}\phi(y)=|a|_K^{1/2}\mathcal F_{1,\sigma}\phi(ay)$$
and the same substitution proves that its square is reflection. This verifies the self-dual measures in the Statement. [F1, F3, given, algebra]

2.1 Put $z=s+u$. Over $\mathbb R$ write
$$Z=\int_0^\infty\bigl(\phi(r)+(-1)^\epsilon\phi(-r)\bigr)r^{z-1}\,dr.$$
In the integral over $(0,1)$ subtract the Taylor polynomial of the parenthesis through degree $M$ and add back its monomial integrals. Only degrees $j\equiv\epsilon\pmod2$ occur; each added term is $2\phi^{(j)}(0)/(j!(z+j))$. The remainder is $O(r^{M+1})$ by [F5]. Over $\mathbb C$ polar coordinates give
$$Z=\frac2\pi\int_0^\infty A_m(r)r^{2z-1}\,dr,\qquad A_m(r)=\int_0^{2\pi}\phi(re^{i\theta})e^{im\theta}\,d\theta.$$
Express the real Taylor polynomial in monomials $w^p\bar w^q$. Angular integration annihilates every monomial except $p-q+m=0$. Its remaining degrees are exactly $|m|+2j$, $j\ge0$; subtracting through degree $M$ and adding its integrals therefore gives simple denominators $2z+|m|+2j$. The angular remainder is uniformly $O(r^{M+1})$. At infinity [F1] gives integrability on every bounded real strip. Remainder integrals and their parameter derivatives are dominated by integrable powers times any fixed power of $|\log r|$, locally in the allowed half-plane. Their holomorphy follows by difference quotients on a compact radial interval followed by these explicit uniform tail bounds. Increasing $M$ gives agreeing formulas on their overlaps, hence meromorphic continuation. The same estimates bound the functionals by finitely many Schwartz seminorms locally away from their poles; thus they are meromorphic families of tempered distributions. The only possible poles are simple, at $z=-\epsilon-2j$ over $\mathbb R$ and $z=-|m|/2-j$ over $\mathbb C$. By [F2] these are precisely the simple poles of the corresponding $L$-factor, so the quotient is entire. This argument applies to every Schwartz function, not just a Gaussian. [F1, F2, F5, step 1.1, algebra]

2.2 Define $\phi_\epsilon(x)=x^\epsilon e^{-\pi x^2}$ over $\mathbb R$. Over $\mathbb C$ define $\phi_m(w)=\bar w^m e^{-2\pi|w|^2}$ for $m\ge0$ and $\phi_m(w)=w^{|m|}e^{-2\pi|w|^2}$ for $m<0$. Substitution $t=\pi r^2$ or $t=2\pi r^2$ in [F2], with the angular integral $2\pi$, gives exactly $Z(s,\chi,\phi_\epsilon)=L(s,\chi)$ or $Z(s,\chi,\phi_m)=L(s,\chi)$. The factor $2/\pi$ in complex multiplicative measure is used here. These tests have one angular type (and the real test has fixed parity), proving the generation assertion. [F2, step 2.1, algebra]

2.3 The subtracted formulas in step 2.1 are bounded uniformly when the real part of $z$ lies in a fixed finite interval and $|\operatorname{Im}z|\ge1$: absolute values of radial powers depend only on the real part, and the finitely many rational terms are uniformly bounded. Let $E\phi(x)=x\phi'(x)$ over $\mathbb R$ and $E\phi(w)=x\partial_x\phi+y\partial_y\phi$ over $\mathbb C$. Integration by parts in the original convergence half-plane gives $Z(s,\chi,E\phi)=-zZ(s,\chi,\phi)$ or $-2zZ(s,\chi,\phi)$, respectively; meromorphic continuation preserves the identity. Each $E^N\phi$ is Schwartz. Apply its bounded-strip estimate and divide by $(-z)^N$ or $(-2z)^N$ to obtain the stated arbitrary inverse-power decay at large height. [F1, step 2.1, algebra]

3.1 We prove the homogeneous-distribution uniqueness needed for the Fourier equation. A distribution $U$ on $K$ satisfying
$$U(\phi(b\,\cdot))=\chi(b)^{-1}|b|_K^{-s}U(\phi)\qquad(b\in K^\times)$$
is, on $K^\times$, a scalar multiple of $Z(s,\chi,\cdot)$. Here is a direct proof on that open set. In the real case restrict first to the positive half-line, set $x=e^t$, and put $V(F)=U(x^{-z}F(\log x))$ for compactly supported smooth $F$; it is a translation-invariant distribution on $\mathbb R$. Every compactly supported smooth function of integral zero has a compactly supported primitive. Differentiating translation invariance makes $V$ vanish on these derivatives, so $V(F)=c\int F$ by subtracting a fixed smooth test of integral one. Parity determines the negative half-line. In the complex case put
$$V(F)=U\bigl(r^{-2z}e^{-im\theta}F(\log r,\theta)\bigr)$$
for smooth periodic $F$ compactly supported in its first coordinate. The covariance makes $V$ invariant under translations in both coordinates. If $F$ has total integral zero, choose one compactly supported smooth $h(t)$ of integral one and set $g(\theta)=\int_\mathbb R F(t,\theta)\,dt$. Then $F-hg$ has zero integral in $t$ for each $\theta$ and is a $t$-derivative of a compactly supported smooth function; $g$ has zero circle average and is a derivative of a smooth periodic primitive. Thus $V(F)=0$. Subtracting a fixed product test of total integral one proves that $V$ is a constant times $dt\,d\theta$, which is exactly the required scalar-multiple assertion. Differentiation of a translated test is valid in the test-function topology since its support stays in one fixed compact set. A fixed smooth integral-one bump can be explicitly normalized from $e^{-1/(1-t^2)}$ on $|t|<1$, so no family of choices is used. [F1, step 2.1, algebra]

3.2 For a parameter at which both families are regular, the difference between two such homogeneous distributions with proportional restrictions to $K^\times$ is supported at zero. By [F4] it is a finite sum of delta derivatives. For positive real $b$, a derivative of degree $j$ scales by $b^j$ when its test is replaced by $\phi(b\,\cdot)$, whereas the required covariance scales by $b^{-z}$ over $\mathbb R$ and $b^{-2z}$ over $\mathbb C$. Uniqueness of the delta-derivative coefficients therefore makes that difference zero unless $z=-j$ or $2z=-j$ for a nonnegative integer $j$. Thus outside a discrete set the whole homogeneous distribution is determined by its restriction away from zero. No assertion about exceptional parameters is being omitted: they are recovered by the final meromorphic identity. [F4, step 3.1, algebra]

4.1 First take $a=1$ and either Fourier sign $\sigma$. The tempered meromorphic family
$$A_s(\phi)=Z(1-s,\chi^{-1},\mathcal F_{1,\sigma}\phi)$$
has exactly the covariance in step 3.1. Indeed Fourier substitution gives $\mathcal F(\phi(b\,\cdot))(y)=|b|_K^{-1}(\mathcal F\phi)(y/b)$; substitute $y=bv$ in the zeta integral. This computation holds on its convergence half-plane and hence meromorphically. Steps 3.1–3.2 imply, outside a discrete parameter set, that $A_s=c(s)Z(s,\chi,\cdot)$. Compute the scalar on the tests of step 2.2. From [F3] and the differentiation identity proved in step 1.2,
$$\mathcal F_{1,\sigma}\phi_\epsilon=(\sigma i)^\epsilon\phi_\epsilon,\qquad
\mathcal F_{1,\sigma}\phi_m=(\sigma i)^{|m|}\phi_{-m}.$$
For the complex identity, the Gaussian has parameter $2$, the Fourier frequency is $(2\operatorname{Re}y,-2\operatorname{Im}y)$, and the additive measure is $2\,dx\,dy$. Applying the combination of coordinate derivatives corresponding to $\bar w$ (or $w$) repeatedly gives $(\sigma i)y$ (or $(\sigma i)\bar y$) at each step; the harmonic derivative annihilates that polynomial on the next differentiation, so no lower-degree terms appear. This supplies the full identity for every integer $m$, including negative $m$ and $m=0$. Therefore
$$c(s)=(\sigma i)^\ell\frac{L(1-s,\chi^{-1})}{L(s,\chi)}.$$
The Gaussian integral is nonzero at generic parameters by [F2], so it legitimately determines this scalar. [F1, F2, F3, step 1.2, step 2.2, step 3.1, step 3.2, algebra]

4.2 For each fixed Schwartz test the two sides of the resulting equation are meromorphic scalar functions by step 2.1. They agree off the discrete exceptional set by step 4.1, hence everywhere by continuity after multiplication by their finitely many local pole factors. This also controls all possible point-supported terms at exceptional parameters; none is discarded. Finally use step 1.2 and change variables $y\mapsto a^{-1}y$ in $Z(1-s,\chi^{-1},\mathcal F_{a,\sigma}\phi)$ to obtain the extra factor $\chi(a)|a|_K^{s-1/2}$. Multiplying by the reciprocal Gamma factors gives the displayed normalized equation as an identity of entire functions; its right multiplier is entire and nowhere zero. A common rescaling of multiplicative measure cancels from the equation. Every limiting operation above used compact integrals and explicit tails; the only point-supported-distribution supplier is [F4], whose hypotheses and conclusion are ZF. No additional choice assumption has been introduced. [F2, step 1.2, step 2.1, step 2.2, step 4.1, algebra] ∎

## Remarks

For Jacquet's recalled real convention $a=1$, $\sigma=-1$, the sign-character epsilon is $-i$; for the positive Fourier convention in the principal-series Tate equation it is $+i$. Over $\mathbb C$ the corresponding angular multipliers are $(-i)^{|m|}$ and $i^{|m|}$. The self-dual measure alone does not specify this sign. This lemma proves rank-one local analysis only: it supplies neither higher-rank Whittaker asymptotics/uniqueness nor Jacquet's principal-series induction, finite-type test-vector theorem, or a local Langlands compatibility theorem.
