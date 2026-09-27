---
id: ex-choosing-x-for-the-loglog-erdos-hajnal-bound
kind: example
title: "For large $n$, the log-log choice of $x$ still leaves a dense-or-sparse set of order at least $\\sqrt n$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-loglog-quantitative-induced-density-bound,
       def-logarithm-to-a-base]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Matija Bucić, Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. I. A loglog step towards Erdős-Hajnal, Theorem 1.8"
      url: "https://arxiv.org/html/2301.10147"
---

## Example

Fix a nonempty finite graph $H$, let $C_H>0$ be the constant from
[[thm-loglog-quantitative-induced-density-bound]], and let $G$ be an $H$-free graph on
$n\ge3$ vertices. Write $L:=\log_2 n$, and set
$\beta:=1/(4\sqrt{C_H})$ and $x:=2^{-\beta\sqrt{L\log_2 L}}$.

## Facts & Assumptions

**Given:** The data in the Example.

[L1] For nonempty $H,G$ and $0<x<1/2$, the proved quantitative induced-density theorem gives every $H$-free $n$-vertex graph a nonempty set $S$ of order at least $2^{-C_H(\log_2(1/x))^2/\log_2\log_2(1/x)}n$ whose induced graph or complement has at most $x\binom{|S|}{2}$ edges ([[thm-loglog-quantitative-induced-density-bound]]).

## Verification

**Proof technique:** direct.

1.1 For the chosen $x$, one has $\log_2(1/x)=\beta\sqrt{L\log_2 L}$. [given, algebra]

2.1 For all sufficiently large $L$, the inequality $\beta\sqrt{L\log_2 L}\ge\sqrt L>1$ holds. Hence $0<x<1/2$ and $\log_2\log_2(1/x)\ge \tfrac12\log_2 L$. [step 1.1, algebra]

3.1 Hence, for all sufficiently large $n$, $C_H(\log_2(1/x))^2/\log_2\log_2(1/x)\le 2C_H\beta^2L=L/8$, and therefore $2^{-C_H(\log_2(1/x))^2/\log_2\log_2(1/x)}n\ge 2^{-L/8}n=2^{7L/8}\ge\sqrt n$. [step 2.1, L1, algebra]

4.1 So for all sufficiently large $n$, this choice of $x$ still leaves a dense-or-sparse set of order at least $\sqrt n$. [step 3.1, L1] ∎
