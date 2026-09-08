---
id: cor-countable-los-vaught-test
kind: corollary
title: "The infinite-model categoricity test for completeness"
status: published
origin: pipeline
deps: [thm-upward-lowenheim-skolem-with-choice, thm-downward-lowenheim-skolem-with-parameters, def-first-order-syntactic-consistency, thm-countable-first-order-completeness, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Weiss–D’Mello, Theorem 6 and full proof, printed pp20–21; syntactic completeness obtained through local countable completeness."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
proof_strategy: direct
---

## Statement

In ZFC, let $T$ be a consistent sentence theory in an explicitly countable language. Assume every model of $T$ is infinite and any two models of $T$ of a fixed infinite cardinality $\kappa$ are isomorphic. Then $T$ is syntactically complete.

## Facts & Assumptions

**Given:** Consistency, the no-finite-model hypothesis, categoricity in infinite $\kappa$, and AC.

[F1] Infinite models can be enlarged elementarily to any cardinal at least their size and the language size. ([[thm-upward-lowenheim-skolem-with-choice]])

[F2] Infinite models have elementary substructures of any infinite size between the language bound and their own size. ([[thm-downward-lowenheim-skolem-with-parameters]])

[F3] Syntactic completeness means proving one side of every sentence decision. ([[def-first-order-syntactic-consistency]])

[F4] For countable languages, semantic consequence equals provability, and consistent theories have models. ([[thm-countable-first-order-completeness]])

[A1] AC is assumed for the cardinal-size theorems. ([[def-axiom-of-choice]])

## Proof

1.1 If $T$ were not complete in the sense of F3, some sentence $\sigma$ would satisfy $T\nvdash\sigma$ and $T\nvdash\neg\sigma$. By F4 these mean $T\not\models\sigma$ and $T\not\models\neg\sigma$. Thus there are models $A,B$ of $T$ with $A\models\neg\sigma$ and $B\models\sigma$, respectively. The hypothesis on $T$ makes both infinite. [F3, F4]

2.1 For each of $A,B$, if its size is at most $\kappa$, apply F1; if it is at least $\kappa$, apply F2 with empty parameter set. Since the language is countable and $\kappa$ infinite, both language bounds hold. Under A1 this produces $A',B'$ of size exactly $\kappa$, elementarily equivalent respectively to $A,B$. At equality take the structure itself. Consequently $A'\models\neg\sigma$ and $B'\models\sigma$, and both satisfy $T$. [F1, F2, A1, step 1.1]

3.1 Categoricity gives an isomorphism $h:A'\to B'$. It preserves values of terms by induction on terms: variables and constants are preserved, and each function commutes with $h$. Hence it preserves and reflects equality and relation atoms. Negation and conjunction retain this equivalence; existential witnesses transfer forward by $h$ and backward by its inverse. Formula induction therefore makes isomorphic structures agree on every sentence, contradicting their opposite decisions of $\sigma$. No such undecided sentence exists, so $T$ is complete. [given, step 2.1] ∎
