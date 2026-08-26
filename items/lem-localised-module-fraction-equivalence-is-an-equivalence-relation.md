---
id: lem-localised-module-fraction-equivalence-is-an-equivalence-relation
kind: lemma
title: "The module-fraction relation is an equivalence relation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-localisation-of-a-module]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Section 12"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

For a commutative ring $R$, a multiplicative subset $S \subseteq R$, and a left $R$-module $M$, the relation on $M \times S$ from [[def-localisation-of-a-module]] is an equivalence relation.

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S \subseteq R$, and a left $R$-module $M$.

[L1] In the localisation of a module, $(m,s) \sim (n,t)$ means that $u(tm-sn)=0$ for some $u \in S$, and $1 \in S$ while products of elements of $S$ stay in $S$ ([[def-localisation-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 Reflexivity holds because $1(sm-sm)=0$, so $(m,s) \sim (m,s)$ for every $(m,s) \in M \times S$. [L1, algebra]

1.2 Symmetry holds because $u(tm-sn)=0$ implies $u(sn-tm)=0$, so $(m,s) \sim (n,t)$ implies $(n,t) \sim (m,s)$. [L1, algebra]

1.3 If $(m,s) \sim (n,t)$ via $u$ and $(n,t) \sim (p,v)$ via $w$, then $uwv(tm-sn)=0$ and uws$(vn-tp)=0$; adding these equalities gives $uwt(vm-sp)=0$, so $(m,s) \sim (p,v)$. [L1, algebra]

2.1 Steps 1.1, 1.2, and 1.3 prove that $\sim$ is an equivalence relation. [step 1.1, step 1.2, step 1.3] ∎
