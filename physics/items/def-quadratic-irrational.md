---
id: def-quadratic-irrational
kind: definition
title: "Quadratic irrationals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rationals, def-real-numbers]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory"
      url: "https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university"
    - title: "William Stein, Elementary Number Theory: Primes, Congruences, and Secrets"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Definition

A real number $\alpha$ ([[def-real-numbers]]) is a **quadratic irrational** if
it is irrational and satisfies a quadratic equation
$$A\alpha^2+B\alpha+C=0$$
with $A,B,C\in\mathbb{Q}$ ([[def-rationals]]) and $A\ne0$.
