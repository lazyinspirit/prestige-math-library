---
id: cex-nearest-point-map-to-a-convex-set-need-not-be-linear
kind: counterexample
title: Nearest-point maps to convex sets need not be linear
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-space, def-relative-normed-convexity-and-separation, def-real-and-complex-inner-product-space, def-complete-metric-space, def-banach-space, def-norm-and-normed-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 1.44, pp.40–41"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 178"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement refuted

The nearest-point map $P_C$ of a nonempty closed convex set $C$ in a Hilbert space is linear.

## Facts & Assumptions

[A1] $\mathbb R$ with the pairing $(s,t)\mapsto st$ is a real inner-product space whose induced norm is the absolute value ([[def-real-and-complex-inner-product-space]], [[def-norm-and-normed-space]]), and it is complete, hence a Hilbert space ([[def-complete-metric-space]], [[def-banach-space]], [[def-hilbert-space]]).

[A2] A set $C$ is convex when $(1-t)u+tv\in C$ for all $u,v\in C$ and $0\le t\le1$, and the nearest point of a nonempty closed convex subset of a Hilbert space is the point minimising the distance ([[def-relative-normed-convexity-and-separation]], [[def-hilbert-space]]).

## Counterexample

**Proof technique:** direct.

**Given:** The Hilbert space $\mathbb R$ of [A1] and the closed convex set $C=[0,\infty)$.

1.1 $C$ is closed and convex, and is nonempty with $0\in C$. [A1, A2]

2.1 For $t\ge0$ the point $c=t$ lies in $C$ with $|t-c|=0$, so $P_C(t)=t$; for $t<0$ and any $c\in C$ one has $|t-c|=c-t\ge-t=|t-0|$ with equality exactly at $c=0$, so $P_C(t)=0$. [step 1.1, A1, A2, algebra]

3.1 Hence $P_C(t)=\max\{t,0\}$; this map is not additive, since $P_C(1)+P_C(-1)=1+0=1\ne0=P_C(0)$, and it is not homogeneous either, since $P_C(-1)=0\ne-1=-P_C(1)$. [step 2.1, algebra]

4.1 Therefore the nearest-point map of a nonempty closed convex set in a Hilbert space need not be linear, so the statement refuted is false. [step 3.1] ∎
