---
id: def-generalized-cartan-matrix
kind: definition
title: "Generalized cartan matrix"
status: published
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — §1.2, p.10"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

A **generalized Cartan matrix** (GCM) is an integer matrix $A=(a_{ij})_{i,j\in I}$, where $I=\{1,\ldots,n\}$ and $n\ge1$, such that $a_{ii}=2$, $a_{ij}\le0$ for $i\ne j$, and $a_{ij}=0\iff a_{ji}=0$. It is **indecomposable** if there is no partition $I=J\sqcup K$ into nonempty sets with all entries between $J$ and $K$ zero.

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), §1.2, p.10.
