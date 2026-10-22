---
id: def-qftx-off-shell-local-polynomial-functionals
kind: definition
title: Off-shell local polynomial scalar functionals
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qftx-distributions-on-smooth-manifolds
  - def-qftx-wavefront-hadamard
dependency_roles:
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, full lecture notes
      url: https://arxiv.org/html/1208.1428
      locator: Section 4, equations (21)–(24), smooth off-shell scalar configurations, compactly supported functionals and finite-jet local functionals.
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Section 3.1, printed pp. 14–16, local interaction functionals and causal construction.
verification:
  precheck: n/a
---

## Definition

Let $\mathbb M=\mathbb R^4$ with coordinates $x=(x^0,x^1,x^2,x^3)$, metric $\eta=\operatorname{diag}(-1,1,1,1)$ and time orientation given by increasing $x^0$. A field configuration is any smooth real function $\phi\in C^\infty(\mathbb M;\mathbb R)$; it is off shell, meaning that it is not required to satisfy a field equation. For an integer $s\ge0$, its finite jet at $x$ is the finite tuple $j^s\phi(x)=(\partial^\alpha\phi(x))_{|\alpha|\le s}$, with multi-index derivatives in these coordinates.

An off-shell local polynomial scalar functional is a finite sum
$$F(\phi)=c+\sum_{a=1}^{N}\int_{\mathbb M} f_a(x)\,P_a(j^{s_a}\phi(x))\,d^4x,$$
where $c\in\mathbb C$, $f_a\in C_c^\infty(\mathbb M;\mathbb C)$, each $P_a$ is a polynomial in the finitely many jet coordinates, and each $s_a$ is finite. Its support is contained in the compact set $\bigcup_{a=1}^{N}\operatorname{supp}f_a$. The collection of these functionals is denoted $\mathcal F_{\mathrm{loc}}^{\mathrm{poly}}(\mathbb M)$. The involution is $F^*(\phi)=\overline{F(\phi)}$. No physical units or field equation are imposed.

Precisely, $\operatorname{supp}F$ is the set of $x\in\mathbb M$ such that every neighborhood $U$ of $x$ contains the support of some $h\in C_c^\infty(\mathbb M;\mathbb R)$ for which $F(\phi+h)\ne F(\phi)$ for some smooth configuration $\phi$. It is closed and is contained in the displayed compact union, so it is compact. This definition is independent of the chosen finite presentation of $F$.

For $r\ge1$, define the $r$th functional derivative by
$$F^{(r)}(\phi)(h_1,\ldots,h_r)=\left.\frac{\partial^r}{\partial t_1\cdots\partial t_r}F\!\left(\phi+\sum_{j=1}^{r}t_jh_j\right)\right|_{t_1=\cdots=t_r=0},\qquad h_j\in C_c^\infty(\mathbb M;\mathbb R).$$
The finite polynomial expansion makes this a symmetric multilinear form. Repeated integration by parts in each $h_j$ writes it as a compactly supported distribution kernel on the thin diagonal $\{(x,\ldots,x):x\in\mathbb M\}\subset\mathbb M^r$. Integrals use the fixed Minkowski density $d^4x$; all kernels are paired bilinearly with compactly supported smooth tests.

## Definition references

[[def-qftx-distributions-on-smooth-manifolds]]

[[def-qftx-wavefront-hadamard]]
