---
id: thm-sigma-one-sets-are-exactly-ce-sets
kind: theorem
title: "Sigma_1^0 sets are exactly the computably enumerable sets"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sigma-n-pi-n-and-delta-n-sets, def-computable-and-partial-computable-function, def-decidable-and-recognizable-language, thm-kleene-normal-form]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Proposition 2.1"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For $A\subseteq\mathbb N$, $A$ is $\Sigma_1^0$ if and only if $A$ is
computably enumerable (recognizable).

## Facts & Assumptions

**Given:** a subset $A$ of $\mathbb N$.

## Proof

**Proof technique:** direct.

1.1 If $x\in A\iff\exists s\,R(x,s)$ with $R$ primitive recursive, search $s=0,1,\ldots$ and halt on the first true value. This recognizes exactly $A$. [given, construct]

2.1 Conversely, a recognizer has a finite halting computation exactly on its positive inputs. Its coded history gives an existential witness whose validity is primitive recursive, so $A$ has a $\Sigma_1^0$ definition. [step 1.1, construct] ∎
