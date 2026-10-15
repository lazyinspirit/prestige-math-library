---
id: lem-tdmath-compound-mass-well-defined
kind: lemma
title: Compound mass is well-defined and additive
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-tdmath-tagged-scalable-compound, def-finite-sum, lem-finite-sum-reindexing-and-fubini]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.A.1–II.A.2"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Statement

For every tagged scalable compound $c$, the mass in [[def-tdmath-tagged-scalable-compound]] is independent of the finite summation set used. For any compounds $c,d$ and $t>0$, $m(c+d)=m(c)+m(d)$ and $m(tc)=t m(c)$; $m(0)=0$.

## Facts & Assumptions

[F1] [[def-tdmath-tagged-scalable-compound]]: compounds are nonnegative finite-support functions, and mass is defined by a finite sum over support.

[F2] [[lem-finite-sum-reindexing-and-fubini]]: a finite sum is invariant under a bijective reindexing; adding zero terms on a larger finite set leaves it unchanged; finite sums distribute over pointwise addition and scalar multiplication.

## Proof

**Given:** [F1] and [F2].

1.1 Let $E$ be any finite subset of $X$ containing $\operatorname{supp}(c)$. On $E\setminus\operatorname{supp}(c)$ the function is zero, so the finite sum over $E$ equals the finite sum over $\operatorname{supp}(c)$ by [F2]. If $E$ and $E'$ both contain the support, compare each sum to the sum over the finite union $E\cup E'$; hence the value is independent of the chosen finite summation set. [F1, F2]

2.1 The support of $c+d$ is contained in the finite union of the supports of $c$ and $d$. Sum over that union; distributivity in [F2] gives $m(c+d)=m(c)+m(d)$, since zero terms outside each individual support contribute nothing by step 1.1. The support of $tc$ equals that of $c$ for $t>0$, and scalar linearity of the finite sum gives $m(tc)=t m(c)$. The empty sum is zero, so $m(0)=0$. [F1, F2, step 1.1] ∎

