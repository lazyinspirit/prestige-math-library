---
id: thm-random-graph-logarithmic-homogeneous-set-upper-bound
kind: theorem
title: "For every $n\\ge16$ there is an $n$-vertex graph with $\\operatorname{hom}(G)<3\\log_2 n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-homogeneous-set-and-homogeneous-number, def-erdos-renyi-random-graph, lem-random-graph-fixed-pattern-probability, thm-linearity-of-expectation, thm-first-moment-method, def-binomial-coefficient, def-logarithm-to-a-base, thm-natural-logarithm-laws]
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "A. Chernikov, MATH 223M notes, sec. 3.1"
      url: "https://chernikov.umd.edu/teaching/19F-MATH223M/Notes.pdf"
pipeline_run: null
---

## Statement

For every integer $n\ge16$, there exists an $n$-vertex graph $G$ such that
$$\operatorname{hom}(G)<3\log_2n.$$

## Facts & Assumptions

**Given:** An integer $n\ge16$ and $k=\lceil3\log_2n\rceil$.

[L1] The homogeneous number of a graph is the larger of its clique and stable-set numbers ([[def-homogeneous-set-and-homogeneous-number]]).

[L2] In $G(n,1/2)$, all possible edges are independent Bernoulli variables on the labelled vertex set $[n]$ ([[def-erdos-renyi-random-graph]]).

[L3] Prescribing $r$ present edges and $s$ absent edges in $G(n,p)$ has probability $p^r(1-p)^s$ ([[lem-random-graph-fixed-pattern-probability]]).

[L4] Expectations of a finite family of random variables add without an independence hypothesis ([[thm-linearity-of-expectation]]).

[L5] If a nonnegative integer-valued random variable on a finite probability space has expectation below $1$, some outcome makes it $0$ ([[thm-first-moment-method]]).

[L6] There are $\binom nk$ subsets of size $k$ in an $n$-set ([[def-binomial-coefficient]]).

[L7] For $b>0$ with $b\ne1$ and $x>0$, $\log_bx:=\log x/\log b$ ([[def-logarithm-to-a-base]]).

[L8] $\log:(0,\infty)\to\mathbb R$ is strictly increasing, and for $x,y>0$ satisfies $\log(xy)=\log x+\log y$, $\log(1/x)=-\log x$, and $\log1=0$ ([[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** constructive.

1.1 By [L8], $\log2>\log1=0$, so [L7] makes $\log_2=\log/\log2$ strictly increasing with $\log_21=0$. Applying $\log(xy)=\log x+\log y$ to the factors of an integer power, and $\log(1/x)=-\log x$ for a negative exponent, gives $\log_2(2^m)=m$ for every integer $m$ and $\log_2(x^j)=j\log_2x$ for every $x>0$ and every positive integer $j$. [L7, L8, algebra]

2.1 Since $n\ge16=2^4$, step 1.1 gives $L:=\log_2n\ge4$, and $k=\lceil3L\rceil$ satisfies $k\ge3L\ge12$. [given, step 1.1, algebra]

3.1 In $G(n,1/2)$ let $X$ count the $k$-subsets that induce a clique or a stable set. For a fixed $k$-subset these two disjoint events each prescribe all $\binom k2$ pairs, so [L2] and [L3] give probability $2\cdot2^{-\binom k2}$. [step 2.1, L2, L3, L6]

4.1 By [L4] and [L6], $\mathbb E X=2\binom nk2^{-k(k-1)/2}\le2n^k2^{-k(k-1)/2}$. [step 3.1, L4, L6, algebra]

5.1 By step 1.1 the base-two logarithm of that last bound is $1+kL-k(k-1)/2=1+k(L-(k-1)/2)\le1+3L(1-L)/2<0$, where the first inequality uses $k\ge3L$ and $L\ge4$, which make $L-(k-1)/2\le(1-L)/2<0$. Since $\log_2$ is strictly increasing with $\log_21=0$, the bound itself is below $1$, so $\mathbb E X<1$. [step 1.1, step 2.1, step 4.1, algebra]

6.1 By [L5], choose an outcome graph $G$ with $X=0$. It has no homogeneous $k$-subset, and any homogeneous set of order at least $k$ would contain one, so $\operatorname{hom}(G)\le k-1<3L=3\log_2n$. [step 3.1, step 5.1, L1, L5, construct, discharge-construct] ∎
