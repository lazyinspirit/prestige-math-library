---
id: lem-gr-strong-causality-compact-length-bound
kind: lemma
title: "Strong causality bounds the auxiliary length of causal curves contained in a compact set"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-conditions-and-global-hyperbolicity, lem-gr-dominating-cone-bounds, def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-absolutely-continuous-function, thm-absolutely-continuous-functions-have-integrable-derivatives, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-continuity-real, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, def-compact-space]
dependency_roles:
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  lem-gr-dominating-cone-bounds: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
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

Let $(M,g,N)$ be a strongly causal time-oriented smooth Lorentzian
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

**Given:** A strongly causal spacetime, a smooth positive definite metric $h$, a compact set $K$ and a future causal curve $\gamma:[a,b]\to K$.

[L1] Strong causality: for every $p\in M$ and every open $U\ni p$ there is an open $V$ with $p\in V\subseteq U$ such that for every future causal curve and all $s<t$ with $\gamma(s),\gamma(t)\in V$ one has $\gamma([s,t])\subseteq V$ ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (b)).

[L2] Around every point there are charts of [[lem-gr-dominating-cone-bounds]] clauses (a)-(c): a chart $(U,x)$ with $n=\partial_0$, a constant $K_x\ge1$ with $|v^i|\le K_xv^0$ for future causal $v$, and $x^0$ strictly increasing along future causal curves; moreover the components $h_{ab}$ of $h$ in the chart are bounded on $U$, so there is $c\ge1$ with $\sqrt{h(\gamma',\gamma')}\le c\,(x^0\circ\gamma)'$ almost everywhere along a future causal curve in $U$ ([[lem-gr-dominating-cone-bounds]] clauses (a)-(c), [[def-gr-smooth-covariant-two-tensor-field]], [[def-continuity-real]]).

[L3] Continuous images of compact sets are compact, and compact subsets of a Hausdorff space are closed; a compact set has a finite subcover from every open cover ([[def-compact-space]]).

[L4] Absolutely continuous calculus: the length $\ell_h$ is the integral of the nonnegative integrable function $\sqrt{h(\gamma',\gamma')}$, and integrals are additive and monotone over intervals ([[def-absolutely-continuous-function]], [[thm-absolutely-continuous-functions-have-integrable-derivatives]], [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

## Proof

**Proof technique:** direct.

1.1 (A finite cover by causally convex dominating charts.) For each $p\in K$ choose a chart $U_p$ around $p$ of the kind [L2] and, applying strong causality [L1] to the neighborhood $U_p$, an open set $V_p$ with $p\in V_p\subseteq U_p$ such that every future causal curve with two parameter values in $V_p$ has its subarc between them contained in $V_p$. The sets $V_p$ cover $K$, so by compactness there are finitely many points $p_1,\dots,p_m\in K$ with $K\subseteq V_{p_1}\cup\dots\cup V_{p_m}$. Write $V_j:=V_{p_j}$, $U_j:=U_{p_j}$, let $x_j$ be the chart of $U_j$, and set $$M_j:=\sup_{q\in U_j}x_j^0(q)-\inf_{q\in U_j}x_j^0(q)<\infty,\qquad C_j:=\max(1,K_j)\cdot\Bigl(\sup_{W_j}\sqrt{\textstyle\sum_{ab}h_{ab}^2}\Bigr)$$ where $W_j$ is a compact coordinate neighbourhood with $V_j\subseteq W_j\Subset U_j$, enlarged if necessary to at least one. [L1, L2, L3, given, construct]

2.1 (The visit of a causal curve to one causally convex set is one interval.) Let $\gamma:[a,b]\to K$ be future causal and fix $j$. If $s<t$ with $\gamma(s),\gamma(t)\in V_j$, then $\gamma([s,t])\subseteq V_j$ by the defining property of $V_j$; hence the parameter set $\gamma^{-1}(V_j)$ is an interval in $[a,b]$: whenever it contains $s<t$ it contains $[s,t]$. In particular $\gamma^{-1}(V_j)$ has at most one connected component and is an interval $I_j$, possibly empty. [L1, step 1.1, given]

3.1 (Length over one visit.) Assume $I_j=[\alpha_j,\beta_j]\cap[a,b]\ne\emptyset$, and let $c_j$ be the constant of [L2] for the chart $U_j$, so that $\sqrt{h(\gamma',\gamma')}\le c_j\,(x_j^0\circ\gamma)'$ almost everywhere on $I_j$ (the curve lies in $U_j$ there). Then $$\ell_h(\gamma|_{I_j})=\int_{\alpha_j}^{\beta_j}\sqrt{h(\gamma',\gamma')}\le c_j\int_{\alpha_j}^{\beta_j}(x_j^0\circ\gamma)'=c_j\bigl(x_j^0(\gamma(\beta_j))-x_j^0(\gamma(\alpha_j))\bigr)\le c_jM_j,$$ where the last inequality uses that the increase of a coordinate along an interval contained in its chart is at most the coordinate range $M_j$, and that $x_j^0\circ\gamma$ is nondecreasing. [step 2.1, L2, L4, given, algebra]

4.1 (Sum over the finite cover.) The sets $V_j$ cover $K$, so $[a,b]=\bigcup_{j=1}^m I_j$; by step 2.1 each $I_j$ is an interval, so by subadditivity of the integral over a finite cover by intervals, $$\ell_h(\gamma)=\ell_h\Bigl(\gamma|_{\bigcup_jI_j}\Bigr)\le\sum_{j=1}^m\ell_h(\gamma|_{I_j})\le\sum_{j=1}^m c_jM_j=:L(K)<\infty.$$ This proves the main assertion; the statement about arclength-parametrized curves follows from $\ell_h(\gamma)=b-a$. [step 3.1, L4, given, algebra]

5.1 (Imprisonment form.) If a sequence of future causal curves $\gamma_k:[a_k,b_k]\to M$ has all images contained in the fixed compact set $K$ and $\ell_h(\gamma_k)\to\infty$, then no subsequence can be parametrized by $h$-arclength on domains of bounded length; equivalently, there is no family of $h$-arclength-parametrized future causal curves with images in $K$ and domain lengths tending to infinity. This is the contrapositive of step 4.1. [step 4.1, given]

6.1 (Conclusion.) Steps 1.1, 2.1, 3.1 and 4.1 prove the length bound and step 5.1 records its imprisonment form. ∎ [step 4.1, step 5.1]

## Remarks

- **Strong causality is used only through a finite causally convex cover.** No compactness of causal diamonds, no time function and no completeness are used; the metric $h$ enters only through the local bound of [L2].

- **Sharpness.** The conclusion fails without strong causality: on the flat cylinder a closed causal loop contained in a compact set can be traversed with arbitrarily large auxiliary length.

- **Instance.** The auxiliary metric $h'$ of [[thm-gr-auxiliary-complete-riemannian-metric]] is a smooth positive definite metric to which the bound applies; the constant $L(K)$ then depends on the choice of $h$.
