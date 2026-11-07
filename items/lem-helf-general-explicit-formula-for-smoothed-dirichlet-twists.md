---
id: lem-helf-general-explicit-formula-for-smoothed-dirichlet-twists
kind: lemma
title: "Explicit Formula for Smoothed Dirichlet-Twisted von Mangoldt Sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-smoothed-prime-exponential-sum
  - def-dirichlet-l-function
  - def-primitive-dirichlet-character-and-conductor
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-primitive-dirichlet-l-functional-equation
  - thm-dirichlet-l-nonzero-at-one
  - lem-helf-mellin-origin-continuation-and-logarithmic-moment
  - lem-helf-product-residue-at-zero-retains-log-x
  - lem-helf-logarithmic-tail-integral-bound
  - lem-binet-loggamma-right-halfplane-identity
  - thm-euler-reflection-formula
  - thm-legendre-duplication-formula
  - lem-dirichlet-l-logarithmic-derivative-series
  - lem-primitive-dirichlet-l-logarithmic-derivative-contour-bounds
  - thm-hadamard-three-lines
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - lem-fourier-transform-of-a-gaussian
  - thm-euler-mascheroni-constant-and-harmonic-asymptotic
  - thm-gamma-weierstrass-product
  - thm-dirichlet-l-euler-product
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. A. Helfgott, Major arcs for Goldbach's problem"
      url: "https://arxiv.org/pdf/1305.2897v4"
      locator: "Lemma 4.1, printed pp. 31–32; proof §§4.1, printed pp. 32–34."
---

## Statement

