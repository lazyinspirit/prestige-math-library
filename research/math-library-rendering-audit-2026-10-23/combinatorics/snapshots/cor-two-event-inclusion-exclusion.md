---
id: cor-two-event-inclusion-exclusion
kind: corollary
title: "Two-event inclusion-exclusion: $\\mathbb P(A\\cup B)=\\mathbb P(A)+\\mathbb P(B)-\\mathbb P(A\\cap B)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-probability-basic-laws, thm-finite-additivity-of-probability]
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
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Theorem 1.4"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.3.3"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

For events $A$ and $B$ in a finite probability space,
$$\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(A\cap B).$$

## Facts & Assumptions

**Given:** Events $A$ and $B$ in a finite probability space.

[L1] If $C\subseteq D$, then $\mathbb P(D\setminus C)=\mathbb P(D)-\mathbb P(C)$ ([[lem-finite-probability-basic-laws]]).

[L2] Probability is additive on every finite pairwise-disjoint family of events ([[thm-finite-additivity-of-probability]]).

## Proof

**Proof technique:** direct.

1.1 The sets $A$ and $B\setminus A$ are disjoint and have union $A\cup B$, so $\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B\setminus A)$. [L2]

1.2 Since $B\setminus A=B\setminus(A\cap B)$, one has $\mathbb P(B\setminus A)=\mathbb P(B)-\mathbb P(A\cap B)$. [L1]

2.1 Substitution of step 1.2 into step 1.1 gives the formula. [step 1.1, step 1.2, algebra] ∎
