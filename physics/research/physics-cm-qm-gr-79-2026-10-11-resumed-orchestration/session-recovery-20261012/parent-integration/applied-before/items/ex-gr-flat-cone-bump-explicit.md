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
deps: [lem-euclidean-bump-for-a-compact-set-inside-an-open-set, def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, lem-gr-constant-component-chart-flatness, thm-gr-local-geodesics-and-exponential-map, lem-gr-maximal-geodesics-and-extension, def-gr-inverse-metric-and-musical-isomorphisms, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-the-standard-flat-function, thm-the-standard-flat-function-is-smooth-and-flat-at-zero, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, def-gr-causal-curves-and-reachability, lem-gr-cone-bump-functions]
dependency_roles:
  lem-euclidean-bump-for-a-compact-set-inside-an-open-set: mathematical-premise
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
  precheck: pass
---

## Example

In the flat model $(A,\eta,N)$ of
[[def-gr-flat-minkowski-model-and-inertial-charts]] with global inertial
chart $x=(x^0,z)$, fix $\delta>0$ and the events
$p:=x^{-1}(0,0,0,0)$ and $p':=x^{-1}(-\delta,0,0,0)$. This example computes
the cone-bump construction of [[lem-gr-cone-bump-functions]] explicitly at
$p'$ and verifies, in the flat model, each clause of that construction: the
exponential cone function $Q$, the future-branch smoothed bump $f$, equal to $\varphi(Q)$ on $I^+(p')$ and zero outside it, its past
timelike gradient on $\{f>0\}$, and the normalized bump $h_p=\chi f/f(p)$
with compact support.

## Facts & Assumptions

**Given:** The flat model with a global inertial chart $x$, the real number $\delta>0$, and the events $p=x^{-1}(0,0,0,0)$, $p'=x^{-1}(-\delta,0,0,0)$.

[L1] Displacements and the cone: for $v\in\mathbb R^4$ the straight path $s\mapsto x^{-1}(x(p')+sv)$ is a geodesic in the affine parameter $s$ with constant velocity $v$, and its maximal domain is $\mathbb R$; a nonzero displacement $v$ is future timelike, future null or future causal exactly when $v^0>|v_{\mathrm{vec}}|$, $v^0=|v_{\mathrm{vec}}|$, or $v^0\ge|v_{\mathrm{vec}}|$ with $v^0>0$ ([[lem-gr-constant-component-chart-flatness]] clause (c), [[lem-gr-flat-inertial-cone-criterion-and-sums]], [[thm-gr-local-geodesics-and-exponential-map]], [[lem-gr-maximal-geodesics-and-extension]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]).

[L2] The exponential map of the flat model at $p'$ is the chart translation $v\mapsto x^{-1}(x(p')+v)$ on all of $T_{p'}A$: the coordinate geodesics through $p'$ exhaust the maximal geodesics and have domain $\mathbb R$ [L1] ([[thm-gr-local-geodesics-and-exponential-map]]).

[L3] The standard flat function $\varphi$ is smooth with all derivatives vanishing at $0$ ([[def-the-standard-flat-function]], [[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]); the chain rule and the algebra of derivatives apply to compositions and products of smooth functions ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L5] A compact subset of a Euclidean open set admits a smooth compactly supported cutoff equal to one on a neighborhood of that subset ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

[L4] Gradient: for a smooth $u$, the gradient $\nabla u$ of [[def-gr-inverse-metric-and-musical-isomorphisms]] is characterised by $\eta(\nabla u,w)=du(w)$ for every $w$, and if $T$ is a past-directed timelike vector then $-T$ is future-directed timelike.

## Verification

**Proof technique:** direct.

1.1 (The cone function.) For $q\in A$ write $v:=q-p'$, so $v=(v^0,v_{\mathrm{vec}})$ and $Q(q):=-\eta(v,v)=(v^0)^2-|v_{\mathrm{vec}}|^2$. By [L1], $Q(q)>0$ exactly when $v$ is timelike, $Q(q)=0$ exactly when $v$ is null (or zero), and the sign of $v^0$ together with [L1] identifies the future and past sides: $\{Q>0,v^0>0\}$ is the chronological future $I^+(p')$ of the flat model and $\{Q>0,v^0<0\}$ its chronological past. [L1, L2, given]

2.1 (The gradient of $Q$.) In the chart components, $dQ=2v^0\,dx^0-2\sum_iv^i\,dx^i$, and the vector field $W:=-2v^0\partial_0-2\sum_iv^i\partial_i$ satisfies $\eta(W,w)=2v^0w^0-2\sum_iv^iw^i=dQ(w)$ for all $w$, so $\nabla Q=W=-2v$ by [L4]. Consequently $\nabla Q$ is past-directed timelike exactly on $\{Q>0,v^0>0\}$, namely on $I^+(p')$, and it vanishes nowhere on the zero set of $Q$ except at the vertex $q=p'$. [step 1.1, L4]

3.1 (The smoothed bump is smooth and its gradient is past timelike where it is positive.) Define $f(q)=\varphi(Q(q))$ when $v^0(q)>0$, and $f(q)=0$ when $v^0(q)\le0$. Near every nonvertex point with $v^0=0$, one has $Q<0$, so this prescription is locally zero. On the future half-space it is the smooth composite; it extends smoothly across the null cone by flatness of $\varphi$. At the vertex, every derivative on the future side is a finite sum of polynomial factors times derivatives of $\varphi(Q)$, all tending to zero faster than any power of $|v|$; the zero extension is therefore smooth there as well. Thus $f$ is smooth everywhere [L3]. Moreover $f\ge0$ and $f>0$ exactly on $I^+(p')$ by step 1.1. Where $f>0$ one has $\nabla f=\varphi'(Q)\nabla Q$ by the chain rule; since $Q>0$ there and $\varphi'(Q)=\frac{1}{Q^2}e^{-1/Q}>0$, the gradient $\nabla f$ is a positive multiple of the past-directed timelike $\nabla Q$ of step 2.1, hence is past timelike on $\{f>0\}$. [step 1.1, step 2.1, L3]

4.1 (The normalized bump.) Since $p-p'=(\delta,0,0,0)$ is future timelike, $Q(p)=\delta^2>0$ and $f(p)>0$; thus $h_p=\chi f/f(p)$ is smooth and compactly supported for every smooth compactly supported $\chi:A\to[0,1]$. To realize the full truncated-gradient assertion, put $K=\{q:0\le v^0(q)\le\delta,\ |v_{\mathrm{vec}}(q)|\le v^0(q)\}$, the compact set $J^+(p')\cap\{x^0\le0\}$, and choose a precompact open ball $C$ containing K. By [L5] choose $\chi$ with support compactly in C and $\chi=1$ on a neighborhood of K. Then $h_p(p)=1$, and continuity gives a neighborhood with $h_p>1/2$. If $h_p(q)>0$ and $x^0(q)\le0$, future-branch positivity puts q in K, hence in the cutoff plateau; there $\nabla h_p=\nabla f/f(p)$ is past timelike by step 3.1. At points with $x^0\le0$ and $h_p=0$ the gradient vanishes by flatness on the future null boundary and by the zero definition outside the future cone. Thus the compact support, normalized value, truncated gradient and nonzero-gradient locus properties of the cone-bump construction hold. For an arbitrary other cutoff the gradient assertion remains limited to its plateau. [step 3.1, L5, given, construct, algebra]

5.1 (Summary.) The explicit data $(Q,f,h_p)$ realise the cone-bump lemma at $p'$ in the flat model: $Q$ is the exponential cone function, $f$ the smoothing of the indicator of the chronological future of $p'$, and $h_p$ the normalized compactly supported bump with $h_p(p)=1$ and past-timelike gradient in the cutoff plateau where $h_p>0$. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

- **Why the flat case is transparent.** In an inertial chart the exponential map is a translation and the squared displacement is a quadratic form, so $Q$ is an ordinary quadratic function and the only analytic input is the flatness of $\varphi$ at $0$; in a curved manifold the same computation is performed after the exponential map linearises the cone.
- **The cutoff.** The lemma's cutoff $\chi$ is not fixed by the geometry; the example exhibits the freedom (any compactly supported $\chi$ works) and confirms that the gradient assertion only concerns the region where $\chi=1$.
