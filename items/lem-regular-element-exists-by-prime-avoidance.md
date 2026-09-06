---
id: lem-regular-element-exists-by-prime-avoidance
title: A regular element exists by prime avoidance
kind: lemma
status: draft
origin: pipeline
deps: [def-associated-prime-of-a-module, thm-existence-of-associated-primes, thm-finiteness-of-associated-primes, lem-zero-divisor-annihilator-contained-in-associated-prime, lem-finite-prime-avoidance]
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
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $R$ be Noetherian, let $M\ne0$ be a finite $R$-module, and let $I$ be an
ideal such that $IM\ne M$. Then $I$ contains an $M$-regular element if and only if
$$I\nsubseteq\mathfrak p\qquad\text{for every }\mathfrak p\in \operatorname{Ass}_R(M).$$

## Facts & Assumptions

**Given:** A Noetherian ring $R$, a nonzero finite module $M$, and an ideal $I$ with $IM\ne M$.

## Proof

**Proof technique:** direct.

1.1 An element of $R$ is a zero divisor on $M$ exactly when it belongs to an associated prime: one direction follows from an associated element, and the other from the zero-divisor lemma. Thus an $M$-regular element of $I$ exists exactly when $I$ is not contained in the union of the associated primes. [given, algebra]

2.1 The associated-prime set is finite for a finite module over a Noetherian ring. Finite prime avoidance therefore says that $I$ is contained in that union exactly when it is contained in one member. Combining this with step 1.1 produces a nonzerodivisor $x\in I$ exactly under the displayed condition; $M/xM\ne0$ because $xM=M$ would imply $IM=M$. Thus $x$ is regular in the adopted sense, proving both directions. [step 1.1, algebra] ∎
