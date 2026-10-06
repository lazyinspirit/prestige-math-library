---
id: def-self-similar-riemann-problem
kind: definition
title: The self-similar Riemann problem
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
justified_by: []
aliases: []
deps: [def-scalar-conservation-law-and-flux, def-distributional-weak-solution-of-a-scalar-conservation-law, def-kruzhkov-entropy-solution]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§6, (6.1)--(6.2), p. 49; §§6.1--6.2, pp. 50--54"
    - title: "Victor Ivrii, Partial Differential Equations, University of Toronto, current complete 415-page PDF"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§12.1.1, (12.1.1)--(12.1.5), pp. 350--351"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n=1$ and $f\in C^1(\mathbb R)$
([[def-scalar-conservation-law-and-flux]]). The **Riemann problem** for
$u_t+f(u)_x=0$ prescribes the two-state initial datum
$$u_0(x)=\begin{cases}u_L,&x<0,\\u_R,&x>0,\end{cases}\qquad u_L,u_R\in\mathbb R.$$
One looks for **self-similar** solutions $u(t,x)=v(x/t)$, $t>0$, that is,
solutions invariant under the scaling $(t,x)\mapsto(\lambda t,\lambda x)$,
$\lambda>0$; such a $u$ is determined by the single function
$v\colon\mathbb R\to\mathbb R$ and is constant on each ray $x=\xi t$.

The initial condition is read as the strong local $L^1$ trace
$u(t,\cdot)\to u_0$ as $t\downarrow0$
([[def-kruzhkov-entropy-solution]]), and any
jump or corner of $v$ occurs on a ray; admissibility is the entropy condition of
[[def-kruzhkov-entropy-solution]], not a further restriction on the
self-similar ansatz. Self-similarity is an ansatz to be justified by the
uniqueness theorem rather than an additional hypothesis. No choice principle
occurs.
