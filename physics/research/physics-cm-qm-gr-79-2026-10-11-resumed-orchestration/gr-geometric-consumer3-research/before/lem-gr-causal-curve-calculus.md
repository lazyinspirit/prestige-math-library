---
id: lem-gr-causal-curve-calculus
kind: lemma
title: "Chart independence, concatenation, reparametrization and transitivity for causal curves"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, def-absolutely-continuous-function, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-absolutely-continuous-functions-have-integrable-derivatives, def-countable-choice, def-dependent-choice, thm-chain-rule-for-total-derivatives, cor-mean-value-theorem, def-velocity-derivation-of-a-smooth-curve, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval, def-continuity-real, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-velocity-derivation-of-a-smooth-curve: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: causal curves and the causal relation (section 1.11 printed pp. 15-16); continuous causal curves and their local Lipschitz parametrization (Theorem 2.12 printed pp. 32-33); Definition 2.16 printed p. 33"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): the Lorentzian metric framework and time orientation, section 2.2 printed pp. 15-19"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
time-oriented smooth Lorentzian four-manifold with the causal-curve class of
[[def-gr-causal-curves-and-reachability]].

**(a) Chart independence.** Local absolute continuity in the sense of
[[def-gr-causal-curves-and-reachability]] clause (a) is independent of the
chosen chart and of the smooth atlas: if one chart representative of a curve
is absolutely continuous on every compact parameter subinterval, then so is
every other one.

**(b) Velocity and smooth composition.** At every interior parameter value
$t$ at which one chart representative is differentiable, every chart
representative is differentiable, the velocity $\gamma'(t)$ of
[[def-gr-causal-curves-and-reachability]] clause (b) is well defined and
independent of the chart, and the set of parameter values at which some
chart representative is differentiable has full measure in the domain. For
every smooth map $F$ of an open subset of $M$ into $M$ whose domain contains
the image of $\gamma$, the composite $F\circ\gamma$ is locally absolutely
continuous and $(F\circ\gamma)'(t)=dF_{\gamma(t)}(\gamma'(t))$ at almost
every parameter value $t$.

**(c) Piecewise $C^1$ curves.** Every piecewise $C^1$ curve (in the
one-sided-tangent convention of
[[def-c-r-and-smooth-maps-between-smooth-manifolds]]) is locally absolutely
continuous; a piecewise $C^1$ curve all of whose tangents are future causal
is a future causal curve, and if in addition its tangents are future
timelike, it is a future timelike curve.

**(d) Concatenation.** If $\gamma_1:[a,b]\to M$ and $\gamma_2:[b,c]\to M$ are
future causal curves (respectively future timelike curves) with
$\gamma_1(b)=\gamma_2(b)$, then the concatenation $\gamma:[a,c]\to M$,
$\gamma(t):=\gamma_1(t)$ for $t\le b$ and $\gamma(t):=\gamma_2(t)$ for
$t\ge b$, is a future causal (respectively future timelike) curve; the same
holds for any finite chain of such curves.

**(e) Reparametrization.** If $\varphi:J\to I$ is a strictly increasing
$C^1$ diffeomorphism of intervals with $\varphi'>0$ and $\gamma:I\to M$ is
locally absolutely continuous, then $\gamma\circ\varphi$ is locally
absolutely continuous and $\gamma\circ\varphi$ is future causal (respectively
future timelike) exactly when $\gamma$ is. Moreover $\gamma$ is
future-inextendible if and only if $\gamma\circ\varphi$ is
future-inextendible, and this equivalence holds for every strictly increasing
continuous surjection $\varphi$ of intervals, not only the $C^1$ ones.

**(f) Relations.** The relation $\le$ of
[[def-gr-causal-curves-and-reachability]] is reflexive and transitive, and
$p\ll q$ implies $p\le q$ for all $p,q$; the relations $J^{\pm}$ and
$I^{\pm}$ of that definition are therefore nested, $I^{\pm}(S)\subseteq
J^{\pm}(S)$ for every $S\subseteq M$.

