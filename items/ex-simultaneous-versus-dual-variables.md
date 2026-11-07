---
id: ex-simultaneous-versus-dual-variables
kind: example
title: "Reading simultaneous and dual variable dimensions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-simultaneous-and-dual-linear-forms-approximation
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Glyn Harman, Metric Number Theory, Chapter 4"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
    - title: "Beresnevich, Ramírez, and Velani, Metric Diophantine Approximation: Aspects of Recent Work, §4.6"
      url: "https://arxiv.org/pdf/1601.01948v1"
---

## Example

Let $\alpha,\beta\in\mathbb R$ and let $\psi:\mathbb N\to[0,\infty)$. In the simultaneous specialization $n=1,m=2$, the matrix is the row $X=(\alpha,\beta)$, the integer row is a scalar $q\in\mathbb Z\setminus\{0\}$, the offset is $(p_1,p_2)\in\mathbb Z^2$, and

$$qX+(p_1,p_2)=(q\alpha+p_1,\ q\beta+p_2).$$

The simultaneous error condition is $\max(|q\alpha+p_1|,|q\beta+p_2|)<\psi(|q|)$, so the same denominator $q$ must approximate both coordinates. In the dual specialization $n=2,m=1$, the matrix is the column $X=(\alpha,\beta)^T$, the integer row is $(q_1,q_2)\in\mathbb Z^2\setminus\{(0,0)\}$, the offset is a scalar $p\in\mathbb Z$, and

$$ (q_1,q_2)X+p=q_1\alpha+q_2\beta+p.$$

The dual error condition is $|q_1\alpha+q_2\beta+p|<\psi(\max(|q_1|,|q_2|))$. Now the approximation is to one linear form while the coefficient vector $(q_1,q_2)$ varies; its size is $\max(|q_1|,|q_2|)$.

## Example references

[Harman, *Metric Number Theory*, Chapter 4](https://djvu.online/file/DZdHsCBaK3OrN)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §4.6](https://arxiv.org/pdf/1601.01948v1)

## Facts & Assumptions

**Given:** Real numbers $\alpha,\beta$, a function $\psi$, and the matrix convention with $n$ row variables and $m$ forms.

[F1] Simultaneous approximation is the specialization $n=1$; dual approximation is the specialization $m=1$. ([[def-simultaneous-and-dual-linear-forms-approximation]])

## Verification




1.1 For $n=1,m=2$, matrix multiplication by the scalar row $q$ multiplies each of the two entries of $X$ by the same integer. Adding the two entries of the offset gives the displayed ordered pair, so the max norm condition is $\displaystyle \max\{|q\alpha+p_1|,\ |q\beta+p_2|\}<\psi(|q|).$ This verifies that both coordinates are tested at one common denominator. [given, F1, algebra]

1.2 For $n=2,m=1$, multiplying the row $(q_1,q_2)$ by the column $(\alpha,\beta)^T$ gives the scalar $q_1\alpha+q_2\beta$, and the one-coordinate offset adds $p$. Its size argument is $\|(q_1,q_2)\|_\infty=\max(|q_1|,|q_2|)$. [given, F1, algebra]

2.1 The two displayed products therefore use different variable dimensions and different integer data: a common scalar denominator with two errors in the first case, and a varying coefficient row with one error in the second. This is exactly the simultaneous/dual distinction in [F1]. [step 1.1, step 1.2, F1] ∎
