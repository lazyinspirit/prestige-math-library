---
id: def-nat-addition
kind: definition
title: "Addition of natural numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, thm-recursion, cor-nat-addition-well-defined]
aliases: []
landmark: false
short: "$m+0=m,\\ m+\\sigma n=\\sigma(m+n)$"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.2 (Addition)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Definition

**Addition** $+ : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ is defined by
recursion on the second argument: for each fixed $m \in \mathbb{N}$,

$$m + 0 = m, \qquad m + \sigma(n) = \sigma(m + n).$$

## Remarks

This is a definition **by recursion**, and it requires justification: it does not
directly say what $m + n$ is, but pins down $m + 0$ and reduces $m + \sigma(n)$ to
$m + n$. The **recursion theorem** ([[thm-recursion]]) guarantees that for each
$m$ there is exactly one function $n \mapsto m + n$ obeying these two equations,
so $+$ is a well-defined total binary operation
([[cor-nat-addition-well-defined]]).

Taking $m = n = 0$ gives $0 + 0 = 0$. The equation $m + \sigma(n) = \sigma(m+n)$
with $n = 0$ gives $m + 1 = m + \sigma(0) = \sigma(m + 0) = \sigma(m)$, so
$\sigma(m) = m + 1$: the successor is "add one", recovering the familiar reading
of the Peano successor. The basic laws (commutativity, associativity,
cancellation, and the left identity $0 + n = n$) are not built in and must be
proved by induction ([[lem-nat-add-identity]], [[lem-nat-add-commutative]],
[[lem-nat-add-associative]], [[lem-nat-add-cancellative]]).
