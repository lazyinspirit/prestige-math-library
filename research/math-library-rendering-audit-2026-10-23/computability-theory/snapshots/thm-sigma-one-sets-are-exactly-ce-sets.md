---
id: thm-sigma-one-sets-are-exactly-ce-sets
kind: theorem
title: "Sigma_1^0 sets are exactly the computably enumerable sets"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sigma-n-pi-n-and-delta-n-sets, def-computable-and-partial-computable-function, def-decidable-and-recognizable-language, def-kleene-t-predicate-and-output-function, thm-partial-recursive-iff-turing-computable]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-receipts.jsonl (thm-sigma-one-sets-are-exactly-ce-sets). No independent judge or whole-closure certification.
    delegated_by: owner
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

1.1 If $x\in A\iff\exists s\,R(x,s)$ with $R$ primitive recursive, evaluate $R(x,s)$ for $s=0,1,\ldots$ and accept on the first true value. Every primitive-recursive predicate is computable: its initial functions are computed directly and its finite composition and primitive-recursion derivation become composition and finite loops of machines, as in [[thm-partial-recursive-iff-turing-computable]]. The search therefore recognizes exactly $A$. [given, construct]

2.1 Conversely, let $M$ recognize $A$. A recognizer may halt rejecting on negative inputs, so replace each rejecting halt of $M$ by a fixed loop, obtaining a machine $M'$ that halts exactly when $M$ accepts. Fix its code $e$. By [[def-kleene-t-predicate-and-output-function]], $T(e,x,s)$ is a primitive-recursive predicate saying exactly that $s$ codes a complete halting history of $M'$ on $x$. Thus $x\in A\iff\exists s\,T(e,x,s)$, a $\Sigma_1^0$ definition. [given, construct] ∎
