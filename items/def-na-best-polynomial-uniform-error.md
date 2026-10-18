---
id: def-na-best-polynomial-uniform-error
kind: definition
title: "Best uniform polynomial error on a compact interval"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - def-complete-ordered-field
  - def-continuity-real
  - def-interval
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-algebra-of-continuous-functions
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Chapter 10"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/RAP_22/TRE13.pdf"
      locator: "Printed pp. 73–74, best approximation problem and existence setup."
    - title: "András Kroó and Allan Pinkus, Strong Uniqueness, §§4.2–4.4"
      url: "https://pages.cs.wisc.edu/~deboor/sat/papers/12/12.pdf"
      locator: "Printed pp. 18–22, finite-dimensional uniform approximation on a compact interval."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $I=[a,b]\subset\mathbb R$ with $a<b$, and let $C(I,\mathbb R)$ denote the
real-valued continuous functions on $I$. For $h\in C(I,\mathbb R)$ set
$\|h\|_{\infty,I}:=\sup_{x\in I}|h(x)|$. For $n\in\mathbb N_0$, let
$\mathcal P_n(I)$ be the restrictions to $I$ of real polynomials of degree at
most $n$, including the zero polynomial, and define
$$E_n(f;I):=\inf_{p\in\mathcal P_n(I)}\|f-p\|_{\infty,I}.$$
When $I=[-1,1]$, this agrees with the published definition
[[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]].

These quantities are finite and well-defined. The interval is compact by
[[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], so each
continuous difference $f-p$ has a finite maximum absolute value. The
polynomial space contains $0$, hence the set of errors is nonempty and bounded
below by $0$; completeness of $\mathbb R$
([[def-complete-ordered-field]]) supplies its infimum.
