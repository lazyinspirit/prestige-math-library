---
id: cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals
kind: corollary
title: "The complex numbers form an algebraic closure of $\\mathbb R$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-closure, thm-the-complex-numbers-are-algebraically-closed, cor-complex-numbers-are-a-quadratic-real-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Corollary 5.7(a)"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Statement

The field extension $\mathbb C/\mathbb R$ is an algebraic closure of $\mathbb R$.

## Facts & Assumptions

**Given:** The field extension $\mathbb C/\mathbb R$.

[L1] The field $\mathbb C$ is algebraically closed ([[thm-the-complex-numbers-are-algebraically-closed]]).

[L2] The complex field is a simple algebraic extension of $\mathbb R$ of degree $2$ ([[cor-complex-numbers-are-a-quadratic-real-extension]]).

[L3] An algebraic closure of a field is an algebraic extension whose top field is algebraically closed ([[def-algebraic-closure]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L1] gives the algebraically closed part of the definition in [L3]. [L1]

1.2 Fact [L2] gives the algebraic-extension part of the definition in [L3]. [L2]

2.1 Therefore [L3] makes $\mathbb C/\mathbb R$ an algebraic closure of $\mathbb R$. [L3, step 1.1, step 1.2] ∎
