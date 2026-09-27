---
id: lem-regular-element-exists-by-prime-avoidance
title: A regular element exists by prime avoidance
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-associated-prime-of-a-module, thm-finiteness-of-associated-primes, lem-zero-divisor-annihilator-contained-in-associated-prime, lem-finite-prime-avoidance]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (lem-regular-element-exists-by-prime-avoidance). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice.

Let $R$ be Noetherian, let $M\ne0$ be a finite $R$-module, and let $I$ be an
ideal such that $IM\ne M$. Then $I$ contains an $M$-regular element if and only if
$$I\nsubseteq\mathfrak p\qquad\text{for every }\mathfrak p\in \operatorname{Ass}_R(M).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian ring $R$, a nonzero finite module $M$, and an ideal $I$ with $IM\ne M$ ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 An element of $R$ is a zero divisor on $M$ exactly when it belongs to an associated prime: one direction follows from an associated element, and the other from [[lem-zero-divisor-annihilator-contained-in-associated-prime]] under the stated Choice hypothesis. Thus an $M$-regular element of $I$ exists exactly when $I$ is not contained in the union of the associated primes. [given, algebra]

2.1 The associated-prime set is finite by [[thm-finiteness-of-associated-primes]] under the stated Choice hypothesis. It is nonempty because $0$ is a zero divisor on $M\ne0$ and step 1.1 places every zero divisor in an associated prime. Thus [[lem-finite-prime-avoidance]] applies and says that $I$ is contained in that union exactly when it is contained in one member. Combining this with step 1.1 produces a nonzerodivisor $x\in I$ exactly under the displayed condition; $M/xM\ne0$ because $xM=M$ would imply $IM=M$. Thus $x$ is regular in the adopted sense, proving both directions. [step 1.1, algebra] ∎
