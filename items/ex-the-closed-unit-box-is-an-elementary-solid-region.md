---
id: ex-the-closed-unit-box-is-an-elementary-solid-region
kind: example
title: "The closed unit box, with its six faces, is an elementary solid region"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-elementary-solid-region, def-simple-solid-region-in-a-coordinate-direction, def-adapted-outward-boundary-presentation-of-a-simple-solid-region, def-admissible-regular-parametrized-surface-patch, def-finitely-patched-regular-surface-and-integrals, def-cross-product-in-r3, lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians, def-riemann-integral-over-a-jordan-set, def-oriented-unit-normal-and-flux-of-a-surface-patch, lem-standard-basis-of-f-n, def-euclidean-inner-product, def-null-and-content-zero-in-rn, thm-jordan-boundary-criterion, def-metric-interior-closure-boundary]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
pipeline_run: null
---

## Example

Let $B:=[0,1]^3$ and let $S:=[0,1]^2$ with parameters $(u,v)$. Then the six faces of the closed unit box, each parametrized on the unit square so that its oriented area vector points out of the box, form one presentation adapted in all three coordinate directions, so $B$ is an elementary solid region ([[def-elementary-solid-region]]) with that presentation. The six parametrizations are

$$\varphi_{z^+}(u,v)=(u,v,1),\quad \varphi_{z^-}(u,v)=(v,u,0),\quad \varphi_{x^+}(u,v)=(1,u,v),$$
$$\varphi_{x^-}(u,v)=(0,v,u),\quad \varphi_{y^+}(u,v)=(v,1,u),\quad \varphi_{y^-}(u,v)=(u,0,v),$$

all on $S$, and their oriented area vectors are the constants $e_z$, $-e_z$, $e_x$, $-e_x$, $e_y$ and $-e_y$ respectively.

## Facts & Assumptions

**Given:** The box $B=[0,1]^3$, the square $S=[0,1]^2$, and the six parametrizations displayed above.

[F1] For $u=(u_x,u_y,u_z)$ and $v=(v_x,v_y,v_z)$ in $\mathbb R^3$, $u\times v=(u_yv_z-u_zv_y,\,u_zv_x-u_xv_z,\,u_xv_y-u_yv_x)$ ([[def-cross-product-in-r3]]), and $e_k$ has $k$th coordinate $1$ and the others $0$ ([[lem-standard-basis-of-f-n]], [[def-euclidean-inner-product]]).

[F2] A regular parametrized surface patch has a compact Jordan parameter region that is the closure of its nonempty connected interior, a parametrization $C^1$ on an open neighbourhood of it, nonvanishing parameter cross product on the interior, and no interior parameter point sharing its image with a distinct point of the region ([[def-admissible-regular-parametrized-surface-patch]]).

[F3] A compatible finite patch presentation is a finite list of regular patches whose images cover a set, such that for two distinct patches the preimage of their overlap has content zero in each parameter region, and whose induced normals agree at every point of the overlap that is the image of an interior parameter point of both ([[def-finitely-patched-regular-surface-and-integrals]]).

[F4] A simple description of a solid in the direction $k$ is $(k,D,\gamma_1,\gamma_2)$ with $D\subseteq\mathbb R^2$ compact Jordan of nonempty interior and $\gamma_1\le\gamma_2$ continuous on $D$, strict on its interior, describing $E=\{p:\pi_k(p)\in D,\ \gamma_1(\pi_k(p))\le p_k\le\gamma_2(\pi_k(p))\}$; the cyclic projections are $\pi_x(p)=(p_y,p_z)$, $\pi_y(p)=(p_z,p_x)$ and $\pi_z(p)=(p_x,p_y)$ ([[def-simple-solid-region-in-a-coordinate-direction]]).

[F5] Given a compatible finite patch presentation whose images cover and lie in the boundary, it is adapted to a description in the direction $k$ when its index set splits into an upper, a lower and a lateral sublist, with the image of an upper patch in the graph of $\gamma_2$ and the $k$th coordinate of its oriented area vector positive on the parameter interior, the mirror conditions for a lower patch, that coordinate vanishing on the parameter interior for a lateral patch, the projected images of each graph sublist pairwise disjoint and filling $D$ up to content zero, and both graph sublists nonempty ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]]).

