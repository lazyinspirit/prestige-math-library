---
id: ex-hilbert-transform-of-the-poisson-kernel
kind: example
title: "Hilbert transform of the line Poisson kernel"
status: published
origin: pipeline
deps: [def-truncated-hilbert-transform-and-principal-value, lem-hilbert-transform-has-signum-fourier-multiplier, cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-countable-choice, def-complex-lp-and-euclidean-test-function-conventions, def-schwartz-space-and-its-seminorms, def-fourier-transform-on-l-one-of-rn, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-l-one-fourier-inversion, lem-complex-integration-by-parts-on-intervals-and-decaying-lines, thm-sine-and-cosine-derivatives, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-derivative-of-exponential, thm-algebra-of-derivatives, thm-composition-of-continuous-functions, cor-differentiable-implies-continuous, lem-exponential-dominates-one-plus-x, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line, thm-additivity-over-subintervals, thm-ftc-second-part, thm-chain-rule, thm-principal-inverse-tangent-calculus, def-principal-inverse-tangent, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, cor-mean-value-theorem, thm-dominated-convergence, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-algebra-of-continuous-functions, lem-euclidean-balls-have-positive-finite-lebesgue-measure, def-ball-average-operator-on-r-n, def-lebesgue-point-and-lebesgue-set, def-locally-integrable-function-on-r-n, def-integral-over-a-measurable-set, prop-indefinite-integral-of-an-integrable-function-is-countably-additive, cor-continuous-functions-are-borel-measurable, cor-c-one-change-of-variables-for-l-one-functions, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, def-integral-of-a-nonnegative-simple-function]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.2, equation (5.1.17) (conjugate Poisson kernel), printed p. 318; Section 5.1.3, equations (5.1.36)-(5.1.38) (inverse transform of -i sgn(xi) e^{-2 pi |xi|}), printed pp. 323-324"
---

## Statement

Assume [[def-countable-choice|Countable Choice]] and fix $a>0$, with the
Fourier convention $e^{-2\pi ix\xi}$ of
[[def-fourier-transform-on-l-one-of-rn]]. Put

$$ P_a(x):=\frac{a}{\pi(a^2+x^2)},\qquad Q_a(x):=\frac{x}{\pi(a^2+x^2)} .$$

Then:

1. for every $\xi\in\mathbb R$, $\widehat{P_a}(\xi)=e^{-2\pi a|\xi|}$;
2. for every $x\in\mathbb R$ the symmetric principal value
   $\lim_{\varepsilon\downarrow0}H_\varepsilon P_a(x)$ of
   [[def-truncated-hilbert-transform-and-principal-value]] exists and equals
   $Q_a(x)$, the conjugate Poisson kernel;
3. $Q_a\in L^2(\mathbb R;\mathbb C)$, and $Q_a=HP_a$ in $L^2(\mathbb R;\mathbb C)$
   for the $L^2$ Hilbert transform $H$ with symbol
   $m(\xi)=-i\operatorname{sgn}(\xi)$ of
   [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]].

This is the line Poisson kernel, not the periodic Poisson kernel on the circle;
no statement is made about $L^p$ mapping for $p\ne2$.

## Facts & Assumptions

**Given:** $a>0$, [[def-countable-choice|Countable Choice]], the $L^p$ conventions of [[def-complex-lp-and-euclidean-test-function-conventions]], the Fourier convention of [[def-fourier-transform-on-l-one-of-rn]], and the truncated Hilbert transform, $H_\varepsilon f(x)=\frac1\pi\int_{|t|>\varepsilon}f(x-t)/t\,dt=\frac1\pi\int_{|x-y|>\varepsilon}f(y)/(x-y)\,dy$, absolutely convergent for $f\in L^p$, $1\le p<\infty$, whose principal value is the $\varepsilon\downarrow0$ limit wherever it exists.

