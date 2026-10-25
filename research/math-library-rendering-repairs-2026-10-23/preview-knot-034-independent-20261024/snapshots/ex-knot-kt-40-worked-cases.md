---
id: ex-knot-kt-40-worked-cases
kind: example
title: "A birth followed by a merging saddle"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Mikhail Khovanov, A categorification of the Jones polynomial, §7"
      url: "https://arxiv.org/pdf/math/9908171v2"
      locator: "§7.1, local cobordism maps for births, deaths, and saddles"
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, §§7–8"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Printed pp.1470–1480; Frobenius TQFT and movie-level maps"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, §5"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
      locator: "PDF pp.18–22; the surface-cobordism interpretation of Frobenius maps"
---

## Example

Let $\mathcal A=\mathbb Z[X]/(X^2)$ be the Frobenius algebra with unit $\eta(1)=1$ and multiplication $m$. In the algebraic TQFT, consider the movie that first creates a disjoint circle and then attaches a saddle band merging that circle with one existing circle. The induced local map is
$$
\mathcal A\xrightarrow{\operatorname{id}_{\mathcal A}\otimes\eta} \mathcal A\otimes\mathcal A\xrightarrow{m}\mathcal A,
$$
and this composite is the identity on $\mathcal A$.

The diagram records the two successive surface events; it is only a description of the movie, while the verification below is algebraic.

```tikzcd
\mathcal A
\arrow[r, "{\operatorname{id}\otimes\eta}"]
& \mathcal A\otimes\mathcal A
\arrow[r, "m"]
& \mathcal A
```

## Example references

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|The integral Frobenius algebra and local cobordism maps]]

[Khovanov, *A categorification of the Jones polynomial*, §7](https://arxiv.org/pdf/math/9908171v2)

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, §§7–8](https://arxiv.org/pdf/math/0410495v2)

[Kauffman, *An Introduction to Khovanov Homology*, §5](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

## Facts & Assumptions

**Given:** The rank-two algebra $\mathcal A=\mathbb Z[X]/(X^2)$, its unit $\eta(1)=1$, and its merge map $m$.

[F1] [[def-khovanov-frobenius-algebra-and-cube-of-resolutions]] gives the basis $\{1,X\}$, the unit $1\mapsto1$, and multiplication $m(a\otimes1)=a$ for $a\in\mathcal A$.

## Proof

1.1 On the basis element $1$, $(\operatorname{id}\otimes\eta)(1)=1\otimes1$, so $m(\operatorname{id}\otimes\eta)(1)=m(1\otimes1)=1$. On the basis element $X$, $(\operatorname{id}\otimes\eta)(X)=X\otimes1$, so $m(\operatorname{id}\otimes\eta)(X)=m(X\otimes1)=X$. [F1, construct, algebra]

2.1 The two basis elements generate $\mathcal A$ as an abelian group, and both are fixed by the composite in step 1.1. By linearity the composite fixes every element of $\mathcal A$, hence equals $\operatorname{id}_{\mathcal A}$. [step 1.1, algebra] ∎
