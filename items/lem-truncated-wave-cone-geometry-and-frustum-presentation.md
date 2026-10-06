---
id: lem-truncated-wave-cone-geometry-and-frustum-presentation
kind: lemma
title: "Truncated wave cones: convexity, piecewise C1 presentation and outward normals"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-countable-choice, def-bounded-piecewise-c-one-euclidean-domain, def-bounded-c-one-domain-boundary-charts-and-outward-normal, lem-surface-integral-is-independent-of-c-one-boundary-charts, def-convex-subset-of-euclidean-space, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, thm-cauchy-schwarz-and-the-euclidean-norm, thm-real-power-continuity-and-derivatives, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition, lem-sphere-and-ball-measures-scale, lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§1.12, printed pp. 17-18: the piecewise extension of the divergence theorem the presentation is built for"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.3, printed p. 292: the backward cone $K^-(y,\\tau)=\\{(x,t):t\\le\\tau,\\ |y-x|<c(\\tau-t)\\}$ and its characteristic mantle"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #13-14: Geometric Energy Estimates (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ad3a71c522df2396b6248cf9b35aedea_MIT18_152F11_lec_13_14.pdf"
      locator: "§2, printed/PDF pp. 3-4, Theorem 2.1: the truncated backwards light cone with flat base, flat top and mantle used in the cone energy estimate"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $n\ge1$,
$c>0$, $x_0\in\mathbb R^n$, $t_0>0$ and $0<t_1<t_2<t_0$. In space-time
$\mathbb R^{n+1}$ with coordinates $(x,t)$ (Euclidean, so $(0,-1)$ and $(0,1)$
below have zero space part) put

$$K(t_1,t_2):=\{(x,t):t_1<t<t_2,\ |x-x_0|<c(t_0-t)\}.$$

Then:

(i) $K(t_1,t_2)$ is a nonempty open bounded convex set
([[def-convex-subset-of-euclidean-space]]);

(ii) it has the finite piecewise $C^1$ presentation of
[[def-bounded-piecewise-c-one-euclidean-domain]] whose non-edge faces are the
bottom disk $\overline B_{c(t_0-t_1)}(x_0)\times\{t_1\}$, the top disk
$\overline B_{c(t_0-t_2)}(x_0)\times\{t_2\}$ and the lateral frustum
$$L:=\{(x,t):|x-x_0|=c(t_0-t),\ t_1\le t\le t_2\},$$
the edge set being the two boundary circles
$S_{c(t_0-t_1)}(x_0)\times\{t_1\}$ and $S_{c(t_0-t_2)}(x_0)\times\{t_2\}$;

(iii) the corresponding outward unit normals are $(0,-1)$ on the bottom disk,
$(0,1)$ on the top disk, and
$$\nu_{\mathrm{lat}}(x,t)=\left(\frac{x-x_0}{|x-x_0|},\,c\right)\Big/\sqrt{1+c^2}$$
at points of $L$;

(iv) the closed backward cone
$K^-(x_0,t_0)=\{(x,t):0\le t\le t_0,\ |x-x_0|\le c(t_0-t)\}$ is compact and
convex, and $K(t_1,t_2)$ is its interior intersected with the slab
$\{t_1<t<t_2\}$.

All statements are also true at $c=1$, and
$n=1$ is the characteristic trapezium.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; $n\ge1$, $c>0$, $x_0\in\mathbb R^n$, $t_0>0$ and $0<t_1<t_2<t_0$; the Euclidean structure of [[def-euclidean-inner-product]] on $\mathbb R^{n+1}$; the function $\varphi:\mathbb R^{n+1}\to\mathbb R$, $\varphi(x,t):=|x-x_0|+ct$.

[F1] A finite piecewise $C^1$ presentation of a nonempty bounded open $\Omega$ consists of compact faces covering its boundary, each a compact Borel subset of a regular $C^1$ hypersurface patch, together with a compact edge set $E$, and it requires: $S_j\cap E$ surface-null in each face, the edge set to contain the relative face boundaries and all overlaps, the boundary to be locally a single $C^1$ graph with $\Omega$ on one side off $E$, and each face to carry its actual outward unit normal off $E$. ([[def-bounded-piecewise-c-one-euclidean-domain]])