Let $\eta:[0,\infty)\to\mathbb R$ be continuously differentiable, let $x>0$, $\delta\in\mathbb R$, and let $\chi$ be a primitive Dirichlet character modulo an integer $q\ge1$. Write $e(t)=\exp(2\pi i t)$,
$$G_\delta(s):=\int_0^\infty\eta(t)e(\delta t)t^{s-1}\,dt,\qquad \widehat\eta(\xi):=\int_0^\infty\eta(t)e(-\xi t)\,dt,$$
and $\|f\|_2=(\int_0^\infty|f(t)|^2\,dt)^{1/2}$. Assume $\|\eta\|_2,\|\eta'\|_2<\infty$ and that
$$\int_0^\infty|\eta(t)t^{\sigma-1}|\,dt<\infty,\qquad \int_0^\infty|\eta'(t)t^{\sigma-1}|\,dt<\infty$$
for every $\sigma$ in some open interval containing $[1/2,3/2]$. For the zeros $\rho$ of the analytic continuation of $L(s,\chi)$ with $0<\operatorname{Re}\rho<1$, counted with multiplicity, there is a complex error $E$ such that
$$\sum_{n=1}^{\infty}\Lambda(n)\chi(n)e(\delta n/x)\eta(n/x)=\mathbf 1_{q=1}\widehat\eta(-\delta)x-\sum_\rho G_\delta(\rho)x^\rho-R+Ex^{-1/2},$$
with
$$|E|\le(\log q+6.01)\bigl(\|\eta'\|_2+2\pi|\delta|\,\|\eta\|_2\bigr).$$
For $q>1$, put $\epsilon_\chi=1$ if $\chi(-1)=1$ and $\epsilon_\chi=0$ if $\chi(-1)=-1$. With $\overline\chi$ the conjugate character, the full origin residue is
$$R=\eta(0)\left(\log\frac{2\pi}{q}+\gamma-\frac{L'(1,\overline\chi)}{L(1,\overline\chi)}+\epsilon_\chi\log x\right)+r_0,\qquad |r_0|\le c_0,$$
and for $q=1$, $R=\eta(0)\log(2\pi)$, where $\gamma$ is Euler's constant and
$$c_0=\frac23\left(\int_0^\infty\left|\frac{\eta'(t)}{\sqrt t}\right|dt+\int_0^\infty|\eta'(t)\sqrt t|dt+2\pi|\delta|\left(\int_0^\infty\left|\frac{\eta(t)}{\sqrt t}\right|dt+\int_0^\infty|\eta(t)\sqrt t|dt\right)\right).$$

## Statement references

[[def-smoothed-prime-exponential-sum|$S_\eta$ uses $e(t)=e^{2\pi it}$ and the von Mangoldt weights $\Lambda(n)$]]

[[def-dirichlet-l-function|$L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$ for $\operatorname{Re}s>1$]]

[[def-primitive-dirichlet-character-and-conductor|primitive means not induced from a proper divisor of the modulus]]

[[thm-primitive-dirichlet-l-analytic-continuation|primitive nonprincipal $L(s,\chi)$ is entire and the principal $q=1$ case has its stated meromorphic continuation]]

[[thm-primitive-dirichlet-l-functional-equation|the completed primitive character $L$-function has the stated parity and root-number convention]]

[[thm-dirichlet-l-nonzero-at-one|$L(1,\chi)\ne0$ for every nonprincipal Dirichlet character]]

[Helfgott, *Major arcs for Goldbach's problem*, Lemma 4.1](https://arxiv.org/pdf/1305.2897v4)

## Facts & Assumptions

**Given:** The data and integrability hypotheses in the Statement.

[F1] [[lem-helf-mellin-origin-continuation-and-logarithmic-moment]] gives the Mellin continuation and origin coefficient.

[F2] [[lem-helf-logarithmic-tail-integral-bound]] gives the exact 6.01 integral estimate.

[F3] [[lem-binet-loggamma-right-halfplane-identity]] gives Binet’s log-Gamma identity with its periodic kernel.

[F4] [[thm-euler-reflection-formula]] gives Gamma reflection.

[F5] [[thm-legendre-duplication-formula]] gives Gamma duplication.

[F6] [[lem-dirichlet-l-logarithmic-derivative-series]] gives the zeta logarithmic-derivative series at real arguments.

[F7] [[thm-primitive-dirichlet-l-functional-equation]] gives the primitive-character functional equation.

[F8] [[lem-primitive-dirichlet-l-logarithmic-derivative-contour-bounds]] gives the zero-avoiding horizontal contour bounds.

[F9] [[thm-hadamard-three-lines]] gives the bounded-strip three-lines theorem.

[F10] [[lem-primitive-dirichlet-l-zero-count-in-unit-window]] gives the right-half zero-window bound, extended by F7.

[F11] [[lem-helf-product-residue-at-zero-retains-log-x]] gives the exact product residue.

[F12] [[lem-fourier-transform-of-a-gaussian]] gives the Gaussian transform.

[F13] [[thm-euler-mascheroni-constant-and-harmonic-asymptotic]] gives the Euler constant limit.

[F14] [[thm-gamma-weierstrass-product]] gives the Gamma product and its logarithmic derivative.

[F15] [[thm-primitive-dirichlet-l-analytic-continuation]] gives the primitive-character analytic continuation.

[F16] [[thm-dirichlet-l-nonzero-at-one]] gives nonvanishing at one for nonprincipal characters.

[F17] [[thm-dirichlet-l-euler-product]] gives the absolutely convergent Euler product in Re s > 1.

## Proof

**Proof technique:** weighted Mellin inversion, a zero-avoiding contour, and an exact left-line bound.

**Given:** The literal Statement data. Put $f(t)=\eta(t)e^{2\pi i\delta t}$, $c=3/2$, and write $L=L(\cdot,\chi)$. Interpret the zero sum in the standard symmetric ordinate order $\lim_{T\to\infty}\sum_{|\operatorname{Im}\rho|<T}$, counting multiplicity. The proof establishes that this limit exists; it does not assert absolute convergence in an arbitrary order.

1.1 By the open weighted-integrability interval, choose fixed $a>0$ and $0<a'<a$ with $\int_0^\infty t^a(|f(t)|+|f'(t)|)dt<\infty$. The given $L^2$ norms give $f'\in L^2$. Set $g(u)=e^{cu}f(e^u)$, so $g\in L^1(\mathbb R)$. For $|v|\le1$ put $$h(v)=\sum_{n\ge1}\frac{\Lambda(n)\chi(n)}{n^c}g\!\left(v+\log\frac nx\right)=x^{-c}e^{cv}\sum_{n\ge1}\Lambda(n)\chi(n)f(e^v n/x).$$ Averaging the fundamental theorem of calculus over fixed-length intervals around $e^vn/x$, using their uniformly bounded overlap and $\Lambda(n)\le\log n$, gives $$\sup_{|v|\le1}\sum_{n>N}\Lambda(n)|f(e^vn/x)|\ll_{x,a,a'}N^{-a'}\int_{N/(3x)}^\infty t^a(|f(t)|+|f'(t)|)dt\ll N^{-a'}.$$ Here $\log(2+t)\ll t^{a-a'}$ at infinity. Thus the sample sums converge absolutely and locally uniformly. [F1, F6, given, construct, algebra]

1.2 Let $(a_0,b_0)$ be the given exponent interval. Choose $1/2<\alpha<\min\{b_0-1,1\}$ and $3/2<\beta<b_0$. The Mellin continuation gives $|G_\delta(\sigma+it)|\ll(1+|t|)^{-1}$ uniformly for $-1/2\le\sigma\le\alpha$ and $|t|\ge2$, since $sG_\delta(s)=-\int f'(u)u^sdu$ and the endpoint powers are integrable. The original Mellin integral is uniformly bounded on $\Re s=\beta$. For each $|T|\ge2$ and $\sigma_0\in[\alpha,3/2]$, apply the bounded-strip three-lines theorem to $$H(z)=(1+|T|)^{(\beta-z)/(\beta-\alpha)}e^{(z-(\sigma_0+iT))^2}G_\delta(z).$$ On the left boundary use $(1+|T|)/(1+|t|)\le1+|t-T|$ and the Gaussian; on the right the power has modulus one. The Gaussian and uniform Mellin bound make $H$ bounded on the full closed strip. Thus $$\sup_{-1/2\le\sigma\le3/2}|G_\delta(\sigma+it)|\ll(1+|t|)^{-\nu}\quad(|t|\ge2),\qquad \nu=\min\{1,(\beta-3/2)/(\beta-\alpha)\}>0.$$ [F1, F9, given, construct, algebra]

1.3 On $s=-1/2+it$, the primitive functional equation and the Gamma reflection and duplication identities yield $$\frac{L'}L(s,\chi)=\log\frac{2\pi}{q}-\psi(1-s)+\frac\pi2\cot\!\left(\frac{\pi(s+\kappa)}2\right)-\frac{L'}L(1-s,\overline\chi),$$ where $\kappa=0$ for even $\chi$ and $1$ for odd $\chi$; the final character is conjugated. The Euler product gives $|L'/L(1-s,\overline\chi)|\le-\zeta'(3/2)/\zeta(3/2)$. [F4, F5, F7, F17, given, algebra]

1.4 The Binet log-Gamma identity gives $$\psi(z)=\operatorname{Log}z-\frac1{2z}-2\int_0^\infty\frac{\Phi(u)}{(u+z)^3}du,\qquad\Phi(n+v)=v(1-v)/2.$$ Differentiate under the absolutely convergent integral. If $\Re z=3/2$, then $|u+z|\ge u+3/2$. The mean of $\Phi$ on each unit interval is $1/12$; the second primitive of $\Phi(v)-1/12$ is $-v^2(1-v)^2/24$, and it and its first derivative vanish at both endpoints. Two integrations by parts against the convex kernel $(n+v+3/2)^{-3}$ therefore show that replacing $\Phi$ by $1/12$ increases the integral. Consequently $$2\int_0^\infty\frac{\Phi(u)}{|u+z|^3}du\le\frac16\int_0^\infty(u+3/2)^{-3}du=\frac1{27},$$ and $|\psi(z)-\operatorname{Log}z|\le1/3+1/27=10/27$. [F3, construct, algebra]

2.1 The latter ratio is $<1506/1000$ by the following local finite calculation. Let $\eta_*(s)=\sum_{n\ge1}(-1)^{n-1}n^{-s}$. Then $-\zeta'/\zeta(3/2)=\log2(\sqrt2+1)-\eta_*'(3/2)/\eta_*(3/2)$. With $N=1000$ even, the two alternating remainders are bounded by the first omitted terms. At scale $10^{12}$, round every integer square root outward; write $\log n=k\log2+\log(n/2^k)$, and enclose each logarithm by 12 terms of $2\sum_{j\ge0}y^{2j+1}/(2j+1)$ with $0\le y\le1/3$ and tail $2y^{25}/[25(1-y^2)]$. The exact replay `research/number-theory-all-141-2026-10-25-escalations/helf-explicit-formula/scratch/logderiv-certificate.py` yields the following integer endpoints: The resulting intervals are $765131224613\le10^{12}\eta_*\le765162801007$, $128565747773\le10^{12}\eta_*\prime\le128783901376$, and $1673405324026\le10^{12}\log2(\sqrt2+1)\le1673405324030$; the ratio is at least $168024043515/10^{12}$. Thus the final upper bound is $1505381280515/10^{12}<1506/1000$. The ledger uses only the displayed finite rational formulas and outward integer rounding; no published numerical computation is imported. [F6, step 1.3, construct, algebra]

2.2 The function $h$ is locally Hölder at zero. For $0<|v|<1/100$, put $N=\lfloor|v|^{-1/4}\rfloor$. The tails of both sample sums are $O(N^{-a'})$ by step 1.1. For $n\le N$ the intervals between $n/x$ and $e^vn/x$ are disjoint when $|v|N$ is small, and their total squared-log-weighted length is $O_x(|v|N^2\log^2(2N))$. Cauchy–Schwarz therefore gives $$\sum_{n\le N}\Lambda(n)|f(e^vn/x)-f(n/x)|\ll_x\|f'\|_2|v|^{1/2}N\log(2N).$$ The factor $e^{cv}$ contributes $O(|v|)$ times an absolutely convergent sample sum. Hence $|h(v)-h(0)|\ll |v|^{1/4}\log(2/|v|)+|v|^{a'/4}$, so $h$ satisfies the Dini condition at zero. [F1, step 1.1, given, construct, algebra]

2.3 The right-half zero-window bound and functional-equation reflection give $O(\log(q(|T|+2)))$ nontrivial zeros in each unit ordinate window. Remove intervals of radius $\varepsilon/\log(q(T+2))$ around their ordinates in each unit window, with a fixed sufficiently small $\varepsilon$; a remaining open interval contains a rational height. The contour-bound input gives $L'/L=O(\log^2(q(T+2)))$ on each such horizontal line. Step 1.2 makes the two horizontal integrals vanish as $T\to\infty$. Any two symmetric zero truncations whose heights lie in the same unit window differ by $O_x(\log(qT)T^{-\nu})$, so the good-height limit and the ordinary symmetric limit agree whenever the former exists. [F7, F8, F10, step 1.2, construct, algebra]

3.1 For $t\ge0$, write $A=\log|3/2-it|\ge0$, $b=\arctan(2t/3)$ and $c_1=(\pi/2)\tanh(\pi t)$. The real part $a_1$ of $(\pi/2)\cot(\pi(s+\kappa)/2)$ equals $\pm(\pi/2)\operatorname{sech}(\pi t)$, its imaginary part is $-c_1$, and $a_1^2+c_1^2=(\pi/2)^2$. One has $0\le b\le c_1$. For $t\le1$, use $\arctan u\le u$ and $\tanh v\ge v/(1+v)$; the latter follows from $e^{2v}\ge1+2v$, and $3<\pi<22/7$ gives $\pi^2/[2(1+\pi)]\ge2/3$. For $t\ge1$, use $\pi/2-b=\arctan(3/(2t))\ge3/(2t+3)$ and $\pi/2-c_1\le\pi e^{-2\pi t}\le1/(2\pi t^2)\le3/(2t+3)$. Thus $| -\operatorname{Log}(3/2-it)+(\pi/2)\cot(\pi(s+\kappa)/2)|^2=(-A+a_1)^2+(b-c_1)^2\le(A+\pi/2)^2$; negative $t$ follows by conjugation. The first rational bound follows from the geometric logarithm series in step 2.1. For the second, the tangent addition formula gives $\pi=16\arctan(1/5)-4\arctan(1/239)$, and the alternating arctangent series gives $\pi<3927/1250$. Combining with steps 2.1 and 1.4, $\log2<693148/10^6$, $\pi/2<15708/10^4$, and $10/27+693148/10^6+15708/10^4+1506/1000<10351/2500$ proves $$\left|\frac{L'}L\!\left(-\frac12+it,\chi\right)\right|\le\log q+\log\pi+\frac{10351}{2500}+\frac12\log\!\left(t^2+\frac94\right).$$ [F3, F4, F5, step 1.3, step 2.1, step 1.4, construct, algebra]

3.2 Define the same series as an $L^1$ convolution on the whole real line. Its $L^1$ norm is bounded by $\|g\|_1\sum_n\Lambda(n)n^{-c}<\infty$. Taking finite sums and passing to their explicit $L^1$ limit gives its Fourier transform $$\widehat h(t)=G_\delta(c+it)x^{it}\sum_{n\ge1}\frac{\Lambda(n)\chi(n)}{n^{c+it}}=-G_\delta(c+it)x^{it}\frac{L'}L(c+it,\chi).$$ The complex-character series follows by differentiating the absolutely convergent Euler product, with $\sum_{p,k}(\log p)p^{-kc}<\infty$. Dini inversion at the single point zero follows directly from the Dirichlet kernel: the local difference quotient is integrable by step 2.2, and the remaining $L^1$ part tends to zero by the elementary Riemann–Lebesgue argument. Thus $$\sum_{n\ge1}\Lambda(n)\chi(n)f(n/x)=\frac1{2\pi i}\lim_{T\to\infty}\int_{c-iT}^{c+iT}-\frac{L'}L(s,\chi)G_\delta(s)x^s\,ds.$$ This is ordinary symmetric truncation; no absolute convergence of the frequency integral is used. [F6, F7, F17, step 1.1, step 2.2, construct, algebra]

4.1 The function $u\mapsto f'(e^u)e^{u/2}$ is $L^1\cap L^2$: its $L^1$ norm is $\int|f'(t)|t^{-1/2}dt$, and its $L^2$ norm is $\|f'\|_2$. For this one explicitly given function, Fourier Plancherel follows without choice by truncation, insertion of the explicit Gaussian frequency factor, finite Fubini and the Gaussian approximate-identity calculation; the explicitly given $L^1$ and $L^2$ tails remove the cutoff. Thus $$\frac1{2\pi}\int_{-\infty}^\infty|sG_\delta(-1/2+it)|^2dt=\|f'\|_2^2\le(\|\eta'\|_2+2\pi|\delta|\|\eta\|_2)^2.$$ Apply Cauchy–Schwarz, step 3.1 and the exact 6.01 integral input [F2]. The integral of $|(L'/L)G_\delta|$ on $\Re s=-1/2$ converges and is bounded by $2\pi(\log q+6.01)(\|\eta'\|_2+2\pi|\delta|\|\eta\|_2)$. [F1, F2, F12, step 3.1, construct, algebra]

5.1 Shift the finite rectangle in step 3.2 from $\Re s=3/2$ to $-1/2$ through good heights from step 2.3. There are finitely many enclosed zeros, counted by multiplicity. The pole at $1$ when $q=1$ contributes $G_\delta(1)x=\widehat\eta(-\delta)x$; each nontrivial zero contributes $-G_\delta(\rho)x^\rho$; no trivial zero lies on or between the shifted line and zero except the origin already treated below. The horizontal integrals vanish by step 2.3, the right integral has the ordinary limit from step 3.2, and the left integral has the absolute limit from step 4.1. Therefore the good-height zero sums converge; step 2.3 upgrades this to the ordinary symmetric ordinate limit. The left-line contribution has the displayed error bound after multiplication by $x^{-1/2}$. [F1, F7, F8, F10, step 3.2, step 2.3, step 4.1, algebra]

6.1 At the origin the Mellin input gives $G_\delta(s)=\eta(0)/s+B+O(s)$ with $|B|\le c_0$ as stated. For $q>1$, expand the functional equation in step 1.3: $$\frac{L'}L(s,\chi)=\frac{\epsilon_\chi}{s}+\log\frac{2\pi}{q}+\gamma-\frac{L'(1,\overline\chi)}{L(1,\overline\chi)}+O(s).$$ Here the cotangent has residue one for the even character and no pole or constant term for the odd character; $\psi(1)=-\gamma$. The product-residue input gives the residue of $(L'/L)G_\delta(s)x^s$ as $$\eta(0)\left(\log\frac{2\pi}{q}+\gamma-\frac{L'(1,\overline\chi)}{L(1,\overline\chi)}+\epsilon_\chi\log x\right)+\epsilon_\chi B.$$ For $q=1$, $\zeta'/\zeta(0)=\log(2\pi)$, so the residue is $\eta(0)\log(2\pi)$. To derive the latter value directly, use the zeta functional equation and the elementary expansion $\zeta(s)=1/(s-1)+\gamma+O(s-1)$: the constant is $\gamma$ by subtracting $\int_n^{n+1}t^{-s}dt$ termwise and evaluating the resulting convergent series at $s=1$. The Gamma product gives $\Gamma(1)=1$ and $\psi(1)=-\gamma$; substitution in the zeta functional equation gives the stated logarithmic derivative. Since $|\epsilon_\chi B|\le c_0$, these are exactly the two required formulas for $R$. Together with step 5.1 this proves the displayed explicit formula and its bound with the specified symmetric zero-sum convention. [F1, F7, F11, F13, F14, F15, F16, step 1.3, step 5.1, given, algebra] ∎


## Remarks

The full $C^1$ smoothing class, all primitive characters, and the numerical $6.01$ and $c_0$ bounds are retained. The origin residue corrects two source issues in Lemma4.1: the integrand contains $x^s$, so an even-character double pole contributes $\eta(0)\log x$, and the functional equation evaluates the logarithmic derivative at the conjugate character. The native source formula is preserved in the run archive. The source p.32 says only that the sum is over all nontrivial zeros; p.33 derives it by shifting a vertical contour and does not explicitly state an ordering. The proof uses and establishes the ordinary symmetric ordinate limit naturally associated with that contour derivation, without asserting arbitrary-order absolute convergence. The published source’s omitted $\eta(0)\epsilon_\chi\log x$ and conjugation corrections remain explicit.
