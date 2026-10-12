---
id: lem-gr-globally-hyperbolic-causal-structure
kind: lemma
title: "In a globally hyperbolic manifold the causal relation is closed and truncated causal cones over compact sets are compact"
status: draft
origin: session
domain: mathematics
dependency_level: 21
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, def-gr-observer-and-rest-space, lem-gr-strong-causality-compact-length-bound, thm-gr-limit-curve-two-endpoints, thm-gr-auxiliary-complete-riemannian-metric, lem-gr-maximal-geodesics-and-extension, lem-gr-chronology-openness, lem-gr-causal-curve-calculus, lem-gr-parallel-transport-and-geodesic-speed, thm-gr-local-geodesics-and-exponential-map, def-compact-space, thm-closed-subspace-of-a-compact-space-is-compact, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-strong-causality-compact-length-bound: mathematical-premise
  thm-gr-limit-curve-two-endpoints: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-compact-space: mathematical-premise
  thm-closed-subspace-of-a-compact-space-is-compact: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Theorem 2.12 on closedness of the causal relation and compactness of J+(K1) cap J-(K2) in globally hyperbolic space-times, section 2.8 printed pp. 42-44 (Theorem 2.8.5 and its corollaries)"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorem 4.12 (closedness of the causal relation for causally simple space-times) printed p. 118 and Theorem 4.119 with the compactness statements printed pp. 146-147"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pending
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
time-oriented smooth Lorentzian four-manifold that is globally hyperbolic in
the sense of [[def-gr-causal-conditions-and-global-hyperbolicity]] clause
(c): strongly causal and with compact causal diamonds
$J^+(p)\cap J^-(q)$ for all $p,q\in M$. Let $h$ be the auxiliary metric of
[[thm-gr-auxiliary-complete-riemannian-metric]] and let $\le$, $J^\pm$ be the
relations of [[def-gr-causal-curves-and-reachability]]. Then:

**(a)** the causal relation is closed: if $p_k\le q_k$ for all $k$ and
$p_k\to p$, $q_k\to q$, then $p\le q$; consequently $J^+(x)$ and $J^-(x)$
are closed for every $x$, and so are $J^+(K)$ and $J^-(K)$ for every compact
$K\subseteq M$;

**(b)** for all compact $K_1,K_2\subseteq M$ the set
$J^+(K_1)\cap J^-(K_2)$ is compact.

## Facts & Assumptions

**Given:** A globally hyperbolic time-oriented smooth Lorentzian four-manifold $(M,g,N)$, its auxiliary metric $h$, the relations $\le$, $J^\pm$, and a sequence $p_k\le q_k$ with $p_k\to p$, $q_k\to q$.

[L1] Global hyperbolicity means strong causality together with compactness of all causal diamonds $J^+(p)\cap J^-(q)$; the sets $I^\pm(x)$ are open; $\le$ is reflexive and transitive and contained in its own graph ([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c), [[lem-gr-chronology-openness]] clause (a), [[lem-gr-causal-curve-calculus]] clause (f)).

[L2] Strong causality bounds the auxiliary length of causal curves in a compact set: for every compact $K$ there is $L(K)<\infty$ with $\ell_h(\gamma)\le L(K)$ for every future causal curve $\gamma$ with image in $K$ ([[lem-gr-strong-causality-compact-length-bound]], [[thm-gr-auxiliary-complete-riemannian-metric]]).

[L3] Two-endpoint limit curve theorem: for future causal curves $\alpha_k:[0,b_k]\to M$ parametrized by $h$-arclength with $\alpha_k(0)\to x$, $\alpha_k(b_k)\to z$ and $b:=\lim_kb_k$ finite, there is a future causal limit curve $\alpha:[0,b]\to M$ from $x$ to $z$ to which a subsequence converges uniformly on $[0,b]$; if $b=0$ then $x=z$ ([[thm-gr-limit-curve-two-endpoints]] clause (i)).

[L4] Through every point there are past and future timelike geodesic segments: for each $x$ and every sufficiently small $\varepsilon>0$ the points $\exp_x(-\varepsilon N_x)$ and $\exp_x(\varepsilon N_x)$ are defined, and $\exp_x(-\varepsilon N_x)\ll x\ll\exp_x(\varepsilon N_x)$ because along a geodesic the causal character and time orientation of the tangent are constant and a geodesic with future (respectively past) timelike tangent is a future (respectively past) timelike curve; the reversed segment is again a timelike curve ([[def-gr-observer-and-rest-space]], [[thm-gr-local-geodesics-and-exponential-map]] clauses (a) and (d), [[lem-gr-parallel-transport-and-geodesic-speed]] clause 3, [[def-gr-causal-curves-and-reachability]] clause (b)).

