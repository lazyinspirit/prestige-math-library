---
id: prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal
kind: proposition
title: "At interior base points, the graph faces of an adapted presentation induce the outward unit normal"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-adapted-outward-boundary-presentation-of-a-simple-solid-region, def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid, thm-euclidean-inverse-function-theorem, def-admissible-regular-parametrized-surface-patch, def-tangent-plane-of-a-regular-surface-patch, def-oriented-unit-normal-and-flux-of-a-surface-patch, thm-total-derivative-computes-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-metric-interior-closure-boundary, lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-simple-solid-region-in-a-coordinate-direction, def-jacobian-determinant-of-a-c-one-map, def-derivative, lem-sign-preservation-near-a-limit]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let $(k,D,\gamma_1,\gamma_2)$ be a simple description of a solid $E$ in the direction $k$ and let $\Sigma$ be a boundary presentation adapted to it. Let $j\in\Sigma^+\cup\Sigma^-$, let $c$ be an interior point of the parameter region $D_j$ whose projection $w_0:=\pi_k(\varphi_j(c))$ lies in the interior of the base $D$, and put $p:=\varphi_j(c)$.

Then $p\in\partial E$, the tangent plane $T:=\operatorname{span}\{\varphi_{j,u}(c),\varphi_{j,v}(c)\}$ is defined, and the induced unit normal of an upper or lower face is the outward unit normal: the vector

$$N:=\frac{\varphi_{j,u}(c)\times\varphi_{j,v}(c)}{\lVert\varphi_{j,u}(c)\times\varphi_{j,v}(c)\rVert_2}$$

is outward at $p$ in the sense of [[def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid]], while $-N$ is not; so $N$ is the outward unit normal to $T$ at $p$.

The displayed interior condition makes explicit the part of the base on which the strict graph separation is used below.

## Facts & Assumptions

**Given:** The simple description $(k,D,\gamma_1,\gamma_2)$ of $E$, the adapted presentation $\Sigma$, the index $j\in\Sigma^+\cup\Sigma^-$, the interior parameter point $c\in D_j^\circ$ with $w_0=\pi_k(\varphi_j(c))\in D^\circ$, and $p=\varphi_j(c)$. Write $\psi_j=\pi_k\circ\varphi_j$, write $\gamma$ for $\gamma_2$ when $j\in\Sigma^+$ and for $\gamma_1$ when $j\in\Sigma^-$, and write $\sigma_k^{-1}(w,t)$ for the point with $\pi_k$-projection $w$ and $k$th coordinate $t$.

[F1] $E=\{q\in\mathbb R^3:\pi_k(q)\in D,\ \gamma_1(\pi_k(q))\le q_k\le\gamma_2(\pi_k(q))\}$, with $D$ compact Jordan of nonempty interior, $\gamma_1,\gamma_2$ continuous on $D$, $\gamma_1\le\gamma_2$ on $D$ and $\gamma_1<\gamma_2$ on the interior of $D$ ([[def-simple-solid-region-in-a-coordinate-direction]]).

[F2] For $j\in\Sigma^+$ the image of $\varphi_j$ lies in the graph of $\gamma_2$ and the $k$th coordinate of $\varphi_{j,u}\times\varphi_{j,v}$ is positive on the interior of $D_j$; for $j\in\Sigma^-$ the image lies in the graph of $\gamma_1$ and that coordinate is negative on the interior of $D_j$ ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]]).

[F3] A regular patch has a compact Jordan parameter region that is the closure of its nonempty interior, its parametrization is $C^1$ on an open neighbourhood of that region, and $\varphi_u\times\varphi_v\ne0$ on the interior ([[def-admissible-regular-parametrized-surface-patch]]).

[F4] At an interior parameter point the tangent plane of a regular patch is $\operatorname{span}\{\varphi_u,\varphi_v\}$, a two-dimensional subspace of $\mathbb R^3$ ([[def-tangent-plane-of-a-regular-surface-patch]]).

[F5] The parametrization induces on the interior the unit normal $N_\varphi=(\varphi_u\times\varphi_v)/\lVert\varphi_u\times\varphi_v\rVert_2$, which is orthogonal to the tangent plane ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

[F6] A unit vector $\nu$ is **outward** at $p\in\partial E$ when there is a real $\varepsilon>0$ with $p+t\nu\notin E$ and $p-t\nu\in E$ for every $t$ with $0<t<\varepsilon$; when a two-dimensional subspace $T$ is given and one of its two unit normals is outward at $p$, the other is not, and the outward one is called the outward unit normal to $T$ at $p$ ([[def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid]]).

[F7] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$ ([[def-euclidean-inner-product]]); the gradient of a scalar function is $\nabla f=(\partial_0f,\ldots,\partial_{m-1}f)$ ([[def-jacobian-matrix-and-gradient]]); a map is $C^k$ when each component is ([[def-ck-euclidean-maps-and-diffeomorphisms]]); and the Jacobian determinant of a square-dimensional $C^1$ map is $\det Dg$ ([[def-jacobian-determinant-of-a-c-one-map]]).

