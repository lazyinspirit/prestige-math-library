---
id: lem-zero-divisor-annihilator-contained-in-associated-prime
kind: lemma
title: "A zero divisor is contained in an associated prime"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-associated-prime-of-a-module, thm-existence-of-associated-primes]
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
    - title: "The Stacks Project, Lemma 10.63.9"
      url: "https://stacks.math.columbia.edu/tag/00L9"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (17.15)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Statement

Let $R$ be a Noetherian commutative ring, let $M$ be a left $R$-module, and let
$x \in R$ be a zero divisor on $M$. Then $x$ belongs to some prime ideal of
$\operatorname{Ass}_R(M)$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, a left $R$-module $M$, and an element $x \in R$ that is a zero divisor on $M$.

[L1] A prime ideal is associated to a module exactly when it is the annihilator of one of the module's elements ([[def-associated-prime-of-a-module]]).

[L2] Every nonzero module over a Noetherian ring has an associated prime ([[thm-existence-of-associated-primes]]).

## Proof

**Proof technique:** direct.

1.1 Because $x$ is a zero divisor on $M$, the set $$ N=\{m \in M : xm=0\} $$ is nonzero. It is a submodule: it contains $0$, is closed under subtraction, and $xm=0$ implies $x(rm)=r(xm)=0$ for every $r\in R$. [given, algebra]

2.1 By [L2], the nonzero module $N$ has an associated prime. By [L1], choose $m \in N$ such that $\mathfrak p=\operatorname{Ann}_R(m)$ is prime. Since $m \in N$, one has $xm=0$, so $x \in \operatorname{Ann}_R(m)=\mathfrak p$. The same equality and [L1] show $\mathfrak p \in \operatorname{Ass}_R(M)$ as well, because $m$ is also an element of $M$. [L1, L2, step 1.1, choose, algebra]

3.1 Therefore $x$ lies in an associated prime of $M$. [step 2.1] ∎
