---
id: def-polynomial-module-of-an-endomorphism
kind: definition
title: "The $F[x]$-module $V_T$ of an endomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-modules, def-polynomial-evaluation-at-an-endomorphism]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 5"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, Lecture 11"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ and let $T:V\to V$ be an
endomorphism. The **polynomial module of $T$**, denoted $V_T$, is the additive
group of $V$ with the $F[x]$-action

$$p\cdot v:=p(T)v$$

from [[def-polynomial-evaluation-at-an-endomorphism]]. This is a unital left
$F[x]$-module ([[def-left-and-right-modules]]): distributivity follows from
linearity, $1(T)=I_V$, and $(pq)(T)=p(T)q(T)$ by expanding the finite polynomial
sums. The subscript records the action; it does not change the underlying
vectors or addition.