## Facts & Assumptions

**Given:** The Axioms of Countable and Dependent Choice, a time-oriented smooth Lorentzian four-manifold $(M,g,N)$, interval domains, curves, and the maps of the claims.

[L1] For an absolutely continuous $F:[a,b]\to\mathbb R$, under $\mathrm{AC}_\omega$ and $\mathrm{DC}$: $F$ is differentiable almost everywhere, $F'\in L^1[a,b]$, and $F(x)-F(a)=\int_a^xF'(t)\,dt$ for all $x$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]]).

[L2] Chain rule for total derivatives: if $f$ is differentiable at $p$ and $\psi$ at $t$ with $\psi(t)=p$, then $f\circ\psi$ is differentiable at $t$ with $D(f\circ\psi)(t)=Df(p)\circ D\psi(t)$ ([[thm-chain-rule-for-total-derivatives]]).

[L3] Mean value bound: if a real function is $C^1$ on a convex open set containing $x,y$ and its derivative along the segment is bounded by $L$, then $|f(y)-f(x)|\le L|y-x|$, by the mean value theorem applied to $t\mapsto f(x+t(y-x))$ on $[0,1]$ ([[cor-mean-value-theorem]]).

[L4] A $C^1$ real function on a compact interval is absolutely continuous: its derivative is continuous hence bounded by some $M$, and the Lipschitz bound gives the absolute-continuity condition ([[def-absolutely-continuous-function]], [[def-continuity-real]]).

[L5] A future timelike vector is a nonzero future causal vector, by the pointwise classification of nonzero vectors into timelike, null and spacelike and the definition of causal ([[def-causal-classification-of-lorentz-vectors]]).

[L6] Local Lipschitz composition: let $O\subseteq\mathbb R^n$ be open, let $h:O\to\mathbb R^k$ be $C^1$, let $K\subseteq O$ be compact and convex, and let $x:[a,b]\to K$ be absolutely continuous. Then $\|h(x(v))-h(x(u))\|\le L\|x(v)-x(u)\|$ for all $u,v\in[a,b]$, where $L:=\sup_{w\in K}\|Dh(w)\|<+\infty$; consequently $h\circ x$ is absolutely continuous, because for pairwise interior-disjoint subintervals the sum of the increments of $h\circ x$ is at most $L$ times the sum of those of $x$. The bound follows by applying [L3] to each component of $h$ along the segment from $x(u)$ to $x(v)$, which lies in the convex set $K$.

## Proof

**Proof technique:** direct.

1.1 (Chart independence of the class.) Let $\gamma:I\to M$ be locally absolutely continuous, let $[a,b]\subseteq I$ be compact, and let $(U,x)$, $(V,y)$ be charts with $\gamma([a,b])\subseteq U\cap V$. Choose a compact set $K\subseteq U\cap V$ containing $\gamma([a,b])$ in its interior. The transition $\varphi:=x\circ y^{-1}$ is smooth on a neighborhood of the compact set $y(K)$; fix a compact convex neighborhood $C$ of $y(K)$ on which the derivative $D\varphi$ is bounded, by $L$ say. By [L3] applied componentwise, $\|x\circ\gamma(v_j)-x\circ\gamma(u_j)\|\le L\|y\circ\gamma(v_j)-y\circ\gamma(u_j)\|$ for all $u_j,v_j\in[a,b]$. Let $\{[u_j,v_j]\}$ be finitely many pairwise interior-disjoint subintervals of $[a,b]$ with $\sum_j(v_j-u_j)<\delta$, where $\delta$ is the constant belonging to $\varepsilon/L$ for the absolute continuity of $y\circ\gamma$. Then $\sum_j\|x\circ\gamma(v_j)-x\circ\gamma(u_j)\|\le L\sum_j\|y\circ\gamma(v_j)-y\circ\gamma(u_j)\|<L(\varepsilon/L)=\varepsilon$, so $x\circ\gamma$ is absolutely continuous on $[a,b]$. The roles of $x$ and $y$ are symmetric, and finitely many chart overlaps cover an arbitrary pair of charts on the compact interval. This proves (a). [given, L2, L3, algebra]

