---
id: thm-backward-euler-a-and-l-stability
kind: theorem
title: "Backward Euler is A-stable and L-stable"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-absolute-stability-regions-for-one-step-and-multistep-methods
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.9"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5, §5.2.2: Stability"
      url: "https://math.mit.edu/icg/resources/teaching/18.330/18.330-Apr-2014.pdf"
    - title: "Masayuki Yano, James Douglass Penn, George Konidaris, and Anthony T. Patera, Math, Numerics, and Programming (for Mechanical Engineers), Unit IV, Chapter 21"
      url: "https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-spring-2013/64e7bed65373841c988a0fd98e1ae16e_MIT2_086S13_Unit4_Textbook.pdf"

---
## Statement

Backward Euler on $y'=\lambda y$ is the scalar update $y_{n+1}=y_n+z y_{n+1}$, where $z=h\lambda$. Its stability function is

$$R_{\mathrm{BE}}(z)=\frac{1}{1-z}.$$

It is A-stable and L-stable.

## Facts & Assumptions

**Given:** The backward-Euler scalar update, $h>0$, $\lambda\in\mathbb C$, and $z=h\lambda$.

[F1] [[def-absolute-stability-regions-for-one-step-and-multistep-methods]]: A-stability requires $R$ to be defined and satisfy $|R(z)|\le1$ for every $\operatorname{Re}z\le0$; L-stability additionally requires the limit zero at infinity through that half-plane.

## Proof
1.1 If $\operatorname{Re}z\le0$, then $1-z\ne0$. Solving the stated update gives $y_{n+1}=(1-z)^{-1}y_n$, so $R_{\mathrm{BE}}(z)=(1-z)^{-1}$. [given, algebra]

2.1 For $\operatorname{Re}z\le0$, $|1-z|^2-1=|z|^2-2\operatorname{Re}z\ge0$. Therefore $|R_{\mathrm{BE}}(z)|\le1$ on the closed left half-plane, proving A-stability by [F1]. [F1, step 1.1, algebra]

3.1 The reverse triangle inequality gives $|1-z|\ge |z|-1$, so $|R_{\mathrm{BE}}(z)|\le1/(|z|-1)\to0$ as $|z|\to\infty$ within $\operatorname{Re}z\le0$. By [F1] the method is L-stable. [F1, step 1.1, step 2.1, algebra] ∎
