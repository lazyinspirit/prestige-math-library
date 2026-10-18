---
id: thm-brauer-generator-presentation
kind: theorem
title: Generators and defining relations for the Brauer diagram category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-brauer-and-partition-diagram-categories, lem-brauer-and-partition-composition-is-associative]
proof_strategy: direct
axiom_use: "No choice principle is used; each diagram has finitely many vertices."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, Theorem 2.6 and proof"
      url: https://arxiv.org/pdf/1207.5889
      locator: "PDF pp. 6–12: regular expressions, local reduction Lemmas 2.10–2.13, and the induction completing Theorem 2.6."
---

## Statement

In the $R$-linear Brauer category of [[def-brauer-and-partition-diagram-categories]], identity strands $I$, adjacent crossing $X:2\to2$, cap $A:2\to0$, and cup $U:0\to2$ generate every morphism under composition and juxtaposition. They satisfy the identity/interchange relations and
$$X^2=I^{\otimes2},\qquad (X\otimes I)(I\otimes X)(X\otimes I)=(I\otimes X)(X\otimes I)(I\otimes X),$$
$$A X=A,\qquad A U=\delta\,1_0,\qquad (A\otimes I)(I\otimes X)=(I\otimes A)(X\otimes I),$$
$$ (A\otimes I)(I\otimes U)=I. $$
The dual relations are included. A scaled Brauer diagram means an $R$-multiple of one basis matching. The claim is that these relations are complete: any two words evaluating to the same scaled Brauer diagram are equivalent using them.

## Facts & Assumptions

**Given:** The typed matching modules, stacking operation, and loop scalar in [[def-brauer-and-partition-diagram-categories]].

[F1] [[def-brauer-and-partition-diagram-categories]]: a morphism is an $R$-linear combination of perfect matchings, and stacking contributes $\delta$ for each removed middle loop.

[F2] [[lem-brauer-and-partition-composition-is-associative]]: stacking is associative, so local replacements can be composed in any parenthesization.

## Proof

This locally required presentation proof is escalated. The source gives a complete route, but the full regular-expression reduction and its induction have not been transcribed and checked here; no completeness claim is being used as a supplier. The missing argument is precisely the proof that every two regular expressions of one scaled diagram reduce to the same word, including the cup-through-crossing cases and the induction on the number of through strands. The referenced proof range is Lehrer–Zhang, PDF pp. 6–12 (Theorem 2.6, Lemmas 2.10–2.13 and completion).
