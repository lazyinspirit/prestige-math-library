---
id: lem-author-e61520261113-invariant-facet-points
kind: lemma
title: Invariant choices of facet points for finite linear symmetry groups
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-author-5a1e77100001-sign-facets
  - lem-author-5a1e77100001-facet-incidence
  - lem-author-5a1e77100001-linear-action
dependency_roles:
  def-author-5a1e77100001-sign-facets: mathematical-premise
  lem-author-5a1e77100001-facet-incidence: mathematical-premise
  lem-author-5a1e77100001-linear-action: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
formulation_deps:
  - def-author-5a1e77100001-sign-facets
  - lem-author-5a1e77100001-facet-incidence
  - lem-author-5a1e77100001-linear-action
argument_deps:
  - def-author-5a1e77100001-sign-facets
  - lem-author-5a1e77100001-facet-incidence
  - lem-author-5a1e77100001-linear-action
---

## Statement

Let $\mathcal A$ be a finite arrangement of proper linear hyperplanes in a finite-dimensional real vector space $E$, and let a finite group $G$ act linearly, permuting $\mathcal A$. Set $I=E$ in the facet and induced-action conventions of *Sign facets of a cone arrangement*, *Facet incidence and localized chamber signs* and *Linear symmetries act on the Salvetti model*. There are choices $x(F)\in F$ for every facet satisfying $x(gF)=gx(F)$ for all $g\in G$.

## Statement references

[[def-author-5a1e77100001-sign-facets]]

[[lem-author-5a1e77100001-facet-incidence]]

[[lem-author-5a1e77100001-linear-action]]

## Facts & Assumptions

**Given:** The finite arrangement and group in the Statement, with $I=E$. **Goal:** Make equivariant facet choices.

[F1] With $I=E$, the finite arrangement is locally finite in a nonempty open convex cone. Facets are nonempty relatively open convex sign cones with the conventions of [[def-author-5a1e77100001-sign-facets]] and [[lem-author-5a1e77100001-facet-incidence]].

[F2] Every $g\in G$ preserves $I=E$ and permutes $\mathcal A$, so [[lem-author-5a1e77100001-linear-action]] applies and gives an action on the facets and their incidence.

## Proof

**Proof technique:** direct.

1.1 There are finitely many facets, since each is specified by a sign in $\{-,0,+\}$ for each member of the finite arrangement. For one facet $F$ in each $G$-orbit choose $v_F\in F$, and let $G_F=\{g:gF=F\}$. Put $x(F)=|G_F|^{-1}\sum_{h\in G_F}hv_F$. Every summand lies in the convex set $F$, so $x(F)\in F$. Reindexing the finite sum shows that $G_F$ fixes $x(F)$. [F1, F2, given]

2.1 Set $x(gF)=gx(F)$ on that orbit. If $gF=g'F$, then $g^{-1}g'\in G_F$, so the assigned points coincide. This proves well-definedness and equivariance. The construction also covers the facet containing the origin and the empty arrangement; only finite choices were used. [step 1.1] ∎
