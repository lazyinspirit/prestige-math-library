---
id: cor-basic-cohen-model-fails-well-orderability-and-choice
kind: corollary
title: The basic Cohen model fails well-orderability and AC
status: draft
origin: pipeline
deps: [def-basic-cohen-symmetric-system, thm-hereditarily-symmetric-interpretations-form-a-zf-model, thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals, def-axiom-of-choice, thm-well-ordering-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 10.25", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

The infinite Dedekind-finite set $A$ cannot be well-ordered. Hence the basic Cohen symmetric model satisfies ZF plus $\neg\mathrm{AC}$.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-basic-cohen-model-has-an-infinite-dedekind-finite-set-of-reals]] gives infinitude and no $\omega$-injection.

[F2] [[thm-well-ordering-theorem]] says AC well-orders every set.

[F3] [[def-axiom-of-choice]] identifies the failed axiom.

[F4] [[def-basic-cohen-symmetric-system]] and [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]] identify the displayed HS interpretation as the transitive ZF model in which $A$ lives.

## Proof

1.1 If $A$ had a well-order, recursion selecting the least unused member would either terminate after finitely many steps—making $A$ finite—or define an injection $\omega\to A$. Both contradict F1. Thus $A$ is not well-orderable. [F1]

2.1 By F4 the basic Cohen HS interpretation is a ZF model containing $A$. If it satisfied F3, F2 inside that model would well-order $A$, contradicting step 1.1. Hence AC fails. This reductio is the exact use of the choice dependency; the symmetric-model construction itself remains choice-free. [F2, F3, F4] ∎
