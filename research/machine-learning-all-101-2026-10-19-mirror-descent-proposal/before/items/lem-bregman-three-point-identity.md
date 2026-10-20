---
id: lem-bregman-three-point-identity
kind: lemma
title: The Bregman three-point identity
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-mirror-map-and-bregman-divergence
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§5.3.2, Bregman identity used in the agile OMD proof, PDF pp. 100–103 (printed pp. 78–81)."
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2014fall-cs294stat260/lectures/mirror-descent-notes.pdf"
      locator: "Mirror descent regret proof, PDF pp. 27–30."
verification:
  precheck: n/a
---

## Statement

Let $K\subseteq\mathbb R^d$, let $U\subseteq\mathbb R^d$ be open, and let $R$ be a mirror regularizer whose Bregman divergence is $B_R(x\|y)=R(x)-R(y)-\langle\nabla R(y),x-y\rangle$ for $x\in K\cup U$ and $y\in U$. For $a\in K\cup U$ and $b,c\in U$,

$$\langle a-b,\nabla R(c)-\nabla R(b)\rangle=B_R(a\|b)-B_R(a\|c)+B_R(b\|c).$$

## Statement references

[[def-mirror-map-and-bregman-divergence]]: defines $B_R(a\|b)=R(a)-R(b)-\langle\nabla R(b),a-b\rangle$ whenever $a\in K\cup U$ and $b\in U$.

## Facts & Assumptions

**Given:** A mirror regularizer $(K,U,R)$, $a\in K\cup U$, and $b,c\in U$.

[F1] [[def-mirror-map-and-bregman-divergence]]: $B_R(x\|y)=R(x)-R(y)-\langle\nabla R(y),x-y\rangle$ for $x\in K$ and $y\in U$, with the same formula on $U\times U$.

## Proof

1.1 Expand the right side using [F1]. The terms $R(a)$, $R(b)$, and $R(c)$ cancel, leaving $-\langle\nabla R(b),a-b\rangle+\langle\nabla R(c),a-c\rangle-\langle\nabla R(c),b-c\rangle$. [given, F1, algebra]

2.1 Since $(a-c)-(b-c)=a-b$, the remaining expression is $\langle a-b,\nabla R(c)-\nabla R(b)\rangle$. [step 1.1, algebra] ∎