[F1] For $\varepsilon>0$ and $x\in\mathbb R$, $H_\varepsilon f(x)=\frac1\pi\int_{|t|>\varepsilon}\frac{f(x-t)}{t}\,dt$ is the absolutely convergent truncation of [[def-truncated-hilbert-transform-and-principal-value]] for $f\in L^p$, $1\le p<\infty$; $H_{\mathrm{pv}}f(x)$ is its $\varepsilon\downarrow0$ limit where that exists, and no almost-everywhere existence and no $L^p$ bound is asserted by the definition.

[F2] For Schwartz $g$ the principal value exists at every $x$ and equals $(W*g)(x)$ for the tempered convolution with $W=\operatorname{pv}\frac1{\pi x}$, whose pairing with a Schwartz test function is the two-piece formula $\frac1\pi\int_{|x|>1}\frac{\varphi(x)}{x}dx+\frac1\pi\int_{|x|<1}\frac{\varphi(x)-\varphi(0)}{x}dx$; the $L^2$ extension $H$ has symbol $m(\xi)=-i\operatorname{sgn}(\xi)$, extends the Schwartz-core action uniquely and satisfies $\|Hg\|_2=\|g\|_2$. [[lem-hilbert-transform-has-signum-fourier-multiplier]] [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]

[F3] There is $\chi\in C_c^\infty(\mathbb R)$ with $0\le\chi\le1$, $\chi=1$ on $[-1,1]$ and $\chi=0$ off $(-2,2)$. [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]

[F4] For $f\in L^1(\mathbb R;\mathbb C)$ the transform is the absolutely convergent integral $\widehat f(\xi)=\int_{\mathbb R}f(x)e^{-2\pi ix\xi}dx$ of the Fourier-transform definition, which defines a function at every frequency; $\mathcal F$ is complex-linear on $L^1$ and maps it into the bounded uniformly continuous functions, with $\sup_\xi|\widehat f(\xi)|\le\|f\|_1$; and if $\widehat f\in L^1$, then $g(x)=\int_{\mathbb R}\widehat f(\xi)e^{2\pi ix\xi}d\xi$ is bounded and continuous, equals $f$ almost everywhere, and equals the value of $f$ at every Lebesgue point of $f$. [[def-fourier-transform-on-l-one-of-rn]] [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]] [[thm-l-one-fourier-inversion]]

[F5] A $C_c^\infty(\mathbb R)$ function is a Schwartz function: all seminorms $p_{\alpha\beta}(f)=\sup_x|x^\alpha\partial^\beta f(x)|$ are finite because they are suprema of continuous functions of compact support. [[def-schwartz-space-and-its-seminorms]]

[F6] On a compact interval a continuous function is Riemann integrable and hence Lebesgue integrable with the same integral; a nonnegative function Riemann integrable on every $[a,R]$ whose improper integral $\int_a^\infty$ converges is Lebesgue integrable on $[a,\infty)$ with the same integral; oriented additivity over subintervals holds, and the second fundamental theorem gives $\int_u^vG'=G(v)-G(u)$ for a differentiable $G$ with integrable derivative. [[thm-continuous-implies-integrable]] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]] [[thm-additivity-over-subintervals]] [[thm-ftc-second-part]]

[F7] Chain rule, the principal arctangent, and the natural logarithm: $(\arctan)'=1/(1+x^2)$ and $\arctan x=\int_0^xdt/(1+t^2)$; $\arctan$ is the continuous, strictly increasing inverse of $\tan$ on $(-\pi/2,\pi/2)$, so its image is $(-\pi/2,\pi/2)$ and its supremum is $\pi/2$; $\log$ is continuous on $(0,\infty)$, $\log'=1/x$, $\log x=\int_1^xdt/t$, $\log1=0$ and $\log(x/y)=\log x-\log y$; and for differentiable $\varphi$ the mean value theorem bounds a difference quotient by $\|\varphi'\|_\infty$. [[thm-chain-rule]] [[thm-principal-inverse-tangent-calculus]] [[def-principal-inverse-tangent]] [[thm-logarithm-derivative-and-integral]] [[thm-natural-logarithm-laws]] [[cor-mean-value-theorem]]

[F8] Dominated convergence for complex-valued functions, and the a.e.-subsequence property of $L^2$-convergent sequences. [[thm-dominated-convergence]] [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]

