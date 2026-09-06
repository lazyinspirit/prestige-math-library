---
id: cor-cohen-macaulay-modules-have-no-embedded-associated-primes
title: Cohen--Macaulay modules have no embedded associated primes
kind: corollary
status: draft
origin: pipeline
deps: [lem-associated-primes-of-cohen-macaulay-module-have-full-dimension]
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

Under the hypotheses of
`lem-associated-primes-of-cohen-macaulay-module-have-full-dimension`, every
associated prime of $M$ is minimal in $\operatorname{Supp}_R(M)$. Thus $M$
has no embedded associated primes.

## Facts & Assumptions

**Given:** $\mathfrak p\in\operatorname{Ass}_R(M)$.

## Proof

**Proof technique:** direct.

1.1 Suppose $\mathfrak q\in\operatorname{Supp}(M)$ and $\mathfrak q\subsetneq\mathfrak p$. A chain of length $d$ above $\mathfrak p$, preceded by the strict inclusion $\mathfrak q\subsetneq\mathfrak p$, gives $\dim(R/\mathfrak q)>d$. [given]

2.1 But $V(\mathfrak q)\subseteq\operatorname{Supp}(M)$ implies $\dim(R/\mathfrak q)\le\dim M=d$, a contradiction. Hence no such $\mathfrak q$ exists. [step 1.1, algebra] ∎
