---
id: lem-uniqueness-of-the-complex-derivative
kind: lemma
title: "The complex derivative at a point is unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complex-differentiability-holomorphic-and-entire, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §2.1.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

If the complex derivative of $f:U\to\mathbb C$ at $a\in U$ exists, its value is unique.

## Facts & Assumptions

**Given:** An open set $U\subseteq\mathbb C$, a point $a\in U$, and two complex numbers $L,M$ to which the difference quotient $(f(a+h)-f(a))/h$ converges as $h\to0$ through nonzero increments with $a+h\in U$.

[F1] Complex differentiability at $a$ means that the limit of $(f(a+h)-f(a))/h$ exists as $h\to0$ through nonzero increments with $a+h\in U$ ([[def-complex-differentiability-holomorphic-and-entire]]).

[L1] For every $z,w\in\mathbb C$, $|z+w|\le |z|+|w|$, and $|z|=0$ if and only if $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $L\ne M$, and put $\varepsilon=|L-M|/3>0$. [assume-contra, L1]

1.2 By the two asserted limits, choose $\delta>0$ such that every allowed $h$ with $0<|h|<\delta$ satisfies both $|q(h)-L|<\varepsilon$ and $|q(h)-M|<\varepsilon$, where $q(h)=(f(a+h)-f(a))/h$. [given, F1, choose]

1.3 Since $U$ is open at $a$, choose a nonzero allowed increment $h$ with $|h|<\delta$. [given, choose]

2.1 The triangle inequality gives $|L-M|\le |L-q(h)|+|q(h)-M|<2\varepsilon=2|L-M|/3$, a contradiction. Hence $L=M$. [step 1.1, step 1.2, step 1.3, L1, algebra, discharge-contradiction] ∎