[F9] A quotient of polynomials is continuous wherever its denominator does not vanish, so $y\mapsto(x+y)/(a^2+y^2)$ is continuous on $\mathbb R$. [[thm-algebra-of-continuous-functions]]

[F10] Complex and real calculus on intervals: for complex $C^1$ functions $u,v$ on $[a,b]$, $\int_a^bu'=u(b)-u(a)$; $\exp(x+iy)=e^x(\cos y+i\sin y)$ and $|\exp(x+iy)|=e^x$; $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$; the real exponential is smooth with $(\exp)'=\exp$; and the sum, scalar-multiple and product rules and the chain rule for real derivatives hold. [[lem-complex-integration-by-parts-on-intervals-and-decaying-lines]] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[thm-sine-and-cosine-derivatives]] [[thm-derivative-of-exponential]] [[thm-algebra-of-derivatives]] [[thm-chain-rule]]

[F11] Balls, averages and Lebesgue points: every Euclidean ball $B(x,r)$ is Lebesgue measurable with $0<\lambda(B(x,r))<\infty$, so the ball average $A_rf(x)=\lambda(B(x,r))^{-1}\int_{B(x,r)}f\,d\lambda$ is defined for $f\in L^1_{\mathrm{loc}}(\mathbb R^n)$; a point $x$ is a Lebesgue point of $f$ exactly when $A_r(|f-f(x)|)(x)\to0$ as $r\to0^+$; and $\int_Ef\,d\lambda:=\int f\chi_E\,d\lambda$ for integrable real or complex $f$, this indefinite integral being countably additive on pairwise disjoint measurable families. Every continuous function is Borel measurable. [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]] [[def-ball-average-operator-on-r-n]] [[def-lebesgue-point-and-lebesgue-set]] [[def-locally-integrable-function-on-r-n]] [[def-integral-over-a-measurable-set]] [[prop-indefinite-integral-of-an-integrable-function-is-countably-additive]] [[cor-continuous-functions-are-borel-measurable]]

[F12] Reflection and order rules: the reflection $T(x)=-x$ of $\mathbb R^n$ is a $C^1$ diffeomorphism with $|\det DT|=1$, so $\int_{\mathbb R^n}F(T(x))\,d\lambda(x)=\int_{\mathbb R^n}F(y)\,d\lambda(y)$ for every integrable $F$; if $0\le f\le g$ are measurable then $\int f\,d\mu\le\int g\,d\mu$, and $\int cf\,d\mu=c\int f\,d\mu$ for $c\ge0$; the nonnegative integral agrees with the simple integral, and the simple integral of a constant multiple of an indicator is $\int_{\mathrm{simple}}c\chi_E\,d\mu=c\mu(E)$. [[cor-c-one-change-of-variables-for-l-one-functions]] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] [[def-integral-of-a-nonnegative-simple-function]]

[F13] Continuity and decay: sums, scalar multiples and products of continuous real functions, and the absolute value, are continuous, and composites of continuous functions are continuous; the real exponential is $C^\infty$ and hence continuous; and $1+s\le e^s$ for every real $s$, so $e^{-s}\le(1+s)^{-1}\to0$ as $s\to+\infty$. [[thm-algebra-of-continuous-functions]] [[thm-composition-of-continuous-functions]] [[thm-derivative-of-exponential]] [[cor-differentiable-implies-continuous]] [[lem-exponential-dominates-one-plus-x]]

## Proof

**Proof technique:** direct.

Steps 1.1, 2.1, 3.1 and 4.1 settle assertion 1; the remaining steps settle assertions 2 and 3. Nothing in the principal-value computation uses assertion 1.

