---
id: lem-height-converse-parameter-selection
kind: lemma
title: "Select generators witnessing the converse height theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-finite-prime-avoidance, thm-noetherian-ring-has-finitely-many-minimal-primes, thm-krull-principal-ideal-theorem, thm-krull-height-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §21"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Melvin Hochster, Dimension theory and systems of parameters"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Dim.pdf"
pipeline_run: null
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-02-height-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---


## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring and let $\mathfrak a\subsetneq R$ be a proper ideal of height $r<\infty$. Then there exist elements $a_1,\ldots,a_r\in\mathfrak a$ such that for every $1\le i\le r$ the ideal $(a_1,\ldots,a_i)$ has height exactly $i$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian commutative ring $R$, a proper ideal $\mathfrak a\subsetneq R$, and an integer $r=\operatorname{ht}(\mathfrak a)<\infty$.

[L1] A Noetherian ring has only finitely many minimal primes over a given ideal ([[thm-noetherian-ring-has-finitely-many-minimal-primes]]).

[L2] Finite prime avoidance lets us choose an element outside finitely many forbidden prime ideals ([[lem-finite-prime-avoidance]]).

[L3] Under the Axiom of Choice, the principal ideal theorem and the height theorem bound the height of a prime minimal over $i$ chosen generators by $i$ ([[thm-krull-principal-ideal-theorem]], [[thm-krull-height-theorem]]).

## Proof

**Proof technique:** induction on the target height.

1.1 If $r=0$, the empty list works. [base, given]

1.2 Assume $r\ge1$. The prime ideals of height $0$ are exactly the minimal primes of $R$, hence are finite by [L1]. None of them contains $\mathfrak a$, because $\operatorname{ht}(\mathfrak a)=r\ge1$. Therefore [L2] provides $a_1\in\mathfrak a$ outside every height-zero prime. Any prime minimal over $(a_1)$ must then have height at least $1$, while [L3] gives height at most $1$. Thus $(a_1)$ has height exactly $1$. [L1, L2, L3, given]

2.1 Suppose $1<i\le r$ and $a_1,\ldots,a_{i-1}\in\mathfrak a$ have already been chosen so that $J=(a_1,\ldots,a_{i-1})$ has height exactly $i-1$. The minimal primes over $J$ are finite by [L1]. Among them, collect those of height $i-1$; none can contain $\mathfrak a$, because $\mathfrak a$ has height $r\ge i$. By [L2], choose $a_i\in\mathfrak a$ outside all of those primes. Any prime $\mathfrak q$ minimal over $J+(a_i)$ contains some minimal prime $\mathfrak p$ over $J$. If $\operatorname{ht}\mathfrak q\le i-1$, then $\operatorname{ht}\mathfrak p\ge i-1$ and strict containment $\mathfrak p\subsetneq\mathfrak q$ would force $\operatorname{ht}\mathfrak q\ge i$; hence $\mathfrak q=\mathfrak p$ is one of the excluded height-$(i-1)$ primes, impossible since it contains $a_i$. Thus every such $\mathfrak q$ has height at least $i$. By [L3] it has height at most $i$, so $J+(a_i)$ has height exactly $i$. [L1, L2, L3, step 1.2, ih]

3.1 Steps 1.1, 1.2, and 2.1 build the required list $a_1,\ldots,a_r\in\mathfrak a$. [step 1.1, step 1.2, step 2.1, discharge-induction] ∎
