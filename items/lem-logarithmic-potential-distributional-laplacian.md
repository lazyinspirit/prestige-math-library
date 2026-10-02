---
id: lem-logarithmic-potential-distributional-laplacian
kind: lemma
title: "Distributional Laplacian of a compact logarithmic potential"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-logarithmic-potential-and-energy
  - def-support-of-a-borel-measure
  - def-riesz-measure-subharmonic-function
  - def-plane-subharmonic-function
  - thm-log-modulus-of-a-holomorphic-function-is-subharmonic
  - lem-log-modulus-is-harmonic-off-its-centre
  - thm-plane-subharmonic-functions-are-locally-integrable
  - thm-minus-laplacian-of-the-fundamental-solution-is-dirac
  - thm-fatou-lemma
  - thm-differentiation-under-the-integral-sign
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §§1–3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§2, subharmonic functions and logarithmic potentials, printed pp. 179–181"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §§3 and 5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, subharmonicity and the distributional Laplacian of a logarithmic potential"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu$ be a finite positive Borel
measure on $\mathbb C$ with compact support $S=\operatorname{supp}\mu$, and let
$p_\mu(z)=\int_{\mathbb C}\log|z-w|\,d\mu(w)\in[-\infty,\infty)$ and
$U^\mu=-p_\mu$ be as in [[def-logarithmic-potential-and-energy]]. Then $p_\mu$
is locally integrable on $\mathbb C$, subharmonic on the domain $\mathbb C$,
harmonic on $\mathbb C\setminus S$, and

$$\Delta p_\mu=2\pi\mu,\qquad\text{equivalently}\qquad \Delta U^\mu=-2\pi\mu,$$

in the distributional sense, that is,
$\frac{1}{2\pi}\int_{\mathbb C}p_\mu\,\Delta\varphi\,dA=\int_{\mathbb C}\varphi\,d\mu$
for every $\varphi\in C_c^\infty(\mathbb C)$; in the normalization of
[[def-riesz-measure-subharmonic-function]] this reads $\mu_{p_\mu}=\mu$.

The zero measure is included and is settled separately: then $S=\varnothing$
and $p_0=0$ by the zero clause of [[def-logarithmic-potential-and-energy]], the
constant $0$ is smooth, subharmonic and harmonic on $\mathbb C=\mathbb C\setminus S$,
$\Delta 0=0=2\pi\cdot0$ distributionally and $\mu_{p_0}=0$. The proof below
therefore assumes $S\ne\varnothing$; for a nonzero finite positive Borel measure
this holds because $S=\operatorname{supp}\mu$ carries $\mu$, so a measure with
empty support is zero ([[def-support-of-a-borel-measure]]).

The Axiom of Countable Choice is used through the published fundamental-solution
theorem [F6] and through the countable constructions in [F4]; the pointwise,
Fubini and Fatou steps are choice-free.

## Facts & Assumptions

**Given:** a finite positive Borel measure $\mu$ with compact support
$S\ne\varnothing$ (the zero measure is excluded by the Statement), the
potentials $p_\mu=-U^\mu$ of [[def-logarithmic-potential-and-energy]], and
$\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] $p_\mu(z)=\int\log|z-w|\,d\mu(w)$ is the extended integral of the
Borel function $\log|z-{\cdot}|$ against the finite measure $\mu$, and
$p_\mu(z)\in[-\infty,\infty)$ ([[def-logarithmic-potential-and-energy]]).

[F2] For every $w\in\mathbb C$ the function $z\mapsto\log|z-w|$ is subharmonic
on the whole plane: apply the zero-order factorization theorem to the
holomorphic function $z\mapsto z-w$, which is not identically zero
([[thm-log-modulus-of-a-holomorphic-function-is-subharmonic]]).

[F3] $z\mapsto\log|z-a|$ is smooth and harmonic on $\mathbb C\setminus\{a\}$
([[lem-log-modulus-is-harmonic-off-its-centre]]).

[F4] Every subharmonic function on a plane domain is locally integrable
([[thm-plane-subharmonic-functions-are-locally-integrable]]).

[F5] Subharmonic on a plane domain means upper semicontinuous, not identically
$-\infty$ on any connected component, and satisfying the circle mean inequality
at every closed disc contained in the domain
([[def-plane-subharmonic-function]]).

[F6] Assume $\mathrm{AC}_\omega$: the kernel $\Phi(x)=-(2\pi)^{-1}\log|x|$ is
locally integrable on $\mathbb R^2$ and its regular distribution satisfies
$-\Delta T_\Phi=\delta_0$; for every $y$ the translate satisfies
$-\Delta_xT_{\Phi(\cdot-y)}=\delta_y$
([[thm-minus-laplacian-of-the-fundamental-solution-is-dirac]]).

[F7] Tonelli's theorem for nonnegative product-measurable integrands
([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F8] Fubini's theorem for product-integrable integrands
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F9] Fatou's lemma: for nonnegative measurable $f_n$,
$\int\liminf_nf_n\le\liminf_n\int f_n$
([[thm-fatou-lemma]]).

[F10] Differentiation under the integral sign for a parameter integral with an
integrable dominating function ([[thm-differentiation-under-the-integral-sign]]).

[F11] The support $\operatorname{supp}\mu$ of a finite positive Borel measure
on $\mathbb C$ carries $\mu$ and is the smallest closed carrier; in particular
$\mu\neq0$ if and only if $\operatorname{supp}\mu\neq\varnothing$, and if
$\mu$ is carried by a compact $K$ then $\operatorname{supp}\mu\subseteq K$ is
compact ([[def-support-of-a-borel-measure]]).

## Proof

**Proof technique:** direct.

