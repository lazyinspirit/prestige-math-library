---
id: lem-gr-coordinate-ball-geodesic-convexity
kind: lemma
title: "Convexity of the squared Euclidean radius along small contained geodesics: segments with endpoints in a small ball stay in the ball"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [prop-coordinate-geodesic-equation, def-christoffel-symbols-of-an-affine-connection, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-local-geodesics-and-exponential-map, def-derivative, def-higher-derivatives-and-smoothness, cor-second-derivative-characterises-convexity, def-convex-concave-and-midpoint-convex-functions, def-interval, def-ck-and-multi-index-notation-in-several-variables, thm-chain-rule, thm-algebra-of-derivatives]
dependency_roles:
  prop-coordinate-geodesic-equation: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-derivative: mathematical-premise
  def-higher-derivatives-and-smoothness: mathematical-premise
  cor-second-derivative-characterises-convexity: mathematical-premise
  def-convex-concave-and-midpoint-convex-functions: mathematical-premise
  def-interval: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi and M. Sanchez, On the existence of maximal curves and the Heine-Borel property of a spacetime, arXiv:2012.15460 (2020 revision), and E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: convexity of small balls, section 2.2 printed pp. 26-27"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Proposition 2.2.6 with proof (printed pp. 12-13), geodesic convexity of small coordinate balls and the second-derivative estimate along geodesics"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]) and let geodesics be those of
[[thm-gr-local-geodesics-and-exponential-map]]. Let $(U,x)$ be a smooth
chart of $M$ and write $x=(x^0,x^1,x^2,x^3)$ with its Euclidean norm
$|\cdot|_{\mathrm e}$ on $x(U)\subseteq\mathbb R^4$; write
$B_s:=\{y\in\mathbb R^4:|y|_{\mathrm e}<s\}$ and, for a compact subset
$K\subseteq U$, let
$$\|\Gamma\|_K:=\sup_{y\in x(K)}\ \sup_{|u|_{\mathrm e}=|v|_{\mathrm e}=1}|\Gamma(y)[u,v]|_{\mathrm e},$$
where $\Gamma(y)[u,v]^a=\sum_{b,c=0}^3\Gamma^a{}_{bc}(y)u^bv^c$. Thus this is the Euclidean bilinear operator norm, not the maximum of the individual coefficients; set $\|\Gamma\|_{\varnothing}=0$. The Christoffel symbols are the smooth chart functions of
[[def-christoffel-symbols-of-an-affine-connection]].

**(a) Second-derivative inequality.** Let $\gamma:J\to U$ be a geodesic and
let $f:J\to\mathbb R$, $f(t):=|x(\gamma(t))|_{\mathrm e}^2$, where the norm is
the Euclidean norm of the chart image. At every parameter $t\in J$,
$$f''(t)=2\bigl|\dot x(t)\bigr|_{\mathrm e}^2-2\,x(t)\cdot\Gamma(x(t))[\dot x(t),\dot x(t)],$$
where $\Gamma(x)[\dot x,\dot x]$ is the vector with components
$\sum_{i,j}\Gamma^a{}_{ij}(x)\dot x^i\dot x^j$ and $\cdot$ is the Euclidean
scalar product. Consequently, along every geodesic whose image lies in a
fixed compact $K\subseteq U$,
$$f''\ge 2\bigl(1-\|\Gamma\|_K\,|x(\gamma)|\bigr)\bigl|\dot x\bigr|_{\mathrm e}^2 .$$
In particular, if $x(K)\subseteq B_{r_1}$ and $\|\Gamma\|_K\,r_1\le\tfrac12$
then $f''\ge|\dot x|_{\mathrm e}^2\ge0$ at every parameter of such a
geodesic.

**(b) Maximum principle.** Let $\gamma:[0,1]\to U$ be a geodesic whose image
is contained in a compact $K$ with $x(K)\subseteq B_{r_1}$ and
$\|\Gamma\|_K\,r_1\le\frac12$, and suppose
$|x(\gamma(0))|_{\mathrm e}\le r_2$ and $|x(\gamma(1))|_{\mathrm e}\le r_2$
for some $r_2<r_1$. Then
$$|x(\gamma(t))|_{\mathrm e}\le r_2\qquad\text{for every }t\in[0,1].$$

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, a chart $(U,x)$ and a geodesic $\gamma:J\to U$.

