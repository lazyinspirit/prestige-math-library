---
id: def-qftx-donaldson-adhm-matrix-convention
kind: definition
title: Donaldson's ADHM matrix equations in the source convention
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§6, printed pp. 10–11, equations (8)–(9): the complex and real matrix equations and the map dimensions."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let $V=\mathbb C^k$ and $W=\mathbb C^N$ with their standard Hermitian inner products. Write $\alpha_1,\alpha_2\in\operatorname{End}_{\mathbb C}(V)$, $P:W\to V$, and $Q:V\to W$. The Donaldson source convention for these four matrices is

$$[\alpha_1,\alpha_2]+PQ=0,\qquad [\alpha_1,\alpha_1^\dagger]+[\alpha_2,\alpha_2^\dagger]-PP^\dagger+Q^\dagger Q=0.$$

The second equality is an equality of Hermitian endomorphisms of $V$. It is an algebraic convention from the displayed source equations; it does not by itself assert the full-rank condition on the source's ADHM linear map or an identification with the run's raw moment maps.

## Definition references

[Donaldson, §6, printed pp. 10–11](https://arxiv.org/pdf/2205.08639)
