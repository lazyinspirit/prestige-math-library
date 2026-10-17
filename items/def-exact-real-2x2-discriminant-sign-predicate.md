---
id: def-exact-real-2x2-discriminant-sign-predicate
kind: definition
title: "Exact sign predicate for a real 2x2 characteristic discriminant"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "James Demmel, Math 221 Lecture 16: the implicit Q theorem"
      url: https://people.eecs.berkeley.edu/~demmel/ma221_Fall10/Lectures/Lecture_16.html
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Definition

For a real matrix $B=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, define its characteristic-polynomial discriminant by $\Delta(B)=(a+d)^2-4(ad-bc)$. Define $\operatorname{discSign}(B)$ to be $-1$, $0$, or $1$ according as the exact real number $\Delta(B)$ is negative, zero, or positive. This is an exact mathematical predicate on the stored real entries, not an operation in the operationwise floating-point model. A computed procedure may report a sign only when its control predicate establishes this exact value; otherwise it reports undecided.
