---
id: lem-gr-causal-curve-initial-cone-step
kind: lemma
title: "The initial cone step: a future causal curve starting at a point of a convex normal set has future causal position vectors near its start"
status: draft
origin: session
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-normal-neighborhood-length-monotonicity, lem-gr-joint-exponential-diffeomorphism, def-gr-normal-neighborhoods-and-position-vectors, thm-gr-convex-normal-neighborhoods, def-gr-causal-curves-and-reachability, def-gr-timelike-worldline-and-proper-time, def-causal-classification-of-lorentz-vectors, thm-gr-local-geodesics-and-exponential-map, lem-timelike-cone-has-two-convex-components, lem-gr-causal-curve-calculus, def-gr-smooth-lorentzian-objects, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-smooth-dependence-of-ode-solutions-on-parameters, def-interval]
dependency_roles:
  lem-gr-normal-neighborhood-length-monotonicity: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the appended-timelike-geodesic argument in the proof of Theorem 2.9, printed pp. 29-30"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): local cone structure and the timelike-geodesic smoothing argument, section 2.4"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), let $C\subseteq M$ be a strictly
convex normal set ([[thm-gr-convex-normal-neighborhoods]]), let
$q\in C$ and let $\sigma:[0,T_0]\to C$ be a future causal curve in the
class of [[def-gr-causal-curves-and-reachability]] with $\sigma(0)=q$. Then
there is $\delta\in(0,T_0]$ such that, for every $s\in(0,\delta]$, the
position vector
$$\exp_q^{-1}\bigl(\sigma(s)\bigr)\in T_qM$$
is future causal. Moreover, if $\sigma$ is not constant on any interval
$[0,s]$, the position vectors for $s\in(0,\delta]$ are nonzero.

## Facts & Assumptions

**Given:** A strictly convex normal set $C$, a point $q\in C$ and a future causal curve $\sigma:[0,T_0]\to C$ with $\sigma(0)=q$.

[L1] Convex normal sets are normal neighborhoods of each of their points and every pair of their points is joined by a unique geodesic contained in $C$; moreover $C$ is open ([[thm-gr-convex-normal-neighborhoods]] clauses (a)-(c), [[def-gr-normal-neighborhoods-and-position-vectors]]).

[L2] For a normal neighborhood $U_q=\exp_q(W_q)$ of $q$ and a future causal curve $\tau$ in $U_q$ with position vectors $v(t)=\exp_q^{-1}(\tau(t))$: if $v(t^*)$ is future timelike, then $v(t)$ is future timelike for all later $t$ with $\tau([t^*,t])\subseteq U_q$ ([[lem-gr-normal-neighborhood-length-monotonicity]] clause (a)).

[L3] The two-point inverse velocity $(q,r)\mapsto v(q,r)$ of [[lem-gr-joint-exponential-diffeomorphism]] clause (c) is smooth where defined, and $\exp_q(v(q,r))=r$.

[L4] The velocity of the geodesic $t\mapsto\exp_q(tw)$ is $d(\exp_q)_{tw}$-related to $w$ and the geodesic is future timelike for all parameters if $w$ is future timelike, by parallel transport and the continuity of the timelike cone ([[thm-gr-local-geodesics-and-exponential-map]] clause (c), [[lem-gr-normal-neighborhood-length-monotonicity]] fact [L5]).

[L5] The closure of the future timelike cone at a point is contained in the
union of the future causal cone with $\{0\}$: a limit of future timelike
vectors is future causal or zero; and the future causal cone is closed
([[lem-timelike-cone-has-two-convex-components]],
[[def-causal-classification-of-lorentz-vectors]]).

## Proof

**Proof technique:** direct.

