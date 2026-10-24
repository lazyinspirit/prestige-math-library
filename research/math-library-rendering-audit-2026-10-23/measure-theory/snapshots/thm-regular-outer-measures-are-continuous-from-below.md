---
id: thm-regular-outer-measures-are-continuous-from-below
kind: theorem
title: "Assuming countable choice, regular outer measures are continuous from below on all subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-regular-outer-measure-and-measurable-hull, thm-caratheodory-outer-measure-theorem, thm-continuity-from-below-for-measures, def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Exercises 18 and 20 in Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu^*$ be a regular outer measure on $X$, and let $(E_n)_{n\in\mathbb N}$ be increasing with $E=\bigcup_nE_n$. Then

$$\mu^*(E)=\sup_{n\in\mathbb N}\mu^*(E_n).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice ([[def-countable-choice]]), a regular outer measure $\mu^*$, and an increasing sequence $(E_n)$ with union $E$.

[F1] A **measurable hull** of $E$ is a Carathéodory measurable set $H\supseteq E$ with $\mu^*(H)=\mu^*(E)$; the outer measure is **regular** when every subset has a measurable hull. ([[def-regular-outer-measure-and-measurable-hull]])

[L1] If $(E_n)_{n\in\mathbb N}$ is an increasing sequence of measurable sets for a measure $\mu$, then $\mu(\bigcup_nE_n)=\sup_n\mu(E_n)$, with no finiteness hypothesis. ([[thm-continuity-from-below-for-measures]])

[L2] For every outer measure, the Carathéodory measurable subsets form a sigma-algebra, and the restriction of the outer measure to it is a complete measure. ([[thm-caratheodory-outer-measure-theorem]])

## Proof

**Proof technique:** direct.

1.1 If some $\mu^*(E_n)=+\infty$, monotonicity gives the result immediately. Otherwise countable choice and [F1] give measurable hulls $H_n\supseteq E_n$ with $\mu^*(H_n)=\mu^*(E_n)$; put $G_n:=\bigcap_{k\ge n}H_k$. Sigma-algebra closure in [L2] makes each $G_n$ measurable, while $G_n\subseteq G_{n+1}$ and $E_n\subseteq G_n\subseteq H_n$, so monotonicity makes $\mu^*(G_n)=\mu^*(E_n)$. [F1, L2, given, choose]

2.1 Let $G=\bigcup_nG_n$. Since $E_n\subseteq G_n$, one has $E\subseteq G$, while [L1] for the Carathéodory restriction gives $\mu^*(G)=\sup_n\mu^*(G_n)=\sup_n\mu^*(E_n)$; hence monotonicity gives $\mu^*(E)\le\sup_n\mu^*(E_n)$, and the reverse inequality follows from $E_n\subseteq E$. [step 1.1, L1, algebra] ∎
