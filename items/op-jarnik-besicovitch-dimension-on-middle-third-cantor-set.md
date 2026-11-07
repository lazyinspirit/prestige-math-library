---
id: op-jarnik-besicovitch-dimension-on-middle-third-cantor-set
kind: open-problem
title: "Jarník–Besicovitch dimension of well-approximable points on the middle-third Cantor set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-power-rate-well-approximable-set
  - def-conjectural-cantor-dimension-candidate
  - def-hausdorff-dimension
  - thm-cantor-set-hausdorff-dimension-and-exact-measure
sources:
  references:
    - title: "Beresnevich and Velani, The dimension of well approximable numbers, end of §4.2, printed p.14 (PDF p.15), before the §5 heading"
      url: "https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf"
      locator: "end of §4.2, printed p.14 (PDF p.15), before the §5 heading; middle-third Cantor intersection problem and candidate"
    - title: "He and Liao, Jarník-type theorem for self-similar sets, Theorem 1.4 and Remark 6"
      url: "https://arxiv.org/pdf/2602.01307"
      locator: "Theorem 1.4 and Remark 6; partial bounds and unresolved Bugeaud–Durand formula"
---

## Open problem

Let $K$ be the middle-third Cantor set and let $W(\tau)$ be the set of $x\in[0,1]$ such that $|x-a/q|\le q^{-(\tau+1)}$ for infinitely many positive integers $q$ and some $a\in\{0,1,\ldots,q\}$. For each $\tau\ge1$, determine $\dim_H(W(\tau)\cap K)$. In particular, is

$$\dim_H(W(\tau)\cap K)=\max\left\{\frac{2}{\tau+1}-(1-\dim_H K),\frac{\dim_H K}{\tau+1}\right\}?$$

## Open problem references

[Beresnevich and Velani, *The dimension of well approximable numbers*, end of §4.2, printed p.14 (PDF p.15), before the §5 heading](https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf)

[He and Liao, *Jarník-type theorem for self-similar sets*, Theorem 1.4 and Remark 6](https://arxiv.org/pdf/2602.01307)

## Status

As checked on 26 October 2026, the exact formula remains unresolved in the cited 2026 survey and in He–Liao's 2026 note. He–Liao prove partial upper and lower bounds and emphasize that their available bounds do not reach the parameter range needed to establish the proposed formula for the middle-third Cantor set. Their results do prove full dimension for the union of very-well-approximable sets, which does not settle the fixed-exponent intersection question above.

## Status references

[Beresnevich and Velani, *The dimension of well approximable numbers*, end of §4.2, printed p.14 (PDF p.15), before the §5 heading](https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf)

[He and Liao, *Jarník-type theorem for self-similar sets*, Theorem 1.4 and Remark 6](https://arxiv.org/pdf/2602.01307)
