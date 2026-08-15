---
id: ex-slicing-a-regular-pair-with-explicit-parameters
kind: example
title: "A $0.01$-regular pair restricted to two half-sized subsets is $0.02$-regular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-slicing-lemma-for-regular-pairs]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Exercise 2.1.4"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

If $(X,Y)$ is $0.01$-regular and $X'\subseteq X$, $Y'\subseteq Y$ satisfy $|X'|\ge|X|/2$ and $|Y'|\ge|Y|/2$, then $(X',Y')$ is $0.02$-regular and
$$|d(X',Y')-d(X,Y)|\le0.01.$$

## Facts & Assumptions

**Given:** A pair and subsets satisfying the Statement.

[L1] The slicing lemma gives new parameter $\max\{\epsilon/\alpha,\epsilon/\beta,2\epsilon\}$ and density shift at most $\epsilon$ for restrictions of relative sizes at least $\alpha,\beta$ ([[lem-slicing-lemma-for-regular-pairs]]).

## Verification

**Proof technique:** direct.

1.1 Substitute $\epsilon=1/100$ and $\alpha=\beta=1/2$ in [L1]. Each of $\epsilon/\alpha$, $\epsilon/\beta$, and $2\epsilon$ equals $1/50$. [given, L1, algebra]

2.1 The same application of [L1] retains the density-shift bound $1/100$, proving both decimal-form assertions in the Statement. [step 1.1, L1] ∎
