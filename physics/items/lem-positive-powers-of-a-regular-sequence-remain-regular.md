---
id: lem-positive-powers-of-a-regular-sequence-remain-regular
kind: lemma
title: "Positive Powers Of A Regular Sequence Remain Regular"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-regular-sequences-permutable-local, def-regular-sequence-on-a-module, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-maintenance-receipts.jsonl (lem-positive-powers-of-a-regular-sequence-remain-regular). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Assume the Axiom of Choice. Let $M$ be finite over a Noetherian local ring $(R,\mathfrak m)$, and let $x_1,\ldots,x_n\in\mathfrak m$ be an $M$-regular sequence. If all $a_i$ are positive integers, then $x_1^{a_1},\ldots,x_n^{a_n}$ is $M$-regular.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and the local finite module and regular sequence in the claim. The declared prerequisites used here are [[cor-regular-sequences-permutable-local]] and [[def-regular-sequence-on-a-module]].

## Proof

**Proof technique:** direct.

1.1 First let $x,y_1,\ldots,y_s$ be regular on a module $N$. Injectivity of $x$ implies injectivity of every $x^a$. For $a\ge2$, multiplication by $x^{a-1}$ gives the exact sequence $0\to N/xN\to N/x^aN\to N/x^{a-1}N\to0$. Indeed, if $x^{a-1}m\in x^aN$, cancellation by injectivity of $x^{a-1}$ gives $m\in xN$; the last map is the natural quotient. [given, algebra]

2.1 If a sequence $y_1,\ldots,y_s$ is regular on both ends of a short exact sequence $0\to A\to B\to C\to0$, it is regular on $B$: injectivity of $y_1$ follows by mapping a killed element to $C$ and then to $A$; because $y_1$ is injective on $C$, quotienting by $y_1$ preserves exactness, and the same argument repeats for $y_2,\ldots,y_s$. Apply this observation inductively to the exact sequences of step 1.1. The sequence $y_1,\ldots,y_s$ is regular on $N/x^aN$ for every $a\ge1$, and $x^a,y_1,\ldots,y_s$ is regular on $N$. Its terminal quotient surjects onto the original nonzero terminal quotient, so remains nonzero. [step 1.1, algebra]

3.1 Under the assumed AC, [[cor-regular-sequences-permutable-local]] lets us move any selected $x_i$ to the front of the current regular sequence. Step 2.1 replaces it by $x_i^{a_i}$, and the same permutation result returns that powered entry to its original position. Repeat this finite operation for $i=1,\ldots,n$. Each intermediate sequence is regular, and the final sequence is $x_1^{a_1},\ldots,x_n^{a_n}$. These permutation applications are the exact uses of Choice. [step 2.1, algebra] ∎
