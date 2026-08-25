---
id: cor-the-normal-curl-is-the-limiting-circulation-per-unit-area
kind: corollary
title: "The normal component of the curl is the limiting circulation per unit area of shrinking discs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-classical-stokes-theorem-for-a-c2-surface-patch, def-the-induced-boundary-chain-of-a-c2-surface-patch, def-divergence-and-curl-of-a-c1-vector-field, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-cross-product-norm-is-the-two-vector-gram-determinant, thm-jordan-fubini-by-sections, thm-ftc-second-part, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-and-cosine-addition-formulas, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas, def-type-i-type-ii-and-elementary-green-regions, def-euclidean-inner-product, def-admissible-regular-parametrized-surface-patch, thm-multidimensional-integral-properties, thm-line-integrals-under-reversal-and-concatenation, def-positive-orientation-for-elementary-region-boundaries, lem-standard-basis-of-f-n, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-piecewise-c1-path-operations-and-oriented-reparametrizations, thm-continuous-functions-on-compact-jordan-sets-are-integrable, def-riemann-integral-over-a-jordan-set, def-metric-topology, def-metric-continuity, def-function-limit, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), Lemma 4.1.25"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.7"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Statement

Let $O\subseteq\mathbb R^3$ be open, let $F:O\to\mathbb R^3$ be $C^1$, let $p\in O$ and let $n\in\mathbb R^3$ have $\lVert n\rVert_2=1$. Then there are $a,b\in\mathbb R^3$ with

$$\lVert a\rVert_2=\lVert b\rVert_2=1,\qquad \langle a,b\rangle=\langle a,n\rangle=\langle b,n\rangle=0,\qquad a\times b=n,$$

and a real $r_0>0$ such that for every $r$ with $0<r\le r_0$ the map

$$\varphi_r(\rho,\theta):=p+\rho\cos\theta\,a+\rho\sin\theta\,b\qquad\bigl((\rho,\theta)\in D_r:=[0,r]\times[0,2\pi]\bigr)$$

is a $C^2$ patch over a finite elementary Green region whose image lies in $O$, with $\varphi_{r,\rho}\times\varphi_{r,\theta}=\rho\,n$; the circulation of $F$ around its induced boundary chain is the vector line integral of $F$ along the circle $C_r(t):=p+r\cos t\,a+r\sin t\,b$ on $[0,2\pi]$; and

$$\lim_{r\to0^{+}}\frac{1}{\pi r^2}\int_{C_r}F\cdot d\mathbf r=\bigl\langle\operatorname{curl}F(p),n\bigr\rangle,$$

meaning: for every real $\varepsilon>0$ there is a real $\delta>0$ such that every $r$ with $0<r\le r_0$ and $r<\delta$ satisfies $\bigl\lvert\frac{1}{\pi r^2}\int_{C_r}F\cdot d\mathbf r-\langle\operatorname{curl}F(p),n\rangle\bigr\rvert\le\varepsilon$.

## Facts & Assumptions

**Given:** The open $O\subseteq\mathbb R^3$, the $C^1$ field $F$ on $O$, the point $p\in O$, the unit vector $n$, and the notation $D_r=[0,r]\times[0,2\pi]$ of the Statement.

[F1] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$ and $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$; the inner product is symmetric and bilinear, and $\langle x,x\rangle=0$ only for $x=0$ ([[def-euclidean-inner-product]]). The standard unit vector $e_k$ has $k$th coordinate $1$ and the others $0$ ([[lem-standard-basis-of-f-n]]).

[F2] For $u,v\in\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]); the curl of a $C^1$ field is that of [[def-divergence-and-curl-of-a-c1-vector-field]].

[F3] A compact Type I region is $\{(s,t):a\le s\le b,\ \alpha(s)\le t\le\beta(s)\}$ with $a<b$ and continuous piecewise-$C^1$ $\alpha\le\beta$, strict on $(a,b)$; it is compact and Jordan measurable, an elementary Green region admits both descriptions, and a finite elementary Green region is a nonempty finite union of them with the stated conditions ([[def-type-i-type-ii-and-elementary-green-regions]]).

