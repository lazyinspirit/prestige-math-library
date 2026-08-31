---
id: def-stationary-iteration-from-a-matrix-splitting
kind: definition
title: "Stationary iteration from a matrix splitting $A=M-N$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-invertible-matrix-and-general-linear-group,
       def-matrix-product-and-identity-matrix]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Gilbert Strang, 18.086 Mathematical Methods for Engineers II, Section 6.2 Iterative Methods"
      url: "https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/4bea2ab7b0fa37cd96f2ce442efa769d_am62.pdf"
---

## Definition

Let $A\in M_n(\mathbb F)$ admit a **matrix splitting**

$$A=M-N,$$

where $M\in\operatorname{GL}_n(\mathbb F)$ is invertible in the sense of
[[def-invertible-matrix-and-general-linear-group]]. The associated
**stationary iteration** for the system $Ax=b$ is

$$x_{k+1}=M^{-1}Nx_k+M^{-1}b.$$

Its iteration matrix is

$$B:=M^{-1}N.$$

