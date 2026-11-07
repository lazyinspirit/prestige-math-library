---
id: lem-khintchine-groshev-torus-event-measure-and-independence
kind: lemma
title: "Measure and independence of linear-form approximation events"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-khintchine-groshev-matrix-approximation-set
  - def-countable-choice
  - lem-full-rank-integer-torus-maps-preserve-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, Lemma 3"
      url: "https://arxiv.org/pdf/0811.0809v3"
---

## Statement

Assume the Axiom of Countable Choice. Equip $[0,1)^{n\times m}$ with normalized Lebesgue measure and let $\mathbb T=\mathbb R/\mathbb Z$ have normalized Lebesgue measure. For $t\in\mathbb R$, write $d_{\mathbb T}(t,0):=\min_{a\in\mathbb Z}|t-a|$. An axis-parallel box in $\mathbb T^s$ is a product of $s$ arcs, each represented by an interval in $[0,1)$; its measure is the product of the interval lengths. For each $q\in\mathbb Z^n\setminus\{0\}$, the preimage of every such box in $\mathbb T^m$ under $X\mapsto[qX]$ has the same measure as the box. If $q,q'\in\mathbb Z^n$ are linearly independent over $\mathbb R$, the analogous assertion holds for boxes in $\mathbb T^m\times\mathbb T^m$ under $X\mapsto([qX],[q'X])$. By finite disjointification these formulas hold for finite disjoint unions of axis-parallel boxes. In particular, for $0\le\delta,\eta\le1/2$, define

$$E_q(\delta):=\{X\in[0,1)^{n\times m}:\ \max_{1\le j\le m}d_{\mathbb T}((qX)_j,0)<\delta\}.$$

Then $|E_q(\delta)|=(2\delta)^m$, and $E_q(\delta)$ and $E_{q'}(\eta)$ are independent whenever $q,q'$ are linearly independent.

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, Lemma 3](https://arxiv.org/pdf/0811.0809v3)

## Facts & Assumptions

**Given:** Countable Choice, normalized Lebesgue measure on the matrix cube, and the rows and radii in the statement.

[A1] Countable Choice supplies the complete countably additive Lebesgue measures used on the finite-dimensional cubes and tori. ([[def-countable-choice]])

[F1] Every full-rank integer torus endomorphism preserves normalized Lebesgue measure. ([[lem-full-rank-integer-torus-maps-preserve-lebesgue-measure]])

[F2] Fubini's theorem applies to integrable functions on the finite product cubes used here. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F3] A product of intervals in a unit cube has measure equal to the product of its side lengths; the boundary faces have measure zero, so open and closed interval boxes have the same measure. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F4] Translations preserve Lebesgue measure. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

## Proof




1.1 Fix a column index $j$ and an arc $I\subseteq\mathbb T$. Choose $i$ with $q_i\ne0$. When the other $n-1$ coordinates are fixed, the preimage of $I$ under the $i$th-coordinate map is a translate of the preimage under $[z]\mapsto[q_i z]$. By [F1] and translation invariance [F4], this fiber has measure $|I|$. Fubini [F2] therefore gives $|\{x^{(j)}:[q\cdot x^{(j)}]\in I\}|=|I|$. [given, A1, F1, F2, F4, choose]

1.2 If $q,q'$ are linearly independent, two coordinates $i,k$ form a $2\times2$ minor $B=\begin{pmatrix}q_i&q_k\\q'_i&q'_k\end{pmatrix}$ with nonzero determinant. Fix a Borel rectangle $I\times J\subseteq\mathbb T^2$. For each column, after fixing all coordinates other than $i,k$, the pair of outputs is a translate on $\mathbb T^2$ of the image under the full-rank integer torus map $T_B$. By [F1] and translation invariance [F4], the preimage of the translated rectangle has measure $|I||J|$; Fubini [F2] integrates over the fixed coordinates. Thus each column's output pair has product normalized measure on rectangles. [given, A1, F1, F2, F4, choose]

2.1 The $m$ columns of $X$ have product Lebesgue measure. Applying step 1.1 in each column and Fubini shows that the joint output $[qX]$ has product normalized measure on $\mathbb T^m$. The interval $\{[t]\in\mathbb T:d_{\mathbb T}(t,0)<\delta\}$ has measure $2\delta$ by [F3], including $\delta=0$ and $\delta=1/2$ up to null boundary points. Hence $|E_q(\delta)|=(2\delta)^m$. [given, step 1.1, F2, F3]

3.1 The $m$ columns are independent under product Lebesgue measure. Thus the joint output has product normalized measure on products of rectangles in the $2m$ torus coordinates. Finite disjointification extends the same formula to finite unions of axis-parallel boxes. The constraints defining $E_q(\delta)$ and $E_{q'}(\eta)$ are products of intervals of measures $2\delta$ and $2\eta$, so their joint measure is $(2\delta)^m(2\eta)^m$, the product of the individual measures from step 2.1. This proves independence. [given, step 2.1, step 1.2, F2, F3] ∎
