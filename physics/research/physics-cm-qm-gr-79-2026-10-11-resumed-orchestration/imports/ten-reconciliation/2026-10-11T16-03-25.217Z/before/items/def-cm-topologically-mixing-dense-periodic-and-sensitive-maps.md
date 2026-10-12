---
id: def-cm-topologically-mixing-dense-periodic-and-sensitive-maps
kind: definition
title: "Topological mixing, dense periodic points, sensitive dependence, and the stated chaos list"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-metric-space, def-metric-topology, def-dense-top, def-metric-ball, def-metric-continuity]
dependency_roles:
  def-metric-space: mathematical-premise
  def-metric-topology: mathematical-premise
  def-dense-top: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-continuity: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "C. Ulcigrai, MATH36206/MATHM6206 Topological and Symbolic Dynamics, Definitions 2.2.2-2.2.4 and 2.3.4 (topological transitivity, minimality, mixing and sensitive dependence)"
      url: "https://m-artigiani.github.io/files/SisDin-Part2.pdf"
    - title: "E. Glasner and B. Weiss, Sensitive dependence on initial conditions (Nonlinearity 6, 1993, 1067-1075; updated author version), Section 0: the three properties (transitivity, dense periodic points, sensitivity) used in one standard definition of a chaotic system"
      url: "https://www.math.tau.ac.il/~glasner/papers/sensi.pdf"
verification:
  precheck: pass
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]) with its metric topology ([[def-metric-topology]]) and let $f:X\to X$ be a map. For $n\ge1$ write $f^n$ for the $n$-fold iterate, $f^1:=f$ and $f^{n+1}:=f\circ f^n$.

1. $f$ is **topologically mixing** when for all nonempty open sets $U,V\subseteq X$ there is an integer $N$ such that

$$f^n(U)\cap V\ne\emptyset\qquad\text{for every }n\ge N .$$

2. A point $x\in X$ is a **periodic point** of $f$ when $f^n(x)=x$ for some $n\ge1$. The set of periodic points of $f$ is written $\operatorname{Per}(f)$. The periodic points are **dense** in $X$ when $\operatorname{Per}(f)$ is dense in $X$, that is ([[def-dense-top]]) when every nonempty open subset of $X$ meets $\operatorname{Per}(f)$.

3. $f$ has **sensitive dependence on initial conditions** when there is a real number $\delta>0$ such that for every $x\in X$ and every $\varepsilon>0$ there are $y\in X$ and $n\ge1$ with

$$d(x,y)<\varepsilon\qquad\text{and}\qquad d\bigl(f^n(x),f^n(y)\bigr)\ge\delta .$$

Such a number $\delta$ is called a **sensitivity constant** for $f$.

Finally, say that $f$ is **chaotic in the stated sense** when $f$ is continuous ([[def-metric-continuity]]), topologically mixing, has dense periodic points, and has sensitive dependence on initial conditions.

## Remarks

- The list is a definition of a chosen package of properties, not a definition of the word "chaos" in all of its uses. Devaney's closely related list replaces topological mixing by topological transitivity; under compactness and absence of isolated points the two open-set forms are equivalent, but no such equivalence is used here. Positive topological entropy, Li-Yorke chaos, and measure-theoretic mixing are further distinct properties that this definition neither implies nor assumes.

- Topological mixing immediately implies the open-set form of topological transitivity: for nonempty open $U,V$ the definition supplies $N$ with $f^N(U)\cap V\ne\emptyset$. Sensitivity is required with one constant $\delta$ uniform over all points and all radii $\varepsilon$; it is a statement about the family of iterates, not about a single pair of orbits.

- The definition applies to non-invertible maps; only forward iterates are used. When $f$ is a bijection, applying the same definitions to $f^{-1}$ gives a separate statement, and nothing here asserts two-sided mixing.
