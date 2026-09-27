---
id: thm-associated-primes-of-cohen-macaulay-modules
title: Associated primes of Cohen--Macaulay modules
kind: theorem
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-associated-primes-of-cohen-macaulay-module-have-full-dimension, cor-cohen-macaulay-modules-have-no-embedded-associated-primes]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (thm-associated-primes-of-cohen-macaulay-modules). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

If $0\ne M$ is a finite Cohen--Macaulay module of dimension $d$ over a
Noetherian local ring $R$, then every
$\mathfrak p\in\operatorname{Ass}_R(M)$ is minimal in
$\operatorname{Supp}_R(M)$ and satisfies $\dim(R/\mathfrak p)=d$.

## Facts & Assumptions

**Given:** the Axiom of Choice and the local Cohen--Macaulay hypotheses stated above.

[L1] Under Choice, every associated prime has full quotient dimension ([[lem-associated-primes-of-cohen-macaulay-module-have-full-dimension]]).

[L2] Under the hypotheses of [L1], every associated prime is minimal in the support ([[cor-cohen-macaulay-modules-have-no-embedded-associated-primes]]).

## Proof

**Proof technique:** direct.

1.1 Full quotient dimension is [L1], and minimality is [L2]. [L1, L2, given]

2.1 Combining those conclusions gives both assertions simultaneously. [step 1.1, algebra] ∎
