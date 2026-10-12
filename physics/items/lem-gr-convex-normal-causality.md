---
id: lem-gr-convex-normal-causality
kind: lemma
title: "Pointwise local causality: closed cones, openness of the local chronological future, no local closed causal curves, corner smoothing and closedness of the local causal relation"
status: draft
origin: session
domain: mathematics
dependency_level: 18
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-normal-neighborhood-causal-cone, lem-gr-null-position-vector-forces-null-velocity, lem-gr-normal-neighborhood-length-monotonicity, thm-gronwall-integral-inequality, thm-gr-convex-normal-neighborhoods, def-gr-normal-neighborhoods-and-position-vectors, def-gr-causal-curves-and-reachability, def-gr-timelike-worldline-and-proper-time, def-gr-future-and-past-sets, lem-gr-observer-pairing-with-future-causal-vectors, lem-timelike-cone-has-two-convex-components, thm-gr-local-geodesics-and-exponential-map, def-gr-smooth-lorentzian-objects, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real, def-interval]
dependency_roles:
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-null-position-vector-forces-null-velocity: mathematical-premise
  lem-gr-normal-neighborhood-length-monotonicity: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-future-and-past-sets: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorem 2.9, Corollary 2.10 and Theorem 2.11 printed pp. 29-32"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Proposition 2.4.5, Proposition 2.4.7 and Corollary 2.4.10, printed pp. 20-24"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$. For every $x\in M$ there is an open
neighborhood $B$ of $x$, a strictly convex normal ball satisfying the
hypotheses of [[thm-gr-normal-neighborhood-causal-cone]] with base point
$x$, such that, writing $J_B(x)$, $I_B(x)\subseteq B$ for the endpoints in
$B$ of future causal, respectively future timelike, curves with image in
$B$ starting at $x$, and $\mathcal C^+,\mathcal T^+,\mathcal N^+$ for the
future causal or zero, future timelike, and future null nonzero vectors of
$\exp_x^{-1}(B)$:

**(a)** $J_B(x)=\exp_x(\mathcal C^+)$, $I_B(x)=\exp_x(\mathcal T^+)$, and
$J_B(x)\setminus(I_B(x)\cup\{x\})=\exp_x(\mathcal N^+)$;

**(b)** $J_B(x)$ and $J_B(x)\setminus I_B(x)$ are closed in $B$ and
$I_B(x)$ is open in $B$;

**(c)** there is no nonconstant future causal curve $\gamma:[0,1]\to B$
with $\gamma(0)=\gamma(1)=x$;

**(d) corner smoothing.** if $\gamma:[0,1]\to B$ is future causal with
$\gamma(0)=x$ and there is $t_0$ at which $\gamma'(t_0)$ is future
timelike, then $\gamma(1)\in I_B(x)$;

**(e) closed relation at fixed base.** if $q_n\in J_B(x)$ and
$q_n\to q\in B$, then $q\in J_B(x)$. The same holds for $J_B(x)\setminus I_B(x)$, the future null boundary including the vertex $x$. A sequence in $I_B(x)$ may have a null or zero limit, and a sequence in $\exp_x(\mathcal N^+)$ may converge to $x$; in either case its limit remains in $J_B(x)$.

## Facts & Assumptions

**Given:** A point $x\in M$ and a cone-theorem ball around $x$ as in [[thm-gr-convex-normal-neighborhoods]] and [[thm-gr-normal-neighborhood-causal-cone]].

[L1] The cone theorem holds in $B$ with base $x$: clauses (a)-(d) of [[thm-gr-normal-neighborhood-causal-cone]] (future causal curves from $x$ have future causal or zero position vectors; the cone characterizations; null rigidity; length maximality).


[L3] The future causal cone in a tangent space is closed, the future timelike cone is open, and a limit of future timelike vectors is future causal or zero ([[lem-timelike-cone-has-two-convex-components]], [[lem-gr-observer-pairing-with-future-causal-vectors]]).

## Proof

**Proof technique:** direct.

1.1 (Existence of $B$ and the cone characterizations.) Choose a point-normal exponential-coordinate ball around $x$ with $\nabla u_x^0$ past timelike on it; the gradient is past timelike at $x$, and this is an open condition, so the ball of [[thm-gr-convex-normal-neighborhoods]] can be shrunk inside that region. The cone theorem now applies to every strictly convex normal set; it gives the cone characterizations in this chosen $B$ with base point $x$. The temporal-coordinate property is used separately below and is not a hypothesis of the cone theorem. [L1, given, construct]

1.2 (No closed causal curves.) In the exponential chart $u$ of [L1], $\nabla u^0$ is past timelike throughout $B$. Thus $du^0(z)=g(\nabla u^0,z)>0$ for every nonzero future causal tangent $z$, by [L3]. Along a future causal curve the locally absolutely continuous composite $u^0\circ\gamma$ therefore has positive derivative almost everywhere. Integrating on $[0,1]$ gives $u^0(\gamma(1))>u^0(\gamma(0))$, so the endpoints cannot coincide. This proves (c) and also shows that a curve from $x$ has nonzero position vector at every positive parameter. [L1, L3, given, algebra]

2.1 (Closedness and openness.) Under $\exp_x|_{W_x}$, the set $J_B(x)$ corresponds to the relatively closed cone $\{v\in W_x:g_x(v,v)\le0,\ g_x(v,N_x)\le0\}$, while $J_B(x)\setminus I_B(x)$ corresponds to $\{v\in W_x:g_x(v,v)=0,\ g_x(v,N_x)\le0\}$ including $v=0$. The future timelike cone is relatively open in $W_x$. The exponential map is a homeomorphism, so these facts prove (b) and the closed-set assertions of (e). Any limit of points in $I_B(x)$ or $\exp_x(\mathcal N^+)$ still belongs to the closed set $J_B(x)$; the limit need not stay in either of those smaller sets. [step 1.1, L1, L3, given, algebra]

2.2 (Corner smoothing.) Let $\gamma$ have a future timelike derivative at $t_0\in[0,1]$ (with the appropriate one-sided derivative at an endpoint). Its final position vector is future causal by [L1], and nonzero by step 1.2. If that vector were null, [L1]'s null rigidity, with the nonvanishing supplied by step 1.2, would give $\gamma(t)=\exp_x(\varphi(t)v_0)$ on $[0,1]$ for a fixed future null $v_0$. The coefficient $\varphi$ is a linear coordinate of the smooth inverse exponential applied to $\gamma$, and hence is differentiable at $t_0$. Differentiating gives $\gamma'(t_0)=\varphi'(t_0)d(\exp_x)_{\varphi(t_0)v_0}(v_0)$, a null or zero vector by the radial-geodesic character in [L1], contradicting its timelike character. Thus the final position is future timelike, proving (d). [step 1.1, step 1.2, L1, given, algebra]

3.1 Claims (a)-(e) are the preceding steps, with (e) from the closedness step. [step 1.1, step 2.1, step 1.2, step 2.2] ∎

## Remarks

- **Locality and use.** All statements are about one small ball $B$ and one
  base point $x$; in the downstream arguments they are applied at the
  finitely many base points that occur in a fixed compact region, and the
  openness of $I_B(x)$ together with the closedness of $J_B(x)$ is exactly
  the local input used in [[thm-gr-cauchy-surface-implies-globally-hyperbolic]]
  and [[lem-gr-globally-hyperbolic-causal-structure]].

- **The closedness of $J_B(x)$ is not asserted for the relation with
  varying base point.** That stronger statement is proved where it is used,
  from the limit curve theorem ([[thm-gr-limit-curve-two-endpoints]]).
