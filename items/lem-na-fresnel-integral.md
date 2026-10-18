---
id: lem-na-fresnel-integral
kind: lemma
title: Fresnel whole-line moment from the damped complex Gaussian
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-na-finite-interval-oscillatory-integral
  - def-improper-integral-at-infinity
  - def-mixed-improper-integral
  - def-absolute-and-conditional-improper-convergence
  - thm-comparison-test-for-improper-integrals
  - thm-cauchy-criterion-for-improper-integrals
  - thm-gaussian-integral
  - thm-riemann-fubini-on-product-rectangles
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-multidimensional-integral-properties
  - thm-jordan-boundary-criterion
  - def-riemann-integral-over-a-jordan-set
  - def-null-and-content-zero-in-rn
  - thm-graphs-of-continuous-functions-have-content-zero
  - thm-heine-borel-rn
  - thm-of-square-roots
  - lem-riemann-integral-unchanged-by-content-zero-modification
  - thm-continuous-implies-integrable
  - thm-sine-and-cosine-subtraction-formulas
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-quarter-turn-values-and-shift-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-pi-is-the-first-positive-sine-zero
  - thm-intermediate-value
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-polar-form-with-unique-principal-argument
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-derivatives
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-algebra-of-continuous-functions
  - thm-exponential-is-strictly-increasing
  - thm-exponential-definition-equivalence
  - def-multidimensional-rectangle-and-volume
  - thm-complex-numbers-form-a-field
  - lem-complex-conjugation-and-modulus-laws
  - thm-exponential-limits-and-range
  - cor-differentiable-implies-continuous
  - lem-na-complex-phase-derivative
  - thm-integration-by-parts
  - thm-ftc-second-part
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §7.12(ii)"
      url: "https://dlmf.nist.gov/7.12"
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iv)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §4"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
axiom_use: "No choice axiom is used; all integrals are finite-dimensional
  Riemann integrals or explicitly bounded improper limits."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For $\operatorname{Re}\alpha>0$, the absolutely convergent componentwise complex integral
$$F(\alpha)=\int_{-\infty}^{\infty}e^{-\alpha u^2}\,du$$
equals $\sqrt{\pi}\,\alpha^{-1/2}$, where $\alpha^{-1/2}$ uses the continuous square-root branch with $\arg\alpha\in(-\pi/2,\pi/2)$. Consequently, for every $\lambda>0$ and $\sigma\in\{-1,1\}$, the ordinary two-sided improper Fresnel integral exists and
$$\int_{-\infty}^{\infty}e^{i\sigma\lambda u^2/2}\,du=\sqrt{\frac{2\pi}{\lambda}}e^{i\sigma\pi/4}.$$

## Facts & Assumptions

**Given:** The stated $\alpha$, the componentwise finite-interval convention of [[def-na-finite-interval-oscillatory-integral]], and the same componentwise convention for the Jordan-set integrals below.

[F1] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ map with invertible derivative on a neighborhood of a compact Jordan set transforms the integral by the absolute Jacobian determinant.

[F2] [[thm-sine-and-cosine-subtraction-formulas]]: the subtraction identities express sine and cosine of $u-v$ in terms of the sine and cosine of $u$ and $v$.

[F3] [[thm-sine-cosine-zero-sets-and-fundamental-period]]: $\sin t=0$ exactly when $t=m\pi$ for some integer $m$, and both trigonometric functions have period $2\pi$.

[F4] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(t+\pi/2)=\cos t$ and $\cos(t+\pi)=-\cos t$ for every real $t$.

[F5] [[cor-trigonometric-parity-and-pythagorean-identity]]: sine is odd, cosine is even, and $\sin^2t+\cos^2t=1$.

[F6] [[cor-pi-is-the-first-positive-sine-zero]]: $\sin t>0$ for $0<t<\pi$ and $\sin\pi=0$.

[F7] [[thm-intermediate-value]]: a continuous real function on a closed interval takes every value between its endpoint values.

