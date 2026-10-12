---
id: lem-gr-time-separation-maximizers
kind: lemma
title: "Time separation in a globally hyperbolic manifold: finiteness, existence of maximizing geodesics and the radial formula on causally convex normal regions"
status: draft
origin: session
domain: mathematics
dependency_level: 22
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-timelike-worldline-and-proper-time, thm-gr-length-upper-semicontinuity, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-globally-hyperbolic-causal-structure, lem-gr-strong-causality-compact-length-bound, thm-gr-auxiliary-complete-riemannian-metric, lem-gr-basic-limit-curve, thm-gr-limit-curve-two-endpoints, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, lem-gr-normal-neighborhood-length-monotonicity, lem-gr-joint-exponential-diffeomorphism, def-gr-normal-neighborhoods-and-position-vectors, lem-gr-parallel-transport-and-geodesic-speed, def-gr-smooth-lorentzian-objects, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  thm-gr-length-upper-semicontinuity: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  lem-gr-strong-causality-compact-length-bound: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-basic-limit-curve: mathematical-premise
  thm-gr-limit-curve-two-endpoints: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-normal-neighborhood-length-monotonicity: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the time separation tau_q and the radial formula (3.12) in the proof of Theorem 3.6, printed pp. 18-19"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: continuous time separation and existence of maximizing geodesics, Theorems 2.37, 2.41 and 4.13 printed pp. 41-44 and 118"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): maximising geodesics and the time separation on globally hyperbolic space-times, sections 2.7-2.8 printed pp. 40-44"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
globally hyperbolic time-oriented smooth Lorentzian four-manifold
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c)), let
$L_g$ be the Lorentzian length functional on future causal curves
([[def-gr-timelike-worldline-and-proper-time]]), and for $q\in M$ define the
**time separation**
$$\tau_q:M\to[0,\infty),\qquad \tau_q(r):=\sup\{L_g(\alpha):\ \alpha \text{ is a future causal curve from } r \text{ to } q\},$$
the supremum over the empty set being $0$; thus $\tau_q(r)>0$ exactly for
$r\in I^-(q)$ and $\tau_q(r)=0$ for $r\notin J^-(q)$.

**(a)** For every $r\in J^-(q)$ one has $0\le\tau_q(r)<\infty$, and the
supremum is attained: there is a future causal curve $\gamma$ from $r$ to $q$
with $L_g(\gamma)=\tau_q(r)$. Every such **maximizer** is, up to monotone
reparametrization, a causal geodesic, and its image lies in the compact set
$J^+(r)\cap J^-(q)$.

**(b)** Let $V$ be a strictly convex normal neighbourhood of $q$ (as produced
by [[thm-gr-convex-normal-neighborhoods]]) and let $W\subseteq V$ be open and
causally convex in $M$ (every causal curve in $M$ with both endpoints in $W$
is contained in $W$), with $\overline W$ compact and $q\in W$. Then for every
$r\in W\cap I^-(q)$,
$$\tau_q(r)=\sqrt{-g_q\bigl(\exp_q^{-1}(r),\exp_q^{-1}(r)\bigr)},$$
so $\tau_q$ is smooth on $W\cap I^-(q)$ and extends continuously by
$\tau_q(q)=0$ and $\tau_q(r)=0$ for $r\in W\setminus J^-(q)$.

**(c)** On every compact set $K\subseteq M$ the function $\tau_q$ is upper
semicontinuous in the following strong form: for every sequence $r_n\to r$ in
$K$ one has $\limsup_n\tau_q(r_n)\le\tau_q(r)$. If moreover $r\in I^-(q)$,
then $\tau_q(r_n)\to\tau_q(r)$ for every sequence $r_n\to r$.

## Facts & Assumptions

**Given:** a globally hyperbolic spacetime, a point $q$, and the sets and sequences of the clauses.

[L1] Auxiliary metric and compact-truncation: for every compact $K\subseteq M$ there is $d(K)$ with every causal curve with image in $K$ having $h$-arclength at most $L(K)$, and Lorentzian length of a causal curve is bounded by a constant times its $h$-arclength on compact sets; $J^+(r)\cap J^-(q)$ is compact ([[lem-gr-strong-causality-compact-length-bound]], [[thm-gr-auxiliary-complete-riemannian-metric]], [[lem-gr-globally-hyperbolic-causal-structure]] clause (b) with [[thm-gr-cauchy-surface-implies-globally-hyperbolic]]).

[L2] Limit curves and length upper semicontinuity: causal curves in a compact diamond with common initial point have uniformly convergent subsequences with causal limits, and Lorentzian length is upper semicontinuous under uniform convergence of causal curves ([[lem-gr-basic-limit-curve]], [[thm-gr-limit-curve-two-endpoints]], [[thm-gr-length-upper-semicontinuity]] clause (b)).

[L3] Convex normal neighbourhoods: every point has a strictly convex normal neighbourhood; within it causal reachability is the exponential cone, the joining segments are geodesics contained in it, and for a causal curve $\sigma$ in it from $a$ to $b$ one has $L_g(\sigma)\le\sqrt{-g_a(\exp_a^{-1}b,\exp_a^{-1}b)}$, with equality exactly for the radial geodesic ([[thm-gr-convex-normal-neighborhoods]], [[thm-gr-normal-neighborhood-causal-cone]] clauses (b) and (d), [[lem-gr-normal-neighborhood-length-monotonicity]] clause (b), [[def-gr-normal-neighborhoods-and-position-vectors]], [[lem-gr-joint-exponential-diffeomorphism]]).