[F2] On a compact embedded $C^1$ hypersurface the chart integral is a finite Borel measure independent of the charts; in graph coordinates $X(y)=(y,h(y))$ its density is $\sqrt{1+|Dh(y)|^2}$, and on a one-sided domain boundary the outward unit normal agrees on chart overlaps. ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F3] $\lVert\cdot\rVert_2$ is a norm on $\mathbb R^n$ for every $n$, so it is subadditive and absolutely homogeneous. ([[thm-cauchy-schwarz-and-the-euclidean-norm]])

[F4] For every real $\alpha$ the function $s\mapsto s^\alpha$ is differentiable on $(0,\infty)$ with derivative $\alpha s^{\alpha-1}$. ([[thm-real-power-continuity-and-derivatives]])

[F5] Chain rule: $D(G\circ H)(a)=DG(H(a))\circ DH(a)$ for composable totally differentiable maps. ([[thm-chain-rule-for-total-derivatives]])

[F6] Finite sums and products of $C^k$ Euclidean maps are $C^k$, and composites of composable $C^k$ maps are $C^k$. ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]])

[F7] For $n\ge1$ and $r>0$, $|B_r|=\omega_{n-1}r^n/n$, with $0<\omega_{n-1}<\infty$ ([[lem-sphere-and-ball-measures-scale]]). Consequently every positive-radius sphere has Lebesgue measure zero: for $0<\varepsilon<r$, it lies in $B_{r+\varepsilon}\setminus B_{r-\varepsilon}$, whose measure is $\omega_{n-1}((r+\varepsilon)^n-(r-\varepsilon)^n)/n$; monotonicity and finite additivity bound its measure by this quantity, and letting $\varepsilon\downarrow0$ gives zero.

[F8] A Lipschitz self-map of $\mathbb R^n$ carries $\lambda_n$-null sets to $\lambda_n$-null sets, under $\mathrm{AC}_\omega$. ([[lem-lipschitz-images-of-lebesgue-null-sets-are-lebesgue-null]])

[F9] A subset $U\subseteq\mathbb R^m$ is convex when $(1-t)x+ty\in U$ for all $x,y\in U$ and $t\in[0,1]$. ([[def-convex-subset-of-euclidean-space]])



[F10] A closed bounded subset of Euclidean space is compact. ([[thm-heine-borel-rn]])

## Proof

1.1 The function $\varphi$ is convex: for $p=(x,t)$, $q=(y,s)\in\mathbb R^{n+1}$ and $\lambda\in[0,1]$, writing $u:=(1-\lambda)(x-x_0)$ and $v:=\lambda(y-x_0)$, the triangle inequality and absolute homogeneity of the Euclidean norm [F3] give $|u+v|\le(1-\lambda)|x-x_0|+\lambda|y-x_0|$, while $c((1-\lambda)t+\lambda s)=(1-\lambda)ct+\lambda cs$ by linearity, so $\varphi((1-\lambda)p+\lambda q)\le(1-\lambda)\varphi(p)+\lambda\varphi(q)$; consequently $K(t_1,t_2)=\{\varphi<ct_0\}\cap\{t_1<t<t_2\}$ is convex, because both sets are convex: for $\{\varphi<ct_0\}$ this is the inequality just proved applied to two points with values below $ct_0$, and the slab is defined by two affine conditions [F9]. [given, F3, F9, algebra]

2.1 Basic topological properties: $K(t_1,t_2)$ is open since [F3] gives $||x-x_0|-|y-x_0||\le|x-y|$, so $\varphi$ and the coordinate $t$ are continuous and the half-lines $(t_1,t_2)$ and $(-\infty,ct_0)$ are open; it is nonempty because $(x_0,(t_1+t_2)/2)$ has $\varphi=0+c(t_1+t_2)/2<ct_0$ and lies in the slab; it is bounded because every point has $t_1<t<t_2$ and $|x-x_0|<c(t_0-t)<ct_0$. This is (i). [given, step 1.1, F3, algebra]