1.1 Let $q(u):=e^{-2\pi a|u|}$ for $u\in\mathbb R$. Then $q$ is continuous and real-valued: $u\mapsto|u|$ is continuous, so is $u\mapsto-2\pi a|u|$, and the composite with the continuous exponential is continuous [F13]; in particular $q$ is Borel measurable [F11]. For $R>0$ the second fundamental theorem [F6] applied on $[0,R]$ to the antiderivative $u\mapsto-e^{-2\pi au}/(2\pi a)$ gives $\int_0^Re^{-2\pi au}du=\frac{1-e^{-2\pi aR}}{2\pi a}$, and $e^{-2\pi aR}\le\frac{1}{1+2\pi aR}\to0$ as $R\to\infty$ by [F13]; hence the improper Riemann integral of the nonnegative continuous function $q$ over $[0,\infty)$ converges to $\frac{1}{2\pi a}$, and [F6] makes $q$ Lebesgue integrable on $(0,\infty)$ with $\int_{(0,\infty)}q\,d\lambda=\frac{1}{2\pi a}$. The function $q\chi_{[0,\infty)}$ is already integrable by [F6]. Apply [F12] to this function and the reflection $T(u)=-u$, whose Jacobian has absolute value one: its pullback $q\chi_{(-\infty,0]}$ is integrable and has the same integral $1/(2\pi a)$ (the singleton $\{0\}$ has measure zero). Thus $q$ is the sum of two known integrable functions $q\chi_{(-\infty,0]}$ and $q\chi_{(0,\infty)}$, so $q\in L^1(\mathbb R)$ before applying additivity [F11], which gives $\int_{\mathbb R}q\,d\lambda=\frac{1}{\pi a}<\infty$, that is, $q\in L^1(\mathbb R)$. For every ball $B$ monotonicity [F12] gives $\int_Bq\,d\lambda\le\int_{\mathbb R}q\,d\lambda<\infty$, so $q\in L^1_{\mathrm{loc}}(\mathbb R)$ as well. [F6, F11, F12, F13]

1.2 For the integrability of $P_a$ used repeatedly below, note that $0<P_a(y)\le1/(\pi a)$ for all $y$, while $0<P_a(y)\le a/(\pi y^2)$ for $y\ne0$, because $y^2\le a^2+y^2$; hence $P_a\le\min\bigl(1/(\pi a),a/(\pi y^2)\bigr)$ pointwise. By [F6] the continuous bounded function $P_a$ is integrable over $[-a,a]$, and the improper integrals $\int_a^\infty a/(\pi y^2)\,dy$ and $\int_a^\infty a^2/(\pi^2 y^4)\,dy$ converge by the second fundamental theorem applied to the antiderivatives $-a/(\pi y)$ and $-a^2/(3\pi^2 y^3)$ with vanishing limits at infinity. Reflecting the already integrable positive-tail majorants by [F12] gives the corresponding negative-tail bounds. Together with integrability on $[-a,a]$, these bounds give $P_a\in L^1(\mathbb R)\cap L^2(\mathbb R)$, with $\int_{\mathbb R}|P_a|\le4/\pi$ and $\int_{\mathbb R}P_a^2\le8/(3\pi^2a)$. [F6, F12, algebra]

1.3 Substituting $y=x-t$ in the displayed truncation of [F1] shows that for every $x$, every $0<\varepsilon<R$ and every $f\in L^1(\mathbb R)$, $\frac1\pi\int_{\varepsilon<|t|<R}\frac{f(x-t)}{t}dt=\frac1\pi\int_{\varepsilon<|x-y|<R}\frac{f(y)}{x-y}dy$. Subtracting the constant $f(x)$, whose integral against $1/(x-y)$ vanishes over the symmetric domain $\varepsilon<|x-y|<R$ (the substitution $u=y-x$ makes the integrand odd), gives the identity $\frac1\pi\int_{\varepsilon<|x-y|<R}\frac{f(y)}{x-y}dy=\frac1\pi\int_{\varepsilon<|x-y|<R}\frac{f(y)-f(x)}{x-y}dy$, valid when $f$ is bounded near $x$; the subtraction changes no value. [F1, F6, algebra]