[L4] Geodesics and maximizers: a causal curve realizes the time separation between its endpoints only if it has no timelike part and no corner and is a causal geodesic, as in the standard argument locating a maximizing curve ([[thm-gr-length-upper-semicontinuity]] clause (a) with [[thm-gr-normal-neighborhood-causal-cone]] clauses (b) and (d)); the speed $g(\gamma',\gamma')$ of a geodesic is constant ([[lem-gr-parallel-transport-and-geodesic-speed]]).

## Proof

**Proof technique:** direct.

1.1 (Finiteness.) Let $r\in J^-(q)$ and let $\alpha$ be any future causal curve from $r$ to $q$. Every point of $\alpha$ lies in $J^+(r)\cap J^-(q)$, which is compact, so by [L1] the $h$-arclength of $\alpha$ and hence $L_g(\alpha)$ is bounded by a constant depending only on $r,q$; therefore $\tau_q(r)<\infty$. If $r\notin J^-(q)$ no such curve exists and $\tau_q(r)=0$; if $r=q$ the constant curve gives $\tau_q(q)=0\le\tau_q(r)$; and $\tau_q(r)>0$ iff there is a future timelike curve from $r$ to $q$, i.e. $r\in I^-(q)$. [given, L1, algebra]

2.1 (Attainment and geodesy of maximizers.) Let $r\in J^-(q)$ and let $\alpha_n$ be causal curves from $r$ to $q$ with $L_g(\alpha_n)\to\tau_q(r)$. All images lie in the compact set $J^+(r)\cap J^-(q)$; reparametrizing by $h$-arclength from $r$ and applying [L2] gives a subsequence converging uniformly to a future causal curve $\gamma$ from $r$ to $q$, and upper semicontinuity of length [L2] gives $L_g(\gamma)\ge\limsup L_g(\alpha_n)=\tau_q(r)$, so $L_g(\gamma)=\tau_q(r)$. If $\gamma$ had a timelike point or a corner, replacing a small subsegment by the radial segment in a convex normal neighbourhood ([L3], [[thm-gr-normal-neighborhood-causal-cone]] (b)) would produce a causal curve from $r$ to $q$ of strictly larger length, contradicting maximality; hence every maximizer is a causal geodesic up to monotone reparametrization, and its image lies in $J^+(r)\cap J^-(q)$. [step 1.1, L2, L3, L4, contradiction]

3.1 (The radial formula.) Let $V,W,q$ be as in clause (b) and let $r\in W\cap I^-(q)$. Let $\gamma$ be a maximizer from $r$ to $q$ (step 2.1). Since $W$ is causally convex, $\gamma\subseteq W\subseteq V$; by [L3] applied in $V$ with base point $q$, every causal curve in $V$ from $r$ to $q$ has length at most $\sqrt{-g_q(\exp_q^{-1}(r),\exp_q^{-1}(r))}$, with equality exactly for the radial geodesic, which lies in $V$; since all competitors from $r$ to $q$ lie in $W\subseteq V$ and the radial segment itself is a competitor with that length, $\tau_q(r)=\sqrt{-g_q(\exp_q^{-1}(r),\exp_q^{-1}(r))}$. The right-hand side is smooth on $I^-(q)\cap W$ by [L3] and the smoothness of the inverse exponential map; its continuous extension by $0$ at points of $W\setminus J^-(q)$ and at $q$ is exactly $\tau_q$ there by step 1.1. [step 2.1, L1, L3, algebra]

4.1 (Upper semicontinuity on compact sets.) Let $r_n\to r$ in a compact $K$ and let $\alpha_n$ be causal curves from $r_n$ to $q$ with $L_g(\alpha_n)\ge\tau_q(r_n)-1/n$. Passing to the compact diamond $J^+(K')\cap J^-(q)$ for a compact $K'$ containing the $r_n$ ([L1]), [L2] gives a subsequence of the $\alpha_n$, reparametrized by $h$-arclength, converging uniformly to a causal curve from $r$ to $q$, and $\limsup_n\tau_q(r_n)\le\limsup_nL_g(\alpha_n)\le L_g(\gamma)\le\tau_q(r)$ by upper semicontinuity [L2] and step 2.1. If $r\in I^-(q)$ then a maximizer $\gamma_r$ from $r$ to $q$ exists (step 2.1); since $I^-(q)$ is open, for $n$ large the inner segment of $\gamma_r$ can be joined to $r_n$ by a short timelike segment inside $I^-(q)$, giving $\liminf_n\tau_q(r_n)\ge\tau_q(r)$ by letting the inner cut shrink; combined with the upper bound this gives continuity at $r$. [step 2.1, L1, L2, algebra] ∎

## Remarks

Clause (b) is the radial formula (3.12) of Sbierski's paper; clause (a) is the classical existence of maximizing causal geodesics among causal curves with fixed endpoints in a globally hyperbolic spacetime, and clause (c) is the continuous-dependence statement used in [[lem-gr-spacelike-restart-hypersurface]] to conclude that the level set $\{\tau_q=\tau_0\}$ is a smooth hypersurface.
