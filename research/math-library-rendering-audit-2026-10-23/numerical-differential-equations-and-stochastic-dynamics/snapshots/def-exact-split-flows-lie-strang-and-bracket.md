---
id: def-exact-split-flows-lie-strang-and-bracket
kind: definition
title: "Lie and Strang compositions of exact split flows"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-additive-ode-and-partition
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, Lecture 2: Symplectic Integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "§5, Lie–Trotter and Strang splitting, PDF pp. 12–14."
    - title: "Gilbert Strang, On the Construction and Comparison of Difference Schemes"
      url: "https://epubs.siam.org/doi/pdf/10.1137/0705041"
      locator: "The symmetric half-step product and second-order comparison, printed pp. 509–513 (PDF pp. 3–7)."
---

## Definition

Let $a,b:U\to\mathbb R^d$ be $C^3$ fields on an open set, and restrict attention to points and time intervals for which the unique local solutions of $x'=a(x)$ and $x'=b(x)$ remain in $U$. Denote their exact solution maps by $\Phi_a^t$ and $\Phi_b^t$. The **Lie split map** applies $a$ and then $b$:
$$L_h:=\Phi_b^h\circ\Phi_a^h.$$
The **Strang split map** applies half of $a$, then $b$, then half of $a$:
$$S_h:=\Phi_a^{h/2}\circ\Phi_b^h\circ\Phi_a^{h/2}.$$
Define the vector-field Lie bracket convention
$$[a,b](y):=Db(y)a(y)-Da(y)b(y).$$
This definition is finite-dimensional. It asserts neither that an unbounded operator has a common invariant domain nor that its commutators are bounded.
