---
id: cor-depth-zero-iff-ideal-contained-in-an-associated-prime
title: Depth zero and associated primes
kind: corollary
status: published
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal, lem-regular-element-exists-by-prime-avoidance, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-maintenance-receipts.jsonl (cor-depth-zero-iff-ideal-contained-in-an-associated-prime). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice.

Let $R$ be Noetherian, let $M\ne0$ be a finite $R$-module, and let $I$ be an
ideal with $IM\ne M$. Then
$$\operatorname{depth}_I(M)=0 \quad\Longleftrightarrow\quad I\subseteq\mathfrak p\text{ for some }\mathfrak p\in\operatorname{Ass}_R(M).$$

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]); the ring, module, and ideal in the statement.

## Proof

**Proof technique:** direct.

1.1 Because $IM\ne M$, depth zero means precisely that the empty regular sequence cannot be extended by an $M$-regular element of $I$. [given]

2.1 The regular-element lemma identifies failure of such an extension with $I$ being contained in an associated prime of $M$. This proves the biconditional. [step 1.1] ∎