[L1] In a chart, a smooth curve $t\mapsto x(t)$ is (the coordinate representative of) a geodesic if and only if $\ddot x^a+\sum_{i,j}\Gamma^a{}_{ij}(x)\dot x^i\dot x^j=0$ for $a=0,1,2,3$ ([[prop-coordinate-geodesic-equation]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L2] The function $t\mapsto x(t)$ is $C^\infty$ ([[def-higher-derivatives-and-smoothness]], [[thm-chain-rule]]) and a twice differentiable function on an open interval with nonnegative second derivative there is convex ([[cor-second-derivative-characterises-convexity]]).

[L3] The Christoffel symbols are smooth on $x(U)$ ([[def-christoffel-symbols-of-an-affine-connection]]), so $\|\Gamma\|_K<\infty$ for every compact $K\subseteq U$.

[L4] A convex function $h$ on $[0,1]$ satisfies the chord bound $h(t)\le(1-t)h(0)+th(1)$ for every $t\in[0,1]$, and hence $h(t)\le\max\{h(0),h(1)\}$ ([[def-convex-concave-and-midpoint-convex-functions]]).

## Proof

**Proof technique:** direct.

1.1 (Computation of $f''$.) Write $x=x(\gamma(t))$, $\dot x=\dot x(t)$, $\ddot x=\ddot x(t)$ and $\Gamma=\Gamma(x(t))$. Since $f=|x|_{\mathrm e}^2=\sum_a(x^a)^2$, $$f'=2\sum_a x^a\dot x^a,\qquad f''=2\sum_a\bigl((\dot x^a)^2+x^a\ddot x^a\bigr)=2|\dot x|_{\mathrm e}^2+2\,x\cdot\ddot x .$$ By the geodesic equation of [L1], $\ddot x^a=-\sum_{i,j}\Gamma^a{}_{ij}\dot x^i\dot x^j$, so $f''=2|\dot x|_{\mathrm e}^2-2\,x\cdot\Gamma(x)[\dot x,\dot x]$. [L1, L2, algebra]

2.1 (Bound.) By Cauchy–Schwarz in $\mathbb R^4$ and [L3], $\bigl|x\cdot\Gamma(x)[\dot x,\dot x]\bigr| \le|x|_{\mathrm e}\,\bigl|\Gamma(x)[\dot x,\dot x]\bigr|_{\mathrm e} \le|x|_{\mathrm e}\,\|\Gamma\|_K\,|\dot x|_{\mathrm e}^2$ whenever the image of $\gamma$ lies in $K$. Substituting into step 1.1 gives the displayed inequality, and if $x(K)\subseteq B_{r_1}$ with $\|\Gamma\|_K r_1\le\frac12$, then $f''\ge 2(1-\frac12)|\dot x|_{\mathrm e}^2=|\dot x|_{\mathrm e}^2\ge0$. This proves (a). [step 1.1, L3, algebra]

3.1 (Maximum principle.) Let $K$ and $r_2<r_1$ be as in (b), so the image of $\gamma$ lies in $K$ and $x(K)\subseteq B_{r_1}$ with $\|\Gamma\|_K r_1\le\frac12$. By step 2.1, $f''\ge0$ on the interval $[0,1]$; since $f$ is twice differentiable there by [L2], [L2] makes $f$ convex on $[0,1]$. By [L4], $f(t)\le\max\{f(0),f(1)\}\le r_2^2$ for every $t\in[0,1]$, that is, $|x(\gamma(t))|_{\mathrm e}\le r_2$. This proves (b) and completes the proof. [step 2.1, L2, L4, algebra] ∎

## Remarks

- **Only one chart.** The estimate is a chart statement; it is used in [[lem-gr-contained-geodesic-velocity-bound]] and [[thm-gr-convex-normal-neighborhoods]] to control contained geodesics in a single coordinate ball, and no covariance is claimed for the Euclidean radius function.

- **Why convexity and not distance to the boundary.** The function $|x|_{\mathrm e}^2$ is $C^\infty$ and its second derivative along geodesics is computable from the geodesic equation alone; it is exactly the function used in the classical proof that small coordinate balls are geodesically convex, and it does not use the metric's signature.
