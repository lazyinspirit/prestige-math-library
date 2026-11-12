---
title: Eilenberg–Mac Lane spectrum of a chain complex
status: published
research_item: thm-author-80e2d7bee57f-eilenberg-maclane-input
dependency_level: 1
sources:
  references:
    - title: Stable model categories are categories of modules
      url: https://homepages.math.uic.edu/~bshipley/classTopFinal.pdf
      locator: Appendix B.1, Definition B.1.1 and its underlying-spectrum paragraph
        (printed p. 35); construction preceding (B.1.9), (B.1.9), Remark B.1.10
        (printed pp. 38–39); Theorem B.1.11 and opening proof (printed p. 40)
      statement: For an unbounded chain complex D of abelian groups, the Eilenberg–Mac
        Lane construction gives an underlying Omega spectrum whose stable
        homotopy groups are naturally H_n(D).
      hypotheses: Take the one-object ringoid with endomorphism ring Z; D is an
        unbounded chain complex of Z-modules.
      reading_limits: Independently inspected Definition B.1.1 and its
        underlying-spectrum paragraph, the construction of W and HD, equation
        (B.1.9), Remark B.1.10, and the statement and opening proof of Theorem
        B.1.11. The full Quillen-equivalence proof, Alexander–Whitney
        foundations and other model comparisons were not reconstructed.
external_input: true
---

PDF p. 4: Shift [2j] in equation (2.1)

## Prerequisites

- [math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)
- [math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)
- [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)
- [math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence)
- [` Stable model categories are categories of modules · Appendix B.1, Definition B.1.1 and its underlying-spectrum paragraph (printed p. 35); construction preceding (B.1.9), (B.1.9), Remark B.1.10 (printed pp. 38–39); Theorem B.1.11 and opening proof (printed p. 40) `](https://homepages.math.uic.edu/~bshipley/classTopFinal.pdf)


## Statement
For every unbounded chain complex $D$ of abelian groups, the cited Eilenberg–Mac Lane construction gives a functorial pointed simplicial Omega spectrum $HD$ and natural isomorphisms from its stable homotopy groups to $H_n(D)$ for all integers $n$. An Omega spectrum is a sequential spectrum whose adjoint structure maps are weak equivalences.

## Statement references

[math:def-chain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-chain-complex-in-an-abelian-category)

[math:def-homology-object-of-a-chain-complex](https://alphabetamath.cc/item/def-homology-object-of-a-chain-complex)

[lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance)

[math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence)

## External input
Pointed simplicial sequential spectra and their stable groups use the explicit realization convention of [lem-author-e0b0bf18ed2b-spectra-tail-invariance](item-lem-author-e0b0bf18ed2b-spectra-tail-invariance): the circle is $K=\Delta^1/\partial\Delta^1$, structure maps are $s_r:K\wedge X_r\to X_{r+1}$, and $\pi_n(X)=G_n(X)=\operatorname{colim}_{r\gg0}\pi_{r+n}(|X_r|)$ with the specified suspension bonding maps. The source's right-hand circle coordinate is put first by the switch $K\wedge X_r\to X_r\wedge K$. Here $\Omega Z=\operatorname{Map}_*(K,Z)$ is the pointed simplicial set whose $m$-simplices are pointed simplicial maps $K\wedge\Delta[m]_+\to Z$, where $+$ adjoins a disjoint basepoint; simplicial operators act by precomposition and the basepoint is the constant map. The adjoint of $s_r$ sends $x$ to the map $k\mapsto s_r(k,x)$. A simplicial weak equivalence means a map whose geometric realization is a weak homotopy equivalence in [math:def-weak-homotopy-equivalence](https://alphabetamath.cc/item/def-weak-homotopy-equivalence).

This is the one-object $\mathbb Z$ case of the cited construction and equation (B.1.9). The result and its construction are imported from the cited literature; no local reconstruction is claimed. The source defines the levels using the functor $W$ and explicitly states that the underlying spectra are Omega spectra. The model is a naive module spectrum, not the symmetric Eilenberg–Mac Lane functor distinguished in the source's Remark B.1.10.
