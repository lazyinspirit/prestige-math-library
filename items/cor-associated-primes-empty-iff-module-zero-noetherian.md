---
id: cor-associated-primes-empty-iff-module-zero-noetherian
kind: corollary
title: "A module over a Noetherian ring has no associated primes exactly when it is zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-of-associated-primes]
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

Let $R$ be a Noetherian commutative ring and let $M$ be a left $R$-module. Then
$$ \operatorname{Ass}_R(M)=\varnothing \quad\Longleftrightarrow\quad M=0. $$

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and a left $R$-module $M$.

[L1] Every nonzero $R$-module has an associated prime ([[thm-existence-of-associated-primes]]).

## Proof

**Proof technique:** direct.

1.1 If $M=0$, then the only element of $M$ is $0$, whose annihilator is the whole ring $R$. Since $R$ is not a prime ideal of itself, no associated prime can occur, so $\operatorname{Ass}_R(M)=\varnothing$. [given, algebra]

1.2 If $M \neq 0$, then [L1] gives $\operatorname{Ass}_R(M)\neq\varnothing$. [L1, given]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
