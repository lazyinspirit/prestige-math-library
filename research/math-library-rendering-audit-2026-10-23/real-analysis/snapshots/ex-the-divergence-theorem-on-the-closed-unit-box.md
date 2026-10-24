---
id: ex-the-divergence-theorem-on-the-closed-unit-box
kind: example
title: "Both sides of the divergence theorem for $F(x,y,z)=(x^2,y^2,z^2)$ on the closed unit box"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-closed-unit-box-is-an-elementary-solid-region, thm-the-divergence-theorem-for-an-elementary-solid-region, def-divergence-and-curl-of-a-c1-vector-field, thm-jordan-fubini-by-sections, thm-ftc-second-part, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-finitely-patched-regular-surface-and-integrals, def-euclidean-inner-product, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-jordan-content-and-indicator-integrability, def-riemann-integral-over-a-jordan-set, thm-continuous-functions-on-compact-jordan-sets-are-integrable, lem-standard-basis-of-f-n, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Example

Let $B=[0,1]^3$ with the six-patch presentation of [[ex-the-closed-unit-box-is-an-elementary-solid-region]] and let $F(x,y,z)=(x^2,y^2,z^2)$ on $\mathbb R^3$. Then both sides of the divergence theorem equal $3$: the volume integral of $\operatorname{div}F=2(x+y+z)$ over $B$ is $3$, and the six face fluxes are $1$ for each of the faces $x=1$, $y=1$ and $z=1$ and $0$ for each of the faces $x=0$, $y=0$ and $z=0$, so the boundary flux is $3$ as well.

## Facts & Assumptions

**Given:** The box $B=[0,1]^3$ with the six patches $\varphi_{z^+},\varphi_{z^-},\varphi_{x^+},\varphi_{x^-},\varphi_{y^+},\varphi_{y^-}$ on $S=[0,1]^2$ of [[ex-the-closed-unit-box-is-an-elementary-solid-region]], and the field $F(x,y,z)=(x^2,y^2,z^2)$.

[F1] The divergence of a $C^1$ field is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$ ([[def-divergence-and-curl-of-a-c1-vector-field]]), and a map is $C^k$ when each component is ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] For a compatible finite patch presentation the oriented flux is the sum of the patch values, each being $\int_{S}(G\circ\varphi_j)\cdot(\varphi_{j,u}\times\varphi_{j,v})$ ([[def-finitely-patched-regular-surface-and-integrals]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F3] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$, and $e_k$ has $k$th coordinate $1$ and the others $0$, so $\langle x,\pm e_k\rangle=\pm x_k$ ([[def-euclidean-inner-product]], [[lem-standard-basis-of-f-n]]).

[L1] The six faces above, with those parametrizations, make $B$ an elementary solid region, and the oriented area vectors are the constants $e_z,-e_z,e_x,-e_x,e_y,-e_y$ respectively ([[ex-the-closed-unit-box-is-an-elementary-solid-region]]).

[L2] For an elementary solid region $E$ with presentation $\Sigma$ and a $C^1$ field $G$ on an open set containing $E$, $\iiint_E\operatorname{div}G=\iint_{\partial E}\langle G,n\rangle$ ([[thm-the-divergence-theorem-for-an-elementary-solid-region]]).

[L3] For a bounded Jordan set $E\subseteq\mathbb R^{p+q}$ and integrable $g$ whose sections are integrable outside a content-zero set, $\int_Eg=\int h(x)\,dx$ with $h(x)=\int_{E_x}g_x$ ([[thm-jordan-fubini-by-sections]]).

[L4] If $G$ is differentiable at every point of $[a,b]$ with $a<b$ and $G'$ is integrable there, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[L5] For a natural $m\ge1$, the derivative of $t\mapsto t^m$ is $t\mapsto mt^{m-1}$; for $m=0$ the derivative is $0$ ([[lem-derivative-of-a-power]]). Sums and scalar multiples of differentiable functions differentiate termwise ([[thm-algebra-of-derivatives]]).

[L6] Every continuous real function on a compact Jordan measurable set is Riemann integrable over it ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

## Verification

**Proof technique:** direct.

1.1 The three components of $F$ are $x^2$, $y^2$ and $z^2$, so by [L5] the partial derivatives $\partial_xF_x=2x$, $\partial_yF_y=2y$ and $\partial_zF_z=2z$ exist and are continuous on $\mathbb R^3$, as are the six off-diagonal ones, which vanish. Hence $F$ is $C^1$ on $\mathbb R^3$ by [F1] and $\operatorname{div}F=2x+2y+2z=2(x+y+z)$. [given, F1, L5]

1.2 By [L1] the box $B$ with those six patches is an elementary solid region, and $\mathbb R^3$ is an open set containing it, so [L2] applies to $F$ on $B$. [given, L1, L2]

2.1 The function $2(x+y+z)$ is continuous on the compact Jordan set $B$, hence integrable by [L6]. Applying [L3] to split off the $z$ coordinate and then again to split off $y$, and evaluating each inner integral by [L4] and [L5]: $\int_0^12(x+y+z)\,dz=2(x+y)+1$, then $\int_0^1\bigl(2(x+y)+1\bigr)dy=2x+2$, then $\int_0^1(2x+2)\,dx=3$. So $\iiint_B\operatorname{div}F=3$ by step 1.1. [step 1.1, L3, L4, L5, L6]

2.2 By [F2] and [F3] the six face fluxes are the integrals over $S$ of $\langle F(\varphi_j),\varphi_{j,u}\times\varphi_{j,v}\rangle$, which by [L1] is $\pm$ one coordinate of $F$ along the patch. Face by face: on $\varphi_{z^+}$ it is $F_z(u,v,1)=1$; on $\varphi_{z^-}$ it is $-F_z(v,u,0)=0$; on $\varphi_{x^+}$ it is $F_x(1,u,v)=1$; on $\varphi_{x^-}$ it is $-F_x(0,v,u)=0$; on $\varphi_{y^+}$ it is $F_y(v,1,u)=1$; and on $\varphi_{y^-}$ it is $-F_y(u,0,v)=0$. Since $S=[0,1]^2$, [L3], [L4], and [L5] give $\int_S1=\int_0^1\int_0^11\,du\,dv=1$, while $\int_S0=0$; so the six patch fluxes are $1,0,1,0,1,0$ and the boundary flux is their sum, $3$. [step 1.2, F2, F3, L1, L3, L4, L5]

3.1 Steps 2.1 and 2.2 give $3$ for the volume integral and $3$ for the boundary flux, which is what [L2] asserts of them. [step 2.1, step 2.2, L2] ∎

## Remarks

- **The three vanishing faces vanish for a reason worth naming.** On the face $x=0$ the flux integrand is $-F_x$ evaluated there, and $F_x=x^2$ is zero on that face; the same happens for $y$ and $z$. It is the choice of integrand, not any symmetry of the box, that makes half the faces contribute nothing, and each of the six was evaluated rather than inferred.
