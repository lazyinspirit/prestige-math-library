---
id: def-triple-massey-data
kind: definition
title: "Triple Massey data in a cohomological differential graded algebra"
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-differential-graded-algebra
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §3.3"
      url: "https://arxiv.org/pdf/math/9910179v2"
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §9.2.5"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
---

## Definition

Let $(A,d,\mu)$ be a cohomological differential graded algebra over a
commutative ring, with the degree-one differential and signed Leibniz rule of
[[def-differential-graded-algebra]]. For $j\in\mathbb Z$, define

$$H^j(A)=\ker(d:A^j\to A^{j+1})/\operatorname{im}(d:A^{j-1}\to A^j).$$

A **triple Massey datum** consists of homogeneous closed elements
$a\in A^p$, $b\in A^q$, and $c\in A^r$ such that $ab$ and $bc$ are boundaries,
together with elements

$$u\in A^{p+q-1},\qquad v\in A^{q+r-1},\qquad du=ab,\quad dv=bc.$$

The associated **triple Massey expression** is

$$\omega(a,b,c;u,v)=(-1)^{p+1}av+uc\in A^{p+q+r-1}.$$

This item defines the data and expression only. The next lemma proves that the
expression is closed, so its cohomology class is defined.
