---
id: prop-gr-rest-space-integrability-criterion
kind: proposition
title: "Smoothness of the rest-space family and its Frobenius integrability criterion"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-smooth-covariant-two-tensor-field, prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-smooth-distribution-on-a-manifold, prop-local-frame-characterization-of-a-smooth-distribution, def-integrable-distribution, def-involutive-distribution, cor-codimension-one-frobenius-criterion, thm-frobenius-local-coordinate-theorem, def-smooth-differential-k-form, def-exterior-derivative-by-the-invariant-vector-field-formula, def-wedge-product-of-differential-forms, def-countable-choice]
dependency_roles:
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-smooth-distribution-on-a-manifold: mathematical-premise
  prop-local-frame-characterization-of-a-smooth-distribution: mathematical-premise
  def-integrable-distribution: mathematical-premise
  def-involutive-distribution: mathematical-premise
  cor-codimension-one-frobenius-criterion: mathematical-premise
  thm-frobenius-local-coordinate-theorem: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "J. M. Lee, Introduction to Smooth Manifolds, 2nd ed., Ch. 19 'Distributions and Foliations': distributions and involutivity (printed pp. 491-496) and the Frobenius theorem (printed pp. 496-501)"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007), Ch. 2, sections 2.3-2.4: hypersurfaces, the use of the Frobenius theorem for tangency of the commutator of tangent vectors (printed pp. 23-28), and Ch. 3, sections 3.3.3-3.3.4: the congruence of Eulerian observers is hypersurface-orthogonal and has vanishing vorticity (printed pp. 42-44)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$U\subseteq M$ be a nonempty open subset, and let $n$ be an observer
congruence on $U$ ([[def-gr-observer-congruence-and-adapted-charts]]). Let
$\alpha:=n^{\flat}\in\Omega^1(U)$ be the smooth $1$-form
$\alpha_q(v)=g_q(n_q,v)$
([[def-gr-inverse-metric-and-musical-isomorphisms]],
[[def-smooth-differential-k-form]]), and let
$\mathcal D_q:=\ker\alpha_q=\{v\in T_qM:g_q(n_q,v)=0\}=n_q^{\perp}$ be the
rest space of the congruence at $q$
([[def-gr-observer-and-rest-space]]). Then:

1. $\alpha$ is nowhere zero on $U$, and $q\mapsto\mathcal D_q$ is a smooth
   rank-$3$ distribution on $U$
   ([[def-smooth-distribution-on-a-manifold]]).
2. $\mathcal D$ is integrable
   ([[def-integrable-distribution]]) if and only if
   $\alpha\wedge d\alpha=0$ on $U$
   ([[def-exterior-derivative-by-the-invariant-vector-field-formula]],
   [[def-wedge-product-of-differential-forms]]).
3. If $\alpha\wedge d\alpha=0$ on $U$, then every point of $U$ has a chart
   $(u^0,u^1,u^2,u^3)$ in which
   $\mathcal D=\operatorname{span}(\partial_1,\partial_2,\partial_3)$;
   equivalently, the rest spaces are tangent to the level hypersurfaces of
   $u^0$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$, a nonempty open $U\subseteq M$, an observer congruence $n$ on $U$, the one-form $\alpha=n^{\flat}$ and the family $\mathcal D_q=\ker\alpha_q$.

[L1] The congruence $n$ is a smooth vector field on $U$ with $g_q(n_q,n_q)=-1$ for all $q\in U$, so $n_q\neq0$ ([[def-gr-observer-congruence-and-adapted-charts]]).

[L2] A vector field on a chart domain is smooth exactly when its coordinate components are smooth ([[prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components]]).

[L3] In a chart the components $g_{ab}(q)=g_q(\partial_a|_q,\partial_b|_q)$ of $g$ are $C^\infty$ ([[def-gr-smooth-covariant-two-tensor-field]]).

