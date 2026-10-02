---
id: lem-singular-kernel-sine-integral-under-countable-choice
kind: lemma
title: "The sine integral under Countable Choice: uniform bounds and the value pi/2"
status: published
origin: pipeline
deps: [def-countable-choice, thm-sine-and-cosine-derivatives, cor-sine-and-cosine-are-one-lipschitz, cor-trigonometric-parity-and-pythagorean-identity, thm-derivative-of-exponential, thm-chain-rule, lem-exponential-dominates-one-plus-x, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-ftc-second-part, thm-integration-by-parts, thm-additivity-over-subintervals, thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, cor-continuous-functions-are-borel-measurable, thm-principal-inverse-tangent-calculus, def-principal-inverse-tangent, thm-substitution-for-improper-integrals]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.1, equations (5.1.9)-(5.1.12) and the uniform sine-integral argument, printed pp. 316-317"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, the oscillatory Hilbert kernel calculation (20.2), printed pp. 114-115"
---

## Statement

Assume [[def-countable-choice|Countable Choice]]. Put
$f(u):=\sin(u)/u$ for $u>0$ and $f(0):=1$, and write
$S(T):=\int_0^Tf(u)\,du$ for $T\ge0$. Then:

1. $S(T)\to\pi/2$ as $T\to\infty$; that is, the improper integral
   $\int_0^\infty\sin(u)/u\,du$ converges and equals $\pi/2$.
2. The partial integrals are uniformly bounded: $|S(T)|\le3$ for every
   $T\ge0$, moreover $|S(T)|\le T$ for $0\le T\le1$, and more precisely
   $\bigl|\int_A^B\sin(u)/u\,du\bigr|\le2/A$ for all $1\le A<B$.
3. For every real $z$ and every $T\ge0$, reading the integrand at $t=0$ as
   $z$,

$$ \int_{-T}^T\frac{\sin(tz)}{t}\,dt=2\operatorname{sgn}(z)\,S(T|z|) ,$$

   so that $\lim_{T\to\infty}\int_{-T}^T\sin(tz)/t\,dt=\pi\operatorname{sgn}(z)$
   and $\bigl|\int_{-T}^T\sin(tz)/t\,dt\bigr|\le6$ for every $T\ge0$ and every
   real $z$.

The argument uses Countable Choice only; it does not invoke the published
full-AC sine-integral lemma of the same name on the Dirichlet-kernel page.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]) and the functions $f$ and $S$ of the statement.

[F1] Integration by parts on a compact interval for differentiable factors with integrable derivatives. [[thm-integration-by-parts]]

[F2] The second fundamental theorem: an integrable derivative integrates to the endpoint increment. [[thm-ftc-second-part]]

[F3] Under Countable Choice a bounded Riemann integrable function on a compact interval is Lebesgue measurable, and its Riemann and Lebesgue integrals agree. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]

[F4] Fubini's theorem for L^1 functions on a sigma-finite product. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F5] Tonelli's theorem for nonnegative product-measurable functions on a sigma-finite product. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F6] Dominated convergence. [[thm-dominated-convergence]]

[F7] Sine and cosine have derivatives cosine and minus sine, and $\sin0=0$, $\cos0=1$. [[thm-sine-and-cosine-derivatives]]

[F8] The real exponential is its own derivative. [[thm-derivative-of-exponential]]

[F9] The chain rule. [[thm-chain-rule]]

[F10] $1+x\le e^x$ for every real $x$, hence $e^{-x}\le1/(1+x)$ for $x\ge0$ and $e^{-x}\to0$ as $x\to\infty$. [[lem-exponential-dominates-one-plus-x]]

[F11] A continuous function on a compact interval is Riemann integrable. [[thm-continuous-implies-integrable]]

[F12] Sine and cosine are 1-Lipschitz: $|\sin u-\sin v|\le|u-v|$ and $|\cos u-\cos v|\le|u-v|$. [[cor-sine-and-cosine-are-one-lipschitz]]