2.1 For $\xi\in\mathbb R$ put $z:=2\pi(a+i\xi)$, so that $\operatorname{Re}z=2\pi a>0$ and $|z|\ge2\pi a$, and let $u(t):=-z^{-1}e^{-zt}$ for $t\in\mathbb R$. By [F10], $e^{-zt}=e^{-2\pi at}\bigl(\cos(2\pi\xi t)-i\sin(2\pi\xi t)\bigr)$, and differentiating the two real components with the product, chain, trigonometric and exponential derivative rules of [F10] gives $\frac{d}{dt}e^{-zt}=-ze^{-zt}$, so $u$ is complex $C^1$ on $\mathbb R$ with $u'(t)=e^{-zt}$; the complex fundamental theorem of calculus [F10] on $[0,R]$ then gives $\int_0^Re^{-zt}dt=u(R)-u(0)=\frac{1-e^{-zR}}{z}$, while $|e^{-zR}|=e^{-2\pi aR}\le\frac{1}{1+2\pi aR}\to0$ by [F10] and [F13], so the truncated integrals converge to $1/z$. Moreover $|e^{-zt}|=q(t)$ for $t\ge0$ and $q$ is Lebesgue integrable on $(0,\infty)$ with $\int_{(0,\infty)}q\,d\lambda=\frac{1}{2\pi a}$ by step 1.1, so dominated convergence [F8] applied to the functions $1_{[0,R]}e^{-z\cdot}$, which converge pointwise to $e^{-z\cdot}$ and are dominated by $q$, gives [step 1.1, F6, F8, F10, F13]

$$ \int_{(0,\infty)}e^{-zt}\,d\lambda(t)=\lim_{R\to\infty}\int_{[0,R]}e^{-zt}\,d\lambda(t)=\lim_{R\to\infty}\int_0^Re^{-zt}\,dt=\frac1z=\frac{1}{2\pi(a+i\xi)}, $$

the middle equality because on the compact interval $[0,R]$ the continuous integrand has the same Riemann and Lebesgue integrals [F6]. Replacing $\xi$ by $-\xi$ throughout gives the companion identity $\int_{(0,\infty)}e^{-2\pi(a-i\xi)t}\,d\lambda(t)=\frac{1}{2\pi(a-i\xi)}$.

2.2 Fix $x\in\mathbb R$. Since $q$ is continuous at $x$ [F13], for every $\varepsilon>0$ there is $\delta>0$ such that $|q(y)-q(x)|<\varepsilon$ whenever $|y-x|<\delta$; for $0<r<\delta$ the pointwise bound $|q-q(x)|\chi_{B(x,r)}\le\varepsilon\chi_{B(x,r)}$, the monotonicity and homogeneity of the nonnegative integral, and the value $\int_{\mathrm{simple}}\varepsilon\chi_{B(x,r)}\,d\lambda=\varepsilon\lambda(B(x,r))$ of the simple integral [F12] give, since $\lambda(B(x,r))$ is positive and finite [F11] and $q\in L^1_{\mathrm{loc}}(\mathbb R)$ by step 1.1, that the ball average $A_r(|q-q(x)|)(x)$ of [F11] satisfies $A_r(|q-q(x)|)(x)\le\varepsilon$ for every $0<r<\delta$ [step 1.1, F11, F12, F13]

$$ \int_{B(x,r)}|q(y)-q(x)|\,d\lambda(y)\le\varepsilon\,\lambda(B(x,r)) .$$

Since $\varepsilon>0$ was arbitrary, the limit as $r\to0^+$ of the average is $0$, so every $x$ is a Lebesgue point of $q$ with value $q(x)$ [F11].

2.3 Applying step 1.3 to $f=P_a$ and using [step 1.3, algebra]

$$ \frac{P_a(y)-P_a(x)}{x-y} =\frac{a}{\pi}\cdot\frac{x+y}{(a^2+x^2)(a^2+y^2)} ,$$

which is algebra from $P_a(y)-P_a(x)=\frac{a}{\pi}\cdot\frac{(a^2+x^2)-(a^2+y^2)}{(a^2+x^2)(a^2+y^2)}$ and $(a^2+x^2)-(a^2+y^2)=(x-y)(x+y)$, gives for $0<\varepsilon<R$

