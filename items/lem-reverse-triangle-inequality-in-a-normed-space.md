---
id: lem-reverse-triangle-inequality-in-a-normed-space
kind: lemma
title: "The reverse triangle inequality in a normed space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-norm-and-normed-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-27
---

## Statement

Let $V$ be a normed space. For all $x,y\in V$,
$$\bigl|\|x\|-\|y\|\bigr|\le \|x-y\|.$$
In particular, the norm map is $1$-Lipschitz for the norm metric.

## Facts & Assumptions

**Given:** A normed space $V$ and vectors $x,y\in V$.

[L1] A norm satisfies the triangle inequality and absolute homogeneity ([[def-norm-and-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 Since $x=(x-y)+y$, the triangle inequality in [L1] gives $\|x\|\le \|x-y\|+\|y\|$. [L1]

1.2 Since $y=(y-x)+x$ and $\|y-x\|=\|x-y\|$ by absolute homogeneity at the scalar $-1$, [L1] also gives $\|y\|\le \|x-y\|+\|x\|$. [L1, algebra]

2.1 Step 1.1 yields $\|x\|-\|y\|\le \|x-y\|$, and step 1.2 yields $\|y\|-\|x\|\le \|x-y\|$; together these are exactly $\bigl|\|x\|-\|y\|\bigr|\le \|x-y\|$. [step 1.1, step 1.2, algebra]

3.1 The displayed inequality says precisely that the map $x\mapsto \|x\|$ is $1$-Lipschitz for the metric $d(u,v)=\|u-v\|$. [step 2.1] ∎