[F13] Parity and the Pythagorean identity: $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$, $\sin^2x+\cos^2x=1$, hence $|\sin x|\le1$ and $|\cos x|\le1$. [[cor-trigonometric-parity-and-pythagorean-identity]]

[F14] Continuous maps on Euclidean spaces are Borel measurable, so the product integrands below are measurable. [[cor-continuous-functions-are-borel-measurable]]

[F15] Change of variable for improper integrals: for a monotone differentiable surjection satisfying the proper hypotheses on compact truncations, the two improper integrals converge simultaneously and are equal, with orientation retained for decreasing parametrizations. [[thm-substitution-for-improper-integrals]]

[F16] Principal arctangent: $\arctan'=1/(1+x^2)$ and $\arctan x=\int_0^xdt/(1+t^2)$. [[thm-principal-inverse-tangent-calculus]]

[F17] Principal arctangent is a continuous strictly increasing bijection from $\mathbb R$ onto $(-\pi/2,\pi/2)$, and $\arctan(\tan x)=x$ on the principal interval. [[def-principal-inverse-tangent]]

[F18] A convergent nonnegative improper Riemann integral on a half-line agrees with the Lebesgue integral of its integrand, under Countable Choice. [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]

[F19] Additivity of the integral over subintervals, in the oriented form. [[thm-additivity-over-subintervals]]

## Proof

**Proof technique:** direct.

1.1 By [F7], $\sin0=0$ and $\sin'(0)=\cos0=1$, so $\sin(u)/u\to1=f(0)$ as $u\to0$; and [F12] with $v=0$ gives $|\sin u|\le u$ for $u\ge0$, while [F13] gives $|\cos u|\le1$. Thus $f$ is bounded by $1$ on $[0,\infty)$ and continuous at $0$ from the right. [F7, F12, F13]

1.2 For $u\ge0$ and $\varepsilon>0$, [F8] and [F9] give $(e^{-\varepsilon u})'=-\varepsilon e^{-\varepsilon u}$, and [F10] bounds $e^{-\varepsilon u}\le1/(1+\varepsilon u)$, so $e^{-\varepsilon u}\to0$ as $u\to\infty$; [F2] applied to $u\mapsto-e^{-\varepsilon u}/\varepsilon$ therefore gives $\int_0^Re^{-\varepsilon u}\,du=(1-e^{-\varepsilon R})/\varepsilon$ for every $R>0$, and this tends to $1/\varepsilon$ as $R\to\infty$ when $\varepsilon>0$. By [F18] the nonnegative continuous function $u\mapsto e^{-\varepsilon u}$ is Lebesgue integrable on $[0,\infty)$ with $\int_{[0,\infty)}e^{-\varepsilon u}\,d\lambda(u)=1/\varepsilon$. [F2, F8, F9, F10, F18]

1.3 For $t>0$, [F2] applied to $s\mapsto\sin(st)/t$, whose derivative is $\cos(st)$ by [F7] and [F9], gives $\int_0^1\cos(st)\,ds=\sin(t)/t$, and at $t=0$ both sides equal $1$. For $\varepsilon>0$ and $s\in[0,1]$ put $H(t):=e^{-\varepsilon t}\bigl(-\varepsilon\cos(st)+s\sin(st)\bigr)/(\varepsilon^2+s^2)$; [F8], [F9] and [F7] give $H'(t)=e^{-\varepsilon t}\cos(st)$, while [F10], [F12] and [F13] give $H(0)=-\varepsilon/(\varepsilon^2+s^2)$ and $H(t)\to0$ as $t\to\infty$. [F2, F7, F8, F9, F10, F12, F13]

2.1 By 1.1 the quotient $u\mapsto\sin(u)/u$ is continuous on $(0,\infty)$ and extends continuously to $u=0$ with value $1$, and it is bounded by $1$ there; by [F11] it is Riemann integrable on every compact interval $[0,T]$, $T>0$. [step 1.1, F11]