[F4] The positive boundary of a Type I region traverses the lower graph from left to right, the right endpoint arc upward, the upper graph from right to left, and the left endpoint arc downward, omitting zero-length arcs; the boundary integral over the resulting chain is the finite sum over its arcs ([[def-positive-orientation-for-elementary-region-boundaries]]).

[F5] A regular parametrized surface patch has a compact Jordan parameter region that is the closure of its nonempty connected interior, a parametrization $C^1$ on an open neighbourhood of it, nonvanishing parameter cross product on the interior, and no interior parameter point sharing its image with a distinct point of the region ([[def-admissible-regular-parametrized-surface-patch]]); a $C^2$ patch over a finite elementary Green region adds the supplied elementary decomposition and the class $C^2$ ([[def-the-induced-boundary-chain-of-a-c2-surface-patch]]).

[F6] A vector line integral along a piecewise-$C^1$ path is $\sum_i\int_{t_i}^{t_{i+1}}\langle F(\gamma(t)),v_i(t)\rangle\,dt$, and is $0$ on a degenerate parameter interval ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]); reversal of a path is $\gamma^-(t)=\gamma(a+b-t)$ and constant paths are allowed ([[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]).

[F7] A set is open in a metric space when each of its points has a ball around it inside the set ([[def-metric-topology]]); a map is continuous at a point when every $\varepsilon>0$ admits a $\delta>0$ carrying the $\delta$-ball into the $\varepsilon$-ball ([[def-metric-continuity]]); and $\lim_{x\to c}f(x)=L$ has the usual meaning ([[def-function-limit]]). Integration over a bounded Jordan set is that of [[def-riemann-integral-over-a-jordan-set]], and $C^k$ is the componentwise class of [[def-ck-euclidean-maps-and-diffeomorphisms]].

[L1] The cross product is bilinear and alternating, $\langle u\times v,w\rangle=\det[u\ v\ w]$, and $u\times v$ is orthogonal to both $u$ and $v$ ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[L2] For $u,v\in\mathbb R^3$, $\lVert u\times v\rVert_2^2=\lVert u\rVert_2^2\lVert v\rVert_2^2-\langle u,v\rangle^2$, and this is positive exactly when $u$ and $v$ are linearly independent ([[thm-cross-product-norm-is-the-two-vector-gram-determinant]]).

[L3] $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$, $\sin0=0$ and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]); $\sin^2t+\cos^2t=1$ and $\sin(-t)=-\sin t$, $\cos(-t)=\cos t$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L4] $\sin(s+t)=\sin s\cos t+\cos s\sin t$ and $\cos(s+t)=\cos s\cos t-\sin s\sin t$ ([[thm-sine-and-cosine-addition-formulas]]).

[L5] $\sin x=0$ if and only if $x=m\pi$ for some integer $m$, and both sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]); $\sin\pi=0$ and $\cos\pi=-1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L6] For a bounded Jordan set $E\subseteq\mathbb R^{p+q}$ and integrable $g$ whose sections are integrable outside a content-zero set, $\int_Eg=\int h(x)\,dx$ with $h(x)=\int_{E_x}g_x$ ([[thm-jordan-fubini-by-sections]]).

[L7] If $G$ is differentiable at every point of $[a,b]$ with $a<b$ and $G'$ is integrable there, then $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]); sums, scalar multiples and products of differentiable functions differentiate by the usual rules ([[thm-algebra-of-derivatives]]).

[L8] For integrable $f,g$ on a nondegenerate rectangle and scalars $\alpha,\beta$: $\alpha f+\beta g$ is integrable with integral $\alpha\int f+\beta\int g$; if $f\le g$ then $\int f\le\int g$; and $\lvert f\rvert$ is integrable with $\lvert\int f\rvert\le\int\lvert f\rvert$ ([[thm-multidimensional-integral-properties]]).

[L9] Every continuous real function on a compact Jordan measurable set is Riemann integrable over it ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[L10] Vector line integrals negate under reversal ([[thm-line-integrals-under-reversal-and-concatenation]]).

[L11] For a $C^2$ patch over a finite elementary Green region and a $C^1$ field on an open set containing the patch image, the circulation around the induced boundary chain equals the flux of the curl in the induced orientation ([[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]]).

