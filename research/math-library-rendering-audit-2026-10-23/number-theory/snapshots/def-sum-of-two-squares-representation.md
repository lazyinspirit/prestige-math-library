---
id: def-sum-of-two-squares-representation
kind: definition
title: "Representations and primitive representations as sums of two squares"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-common-divisor-and-gcd]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, Chapter E"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory: Primes, Congruences, and Secrets, §5.7"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Definition

A representation of a nonnegative integer $n$ as a sum of two squares is an ordered pair $(x,y)\in\mathbb Z^2$ such that $n=x^2+y^2$.

It is **primitive** when $\gcd(x,y)=1$ ([[def-common-divisor-and-gcd]]). Two representations are **equivalent up to signs and order** when one is obtained from the other by independently changing coordinate signs and possibly interchanging the coordinates, and **essentially different** when they are not so equivalent.

For a positive odd integer, a representation $(x,y)$ is **normalized** when $x$ and $y$ are positive, $x$ is odd, and $y$ is even.

## Remarks

The ordered-pair convention retains signs and order when a correspondence is being counted. Equivalence up to signs and order is invoked only when those symmetries are deliberately discarded.

