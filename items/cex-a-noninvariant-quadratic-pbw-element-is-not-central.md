---
id: cex-a-noninvariant-quadratic-pbw-element-is-not-central
kind: counterexample
title: "A noninvariant quadratic PBW element need not be central"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [prop-the-quadratic-casimir-element-is-central]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Lectures on Infinite Dimensional Lie Algebras"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf"
pipeline_run: null
---

## Statement refuted

A quadratic PBW monomial need not be central. In $U(\mathfrak{sl}_2)$, the element $e^2$ is quadratic but not central.

## Facts & Assumptions

**Given:** The universal enveloping algebra of $\mathfrak{sl}_2$ with standard generators $e,f,h$.

## Counterexample

**Proof technique:** direct.

1.1 Using the relations $[f,e]=-h$ and $he-eh=2e$, one computes $[f,e^2]=[f,e]e+e[f,e]=-he-eh$. [given, algebra]

2.1 The element $-he-eh$ is nonzero in the PBW basis, so step 1.1 shows that $e^2$ does not commute with $f$. Hence $e^2$ is not central. [step 1.1] ∎
