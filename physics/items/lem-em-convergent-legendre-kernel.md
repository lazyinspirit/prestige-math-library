---
id: lem-em-convergent-legendre-kernel
kind: lemma
domain: mathematics
title: "Legendre polynomials from a convergent zonal kernel: generating function and exterior expansion"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [thm-intermediate-value, def-complex-domain, thm-identity-theorem-holomorphic-functions, thm-differentiation-under-the-integral-sign, thm-substitution, thm-principal-inverse-tangent-calculus, thm-weierstrass-m-test-for-function-series, def-series-of-real-functions, def-countable-choice, thm-interior-derivative-estimates-for-harmonic-functions, thm-termwise-differentiation-of-complex-power-series, cor-power-series-sums-are-smooth-with-coefficient-formula, thm-newton-leibniz-with-interior-derivative, thm-clairaut-schwarz-mixed-partials, lem-laplace-fundamental-solution-is-harmonic-off-its-pole, prop-order-and-scalar-rules-for-the-nonnegative-integral, lem-binomial-theorem-over-complex-numbers, lem-wallis-integrals-recurrence-and-squeeze, thm-cofunction-supplementary-and-reflection-identities, thm-additivity-over-subintervals, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, thm-norm-inequality-for-the-vector-valued-integral, def-vector-valued-derivative-and-integral, thm-complex-numbers-are-the-real-coordinate-plane, def-complex-conjugate-real-imaginary-part-and-modulus, def-uniform-convergence-of-complex-valued-functions, thm-uniform-limit-interchanges-riemann-integration, def-complex-differentiability-holomorphic-and-entire, thm-algebra-of-complex-derivatives, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-sine-and-cosine-addition-formulas, thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions, def-principal-inverse-tangent, def-tangent-cotangent-secant-cosecant]
dependency_roles:
  thm-intermediate-value: mathematical-premise
  def-complex-domain: mathematical-premise
  thm-identity-theorem-holomorphic-functions: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-substitution: mathematical-premise
  thm-principal-inverse-tangent-calculus: mathematical-premise
  thm-weierstrass-m-test-for-function-series: mathematical-premise
  def-series-of-real-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-interior-derivative-estimates-for-harmonic-functions: mathematical-premise
  thm-termwise-differentiation-of-complex-power-series: mathematical-premise
  cor-power-series-sums-are-smooth-with-coefficient-formula: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  lem-laplace-fundamental-solution-is-harmonic-off-its-pole: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  lem-binomial-theorem-over-complex-numbers: mathematical-premise
  lem-wallis-integrals-recurrence-and-squeeze: mathematical-premise
  thm-cofunction-supplementary-and-reflection-identities: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-complex-numbers-are-the-real-coordinate-plane: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  def-uniform-convergence-of-complex-valued-functions: mathematical-premise
  thm-uniform-limit-interchanges-riemann-integration: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  thm-algebra-of-complex-derivatives: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions: mathematical-premise
  def-principal-inverse-tangent: mathematical-premise
  def-tangent-cotangent-secant-cosecant: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sheldon Axler, Paul Bourdon, Wade Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text"
      url: "https://www.axler.net/HFT.pdf"
      locator: "Chapter 5 (printed pp. 78-82 orthogonal spherical decomposition; pp. 94-100 zonal harmonic projection, addition and Poisson expansion), read in the retrieved full text; the source uses unit-mass sphere measure while this item uses mass 4 pi. The generating-function, branch and exterior-tail arguments are completed locally here and are not claimed as a verbatim source theorem."
    - title: "NIST Digital Library of Mathematical Functions, Sec. 18.12 Generating Functions (Eq. 18.12.4, Legendre generating function)"
      url: "https://dlmf.nist.gov/18.12"
      locator: "Sec. 18.12 complete, in particular Eq. 18.12.4; consulted for the classical generating function (1-2xz+z^2)^{-1/2}=sum P_n(x)z^n, whose branch and convergence statements are reproved here from the integral definition."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

