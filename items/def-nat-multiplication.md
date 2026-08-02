---
id: def-nat-multiplication
kind: definition
title: "Multiplication of natural numbers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition, thm-recursion, cor-nat-multiplication-well-defined]
aliases: []
landmark: false
short: "$m\\cdot 0=0,\\ m\\cdot\\sigma n=m\\cdot n+m$"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.3 (Multiplication)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Mathematics 144: Set Theory (UC Riverside lecture notes)"
      url: "https://math.ucr.edu/~res/math153-2019/set-theory-notes.pdf"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
pipeline_run: null
---

## Definition

**Multiplication** $\cdot : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ is
defined by recursion on the second argument, using addition
([[def-nat-addition]]): for each fixed $m \in \mathbb{N}$,

$$m \cdot 0 = 0, \qquad m \cdot \sigma(n) = m \cdot n + m.$$

We write $mn$ for $m \cdot n$ when no confusion arises.

## Remarks

As with addition, this is a recursion and is legitimate by the recursion theorem
([[thm-recursion]]): for each $m$ the map $n \mapsto m \cdot n$ is the unique
function with $m \cdot 0 = 0$ and $m \cdot \sigma(n) = m \cdot n + m$, so $\cdot$
is a well-defined total operation ([[cor-nat-multiplication-well-defined]]).

The base clause $m \cdot 0 = 0$ builds in absorption on the right; that $0 \cdot n = 0$
on the left, and $1 \cdot n = n = n \cdot 1$, are proved by induction
([[lem-nat-mult-identity]]). Multiplication distributes over addition
([[lem-nat-mult-distributive]]) and is associative and commutative
([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]); with
[[lem-nat-no-zero-divisors]] and [[lem-nat-mult-cancellative]] this makes
$(\mathbb{N}, +, \cdot)$ a commutative semiring in which cancellation holds.
