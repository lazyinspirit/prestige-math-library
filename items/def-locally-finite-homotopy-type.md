---
id: def-locally-finite-homotopy-type
kind: definition
title: "Locally finite homotopy types and rational cardinality"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-homotopy-fiber-of-a-map
justified_by:
  - lem-homotopy-fiber-component-weight-ratio
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §2"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Olivier Schiffmann, Lectures on Hall algebras, arXiv:math/0611617v2, §5.6"
      url: "https://arxiv.org/pdf/math/0611617v2"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

A homotopy type $X$ is **locally finite** if every homotopy group $\pi_i(X,x)$ is finite for every point $x$, and for each $x$ there is an integer $n_x$ such that $\pi_i(X,x)=0$ for $i>n_x$.

Write $\pi_0(X)$ for the set of connected components. Let $\mathbb Q_c(X)$ be the rational-valued functions on $\pi_0(X)$ with finite support. For a component $x$, the **homotopy weight** is
$$
w_X(x):=\prod_{i>0}|\pi_i(X,x)|^{(-1)^i}.
$$
The product is finite because the positive homotopy groups vanish in high degrees; a negative exponent means a reciprocal.

For a map $f:X\to Y$ of locally finite homotopy types and $\alpha\in\mathbb Q_c(X)$, define
$$
f_!(\alpha)(y):=\sum_{x\in\pi_0(F_y)}\alpha(i_y(x))\,w_{F_y}(x),
$$
where $F_y$ is the homotopy fiber of $f$ at $y$ ([[def-homotopy-fiber-of-a-map]]) and $i_y:F_y\to X$ is its natural map. For a proper map, meaning one whose homotopy fibers have finitely many connected components, also define $f^*:\mathbb Q_c(Y)\to\mathbb Q_c(X)$ by $f^*\beta=\beta\circ\pi_0(f)$.

The ratio lemma [[lem-homotopy-fiber-component-weight-ratio]] proves that fibers of maps between locally finite homotopy types are locally finite and that the displayed sum is finite. The set of components of a homotopy fiber alone does not determine $f_!$.

## Remarks

For an arbitrary map $f:X\to Y$ and a chosen point $y\in Y$, the unbased homotopy fiber used here is the mapping-path fiber
$$F_y=\{(x,\gamma)\in X\times Y^I:\gamma(0)=f(x),\ \gamma(1)=y\},$$
with the path-space and subspace topology of [[def-homotopy-fiber-of-a-map]], forgetting its required basepoint. No point of $X$ mapping to $y$ is required. If $x_0\in X$ satisfies $f(x_0)=y$, the based construction in [[def-homotopy-fiber-of-a-map]] is this same space with the basepoint $(x_0,c_y)$. If $\eta$ is a path from $y$ to $y'$, the map $(x,\gamma)\mapsto(x,\gamma*\eta)$ has homotopy inverse $(x,\gamma')\mapsto(x,\gamma'*\eta^{-1})$, using path reparameterization and cancellation of $\eta*\eta^{-1}$. Thus the fiber homotopy type depends only on the chosen target component.
