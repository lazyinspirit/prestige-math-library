---
id: lem-gr-basic-limit-curve
kind: lemma
title: "Basic limit curve lemma: arclength-parametrized causal curves have causal limit curves on compact parameter intervals and future-inextendible limits on half-lines"
status: draft
origin: session
domain: mathematics
dependency_level: 19
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-auxiliary-complete-riemannian-metric, lem-gr-dominating-cone-bounds, thm-gr-normal-neighborhood-causal-cone, thm-gr-convex-normal-neighborhoods, lem-gr-convex-normal-causality, lem-gr-joint-exponential-diffeomorphism, lem-gr-causal-curve-conventions, def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-normal-neighborhoods-and-position-vectors, lem-timelike-cone-has-two-convex-components, def-causal-classification-of-lorentz-vectors, def-gr-smooth-lorentzian-objects, def-riemannian-distance-on-a-connected-manifold, thm-the-riemannian-distance-topology-is-the-manifold-topology, def-metric-ball, thm-metric-compactness-equivalences, def-complete-metric-space, def-countable-choice, def-dependent-choice, def-absolutely-continuous-function, thm-absolutely-continuous-functions-have-integrable-derivatives, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-continuity-real, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-riemannian-distance-is-a-metric, def-gr-smooth-covariant-two-tensor-field]
dependency_roles:
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-convex-normal-causality: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  thm-the-riemannian-distance-topology-is-the-manifold-topology: mathematical-premise
  def-metric-ball: mathematical-premise
  thm-metric-compactness-equivalences: mathematical-premise
  def-complete-metric-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-riemannian-distance-is-a-metric: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Limit curve theorems in Lorentzian geometry, arXiv:0712.3942v2: Lemma 2.7 and Theorem 3.1(1), printed pp. 6-8 and pp. 11-13"
      url: "https://arxiv.org/abs/0712.3942"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: limit curve theorems, section 2.11 printed pp. 45-49"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $h$ be a smooth positive
definite metric on $M$ such that $(M,d_h)$ is complete in each connected
component and every closed $d_h$-bounded subset is compact (both hold for the
metric $h'$ of [[thm-gr-auxiliary-complete-riemannian-metric]]).

**(a) Compact parameter intervals.** Let $T>0$ and let
$\alpha_k:[0,T]\to M$ be future causal curves
([[def-gr-causal-curves-and-reachability]]) parametrized by $h$-arclength,
$\ell_h(\alpha_k|_{[s,t]})=t-s$ for all $0\le s\le t\le T$, with
$\alpha_k(0)\to p\in M$. Then some subsequence (still written $\alpha_k$)
converges uniformly in $d_h$ on $[0,T]$ to a map
$\alpha:[0,T]\to M$ with:

**(a1)** $\alpha(0)=p$ and $d_h(\alpha(s),\alpha(t))\le|t-s|$ for all
$s,t\in[0,T]$;

**(a2)** $\alpha$ is a geodesically connectible continuous causal curve in
the sense of [[lem-gr-causal-curve-conventions]];

**(a3)** $\alpha$ is a future causal curve in the sense of
[[def-gr-causal-curves-and-reachability]]; and for every chart $U$ of the
kind produced by [[lem-gr-dominating-cone-bounds]] clauses (a) and (b), with
domination constant $K$ and time coordinate $x^0$, there is a constant
$C\ge1$, depending only on the chart and $h$, such that
$$t-s\le C\bigl(x^0(\alpha(t))-x^0(\alpha(s))\bigr)$$
whenever $s<t$ and $\alpha([s,t])\subseteq U$;

**(a4)** $\alpha$ is not constant on any nondegenerate parameter interval.

**(b) Half-lines.** Let $\gamma_k:I_k\to M$ be future causal curves
parametrized by $h$-arclength whose intervals $I_k\ni0$ satisfy
$[0,n]\subseteq I_k$ for every $k$ once $n$ is fixed (for instance
$I_k=[0,b_k]$ with $b_k\to\infty$), and suppose $\gamma_k(0)\to p$. Then
some subsequence converges uniformly in $d_h$ on every compact subinterval of
$[0,\infty)$ to a future causal curve $\gamma:[0,\infty)\to M$ satisfying
(a1)-(a4) on compact subintervals and which is future-inextendible
([[def-gr-causal-curves-and-reachability]] clause (d)). A dual statement
holds, in the time-reversed orientation, for curves whose intervals satisfy
$[-n,0]\subseteq I_k$ eventually; it produces a past-inextendible future
causal curve on $(-\infty,0]$ in the original orientation.

## Facts & Assumptions

**Given:** Countable and dependent choice, the Lorentzian manifold, the complete metric $h$, and the sequences of curves.

[A1] The Axioms of Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) are assumed throughout.

