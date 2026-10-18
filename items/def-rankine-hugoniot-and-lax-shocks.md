---
id: def-rankine-hugoniot-and-lax-shocks
kind: definition
title: "Rankine–Hugoniot jumps and Lax shocks"
status: published
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
sources:
  references:
    - title: "Alberto Bressan, Hyperbolic Conservation Laws: An Illustrated Tutorial"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§§2.2–2.3, printed pp. 13–15: Rankine–Hugoniot and Lax admissibility"
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 7 §§7.1, 7.4, printed pp. 70–78: Hugoniot locus and Lax entropy condition"
---

## Definition

For a system as in [[def-hyperbolic-system-and-characteristic-families]], a
discontinuity with constant states $u_L,u_R\in G$ and speed $s\in\mathbb R$ is
a **Rankine–Hugoniot jump** if
$$f(u_R)-f(u_L)=s(u_R-u_L).$$
For a system strictly hyperbolic on $N\subseteq G$, states $u_L,u_R\in N$,
and $1\le i\le m$, it is a **strict Lax $i$-shock** if it is a Rankine–Hugoniot jump and
$$\lambda_j(u_L)<s\ (j<i),\qquad \lambda_i(u_R)<s<\lambda_i(u_L),\qquad s<\lambda_j(u_R)\ (j>i).$$
An empty family of inequalities is omitted. A linearly-degenerate contact has
equal $i$-speeds on both sides, so it is not a strict Lax shock.
