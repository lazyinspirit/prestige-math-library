---
id: cor-homotopy-relative-and-path-homotopy-are-equivalence-relations
kind: corollary
title: "Homotopy relative to a fixed subspace, and path homotopy relative to endpoints, are equivalence relations"
status: published
origin: session
deps: [def-homotopy-relative-and-path-homotopy, lem-homotopy-reflexive-and-symmetric, lem-homotopy-transitivity-by-reparametrisation, def-equivalence-relation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

For fixed spaces $X,Y$ and a fixed subspace $A\subseteq X$, the relation $\simeq_A$ is an equivalence relation on the set of continuous maps $X\to Y$ that have a prescribed restriction to $A$. In particular ordinary homotopy is an equivalence relation on the continuous maps $X\to Y$.

For fixed endpoints $y_0,y_1\in Y$, path homotopy relative to the endpoints is an equivalence relation on the set of paths from $y_0$ to $y_1$.

## Facts & Assumptions

**Given:** Spaces $X,Y$, a subspace $A\subseteq X$, and the relations defined in [[def-homotopy-relative-and-path-homotopy]].

[L1] Homotopy rel $A$ is reflexive and symmetric ([[lem-homotopy-reflexive-and-symmetric]]).

[L2] Homotopy rel $A$ is transitive by the two-piece reparametrisation construction ([[lem-homotopy-transitivity-by-reparametrisation]]).

[L3] A relation is an equivalence relation exactly when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\simeq_A$ is reflexive, symmetric and transitive, so it is an equivalence relation by [L3]. Taking $A=\varnothing$ gives ordinary homotopy. [L1, L2, L3]

2.1 Paths from $y_0$ to $y_1$ are continuous maps $I\to Y$ with one prescribed restriction to the subspace $\{0,1\}$, and their path homotopies are exactly homotopies rel $\{0,1\}$. Hence step 1.1 applies to them. [step 1.1, given] ∎
