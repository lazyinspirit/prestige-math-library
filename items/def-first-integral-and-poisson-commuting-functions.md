---
id: def-first-integral-and-poisson-commuting-functions
kind: definition
title: First integral and Poisson-commuting functions
status: draft
origin: pipeline
deps: ["def-poisson-bracket-on-a-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Theorem 18.9 and discussion, pp. 109--110
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

A smooth function $F$ is a **first integral** of a Hamiltonian $H$ if $F$ is
constant along every integral curve of $X_H$, on that curve's local maximal
domain. Functions $F_1,\ldots,F_k$ **Poisson commute** or are **in involution**
if $\{F_i,F_j\}=0$ for all $i,j$. The first definition does not presume that
the Hamiltonian flow is complete.
