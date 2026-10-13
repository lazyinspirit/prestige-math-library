---
id: thm-fluid-uniqueness-and-continuous-dependence
kind: theorem
title: "Uniqueness of smooth periodic solutions and continuous dependence in $H^{s-1}$ on the common local interval"
status: published
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

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $s\ge4$ be an integer, $\nu\ge0$, and let $B>0$ with $T:=(2C_sB)^{-1}$, where $C_s$ is the commutator constant of [[lem-tame-transport-commutator]]. Let $u_0,v_0\in H^s_\sigma(\mathbb T^3;\mathbb R^3)\cap C^\infty(\mathbb T^3;\mathbb R^3)$ be smooth divergence-free data with $\|u_0\|_{H^s}\le B$ and $\|v_0\|_{H^s}\le B$, and let $u,v\in C^\infty([0,T]\times\mathbb T^3;\mathbb R^3)$ be the corresponding smooth solutions of the projected equation $\partial_tu+P((u\cdot\nabla)u)=\nu\Delta u$ given by [[thm-local-smooth-periodic-euler-viscous-solution]] (each nonzero datum has lifespan at least $T$ by its norm bound; for a zero datum use the explicit solution $z\equiv0$ on $[0,T]$, even when $T>1$).

1. **Uniqueness.** If $u(0)=v(0)$, then $u=v$ on $[0,T]$.
2. **Stability in $L^2$.** With $w:=u-v$ and $\Theta:=\sup_{0\le t\le T}\||\nabla v(t)|\|_{L^\infty}\le6W_{s-1}B$, where $|\nabla v|=(\sum_j|\partial_jv|^2)^{1/2}$ ([[lem-fourier-lattice-sobolev-embedding]]),
$$\|w(t)\|_{L^2}\le e^{\Theta t}\|w(0)\|_{L^2}\qquad(0\le t\le T).$$
3. **Continuous dependence in $H^{s-1}$.** There is a finite constant $K=K(s,B,T,\nu)$ such that
$$\sup_{0\le t\le T}\|u(t)-v(t)\|_{H^{s-1}}\;\le\;K\,\|u_0-v_0\|_{L^2}^{1/s}.$$
In particular the solution map $u_0\mapsto u$ is continuous from the bounded set $\mathcal D_{s,B}:=\{u_0\in H^s_\sigma(\mathbb T^3;\mathbb R^3)\cap C^\infty(\mathbb T^3;\mathbb R^3):\|u_0\|_{H^s}\le B\}$ with its induced $L^2$-topology into $C([0,T],H^{s-1})$.

## Facts & Assumptions

**Given:** The two smooth solutions $u,v$ on $[0,T]$, the difference $w=u-v$ and the constant $\Theta$.

[F1] For smooth fields on $\mathbb T^3$: $\int_{\mathbb T^3}\partial_jf\,dx=0$ and $\int_{\mathbb T^3}f\partial_jg\,dx=-\int_{\mathbb T^3}(\partial_jf)g\,dx$ (periodic integration by parts); $\langle\Delta f,f\rangle=-\|\nabla f\|_{L^2}^2$ ([[def-periodic-vector-sobolev-space-and-leray-projection]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integral-over-a-measurable-set]]).

[F2] Vanishing transport integral: for divergence-free $u\in H^m$, $m>5/2$, and $w\in H^m$, $\int((u\cdot\nabla)w)\cdot w\,dx=0$; here $s\ge4>5/2$ and all fields are smooth ([[lem-tame-transport-commutator]], claim 1).

[F3] Sup bound: for $s-1>3/2$, $\|\nabla v(t)\|_{L^\infty}\le3W_{s-1}\|v(t)\|_{H^s}$ and $\|v(t)\|_{H^s}\le2B$ on $[0,T]$, with the latter established by the smooth energy argument in step 1.1 below ([[lem-fourier-lattice-sobolev-embedding]], claims 3 and 4; [[lem-tame-transport-commutator]], claims 2-3).

[F4] Interpolation: for real fields with finite norms, $\|f\|_{H^{s-1}}\le\|f\|_{L^2}^{1/s}\|f\|_{H^s}^{(s-1)/s}$ for every integer $s\ge1$ ([[thm-holder-finite-real-exponents]] applied to the families $a_k=|\widehat f(k)|^{2/s}$ and $b_k=w_k^{2(s-1)}|\widehat f(k)|^{2(s-1)/s}$, followed by the supremum over finite sets).

[F5] Gronwall: if continuous $y\ge0$ satisfies $y(t)\le A+\int_0^t\lambda y$ with $A,\lambda\ge0$ constants, then $y(t)\le Ae^{\lambda t}$ ([[thm-gronwall-integral-inequality]]).

[F6] Two continuous fields equal almost everywhere are equal everywhere, and the $L^2$ norm of a field is $(\sum_k|\widehat f(k)|^2)^{1/2}$ ([[lem-fourier-lattice-sobolev-embedding]], claim 2; [[def-periodic-vector-sobolev-space-and-leray-projection]]).

## Proof


**Proof technique:** direct; insert the difference of the two equations into the $L^2$ energy identity, bound the difference term by the sup norm of the gradient, integrate the resulting linear inequality by Gronwall, and interpolate.

