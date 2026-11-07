---
id: def-conjectural-cantor-dimension-candidate
kind: definition
title: "Conjectural Jarník–Besicovitch dimension candidate on the middle-third Cantor set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-hausdorff-dimension
  - thm-cantor-set-hausdorff-dimension-and-exact-measure
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, The dimension of well approximable numbers, end of §4.2, printed p.14 (PDF p.15), before the §5 heading"
      url: "https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf"
    - title: "He and Liao, Jarník-type theorem for self-similar sets, Theorem 1.4 and Remark 6"
      url: "https://arxiv.org/pdf/2602.01307"
---

## Definition

Let $K$ be the middle-third Cantor set and let $d_K:=\log 2/\log 3=\dim_H K$. For $\tau\ge1$, define the conjectural value

$$D_K(\tau):=\max\left\{\frac{2}{\tau+1}-(1-d_K),\frac{d_K}{\tau+1}\right\}.$$

This definition records a proposed value only; it does not assert that $\dim_H(W(\tau)\cap K)=D_K(\tau)$.

## Definition references

[Beresnevich and Velani, *The dimension of well approximable numbers*, end of §4.2, printed p.14 (PDF p.15), before the §5 heading](https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf)

[He and Liao, *Jarník-type theorem for self-similar sets*, Theorem 1.4 and Remark 6](https://arxiv.org/pdf/2602.01307)
