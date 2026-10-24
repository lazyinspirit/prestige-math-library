---
id: def-scalar-conservation-law-and-flux
kind: definition
title: Scalar conservation laws, fluxes and Cauchy data
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
aliases: []
deps: [def-ck-and-multi-index-notation-in-several-variables, def-directional-and-partial-derivatives, def-divergence-and-curl-of-a-c1-vector-field, def-total-derivative-in-euclidean-space, def-l-p-space-as-a-quotient-by-null-functions, def-locally-integrable-function-on-r-n, thm-chain-rule]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§§1--2, equations (1.1)--(1.6), pp. 217--221"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§1 and §4.1--4.2, pp. 1--4 and 18--23"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§1.1--1.2, pp. 1--6"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$ and let $\Pi=O\times(a,b)\subseteq\mathbb R^n\times\mathbb R$ be an
open space--time cylinder. The equation
$$u_t+\operatorname{div}_x f(u)=0\qquad\text{in }\Pi$$
is the **scalar conservation law in conservation form**, where the unknown
$u\colon\Pi\to\mathbb R$ is the conserved quantity and the flux is a map
$f\colon\mathbb R\to\mathbb R^n$. The classical expression is used when $u$ and
$f\circ u$ are $C^1$; the distributional expression is used whenever
$u,f(u)\in L^1_{\mathrm{loc}}(\Pi)$. In particular, if $u$ is bounded measurable
and $f$ is continuous, then $f(u)$ is locally integrable and its distributional
divergence is defined ([[def-locally-integrable-function-on-r-n]],
[[def-l-p-space-as-a-quotient-by-null-functions]]).

A Cauchy problem is posed separately on $\Pi_T=\mathbb R^n\times(0,T)$ and has
initial datum $u_0\in L^\infty(\mathbb R^n)\cap L^1_{\mathrm{loc}}(\mathbb R^n)$,
understood as an equivalence class; the weak formulation records it in the
initial boundary term and the entropy formulation uses a strong local $L^1$
trace. If $f\in C^1(\mathbb R;\mathbb R^n)$ and $u\in C^1$, the chain rule gives
the equivalent quasilinear equation
$$u_t+f'(u)\cdot\nabla u=0$$
([[thm-chain-rule]], [[def-ck-and-multi-index-notation-in-several-variables]],
[[def-total-derivative-in-euclidean-space]],
[[def-directional-and-partial-derivatives]],
[[def-divergence-and-curl-of-a-c1-vector-field]]). This equivalence is **not**
asserted for discontinuous $u$: the product of $f'(u)$ with a distributional
gradient is not generally defined, while $\operatorname{div}_x f(u)$ is defined
distributionally whenever $f(u)\in L^1_{\mathrm{loc}}$.

The one-dimensional case is $u_t+f(u)_x=0$ with scalar flux
$f\colon\mathbb R\to\mathbb R$. Whenever the Riemann theory, the
Rankine--Hugoniot condition or the characteristic formula below is invoked, $f$
is assumed at least $C^1$ (and $C^2$ where $f'$ or $f''$ is differentiated);
adding a constant vector to $f$ does not change the equation because its
divergence is zero.
