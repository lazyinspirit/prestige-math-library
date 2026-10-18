---
id: ex-temperley-lieb-three-strand-normal-forms
kind: example
title: "The five normal forms in the three-strand algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-temperley-lieb-generator-presentation, thm-temperley-lieb-generator-normal-form, thm-temperley-lieb-presentation-isomorphism, lem-temperley-lieb-generators-satisfy-local-relations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
---

## Example

In rank $3$, the two generators are $u_1,u_2$. The admissible Jones normal forms from [[thm-temperley-lieb-generator-normal-form]] are

$$1,\qquad u_1,\qquad u_2,\qquad u_2u_1,\qquad u_1u_2.$$

The two adjacent triple relations reduce alternating length-three words:

$$u_1u_2u_1=u_1,\qquad u_2u_1u_2=u_2.$$

For example, $u_2u_1u_2u_1=(u_2u_1u_2)u_1=u_2u_1$, while $u_1u_2u_1u_2=(u_1u_2u_1)u_2=u_1u_2$. The five listed words are an $R$-basis for every commutative coefficient ring and every $\delta\in R$.

## Facts & Assumptions

**Given:** A commutative ring $R$, $\delta\in R$, and rank $n=3$.

[F1] The parameters of a Jones normal form satisfy $1\le k_i\le j_i<3$, with both $j_i$ and $k_i$ strictly increasing from block to block. ([[thm-temperley-lieb-generator-normal-form]])

[F2] $u_1^2=\delta u_1$, $u_2^2=\delta u_2$, $u_1u_2u_1=u_1$, and $u_2u_1u_2=u_2$. ([[def-temperley-lieb-generator-presentation]])

[F3] The Jones normal forms are linearly independent and span the presented algebra because the presentation map to the diagram algebra is an isomorphism. ([[thm-temperley-lieb-presentation-isomorphism]])

## Proof

**Proof technique:** direct.

1.1 For an empty parameter list the word is $1$. For one block, the pairs $(j,k)=(1,1),(2,1),(2,2)$ give $u_1,u_2u_1,u_2$. For two blocks, strict increase forces $(j_1,j_2)=(1,2)$ and $(k_1,k_2)=(1,2)$, giving $u_1u_2$; three blocks are impossible because only $j=1,2$ are available. This lists exactly five forms. [F1, construct]

2.1 The reductions in the Example follow by one use of the corresponding triple relation in [F2]; the basis claim follows from [F3]. Since no step divides by $\delta$, these statements include $\delta=0$ and all other ring specializations. [F2, F3, algebra] ∎
