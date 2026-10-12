---
id: lem-gr-normal-neighborhood-length-monotonicity
kind: lemma
title: "Length monotonicity of the squared displacement: once a future causal curve in a normal neighborhood has a future timelike position vector, the displacement radius grows at least as fast as the accumulated Lorentzian length"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-position-vector-differential, def-gr-normal-neighborhoods-and-position-vectors, def-gr-causal-curves-and-reachability, def-gr-timelike-worldline-and-proper-time, lem-gr-observer-pairing-with-future-causal-vectors, thm-gr-lorentz-gauss-lemma-and-normal-maximum, def-gr-smooth-lorentzian-objects, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-absolutely-continuous-functions-have-integrable-derivatives, thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous, thm-chain-rule-for-total-derivatives, lem-gr-parallel-transport-and-geodesic-speed, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval, thm-continuous-implies-integrable]
dependency_roles:
  lem-gr-position-vector-differential: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  thm-gr-lorentz-gauss-lemma-and-normal-maximum: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: inequality (2.8) and the monotonicity of D^2_p along causal curves, proof of Theorem 2.9 printed pp. 29-30"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: local maximization properties of geodesics, section 2.4 printed pp. 28-33"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]]), let $p\in M$ and let
$U_p=\exp_p(W_p)$ be a normal neighborhood of $p$ as in
[[def-gr-normal-neighborhoods-and-position-vectors]] clause (a). Let
$\sigma:[a,b]\to U_p$ be a future causal curve in the class of
[[def-gr-causal-curves-and-reachability]] (locally absolutely continuous,
with future causal nonzero velocity almost everywhere), and write
$$v(t):=\exp_p^{-1}\bigl(\sigma(t)\bigr),\qquad P(t):=d(\exp_p)_{v(t)}(v(t)),\qquad Q(t):=g_p(v(t),v(t))$$
for $t\in[a,b]$. Suppose there is $t^*\in[a,b]$ such that $v(t^*)$ is
future timelike. Then:

**(a) Propagation.** For every $t\in[t^*,b]$ with
$\sigma([t^*,t])\subseteq U_p$, the vector $v(t)$ is future timelike;
consequently $Q(t)<0$, and $R(t):=\sqrt{-Q(t)}>0$.

**(b) Length inequality.** For all $t^*\le t_1<t_2\le b$ with
$\sigma([t_1,t_2])\subseteq U_p$,
$$R(t_2)-R(t_1)\ \ge\ L_g\bigl(\sigma|_{[t_1,t_2]}\bigr),$$
the Lorentzian length of [[def-gr-timelike-worldline-and-proper-time]].
In particular $R$ is nondecreasing on $[t^*,b]$.

