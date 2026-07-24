---
id: lem-nat-add-cancellative
kind: lemma
title: "Addition is cancellative"
status: published
origin: session
deps: [def-nat-addition, thm-omega-is-peano-system, thm-induction-principle]
aliases: []
landmark: false
short: "$m+k=n+k\\Rightarrow m=n$"
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
proof_strategy: induction
---

## Statement

For all $m, n, k \in \mathbb{N}$: if $m + k = n + k$ then $m = n$.

## Facts & Assumptions

**Given:** Addition ([[def-nat-addition]]).

[L1] $\sigma$ is injective (P2) ([[thm-omega-is-peano-system]]).

[L2] Induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base $k = 0$: if $m + 0 = n + 0$ then $m = n$, since $m + 0 = m$ and $n + 0 = n$. [base]

1.2 Inductive hypothesis: for all $m, n$, $m + k = n + k \Rightarrow m = n$. [ih]

2.1 Step: suppose $m + \sigma(k) = n + \sigma(k)$; then $\sigma(m + k) = \sigma(n + k)$ by $m + \sigma(j) = \sigma(m + j)$, so $m + k = n + k$ by injectivity [L1], hence $m = n$ by the hypothesis. [step 1.2, L1]

3.1 By induction [L2], cancellation holds for all $k$, hence for all $m, n, k \in \mathbb{N}$. [step 1.1, step 2.1, discharge-induction] ∎