For $z\in[-1,1]$ define the real polynomial $P_l(z)=\pi^{-1}\int_0^\pi\bigl[z+i\sqrt{1-z^2}\,\cos\theta\bigr]^l\,d\theta$, $l\in\mathbb N_0$. Then $P_l$ is a real polynomial of degree at most $l$ with $|P_l(z)|\le1$ on $[-1,1]$, $P_l(1)=1$, and for $|q|<1$ the series $\sum_{l\ge0}q^lP_l(z)$ converges absolutely and uniformly on $[-1,1]$ with

$$(1-2qz+q^2)^{-1/2}=\sum_{l=0}^{\infty}q^lP_l(z),$$

where the branch is the analytic square root equal to $1$ at $q=0$ ([[def-series-of-real-functions]], [[thm-weierstrass-m-test-for-function-series]]). Consequently, for $x\ne0$, $r:=|x|>|y|$ and $n=x/|x|$ and $N\in\mathbb N_0$,

$$\bigl|\,|x-y|^{-1}-\sum_{l=0}^{N}|y|^l|x|^{-l-1}P_l(n\cdot y/|y|)\bigr|\le|y|^{N+1}|x|^{-N-2}(1-|y|/|x|)^{-1},$$

uniformly on $|y|\le a<r$ (with $y=0$ interpreted by the zero higher terms), and after integrating against an $L^1$ source the corresponding multipole expansion converges with that error times its $L^1$ norm. For the integrated $L^1$-source and every-spatial-derivative assertions, assume Countable Choice ([[def-countable-choice]]) through the Lebesgue and harmonic-estimate interfaces. On an observation compact set disjoint from $\overline{B_a(0)}$ every fixed spatial derivative series converges uniformly, uniformly also over $|y|\le a$, by harmonicity of the coefficient terms and [[thm-interior-derivative-estimates-for-harmonic-functions]]. The initial finite-Riemann polynomial/generating assertions are choice-free. This lemma supplies the convergent zonal kernel; it does not by itself prove a spherical $L^2$ basis or boundary convergence.

## Facts & Assumptions

**Given:** A real $z\in[-1,1]$, an integer $l\in\mathbb N_0$, a complex $q$ with $|q|<1$, the function $w(\theta)=z+i\sqrt{1-z^2}\cos\theta$ on $[0,\pi]$, a compact observation set $K\subset\mathbb R^3\setminus\{0\}$, a radius $a\ge0$ with $\inf_K|x|>a$, a real $L^1$ density $\rho$ vanishing outside the closed ball of radius $a$, and Countable Choice for the integrated-source and derivative assertions.

[L1] **Interval integrals of $\mathbb C$-valued functions.** Under the identification $\Phi:\mathbb C\to\mathbb R^2$, $\Phi(a+bi)=(a,b)$, of [[thm-complex-numbers-are-the-real-coordinate-plane]], with $|z|=\lVert\Phi(z)\rVert_2$ by [[def-complex-conjugate-real-imaginary-part-and-modulus]], the integral of a $\mathbb C$-valued function on $[a,b]$ is the componentwise one of [[def-vector-valued-derivative-and-integral]]; it is linear in the integrand ([[thm-linearity-of-the-integral]] applied componentwise), it is additive over adjacent intervals ([[thm-additivity-over-subintervals]] claim 3), and by [[thm-norm-inequality-for-the-vector-valued-integral]] $\bigl|\int_a^b f\bigr|\le\int_a^b|f|$ for $a\le b$. For real-valued integrands, [[thm-monotonicity-of-the-integral]] gives nonnegativity, monotonicity, and the two-sided bound $m(b-a)\le\int_a^b f\le M(b-a)$ when $m\le f\le M$.

[L2] **Uniform convergence and termwise integration.** With the conventions of [[def-series-of-real-functions]], [[thm-weierstrass-m-test-for-function-series]] states: if $|f_k|\le M_k$ and $\sum M_k<\infty$, then $\sum f_k$ converges absolutely and uniformly. By [[def-uniform-convergence-of-complex-valued-functions]] a series of $\mathbb C$-valued functions converges uniformly exactly when its real and imaginary parts do; and [[thm-uniform-limit-interchanges-riemann-integration]] gives $\int_a^b f_k\to\int_a^b f$ for a uniformly convergent sequence of integrable functions on $[a,b]$, applied to those two real components.

