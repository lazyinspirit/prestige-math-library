---
id: ex-gr-flat-cone-bump-explicit
kind: example
title: "Worked flat-model cone bump: the exponential cone function and its past-timelike gradient in inertial coordinates"
status: draft
origin: session
domain: mathematics
dependency_level: 26
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, lem-gr-constant-component-chart-flatness, thm-gr-local-geodesics-and-exponential-map, lem-gr-maximal-geodesics-and-extension, def-gr-inverse-metric-and-musical-isomorphisms, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-the-standard-flat-function, thm-the-standard-flat-function-is-smooth-and-flat-at-zero, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, def-gr-causal-curves-and-reachability, lem-gr-cone-bump-functions]
dependency_roles:
  lem-gr-cone-bump-functions: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  lem-gr-flat-inertial-cone-criterion-and-sums: mathematical-premise
  lem-gr-constant-component-chart-flatness: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-the-standard-flat-function: mathematical-premise
  thm-the-standard-flat-function-is-smooth-and-flat-at-zero: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): light-cone smoothing by the function exp(-1/Q) of the squared displacement, printed p. 59"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019) 3: Gaussian-type smoothing of light cones, section 4.5 printed pp. 142-148"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Example

In the flat model $(A,\eta,N)$ of
[[def-gr-flat-minkowski-model-and-inertial-charts]] with global inertial
chart $x=(x^0,z)$, fix $\delta>0$ and the events
$p:=x^{-1}(0,0,0,0)$ and $p':=x^{-1}(-\delta,0,0,0)$. This example computes
the cone-bump construction of [[lem-gr-cone-bump-functions]] explicitly at
$p'$ and verifies, in the flat model, each clause of that construction: the
exponential cone function $Q$, the smoothed bump $f=\varphi\circ Q$, its past
timelike gradient on $\{f>0\}$, and the normalized bump $h_p=\chi f/f(p)$
with compact support.

## Facts & Assumptions

**Given:** The flat model with a global inertial chart $x$, the real number $\delta>0$, and the events $p=x^{-1}(0,0,0,0)$, $p'=x^{-1}(-\delta,0,0,0)$.

