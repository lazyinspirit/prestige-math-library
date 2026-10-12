---
id: cex-gr-spacelike-hypersurface-need-not-be-cauchy
kind: counterexample
title: "A spacelike hypersurface of a globally hyperbolic model that is not a Cauchy hypersurface"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-causal-curves-and-reachability, def-gr-flat-minkowski-model-and-inertial-charts, def-embedded-submanifold-and-slice-chart, thm-gr-minkowski-cauchy-and-global-hyperbolicity, lem-gr-flat-time-monotonicity-and-lipschitz-graphs]
dependency_roles:
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
  thm-gr-minkowski-cauchy-and-global-hyperbolicity: mathematical-premise
  lem-gr-flat-time-monotonicity-and-lipschitz-graphs: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: domains of dependence, Cauchy horizons and Cauchy hypersurfaces, sections 3.1-3.3 printed pp. 83-103; Definition 3.14 printed p. 87; Definition 3.35 printed p. 95"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): a Cauchy surface is met once and only once by every causal curve without endpoint, section 3.2.1 printed p. 39"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "every spacelike embedded hypersurface of a globally
hyperbolic time-oriented smooth Lorentzian four-manifold is a Cauchy set"
([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clauses (a) and (c),
[[def-gr-causal-conditions-and-global-hyperbolicity]] clause (c)).

## Facts & Assumptions

**Given:** The flat model $(A,\eta,N)$ of
[[def-gr-flat-minkowski-model-and-inertial-charts]], written $A=\mathbb R^4$,
with its global inertial chart $x=(t,z)$, the open unit ball
$B=\{z\in\mathbb R^3:|z|_{\mathrm e}<1\}$ and the set
$$\Sigma:=\{p\in A:t(p)=0,\ z(p)\in B\},$$
and the point $z_0\in\mathbb R^3$ with $|z_0|_{\mathrm e}=2$.

[L1] The flat model is globally hyperbolic and its level sets $\{t=c\}$ are Cauchy hypersurfaces ([[thm-gr-minkowski-cauchy-and-global-hyperbolicity]] clauses (b), (d)).

[L2] Along an inextendible causal curve of $A$ the coordinate $t$ is a strictly increasing surjection onto $\mathbb R$ ([[lem-gr-flat-time-monotonicity-and-lipschitz-graphs]] clause (c)).

[L3] $\Sigma$ is an open subset of the embedded submanifold $\{t=0\}$ and hence an embedded submanifold with slice chart $x$; its tangent space is $\operatorname{span}(\partial_1,\partial_2,\partial_3)$ with positive definite metric restriction ([[def-embedded-submanifold-and-slice-chart]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (a)).

[L4] A Cauchy set meets every inextendible causal curve in exactly one parameter value ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (c)).

## Counterexample

1.1 (The set is spacelike.) By [L3] the set $\Sigma$ is an embedded three-dimensional submanifold of $A$ with tangent space spanned by $\partial_1,\partial_2,\partial_3$, on which $\eta=\operatorname{diag}(1,1,1)$ is positive definite; hence $\Sigma$ is a spacelike embedded hypersurface. [given, L3]

1.2 (An inextendible causal curve missing it.) Define $u:\mathbb R\to A$, $u(s):=x^{-1}(s,z_0)$. This is a smooth curve with constant tangent $\partial_0=N$, which satisfies $\eta(\partial_0,\partial_0)=-1<0$ and is future-directed by clause (c) of [[def-gr-flat-minkowski-model-and-inertial-charts]], so $u$ is a future timelike (hence causal) curve; its $t$-coordinate is the identity of $\mathbb R$, so by [L2] $u$ is inextendible. But $t(u(s))=s$ and $z(u(s))=z_0$ with $|z_0|_{\mathrm e}=2>1$, so $u(s)\notin\Sigma$ for every $s$; the parameter set $\{s:u(s)\in\Sigma\}$ is empty and in particular not a singleton. [given, L2]

2.1 (Conclusion.) By step 1.2 there is an inextendible causal curve that meets $\Sigma$ in no parameter value; by [L4] the set $\Sigma$ is not a Cauchy set, and by step 1.1 it is a spacelike embedded hypersurface, so it is not a Cauchy hypersurface. Since the ambient model is globally hyperbolic by [L1], this refutes the displayed statement: in a globally hyperbolic model a spacelike hypersurface need not be Cauchy. ∎ [step 1.1, step 1.2, given, L1, L4]

## Remarks

- **Why Cauchy leaves are special.** The level sets $\{t=c\}$ are Cauchy because they are entire level sets of a temporal function, not because every spacelike piece of such a level set inherits the property. The fragment $\Sigma$ is achronal and spacelike, but inextendible causal curves outside the spatial ball $B$ never see it.
- **Scope.** The example is purely kinematic; no field equation, matter content or measurement enters.
