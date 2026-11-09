---
title: External EM affine syntomic filtration and actual obstruction map
status: published
research_item: thm-author-c5b0693f4fc3-top-torsion-em-syntomic
dependency_level: 9
---

PDF p. 5: Proposition 2.6: torsion freeness

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)

## Statement
For every $\mathbb F_p$-algebra $A$ and $j\geq0$, the complex $\mathbb F_p(j)_{\rm syn}(A)$ has a finite filtration from zero to itself, with graded pieces, in order,
$$L^j[-j-1],L^{j-1}[-j],\ldots,L^0[-1],\quad L^0,L^1[-1],\ldots,L^j[-j],$$
where $L^a=L\Lambda^aL_{A/\mathbb F_p}$. The cotangent complex and its derived exterior powers are cohomologically nonpositive (compute by a simplicial polynomial resolution).
For any qcqs $\mathbb F_p$-scheme $X$ the canonical comparison fits in the actual natural fiber sequence
$$\mathbb Z(j)_{\rm mot}(X)/p\longrightarrow\mathbb F_p(j)_{\rm syn}(X)\longrightarrow R\Gamma_{\rm cdh}(X,\widetilde\nu_1(j))[-j-1].$$
Here $\widetilde\nu_1(j)(A)$ is the cokernel of the Artin–Schreier map on differential forms (EM Definition 4.29), and its cdh sheafification is meant. The second arrow is EM (4.7), not an arbitrary map selected from a group isomorphism.

## External input
Import EM Lemma 4.16 and Corollary 4.32 with their stated hypotheses. The finite filtration is proved there by the de Rham/Cartier filtration and left Kan extension; the fiber sequence is proved from the actual motivic pullback square. These are established inputs, not locally reconstructed foundations. In particular, the obstruction formula is the correct primary comparison used to interpret the positive-characteristic part of the next external input. No equivalence between derived syntomic cohomology and ordinary étale logarithmic forms on an arbitrary singular affine is asserted.