1.1 (A past point and an appended timelike geodesic.) Fix a future timelike vector $w\in T_qM$ with $w\in W_q$ for the star-shaped domain $W_q$ of $C$ as a normal neighborhood of $q$, and choose $\varepsilon>0$ so small that the geodesic $\eta(t):=\exp_q(tw)$, $t\in[-\varepsilon,0]$, has image in $C$; this is possible because $C$ is open, $q\in C$ and $W_q$ is star-shaped, so $(1-t)w\in W_q$ for $t\in[0,\varepsilon]$. Put $q':=\eta(-\varepsilon)=\exp_q(-\varepsilon w)$, so that $q'$ lies in the past of $q$ and the segment $\eta$ runs from $q'$ to $q$ with future timelike velocity. Choose $\delta>0$ such that $\sigma([0,\delta])\subseteq C$; the concatenation $\beta:[-\varepsilon,\delta]\to C$, $\beta(t):=\eta(t)$ for $t\le0$ and $\beta(t):=\sigma(t)$ for $t\ge0$, is a future causal curve in the class of [[def-gr-causal-curves-and-reachability]] ([[lem-gr-causal-curve-calculus]] clause (d)). [L1, L4, construct]

1.2 (Position vectors with respect to $q'$.) Since $C$ is a convex normal set and $q'\in C$, $C$ is a normal neighborhood of $q'$ with star-shaped domain $W_{q'}:=\{u\in\mathcal E_{q'}:\exp_{q'}(tu)\in C\ \forall t\in[0,1]\}$ ([[thm-gr-convex-normal-neighborhoods]] clause (a)). The position vector of $\beta(t)$ with respect to $q'$ is $\exp_{q'}^{-1}(\beta(t))$, defined for all $t\in[-\varepsilon,\delta]$ because $\beta$ takes values in $C$. At $t^*:=-\varepsilon/2$ the curve $\beta$ is on the timelike geodesic $\eta$, so $\exp_{q'}^{-1}(\beta(t^*))=(\varepsilon/2)\,u_0$ where $u_0\in T_{q'}M$ is the future timelike initial velocity of the geodesic from $q'$ through $q$; hence this position vector is future timelike. By [L2] applied with base point $q'$, the position vectors $\exp_{q'}^{-1}(\beta(t))$ are future timelike for every $t\in[t^*,\delta]$. In particular, for every $s\in(0,\delta]$, the geodesic connecting $q'$ to $\sigma(s)$ is future timelike. [L1, L2, L4, algebra]

2.1 (Limit to $q$.) For every $s\in(0,\delta]$ and every small $\varepsilon>0$ the vector $v_\varepsilon:=\exp_{q'}^{-1}(\sigma(s))$, with $q'=q'(\varepsilon)=\exp_q(-\varepsilon w)$, is defined because $\sigma(s)\in C$, and it is future timelike by step 1.2. As $\varepsilon\downarrow0$ one has $q'(\varepsilon)\to q$; the pairs $(q'(\varepsilon),\sigma(s))$ converge to $(q,\sigma(s))$, and in a smaller convex normal neighborhood of $q$ containing the compact set $\sigma([0,\delta])$ the two-point inverse is smooth [L3], so $v_\varepsilon\to\exp_q^{-1}(\sigma(s))$ in the coordinates. By [L5] the limit is future causal or zero. [step 1.2, L3, L5, algebra]

3.1 (Nonvanishing.) If $\exp_q^{-1}(\sigma(s))=0$ for some $s\in(0,\delta]$, then $\sigma(s)=q$; the subinterval of $[0,\delta]$ on which $\sigma=q$ is a closed interval containing $0$ and $s$, so $\sigma$ is constant on the nondegenerate interval $[0,s]$. The final assertion follows. [step 2.1, algebra]

4.1 Steps 2.1 and 3.1 prove the claim. [step 2.1, step 3.1] ∎

## Remarks

- **Why a strictly convex normal set.** The proof uses only: $C$ is open, is a
  normal neighborhood of $q$ and of points $q'\ll q$ arbitrarily close to
  $q$, and contains the appended timelike segment. Any convex normal
  neighborhood of $q$ suffices; strict convexity is the form supplied by
  [[thm-gr-convex-normal-neighborhoods]].

- **The gain.** The lemma converts causality of the *curve* into causality of
  *geodesic position vectors* near the starting point, which is the input of
  the global maximality argument in
  [[thm-gr-normal-neighborhood-causal-cone]].
