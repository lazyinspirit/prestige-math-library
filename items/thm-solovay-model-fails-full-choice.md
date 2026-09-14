---
id: thm-solovay-model-fails-full-choice
kind: theorem
title: The Solovay model fails the full Axiom of Choice
status: published
origin: pipeline
deps: [cor-solovay-model-has-no-vitali-or-bernstein-set, def-axiom-of-choice, thm-choice-bernstein-set-pathology]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: reductio
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Solovay, A model of set-theory in which every set of reals is Lebesgue measurable"
      url: https://people.math.ethz.ch/~fdalio/ZKmodel.pdf
      locator: "Introduction and Parts I-III"
---

## Statement

$M$ does not satisfy full AC, though it satisfies DC.

## Facts & Assumptions

**Given:** The internally proved ZF+DC theory of $M$.

[F1] [[cor-solovay-model-has-no-vitali-or-bernstein-set]]: $M$ has no Bernstein set.

[F2] [[def-axiom-of-choice]] and [[thm-choice-bernstein-set-pathology]]: ZF+AC constructs a Bernstein subset of $\mathbb R$.

## Proof

1.1 Assume for contradiction that $M\models AC$. Since $M$ is a transitive ZF model with its own full real line, the proof in F2 relativizes to $M$ and constructs there a Bernstein set. [assume-contra, F2]

2.1 This contradicts F1. Therefore $M\not\models AC$. Its already proved DC is compatible with this failure because DC is strictly the serial omega-chain assertion, not a well-ordering principle. [discharge-contradiction: F1, step 1.1] ∎