## Proof

**Proof technique:** constructive.

1.1 Since $\sum_{k}n_k^2=\lVert n\rVert_2^2=1$ by [F1], not all three coordinates can have $n_k^2>1/3$; fix $k$ with $n_k^2\le1/3$. Then $n$ and $e_k$ are linearly independent: a relation $e_k=\lambda n$ would force $\lvert\lambda\rvert=1$ by comparing norms, hence $n=\pm e_k$ and $n_k^2=1$, contradicting $n_k^2\le1/3$; and $n\ne0$. [given, F1, construct]

1.2 For all $u,v,w\in\mathbb R^3$, expanding by [F1] and [F2] gives $$\langle u\times v,w\rangle=(u_yv_z-u_zv_y)w_x+(u_zv_x-u_xv_z)w_y+(u_xv_y-u_yv_x)w_z,$$ $$\langle w\times u,v\rangle=(w_yu_z-w_zu_y)v_x+(w_zu_x-w_xu_z)v_y+(w_xu_y-w_yu_x)v_z,$$ and the six signed monomials of the first expression are those of the second, matched as $u_yv_zw_x$ with $w_xu_yv_z$, $-u_zv_yw_x$ with $-w_xu_zv_y$, $u_zv_xw_y$ with $w_yu_zv_x$, $-u_xv_zw_y$ with $-w_yu_xv_z$, $u_xv_yw_z$ with $w_zu_xv_y$ and $-u_yv_xw_z$ with $-w_zu_yv_x$. Hence $\langle u\times v,w\rangle=\langle w\times u,v\rangle$. [F1, F2, algebra]

1.3 The set $O$ is open and $p\in O$, so by [F7] there is a real $r_0>0$ with every $q$ satisfying $\lVert q-p\rVert_2\le r_0$ lying in $O$; take such an $r_0$. [given, F7, choose]

1.4 Fix $r$ with $0<r\le r_0$. The function $(\rho,\theta)\mapsto\rho$ is continuous on the compact Jordan rectangle $D_r$, hence integrable by [L9] and [F3]. Its sections in $\theta$ are the continuous functions $\rho\mapsto\rho$ on $[0,r]$, so [L6] gives $\int_{D_r}\rho=\int_0^{2\pi}\bigl(\int_0^r\rho\,d\rho\bigr)d\theta$; by [L7] with $G(\rho)=\rho^2/2$ the inner integral is $r^2/2$, and again by [L7] with $G(\theta)=r^2\theta/2$ the outer integral is $\pi r^2$. So $\int_{D_r}\rho=\pi r^2$. [given, F3, L6, L7, L9]

2.1 By step 1.1 and [L2] the number $\lVert n\times e_k\rVert_2^2$ is positive, so $n\times e_k\ne0$; put $$a:=\frac{n\times e_k}{\lVert n\times e_k\rVert_2}.$$ Then $\lVert a\rVert_2=1$ by [F1], and $\langle a,n\rangle=0$ because $n\times e_k$ is orthogonal to $n$ by [L1]. [step 1.1, F1, L1, L2, construct]

3.1 Put $b:=n\times a$. By [L1] it is orthogonal to $n$ and to $a$, so $\langle b,n\rangle=\langle b,a\rangle=0$; and by [L2] with step 2.1, $\lVert b\rVert_2^2=\lVert n\rVert_2^2\lVert a\rVert_2^2-\langle n,a\rangle^2=1$, so $\lVert b\rVert_2=1$. [step 2.1, F1, L1, L2, construct]

4.1 By step 1.2 with $u=a$, $v=b$ and $w=n$, and then step 3.1, $\langle a\times b,n\rangle=\langle n\times a,b\rangle=\langle b,b\rangle=1$. By [L2] and steps 2.1 and 3.1, $\lVert a\times b\rVert_2^2=\lVert a\rVert_2^2\lVert b\rVert_2^2-\langle a,b\rangle^2=1$. Hence $\lVert a\times b-n\rVert_2^2=\lVert a\times b\rVert_2^2-2\langle a\times b,n\rangle+\lVert n\rVert_2^2=1-2+1=0$ by [F1], and positive definiteness in [F1] gives $a\times b=n$. [step 1.2, step 2.1, step 3.1, F1, L2]

