---
id: def-split-inert-ramified-and-unramified-prime
kind: definition
title: "Splitting and ramification terminology"
status: draft
origin: pipeline
deps: [def-prime-above-and-residue-degree, def-ramification-index, thm-fundamental-identity-for-primes-in-number-fields]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, §3.3"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Definition

A prime $\mathfrak p$ is **unramified** in $L$ if every $e(\mathfrak P/\mathfrak p)=1$, and **ramified** otherwise.  It **splits completely** if it is unramified and every residue degree is $1$; it is **inert** if there is one prime above it and its residue degree is $[L:K]$.
