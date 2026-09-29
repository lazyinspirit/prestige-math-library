---
id: ex-upper-half-plane-harmonic-measure-density
kind: example
title: "The upper half-plane Poisson boundary density"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-one-dimensional-change-of-variables-with-absolute-derivative
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-poisson-kernel-on-the-disc
  - def-principal-inverse-tangent
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-tangent-principal-branch-is-bijective
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-continuous-implies-integrable
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line
  - thm-poisson-integral-solves-the-disc-dirichlet-problem
  - thm-principal-inverse-tangent-calculus
  - thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic
sources:
  references:
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 37-39: Poisson kernel of the upper half-plane and the Cayley change of variables"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.8, printed p. 171: harmonic measure as the representing measure of the Poisson integral"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice for the Lebesgue measure and integral
interface and the locally uniform harmonic-limit theorem. For $z=x+iy\in\mathbb H=\{z:\operatorname{Im}z>0\}$ put
$$k_z(t):=\frac{y}{\pi\bigl((t-x)^2+y^2\bigr)}\qquad(t\in\mathbb R).$$
Then $d\omega_{\mathbb H}^z(t)=k_z(t)\,dt$ is a Borel probability measure on
$\mathbb R$ of total mass one, and for every bounded continuous
$f:\mathbb R\to\mathbb R$ the function
$$u_f(z):=\int_{\mathbb R}f(t)\,k_z(t)\,d\lambda_1(t)$$
is harmonic on $\mathbb H$ and satisfies
$\lim_{z\to t_0,\,z\in\mathbb H}u_f(z)=f(t_0)$ at every finite boundary point
$t_0\in\mathbb R$. The density identity and the arctangent antiderivative are
choice-free calculations. The measure and integral interface and the locally
uniform harmonic-limit theorem use $\mathrm{AC}_\omega$. This is an
explicit unbounded-domain analogue of harmonic measure; the bounded-domain
boundary-transport theorem is not invoked.

## Facts & Assumptions

**Given:** A point $z=x+iy\in\mathbb H$, the Axiom of Countable Choice $\mathrm{AC}_\omega$ for the Lebesgue interface and harmonic-limit theorem ([[def-countable-choice]]), and the unit disc $\mathbb D$, the upper half-plane $\mathbb H$ and modulus as in [[def-unit-disc-upper-half-plane-and-blaschke-factor]] and [[def-complex-conjugate-real-imaginary-part-and-modulus]].

[F1] The Poisson kernel of the disc is $P(w,\zeta)=(1-|w|^2)/|\zeta-w|^2$ for $w\in\mathbb D$, $\zeta\in\partial\mathbb D$, and for every continuous $\psi:\partial\mathbb D\to\mathbb R$ its Poisson integral is harmonic on $\mathbb D$, continuous on $\overline{\mathbb D}$, and agrees with $\psi$ on $\partial\mathbb D$ ([[def-poisson-kernel-on-the-disc]], [[thm-poisson-integral-solves-the-disc-dirichlet-problem]]).

[F2] If $u$ is harmonic on an open $V\subseteq\mathbb C$ and $\phi:U\to V$ is holomorphic on an open $U$, then $u\circ\phi$ is harmonic on $U$ ([[thm-conformal-invariance-of-plane-harmonicity]]).

[F3] The principal inverse tangent $\arctan:\mathbb R\to(-\pi/2,\pi/2)$ is the continuous strictly increasing inverse of the tangent principal branch, with $\frac{d}{dx}\arctan x=\frac1{1+x^2}$ and $\arctan x=\int_0^x\frac{dt}{1+t^2}$; consequently $\arctan s\to\pm\pi/2$ as $s\to\pm\infty$, because the tangent branch is strictly increasing and onto $\mathbb R$ ([[def-principal-inverse-tangent]], [[thm-principal-inverse-tangent-calculus]], [[lem-tangent-principal-branch-is-bijective]]).

[F4] One-dimensional change of variables: if $\varphi$ is $C^1$ and injective with $\varphi'\ne0$ on a neighbourhood of $[a,b]$, and $g$ is continuous on an interval containing $\varphi([a,b])$, then $\int_{\min\{\varphi(a),\varphi(b)\}}^{\max\{\varphi(a),\varphi(b)\}}g(s)\,ds=\int_a^bg(\varphi(t))|\varphi'(t)|\,dt$ ([[cor-one-dimensional-change-of-variables-with-absolute-derivative]]); a continuous real function on a compact interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

