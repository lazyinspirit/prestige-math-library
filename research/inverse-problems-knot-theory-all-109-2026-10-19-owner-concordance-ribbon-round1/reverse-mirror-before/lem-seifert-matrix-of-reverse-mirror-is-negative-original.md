---
id: lem-seifert-matrix-of-reverse-mirror-is-negative-original
kind: lemma
title: "The reverse-mirror Seifert matrix is the negative transpose"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reverse-mirror-of-oriented-knot
  - def-knot-seifert-pairing-and-matrix
  - def-axiom-of-choice
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§1.1, mirror and reverse conventions, printed p.2"
---

## Statement

Assume the full Axiom of Choice. Let $K$ be a smooth oriented knot with a Seifert surface $F$ and ordered integral basis $a_1,\ldots,a_{2g}$, using $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ for the positive-push Seifert matrix. Let $K^\dagger$ be the reverse mirror defined by the fixed orientation-reversing reflection followed by reversal of the knot orientation, and use the image basis on the reflected surface. The Seifert matrix of $K^\dagger$ in that basis is $-V^T$.

## Statement references

[[def-reverse-mirror-of-oriented-knot|The fixed reverse-mirror convention]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert-matrix convention]]

[[def-axiom-of-choice|The full Axiom of Choice assumed by the knot Seifert-pairing interface]]

## Facts & Assumptions

**Given:** Full AC, the oriented surface, and the ordered basis from the statement.

[A1] [[def-axiom-of-choice]]: AC is the choice-function axiom used by the Seifert-pairing interface.

[F1] [[def-knot-seifert-pairing-and-matrix]]: The matrix entry is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, where the positive normal is determined by the ambient and surface orientations.

[F2] [[def-reverse-mirror-of-oriented-knot]]: The reverse mirror applies the fixed orientation-reversing reflection and reverses the knot orientation.

## Proof

1.1 For disjoint oriented curves $C,D\subset S^3$, choose oriented $2$-chains $A,B$ with $\partial A=C$ and $\partial B=D$, and perturb them to be transverse. The oriented intersection $1$-chain $A\cap B$ has boundary $(\partial A)\cap B-A\cap(\partial B)$, whose total signed boundary count is zero. Hence the signed intersection definitions give $\operatorname{lk}(C,D)=\operatorname{lk}(D,C)$. [A1, given, construct]

1.2 In a bicollar of $F$, move the pair $(a_i^-,a_j)$ simultaneously in the positive normal direction by one collar width. The two curves remain on distinct normal levels, so this is an isotopy through disjoint pairs from $(a_i^-,a_j)$ to $(a_i,a_j^+)$. Linking is invariant under this isotopy, and by step 1.1 it is symmetric; therefore $\operatorname{lk}(a_i^-,a_j)=\operatorname{lk}(a_j^+,a_i)=V_{ji}$. [F1, step 1.1, construct]

2.1 Reflection reverses the sign of linking. Because it reverses the ambient orientation, the image of the positive normal to $F$ is the negative normal to the reflected surface. Reversing the surface orientation afterward changes both tangent signs and leaves its positive normal unchanged. Thus the $(i,j)$ entry for the reverse mirror is $-\operatorname{lk}(a_i^-,a_j)=-V_{ji}$ by step 1.2. This holds for every $i,j$, so the matrix is $-V^T$. [F1, F2, step 1.2, algebra]

3.1 The argument includes the empty basis: for $g=0$, both matrices are the unique $0\times0$ matrix and $-V^T=V$. This proves the stated identity in every genus. [step 2.1, algebra] ∎
