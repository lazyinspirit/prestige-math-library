---
id: lem-exactly-one-symbol-constraints-have-polynomial-size
kind: lemma
title: "The exactly-one-symbol constraints have polynomial size"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-boolean-formula-cnf-and-sat, def-bounded-computation-tableau, lem-tableau-cell-alphabet-is-constant]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
---

## Statement

For a tableau of size $(T+1)\times(T+1)$ for a fixed machine $N$, the Boolean
constraints asserting that each cell carries exactly one symbol of $\Delta_N$
have polynomial total size.

## Facts & Assumptions

**Given:** A tableau of side length $T+1$ for a fixed machine $N$.

[L1] A tableau cell ranges over the constant-size extended alphabet $\Delta_N$, by [[lem-tableau-cell-alphabet-is-constant]].

[L2] The overall target is a Boolean satisfiability instance, by [[def-boolean-formula-cnf-and-sat]].

## Proof

**Proof technique:** direct.

1.1 Introduce a variable $X_{r,c,a}$ for each row $r$, column $c$, and symbol $a\in\Delta_N$, intended to mean that cell $(r,c)$ carries $a$. By [L1], the number of choices for $a$ is a fixed constant, so the total number of such variables is $O(T^2)$. [L1, L2, given, construct]

2.1 For each cell, add one at-least-one clause $\bigvee_{a\in\Delta_N} X_{r,c,a}$ and one pairwise-exclusion clause $\neg X_{r,c,a}\lor \neg X_{r,c,b}$ for each distinct pair $a\neq b$. Because $|\Delta_N|$ is constant by [L1], each cell contributes only constantly many literals and clauses. [L1, step 1.1, construct]

3.1 There are $(T+1)^2$ cells, and step 2.1 attaches only constant-size data to each one. Therefore the full exactly-one-symbol family has size polynomial in $T$, hence polynomial in the input length once $T$ is polynomially bounded. [step 1.1, step 2.1] ∎
