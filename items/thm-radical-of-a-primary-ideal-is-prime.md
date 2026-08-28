---
id: thm-radical-of-a-primary-ideal-is-prime
kind: theorem
title: "The radical of a primary ideal is prime"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-primary-submodule-and-primary-ideal, def-radical-of-an-ideal, def-prime-and-maximal-ideals]
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
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 19.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (18.4)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Statement

Let $R$ be a commutative ring and let $Q \subsetneq R$ be a primary ideal. Then
$\sqrt{Q}$ is a prime ideal. In particular, $Q$ is $\sqrt{Q}$-primary.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a primary ideal $Q \subsetneq R$.

[L1] A primary ideal is a proper submodule whose quotient $R/Q$ has the property that every zero divisor acts nilpotently ([[def-primary-submodule-and-primary-ideal]]).

[L2] The radical $\sqrt{Q}$ consists of those $a \in R$ for which $a^n \in Q$ for some $n \ge 1$ ([[def-radical-of-an-ideal]]).

[L3] A prime ideal is a proper ideal $P$ such that $ab \in P$ implies $a \in P$ or $b \in P$ ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 Let $ab \in \sqrt{Q}$ and assume $b \notin \sqrt{Q}$. By [L2], some $n \ge 1$ has $(ab)^n \in Q$, so in the quotient ring $A=R/Q$ one has $$ (\bar a\bar b)^n=\bar a^n\bar b^n=0. $$ Because $b \notin \sqrt{Q}$, the class $\bar b$ is not nilpotent in $A$, so $\bar b^n \neq 0$. Thus $\bar a^n$ kills the nonzero element $\bar b^n$, which means that $\bar a^n$ is a zero divisor on $A$. [L1, L2, given, algebra]

2.1 Since $Q$ is primary, [L1] makes every zero divisor on $A$ nilpotent. Therefore $\bar a^n$ is nilpotent, so $\bar a$ is nilpotent and hence $a \in \sqrt{Q}$ by [L2]. Thus $ab \in \sqrt{Q}$ and $b \notin \sqrt{Q}$ imply $a \in \sqrt{Q}$, which is the primality condition from [L3]. [L1, L2, L3, step 1.1]

3.1 Therefore $\sqrt{Q}$ is prime, and $Q$ is $\sqrt{Q}$-primary by definition. [L1, L2, step 2.1] ∎
