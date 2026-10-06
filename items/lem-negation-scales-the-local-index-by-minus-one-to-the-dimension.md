---
id: lem-negation-scales-the-local-index-by-minus-one-to-the-dimension
kind: lemma
title: "Negation scales the local index by $(-1)^n$"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isolated-zero-and-local-index-of-a-vector-field, def-reduced-degree-into-the-zero-sphere, lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, prop-degree-is-multiplicative-under-composition, def-countable-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, printed p. 39 (applying the theorem to X and to -X in odd dimensions)"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Definition 2.2.2 and the sign conventions for -X, printed p. 31"
dependency_level: 2
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent-bundle structure.

Let $M$ be a smooth $n$-manifold, $n\ge1$, and let $X$ be a smooth vector field
with an isolated zero at $p$ ([[def-isolated-zero-and-local-index-of-a-vector-field]]).
Then $-X$ has an isolated zero at $p$ and
$$\operatorname{ind}_p(-X)=(-1)^n\operatorname{ind}_pX.$$

## Facts & Assumptions

**Given:** A smooth vector field $X$ on the smooth $n$-manifold $M$ with an isolated zero at $p$.

[F1] The index is computed by the normalized field on a small sphere: for a chart with representative $X_\varphi$ and admissible $\varepsilon>0$, $\operatorname{ind}_pX=\deg f$ where $f(v):=X_\varphi(\varepsilon v)/|X_\varphi(\varepsilon v)|$, the degree being the ordinary one for $n\ge2$ and the reduced degree for $n=1$ ([[def-isolated-zero-and-local-index-of-a-vector-field]]).

[F2] The antipodal map $v\mapsto-v$ of $S^{n-1}$ has degree $(-1)^n$ for $n\ge2$; the reduced degree of the antipodal map of $S^0$ is $-1=(-1)^1$ ([[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]], [[def-reduced-degree-into-the-zero-sphere]]).

[F3] Degree is multiplicative under composition of maps of $S^{n-1}$ for $n\ge2$, and reduced degree is multiplicative under composition for maps into $S^0$ ([[prop-degree-is-multiplicative-under-composition]], [[lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative]]).

## Proof

1.1 The field $-X$ vanishes exactly where $X$ does, so $p$ is an isolated zero of $-X$; in the same chart $(-X)_\varphi=-X_\varphi$, so its normalized map is $v\mapsto-X_\varphi(\varepsilon v)/|X_\varphi(\varepsilon v)|=(\alpha\circ f)(v)$, where $\alpha(v)=-v$ is the antipodal map of $S^{n-1}$ and $f$ is the normalized map of $X$. [F1, algebra]

2.1 For $n\ge2$ multiplicativity of the degree under composition gives $\operatorname{ind}_p(-X)=\deg\alpha\cdot\deg f=(-1)^n\operatorname{ind}_pX$ by [F2], and for $n=1$ the same computation with reduced degrees gives $\operatorname{ind}_p(-X)=(-1)^1\operatorname{ind}_pX$, since $(-1)^n=(-1)^1$ for $n=1$. [F1, F2, F3, step 1.1, algebra] ∎
