---
id: thm-associated-primes-of-cohen-macaulay-modules
title: Associated primes of Cohen--Macaulay modules
kind: theorem
status: draft
origin: pipeline
deps: [lem-associated-primes-of-cohen-macaulay-module-have-full-dimension, cor-cohen-macaulay-modules-have-no-embedded-associated-primes]
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

If $0\ne M$ is a finite Cohen--Macaulay module of dimension $d$ over a
Noetherian local ring $R$, then every
$\mathfrak p\in\operatorname{Ass}_R(M)$ is minimal in
$\operatorname{Supp}_R(M)$ and satisfies $\dim(R/\mathfrak p)=d$.

## Facts & Assumptions

**Given:** the local Cohen--Macaulay hypotheses stated above.

## Proof

**Proof technique:** direct.

1.1 Full quotient dimension is `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension`, and minimality is `cor-cohen-macaulay-modules-have-no-embedded-associated-primes`. [given]

2.1 Combining those conclusions gives both assertions simultaneously. [step 1.1, algebra] ∎
