---
id: lem-gr-intersection-of-developments
kind: lemma
title: "The intersection of two developments of the same data sharing the initial Cauchy surface is again a development"
status: draft
origin: session
domain: mathematics
dependency_level: 28
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-maximal-geodesics-and-extension, lem-gr-compact-past-above-cauchy-set, lem-gr-strong-causality-compact-length-bound, lem-gr-globally-hyperbolic-causal-structure, thm-gr-auxiliary-complete-riemannian-metric, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-cauchy-set-topology-and-graph, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-metric-convergence, def-complete-metric-space, def-interval, def-continuity-real]
dependency_roles:
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
  precheck: pending
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

[L1] Convexity in the ambient development: every future causal curve in $M$ from $\Sigma$ to a point of $U_i\cap I^+(\Sigma)$ is contained in $U_i$, and every causal curve in $M$ with both endpoints in $U_i$ is contained in $U_i$, for $i=1,2$ ([[lem-gr-subdevelopment-convexity]] clauses (a) and (c)).

[L2] Cauchy properties and the side decomposition: every causal curve in $U_i$ that is inextendible in $U_i$ meets $\Sigma$ in exactly one parameter value; $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$; and every closed causal segment lies on an inextendible causal curve of the ambient manifold, up to a strictly increasing affine reparametrization ([[def-gr-development-and-data-fixing-isometry]] clause (a), [[lem-gr-cauchy-set-topology-and-graph]] clause (a), [[lem-gr-maximal-geodesics-and-extension]] clause (c)).

[L3] Compact pasts, causality and length bounds in $M$: $M$ is globally hyperbolic by [[thm-gr-cauchy-surface-implies-globally-hyperbolic]], hence strongly causal with compact causal diamonds; for every $q\in M$ the set $J^-(q)\cap J^+(\Sigma)$ is compact, and so is the time reverse $J^+(q)\cap J^-(\Sigma)$ (apply the first statement to the time-reversed development); for every compact $K\subseteq M$ there is $L(K)<\infty$ bounding the auxiliary arclength of every causal curve with image in $K$; and the causal relation is closed ([[def-gr-causal-conditions-and-global-hyperbolicity]], [[lem-gr-compact-past-above-cauchy-set]], [[lem-gr-strong-causality-compact-length-bound]], [[lem-gr-globally-hyperbolic-causal-structure]]).

[L4] The auxiliary metric $h$ of [[thm-gr-auxiliary-complete-riemannian-metric]] has a complete distance inducing the topology. Distance between two points of a compact subarc is at most its $h$-length. Thus finite total tail length makes image points Cauchy at that end, without changing the original parametrization ([[def-metric-convergence]], [[def-complete-metric-space]], [[def-continuity-real]]).

[L5] Inextendibility in an open submanifold means the absence of a point limit at either parameter end, including an infinite end ([[def-gr-causal-curves-and-reachability]] clause (d)). Convergence to a point of an open submanifold with values in that submanifold is convergence in its manifold topology.

No choice beyond the stated Countable and Dependent Choice premises is used.

## Proof

**Proof technique:** direct. Write $W:=U_1\cap U_2$.

1.1 (Setup.) Let $\gamma:I\to W$ be a future causal curve that is inextendible in $W$, and suppose for contradiction that $\gamma$ misses $\Sigma$. Then $\gamma$ is a causal curve in each $U_i$ and in $M$. Since $I$ is an interval and $\gamma$ is continuous, $\gamma(I)$ is connected; by [L2] it is contained in $I^+(\Sigma)$ or in $I^-(\Sigma)$. Replacing $N$ by $-N$ throughout if necessary (which exchanges $I^+$ and $I^-$, preserves every hypothesis and the property of being a development, and exchanges past and future), we may assume $\gamma(I)\subseteq I^+(\Sigma)$. [given, L2, algebra]

2.1 (A compact set containing the past part.) Fix $t_0\in I$. By [L3] the set $K:=J^+(\Sigma)\cap J^-(\gamma(t_0))$ is compact. For every $t\in I$ with $t\le t_0$ one has $\gamma(t)\le\gamma(t_0)$ (subsegment of the future causal curve $\gamma$) and $\gamma(t)\in I^+(\Sigma)\subseteq J^+(\Sigma)$, so $\gamma(t)\in K$. [step 1.1, L3, algebra]

