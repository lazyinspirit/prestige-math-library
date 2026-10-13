---
id: lem-periodic-pressure-reconstruction
kind: lemma
title: "Reconstruction of the periodic pressure from the velocity: $\\nabla p=-(I-P)((u\\cdot\\nabla)u)$ and $\\Delta p=-\\sum_{i,j}\\partial_i\\partial_j(u_iu_j)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [lem-cm-strong-solution-smoothness-bootstrap, def-periodic-vector-sobolev-space-and-leray-projection, lem-fourier-lattice-sobolev-embedding, lem-discrete-young-and-sobolev-product, lem-cm-integral-and-ftc-for-continuous-normed-space-curves, def-countable-choice]
dependency_roles:
  lem-cm-strong-solution-smoothness-bootstrap: mathematical-premise
  def-periodic-vector-sobolev-space-and-leray-projection: mathematical-premise
  lem-fourier-lattice-sobolev-embedding: mathematical-premise
  lem-discrete-young-and-sobolev-product: mathematical-premise
  lem-cm-integral-and-ftc-for-continuous-normed-space-curves: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. J. Majda and A. L. Bertozzi, Vorticity and Incompressible Flow (CUP 2002), Subsection 1.8 with equation (1.84) and Proposition 1.15 (the Poisson equation -Δp = tr(∇v)^2 and the recovery of the pressure from the velocity)"
      url: "http://inis.jinr.ru/sl/P_Physics/PC_Classical%20physics/PCfm_Fluid%20mechanics/Majda,%20Bertozzi.%20Vorticity%20and%20incompressible%20flow%20(CUP,%202002)(558s).pdf"
    - title: "E. Wiedemann (ed. J. Skipper), Lecture Notes: Navier-Stokes Equations (Universität Ulm, WS 2018/19), Section 1.2.2 and Section 2.2 (elimination of the pressure, -Δp = div div(u⊗u), and the Helmholtz decomposition)"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/skipper/NSEEmilFinished.pdf"
verification:
  precheck: pass
---

## Statement

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $T>0$, let $u:[0,T]\times\mathbb T^3\to\mathbb R^3$ be a field such that $u\in C([0,T],H^m)$ for every real $m\ge0$, $t\mapsto u(t)$ is differentiable into $H^m$ with $\partial_tu\in C([0,T],H^m)$ for every $m$, $u(t)$ is divergence-free for every $t$, and $u$ solves the projected equation $\partial_tu=\nu\Delta u-P((u\cdot\nabla)u)$ for some real $\nu\ge0$ (all in the sense of the spaces of [[def-periodic-vector-sobolev-space-and-leray-projection]]).

Define the real scalar field $p$ on $[0,T]\times\mathbb T^3$ by its Fourier coefficients
$$\widehat p(t,0):=0,\qquad \widehat p(t,k):=-\frac{1}{|k|_2^2}\sum_{i,j=1}^{3}k_ik_j\,\widehat{u_iu_j}(t,k)\quad(k\ne0),$$
where $\widehat{u_iu_j}(t,k)$ is the $k$-th Fourier coefficient of the product field $u_i(t,\cdot)u_j(t,\cdot)$. Then:

1. $p\in C([0,T],H^m)$ for every $m\ge0$, $t\mapsto p(t)$ is differentiable into every $H^m$, $p\in C^\infty([0,T]\times\mathbb T^3)$, and $\int_{\mathbb T^3}p(t,x)\,dx=0$ for every $t$.
2. The following identities hold on the strip:
$$\nabla p=-(I-P)\bigl((u\cdot\nabla)u\bigr),\qquad \partial_tu+(u\cdot\nabla)u=\nu\Delta u-\nabla p,\qquad \Delta p=-\sum_{i,j=1}^{3}\partial_i\partial_j(u_iu_j).$$
3. **Uniqueness.** If $q\in C^\infty([0,T]\times\mathbb T^3)$ has $\int_{\mathbb T^3}q(t,\cdot)\,dx=0$ and $\nabla q=\nabla p$ for every $t$, then $q=p$; equivalently, $p$ is the unique smooth mean-zero pressure making $u$ solve the primitive-variable system.

## Facts & Assumptions

**Given:** The field $u$ with the stated continuity, differentiability and divergence-free hypotheses, and the operators of [[def-periodic-vector-sobolev-space-and-leray-projection]].

[F1] The scalar product rule and $\sum_j\partial_ju_j=0$ give, componentwise, $((u\cdot\nabla)u)_i=\sum_j\partial_j(u_iu_j)$, so $\widehat{((u\cdot\nabla)u)_i}(k)=2\pi i\sum_jk_j\widehat{u_iu_j}(k)$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

[F2] For $k\ne0$, the coefficient of $(I-P)v$ at $k$ is $\bigl(k\cdot\widehat v(k)/|k|_2^2\bigr)k$, and the coefficient of $\nabla p$ is $2\pi ik\,\widehat p(t,k)$; $P$ kills gradient fields: $P\nabla q=0$ ([[def-periodic-vector-sobolev-space-and-leray-projection]]).

[F3] For $m>3/2$, product bounds $\|fg\|_{H^m}\le C_m\|f\|_{H^m}\|g\|_{H^m}$ and $\|\partial_jf\|_{H^m}\le\|f\|_{H^{m+1}}$ hold ([[lem-discrete-young-and-sobolev-product]], claim 2; [[def-periodic-vector-sobolev-space-and-leray-projection]]).

