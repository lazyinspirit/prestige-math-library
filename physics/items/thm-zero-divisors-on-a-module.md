---
id: thm-zero-divisors-on-a-module
kind: theorem
title: "Zero divisors on a module over a Noetherian ring are the union of its associated primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finiteness-of-associated-primes, lem-zero-divisor-annihilator-contained-in-associated-prime, def-dependent-choice, def-axiom-of-choice]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-maintenance-receipts.jsonl (thm-zero-divisors-on-a-module). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 10.63.9"
      url: "https://stacks.math.columbia.edu/tag/00L9"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (17.15)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Statement

Assume Dependent Choice. Let $R$ be a Noetherian commutative ring and let $M$ be a left $R$-module. Then
the set of zero divisors on $M$ is
$$ \bigcup_{\mathfrak p \in \operatorname{Ass}_R(M)}\mathfrak p. $$
If the Axiom of Choice also holds and $M$ is finitely generated, this is a finite union.

## Facts & Assumptions

**Given:** Dependent Choice, a Noetherian commutative ring $R$ and a left $R$-module $M$. The finite-union clause additionally assumes the Axiom of Choice ([[def-dependent-choice]], [[def-axiom-of-choice]]).

[L1] Under Dependent Choice, every zero divisor on $M$ lies in an associated prime of $M$ ([[lem-zero-divisor-annihilator-contained-in-associated-prime]]).

[L2] Under the additional Axiom of Choice, if $M$ is finitely generated, then $\operatorname{Ass}_R(M)$ is finite ([[thm-finiteness-of-associated-primes]]).

## Proof

**Proof technique:** direct.

1.1 If $x \in \mathfrak p$ for some $\mathfrak p \in \operatorname{Ass}_R(M)$, choose $m \neq 0$ in $M$ with $\operatorname{Ann}_R(m)=\mathfrak p$. Then $xm=0$, so $x$ is a zero divisor on $M$. [given, algebra]

1.2 Conversely, every zero divisor on $M$ lies in an associated prime by [L1]. [L1]

2.1 Steps 1.1 and 1.2 prove the union formula under Dependent Choice. Under the additional Axiom of Choice, when $M$ is finitely generated, fact [L2] makes that union finite. [L2, step 1.1, step 1.2] ∎