[F6] An elementary solid region is a compact set with a simple description in each of the three coordinate directions and one compatible finite patch presentation of its boundary adapted to a simple description in each of them ([[def-elementary-solid-region]]).

[F7] The oriented area vector of a patch is $\varphi_u\times\varphi_v$ and the flux integrand is taken against it ([[def-oriented-unit-normal-and-flux-of-a-surface-patch]]); integration over a bounded Jordan set is that of [[def-riemann-integral-over-a-jordan-set]]; boundaries and interiors are those of [[def-metric-interior-closure-boundary]].

[F8] A set has content zero when it admits finite cube covers of arbitrarily small total volume, and content zero passes to subsets ([[def-null-and-content-zero-in-rn]]); a bounded set is Jordan measurable exactly when its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[L1] For a $C^1$ map $\varphi$ of two variables into $\mathbb R^3$, $(\varphi_u\times\varphi_v)_k=\det D(\pi_k\circ\varphi)$ ([[lem-the-coordinate-components-of-the-oriented-area-vector-are-projected-jacobians]]).

## Verification

**Proof technique:** constructive.

1.1 Each of the six maps is affine, so its two parameter derivatives are the constant standard basis vectors $\varphi_{z^+,u}=e_x$, $\varphi_{z^+,v}=e_y$; $\varphi_{z^-,u}=e_y$, $\varphi_{z^-,v}=e_x$; $\varphi_{x^+,u}=e_y$, $\varphi_{x^+,v}=e_z$; $\varphi_{x^-,u}=e_z$, $\varphi_{x^-,v}=e_y$; $\varphi_{y^+,u}=e_z$, $\varphi_{y^+,v}=e_x$; $\varphi_{y^-,u}=e_x$, $\varphi_{y^-,v}=e_z$. Computing each cross product from [F1] gives $e_x\times e_y=(0,0,1)=e_z$, $e_y\times e_x=-e_z$, $e_y\times e_z=(1,0,0)=e_x$, $e_z\times e_y=-e_x$, $e_z\times e_x=(0,1,0)=e_y$ and $e_x\times e_z=-e_y$, so the six oriented area vectors are the constants $e_z,-e_z,e_x,-e_x,e_y,-e_y$ as displayed. [given, F1, F7, construct]

1.2 The three quadruples $\bigl(z,[0,1]^2,0,1\bigr)$, $\bigl(x,[0,1]^2,0,1\bigr)$ and $\bigl(y,[0,1]^2,0,1\bigr)$, with constant graph functions, are simple descriptions of $B$ in the three directions in the sense of [F4]: the base $[0,1]^2$ is compact, Jordan measurable and has nonempty interior; the constants $0<1$ satisfy the weak and the strict inequality; and in each case $\{p:\pi_k(p)\in[0,1]^2,\ 0\le p_k\le1\}$ is exactly $[0,1]^3$, because $\pi_k$ lists the two coordinates other than the $k$th. [given, F4, F8, construct]

2.1 Each of the six pairs $(S,\varphi)$ is a regular patch in the sense of [F2]: the square $S$ is compact and Jordan measurable, being a rectangle, and is the closure of its nonempty convex, hence connected, interior $(0,1)^2$; each $\varphi$ is affine and therefore $C^1$ on all of $\mathbb R^2$; each oriented area vector is a nonzero constant by step 1.1; and each $\varphi$ is injective on $\mathbb R^2$, since its two direction vectors are distinct standard basis vectors and reading the two matching coordinates of the image recovers $(u,v)$, so in particular no interior parameter point shares its image with a distinct point of $S$. [step 1.1, F2, F8]

2.2 Take $\Sigma^{+}_z=(\varphi_{z^+})$, $\Sigma^{-}_z=(\varphi_{z^-})$ and $\Sigma^{0}_z=(\varphi_{x^+},\varphi_{x^-},\varphi_{y^+},\varphi_{y^-})$. The image of $\varphi_{z^+}$ is the face $p_z=1$, the graph of $\gamma_2=1$, and by step 1.1 the $z$ coordinate of its oriented area vector is $1>0$; the image of $\varphi_{z^-}$ is the graph of $\gamma_1=0$ with $z$ coordinate $-1<0$; and the four lateral vectors $\pm e_x,\pm e_y$ have $z$ coordinate $0$, so that coordinate vanishes on the whole parameter square. The projected image $\pi_z\bigl[\varphi_{z^+}[(0,1)^2]\bigr]$ is $(0,1)^2$, whose complement in $[0,1]^2$ is $\partial([0,1]^2)$ of content zero by [F8], and likewise for $\varphi_{z^-}$, where $\pi_z(v,u,0)=(v,u)$; each graph sublist is a single patch, so pairwise disjointness is vacuous, and both are nonempty. So the presentation is adapted to the $z$ description of step 1.2, in the sense of [F5]. [step 1.1, step 1.2, F5, F8, L1]