[F8] [[thm-graphs-of-continuous-functions-have-content-zero]]: the graph of a continuous real function on a closed nondegenerate rectangle has content zero in the next Euclidean dimension.

[F9] [[def-null-and-content-zero-in-rn]]: content zero means that every positive volume allowance has a finite cube cover whose total volume is at most that allowance; content zero passes to subsets.

[F10] [[thm-heine-borel-rn]]: a closed bounded subset of Euclidean space is compact.

[F11] [[thm-jordan-boundary-criterion]]: a bounded set is Jordan measurable exactly when its boundary has content zero.

[F12] [[lem-riemann-integral-unchanged-by-content-zero-modification]]: changing a bounded real integrand on a content-zero subset of a bounded Jordan set preserves integrability and its integral; apply componentwise to complex integrands.

[F13] [[def-riemann-integral-over-a-jordan-set]]: integrate over a bounded Jordan set by integrating the zero extension over a bounding rectangle.

[F14] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: every continuous real function on a compact Jordan set is Riemann integrable over it.

[F15] [[thm-multidimensional-integral-properties]]: rectangular Riemann integrals are linear, monotone, and satisfy the absolute-value estimate.

[F16] [[thm-riemann-fubini-on-product-rectangles]]: for an integrable real function on a product rectangle with integrable sections, either iterated integral equals the multiple integral.

[F17] [[thm-gaussian-integral]]: $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$.

[F18] [[thm-continuous-implies-integrable]]: a continuous real function on a compact interval is Riemann integrable.

[F19] [[thm-complex-exponential-addition-and-real-extension]]: $e^{z+w}=e^ze^w$ for complex $z,w$.

[F20] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{x+iy}=e^x(\cos y+i\sin y)$ and $|e^{x+iy}|=e^x$ for real $x,y$.

[F21] [[thm-sine-and-cosine-derivatives]]: $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$.

[F22] [[thm-derivative-of-exponential]]: $(e^t)'=e^t$ for real $t$.

[F23] [[thm-chain-rule]]: $(u\circ v)'=(u'\circ v)v'$ for differentiable real functions.

[F24] [[thm-algebra-of-derivatives]]: products of differentiable real functions obey the product rule.

[F25] [[cor-differentiable-implies-continuous]]: a real function differentiable at a point is continuous there.

[F26] [[thm-of-square-roots]]: every nonnegative real has a unique nonnegative square root.

[F27] [[lem-na-complex-phase-derivative]]: for real differentiable $\theta$, $(e^{i\theta})'=i\theta'e^{i\theta}$.

[F28] [[thm-integration-by-parts]]: the real $C^1$ integration-by-parts identity holds on compact intervals; applying it to real and imaginary parts gives its complex version.

[F29] [[thm-ftc-second-part]]: if a differentiable real function has integrable derivative on a compact interval, the integral of that derivative is its endpoint increment.

[F30] [[thm-sine-and-cosine-parametrize-the-unit-circle]]: every point on the real unit circle has a unique representation $(\cos t,\sin t)$ with $0\le t<2\pi$.

[F31] [[thm-polar-form-with-unique-principal-argument]]: every nonzero complex number has a unique polar form $r(\cos\theta+i\sin\theta)$ with $r>0$ and $-\pi<\theta\le\pi$.

[F32] [[thm-algebra-of-continuous-functions]]: finite sums and products of continuous real functions are continuous, constant and identity functions are continuous, and a quotient is continuous where its denominator is nonzero.

[F33] [[thm-exponential-is-strictly-increasing]] and [[thm-exponential-definition-equivalence]]: the real exponential is positive, strictly increasing, and satisfies $e^0=1$.

[F34] [[def-multidimensional-rectangle-and-volume]]: a rectangle has volume equal to the product of its side lengths.

[F35] [[thm-complex-numbers-form-a-field]]: complex addition and multiplication have their real-coordinate formulas, and every nonzero complex number has an inverse.

[F36] [[thm-exponential-limits-and-range]]: $e^t\to0$ as $t\to-\infty$, and $e^t>0$ for every real $t$.

