---
id: fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category
kind: false-statement
title: "FALSE: a trace can be defined for an endomorphism in any monoidal category"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-what-is-needed-before-a-trace-can-be-written, def-pivotal-structure]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definition 4.7.1 and Remark 4.7.2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

A trace can be defined for an endomorphism in any monoidal category.

## Facts & Assumptions

**Given:** A monoidal category and an endomorphism $x:X\to X$.

[L1] The trace ladder states that rigidity is needed to define categorical trace
at all ([[rem-what-is-needed-before-a-trace-can-be-written]]).

[L2] A pivotal structure is the extra comparison
$a_X:X\to X^{\vee\vee}$ needed to turn an endomorphism into a traceable morphism
([[def-pivotal-structure]]).

## Refutation

**Proof technique:** direct.

1.1 By the hypothesis ladder in [[rem-what-is-needed-before-a-trace-can-be-written]], categorical trace is first defined on a morphism $a:X\to X^{\vee\vee}$ or $b:X^{\vee\vee}\to X$, so rigidity is already required before any trace expression is even well typed. [given, L1]

2.1 Even in a rigid category, an endomorphism $x:X\to X$ does not itself have the required source and target. One needs a pivotal structure to insert a comparison $a_X:X\to X^{\vee\vee}$ or $a_X^{-1}:X^{\vee\vee}\to X$, as recorded in [[def-pivotal-structure]]. [step 1.1, L2]

3.1 Therefore a bare monoidal category does not supply a trace for an arbitrary endomorphism. The statement is false because the operation is not even typed without extra duality data. [step 2.1] ∎
