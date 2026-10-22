---
id: def-emx-surface-divergence
kind: definition
title: "Weak surface divergence of a tangential field"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  - def-countable-choice
  - def-em-surface-distribution
  - def-euclidean-inner-product
dependency_roles:
  def-countable-choice: mathematical-premise
  def-em-surface-distribution: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Long Chen, Variational Formulation of Maxwell Equations, University of California, Irvine lecture note, updated May 12 2024, 8 pp."
      url: "https://www.math.uci.edu/~chenlong/226/Maxwellweakform.pdf"
      locator: "Section 3.2, PDF p. 5, introduces the intrinsic surface divergence/curl on tangent fields and relates them to tangential traces. The weak functional below is stated independently and explicitly."
---

## Definition

Assume the surface-measure convention with $\mathrm{AC}_\omega$ of the mathematical definition of the stationary surface distribution. Let $S\subset\mathbb R^3$ be a compact embedded $C^2$ hypersurface without manifold boundary, with a chosen continuous unit normal $n$ and its finite surface measure $dS$. At $x\in S$, define the tangent plane

$$T_xS:=\{v\in\mathbb R^3:v\cdot n(x)=0\}.$$

For $\phi\in C^1(S)$, meaning that its composition with each local $C^2$ surface chart is $C^1$, its surface gradient $\nabla_S\phi(x)\in T_xS$ is the unique vector satisfying

$$v\cdot\nabla_S\phi(x)=d\phi_x(v)\qquad\text{for every }v\in T_xS,$$

where $d\phi_x$ is the derivative of $\phi$ in tangent directions. For a measurable tangential field $K:S\to\mathbb R^3$ with $\int_S|K|\,dS<\infty$, define its **weak surface divergence** $\operatorname{Div}_S K$ as the linear functional on $C^1(S)$

$$\langle\operatorname{Div}_S K,\phi\rangle:=-\int_S K\cdot\nabla_S\phi\,dS.$$

This functional is well-defined because $S$ is compact, $\nabla_S\phi$ is continuous and bounded, and $K$ is integrable. If it has a continuous density $g:S\to\mathbb R$, meaning

$$\langle\operatorname{Div}_S K,\phi\rangle=\int_S g\phi\,dS\qquad\text{for every }\phi\in C^1(S),$$

then $g$ is called a continuous representative of the weak surface divergence. The definition itself does not assert that such a representative exists or is unique; a result using pointwise $\operatorname{div}_S K$ must establish both.

## Definition references

[[def-countable-choice]]

[[def-em-surface-distribution]]

[[def-euclidean-inner-product]]
