---
id: def-polynomial-family-wronskian-nondegeneracy
kind: definition
title: "Wronskian Nondegeneracy for Integer-Polynomial Families"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "T. D. Wooley, Nested Efficient Congruencing and Relatives of Vinogradov's Mean Value Theorem"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "Equation (1.1), printed p. 943, and Theorem 1.1"
verification:
  precheck: n/a
---

## Definition

Let $k\ge1$ and let $\boldsymbol\phi=(\phi_1,\ldots,\phi_k)$ be a $k$-tuple of polynomials in $\mathbb Z[t]$. Define the Wronskian polynomial, with derivative orders beginning at one, by

$$W(t;\boldsymbol\phi):=\det\bigl(\phi_j^{(i)}(t)\bigr)_{1\le i,j\le k}.$$

The family is **Wronskian-nondegenerate** when $W(t;\boldsymbol\phi)$ is not the zero polynomial in $\mathbb Z[t]$.

## Definition references

[Wooley, equation (1.1) and Theorem 1.1](https://arxiv.org/pdf/1708.01220v2)
