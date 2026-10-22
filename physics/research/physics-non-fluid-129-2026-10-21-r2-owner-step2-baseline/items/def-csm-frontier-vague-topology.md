---
id: def-csm-frontier-vague-topology
kind: definition
title: "Locally finite counting measures and vague topology"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Olav Kallenberg, Foundations of Modern Probability, 1997"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/32878/1/Olav%20kallenberg_1997.pdf"
      locator: "Chapter 4, Theorem 4.19 and Lemma 4.20, printed pp. 75–77: vague topology on locally finite measures and its distinction from weak convergence."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, complete author-hosted book"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 2, Sections 2.1 and 2.4, printed pp. 9–18: point processes as counting measures and local finiteness."
verification:
  precheck: pending
---

## Definition

Fix $d\ge1$. A locally finite counting measure on $\mathbb R^d$ is a measure of the form $\xi=\sum_{r\in I}\delta_{x_r}$, where $I$ is finite or countable, repetitions among the points $x_r\in\mathbb R^d$ are allowed, and every compact set contains only finitely many listed points, counting repetitions. The empty sum is allowed and is the zero measure. For a Borel set $B$, $\xi(B)$ is the number of listed points in $B$, with multiplicity. Write $\Gamma_{\mathrm{lf}}(\mathbb R^d)$ for the set of these measures. For $x\in\mathbb R^d$, the point mass $\delta_x$ assigns mass $1$ to a Borel set containing $x$ and mass $0$ otherwise.

The vague topology on $\Gamma_{\mathrm{lf}}(\mathbb R^d)$ is the coarsest topology for which $\xi\mapsto\int f\,d\xi$ is continuous for every nonnegative continuous compactly supported function $f:\mathbb R^d\to\mathbb R$. Thus $\xi_n\to_{\mathrm v}\xi$ exactly when $\int f\,d\xi_n\to\int f\,d\xi$ for every such $f$.

Here a random locally finite counting measure means a measurable random element for which $\Xi_n(B)$ is a random variable for every bounded Borel set $B$. If $(\Xi_n)$ is a sequence of such measures on a common probability space and $K$ is compact, its local counts are uniformly integrable on $K$ when

$$\lim_{R\to\infty}\sup_n\mathbb E\!\left[\Xi_n(K)\mathbf1_{\{\Xi_n(K)>R\}}\right]=0.$$

This is the count-tail condition used when an argument needs control of unbounded observables supported in $K$. The definition asserts no convergence of expectations without the exact test-function, support, and tail hypotheses of the result being applied.

## Definition references

[[def-csm-frontier-local-topologies]]

## Remarks

This measure-space topology is distinct from finite-spin product topology and cylinder convergence. Vague convergence tests compactly supported spatial functions and can lose mass at infinity; weak convergence of probability measures cannot be inferred from it without an additional tightness condition.

## Remarks references

[[def-csm-frontier-local-topologies]]
