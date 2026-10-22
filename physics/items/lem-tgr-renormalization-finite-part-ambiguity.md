---
id: lem-tgr-renormalization-finite-part-ambiguity
kind: lemma
title: Finite subtraction ambiguity
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes, Lecture 3, sequence convergence definition
      url: https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf
---

## Statement

Let $x=(x_N)_{N\ge1}$ and $r=(r_N)_{N\ge1}$ be real sequences, and let $L\in\mathbb R$. Here $x_N-r_N\to L$ means that for every $\varepsilon>0$ there is an integer $N_0$ such that $|x_N-r_N-L|<\varepsilon$ for all $N\ge N_0$. For every $a\in\mathbb R$, the equally valid subtraction $r'_N=r_N-a$ satisfies

$$ x_N-r'_N\longrightarrow L+a. $$

Thus existence of a finite subtracted limit alone does not select its additive finite part; no particular divergence expansion or physical renormalization scheme is assumed.

## Statement references

[MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes, Lecture 3](https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf)

## Facts & Assumptions

**Given:** Real sequences $x=(x_N)_{N\ge1}$ and $r=(r_N)_{N\ge1}$, a finite real number $L$, and $x_N-r_N\to L$ in the epsilon definition stated above.

[A1] For every $\varepsilon>0$, some $N_0$ satisfies $|x_N-r_N-L|<\varepsilon$ for all $N\ge N_0$.

## Proof

1.1 Fix any real $a$ and any $\varepsilon>0$. By [A1], choose $N_0$ so that $|x_N-r_N-L|<\varepsilon$ for every $N\ge N_0$. [given, A1, choose]

2.1 For every $N\ge N_0$, $|x_N-r'_N-(L+a)|=|x_N-(r_N-a)-(L+a)|=|x_N-r_N-L|<\varepsilon$. Since $a$ and $\varepsilon$ were arbitrary, the claimed limit is $L+a$ for every $a\in\mathbb R$. [given, step 1.1, algebra] ∎