[F8] The boundary of $A$ is $\partial A=\overline A\setminus\operatorname{int}(A)$ ([[def-metric-interior-closure-boundary]]), and $f'(c)$ is the limit of the difference quotient at $c$ ([[def-derivative]]).

[L1] If $f:U\to\mathbb R^n$ is $C^1$ on an open $U$ and $Df(a)$ is invertible, then there are open $V',W'$ with $a\in V'\subseteq U$ and $f(a)\in W'$ such that $f|_{V'}:V'\to W'$ is bijective with $C^1$ inverse ([[thm-euclidean-inverse-function-theorem]]).

[L2] For a $C^1$ map $\varphi$ of two variables into $\mathbb R^3$, $(\varphi_u\times\varphi_v)_k=\det D(\pi_k\circ\varphi)$ ([[lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians]]).

[L3] If $f$ is totally differentiable at $a$ then $D_vf(a)$ exists for every $v$ and equals $Df(a)v$, and the matrix of $Df(a)$ is $Jf(a)$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L4] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L5] If every partial derivative of $f$ exists on a neighbourhood of $a$ and is continuous at $a$, then $f$ is totally differentiable at $a$ with $Df(a)$ the linear map of matrix $Jf(a)$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L6] If $\lim_{x\to c}f(x)=L>0$ then there is $\delta>0$ with $f(x)>L/2>0$ for every $x$ in the domain with $0<\lvert x-c\rvert<\delta$; if $L<0$ then $f(x)<L/2<0$ there ([[lem-sign-preservation-near-a-limit]]).

## Proof

**Proof technique:** direct.

1.1 By [F3] the map $\varphi_j$ is $C^1$ on an open neighbourhood of $D_j$, so $\psi_j=\pi_k\circ\varphi_j$ is $C^1$ there by [F7], and by [F2] and [L2] its Jacobian determinant at $c$ is nonzero, hence $D\psi_j(c)$ is invertible. So [L1] supplies open sets $P\ni c$ and $Q\ni w_0$ with $\psi_j|_P:P\to Q$ bijective and with $C^1$ inverse $\lambda:Q\to P$; shrinking $P$ and $Q$, which stays possible because $D_j^\circ$ and $D^\circ$ are open and contain $c$ and $w_0$, we may take $P\subseteq D_j^\circ$ and $Q\subseteq D^\circ$. [given, F2, F3, F7, L1, L2]

2.1 Let $w\in Q$. By [F2] the point $\varphi_j(\lambda(w))$ lies in the graph of $\gamma$ over $D$, and its $\pi_k$-projection is $\psi_j(\lambda(w))=w$, so $\varphi_j(\lambda(w))=\sigma_k^{-1}\bigl(w,\gamma(w)\bigr)$. Reading the $k$th coordinate, $\gamma(w)=\bigl(\varphi_j(\lambda(w))\bigr)_k$ on $Q$, a composite of $C^1$ maps and therefore $C^1$ on $Q$ by [F7] and [L4]; by [L5] it is totally differentiable at $w_0$, and by [L3] and [F7] its total derivative there acts by $v\mapsto\langle g,v\rangle$ with $g:=\nabla\gamma(w_0)$. [step 1.1, F2, F7, L3, L4, L5]

3.1 The map $\Phi(w):=\sigma_k^{-1}(w,\gamma(w))$ on $Q$ equals $\varphi_j\circ\lambda$ by step 2.1, and its two parameter derivatives at $w_0$ are $\tau_i=\sigma_k^{-1}\bigl(e_i,\partial_i\gamma(w_0)\bigr)$ for $i=0,1$. By [L4] the derivative $D\Phi(w_0)=D\varphi_j(c)\circ D\lambda(w_0)$ with $D\lambda(w_0)$ invertible, so $\operatorname{span}\{\tau_0,\tau_1\}$ and $\operatorname{span}\{\varphi_{j,u}(c),\varphi_{j,v}(c)\}$ are the same subspace, namely the tangent plane $T$ of [F4]. [step 1.1, step 2.1, F4, L3, L4]

4.1 By [F3] and [F5] the vector $N$ is defined at $c$, has norm $1$ and is orthogonal to $T$. Write $N=\sigma_k^{-1}(a,b)$ with $a\in\mathbb R^2$ and $b=N_k$; since $\sigma_k^{-1}$ merely permutes coordinates, [F7] gives $\langle\sigma_k^{-1}(a,b),\sigma_k^{-1}(a',b')\rangle=\langle a,a'\rangle+bb'$. Orthogonality to $\tau_i$ of step 3.1 therefore reads $a_i+b\,\partial_i\gamma(w_0)=0$ for $i=0,1$, that is $a=-b\,g$. If $b$ were $0$ then $a=0$ and $N=0$, contradicting $\lVert N\rVert_2=1$; so $b\ne0$, and by [F2] and [L2] the number $b$ has the sign of $\det D\psi_j(c)$, hence $b>0$ for $j\in\Sigma^+$ and $b<0$ for $j\in\Sigma^-$. [step 3.1, F2, F3, F5, F7, L2]

