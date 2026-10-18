---
id: lem-green-coproduct-products-converge
kind: lemma
title: "Products of Green coproducts converge coefficientwise"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-green-hall-completion-and-coproduct
  - lem-green-hall-coproduct-coefficients-are-finite
  - def-hall-finitary-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.5, PDF pp. 11–12, Lemma 1.8: coefficientwise convergence for products of Green coproducts using finite Hom sets."
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2"
      url: "https://arxiv.org/pdf/1810.08238v2"
      locator: "§2.1, PDF pp. 7–8: finitary Hom-set hypotheses."
verification:
  precheck: pending
---

## Statement

For any $M,N$, the product $\Delta'([M])\cdot\Delta'([N])$ in the twisted
tensor multiplication of [[def-green-hall-completion-and-coproduct]] has a
finite coefficient sum at every fixed basis pair $[R]\otimes[S]$. Thus the
product is defined in the coefficientwise completion. The claim does not
extend to arbitrary pairs of completed tensors.

## Facts & Assumptions

**Given:** Objects $M,N,R,S$ in a finitary abelian category.

[F1] Every nonzero Hall coefficient is witnessed by a short exact sequence
with the stated quotient and subobject, and Hom sets are finite
([[def-hall-finitary-abelian-category]]).

[F2] A product coefficient can be nonzero only for exact sequences
$0\to L_1\to M\to K_1\to0$,
$0\to L_2\to N\to K_2\to0$,
$0\to K_2\to S\to K_1\to0$, and
$0\to L_2\to R\to L_1\to0$
([[def-green-hall-completion-and-coproduct]]).

## Proof



**Proof technique:** direct.

1.1 Fix $R,S$. A nonzero contribution to their coefficient determines the four exact sequences in [F2]. Compose $R\twoheadrightarrow L_1$ with the monomorphism $L_1\hookrightarrow M$; its image is $L_1$ because the first map is epic and the second is monic. Thus the isomorphism class $[L_1]$ occurs as the image of a morphism $R\to M$. There are finitely many such morphisms by [F1], hence finitely many possible $[L_1]$. [F1, F2, construct]

2.1 Compose $N\twoheadrightarrow K_2$ with $K_2\hookrightarrow S$. Its image is $K_2$, and its kernel is $L_2$, so finite $\operatorname{Hom}(N,S)$ gives only finitely many possible pairs $(K_2,L_2)$. The finite set $\operatorname{Hom}(R,M)$ similarly gives only finitely many pairs $(L_1,K_1)$ from the image and cokernel of $R\twoheadrightarrow L_1\hookrightarrow M$. Hence only finitely many quadruples $(K_1,L_1,K_2,L_2)$ contribute. [F1, F2, step 1.1, construct]

3.1 Each quadruple contributes one scalar, finite Hall coefficients and a finite sum by step 2.1. Therefore the coefficient of $[R]\otimes[S]$ is a finite sum, for every output pair. [step 2.1, algebra] ∎