**(c) Derivative formula.** The map $t\mapsto Q(t)$ is absolutely
continuous and
$$\frac{d}{dt}Q(t)=2\,g_{\sigma(t)}\bigl(P(t),\sigma'(t)\bigr)$$
at almost every $t\in[a,b]$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a
point $p\in M$, a normal neighborhood $U_p=\exp_p(W_p)$, a future causal
curve $\sigma:[a,b]\to U_p$ and $t^*$ with $v(t^*)$ future timelike.

[L1] The length of a future causal curve is
$L_g(\sigma|_{[s_1,s_2]})=\int_{s_1}^{s_2}\sqrt{-g(\sigma'(t),\sigma'(t))}\,dt$,
an absolutely continuous and nondecreasing function of the interval with
integrable density
([[def-gr-timelike-worldline-and-proper-time]],
[[thm-absolutely-continuous-functions-have-integrable-derivatives]],
[[thm-continuous-implies-integrable]]).

[L2] Reverse Cauchy–Schwarz: if $T$ is future timelike and $z$ is future
causal and nonzero, then $g(T,z)\le-\sqrt{-g(T,T)}\sqrt{-g(z,z)}$, with
equality if and only if $z$ is a nonnegative multiple of $T$
([[lem-gr-observer-pairing-with-future-causal-vectors]]).

[L3] $Q$ is absolutely continuous and $\frac{d}{dt}Q(t)=2g_{\sigma(t)}(P(t),\sigma'(t))$ at almost every $t$: indeed $D_p^2$ is the smooth function of [[lem-gr-position-vector-differential]] clause (a), $\sigma$ is locally absolutely continuous, and the composition is absolutely continuous by [[thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous]]; the chain rule gives the stated derivative at every differentiability point of $\sigma$ ([[thm-chain-rule-for-total-derivatives]], [[lem-gr-position-vector-differential]] clause (a)).

[L4] $R$ is absolutely continuous on every subinterval where $Q<0$, with $R'=-\frac{1}{2R}Q'=-\frac{1}{R}g_{\sigma}(P,\sigma')$ almost everywhere ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[L5] If $v(t)$ is future timelike then $P(t)\neq0$ is future timelike and $g_{\sigma(t)}(P(t),P(t))=Q(t)$ ([[lem-gr-parallel-transport-and-geodesic-speed]], [[thm-gr-lorentz-gauss-lemma-and-normal-maximum]] clause (a)).

## Proof

**Proof technique:** direct.

1.1 (Propagation.) Let $T_0:=\sup\{t\in[t^*,b]:$ for all $s\in[t^*,t]$ one has $\sigma([t^*,s])\subseteq U_p$ and $v(s)$ future timelike$\}$. The set is nonempty and contains a left neighborhood of $t^*$: $v(t^*)$ is future timelike, future-timelikeness is open in $T_pM$ while $v$ is continuous, and $\sigma([t^*,t])\subseteq U_p$ for $t$ near $t^*$. On $(t^*,T_0)$ define $R=\sqrt{-Q}>0$. By [L5] and [L2] applied with $T:=P(t)$ and $z:=\sigma'(t)$ at every differentiability point with $Q(t)<0$, $g_{\sigma(t)}(P(t),\sigma'(t))\le-R(t)\sqrt{-g(\sigma'(t),\sigma'(t))}$; hence by [L4] $R'(t)\ge\sqrt{-g(\sigma'(t),\sigma'(t))}\ge0$ a.e., so $R$ is nondecreasing on $[t^*,T_0)$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]), and $Q=-R^2\le Q(t^*)<0$ there. If $T_0<b$ and $\sigma([t^*,T_0])\subseteq U_p$, then $Q(T_0)=\lim_{t\uparrow T_0}Q(t)\le Q(t^*)<0$ by continuity, so $v(T_0)$ is future timelike and there is $\varepsilon>0$ with $\sigma([t^*,T_0+\varepsilon])\subseteq U_p$ and $v$ future timelike on $[t^*,T_0+\varepsilon]$, contradicting maximality of $T_0$. Hence $T_0=b'$ where $b'=\sup\{t\in[t^*,b]:\sigma([t^*,t])\subseteq U_p\}$, proving (a). [L2, L4, L5, given, algebra]

1.2 (Derivative formula.) The map $t\mapsto Q(t)$ is the composition of the locally absolutely continuous curve $\sigma$ with the smooth function $D_p^2$, hence is absolutely continuous, and the chain rule at every differentiability point of $\sigma$ gives $\frac{d}{dt}Q(t)=d(D_p^2)_{\sigma(t)}(\sigma'(t))=2g_{\sigma(t)}(P(t),\sigma'(t))$ by [L3]. This proves (c). [L3]

2.1 (Length inequality.) Let $t^*\le t_1<t_2\le b$ with $\sigma([t_1,t_2])\subseteq U_p$. By step 1.1, $Q<0$ and $R>0$ on $[t_1,t_2]$, and, by the computation of step 1.1, $R'\ge\sqrt{-g(\sigma',\sigma')}$ a.e. on $[t_1,t_2]$. Integrating with [L1] gives $R(t_2)-R(t_1)=\int_{t_1}^{t_2}R'\ge\int_{t_1}^{t_2}\sqrt{-g(\sigma',\sigma')}\,dt=L_g(\sigma|_{[t_1,t_2]})$. This proves (b). [step 1.1, L1, L4, algebra]

3.1 Claims (a), (b), (c) are steps 1.1, 2.1 and 1.2. [step 1.1, step 2.1, step 1.2] ∎

## Remarks

- **Why the timelike hypothesis at a single time suffices.** The reverse
  Cauchy–Schwarz inequality is applied with the future timelike vector
  $P(t)$, whose future-directedness is granted by Gauss' Lemma and
  [[lem-gr-parallel-transport-and-geodesic-speed]]; the direction cannot
  change while $Q<0$, and $Q$ can only decrease, so one timelike value
  propagates forward as long as the curve remains in the normal
  neighborhood.

- **Sharpness.** Equality in (b) holds along radial reparametrizations of
  the geodesic from $p$; the inequality is the local maximality of
  geodesics in its integrated form and is used in
  [[thm-gr-normal-neighborhood-causal-cone]].
