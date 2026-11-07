---
dependency_level: 0
id: lem-bls-nonnegative-spectral-excess-excludes-exceptional-eigenvalues
kind: lemma
title: Nonnegative spectral excess excludes an exceptional eigenvalue
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-complete-ordered-real-field
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Local bounded reconstruction of the BLS/BS07/Kim method
    url: https://arxiv.org/pdf/1803.06016v2
    locator: Section5 strict excess-trace criterion; abstract nonnegative-sum proof
---

## Statement

Let $m>0$, $b\in\mathbb R$ and $n\ge0$. Let a finite or countable spectral list have nonnegative real weights and nonnegative test values, with convergent weighted sum $S$. Suppose a specified known sublist has total contribution at least $nb$. Set $Q=(S-nb)/m$. Suppose any unaccounted exceptional eigenvalue, if present, contributes total weight at least $m$ at a test value at least one, disjoint from the known sublist. Then the presence of such an eigenvalue implies $Q\ge1$. Consequently, if an interval $[L,U]$ contains $Q$ and $U<1$, no such eigenvalue is present. The statement does not establish the trace identity, the lower bound for known contributions, or the spectral multiplicity hypothesis.

## Facts & Assumptions

**Given:** The nonnegative weighted spectral data and all stated contribution hypotheses, and for the last assertion an interval containing $Q$.

[F1] The real numbers form a complete ordered field. [[def-complete-ordered-real-field]]

## Proof

1.1 If an unaccounted exceptional eigenvalue is present, take its whole specified weighted contribution, disjoint from the known sublist. By hypothesis its value is at least $m$. The known part is at least $nb$, and every remaining summand is nonnegative. For a countable sum, apply these inequalities first to finite partial sums and then to their assumed limit; equivalently remove the specified nonnegative subseries. Thus $S\ge nb+m$. Division by $m>0$ gives $Q\ge1$. [given, F1, algebra]

2.1 If also $Q\in[L,U]$ and $U<1$, then $Q\le U<1$, contradicting step 1.1. This proves the exclusion. No assumption is made that any interval or spectral list arose from a completed computation. An empty exceptional sublist is exactly the excluded alternative; an empty known sublist is permitted whenever its required lower bound holds. [given, F1, step 1.1, algebra] ∎
