---
id: def-binary-quadratic-form-class-number
kind: definition
title: "The class number of primitive positive-definite binary quadratic forms of discriminant $\\Delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-primitive-binary-quadratic-form, def-positive-definite-binary-quadratic-form, def-discriminant-of-binary-quadratic-form, cor-finiteness-of-positive-definite-binary-form-classes]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Definition 9.4.3"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
pipeline_run: null
---

## Definition

Let $\Delta<0$ be an integer with $\Delta\equiv0$ or $1\pmod4$. The
**binary quadratic form class number** $h(\Delta)$ is the number of
proper-equivalence classes of primitive positive-definite integral binary
quadratic forms of discriminant $\Delta$.

This number is finite by
[[cor-finiteness-of-positive-definite-binary-form-classes]], since primitive
positive-definite forms of discriminant $\Delta$ are a subclass of all
positive-definite forms of discriminant $\Delta$.

## Remarks

- The adjective "form" matters: later pages may compare this quantity with
  class numbers defined through ideals in quadratic orders.
- The companion page computes $h(-4)$, $h(-8)$, $h(-20)$, and $h(-23)$ by
  enumerating reduced representatives.
