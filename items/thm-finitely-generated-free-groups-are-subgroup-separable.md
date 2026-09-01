---
id: thm-finitely-generated-free-groups-are-subgroup-separable
kind: theorem
title: "Every finitely generated free group is subgroup separable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subgroup-separable-and-lerf]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
    - title: "Rita Gitik and Eliyahu Rips, On separability properties of free groups"
      url: "https://arxiv.org/pdf/1906.07275"
---

## Statement

Every finitely generated free group is subgroup separable.

## Facts & Assumptions

**Given:** A finitely generated free group $F$, a finitely generated subgroup $H\le F$, and an element $g\in F\setminus H$.

[F1] Marshall Hall's theorem identifies finitely generated subgroups of finitely generated free groups as closed in the profinite topology; equivalently, they are subgroup separable.

## Proof

**Proof technique:** direct.

1.1 The present hypotheses are exactly the subgroup-separability conclusion of [F1]. Therefore there exists a finite-index subgroup of $F$ that contains $H$ but not $g$. Since $g\in F\setminus H$ was arbitrary, every finitely generated subgroup of $F$ is closed in the profinite topology. [F1, given]

2.1 This is precisely the definition of subgroup separability from [[def-subgroup-separable-and-lerf]]. Hence every finitely generated free group is subgroup separable. [step 1.1] ∎
