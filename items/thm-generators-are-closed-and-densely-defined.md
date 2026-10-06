---
id: thm-generators-are-closed-and-densely-defined
kind: theorem
title: "The generator is closed and densely defined"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
  - def-dependent-choice
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - lem-integrated-semigroup-orbits-belong-to-the-generator-domain
  - lem-semigroup-generator-commutes-with-orbits-on-its-domain
  - lem-strong-continuity-at-zero-implies-orbit-continuity
  - def-densely-defined-closed-and-closable-operator
  - def-unbounded-linear-operator-domain-and-graph
  - lem-average-convergence-of-a-continuous-banach-valued-function
  - lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - def-strongly-continuous-semigroup
  - def-bochner-integrable-function
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 1, Theorem 1.4, printed pp. 51-52"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, Corollary 11.10, printed pp. 255-259"
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Chapter 1 Section 1.1, Proposition 1.19, proof parts 1-2, printed pp. 11-12 (March 19, 2026 revision)"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with generator $(A,D(A))$ ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]). Then $A$ is a closed linear operator and $D(A)$ is dense in $X$ ([[def-densely-defined-closed-and-closable-operator]]).

## Facts & Assumptions

**Given:** Dependent Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with generator $(A,D(A))$ ([[def-strongly-continuous-semigroup]], [[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[F1] Time integrals of orbits lie in the generator domain: for every $x\in X$ and $t>0$ the Bochner integral $J_tx=\int_0^tT(s)x\,ds$ satisfies $J_tx\in D(A)$ and $AJ_tx=T(t)x-x$ ([[lem-integrated-semigroup-orbits-belong-to-the-generator-domain]], [[def-bochner-integrable-function]]).

[F2] Average convergence ([[lem-average-convergence-of-a-continuous-banach-valued-function]]): a continuous curve on a compact interval is Bochner integrable, and $\frac1h\int_0^hT(s)y\,ds\to y$ as $h\downarrow0$ for every $y\in X$; hence $\frac1tJ_tx\to x$ for every $x$.

[F3] The semigroup is locally bounded and all orbits are continuous, and $T(h)z\to z$ as $h\downarrow0$ for every $z$ ([[lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval]], [[lem-strong-continuity-at-zero-implies-orbit-continuity]]); the norm inequality for Bochner integrals bounds $\|\int_0^hT(s)z\,ds\|\le h\sup_{0\le s\le h}\|T(s)\|\,\|z\|$. For $x\in D(A)$ the orbit is differentiable with derivative $T(s)Ax$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]]), so the fundamental theorem of calculus for Banach-valued continuous curves gives $\int_0^hT(s)Ax\,ds=T(h)x-x$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[F4] Closedness and density of a linear operator are the graph and domain conditions of [[def-densely-defined-closed-and-closable-operator]] with the operator vocabulary of [[def-unbounded-linear-operator-domain-and-graph]].



## Proof

**Proof technique:** direct: density from the orbit averages, closedness by passing a convergent sequence through the integral identity.

1.1 Density: for $x\in X$ and $t>0$, [F1] gives $J_tx\in D(A)$, and by [F2] $\frac1tJ_tx\to x$ as $t\downarrow0$; hence $x$ lies in the closure of $D(A)$. Since $x$ was arbitrary, $D(A)$ is dense in $X$. [F1, F2]

1.2 Closedness: suppose $x_n\in D(A)$ with $x_n\to x$ and $Ax_n\to y$ in $X$. For fixed $h>0$ and every $n$, the orbit of $x_n$ is differentiable with derivative $T(s)Ax_n$, so [F3] gives $T(h)x_n-x_n=\int_0^hT(s)Ax_n\,ds$. [F3]

2.1 As $n\to\infty$, the left-hand side tends to $T(h)x-x$, because $T(h)$ is bounded and the orbit of $x$ is continuous; the right-hand side tends to $\int_0^hT(s)y\,ds$, because $\bigl\|\int_0^hT(s)(Ax_n-y)\,ds\bigr\|\le h\sup_{0\le s\le h}\|T(s)\|\,\|Ax_n-y\|\to0$ by the local bound [F3]. Hence $T(h)x-x=\int_0^hT(s)y\,ds$ for every $h>0$. [F3, step 1.2]

3.1 Dividing by $h$ and using the average-convergence limit of [F2] for the continuous curve $s\mapsto T(s)y$ gives $\frac{T(h)x-x}{h}=\frac1h\int_0^hT(s)y\,ds\to y$ as $h\downarrow0$. By the definition of the generator, $x\in D(A)$ and $Ax=y$; hence the graph of $A$ contains the limits of all convergent graph sequences, and under DC (hence Countable Choice) the closure-sequence criterion in [[def-infinitesimal-generator-of-a-c-zero-semigroup]] makes the graph closed. [F2, step 2.1]

4.1 Together with [step 1.1], the generator of a strongly continuous semigroup is a closed and densely defined linear operator, in the sense of [F4]. [F4, step 1.1, step 3.1] ∎
