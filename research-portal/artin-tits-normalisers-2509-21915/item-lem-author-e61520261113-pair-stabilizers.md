---
title: Free complement actions have trivial incident-pair stabilizers
status: published
research_item: lem-author-e61520261113-pair-stabilizers
dependency_level: 9
---

## Prerequisites

- [lem-author-e61520261113-natural-salvetti-cover](item-lem-author-e61520261113-natural-salvetti-cover)
- [lem-author-5a1e77100001-facet-incidence](item-lem-author-5a1e77100001-facet-incidence)
- [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action)


## Statement

Under the arrangement, cover and incident-pair conventions of [lem-author-e61520261113-natural-salvetti-cover](item-lem-author-e61520261113-natural-salvetti-cover) and [lem-author-5a1e77100001-facet-incidence](item-lem-author-5a1e77100001-facet-incidence), assume the diagonal action of the finite group $G$ on $M$ is free. Then no nonidentity element of $G$ fixes an incident pair $(F,C)$.

## Facts & Assumptions

**Given:** The finite linear action, localized sign cones and complement from [lem-author-e61520261113-natural-salvetti-cover](item-lem-author-e61520261113-natural-salvetti-cover) and [lem-author-5a1e77100001-facet-incidence](item-lem-author-5a1e77100001-facet-incidence), with free diagonal action on $M$. **Goal:** Prove incident-pair stabilizers trivial.

[F1] A free action satisfies $g\cdot x=x\Longrightarrow g=1$ for every $x\in M$ and $g\in G$, by [math:def-free-group-action](https://alphabetamath.cc/item/def-free-group-action).

## Proof

**Proof technique:** direct.

1.1 Suppose $gF=F$ and $gC=C$. Then $gC_F=C_F$. Let $m$ be the order of $g$, take $u\in F$ and $v\in C_F$, and put $\bar u=m^{-1}\sum_{i=0}^{m-1}g^iu$ and $\bar v=m^{-1}\sum_{i=0}^{m-1}g^iv$. Convexity of the sign cones gives $\bar u\in F$ and $\bar v\in C_F$, and both averages are fixed by $g$. [given]

2.1 If $H\in\mathcal A_F$, then $\bar v\notin H$. If $H\notin\mathcal A_F$, the sign of $H$ on $F$ is nonzero, so $\bar u\notin H$. Thus $(\bar u,\bar v)\in M$ is fixed by $g$. Freeness on $M$ forces $g=1$. This proves the assertion without assuming that $G$ is itself a reflection group. [step 1.1, given, F1] ∎
