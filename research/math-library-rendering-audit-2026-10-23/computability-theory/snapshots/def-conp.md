---
id: def-conp
kind: definition
title: "The class coNP"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-np-by-verifiers
verification:
  audited: 2026-09-02
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 17: Space Complexity, PSPACE, Savitch's Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/9b025394d997750b3cd765c7a074881f_MIT18_404f20_lec17.pdf"
---

## Definition

The class **coNP** is
$$ coNP:=\bigl\{L\subseteq\{0,1\}^* : \{0,1\}^*\setminus L\in NP\bigr\}. $$

## Remarks

- The complement is taken inside the same ambient language space $\{0,1\}^*$.

- Saying that $L\in coNP$ is therefore equivalent to saying that nonmembership
  in $L$ has polynomially checkable certificates.
