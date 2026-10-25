---
id: ex-choosing-x-for-the-classical-erdos-hajnal-bound
kind: example
title: "For large $n$, the Fox–Sudakov choice of $x$ leaves a dense-or-sparse set of order at least $\\sqrt n$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-logarithm-to-a-base, cor-fox-sudakov-quantitative-induced-density-bound]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Matija Bucić, Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. I. A loglog step towards Erdős-Hajnal, Theorem 1.5"
      url: "https://arxiv.org/html/2301.10147"
---

## Example

Fix a nonempty finite graph $H$, let $C_H>0$ be the constant from
[[cor-fox-sudakov-quantitative-induced-density-bound]], and let $G$ be an $H$-free
graph on $n$ vertices. Write $L:=\log_2 n$, assume $L>2C_H$, and choose
$x:=2^{-\sqrt{L/(2C_H)}}$.

## Facts & Assumptions

**Given:** The data in the Example, in particular $L>2C_H$.

[L1] For nonempty $H$ and $G$ and $0<x<1/2$, the proved quantitative-density corollary gives every $H$-free $n$-vertex graph a nonempty set $S$ of order at least $2^{-C_H(\log_2(1/x))^2}n$ such that $G[S]$ or its complement has at most $x\binom{|S|}{2}$ edges ([[cor-fox-sudakov-quantitative-induced-density-bound]]). The hypothesis $L>2C_H>0$ ensures $n>1$, so $G$ is nonempty.

## Verification

**Proof technique:** direct.

1.1 For the chosen $x$, one has $\log_2(1/x)=\sqrt{L/(2C_H)}>1$, so $0<x<1/2$. [given, algebra]

2.1 Therefore $2^{-C_H(\log_2(1/x))^2}n=2^{-C_H\cdot L/(2C_H)}n=2^{-L/2}n=\sqrt n$. [step 1.1, L1, algebra]

3.1 So the proved quantitative-density corollary guarantees a dense-or-sparse set of order at least $\sqrt n$. [step 2.1, L1] ∎
