---
title: Local ranks in the affine bundle correspondence
status: draft
research_item: lem-author-3af31ead36fb-local-rank
dependency_level: 1
---

PDF p. 1: Serre splitting theorem

## Prerequisites

- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

## Statement
Assume the Axiom of Choice. If $E$ is a rank-$r$ vector bundle on $X=\operatorname{Spec}A$ and $P=\Gamma(X,E)$, then $P$ is finite projective and $P_{\mathfrak p}$ is free of rank $r$ over $A_{\mathfrak p}$ for every prime $\mathfrak p$. A vector bundle is a finite locally free sheaf, and rank $r$ means that its local free rank is $r$ at every point.

## Facts & Assumptions

**Given:** A commutative unital ring $A$, a rank-$r$ vector bundle $E$ on $\operatorname{Spec}A$, and the Axiom of Choice.

**Goal:** Identify the projectivity and local ranks of $P=\Gamma(X,E)$.

[F1] The affine bundle–module equivalence preserves rank and identifies the stalk of the associated sheaf at $\mathfrak p$ with the localization of the module. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

## Proof

1.1 By the affine equivalence, $P$ is finite projective and its associated sheaf is isomorphic to $E$. [F1, given]

2.1 At each prime, the stalk of $E$ is free of rank $r$ over the local ring $A_{\mathfrak p}$ by the definition of rank. The stalk identification in [F1] therefore gives $P_{\mathfrak p}\cong A_{\mathfrak p}^r$. [F1, given, step 1.1] ∎
