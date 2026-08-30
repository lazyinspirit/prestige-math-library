---
id: def-arithmetic-function
kind: definition
title: "Arithmetic functions on the positive integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-divisibility-poset-on-positive-integers, thm-complex-numbers-form-a-field]
justified_by: []
aliases: []
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Section 2.9"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "Kiran S. Kedlaya, An Introduction to Analytic Number Theory, Chapter 3"
      url: "https://kskedlaya.org/ant/chapter-3.html"
pipeline_run: null
---

## Definition

An **arithmetic function** is a function

$$f:\mathbb Z_{>0}\to\mathbb C,$$

where $\mathbb Z_{>0}$ is the positive part of the divisibility poset of
[[def-divisibility-poset-on-positive-integers]] and $\mathbb C$ is the field of
[[thm-complex-numbers-form-a-field]].

The domain is exactly the positive integers. In particular, no arithmetic
function value at $0$ is part of the present convention, and every later divisor
sum on this page ranges over positive divisors only.

## Remarks

- The codomain is fixed to $\mathbb C$ so that pointwise addition, products, and
  finite divisor sums all live in one ambient field.
