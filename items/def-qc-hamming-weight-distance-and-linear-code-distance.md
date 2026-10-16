---
id: def-qc-hamming-weight-distance-and-linear-code-distance
kind: definition
title: Hamming weight and distance of a finite-field linear code
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps: [def-qc-classical-linear-code-over-finite-field, thm-well-ordering-principle]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §§37.1–37.1.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §7.6
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Definition

For $x=(x_0,\ldots,x_{n-1})\in F^n$, its **Hamming weight** is $\operatorname{wt}(x):=|\{j<n:x_j\ne0\}|$. For $x,y\in F^n$, their **Hamming distance** is $d_H(x,y):=\operatorname{wt}(x-y)$. For a nonzero code $C\le F^n$, define its **minimum distance** by $d(C):=\min_{0\ne c\in C}\operatorname{wt}(c)$. This minimum exists because its nonempty set of values lies in $\{1,\ldots,n\}$ and the natural numbers are well ordered ([[thm-well-ordering-principle]]). For the zero code $C=\{0\}$, set $d(C):=n+1$ by convention; this sentinel exceeds every possible Hamming weight and makes the usual radius statements vacuously valid for distinct codewords.

The code parameters are written $[n,k,d]_q$, where $q=|F|$ and $d=d(C)$. This notation records a finite-field alphabet and does not imply that $F=\mathbb Z/q\mathbb Z$.

## Remarks

The identity $d_H(x,y)=\operatorname{wt}(x-y)$ is used over every characteristic; only in characteristic two does subtraction equal addition.