[F5] Under $\mathrm{AC}_\omega$ the Lebesgue measure $\lambda_1$ is a complete measure on a sigma-algebra containing the Borel sets; for a nonnegative measurable $\rho$ the set function $A\mapsto\int_A\rho\,d\lambda_1$ is a measure; and if a nonnegative $f$ is Riemann integrable on every compact interval and its improper Riemann integral converges, then $f$ is Lebesgue integrable with equal integrals ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line]]).

[F6] Under $\mathrm{AC}_\omega$, a locally uniform limit of harmonic functions on a domain is harmonic ([[thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic]]).

## Verification

**Proof technique:** direct.

1.1 Define the Cayley map $C(w):=(w-i)/(w+i)$, which is holomorphic on $\mathbb C\setminus\{-i\}$ and in particular on $\mathbb H$, and satisfies $|C(w)|<1$ for $w\in\mathbb H$ because $|w+i|^2-|w-i|^2=4\operatorname{Im}w>0$. For real $t$ one computes $$C(t)=\frac{(t-i)^2}{t^2+1}=\frac{t^2-1-2ti}{t^2+1}=e^{i\theta(t)},\qquad \theta(t):=2\arctan t-\pi\in(-2\pi,0),$$ so $|C(t)|=1$, $C(t)\ne1$, and by the chain rule and [F3] $$C'(t)=\frac{2i}{(t+i)^2},\qquad |C'(t)|=\frac{2}{t^2+1}=\theta'(t).$$ [F3, algebra]

1.2 For every $R>0$ the substitution $s=(t-x)/y$ on $[-R,R]$, which is admissible by [F4] with $\varphi(t)=(t-x)/y$ and $g(s)=1/(\pi(1+s^2))$, gives $$\int_{-R}^{R}k_z(t)\,dt=\frac1\pi\Bigl(\arctan\frac{R-x}{y}-\arctan\frac{-R-x}{y}\Bigr),$$ and letting $R\to\infty$ with [F3] yields the improper Riemann integral $\int_{\mathbb R}k_z\,dt=1$. Since $k_z$ is continuous and nonnegative, [F5] makes $k_z$ Lebesgue integrable with $\int_{\mathbb R}k_z\,d\lambda_1=1$. [F3, F4, F5, algebra]

