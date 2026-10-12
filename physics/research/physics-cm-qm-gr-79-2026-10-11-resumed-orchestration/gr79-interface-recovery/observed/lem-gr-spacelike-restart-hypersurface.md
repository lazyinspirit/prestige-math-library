---
id: lem-gr-spacelike-restart-hypersurface
kind: lemma
title: "The spacelike restart surface at an exposed boundary point: smoothness, spacelikeness and the past collar"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-corresponding-boundary-structure, lem-gr-corresponding-set-smooth-extension, lem-gr-boundary-null-geodesic-segment, lem-gr-exposed-boundary-point, lem-gr-time-separation-maximizers, lem-gr-compact-past-above-cauchy-set, lem-gr-isometric-immersion-rigidity, thm-gr-convex-normal-neighborhoods, thm-gr-normal-neighborhood-causal-cone, lem-gr-normal-neighborhood-length-monotonicity, thm-gr-local-geodesics-and-exponential-map, lem-gr-joint-exponential-diffeomorphism, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-push-up-rule, lem-gr-chronology-openness, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-embedded-submanifold-and-slice-chart, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-corresponding-boundary-structure: mathematical-premise
  lem-gr-corresponding-set-smooth-extension: mathematical-premise
  lem-gr-boundary-null-geodesic-segment: mathematical-premise
  lem-gr-exposed-boundary-point: mathematical-premise
  lem-gr-time-separation-maximizers: mathematical-premise
  lem-gr-compact-past-above-cauchy-set: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-normal-neighborhood-causal-cone: mathematical-premise
  lem-gr-normal-neighborhood-length-monotonicity: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the construction of the spacelike surface S := tau_q^{-1}(tau_0) cap W cap I^+(iota(M)) and its properties in the proof of Theorem 3.6, printed p. 19"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: continuous time separation and the Gauss lemma, Theorems 2.6, 2.37 and 2.41 printed pp. 27 and 41-44"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let
$(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same data
([[def-gr-development-and-data-fixing-isometry]]), let $(U,\varphi)$ be a
common subdevelopment ([[def-gr-common-subdevelopment-and-corresponding-boundary]]
clause (a)), write $\Sigma:=j(\Sigma)$, $\Sigma':=j'(\Sigma)$, and let
$p\in\partial U$ be an exposed boundary point in the sense of
[[lem-gr-boundary-null-geodesic-segment]]:
$$J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}.$$
Choose a convex normal neighbourhood $V$ of $p$ with $V\cap\partial U\subseteq C$
($C$ as in [[lem-gr-corresponding-set-smooth-extension]], possible because
$C$ is open in $\partial U$), and a relatively compact causally convex
neighbourhood $W$ of $p$ with $\overline W\subseteq V$. Choose
$q\in I^+(p)$ with $J^-(q)\cap U^c\cap J^+(\Sigma)\subseteq W$ as in
[[lem-gr-exposed-boundary-point]]. Put
$$\tau_0:=\max\{\tau_q(r):r\in\overline W\cap U^c\cap J^+(\Sigma)\},\qquad S:=\{r\in W\cap I^+(\Sigma):\tau_q(r)=\tau_0\}.$$
Then:

**(a)** $\tau_0>0$, and every $r\in W\cap U^c\cap J^+(\Sigma)$ with
$\tau_q(r)=\tau_0$ lies in $\partial U\cap C$;

**(b)** $S$ is a nonempty embedded $3$-dimensional submanifold of $M$
contained in $(U\cap W)\cup(\partial U\cap W)$ and meeting $\partial U\cap W$;
it is a spacelike hypersurface: at every point of $S$ the normal is timelike;

**(c)** $S$ has a past collar in $U$: there is an open neighbourhood $O$ of
$S$ in $W$ such that every point of $O$ in the past of $S$ (in the
sense of the decomposition of $W$ by the level sets of $\tau_q$) lies in $U$.