[L1] Displacements and the cone: for $v\in\mathbb R^4$ the straight path $s\mapsto x^{-1}(x(p')+sv)$ is a geodesic in the affine parameter $s$ with constant velocity $v$, and its maximal domain is $\mathbb R$; a nonzero displacement $v$ is future timelike, future null or future causal exactly when $v^0>|v_{\mathrm{vec}}|$, $v^0=|v_{\mathrm{vec}}|$, or $v^0\ge|v_{\mathrm{vec}}|$ with $v^0>0$ ([[lem-gr-constant-component-chart-flatness]] clause (c), [[lem-gr-flat-inertial-cone-criterion-and-sums]], [[thm-gr-local-geodesics-and-exponential-map]], [[lem-gr-maximal-geodesics-and-extension]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[L2] The exponential map of the flat model at $p'$ is the chart translation $v\mapsto x^{-1}(x(p')+v)$ on all of $T_{p'}A$: the coordinate geodesics through $p'$ exhaust the maximal geodesics and have domain $\mathbb R$ [L1] ([[thm-gr-local-geodesics-and-exponential-map]]).

[L3] The standard flat function $\varphi$ is smooth with all derivatives vanishing at $0$ ([[def-the-standard-flat-function]], [[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]); the chain rule and the algebra of derivatives apply to compositions and products of smooth functions ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L4] Gradient: for a smooth $u$, the gradient $\nabla u$ of [[def-gr-inverse-metric-and-musical-isomorphisms]] is characterised by $\eta(\nabla u,w)=du(w)$ for every $w$, and if $T$ is a past-directed timelike vector then $-T$ is future-directed timelike.

## Verification

**Proof technique:** direct.

1.1 (The cone function.) For $q\in A$ write $v:=q-p'$, so $v=(v^0,v_{\mathrm{vec}})$ and $Q(q):=-\eta(v,v)=(v^0)^2-|v_{\mathrm{vec}}|^2$. By [L1], $Q(q)>0$ exactly when $v$ is timelike, $Q(q)=0$ exactly when $v$ is null (or zero), and the sign of $v^0$ together with [L1] identifies the future and past sides: $\{Q>0,v^0>0\}$ is the chronological future $I^+(p')$ of the flat model and $\{Q>0,v^0<0\}$ its chronological past. [L1, L2, given]

2.1 (The gradient of $Q$.) In the chart components, $dQ=2v^0\,dx^0-2\sum_iv^i\,dx^i$, and the vector field $W:=-2v^0\partial_0-2\sum_iv^i\partial_i$ satisfies $\eta(W,w)=2v^0w^0-2\sum_iv^iw^i=dQ(w)$ for all $w$, so $\nabla Q=W=-2v$ by [L4]. Consequently $\nabla Q$ is past-directed timelike exactly on $\{Q>0,v^0>0\}$, namely on $I^+(p')$, and it vanishes nowhere on the zero set of $Q$ except at the vertex $q=p'$. [step 1.1, L4]

3.1 (The smoothed bump is smooth and its gradient is past timelike where it is positive.) Let $f:=\varphi\circ Q$. Since $Q$ is smooth and $\varphi$ is smooth with all derivatives vanishing at $0$, the composition is smooth at the vertex and on the rest of the zero set; it is constant $0$ where $Q\le0$ and smooth where $Q>0$ [L3]. Moreover $f\ge0$ and $f>0$ exactly on $I^+(p')$ by step 1.1. Where $f>0$ one has $\nabla f=\varphi'(Q)\nabla Q$ by the chain rule; since $Q>0$ there and $\varphi'(Q)=\frac{1}{Q^2}e^{-1/Q}>0$, the gradient $\nabla f$ is a positive multiple of the past-directed timelike $\nabla Q$ of step 2.1, hence is past timelike on $\{f>0\}$. [step 1.1, step 2.1, L3]

4.1 (The normalized bump.) Since $p-p'=(\delta,0,0,0)$ is future timelike, $Q(p)=\delta^2>0$ and $f(p)=\varphi(\delta^2)>0$; hence $h_p:=\chi f/f(p)$ is defined for every smooth $\chi:A\to[0,1]$ with compact support. Taking $\chi=1$ on a neighborhood of $p$ gives $h_p(p)=1$ and, by continuity, $\{h_p>1/2\}$ containing a neighborhood of $p$; taking $\operatorname{supp}\chi$ compact gives $h_p$ compact support. On any prescribed compact subset $K$ of $I^+(p')$ on which $\chi=1$, one has $h_p=f/f(p)$ and $\nabla h_p=\nabla f/f(p)$, which is past timelike by step 3.1; in particular, for the truncated sets $\{x^0\le b\}\cap K$ of the cone-bump lemma the same computation gives clause (c) of [[lem-gr-cone-bump-functions]] in this explicit model. [step 2.1, step 3.1, given]

5.1 (Summary.) The explicit data $(Q,f,h_p)$ realise the cone-bump lemma at $p'$ in the flat model: $Q$ is the exponential cone function, $f$ the smoothing of the indicator of the chronological future of $p'$, and $h_p$ the normalized compactly supported bump with $h_p(p)=1$ and past-timelike gradient where it is positive. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Why the flat case is transparent.** In an inertial chart the exponential map is a translation and the squared displacement is a quadratic form, so $Q$ is an ordinary quadratic function and the only analytic input is the flatness of $\varphi$ at $0$; in a curved manifold the same computation is performed after the exponential map linearises the cone.
- **The cutoff.** The lemma's cutoff $\chi$ is not fixed by the geometry; the example exhibits the freedom (any compactly supported $\chi$ works) and confirms that the gradient assertion only concerns the region where $\chi=1$.
