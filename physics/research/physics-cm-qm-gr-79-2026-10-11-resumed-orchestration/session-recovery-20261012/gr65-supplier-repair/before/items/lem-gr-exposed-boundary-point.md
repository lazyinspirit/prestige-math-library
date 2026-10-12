---
id: lem-gr-exposed-boundary-point
kind: lemma
title: "The exposed boundary point controls the complement: J^-(q) cap U^c cap J^+(Sigma) is confined to a prescribed neighbourhood"
status: draft
origin: session
domain: mathematics
dependency_level: 32
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-corresponding-boundary-structure, lem-gr-compact-past-above-cauchy-set, lem-gr-boundary-null-geodesic-segment, lem-gr-push-up-rule, lem-gr-chronology-openness, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-globally-hyperbolic-causal-structure, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-smooth-lorentzian-objects, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-corresponding-boundary-structure: mathematical-premise
  lem-gr-compact-past-above-cauchy-set: mathematical-premise
  lem-gr-boundary-null-geodesic-segment: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Lemma 3.11 with full proof, printed p. 18"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): closedness of the causal relation and compactness of truncated cones on globally hyperbolic space-times, Theorem 2.8.5 printed pp. 42-44"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let
$(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same data,
let $(U,\varphi)$ be a common subdevelopment in the sense of
[[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a), write
$\Sigma:=j(\Sigma)$, and let $p\in\partial U$ satisfy
$$J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}$$
as in [[lem-gr-boundary-null-geodesic-segment]]. Then for every open
neighbourhood $W$ of $p$ in $M$ there exists $q\in I^+(p)$ with
$$J^-(q)\cap U^c\cap J^+(\Sigma)\subseteq W .$$

## Facts & Assumptions

**Given:** developments $M,M'$ of the same data, a common subdevelopment $(U,\varphi)$, and a point $p\in\partial U$ with the displayed exposed-point property, and an open neighbourhood $W$ of $p$.

[L1] Global hyperbolicity: $M$ is globally hyperbolic with closed causal relation, $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$ and $J^+(\Sigma)\cap J^-(\Sigma)=\Sigma$ ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]], [[lem-gr-globally-hyperbolic-causal-structure]] clause (a), [[lem-gr-corresponding-boundary-structure]] [L1] as used there).

[L2] Compact truncated pasts: $J^-(r)\cap J^+(\Sigma)$ is compact for every $r$, and it is empty for $r\in I^-(\Sigma)$ by [L1] ([[lem-gr-compact-past-above-cauchy-set]]).

[L3] Subdevelopment convexity and boundary structure: the achronality of $\partial U\cap I^+(\Sigma)$ and the convexity of [[lem-gr-subdevelopment-convexity]] are available ([[lem-gr-corresponding-boundary-structure]] clause (a), [[lem-gr-subdevelopment-convexity]]).

[L4] Past convexity of the subdevelopment: every causal curve in $M$ from $\Sigma$ to a point of $U\cap I^+(\Sigma)$ is contained in $U$ ([[lem-gr-subdevelopment-convexity]] clause (a)); and a causal curve in the globally hyperbolic $M$ between two chronologically related points of $U$ is contained in $U$ ([[lem-gr-subdevelopment-convexity]] clause (c)).

No choice principle beyond the two declared axioms is used in this item.

## Proof

**Proof technique:** direct.

1.1 (Setup.) Let $\gamma:[0,\varepsilon]\to M$ be a future timelike curve with $\gamma(0)=p$ (it exists since every point of a time-oriented Lorentzian manifold has a future timelike curve). If the conclusion failed for every $q=\gamma(t)$, there would be a sequence $t_j\in(0,\varepsilon]$ with $t_j\to0$ and points $q_j\in J^-(\gamma(t_j))\cap U^c\cap J^+(\Sigma)\cap W^c$. [given, L1, choose]

1.2 (The correctly directed complement exclusion.) Suppose $r\in\operatorname{int}(U^c)\cap J^+(\Sigma)$ and $r\le p$. Since $\Sigma\subset U$, $r\notin\Sigma$ and hence $r\in I^+(\Sigma)$. Choose a short past timelike perturbation $r_-\ll r$ inside the open set $\operatorname{int}(U^c)\cap I^+(\Sigma)$. Push-up gives $r_-\ll r\le p$, so $I^+(r_-)\cap I^+(\Sigma)$ is an open neighborhood of the boundary point $p$. It meets $U$ at $s$. A timelike curve from $\Sigma$ to $r_-$ followed by one from $r_-$ to $s\in U\cap I^+(\Sigma)$ contradicts past convexity [L4], because it passes through $r_-\notin U$. Thus there is no such $r$. This uses a past perturbation; no future perturbation below a null-related endpoint is inferred. [L1, L2, L3, L4, choose, contradiction, algebra]

2.1 (Compactness and a limit.) Fix any $t_\ast\in(0,\varepsilon]$ with $t_\ast\ge t_j$ for all $j$ (equivalently pass to the subsequence with $t_j\le\varepsilon$); then $q_j\in J^-(\gamma(\varepsilon))\cap U^c\cap J^+(\Sigma)\cap W^c$ for all $j$. Since $U^c$ and $W^c$ are closed and $J^+(\Sigma)$ is closed [L1], the set $J^-(\gamma(\varepsilon))\cap U^c\cap J^+(\Sigma)\cap W^c$ is closed in the compact set $J^-(\gamma(\varepsilon))\cap J^+(\Sigma)$ of [L2], hence compact; passing to a subsequence, $q_j\to q$ with $q\in J^-(\gamma(\varepsilon))\cap U^c\cap J^+(\Sigma)\cap W^c$. [step 1.1, L1, L2, algebra]

3.1 ($q\le p$.) Since $q_j\le\gamma(t_j)$ for every $j$, $q_j\to q$ and $\gamma(t_j)\to p$, closedness of the causal relation [L1] gives $q\le p$. [step 2.1, L1, algebra]

4.1 ($q=p$, hence $q\in W$, contradiction.) If $q\in\partial U$, then $q\in J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}$ by the exposed-point property, so $q=p\in W$, contradicting $q\in W^c$ of step 2.1. Hence $q\in U^c\setminus\partial U$; but $q\le p$ by step 3.1 and $q\in J^+(\Sigma)$ by step 2.1, contradicting step 1.2. Therefore the assumption of step 1.1 is false: for every sufficiently small $t$ one has $J^-(\gamma(t))\cap U^c\cap J^+(\Sigma)\subseteq W$, which is the assertion with $q:=\gamma(t)$. [step 2.1, step 3.1, step 1.2, contradiction] ∎

## Remarks

This is Sbierski's Lemma 3.11. Its content is that the exposed boundary point $p$ is "the last point of the complement in its own past": past the exposed point, the complement recedes into every neighbourhood of $p$, so the time separation from a nearby $q$ is maximized exactly on the boundary; this is used in [[lem-gr-spacelike-restart-hypersurface]]. Step 2.1 reproduces the source's exclusion of $U^c\setminus\partial U$ points causally below $p$ in the same two-case form (timelike case and null case) as the corresponding argument in [[lem-gr-boundary-null-geodesic-segment]]; the source's phrase "contradicts the global hyperbolicity of $U$" is here expanded into the use of past convexity of the subdevelopment, [[lem-gr-subdevelopment-convexity]] clause (a).
