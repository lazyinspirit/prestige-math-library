---
id: fs-program-indices-are-unique
kind: false-statement
title: "FALSE: a partial computable function has a unique program index"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-kleenes-second-recursion-theorem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Robert I. Soare, Turing Computability: Theory and Applications"
      url: "https://www.scribd.com/document/620633428/Theory-and-Applications-of-Computability-In-cooperation-with-the-association-Computability-in-Europe-Robert-I-Soare-Turing-Computability-Theory"
---

## Statement

Every partial computable function has exactly one program index.

## Facts & Assumptions

**Given:** An acceptable numbering $(\varphi_e)_{e\in\mathbb N}$.

[L1] Every total computable program transformer has a fixed point, by [[thm-kleenes-second-recursion-theorem]].

## Refutation

**Proof technique:** direct.

1.1 Consider the total computable transformer $$ F(e):=e+1. $$ It changes only the numerical index and is therefore a computable program transformer. [given, construct]

2.1 By [L1], there exists an index $e$ with $$ \varphi_e=\varphi_{F(e)}=\varphi_{e+1}. $$ Since $e\neq e+1$, the same partial computable function has at least two distinct indices. [L1, step 1.1]

3.1 Therefore the statement is false: a partial computable function can have many distinct indices. [step 2.1] ∎
