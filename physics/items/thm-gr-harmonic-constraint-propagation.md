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
deps: [def-gr-harmonic-gauge-and-reduced-equations, lem-gr-einstein-residual-and-subsidiary-identity, lem-gr-positive-definite-symmetric-matrix-bounds, thm-extreme-value-metric, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-local-geodesics-and-exponential-map, thm-smooth-inverse-function-theorem-on-manifolds, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, thm-gronwall-integral-inequality, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-einstein-residual-and-subsidiary-identity: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
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

[L5] Locally parametrize $\Sigma$ by $x\mapsto i(x)$ and form $F(t,x)=\exp_{i(x)}(t\mathfrak n_{i(x)})$. The geodesic flow makes $F$ smooth; at $t=0$, its derivative maps $\partial_t$ to $\mathfrak n$ and the three $x$ directions to $T\Sigma$, hence is invertible. The inverse function theorem gives a local chart. Along its $t$-curves, $T=\partial_t$ is a unit timelike geodesic; the coordinate fields commute, so metric compatibility and torsion-freeness give $\partial_tg(T,\partial_i)=g(T,\nabla_{\partial_i}T)=\tfrac12\partial_i g(T,T)=0$. Since the cross terms vanish at $t=0$, this yields $g=-dt^2+h_{ij}(t,x)dx^idx^j$ after shrinking, with $(h_{ij})$ positive definite ([[thm-gr-local-geodesics-and-exponential-map]], [[thm-smooth-inverse-function-theorem-on-manifolds]], [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). In this chart the principal part of $\Box_gw_b+\operatorname{Ric}_{ba}w^a=0$ is $-\partial_t^2w_b+h^{ij}\partial_i\partial_jw_b$; the remaining terms are smooth and linear in $w$ and its first derivatives.

[L6] On a compact coordinate cylinder, a continuous positive-definite symmetric time matrix has a uniform positive lower bound and smooth coefficient matrices and their derivatives are bounded ([[lem-gr-positive-definite-symmetric-matrix-bounds]], [[thm-extreme-value-metric]]). The divergence theorem applies to bounded piecewise $C^1$ truncated coordinate cones, and a continuous nonnegative energy satisfying $E(t)\le C\int_0^tE(s)ds$ vanishes by Gronwall ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** direct.

1.1 (Zero Cauchy data on $\Sigma$.) Fix $p\in\Sigma$ and a chart with $x^0$ the normal coordinate, $g_{00}=-1$, $g_{0i}=0$, $e_i=\partial_i$ at $p$. By [L1], $\nabla_iH_0=\nabla_iH_j=0$ on $\Sigma$ in tangential directions. Computing [L2] at $p$: $\nabla^cH_c=g^{00}\nabla_0H_0+g^{ij}\nabla_iH_j=-\nabla_0H_0$, so $E_{00}=\tfrac12(2\nabla_0H_0-g_{00}\nabla^cH_c)=\tfrac12(2\nabla_0H_0-\nabla_0H_0)=\tfrac12\nabla_0H_0$ and $E_{0i}=\tfrac12(\nabla_0H_i+\nabla_iH_0)=\tfrac12\nabla_0H_i$. Hypothesis 3 therefore gives $\nabla_0H_0=\nabla_0H_i=0$ at every point of $\Sigma$; together with hypothesis 2 and [L1] this says that $H$ and all its first derivatives vanish on $\Sigma$. [L1, L2, L3, algebra]

2.1 (Local cone energy for the subsidiary wave equation.) Fix $p\in\Sigma$ and a relatively compact normal-geodesic chart from [L5], with coordinates $(t,x)$ centered at $p$. Put $w_b=H_b$, $z_b=\partial_tw_b$ and $y_{ib}=\partial_iw_b$. The wave equation [L4] is equivalent on this chart to the first-order system [step 1.1, L4, L5, L6, algebra]
$$
\partial_tw_b-z_b=0,\qquad \partial_ty_{ib}-\partial_i z_b=0,\qquad \partial_tz_b-h^{ij}\partial_i y_{jb}=F_b(t,x,w,z,y),
$$
where $F$ is smooth and linear in $(w,z,y)$. Multiplying the middle equations by $h^{ai}$ gives symmetric spatial coefficient matrices and positive time matrix $A^0=\operatorname{diag}(I,I,h^{ij}I)$ on the independent variables $(w,z,y)$. On a compact coordinate cylinder choose $a>0$ and $b<\infty$ such that $A^0\ge aI$ and $\|A^i\|\le b$; all coefficient derivatives and the lower-order matrix $C$ are bounded there. Choose $\lambda>\sqrt3 b/a$. Then $\lambda A^0+\nu_iA^i\ge0$ for every Euclidean unit spatial conormal $\nu$, since $\|\nu_iA^i\|\le\sqrt3 b$. Shrink $\tau>0$ so the double cone $|t|\le\tau$, $|x-x(p)|\le\lambda\tau$ lies in the chart. Step 1.1 and $H=0$ on $\Sigma$ imply $w=z=y=0$ on its base disk at $t=0$.
For $0\le s<\tau$, set $B_s=\{x:|x-x(p)|\le\lambda(\tau-s)\}$ and $E(s)=\int_{B_s}V^{\mathsf T}A^0V\,dx$, where $V=(w,z,y)$. For a symmetric system $A^0\partial_tV+A^i\partial_iV+CV=0$, its energy current $j^0=V^{\mathsf T}A^0V$, $j^i=V^{\mathsf T}A^iV$ satisfies
$$
\partial_tj^0+\partial_i j^i=V^{\mathsf T}(\partial_tA^0+\partial_iA^i-C-C^{\mathsf T})V.
$$
The right side is bounded above by a constant times $j^0$ on the compact cone. The lateral outward flux on the shrinking cone is proportional to $V^{\mathsf T}(\lambda A^0+\nu_iA^i)V\ge0$. Applying the divergence theorem [L6] gives $E(s)\le E(0)+C\int_0^sE(r)dr$. Since $E(0)=0$, Gronwall [L6] and positivity of $A^0$ imply $H=0$ on the forward cone. Reversing time changes each $A^i$ to $-A^i$ and preserves the same bounds, so the same argument gives vanishing on the backward cone. The two cone estimates give vanishing on the open set $W_p=\{(t,x):|t|<\tau,\ |x-x(p)|<\lambda(\tau-|t|)\}$, which contains $p$. Hence $W=\bigcup_{p\in\Sigma}W_p$ is an open neighborhood in $U$ on which $H=0$. [step 1.1, L4, L5, L6, algebra]

3.1 (The Einstein equation.) On $W$, $H=0$, so $E=0$ by [L2] (identity (a) with $H=0$); by the definition of the Einstein residual $E=G+\Lambda g-\kappa T$, this is $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ on $W$. [step 2.1, L2, algebra] ∎

## Remarks

- **Role.** This is the passage from reduced to unreduced solutions: combined with [[thm-gr-reduced-einstein-local-existence]] it shows that constrained reduced data produce actual Einstein-matter solutions, which E2 then interprets geometrically.