3.1 The boundary decomposition: $\partial K(t_1,t_2)=D_b\cup D_t\cup L$ with $D_b:=\overline B_{c(t_0-t_1)}(x_0)\times\{t_1\}$, $D_t:=\overline B_{c(t_0-t_2)}(x_0)\times\{t_2\}$ and $L$ as in the statement; the only overlaps are $D_b\cap L=S_{c(t_0-t_1)}(x_0)\times\{t_1\}$ and $D_t\cap L=S_{c(t_0-t_2)}(x_0)\times\{t_2\}$, and $D_b\cap D_t=\varnothing$. Indeed $\partial\{\varphi<ct_0\}\subseteq\{\varphi=ct_0\}$ and $\partial\{t_1<t<t_2\}\subseteq\{t=t_1\}\cup\{t=t_2\}$, and $K$ is the intersection of these three open sets, so a boundary point of $K$ lies in one of the three level sets; conversely a point $p=(x,t)$ with $\varphi(p)=ct_0$ and $t\in(t_1,t_2)$ (a point of $L$) has $p+\delta(x-x_0,c)\notin K$ and $p-\delta(x-x_0,c)\in K$ for small $\delta>0$, while a point with $t=t_1$ and $|x-x_0|<c(t_0-t_1)$ has $p-\delta e_t\notin K$ and $p+\delta e_t\in K$, and at a rim point $|x-x_0|=c(t_0-t_1)$, $t=t_1$, the points $(x_0+\frac{t_0-t_1-2\varepsilon}{t_0-t_1}(x-x_0),\,t_1+\varepsilon)$ lie in $K$ for $0<\varepsilon<\min((t_0-t_1)/2,t_2-t_1)$, since their spatial radius is $c(t_0-t_1-2\varepsilon)<c(t_0-t_1-\varepsilon)$, and tend to $p$; at a top rim point $(x,t_2)$ the points $(x,t_2-\varepsilon)$ lie in $K$ for $0<\varepsilon<t_2-t_1$ and tend to it, while the interior of the top disk is approached vertically. [given, step 2.1, algebra]

4.1 Each face is a compact Borel subset of a regular $C^1$ hypersurface patch: $D_b$ and $D_t$ are closed balls in the hyperplanes $\{t=t_i\}$, which are graphs of the constant (hence $C^1$) functions over $\mathbb R^n$ with nonvanishing gradient of $(x,t)\mapsto t$; the lateral face lies in the graphic hypersurface $\{(y,h(y)):y\in O\}$ where $O:=\mathbb R^n\setminus\{x_0\}$ and $h(y):=t_0-|y-x_0|/c$, which is $C^1$ because $y\mapsto\langle y-x_0,y-x_0\rangle$ is a finite sum of products of the $C^1$ coordinate functions [F6], the square root is differentiable on $(0,\infty)$ with derivative $\frac12s^{-1/2}$ [F4], and the chain rule [F5] applies on the open set where the inner value is positive, namely $O$. [F4, F5, F6, step 3.1, algebra]

