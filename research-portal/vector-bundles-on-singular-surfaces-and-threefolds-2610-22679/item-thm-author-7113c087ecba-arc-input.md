---
title: Exact hypercomplete arc descent for finite constructible coefficients
status: draft
research_item: thm-author-7113c087ecba-arc-input
dependency_level: 0
---

PDF p. 6: Proposition 2.6 proof

## Prerequisites

None.

## Statement
For every finite commutative ring $\Lambda$, the functor $X\mapsto D^b_{\mathrm{cons}}(X_{\mathrm{et}},\Lambda)$ on all qcqs schemes, with derived pullback, is a hypercomplete arc sheaf. Here bounded constructible means a derived complex with bounded constructible cohomology sheaves. On the qcqs $F$-scheme cdh site, for a prime field $F$, an ordinary $D(\mathbb Z)$-valued cdh sheaf is precisely a presheaf which takes the empty scheme to $0$ and carries Nisnevich squares and the stated finitely presented abstract blowup squares to cartesian squares. Here ordinary means covering-family/Čech descent; this square criterion alone asserts no unrestricted hypercompletion comparison.

## Source qualification
The empty-scheme condition corrects an omission in the literal source criterion. A constant presheaf with nonzero value has cartesian values on every square but fails the empty covering. The categorical arc theorem and its finite-ring scope are unaffected.

## External input
Use the hypercomplete constructible-category theorem only for finite constant coefficients; it does not silently assert hypercomplete descent for arbitrary torsion coefficients merely from Theorem5.4. The latter is read only for context. No restriction to characteristic zero is needed for these finite-coefficient assertions.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the stated exact map or descent conclusion.

[F1] The exact external source records.

## Proof
1.1 Import BM Theorem5.13 with Notation5.8 and the full finite-ring hypotheses. [F1]

2.1 Its assertion is hypercomplete, which is stronger than the Čech descent formulation of Theorem5.4. Use the EM §3.3 square criterion on the stated prime-field site with the empty-scheme condition: the empty covering forces value zero, while square descent alone omits that condition. These are established source inputs; their foundational descent proofs are not locally reconstructed. [F1, step 1.1] ∎
