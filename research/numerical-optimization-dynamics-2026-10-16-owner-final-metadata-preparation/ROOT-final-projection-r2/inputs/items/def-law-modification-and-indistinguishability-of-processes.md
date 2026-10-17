---
id: def-law-modification-and-indistinguishability-of-processes
kind: definition
title: "Process law, modification, and indistinguishability"
status: published
origin: pipeline
deps: [def-stochastic-process-and-finite-dimensional-distributions, def-law-or-distribution-of-a-random-element, def-product-sigma-algebra-and-finite-product-sigma-algebras]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Section 2.3"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Definition

Two processes with the same index set and corresponding target spaces have the
same **process law** if all corresponding finite-dimensional laws agree; their
source probability spaces need not be the same. Suppose in addition that
$X=(X_t)_{t\in I}$ and $Y=(Y_t)_{t\in I}$ are defined on one common
probability space $(\Omega,\mathcal F,\mathbb P)$, take values in the same
measurable space at each $t$, and $\{X_t=Y_t\}$ is measurable for each $t$.
Then $Y$ is a **modification** (or version) of $X$ when
$\mathbb P(X_t=Y_t)=1$ for every fixed $t$. They are **indistinguishable**
when the event
$\{\omega:X_t(\omega)=Y_t(\omega)\text{ for every }t\in I\}$ is measurable
and has probability one. The latter has one exceptional null event; the former
may have a different null event at every time.