3.1 (The original past tail converges.) For $s<t_0$ put $L(s)=\ell_h(\gamma|_{[s,t_0]})$, which is bounded above by $L(K)$ by [L3]. Write $L_*=\sup_{s<t_0}L(s)$. For $s<t<t_0$, integral additivity gives $\ell_h(\gamma|_{[s,t]})=L(s)-L(t)\le L_*-L(t)$, which tends to zero as $t$ approaches the past parameter end. Choose a decreasing coinitial sequence in this real interval. Distance is bounded by these tail lengths, so its image points are Cauchy and converge to $y$ by [L4]. The same bound shows the entire original past tail converges to $y$. Compactness of $K$ makes it closed, so $y\in K\subseteq J^+(\Sigma)$. This works at finite and infinite original parameter ends without reparametrization. [step 2.1, L3, L4, algebra]

4.1 (Closed causality puts $y$ in the intersection.) Fix $s<t_0$. For every earlier $t<s$, $\gamma(t)\le\gamma(s)$. The limit in step 3.1 and closedness of the ambient causal relation [L3] give $y\le\gamma(s)$. If $y\notin U_1$, then $y\notin\Sigma$ since $\Sigma\subset U_1$. As $y\in J^+(\Sigma)$, a causal curve from some $z\in\Sigma$ to $y$, concatenated with a causal curve from $y$ to $\gamma(s)$, gives a causal curve from $\Sigma$ to a point of $U_1\cap I^+(\Sigma)$ passing through $y\notin U_1$. This contradicts [L1]. (If $y=\gamma(s)$ it already belongs to $W$.) Therefore $y\in U_1$, and the same argument gives $y\in U_2$. Thus $y\in W=U_1\cap U_2$. Only the closed causal relation is used to form this segment; no endpoint extension preserving an arbitrary original parameter is asserted. [step 3.1, L1, L3, contradiction, algebra]

5.1 ($\gamma$ is extendible in $W$, contradiction.) By steps 3.1 and 4.1, $\gamma(t)\to y\in W$ as $t\to a^+$ with all values in $W$; by [L5] this is convergence in the open submanifold $W$, so $\gamma$ converges to a point of $W$ at its past end. This contradicts that $\gamma$ is inextendible in $W$ in the sense of [[def-gr-causal-curves-and-reachability]] clause (d). Therefore $\gamma$ meets $\Sigma$ at least once. [step 3.1, step 4.1, L5, contradiction]

6.1 (Uniqueness of the meeting and conclusion.) Suppose $t_1<t_2$ in $I$ with $\gamma(t_1),\gamma(t_2)\in\Sigma$. By [L2] there is an inextendible causal curve $\hat\gamma:J\to M$ and a strictly increasing affine $\rho$ with $\hat\gamma\circ\rho=\gamma|_{[t_1,t_2]}$; since $\hat\gamma$ is a causal curve in the development $M$ with Cauchy surface $\Sigma$, it meets $\Sigma$ in at most one parameter value, but $\hat\gamma(\rho(t_1)),\hat\gamma(\rho(t_2))\in\Sigma$ with $\rho(t_1)<\rho(t_2)$, a contradiction. Hence the meeting is unique, and $\Sigma$ is a Cauchy set of the Lorentzian manifold $W$ in the sense of [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c) (past-directed curves are the time reverse of the argument). Moreover $W$ is an open submanifold of $M$ with the restricted Lorentzian metric, time orientation and matter fields; the field equations are local and hold on $M$, hence on $W$; and $j:\Sigma\to W$ is an embedding whose induced metric, second fundamental form and matter data are those of the data. Therefore $W$ is a development of the same data in the sense of [[def-gr-development-and-data-fixing-isometry]] clause (a). [step 5.1, L2, L3, algebra] ∎

## Remarks

The statement is the intersection step used in the transitivity argument for the identifications of the universal development. The proof isolates the two structural inputs: the past (or future) part of an inextendible curve in $W$ that stays on one side of $\Sigma$ is imprisoned in the compact causal diamond $J^\pm(\Sigma)\cap J^\mp(\gamma(t_0))$, where the auxiliary length bound forces a limit; and convexity of each $U_i$ then forces that limit to lie in $U_1\cap U_2$, contradicting inextendibility in $W$. No Zorn's lemma or arbitrary-index Axiom of Choice is used; the stated Countable and Dependent Choice premises belong to the causal and length suppliers.
