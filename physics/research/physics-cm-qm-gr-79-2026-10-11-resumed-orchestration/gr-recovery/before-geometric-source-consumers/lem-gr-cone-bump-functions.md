---
id: lem-gr-cone-bump-functions
kind: lemma
title: "Cone bumps: for every point of a Cauchy level there is a smooth bump with past timelike gradient on the truncated past cone"
status: draft
origin: session
domain: mathematics
dependency_level: 25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-volume-time-function, lem-gr-compact-future-cone-intersections, lem-gr-globally-hyperbolic-causal-structure, def-gr-causal-conditions-and-global-hyperbolicity, thm-gr-convex-normal-neighborhoods, lem-gr-joint-exponential-diffeomorphism, def-gr-normal-neighborhoods-and-position-vectors, thm-gr-lorentz-gauss-lemma-and-normal-maximum, def-the-standard-flat-function, thm-the-standard-flat-function-is-smooth-and-flat-at-zero, thm-chain-rule-for-total-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds, def-differential-of-a-smooth-map, def-gr-inverse-metric-and-musical-isomorphisms, def-causal-classification-of-lorentz-vectors, lem-timelike-cone-has-two-convex-components, def-gr-observer-and-rest-space, thm-gr-local-geodesics-and-exponential-map, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-causal-curve-calculus, lem-gr-push-up-rule, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, def-smooth-partition-of-unity-subordinate-to-an-open-cover, def-continuity-real, def-gr-smooth-lorentzian-objects, def-countable-choice, thm-gr-auxiliary-complete-riemannian-metric, lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric, def-riemannian-distance-on-a-connected-manifold]
dependency_roles:
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  thm-gr-volume-time-function: mathematical-premise
  lem-gr-compact-future-cone-intersections: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  thm-gr-lorentz-gauss-lemma-and-normal-maximum: mathematical-premise
  def-the-standard-flat-function: mathematical-premise
  thm-the-standard-flat-function-is-smooth-and-flat-at-zero: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-euclidean-bump-for-a-compact-set-inside-an-open-set: mathematical-premise
  def-smooth-partition-of-unity-subordinate-to-an-open-cover: mathematical-premise
  def-continuity-real: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric: mathematical-premise
  def-riemannian-distance-on-a-connected-manifold: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): the smoothing construction of the volume/time proof (Theorem 2.11.1 and the discussion following it), printed pp. 59-60; the light-cone smoothing appears in the same tradition, compare the proof sketch in E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019) 3, Theorem 4.120 printed pp. 147-148"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "R. Geroch, Domain of dependence, Journal of Mathematical Physics 11 (1970) 437-449: the volume-function construction underlying the smooth-step arguments; E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019) 3, Section 4.5 (time and temporal functions) printed pp. 142-148"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $(M,g,N)$ be a globally hyperbolic
time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c)), let $t$
be the volume time function of [[thm-gr-volume-time-function]] with Cauchy
levels $S_c=t^{-1}(c)$, and let $a<b$ be real numbers. Then for every $p\in
S_b$ and every prescribed $\delta>0$ there exist