2.2 Let $1\le A<B$ and $0\le\varepsilon\le1$, and put $w(u):=e^{-\varepsilon u}/u$ on $[A,B]$. By [F8] and [F9], $w$ is continuously differentiable with $w'(u)=-e^{-\varepsilon u}(\varepsilon u+1)/u^2\le0$, so $w$ is nonincreasing, $w'>0$ holds nowhere, and [F2] gives $\int_A^B|w'|=w(A)-w(B)$. Since $(\cos u)'=-\sin u$ by [F7], [F1] applies with factors $w$ and $-\cos$ and, using $|\cos|\le1$ from 1.1, yields $|\int_A^Bw(u)\sin u\,du|\le w(A)+w(B)+\int_A^B|w'|=2w(A)\le2/A$; at $\varepsilon=0$ this is $|\int_A^B\sin(u)/u\,du|\le2/A$. [step 1.1, F1, F2, F7, F8, F9]

3.1 Under the given Countable Choice, [F3] applies on every compact interval: for the continuous integrands $f$, $e^{-\varepsilon t}f$ and $e^{-\varepsilon t}\cos(st)$ of steps 2.1 and 2.2, the proper Riemann integral on $[0,T]$ or $[A,B]$ equals the corresponding Lebesgue integral. [given, step 2.1, step 2.2, F3, F11]

3.2 By 2.1 and [F19], for $T\ge1$ one has $S(T)=\int_0^1f+\int_1^T\sin(u)/u\,du$ with $|\int_0^1f|\le1$ and $|\int_1^T\sin(u)/u\,du|\le2$ by 2.2; for $0\le T\le1$ the bound $|S(T)|\le T$ follows from $|f|\le1$ in 2.1, and $T\le1$ gives $|S(T)|\le1$. Hence $|S(T)|\le3$ for every $T\ge0$ and $|S(T)|\le T$ on $[0,1]$. [step 2.1, step 2.2, F19]

4.1 Fix $s\in[0,1]$ and $\varepsilon>0$. By [F6] applied on $[0,\infty)$ to the functions $t\mapsto e^{-\varepsilon t}\cos(st)\chi_{[0,T]}(t)$ as $T\to\infty$, which converge pointwise to $t\mapsto e^{-\varepsilon t}\cos(st)$ and are dominated by the integrable function $e^{-\varepsilon t}$ of 1.2, and by 3.1 and 1.3, $\int_{[0,\infty)}e^{-\varepsilon t}\cos(st)\,d\lambda(t)=\lim_{T\to\infty}H(T)-H(0)=\varepsilon/(\varepsilon^2+s^2)$. [step 1.2, step 1.3, step 3.1, F6]

4.2 Let $A\ge1$ and $0<\varepsilon\le1$. The functions $t\mapsto e^{-\varepsilon t}f(t)\chi_{[A,B]}(t)$ converge pointwise as $B\to\infty$ to $t\mapsto e^{-\varepsilon t}f(t)\chi_{[A,\infty)}(t)$ and are dominated by the integrable function $e^{-\varepsilon t}\chi_{[A,\infty)}$, so [F6] with 2.2 and 3.1 gives $\bigl|\int_{[A,\infty)}e^{-\varepsilon t}f(t)\,d\lambda(t)\bigr|=\lim_{B\to\infty}\bigl|\int_A^Be^{-\varepsilon t}f(t)\,dt\bigr|\le2/A$. For $\varepsilon=0$, the bound in 2.2 makes $\int_A^Bf(t)\,dt$ Cauchy as $B\to\infty$ and bounds the resulting improper tail by $2/A$. [step 1.2, step 2.2, step 3.1, F6]

