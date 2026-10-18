---
id: ex-it-binary-hamming-rate-distortion-curve
kind: example
title: "Binary Hamming rate-distortion curve at p equals one quarter"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - thm-it-binary-hamming-rate-distortion
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the calculation is finite and explicit."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "MIT OpenCourseWare 6.441, Chapter 25: Evaluating R(D)"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf"
      locator: "§25.1.1: Bernoulli/Hamming formula and backward-channel construction."
---

## Statement

For a Bernoulli-$1/4$ source with Hamming distortion, the rates at $D=0,1/8,1/4$ are respectively $h_2(1/4)$, $h_2(1/4)-h_2(1/8)$, and $0$. At $D=1/8$, the backward test-channel reproduction mass is $P(\widehat X=1)=1/6$; at $D=1/4$, a constant zero reproduction attains rate zero. The rate tends continuously to zero as $D\uparrow1/4$.

## Facts & Assumptions

**Given:** A Bernoulli source with parameter $p=1/4$, binary Hamming distortion, and the rate function of the binary theorem.

[F1] [[thm-it-binary-hamming-rate-distortion]]: for $0\le D\le\min(p,1-p)$, $R(D)=h_2(p)-h_2(D)$; above that threshold the rate is zero.

## Proof




1.1 Here $p_0=1/4$. Substitution in [F1] gives $R(0)=h_2(1/4)-h_2(0)=h_2(1/4)$ and $R(1/8)=h_2(1/4)-h_2(1/8)$. At $D=1/4$, the threshold branch gives zero; the constant reconstruction zero has distortion $P(X=1)=1/4$ and carries no information. [F1, given, algebra]

2.1 For $D\in\{0,1/8\}$, put $q=(1/4-D)/(1-2D)$, which equals $1/4$ or $1/6$, respectively. Construct independent $Y\sim\operatorname{Bernoulli}(q)$ and $E\sim\operatorname{Bernoulli}(D)$ on their finite product space and set $X=Y\oplus E$. Then $P(X=1)=D+q(1-2D)=1/4$ and $P(X\ne Y)=D$. Given either value of $Y$, the two conditional source masses are $D$ and $1-D$ in some order. Thus the finite joint-information sum is $\sum_{x,y}P(X=x,Y=y)\log_2(P(X=x\mid Y=y)/P(X=x))=h_2(1/4)-h_2(D)$, with zero terms omitted. These channels attain the rates in step 1.1; in particular the backward test channel at $D=1/8$ has reproduction mass $P(Y=1)=1/6$. [step 1.1, given, construct, algebra]

3.1 The function $h_2$ is continuous on $[0,1]$ under $0\log_20=0$, so $\lim_{D\uparrow1/4}[h_2(1/4)-h_2(D)]=0=R(1/4)$. This verifies the stated endpoint continuity. [F1, step 1.1, given, algebra] ∎
