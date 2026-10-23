---
id: def-fd-conservative-weak-form
kind: definition
title: Locally integrable conservative weak and initial forms
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Partial Differential Equations: Lecture Notes"
      url: "https://www.math.uchicago.edu/~luis/pdenotes.pdf"
      locator: "Chapter 6, §6.2.2, Definition 6.2.1, printed pp. 103–104."
    - title: "Introduction to Partial Differential Equations for Engineering Applications"
      url: "https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf"
      locator: "Part VII, §24.4.2, Definition 24.3, and Chapter 26, §26.2.2, Definition 26.2, printed pp. 181–182 and 191–192."
verification:
  precheck: n/a
physical_scope: null
empirical_premises: []
---

## Definition

Let $T>0$, let $\Omega\subseteq\mathbb R^3$ be open, and let $m\ge1$ be an integer. A measurable function on an open Euclidean set $D$ is locally integrable if its norm has finite Lebesgue integral on every compact subset of $D$. For a space-time field on $\Omega\times[0,T)$ this condition is imposed on compact subsets in the relative topology, including those meeting $t=0$. Fields are identified when they agree almost everywhere. Let $U: \Omega\times[0,T)\to\mathbb R^m$, $F: \Omega\times[0,T)\to\mathbb R^{m\times3}$, and $S: \Omega\times[0,T)\to\mathbb R^m$ be such fields, and let $U_0:\Omega\to\mathbb R^m$ be locally integrable. For each row $a$, define $(\operatorname{div}_x F)_a=\sum_{j=1}^3\partial_{x_j}F_{aj}$ in the distributional sense, and define $F:\nabla_x\phi=\sum_{a=1}^m\sum_{j=1}^3F_{aj}\partial_{x_j}\phi_a$. The equation $\partial_tU+\operatorname{div}_xF=S$ with distributional initial datum $U_0$ means that for every $\phi\in C_c^1(\Omega\times[0,T);\mathbb R^m)$, continuously differentiable up to $t=0$ and supported away from $\partial\Omega$ and $t=T$,

$$\int_0^T\!\int_\Omega\bigl(U\cdot\partial_t\phi+F:\nabla_x\phi+S\cdot\phi\bigr)\,dx\,dt+\int_\Omega U_0(x)\cdot\phi(x,0)\,dx=0.$$

No boundary condition on $\partial\Omega$ is encoded because the test fields are supported away from it. This initial identity specifies the initial datum distributionally; it does not assert $U(\cdot,t)\to U_0$ in $L^1_{\mathrm{loc}}(\Omega)$ or any other stronger trace topology. Such a trace must be assumed or proved separately. The fields are abstract mathematical variables; no physical unit system or balance postulate is imposed.

For locally integrable scalar fields $H,R,H_0$ and a locally integrable flux $Q: \Omega\times[0,T)\to\mathbb R^3$, the inequality $\partial_tH+\operatorname{div}_x Q\ge R$ with initial datum $H_0$ means that for every nonnegative $\psi\in C_c^1(\Omega\times[0,T))$ with the same support convention,

$$\int_0^T\!\int_\Omega\bigl(H\,\partial_t\psi+Q\cdot\nabla_x\psi+R\psi\bigr)\,dx\,dt+\int_\Omega H_0(x)\psi(x,0)\,dx\le0.$$

## Definition references

[Silvestre, *Partial Differential Equations: Lecture Notes*, Chapter 6, §6.2.2](https://www.math.uchicago.edu/~luis/pdenotes.pdf).

[Guermond, *Introduction to Partial Differential Equations for Engineering Applications*, §§24.4.2 and 26.2.2](https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf).
