---
id: lem-typical-degrees-in-a-regular-pair
kind: lemma
title: "In a regular pair, fewer than $\\epsilon|X|$ vertices have too small a degree into a large subset, and fewer than $\\epsilon|X|$ have too large a degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-epsilon-regular-pair]
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Lemma 2.2.3"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
pipeline_run: null
---

## Statement

Suppose $(X,Y)$ is an $\epsilon$-regular pair of density $d$, and $Y'\subseteq Y$ satisfies $|Y'|\ge\epsilon|Y|$. Then fewer than $\epsilon|X|$ vertices $x\in X$ have
$$|N(x)\cap Y'|<(d-\epsilon)|Y'|,$$
and fewer than $\epsilon|X|$ vertices have
$$|N(x)\cap Y'|>(d+\epsilon)|Y'|.$$

## Facts & Assumptions

**Given:** An $\epsilon$-regular pair $(X,Y)$ of density $d$ and a set $Y'\subseteq Y$ with $|Y'|\ge\epsilon|Y|$.

[L1] Every $A\subseteq X$, $B\subseteq Y$ with $|A|\ge\epsilon|X|$ and $|B|\ge\epsilon|Y|$ satisfies $|d(A,B)-d(X,Y)|\le\epsilon$ ([[def-epsilon-regular-pair]]).

## Proof

**Proof technique:** contradiction.

1.1 Let $A$ be the set of *all* $x\in X$ with $|N(x)\cap Y'|<(d-\epsilon)|Y'|$ and let $B$ be the set of all $x\in X$ with $|N(x)\cap Y'|>(d+\epsilon)|Y'|$. Suppose, for contradiction, that $|A|\ge\epsilon|X|$. [assume-contra, given, choose]

2.1 Summing degrees over $A$ gives $e(A,Y')<(d-\epsilon)|A||Y'|$, hence $d(A,Y')<d-\epsilon$. Since $|A|\ge\epsilon|X|$ and $|Y'|\ge\epsilon|Y|$, this contradicts [L1]. Therefore $|A|<\epsilon|X|$. [step 1.1, L1, algebra]

3.1 Assume likewise that $|B|\ge\epsilon|X|$. Summing degrees over $B$ gives $d(B,Y')>d+\epsilon$, and the same two size conditions again contradict [L1]. Therefore $|B|<\epsilon|X|$. [step 2.1, L1, algebra]

4.1 Both exceptional sets therefore have size strictly below $\epsilon|X|$, which is the Statement. [step 2.1, step 3.1, discharge-contradiction] ∎
