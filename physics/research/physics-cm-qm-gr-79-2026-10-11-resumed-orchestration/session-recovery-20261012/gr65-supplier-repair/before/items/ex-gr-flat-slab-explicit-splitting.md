---
id: ex-gr-flat-slab-explicit-splitting
kind: example
title: "Worked flat slab: a rational temporal function with Cauchy levels, complete flow and orthogonal product"
status: draft
origin: session
domain: mathematics
dependency_level: 29
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice, def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-curves-and-reachability, thm-gr-smooth-cauchy-temporal-splitting, def-gr-inverse-metric-and-musical-isomorphisms, def-complete-vector-field, def-integral-curve-of-a-vector-field, thm-unique-maximal-integral-curve-through-each-point, prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global, def-local-and-global-flow, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-derivative-of-an-inverse, cor-intermediate-value-theorem-topological, cor-zero-derivative-implies-constant, def-continuity-real, def-c-r-and-smooth-maps-between-smooth-manifolds, def-causal-classification-of-lorentz-vectors, def-lorentz-orthogonality-and-orthogonal-complement]
dependency_roles:
  thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  lem-gr-flat-inertial-cone-criterion-and-sums: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-complete-vector-field: mathematical-premise
  def-integral-curve-of-a-vector-field: mathematical-premise
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global: mathematical-premise
  def-local-and-global-flow: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  cor-intermediate-value-theorem-topological: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-continuity-real: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
sources:
  references:
    - title: "A. N. Bernal and M. Sanchez, Smooth globally hyperbolic splittings and temporal functions, arXiv:gr-qc/0308090 (2003): the orthogonal splitting by a complete temporal gradient field, printed pp. 4-8"
      url: "https://arxiv.org/pdf/gr-qc/0308090"
verification:
  precheck: pending
---

## Example

Let $(M,g,N)$ be the flat slab $(0,1)\times\mathbb R^3$ of
[[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]], with restricted
inertial chart $x=(t,z)$, restricted metric $g=\eta|_M$ and time orientation
$N=\partial_0|_M$, and with the Cauchy slice
$\Sigma_{1/2}=x^{-1}(\{1/2\}\times\mathbb R^3)$. Define the rational
function
$$T:M\to\mathbb R,\qquad T(x^{-1}(t,z)):=\frac{t}{1-t}-\frac1t .$$
This example verifies, by explicit computation, that $T$ satisfies all the
conclusions of [[thm-gr-smooth-cauchy-temporal-splitting]] in this model:
past-timelike gradient, Cauchy levels, complete gradient flow, and the
orthogonal product form.

## Facts & Assumptions

**Given:** The flat slab $(M,g,N)$ of [[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]] with chart $x=(t,z)$ and the function $T$.

[L1] Slab facts: $(M,g,N)$ is a time-oriented smooth Lorentzian four-manifold with constant metric components $\operatorname{diag}(-1,1,1,1)$ in the chart $x$; every curve in $M$ is future causal or future timelike for $(M,g)$ exactly when it is so for the ambient flat model with its inertial chart; and each coordinate slice $x^{-1}(\{c\}\times\mathbb R^3)$, $0<c<1$, is a spacelike embedded hypersurface and a Cauchy set ([[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]] clauses (a)-(c), [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]], [[def-gr-causal-curves-and-reachability]], [[def-gr-causal-conditions-and-global-hyperbolicity]]).

[L2] Calculus: on $(0,1)$ one has $\frac{d}{dt}\frac{t}{1-t}=\frac{1}{(1-t)^2}$ and $\frac{d}{dt}\frac1t=-\frac1{t^2}$, so $T'(t)=\frac{1}{(1-t)^2}+\frac1{t^2}>0$; $T$ is smooth, strictly increasing, with $\lim_{t\to0+}T(t)=-\infty$ and $\lim_{t\to1-}T(t)=+\infty$, so $T$ is a bijection $(0,1)\to\mathbb R$ with a smooth inverse $T^{-1}:\mathbb R\to(0,1)$ and $(T^{-1})'(u)=1/T'(T^{-1}(u))$ ([[thm-algebra-of-derivatives]], [[thm-derivative-of-an-inverse]], [[cor-intermediate-value-theorem-topological]], [[def-continuity-real]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L3] Gradient form: with $\nabla$ the inverse metric of [[def-gr-inverse-metric-and-musical-isomorphisms]], $\nabla T=T'(t)\,(-\partial_0)$; indeed $dT=T'(t)\,dt$ and $g(-\partial_0,w)=w^0=dt(w)$ on $M$ because $g(\partial_0,\partial_0)=-1$ and $g(\partial_0,\partial_i)=0$. A differentiable function on an interval with vanishing derivative is constant ([[cor-zero-derivative-implies-constant]]).

[L4] Cone and orthogonality: a nonzero tangent vector is future timelike exactly when its components satisfy $v^0>|v_{\mathrm{vec}}|$ in the chart, the past-direction is the negative of the future direction, and for the timelike $g$-gradient of a function the orthogonal decomposition below holds ([[lem-gr-flat-inertial-cone-criterion-and-sums]], [[def-causal-classification-of-lorentz-vectors]], [[def-lorentz-orthogonality-and-orthogonal-complement]]).

## Proof

**Proof technique:** direct.

