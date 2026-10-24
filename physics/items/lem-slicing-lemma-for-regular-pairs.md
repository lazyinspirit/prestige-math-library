---
id: lem-slicing-lemma-for-regular-pairs
kind: lemma
title: "Slicing lemma: large subpairs remain regular and their density shifts by at most $\\epsilon$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-epsilon-regular-pair]
aliases: []
landmark: false
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

Let $(X,Y)$ be $\epsilon$-regular, and let $X'\subseteq X$, $Y'\subseteq Y$ satisfy $|X'|\ge\alpha|X|$ and $|Y'|\ge\beta|Y|$, where $\alpha,\beta\ge\epsilon>0$. Then
$$|d(X',Y')-d(X,Y)|\le\epsilon,$$
and $(X',Y')$ is $\epsilon'$-regular for
$$\epsilon'=\max\{\epsilon/\alpha,\epsilon/\beta,2\epsilon\}.$$

## Facts & Assumptions

**Given:** The pair and subsets in the Statement.

[L1] An $\epsilon$-regular pair has every subpair whose two sides meet the $\epsilon$ relative-size thresholds within $\epsilon$ of its density ([[def-epsilon-regular-pair]]).

## Proof

**Proof technique:** direct.

1.1 Since $|X'|\ge\epsilon|X|$ and $|Y'|\ge\epsilon|Y|$, [L1] gives $|d(X',Y')-d(X,Y)|\le\epsilon$. [given, L1]

1.2 Let $A\subseteq X'$ and $B\subseteq Y'$ satisfy $|A|\ge\epsilon'|X'|$ and $|B|\ge\epsilon'|Y'|$. Then $|A|\ge(\epsilon/\alpha)\alpha|X|=\epsilon|X|$ and similarly $|B|\ge\epsilon|Y|$. [given, algebra]

2.1 By [L1], $|d(A,B)-d(X,Y)|\le\epsilon$; combining this with step 1.1 yields $|d(A,B)-d(X',Y')|\le2\epsilon\le\epsilon'$. [step 1.1, step 1.2, L1, algebra]

3.1 Since $A,B$ were arbitrary at the $\epsilon'$ thresholds, $(X',Y')$ is $\epsilon'$-regular. [step 2.1, L1] ∎
