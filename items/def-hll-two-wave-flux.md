---
id: def-hll-two-wave-flux
kind: definition
title: "HLL two-wave approximate flux"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-hyperbolic-system-and-characteristic-families]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 14 §14.1, printed pp. 146–148: approximate Riemann solutions and bounding wave speeds"
    - title: "David I. Ketcheson, Randall J. LeVeque, and Mauricio J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Part II, Shallow-water approximate solvers, HLL solver: derivation, wave-speed bounds, and implementation"
---

## Definition

For a two-state problem for a flux $f$ on the open state domain $G$ of
[[def-hyperbolic-system-and-characteristic-families]], choose explicit speeds
$S_L<S_R$. A signal speed means the propagation speed of one wave in the
particular Riemann solution being approximated. If the HLL model is used as an
enclosing approximation to that fan, its admissibility hypothesis is that
every such speed lies in $[S_L,S_R]$; this definition supplies no general
wave-speed bound.
Set $f_L=f(u_L)$ and $f_R=f(u_R)$. The HLL flux is
$$\widehat f_{\rm HLL}=\begin{cases}f_L,&0\le S_L,\\\dfrac{S_Rf_L-S_Lf_R+S_LS_R(u_R-u_L)}{S_R-S_L},&S_L<0<S_R,\\f_R,&S_R\le0.\end{cases}$$
In the middle case the model has three constant regions separated by the two
waves $S_L,S_R$ and one intermediate state. The wave-speed enclosure is a
separate hypothesis whenever an approximation claim uses it.
