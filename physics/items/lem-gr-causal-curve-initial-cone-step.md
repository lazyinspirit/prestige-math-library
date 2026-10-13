---
id: lem-gr-causal-curve-initial-cone-step
kind: lemma
title: "Future causal position vectors along a curve in a convex normal set"
status: draft
origin: session
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  [
    def-dependent-choice,
    def-countable-choice,
    lem-gr-normal-neighborhood-length-monotonicity,
    lem-gr-position-vector-differential,
    lem-gr-joint-exponential-diffeomorphism,
    lem-gr-dominating-cone-bounds,
    def-gr-normal-neighborhoods-and-position-vectors,
    thm-gr-convex-normal-neighborhoods,
    def-gr-causal-curves-and-reachability,
    def-gr-timelike-worldline-and-proper-time,
    def-causal-classification-of-lorentz-vectors,
    thm-gr-local-geodesics-and-exponential-map,
    lem-timelike-cone-has-two-convex-components,
    lem-gr-causal-curve-calculus,
    def-gr-smooth-lorentzian-objects,
    def-c-r-and-smooth-maps-between-smooth-manifolds,
    thm-smooth-dependence-of-ode-solutions-on-parameters,
    def-interval
  ]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-gr-normal-neighborhood-length-monotonicity: mathematical-premise
  lem-gr-position-vector-differential: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity
        22 (2019), article 3: the appended-timelike-geodesic argument in the
        proof of Theorem 2.9, printed pp. 29-30"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011):
        local cone structure and the timelike-geodesic smoothing argument,
        section 2.4"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the absolutely continuous causal-curve
calculus and the supplied causal results used below.

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), let $C\subseteq M$ be a strictly
convex normal set ([[thm-gr-convex-normal-neighborhoods]]), let
$q\in C$, let $T_0>0$, and let $\sigma:[0,T_0]\to C$ be a future causal curve in the
class of [[def-gr-causal-curves-and-reachability]] with $\sigma(0)=q$. Then
for every $s\in(0,T_0]$ the position vector
$$\exp_q^{-1}\bigl(\sigma(s)\bigr)\in T_qM$$
is future causal or zero. Moreover, there is $\delta\in(0,T_0]$ such that
the position vectors are nonzero for every $s\in(0,\delta]$.

## Facts & Assumptions

**Given:** A strictly convex normal set $C$, a point $q\in C$ and a future causal curve $\sigma:[0,T_0]\to C$ with $\sigma(0)=q$.

[L1] Strictly convex normal sets are normal neighborhoods of each of their points and every pair of their points is joined by a unique geodesic contained in $C$; moreover $C$ is open ([[thm-gr-convex-normal-neighborhoods]] clauses (a)-(c), [[def-gr-normal-neighborhoods-and-position-vectors]]).

[L2] For a normal neighborhood $U_q=\exp_q(W_q)$ of $q$ and a future causal curve $\tau$ in $U_q$ with position vectors $v(t)=\exp_q^{-1}(\tau(t))$: if $v(t^*)$ is future timelike, then $v(t)$ is future timelike for all later $t$ with $\tau([t^*,t])\subseteq U_q$ ([[lem-gr-normal-neighborhood-length-monotonicity]] clause (a)).

