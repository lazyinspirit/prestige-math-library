---
id: def-scalar-convex-entropy-admissibility
kind: definition
title: "Convex entropy admissibility for a scalar conservation law"
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 3 §3.8, printed pp. 36–40: entropy pairs and entropy inequalities"
---

## Definition

For the scalar case of [[def-hyperbolic-system-and-characteristic-families]],
use its definition of a weak solution on $Q=(0,\infty)\times\mathbb R$. An
**entropy pair** on $G$ is a function $\eta\in C^2(G)$ that is convex on each
interval component of $G$, together with $q\in C^1(G)$ satisfying
$q'(u)=\eta'(u)f'(u)$. A weak solution $u$ is **entropy-admissible for this
pair** when $\eta\circ u,q\circ u\in L^1_{\rm loc}(Q)$ and
$\partial_t\eta(u)+\partial_xq(u)\le0$ in distributions; equivalently,
$$\int_Q\bigl(\eta(u)\,\varphi_t+q(u)\,\varphi_x\bigr)\,dt\,dx\ge0$$
for every nonnegative $\varphi\in C_c^\infty(Q)$. For a single jump of speed
$s$, the entropy inequality requires
$q(u_R)-q(u_L)-s(\eta(u_R)-\eta(u_L))\le0$.