1.2 (Piecewise $C^1$ curves.) Let $\gamma$ be piecewise $C^1$ with admissible partition $a=s_0<\dots<s_m=b$. On each closed piece $[s_{i-1},s_i]$ the restriction is $C^1$ and its coordinate components are $C^1$; by [L4] each component is absolutely continuous on the piece, and a sum of functions absolutely continuous on adjacent intervals is absolutely continuous on their union, so every chart representative is absolutely continuous on $[a,b]$. On the open pieces the velocity is the piecewise tangent; if every tangent is future causal, then at every point of the open pieces, a full-measure subset of $[a,b]$, the velocity is nonzero future causal; if every tangent is future timelike, it is future timelike there. This proves (c). [L4, given, algebra]

2.1 (Velocity is chart independent and exists almost everywhere.) Let $t$ be an interior point of $I$ at which $x\circ\gamma$ is differentiable. By [L2] every other chart representative $y\circ\gamma=(y\circ x^{-1})\circ(x\circ\gamma)$ near $\gamma(t)$ is differentiable at $t$, and its component derivatives are related to those of $x\circ\gamma$ by the derivative of the smooth transition; hence the derivation $\sum_a\frac{d}{dt}(x^a\circ\gamma)(t)\partial_a|_{\gamma(t)}$ is the same element of $T_{\gamma(t)}M$ for every chart, which is the velocity of [[def-gr-causal-curves-and-reachability]] clause (b) and agrees with [[def-velocity-derivation-of-a-smooth-curve]] when $\gamma$ is smooth. For the almost-everywhere statement, fix a compact $[a,b]\subseteq I$ and a chart $(U,x)$ with $\gamma([a,b])\subseteq U$; the four components of $x\circ\gamma$ are absolutely continuous, so by [L1] each is differentiable almost everywhere on $[a,b]$, hence so is $x\circ\gamma$. If $F$ is smooth near a point of $M$ and $\gamma$ is differentiable at $t$, then $F\circ\gamma$ is differentiable at $t$ with velocity $dF_{\gamma(t)}(\gamma'(t))$ by the same chain rule. For local absolute continuity of $F\circ\gamma$, fix a compact $[a,b]\subseteq I$ with $\gamma([a,b])$ in the domain of $F$ and choose a chart $(V,y)$ around $\gamma([a,b])$ and a chart $(W,z)$ around $F(\gamma([a,b]))$; on a compact convex neighborhood $K$ of $y(\gamma([a,b]))$ contained in $V\cap z(F^{-1}(W))$ the chart representative $h:=z\circ F\circ y^{-1}$ is $C^1$, and $y\circ\gamma$ is absolutely continuous on $[a,b]$ by clause (a) of [[def-gr-causal-curves-and-reachability]], so [L6] makes $h\circ(y\circ\gamma)=z\circ(F\circ\gamma)$ absolutely continuous on $[a,b]$. This proves (b). [step 1.1, L1, L2, L6, given]

2.2 (Concatenation.) Let $\gamma_1:[a,b]\to M$ and $\gamma_2:[b,c]\to M$ be future causal with $\gamma_1(b)=\gamma_2(b)$, and let $\gamma$ be their concatenation. For a chart representative $x\circ\gamma$: on $[a,b]$ it is $x\circ\gamma_1$, and on $[b,c]$ it is $x\circ\gamma_2$; the sum of endpoint increments over any finite family of pairwise interior-disjoint intervals is the sum of the corresponding quantities for the two parts, because an interval straddling $b$ splits at $b$, so the absolute-continuity inequality holds with the sum of the two constants. The open pieces $(a,b)$ and $(b,c)$ cover $[a,c]$ up to the single point $b$, a null set; on them the velocity of $\gamma$ is that of $\gamma_1$ or $\gamma_2$, hence nonzero future causal (respectively future timelike) almost everywhere. Finite chains follow by induction, which proves the first assertion of (d); the timelike version is identical. [step 1.2, given, algebra]

3.1 (Reparametrization.) Let $\varphi:J\to I$ be strictly increasing $C^1$ with $\varphi'>0$, and let $\gamma$ be locally absolutely continuous. For a compact $[u,v]\subseteq J$ and a chart, $(x\circ\gamma)\circ\varphi$ is the composition of the absolutely continuous function $x\circ\gamma$ on $[\varphi(u),\varphi(v)]$ with $\varphi$, which is absolutely continuous on $[u,v]$ by [L4]. It is absolutely continuous: given $\varepsilon>0$, let $\delta$ be the constant for $\varepsilon$ belonging to $x\circ\gamma$ and let $\eta$ be the constant for $\delta$ belonging to $\varphi$; for pairwise interior-disjoint subintervals of $[u,v]$ of total length less than $\eta$, the images under the increasing $\varphi$ are intervals with pairwise disjoint interiors and total length less than $\delta$, so the sum of the increments of $x\circ\gamma$ over the images is less than $\varepsilon$. At every $u$ the chain rule [L2] gives $(\gamma\circ\varphi)'(u)=\varphi'(u)\gamma'(\varphi(u))$ whenever $\gamma$ is differentiable at $\varphi(u)$, and $\varphi'>0$; so $(\gamma\circ\varphi)'(u)$ is a positive multiple of a future causal (respectively future timelike) vector exactly when $\gamma'(\varphi(u))$ is one. The set of $u$ where $\gamma'$ fails to exist or fails to be nonzero future causal is the preimage under $\varphi$ of a null set; it is null because $\varphi^{-1}$ is locally Lipschitz, with derivative bounded on compact subintervals, and a locally Lipschitz map of intervals sends null sets to null sets by covering them with intervals of small total length. Hence the curve class and the causal and timelike conditions are preserved in both directions. For inextendibility, a strictly increasing continuous surjection has a strictly increasing continuous inverse, so $\gamma(\varphi(u))$ converges as $u\to\sup J$ if and only if $\gamma(t)$ converges as $t\to\sup I$, and dually at the past ends. This proves (e). [step 2.1, L2, L4, given]

4.1 (Relations.) The relation $\le$ is reflexive by its first alternative. If $p\le q$ and $q\le r$: when $p=q$ or $q=r$ the conclusion is immediate, and otherwise future causal curves join $p$ to $q$ and $q$ to $r$ and their concatenation is a future causal curve from $p$ to $r$ by step 2.2, so $p\le r$. If $p\ll q$, the connecting curve has future timelike velocity at almost every parameter value, and such a vector is nonzero future causal by [L5], so the same parameter set witnesses the condition defining a future causal curve and $p\le q$; hence $I^{\pm}(S)\subseteq J^{\pm}(S)$ directly from the union definitions. This proves (f) and completes the proof. [step 2.2, L5, given, algebra] ∎

## Remarks

- **Measurability conventions.** The absolute-continuity and almost-everywhere statements are one-dimensional Lebesgue statements on compact parameter intervals, used through [L1]; the only choice principles used are $\mathrm{AC}_\omega$ and $\mathrm{DC}$, assumed in the statement.

- **The $C^1$ reparametrization hypothesis.** In (e) the $C^1$ hypothesis with $\varphi'>0$ for the forward implication cannot be relaxed to mere continuity: composing an absolutely continuous curve with a continuous increasing function that is not absolutely continuous need not be absolutely continuous. The inextendibility equivalence is stated separately because it needs only strict monotonicity and surjectivity.
