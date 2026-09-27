---
id: thm-first-uniqueness-theorem-primary-decomposition
kind: theorem
title: "The radicals in a minimal primary decomposition are intrinsic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-associated-primes-from-a-minimal-primary-decomposition, def-axiom-of-choice]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-maintenance-receipts.jsonl (thm-first-uniqueness-theorem-primary-decomposition). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (18.20)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 19.10"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, and let $N \subseteq M$. Let
$$N=Q_1\cap\cdots\cap Q_r$$
be a minimal primary decomposition in which each $Q_i$ is
$\mathfrak p_i$-primary for a prime ideal $\mathfrak p_i$. Then the set of
component radicals is uniquely determined by $M/N$ and equals
$$ \operatorname{Ass}_R(M/N). $$

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]); a Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, a submodule $N \subseteq M$, and a minimal primary decomposition $N=Q_1\cap\cdots\cap Q_r$ with each $Q_i$ $\mathfrak p_i$-primary for a prime ideal $\mathfrak p_i$.

[L1] Under the Axiom of Choice, in the Noetherian finite-module setting, if a minimal primary decomposition has each component $\mathfrak p_i$-primary for a prime ideal $\mathfrak p_i$, then its radicals are exactly the associated primes of the quotient ([[lem-associated-primes-from-a-minimal-primary-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 For the given minimal primary decomposition, [L1] gives $$ \{\mathfrak p_1,\dots,\mathfrak p_r\}=\operatorname{Ass}_R(M/N). $$ [L1, given]

2.1 The right-hand side depends only on the quotient $M/N$, not on the chosen decomposition. Hence the set of component radicals is intrinsic. [step 1.1] ∎
