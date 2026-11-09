---
title: Equivalence of the weight-zero pullback projection
status: published
research_item: lem-author-dcdf962edbda-pullback-projection
dependency_level: 10
---

PDF p. 4: Weight zero

## Prerequisites

- [lem-author-dcdf962edbda-restriction](item-lem-author-dcdf962edbda-restriction)
- [thm-author-dcdf962edbda-source-input](item-thm-author-dcdf962edbda-source-input)

## Statement
The canonical source map $\rho_0:\mathbb Z(0)_{\mathrm{mot},F}\to\mathbb Z(0)_{\mathrm{cdh},F}$ is an equivalence on every qcqs $F$-scheme, and hence after restriction to qcqs $k$-schemes. This uses its actual pullback construction, rather than choosing equivalences from a comparison of groups.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] [thm-author-dcdf962edbda-source-input](item-thm-author-dcdf962edbda-source-input) imports the cartesian squares and right equivalences in EM Examples4.11 and4.26, with their actual maps.

## Proof
1.1 The exact source input [F1] gives the source cartesian square with left projection $\rho_0$ and an equivalence on the right vertical arrow. A base change of an equivalence is an equivalence: the pullback of $B\xrightarrow{\sim}D\leftarrow C$ maps equivalently to $C$, since replacing $B$ by $D$ identifies the pullback with $C$. Apply this in the stable derived category to that square. [F1, construct]

2.1 This gives precisely its left projection $\rho_0$, naturally in the source object. Restrict this actual map by [lem-author-dcdf962edbda-restriction](item-lem-author-dcdf962edbda-restriction). The same equivalence holds at each qcqs $k$-scheme. [F1, step 1.1] ∎
