---
id: def-fusion-rules
kind: definition
title: "Fusion rules"
status: published
origin: pipeline
deps: [def-fusion-and-multifusion-category, def-grothendieck-ring-of-a-tensor-category, thm-jordan-holder-theorem-in-an-abelian-category]
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
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Remark 4.5.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

For a multifusion category choose a finite supplied list $(S_i)_{i\in I}$ of
representatives of its simple isomorphism classes. The **fusion rules** are the
nonnegative integers $N_{ij}^k$ determined by

$$[S_i][S_j]=\sum_{k\in I}N_{ij}^k[S_k]$$

in $K_0(\mathcal C)$. Jordan--Hölder makes the multiplicities independent of a
chosen composition series.