4.3 For fixed $A>0$, $e^{-\varepsilon t}f(t)\to f(t)$ as $\varepsilon\downarrow0$ for every $t\in[0,A]$, with $|e^{-\varepsilon t}f(t)|\le1$ and $[0,A]$ of finite measure, so [F6] and 3.1 give $\int_{[0,A]}e^{-\varepsilon t}f(t)\,d\lambda(t)\to\int_{[0,A]}f(t)\,d\lambda(t)=S(A)$ as $\varepsilon\downarrow0$. [step 2.1, step 3.1, F6]

5.1 Fix $\varepsilon>0$ and put $\Phi(s,t):=e^{-\varepsilon t}\cos(st)$ on $[0,1]\times[0,\infty)$. By [F14] the integrand $\Phi$ is product measurable, and [F5] with 1.2 gives $\int_{[0,1]\times[0,\infty)}|\Phi|\,d(\lambda\otimes\lambda)\le\int_{[0,1]}\bigl(\int_{[0,\infty)}e^{-\varepsilon t}\,d\lambda(t)\bigr)ds=1/\varepsilon<\infty$, so $\Phi\in L^1$ of the product and [F4] may be applied. By 1.3, 3.1 and 4.1, the outer $s$-integration of [F4] turns the $t$-inner integral into $\varepsilon/(\varepsilon^2+s^2)$, while the outer $t$-integration turns the $s$-inner integral into $e^{-\varepsilon t}\sin(t)/t$; hence $J_\varepsilon:=\int_{[0,\infty)}e^{-\varepsilon t}f(t)\,d\lambda(t)$ satisfies $J_\varepsilon=\int_0^1\varepsilon/(\varepsilon^2+s^2)\,ds$, and [F15] with the substitution $s=\varepsilon v$ followed by [F16] gives $J_\varepsilon=\int_0^{1/\varepsilon}dv/(1+v^2)=\arctan(1/\varepsilon)$. [step 1.2, step 1.3, step 3.1, step 4.1, F4, F5, F14, F15, F16]

6.1 Let $A\ge1$ and $0<\varepsilon\le1$. By 4.2 and 4.3, $|S(A)-J_\varepsilon|\le|S(A)-\int_{[0,A]}e^{-\varepsilon t}f\,d\lambda|+2/A$, so letting $\varepsilon\downarrow0$ and using 5.1 gives $|S(A)-\pi/2|\le2/A$: indeed $\arctan(1/\varepsilon)\to\pi/2$ since [F17] makes $\arctan$ strictly increasing onto $(-\pi/2,\pi/2)$, whence for every $v<\pi/2$ one has $\arctan y>v$ for all $y>\tan v$, while $\arctan(1/\varepsilon)<\pi/2$ always. Letting $A\to\infty$ yields $S(T)\to\pi/2$, so the improper integral $\int_0^\infty\sin(u)/u\,du$ converges to $\pi/2$. [step 4.2, step 4.3, step 5.1, F17]

7.1 If $z=0$, the integrand with its assigned value at $t=0$ is identically zero, and the identity, bound and limit follow directly, with $\operatorname{sgn}(0)=0$. If $T=0$, both finite integrals vanish. For $z\ne0$ and $T>0$, put $g(t):=\sin(tz)/t$ for $t\ne0$, $g(0):=z$; by [F7] and [F13], $g$ is continuous and even, so [F15] with the substitution $t\mapsto-t$ on $[0,T]$ and [F19] give $\int_{-T}^Tg=2\int_0^Tg$. By [F15] with the substitution $u=|z|t$ (orientation retained, and $\sin(-u)/(-u)=\sin(u)/u$ by [F13]) and [F7], $\int_0^Tg=\operatorname{sgn}(z)\int_0^{T|z|}\sin(u)/u\,du=\operatorname{sgn}(z)S(T|z|)$, so $\int_{-T}^Tg=2\operatorname{sgn}(z)S(T|z|)$; step 3.2 bounds this by $6$, and step 6.1 gives the limit $\pi\operatorname{sgn}(z)$. [step 3.2, step 6.1, F7, F13, F15, F19] ∎
