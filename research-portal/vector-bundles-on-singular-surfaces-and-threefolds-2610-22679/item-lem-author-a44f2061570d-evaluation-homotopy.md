---
title: Evaluation preserves chain homotopies
status: draft
research_item: lem-author-a44f2061570d-evaluation-homotopy
dependency_level: 9
---

PDF p. 4: Derived Nisnevich and cdh sections

## Prerequisites

- [lem-author-a44f2061570d-evaluation-left-exact](item-lem-author-a44f2061570d-evaluation-left-exact)

## Statement
For an object $U$ of a small site, evaluation sends complexes of abelian sheaves and chain maps to complexes and chain maps of abelian groups, and sends chain-homotopic maps to chain-homotopic maps. In particular it sends a chain-homotopy equivalence to a chain-homotopy equivalence.

A cochain complex has maps $d^n:C^n\to C^{n+1}$ with $d^{n+1}d^n=0$. A chain homotopy from $f$ to $g$ consists of maps $h^n:C^n\to D^{n-1}$ satisfying $f-g=dh+hd$. A homotopy equivalence has a chain-map inverse up to such homotopies.

## Facts & Assumptions

**Given:** An object $U$ and complexes and maps as in the statement.

**Goal:** Prove preservation of complexes, homotopies and homotopy equivalences.

[F1] Evaluation is additive. [lem-author-a44f2061570d-evaluation-left-exact](item-lem-author-a44f2061570d-evaluation-left-exact)

## Proof

**Proof technique:** Evaluate the defining identities.

1.1 Evaluation preserves composition, identities, sums and zero maps. Thus it carries $d^2=0$ and the chain-map equations to the corresponding equations of abelian groups. [F1, given]

2.1 Evaluating $f-g=dh+hd$ gives the homotopy identity for $h(U)$. Evaluating the two inverse-up-to-homotopy identities for a homotopy equivalence gives the final assertion. [F1, step 1.1] ∎