$$ \frac1\pi\int_{\varepsilon<|t|<R}\frac{P_a(x-t)}{t}\,dt =\frac{a}{\pi^2}\cdot\frac{1}{a^2+x^2}\int_{\varepsilon<|x-y|<R}\frac{x+y}{a^2+y^2}\,dy .$$

2.4 For the $L^2$ assertion, note that $|Q_a(y)|=\frac{|y|}{\pi(a^2+y^2)}\le\frac1{2\pi a}$ for all $y$ and $|Q_a(y)|\le\frac1{\pi|y|}$ for $|y|\ge a$; the same elementary integration as in step 1.2, by [F6], gives $Q_a\in L^2(\mathbb R)$. [step 1.2, F6, algebra]

2.5 For $j\ge1$ define $\psi_j(y):=P_a(y)\chi(y/j)$ with $\chi$ as in [F3]. Each $\psi_j$ lies in $C_c^\infty(\mathbb R)$ and hence in $\mathcal S(\mathbb R)$ by [F5], with $0\le\psi_j\le P_a$; and $\psi_j(y)=P_a(y)$ as soon as $j\ge|y|$, so $\psi_j\to P_a$ pointwise everywhere. Since $|\psi_j-P_a|\le2P_a$ with $P_a\in L^1\cap L^2$ by step 1.2, dominated convergence [F8] gives $\|\psi_j-P_a\|_1\to0$ and $\|\psi_j-P_a\|_2\to0$. [step 1.2, F3, F5, F8]

3.1 By the definition of the transform [F4], $\widehat q(\xi)=\int_{\mathbb R}q(t)e^{-2\pi i\xi t}d\lambda(t)$ for every $\xi$; the integrand $h_\xi:=q\,e^{-2\pi i\xi\cdot}$ satisfies $|h_\xi|=q\in L^1(\mathbb R)$ by step 1.1, so $h_\xi$ is integrable and its indefinite integral is countably additive on pairwise disjoint measurable families [F11]. Splitting over the disjoint measurable sets $(-\infty,0]$ and $(0,\infty)$, which cover $\mathbb R$, and applying the reflection change of variables [F12] to the integrable function $h_\xi\chi_{(-\infty,0]}$, whose reflection is $q\chi_{(0,\infty)}e^{2\pi i\xi\cdot}$ because $q$ is even, gives, using step 2.1 on each half-line and step 2.1 again with $\xi$ replaced by $-\xi$, [step 1.1, step 2.1, F4, F11, F12, algebra]

$$ \int_{(-\infty,0]}q(t)e^{-2\pi i\xi t}\,d\lambda(t)=\int_{(0,\infty)}q(s)e^{2\pi i\xi s}\,d\lambda(s)=\int_{(0,\infty)}e^{-2\pi(a-i\xi)s}\,d\lambda(s)=\frac{1}{2\pi(a-i\xi)}, $$

while the positive half contributes $\int_{(0,\infty)}q(t)e^{-2\pi i\xi t}d\lambda(t)=\int_{(0,\infty)}e^{-2\pi(a+i\xi)t}d\lambda(t)=\frac{1}{2\pi(a+i\xi)}$. Adding the two pieces and simplifying,

$$ \widehat q(\xi)=\frac{1}{2\pi}\Bigl(\frac{1}{a+i\xi}+\frac{1}{a-i\xi}\Bigr)=\frac{1}{2\pi}\cdot\frac{2a}{a^2+\xi^2}=\frac{a}{\pi(a^2+\xi^2)}=P_a(\xi) $$

for every $\xi\in\mathbb R$, since $(a+i\xi)(a-i\xi)=a^2+\xi^2$.

3.2 Put $G(y):=\frac{x}{a}\arctan\frac{y}{a}+\frac12\log(a^2+y^2)$. By the chain rule, the arctangent and logarithm derivatives of [F7], and [F9], $G$ is differentiable on $\mathbb R$ with $G'(y)=\frac{x}{a^2+y^2}+\frac{y}{a^2+y^2}=\frac{x+y}{a^2+y^2}$. Since the domain $\{\varepsilon<|x-y|<R\}$ is the disjoint union of the intervals $(x-R,x-\varepsilon)$ and $(x+\varepsilon,x+R)$ on which $y\mapsto(x+y)/(a^2+y^2)$ is continuous, [F6] and the right-hand integral of step 2.3 give [step 2.3, F6, F7, F9]