5.1 The presentation is verified with $E:=\bigl(S_{c(t_0-t_1)}(x_0)\times\{t_1\}\bigr)\cup\bigl(S_{c(t_0-t_2)}(x_0)\times\{t_2\}\bigr)$: the three faces are closed bounded Borel subsets, hence compact by [F10], of regular $C^1$ patches by step 4.1 and cover $\partial K$ by step 3.1; $E\subset\partial K$ is compact and contains the relative boundaries of the faces in their patches (the rim circles of the two disks and the two boundary circles of the annulus $\{c(t_0-t_2)\le|y-x_0|\le c(t_0-t_1)\}$ parametrizing $L$) and all pairwise overlaps, which by step 3.1 are exactly the two rim circles; off $E$ the boundary is locally a single $C^1$ graph with $K$ on one side, namely $t=t_i$ over a small ball in the interior of each disk with $K$ on the side $t>t_1$, respectively $t<t_2$, and $t=h(y)$ over a small ball in $O$ for interior points of $L$, with $K$ locally $\{t<h(y)\}$ by the definition of $K$; and $S_j\cap E$ is surface-null in each face: on a disk the surface measure is $n$-dimensional Lebesgue measure transported by the graph chart [F2], whose rim is a sphere of positive radius, null by [F7] and [F8] applied to the homothety $z\mapsto x_0+rz$ (and for $n=1$ a two-point set), while on $L$ the graph density is the constant $\sqrt{1+1/c^2}$ because $|Dh|=1/c$ on $O$, so a Borel subset of $L$ is surface-null exactly when its $y$-projection is $\lambda_n$-null [F2], and the projection of $E\cap L$ is the union of two positive-radius spheres, null by [F7] and [F8]. Thus $K(t_1,t_2)$ has the specified finite piecewise $C^1$ presentation with faces $D_b,D_t,L$ and edge set $E$: this is (ii). [F1, F2, F7, F8, F10, step 3.1, step 4.1]

5.2 The outward normals: on the bottom disk the region lies locally in $\{t>t_1\}$, so the outward unit normal is $(0,-1)$; on the top disk it is $(0,1)$; on $L$ the field $\nabla\varphi=\bigl((x-x_0)/|x-x_0|,c\bigr)$ is continuous and nonvanishing near $L$ because $|x-x_0|=c(t_0-t)\ge c(t_0-t_2)>0$ there, $K$ is locally the side $\{\varphi<ct_0\}$ and $L\subseteq\{\varphi=ct_0\}$, so the outward unit normal is $\nabla\varphi/|\nabla\varphi|=\bigl((x-x_0)/|x-x_0|,c\bigr)/\sqrt{1+c^2}$, using the outward-normal convention for one-sided graph boundaries [F2] and the gradient of [[def-jacobian-matrix-and-gradient]]. This is (iii). [given, F2, step 4.1, algebra]

6.1 The closed cone: $K^-=\{\varphi\le ct_0\}\cap\{t\ge0\}\cap\{t\le t_0\}$ is closed because $\varphi$ is continuous, bounded because $0\le t\le t_0$ and $|x-x_0|\le ct_0$, and thus compact by [F10], and convex because the sublevel set is convex by the inequality of step 1.1 and the two half-spaces are convex [F9]; its interior is $\{0<t<t_0,\ \varphi<ct_0\}$: the inclusion $\supseteq$ is openness of the right-hand set inside $K^-$, and conversely a point with $\varphi=ct_0$ is not interior, since for $z:=(x_0,0)$ with $\varphi(z)=0<ct_0$ the points $r(\sigma):=z+\sigma(p-z)$, $\sigma>1$, satisfy $p=\frac1\sigma r(\sigma)+(1-\frac1\sigma)z$, so convexity gives $\varphi(p)\le\frac1\sigma\varphi(r(\sigma))+(1-\frac1\sigma)\varphi(z)$ and hence $\varphi(r(\sigma))\ge ct_0+(\sigma-1)(ct_0-\varphi(z))>ct_0$, with $r(\sigma)\to p$ as $\sigma\downarrow1$; a point with $t=0$ or $t=t_0$ is not interior because $p-\delta e_t$, respectively $p+\delta e_t$, lies outside $K^-$ for every $\delta>0$. Intersecting $\operatorname{int}K^-$ with the slab $\{t_1<t<t_2\}\subseteq\{0<t<t_0\}$ gives exactly $K(t_1,t_2)$, which is (iv). [step 1.1, step 2.1, F9, F10, algebra] ∎ 

## Remarks

The outward normals of (iii) supply the geometric data used in [[lem-energy-identity-on-a-truncated-wave-cone]].