[L3] **Holomorphy, power series and the identity theorem.** [[def-complex-differentiability-holomorphic-and-entire]]: a function is holomorphic on an open set when it is complex differentiable at every point; a complex domain is nonempty, connected and open ([[def-complex-domain]]). [[thm-termwise-differentiation-of-complex-power-series]]: a power series is holomorphic on its disc of convergence with termwise derivative. Sums, products, scalar multiples and, where the denominator is nonzero, quotients of functions complex differentiable at a point are complex differentiable there, with the usual rules ([[thm-algebra-of-complex-derivatives]]). [[thm-identity-theorem-holomorphic-functions]]: two holomorphic functions on a complex domain that agree on a set with an accumulation point **in that domain** agree everywhere. [[thm-intermediate-value]]: a real continuous function on a closed interval attains every value between its endpoint values.

[L4] **Substitution, additivity and inverse tangent.** [[thm-substitution]]: for $c<d$, $\varphi$ differentiable on $[c,d]$ with integrable derivative and $f$ continuous on an order-convex interval containing $\varphi([c,d])$, $\int_{\varphi(c)}^{\varphi(d)}f=\int_c^d(f\circ\varphi)\varphi'$, the left side being oriented. [[thm-principal-inverse-tangent-calculus]]: $\arctan' x=(1+x^2)^{-1}$ and $\arctan x=\int_0^x(1+t^2)^{-1}dt$. [[def-principal-inverse-tangent]]: $\tan:(-\pi/2,\pi/2)\to\mathbb R$ is a strictly increasing bijection with inverse $\arctan$. [[def-tangent-cotangent-secant-cosecant]]: cotangent is the quotient $\cot x=\cos x/\sin x$ where defined, and $\tan x=\sin x/\cos x$.

[L5] **Trigonometric values used.** [[lem-wallis-integrals-recurrence-and-squeeze]]: $I_m:=\int_0^{\pi/2}\sin^mt\,dt$ satisfies $I_0=\pi/2$, $I_1=1$, $I_m=\frac{m-1}{m}I_{m-2}$ for $m\ge2$, and $I_{2j}=\frac{\pi}{2}\prod_{k=1}^{j}\frac{2k-1}{2k}$. [[thm-cofunction-supplementary-and-reflection-identities]]: $\cos(\pi/2-x)=\sin x$, $\cos(\pi-x)=-\cos x$, $\tan(\pi/2-x)=\cot x$. [[thm-sine-and-cosine-addition-formulas]]: $\cos(x+y)=\cos x\cos y-\sin x\sin y$. [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]: $\sin^2x+\cos^2x=1$ and $1+\tan^2x=\sec^2x$ where defined. The same cofunction identities give $\int_0^{\pi/2}\cos^mt\,dt=I_m$ by the cofunction substitution.

[L6] **Binomial expansion.** [[lem-binomial-theorem-over-complex-numbers]]: for $u,v\in\mathbb C$ and $l\in\mathbb N_0$, $(u+v)^l=\sum_{k=0}^l\binom lk u^kv^{l-k}$.

[L7] **Harmonic functions and their estimates.** Assume Countable Choice where these suppliers declare it. [[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]]: for the Laplace fundamental solution $\Phi$ in dimension $3$, $x\mapsto\Phi(x-y)$ is smooth and harmonic on $\mathbb R^3\setminus\{y\}$ (so $x\mapsto|x-y|^{-1}$ is smooth and harmonic off $y$). [[thm-clairaut-schwarz-mixed-partials]]: partial derivatives commute for $C^2$ functions. [[thm-interior-derivative-estimates-for-harmonic-functions]]: for harmonic $u$ with $B_r(x)\Subset\Omega$, $|D^\alpha u(x)|\le C_{3,\alpha}r^{-3-|\alpha|}\int_{B_r(x)}|u|$. [[thm-newton-leibniz-with-interior-derivative]]: a continuous function with integrable interior derivative is recovered from its derivative by the integral.

