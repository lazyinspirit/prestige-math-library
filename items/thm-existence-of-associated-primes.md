---
id: thm-existence-of-associated-primes
kind: theorem
title: "A nonzero module over a Noetherian ring has an associated prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-associated-prime-of-a-module, lem-noetherian-ring-maximal-element-annihilator-exists, lem-maximal-element-annihilator-primality-step]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (17.13)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.63.7"
      url: "https://stacks.math.columbia.edu/tag/0587"
---

## Statement

Let $R$ be a Noetherian commutative ring and let $M$ be a nonzero left
$R$-module. Then $\operatorname{Ass}_R(M)$ is nonempty.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and a nonzero left $R$-module $M$.

[L1] A prime ideal belongs to $\operatorname{Ass}_R(M)$ exactly when it is the annihilator of some element of $M$ ([[def-associated-prime-of-a-module]]).

[L2] Some nonzero element of $M$ has annihilator maximal among annihilators of nonzero elements ([[lem-noetherian-ring-maximal-element-annihilator-exists]]).

[L3] An annihilator maximal among annihilators of nonzero elements is prime ([[lem-maximal-element-annihilator-primality-step]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], choose $m \in M$ with $m \neq 0$ such that $\operatorname{Ann}_R(m)$ is maximal among the annihilators of nonzero elements of $M$. Then [L3] shows that $\operatorname{Ann}_R(m)$ is prime. [L2, L3, choose]

2.1 By [L1], the prime ideal $\operatorname{Ann}_R(m)$ belongs to $\operatorname{Ass}_R(M)$. [L1, step 1.1]

3.1 Therefore $\operatorname{Ass}_R(M)$ is nonempty. [step 2.1] ∎
