---
id: lem-gr-intersection-of-developments
kind: lemma
title: "The intersection of two developments of the same data sharing the initial Cauchy surface is again a development"
status: draft
origin: session
domain: mathematics
dependency_level: 29
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-basic-limit-curve, lem-gr-causal-curve-conventions, thm-metric-compactness-equivalences, def-countable-choice, def-dependent-choice, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-maximal-geodesics-and-extension, lem-gr-compact-past-above-cauchy-set, lem-gr-strong-causality-compact-length-bound, lem-gr-globally-hyperbolic-causal-structure, thm-gr-auxiliary-complete-riemannian-metric, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-cauchy-set-topology-and-graph, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-metric-convergence, def-complete-metric-space, def-interval, def-continuity-real]
dependency_roles:
  lem-gr-basic-limit-curve: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  thm-metric-compactness-equivalences: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-compact-past-above-cauchy-set: mathematical-premise
  lem-gr-strong-causality-compact-length-bound: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-complete-metric-space: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the assertion in the proof of Theorem 2.8 that the intersection U_{alpha_i alpha_k} intersected with the preimage of U_{alpha_k alpha_l} is a common globally hyperbolic development, printed p. 22"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: causal convexity and domains of dependence, Proposition 2.18 (no imprisoned inextendible curve), Proposition 3.43 and Corollary 3.36, printed pp. 34 and 97-99"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): globally hyperbolic domains, Theorem 2.9.9 and its proof, printed pp. 46-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) for the global causal structure and auxiliary-length calculus used below.

