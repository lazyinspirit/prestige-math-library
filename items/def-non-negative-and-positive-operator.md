---
id: def-non-negative-and-positive-operator
kind: definition
title: "Non-negative and positive operators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-self-adjoint-and-normal-endomorphism]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Definition

Let $V$ be a finite-dimensional real or complex inner product space and let
$T:V\to V$ be linear. The operator $T$ is **non-negative** when $T$ is
self-adjoint in the sense of [[def-self-adjoint-and-normal-endomorphism]] and

$$\langle Tv,v\rangle\ge 0$$

for every $v\in V$.

The operator $T$ is **positive** when $T$ is self-adjoint and

$$\langle Tv,v\rangle>0$$

for every nonzero $v\in V$.