[F37] [[def-improper-integral-at-infinity]]: each one-sided improper Riemann integral is the finite limit of its proper truncations.

[F38] [[def-mixed-improper-integral]]: a whole-line improper integral is the sum of its two separately convergent one-sided tails; cancellation between divergent tails is not allowed.

[F39] [[def-absolute-and-conditional-improper-convergence]]: absolute convergence means that the improper integral of the modulus converges separately on every one-ended piece.

[F40] For a continuous complex function $z$ on a compact Jordan set $E$, $\left|\int_E z\right|\le\int_E|z|$. If $Z=\int_Ez\ne0$, the conjugation and modulus laws [[lem-complex-conjugation-and-modulus-laws]] give $|\overline Z/|Z||=1$; set $\zeta=\overline Z/|Z|$. Componentwise linearity from [[thm-multidimensional-integral-properties]] under the stated convention gives $|Z|=\operatorname{Re}(\zeta Z)=\int_E\operatorname{Re}(\zeta z)$, while $\operatorname{Re}(\zeta z)\le|z|$ pointwise; apply the same theorem after the zero-extension definition [[def-riemann-integral-over-a-jordan-set]]. The conjugation and modulus laws also give $|z+w|\le|z|+|w|$ for complex scalars. The interval convention is [[def-na-finite-interval-oscillatory-integral]]. The case $Z=0$ is immediate.

[F41] [[thm-cauchy-criterion-for-improper-integrals]]: a real one-sided improper integral converges if and only if its proper tail integrals satisfy the Cauchy condition; apply this separately to real and imaginary parts.

[F42] [[thm-comparison-test-for-improper-integrals]]: if $|f|\le g$ eventually and the nonnegative improper integral of $g$ converges, then $f$ converges absolutely on that tail.

## Proof

1.1 Write $u_0=\operatorname{Re}\alpha>0$. For finite $R$, the substitution $y=\sqrt{u_0}x$ in [F1] gives $\int_{-R}^Re^{-u_0x^2}dx=u_0^{-1/2}\int_{-\sqrt{u_0}R}^{\sqrt{u_0}R}e^{-y^2}dy$; letting $R\to\infty$ and using [F17] shows that the real Gaussian majorant has finite one-sided integrals. Since $|e^{-\alpha x^2}|=e^{-u_0x^2}$ by [F20], [F42] gives absolute convergence of each real and imaginary tail; [F37] and [F39] specify these one-sided limits and [F38] defines their two-sided sum $F(\alpha)$. By [F18], every finite-interval complex integral exists; the cut-additivity clause of [F15], applied componentwise at $0$, shows $F_R(\alpha)=\int_{-R}^Re^{-\alpha x^2}dx\to F(\alpha)$. On $S_R=[-R,R]^2$, the integrand is continuous by Euler's formula [F20], differentiability and continuity of sine, cosine and the real exponential [F21], [F22], [F25], and polynomial continuity [F32]; also $e^{-\alpha(x^2+y^2)}=e^{-\alpha x^2}e^{-\alpha y^2}$ by [F19]. Its real and imaginary parts are integrable by [F14]. Expanding the complex product into four real products, applying [F16] to each, using the complex-coordinate formulas [F35], and using linearity [F15] yields $F_R(\alpha)^2=\int_{S_R}e^{-\alpha(x^2+y^2)}d(x,y)$. [given, F1, F14, F15, F16, F17, F18, F19, F20, F21, F22, F25, F32, F35, F37, F38, F39, F42, construct]

