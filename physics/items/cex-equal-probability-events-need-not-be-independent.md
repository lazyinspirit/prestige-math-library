---
id: cex-equal-probability-events-need-not-be-independent
kind: counterexample
title: "Events with the same probability need not be independent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-finite-probability-space, def-pairwise-and-mutual-independence-of-events]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
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
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.4.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement refuted

If two events have the same probability, then they are independent.

## Facts & Assumptions

**Given:** The uniform probability space on $\Omega=\{1,2,3\}$.

[L1] Uniform event probability is event cardinality divided by $|\Omega|$ ([[def-uniform-finite-probability-space]]).

[L2] Independence requires $\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B)$ ([[def-pairwise-and-mutual-independence-of-events]]).

## Counterexample

**Proof technique:** constructive.

1.1 Let $A=\{1,2\}$ and $B=\{2,3\}$. Then $\mathbb P(A)=\mathbb P(B)=2/3$. [L1, construct]

2.1 Their intersection is $\{2\}$, so $\mathbb P(A\cap B)=1/3\ne4/9=\mathbb P(A)\mathbb P(B)$. [step 1.1, L1, algebra]

3.1 Thus equal event probabilities do not imply independence. [step 2.1, L2, discharge-construct] ∎
