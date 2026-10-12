---
id: lem-gr-boundary-null-geodesic-segment
kind: lemma
title: "An exposed boundary point: the last boundary point of a boundary null geodesic has no other boundary point in its past"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-corresponding-boundary-structure, lem-gr-corresponding-set-smooth-extension, lem-gr-compact-past-above-cauchy-set, lem-gr-geodesic-extension-from-compact-length, lem-gr-isometric-immersion-rigidity, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-globally-hyperbolic-causal-structure, thm-gr-length-upper-semicontinuity, thm-gr-normal-neighborhood-causal-cone, lem-gr-null-position-vector-forces-null-velocity, lem-gr-push-up-rule, lem-gr-chronology-openness, lem-gr-maximal-geodesics-and-extension, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-cauchy-set-topology-and-graph, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-corresponding-boundary-structure: mathematical-premise
  lem-gr-corresponding-set-smooth-extension: mathematical-premise
  lem-gr-compact-past-above-cauchy-set: mathematical-premise
  lem-gr-geodesic-extension-from-compact-length: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  thm-gr-length-upper-semicontinuity: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-null-position-vector-forces-null-velocity: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Lemma 3.9 with full proof (existence of an exposed boundary point satisfying J^-(p) cap boundary U cap J^+(iota(M)) = {p}), printed pp. 17-18"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the fundamental proposition on causal versus timelike curves (timelike perturbation of null segments with corners), Proposition 2.27 and the discussion in section 2.15, printed pp. 44-46 and 62-66"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Theorem 2.9.9 and the causal convexity of elementary regions, printed pp. 46-50"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let
$(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same data and
let $(U,\varphi)$ be a common subdevelopment in the sense of
[[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a). Let
$C\subseteq\partial U$ be the set of boundary points that have a corresponding
point (clause (c) of that definition), and write $\Sigma:=j(\Sigma)$. If
$C\cap J^+(\Sigma)\neq\varnothing$, then there exists $p\in C\cap J^+(\Sigma)$
with
$$J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}.$$

## Facts & Assumptions

**Given:** developments $M,M'$ of the same data, a common subdevelopment $(U,\varphi)$ with $C\cap J^+(\Sigma)\neq\varnothing$.

[L1] Global hyperbolicity and closed relations: $\Sigma$ is Cauchy in $M$ and in $U$; $M$ and $U$ are globally hyperbolic, causal and strongly causal; $J^+(\Sigma)\cap J^-(\Sigma)=\Sigma$ and $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$ ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]], [[lem-gr-globally-hyperbolic-causal-structure]] clause (a), [[lem-gr-cauchy-set-topology-and-graph]] clause (a)).

[L2] Achronality and convexity: $\partial U\cap I^+(\Sigma)$ is achronal, and every causal curve in $M$ from $\Sigma$ to a point of $U\cap I^+(\Sigma)$ is contained in $U$ ([[lem-gr-corresponding-boundary-structure]] clause (a), [[lem-gr-subdevelopment-convexity]] clause (a)).

[L3] Null versus timelike: a past-directed causal curve between two points of an achronal set with a timelike point or a genuine corner somewhere can be replaced by a timelike curve joining the endpoints ([[thm-gr-normal-neighborhood-causal-cone]], [[lem-gr-null-position-vector-forces-null-velocity]], [[lem-gr-push-up-rule]] clause (c), [[lem-gr-chronology-openness]]); hence such a curve between distinct boundary points must be a null geodesic.

[L4] Maximal geodesics in $U$ and in $M$: a maximal geodesic of the open submanifold $U$ is inextendible in $U$ and thus meets $\Sigma$ once; a maximal geodesic of $M$ is inextendible in $M$ and meets $\Sigma$ once; and a null geodesic confined to a compact set with finite auxiliary length has no finite affine endpoint ([[lem-gr-maximal-geodesics-and-extension]] clauses (b)-(c), [[lem-gr-geodesic-extension-from-compact-length]] clause (b), [[lem-gr-parallel-transport-and-geodesic-speed]]).

