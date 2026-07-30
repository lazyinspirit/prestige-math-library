---
id: lem-products-preserve-t0-t1-and-hausdorff
kind: lemma
title: "Arbitrary products preserve $T_0$, $T_1$, and Hausdorffness"
status: published
origin: session
deps: [def-product-topology, thm-product-universal-property, def-t0-and-t1-spaces, def-hausdorff-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
pipeline_run: null
---

## Statement

For any family $(X_i)_{i\in I}$, if every $X_i$ is $T_0$, respectively $T_1$, respectively Hausdorff, then $\prod_{i\in I}X_i$ is respectively $T_0$, $T_1$, respectively Hausdorff. The empty product is included.

## Facts & Assumptions

**Given:** A family of spaces with the indicated separation property and two distinct points $x,y$ of its product $P$.

[F1] Distinct product points differ at a coordinate, and $\pi_i^{-1}[U]$ is open whenever $U$ is open in $X_i$ ([[def-product-topology]], [[thm-product-universal-property]]).

[F2] The $T_0$, $T_1$, and Hausdorff conditions are respectively the stated one-sided, two-sided, and disjoint-open separations of distinct points ([[def-t0-and-t1-spaces]], [[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 If $I=\varnothing$, the product has one point and all three conditions hold vacuously. [F2]

1.2 Otherwise choose $i\in I$ with $x_i\ne y_i$. For a $T_0$ factor, the inverse image under $\pi_i$ of an open set distinguishing $x_i,y_i$ distinguishes $x,y$. [F1, F2]

1.3 For a $T_1$ factor, pull back the two open sets separating $x_i$ from $y_i$ and $y_i$ from $x_i$. [F1, F2]

1.4 For a Hausdorff factor, pull back disjoint open neighbourhoods of $x_i,y_i$; their inverse images remain disjoint. [F1, F2]

2.1 Thus the product has the relevant property in every case. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