2.1 For $w\in\mathbb H$ and real $t$, direct expansion gives $$1-|C(w)|^2=\frac{4\operatorname{Im}w}{|w+i|^2},\qquad |C(t)-C(w)|=\frac{2|t-w|}{|t+i|\,|w+i|},$$ the second identity because $(t-i)(w+i)-(w-i)(t+i)=2i(t-w)$. Multiplying, and using [F1], [F3] and step 1.1, $$\frac{P(C(w),C(t))\,|C'(t)|}{2\pi} =\frac{4y}{|w+i|^2}\cdot\frac{|t+i|^2|w+i|^2}{4|t-w|^2}\cdot\frac{2}{2\pi(t^2+1)} =\frac{y}{\pi\bigl((t-x)^2+y^2\bigr)}=k_z(t)$$ whenever $w=z=x+iy$. [F1, F3, step 1.1, algebra]

2.2 By [F5] the set function $\omega^z(A):=\int_Ak_z\,d\lambda_1$, defined on the Lebesgue sigma-algebra and hence on the Borel sets of $\mathbb R$, is a measure, and $\omega^z(\mathbb R)=1$ by step 1.2. So $d\omega_{\mathbb H}^z=k_z\,d\lambda_1$ is a Borel probability measure on $\mathbb R$. [F5, step 1.2]

3.1 Representation for compactly supported data. Let $f$ be continuous with compact support and define $\psi$ on $\partial\mathbb D$ by $\psi(\zeta):=f\bigl(i(1+\zeta)/(1-\zeta)\bigr)$ for $\zeta\ne1$ and $\psi(1):=0$; this is well defined with $C$-values on the unit circle, and it is continuous: near $\zeta=1$ one has $|1+\zeta|\ge2-|1-\zeta|$, so the parameter $i(1+\zeta)/(1-\zeta)$ tends to infinity and $\psi$ vanishes there because $f$ does, while continuity away from $1$ follows from continuity of $f$ and of $\zeta\mapsto i(1+\zeta)/(1-\zeta)$. Let $u_D$ be the Poisson integral of $\psi$ and $u:=u_D\circ C$ on $\mathbb H$. Then $u$ is harmonic by [F2], and for $z\in\mathbb H$ the definition of the Poisson integral, the identity $\psi(C(t))=f(t)$ and step 2.1 give $$u(z)=\frac1{2\pi}\int_0^{2\pi}\psi(e^{i\theta})P(C(z),e^{i\theta})\,d\theta =\frac1{2\pi}\int_{\mathbb R}f(t)P(C(z),C(t))|C'(t)|\,dt=\int_{\mathbb R}f\,d\omega_{\mathbb H}^z,$$ the middle equality being the substitution $\theta=\theta(t)$ of step 1.1 on a compact parameter interval, legitimate by [F4] and the vanishing of the integrand near the ends $0$ and $-2\pi$ of the period interval, together with $2\pi$-periodicity. [F1, F2, F4, step 1.1, step 2.1]

4.1 Boundary limits for compactly supported data. If $z_j\to t_0$ with $t_0\in\mathbb R$ and $z_j\in\mathbb H$, then $C(z_j)\to C(t_0)\in\partial\mathbb D\setminus\{1\}$ by continuity of $C$ at $t_0$, and $u_D$ is continuous on $\overline{\mathbb D}$ with boundary values $\psi$ by [F1]; hence $u(z_j)=u_D(C(z_j))\to\psi(C(t_0))=f(t_0)$ by step 3.1. [F1, step 3.1]

4.2 General bounded continuous data. Let $f$ be bounded and continuous and let $\chi_N:\mathbb R\to[0,1]$ be continuous with $\chi_N=1$ on $[-N,N]$ and $\chi_N=0$ outside $[-N-1,N+1]$ (for instance $\chi_N(t)=\max\{0,\min\{1,N+1-|t|\}\}$). Each $f_N:=f\chi_N$ is continuous with compact support, so $u_{f_N}$ is harmonic on $\mathbb H$ by step 3.1. If $K\subseteq\mathbb H$ is compact and $R$ is such that $|w|\le R$ on $K$, then for $N>2R$ and $w=x+iy\in K$ the tail bound $\int_{|t|>N}k_w(t)\,dt\le\frac{2R}{\pi}\int_N^\infty\frac{4}{t^2}\,dt=\frac{8R}{\pi N}$ holds, because $|t-x|\ge|t|-R\ge|t|/2$ and $(t-x)^2+y^2\ge(t-x)^2$ there; hence $|u_f-u_{f_N}|\le\|f\|_\infty\cdot 8R/(\pi N)$ on $K$ and $u_{f_N}\to u_f$ locally uniformly on $\mathbb H$. Therefore $u_f$ is harmonic on $\mathbb H$ by [F6]. [F6, step 3.1, algebra]

5.1 Boundary limits for general data. Fix $t_0\in\mathbb R$ and $\eta>0$. Continuity of $f$ at $t_0$ gives $\delta>0$ with $|f(t)-f(t_0)|<\eta$ for $|t-t_0|<\delta$. Splitting the defining integral at $|t-t_0|=\delta$ and using $\int_{\mathbb R}k_z=1$ from step 1.2, $$\bigl|u_f(z)-f(t_0)\bigr|\le\eta+2\|f\|_\infty\int_{|t-t_0|\ge\delta}k_z(t)\,dt,$$ and the last integral equals $\frac1\pi\bigl(\pi-\arctan\frac{t_0+\delta-x}{y}+\arctan\frac{t_0-\delta-x}{y}\bigr)$, which tends to $0$ as $x\to t_0$, $y\downarrow0$ by [F3], since then $(t_0\pm\delta-x)/y\to\pm\infty$. Hence $u_f(z)\to f(t_0)$ as $z\to t_0$ inside $\mathbb H$. [F3, step 1.2, step 4.2, algebra]

6.1 The density $k_z$ therefore defines a Borel probability measure of total mass one on $\mathbb R$ (step 2.2) whose integrals produce, for every bounded continuous boundary function, a harmonic function with the prescribed limit at every finite boundary point of $\mathbb H$ (steps 4.2 and 5.1). Steps 1.2 and 2.2 use $\mathrm{AC}_\omega$ through the measure and integral interface of [F5], as does the integral interpretation in step 3.1; step 4.2 also uses it through the locally uniform harmonic-limit theorem [F6], while steps 1.1, 2.1 and the arctangent limits are choice-free calculations. [F5, F6, step 2.1, step 2.2, step 4.2, step 5.1] ∎
