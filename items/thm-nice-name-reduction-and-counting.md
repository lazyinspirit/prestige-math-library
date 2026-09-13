---
id: thm-nice-name-reduction-and-counting
kind: theorem
title: Nice-name reduction and the ccc counting bound
status: published
origin: pipeline
deps: [def-nice-name-for-a-subset, lem-forcing-monotonicity-density-and-decision, def-forcing-relation-for-atomic-formulas, def-cardinal-arithmetic, cor-cardinal-absorption, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, proof of Theorem 3.31", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, every $P$-name forced to be a subset of a ground-model set $A$ is forced equal to a nice name. If $P$ is ccc, $|P|=\mu$ is infinite, and $|A|=\lambda$, then there are at most $(\mu^{\aleph_0})^\lambda$ nice names for subsets of $A$; in particular at most $\mu^{\aleph_0}$ nice names for reals.

## Facts & Assumptions

**Given:** AC, $p\Vdash\dot x\subseteq\check A$, and the additional cardinal hypotheses for the count.

[F1] [[def-nice-name-for-a-subset]] gives the target form.

[F2] [[lem-forcing-monotonicity-density-and-decision]] supplies dense decisions, persistence, and density closure.

[F3] [[def-cardinal-arithmetic]] and [[cor-cardinal-absorption]] provide the displayed exponent laws.

[F4] [[def-forcing-relation-for-atomic-formulas]] supplies the membership and extensional equality clauses for names.

## Proof

1.1 For every $a\in A$, choose a maximal antichain $A_a$ below $p$ consisting of conditions deciding $\check a\in\dot x$, retain its positive members $B_a$, and let $\dot y=\{\langle\check a,q\rangle:a\in A,\ q\in B_a\}$. Fix $q\le p$ and $a\in A$. Maximality gives a common extension $r\le q,s$ for some $s\in A_a$. If $s$ is positive, persistence makes $r$ force membership in $\dot x$, while the coefficient $s\in B_a$ makes $r$ force membership in $\dot y$ by F4. If $s$ is negative, persistence makes $r$ force nonmembership in $\dot x$, and incompatibility with every member of $B_a$ leaves no extension of $r$ forcing membership in $\dot y$, so the negation clause makes $r$ force nonmembership there. Thus conditions agreeing on the membership of each ground element are dense below $p$. Since $p$ forces $\dot x\subseteq\check A$ and the displayed coefficients make $\dot y$ a name for a subset of $\check A$, density closure and the two extensional clauses in F4 give $p\Vdash\dot x=\dot y$. The simultaneous maximal-antichain choice is the first use of AC. [F1, F2, F4]

2.1 Under ccc, each $A_a$ is countable. There are at most $\mu^{\aleph_0}$ countable subsets of $P$, so a nice name is coded by a $\lambda$-sequence of such subsets and their number is at most $(\mu^{\aleph_0})^\lambda$. For $A=\omega$, cardinal exponentiation gives $(\mu^{\aleph_0})^{\aleph_0}=\mu^{\aleph_0}$. These counts use AC to identify all sets with cardinals. [F3] ∎