1.1 By [F11] the support $S\ne\varnothing$ is compact. Fix $R>0$ and put $S_0:=\max_{w\in S}|w|<\infty$. For $z\in B(0,R)$ one has $\log|z-w|\le\log(R+S_0)$, so $p_\mu^+(z)\le M\log^+(R+S_0)<\infty$, where $M=\mu(\mathbb C)$. Also $p_\mu^-(z)\le\int\log^+(1/|z-w|)\,d\mu(w)$. Tonelli and the radial computation $\int_{|u|<1}\log(1/|u|)\,dA(u)=2\pi\int_0^1r\log(1/r)\,dr=\pi/2$ give $\int_{B(0,R)}p_\mu^-(z)\,dA(z)\le M\int_{|u|<1}\log(1/|u|)\,dA(u)=\pi M/2<\infty$. Thus $p_\mu^-<\infty$ outside an area-null subset of $B(0,R)$ and $p_\mu\in(-\infty,\infty)$ almost everywhere; in particular $p_\mu$ is not identically $-\infty$ on the connected domain $\mathbb C$. [F1, F7, F11, given, algebra]

1.2 Let $z_n\to z$ and choose $C$ with $\log|z_n-w|\le C$ for all $w\in S$ and all $n$; the functions $h_n(w):=C-\log|z_n-w|$ are nonnegative and measurable, so [F9] gives $\liminf_n\int h_n\,d\mu\ge\int\liminf_nh_n\,d\mu$, that is, $\limsup_np_\mu(z_n)\le\int\limsup_n\log|z_n-w|\,d\mu(w)=p_\mu(z)$, because $\log|z_n-w|\to\log|z-w|$ for $w\ne z$ and $\to-\infty$ for $w=z$. Hence $p_\mu$ is upper semicontinuous. [F1, F9, algebra]

1.3 For every $w\in\mathbb C$ the function $z\mapsto\log|z-w|$ is subharmonic by [F2] applied to the holomorphic function $z\mapsto z-w$; by [F5] it therefore satisfies the circle mean inequality $\log|a-w|\le\frac1{2\pi}\int_0^{2\pi}\log|a+re^{it}-w|\,dt$ for all $a\in\mathbb C$ and $r>0$. [F2, F5, given]

2.1 Fix $a\in\mathbb C$, $r>0$ and put $G(t,w):=\log|a+re^{it}-w|$; since $G^+\le\log(|a|+r+S_0+1)$ on $S$, the extended integral $\int_0^{2\pi}\int_SG\,d\mu\,dt$ and its reversed iterated integral both equal $\int G^+-\int G^-$ by two applications of [F7], the difference being well defined because $\int\int G^+<\infty$. Integrating the inequality of step 1.3 over $\mu$ and using this identity gives $p_\mu(a)\le\frac1{2\pi}\int_0^{2\pi}\int_SG\,d\mu\,dt=\frac1{2\pi}\int_0^{2\pi}p_\mu(a+re^{it})\,dt$. [step 1.3, F1, F7, algebra]

3.1 By step 1.2 $p_\mu$ is upper semicontinuous, by step 1.1 it is not identically $-\infty$ on $\mathbb C$, and by step 2.1 it satisfies the circle mean inequality at every closed disc in $\mathbb C$; each disc lies in some $B(0,R)$ and the inequality of step 2.1 is exactly the one required by [F5], so $p_\mu$ is subharmonic on $\mathbb C$, and [F4] makes it locally integrable. [step 1.1, step 1.2, step 2.1, F4, F5]

4.1 Let $z_0\notin S$ and $\delta:=\frac12d(z_0,S)>0$. On $B(z_0,\delta)$ every $w\in S$ satisfies $|z-w|\ge\delta$, so every partial derivative of order $1$ or $2$ in $z$ of $(z,w)\mapsto\log|z-w|$ is bounded on $B(z_0,\delta)\times S$ by a constant depending only on $\delta$; since $\mu$ is finite, [F10] applied to $x$ and $y$ derivatives lets the Laplacian pass inside the integral, and [F3] gives $\Delta p_\mu(z)=\int\Delta_z\log|z-w|\,d\mu(w)=0$ for $z\in B(z_0,\delta)$. The resulting first and second derivatives are continuous by [[thm-dominated-convergence]], since the kernel derivatives are continuous away from the uniformly separated support and obey the same integrable constant bounds. Hence $p_\mu$ is harmonic on the open set $\mathbb C\setminus S$. [step 3.1, F3, F10, algebra]

5.1 Let $\varphi\in C_c^\infty(\mathbb C)$. If $\varphi=0$ the identity is immediate; otherwise take a nonempty compact set $L$ containing $\operatorname{supp}\varphi$ and choose $A>\max\{|z-w|:z\in L,\ w\in S\}$. Then $\int_L|\log|z-w||\,dA(z)\le\int_{|u|<A}|\log|u||\,dA(u)<\infty$ uniformly for $w\in S$. Since $\Delta\varphi$ is bounded on $L$, the integrand $\log|z-w|\Delta\varphi(z)$ is product-integrable on $L\times S$, and [F8] gives $\int p_\mu\Delta\varphi\,dA=\int\bigl(\int\log|z-w|\Delta\varphi(z)\,dA(z)\bigr)d\mu(w)$. The inner integral is the distributional pairing $\langle\Delta_x\log|x-w|,\varphi\rangle$, which by [F6] equals $2\pi\varphi(w)$; hence $\frac1{2\pi}\int p_\mu\Delta\varphi\,dA=\int\varphi\,d\mu$ for every test function, that is, $\mu_{p_\mu}=\mu$ in the normalization of [[def-riesz-measure-subharmonic-function]], equivalently $\Delta p_\mu=2\pi\mu$ and $\Delta U^\mu=-\Delta p_\mu=-2\pi\mu$. [step 3.1, F6, F8, given] ∎