- a point $p'\in M$ with $p'\ll p$ and
  $$J^+(p')\cap J^-(S_b)\subseteq C$$
  for some strictly convex normal neighborhood $C$ of $p$ with
  $\overline C$ compact, $\overline C\subseteq I^+(S_a)=\{t>a\}$ and
  $\operatorname{diam}_h(C)<\delta$, where $h$ denotes the auxiliary
  complete Riemannian metric of
  [[thm-gr-auxiliary-complete-riemannian-metric]] and
  $\operatorname{diam}_h$ its Riemannian diameter
  ([[def-riemannian-distance-on-a-connected-manifold]]), and

- a smooth function $h_p:M\to[0,\infty)$ such that

**(a)** $h_p$ has compact support contained in $C$; in particular $h_p$ is
smooth with $h_p=0$ on $\{t\le a\}$, and $0\le h_p$;

**(b)** $h_p(p)=1$, and $\{h_p>1/2\}$ is a neighborhood of $p$;

**(c)** $\nabla h_p$ is past timelike at every point of $\{h_p>0\}\cap
J^-(S_b)$;

**(d)** the support of $\nabla h_p$ meets $J^-(S_b)$ only inside
$\{h_p>0\}$; more precisely, $\{h_p>0\}\cap J^-(S_b)=
\{f>0\}\cap J^-(S_b)$ where $f$ is the exponential cone function on $C$
constructed below, and on a neighborhood of every point of that set the
cutoff used below is identically one.

## Facts & Assumptions

**Given:** A globally hyperbolic $(M,g,N)$ with volume time $t$ ([[thm-gr-volume-time-function]]), real numbers $a<b$, and a point $p\in S_b$.

[L1] $t$ is continuous, strictly increasing along causal relations, its levels $S_c$ are Cauchy hence acausal sets, and $I^+(S_a)=\{t>a\}$, $J^\pm(S_b)=\{t\gtrless b\}$ with $J^+(x)$ and $J^-(S_b)$ closed; for compact $K$ the set $J^+(K)\cap J^-(S_b)$ is compact ([[thm-gr-volume-time-function]] clauses (b)-(d), [[lem-gr-compact-future-cone-intersections]], [[lem-gr-globally-hyperbolic-causal-structure]] clauses (a) and (b)).

[L2] Strictly convex normal neighborhoods: every point has arbitrarily small strictly convex normal neighborhoods $C$; on $C$ the exponential $\exp_q:W_q\to C$ is a diffeomorphism for every $q\in C$, the unique geodesic segment in $C$ joins any two points, and the position vector $P(q,q')=d(\exp_q)_{v}(v)$, $v=\exp_q^{-1}(q')$, is defined with $g_{q'}(P,P)=g_q(v,v)$ ([[thm-gr-convex-normal-neighborhoods]] clauses (a)-(c), [[def-gr-normal-neighborhoods-and-position-vectors]], [[lem-gr-joint-exponential-diffeomorphism]]).

[L3] Gauss lemma: for the smooth function $Q:C\to\mathbb R$, $Q(q'):=-g_{q}(v,v)$ with $v=\exp_q^{-1}(q')$, one has $\nabla Q=-2P(q,q')$ (the gradient being that of [[def-gr-inverse-metric-and-musical-isomorphisms]]), and the causal character of $P(q,q')$ equals that of $v$ ([[thm-gr-lorentz-gauss-lemma-and-normal-maximum]]).

[L4] The standard flat function $\varphi(t):=e^{-1/t}$ for $t>0$ and $\varphi(t):=0$ for $t\le0$ is smooth with all derivatives vanishing at $0$ ([[def-the-standard-flat-function]], [[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]); consequently, if $Q$ is smooth on a manifold, vanishes exactly on a closed set on whose complement $Q>0$, and has $\nabla Q\ne0$ off the zero set, then $\varphi\circ Q$ is smooth with $\nabla(\varphi\circ Q)=\varphi'(Q)\nabla Q$ where $Q>0$; at an isolated zero of $Q$ of the form $Q(z)=-\|z\|^2+O(\|z\|^3)$ the composition is smooth with vanishing derivatives at the zero, because every derivative of $\varphi\circ Q$ is a finite sum of products of derivatives of $\varphi$ at $Q$ (each a rational function of $1/Q$ times $\varphi(Q)$) with derivatives of $Q$, and $Q\le-c\|z\|^2$ near the zero forces exponential decay in $1/\|z\|^2$ against every polynomial growth ([[thm-chain-rule-for-total-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-continuity-real]]).

[L5] Smooth cutoffs: for every compact $K$ and open $O$ with $K\subseteq O$ there is a smooth $\chi:M\to[0,1]$ with $\chi=1$ on a neighborhood of $K$ and $\operatorname{supp}\chi\subseteq O$; such $\chi$ can be assembled from finitely many Euclidean bumps transferred by charts, so no choice beyond $\mathrm{AC}_\omega$ is used ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

[L6] Timelike and causal displacement: $p'\ll p$ implies $p\in I^+(p')$; the future timelike cone in each tangent space is open and convex and its closure contains the future causal cone; a smooth curve with future timelike velocity everywhere is a future timelike curve ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-gr-observer-and-rest-space]], [[thm-gr-local-geodesics-and-exponential-map]], [[lem-gr-parallel-transport-and-geodesic-speed]] clause 3, [[lem-gr-causal-curve-calculus]] clause (c)).

