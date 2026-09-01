---
id: thm-relative-whitney-approximation-for-euclidean-valued-maps
kind: theorem
title: "Relative Whitney approximation for Euclidean-valued maps"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-whitney-approximation-for-euclidean-valued-maps,
       lem-smooth-extension-from-a-closed-neighbourhood,
       thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Smooth Approximation of Maps Between Manifolds"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $F:M\to\mathbb R^k$ be continuous, let $A\subseteq M$ be closed, and
suppose $F$ is smooth on an open neighbourhood of $A$. For every positive
continuous error function $\varepsilon$ on $M$, there exists a smooth map
$\widetilde F:M\to\mathbb R^k$ such that:

1. $\widetilde F=F$ on some open neighbourhood of $A$, and
2. $\|\widetilde F(p)-F(p)\|<\varepsilon(p)$ for all $p\in M$.

## Facts & Assumptions

**Given:** A continuous map $F:M\to\mathbb R^k$, a closed set $A\subseteq M$ on which $F$ is smooth near $A$, and a positive continuous error function $\varepsilon$.

[L1] Whitney approximation with pointwise positive error holds for Euclidean targets ([[thm-whitney-approximation-for-euclidean-valued-maps]]).

[L2] A smooth map defined on a closed neighbourhood extends to a global smooth map ([[lem-smooth-extension-from-a-closed-neighbourhood]]).

[L3] Smooth Urysohn cutoffs separate a closed set from a larger open neighbourhood ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

## Proof
**Proof technique:** direct.

1.1 Choose an open neighbourhood $U$ of $A$ on which $F$ is smooth, and then choose open sets $$ A\subseteq W\Subset V\Subset U. $$ Apply [L2] to each component of $F|_U$ on the closed neighbourhood $\overline V\subseteq U$, and collect the componentwise extensions into a smooth map $G:M\to\mathbb R^k$ with $G=F$ on $\overline V$. [L2, given, choose]

2.1 Define the continuous map $$H:=F-G.$$ Then $H$ vanishes on $\overline V$. Apply [L1] to $H$ with the same error function $\varepsilon/2$ to obtain a smooth map $K$ satisfying $\|K-H\|<\varepsilon/2$ everywhere. [L1, step 1.1, construct]

3.1 By [L3], choose a smooth cutoff $\lambda:M\to[0,1]$ with $\lambda=0$ on $W$ and $\lambda=1$ on $M\setminus V$. Set $$\widetilde F:=G+\lambda K.$$ On $W$ one has $\widetilde F=G=F$. Outside $V$, one has $\widetilde F=G+K$, so $$\|\widetilde F-F\|=\|K-H\|<\varepsilon/2<\varepsilon.$$ Inside $V$, the relation $H=0$ gives $$\|\widetilde F-F\|=\|\lambda K\|\le\|K-H\|+\|H\|<\varepsilon/2<\varepsilon.$$ Therefore $\widetilde F$ is smooth, agrees with $F$ on the neighbourhood $W$ of $A$, and stays within $\varepsilon$. [L3, step 1.1, step 2.1, algebra] ∎
