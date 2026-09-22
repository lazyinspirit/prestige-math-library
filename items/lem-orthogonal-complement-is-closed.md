---
id: lem-orthogonal-complement-is-closed
kind: lemma
title: Orthogonal complements are closed
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-orthogonality-and-orthogonal-complement, thm-cauchy-schwarz-in-an-inner-product-space, cor-inner-product-induces-a-norm, def-metric-topology, def-metric-ball]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, p.39"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 16"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

For every subset $S$ of a real or complex inner-product space $V$, the orthogonal complement $S^\perp$ is a closed linear subspace of $V$ for the induced norm topology.

## Facts & Assumptions

[A1] $S^\perp=\{v\in V:\langle v,s\rangle=0\text{ for all }s\in S\}$ is a linear subspace and orthogonality is symmetric ([[def-orthogonality-and-orthogonal-complement]]).

[A2] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] The induced length is a norm, so $\|v\|\ge0$ with $\|v\|=0$ exactly for $v=0$ ([[cor-inner-product-induces-a-norm]]).

[A4] In the metric topology a set is open exactly when every point of it has a ball around it inside the set, and $B(x,r)=\{y:d(x,y)<r\}$ ([[def-metric-topology]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

**Given:** A subset $S$ of a real or complex inner-product space $V$, with $S^\perp$ as in [A1].

1.1 By [A1] the set $S^\perp$ is a linear subspace of $V$, which is the first assertion. [A1]

1.2 Let $x\notin S^\perp$; then some $s\in S$ has $\langle x,s\rangle\ne0$, so $s\ne0$ and $r=|\langle x,s\rangle|/(2\|s\|)>0$; if $y\in V$ satisfies $\|y-x\|<r$, then $|\langle y,s\rangle|\ge|\langle x,s\rangle|-|\langle x-y,s\rangle|>|\langle x,s\rangle|-r\|s\|=|\langle x,s\rangle|/2>0$ by Cauchy–Schwarz, so $y\notin S^\perp$. [A1, A2, A3, algebra]

2.1 Thus every point outside $S^\perp$ has a ball around it that misses $S^\perp$, so $V\setminus S^\perp$ is open and $S^\perp$ is closed in the metric topology; with step 1.1 this proves that $S^\perp$ is a closed linear subspace. [step 1.1, step 1.2, A4] ∎
