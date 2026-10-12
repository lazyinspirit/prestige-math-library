---
id: thm-fluid-uniqueness-and-continuous-dependence
kind: theorem
title: "Uniqueness of smooth periodic solutions and continuous dependence in $H^{s-1}$ on the common local interval"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 8
deps: [def-periodic-vector-sobolev-space-and-leray-projection, lem-fourier-lattice-sobolev-embedding, lem-discrete-young-and-sobolev-product, lem-tame-transport-commutator, thm-local-smooth-periodic-euler-viscous-solution, def-countable-choice, thm-gronwall-integral-inequality, thm-holder-finite-real-exponents, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integral-over-a-measurable-set]
dependency_roles:
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  lem-discrete-young-and-sobolev-product: mathematical-premise
  lem-tame-transport-commutator: mathematical-premise
  thm-local-smooth-periodic-euler-viscous-solution: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-holder-finite-real-exponents: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 4.2 and Theorem 4.11 (energy estimates for differences of solutions; uniqueness and stability of strong solutions)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Proposition 3.1, Corollary 3.1 and Lemma 3.8 (the basic energy estimate, uniqueness of solutions, and interpolation in Sobolev spaces)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $s\ge4$ be an integer, $\nu\ge0$, and let $B>0$ with $T:=(2C_sB)^{-1}$, where $C_s$ is the commutator constant of [[lem-tame-transport-commutator]]. Let $u_0,v_0\in H^s_\sigma(\mathbb T^3;\mathbb R^3)\cap C^\infty(\mathbb T^3;\mathbb R^3)$ be smooth divergence-free data with $\|u_0\|_{H^s}\le B$ and $\|v_0\|_{H^s}\le B$, and let $u,v\in C^\infty([0,T]\times\mathbb T^3;\mathbb R^3)$ be the corresponding smooth solutions of the projected equation $\partial_tu+P((u\cdot\nabla)u)=\nu\Delta u$ given by [[thm-local-smooth-periodic-euler-viscous-solution]] (each exists on $[0,T]$ by the choice of $T$).

1. **Uniqueness.** If $u(0)=v(0)$, then $u=v$ on $[0,T]$.
2. **Stability in $L^2$.** With $w:=u-v$ and $\Theta:=\sup_{0\le t\le T}\||\nabla v(t)|\|_{L^\infty}\le6W_{s-1}B$, where $|\nabla v|=(\sum_j|\partial_jv|^2)^{1/2}$ ([[lem-fourier-lattice-sobolev-embedding]]),
$$\|w(t)\|_{L^2}\le e^{\Theta t}\|w(0)\|_{L^2}\qquad(0\le t\le T).$$
3. **Continuous dependence in $H^{s-1}$.** There is a finite constant $K=K(s,B,T,\nu)$ such that
$$\sup_{0\le t\le T}\|u(t)-v(t)\|_{H^{s-1}}\;\le\;K\,\|u_0-v_0\|_{L^2}^{1/s}.$$
In particular the solution map $u_0\mapsto u$ is continuous from the bounded set $\{\|u_0\|_{H^s}\le B\}$ with the $L^2$-topology into $C([0,T],H^{s-1})$.

## Facts & Assumptions

**Given:** The two smooth solutions $u,v$ on $[0,T]$, the difference $w=u-v$ and the constant $\Theta$.

[F1] For smooth fields on $\mathbb T^3$: $\int_{\mathbb T^3}\partial_jf\,dx=0$ and $\int_{\mathbb T^3}f\partial_jg\,dx=-\int_{\mathbb T^3}(\partial_jf)g\,dx$ (periodic integration by parts); $\langle\Delta f,f\rangle=-\|\nabla f\|_{L^2}^2$ ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integral-over-a-measurable-set]]).

[F2] Vanishing transport integral: for divergence-free $u\in H^m$, $m>5/2$, and $w\in H^m$, $\int((u\cdot\nabla)w)\cdot w\,dx=0$; here $s\ge4>5/2$ and all fields are smooth ([[lem-tame-transport-commutator]], claim 1).

[F3] Sup bound: for $s-1>3/2$, $\|\nabla v(t)\|_{L^\infty}\le3W_{s-1}\|v(t)\|_{H^s}$ and $\|v(t)\|_{H^s}\le2B$ on $[0,T]$ ([[lem-fourier-lattice-sobolev-embedding]], claims 3 and 4; [[thm-local-smooth-periodic-euler-viscous-solution]], claim 2).

[F4] Interpolation: for real fields with finite norms, $\|f\|_{H^{s-1}}\le\|f\|_{L^2}^{1/s}\|f\|_{H^s}^{(s-1)/s}$ for every integer $s\ge1$ ([[thm-holder-finite-real-exponents]] applied to the families $a_k=|\widehat f(k)|^{2/s}$ and $b_k=w_k^{2(s-1)}|\widehat f(k)|^{2(s-1)/s}$, followed by the supremum over finite sets).