$$ \int_{\varepsilon<|x-y|<R}\frac{x+y}{a^2+y^2}\,dy=G(x+R)-G(x-R)+G(x-\varepsilon)-G(x+\varepsilon) ,$$

that is, with all logarithms of positive arguments,

$$ \frac{x}{a}\Bigl[\arctan\frac{x+R}{a}-\arctan\frac{x-R}{a}+\arctan\frac{x-\varepsilon}{a}-\arctan\frac{x+\varepsilon}{a}\Bigr] +\frac12\log\frac{(a^2+(x-\varepsilon)^2)(a^2+(x+R)^2)}{(a^2+(x+\varepsilon)^2)(a^2+(x-R)^2)} .$$

3.3 Fix $x\in\mathbb R$ and $j>|x|$, and use the functions $\psi_j$ of step 2.5. For Schwartz $\psi_j$, [F2] represents the principal value at $x$ by the two-piece pairing, and the oddness cancellation of step 1.3 identifies it with $(W*\psi_j)(x)=\frac1\pi\int_{|t|>1}\frac{\psi_j(x-t)}{t}dt+\frac1\pi\int_{|t|<1}\frac{\psi_j(x-t)-\psi_j(x)}{t}dt$; combining this with the same identity for $P_a$ in step 1.3, and abbreviating $\delta_j:=\psi_j-P_a$, gives for every $0<\varepsilon<1$ [step 2.5, step 1.3, F1, F2]

$$ H_\varepsilon\psi_j(x)-H_\varepsilon P_a(x) =\frac1\pi\int_{\varepsilon<|t|<1}\frac{\delta_j(x-t)-\delta_j(x)}{t}\,dt +\frac1\pi\int_{|t|>1}\frac{\delta_j(x-t)}{t}\,dt .$$

3.4 By [F2] the isometry $H$ is defined on $L^2$ and is linear, so $\|H\psi_j-HP_a\|_2=\|\psi_j-P_a\|_2\to0$ by step 2.5; that is, $H\psi_j\to HP_a$ in $L^2(\mathbb R)$. [step 2.5, F2, F8]

4.1 Both $q\in L^1(\mathbb R)$ (step 1.1) and $\widehat q=P_a\in L^1(\mathbb R)$ (step 1.2, step 3.1) are integrable, so the inversion theorem [F4] applied to $f:=q$ gives a bounded continuous function $g(x)=\int_{\mathbb R}P_a(\xi)e^{2\pi ix\xi}d\lambda(\xi)$ that agrees with $q$ almost everywhere and agrees with $q(x)$ at every Lebesgue point $x$ of $q$; every real $x$ is such a point by step 2.2, so $g(x)=e^{-2\pi a|x|}$ everywhere, and writing the defining integral of $\widehat{P_a}$ [F4] at the frequency $-x$ identifies $g(x)=\widehat{P_a}(-x)$, so $\widehat{P_a}(-x)=e^{-2\pi a|x|}$ for every $x$, and replacing $x$ by $-\xi$ gives $\widehat{P_a}(\xi)=e^{-2\pi a|\xi|}$ for every $\xi$; this proves assertion 1. [step 1.1, step 1.2, step 2.2, step 3.1, F4]

4.2 Since $P_a\in L^1$ by step 1.2, for each fixed $\varepsilon>0$ the full integral $H_\varepsilon P_a(x)=\frac1\pi\int_{|t|>\varepsilon}P_a(x-t)/t\,dt$ converges absolutely and is the limit of its truncations at $R\to\infty$; hence passing to the limit $R\to\infty$ in step 3.2 is legitimate. As $R\to\infty$, $\arctan\frac{x+R}{a}\to\frac\pi2$ and $\arctan\frac{x-R}{a}\to-\frac\pi2$ because $\arctan$ is increasing with supremum $\pi/2$ and infimum $-\pi/2$ on its range $(-\pi/2,\pi/2)$; the logarithmic argument tends to $\frac{a^2+(x-\varepsilon)^2}{a^2+(x+\varepsilon)^2}>0$, and log is continuous there by [F7]. Therefore [step 1.2, step 3.2, F6, F7]

