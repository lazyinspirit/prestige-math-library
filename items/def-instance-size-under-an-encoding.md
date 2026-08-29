---
id: def-instance-size-under-an-encoding
kind: definition
title: "Instance size and polynomially related encodings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-effective-binary-encoding-and-decoder
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation: Exploring the Power of Computing"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation.pdf"
    - title: "San Skulrattanakulchai, The Class P"
      url: "https://homepages.gac.edu/~sskulrat/Courses/2019S-265/lectures/P.html"
---

## Definition

Let $I$ be a set of instances and let $\sigma:I\to\{0,1\}^*$ be an effective
binary encoding. The **size** of an instance $x\in I$ with respect to $\sigma$
is the length of its codeword:
$$ |x|_\sigma:=|\sigma(x)|. $$

If $\sigma,\tau:I\to\{0,1\}^*$ are two effective encodings of the same instance
set, they are **polynomially related** when there exist polynomials
$p,q:\mathbb N\to\mathbb N$ such that for every $x\in I$,
$$ |\sigma(x)|\le p(|\tau(x)|)\qquad\text{and}\qquad |\tau(x)|\le q(|\sigma(x)|). $$

## Remarks

- Resource bounds are measured as functions of encoded input length, not of an
  abstract instance before encoding.

- Polynomially related encodings may differ substantially, but neither can blow
  up the other's lengths by more than a polynomial factor.