1.2 Put $D_s=\{(x,y):x^2+y^2\le s^2\}$ and $A_{\varepsilon,R}=D_R\setminus\operatorname{int}D_\varepsilon$. On $K_+=[\varepsilon,R]\times[0,\pi]$ and $K_-=[\varepsilon,R]\times[-\pi,0]$, the polar map $P(r,\theta)=(r\cos\theta,r\sin\theta)$ has determinant $r$ by [F21] and [F5]. Each rectangle has an open rectangular neighborhood with positive radial coordinate and angular width strictly below $2\pi$. If two points there have the same image, equal Euclidean norms give equal radii; after division by that radius, their trigonometric pairs agree. [F2] then gives sine of the angle difference zero and cosine equal to one. By [F3], the difference is $m\pi$; repeated use of [F4], with evenness from [F5] when $m<0$, gives cosine $(-1)^m$, so $m$ is even. The neighborhood's angular width below $2\pi$ forces the difference to be zero. Thus each map is injective on a neighborhood and its derivative is invertible there because the determinant is positive. By [F30], every point in the upper half-annulus has a canonical polar angle in $[0,2\pi)$; if the second coordinate is positive, [F6], [F5], and [F3] rule out an angle in $(\pi,2\pi)$, while if it is zero [F3] leaves only $0$ or $\pi$. For a lower-half point with negative second coordinate, its canonical angle is in $(\pi,2\pi)$ by the same sign facts, and subtracting $2\pi$ places it in $(-\pi,0)$ without changing its trigonometric pair; points with zero second coordinate use angle $0$ or $-\pi$. These arguments prove that the images are exactly the upper and lower closed half-annuli. For $s>0$, their curved boundary arcs are graphs of $\pm\sqrt{s^2-x^2}$; the radicand is continuous by [F32], and for nonnegative $u,v$ one has $|\sqrt u-\sqrt v|^2\le|u-v|$ by [F26] and algebra, proving continuity of those graphs. Each radial segment is a constant-function graph after exchanging coordinates if needed. Each graph has content zero by [F8]; their finite unions do as well by combining finite covers from [F9]. Thus the half-annuli are bounded with content-zero boundary and hence Jordan by [F11]; they are compact by [F10]. Now apply [F1] separately to the real and imaginary parts on each. By componentwise Fubini [F16], each transformed integral is $\pi\int_\varepsilon^R e^{-\alpha r^2}r\,dr$. Writing $\alpha=A+iB$ and differentiating the Euler representation with [F20]--[F24] gives $(e^{-\alpha r^2})'=-2\alpha r e^{-\alpha r^2}$; componentwise [F29] therefore evaluates this radial integral as $(e^{-\alpha\varepsilon^2}-e^{-\alpha R^2})/(2\alpha)$. Their intersection is two radial segments, content-zero by the same graph argument. On a bounding rectangle, the zero extensions of the two half-annulus integrands sum to the annulus integrand off those segments and to twice it on them; [F12] removes this content-zero difference, while linearity [F15] adds the componentwise integrals. Thus $\int_{A_{\varepsilon,R}}e^{-\alpha(x^2+y^2)}d(x,y)=\pi(e^{-\alpha\varepsilon^2}-e^{-\alpha R^2})/\alpha$. The same circle-graph argument makes $D_\varepsilon$ compact Jordan; [F14] integrates the continuous real and imaginary parts there. For $h=e^{-\alpha(x^2+y^2)}$, [F20] and [F33] give $|h|=e^{-u_0(x^2+y^2)}\le1$; the containing square has area $4\varepsilon^2$ by [F34], and [F13], [F15], [F40] give $|\int_{D_\varepsilon}h|\le\int_{D_\varepsilon}|h|\le4\varepsilon^2$. On the containing square, the zero extensions over $D_\varepsilon$ and $A_{\varepsilon,R}$ sum to $h$ off the boundary circle and to $2h$ on it; [F12] removes this content-zero difference and linearity [F15] gives $\int_{D_R}h=\int_{D_\varepsilon}h+\int_{A_{\varepsilon,R}}h$. Letting $\varepsilon\downarrow0$ therefore gives $\int_{D_R}h=\pi(1-e^{-\alpha R^2})/\alpha$. [F1, F2, F3, F4, F5, F6, F8, F9, F10, F11, F12, F13, F14, F15, F16, F20, F21, F24, F26, F29, F30, F32, F33, F34, F40, algebra]

