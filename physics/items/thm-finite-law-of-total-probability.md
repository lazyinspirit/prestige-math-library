---
id: thm-finite-law-of-total-probability
kind: theorem
title: "The law of total probability for a finite partition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-probability-basic-laws, thm-finite-additivity-of-probability, thm-conditional-probability-multiplication-and-chain-rules]
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
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Theorem 1.3 and equation (4.3)"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.4.2"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

Let $B_0,\ldots,B_{n-1}$ be a finite partition of $\Omega$ with $\mathbb P(B_i)>0$ for every $i<n$. Then every event $A$ satisfies
$$\mathbb P(A)=\sum_{i<n}\mathbb P(A\mid B_i)\mathbb P(B_i).$$
Partition cells of probability zero may instead be omitted, since their intersections with $A$ also have probability zero.

## Facts & Assumptions

**Given:** An event $A$ and a finite partition $(B_i)_{i<n}$ as in the Statement.

[L1] Probability is additive on a finite pairwise-disjoint family ([[thm-finite-additivity-of-probability]]).

[L2] If $\mathbb P(B)>0$, then $\mathbb P(A\cap B)=\mathbb P(A\mid B)\mathbb P(B)$ ([[thm-conditional-probability-multiplication-and-chain-rules]]).

[L3] Probability is monotone under event inclusion ([[lem-finite-probability-basic-laws]]).

## Proof

**Proof technique:** direct.

1.1 The events $A\cap B_i$ are pairwise disjoint and have union $A$, so $\mathbb P(A)=\sum_{i<n}\mathbb P(A\cap B_i)$. [L1]

1.2 Each positive-probability cell satisfies $\mathbb P(A\cap B_i)=\mathbb P(A\mid B_i)\mathbb P(B_i)$. [L2]

2.1 Substitution gives the displayed formula. If $\mathbb P(B_i)=0$, [L3] gives $0\le\mathbb P(A\cap B_i)\le\mathbb P(B_i)=0$, so deleting that cell changes neither side of the unconditioned decomposition. [step 1.1, step 1.2, L3, algebra] ∎
