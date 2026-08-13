---
id: prop-units-in-a-localisation
kind: proposition
title: 'A fraction $r/s$ is a unit in $S^{-1}R$ exactly when $ar\in S$ for some $a\in R$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-localisation-zero-equality-and-kernel-criteria, thm-localisation-equivalence-and-ring-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The CRing Project, Chapter 13, Section 13.1'
      url: 'https://math.colorado.edu/topology/cringproject.pdf'
pipeline_run: frontier-12
---

## Statement

Let $R$ be a commutative ring and $S\subseteq R$ multiplicative. A fraction $r/s\in S^{-1}R$ is a unit if and only if $ar\in S$ for some $a\in R$.

## Facts & Assumptions

**Given:** A fraction $r/s$ in $S^{-1}R$.

[F1] Fractions satisfy the usual multiplication law, and equality is detected by an annihilating element of $S$ ([[thm-localisation-equivalence-and-ring-laws]], [[prop-localisation-zero-equality-and-kernel-criteria]]).

## Proof

**Proof technique:** direct.

1.1 If $ar\in S$, then $as/(ar)$ is a valid fraction and $(r/s)(as/(ar))=ars/(sar)=1$ by [F1]. Hence $r/s$ is a unit. [F1]

2.1 Conversely, suppose $(r/s)(b/t)=1$. Then $rb/(st)=1$, so [F1] supplies $u\in S$ with $u(rb-st)=0$. Therefore $(ub)r=ust\in S$, because $u,s,t\in S$. Taking $a=ub$ proves the criterion. [F1] ∎
