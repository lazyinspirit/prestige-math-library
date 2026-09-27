---
id: lem-associated-primes-of-cohen-macaulay-module-have-full-dimension
title: Associated primes of a Cohen--Macaulay module have full dimension
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-associated-prime-of-a-module, def-cohen-macaulay-local-module-and-ring, lem-depth-bounded-by-associated-prime-quotient-dimension]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-associated-primes-of-cohen-macaulay-module-have-full-dimension). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $(R,\mathfrak m)$ be Noetherian local and let $0\ne M$ be a finite
Cohen--Macaulay $R$-module of dimension $d$. For every
$\mathfrak p\in\operatorname{Ass}_R(M)$,
$$\dim(R/\mathfrak p)=d.$$

## Facts & Assumptions

**Given:** the Axiom of Choice; every associated prime belongs to $\operatorname{Supp}(M)$.

[L1] Under Choice, depth is bounded by the quotient dimension at every associated prime ([[lem-depth-bounded-by-associated-prime-quotient-dimension]]).

## Proof

**Proof technique:** direct.

1.1 Cohen--Macaulayness and [L1] give $d=\operatorname{depth}_R(M)\le\dim(R/\mathfrak p)$. [L1, given]

2.1 Since $V(\mathfrak p)\subseteq\operatorname{Supp}(M)$, the reverse inequality $\dim(R/\mathfrak p)\le d$ holds. The two inequalities give equality. [step 1.1, algebra] ∎
