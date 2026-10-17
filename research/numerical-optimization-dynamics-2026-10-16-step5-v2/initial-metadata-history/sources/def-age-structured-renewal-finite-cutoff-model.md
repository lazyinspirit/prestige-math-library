---
id: def-age-structured-renewal-finite-cutoff-model
kind: definition
title: Finite-age renewal model with absorbing outflow
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-age-structured-renewal-transport-problem
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, §2.3, PDF pp. 17–20: finite-age restriction, age outflow and renewal upwind formulation."
---

## Definition

Fix $0<T<A$, bounded nonnegative Lipschitz rates $\mu,\beta:[0,A]\to[0,\infty)$, and initial density $n_0^A\in L^1_+(0,A)$. The **finite-age renewal model with absorbing outflow** is the age transport problem on $0<a<A$ with the same renewal inflow $B_A(t)=\int_0^A\beta(a)n^A(t,a)\,da$ as in [[def-age-structured-renewal-transport-problem]]. A cohort follows age speed $1$, retains its mortality survival $S(a,s)$ until it reaches $A$, and is then removed; no cohort enters from ages above $A$. The initial density is $n_0^A$ on $[0,A]$. A mild solution is the characteristic formula on $0<a<A$, with an initial-cohort branch for $a\ge t$, a newborn branch for $a<t$, and zero extension to $a\ge A$. Since $A>T$, no cohort born during $[0,T]$ reaches the outflow boundary.
