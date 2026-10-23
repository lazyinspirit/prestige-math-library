---
id: thm-fd-common-wall-residual-error
kind: theorem
title: "Bounded-domain residual error with explicit channel lift"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-bl01
deps:
  - def-fd-wall-defect-capillary-models
  - def-countable-choice
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - cor-cauchy-schwarz-inequality-for-l-two
  - cor-triangle-inequality-for-inner-product-norm
  - thm-newton-leibniz-with-interior-derivative
  - thm-derivative-of-exponential
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-of-square-roots
dependency_roles:
  def-fd-wall-defect-capillary-models: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-of-square-roots: mathematical-premise
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Roger Temam, Navier–Stokes Equations and Nonlinear Functional Analysis, 2nd ed."
      url: "https://ftp.mi.fu-berlin.de/pub/klima/NavierStokes/Temam-NavierStokesEquationsAndNonlinearFunctionalAnalysis.pdf"
    - title: "Erik Wiedemann, Lecture Notes: Navier–Stokes Equations"
      url: "https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$: every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets admits a function $c$ with $c(n)\in X_n$. Let $T>0$, let $D\subseteq\mathbb R^3$ be a bounded connected $C^2$ domain, let $I$ be an open interval containing $[0,T]$, and let $\rho_0,\nu>0$. Suppose $u,v\in C^1([0,T];C^2(\overline D;\mathbb R^3))$ and $p,q\in C([0,T];C^1(\overline D))$ extend with these regularities to a neighborhood of $\overline D$, with $\operatorname{div}u=\operatorname{div}v=0$. Let $f\in C([0,T]\times\overline D;\mathbb R^3)$, and for any velocity $w$ and scalar pressure $\pi$ set

$$\mathcal R(w,\pi):=\partial_tw+(w\cdot\nabla)w+\rho_0^{-1}\nabla\pi-\nu\Delta w-f.$$

Assume $\mathcal R(u,p)=0$, and suppose $u$ and $v$ have the same boundary trace on $\partial D$ at each time. Define $r=\mathcal R(v,q)$.

the bilinear gradient norm

$$L(t)=\sup_{x\in\overline D}\ \sup_{|\xi|=|\zeta|=1}\left|\zeta\cdot D_xu(t,x)\xi\right|,$$

where $(D_xu)_{ij}=\partial_{x_j}u_i$ is the row-component Jacobian and $\xi,\zeta$ are Euclidean unit vectors. For a vector field $F$, write $\|F\|_{L^2(D)}=(\int_D|F(x)|^2\,dx)^{1/2}$. Set $A(t)=\int_0^tL(s)\,ds$. Then for every $t\in[0,T]$,

$$\|v(t)-u(t)\|_{L^2(D)}\le e^{A(t)}\left(\|v(0)-u(0)\|_{L^2(D)}+\int_0^t e^{-A(s)}\|r(s)\|_{L^2(D)}\,ds\right).$$

The same estimate holds on the flat periodic channel $D_{\rm ch}=\mathbb T_{L_x}\times(0,h)\times\mathbb T_{L_z}$, where $\mathbb T_L=\mathbb R/(L\mathbb Z)$, when the same equations and regularity assumptions hold, norms and integrals are over one periodic cell, and $u,v$ share the two wall traces; paired periodic-face terms cancel. In particular, let $w$ be smooth and divergence-free with traces $\gamma_0(t,x,z)+a(t)e_x$ at $y=0$ and $\gamma_h(t,x,z)+b(t)e_x$ at $y=h$, where $\gamma_0,\gamma_h$ are prescribed wall-velocity fields, while the exact solution $u$ has traces $\gamma_0,\gamma_h$. For $a,b\in C^1([0,T])$, set

$$\ell(t,x,y,z)=\bigl(a(t)(1-y/h)+b(t)y/h,\,0,\,0\bigr),\qquad v=w-\ell.$$

The corrected residual is

$$r_\ell=\mathcal R(v,q)=\mathcal R(w,q)-\ell_t-(\ell\cdot\nabla)w-(w\cdot\nabla)\ell+(\ell\cdot\nabla)\ell+\nu\Delta\ell.$$

