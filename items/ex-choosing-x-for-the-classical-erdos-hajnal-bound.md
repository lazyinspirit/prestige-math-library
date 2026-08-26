---
id: ex-choosing-x-for-the-classical-erdos-hajnal-bound
kind: example
title: "For large $n$, the Fox–Sudakov choice of $x$ leaves a dense-or-sparse set of order at least $\\sqrt n$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [rem-fox-sudakov-quantitative-density-theorem,
       def-logarithm-to-a-base]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Matija Bucić, Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. I. A loglog step towards Erdős-Hajnal, Theorem 1.5"
      url: "https://arxiv.org/html/2301.10147"
---

## Example

Fix a finite graph $H$, let $C_H>0$ be the constant from
[[rem-fox-sudakov-quantitative-density-theorem]], and let $G$ be an $H$-free
graph on $n$ vertices. Write $L:=\log_2 n$, assume $L>2C_H$, and choose
$x:=2^{-\sqrt{L/(2C_H)}}$.

## Facts & Assumptions

**Given:** The data in the Example, in particular $L>2C_H$.

[L1] For $0<x<1/2$, the quantitative-density theorem gives every $H$-free $n$-vertex graph a set $S$ of order at least $2^{-C_H(\log_2(1/x))^2}n$ such that $G[S]$ or its complement has at most $x\binom{|S|}{2}$ edges ([[rem-fox-sudakov-quantitative-density-theorem]]).

## Verification

**Proof technique:** direct.

1.1 For the chosen $x$, one has $\log_2(1/x)=\sqrt{L/(2C_H)}>1$, so $0<x<1/2$. [given, algebra]

2.1 Therefore $2^{-C_H(\log_2(1/x))^2}n=2^{-C_H\cdot L/(2C_H)}n=2^{-L/2}n=\sqrt n$. [step 1.1, L1, algebra]

3.1 So the source theorem guarantees a dense-or-sparse set of order at least $\sqrt n$. [step 2.1, L1] ∎
