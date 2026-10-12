---
id: lem-gr-compact-past-above-cauchy-set
kind: lemma
title: "The causal past of a point above the initial Cauchy surface is compact"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-causal-curves-and-reachability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-conditions-and-global-hyperbolicity, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-globally-hyperbolic-causal-structure, lem-gr-cauchy-set-topology-and-graph, lem-gr-basic-limit-curve, lem-gr-causal-curve-conventions, thm-gr-auxiliary-complete-riemannian-metric, lem-gr-strong-causality-compact-length-bound, lem-gr-maximal-geodesics-and-extension, thm-topological-manifolds-are-metrizable-and-paracompact, thm-metric-compactness-equivalences, def-metric-space, def-compact-space, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-globally-hyperbolic-causal-structure: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  lem-gr-basic-limit-curve: mathematical-premise
  lem-gr-causal-curve-conventions: mathematical-premise
  thm-gr-auxiliary-complete-riemannian-metric: mathematical-premise
  lem-gr-strong-causality-compact-length-bound: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  thm-topological-manifolds-are-metrizable-and-paracompact: mathematical-premise
  thm-metric-compactness-equivalences: mathematical-premise
  def-metric-space: mathematical-premise
  def-compact-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): the compactness of the past of a point intersected with the future of the initial surface, used in the proof of Lemma 3.11, printed p. 18"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Theorem 2.8.5 and its corollaries on closedness of the causal relation and compactness of truncated causal cones, printed pp. 42-44"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: limit curve theorems, Theorem 2.80 and Theorem 4.119 printed pp. 58 and 146-147"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let
$(M,g,N,j,\psi)$ be a development of the given data in the sense of
[[def-gr-development-and-data-fixing-isometry]] clause (a), write
$\Sigma:=j(\Sigma)$, and let $h$ be the auxiliary complete metric of
[[thm-gr-auxiliary-complete-riemannian-metric]]. Then for every $q\in M$ the
set
$$K_q:=J^-(q)\cap J^+(\Sigma)$$
is compact. Moreover $K_q=\{q\}$ when $q\in\Sigma$, and $K_q$ is empty when
$q\in I^-(\Sigma)$.

## Facts & Assumptions

**Given:** a development $(M,g,N,j,\psi)$ with Cauchy set $\Sigma=j(\Sigma)$, a point $q\in M$, and a sequence $x_n\in K_q$ to be shown to have a convergent subsequence.

[L1] Global hyperbolicity of the development and closedness of the relations: $\Sigma$ Cauchy implies that $M$ is globally hyperbolic, hence strongly causal and causal, with closed causal relation; $J^-(q)$ and $J^+(\Sigma)$ are closed and $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$ ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]] clauses (a)-(b), [[lem-gr-globally-hyperbolic-causal-structure]] clause (a), [[lem-gr-cauchy-set-topology-and-graph]] clause (a)).

[L2] Auxiliary metric: $h$ is a complete smooth positive definite metric, its distance induces the manifold topology, closed $h$-bounded subsets are compact, and the $h$-arclength of a causal curve dominates the $h$-distance of its endpoints ([[thm-gr-auxiliary-complete-riemannian-metric]], [[lem-gr-basic-limit-curve]]).

[L3] Length bound on compact sets: for every compact $K\subseteq M$ there is $L(K)$ such that every causal curve with image in $K$ has $h$-arclength at most $L(K)$ ([[lem-gr-strong-causality-compact-length-bound]]).

[L4] Half-line limits: future causal curves parametrized by $h$-arclength whose intervals contain $[-n,0]$ and whose value at $0$ converges admit a subsequence converging uniformly in $d_h$ on every compact subinterval of $(-\infty,0]$ to a past-inextendible future causal curve, which is nonconstant on every nondegenerate interval ([[lem-gr-basic-limit-curve]] clause (b) and its dual, clause (a4)).

[L5] Inextendible extension and compaction: a one-sided-inextendible causal curve is contained in an inextendible causal curve ([[lem-gr-causal-curve-conventions]] clause (d)); a closed causal segment lies on an inextendible causal curve ([[lem-gr-maximal-geodesics-and-extension]] clause (c)); a compact causal diamond is compact and a causal segment with endpoints in different components cannot be confined to one diamond ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]] clause (b)).