Thus $\|w(t)-u(t)\|_2\le\|\ell(t)\|_2+\|v(t)-u(t)\|_2$, with the preceding estimate applied to $v$ and $r_\ell$. This result assumes the displayed lift data and makes no general boundary-lifting claim, Prandtl-profile existence claim, or viscosity-uniform no-slip inviscid-limit claim. In SI units, $[\rho_0]=\mathrm{kg\,m^{-3}}$, $[\nu]=\mathrm{m^2\,s^{-1}}$, $[p]=[q]=\mathrm{Pa}$, $[f]=[r]=\mathrm{m\,s^{-2}}$, $[a]=[b]=[\ell]=\mathrm{m\,s^{-1}}$, $[h]=\mathrm m$, $L$ has units $\mathrm{s^{-1}}$, and $A$ is dimensionless. Each volume $L^2$ norm in the error estimate has units $\mathrm{m^{3/2}\,s^{-1}}$.

## Statement references

The forced constant-density incompressible operators and full residual convention: [[def-fd-wall-defect-capillary-models]].

The bounded $C^1$ divergence theorem used for the wall energy identity: [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]].

Bounded-domain energy estimates and their hypotheses: [Temam, §3.1, printed pp. 17–18 (PDF pp. 35–36)](https://ftp.mi.fu-berlin.de/pub/klima/NavierStokes/Temam-NavierStokesEquationsAndNonlinearFunctionalAnalysis.pdf).

Periodic relative-energy computation and the separate no-slip inviscid-limit boundary-layer condition: [Wiedemann, §§5.1–5.2, printed pp. 38–43](https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf).

## Facts & Assumptions

**Given:** The interval, domain, constants, fields, equations, common trace, and residual stated above. Assume $\mathrm{AC}_\omega$ as in the Statement.

[A1] Countable Choice $\mathrm{AC}_\omega$: every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets admits a function $f$ with $f(n)\in X_n$ for all $n$ ([[def-countable-choice]]).

[F1] [[def-fd-wall-defect-capillary-models]] defines the full forced residual $\mathcal R(w,q)=w_t+(w\cdot\nabla)w+\rho_0^{-1}\nabla q-\nu\Delta w-f$ with the Cartesian operators; the theorem's residual signs match that definition.

[F2] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under $\mathrm{AC}_\omega$, for $n\ge2$, a bounded $C^1$ domain $\Omega$, and $F\in C^1(\overline\Omega;\mathbb R^n)$, $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$.

[F3] [[cor-cauchy-schwarz-inequality-for-l-two]]: if $f,g\in L^2(D)$, then $\int_D|fg|\,dx\le\|f\|_2\|g\|_2$.

[F4] [[thm-algebra-of-derivatives]]: sums and products of differentiable real functions are differentiable, with $(fg)'=f'g+fg'$.

[F5] [[thm-derivative-of-exponential]] and [[thm-chain-rule]]: $(\exp)'=\exp$, and differentiable real compositions obey $(f\circ g)'(t)=f'(g(t))g'(t)$ when the stated limit-point hypotheses hold.

[F6] [[thm-newton-leibniz-with-interior-derivative]]: if $G$ is continuous on $[a,b]$, differentiable on $(a,b)$, and a Riemann-integrable $f$ agrees with $G'$ on $(a,b)$, then $\int_a^b f=G(b)-G(a)$.

[F7] [[thm-of-square-roots]]: every nonnegative real number has a unique nonnegative square root.

[F8] [[cor-triangle-inequality-for-inner-product-norm]]: the norm from an inner product satisfies $\|x+y\|\le\|x\|+\|y\|$; this applies to the real $L^2(D)$ inner product.

## Proof

**Given:** The hypotheses and definitions in the Statement and Facts & Assumptions.

1.1 Put $e=v-u$ and $\pi=q-p$. Subtracting the exact equation for $u$ from the residual equation for $v$ gives $e_t+(v\cdot\nabla)e+(e\cdot\nabla)u+\rho_0^{-1}\nabla\pi-\nu\Delta e=r$, because $(v\cdot\nabla)v-(u\cdot\nabla)u=(v\cdot\nabla)e+(e\cdot\nabla)u$. [given, F1, algebra]

1.2 Set $Y(t)=\|e(t)\|_2^2$ and $R(t)=\|r(t)\|_2$. Pair the equation in step 1.1 with $e$ and integrate over $D$. The transport integral is $\frac12\int_D\operatorname{div}(v|e|^2)=0$ because $\operatorname{div}v=0$ and $e=0$ on $\partial D$; the pressure integral is $\rho_0^{-1}\int_D\operatorname{div}(\pi e)=0$ because $\operatorname{div}e=0$ and $e=0$ on $\partial D$; and the diffusion term is $-\nu\int_D e\cdot\Delta e=\nu\int_D|\nabla e|^2$ because $\int_D\operatorname{div}(\sum_i e_i\nabla e_i)=0$. These three identities use [F2]. The bilinear gradient norm gives $|(e\cdot\nabla)u\cdot e|\le L(t)|e|^2$, and [F3] gives $\int_D|e\cdot r|\le\sqrt{Y}R$. Pointwise in $x$, the difference quotients of $|e(t,x)|^2$ converge uniformly on $\overline D$ to $2e\cdot e_t$ as the time increment tends to zero, because $e,e_t$ are continuous on the compact space-time closure; integrating preserves this uniform limit since $D$ has finite volume. Therefore $Y'=2\int_D e\cdot e_t$ and $\frac12Y'(t)+\nu\|\nabla e(t)\|_2^2\le L(t)Y(t)+R(t)\sqrt{Y(t)}$. [given, A1, F2, F3, F4, algebra]

1.3 For $\delta>0$, let $y_\delta(t)=\sqrt{Y(t)+\delta^2}$. The radicand is positive; the identity $|y_\delta(t+h)-y_\delta(t)|=|Y(t+h)-Y(t)|/(y_\delta(t+h)+y_\delta(t))$ first gives continuity of $y_\delta$, and the same difference-of-squares identity in the difference quotient gives $y_\delta'=Y'/(2y_\delta)$. Dropping the nonnegative diffusion term in step 1.2 and using $Y/y_\delta\le y_\delta$ and $\sqrt{Y}/y_\delta\le1$ yields $y_\delta'\le L y_\delta+R$. The function $L$ is continuous because $D$ is compact and $D_xu$ is continuous; for $A(t)=\int_0^tL(s)\,ds$, the difference quotient is the average of $L$ on the interval between $t$ and $t+h$, so continuity gives $A'=L$. Thus [F4] and [F5] give $(e^{-A}y_\delta)'\le e^{-A}R$. Integrate on $[0,t]$ using [F6] and let $\delta\downarrow0$. This proves the stated bound for $e=v-u$. [given, F4, F5, F6, F7, step 1.2, algebra]

2.1 In the channel case, $\ell|_{y=0}=a e_x$, $\ell|_{y=h}=b e_x$, $\operatorname{div}\ell=0$, $\ell_t=(a'(1-y/h)+b'y/h)e_x$, $\Delta\ell=0$, and $(\ell\cdot\nabla)\ell=0$, since $\ell$ depends only on $y$ in its first component and that component is affine in $y$. Thus $v=w-\ell$ is divergence-free and has the exact wall trace. [given, F1, algebra]

2.2 Expanding the convective term in $\mathcal R(w-\ell,q)$ gives $\mathcal R(w-\ell,q)=\mathcal R(w,q)-\ell_t-(\ell\cdot\nabla)w-(w\cdot\nabla)\ell+(\ell\cdot\nabla)\ell+\nu\Delta\ell$. For this explicit lift, $(\ell\cdot\nabla)w=\ell_1\partial_xw$ and $(w\cdot\nabla)\ell=w_2(b-a)h^{-1}e_x$, while the last two lift-only terms vanish by step 2.1. [given, step 2.1, algebra]

2.3 Apply the bounded-domain estimate proved in step 1.3 to $v=w-\ell$ with residual $r_\ell$ from step 2.2. Since $w-u=(v-u)+\ell$, [F8] gives $\|w-u\|_2\le\|v-u\|_2+\|\ell\|_2$, which is the asserted channel estimate. [given, F8, step 1.3, step 2.2] ∎
