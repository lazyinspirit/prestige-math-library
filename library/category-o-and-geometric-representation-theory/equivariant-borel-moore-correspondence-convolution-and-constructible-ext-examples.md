---
page: equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples
title: "Equivariant Borel–Moore Correspondence Convolution and Constructible Ext — Examples"
status: draft
requires: [equivariant-borel-moore-correspondence-convolution-and-constructible-ext]
items: []
examples: [ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift,
           ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition]
---

**Objective.** This companion page checks the degrees and the composition conventions of
[[equivariant-borel-moore-correspondence-convolution-and-constructible-ext]] on the point and the projective line, including a transverse middle-diagonal intersection. Both items are dependency leaves;
nothing outside this page depends on them. The only choice principle present is the one already
inherited by the cited constructible and cellular suppliers, and the computations themselves are
finite.

## Examples

The items are listed in the order in which they appear in the page inventory.

- [[ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift]]
  computes the two corners for $X_1=\mathrm{pt}$ and $X_2=\mathbb P^1$ with unequal dimensions
  $d_1=0$, $d_2=1$: using the Schubert CW structure of $\mathbb P^1$ with one cell in each of
  real dimensions $0$ and $2$ and the vanishing of the cellular differentials, it obtains
  $R\Gamma(\mathbb P^1,k)\simeq k\oplus k[-2]$ and
  $\operatorname{Ext}^r(L_1,L_2)=k$ for $r=-1,1$ only, with the same two nonzero degrees in the
  reverse corner, landing in Borel–Moore degrees $2$ and $0$ under the summed-dimension
  normalization $d_1+d_2-r$ of the Ext/Borel–Moore theorem; the single-source shifts
  $2\dim X_1-r$ and $2\dim X_2-r$ miss both degrees.
- [[ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition]]
  takes the unit $\alpha\in\operatorname{Ext}^{-1}(L_1,L_2)$ and the point evaluation
  $\beta\in\operatorname{Ext}^1(L_2,L_1)$, observes $\beta[-1]\circ\alpha=\operatorname{id}_k$,
  and applies the product theorem to get $\alpha*\beta=\operatorname{id}_k$ in the source-first
  convention and, geometrically, $[\mathbb P^1]*[\mathrm{pt}]=[\mathrm{pt}]$: the middle
  dimension drop $2$, the order of the factors and the absence of an extra shift sign are all
  checked, and the swapped corner is kept distinct from the identity of the point corner.