[L1] A curve parametrized by $h$-arclength is $1$-Lipschitz for $d_h$: $d_h(\gamma(s),\gamma(t))\le\ell_h(\gamma|_{[s,t]})=|t-s|$, since the Riemannian distance is an infimum of lengths of locally absolutely continuous curves ([[def-riemannian-distance-on-a-connected-manifold]], [[thm-riemannian-distance-is-a-metric]]).

[L2] Under [A1] (countable and dependent choice) every compact metric space is sequentially compact, and compactness is equivalent to completeness together with total boundedness ([[thm-metric-compactness-equivalences]]); the closed $d_h$-balls of $M$ are compact by the completeness and closed-bounded-compactness properties of $h$ ([[thm-gr-auxiliary-complete-riemannian-metric]] clause (d), [[def-metric-ball]]).

[L3] The metric $d_h$ induces the manifold topology, so limits and continuity may be tested in charts ([[thm-the-riemannian-distance-topology-is-the-manifold-topology]]).

[L4] In a strictly convex normal ball $C$ with base $q$, the endpoints in $C$ of future causal curves with image in $C$ starting at $q$ form the exponential cone $J^+_C(q)=\exp_q(\mathcal C^+)$, with $\mathcal C^+$ the closed (in $T_qM$) set of future causal or zero vectors of the inverse domain; the radial geodesic of a conic vector stays in $C$, and the two-point inverse velocity $v(q,r)=\exp_q^{-1}(r)$ is smooth in $(q,r)$ with derivative with respect to $r$ at $r=q$ equal to the identity ([[thm-gr-normal-neighborhood-causal-cone]] clauses (a) and (b), [[thm-gr-convex-normal-neighborhoods]] clauses (a)-(c), [[lem-gr-joint-exponential-diffeomorphism]] clause (c), [[def-gr-normal-neighborhoods-and-position-vectors]]).

[L5] The set of future causal vectors in $T_qM$, together with $0$, is a closed convex cone, closed under multiplication by nonnegative scalars; a nonzero limit of future causal vectors is future causal, and a vector of the closed cone with positive $x^0$-component in a chart whose $\partial_0$ is future timelike is nonzero and future causal ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[lem-gr-convex-normal-causality]] clauses (a) and (b)).

[L6] In the chart of [[lem-gr-dominating-cone-bounds]] clauses (a) and (b) with constant $K$, a future causal curve with image in the chart satisfies $s<t\Rightarrow x^0(\gamma(t))>x^0(\gamma(s))$ and $|x^i(\gamma(t))-x^i(\gamma(s))|\le K(x^0(\gamma(t))-x^0(\gamma(s)))$; moreover the components $h_{ab}$ of $h$ in the chart are bounded on the chart, so $\sqrt{h(\gamma',\gamma')}\le c\,(x^0\circ\gamma)'$ almost everywhere for a constant $c$ depending only on the chart and $h$ ([[lem-gr-dominating-cone-bounds]] clauses (a)-(c), [[def-gr-smooth-covariant-two-tensor-field]], [[def-continuity-real]]).

[L7] Absolutely continuous curves are differentiable almost everywhere, the fundamental theorem of calculus holds for them, and a locally Lipschitz curve in charts is locally absolutely continuous ([[def-absolutely-continuous-function]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[lem-gr-causal-curve-calculus]] clause (a)).

[L8] The concatenation, subrestriction and reparametrization calculus for causal curves, and the relations $\le$, $\ll$ ([[lem-gr-causal-curve-calculus]] clauses (a), (d), (e), (f), [[def-gr-causal-curves-and-reachability]]).

## Proof

**Proof technique:** direct.

1.1 (Bounded ranges and equicontinuity.) By [L1] each $\alpha_k$ is $1$-Lipschitz for $d_h$, and since $\alpha_k(0)\to p$ there is $k_0$ with $d_h(\alpha_k(0),p)\le1$ for all $k\ge k_0$. Then for $k\ge k_0$ the image $\alpha_k([0,T])$ is contained in the closed ball $\bar B(p,T+1)$, which is compact by [L2]; discarding finitely many terms, all curves take values in one compact ball. [L1, L2, given]

2.1 (Diagonal extraction on a countable dense set.) Let $D:=[0,T]\cap\mathbb Q=\{q_1,q_2,\dots\}$. Applying [L2] to the compact set $\bar B(p,T+1)$ and extracting recursively: from any subsequence one can select a further subsequence whose values at a prescribed $q_i$ converge. Performing this for $i=1,2,\dots$ and taking the diagonal subsequence yields a subsequence, still written $\alpha_k$, for which $\alpha_k(q)$ converges for every $q\in D$; the recursion uses countably many choices, which is [A1] ([[def-countable-choice]]). Put $\alpha(q):=\lim_k\alpha_k(q)$ for $q\in D$. [step 1.1, L2, given, choose]

