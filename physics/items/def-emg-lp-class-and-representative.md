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
  - def-order-topology-on-a-linearly-ordered-set
  - def-borel-sigma-algebra
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - def-calligraphic-l-p-on-a-measure-space
  - def-l-infinity-on-a-measure-space
  - def-essential-supremum-with-respect-to-a-measure
  - prop-essential-supremum-is-attained-as-the-least-essential-bound
  - def-null-subspace-of-almost-everywhere-zero-functions
  - def-measure-null-set-and-almost-everywhere
dependency_roles:
  def-measure-space: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space: mathematical-premise
  def-order-topology-on-a-linearly-ordered-set: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  def-calligraphic-l-p-on-a-measure-space: mathematical-premise
  def-l-infinity-on-a-measure-space: mathematical-premise
  def-essential-supremum-with-respect-to-a-measure: mathematical-premise
  prop-essential-supremum-is-attained-as-the-least-essential-bound: mathematical-premise
  def-null-subspace-of-almost-everywhere-zero-functions: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Definition 7.17 and Theorem 7.18"
      url: "https://measure.axler.net/MIRA.pdf"
dependency_level: 0
---

## Definition

Let $(X,\Sigma,\mu)$ be a measure space in [[def-measure-space]]. Give $\mathbb R$ the order topology $\mathcal T_{<}$ of [[def-order-topology-on-a-linearly-ordered-set]], which that supplier identifies with the usual real topology, and let $\mathcal B(\mathbb R):=\sigma_{\mathbb R}(\mathcal T_{<})$ be its Borel sigma-algebra as in [[def-borel-sigma-algebra]]. A measurable real function is a map $f:X\to\mathbb R$ measurable from $(X,\Sigma)$ to $(\mathbb R,\mathcal B(\mathbb R))$ in the sense of [[def-measurable-function-between-measurable-spaces]]. For $1\le p<\infty$, let the representative space be $\mathcal L^p(\mu)=\{f:X\to\mathbb R: f\text{ is measurable and }\int_X|f|^p\,d\mu<\infty\}$, exactly the supplier definition [[def-calligraphic-l-p-on-a-measure-space]]. For $p=\infty$, the representatives are the measurable real functions for which $\mu(\{x:|f(x)|>C\})=0$ for some finite $C\ge0$. The level sets used here are measurable by [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]. This finite-bound condition is exactly $\|f\|_\infty<\infty$ in [[def-essential-supremum-with-respect-to-a-measure]] and [[def-l-infinity-on-a-measure-space]]: if such a $C$ exists then the essential supremum is at most $C$; conversely, if the essential supremum is finite, [[prop-essential-supremum-is-attained-as-the-least-essential-bound]] proves that this finite value itself is an essential bound.

For measurable $f,g:X\to\mathbb R$, the difference $f-g$ is measurable by the addition and scalar-multiplication clauses of [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]. Therefore

$$\{x:f(x)\ne g(x)\}=(f-g)^{-1}(\mathbb R\setminus\{0\})\in\Sigma,$$

because $\mathbb R\setminus\{0\}$ is open in the stated topology and hence Borel. On either representative space put

$$f\sim g\quad\Longleftrightarrow\quad\mu(\{x\in X:f(x)\ne g(x)\})=0.$$

By [[def-null-subspace-of-almost-everywhere-zero-functions]] and [[def-measure-null-set-and-almost-everywhere]], this is equivalent to $f-g\in\mathcal N(\mu)$, so it is exactly the relation in [[def-l-p-space-as-a-quotient-by-null-functions]]. The element $[f]\in L^p(\mu)$ is the equivalence class of $f$; an **explicit representative** is a specified measurable function belonging to that class. The quotient norms are

$$\|[f]\|_p=\left(\int_X|f|^p\,d\mu\right)^{1/p}\quad(1\le p<\infty),\qquad\|[f]\|_\infty=\operatorname*{ess\,sup}_X|f|,$$

with independence of representative and the norm axioms supplied by [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]].

A pointwise statement such as $f(x)=0$ concerns the selected representative. A property invariant under almost-everywhere equality, such as $f=0$ almost everywhere, concerns the class. No value of $[f]$ at a particular point is defined by this quotient.

## Remarks

This definition uses real-valued representatives. When a coupled Sobolev construction uses complex functions, it specifies their real and imaginary representatives separately; this item does not assert a complex-valued $L^p$ quotient or choose representatives simultaneously for an arbitrary family of classes. The definition imposes no additional choice principle.
