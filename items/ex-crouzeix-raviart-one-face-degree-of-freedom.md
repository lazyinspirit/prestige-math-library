---
id: ex-crouzeix-raviart-one-face-degree-of-freedom
kind: example
title: One shared face-average degree of freedom
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-crouzeix-raviart-global-space
  - lem-crouzeix-raviart-global-face-basis
  - lem-crouzeix-raviart-local-face-unisolvence
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36,
        Crouzeix–Raviart approximation
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap36.pdf
      locator: "§36.2.1–36.2.2, PDF pp. 2–4: local shape functions and shared face
        means."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations,
        Chapter 25, Non-conforming Finite Element Methods
      url: https://jschoeberl.github.io/iFEM/FEM/nonconforming.html
      locator: "§25.2, lines 276–290: one CR degree of freedom per face in two
        dimensions."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let $F$ be an interior facet of a finite matching mesh and let $\phi_F$ be
the global CR basis function indexed by $F$. It has face mean one on $F$ and
zero on every other facet. It is supported only on the two cells incident to
$F$.

## Facts & Assumptions

**Given:** A finite matching mesh, an interior facet $F$, and the local and global Crouzeix–Raviart bases of [[lem-crouzeix-raviart-local-face-unisolvence]] and [[lem-crouzeix-raviart-global-face-basis]].

[F1] On a cell $K$, the face dual polynomial is $\phi_{K,F}=1-d\lambda_F$ and its mean is one on $F$ and zero on all other cell facets. ([[lem-crouzeix-raviart-local-face-unisolvence]])

[F2] The global face basis function is this polynomial on cells incident to $F$ and zero elsewhere. ([[lem-crouzeix-raviart-global-face-basis]])

## Verification
1.1 On either cell incident to $F$, [F1] gives face mean one on $F$ and zero on that cell's other facets. [F1, given]

2.1 On every other cell the function is zero by [F2]. Thus the two traces have matching mean on $F$, and all other interior and boundary face means are zero. This is exactly the homogeneous CR condition, and the only nonzero global degree of freedom is the mean on $F$. [F1, F2, step 1.1, given, algebra] ∎