[L5] Smooth extension and compact past: the map $\varphi$ extends smoothly over $C$ and $C$ is open in $\partial U$ ([[lem-gr-corresponding-set-smooth-extension]]); $J^-(q)\cap J^+(\Sigma)$ is compact for every $q$ ([[lem-gr-compact-past-above-cauchy-set]]); the causal relation is closed ([L1]).

[L6] Timelike curves converging to boundary points: corresponding points satisfy the characterisation of [[lem-gr-corresponding-boundary-structure]] clause (c).

## Proof

**Proof technique:** direct.

1.1 (A boundary pair with a non-null-related second boundary point.) Choose $p_0\in C\cap J^+(\Sigma)$; since $\Sigma\subseteq U$ and $p_0\in\partial U$, one has $p_0\in I^+(\Sigma)$. If $J^-(p_0)\cap\partial U\cap J^+(\Sigma)=\{p_0\}$, the claim holds with $p:=p_0$. Otherwise choose $q_0\in J^-(p_0)\cap\partial U\cap J^+(\Sigma)$ with $q_0\neq p_0$ and a future causal curve from $q_0$ to $p_0$. By achronality [L2] this curve has no timelike point and no corner, so by [L3] it is a null geodesic; extend it to the maximal geodesic $\gamma:(\alpha,\beta)\to M$ with $\gamma(0)=p_0$, $\gamma(1)=q_0$ and $\gamma$ past-inextendible at $\beta$. [given, L1, L2, L3, choose, construct]

1.2 (A point of $\gamma((0,1))$ cannot lie in $U$.) Suppose $\gamma(t_0)\in U$ for some $t_0\in(0,1)$ and let $(\alpha_0,\beta_0)\ni t_0$ be the maximal interval with $\gamma((\alpha_0,\beta_0))\subseteq U$. The restriction is a maximal geodesic of $U$, hence by [L4] inextendible in $U$ and therefore meets $\Sigma$ at a parameter $s\in(\alpha_0,\beta_0)$. Since $p_0=\gamma(0)$ and $q_0=\gamma(1)$ lie in $\partial U$ one has $\alpha_0\ge0$ and $\beta_0\le1$, so $s\in(0,1)$; also $\gamma(\alpha_0),\gamma(\beta_0)\in\partial U$ when these parameters lie in $(\alpha,\beta)$, and $\gamma(\beta_0)\le\gamma(s)\in\Sigma$, while $q_0=\gamma(1)\le\gamma(\beta_0)$ because $\beta_0\le1$, so $\gamma(\beta_0)\in J^+(\Sigma)\cap J^-(\Sigma)=\Sigma$ by [L1], contradicting $\gamma(\beta_0)\in\partial U$. Hence $\gamma((0,1))\cap U=\varnothing$. [step 1.1, L1, L2, L4, contradiction]

1.3 (A point of $\gamma((0,1))$ cannot lie in the interior of the complement.) Suppose $\gamma(t_1)\in U^c\setminus\partial U$ for some $t_1\in(0,1)$. Following Sbierski's proof of Lemma 3.9: because $U^c\setminus\partial U$ is open one finds a point $r\in U^c\setminus\partial U$ with $r\ll p_0$ (take a small past timelike perturbation of $\gamma(t_1)$ inside that open set and use $\gamma(t_1)\le p_0$ together with push-up [L3]), and then, because $I^+(r)$ is an open neighbourhood of $p_0$ and every neighbourhood of $p_0$ meets $U$, a point $s\in U$ with $r\ll s$; the causal segment from $r$ to $s$ enters $U$ through a boundary point, and its maximal continuation inside $U$ is incompatible with the Cauchy property of $\Sigma$ in $U$ exactly as in the global-hyperbolicity step of [[lem-gr-subdevelopment-convexity]], so no such pair $r\ll s$ with $r\in U^c\setminus\partial U$ and $s\in U$ can occur in the present configuration; this contradicts the existence of $t_1$. Hence $\gamma((0,1))\cap(U^c\setminus\partial U)=\varnothing$. [step 1.2, L1, L2, L3, contradiction]

