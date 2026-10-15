---
id: lem-hh-tensor-algebra-regular-detection
kind: lemma
title: "Regular tensor-algebra multiplication is detected at the unit tensor"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [thm-tensor-product-of-algebras-over-a-commutative-ring, lem-hh-tensor-coherence-on-elementary-tensors]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf Algebras and Representations (Helsinki lecture notes, Spring 2011)"
      url: "https://www.math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
      locator: "§4.2, printed p. 65: componentwise multiplication on algebraic tensor products; unit-evaluation detection is proved locally here"
verification:
  precheck: pass
---

## Statement

Let $A$ be a unital algebra over a field $k$. For $n=2,3$, give $A^{\otimes n}$ its iterated componentwise tensor-product algebra structure and unit $1_A^{\otimes n}$. If $X,Y\in A^{\otimes n}$ and left multiplication by $X$ and $Y$ agree as maps $A^{\otimes n}\to A^{\otimes n}$, then $X=Y$. In particular, evaluation of a left-multiplication operator at $1_A^{\otimes n}$ recovers the tensor that defines it.

## Facts & Assumptions

**Given:** A field $k$, a unital $k$-algebra $A$, and $n\in\{2,3\}$.

[F1] [[thm-tensor-product-of-algebras-over-a-commutative-ring]]: the tensor product of unital algebras has componentwise multiplication and unit $1\otimes1$.

[F2] [[lem-hh-tensor-coherence-on-elementary-tensors]]: the canonical associator identifies the two parenthesizations of three tensor factors on elementary tensors.

## Proof

**Proof technique:** direct.

1.1 By [F1], $A\otimes A$ has componentwise multiplication and unit $1_A\otimes1_A$. Applying [F1] once more to $(A\otimes A)\otimes A$ gives the triple componentwise product and unit $(1_A\otimes1_A)\otimes1_A$; [F2] identifies this with the other parenthesization $1_A\otimes(1_A\otimes1_A)$. Thus for either allowed $n$, $A^{\otimes n}$ is a unital algebra with the stated unit. [given, F1, F2, construct]

2.1 If $L_X=L_Y$ as left-multiplication maps on $A^{\otimes n}$, evaluate both maps at the unit $1_A^{\otimes n}$. The unit laws give $L_X(1_A^{\otimes n})=X$ and $L_Y(1_A^{\otimes n})=Y$, so equality of the maps implies $X=Y$. Conversely, if $X=Y$, the two left-multiplication maps are equal by substitution. [given, step 1.1, algebra] ∎
