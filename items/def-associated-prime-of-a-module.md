---
id: def-associated-prime-of-a-module
kind: definition
title: "Associated primes of a module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-annihilator-and-torsion-of-a-module, def-prime-and-maximal-ideals]
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Definition (17.1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.63: Associated primes"
      url: "https://stacks.math.columbia.edu/tag/00L9"
---

## Definition

Let $R$ be a commutative ring and let $M$ be a left $R$-module. A prime ideal
$\mathfrak p \subsetneq R$ is **associated to $M$** when
$$ \mathfrak p=\operatorname{Ann}_R(m) $$
for some element $m \in M$. The set of associated primes of $M$ is denoted
$$ \operatorname{Ass}_R(M). $$
