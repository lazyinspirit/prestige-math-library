---
id: lem-gr-exposed-boundary-point
kind: lemma
title: "The exposed boundary point controls the complement: J^-(q) cap U^c cap J^+(Sigma) is confined to a prescribed neighbourhood"
status: draft
origin: session
domain: mathematics
dependency_level: 31
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

2.1 (Exclusion of $U^c\setminus\partial U$ points below $p$.) We show: there is no $r\in U^c\setminus\partial U$ with $r\le p$ and $r\in J^+(\Sigma)$. *First case: $r\ll p$.* Because $r\in U^c\setminus\partial U=\operatorname{int}(U^c)$ is interior to the complement and $I^+(r)$ is an open neighbourhood of $p\in\partial U$, the open set $I^+(r)$ meets $U$; choose $s\in I^+(r)\cap U\cap I^+(\Sigma)$ (possible because $r\in J^+(\Sigma)\setminus\Sigma=I^+(\Sigma)$ and $I^+(r)$ is open, [L1]). Choose a causal curve $\alpha$ from $\Sigma$ to $r$ (exists as $r\in I^+(\Sigma)$) and a timelike curve from $r$ to $s$; their concatenation is a causal curve from $\Sigma$ to $s\in U\cap I^+(\Sigma)$ whose image contains $r\notin U$, contradicting [L4] clause (a). *Second case: $r\le p$ but not $r\ll p$.* Then $r<p$, and any causal curve from $r$ to $p$ has no timelike point and no corner (otherwise its endpoints would be chronologically related, by the achronality argument recorded in the Facts of [[lem-gr-boundary-null-geodesic-segment]]); in particular $p\in\partial I^-(r)$ and the null geodesic segment from $r$ to $p$ is unique up to parametrization. Since $r\in\operatorname{int}(U^c)$ is interior to the complement, there exist points $r_n\in I^+(r)\cap U^c\setminus\partial U\cap I^+(\Sigma)$ with $r_n\to r$ (small future timelike perturbations of $r$ inside the open sets $\operatorname{int}(U^c)$ and $I^+(\Sigma)$, [L1]); then $r_n\ll p$ by push-up, and the first case applied to $r_n$ gives a contradiction for every $n$. Hence no such $r$ exists. [step 1.1, L1, L2, L3, L4, contradiction, algebra]

2.2 (Compactness and a limit.) Fix any $t_\ast\in(0,\varepsilon]$ with $t_\ast\ge t_j$ for all $j$ (equivalently pass to the subsequence with $t_j\le\varepsilon$); then $q_j\in J^-(\gamma(\varepsilon))\cap U^c\cap J^+(\Sigma)\cap W^c$ for all $j$. Since $U^c$ and $W^c$ are closed and $J^+(\Sigma)$ is closed [L1], the set $J^-(\gamma(\varepsilon))\cap U^c\cap J^+(\Sigma)\cap W^c$ is closed in the compact set $J^-(\gamma(\varepsilon))\cap J^+(\Sigma)$ of [L2], hence compact; passing to a subsequence, $q_j\to q$ with $q\in J^-(\gamma(\varepsilon))\cap U^c\cap J^+(\Sigma)\cap W^c$. [step 1.1, L1, L2, algebra]

3.1 ($q\le p$.) Since $q_j\le\gamma(t_j)$ for every $j$, $q_j\to q$ and $\gamma(t_j)\to p$, closedness of the causal relation [L1] gives $q\le p$. [step 2.2, L1, algebra]

4.1 ($q=p$, hence $q\in W$, contradiction.) If $q\in\partial U$, then $q\in J^-(p)\cap\partial U\cap J^+(\Sigma)=\{p\}$ by the exposed-point property, so $q=p\in W$, contradicting $q\in W^c$ of step 2.2. Hence $q\in U^c\setminus\partial U$; but $q\le p$ by step 3.1 and $q\in J^+(\Sigma)$ by step 2.2, contradicting step 2.1. Therefore the assumption of step 1.1 is false: for every sufficiently small $t$ one has $J^-(\gamma(t))\cap U^c\cap J^+(\Sigma)\subseteq W$, which is the assertion with $q:=\gamma(t)$. [step 2.2, step 3.1, step 2.1, contradiction] ∎

## Remarks

This is Sbierski's Lemma 3.11. Its content is that the exposed boundary point $p$ is "the last point of the complement in its own past": past the exposed point, the complement recedes into every neighbourhood of $p$, so the time separation from a nearby $q$ is maximized exactly on the boundary; this is used in [[lem-gr-spacelike-restart-hypersurface]]. Step 2.1 reproduces the source's exclusion of $U^c\setminus\partial U$ points causally below $p$ in the same two-case form (timelike case and null case) as the corresponding argument in [[lem-gr-boundary-null-geodesic-segment]]; the source's phrase "contradicts the global hyperbolicity of $U$" is here expanded into the use of past convexity of the subdevelopment, [[lem-gr-subdevelopment-convexity]] clause (a).
