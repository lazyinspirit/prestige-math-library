---
id: def-completely-integrable-hamiltonian-system
kind: definition
title: Completely integrable Hamiltonian system
status: published
origin: pipeline
deps: ["def-first-integral-and-poisson-commuting-functions"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Definition 18.10, p. 110
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Definition 6.20, pp. 74--75
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

On a $2n$-dimensional symplectic manifold, a Hamiltonian system is
**completely integrable** if it has smooth functions
$F_1=H,F_2,\ldots,F_n$ such that

1. $\{F_i,F_j\}=0$ for every $i,j$; and
2. $dF_1,\ldots,dF_n$ are linearly independent on a dense open subset.

The map $F=(F_1,\ldots,F_n):M\to\mathbb R^n$ is the **integral map**.
The set on which $dF$ has rank $n$ is its **regular locus**; it is open and,
by the preceding condition, dense.
Both involution and independence are essential. Results about regular fibres
apply only at regular values or specified regular components.