## Facts & Assumptions

**Given:** developments $M,M'$ of the same data, a common subdevelopment $(U,\varphi)$, an exposed boundary point $p$, and the sets $V,W,q$ as in the statement.

[L1] Time separation: $\tau_q:M\to[0,\infty)$ is finite on $J^-(q)$, maximizers exist and are causal geodesics, the radial formula holds on causally convex normal regions, and $\tau_q$ is continuous on $I^-(q)$ and upper semicontinuous on compacta ([[lem-gr-time-separation-maximizers]] clauses (a)-(c)).

[L2] Compactness of $K:=\overline W\cap U^c\cap J^+(\Sigma)$ and positivity: $K$ is compact and contains $p$; $p\in I^+(\Sigma)$ and $p\in I^-(q)$, so $\tau_q(p)>0$ and hence $\tau_0\ge\tau_q(p)>0$ ([[lem-gr-compact-past-above-cauchy-set]], [[lem-gr-exposed-boundary-point]], [[lem-gr-time-separation-maximizers]] step 1.1 as stated in [[def-gr-causal-curves-and-reachability]]).

[L3] Geometry near $q$ and near $S$: on the causally convex $W$ the function $\tau_q$ is given, on $W\cap I^-(q)$, by the radial formula; the gradient of $\tau_q$ and its level sets are described by the inverse exponential map and the Gauss lemma, and the levels of $\tau_q$ near q are homothetic copies of the hyperboloid $\{X: -g_q(X,X)=\tau_0^2\}$ in normal coordinates, hence smooth spacelike hypersurfaces ([[lem-gr-time-separation-maximizers]] clause (b), [[thm-gr-normal-neighborhood-causal-cone]] clauses (b) and (d), [[lem-gr-joint-exponential-diffeomorphism]], [[thm-gr-convex-normal-neighborhoods]], [[lem-gr-parallel-transport-and-geodesic-speed]]).

No choice principle beyond the two declared axioms is used in this item.

## Proof

**Proof technique:** direct.

1.1 (Maximum points lie on the boundary.) By [L2], $K$ is compact, nonempty and $\tau_0>0$, and $\tau_0$ is attained at some $r_0\in K$ because $\tau_q$ is upper semicontinuous and finite there ([L1]). Suppose $r_0\in W\cap(U^c\setminus\partial U)$. Then $r_0$ is interior to $W\cap U^c$; by step 2.1 of [[lem-gr-time-separation-maximizers]] choose a maximizer $\gamma$ from $r_0$ to $q$, a causal geodesic, and continue it a little to the past inside $W\cap U^c$ (the geodesic continuation of [[thm-gr-local-geodesics-and-exponential-map]] exists in some interval and stays in $W\cap U^c$ for a short time). Its endpoint $r_0'\in W\cap U^c$ satisfies $\tau_q(r_0')>L_g(\gamma)=\tau_0$ (the added segment is timelike and has positive length, and $\tau_0>0$ [L2]), and $r_0'\in I^+(\Sigma)$ for $r_0'$ close enough to $r_0\in I^+(\Sigma)$ because $I^+(\Sigma)$ is open. Both contradict the maximality of $\tau_0$ on $K$. Hence every maximum point in $W\cap U^c\cap J^+(\Sigma)$ lies in $\partial U$, and then in $C$ because $W\subseteq V$ and $V\cap\partial U\subseteq C$. This is clause (a) for the points of $W$; together with [L2] it also shows that $\tau_0$ is attained in $W\cap\partial U\cap J^+(\Sigma)$ hmm — see step 2.2 for the existence part. [step given, L1, L2, contradiction]