3.1 (The limit on the dense set is Lipschitz, hence extends.) For $q,q'\in D$, continuity of $d_h$ gives $d_h(\alpha(q),\alpha(q'))=\lim_kd_h(\alpha_k(q),\alpha_k(q'))\le|q-q'|$, so $\alpha:D\to M$ is $1$-Lipschitz. For $t\in[0,T]$ and any sequence $q_n\in D$ with $q_n\to t$, the values $\alpha(q_n)$ form a Cauchy sequence in the compact ball $\bar B(\alpha(t_0),1)$ for suitable $t_0\in D$ (or in $\bar B(p,T+1)$), hence converge by [L2]; the limit does not depend on the sequence, again by the Lipschitz bound. This defines $\alpha:[0,T]\to M$ extending the dense-set values, and the bound $d_h(\alpha(s),\alpha(t))\le|t-s|$ passes to the limit; in particular $\alpha$ is continuous and (a1) holds. [step 2.1, L2, L3, given]

4.1 (Uniform convergence.) Let $\varepsilon>0$. Since all $\alpha_k$ and $\alpha$ are $1$-Lipschitz, choose finitely many points $q_1,\dots,q_N\in D$ such that every $t\in[0,T]$ has some $q_j$ with $|t-q_j|<\varepsilon/4$. For each $j$, $\alpha_k(q_j)\to\alpha(q_j)$, so there is $k_1$ with $d_h(\alpha_k(q_j),\alpha(q_j))<\varepsilon/2$ for all $k\ge k_1$ and all $j\le N$. Then for $k\ge k_1$ and arbitrary $t$, with $|t-q_j|<\varepsilon/4$, $$d_h(\alpha_k(t),\alpha(t))\le d_h(\alpha_k(t),\alpha_k(q_j))+d_h(\alpha_k(q_j),\alpha(q_j))+d_h(\alpha(q_j),\alpha(t))<\varepsilon,$$ using the Lipschitz bounds for $\alpha_k$ and $\alpha$. Hence $\alpha_k\to\alpha$ uniformly on $[0,T]$. [step 3.1, given, algebra]

5.1 (Geodesic connectibility.) Let $C$ be a strictly convex normal ball and $s<t$ with $\alpha([s,t])\subseteq C$. For large $k$ also $\alpha_k([s,t])\subseteq C$ by uniform convergence. By [L4] the position vector $w_k:=\exp_{\alpha_k(s)}^{-1}(\alpha_k(t))$ lies in the closed future cone $\mathcal C^+_{\alpha_k(s)}$, and smoothness of the two-point inverse velocity ([[lem-gr-joint-exponential-diffeomorphism]] clause (c)) gives $w_k\to w:=\exp_{\alpha(s)}^{-1}(\alpha(t))$ because $\alpha_k(s)\to\alpha(s)$ and $\alpha_k(t)\to\alpha(t)$. The future cones vary continuously in the base point and are closed, so $w$ lies in the closed future cone at $\alpha(s)$; hence the radial geodesic $u\mapsto\exp_{\alpha(s)}(uw)$, $u\in[0,1]$, is a future causal geodesic contained in $C$ joining $\alpha(s)$ to $\alpha(t)$, since the radial geodesic of a conic vector stays in $C$ by [L4]. This proves (a2). [step 4.1, L4, L5, given]

5.2 (The chart bound for the limit.) Let $U$ be the chart of [L6] with constant $K$, and let $s<t$ with $\alpha([s,t])\subseteq U$; by uniform convergence on $[s,t]$ we may assume $\alpha_k([s,t])\subseteq U$ for all large $k$. As long as a future causal curve stays in $U$, its tangent satisfies $|v|_{\mathrm e}\le\sqrt{1+3K^2}\,v^0$ by [L6], and the components $h_{ab}$ are bounded on $U$ by a constant $\Lambda$, so $\sqrt{h(\gamma',\gamma')}\le c\,(x^0\circ\gamma)'$ almost everywhere with $c:=\sqrt{\Lambda(1+3K^2)}$; integrating over $[s,t]$ gives $t-s=\ell_h(\alpha_k|_{[s,t]})\le c\,(x^0(\alpha_k(t))-x^0(\alpha_k(s)))$. Passing to the limit $k\to\infty$ yields $t-s\le c\,(x^0(\alpha(t))-x^0(\alpha(s)))$, which is the bound of (a3) with $C:=c\ge1$ (enlarging $c$ to at least one if necessary). [step 4.1, L6, given, algebra]

6.1 (Future causality of the limit.) By (a1) and [L3], $\alpha$ is locally Lipschitz in charts, hence locally absolutely continuous and differentiable almost everywhere with derivative $\alpha'$ ([[def-gr-causal-curves-and-reachability]] clause (a), [L7]). Let $t$ be a point at which $\alpha$ is differentiable; choose the chart $U$ around $\alpha(t)$ and $h>0$ so small that $\alpha([t,t+h'])\subseteq U$ for all $h'\le h$. By step 5.2, $x^0(\alpha(t+h'))-x^0(\alpha(t))\ge h'/c>0$ for every $0<h'\le h$, so the difference quotients of $x^0\circ\alpha$ at $t$ from the right are at least $1/c>0$, and dividing by $h'$ and letting $h'\downarrow0$ gives $(x^0\circ\alpha)'(t)\ge1/c>0$. At the same time, by step 5.1, for small $h'>0$ the position vector $w_{h'}:=\exp_{\alpha(t)}^{-1}(\alpha(t+h'))$ lies in the closed future cone, and by [L4] $w_{h'}/h'\to\alpha'(t)$ as $h'\downarrow0$; the cone is closed under positive scaling, so $\alpha'(t)$ lies in the closed future cone and has positive $x^0$-component, hence is a nonzero future causal vector by [L5]. Therefore at almost every parameter value the derivative of $\alpha$ exists, is nonzero and is future causal, that is, $\alpha$ is a future causal curve in the sense of [[def-gr-causal-curves-and-reachability]]. [step 5.1, step 5.2, L4, L5, L7, given, algebra]

6.2 (Nonconstancy.) Let $s<t$ and suppose $\alpha$ were constant on $[s,t]$, with image $\{q\}$. Applying step 5.2 with a chart $U$ around $q$ (whose existence is the content of [[lem-gr-dominating-cone-bounds]] clause (a)) gives $t-s\le c\,(x^0(\alpha(t))-x^0(\alpha(s)))=0$, a contradiction. Hence $\alpha$ is not constant on any nondegenerate interval, which is (a4). Clauses (a1)-(a4) are proven, so (a) holds. [step 5.2, given, algebra]

7.1 (Half-lines.) Let $\gamma_k:[0,\infty)\to M$ be as in (b). For each integer $n\ge1$, apply steps 1.1-6.2 to the restrictions $\gamma_k|_{[0,n]}$ and extract a subsequence converging uniformly to a future causal curve on $[0,n]$; taking a diagonal subsequence over $n=1,2,\dots$ gives a subsequence, still written $\gamma_k$, and a curve $\gamma:[0,\infty)\to M$ such that $\gamma_k\to\gamma$ uniformly on every compact subinterval and $\gamma$ satisfies (a1)-(a4) on each of them; this uses countably many selections, which is [A1]. [step 4.1, step 6.2, L8, given, choose]

8.1 (Future-inextendibility.) Suppose $\gamma(t)\to x\in M$ as $t\to\infty$. Choose the chart $U$ of [L6] around $x$ and $t_0$ with $\gamma([t_0,\infty))\subseteq U$, and let $c$ be the constant of step 5.2 for this chart. Then for all $t\ge t_0$ the bound $t-t_0\le c\,(x^0(\gamma(t))-x^0(\gamma(t_0)))$ holds, so $x^0(\gamma(t))\ge x^0(\gamma(t_0))+(t-t_0)/c\to+\infty$ as $t\to\infty$, contradicting $x^0(\gamma(t))\to x^0(x)\in\mathbb R$. Hence $\gamma$ does not converge at $+\infty$ and is future-inextendible by [[def-gr-causal-curves-and-reachability]] clause (d). This proves (b). [step 7.1, L6, given, algebra]

9.1 (Conclusion.) Part (a) is steps 1.1-6.2 and part (b) is steps 7.1 and 8.1. [step 6.2, step 8.1] ∎

## Remarks

- **Where the arclength parametrization is used.** Only two places: the $1$-Lipschitz bound of step 1.1, which drives the diagonal extraction, and the identity $\ell_h(\alpha_k|_{[s,t]})=t-s$ in step 5.2, which yields the positive lower bound for the time coordinate. A limit curve for a non-arclength sequence may collapse to a point on an interval; this is the reason the limit-curve theorems are stated for arclength parametrizations.

- **No Lorentzian length semicontinuity is used.** The lemma produces the limit and its basic properties; the comparison of Lorentzian lengths is proved separately in [[thm-gr-length-upper-semicontinuity]].

- **Scope.** The result is local-to-global analysis on one smooth Lorentzian manifold with one auxiliary complete metric; no physical premise enters and no uniqueness of the subsequence is claimed.
