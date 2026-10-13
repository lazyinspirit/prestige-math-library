---
id: cex-gr-flat-slab-coordinate-time-flow-incomplete
kind: counterexample
title: "Counterexample: on the flat slab the coordinate time has Cauchy levels but an incomplete gradient flow"
status: published
origin: session
domain: mathematics
dependency_level: 30
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-flat-time-monotonicity-and-lipschitz-graphs, thm-euclidean-space-complete, def-dependent-choice, def-countable-choice, thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice, def-gr-flat-minkowski-model-and-inertial-charts, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-curves-and-reachability, thm-gr-smooth-cauchy-temporal-splitting, def-gr-inverse-metric-and-musical-isomorphisms, def-complete-vector-field, def-integral-curve-of-a-vector-field, thm-unique-maximal-integral-curve-through-each-point, def-local-and-global-flow, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-c-r-and-smooth-maps-between-smooth-manifolds, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  lem-gr-flat-time-monotonicity-and-lipschitz-graphs: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-complete-vector-field: mathematical-premise
  def-integral-curve-of-a-vector-field: mathematical-premise
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  def-local-and-global-flow: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
sources:
  references:
    - title: "A. N. Bernal and M. Sanchez, Smoothness of time functions and the metric splitting of globally hyperbolic spacetimes (arXiv:gr-qc/0401112), Proposition 2.4, printed pp. 3-4: a constructed Cauchy temporal splitting; the incomplete coordinate flow counterexample is proved locally."
      url: "https://arxiv.org/pdf/gr-qc/0401112"
verification:
  precheck: pending
---

## Statement refuted

Statement refuted: "on every globally hyperbolic time-oriented smooth
Lorentzian four-manifold, for every temporal function $T$ in the sense of
[[def-gr-causal-conditions-and-global-hyperbolicity]] clause (e) the vector
field $X=\nabla T/g(\nabla T,\nabla T)$ is complete, that is, every maximal
integral curve of $X$ is defined on all of $\mathbb R$
([[def-complete-vector-field]])."

## Facts & Assumptions

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]) for the general absolutely continuous causal-curve conclusions used here.

**Given:** The flat slab $(M,g,N)$ of [[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]] with chart $x=(t,z)$, the coordinate time $t:M\to(0,1)$ read in the chart, and the point $p_0:=x^{-1}(1/2,0,0,0)$.

[L1] Slab facts: $(M,g,N)$ is a globally hyperbolic time-oriented smooth Lorentzian four-manifold with metric components $\operatorname{diag}(-1,1,1,1)$ in $x$; the slice $t=1/2$ is a Cauchy hypersurface; the vertical curve $s\mapsto x^{-1}(s,z_0)$ is a geodesic with unit tangent $\partial_0$ and does not converge to a point of $M$ at the endpoints of its parameter interval ([[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]] clauses (a)-(d), [[def-gr-causal-conditions-and-global-hyperbolicity]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]], [[def-gr-causal-curves-and-reachability]], [[def-local-and-global-flow]]).

[L4] Every future causal slab curve has strictly increasing continuous time coordinate and $|z(\gamma(v))-z(\gamma(u))|\le t(\gamma(v))-t(\gamma(u))$ for $u<v$ ([[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]]). Cauchy sequences in $\mathbb R^3$ converge ([[thm-euclidean-space-complete]]).

[L2] Gradient of the coordinate time: with $\nabla$ the inverse metric of [[def-gr-inverse-metric-and-musical-isomorphisms]], the chart function $t$ has $dt=dx^0$ and $\nabla t=-\partial_0$, because $g(-\partial_0,w)=w^0=dt(w)$; hence $g(\nabla t,\nabla t)=-1<0$, the gradient is past-directed, and $t$ is a temporal function whose normalized gradient field is $X=\nabla t/g(\nabla t,\nabla t)=\partial_0$. [L1]

[L3] Integral curves of $\partial_0$: in the chart, a curve $s\mapsto x^{-1}(t(s),z(s))$ has velocity $(t'(s),z'(s))$, so it is an integral curve of $X=\partial_0$ exactly when $t'(s)=1$ and $z'(s)=0$ for all $s$; by [[cor-zero-derivative-implies-constant]] this means $t(s)=s+c$ and $z(s)=z_0$ is constant. The uniqueness theorem for maximal integral curves identifies the maximal domain of the curve $s\mapsto x^{-1}(s+c,z_0)$ as the largest interval of $s$ with $s+c\in(0,1)$, namely $(-c,1-c)$ ([[thm-unique-maximal-integral-curve-through-each-point]], [[def-integral-curve-of-a-vector-field]]).

## Counterexample

**Proof technique:** direct.

1.1 (The function is temporal with Cauchy levels.) The coordinate $t$ is smooth with past timelike gradient by [L2]. For any two-sided inextendible future causal curve $\gamma:I\to M$, [L4] makes $t\circ\gamma$ strictly increasing with limits $a,b$ in $[0,1]$. If $b<1$, its spatial coordinates are Cauchy at the future end by the increment bound, hence converge in $\mathbb R^3$; as $b\ge t(\gamma(s_0))>0$, this gives a point limit $(b,z_\infty)$ inside the slab, contradicting inextendibility. Dually $a>0$ would give a past point limit, so $a=0,b=1$. Continuity and strict increase give exactly one parameter at every $c\in(0,1)$. Thus each $t^{-1}(c)$ is Cauchy; its slice chart and positive spatial metric make it a spacelike embedded hypersurface. [L1, L2, L4]

2.1 (The maximal integral curve leaves the slab at finite parameter.) Take $c=1/2$, so the curve $\gamma(s):=x^{-1}(1/2+s,0,0,0)$. By [L3] it is the maximal integral curve of $X$ through $p_0=\gamma(0)$, and its maximal domain is $(-1/2,1/2)$. At $s\to1/2-$ the curve converges in the ambient flat model to the boundary point $x^{-1}(1,0,0,0)\notin M$ and similarly at the lower end, so it cannot be extended within $M$; its domain is not all of $\mathbb R$. Therefore $X=\partial_0$ is not complete, and its flow is not global. [step 1.1, L1, L3]

3.1 (Conclusion.) The flat slab is globally hyperbolic, the coordinate time is a temporal function with Cauchy levels, and yet its normalized gradient field is incomplete. Hence the refuted statement is false: completeness of $X=\nabla T/g(\nabla T,\nabla T)$ is not a consequence of being a temporal function on a globally hyperbolic manifold, and the completeness clause of [[thm-gr-smooth-cauchy-temporal-splitting]] is a property of the function constructed there. [step 1.1, step 2.1, L1] ∎

## Remarks

- **What is and is not contradicted.** The theorem asserts the existence of at least one temporal function with complete normalized gradient flow on every globally hyperbolic manifold; the counterexample shows that an arbitrary temporal function need not have one, which is why the construction of the theorem cannot be replaced by the coordinate time.
- **No empirical content.** The counterexample is a mathematical statement about a model and reports no observation.

- **Companion example.** On the same slab, [[ex-gr-flat-slab-explicit-splitting]] constructs a temporal function whose normalized gradient field is complete; this shows that the completeness clause of [[thm-gr-smooth-cauchy-temporal-splitting]] is a property of the constructed function, not of temporal functions in general.
