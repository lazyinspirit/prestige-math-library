---
id: thm-ramsey-logarithmic-homogeneous-set-bound
kind: theorem
title: "Every nonempty $n$-vertex graph satisfies $\\operatorname{hom}(G)\\ge \\tfrac12\\log_2 n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homogeneous-set-and-homogeneous-number, thm-finite-graph-ramsey-binomial-bound, def-binomial-coefficient, def-logarithm-to-a-base, thm-natural-logarithm-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Chernikov, MATH 223M notes, sec. 3.1"
      url: "https://chernikov.umd.edu/teaching/19F-MATH223M/Notes.pdf"
pipeline_run: null
---

## Statement

Every nonempty finite graph $G$ of order $n$ satisfies
$$\operatorname{hom}(G)\ge \frac12\log_2 n.$$

## Facts & Assumptions

**Given:** A nonempty finite graph $G$ with $n=|V(G)|$.

[L1] For every graph $F$, $\operatorname{hom}(F)=\max\{\omega(F),\alpha(F)\}$ ([[def-homogeneous-set-and-homogeneous-number]]).

[L2] For positive natural numbers $s,t$, every graph on at least $\binom{s+t-2}{s-1}$ vertices has an $s$-vertex clique or a $t$-vertex stable set ([[thm-finite-graph-ramsey-binomial-bound]]).

[L3] The number $\binom mr$ counts the $r$-element subsets of an $m$-element set ([[def-binomial-coefficient]]).

[L4] For $b>0$ with $b\ne1$ and $x>0$, $\log_bx:=\log x/\log b$ ([[def-logarithm-to-a-base]]).

[L5] $\log:(0,\infty)\to\mathbb R$ is strictly increasing, $\log(xy)=\log x+\log y$ for $x,y>0$, and $\log1=0$ ([[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct.

1.1 Put $k=\lfloor\tfrac12\log_2n\rfloor+1$. Then $k$ is a positive integer, $k>\tfrac12\log_2n$, and $2k-2\le\log_2n$. [given, algebra]

2.1 By [L5], $\log2>\log1=0$, so $2k-2\le\log_2n=\log n/\log2$ gives $(2k-2)\log2\le\log n$. Applying $\log(xy)=\log x+\log y$ to the $2k-2$ factors of $2^{2k-2}$ gives $\log(2^{2k-2})=(2k-2)\log2\le\log n$, and $\log$ is strictly increasing, so $2^{2k-2}\le n$. [step 1.1, L4, L5, algebra]

3.1 The $(k-1)$-subsets of a $(2k-2)$-set form part of its power set, and binary membership choices give the power set $2^{2k-2}$ elements, so $\binom{2k-2}{k-1}\le2^{2k-2}\le n$. [step 2.1, L3, algebra]

4.1 Apply [L2] with $s=t=k$: $G$ has a clique or stable set of order at least $k$. [step 3.1, L2]

5.1 Therefore $\operatorname{hom}(G)\ge k>\tfrac12\log_2n$ by [L1], which proves the stated weak inequality; when $n=1$, this reads $1\ge0$ and the same argument has $k=1$. [step 1.1, step 4.1, L1] ∎
