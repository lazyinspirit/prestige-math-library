---
id: lem-qftx-real-part-modulus-bound-equality
kind: lemma
title: Ordered-field component bound with its equality case
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-susy-breaking-and-phenomenology
axiom_base: ZF
deps:
  - thm-reals-ordered-field
dependency_roles:
  thm-reals-ordered-field: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Princeton University MAT330, Complex Analysis with Applications, Spring 2023 lecture notes"
      url: "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT330_spring_2023/MAT330_Lecture_Notes.pdf"
      locator: "§1.1, Definitions 1.3–1.4 and the basic modulus relations, PDF pp. 3–4: |Re z|≤|z|. The local proof supplies the exact equality case."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

For $x,y,r\in\mathbb R$ with $r\ge0$ and $r^2=x^2+y^2$, one has $x\le r$. Equality holds exactly when $y=0$ and $x\ge0$.

## Statement references

The real numbers form a totally ordered field: [[thm-reals-ordered-field]].

## Facts & Assumptions

**Given:** $x,y,r\in\mathbb R$, $r\ge0$, and $r^2=x^2+y^2$.

[F1] [[thm-reals-ordered-field]]: the real numbers have a total order compatible with addition and multiplication; positive elements have positive products.

## Proof

**Given:** [F1] and the hypotheses in the Statement.

1.1 By trichotomy, either $y=0$, $y>0$, or $-y>0$. In the first case $y^2=0$. In either positive case, multiplying the positive element by itself gives a positive square; since $(-y)(-y)=y^2$, this proves $y^2\ge0$, with strict inequality when $y\ne0$. [F1, cases, algebra]

2.1 The hypothesis $r^2=x^2+y^2$ and step 1.1 imply $r^2\ge x^2$. [step 1.1, algebra]

2.2 If $x=r$, then $y^2=r^2-x^2=0$. Step 1.1 shows a nonzero $y$ would have $y^2>0$, so $y=0$; and $x=r\ge0$. [F1, step 1.1, algebra]

3.1 If $x\le0$, then $x\le r$ because $r\ge0$. Otherwise $x>0$. If $r<x$, then $x-r>0$ and $x+r>0$, so $x^2-r^2=(x-r)(x+r)>0$, contradicting step 2.1. Hence $x\le r$ in all cases. [F1, step 2.1, algebra]

4.1 Conversely, if $y=0$ and $x\ge0$, the hypotheses give $r^2=x^2$ with $r,x\ge0$. If $r<x$, then $(x-r)(x+r)>0$, contradicting equality of squares; if $x<r$, then $(r-x)(r+x)>0$, the same contradiction. By trichotomy, $r=x$. Equality holds exactly in the stated case. [F1, algebra] ∎