4.2 By [L3] and [L7] the map $\varphi_r$ is differentiable in each parameter with $\varphi_{r,\rho}=\cos\theta\,a+\sin\theta\,b$ and $\varphi_{r,\theta}=\rho(-\sin\theta\,a+\cos\theta\,b)$, and all its iterated parameter derivatives of order at most $2$ exist and are continuous, so $\varphi_r$ is $C^2$ on the whole plane by [F7]. Expanding by bilinearity and the alternating law in [L1], $$\varphi_{r,\rho}\times\varphi_{r,\theta}=\rho\bigl(\cos^2\theta\,(a\times b)-\sin^2\theta\,(b\times a)\bigr)=\rho(\cos^2\theta+\sin^2\theta)(a\times b),$$ which is $\rho\,(a\times b)$ by [L3]. [step 2.1, step 3.1, F7, L1, L3, L7]

5.1 Combining steps 4.1 and 4.2, $\varphi_{r,\rho}\times\varphi_{r,\theta}=\rho\,n$, which is nonzero exactly when $\rho>0$. [step 4.1, step 4.2]

6.1 The rectangle $D_r$ is a Type I and a Type II region with $0<r$ and constant graphs $0<2\pi$, hence an elementary Green region and a nonempty finite elementary Green region with the one-piece decomposition, compact and Jordan measurable, and it is the closure of its nonempty convex, hence connected, interior $(0,r)\times(0,2\pi)$ ([F3], [F5]). The cross product of step 5.1 is nonzero on that interior. For injectivity, let $(\rho,\theta)$ be interior and $(\rho',\theta')\in D_r$ have the same image; pairing $\rho\cos\theta\,a+\rho\sin\theta\,b=\rho'\cos\theta'\,a+\rho'\sin\theta'\,b$ with $a$ and with $b$ and using steps 2.1 and 3.1 gives $\rho\cos\theta=\rho'\cos\theta'$ and $\rho\sin\theta=\rho'\sin\theta'$; squaring and adding with [L3] gives $\rho^2=\rho'^2$, so $\rho'=\rho>0$ and $\cos\theta=\cos\theta'$, $\sin\theta=\sin\theta'$. Then [L4] and [L3] give $\cos(\theta-\theta')=\cos\theta\cos\theta'+\sin\theta\sin\theta'=\cos^2\theta'+\sin^2\theta'=1$, so $\sin^2(\theta-\theta')=0$ and $\theta-\theta'=m\pi$ for an integer $m$ by [L3] and [L5]; since $\theta\in(0,2\pi)$ and $\theta'\in[0,2\pi]$ we have $\lvert\theta-\theta'\rvert<2\pi$, so $m\in\{-1,0,1\}$, and $\cos(\pm\pi)=-1\ne1$ by [L5], leaving $\theta=\theta'$. Finally $\lVert\varphi_r(\rho,\theta)-p\rVert_2=\rho\le r\le r_0$ by [F1], steps 2.1 and 3.1 and [L3], so the image lies in $O$ by step 1.3. Hence $(D_r,\varphi_r)$ is a $C^2$ patch over a finite elementary Green region with image in $O$. [step 1.3, step 2.1, step 3.1, step 5.1, F1, F3, F5, L3, L4, L5]

7.1 By [F4] the positive boundary chain of $D_r$ in its Type I description, with $\rho$ horizontal, is the four arcs $\sigma_1(t)=(t,0)$ on $[0,r]$, $\sigma_2(t)=(r,t)$ on $[0,2\pi]$, $\sigma_3(t)=(r-t,2\pi)$ on $[0,r]$ and $\sigma_4(t)=(0,2\pi-t)$ on $[0,2\pi]$. Composing with $\varphi_r$ and using $\cos0=\cos2\pi=1$, $\sin0=\sin2\pi=0$ from [L3] and [L5]: $\varphi_r\circ\sigma_1(t)=p+t\,a$, $\varphi_r\circ\sigma_2(t)=C_r(t)$, $\varphi_r\circ\sigma_3(t)=p+(r-t)a$ and $\varphi_r\circ\sigma_4(t)=p$. The third is the reversal of the first in the sense of [F6], so [L10] makes their integrals cancel; the fourth is constant, so its derivative extension is $0$ and its integral is $0$ by [F6]. Hence the circulation of $F$ around the induced boundary chain of $(D_r,\varphi_r)$ is $\int_{C_r}F\cdot d\mathbf r$. [step 6.1, F4, F6, L3, L5, L10]

