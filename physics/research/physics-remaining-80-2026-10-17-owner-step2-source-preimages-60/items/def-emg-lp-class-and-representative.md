---
id: def-emg-lp-class-and-representative
kind: definition
title: "Lp classes and explicit representatives"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-measure-space
  - def-measurable-function-between-measurable-spaces
  - def-l-p-space-as-a-quotient-by-null-functions
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
dependency_roles:
  def-measure-space: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Definition 7.17 and Theorem 7.18"
      url: "https://measure.axler.net/MIRA.pdf"
dependency_level: 0
---

## Definition

Let $(X,\Sigma,\mu)$ be a measure space in [[def-measure-space]]. A measurable real function is a map $f:X\to\mathbb R$ measurable from $(X,\Sigma)$ to the real Borel measurable space, in the sense of [[def-measurable-function-between-measurable-spaces]]. For $1\le p<\infty$, use the measurable real functions satisfying $\int_X|f|^p\,d\mu<\infty$; for $p=\infty$, use the essentially bounded measurable real functions, meaning that $\mu(\{x:|f(x)|>C\})=0$ for some finite $C\ge0$.

On either function space put

$$f\sim g\quad\Longleftrightarrow\quad\mu(\{x\in X:f(x)\ne g(x)\})=0.$$

The inequality set is measurable for real measurable functions. The relation and quotient are precisely those of [[def-l-p-space-as-a-quotient-by-null-functions]]. The element $[f]\in L^p(\mu)$ is the equivalence class of $f$; an **explicit representative** is a specified measurable function belonging to that class. The quotient norms are

$$\|[f]\|_p=\left(\int_X|f|^p\,d\mu\right)^{1/p}\quad(1\le p<\infty),\qquad\|[f]\|_\infty=\operatorname*{ess\,sup}_X|f|,$$

with independence of representative and the norm axioms supplied by [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]].

A pointwise statement such as $f(x)=0$ concerns the selected representative. A property invariant under almost-everywhere equality, such as $f=0$ almost everywhere, concerns the class. No value of $[f]$ at a particular point is defined by this quotient.

## Remarks

This definition uses real-valued representatives. When a coupled Sobolev construction uses complex functions, it specifies their real and imaginary representatives separately; this item does not assert a complex-valued $L^p$ quotient or choose representatives simultaneously for an arbitrary family of classes. The definition imposes no additional choice principle.