[F5] Gronwall: if continuous $y\ge0$ satisfies $y(t)\le A+\int_0^t\lambda y$ with $A,\lambda\ge0$ constants, then $y(t)\le Ae^{\lambda t}$ ([[thm-gronwall-integral-inequality]]).

[F6] Two continuous fields equal almost everywhere are equal everywhere, and the $L^2$ norm of a field is $(\sum_k|\widehat f(k)|^2)^{1/2}$ ([[lem-fourier-lattice-sobolev-embedding]], claim 2; [[def-periodic-vector-sobolev-space-and-leray-projection]]).

## Proof


**Proof technique:** direct; insert the difference of the two equations into the $L^2$ energy identity, bound the difference term by the sup norm of the gradient, integrate the resulting linear inequality by Gronwall, and interpolate.

**Given:** The smooth solutions $u,v$ of the projected equation, the difference $w=u-v$ and the facts [F1]-[F6].

1.1 Subtracting the equations for $u$ and $v$ and writing $u=v+w$, we get $(u\cdot\nabla)u-(v\cdot\nabla)v=(v\cdot\nabla)w+(w\cdot\nabla)v+(w\cdot\nabla)w=(u\cdot\nabla)w+(w\cdot\nabla)v$, so $w$ solves $w'=\nu\Delta w-P((u\cdot\nabla)w+(w\cdot\nabla)v)$; $w$ is smooth, real and divergence-free. [given, F6]

2.1 Pairing the equation for $w$ with $w$ and using that $P$ is self-adjoint and fixes divergence-free fields, $\frac12\frac{d}{dt}\|w\|_{L^2}^2=\langle w',w\rangle=-\nu\|\nabla w\|_{L^2}^2-\langle(u\cdot\nabla)w,w\rangle-\langle(w\cdot\nabla)v,w\rangle$. By [F2] the middle term vanishes, and the pointwise bound $|\sum_jw_j(\partial_jv\cdot w)|\le|\nabla v|\,|w|^2$ gives $\bigl|\langle(w\cdot\nabla)v,w\rangle\bigr|\le\||\nabla v|\|_{L^\infty}\|w\|_{L^2}^2$; hence $\frac12\frac{d}{dt}\|w\|_{L^2}^2\le\Theta\|w\|_{L^2}^2$. Integrating this differential inequality gives $\|w(t)\|_{L^2}^2\le\|w(0)\|_{L^2}^2+2\Theta\int_0^t\|w(\sigma)\|_{L^2}^2d\sigma$, and Gronwall [F5] yields the stability estimate of claim 2. [step 1.1, F1, F2, F5]

3.1 $\Theta\le6W_{s-1}B$ by [F3]: pointwise $|\nabla v|\le\sum_{j=1}^3|\partial_jv|$ so $\||\nabla v(t)|\|_{L^\infty}\le\sum_{j=1}^3\|\partial_jv(t)\|_{L^\infty}\le3W_{s-1}\|v(t)\|_{H^s}\le3W_{s-1}\cdot2B$. [step 2.1, F3]

3.2 Uniqueness: if $u(0)=v(0)$ then $\|w(0)\|_{L^2}=0$, so $\|w(t)\|_{L^2}=0$ for all $t\le T$ by step 2.1; hence $w=0$ almost everywhere, and since $w$ is continuous, $w=0$ everywhere by [F6]; this is claim 1. [step 2.1, F6]

4.1 Continuous dependence: by [F4] applied to $w(t)$ and by [F3] and claim 2 of [[thm-local-smooth-periodic-euler-viscous-solution]], $\|w(t)\|_{H^{s-1}}\le\|w(t)\|_{L^2}^{1/s}\|w(t)\|_{H^s}^{(s-1)/s}\le\bigl(e^{\Theta T}\|w(0)\|_{L^2}\bigr)^{1/s}(4B)^{(s-1)/s}$. Taking the supremum over $t\in[0,T]$ gives claim 3 with $K:=e^{\Theta T/s}(4B)^{(s-1)/s}$ (using $\Theta\le6W_{s-1}B$ so that $K$ depends only on $s,B,T,\nu$ through $W_{s-1}$ and $C_s$; the viscosity enters only through $T$ and the solution bounds). [step 2.1, step 3.1, F3, F4]

5.1 Claims 1-3 are established by steps 3.2, 2.1 and 4.1. [step 3.2, step 2.1, step 4.1] ∎

## Remarks

- Uniqueness is asserted among the smooth solutions constructed on the common interval; no weak-solution class is involved. The stability exponent is controlled by the $H^s$ bound of the comparison solution, so the modulus of continuity is explicit in the size of the data.
- The exponent $1/s$ in the $H^{s-1}$ stability is the Hölder exponent produced by interpolation; no Lipschitz stability in the high norm is claimed.