[L6] Metrizable topology: $M$ is Hausdorff and second countable, hence metrizable; a subset of a metrizable space is compact exactly when it is sequentially compact ([[thm-topological-manifolds-are-metrizable-and-paracompact]], [[thm-metric-compactness-equivalences]], [[def-metric-space]], [[def-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 (The two easy cases.) If $q\in\Sigma$, and $x\in K_q$ with $x\ne q$: then $x\le q$ with $q\in\Sigma$; if $x\in I^+(\Sigma)$ then some $\sigma\in\Sigma$ satisfies $\sigma\ll x\le q$ with $\sigma\ne q$ or $\sigma=q$, and in either case $\sigma\le q$ relates two distinct points of $\Sigma$, contradicting acausality of Cauchy sets ([L1]); if $x\in\Sigma$ then $x\le q$ relates two points of $\Sigma$, so $x=q$, contradiction; the case $x\in I^-(\Sigma)$ is excluded by $J^+(\Sigma)\cap I^-(\Sigma)=\varnothing$ ([L1]). Hence $K_q=\{q\}$. If $q\in I^-(\Sigma)$, the same computation with $q$ in place of the generic point shows $K_q=\varnothing$. [L1, algebra]

1.2 (Closure of $K_q$ and reduction to sequential compactness.) For every $q$, $K_q$ is the intersection of the two closed sets $J^-(q)$ and $J^+(\Sigma)$ ([L1]), hence closed. By [L6] it remains to show that every sequence in $K_q$ has a convergent subsequence. [L1, L6, algebra]

1.3 (Curves through the sequence.) Assume $q\notin\Sigma$ and $q\notin I^-(\Sigma)$, so $q\in I^+(\Sigma)$ by [L1]; let $x_n\in K_q$. For each $n$ choose $\sigma_n\in\Sigma$ with $\sigma_n\le x_n$ and concatenate a causal curve from $\sigma_n$ to $x_n$ with one from $x_n$ to $q$, obtaining a future causal curve $\beta_n$ from $\sigma_n$ to $q$ whose image contains $x_n$, is contained in $J^+(\sigma_n)\cap J^-(q)$, and has finite $h$-arclength (a compact causal diamond) ([L1], [L3], [[def-gr-causal-curves-and-reachability]]). Reparametrize $\beta_n$ by $h$-arclength from $q$ backwards: this gives a future causal curve $\alpha_n:[-L_n,0]\to M$ with $\alpha_n(0)=q$, $\alpha_n(-L_n)=\sigma_n$ and with $x_n=\alpha_n(-s_n)$ for the $h$-arclength $s_n\in[0,L_n]$ of the segment from $x_n$ to $q$. [given, L1, L3, choose, construct]

2.1 (Bounded length case.) Suppose some subsequence of $(L_n)$ is bounded by $C$. Then for the corresponding $n$ one has $s_n\le L_n\le C$, so $x_n=\alpha_n(-s_n)$ lies in the closed $h$-ball of radius $C$ around $q$, which is compact by [L2]; the sequence $(x_n)$ therefore has a convergent subsequence, whose limit lies in $K_q$ by step 1.2. [step 1.3, L1, L2, algebra]

2.2 (Unbounded length case is impossible.) Suppose instead that $L_n\to\infty$ along a subsequence. The curves $\alpha_n$ are parametrized by $h$-arclength with $\alpha_n(0)=q$ and intervals containing $[-m,0]$ for all $n\ge m$; by [L4] there is a subsequence converging uniformly in $d_h$ on every compact subinterval of $(-\infty,0]$ to a past-inextendible future causal curve $\alpha:(-\infty,0]\to M$ with $\alpha(0)=q$, nonconstant on every nondegenerate interval. For each fixed $t\le0$, $\alpha(t)=\lim\alpha_{n_k}(t)$, and each $\alpha_{n_k}(t)$ lies in $J^+(\Sigma)$ (it is on the causal curve $\beta_{n_k}$ from $\Sigma$ to $q$) and in $J^-(q)$; by closedness [L1] $\alpha(t)\in K_q$, so $\alpha((-\infty,0])\subseteq J^+(\Sigma)$. [step 1.3, L1, L4, algebra]

2.3 (Contradiction in the unbounded case.) Let $\alpha$ be as in step 2.2. First, $\alpha$ misses $\Sigma$: if $\alpha(t_0)\in\Sigma$ for some $t_0$, then for every $t<t_0$ one has $\alpha(t)\le\alpha(t_0)\in\Sigma$ and, by step 2.2, $\alpha(t)\in J^+(\Sigma)$; hence $\alpha(t)\in J^+(\Sigma)\cap J^-(\Sigma)=\Sigma$ by [L1], so $\alpha$ maps the nondegenerate interval $(-\infty,t_0]$ into $\Sigma$; two distinct values would be causally related points of the acausal set $\Sigma$ ([L1]), and the only alternative is that $\alpha$ is constant on a nondegenerate interval, which [L4] excludes. Now extend $\alpha$ to an inextendible causal curve $\widehat\alpha:I\to M$ with $(-\infty,0]\subseteq I$ by [L5]; as an inextendible causal curve it meets $\Sigma$ in exactly one parameter value $c$ ([L1]). Since $\alpha$ misses $\Sigma$, $c\notin(-\infty,0]$. If $c>0$, then $q=\widehat\alpha(0)\le\widehat\alpha(c)\in\Sigma$ with $q\in I^+(\Sigma)$: choosing $\sigma\in\Sigma$ with $\sigma\ll q$ gives $\sigma\le\widehat\alpha(c)=:\zeta\in\Sigma$, and acausality forces $\sigma=\zeta$, so $\zeta\ll q\le\zeta$ is a nonconstant closed causal curve, contradicting causality [L1]. Hence the unbounded length case cannot occur. [step 2.2, L1, L4, L5, contradiction]

3.1 (Conclusion.) By steps 2.1 and 2.2 every sequence in $K_q$ has a convergent subsequence in $M$ with limit in $K_q$; with step 1.2 and [L6] this makes $K_q$ compact. The remaining assertions are step 1.1. [step 1.1, step 1.2, step 2.1, step 2.3, L6] ∎

## Remarks

The statement is the compactness of "the past of $q$ truncated by the initial
surface", used in [[lem-gr-boundary-null-geodesic-segment]] and
[[lem-gr-exposed-boundary-point]]. The proof shows in addition that the
$h$-arclength of causal curves from $\Sigma$ to a fixed $q$ is bounded, since
boundedness of the length was exactly the alternative that survived.
