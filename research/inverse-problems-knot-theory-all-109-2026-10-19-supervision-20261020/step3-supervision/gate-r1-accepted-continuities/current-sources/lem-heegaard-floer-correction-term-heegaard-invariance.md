---
id: lem-heegaard-floer-correction-term-heegaard-invariance
kind: lemma
title: "Heegaard invariance and well-definedness of the correction term"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-heegaard-floer-plus-infinity-absolute-grading
  - lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps
  - lem-rational-heegaard-floer-infinity-standardness-and-rational-cobordism-isomorphism
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for rational homology three-spheres"
      url: "https://arxiv.org/pdf/math/0101206v1"
      locator: "Theorem 1.1 (printed p. 1); proof of Heegaard invariance in Sections 4–6"
    - title: "Jennifer Hom, Lecture Notes on Heegaard Floer Homology"
      url: "https://arxiv.org/pdf/2008.01836v1"
      locator: "Sections 2.1–2.2; Heegaard Floer groups and the correction-term construction"
---

## Statement

For every closed connected oriented rational homology three-sphere $Y$ and Spin$^c$ structure $\mathfrak t$, the standard Heegaard Floer groups $HF^\infty(Y,\mathfrak t)$ and $HF^+(Y,\mathfrak t)$ constructed from admissible pointed Heegaard diagrams are independent, up to grading-preserving isomorphism, of the diagram and regular auxiliary data. The image of $HF^\infty\to HF^+$ is a graded plus tower, isomorphic as an $\mathbb F_2[U]$-module to $\mathbb F_2[U,U^{-1}]/U\mathbb F_2[U]$ with an absolute rational grading shift and with $U$ of degree $-2$. Its nonzero homogeneous elements have a least grading, and that least grading is independent of the diagram and auxiliary data. Every tower element is $U$-torsion and is divisible by every power of $U$. In the standard normalization the least grading for $(S^3,\mathfrak t_0)$ is zero.

## Statement references

[[def-heegaard-floer-plus-infinity-absolute-grading|The disk-count complex and grading conventions]]

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for rational homology three-spheres*, Theorem 1.1 and Sections 4–6](https://arxiv.org/pdf/math/0101206v1)

[Hom, *Lecture Notes on Heegaard Floer Homology*, Sections 2.1–2.2](https://arxiv.org/pdf/2008.01836v1)

## Facts & Assumptions

[F1] [[lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps]] constructs the absolute grading and its compatibility with pointed moves and the minus/infinity/plus sequence.

[F2] [[lem-rational-heegaard-floer-infinity-standardness-and-rational-cobordism-isomorphism]] proves that the infinity group of each rational-sphere Spin$^c$ structure is a single Laurent tower.

## Proof

**Given:** A rational homology sphere $Y$, a Spin$^c$ structure $\mathfrak t$, and a finite admissible pointed diagram. Put $R=\mathbb F_2[U,U^{-1}]$ and choose a homogeneous Laurent generator $\rho$ of $HF^\infty(Y,\mathfrak t)$.

1.1 The minus chain complex is finite free over $\mathbb F_2[U]$, with generators $[\mathbf x,-1]$ for the finitely many intersection points in $\mathfrak t$. Its homology is finitely generated and its localization is the infinity homology, since localization is exact and the localized differentials are identical. Thus the graded image $L$ of $HF^-\to R\rho$ is nonzero. Its degrees are bounded above by the largest degree of a minus-chain generator. The set of integers $j$ with $U^j\rho\in L$ is consequently nonempty, bounded below, and closed under addition of nonnegative integers. If $a$ is its minimum, that set is exactly $\{a,a+1,\ldots\}$. Every homogeneous element of the Laurent tower is a monomial multiple of $\rho$, and the image is graded; hence $L=U^a\mathbb F_2[U]\rho$. [F1, F2]

2.1 The long exact sequence of the actual short exact sequence $CF^-\to CF^\infty\to CF^+$ identifies the image in plus homology, with its grading, as $R\rho/U^a\mathbb F_2[U]\rho$. Its nonzero homogeneous elements have exponents $j<a$, so their least degree is $\deg\rho-2(a-1)$, attained at $U^{a-1}\rho$. Sending the standard tower element $U^k$ to $U^{k+a-1}\rho$ identifies the image with $R/U\mathbb F_2[U]$ shifted by this least degree. Multiplying any individual element sufficiently many times by $U$ kills it, while decreasing exponents supplies a preimage under any power of $U$. This proves all the tower assertions. [step 1.1]

3.1 The pointed-move maps preserve absolute grading and the minus/infinity/plus exact sequence, so they carry $L$ onto the corresponding image lattice and induce grading-preserving tower isomorphisms. Therefore the least degree is independent of the diagram and auxiliary data. Choosing $U^b\rho$ instead changes $a$ to $a-b$ and $\deg\rho$ to $\deg\rho-2b$, leaving that degree unchanged. In the genus-zero diagram of $S^3$ there is one generator $[\mathbf x_0,0]$ of degree zero, no nonconstant disks, and minus lattice $U\mathbb F_2[U][\mathbf x_0,0]$. Here $a=1$, so the least grading is zero. [F1, step 1.1, step 2.1] ∎