$$ H_\varepsilon P_a(x)=\frac{a}{\pi^2(a^2+x^2)}\Bigl[\frac{x}{a}\Bigl(\pi+\arctan\frac{x-\varepsilon}{a}-\arctan\frac{x+\varepsilon}{a}\Bigr) +\frac12\log\frac{a^2+(x-\varepsilon)^2}{a^2+(x+\varepsilon)^2}\Bigr] .$$

5.1 Letting $\varepsilon\downarrow0$ in step 4.2, continuity of $\arctan$ and $\log$ [F7] gives $\arctan\frac{x-\varepsilon}{a}-\arctan\frac{x+\varepsilon}{a}\to0$ and $\log\frac{a^2+(x-\varepsilon)^2}{a^2+(x+\varepsilon)^2}\to\log1=0$; hence [step 4.2, F7]

$$ \lim_{\varepsilon\downarrow0}H_\varepsilon P_a(x)=\frac{a}{\pi^2(a^2+x^2)}\cdot\frac{x\pi}{a}=\frac{x}{\pi(a^2+x^2)}=Q_a(x) .$$

This holds for every $x\in\mathbb R$, including $x=0$, where both the display and the oddness of the truncated integrand give value $0$. This proves assertion 2.

6.1 In the situation of step 3.3 one has $\delta_j(x)=0$, and $\sup_j\|\delta_j'\|_\infty<\infty$: indeed $\delta_j'=P_a'(\chi(\cdot/j)-1)+P_a\chi'(\cdot/j)/j$ with $\|\chi(\cdot/j)-1\|_\infty\le1$ and $|\chi'(\cdot/j)/j|\le\|\chi'\|_\infty/j$, while $P_a$ and $P_a'$ are bounded. Hence the mean value theorem [F7] bounds the difference quotient of $\delta_j$ by a constant $C(a)$ uniformly in $j$ on $|t|<1$, and the integrand of the first term of step 3.3 is dominated by the integrable constant $C(a)$ on $0<|t|<1$; letting $\varepsilon\downarrow0$ by dominated convergence [F8], and using that $H_\varepsilon\psi_j(x)\to H\psi_j(x)$ and $H_\varepsilon P_a(x)\to Q_a(x)$ by [F2] and step 5.1, [step 5.1, step 3.3, F7, F8]

$$ H\psi_j(x)-Q_a(x) =\frac1\pi\int_{0<|t|<1}\frac{\delta_j(x-t)-\delta_j(x)}{t}\,dt +\frac1\pi\int_{|t|>1}\frac{\delta_j(x-t)}{t}\,dt .$$

7.1 The first term of step 6.1 tends to $0$ as $j\to\infty$ by dominated convergence [F8]: for each fixed $t\ne0$ the integrand tends to $0$ because $\delta_j\to0$ pointwise and $\delta_j(x)=0$ for $j>|x|$, and it is dominated by $C(a)$ on the finite-measure set $0<|t|<1$; the second term tends to $0$ because $\bigl|\int_{|t|>1}\delta_j(x-t)/t\,dt\bigr|\le\|\delta_j\|_1\to0$ by step 2.5. Therefore $H\psi_j(x)\to Q_a(x)$ for every fixed $x$. [step 2.5, step 6.1, F8]

8.1 By step 3.4 the sequence $H\psi_j$ converges in $L^2$ to a representative of the class $HP_a$; by [F8] it has a subsequence converging almost everywhere to a representative of $HP_a$, while step 7.1 makes that same subsequence converge to $Q_a$ at every point. Hence $Q_a=HP_a$ almost everywhere, i.e. $Q_a=HP_a$ in $L^2(\mathbb R;\mathbb C)$, which is assertion 3. [step 3.4, step 7.1, F8] ∎
