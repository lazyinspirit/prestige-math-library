---
id: cor-symmetric-lovasz-local-lemma
kind: corollary
title: "The symmetric Lovász Local Lemma under $ep(d+1)\\le1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-asymmetric-lovasz-local-lemma, lem-exponential-dominates-one-plus-x, thm-exponential-addition-formula, def-integer-power, lem-power-laws, lem-power-monotone, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Corollary 5.1.2"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Corollary 5.3"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

Let $d\in\mathbb N$ and $p\ge0$. Let $(A_i)_{i\in I}$ have a dependency digraph of maximum out-degree at most $d$. If $\mathbb P(A_i)\le p$ for every $i$ and
$$ep(d+1)\le1,$$
then $\mathbb P(\bigcap_iA_i^c)>0$.

## Facts & Assumptions

**Given:** A finite event family, its dependency digraph, and $p,d$ satisfying the Statement.

[L1] The asymmetric Local Lemma applies when $\mathbb P(A_i)\le x_i\prod_{i\to j}(1-x_j)$ with $0\le x_i<1$ ([[thm-asymmetric-lovasz-local-lemma]]).

[L2] $1+y\le\exp(y)$ for every real $y$ ([[lem-exponential-dominates-one-plus-x]]).

[L3] $\exp(u+v)=\exp(u)\exp(v)$; natural powers preserve order on nonnegative bases; and positive inequalities may be multiplied and inverted using the ordered-field laws ([[thm-exponential-addition-formula]], [[def-integer-power]], [[lem-power-laws]], [[lem-power-monotone]], [[thm-reals-ordered-field]]).

## Proof

**Proof technique:** cases.

1.1 Suppose $d=0$ and set every $x_i=1/e$. Applying [L2] at $y=1$ gives $2\le e$, so $0<x_i<1$. The hypothesis gives $p\le1/e=x_i$, and the empty neighbour product is $1$, so [L1] applies. [assume-case zero, L1, L2, algebra]

1.2 Suppose $d\ge1$ and set every $x_i=1/(d+1)$. From [L2] at $y=1/d$ and [L3], $(1+1/d)^d\le e$, hence $(1-1/(d+1))^d=(d/(d+1))^d\ge1/e$. [assume-case positive, L2, L3, algebra]

2.1 Each vertex has at most $d$ out-neighbours, so $x_i\prod_{i\to j}(1-x_j)\ge1/(e(d+1))\ge p$ by the hypothesis. Thus [L1] applies. [step 1.2, L1, L3, algebra]

3.1 The cases $d=0$ and $d\ge1$ are exhaustive and both give positive probability that no bad event occurs. [step 1.1, step 2.1, cases-exhaustive] ∎