[L8] **Parameter integrals, power-series coefficients and Choice.** [[thm-differentiation-under-the-integral-sign]] with its displayed hypotheses: an integrand differentiable in the parameter with an integrable majorant for the partial derivative has differentiable parameter integral with the expected derivative. [[cor-power-series-sums-are-smooth-with-coefficient-formula]]: a real power series with positive radius is smooth inside its disc and $a_m=f^{(m)}(c)/m!$. [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: $L^1$ is a complex vector space and its integral is complex-linear; [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: monotonicity and the scalar rule for nonnegative integrals. [[def-countable-choice]]: $\mathrm{AC}_\omega$, used only through these Lebesgue and harmonic-estimate interfaces.

## Proof

1.1 For $z\in[-1,1]$ put $w(\theta)=z+i\sqrt{1-z^2}\cos\theta$. Then $|w(\theta)|^2=z^2+(1-z^2)\cos^2\theta\le z^2+1-z^2=1$, so $|w(\theta)|\le1$, and the complex binomial theorem [L6] gives $w(\theta)^l=\sum_{k=0}^{l}\binom lk z^{l-k}\bigl(i\sqrt{1-z^2}\cos\theta\bigr)^k$ for every $l\in\mathbb N_0$ and $\theta\in[0,\pi]$. [L6, algebra]

1.2 The cosine integrals are $\int_0^\pi\cos^k\theta\,d\theta=0$ for odd $k$ and $\int_0^\pi\cos^{2j}\theta\,d\theta=2I_{2j}=\pi\prod_{i=1}^{j}\frac{2i-1}{2i}$ for $k=2j$. Indeed, [[thm-additivity-over-subintervals]] splits $\int_0^\pi=\int_0^{\pi/2}+\int_{\pi/2}^\pi$; the substitution $\theta=\pi-t$ of [L4] on $[\pi/2,\pi]$, with $\cos(\pi-t)=-\cos t$ from [L5], turns the second integral into $(-1)^k\int_0^{\pi/2}\cos^kt\,dt$; the cofunction identity $\cos t=\sin(\pi/2-t)$ and the same substitution identify $\int_0^{\pi/2}\cos^kt\,dt$ with $I_k$; and the values of $I_k$ are those of [L5]. [L4, L5, algebra]

1.3 For real $a>|b|\ge0$ put $I(a,b)=\int_0^\pi(a+b\cos\theta)^{-1}d\theta$. Then $(a^2-b^2)I(a,b)^2=\pi^2$. Indeed, on $[0,\pi/2]$ substitute $\theta=2\arctan t$, $t\in[0,1]$, which is legitimate by [L4] because $t\mapsto2\arctan t$ has continuous derivative $2(1+t^2)^{-1}$ and $(a+b\cos\theta)^{-1}$ is continuous on $[0,\pi]$; by [L5] and [L4], $\cos(2\arctan t)=\cos^2(\arctan t)-\sin^2(\arctan t)=\frac{1-t^2}{1+t^2}$, because $\cos^2 x=(1+\tan^2x)^{-1}$ at $\tan(\arctan t)=t$; hence $\int_0^{\pi/2}(a+b\cos\theta)^{-1}d\theta=\int_0^1\frac{2\,dt}{(a+b)+(a-b)t^2}=\frac{2}{\sqrt{a^2-b^2}}\arctan c$ with $c=\sqrt{(a-b)/(a+b)}>0$. On $[\pi/2,\pi]$ the reflection $\theta=\pi-t$ ([L5]) turns the integrand into $(a-b\cos t)^{-1}$ and the same substitution gives $\int_{\pi/2}^{\pi}(a+b\cos\theta)^{-1}d\theta=\int_0^1\frac{2\,dt}{(a-b)+(a+b)t^2}=\frac{2}{\sqrt{a^2-b^2}}\arctan\frac1c$. Since $\tan(\pi/2-x)=\cot x$ ([L5]) and $\cot(\arctan c)=1/\tan(\arctan c)=1/c$ ([L4]), with both angles in $(0,\pi/2)$ where $\tan$ is injective ([L4]), $\arctan c+\arctan(1/c)=\pi/2$; adding the two halves by [L1] gives $I(a,b)=\pi/\sqrt{a^2-b^2}$, hence $(a^2-b^2)I(a,b)^2=\pi^2$. [L1, L4, L5, algebra]

1.4 Fix $\rho\in(0,1/4)$, real $b$ with $|b|<\rho$, and complex $a$ with $|a-1|<\rho$; then $\operatorname{Re}a>3/4>|b|$, so $a+b\cos\theta\ne0$ on $[0,\pi]$, and $I(a,b)=\int_0^\pi(a+b\cos\theta)^{-1}d\theta$ is well defined as a $\mathbb C$-valued integral [L1]. The map $a\mapsto I(a,b)$ is holomorphic on $|a-1|<\rho$: for $h\ne0$ small, the difference quotient equals $-\int_0^\pi\bigl((a+b\cos\theta)(a+h+b\cos\theta)\bigr)^{-1}d\theta$ by the elementary identity $\frac{1}{A+h}-\frac1A=-h\,\frac{1}{A(A+h)}$, and the integrands converge uniformly on $[0,\pi]$ to $-(a+b\cos\theta)^{-2}$ because $|a+b\cos\theta|\ge\operatorname{Re}a-|b|>1/2$ and, for $|h|\le\rho$, $|a+h+b\cos\theta|>1/4$; [L2] applied to real and imaginary parts therefore gives complex differentiability at every such $a$, hence holomorphy [L3]. The same computation in the second variable shows that for each fixed $a$ with $|a-1|<\rho$ the map $b\mapsto I(a,b)$ is holomorphic on $|b|<\rho$. [L1, L2, L3]

2.1 Inserting step 1.1 into the defining integral and using step 1.2 with the linearity of [L1], only the terms with even $k=2j$ survive, and $i^{2j}=(-1)^j$ gives $P_l(z)=\sum_{j=0}^{\lfloor l/2\rfloor}(-1)^j\binom{l}{2j}W_j\,(1-z^2)^jz^{l-2j}$ with $W_j=\prod_{i=1}^{j}\frac{2i-1}{2i}$ and $W_0=1$. Each summand is a real polynomial of degree $l$, so $P_l$ is a real polynomial of degree at most $l$; at $z=1$ every term with $j\ge1$ carries the factor $(1-z^2)^j=0$, so $P_l(1)=W_0=1$. [step 1.1, step 1.2, L1, algebra]

2.2 Taking moduli in the defining integral, $|P_l(z)|=\pi^{-1}\bigl|\int_0^\pi w(\theta)^l\,d\theta\bigr|\le\pi^{-1}\int_0^\pi|w(\theta)|^l\,d\theta\le1$ by the norm inequality of [L1] and $|w|\le1$ from step 1.1. [step 1.1, L1]

2.3 For each real $b$ with $|b|<\rho$ the function $F_b(a)=(a^2-b^2)I(a,b)^2-\pi^2$ is holomorphic on the disc $|a-1|<\rho$ (products and differences of holomorphic functions, [L3]); by step 1.3 it vanishes for every real $a\in(1-\rho,1+\rho)$, since there $a>1-\rho>|b|$; that interval has accumulation points in the disc, so [[thm-identity-theorem-holomorphic-functions]] gives $F_b\equiv0$ on the disc. For each fixed $a$ with $|a-1|<\rho$, the function $b\mapsto(a^2-b^2)I(a,b)^2-\pi^2$ is holomorphic on $|b|<\rho$ by step 1.4, and it vanishes for every real $b$ with $|b|<\rho$ by the first part; the identity theorem applied on the disc $|b|<\rho$ therefore gives $(a^2-b^2)I(a,b)^2=\pi^2$ for all such $a$ and all complex $b$ with $|b|<\rho$. [step 1.3, step 1.4, L3]

3.1 For $|q|<1$ the series $\sum_lq^lw(\theta)^l$ has the majorant $\sum_l|q|^l<\infty$ and converges uniformly on $[0,\pi]$ to $(1-qw(\theta))^{-1}$; by [L2] it may be integrated term by term, so $G_z(q):=\sum_{l\ge0}q^lP_l(z)$ satisfies $G_z(q)=\pi^{-1}\int_0^\pi(1-qw(\theta))^{-1}d\theta$, and the majorant $|q|^l$ also gives absolute convergence and uniform convergence on $[-1,1]$ of $\sum_lq^lP_l(z)$ because $|P_l|\le1$ by step 2.2. [step 2.1, step 2.2, L1, L2]

4.1 $G_z(q)=\sum_lq^lP_l(z)$ is a complex power series whose coefficients are bounded (step 2.2), so its radius of convergence is at least $1$; by [L3] it is holomorphic on $|q|<1$, and $G_z(0)=P_0(z)=1$ because $P_0(z)=\pi^{-1}\int_0^\pi1\,d\theta=1$. The finite-Riemann and analytic constructions up to this point use no Choice. [step 2.1, step 3.1, L3]

4.2 Fix real $q$ with $|q|<\rho$ and set $a=1-qz$, $b=-iq\sqrt{1-z^2}$; then $|a-1|=|qz|\le|q|<\rho$ and $|b|\le|q|<\rho$, and $a^2-b^2=(1-qz)^2+q^2(1-z^2)=1-2qz+q^2$. Since $a+b\cos\theta=1-q\bigl(z+i\sqrt{1-z^2}\cos\theta\bigr)=1-qw(\theta)$, step 3.1 gives $\pi G_z(q)=\int_0^\pi(1-qw(\theta))^{-1}d\theta=I(a,b)$; hence step 2.3 yields $(1-2qz+q^2)G_z(q)^2=1$ for every real $q$ with $|q|<\rho$. [step 2.3, step 3.1, algebra]

5.1 Define $\Psi(q)=(1-2qz+q^2)G_z(q)^2-1$ on $|q|<1$; by step 4.1 and [L3] the function $\Psi$ is holomorphic there, and by step 4.2 it vanishes on the interval $(-\rho,\rho)$, which has accumulation points in the disc. The identity theorem [L3] gives $\Psi\equiv0$, that is $(1-2qz+q^2)G_z(q)^2=1$ for every $|q|<1$. The polynomial $1-2qz+q^2$ has the two roots $q=z\pm i\sqrt{1-z^2}$ of modulus $\sqrt{z^2+(1-z^2)}=1$, and equals $1$ at $q=0$, so it is nonzero and holomorphic on the connected disc $|q|<1$, and $G_z$ satisfies $G_z(0)=1$ and $G_z^2=(1-2qz+q^2)^{-1}$ there; if $S$ is any holomorphic function on the disc with $S(0)=1$ and $S^2=(1-2qz+q^2)^{-1}$, then $(G_z-S)(G_z+S)\equiv0$ while $G_z+S$ is continuous with value $2$ at $0$, hence nonzero near $0$, so $G_z=S$ near $0$ and then on the whole connected disc by the identity theorem. Thus $G_z$ is exactly the analytic square root of $(1-2qz+q^2)^{-1}$ equal to $1$ at $q=0$. [step 4.1, step 4.2, L3]

6.1 For $x\ne0$, $y\in\mathbb R^3$ with $|x|>|y|$, write $r=|x|$, $n=x/|x|$, $q=|y|/r<1$; if $y\ne0$ and $\hat y=y/|y|$, then $|x-y|^{-1}=r^{-1}\bigl(1-2q(n\cdot\hat y)+q^2\bigr)^{-1/2}=r^{-1}\sum_{l\ge0}q^lP_l(n\cdot\hat y)=\sum_{l\ge0}|y|^l|x|^{-l-1}P_l(n\cdot y/|y|)$ by the generating identity of step 5.1, since $n\cdot\hat y\in[-1,1]$. For real $0\le q<1$, $G_z(q)$ is real because all coefficients are real, is continuous and never zero by step 5.1, and has value $1$ at zero. By the intermediate value theorem [L3] it cannot become negative; hence it is the positive reciprocal square root used by the positive real kernel. The remainder satisfies $\bigl|\sum_{l>N}q^lP_l(n\cdot\hat y)\bigr|\le\sum_{l>N}q^l=\frac{q^{N+1}}{1-q}$ by step 2.2, which after multiplication by $r^{-1}$ gives the stated bound, uniformly on $|y|\le a$ whenever $|x|\ge r>a$; for $y=0$ the formula reduces to $|x|^{-1}$ with all higher terms zero, consistently with $c_l=|y|^l|x|^{-l-1}P_l(\,\cdot\,)$ vanishing for $l\ge1$ at $y=0$. [step 5.1, step 2.2, L3, algebra]

7.1 Fix $x\ne0$ and $y\in\mathbb R^3$ with $|x|>|y|$. For $y=0$ define $c_0(x,0)=|x|^{-1}$ and $c_l(x,0)=0$ for $l\ge1$; the parameter kernel $|x-t0|^{-1}$ is constant and these are its Taylor coefficients, with no division by $|y|$. For $y\ne0$, step 6.1 applied to $ty$ gives the expansion for $t\ge0$ with $t|y|<|x|$. The polynomial formula of step 2.1 gives $P_l(-z)=(-1)^lP_l(z)$ because each monomial $z^{l-2j}$ has parity $l$, while $(1-z^2)^j$ is even. Therefore for $t<0$ the same expansion is $\sum_{l\ge0}t^lc_l(x,y)$ as well, where $c_l(x,y)=|y|^l|x|^{-l-1}P_l(x\cdot y/(|x||y|))$. Hence $|x-ty|^{-1}=\sum_{l\ge0}t^lc_l(x,y)$ on the open interval $|t|<|x|/|y|$. By [L8], $c_l(x,y)=\frac1{l!}\partial_t^l\big|_{t=0}|x-ty|^{-1}$. Expanding the polynomial formula in step 2.1 shows that $|y|^lP_l(n\cdot y/|y|)$ is a homogeneous polynomial of degree $l$ in $y$: its $j$-term is a constant times $[|y|^2-(n\cdot y)^2]^j(n\cdot y)^{l-2j}$. Thus the coefficients extend polynomially to $y=0$ with the values already assigned. [step 2.1, step 6.1, L8, algebra]


8.1 For fixed $x\ne0$ and small real $t$ the function $(x,t)\mapsto|x-ty|^{-1}$ is smooth and harmonic in $x$ off $x=ty$ by [L7]; since mixed partials commute ([L7]) the operator $\Delta_x$ commutes with $\partial_t^l$, so $\partial_t^l|x-ty|^{-1}$ is harmonic in $x$ on the open set where $x\ne ty$; restricting to $t=0$ and using step 7.1, every $c_l(\,\cdot\,,y)$ is smooth and harmonic on $\mathbb R^3\setminus\{0\}$. Replacing $x$ by $y$ in the same computation, $\Delta_y|x-ty|^{-1}=t^2\Delta_x|x-ty|^{-1}=0$, shows that the degree-$l$ solid polynomial $y\mapsto c_l(x,y)$ is harmonic in $y$ for each fixed $x\ne0$. [step 7.1, L7]

9.1 Fix a nonempty compact $K$ with $\inf_K|x|>a$; choose $\delta>0$ and an open bounded neighbourhood $K_+$ of $K$ with $\inf_{K_+}|x|>a$ and every closed $\delta$-ball centred at a point of $K$ contained in $K_+$. For $|y|\le a$ and $x\in K_+$ the tail $v_N(x,y)=|x-y|^{-1}-\sum_{l=0}^{N}c_l(x,y)$ is harmonic in $x$ by [L7] and step 8.1, and equals $\sum_{l>N}c_l(x,y)$ by step 6.1 and satisfies $|v_N(x,y)|\le a^{N+1}\bigl(\inf_{K_+}|x|\bigr)^{-N-2}\bigl(1-a/\inf_{K_+}|x|\bigr)^{-1}\to0$ uniformly on $K_+\times\overline{B_a(0)}$ by step 6.1. Hence for every multi-index $\alpha$ the interior derivative estimates of [L7] give $|D^\alpha v_N(x,y)|\le C_{3,\alpha}\delta^{-3-|\alpha|}|B_\delta|\sup_{K_+}|v_N(\,\cdot\,,y)|\to0$ uniformly on $K$, uniformly for $|y|\le a$. Each sequence $N\mapsto D^\alpha S_N$ of derivatives of the partial sums is therefore uniformly Cauchy, and its uniform limit is identified with $D^\alpha$ of the kernel along short coordinate segments by [[thm-newton-leibniz-with-interior-derivative]]; thus every fixed spatial derivative series of the kernel converges uniformly on $K$, uniformly for $|y|\le a$. Countable Choice is used only through the harmonic-estimate interface [L7]; the empty $K$ case is vacuous. [step 6.1, step 8.1, L7]

10.1 For a density $\rho$ vanishing outside $\overline{B_a(0)}$ and $\varepsilon>0$ there is $N$ with $\bigl||x-y|^{-1}-\sum_{l\le N}c_l(x,y)\bigr|\le\varepsilon$ for all $x\in K$ and $|y|\le a$ by step 9.1, so $\bigl|\int\rho(y)\bigl[|x-y|^{-1}-\sum_{l\le N}c_l(x,y)\bigr]dy\bigr|\le\varepsilon\|\rho\|_1$; the partial-sum integrals equal $\sum_{l\le N}\int\rho(y)c_l(x,y)dy$ by the complex linearity of the Lebesgue integral [L8], and hence $\int\rho(y)|x-y|^{-1}dy=\sum_{l\ge0}\int\rho(y)c_l(x,y)dy$ with the remainder bounded by $\|\rho\|_1\sup_{|y|\le a}\bigl||x-y|^{-1}-\sum_{l\le N}c_l(x,y)\bigr|$ and, on $|x|\ge r>a$, by $\|\rho\|_1|a|^{N+1}r^{-N-2}(1-r^{-1}a)^{-1}$ (step 6.1, with [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] for the $L^1$ factor). Moreover, on a small open coordinate interval $J$ with $\overline J\subset K_+$ every derivative $D^\alpha_x|x-y|^{-1}$ is bounded on $J\times\overline{B_a(0)}$ by a constant $C_\alpha$, since $|x-y|\ge\inf_{K_+}|x|-a>0$ there; the majorant $C_\alpha|\rho(y)|$ is integrable, so [[thm-differentiation-under-the-integral-sign]] applies (with empty exceptional set) and identifies every spatial derivative of $x\mapsto\int\rho(y)|x-y|^{-1}dy$ on $J$ with $\int\rho(y)D^\alpha_x|x-y|^{-1}dy$, i.e. with the corresponding termwise-differentiated multipole series. [step 6.1, step 9.1, L8]

11.1 Collecting the results: $P_l$ is a real polynomial of degree at most $l$ with $P_l(1)=1$ and $|P_l|\le1$ on $[-1,1]$ (steps 2.1, 2.2); for $|q|<1$ the series $\sum_lq^lP_l(z)$ converges absolutely and uniformly on $[-1,1]$ and equals the analytic inverse square root of $1-2qz+q^2$ by steps 3.1, 4.1 and 5.1; the exterior expansion and its geometric remainder hold uniformly on $|y|\le a<r\le|x|$ by step 6.1, with $y=0$ handled by the zero higher terms; the integrated $L^1$-source expansion converges with error at most $\|\rho\|_1$ times the geometric tail, and every fixed spatial derivative series converges uniformly on observation compacta, uniformly over $|y|\le a$, with derivatives of the integral identified directly by differentiation under the integral sign (steps 9.1, 10.1); the coefficient terms are smooth and harmonic in $x$ away from the origin and are solid harmonics in $y$ (step 8.1). The finite-Riemann polynomial and generating assertions use no Choice (step 4.1); Countable Choice enters only through the Lebesgue and harmonic-estimate interfaces [L7, L8]. [step 2.1, step 2.2, step 5.1, step 6.1, step 8.1, step 9.1, step 10.1, L7, L8] ∎
