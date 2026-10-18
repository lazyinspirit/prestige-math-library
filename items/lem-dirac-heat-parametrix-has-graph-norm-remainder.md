---
id: lem-dirac-heat-parametrix-has-graph-norm-remainder
kind: lemma
title: "The geometric Dirac heat parametrix has a graph-norm remainder"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 7
deps:
  - lem-dirac-heat-trace-and-mckeen-singer-index
  - lem-lichnerowicz-formula-for-geometric-dirac-operators
  - def-second-order-laplace-type-operators-on-vector-bundles
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - def-axiom-of-choice
  - thm-spectral-theorem-for-compact-self-adjoint-operators
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
axiom_strength: "ZF + full AC; inherited from compact elliptic and heat-kernel suppliers"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume full AC and the closed hypotheses of [[lem-dirac-heat-trace-and-mckeen-singer-index]]. In normal coordinates and radial parallel transport near the diagonal, let $h_t(x,y)=(4\pi t)^{-n/2}e^{-d(x,y)^2/(4t)}$ and define $u_0,u_1,\ldots$ by the heat-transport recursion below. After a cutoff supported inside the injectivity-radius neighborhood, for every $r,b,N\ge0$ there is $J$ such that the parametrix
$$H_J(t,x,y)=\chi(x,y)h_t(x,y)\sum_{j=0}^Jt^ju_j(x,y)$$
satisfies
$$\|K_t-H_J(t)\|_{C_x^rC_y^b}\le C_{r,b,N}t^N\quad(0<t\le1).$$
Thus the local heat expansion has a uniform differentiated remainder of arbitrary order; no convergence of rescaled global kernels is assumed.

## Facts & Assumptions

**Given:** Full AC, the heat kernel from [[lem-dirac-heat-trace-and-mckeen-singer-index]], and $P=D_V^2$ from [[lem-lichnerowicz-formula-for-geometric-dirac-operators]].

[F1] $P=\nabla^*\nabla+R_0$ is a nonnegative Laplace-type operator on compact boundaryless $M$, with exact $H^2$ domain and estimates $\|u\|_{H^{k+2}}\le C_k(\|Pu\|_{H^k}+\|u\|_2)$ ([[lem-lichnerowicz-formula-for-geometric-dirac-operators]], [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]).

[F2] $K_t$ is the smooth kernel of $e^{-tP}$, converges to the identity on smooth data, and the spectral semigroup is contractive on every graph norm of $(1+P)^a$ ([[lem-dirac-heat-trace-and-mckeen-singer-index]], [[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[A1] Full AC is used through [F1]–[F2] ([[def-axiom-of-choice]]).

## Proof

**Given:** A geodesically convex neighborhood of the diagonal, its normal coordinates, and the operator $P$.

1.1 Fix $y$ and use geodesic normal coordinates $x$ centered at $y$. Parallel transport identifies fibers with $V_y$; write $g(x)=\det(g_{ij}(x))$. Set $u_0(x,y)=g(x)^{-1/4}\tau_{y\to x}$, where $\tau$ is radial parallel transport. For $j\ge1$, solve $(r\nabla_{\partial_r}+j+\tfrac r4\partial_r\log g)u_j=-Pu_{j-1}$. Multiplying by $g^{1/4}$ and transporting back to $V_y$ turns this into $(r\partial_r+j)v_j=-g^{1/4}\tau^{-1}Pu_{j-1}$. The unique smooth solution is $v_j(r,\theta)=-\int_0^1s^{j-1}(g^{1/4}\tau^{-1}Pu_{j-1})(sr,\theta)\,ds$; substitution and differentiation verify the equation, and smoothness at $r=0$ excludes the singular homogeneous term $Cr^{-j}$. Hence each $u_j$ is smooth in both variables on a smaller normal neighborhood. [F1, given, construct, algebra]

2.1 The identity $(\partial_t+P)(h_t\sum_{j=0}^Jt^ju_j)=t^Jh_tb_J(x,y)$ follows by differentiating the Gaussian and using the displayed recursion to cancel each power $t^{j-1}$; $b_J$ is smooth with bounded derivatives on the smaller neighborhood. Choose $\chi=1$ near the diagonal and supported inside the normal neighborhood. Derivatives of $\chi$ are supported where $d(x,y)\ge\delta>0$; for any integers $q,s$, $t^{-q}e^{-\delta^2/(4t)}\le C_{q,s}t^s$, so all fixed derivatives of the cutoff error are $O(t^s)$. Near the diagonal each fixed derivative of $t^Jh_tb_J$ loses only finitely many powers of $t$, so increasing $J$ makes its required Sobolev norms $O(t^N)$ to any prescribed order. [given, step 1.1, algebra]

3.1 The initial operator $H_J(t)$ tends to the identity on smooth sections: in normal coordinates put $x=\sqrt t z$ in its integral; $u_0(y,y)=I$, $g(y)=1$, and the normalized Gaussian integrates to one, while the terms $t^ju_j$ for $j>0$ vanish. For $R_J=(\partial_t+P)H_J$, variation of constants gives $e^{-tP}-H_J(t)=-\int_0^t e^{-(t-s)P}R_J(s)\,ds$; differentiating $e^{-(t-s)P}H_J(s)$ and using the zero initial difference proves the identity and its sign. [F2, step 2.1, construct]

4.1 For each integer $a$, the graph norm $\|(1+P)^a u\|_2$ is equivalent to $\|u\|_{H^{2a}}$ by repeated [F1] elliptic estimates. The semigroup $e^{-tP}$ is a contraction in that graph norm because its spectral multiplier is $e^{-t\lambda}\in[0,1]$ and commutes with $(1+P)^a$. The bounds of step 2.1 therefore make the integral in step 3.1 $O(t^{N+1})$ in $H^{2a}_xC_y^b$, after choosing $J$ large enough. Choose $2a>r+n/2$ and Sobolev embedding to obtain the claimed $C_x^rC_y^b$ estimate. Differentiating the Duhamel identity finitely many times costs only finitely many powers of $t$, which are absorbed by increasing $J$. [A1, F1, F2, step 2.1, step 3.1]

5.1 The distance function is used only inside the normal neighborhood, where squared distance is smooth; the cutoff vanishes before the cut locus. Empty $M$ is vacuous, and dimension zero is finite-dimensional heat evolution. This proves the differentiated remainder without invoking Nicolaescu's deferred expansion criterion or Wernli's unproved rescaling limit. [A1, F1, F2, step 1.1, step 4.1] ∎