8.1 By step 6.1 the pair $(D_r,\varphi_r)$ satisfies the hypotheses of [L11], and $F$ is $C^1$ on the open $O$ containing $\varphi_r[D_r]$. So [L11] and step 7.1 give $$\int_{C_r}F\cdot d\mathbf r=\int_{D_r}\bigl\langle(\operatorname{curl}F)\circ\varphi_r,\ \varphi_{r,\rho}\times\varphi_{r,\theta}\bigr\rangle=\int_{D_r}\rho\,g_r,\qquad g_r(\rho,\theta):=\bigl\langle(\operatorname{curl}F)(\varphi_r(\rho,\theta)),n\bigr\rangle,$$ using step 5.1 and the bilinearity of the inner product in [F1]; the integrand is continuous on the compact Jordan $D_r$, hence integrable by [L9]. [step 5.1, step 6.1, step 7.1, F1, L9, L11]

9.1 Let $\varepsilon>0$ be real. The field $\operatorname{curl}F$ is continuous on $O$ and $\langle\cdot,n\rangle$ is continuous, so [F7] gives $\delta_0>0$ such that $\lvert\langle\operatorname{curl}F(q),n\rangle-\langle\operatorname{curl}F(p),n\rangle\rvert\le\varepsilon$ for every $q\in O$ with $\lVert q-p\rVert_2<\delta_0$; put $\delta:=\delta_0$. Let $0<r\le r_0$ with $r<\delta$. Every point of $\varphi_r[D_r]$ is within $r<\delta_0$ of $p$ by step 6.1, so $\lvert g_r-\langle\operatorname{curl}F(p),n\rangle\rvert\le\varepsilon$ on $D_r$; hence by [L8] and step 1.4 $$\Bigl\lvert\int_{D_r}\rho\,g_r-\langle\operatorname{curl}F(p),n\rangle\,\pi r^2\Bigr\rvert=\Bigl\lvert\int_{D_r}\rho\bigl(g_r-\langle\operatorname{curl}F(p),n\rangle\bigr)\Bigr\rvert\le\varepsilon\int_{D_r}\rho=\varepsilon\,\pi r^2.$$ Dividing by $\pi r^2>0$ and substituting step 8.1 gives $\bigl\lvert\frac{1}{\pi r^2}\int_{C_r}F\cdot d\mathbf r-\langle\operatorname{curl}F(p),n\rangle\bigr\rvert\le\varepsilon$, which by [F7] is the asserted limit; with steps 4.1, 6.1 and 7.1 every clause of the Statement is established. [step 1.4, step 4.1, step 6.1, step 7.1, step 8.1, F7, L8, discharge-construct: the polar patch] ∎

## Remarks

- **The orthonormal pair is built, not chosen by an extension theorem.** Steps 1.1, 2.1 and 3.1 write $a$ and $b$ down from $n$ and one standard basis vector, and step 4.1 fixes the sign of $a\times b$ by a computation rather than by replacing $b$ with $-b$ after the fact. No choice principle and no basis-extension theorem is used, which matters because the general extension of an independent set to a basis in this library assumes the Axiom of Choice and would be a disproportionate hypothesis for a statement about $\mathbb R^3$.

- **The two radial edges are what make the chain a circle.** The induced boundary chain of a polar patch has four arcs, and only one of them is the circle: the two radial ones are reverses of each other and the fourth is the constant path at the centre. That is why a disc-shaped patch may be used at all, since a closed disc is not an elementary Green region and cannot be a parameter region here.

- **No area comparison between the disc and its diameter is needed.** The factor $\pi r^2$ appears on both sides of the estimate in step 9.1 and cancels; what drives the limit is the continuity of $\operatorname{curl}F$ at $p$ alone.