**Given:** The smooth solutions $u,v$ of the projected equation, the difference $w=u-v$ and the facts [F1]-[F6].

1.1 For either smooth solution $z=u$ or $z=v$, put $Y(t)=\|z(t)\|_{H^s}$. Pair its equation with $\Lambda^{2s}z$, using periodic integration by parts and the commuting orthogonal Leray projection. The dissipative term is nonpositive since $\nu\ge0$, while claims 2-3 of [[lem-tame-transport-commutator]] give $$\tfrac12(Y^2)'\le C_sY^3.$$ With $Y_\varepsilon=(Y^2+\varepsilon^2)^{1/2}$ this implies $Y_\varepsilon'\le C_sY_\varepsilon^2$, hence $Y_\varepsilon(t)\le Y_\varepsilon(0)/(1-C_sY_\varepsilon(0)t)$ while the denominator is positive, by differentiating $1/Y_\varepsilon$. Letting $\varepsilon\downarrow0$ gives $Y(t)\le Y(0)/(1-C_sY(0)t)\le2B$ for $t\le T=(2C_sB)^{-1}$; if $Y(0)=0$ the same limit gives $Y=0$. This establishes the bound required in [F3] for both solutions, without substituting $2B$ for the weaker exponential bound in the existence supplier. [given, F1, F2, algebra]

1.2 Subtracting the equations for $u$ and $v$ and writing $u=v+w$, we get $(u\cdot\nabla)u-(v\cdot\nabla)v=(v\cdot\nabla)w+(w\cdot\nabla)v+(w\cdot\nabla)w=(u\cdot\nabla)w+(w\cdot\nabla)v$, so $w$ solves $w'=\nu\Delta w-P((u\cdot\nabla)w+(w\cdot\nabla)v)$; $w$ is smooth, real and divergence-free. [given, F6]

2.1 Pairing the equation for $w$ with $w$ and using that $P$ is self-adjoint and fixes divergence-free fields, $\frac12\frac{d}{dt}\|w\|_{L^2}^2=\langle w',w\rangle=-\nu\|\nabla w\|_{L^2}^2-\langle(u\cdot\nabla)w,w\rangle-\langle(w\cdot\nabla)v,w\rangle$. By [F2] the middle term vanishes, and the pointwise bound $|\sum_jw_j(\partial_jv\cdot w)|\le|\nabla v|\,|w|^2$ gives $\bigl|\langle(w\cdot\nabla)v,w\rangle\bigr|\le\||\nabla v|\|_{L^\infty}\|w\|_{L^2}^2$; hence $\frac12\frac{d}{dt}\|w\|_{L^2}^2\le\Theta\|w\|_{L^2}^2$. Integrating this differential inequality gives $\|w(t)\|_{L^2}^2\le\|w(0)\|_{L^2}^2+2\Theta\int_0^t\|w(\sigma)\|_{L^2}^2d\sigma$, and Gronwall [F5] yields the stability estimate of claim 2. [step 1.2, F1, F2, F5]

3.1 $\Theta\le6W_{s-1}B$ by [F3]: pointwise $|\nabla v|\le\sum_{j=1}^3|\partial_jv|$ so $\||\nabla v(t)|\|_{L^\infty}\le\sum_{j=1}^3\|\partial_jv(t)\|_{L^\infty}\le3W_{s-1}\|v(t)\|_{H^s}\le3W_{s-1}\cdot2B$. [step 2.1, F3]

3.2 Uniqueness: if $u(0)=v(0)$ then $\|w(0)\|_{L^2}=0$, so $\|w(t)\|_{L^2}=0$ for all $t\le T$ by step 2.1; hence $w=0$ almost everywhere, and since $w$ is continuous, $w=0$ everywhere by [F6]; this is claim 1. [step 2.1, F6]

4.1 Continuous dependence: by [F4] applied to $w(t)$ and by the bounds for both solutions in step 1.1, $\|w(t)\|_{H^{s-1}}\le\|w(t)\|_{L^2}^{1/s}\|w(t)\|_{H^s}^{(s-1)/s}\le\bigl(e^{\Theta T}\|w(0)\|_{L^2}\bigr)^{1/s}(4B)^{(s-1)/s}$. Taking the supremum over $t\in[0,T]$ and using $\Theta\le6W_{s-1}B$ gives claim 3 with the uniform constant $K:=e^{6W_{s-1}BT/s}(4B)^{(s-1)/s}$, which is finite and independent of the data and $\nu$. [step 1.1, step 2.1, step 3.1, F3, F4]

5.1 Claims 1-3 are established by steps 3.2, 2.1 and 4.1. Existence and uniqueness give a well-defined solution map on $\mathcal D_{s,B}$, and step 4.1 makes its output distance tend to zero whenever its input $L^2$ distance tends to zero, proving the stated continuity. [given, step 3.2, step 2.1, step 4.1] ∎

## Remarks

- Uniqueness is asserted among the smooth solutions constructed on the common interval; no weak-solution class is involved. The stability exponent is controlled by the $H^s$ bound of the comparison solution, so the modulus of continuity is explicit in the size of the data.
- The exponent $1/s$ in the $H^{s-1}$ stability is the Hölder exponent produced by interpolation; no Lipschitz stability in the high norm is claimed.
