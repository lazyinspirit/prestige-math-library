---
id: lem-trimming-a-self-regular-set-of-high-density
kind: lemma
title: "Deleting the low-degree vertices of a $\\gamma$-self-regular set of density $d$ leaves more than $(1-\\gamma)$ of it, and that remainder is $((1-d+2\\gamma)/(1-\\gamma))$-dense"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-epsilon-regular-pair, lem-typical-degrees-in-a-regular-pair, def-edge-density-between-vertex-sets, def-c-sparse-and-c-restricted-vertex-set, lem-sparsity-depends-only-on-the-induced-subgraph]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Lemma 2.2.3 and Remark 2.3.2"
      url: "https://yufeizhao.com/gtacbook/gtacbook.pdf"
pipeline_run: null
---

## Statement

Let $0<\gamma<1$, let $W\subseteq V(G)$ be nonempty, and suppose $(W,W)$ is a
$\gamma$-regular pair of density $d$. Then there is a subset $W'\subseteq W$
with $|W'|>(1-\gamma)|W|$ such that $W'$ is
$((1-d+2\gamma)/(1-\gamma))$-dense.

## Facts & Assumptions

**Given:** A finite simple graph $G$, a real $0<\gamma<1$, a nonempty set $W\subseteq V(G)$, and a density $d=d_G(W,W)$ such that $(W,W)$ is $\gamma$-regular.

[L1] In a $\gamma$-regular pair $(X,Y)$, all but fewer than $\gamma|X|$ vertices of $X$ have at least $(d(X,Y)-\gamma)|Y'|$ neighbours in any subset $Y'\subseteq Y$ of size at least $\gamma|Y|$ ([[lem-typical-degrees-in-a-regular-pair]], [[def-epsilon-regular-pair]]).

[L2] A set is $c$-dense exactly when every vertex has at most $c|X|$ non-neighbours inside it other than itself ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the pair $(W,W)$ with $Y'=W$. Fewer than $\gamma|W|$ vertices of $W$ then have fewer than $(d-\gamma)|W|$ neighbours in $W$. [L1]

2.1 Let $W'$ be the remaining vertices. Then $|W'|>(1-\gamma)|W|$. [step 1.1, choose]

3.1 For $x\in W'$, at most $\gamma|W|$ of its neighbours lie outside $W'$, so $x$ has at least $(d-2\gamma)|W|$ neighbours in $W'$. [step 2.1, algebra]

4.1 Hence $x$ has at most $|W'|-1-(d-2\gamma)|W|<((1-d+2\gamma)/(1-\gamma))|W'|$ non-neighbours inside $W'$. By [L2], the set $W'$ is $((1-d+2\gamma)/(1-\gamma))$-dense. [step 3.1, L2, algebra] ∎
