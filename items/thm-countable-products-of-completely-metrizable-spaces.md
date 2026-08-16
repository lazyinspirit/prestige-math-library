---
id: thm-countable-products-of-completely-metrizable-spaces
kind: theorem
title: "Under countable choice, a countable product of completely metrizable spaces is completely metrizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-standard-complete-metric-on-a-countable-product, lem-bounded-remetrisation, def-countable-choice, lem-complete-remetrisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every countable product of completely metrizable spaces is completely metrizable, including the empty product.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $((X_n,d_n))_{n\in\mathbb N}$ be complete metric spaces with $d_n\le1$. On $\prod_nX_n$, the formula $D(x,y)=\sum_{n=0}^{\infty}2^{-(n+1)}d_n(x_n,y_n)$ defines a complete metric inducing the product topology. The empty product is the one-point space. ([[lem-standard-complete-metric-on-a-countable-product]]).

[F2] Let $(X,d)$ be a metric space (def-metric-space) and define, for $x, y \in X$, $$d'(x,y) := \min\{\, d(x,y),\ 1 \,\}, \qquad d''(x,y) := \frac{d(x,y)}{1 + d(x,y)} .$$ Both are well defined: $d(x,y) \ge 0$ (lem-metric-nonnegativity), so $1 + d(x,y) > 0$ and is invertible, and the minimum of a two-element set of reals exists (lem-finite-set-has-max, def-max-min). Then: 1. $d'$ and $d''$ are metrics on $X$. 2. $d'(x,y) \le 1$ and $d''(x,y) < 1$ for all $x,y$; hence $(X,d')$ and $(X,d'')$ are bounded metric spaces (def-metric-bounded-diameter), and if $X \ne \emptyset$ then $\operatorname{diam}(X) \le 1$ for both. 3. $d'$ and $d''$ are each uniformly equivalent to $d$, hence topologically equivalent to it (def-equivalent-metrics, thm-metric-equivalence-hierarchy). **Consequently every metric space carries a bounded metric with exactly the same topology**, so boundedness cannot be read off the topology alone. ([[lem-bounded-remetrisation]]).

[F3] The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. The statement is: for every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n\in\mathbb N$. Equivalently, every at most countable family of nonempty sets has a choice function. ([[def-countable-choice]]).

[F4] Let $(X,d)$ be a metric space (def-metric-space) and let $\mathcal{T}_d$ be its metric topology (def-metric-topology). Call $\mathcal{T}_d$ **completely metrizable** if some metric $\rho$ on $X$ is topologically equivalent to $d$, that is $\mathcal{T}_\rho = \mathcal{T}_d$ (def-equivalent-metrics), and makes $(X,\rho)$ complete (def-complete-metric-space). Then: 1. **Homeomorphism invariance.** Let $(Y,e)$ be a metric space and let $h : X \to Y$ be a bijection (def-injection-surjection-bijection) such that $h$ and $h^{-1}$ are continuous (def-metric-continuity). If $\mathcal{T}_d$ is completely metrizable then so is $\mathcal{T}_e$. 2. **Closed subspaces.** If $\mathcal{T}_d$ is completely metrizable and $A \subseteq X$ is closed in $(X,d)$, then $\mathcal{T}_{d_A}$ is completely metrizable, $d_A$ being the subspace metric (def-isometry-and-metric-embedding). 3. **The property is strictly weaker than completeness.** Let $P := (0,\infty) \subseteq \mathbb{R}$ (def-interval) carry $d(x,y) := |x-y|$ (lem-real-line-is-a-metric-space). Then $(P,d)$ is **not** complete, while $$\rho_P(x,y) \;:=\; |x-y| \;+\; \left| \frac{1}{x} - \frac{1}{y} \right|$$ is a complete metric on $P$ with $\mathcal{T}_{\rho_P} = \mathcal{T}_d$. So $\mathcal{T}_d$ is completely metrizable although no completeness assumption holds for $d$ itself. Complete metrizability is a condition on the *collection of open sets* alone: the metric is quantified over and does not survive into the statement. That is exactly what completeness fails to be, and claim 3 shows the two conditions are genuinely different rather than merely stated differently. ([[lem-complete-remetrisation]]).

## Proof

**Proof technique:** direct.

1.1 Use countable choice to select a compatible complete metric in every factor, bound each metric without changing its topology, and invoke the standard weighted product metric. [given, F4, F1, F2, F3]

2.1 The preceding construction and implications establish the assertion. [step 1.1] ∎
