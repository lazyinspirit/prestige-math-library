---
id: def-complete-ordered-real-field
kind: definition
title: Dedekind-complete ordered real field
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Steven G. Krantz, Foundations of Analysis, §1.1, Theorems 1.7 and 1.10"
      url: "https://api.pageplace.de/preview/DT0400.9781482220759_A37871115/preview-9781482220759_A37871115.pdf"
---

## Definition

A **Dedekind-complete ordered field** is a commutative field $\mathbb R$ with
identity $1>0$, a total order compatible with addition and multiplication, and
the least-upper-bound axiom: every nonempty subset of $\mathbb R$ that is
bounded above has a least upper bound in $\mathbb R$. Throughout this batch,
all real variables, intervals, limits, derivatives and integrals are taken in
such a field. The integers and rationals are interpreted in their usual
embedded copies. For $x\in\mathbb R$, define $|x|=x$ when $x\ge0$ and
$|x|=-x$ when $x<0$.
