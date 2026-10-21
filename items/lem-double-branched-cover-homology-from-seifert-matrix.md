---
id: lem-double-branched-cover-homology-from-seifert-matrix
kind: lemma
title: "Homology of the double branched cover from a Seifert matrix"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-cyclic-branched-cover-of-a-knot
  - def-oriented-seifert-surface
  - def-knot-seifert-pairing-and-matrix
  - lem-cyclic-branched-cover-seifert-block-matrix
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.D, printed pp. 212–213; proof of the double-cover presentation"
    - title: "Charles Livingston, Seifert Forms and Concordance"
      url: "https://arxiv.org/pdf/math/0101035v3"
      locator: "Section 3, Theorem 3.1, printed pp. 406–407; the root-order formula is stated with Fox cited as source"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented knot, let $F$ be a connected compact oriented Seifert surface of genus $g$, and let $V$ be its positive-push Seifert matrix in any ordered integral basis of $H_1(F;\mathbb Z)$. Then
$$
H_1(\Sigma_2(K);\mathbb Z)\cong\operatorname{coker}(V+V^T).
$$
For $g=0$, the matrix is empty and the cokernel is trivial.

## Statement references

[[def-cyclic-branched-cover-of-a-knot|The definition of the double branched cover $\Sigma_2(K)$]]

[[def-oriented-seifert-surface|The connected compact oriented spanning surface and genus convention]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[lem-cyclic-branched-cover-seifert-block-matrix|The cyclic-cover homology presentation by $M_q(V)$]]

[Rolfsen, *Knots and Links*, Chapter 8.D](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf)

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot $K$, a connected compact oriented Seifert surface $F$, an ordered integral basis of $H_1(F;\mathbb Z)$, and its positive-push matrix $V$.

[A1] Full AC is the choice-function axiom used by the cyclic-cover construction. [[def-axiom-of-choice]]

[F1] The double branched cover is $\Sigma_2(K)$ from the connected meridian-mod-$2$ exterior cover with its lifted meridian filled. [[def-cyclic-branched-cover-of-a-knot]]

[F2] For every $q\ge2$, $H_1(\Sigma_q(K);\mathbb Z)\cong\operatorname{coker}(M_q(V))$, with diagonal blocks $V+V^T$ and adjacent blocks $-V$ and $-V^T$. [[lem-cyclic-branched-cover-seifert-block-matrix]]

## Proof

1.1 The block indices in $M_q(V)$ run from $1$ to $q-1$. At $q=2$ there is only one index, so there are no adjacent blocks and $M_2(V)$ consists of the single diagonal block $V+V^T$. [given, F2, algebra]

2.1 Substitute $q=2$ in [F2]. By [F1], the resulting manifold is the double branched cover $\Sigma_2(K)$; hence its first homology is the cokernel of $V+V^T$. If $g=0$, the block has size zero and the cokernel is the zero group by the empty-matrix convention. The required AC hypothesis is inherited through [F1]. [A1, F1, F2, step 1.1, given] ∎