[L7] Diameters of small chart balls: $h$ is a smooth Riemannian metric on $M$ and $d_h$ its Riemannian distance ([[thm-gr-auxiliary-complete-riemannian-metric]] clause (a), [[def-riemannian-distance-on-a-connected-manifold]]); on a compact subset $K$ of a chart the metric $h$ is comparable with the Euclidean metric, $h(v,v)\le C_K|v|_{\mathrm e}^2$ for a finite constant $C_K$ depending on $K$ ([[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]]). Fix a Euclidean chart ball $E_{\rho_0}$ around $p$ and let $C$ be the constant of the comparison on its closure; then for every $0<\rho\le\rho_0$ the $h$-diameter of the concentric ball $E_\rho$ is at most $2\sqrt C\rho$, because the $h$-length of a curve in $E_\rho$ is at most $\sqrt C$ times its Euclidean length and any two points of $E_\rho$ are joined there by a straight segment of Euclidean length at most $2\rho$.

## Proof

**Proof technique:** direct.

1.1 (A truncated cone inside a small convex normal neighborhood.) Since $b>a$, the point $p\in S_b$ satisfies $t(p)=b>a$, so $p\in I^+(S_a)$ by [L1]. Let $\delta>0$ be prescribed. Choose a Euclidean chart ball $E_{\rho_0}$ around $p$ with compact closure in $I^+(S_a)$, let $C_0$ be the comparison constant of [L7] on its closure, and choose $0<\rho\le\rho_0$ with $2\sqrt{C_0}\rho<\delta$. By [L2] there is a strictly convex normal neighborhood $C$ of $p$ with $\overline C$ compact and $\overline C\subseteq E_\rho\subseteq I^+(S_a)$; then $\operatorname{diam}_h(C)\le\operatorname{diam}_h(E_\rho)\le2\sqrt{C_0}\rho<\delta$ by [L7]. We claim that some $p'\ll p$ satisfies $J^+(p')\cap J^-(S_b)\subseteq C$. Suppose not: choose a sequence $p'_k\to p$ along a future timelike curve with $p'_k\ll p$ and $p'_k\in C$, and points $r_k\in(J^+(p'_k)\cap J^-(S_b))\setminus C$. For each $k$ the causal segment from $p'_k$ to $r_k$ leaves $C$, so it has a first exit point $q_k\in\partial C\cap J^+(p'_k)\cap J^-(S_b)$. Fix $r\ll p$ with $r\le p'_k$ for all large $k$ (take $r$ before the sequence on the timelike curve through $p$); then $q_k\in J^+(r)\cap J^-(S_b)$, which is compact by [L1], so a subsequence $q_k\to q\in J^+(r)\cap J^-(S_b)\cap\partial C$. Since $p'_k\to p$ and $p'_k\le q_k$, closedness of the causal relation [L1] gives $p\le q$. Also $q\in J^-(S_b)$ gives some $z\in S_b$ with $q\le z$. Monotonicity of $t$ [L1] gives $b=t(p)\le t(q)\le t(z)=b$, so $t(q)=b$, that is, $q\in S_b$; acausality of $S_b$ [L1] then forces $q=z$, and $p\le q$ with $p,q\in S_b$ likewise forces $q=p$. Hence $p=q\in\partial C$, contradicting $p\in C$ with $C$ open. This proves the claim. [L1, L2, L7, given, construct]

