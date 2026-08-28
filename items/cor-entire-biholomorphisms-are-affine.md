---
id: cor-entire-biholomorphisms-are-affine
kind: corollary
title: "Every biholomorphic self-map of the complex plane is affine"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-biholomorphic-self-maps-riemann-sphere-are-mobius, thm-meromorphic-functions-riemann-sphere-are-rational, thm-rational-map-fibre-count-degree, thm-removable-singularity-characterizations, thm-one-point-compactification-properties, def-one-point-compactification]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

Every biholomorphic self-map of the complex plane is affine: if
$f:\mathbb C\to\mathbb C$ is biholomorphic, then there are $a,b\in\mathbb C$ with
$a\neq0$ and
$$f(z)=az+b.$$

## Facts & Assumptions

**Given:** A biholomorphic map $f:\mathbb C\to\mathbb C$.

[L1] A meromorphic self-map of the sphere is rational, and a bijective rational sphere map has degree $1$ ([[thm-meromorphic-functions-riemann-sphere-are-rational]], [[thm-rational-map-fibre-count-degree]]).

[L2] In the one-point compactification, continuity at $\infty$ is exactly preservation of compact subsets under inverse images ([[def-one-point-compactification]], [[thm-one-point-compactification-properties]]).

## Proof

**Proof technique:** direct.

1.1 Since $f$ and $f^{-1}$ are homeomorphisms of $\mathbb C$, [L2] extends $f$ to a sphere homeomorphism $F$ with $F(\infty)=\infty$. In the infinity chart, the reciprocal expression $1/f(1/w)$ is bounded near $0$, so the removable-singularity theorem makes $F$ meromorphic at $\infty$. Thus $F$ is a meromorphic self-map of the sphere. [L2, given]

2.1 Fact [L1] makes $F$ a rational sphere map of degree $1$, hence Möbius. Because $F(\infty)=\infty$, its denominator has zero $z$-coefficient, so restricting back to $\mathbb C$ gives $f(z)=az+b$ with $a\neq0$. [L1, given, algebra] ∎
