---
id: def-compactly-supported-convolution-on-a-group
kind: definition
title: "Compactly supported convolution on a group"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-left-haar-integral-and-left-haar-measure, def-complex-haar-lp-spaces-and-compactly-supported-functions]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31A–31E, printed pp. 119–125"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§5.3, printed pp. 225–230"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Let $G$ be an LCH group with a fixed left Haar measure $\mu$
([[def-left-haar-integral-and-left-haar-measure]]) and let
$f,g\in C_c(G)$ be complex-valued of compact support
([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]). Their
**convolution** $f*g$ is the function
$$(f*g)(x):=\int_G f(y)\,g(y^{-1}x)\,d\mu(y)\qquad(x\in G),$$
with the displayed order of the factors and of the product $y^{-1}x$. The
integral is taken over $G$ against the left Haar measure and is written with the
same symbol $\ast$ in every later occurrence.

## Remarks

- **Well-definedness for each $x$.** For fixed $x$, the function
  $y\mapsto f(y)g(y^{-1}x)$ is continuous as a product of continuous functions
  of $y$, and it vanishes unless $y\in\operatorname{supp}f$; hence it is
  continuous with compact support and its integral is a finite complex number,
  because $\mu$ is finite on compact sets. The value $(f*g)(x)$ is thus defined
  for every $x\in G$ and no integrability of $f$ or $g$ beyond compact support
  is used.
- **Order convention.** The product is $g(y^{-1}x)$, not $g(xy^{-1})$: this is
  the order under which convolution makes $L^1(G)$ associative for a left Haar
  measure, as proved on the next item. Reversing the order silently would give
  the convolution suited to a right Haar measure.
- **Noncommutativity.** No symmetry of $f*g$ under $f\leftrightarrow g$ is
  asserted. For abelian groups the two orders agree, and only there is
  convolution written without concern for the side.
