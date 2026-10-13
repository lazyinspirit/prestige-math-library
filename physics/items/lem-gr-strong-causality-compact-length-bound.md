---
id: lem-gr-strong-causality-compact-length-bound
kind: lemma
title: "Strong causality bounds the auxiliary length of causal curves contained in a compact set"
status: published
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, def-gr-causal-conditions-and-global-hyperbolicity, lem-gr-dominating-cone-bounds, def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, thm-gr-auxiliary-complete-riemannian-metric, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-absolutely-continuous-function, thm-absolutely-continuous-functions-have-integrable-derivatives, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-continuity-real, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, def-compact-space]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-compact-space: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorem 2.80 (a strongly causal spacetime is non-partially imprisoning) with proof, printed p. 58, and Theorem 1.35/Definition 1.34 on strong causality, printed p. 24"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "S. W. Hawking and G. F. R. Ellis, The Large Scale Structure of Space-Time, Cambridge University Press (1973): strong causality and the finite number of causally convex neighbourhoods met by a causal curve, section 6.2"
      url: "https://doi.org/10.1017/CBO9780511524646"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) for the general absolutely continuous curve calculus and its fundamental theorem. Use the locally absolutely continuous Riemannian length of [[thm-gr-auxiliary-complete-riemannian-metric]]. Let $(M,g,N)$ be a strongly causal time-oriented smooth Lorentzian
four-manifold ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause
(b)) and let $h$ be a smooth positive definite metric on $M$
([[def-gr-smooth-covariant-two-tensor-field]]). Then for every compact set
$K\subseteq M$ there is $L(K)\in[0,\infty)$ such that
$$\ell_h(\gamma)\le L(K)$$
for every future causal curve $\gamma:[a,b]\to M$
([[def-gr-causal-curves-and-reachability]]) with $\gamma([a,b])\subseteq K$.

Consequently, if $\gamma$ is parametrized by $h$-arclength
($\ell_h(\gamma|_{[s,t]})=t-s$) and its image is contained in the compact set
$K$, then $b-a\le L(K)$.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a strongly causal spacetime, a smooth positive definite metric $h$, a compact set $K$ and a future causal curve $\gamma:[a,b]\to K$.

[L1] Strong causality: for every $p\in M$ and every open $U\ni p$ there is an open $V$ with $p\in V\subseteq U$ such that for every future causal curve and all $s<t$ with $\gamma(s),\gamma(t)\in V$ one has $\gamma([s,t])\subseteq V$ ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (b)).

[L2] The pointwise adapted cone chart has $|v|_{\mathrm e}\le K_x v^0$ and $v^0>0$ for every nonzero future causal vector ([[lem-gr-dominating-cone-bounds]] clauses (a) and (b)). On a closed coordinate ball compactly contained in this chart, smooth positive definite $h$ has a finite Euclidean operator-norm bound $H_x$, so $\sqrt{h(v,v)}\le\sqrt{H_x}|v|_{\mathrm e}\le\sqrt{H_x}K_xv^0$. Its coordinate time range is finite. No boundedness on an unshrunk chart is assumed.

[L3] Continuous images of compact sets are compact, and compact subsets of a Hausdorff space are closed; a compact set has a finite subcover from every open cover ([[def-compact-space]]).