2.1 (Smoothness and spacelikeness of $S$.) Let $r\in S$. Then $r\in W\cap I^+(\Sigma)$ and $\tau_q(r)=\tau_0>0$, so $r\in I^-(q)$. Near the time-separation level $\tau_0$, [L3] represents $S$ as the image, under the smooth local diffeomorphism $\exp_q$, of the hyperboloid $\{X\in T_qM: \sqrt{-g_q(X,X)}=\tau_0,\ X \text{ past-directed}\}\cap(\text{small ball})=:\mathcal H_{\tau_0}$, a smooth $3$-dimensional submanifold: indeed $\tau_q(\exp_qX)=\sqrt{-g_q(X,X)}$ by the radial formula [L3] and the derivative of $X\mapsto\sqrt{-g_q(X,X)}$ is nonzero on the hyperboloid. In particular $S$ is an embedded $3$-dimensional submanifold near each of its points with tangent space $\{(d\exp_q)_XW: g_q(X,W)=0\}$; the normal at $\exp_qX$ is $(d\exp_q)_X(X)$, which is timelike because $X$ is timelike, by [L3] and the Gauss lemma as recorded in [[thm-gr-normal-neighborhood-causal-cone]] clause (d) and [[lem-gr-joint-exponential-diffeomorphism]]; hence $S$ is spacelike. [step 1.1, L1, L3, algebra]

2.2 (Containment and nonemptiness.) Let $r\in S$. If $r\in U^c\setminus\partial U$, then $\tau_q(r)=\tau_0$ and $r\in W\cap U^c\cap J^+(\Sigma)$, so by step 1.1 applied to the maximum point $r$ one would have $r\in\partial U$, a contradiction; hence $S\subseteq (U\cup\partial U)\cap W=(U\cap W)\cup(\partial U\cap W)$, and the points of $S\cap(\partial U\cap W)$ lie in $C$ as in step 1.1. For nonemptiness and $S\cap\partial U\neq\varnothing$: the maximum $\tau_0$ is attained at some $r_\ast\in K$; if $r_\ast\in W$ then $r_\ast\in S$ by definition and step 1.1 gives $r_\ast\in\partial U$, so $S\cap\partial U\neq\varnothing$; if the only maximum points of $K$ lie in $\partial W$, then $S$ is the limit of level sets of $\tau_q$ along sequences in $W\cap K$ converging to $r_\ast$: $\tau_q$ is continuous at $r_\ast$ ([L1]) and the level set $\{\tau_q=\tau_0\}$ near $r_\ast$ is a smooth hypersurface (step 2.1 applied at the nearby points of $W\cap I^-(q)$), which therefore meets $W\cap I^+(\Sigma)$ in a nonempty hypersurface piece, and, since every maximum point in $W$ lies in $\partial U$ by step 1.1, $S$ is nonempty and meets $\partial U\cap W$. This proves clause (b). [step 1.1, step 2.1, L1, L3, algebra]

3.1 (The past collar.) Every point $r\in W$ with $0<\tau_q(r)<\tau_0$ and $r$ in the past of $S$ (that is, on a past-directed normal segment from a point of $S$) has $\tau_q(r)<\tau_0$, so $r$ cannot lie in $W\cap U^c\cap J^+(\Sigma)$ unless it contradicts the maximality of $\tau_0$; hence $r\in U\cup\partial U$; if $r\in\partial U$ then $\tau_q(r)=\tau_0$ by step 1.1, contradiction; so $r\in U$. Choosing $O$ a tubular neighbourhood of $S$ in $W$ inside the domain of the radial normal segments (a diffeomorphism onto its image by [L3]) gives a collar with the stated property. This is clause (c). [step 1.1, step 2.2, L1, L3, algebra] ∎

## Remarks

This is the central construction of the proof of Sbierski's Theorem 3.6: the
level set of $\tau_q$ at the maximal value $\tau_0$ is a smooth spacelike
surface lying in the restarted region $U\cup C$, and just to its past $W$ is
contained in $U$. Clause (c) supplies exactly the collar needed so that the
local-geometric-uniqueness argument of
[[lem-gr-no-corresponding-boundary-points]] can be restarted across $S$.
