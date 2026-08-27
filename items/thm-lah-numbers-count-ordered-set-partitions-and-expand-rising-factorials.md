---
id: thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials
kind: theorem
title: "The Lah numbers count ordered-block set partitions and expand the rising factorial in the falling basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-factorial-and-falling-factorial, def-rising-factorial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kenneth P. Bogart, Combinatorics Through Guided Discovery, §3.1.5"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Combinatorics_Through_Guided_Discovery_%28Bogart%29/03%3A_Distribution_Problems/3.01%3A_The_Idea_of_Distribution"
pipeline_run: null
---

## Statement

Let $L(0,0):=1$, let $L(n,0):=0$ for $n\ge1$, and for $1\leq k\leq n$ define

$$L(n,k):=\frac{n!}{k!}\binom{n-1}{k-1}.$$

Then for every $n,m\in\mathbb{N}$,

$$m^{\overline n}=\sum_{k=0}^{n}L(n,k)m^{\underline k}.$$

Moreover, $L(n,k)$ counts partitions of $[n]$ into exactly $k$ nonempty blocks,
each equipped with a linear order.

## Facts & Assumptions

**Given:** The rising and falling factorials of
[[def-rising-factorial]] and [[def-factorial-and-falling-factorial]].

## Proof

**Proof technique:** direct.

1.1 Fix $n\geq1$ and $k\in\{1,\dots,n\}$. Take a permutation of $[n]$, written as a word of length $n$, and choose $k-1$ of the $n-1$ gaps between consecutive letters. Cutting the word at those gaps produces an ordered list of $k$ nonempty ordered blocks. This gives $n!\binom{n-1}{k-1}$ ordered lists of ordered blocks. [given]

2.1 Forgetting the left-to-right order of the $k$ blocks divides by $k!$, because every unordered family of $k$ internally ordered blocks has exactly $k!$ linear orders of its blocks. Hence $L(n,k)$ counts partitions of $[n]$ into $k$ nonempty linearly ordered blocks. [step 1.1, algebra]

3.1 For $m\in\mathbb{N}$, consider $m$ distinguishable boxes arranged from left to right. Building an ordered list inside each box by inserting the elements $1,2,\dots,n$ one after another gives $m(m+1)\cdots(m+n-1)=m^{\overline n}$ possibilities. Grouping the outcomes by the number $k$ of nonempty boxes, one first chooses the underlying partition of $[n]$ into $k$ internally ordered blocks, counted by $L(n,k)$ from step 2.1, and then chooses the $k$ occupied boxes in order, which gives $m^{\underline k}$ possibilities. Summing over $k$ yields $m^{\overline n}=\sum_{k=0}^{n}L(n,k)m^{\underline k}$. [step 2.1, given]

4.1 Steps 2.1 and 3.1 prove the counting interpretation and the falling-factorial expansion on natural arguments, together with the defining value $L(0,0)=1$. [step 2.1, step 3.1] ∎
