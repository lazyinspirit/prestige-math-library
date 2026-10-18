---
id: def-euler-star-pressure-response
kind: definition
title: "Ideal-gas rarefaction and shock pressure response"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-ideal-gas-euler-state-and-pressure]
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
      locator: "Ch. 9 §9.2, printed pp. 91–93: Euler star states reduced to a pressure equation"
---

## Definition

Fix $\gamma>1$ and admissible left/right primitive states
$(\rho_K,u_K,p_K)$, $K\in\{L,R\}$, with $\rho_K,p_K>0$ and
$c_K=\sqrt{\gamma p_K/\rho_K}$. Set
$$A_K=\frac{2}{(\gamma+1)\rho_K},\qquad B_K=\frac{\gamma-1}{\gamma+1}p_K.$$
For a trial star pressure $p>0$, the wave pressure response from side $K$ is
$$f_K(p)=\begin{cases}\dfrac{2c_K}{\gamma-1}\left[\left(\dfrac p{p_K}\right)^{(\gamma-1)/(2\gamma)}-1\right],&0<p\le p_K,\\(p-p_K)\sqrt{\dfrac{A_K}{p+B_K}},&p\ge p_K.\end{cases}$$
The two formulas agree at $p=p_K$. The **star-pressure residual** is
$$\Phi(p)=f_L(p)+f_R(p)+u_R-u_L,\qquad p>0.$$
This is a scalar root equation; it does not itself define a Riemann solution.