[L5] A closed subset of a compact topological space is compact; a finite union of compact sets is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 (Compact enclosure of the joining curves.) If $p_k=q_k$ for all $k$ in an infinite set, then passing to that subsequence and using uniqueness of limits gives $p=q$, so $p\le q$ by reflexivity; the claim is then proved. Hence, passing to a subsequence, we may assume $p_k\ne q_k$ for all $k$, and choose a future causal curve $\gamma_k:[0,1]\to M$ with $\gamma_k(0)=p_k$, $\gamma_k(1)=q_k$ for each $k$. Choose $\varepsilon>0$ so small that $p^-:=\exp_p(-\varepsilon N_p)$ and $q^+:=\exp_q(\varepsilon N_q)$ are defined; by [L4], $p^-\ll p$ and $q\ll q^+$. Since $I^+(p^-)$ and $I^-(q^+)$ are open and contain $p$, respectively $q$ [L1], there is $k_0$ with $p_k\in I^+(p^-)$ and $q_k\in I^-(q^+)$ for $k\ge k_0$. Fix such a $k$. For every point $x$ of the image of $\gamma_k$ one has $p_k\le x\le q_k$, so $p^-\le x$ and $x\le q^+$ by transitivity [L1]; hence $$\gamma_k([0,1])\subseteq D:=J^+(p^-)\cap J^-(q^+),$$ and $D$ is compact by [L1]. [given, L1, L4, construct]

2.1 (Bounded reparametrizations.) Let $\alpha_k:[0,L_k]\to M$ be $\gamma_k$ reparametrized by $h$-arclength, so $L_k=\ell_h(\gamma_k)$, $\alpha_k(0)=p_k$ and $\alpha_k(L_k)=q_k$. By step 1.1 and [L2], $L_k\le L(D)<\infty$ for all $k\ge k_0$; in particular the sequence $L_k$ is bounded and has a convergent subsequence, with limit $b\le L(D)$. [step 1.1, L2, construct]

3.1 (Closedness.) Passing to a subsequence, $L_k\to b<\infty$; by [L3] there is a future causal curve $\alpha:[0,b]\to M$ with $\alpha(0)=p$, $\alpha(b)=q$ to which a subsequence converges uniformly. If $b>0$ then $\alpha$ is a future causal curve from $p$ to $q$, so $p\le q$; if $b=0$ then [L3] gives $p=q$, so again $p\le q$. This proves the closedness of $\le$. [step 2.1, L3, given]

4.1 (Closedness of the cones.) Let $y_j\to y$ with $y_j\in J^+(K)$ for a compact $K$: choose $x_j\in K$ with $x_j\le y_j$. Passing to a subsequence, $x_j\to x\in K$ because $K$ is compact, so step 3.1 applied to $x_j\le y_j$ gives $x\le y$, that is, $y\in J^+(K)$; hence $J^+(K)$ is closed. The same argument with the order reversed shows that $J^-(K)$ is closed, and with $K=\{x\}$ this gives closedness of $J^\pm(x)$. [step 3.1, L1, given]

5.1 (Compact truncated cones.) Let $K_1,K_2$ be compact. For each $x\in K_1$ choose $\varepsilon_x>0$ with $x^-:=\exp_x(-\varepsilon_xN_x)$ defined; by [L4] $x^-\ll x$, so $\{I^+(x^-)\}_{x\in K_1}$ is an open cover of $K_1$ [L1] and has a finite subcover $I^+(x^-_1),\dots,I^+(x^-_m)$ with $x_i\in K_1$. If $y\in J^+(K_1)$, choose $x\in K_1$ with $x\le y$ and $i$ with $x\in I^+(x^-_i)$; then $x^-_i\le x\le y$, so $y\in J^+(x^-_i)$. Hence $J^+(K_1)\subseteq\bigcup_{i=1}^mJ^+(x^-_i)$. Likewise, applying the time reverse, $K_2$ is covered by finitely many sets $I^-(y^+_j)$ with $y_j\in K_2$ and $J^-(K_2)\subseteq\bigcup_{j=1}^nJ^-(y^+_j)$. Therefore $$J^+(K_1)\cap J^-(K_2)\subseteq\bigcup_{i,j}\bigl(J^+(x^-_i)\cap J^-(y^+_j)\bigr),$$ a finite union of compact causal diamonds, hence compact by [L5]; and $J^+(K_1)\cap J^-(K_2)$ is closed by step 4.1. A closed subset of a compact set is compact [L5], so $J^+(K_1)\cap J^-(K_2)$ is compact. [step 4.1, L1, L4, L5, construct] ∎

## Remarks

- **Where each hypothesis is used.** Strong causality enters only through the length bound [L2], which rules out the unbounded-length alternative of the limit curve theorem; compactness of the diamonds is used only in step 5.1. The proof is the standard argument that global hyperbolicity is equivalent to closedness of the causal relation plus compactness of the truncated cones.

- **Use.** Closedness of $\le$ is used in [[lem-gr-chronological-volume-continuity]] to obtain almost-everywhere convergence of the indicators of $I^\pm(p_k)$ from the openness of chronology, and compactness of $J^+(K_1)\cap J^-(K_2)$ is used in [[lem-gr-compact-future-cone-intersections]] and [[lem-gr-cone-bump-functions]].
