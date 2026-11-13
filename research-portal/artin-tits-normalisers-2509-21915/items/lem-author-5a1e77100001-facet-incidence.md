---
id: lem-author-5a1e77100001-facet-incidence
kind: lemma
title: Facet incidence and localized chamber signs
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-author-5a1e77100001-sign-facets
dependency_roles:
  def-author-5a1e77100001-sign-facets: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement

For the sign facets in *Sign facets of a cone arrangement*, write $F\preceq G$ when $F\subseteq\overline G$. This is a partial order, characterized by: every nonzero sign of $F$ equals the corresponding sign of $G$. Put $\mathcal A_F=\{H:F\subset H\}$. This is finite. If $C$ is a chamber, let $C_F$ be the chamber of $(I,\mathcal A_F)$ with the signs of $C$ on $\mathcal A_F$. For $F\preceq G$, one has $\mathcal A_G\subseteq\mathcal A_F$. If two chambers $C,D$ both satisfy $F\preceq C,D$ and $C_F=D_F$, then $C=D$.

## Statement references

[[def-author-5a1e77100001-sign-facets]]

## Facts & Assumptions

[F1] Facets are simultaneous sign fibers, are nonempty and convex, and local finiteness holds, as in [[def-author-5a1e77100001-sign-facets]].

## Proof
**Given:** the objects and hypotheses of the Statement.


Use the declared inputs [[def-author-5a1e77100001-sign-facets]] with the conventions in the Statement and Facts below.

**Proof technique:** direct.

**Goal:** prove every assertion in the Statement.

1.1 Choose $x\in F$ and $y\in G$. If $x$ lies in the closure of $G$, continuity forces every nonzero sign at $x$ to equal that on $G$. Conversely, under that sign condition, $(1-t)x+ty$ has precisely the signs of $G$ for every $0<t\leq1$. Convexity places it in $I$, so it belongs to $G$ and tends to $x$. This proves the characterization. [F1]

2.1 The sign criterion gives reflexivity and transitivity. Mutual incidence forces equality of every sign, hence equality of fibers, giving antisymmetry. Choose $x\in F$. All members of $\mathcal A_F$ pass through $x$, so local finiteness makes this set finite. If $F\preceq G$, a zero sign on $G$ cannot be a nonzero sign on $F$, proving the inclusion. [F1, step 1.1]

3.1 The sign fiber of $C$ for the finite arrangement $\mathcal A_F$ is nonempty because it contains $C$. It is a chamber by the chamber argument of [F1], establishing existence and uniqueness of $C_F$. If $F\preceq C,D$, signs of $C,D$ off $\mathcal A_F$ are prescribed by $F$. Equality $C_F=D_F$ prescribes equality also on $\mathcal A_F$. Thus all signs agree and $C=D$. [F1, step 1.1] ∎
