---
id: lem-product-grid-bounds-for-section-integrals
kind: lemma
title: "A product grid bounds the Darboux sums of the lower and upper section-integral functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-sections-and-iterated-riemann-integrals, def-multidimensional-grid-partition, def-multidimensional-darboux-sums, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, §10.2, Exercises 10.2.2-10.2.3"
      url: "https://www.jirka.org/ra/realanal2.pdf"
    - title: "A. Leibman, Multidimensional Real Analysis, §5.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq\mathbb R^p$ and $B\subseteq\mathbb R^q$ be nondegenerate closed rectangles, let $f:A\times B\to\mathbb R$ be bounded, and let $P$ and $R$ be grids of $A$ and $B$. With $\ell_B,u_B:A\to\mathbb R$ the lower and upper $B$-section-integral functions of [[def-sections-and-iterated-riemann-integrals]],
$$L(f,P\times R)\le L(\ell_B,P)\le U(\ell_B,P)\le U(u_B,P)\le U(f,P\times R).$$
The symmetric chain holds after exchanging $A$ and $B$. No individual section is assumed integrable.

## Facts & Assumptions

**Given:** Rectangles $A,B$, a bounded $f:A\times B\to\mathbb R$, grids $P,R$, and the section envelopes $\ell_B,u_B$.

[L1] For a bounded function on a product rectangle, the lower and upper section integrals are defined for every parameter even when the section is not Riemann integrable ([[def-sections-and-iterated-riemann-integrals]]).

[L2] A grid cell of a product rectangle is the product of the corresponding cells of the two factor grids, and a sum over cells is the associated finite iterated sum ([[def-multidimensional-grid-partition]]).

[L3] Lower and upper Darboux sums are the finite sums of the cell infima and suprema weighted by cell volume ([[def-multidimensional-darboux-sums]]); finite sums may be regrouped and preserve inequalities term by term ([[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 For a cell $I$ of $P$ and a cell $J$ of $R$, put $m_{IJ}:=\inf_{I\times J}f$ and $M_{IJ}:=\sup_{I\times J}f$. Regrouping the finite sums over the product grid gives $L(f,P\times R)=\sum_I\operatorname{vol}(I)\sum_Jm_{IJ}\operatorname{vol}(J)$ and the analogous formula with $M_{IJ}$ for the upper sum. [L2, L3, given]

2.1 If $x\in I$, then $\inf_J f_x\ge m_{IJ}$ and $\sup_Jf_x\le M_{IJ}$ for every $J$. Hence $\ell_B(x)\ge\sum_Jm_{IJ}\operatorname{vol}(J)$ and $u_B(x)\le\sum_JM_{IJ}\operatorname{vol}(J)$. Taking the infimum or supremum over $x\in I$ preserves these inequalities. [L1, L3, step 1.1, algebra]

3.1 Multiply the cellwise inequalities by $\operatorname{vol}(I)$ and sum over $I$. Together with $\ell_B\le u_B$, this gives the displayed chain. Exchanging the coordinate blocks gives the symmetric chain. [L1, L3, step 2.1, algebra] ∎
