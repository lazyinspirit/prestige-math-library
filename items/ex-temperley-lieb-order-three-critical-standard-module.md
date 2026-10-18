---
id: ex-temperley-lieb-order-three-critical-standard-module
kind: example
title: "A critical five-defect standard module at order three is simple"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-temperley-lieb-complex-critical-labels-and-reflection
  - lem-temperley-lieb-critical-standard-modules-are-simple
  - def-temperley-lieb-link-state-standard-modules
  - lem-temperley-lieb-link-state-gram-determinant
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4, Theorem 4.7 and Corollary 4.8, PDF pp. 20–21: the determinant and critical standard modules."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, Proposition 2.9 and Theorem 2.13, printed pp. 12–13: nondegenerate cell forms give simple modules; the critical determinant is evaluated locally."
---

## Example

Let $q=e^{\pi i/3}$, so $\delta=1$ and $\kappa=3$. At rank $n=7$, take $p=1$ arc and $t=5$ defects. The critical standard module is simple, and its Gram determinant is $1$.

## Facts & Assumptions

**Given:** $q=e^{\pi i/3}$, $n=7$, $p=1$, $t=5$, and $\kappa=3$.

[F1] The critical-label test is $\kappa\mid(t+1)$ ([[def-temperley-lieb-complex-critical-labels-and-reflection]]).

[F2] At every critical label the complex link-state capping form is nondegenerate and its standard module is simple ([[lem-temperley-lieb-critical-standard-modules-are-simple]]).

[F3] For $p=1$, the Gram determinant is $[t+2]_q/[1]_q$ ([[lem-temperley-lieb-link-state-gram-determinant]]).

## Verification

**Given:** $\delta=1$, $\kappa=3$, and the rank-seven label $(n,p)=(7,1)$.

1.1 The defect number is $t=7-2=5$, so $t+1=6$ is divisible by $\kappa=3$. Hence $(7,1)$ is critical by [F1]. [F1, given, algebra]

2.1 Since $p=1$, [F3] gives $\det G_{7,1}=[7]_q/[1]_q$. Here $[1]_q=1$ and $[7]_q=\frac{\sin(7\pi/3)}{\sin(\pi/3)}=1,$ so $\det G_{7,1}=1\ne0$. By [F2], this nondegenerate critical standard module is simple. [F2, F3, given, step 1.1, algebra] ∎