[F4] If $h(t,\cdot)\in H^m$ for all $m$ with $|k|^{2}|\widehat h(t,k)|$ bounded by $C_Nw_k^{-N}$ for all $N$, uniformly on compact time sets, then $h$ has continuous derivatives of all orders in $x$; a curve with $\partial_t^rh\in C([0,T],H^m)$ for all $r,m$ is $C^\infty$ on the strip ([[lem-fourier-lattice-sobolev-embedding]], claims 1 and 3).



## Proof


**Proof technique:** direct; define the pressure coefficientwise, verify the multiplier identities, and control decay and time differentiation to obtain smoothness and uniqueness.

**Given:** The field $u$ and the coefficient definition of $p$, with facts [F1]-[F4].

1.1 **The multiplier identity.** Put $v=(u\cdot\nabla)u$ and $S_k:=\sum_{i,j}k_ik_j\widehat{u_iu_j}(k)$. By [F1], $k\cdot\widehat v(k)=2\pi iS_k$ for $k\ne0$. The projection formula [F2] gives $\widehat{(I-P)v}(k)=2\pi i kS_k/|k|_2^2$, while the stated pressure definition gives $\widehat{\nabla p}(k)=2\pi i k\widehat p(k)=-2\pi i kS_k/|k|_2^2$. At $k=0$ both coefficients are zero, because gradients have zero constant coefficient and $P$ is the identity on that mode. Thus $\nabla p=-(I-P)v$ coefficientwise; the smoothness and coefficient identification justified by the smoothness argument below turn it into the claimed field identity. [F1, F2]

1.2 **Bounded multiplier and smoothness.** Since $|k_ik_j|/|k|_2^2\le1$ for $k\ne0$, the pressure coefficient map satisfies $\|p\|_{H^r}\le\sum_{i,j}\|u_iu_j\|_{H^r}$ by the triangle inequality, for every real $r$. For $r>3/2$ each product is continuous into $H^r$ by [F3]; larger orders give the assertion also for any smaller order by the monotonicity of the Sobolev weights. The hypotheses of the smoothness bootstrap [[lem-cm-strong-solution-smoothness-bootstrap]] hold for $u$, so all its time derivatives are continuous into every $H^r$. The bilinear product rule makes the same true for $u_iu_j$, and the bounded coefficient multiplier defining $p$ commutes with those derivatives. Applying [F4] at arbitrarily high orders proves joint spatial and time smoothness and identifies the coefficients of all derivatives. Finally $\widehat p(0)=0$ gives the zero mean. This proves claim 1. [F3, F4, given]

2.1 **Primitive equation.** Since $P$ is a projection, $P((u\cdot\nabla)u)=(u\cdot\nabla)u-(I-P)((u\cdot\nabla)u)=(u\cdot\nabla)u+\nabla p$ by step 1.1. Substituting into $\partial_tu=\nu\Delta u-P((u\cdot\nabla)u)$ gives $\partial_tu=\nu\Delta u-(u\cdot\nabla)u-\nabla p$, i.e. $\partial_tu+(u\cdot\nabla)u=\nu\Delta u-\nabla p$: the second identity of claim 2. [step 1.1, F2, given]

2.2 **Poisson identity.** By [F1] and the definitions, the coefficient of $\Delta p$ at $k\ne0$ is $-4\pi^2|k|_2^2\widehat p(t,k)=4\pi^2\sum_{i,j}k_ik_j\widehat{u_iu_j}(k)$, while the coefficient of $-\sum_{i,j}\partial_i\partial_j(u_iu_j)$ is $-\sum_{i,j}(2\pi ik_i)(2\pi ik_j)\widehat{u_iu_j}(k)=4\pi^2\sum_{i,j}k_ik_j\widehat{u_iu_j}(k)$; at $k=0$ both sides vanish (for $\Delta p$ because $\widehat p(0)=0$, and for the double divergence because $\widehat{-\sum\partial_i\partial_j(u_iu_j)}(0)=0$). Hence $\Delta p=-\sum_{i,j}\partial_i\partial_j(u_iu_j)$: the third identity of claim 2. [step 1.1, F1]

3.1 **Uniqueness.** If $\nabla q=\nabla p$ then for every $k\ne0$, $2\pi ik(\widehat q(k)-\widehat p(k))=0$ forces $\widehat q(t,k)=\widehat p(t,k)$, while at $k=0$ both means vanish, so $\widehat q(t,0)=\widehat p(t,0)=0$; hence $q-p$ has all Fourier coefficients zero. Injectivity of the scalar $L^2$ coefficient map in [[def-periodic-vector-sobolev-space-and-leray-projection]] gives $q-p=0$ almost everywhere. Both $q,p$ are continuous, so $q-p=0$ everywhere by the uniqueness of continuous representatives ([[lem-fourier-lattice-sobolev-embedding]], claim 2). [step 1.2, F4] ∎

## Remarks

- The pressure is a mean-zero solution of the periodic Poisson equation $\Delta p=-\sum_{i,j}\partial_i\partial_j(u_iu_j)$; it is not an independent evolution variable, and it is unique once the mean is fixed.
- The sign convention is the one of the primed equations: with the coefficient formula above, the primitive system reads $\partial_tu+(u\cdot\nabla)u=-\nabla p+\nu\Delta u$, matching the standard physical normalization used by the consuming mechanics page.
