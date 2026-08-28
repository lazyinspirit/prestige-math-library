---
id: lem-noetherian-ring-maximal-element-annihilator-exists
kind: lemma
title: "A nonzero module over a Noetherian ring has a maximal element annihilator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dependent-choice, def-noetherian-ring, thm-noetherian-ring-ideal-characterisations, def-annihilator-and-torsion-of-a-module]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (17.12)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.63: Associated primes"
      url: "https://stacks.math.columbia.edu/tag/00L9"
---

## Statement

Assume Dependent Choice.

Let $R$ be a Noetherian commutative ring and let $M$ be a nonzero left
$R$-module. Then there exists a nonzero element $m \in M$ such that
$\operatorname{Ann}_R(m)$ is maximal, under inclusion, among the annihilators of
nonzero elements of $M$.

## Facts & Assumptions

**Given:** Dependent Choice, a Noetherian commutative ring $R$, and a nonzero left $R$-module $M$.

[L1] Assuming Dependent Choice, in a Noetherian commutative ring every nonempty set of ideals has a maximal member ([[thm-noetherian-ring-ideal-characterisations]]).

[L2] For $m \in M$, the annihilator is the set $\operatorname{Ann}_R(m)=\{r\in R:rm=0\}$ ([[def-annihilator-and-torsion-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 For every $m\in M$, the set $\operatorname{Ann}_R(m)$ is an ideal: it contains $0$, is closed under subtraction, and $a\in\operatorname{Ann}_R(m)$ implies $ra\in\operatorname{Ann}_R(m)$ for every $r\in R$. Because $M \neq 0$, choose $m_0 \in M$ with $m_0 \neq 0$. Then $$ \Sigma=\{\operatorname{Ann}_R(m) : m \in M,\ m \neq 0\} $$ is a nonempty set of ideals of $R$. [L2, given, choose, algebra]

2.1 By [L1], the nonempty set $\Sigma$ has a maximal member. Thus some nonzero $m \in M$ satisfies that $\operatorname{Ann}_R(m)$ is maximal among the annihilators of nonzero elements of $M$. [L1, step 1.1]

3.1 This is exactly the required conclusion. [step 2.1] ∎