[L4] Absolutely continuous calculus: under the Riemannian length definition of [[thm-gr-auxiliary-complete-riemannian-metric]], the density $\sqrt{h(\gamma',\gamma')}$ is nonnegative and integrable, and its integral is additive and monotone over intervals ([[def-absolutely-continuous-function]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

## Proof

**Proof technique:** direct.

1.1 (A finite precompact causally convex cover.) For each point of $K$, choose an adapted chart and a closed coordinate ball compactly contained in it. Use its open half-radius ball as the neighborhood in strong causality [L1], obtaining a causally convex open $V$ around the point contained in that smaller ball. The collection of all such admissible $V$, charts and radii covers $K$; compactness selects finitely many members, with no choice of a family indexed by all points of $K$. Write them $V_j\subset U_j$ for $1\le j\le m$, with $U_j$ their open coordinate balls and $\overline{U_j}$ compactly contained in their respective larger charts. Define $M_j=\sup_{U_j}x_j^0-\inf_{U_j}x_j^0<\infty$, $H_j=\max_{\overline{U_j}}\|h\|_{\mathrm e,\mathrm{op}}<\infty$, and $c_j=\max\{1,\sqrt{H_j}K_j\}$. Then [L2] gives $\sqrt{h(\gamma',\gamma')}\le c_j(x_j^0\circ\gamma)'$ almost everywhere on every subarc in $U_j$. If $K$ is empty the conclusion is immediate with $L(K)=0$; henceforth use the finite cover for nonempty $K$. [L1, L2, L3, given, construct]

2.1 (The visit of a causal curve to one causally convex set is one interval.) Let $\gamma:[a,b]\to K$ be future causal and fix $j$. If $s<t$ with $\gamma(s),\gamma(t)\in V_j$, then $\gamma([s,t])\subseteq V_j$ by the defining property of $V_j$; hence the parameter set $\gamma^{-1}(V_j)$ is an interval in $[a,b]$: whenever it contains $s<t$ it contains $[s,t]$. In particular $\gamma^{-1}(V_j)$ has at most one connected component and is an interval $I_j$, possibly empty. [L1, step 1.1, given]

3.1 (Length over a compact part of one visit.) For every compact nondegenerate $[s,t]\subset I_j$, the curve image lies in $V_j\subset U_j$, so the fundamental theorem in [L4] and step 1.1 give $\int_s^t\sqrt{h(\gamma',\gamma')}\le c_j\int_s^t(x_j^0\circ\gamma)'=c_j(x_j^0(\gamma(t))-x_j^0(\gamma(s)))\le c_jM_j$. The restricted speed is integrable, since the coordinate derivatives are integrable and dominate it. The relatively open visit $I_j=\gamma^{-1}(V_j)$ need not contain its endpoints; only compact subintervals contained in $I_j$ are used in this argument. [step 2.1, step 1.1, L2, L4, given, algebra]

4.1 (Finite compact-interval cover and length sum.) The relatively open intervals $I_j$ form a finite cover of the compact parameter interval $[a,b]$. A sufficiently fine finite partition has each of its closed subintervals contained in some $I_j$, by a Lebesgue number of this cover. Assign each partition piece to the least such $j$; this requires only finitely many choices. For every index used, let $J_j$ be the closed interval from the least left endpoint to the greatest right endpoint of its assigned pieces. As $I_j$ is an interval, $J_j\subset I_j$; these finitely many compact intervals cover $[a,b]$. Step 3.1 applies on each $J_j$. The nonnegative integral over their union is at most the sum of their integrals, so the global speed is integrable and $\ell_h(\gamma)\le\sum_j\int_{J_j}\sqrt{h(\gamma',\gamma')}\le\sum_{j=1}^m c_jM_j=:L(K)<\infty$, with unused indices contributing no interval. If $a=b$ the length is zero. For an arclength-parametrized curve $\ell_h(\gamma)=b-a$, giving the second assertion. No possibly missing visit endpoint is evaluated. [step 2.1, step 3.1, L3, L4, given, algebra]

5.1 (Imprisonment form.) There is no sequence of future causal curves with images in a fixed compact $K$ and auxiliary lengths tending to infinity: each length is bounded by the same $L(K)$ from step 4.1. Equivalently, there is no family of $h$-arclength-parametrized future causal curves with images in $K$ and parameter-domain lengths tending to infinity. [step 4.1, given]

6.1 (Conclusion.) The finite causally convex cover, the interval visit estimate and the nonnegative integral bound establish both assertions, with exactly the declared calculus premises. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- **Strong causality is used only through a finite causally convex cover.** No compactness of causal diamonds, no time function and no completeness are used; the metric $h$ enters only through the local bound of [L2].

- **Sharpness.** The conclusion fails without strong causality: on the flat cylinder a closed causal loop contained in a compact set can be traversed with arbitrarily large auxiliary length.

- **Instance.** The auxiliary metric $h'$ of [[thm-gr-auxiliary-complete-riemannian-metric]] is a smooth positive definite metric to which the bound applies; the constant $L(K)$ then depends on the choice of $h$.