Let $(M,g,N,j,\psi)$ be a development of the given data
([[def-gr-development-and-data-fixing-isometry]] clause (a)), write
$\Sigma:=j(\Sigma)$, and let $U_1,U_2\subseteq M$ be open with
$\Sigma\subseteq U_1\cap U_2$ such that $(U_i,g|_{U_i},N|_{U_i},j,\psi|_{U_i})$
is a development of the same data for $i=1,2$
([[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a), with
the identity as the embedding where it is defined; equivalently, both $U_i$
carry restricted development structures over the same initial embedding $j$).
Then $(U_1\cap U_2,g|_{U_1\cap U_2},N|_{U_1\cap U_2},j,\psi|_{U_1\cap U_2})$ is
a development of the same data.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, a development $(M,g,N,j,\psi)$ of the given data and open sets $U_1,U_2\subseteq M$ containing $\Sigma=j(\Sigma)$, each carrying a development structure of the same data over $j$.

[L1] Convexity in the ambient development: every future causal curve in $M$ from $\Sigma$ to a point of $U_i\cap I^+(\Sigma)$ is contained in $U_i$; every future causal curve from a point of $U_i\cap I^-(\Sigma)$ to $\Sigma$ is contained in $U_i$; and every causal curve in $M$ with both endpoints in $U_i$ is contained in $U_i$, for $i=1,2$ ([[lem-gr-subdevelopment-convexity]] clauses (a)-(c)).

[L2] Cauchy properties and the side decomposition: every causal curve in $U_i$ that is inextendible in $U_i$ meets $\Sigma$ in exactly one parameter value; $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$; and every closed causal segment lies on an inextendible causal curve of the ambient manifold, up to a strictly increasing affine reparametrization ([[def-gr-development-and-data-fixing-isometry]] clause (a), [[lem-gr-cauchy-set-topology-and-graph]] clause (a), [[lem-gr-maximal-geodesics-and-extension]] clause (c)).

[L3] Compact truncated cones, causality and length bounds in $M$: $M$ is globally hyperbolic by [[thm-gr-cauchy-surface-implies-globally-hyperbolic]], hence strongly causal with compact causal diamonds; $J^-(q)\cap J^+(\Sigma)$ is compact by [[lem-gr-compact-past-above-cauchy-set]]. For the dual $J^+(q)\cap J^-(\Sigma)$, repeat that lemma's geometric argument with curves from $q$ to $\Sigma$ in the given orientation. Bounded auxiliary lengths put any sequence in a compact ball about $q$. If the lengths are unbounded, the future half-line limit starting at $q$ stays in the closed set $J^-(\Sigma)$, cannot meet $\Sigma$ without its later values also lying on the acausal surface, and cannot have a Cauchy crossing on a past extension because $q\in I^-(\Sigma)$. This contradicts the Cauchy property. Closedness of $J^-(\Sigma)=\Sigma\cup I^-(\Sigma)$ follows from the closed surface and the open disjoint side decomposition; the cases $q\in\Sigma$ and $q\in I^+(\Sigma)$ give respectively $\{q\}$ and the empty set. The dual half-line limit and one-sided extension are supplied by [[lem-gr-basic-limit-curve]] clause (b) and [[lem-gr-causal-curve-conventions]] clause (d); sequential compactness implies compactness by [[thm-metric-compactness-equivalences]]. This argument uses only the metric, causal curves and Cauchy property, and never changes the fixed model, $N$, $K$ or matter fields. For every compact $K\subseteq M$ there is $L(K)<\infty$ bounding auxiliary arclength, and the causal relation is closed ([[def-gr-causal-conditions-and-global-hyperbolicity]], [[lem-gr-strong-causality-compact-length-bound]], [[lem-gr-globally-hyperbolic-causal-structure]]).

[L4] The auxiliary metric $h$ of [[thm-gr-auxiliary-complete-riemannian-metric]] has a complete distance inducing the topology. Distance between two points of a compact subarc is at most its $h$-length. Thus finite total tail length makes image points Cauchy at that end, without changing the original parametrization ([[def-metric-convergence]], [[def-complete-metric-space]], [[def-continuity-real]]).

[L5] Inextendibility in an open submanifold means the absence of a point limit at either parameter end, including an infinite end ([[def-gr-causal-curves-and-reachability]] clause (d)). Convergence to a point of an open submanifold with values in that submanifold is convergence in its manifold topology.

No choice beyond the stated Countable and Dependent Choice premises is used.

## Proof
**Proof technique:** direct. Write $W:=U_1\cap U_2$.

1.1 (Setup and side split.) Let $\gamma:I\to W$ be a future causal curve that is inextendible in $W$, and suppose for contradiction that $\gamma$ misses $\Sigma$. Then $\gamma$ is a causal curve in each $U_i$ and in $M$. Since $I$ is an interval and $\gamma$ is continuous, $\gamma(I)$ is connected; by [L2] it is contained in exactly one of $I^+(\Sigma)$ or $I^-(\Sigma)$. We treat these two cases separately while keeping the given time orientation and matter fields fixed. [given, L2, algebra]

2.1 (The compact diamond in the future-side case.) Assume $\gamma(I)\subseteq I^+(\Sigma)$ and fix $t_0\in I$. By [L3] the set $K:=J^+(\Sigma)\cap J^-(\gamma(t_0))$ is compact. For every $t\le t_0$ in $I$, $\gamma(t)\le\gamma(t_0)$ and $\gamma(t)\in I^+(\Sigma)\subseteq J^+(\Sigma)$, so $\gamma(t)\in K$. [step 1.1, L3, algebra]

2.2 (The compact diamond in the past-side case.) Assume instead $\gamma(I)\subseteq I^-(\Sigma)$ and fix $t_0\in I$. By [L3] the time-dual set $K_-:=J^+(\gamma(t_0))\cap J^-(\Sigma)$ is compact. For every $t\ge t_0$ in $I$, $\gamma(t_0)\le\gamma(t)$ and $\gamma(t)\in I^-(\Sigma)\subseteq J^-(\Sigma)$, so $\gamma(t)\in K_-$. [step 1.1, L3, algebra]

3.1 (The future-side past tail converges.) For $s<t_0$ put $L(s)=\ell_h(\gamma|_{[s,t_0]})$, bounded by $L(K)$ by [L3], and let $L_*=\sup_{s<t_0}L(s)$. For $s<t<t_0$, additivity gives $\ell_h(\gamma|_{[s,t]})=L(s)-L(t)\le L_*-L(t)$, which tends to zero as $t$ approaches the past parameter end. A decreasing coinitial sequence and completeness of $d_h$ therefore give a limit $y$; the same tail bound gives convergence of the whole past tail. Since $K$ is closed, $y\in K\subseteq J^+(\Sigma)$. This works at finite and infinite parameter ends without reparametrizing $\gamma$. [step 2.1, L3, L4, algebra]

3.2 (The past-side future tail converges.) For $s>t_0$ put $L(s)=\ell_h(\gamma|_{[t_0,s]})$, bounded by $L(K_-)$ by [L3], and let $L_*=\sup_{s>t_0}L(s)$. For $t_0<s<t$ before the future parameter end, additivity gives $\ell_h(\gamma|_{[s,t]})=L(t)-L(s)\le L_*-L(s)$, which tends to zero as $s$ approaches that end. A cofinal increasing sequence and completeness of $d_h$ give a limit $y$; the same tail bound gives convergence of the whole future tail. Since $K_-$ is closed, $y\in K_-\subseteq J^-(\Sigma)$. [step 2.2, L3, L4, algebra]

4.1 (The future-side limit lies in the intersection.) Fix $s<t_0$. For every earlier $t<s$, $\gamma(t)\le\gamma(s)$, so closedness of $\le$ and step 3.1 give $y\le\gamma(s)$. If $y\notin U_1$, then $y\notin\Sigma$ and, since $y\in J^+(\Sigma)$, there is a causal curve from $\Sigma$ to $y$. Concatenating it with a causal curve from $y$ to $\gamma(s)\in U_1\cap I^+(\Sigma)$ contradicts past convexity [L1]. The same argument gives $y\in U_2$, hence $y\in W$. Only closedness of the causal relation is used to obtain the segment to $\gamma(s)$; no endpoint extension preserving the original parameter is asserted. [step 3.1, L1, L3, contradiction, algebra]

4.2 (Closed causality and future convexity put $y$ in the intersection.) Fix $s>t_0$. For all later $t>s$, $\gamma(s)\le\gamma(t)$, so closedness of $\le$ and step 3.2 give $\gamma(s)\le y$. If $y\notin U_1$, then $y\notin\Sigma$ and $y\in J^-(\Sigma)$ gives a causal curve from $y$ to some point of $\Sigma$. Concatenate a causal curve from $\gamma(s)\in U_1\cap I^-(\Sigma)$ to $y$ with that curve to $\Sigma$. Future convexity [L1] forces the concatenation, including $y$, to lie in $U_1$, a contradiction. The same argument gives $y\in U_2$, hence $y\in W$. [step 3.2, L1, L3, contradiction, algebra]

5.1 (The future-side contradiction.) By steps 3.1 and 4.1, $\gamma(t)\to y\in W$ as $t$ approaches its past parameter end. This contradicts inextendibility in $W$ under the no-limit convention [L5]. Thus the future-side case cannot occur. [step 3.1, step 4.1, L5, contradiction]

5.2 (The past-side contradiction.) By steps 3.2 and 4.2, $\gamma(t)\to y\in W$ as $t$ approaches its future parameter end. This contradicts inextendibility in $W$ under the no-limit convention [L5]. Thus the past-side case also cannot occur, and the curve must meet $\Sigma$. [step 3.2, step 4.2, L5, contradiction]

6.1 (Uniqueness of the meeting and conclusion.) Suppose $t_1<t_2$ in $I$ with $\gamma(t_1),\gamma(t_2)\in\Sigma$. By [L2] there is an inextendible causal curve $\hat\gamma:J\to M$ and a strictly increasing affine $\rho$ with $\hat\gamma\circ\rho=\gamma|_{[t_1,t_2]}$; since $\hat\gamma$ is a causal curve in $M$ with Cauchy surface $\Sigma$, it meets $\Sigma$ in at most one parameter value, but $\hat\gamma(\rho(t_1)),\hat\gamma(\rho(t_2))\in\Sigma$ with $\rho(t_1)<\rho(t_2)$, a contradiction. Hence the meeting is unique. A past-directed parametrization is changed to a future-directed one by reversing its parameter; the image and number of visits to $\Sigma$ are unchanged, so the same conclusion holds for past causal curves. Thus $\Sigma$ is Cauchy in $W$. Moreover, $W$ is an open submanifold of $M$ with the restricted metric, time orientation and matter fields; the field equations are local and hold on $M$, hence on $W$; and $j:\Sigma\to W$ has the original induced data. Therefore $W$ is a development of the same data in the sense of [[def-gr-development-and-data-fixing-isometry]] clause (a). [step 5.1, step 5.2, L2, L3, algebra] ∎

## Remarks

The statement is the intersection step used in the transitivity argument for the identifications of the universal development. The proof isolates the two structural inputs: the past (or future) part of an inextendible curve in $W$ that stays on one side of $\Sigma$ is imprisoned in the compact causal diamond $J^\pm(\Sigma)\cap J^\mp(\gamma(t_0))$, where the auxiliary length bound forces a limit; and convexity of each $U_i$ then forces that limit to lie in $U_1\cap U_2$, contradicting inextendibility in $W$. No Zorn's lemma or arbitrary-index Axiom of Choice is used; the stated Countable and Dependent Choice premises belong to the causal and length suppliers.
