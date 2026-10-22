---
id: lem-bifiltered-laurent-tensor-hat-specialization
kind: lemma
title: "Hat specialization commutes with a bifiltered Laurent tensor product"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-additive-for-filtered-tensor-products
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only finite-dimensional linear algebra is used; no choice axiom is required."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Knot Floer homology and the four-ball genus"
      url: "https://arxiv.org/pdf/math/0301149v4"
---

## Statement

Let $R=\mathbb F_2[U,U^{-1}]$, and let $C,D$ be finite free $R$-chain complexes with specified homogeneous bases. Give basis vectors $x\in C$ and $y\in D$ filtration coordinates $(0,A_x)$ and $(0,A_y)$, and give $U^nx$ coordinates $(-n,A_x-n)$, with the same rule for $D$. Suppose each differential preserves both increasing coordinate filtrations. Let $C^-$ be the $\mathbb F_2[U]$-span of the specified basis and put $\widehat C=C^-/UC^-$, filtered by the remaining Alexander coordinate; define $D^-$ and $\widehat D$ similarly. Then $C^-$ and $D^-$ are subcomplexes, and the product basis gives a filtered chain isomorphism
$$\widehat{C\otimes_R D}\cong\widehat C\otimes_{\mathbb F_2}\widehat D,$$
where the tensor filtration is the convolution of the two Alexander filtrations. Every bifiltered $R$-linear chain homotopy equivalence between such based complexes descends to a filtered chain homotopy equivalence of their hat specializations. If $E$ is bifiltered equivalent to $C\otimes_R D$ and $H(\widehat C)\cong H(\widehat D)\cong\mathbb F_2$, then $H(\widehat E)\cong\mathbb F_2$ and
$$\tau(\widehat E)=\tau(\widehat C)+\tau(\widehat D).$$

## Statement references

[[def-knot-floer-filtration-and-tau]]

[[lem-tau-additive-for-filtered-tensor-products]]

## Facts & Assumptions

**Given:** The explicitly based bifiltered free Laurent complexes in the Statement; every equivalence and its homotopies preserves both filtration coordinates.

[F1] [[lem-tau-additive-for-filtered-tensor-products]] proves convolution-filtration tau additivity for finite complexes with one-dimensional total homology.

## Proof

1.1 Write a differential term as $U^nz$ in $\partial x$, with $x,z$ in the specified basis. Its first coordinate is $-n\le0$, hence $n\ge0$. Thus $\partial$ has polynomial coefficients in this basis and preserves $C^-$, and the same argument applies to $D^-$. The same first-coordinate argument applies to every term of a bifiltered map or homotopy, so each preserves the minus lattices and their $U$ multiples. All chain-map and chain-homotopy identities therefore descend modulo $U$. The second-coordinate inequalities on their constant coefficients say exactly that the resulting maps and homotopies preserve the Alexander filtration. [given, algebra]

2.1 The $R$-basis of $C\otimes_R D$ consists of $x\otimes y$, and the minus lattice for that basis is the polynomial span of these products. Its quotient by $U$ has basis $\bar x\otimes\bar y$. Sending the class of $x\otimes y$ to this product is an isomorphism over $\mathbb F_2$. Reducing $\partial(x\otimes y)=\partial x\otimes y+x\otimes\partial y$ modulo $U$ proves it is a chain isomorphism. The product $x\otimes y$ has Alexander level $A_x+A_y$, so its level-$s$ subspace is spanned by the products with $A_x+A_y\le s$. This is exactly $\sum_{p+q\le s}F_p\widehat C\otimes F_q\widehat D$. [step 1.1, given, construct, algebra]

3.1 By step 1.1, a bifiltered equivalence $E\simeq C\otimes_R D$ descends to an Alexander-filtered homotopy equivalence of hats, and step 2.1 identifies its target with the filtered tensor product. A filtered equivalence preserves the threshold: the forward map sends a nonzero total class represented at level $s$ to a nonzero total class represented at the same level, and the inverse map gives the reverse inequality. Apply [F1] to the identified tensor product to obtain its one-dimensional homology and the stated sum of thresholds. [F1, step 1.1, step 2.1, given, algebra] ∎

## Remarks

The specified basis and simultaneous coordinate-preserving equivalence are essential hypotheses. This algebra does not construct a connected-sum Heegaard diagram, prove neck-stretching, or identify any particular complex with a knot.
