---
id: def-quotient-vector-space-coset-notation
kind: definition
title: "The quotient vector space \\(X/M\\), its cosets, and the quotient map \\(q:X\\to X/M\\)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quotient-vector-space-and-canonical-projection,
       prop-quotient-vector-space-operations-and-projection]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-28
---

## Definition

Let $X$ be a normed space and let $M \le X$ be a linear subspace. The
underlying quotient vector space is the one already defined in
[[def-quotient-vector-space-and-canonical-projection]], with cosets written

$$x+M := \{x+m : m \in M\}.$$

On this page the canonical projection is written

$$q:X\to X/M,\qquad q(x):=x+M.$$

By [[prop-quotient-vector-space-operations-and-projection]], $q$ is a
surjective linear map and $\ker q = M$.

## Remarks

- The quotient is algebraic at this stage; its norm is introduced next.
- Different representatives of the same coset differ by an element of $M$.