2.1 Set $E_R=S_R\setminus\operatorname{int}D_R$. It is closed and bounded, hence compact by [F10]; its boundary is contained in $\partial S_R\cup\partial D_R$. The square boundary is a finite union of line graphs and the circle boundary is the pair of continuous semicircle graphs proved in step 1.2, so [F8] and [F9] make this union content zero and [F11] makes $E_R$ Jordan. Both $E_R$ and $D_R$ are compact Jordan subsets of $S_R$, so their zero extensions are integrable by [F13] and [F14]. On $S_R$ these extensions sum to $h$ off $\partial D_R$ and to $2h$ on the content-zero circle; [F12] and linearity [F15] therefore give $\int_{E_R}h+\int_{D_R}h=\int_{S_R}h$. Every point of $E_R$ has $x^2+y^2\ge R^2$, so $|x|\ge R/\sqrt2$ or $|y|\ge R/\sqrt2$. Put $G=\int_{\mathbb R}e^{-u_0x^2}dx<\infty$ and $H(t)=\int_{|x|\ge t}e^{-u_0x^2}dx$; $H(t)\to0$ by [F37] and the convergent nonnegative improper Gaussian integral [F17]. By [F19], the majorant factors as $e^{-u_0x^2}e^{-u_0y^2}$. On finite bounding rectangles, [F13], [F15], and [F16] bound its integral over the vertical and horizontal tail strips by $2H(R/\sqrt2)G$. For $h(x,y)=e^{-\alpha(x^2+y^2)}$, [F40] bounds the complex integral's modulus by the integral of $|h|$, so it is at most $2H(R/\sqrt2)G$. The integrand is continuous on the compact Jordan set $E_R$, so its components are integrable by [F14]. Passing to the one-dimensional Gaussian tail limits preserves this bound. It tends to zero, so the square and disc integrals have the same limit. Also $|e^{-\alpha R^2}|=e^{-u_0R^2}\to0$: [F33] makes this nonnegative function decreasing in $R$, and a positive limiting lower bound would contradict the finite Gaussian integral [F1], [F17]. Steps 1.1 and 1.2, with $e^{-\alpha R^2}\to0$, now give $F(\alpha)^2=\pi/\alpha$. [F1, F8, F9, F10, F11, F12, F13, F14, F15, F16, F17, F19, F20, F33, F37, F40, step 1.1, step 1.2]

