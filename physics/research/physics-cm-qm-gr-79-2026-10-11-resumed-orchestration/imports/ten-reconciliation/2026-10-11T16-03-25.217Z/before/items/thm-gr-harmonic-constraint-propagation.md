---
id: thm-gr-harmonic-constraint-propagation
kind: theorem
title: "Propagation of the harmonic gauge and of the Einstein constraints: a constrained reduced solution is an Einstein solution"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-harmonic-gauge-and-reduced-equations, lem-gr-reduced-einstein-principal-part, lem-gr-einstein-residual-and-subsidiary-identity, thm-gr-local-symmetric-hyperbolic-well-posedness, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  lem-gr-einstein-residual-and-subsidiary-identity: mathematical-premise
  thm-gr-local-symmetric-hyperbolic-well-posedness: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 2.4 (The Evolution Equations): the splitting of the field equations into evolution and constraint parts, gauge source functions and the harmonically reduced field equations (2.39), and the subsidiary system obtained from their divergence"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold, let
$\Sigma\subseteq M$ be a smooth spacelike hypersurface
([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]) with future unit normal
field $\mathfrak n$ and tangential frame $(e_i)$
([[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]), and let
$U$ be an open neighborhood of $\Sigma$ carrying a smooth background metric
$\bar g$ and a smooth symmetric tensor $T$ with $\nabla^aT_{ab}=0$ on $U$. Let
$H$ and $E$ be the gauge vector and Einstein residual of
[[def-gr-harmonic-gauge-and-reduced-equations]]. Suppose:

1. $(g,T)$ solves the reduced Einstein equation on $U$;
2. $H=0$ on $\Sigma$;
3. the constraint residuals vanish on $\Sigma$: $E(\mathfrak n,\mathfrak n)=0$
   and $E(\mathfrak n,e_i)=0$ for all $i$.

Then there is an open neighborhood $W\subseteq U$ of $\Sigma$ on which $H=0$ and
$E=0$; consequently $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ on $W$, so $g$ solves
the Einstein equation with the prescribed matter tensor there.

## Facts & Assumptions

**Given:** the manifold, the spacelike hypersurface, the neighborhood $U$, the background metric and matter tensor with $\nabla^aT_{ab}=0$, the reduced solution, and hypotheses 2--3.

[L1] On $\Sigma$: $H=0$ implies $\nabla_iH=0$ for tangential directions $e_i$, because $H$ vanishes on the whole hypersurface and the tangential derivatives are defined by the restriction ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]).

[L2] The residual identity $E_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$ holds identically ([[lem-gr-einstein-residual-and-subsidiary-identity]] clause (a)).

[L3] In a chart with $x^0$ a normal coordinate and $g_{00}=-1$, $g_{0i}=0$ on $\Sigma$, the components are $E_{00}=\tfrac12\nabla_0H_0$ and $E_{0i}=\tfrac12\nabla_0H_i$ at points of $\Sigma$; this is the computation of step 1.1 ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L4] The gauge vector solves the linear homogeneous wave equation $\Box_gH_b+\operatorname{Ric}_{ba}H^a=0$ on $U$ ([[lem-gr-einstein-residual-and-subsidiary-identity]] clause (b)).

[L5] Linear wave uniqueness: the system $\Box_gw_b+c_{b}{}^a{}_dw^d+\ldots=0$ with principal part the metric wave operator, written as a first-order system $w\mapsto(w_b,\nabla_0w_b,\nabla_iw_b)$ in an orthogonal chart, is symmetric hyperbolic with positive definite time matrix $-g^{00}I$; two $C^\infty$ solutions with the same Cauchy data $(w,\nabla_{\mathfrak n}w)$ on $\Sigma$ agree on a neighborhood of $\Sigma$ ([[lem-gr-reduced-einstein-principal-part]] clause (b) applied to the scalar-wave reduction, [[thm-gr-local-symmetric-hyperbolic-well-posedness]] clause (c), [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]).

## Proof

**Proof technique:** direct.

1.1 (Zero Cauchy data on $\Sigma$.) Fix $p\in\Sigma$ and a chart with $x^0$ the normal coordinate, $g_{00}=-1$, $g_{0i}=0$, $e_i=\partial_i$ at $p$. By [L1], $\nabla_iH_0=\nabla_iH_j=0$ on $\Sigma$ in tangential directions. Computing [L2] at $p$: $\nabla^cH_c=g^{00}\nabla_0H_0+g^{ij}\nabla_iH_j=-\nabla_0H_0$, so $E_{00}=\tfrac12(2\nabla_0H_0-g_{00}\nabla^cH_c)=\tfrac12(2\nabla_0H_0-\nabla_0H_0)=\tfrac12\nabla_0H_0$ and $E_{0i}=\tfrac12(\nabla_0H_i+\nabla_iH_0)=\tfrac12\nabla_0H_i$. Hypothesis 3 therefore gives $\nabla_0H_0=\nabla_0H_i=0$ at every point of $\Sigma$; together with hypothesis 2 and [L1] this says that $H$ and all its first derivatives vanish on $\Sigma$. [L1, L2, L3, algebra]

2.1 (Uniqueness for the subsidiary wave equation.) By [L4] and [L5], the restriction of $H$ to a neighborhood of $\Sigma$ solves a linear symmetric hyperbolic system whose Cauchy data $(H,\nabla_{\mathfrak n}H)$ vanish on $\Sigma$ by step 1.1; the zero solution and $H$ have the same data, so by the uniqueness clause of [L5] they agree on a neighborhood of $\Sigma$. Hence there is an open $W\subseteq U$ with $H=0$ on $W$. [step 1.1, L4, L5]

3.1 (The Einstein equation.) On $W$, $H=0$, so $E=0$ by [L2] (identity (a) with $H=0$); by the definition of the Einstein residual $E=G+\Lambda g-\kappa T$, this is $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ on $W$. [step 2.1, L2, algebra] ∎

## Remarks

- **Role.** This is the passage from reduced to unreduced solutions: combined with [[thm-gr-reduced-einstein-local-existence]] it shows that constrained reduced data produce actual Einstein-matter solutions, which E2 then interprets geometrically.