2.3 Take $\Sigma^{+}_x=(\varphi_{x^+})$, $\Sigma^{-}_x=(\varphi_{x^-})$ and $\Sigma^{0}_x=(\varphi_{z^+},\varphi_{z^-},\varphi_{y^+},\varphi_{y^-})$. By step 1.1 the $x$ coordinates of the oriented area vectors are $1$ for $\varphi_{x^+}$, $-1$ for $\varphi_{x^-}$ and $0$ for the other four. The image of $\varphi_{x^+}$ is the face $p_x=1$ and $\pi_x(1,u,v)=(u,v)$, so its projected image is $(0,1)^2$; the image of $\varphi_{x^-}$ is $p_x=0$ and $\pi_x(0,v,u)=(v,u)$, again with projected image $(0,1)^2$. Both complements in the base are $\partial([0,1]^2)$, of content zero. So the same presentation is adapted to the $x$ description. [step 1.1, step 1.2, F5, F8, L1]

2.4 Take $\Sigma^{+}_y=(\varphi_{y^+})$, $\Sigma^{-}_y=(\varphi_{y^-})$ and $\Sigma^{0}_y=(\varphi_{z^+},\varphi_{z^-},\varphi_{x^+},\varphi_{x^-})$. By step 1.1 the $y$ coordinates of the oriented area vectors are $1$ for $\varphi_{y^+}$, $-1$ for $\varphi_{y^-}$ and $0$ for the other four. The image of $\varphi_{y^+}$ is the face $p_y=1$ and $\pi_y(v,1,u)=(u,v)$, so its projected image is $(0,1)^2$; the image of $\varphi_{y^-}$ is $p_y=0$ and $\pi_y(u,0,v)=(v,u)$, with projected image $(0,1)^2$. So the same presentation is adapted to the $y$ description. [step 1.1, step 1.2, F5, F8, L1]

3.1 The six images are the six closed faces of $B$, each contained in $\partial B$, and their union is $\partial B$ by [F7], since a point of $B$ fails to be interior exactly when one of its coordinates is $0$ or $1$. Two distinct faces meet in a closed edge, a vertex or the empty set; the preimage of such an intersection in either parameter square is contained in $\partial S$, which has content zero by [F8], so the overlap condition of [F3] holds. Interior parameter points map into the six open faces, which are pairwise disjoint, so no point of an overlap is the image of an interior parameter point of two distinct patches and the normal-agreement condition of [F3] holds with nothing to check. Hence the six patches form a compatible finite patch presentation of $\partial B$. [step 2.1, F3, F7, F8]

4.1 Steps 2.1 and 3.1 make the six patches a compatible finite patch presentation of $\partial B$, step 1.2 supplies the three simple descriptions, and steps 2.2, 2.3 and 2.4 make that one presentation adapted in all three directions. By [F6] the box $B$, with these data, is an elementary solid region. [step 2.1, step 3.1, step 2.2, step 2.3, step 2.4, F6, discharge-construct: the six displayed patches] ∎

## Remarks

- **The parameter order on each face is chosen, and the choice is what fixes the sign.** Exchanging $u$ and $v$ on any one face reverses its oriented area vector and would make that face fail the adaptation condition in the direction where it is a graph face. The six orders above are the ones for which the oriented area vector is the outward standard basis vector, which is also what makes the presentation the outward one in the sense of [[cor-every-face-of-an-elementary-solid-region-is-outward-oriented]].

- **Each face is lateral in two directions and a graph face in one.** That is visible in step 1.1: the oriented area vector of each face is $\pm$ one standard basis vector, so exactly one of its three coordinates is nonzero. It is the concrete case of the general fact that no patch can be lateral in all three directions.
