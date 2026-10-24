---
id: thm-asymmetric-lovasz-local-lemma
kind: theorem
title: "The asymmetric Lovász Local Lemma for finitely many events"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-local-lemma-conditional-probability-bound, thm-conditional-probability-multiplication-and-chain-rules, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Theorem 5.1.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Theorem 5.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

Let $D$ be a dependency digraph for finite events $(A_i)_{i\in I}$. If there are reals $0\le x_i<1$ such that
$$\mathbb P(A_i)\le x_i\prod_{j\in N_D^+(i)}(1-x_j)$$
for every $i$, then
$$\mathbb P\!\left(\bigcap_{i\in I}A_i^c\right)\ge\prod_{i\in I}(1-x_i)>0.$$

## Facts & Assumptions

**Given:** Events, a dependency digraph, and parameters satisfying the Statement.

[L1] Under these hypotheses, conditioning $A_i$ on any positive-probability intersection of other event complements gives probability at most $x_i$ ([[lem-local-lemma-conditional-probability-bound]]).

[L2] The finite chain rule factors the probability of an intersection through successive positive conditional probabilities ([[thm-conditional-probability-multiplication-and-chain-rules]]).

[L3] Multiplication by a positive real preserves inequalities ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** induction.

1.1 For an empty event family, the intersection is the whole space and both empty products equal $1$. [base]

1.2 Order a nonempty family as $i_1,\ldots,i_m$ and assume the first $r-1$ complements have intersection probability at least $\prod_{q<r}(1-x_{i_q})>0$. [ih, choose]

2.1 By [L1], the conditional probability of $A_{i_r}$ given those complements is at most $x_{i_r}$, so the conditional probability of $A_{i_r}^c$ is at least $1-x_{i_r}>0$. [step 1.2, L1]

3.1 Multiplying by the positive prefix probability gives $\mathbb P(\bigcap_{q\le r}A_{i_q}^c)\ge\prod_{q\le r}(1-x_{i_q})>0$. [step 1.2, step 2.1, L2, L3, algebra]

4.1 Induction through $r=m$ proves both the lower bound and positivity. [step 1.1, step 3.1, discharge-induction] ∎
