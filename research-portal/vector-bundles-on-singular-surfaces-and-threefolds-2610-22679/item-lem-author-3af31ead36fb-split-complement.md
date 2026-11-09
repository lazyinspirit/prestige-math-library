---
title: Projectivity and rank of a free-summand complement
status: published
research_item: lem-author-3af31ead36fb-split-complement
dependency_level: 1
---

PDF p. 1: Serre splitting theorem

## Prerequisites

- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

## Statement
Assume the Axiom of Choice. Let $P$ be a finite projective module of constant rank $r\geq1$ over a nonzero commutative ring $A$. If $P\cong A\oplus Q$, then $Q$ is finite projective of constant rank $r-1$, and the associated bundles satisfy $\widetilde P\cong\mathcal O_{\operatorname{Spec}A}\oplus\widetilde Q$. Constant rank means that every prime localization is free of the specified rank.

## Facts & Assumptions

**Given:** $A$, $P$, $Q$, $r$, the decomposition, and the Axiom of Choice as in the statement.

**Goal:** Establish finite projectivity, rank, and the associated bundle decomposition.

[F1] Under Choice, the affine bundle–module correspondence preserves direct sums and rank, and finite projective modules correspond to vector bundles. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

## Proof

1.1 The projection of a finite generating set of $P$ generates $Q$. A direct summand of a projective module is projective: to lift a map from $Q$ through a surjection, precompose it with the projection $P\to Q$, lift from $P$, and restrict to $Q$. Hence $Q$ is finite projective. [given, construct]

2.1 By [F1], $\widetilde P\cong\mathcal O_X\oplus\widetilde Q$, where $X=\operatorname{Spec}A$, and $\widetilde Q$ is a vector bundle. At any prime, taking residue-field fibers of this decomposition gives $r=1+\dim_{\kappa(\mathfrak p)}(Q\otimes_A\kappa(\mathfrak p))$. The rank correspondence in [F1] gives rank $r-1$ at every prime. [F1, given, step 1.1] ∎
