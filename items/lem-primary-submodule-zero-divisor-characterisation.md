---
id: lem-primary-submodule-zero-divisor-characterisation
kind: lemma
title: "Primary submodules are exactly quotients with nilpotent zero divisors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-primary-submodule-and-primary-ideal, def-quotient-module]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Definition 19.1 and Lemma 19.5"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §18"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Statement

Let $R$ be a commutative ring, let $M$ be a left $R$-module, and let
$Q \subsetneq M$ be a proper submodule. Then $Q$ is primary if and only if the
following classical condition holds:

for every $a \in R$ and every $m \in M$, if $am \in Q$ and $m \notin Q$, then
there exists $n \ge 1$ such that
$$
a^nM\subseteq Q.
$$

## Facts & Assumptions

**Given:** A commutative ring $R$, a left $R$-module $M$, and a proper submodule $Q \subsetneq M$.

[L1] A proper submodule $Q$ is primary exactly when every zero divisor on $M/Q$ acts nilpotently on $M/Q$ ([[def-primary-submodule-and-primary-ideal]]).

[L2] The quotient module $M/Q$ consists of cosets $m+Q$ ([[def-quotient-module]]).

## Proof

**Proof technique:** direct.

1.1 Assume $Q$ is primary, and let $am \in Q$ with $m \notin Q$. Then $m+Q \neq 0$ in $M/Q$ by [L2], while $a(m+Q)=am+Q=0+Q$. Thus $a$ is a zero divisor on $M/Q$. By [L1], some $n \ge 1$ satisfies $a^n(M/Q)=0$, which is equivalent to $a^nM\subseteq Q$. [L1, L2, given, algebra]

1.2 Conversely, assume the displayed classical condition. Let $a$ be a zero divisor on $M/Q$. Then there exists $m+Q \neq 0$ with $a(m+Q)=0+Q$. By [L2], this means $m \notin Q$ and $am \in Q$. The hypothesis gives $n \ge 1$ with $a^nM\subseteq Q$, equivalently $a^n(M/Q)=0$. Hence every zero divisor on $M/Q$ acts nilpotently, so $Q$ is primary by [L1]. [L1, L2, given]

2.1 Steps 1.1 and 1.2 prove the equivalence. [step 1.1, step 1.2] ∎