1.1 (The gradient is past timelike and $X(T)=1$.) By [L3], $\nabla T=-T'\partial_0$ with $T'>0$ by [L2]. Hence $g(\nabla T,\nabla T)=-T'^2<0$, so $\nabla T$ is timelike, and its direction is $-\partial_0$, which is past-directed because $\partial_0=N$ is future-directed [L4]; thus $T$ is a temporal function in the sense of [[def-gr-causal-conditions-and-global-hyperbolicity]] clause (e). Define $X:=\nabla T/g(\nabla T,\nabla T)=\partial_0/T'$. Then $X$ is future-directed timelike and $X(T)=T'(t)\cdot dt(X)=T'\cdot\frac1{T'}=1$. [L2, L3, L4]

2.1 (The levels are Cauchy.) The level sets of $T$ are exactly the coordinate slices $x^{-1}(\{t\}\times\mathbb R^3)$ with $0<t<1$: $T$ depends only on $t$ and is strictly increasing [L2]. By [L1] each such slice is a spacelike embedded hypersurface and a Cauchy set, and each inextendible causal curve meets it exactly once; since $T$ takes each real value on exactly one slice, every inextendible causal curve meets every level of $T$ exactly once. Consequently $T$ takes every real value (each level is nonempty) and $T\to+\infty$ along every inextendible future-directed causal curve and $T\to-\infty$ along every inextendible past-directed one: a future-directed causal curve meets the level $\{T=c\}$ for every $c$, and $T$ is strictly increasing along it by [L4] and the gradient computation, so it cannot turn back. [step 1.1, L1, L2, L4]

2.2 (The flow is complete and explicit.) By [L2] let $u\mapsto\sigma(u):=T^{-1}(u)$ be the smooth inverse of $T$. Fix $(t_0,z_0)$ and put $\gamma(s):=x^{-1}(\sigma(s+T(t_0)),z_0)$. Since $\sigma$ takes values in $(0,1)$, the curve stays in $M$ for every $s\in\mathbb R$; it is smooth; and by the chain rule and [L2] its $t$-coordinate satisfies $\frac{d}{ds}\sigma(s+T(t_0))=\sigma'(s+T(t_0))=\frac1{T'(\sigma(s+T(t_0)))}$. Hence the chart velocity of $\gamma$ is $\bigl(1/T'(t),0,0,0\bigr)=X(\gamma(s))$ in the chart components, so $\gamma$ is an integral curve of $X$ defined on all of $\mathbb R$. The maximal integral curve of $X$ through any point therefore has domain $\mathbb R$ (an integral curve defined on a larger interval cannot exist because $\gamma$ covers the whole maximal interval: the uniqueness theorem identifies all integral curves through a common point on overlaps), so $X$ is complete and its flow $\Phi:\mathbb R\times M\to M$ is global and smooth ([[thm-unique-maximal-integral-curve-through-each-point]], [[def-complete-vector-field]], [[prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global]], [[def-local-and-global-flow]]). [step 1.1, L2]

3.1 (The orthogonal product form.) Put $\beta:=-1/g(\nabla T,\nabla T)=1/T'^2>0$ and $h_T:=g+\beta\,dT\otimes dT$. By [L3], $\beta\,dT\otimes dT=(1/T'^2)(T'^2\,dt\otimes dt)=dt\otimes dt$, so $h_T=\delta_{ij}\,dx^i\otimes dx^j$ on the spatial coordinates: it is the Euclidean metric on $\ker dT=\operatorname{span}(\partial_1,\partial_2,\partial_3)$, positive definite and smooth, and $g=-dt\otimes dt+h_T$. Moreover $X=\partial_0/T'$ satisfies $h_T(X,\cdot)=0$ because $dt(X)\ne0$ is compensated exactly as in the general computation $h_T(X,\cdot)=g(X,\cdot)+\beta dT=-\beta dT+\beta dT=0$. The flow map $\Psi:\mathbb R\times\Sigma_{1/2}\to M$, $\Psi(s,\cdot)=x^{-1}(\sigma(s+T(1/2)),\cdot)$, is a bijection because $\sigma\circ T=\mathrm{id}_{(0,1)}$ and $T\circ\sigma=\mathrm{id}_{\mathbb R}$, and it is a diffeomorphism since both maps are smooth; its pullback of $g$ is $-(\beta\circ\Psi)\,ds^2+h$ with $h$ the Euclidean metric on $\Sigma_{1/2}$. [step 1.1, step 2.2, L2, L3, L4]

4.1 (Summary.) The rational function $T$ is a temporal function on the globally hyperbolic slab whose levels are the Cauchy slices, whose gradient field $X=\partial_0/T'$ is complete with explicit flow $s\mapsto\sigma(s+T(t_0))$, and whose metric splits orthogonally as $g=-\beta\,dT\otimes dT+h_T$ with $\beta>0$ and $h_T$ Riemannian on the levels. This realises the conclusions (a)-(f) of [[thm-gr-smooth-cauchy-temporal-splitting]] in an explicit model. [step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **Comparison with the coordinate time.** The coordinate time $t$ itself is a temporal function on the slab with Cauchy levels, but its gradient field is $\partial_0$, whose flow lines leave the slab at finite parameter (the vertical geodesics of [[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]] clause (b)); the reparametrised time $T$ slows the flow near the boundary so that it becomes complete. See [[cex-gr-flat-slab-coordinate-time-flow-incomplete]].
- **No empirical content.** The example is a mathematical verification in a model; it reports no observation and carries no uncertainty.