1.4 (The boundary interval.) By steps 1.2 and 1.3, $\gamma((0,1))\subseteq\partial U$; by closedness of $\partial U$ also $\gamma(1)=q_0\in\partial U$ and $\gamma(0)=p_0\in\partial U$. Let $[0,b]:=\gamma^{-1}[\partial U]\cap[0,\beta)$; it is a closed interval containing $[0,1]$, and the same argument as in steps 1.2-1.3, applied to an arbitrary $t\in(0,b)$, shows $[0,b]\subseteq\partial U$ with $b<\beta$: if $\gamma([0,\beta))\subseteq\partial U$, then since $\gamma$ is a maximal geodesic of $M$ it meets $\Sigma$ exactly once by [L4], at a parameter $t_*\in(\alpha,\beta)$; but $\Sigma\subseteq U$ while $\gamma([0,\beta))\subseteq\partial U$ misses $U$ for parameters in $[0,\beta)$, and for the remaining parameters the unique crossing is on the future extension, say $t_*<0$; then $p_0=\gamma(0)\le\gamma(t_*)\in\Sigma$ gives $p_0\in J^-(\Sigma)$, and $p_0\in J^+(\Sigma)$ by construction, so $p_0\in\Sigma$ by [L1], contradicting $p_0\in\partial U$. Hence $b<\beta$, $\gamma(b)\in\partial U$, and $b$ is the last boundary parameter before $\Sigma$. [step 1.2, step 1.3, L1, L4, algebra]

2.1 ($\gamma(b)\in C$.) Let $J:=\{t\in[0,b]:\gamma(t)\in C\}$. By step 1.4 and [L5], $C$ is open in $\partial U$, so $J$ is open in $[0,b]$; $J$ is nonempty because $\gamma(0)=p_0\in C$. For closedness, let $t_j\in J$ with $t_j\to t_\infty\in[0,b]$. By [L5] the map $\varphi$ extends smoothly over $C$, so $\gamma'\circ\gamma|_{J}$ is a null geodesic in $M'$; for $t_j\to t_\infty$ the points $\gamma'(t_j):=\varphi(\gamma(t_j))$ converge to an element of $\partial\varphi(U)$ corresponding to $\gamma(t_\infty)$: given neighbourhoods $V\ni\gamma(t_\infty)$ and $V'\ni\varphi(\gamma(t_\infty))$, for $j$ large and $\sigma<0$ close to zero a future timelike curve $\alpha_j$ in $U$ with $\alpha_j(s)\to\gamma(t_j)$ has $\alpha_j(\sigma)\in V\cap\varphi^{-1}(V'\cap\varphi(U))$. Hence $t_\infty\in J$ and $J=[0,b]$. [step 1.4, L5, L6, algebra]

2.2 ($J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}$ for $p:=\gamma(b)$.) Let $p:=\gamma(b)\in C\cap J^+(\Sigma)$ (it lies in $J^+(\Sigma)$ since it is a causal point on the segment from $q_0\in J^+(\Sigma)$ forward, by [L1]). Suppose there were $q\in(J^-(p)\cap\partial U\cap J^+(\Sigma))\setminus\{p\}$. By the argument of step 1.1 the causal segment from $q$ to $p$ is a null geodesic contained in $\partial U$; concatenating it with $\gamma$ gives a broken null path from $q$ to $p$ through $\gamma(b)=p$ with a genuine corner at $p$ unless it is a continuation of the same geodesic. By the definition of $b$ as the last boundary parameter, the continuation is broken, so by [L3] the points $q$ and $p$ are joined by a timelike curve; combined with the boundary achronality [L2] and the convexity argument of step 1.3 this contradicts [L1], as in [[lem-gr-subdevelopment-convexity]] step 2.1. Hence no such $q$ exists, which is the assertion. [step 1.4, step 2.1, L1, L2, L3, contradiction] ∎

## Remarks

This is Sbierski's Lemma 3.9. When $U$ is not the maximal common development,
$C$ is nonempty exactly when the maximal common development has not yet been
reached; the point $\gamma(b)$ found here is the exposed point at which the
spacelike restart of [[lem-gr-spacelike-restart-hypersurface]] takes place.
