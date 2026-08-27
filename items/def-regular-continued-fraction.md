---
id: def-regular-continued-fraction
kind: definition
title: "Finite and infinite regular continued fractions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rationals, def-rat-operations, def-rat-order]
justified_by: []
aliases: []
landmark: false
verification:
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

A **finite regular continued fraction** is an expression
$$[a_0; a_1,\ldots,a_n]$$
with $a_0 \in \mathbb{Z}$ and $a_i \in \mathbb{Z}_{>0}$ for $i \ge 1$. Its value
is defined recursively in $\mathbb{Q}$ ([[def-rationals]], [[def-rat-operations]])
by
$$[a_n] := a_n,\qquad [a_0; a_1,\ldots,a_n] := a_0 + \frac{1}{[a_1;\ldots,a_n]} \quad(n \ge 1).$$

This recursion is well defined. Indeed, starting from the last digit and
working backwards, every tail $[a_i;\ldots,a_n]$ with $i\ge1$ is a positive
rational: the last tail is $a_n>0$, and $a_i+1/t>0$ whenever $a_i>0$ and
$t>0$. In particular every denominator occurring in the recursion is nonzero.

An **infinite regular continued fraction** is a digit sequence
$(a_n)_{n \ge 0}$ with $a_0 \in \mathbb{Z}$ and $a_n \in \mathbb{Z}_{>0}$ for
$n \ge 1$, written
$$[a_0; a_1,a_2,\ldots].$$
Its value is not assumed by the notation; existence and uniqueness of the value
are proved in [[thm-convergence-of-infinite-regular-continued-fractions]].