5.1 For real $t$ near $0$ the projection $\pi_k(p+tN)=w_0+ta$ lies in the open $Q$, so $$u(t):=\bigl(p+tN\bigr)_k-\gamma\bigl(\pi_k(p+tN)\bigr)=\gamma(w_0)+tb-\gamma(w_0+ta)$$ is defined there, using $p_k=\gamma(w_0)$ from step 2.1. Then $u(0)=0$, and by step 2.1 and [L3] the function $u$ is differentiable at $0$ with $u'(0)=b-\langle g,a\rangle=b+b\lVert g\rVert_2^2=b\bigl(1+\lVert g\rVert_2^2\bigr)$, using $a=-bg$ from step 4.1. Since $u(0)=0$, the difference quotient at $0$ is $u(t)/t$, so [F8] and [L6] give $\varepsilon_0>0$ such that $u(t)/t$ has the sign of $b$ for every $t$ with $0<\lvert t\rvert<\varepsilon_0$; hence $u(t)$ has the sign of $tb$ there. [step 2.1, step 4.1, F8, L3, L6]

6.1 Suppose $j\in\Sigma^+$, so $\gamma=\gamma_2$ and $b>0$ by step 4.1. Shrink $\varepsilon_0$ so that $\pi_k(p\pm tN)\in Q\subseteq D$ for $0<t<\varepsilon_0$ and so that, $\gamma_1$ and $\gamma_2$ being continuous with $\gamma_1(w_0)<\gamma_2(w_0)$ by [F1], one also has $\gamma_1(\pi_k(p-tN))<\gamma_2(w_0)-tb$ there. For $0<t<\varepsilon_0$, step 5.1 gives $u(t)>0$, that is $(p+tN)_k>\gamma_2(\pi_k(p+tN))$, so $p+tN\notin E$ by [F1]; and $u(-t)<0$, that is $(p-tN)_k<\gamma_2(\pi_k(p-tN))$, while $(p-tN)_k=\gamma_2(w_0)-tb>\gamma_1(\pi_k(p-tN))$ by the choice of $\varepsilon_0$, so $p-tN\in E$ by [F1]. Hence $N$ is outward at $p$ by [F6]. [step 5.1, F1, F6]

6.2 Suppose instead $j\in\Sigma^-$, so $\gamma=\gamma_1$ and $b<0$ by step 4.1. Shrink $\varepsilon_0$ so that $\pi_k(p\pm tN)\in Q\subseteq D$ for $0<t<\varepsilon_0$ and so that $\gamma_2(\pi_k(p-tN))>\gamma_1(w_0)-tb$ there, which is possible since $\gamma_1(w_0)<\gamma_2(w_0)$ by [F1] and $-tb>0$ tends to $0$. For $0<t<\varepsilon_0$, step 5.1 gives $u(t)<0$, that is $(p+tN)_k<\gamma_1(\pi_k(p+tN))$, so $p+tN\notin E$ by [F1]; and $u(-t)>0$, that is $(p-tN)_k>\gamma_1(\pi_k(p-tN))$, while $(p-tN)_k=\gamma_1(w_0)-tb<\gamma_2(\pi_k(p-tN))$ by the choice of $\varepsilon_0$, so $p-tN\in E$ by [F1]. Hence $N$ is outward at $p$ by [F6]. [step 5.1, F1, F6]

7.1 In both cases $p\in E$ while $p+tN\notin E$ for arbitrarily small $t>0$, so $p$ is not interior to $E$ and therefore $p\in\partial E$ by [F8]. Replacing $N$ by $-N$ exchanges the two conditions of [F6], which then fail, so $-N$ is not outward at $p$; since $\pm N$ are the only unit vectors orthogonal to the two-dimensional $T$, the vector $N$ is the outward unit normal to $T$ at $p$. [step 6.1, step 6.2, F6, F8] ∎

## Remarks

- **Why the projection is interior here.** The nonzero projected Jacobian at the interior parameter point makes $\psi_j$ a local diffeomorphism. Its local image is open and, because the patch image lies in the graph over $D$, is contained in $D$; hence $w_0$ is automatically an interior point of $D$. The Statement records the condition explicitly because steps 6.1 and 6.2 use the strict inequality $\gamma_1(w_0)<\gamma_2(w_0)$ attached to it.

- **The excluded points are the seams and the edges.** Nothing is claimed at a parameter-boundary point of a patch, nor at a point whose projection lies on $\partial D$. Those points form a set of content zero in every parameter region, which is why no integral identity on this page is affected by them; but a pointwise claim about the normal there would be false in general and is not made.
