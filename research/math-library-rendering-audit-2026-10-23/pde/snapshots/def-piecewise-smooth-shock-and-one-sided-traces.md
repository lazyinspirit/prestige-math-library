---
id: def-piecewise-smooth-shock-and-one-sided-traces
kind: definition
title: Piecewise smooth shocks and one-sided traces
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
justified_by: []
aliases: []
deps: [def-scalar-conservation-law-and-flux, def-distributional-weak-solution-of-a-scalar-conservation-law, def-ck-euclidean-maps-and-diffeomorphisms, def-metric-interior-closure-boundary, def-total-derivative-in-euclidean-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§4.2, pp. 20--23"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.1--2.2, pp. 9--11"
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§1, pp. 217–218"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, $T>0$, and $f\in C^1(\mathbb R;\mathbb R^n)$
([[def-scalar-conservation-law-and-flux]]). Let $\Gamma$ be a $C^1$ hypersurface
in $\Pi_T=\mathbb R^n\times(0,T)$ with a two-sided open neighbourhood
$U\subset\Pi_T$, so that $U\setminus\Gamma=U^-\mathbin{\dot\cup}U^+$ for
disjoint open sides $U^\pm$
([[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-metric-interior-closure-boundary]], [[def-total-derivative-in-euclidean-space]]).
Fix the unit normal $\nu=(\nu_t,\nu_x)$ on $\Gamma$ oriented from $U^-$ toward
$U^+$, with $\nu_t^2+|\nu_x|^2=1$.

A **piecewise $C^1$ weak solution near $\Gamma$** is a distributional weak
solution $u$ of $u_t+\operatorname{div}_x f(u)=0$ on $\Pi_T$
([[def-distributional-weak-solution-of-a-scalar-conservation-law]]) such that at
each $\zeta\in\Gamma$ there is a neighbourhood $V_\zeta\subset U$ and functions
$\widetilde u^\pm_\zeta\in C^1(V_\zeta)$ representing $u$ on
$V_\zeta\cap U^\pm$, respectively. The **one-sided traces** at $\zeta$ are
$$u^\pm(\zeta):=\widetilde u^\pm_\zeta(\zeta).$$
They are independent of the chosen local extensions, since continuous extensions
agreeing almost everywhere on an open side agree throughout that side and at
its interface points. Thus genuine traces are specified at every point of
$\Gamma\subset U$; arbitrary representative values on $\Gamma$ do not affect
the weak-solution class or these traces. Write
$$[u](\zeta)=u^+(\zeta)-u^-(\zeta),\qquad [f](\zeta)=f(u^+(\zeta))-f(u^-(\zeta)).$$
A point is a **shock point** when $[u](\zeta)\ne0$.

In one space dimension, this includes a $C^1$ graph $x=s(t)$, with sides
$x<s(t)$ and $x>s(t)$; the definition is not restricted to that case, and the
existence of the strong one-sided traces is part of the piecewise-smooth
hypothesis, not a conclusion for arbitrary $L^\infty$ weak solutions.
