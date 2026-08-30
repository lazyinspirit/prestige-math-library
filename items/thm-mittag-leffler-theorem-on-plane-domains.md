---
id: thm-mittag-leffler-theorem-on-plane-domains
kind: theorem
title: "Mittag-Leffler on plane domains"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-principal-part-at-an-isolated-point,
       lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set,
       thm-runge-approximation-with-prescribed-poles]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: constructive
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 9.4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, Theorem 3.3.2 and Runge Theory"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a plane domain, let $A\subseteq\Omega$ be a
discrete set, and for each $a\in A$ let $p_a$ be a prescribed principal part at
$a$. Then there is a meromorphic function on $\Omega$ whose principal part at
each $a\in A$ is $p_a$.

## Facts & Assumptions

**Given:** A plane domain $\Omega$, a discrete set $A\subseteq\Omega$, and a prescribed principal part $p_a$ at each $a\in A$.

[L1] Every compact subset of an open Euclidean set has a compact Jordan neighbourhood still inside that open set ([[lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set]]).

[L2] If a compact set has a pole set meeting every complementary component, then every function holomorphic on a neighbourhood of that compact set is uniformly approximable there by rational functions with poles in the chosen set ([[thm-runge-approximation-with-prescribed-poles]]).

[L3] A prescribed principal part is a finite negative Laurent polynomial ([[def-principal-part-at-an-isolated-point]]).

## Proof

**Proof technique:** constructive.

1.1 Choose an increasing compact exhaustion $C_1\subseteq C_2\subseteq\cdots$ of $\Omega$ with $C_n\subseteq C_{n+1}^\circ$ and $\bigcup_n C_n=\Omega$. [given, L1, L3, construct] Recursively apply [L1] to choose compact Jordan neighbourhoods of the $C_n$ and then fill every complementary component lying entirely in $\Omega$. This gives an increasing exhaustion $K_1\subseteq K_2\subseteq\cdots$ of compact subsets of $\Omega$ such that every connected component of $\widehat{\mathbb C}\setminus K_n$ meets $\widehat{\mathbb C}\setminus\Omega$. Because $A$ is discrete, each set $$A_n:=A\cap(K_n\setminus K_{n-1})\qquad(K_0:=\varnothing)$$ is finite. Let $$f_n(z):=\sum_{a\in A_n} p_a(z).$$ Then $f_n$ is meromorphic on $\Omega$ and holomorphic on a neighbourhood of $K_{n-1}$. [given, L1, L3, construct]

2.1 Fix a set $P\subseteq\widehat{\mathbb C}\setminus\Omega$ meeting every connected component of $\widehat{\mathbb C}\setminus\Omega$. [L2, step 1.1, choose] Step 1.1 makes $P$ meet every connected component of $\widehat{\mathbb C}\setminus K_{n-1}$ as well. Put $r_1:=0$ and $h_1:=f_1$. For each $n\ge2$, apply [L2] to $f_n$ on a neighbourhood of $K_{n-1}$ and choose a rational function $r_n$ with poles in $P$ such that $$\sup_{K_{n-1}}|f_n-r_n|<2^{-n}.$$ Then $h_n:=f_n-r_n$ is meromorphic on $\Omega$, has the same principal parts as $f_n$ on $A_n$, and is uniformly small on $K_{n-1}$. [L2, step 1.1, choose]

3.1 For a compact set $K\subseteq\Omega\setminus A$, choose $N$ with [step 2.1, algebra, discharge-construct] $K\subseteq K_{N-1}$. Then for every $n\ge N$, step 2.1 gives $\sup_K|h_n|\le2^{-n}$. Therefore $\sum_n h_n$ converges uniformly on $K$. Only finitely many layers $A_n$ meet a given compact set, so $f:=\sum_{n\ge1}h_n$ is meromorphic on $\Omega$, and its principal part at each $a\in A_n$ is exactly $p_a$. [step 2.1, algebra, discharge-construct] ∎
