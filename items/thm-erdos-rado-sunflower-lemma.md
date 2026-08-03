---
id: thm-erdos-rado-sunflower-lemma
kind: theorem
title: "Erdős-Rado sunflower lemma: more than $k!(r-1)^k$ distinct $k$-sets contain an $r$-petal sunflower"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-sunflower-maximal-disjoint-subfamily, def-sunflower, def-factorial-and-falling-factorial, def-nat-power, thm-the-strong-pigeonhole-principle, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement

Let $k\ge0$ and $r\ge2$. Every finite family $\mathcal F$ of distinct
$k$-element sets satisfying

$$|\mathcal F|>k!(r-1)^k$$

contains an $r$-petal sunflower.

## Facts & Assumptions

**Given:** Natural numbers $k\ge0$ and $r\ge2$, and a finite family $\mathcal F$ of distinct $k$-sets with $|\mathcal F|>k!(r-1)^k$.

[L1] For $k\ge1$, a maximal disjoint subfamily either contains $r$ members, forming an empty-core sunflower, or its union is a transversal of size at most $k(r-1)$ ([[lem-sunflower-maximal-disjoint-subfamily]]).

[F1] A sunflower is a family of distinct sets with one common pairwise intersection ([[def-sunflower]]).

[L2] If $f:A\to B$ is a function between finite sets and $|A|>q|B|$, then some fibre has more than $q$ elements ([[thm-the-strong-pigeonhole-principle]]).

[L3] $0!=1$ and $k!=k(k-1)!$ for $k\ge1$ ([[def-factorial-and-falling-factorial]]). Natural powers satisfy $m^0=1$ and $m^{\sigma(q)}=m^q m$ ([[def-nat-power]]); induction on $\mathbb N$ is valid ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 For $k=0$, there is only one $0$-element set, so no family of distinct $0$-sets satisfies $|\mathcal F|>0!(r-1)^0=1$. The implication is therefore true. [base, L3]

1.2 Assume the assertion for $(k-1)$-element sets, where $k\ge1$, and let $\mathcal F$ satisfy the displayed bound for $k$. [ih, L3]

2.1 Choose a maximal pairwise disjoint subfamily $\mathcal G$. If $|\mathcal G|\ge r$, [L1] already supplies the required sunflower. Otherwise $X=\bigcup\mathcal G$ meets every member of $\mathcal F$ and $|X|\le k(r-1)$. [step 1.2, L1, choose]

3.1 In the second case, let $\mathcal R=\{(F,x):F\in\mathcal F,\ x\in F\cap X\}$ and project $\mathcal R$ to $X$. Every $F\in\mathcal F$ contributes at least one incidence, so $|\mathcal R|\ge|\mathcal F|$. Set $q=(k-1)!(r-1)^{k-1}$. Since $|\mathcal F|>k!(r-1)^k=k(r-1)q$ and $|X|\le k(r-1)$, we have $|\mathcal R|>q|X|$. By [L2], some $x\in X$ belongs to more than $q$ members of $\mathcal F$. [step 2.1, L2, L3]

4.1 Remove $x$ from those members. The resulting sets are distinct $(k-1)$-sets, so the induction hypothesis gives $r$ of them forming a sunflower with core $C$. Restoring $x$ gives $r$ original members whose pairwise intersections are all $C\cup\{x\}$. [step 3.1, ih, F1]

5.1 The first case in step 2.1 and the construction in step 4.1 cover all possibilities, so $\mathcal F$ contains an $r$-petal sunflower. [step 2.1, step 4.1, discharge-induction] ∎