[L3] On a strictly convex normal set $C$, the inverse velocity $(q',r')\mapsto\exp_{q'}^{-1}(r')$ is smooth on all of $C\times C$ by [[lem-gr-position-vector-differential]] clause (c) and satisfies $\exp_{q'}(\exp_{q'}^{-1}(r'))=r'$.

[L4] The velocity of the geodesic $t\mapsto\exp_q(tw)$ is $d(\exp_q)_{tw}$-related to $w$ and the geodesic is future timelike for all parameters if $w$ is future timelike, by parallel transport and the continuity of the timelike cone ([[thm-gr-local-geodesics-and-exponential-map]] clause (c), [[lem-gr-normal-neighborhood-length-monotonicity]] fact [L5]).

[L5] The closure of the future timelike cone at a point is contained in the
union of the future causal cone with $\{0\}$: a limit of future timelike
vectors is future causal or zero; and the future causal cone is closed
([[lem-timelike-cone-has-two-convex-components]],
[[def-causal-classification-of-lorentz-vectors]]).

## Proof

**Proof technique:** direct.

1.1 (A past point and an appended timelike geodesic.) Let $W_q\subset T_qM$ be the star-shaped domain on which $\exp_q$ maps diffeomorphically onto $C$. Choose a future timelike $w\in W_q$ and then choose $\varepsilon>0$ so small that $-\varepsilon w\in W_q$; this follows from openness of $W_q$ at $0$. Star-shapedness implies $tw\in W_q$ for all $t\in[-\varepsilon,0]$. Thus $\eta(t):=\exp_q(tw)$ lies in $C$ on this interval. Put $q':=\eta(-\varepsilon)$; the segment runs from $q'$ to $q$ with future timelike velocity. Concatenate $\eta$ with the entire future causal curve $\sigma:[0,T_0]\to C$ to obtain a future causal curve $\beta:[-\varepsilon,T_0]\to C$ by [[lem-gr-causal-curve-calculus]] clause (d). [L1, L4, construct]

1.2 (Position vectors with respect to $q'$.) Since $C$ is convex normal and $q'\in C$, the set $C$ is a normal neighborhood of $q'$. At $t^*:=-\varepsilon/2$, the curve $\beta$ lies on the timelike geodesic $\eta$, and $\exp_{q'}^{-1}(\beta(t^*))$ is a positive multiple of the future timelike initial tangent at $q'$ of the segment from $q'$ to $q$. By [[lem-gr-normal-neighborhood-length-monotonicity]] clause (a), applied to $\beta$ based at $q'$, its position vector remains future timelike for every $t\in[t^*,T_0]$, since the whole curve segment stays in $C$. In particular $\exp_{q'}^{-1}(\sigma(s))$ is future timelike for every $s\in[0,T_0]$. [L1, L2, L4, algebra]

2.1 (Limit to $q$.) Fix $s\in(0,T_0]$. For every sufficiently small $\varepsilon>0$, step 1.2 gives that $v_\varepsilon:=\exp_{q'(\varepsilon)}^{-1}(\sigma(s))$ is future timelike, where $q'(\varepsilon)=\exp_q(-\varepsilon w)$. The pairs $(q'(\varepsilon),\sigma(s))$ converge to $(q,\sigma(s))$ in $C\times C$. By [L3] the inverse vectors converge to $\exp_q^{-1}(\sigma(s))$. The future causal cone together with zero is closed, so this limit is future causal or zero. This proves the first claim for every $s\in(0,T_0]$. [step 1.2, L3, L5, algebra]

3.1 (Nonvanishing near the initial point.) By [[lem-gr-dominating-cone-bounds]] there is an adapted chart around $q$ in which the time coordinate is strictly increasing along every future causal curve contained in the chart. Choose $\delta\in(0,T_0]$ so that $\sigma([0,\delta])$ lies in this chart. Then $x^0(\sigma(s))>x^0(q)$ for every $s\in(0,\delta]$, so $\sigma(s)\ne q$ and $\exp_q^{-1}(\sigma(s))\ne0$. This proves the second claim without inferring that a return at one time makes the entire preceding curve constant. [step 2.1, construct]

4.1 Steps 2.1 and 3.1 prove the claim. [step 2.1, step 3.1] ∎

## Remarks

- **Why a strictly convex normal set.** The proof uses only: $C$ is open, is a
  normal neighborhood of $q$ and of points $q'\ll q$ arbitrarily close to
  $q$, and contains the appended timelike segment. The strict form supplied by [[thm-gr-convex-normal-neighborhoods]]
  also supplies the smooth pair inverse used when the base point approaches $q$.

- **The gain.** The lemma converts causality of the *curve* into causality of
  *geodesic position vectors* throughout the contained curve, which is the input of
  the global maximality argument in
  [[thm-gr-normal-neighborhood-causal-cone]].
