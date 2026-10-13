---
id: lem-gr-subdevelopment-convexity
kind: lemma
title: "A development sharing the initial Cauchy surface with a larger development is causally convex in it"
status: published
origin: session
domain: mathematics
dependency_level: 28
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dependent-choice, def-countable-choice, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-conditions-and-global-hyperbolicity, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-cauchy-set-topology-and-graph, lem-gr-maximal-geodesics-and-extension, thm-gr-local-geodesics-and-exponential-map, lem-gr-push-up-rule, def-gr-smooth-lorentzian-objects, lem-gr-causal-curve-calculus, def-continuity-real, def-interval]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the global hyperbolicity argument in the proof of Theorem 3.4 step 2 and the causal-convexity argument in the proof of Lemma 3.9, printed pp. 14 and 17"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): causal convexity and domains of dependence, Proposition 2.2.3, Definition 2.2.7 and Theorem 2.9.9 with its proof, printed pp. 8-13 and 46-50"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: causal convexity and the elementary regions of Proposition 2.84 and Proposition 3.43, printed pp. 59-60 and 97-99"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]],
[[def-dependent-choice]]) for the supplied causal-calculus and Cauchy-side
results used below.

Let $(M,g,N,j,\psi)$ and $(U,g|_U,N|_U,j,\psi|_U)$ be as in
[[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a): $M$ is
a development of the given data, $U\subseteq M$ is open with
$j(\Sigma)\subseteq U$, and $U$ with the restricted fields is again a
development of the same data. Write $\Sigma:=j(\Sigma)$, and compute
$I^\pm$, $J^\pm$ and $\le$ in $M$
([[def-gr-causal-curves-and-reachability]]). Then:

**(a) Past convexity within the future of $\Sigma$.** For every future causal
curve $\nu:[a,b]\to M$ with $\nu(a)\in\Sigma$ and $\nu(b)\in U\cap I^+(\Sigma)$
one has $\nu([a,b])\subseteq U$.

**(b) Future convexity within the past of $\Sigma$.** For every future causal
curve $\nu:[a,b]\to M$ with $\nu(a)\in U\cap I^-(\Sigma)$ and
$\nu(b)\in\Sigma$ one has $\nu([a,b])\subseteq U$.

**(c) Segments with endpoints in $U$.** For every future causal curve
$\nu:[a,b]\to M$ with $\nu(a),\nu(b)\in U$ one has $\nu([a,b])\subseteq U$.

## Facts & Assumptions

**Given:** a development $(M,g,N,j,\psi)$, an open $U\subseteq M$ with $j(\Sigma)\subseteq U$ such that $(U,g|_U,N|_U,j,\psi|_U)$ is a development of the same data, and a future causal curve as in the clause under consideration.

[L1] Development and subdevelopment data: $j(\Sigma)$ is a Cauchy set of $(M,g,N)$ and of $(U,g|_U,N|_U)$ ([[def-gr-development-and-data-fixing-isometry]] clause (a)5, [[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a)); consequently both are causal: a nonconstant closed causal segment can be repeated indefinitely to give a no-limit inextendible causal curve, which either misses the Cauchy set or meets it at infinitely many parameters, both impossible. The Cauchy side decomposition under the stated supplier hypotheses supplies every level relation $J^+(\Sigma)=\Sigma\sqcup I^+(\Sigma)$ holds ([[lem-gr-cauchy-set-topology-and-graph]] clause (a)).

[L2] Maximal geodesics in an open Lorentzian submanifold: for every $q$ in the Lorentzian manifold $(U,g|_U)$ and every nonzero causal $w\in T_qU$, the unique maximal geodesic $\rho:I_\rho\to U$ with $\rho(0)=q$, $\rho'(0)=w$ is future-directed causal when $w$ is, and $\rho(t)$ does not converge to any point of $U$ as $t\to\sup I_\rho$ or as $t\to\inf I_\rho$ ([[thm-gr-local-geodesics-and-exponential-map]] clause (a), [[lem-gr-maximal-geodesics-and-extension]] clause (b)).

[L3] Gluing and regularity of causal curves: the concatenation of two future causal curves at a common endpoint value is a future causal curve, and a causal curve is continuous on its interval ([[lem-gr-causal-curve-calculus]], [[def-gr-causal-curves-and-reachability]], [[def-continuity-real]], [[def-interval]]).

[L4] Push-up: $p\ll q\le r$ implies $p\ll r$, so $J^+(q)\subseteq I^+(\Sigma)$ whenever $q\in I^+(\Sigma)$ ([[lem-gr-push-up-rule]] clause (a)).

[L5] Causality of causal curves: a future causal curve $\nu$ whose values at two distinct parameters coincide contains a nonconstant closed future causal curve, which is excluded by [L1]; hence $\nu$ is injective, and two distinct points of $\Sigma$ are never causally related ([[lem-gr-cauchy-set-topology-and-graph]] clause (a)). No choice principle beyond the stated supplier premises is used in this item.

## Proof
**Proof technique:** direct; the three clauses are proved in order.

1.1 (Setup and the maximal portion of $\nu$ in $U$.) Let $\nu:[a,b]\to M$ be a future causal curve with $\nu(a)\in\Sigma$ and $\nu(b)\in U\cap I^+(\Sigma)$, and suppose for contradiction that $\nu([a,b])\not\subseteq U$. Since $\nu$ is continuous [L3] and $U$ is open, $\nu^{-1}(U)$ is relatively open in $[a,b]$ and contains $a$ and $b$; let $J$ be the connected component of $\nu^{-1}(U)$ containing $b$. Then $J=(c,b]$ for some $c\in[a,b)$, and $\nu((c,b])\subseteq U$ while $\nu(c)\notin U$; moreover $c>a$ because $\nu(a)\in\Sigma\subseteq U$. [given, L1, L3, algebra]

1.2 (A causal curve in $U$ that meets $\Sigma$ exactly once.) The restriction $\beta:=\nu|_J$ is a future causal curve in $U$ ([[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a)); as $t\to c$ from above, $\beta(t)\to\nu(c)\notin U$, so $\beta$ does not converge to a point of $U$ at its past end, while at its future end it converges to $\nu(b)\in U$. Choose a future-directed timelike $w\in T_{\nu(b)}U$ (it exists because $N|_U$ is a time orientation); by [L2] there is a future-directed causal geodesic $\rho:I_\rho\to U$ maximal in $U$ with $\rho(0)=\nu(b)$ and $\rho'(0)=w$, and $\rho$ converges to no point of $U$ at its future end. Define $\xi$ on the interval obtained by gluing $(c,b]$ and $[0,\sup I_\rho)$ at $b\sim0$ by $\xi(t):=\nu(t)$ for $t\le b$ and $\xi(t):=\rho(t-b)$ for $t\ge b$. By [L3] $\xi$ is a future causal curve in $U$; at its past end it does not converge in $U$ (limit $\nu(c)\notin U$) and at its future end it does not converge in $U$ ([L2]), so $\xi$ is inextendible in $U$; since $\Sigma$ is a Cauchy set of $U$ ([L1]), $\xi$ meets $\Sigma$ in exactly one parameter value. [L1, L2, L3, choose, construct]

1.3 (Clause (b) in the fixed time orientation.) Let $\nu:[a,b]\to M$ be future causal with $\nu(a)\in U\cap I^-(\Sigma)$ and $\nu(b)\in\Sigma$, and suppose it leaves $U$. The component of $\nu^{-1}(U)$ containing $a$ is $[a,c)$ for some $c<b$, with $\nu(c)\notin U$. Choose a future timelike maximal geodesic $\rho$ in $U$ through $\nu(a)$, and concatenate its past half ending at $\nu(a)$ with $\nu|_{[a,c)}$. The resulting future causal curve is inextendible in $U$: its past geodesic end has no limit there by [L2], and its future end converges in $M$ to $\nu(c)\notin U$. Every point on the geodesic half is in $I^-(\Sigma)$ by push-up from $\nu(a)\in I^-(\Sigma)$; every point of $\nu([a,c))$ is in $J^-(\Sigma)\setminus\Sigma=I^-(\Sigma)$, since the remaining segment reaches $\nu(b)\in\Sigma$ and [L1] gives the Cauchy-set trichotomy and acausality. Thus this inextendible causal curve in $U$ misses $\Sigma$, contradicting the Cauchy property in [L1]. This proves (b) without changing $N$ or the matter data. [given, L1, L2, L3, L4, L5, choose, construct, contradiction]

2.1 (The image of $\xi$ lies in $I^+(\Sigma)$.) For $t\in(c,b]$: $\nu(t)$ is the endpoint of the future causal segment $\nu|_{[a,t]}$ started at $\nu(a)\in\Sigma$, so $\nu(t)\in J^+(\Sigma)$; if $\nu(t)\in\Sigma$ then the distinct points $\nu(a),\nu(t)\in\Sigma$ would be causally related, contradicting [L5], so $\nu(t)\notin\Sigma$ and hence $\nu(t)\in J^+(\Sigma)\setminus\Sigma=I^+(\Sigma)$ by [L1]. For $s\in[0,\sup I_\rho)$: $\rho(s)\in J^+(\nu(b))$, and $\nu(b)\in I^+(\Sigma)$; by push-up [L4] $J^+(\nu(b))\subseteq I^+(\Sigma)$, so $\rho(s)\in I^+(\Sigma)$. Thus $\xi((c,b+\sup I_\rho))\subseteq I^+(\Sigma)$, which is disjoint from $\Sigma$. [step 1.2, L1, L4, L5, algebra]

3.1 (Contradiction and conclusion of (a).) By step 2.1 the causal curve $\xi$ of step 1.2 misses $\Sigma$, contradicting its established property of meeting $\Sigma$ exactly once. Hence $\nu([a,b])\subseteq U$, which is clause (a). [step 1.2, step 2.1, discharge-contradiction]

4.1 (Clause (c).) Let $\nu:[a,b]\to M$ have both endpoints in $U$. [step 3.1, step 1.3, L1, L3, L4, L5, algebra]
If $a=b$, there is nothing to prove. Otherwise use the disjoint trichotomy $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$ of [L1]. If both endpoints are in $I^+(\Sigma)$, choose a future timelike curve from a point of $\Sigma$ to $\nu(a)$ and concatenate it with $\nu$; clause (a) applies to this entire curve ending at $\nu(b)\in U\cap I^+(\Sigma)$. If both endpoints are in $I^-(\Sigma)$, choose a future timelike curve from $\nu(b)$ to a point of $\Sigma$ and append it to $\nu$. Clause (b) applies to that concatenation, starting at $\nu(a)\in U\cap I^-(\Sigma)$. In either case its restriction $\nu$ lies in $U$. A future causal curve cannot go from $I^+(\Sigma)$ to $\Sigma\cup I^-(\Sigma)$, or from $\Sigma$ to $I^-(\Sigma)$: push-up would give a chronological relation between points of $\Sigma$, contradicting [L1]. Both endpoints on $\Sigma$ are excluded for a nonconstant segment by [L5]. If the first endpoint lies on $\Sigma$ and the second in $I^+(\Sigma)$, apply (a); if the first lies in $I^-(\Sigma)$ and the second on $\Sigma$, apply (b). The remaining case has endpoints in $I^-(\Sigma)$ and $I^+(\Sigma)$. Continuity and connectedness force an intermediate value $\nu(c)\in\Sigma$, for otherwise the image would lie in the disjoint open union of those two sides. Apply (b) to $\nu|_{[a,c]}$ and (a) to $\nu|_{[c,b]}$. Thus every allowable case gives $\nu([a,b])\subseteq U$, proving (c). [step 3.1, step 1.3, L1, L3, L4, L5, algebra] ∎

## Remarks

Clause (a) is the exact convexity used in [[lem-gr-isometric-immersion-rigidity]] and [[lem-gr-maximal-common-development]]: it says that a subdevelopment cannot be entered and left along a causal segment from the common initial surface. The proof uses maximal geodesics of the open submanifold $U$ only as a device that makes the portion of $\nu$ in $U$ inextendible there; no geodesic completeness and no maximality of $U$ among developments is assumed.
