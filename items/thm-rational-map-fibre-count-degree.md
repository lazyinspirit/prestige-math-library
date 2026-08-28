---
id: thm-rational-map-fibre-count-degree
kind: theorem
title: "A nonconstant rational map has total fibre multiplicity equal to its degree"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-degree-rational-map-riemann-sphere, cor-argument-principle-counts-preimages, def-order-of-zero-holomorphic-function, thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §§2.2-3.5"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 1 §§1.3-1.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §§1-2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: frontier-22
---

## Statement

Let $R:\widehat{\mathbb C}\to\widehat{\mathbb C}$ be a nonconstant rational map of
degree $d$. Then for every value $w\in\widehat{\mathbb C}$ the total
multiplicity of the fibre $R^{-1}(w)$ is exactly $d$.

## Facts & Assumptions

**Given:** A nonconstant rational map $R=P/Q$ with coprime polynomials and degree $d=\max(\deg P,\deg Q)$.

[L1] A complex polynomial of degree $n\ge1$ has exactly $n$ roots counted with multiplicity ([[thm-complex-polynomial-has-exactly-degree-many-roots-counted-with-multiplicity]]).

## Proof

**Proof technique:** direct.

1.1 For a finite value $w$, the finite preimages of $w$ are exactly the roots of $P-wQ$. If $\deg(P-wQ)=d$, then [L1] gives exactly $d$ such roots. If $\deg(P-wQ)=m<d$, then $\infty$ is also a preimage and its multiplicity is exactly $d-m$ in the infinity chart, so the total multiplicity is still $d$. [L1, given, algebra]

1.2 For $w=\infty$, the finite preimages are the roots of $Q$ with multiplicity. If $\deg P\le\deg Q=d$, then [L1] gives all $d$ preimages in the finite chart; if $\deg P>\deg Q$, then $\infty$ contributes the remaining multiplicity $\deg P-\deg Q$. So the total multiplicity is again $d$. [L1, given, algebra]

2.1 Every sphere value is either finite or $\infty$, and both cases give total fibre multiplicity $d$. [given] ∎