3.1 The function $F$ is continuous on the right half-plane. Fix a compact neighborhood with $\operatorname{Re}\alpha,\operatorname{Re}\beta\ge c_0>0$. On $[-R,R]$, differentiating $e^{-(\beta+t(\alpha-\beta))x^2}$ in $t$ by [F20]--[F24] and applying [F29] gives $|e^{-\alpha x^2}-e^{-\beta x^2}|\le R^2|\alpha-\beta|$. By [F40], the finite-interval contribution to $|F(\alpha)-F(\beta)|$ is therefore at most $2R^3|\alpha-\beta|$. Each omitted tail is bounded by $\int_{|x|>R}e^{-c_0x^2}dx$, which tends to zero as $R\to\infty$ by [F37], [F39], and the scaled Gaussian integral [F1], [F17]; choosing $R$ and then $|\alpha-\beta|$ proves continuity. To justify the branch continuously, write $\alpha=x+iy$, $q=\sqrt{x^2+y^2}$, $u=\sqrt{(q+x)/2}>0$, and $v=y/(2u)$. For nonnegative $s,t$, $|\sqrt{s}-\sqrt{t}|^2\le|s-t|$, so [F26] and [F32] make $q,u,v$ continuous. Also $2uv=y$ and $u^2-v^2=((q+x)^2-y^2)/(2(q+x))=x$ since $q^2=x^2+y^2$, hence $(u+iv)^2=\alpha$. Let $\theta=\arg\alpha\in(-\pi,\pi]$ from [F31]. Since $x=|\alpha|\cos\theta>0$, $\cos\theta>0$. On $[-\pi,-\pi/2]$, [F4] writes $\cos\theta=\sin(\theta+\pi/2)\le0$ by [F5], [F6]; on $[\pi/2,\pi]$, put $t=\theta-\pi/2\in[0,\pi/2]$ and use period $2\pi$, oddness, and [F6] to get $\cos\theta=\sin(\pi+t)=\sin(t-\pi)=-\sin(\pi-t)\le0$. Hence $-\pi/2<\theta<\pi/2$. Then the specified square root has positive real part because its argument is $\theta/2\in(-\pi/4,\pi/4)$ and cosine is positive there by [F4], [F6]. Both it and $u+iv$ square to $\alpha$; since complex numbers form a field [F35], any two roots differ only by sign, and their positive real parts force equality. Thus $H(\alpha)=F(\alpha)(u+iv)/\sqrt\pi$ is continuous; steps 2.1 and $(u+iv)^2=\alpha$ give $H(\alpha)^2=(F(\alpha)^2/\pi)\alpha=1$. On any line segment, if the endpoint values of $H$ were $1$ and $-1$, [F7] applied to its continuous real part would force that part to vanish somewhere, impossible for a value in $\{-1,1\}$. Therefore $H$ is constant along every segment. At $\alpha=1$, [F17] gives $H(1)=1$, so $F(\alpha)=\sqrt\pi\,\alpha^{-1/2}$. [given, F1, F4, F5, F6, F7, F17, F18, F20, F21, F22, F23, F24, F26, F29, F31, F32, F35, F37, F39, F40, step 2.1]

4.1 Fix $\lambda>0$ and $\sigma=\pm1$, and for $\varepsilon>0$ set $\alpha=\varepsilon-i\sigma\lambda/2$. For any $\varepsilon\ge0$ and $T>R>0$, [F27] gives the phase derivative and [F28] justifies integration by parts on $[R,T]$. The amplitude derivative is $(e^{-\varepsilon u^2}/u)'=-2\varepsilon e^{-\varepsilon u^2}-e^{-\varepsilon u^2}/u^2$ by [F22]--[F24]; the boundary terms are at most $2/(\lambda R)$. For $\varepsilon>0$, using $u\ge R$ and then [F22], [F23], [F29], and [F36] gives $\int_R^\infty2\varepsilon e^{-\varepsilon u^2}du\le R^{-1}\int_R^\infty2\varepsilon u e^{-\varepsilon u^2}du=e^{-\varepsilon R^2}/R\le1/R$; when $\varepsilon=0$ this derivative term is zero. Also $e^{-\varepsilon u^2}\le1$ by [F33], so $\int_R^\infty e^{-\varepsilon u^2}u^{-2}du\le1/R$. Including the factor $1/\lambda$ gives $|\int_R^T e^{-\varepsilon u^2}e^{i\sigma\lambda u^2/2}du|\le4/(\lambda R)$, and the negative tail has the same bound by $u\mapsto-u$. For $\varepsilon=0$, [F40] makes each real and imaginary tail satisfy the Cauchy condition in [F41]; hence the one-sided limits exist, and [F38] defines the ordinary two-sided improper Fresnel integral. The estimate is uniform for $\varepsilon\ge0$; on every finite interval the damped integrand converges uniformly as $\varepsilon\downarrow0$. Given a tolerance, first choose $R$ so both tails are uniformly small and then pass to the limit on $[-R,R]$; this proves that the Abel limit equals the ordinary two-sided improper integral. As $\varepsilon\downarrow0$, $|\alpha|\to\lambda/2$ and $\arg\alpha\to-\sigma\pi/2$, so step 3.1 gives $\sqrt\pi(\lambda/2)^{-1/2}e^{i\sigma\pi/4}=\sqrt{2\pi/\lambda}e^{i\sigma\pi/4}$. [given, F1, F17, F22, F23, F24, F27, F28, F29, F33, F36, F38, F40, F41, step 3.1, algebra] ∎