2.1 (The cone function.) Fix $p'$ and $C$ with $K:=J^+(p')\cap J^-(S_b)\subseteq C$ as in step 1.1. On $C$ define $v(q'):=\exp_{p'}^{-1}(q')$ and $$Q:C\to\mathbb R,\qquad Q(q'):=-g_{p'}\bigl(v(q'),v(q')\bigr),$$ a smooth function [L2]. Then $Q>0$ exactly on the set of points of $C$ lying in the chronological future of $p'$, $Q=0$ exactly on the null cone of $p'$ in $C$, and $Q<0$ outside; $Q$ vanishes exactly at $p'$ and on the null cone, and $\nabla Q=-2P(p',q')\ne0$ off the zero set, while near the vertex $p'$ one has $Q(q')=-\|v(q')\|^2+O(\|v(q')\|^3)$ for any Euclidean norm on $T_{p'}M$ [L3]. Let $\varphi$ be the standard flat function and define $$f:M\to[0,\infty),\qquad f(q'):=\varphi\bigl(Q(q')\bigr)\ \text{for }q'\in C,\qquad f:=0\text{ outside }C.$$ By [L4] the function $f$ is smooth: away from the zero set of $Q$ this is the composition of smooth functions and $f=0$ on the open set $\{Q<0\}$; on the null cone $\nabla Q\ne0$, so $f$ is the composition of the flat function with a function of nonvanishing gradient; at the vertex the decay estimate of [L4] applies. Moreover $f\ge0$, $f>0$ exactly on $I^+_C(p')=\{Q>0\}$, and $f(p)>0$ because $p'\ll p$. [L2, L3, L4, given, construct]

3.1 (The gradient is past timelike.) Where $f>0$ one has $\nabla f=\varphi'(Q)\nabla Q$ with $\varphi'(Q)>0$ [L4], hence $\nabla f=-2\varphi'(Q)\,P(p',q')$ by [L3]; now $q'\in I^+(p')$ means $v$ is future timelike, so $P(p',q')$ is future timelike with the same causal character [L2, L3], and a positive multiple of its negative is past timelike. Hence $\nabla f$ is past timelike at every point where $f>0$. [step 2.1, L3, L4, L6]

4.1 (The cutoff and the bump.) Let $K=J^+(p')\cap J^-(S_b)$, a compact subset of the open set $C$ by step 1.1 and [L1]. By [L5] choose a smooth cutoff $\chi:M\to[0,1]$ with $\chi=1$ on a neighborhood $U_0$ of $K$ and $\operatorname{supp}\chi\subseteq C$, and define $$h_p:=\frac{\chi f}{f(p)}.$$ Since $\operatorname{supp}\chi\subseteq C$ and $f$ is supported in $C$ [step 2.1], $h_p$ is a smooth function with compact support in $C\subseteq I^+(S_a)=\{t>a\}$ and $h_p\ge0$; this is (a). Since $p\in K\subseteq U_0$, near $p$ one has $\chi=1$ and $h_p=f/f(p)$, so $h_p(p)=1$ and, by continuity, $\{h_p>1/2\}$ contains a neighborhood of $p$: this is (b). For (c): let $q'\in\{h_p>0\}\cap J^-(S_b)$. Since $h_p>0$ forces $\chi>0$ and $f>0$, we have $q'\in\{f>0\}=I^+_C(p')\subseteq J^+(p')$, so $q'\in J^+(p')\cap J^-(S_b)=K\subseteq U_0$; on the neighborhood $U_0$ of $K$ the cutoff equals one, so on a neighborhood of $q'$ contained in $U_0$ one has $h_p=f/f(p)$ and $\nabla h_p=\nabla f/f(p)$, which is past timelike by step 3.1. This proves (c); (d) is the identity $\{h_p>0\}\cap J^-(S_b)=\{f>0\}\cap J^-(S_b)$ established in the same computation, together with $\chi=1$ on $U_0\supseteq K\supseteq\{f>0\}\cap J^-(S_b)$. [step 1.1, step 2.1, step 3.1, L1, L5, given] ∎

## Remarks

- **The point of the flat function.** $f$ is the smoothing of the indicator of the future cone: it vanishes to infinite order on the null boundary and at the vertex, which is why the composition is smooth although the cone has a corner. The exponential map converts the corner into the quadratic zero set $Q=0$ of a smooth function.

- **Why the cutoff is harmless.** The gradient of $h_p$ is only claimed to be past timelike on the truncated past cone $J^-(S_b)$, and exactly there the support of the cutoff has already begun, so the cutoff's own gradient does not contribute.

- **Use.** In [[lem-gr-locally-finite-shell-sum]] these bumps are summed locally finitely to produce $h^+$ with past timelike gradient on the past side, and the time-reversed construction produces the negative plateau $h^-$.
