---
id: lem-countable-intersections-of-club-subsets-of-omega-one-are-club
kind: lemma
title: "Countable intersections of club subsets of omega_1 are club"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, def-first-uncountable-ordinal, def-order-topology-on-an-ordinal, thm-countable-subsets-of-omega-one-are-bounded]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. If $C_n\subseteq\omega_1$ is closed and unbounded for every $n\in\mathbb N$, then $\bigcap_nC_n$ is closed and unbounded in $\omega_1$.

## Facts & Assumptions

**Given:** Each $C_n$ is closed and unbounded, and $\mathrm{AC}_\omega$ holds.

[L1] Under $\mathrm{AC}_\omega$, every countable subset of $\omega_1$ is bounded below $\omega_1$. ([[thm-countable-subsets-of-omega-one-are-bounded]])

## Proof

**Proof technique:** diagonal construction.

1.1 Finite intersections of clubs are club: closedness is immediate, and for two clubs one alternately chooses larger points in them; the supremum of the resulting omega-sequence is below $\omega_1$ by [L1] and belongs to both by closedness. Induction handles finitely many. [L1]

2.1 Given $\alpha<\omega_1$, recursively choose $\beta_{k+1}\in\bigcap_{n\le k}C_n$ with $\beta_{k+1}>\beta_k$, starting above $\alpha$; step 1.1 supplies such a point. Let $\delta=\sup_k\beta_k<\omega_1$ by [L1]. For each fixed $n$, the tail $(\beta_k)_{k>n}$ lies in $C_n$, so closedness gives $\delta\in C_n$. Also $\delta>\alpha$. [step 1.1, L1]

3.1 Thus the intersection is unbounded. It is closed as an arbitrary intersection of closed sets, hence is club. [step 2.1] ∎
