---
id: thm-second-isomorphism-theorem-modules
kind: theorem
title: "Second isomorphism theorem for modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-first-isomorphism-theorem-modules, lem-submodule-criterion-sums-and-intersections, def-quotient-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

For submodules $L,N\le M$, there is a canonical isomorphism $$L/(L\cap N)\cong(L+N)/N.$$ See [[thm-first-isomorphism-theorem-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For every module homomorphism $f:M\to N$, there is a module isomorphism $$M/\ker f\ \cong\ \operatorname{im}f,$$ given by $m+\ker f\mapsto f(m)$. ([[thm-first-isomorphism-theorem-modules]]).

[L2] For submodules $A,B\le M$, the intersection $A\cap B$ and the sum $$A+B:=\{a+b:a\in A,\ b\in B\}$$ are submodules of $M$. ([[lem-submodule-criterion-sums-and-intersections]]).

[L3] For $N\le M$, the additive cosets $m+N$ form the quotient module $M/N$ under the well-defined scalar action $$r(m+N):=rm+N.$$ ([[def-quotient-module]]).

## Proof

**Proof technique:** direct.

1.1 For submodules $L,N\le M$, map $L\to(L+N)/N$. [L1, L2, L3, given, algebra]

2.1 Its kernel is $L\cap N$, and it is surjective by the definition of $L+N$; the first isomorphism theorem gives $L/(L\cap N)\cong(L+N)/N$. [step 1.1, given, algebra]

3.1 The coincident and zero cases are admitted and give equalities rather than exceptions. For $L=0$ both sides are $0$, since $0/(0\cap N)=0$ and $(0+N)/N=N/N=0$; for $N=0$ both sides are $L$; and for $L=N$ both sides are $0$. This proves the stated claim. [step 2.1, given, algebra] ∎
