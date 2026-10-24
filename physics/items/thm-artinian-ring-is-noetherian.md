---
id: thm-artinian-ring-is-noetherian
kind: theorem
title: "Every commutative Artinian ring is Noetherian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-noetherian-ring, thm-artinian-ring-primes-are-maximal, thm-artinian-ring-has-finitely-many-maximal-ideals, thm-nilradical-of-artinian-ring-is-nilpotent, cor-nilradical-as-intersection-of-primes, thm-chinese-remainder-theorem-for-comaximal-ideals, thm-quotient-is-field-iff-ideal-maximal, cor-product-of-two-noetherian-rings-is-noetherian, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, thm-chain-conditions-in-short-exact-sequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 16.6"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.53: Artinian rings"
      url: "https://stacks.math.columbia.edu/tag/00J4"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative Artinian ring. Then $R$ is Noetherian.

## Facts & Assumptions

**Given:** A commutative Artinian ring $R$ and the Axiom of Choice.

## Proof

**Proof technique:** direct.

1.1 Let $N=\operatorname{Nil}(R)$. By [[thm-artinian-ring-has-finitely-many-maximal-ideals]], the maximal ideals of $R$ are $\mathfrak m_1,\ldots,\mathfrak m_r$ for some $r\ge1$ unless $R=0$, in which case the conclusion is immediate. By [[cor-nilradical-as-intersection-of-primes]] and [[thm-artinian-ring-primes-are-maximal]], one has $N=\mathfrak m_1\cap\cdots\cap\mathfrak m_r$. Distinct maximal ideals are comaximal, so [[thm-chinese-remainder-theorem-for-comaximal-ideals]] gives $R/N\cong\prod_{i=1}^rR/\mathfrak m_i$. Each factor is a field by [[thm-quotient-is-field-iff-ideal-maximal]], and a field is Noetherian because its only ideals are $0$ and itself. Repeated use of [[cor-product-of-two-noetherian-rings-is-noetherian]] therefore shows that $B:=R/N$ is Noetherian. [given, cases, algebra]

2.1 By [[thm-nilradical-of-artinian-ring-is-nilpotent]], choose $t\ge1$ with $N^t=0$. For each $0\le j<t$, put $M_j=N^j/N^{j+1}$. Because $NM_j=0$, the action of $R$ on $M_j$ factors through $B=R/N$, so $M_j$ is a $B$-module. Transport the standard idempotents of the product ring in step 1.1 to elements $e_1,\ldots,e_r\in B$. Then $M_j=e_1M_j\oplus\cdots\oplus e_rM_j$, and each summand is naturally a vector space over the field $R/\mathfrak m_i$. If some $e_iM_j$ had no finite spanning set, recursively choose $v_1,v_2,\ldots$ with $v_{n+1}\notin\operatorname{span}(v_1,\ldots,v_n)$; then $\operatorname{span}(v_1,v_2,\ldots)\supsetneq\operatorname{span}(v_2,v_3,\ldots)\supsetneq\cdots$ would be a strict descending chain of $R$-submodules of $M_j$. But submodules of $M_j$ correspond to submodules of the ideal $N^j$ containing $N^{j+1}$, so this would give a strict descending chain of ideals in the Artinian ring $R$, impossible. Hence every $e_iM_j$ has a finite basis, and $M_j$ is finitely generated as a $B$-module. [step 1.1, given, choose, algebra]

3.1 Since $B$ is Noetherian, [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]] shows that each $M_j$ is Noetherian as a $B$-module, hence as an $R$-module. The filtration $0=N^t\subseteq N^{t-1}\subseteq\cdots\subseteq N\subseteq R$ has successive quotients $M_{t-1},\ldots,M_0$ and $R/N=B$, all Noetherian. Repeatedly applying [[thm-chain-conditions-in-short-exact-sequences]] to the short exact sequences $0\to N^{j+1}\to N^j\to M_j\to0$ shows that the regular module ${}_RR$ is Noetherian. Therefore [[def-noetherian-ring]] makes $R$ a Noetherian ring. [step 1.1, step 2.1, given, algebra] ∎