[L4] The flat map is $\flat_q(v)=g_q(v,\cdot)$, so $\alpha_q(v)=g_q(n_q,v)$; the components of $\alpha$ in a chart are $\alpha_a=\sum_bg_{ab}n^b$ ([[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L5] Finite sums and products of $C^\infty$ functions on chart domains are $C^\infty$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[L6] A family of tangent subspaces is a smooth rank-$k$ distribution exactly when every point has a neighborhood carrying smooth vector fields $X_1,\dots,X_k$ that are pointwise independent and span the subspaces ([[prop-local-frame-characterization-of-a-smooth-distribution]]); smooth distributions are defined as rank-$k$ smooth subbundles of $TM$, under the axiom $\mathrm{AC}_\omega$ ([[def-smooth-distribution-on-a-manifold]], [[def-countable-choice]]).

[L7] For a nowhere-zero one-form $\alpha$, the hyperplane distribution $\ker\alpha$ is integrable if and only if $\alpha\wedge d\alpha=0$ ([[cor-codimension-one-frobenius-criterion]]).

[L8] A rank-$k$ smooth distribution is integrable if and only if it is involutive ([[def-involutive-distribution]]), and in that case every point has a coordinate neighborhood in which the distribution equals $\operatorname{span}(\partial_1,\dots,\partial_k)$ ([[thm-frobenius-local-coordinate-theorem]]).

## Proof

**Proof technique:** direct.

1.1 In a chart $(U',x)$ contained in $U$, the components of $\alpha$ are $\alpha_a=\sum_bg_{ab}n^b$ by [L4], where $g_{ab}$ are $C^\infty$ by [L3] and the components $n^b$ of the smooth field $n$ are $C^\infty$ by [L2]; hence by [L5] the functions $\alpha_a$ are $C^\infty$, so $\alpha$ is a smooth $1$-form. Moreover $\alpha_q(n_q)=g_q(n_q,n_q)=-1\neq0$ for every $q\in U$ by [L1] and [L4], so $\alpha$ is nowhere zero. [L1, L2, L3, L4, L5, given]

2.1 Fix $q_0\in U$ and a chart $(U',x)$ around $q_0$; since $\alpha_{q_0}\neq0$ by step 1.1, some component $\alpha_a(q_0)$ is nonzero, and after relabelling the coordinates we may assume $\alpha_0(q_0)\neq0$. On the open subset $V\subseteq U'$ where $\alpha_0\neq0$ define, for $i=1,2,3$, the vector fields $X_i:=\alpha_0\partial_i-\alpha_i\partial_0$; their components are $C^\infty$ by step 1.1, so they are smooth by [L2]. They are tangent to $\mathcal D$, because $\alpha(X_i)=\alpha_0\alpha_i-\alpha_i\alpha_0=0$. They are pointwise independent on $V$, since the coefficient of $\partial_i$ in $X_i$ is $\alpha_0\neq0$. Finally they span $\mathcal D_q$ at every $q\in V$: if $v=\sum_av^a\partial_a$ satisfies $\alpha(v)=\alpha_0v^0+\sum_{i\ge1}\alpha_iv^i=0$, then $v^0=-\bigl(\sum_{i\ge1}\alpha_iv^i\bigr)/\alpha_0$, so $v=\sum_{i\ge1}\bigl(v^i/\alpha_0\bigr)X_i$. [step 1.1, L2, L4, algebra]

2.2 Applying [L7] to the nowhere-zero smooth one-form $\alpha$ of step 1.1 gives: $\ker\alpha=\mathcal D$ is integrable if and only if $\alpha\wedge d\alpha=0$. This proves claim 2. [step 1.1, L7, given]

3.1 Step 2.1 exhibits, near each point of $U$, three smooth pointwise-independent fields spanning the $\mathcal D_q$; by [L6] the family $q\mapsto\mathcal D_q$ is therefore a smooth rank-$3$ distribution on $U$. This proves claim 1. [step 2.1, L6, given]

3.2 Assume $\alpha\wedge d\alpha=0$ on $U$; by step 2.2 the distribution $\mathcal D$ is integrable. Then [L8] gives, near every point of $U$, a chart $(u^0,u^1,u^2,u^3)$ in which $\mathcal D=\operatorname{span}(\partial_1,\partial_2,\partial_3)$; the slices with $u^0$ constant are integral hypersurfaces tangent to the rest spaces. This proves claim 3. [step 2.2, L8, given]

4.1 Steps 3.1, 2.2 and 3.2 prove claims 1, 2 and 3 respectively. [step 3.1, step 2.2, step 3.2] ∎
