---
id: def-measurable-hilbert-field-from-a-countable-fundamental-family
kind: definition
title: Measurable Hilbert field from a countable fundamental family
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-standard-borel-space
  - def-finite-sigma-finite-and-semifinite-measures
  - def-hilbert-space
  - def-measurable-function-between-measurable-spaces
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: "https://arxiv.org/pdf/1912.07262"
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Definition

Let $(X,\mathcal B,\mu)$ be a standard-Borel space with a sigma-finite measure
on its Borel sigma-algebra; the measure is not assumed complete. A **measurable
complex Hilbert field with countable fundamental family** consists of a
separable complex Hilbert space $H_x$ for each $x\in X$ and a sequence of
vectors $e_n(x)\in H_x$ ($n\in\mathbb N$) such that
$$x\longmapsto\langle e_n(x),e_m(x)\rangle_{H_x}$$
is Borel measurable for every $n,m$, and the complex-linear span of
$\{e_n(x):n\in\mathbb N\}$ is dense in $H_x$ for every $x$. The fibres may be
zero-dimensional; no positive lower bound on their dimensions is imposed. The
inner product is linear in its first variable, as in the library's complex
inner-product convention.

A section is a choice of a vector $\xi(x)\in H_x$ for each $x$. It is a
**measurable section** when all its fundamental coefficients
$$x\longmapsto\langle\xi(x),e_n(x)\rangle_{H_x},\qquad n\in\mathbb N,$$
are Borel measurable complex functions. Each $e_n$ is itself measurable by
the Gram-coefficient condition. Pointwise sums and multiplication by a
measurable complex scalar function are taken in the corresponding fibres.

Two measurable sections are identified **almost everywhere** when there is a
Borel null set $N$ such that they agree at every $x\notin N$. This formulation
works on the given, possibly noncomplete, measure space and does not silently
adjoin arbitrary subsets of null sets to $\mathcal B$.
