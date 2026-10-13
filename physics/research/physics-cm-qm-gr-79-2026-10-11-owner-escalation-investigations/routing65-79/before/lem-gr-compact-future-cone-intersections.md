---
id: lem-gr-compact-future-cone-intersections
kind: lemma
title: "Truncated causal cones J^+(K) cap J^-(S_b) over compact sets and Cauchy levels are compact"
status: draft
origin: session
domain: mathematics
dependency_level: 25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-volume-time-function, lem-gr-globally-hyperbolic-causal-structure, lem-gr-basic-limit-curve, thm-gr-auxiliary-complete-riemannian-metric, lem-gr-push-up-rule, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-observer-and-rest-space, thm-gr-local-geodesics-and-exponential-map, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-causal-curve-calculus, thm-metric-compactness-equivalences, thm-closed-subspace-of-a-compact-space-is-compact, def-compact-space, def-countable-choice, def-dependent-choice, def-continuity-real, def-interval, lem-gr-maximal-geodesics-and-extension]
dependency_roles:
  thm-gr-volume-time-function: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  lem-gr-basic-limit-curve: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  thm-metric-compactness-equivalences: mathematical-premise
  thm-closed-subspace-of-a-compact-space-is-compact: mathematical-premise
  def-compact-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorem 4.119 statements on causal compactness and the compactness of J+(K) cap J-(K) for compact K, printed pp. 146-147; Theorem 2.53 (limit curve theorem, case (ii)) printed pp. 48-49"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Proposition 2.8.1 and Theorem 2.11.1 (volume function levels and compactness arguments), printed pp. 42-44 and 57-60"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pending
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,g,N)$ be a
globally hyperbolic time-oriented smooth Lorentzian four-manifold
([[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c)), let
$t$ be the volume time function of [[thm-gr-volume-time-function]] and for
$b\in\mathbb R$ let $S_b:=t^{-1}(b)$, a Cauchy set. Then for every compact
$K\subseteq M$ the set
$$J^+(K)\cap J^-(S_b)$$
is compact; moreover
$$J^-(S_b)=\{q\in M:t(q)\le b\},\qquad J^+(S_a)=\{q\in M:t(q)\ge a\}.$$

## Facts & Assumptions

**Given:** A globally hyperbolic $(M,g,N)$ with volume time function $t$, a real number $b$ and a compact set $K$.

[L1] The function $t$ is continuous, strictly increasing along causal relations, and along every inextendible causal curve $\gamma$ one has $t(\gamma(s))\to+\infty$ at the future end and $\to-\infty$ at the past end; every level is a Cauchy set ([[thm-gr-volume-time-function]] clauses (a)-(d)).

[L2] The causal relation is closed, $J^\pm(K)$ is closed for compact $K$, and $J^+(K_1)\cap J^-(K_2)$ is compact for compact $K_1,K_2$ ([[lem-gr-globally-hyperbolic-causal-structure]] clauses (a) and (b)); the sets $J^\pm(S)$ for $S\subseteq M$ are the unions of the corresponding cones over $S$.

[L3] Every finite future causal curve can be reparametrized by $h$-arclength, as proved in Step 1.2 of [[lem-gr-basic-limit-curve]]. The basic limit curve lemma, half-line case, then says that for future causal curves $\alpha_k:[0,b_k]\to M$ parametrized by $h$-arclength with $[0,n]\subseteq[0,b_k]$ for all $k$ once $n$ is fixed and $\alpha_k(0)\to p$, some subsequence converges uniformly in $d_h$ on every compact subinterval of $[0,\infty)$ to a future-inextendible future causal curve $\alpha^+:[0,\infty)\to M$ ([[lem-gr-basic-limit-curve]] clause (b), [[thm-gr-auxiliary-complete-riemannian-metric]]).

[L4] The auxiliary metric $h$ is complete on each component and closed $d_h$-bounded subsets are compact; a subset of the metric space is compact if and only if it is sequentially compact ([[thm-gr-auxiliary-complete-riemannian-metric]] clauses (c) and (d), [[thm-metric-compactness-equivalences]]).

[L5] Through every point there are future timelike geodesic segments: $x\ll x^+_\varepsilon=\exp_x(\varepsilon N_x)$ for small $\varepsilon>0$, and every causal segment lies on an inextendible causal curve ([[def-gr-observer-and-rest-space]], [[thm-gr-local-geodesics-and-exponential-map]], [[lem-gr-parallel-transport-and-geodesic-speed]] clause 3, [[lem-gr-maximal-geodesics-and-extension]] clause (c), [[lem-gr-causal-curve-calculus]] clause (f)).

## Proof

**Proof technique:** direct.

1.1 (The sublevel and superlevel descriptions.) Let $q\in J^-(S_b)$: there is $s\in S_b$ with $q\le s$; if $q\ne s$ then $t(q)<t(s)=b$ by strict monotonicity [L1], and if $q=s$ then $t(q)=b$. Conversely, if $t(q)\le b$: choose a maximal geodesic through $q$ with future timelike tangent (it is an inextendible future timelike curve, [L5]) and let $s$ be a point of it; by [L1] the values of $t$ along it run from $-\infty$ to $+\infty$, so there is a point $s$ on it with $t(s)=b$; since the geodesic is future-directed, $q\le s$. Hence $J^-(S_b)\subseteq\{t\le b\}\subseteq J^-(S_b)$, and the dual argument gives $J^+(S_a)=\{t\ge a\}$. In particular $J^-(S_b)$ is closed as a level sublevel set of the continuous function $t$. [L1, L5, given]

2.1 (Each truncated one-point cone is compact.) Fix $x\in M$ with $t(x)<b$ and set $A:=J^+(x)\cap J^-(S_b)=J^+(x)\cap\{t\le b\}$; it is closed, being the intersection of the closed sets $J^+(x)$ and $\{t\le b\}$ [L2, step 1.1]. It is compact: otherwise, by [L4] applied to the metric space $(M,d_h)$, there are $r_k\in A$ with no convergent subsequence. For each $k$ choose a future causal curve $\gamma_k:[0,1]\to M$ from $x$ to $r_k$ and reparametrize it by $h$-arclength: $\alpha_k:[0,L_k]\to M$, $\alpha_k(0)=x$, $\alpha_k(L_k)=r_k$. The images satisfy $\alpha_k([0,L_k])\subseteq J^+(x)\cap\{t\le b\}$: indeed every point of $\gamma_k$ lies causally between $x$ and $r_k$, so its $t$-value lies between $t(x)$ and $t(r_k)\le b$ by monotonicity [L1]. If the lengths $L_k$ were bounded, then $d_h(x,r_k)\le L_k$ would be bounded, so the $r_k$ would have a convergent subsequence by [L4]: contradiction. Hence $L_k\to\infty$ along a subsequence, and the half-line limit curve lemma [L3] gives a future-inextendible future causal curve $\alpha^+:[0,\infty)\to M$ with $\alpha^+(0)=x$ that is a uniform limit on compact parameter intervals of the curves $\alpha_k$. Every point of $\alpha^+$ is a limit of points with $t$-values at most $b$, so $t(\alpha^+(\tau))\le b$ for all $\tau$ by continuity of $t$. But along the inextendible extension of $\alpha^+$ (which exists by [L5]) the volume time tends to $+\infty$ at the future end [L1], hence $t(\alpha^+(\tau))\to+\infty$ as $\tau\to\infty$: contradiction. Therefore $A$ is compact. [step 1.1, L1, L2, L3, L4, L5, given]

3.1 (Finitely many past-based cones over $K$.) Consider all pairs $(x,z)$ with $x\in K$ and $z\ll x$; [L5] supplies at least one such $z$ for every $x$. The family of open sets $I^+(z)$ over these pairs covers $K$, so compactness selects finitely many pairs $(x_i,z_i)$ with $K\subseteq\bigcup_iI^+(z_i)$. No family of past points is chosen before taking this finite subcover. If $y\in J^+(K)$, choose $x\in K$ with $x\le y$ and $i$ with $x\in I^+(z_i)$; then $z_i\le x\le y$ by transitivity, so $y\in J^+(z_i)$. Hence $J^+(K)\subseteq\bigcup_iJ^+(z_i)$ and $J^+(K)\cap J^-(S_b)\subseteq\bigcup_i(J^+(z_i)\cap\{t\le b\})$. Each set on the right is compact by step 2.1 if $t(z_i)<b$, empty if $t(z_i)>b$, and the singleton $\{z_i\}$ if $t(z_i)=b$, since strict causal monotonicity excludes any other point. The finite union is compact. By [L2] and step 1.1 the set on the left is closed, hence compact. If $K=\varnothing$, the empty subcover and empty union give the same conclusion. Together with step 1.1 this proves the statement. [step 1.1, step 2.1, L1, L2, L5, given] ∎

## Remarks

- **Where each input is used.** The half-line limit curve lemma supplies the unbounded-length alternative; the volume time function converts the alternative into a contradiction because its levels are Cauchy and it diverges along every inextendible causal curve; compactness of $d_h$-bounded closed sets converts the bounded alternative into convergence.

- **Use.** The compact sets $J^+(K)\cap J^-(S_b)$ are the domain on which the cone bumps of [[lem-gr-cone-bump-functions]] are constructed and the shells of [[lem-gr-locally-finite-shell-sum]] are made locally finite.
