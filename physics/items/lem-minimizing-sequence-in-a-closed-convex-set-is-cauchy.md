---
id: lem-minimizing-sequence-in-a-closed-convex-set-is-cauchy
kind: lemma
title: A minimizing sequence in a convex set is Cauchy
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-parallelogram-law, def-infimum, def-relative-normed-convexity-and-separation, def-real-and-complex-inner-product-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 1.44, pp.40–41"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 178"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Let $C$ be a nonempty convex subset of a real or complex inner-product space, let $x$ be a vector and put $d=\inf_{c\in C}\|x-c\|$. If $c_n\in C$ is a sequence with $\|x-c_n\|\to d$, then $(c_n)$ is a Cauchy sequence.

## Facts & Assumptions

[A1] A subset $C$ is convex when $(1-t)u+tv\in C$ for all $u,v\in C$ and $0\le t\le 1$ ([[def-relative-normed-convexity-and-separation]]).

[A2] If $d=\inf S$ then $d\le s$ for every $s\in S$ ([[def-infimum]]).

[A3] Every inner-product norm satisfies the parallelogram law ([[thm-parallelogram-law]]).

[A4] The norm is induced by the pairing, in particular $\|u-v\|$ is the distance between $u$ and $v$ and $\|u+v\|=\|v+u\|$ ([[def-real-and-complex-inner-product-space]]).

## Proof

**Proof technique:** direct.

**Given:** A nonempty convex set $C$, a vector $x$, the number $d=\inf_{c\in C}\|x-c\|$ and a sequence $c_n\in C$ with $\|x-c_n\|\to d$.

1.1 Put $u_n=x-c_n$; for all $m,n$ the midpoint $(c_m+c_n)/2$ lies in $C$ by convexity, so $\|\tfrac12(u_m+u_n)\|=\|x-\tfrac12(c_m+c_n)\|\ge d$ because $d$ is a lower bound of the distances from $x$ to points of $C$. [A1, A2, A4]

2.1 The parallelogram law applied to $u_m,u_n$ gives $\|u_m-u_n\|^2=2\|u_m\|^2+2\|u_n\|^2-4\|\tfrac12(u_m+u_n)\|^2\le2\|u_m\|^2+2\|u_n\|^2-4d^2$. [step 1.1, A3, algebra]

3.1 Given $\varepsilon>0$, convergence $\|u_n\|\to d$ provides $N$ with $2\|u_n\|^2-2d^2<\varepsilon^2/2$ for all $n\ge N$, and then step 2.1 gives $\|c_m-c_n\|^2=\|u_m-u_n\|^2<\varepsilon^2$ for all $m,n\ge N$; hence $(c_n)$ is Cauchy. [step 2.1, algebra] ∎
