---
id: lem-nonnegative-kde-integrates-to-one
kind: lemma
title: "A nonnegative normalized kernel estimate integrates to one"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-density-target-and-kernel-density-estimator
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
  - thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, PDF pp. 1–3"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2, PDF pp. 6–7"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. If $K\ge0$ pointwise and
$\int K\,d\lambda_d=1$, then for every sample $z_1,\ldots,z_n\in\mathbb R^d$
and bandwidth $h>0$, the function
$$x\mapsto\frac1{nh^d}\sum_{i=1}^nK\!\left(\frac{x-z_i}{h}\right)$$
is nonnegative and has Lebesgue integral one.

## Facts & Assumptions

**Given:** Countable Choice; a pointwise nonnegative Borel kernel $K$ of
integral one; $n\ge1$; $h>0$; and a sample $z_1,\ldots,z_n$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$
([[def-countable-choice]]).

[F1] The estimate is the finite sum
$(nh^d)^{-1}\sum_iK((x-z_i)/h)$ and $\int K=1$
([[def-density-target-and-kernel-density-estimator]]).

[F2] Under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism obeys the
change-of-variables formula for every nonnegative measurable integrand
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F3] The Lebesgue integral is linear on $L^1$
([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof
1.1 Every summand is nonnegative because $K\ge0$. For fixed $z_i$, the map $T_i(u)=z_i+hu$ is a $C^1$ diffeomorphism of $\mathbb R^d$ with $|\det DT_i|=h^d$. Applying [F2] to $K$ gives $\int_{\mathbb R^d}h^{-d}K\!\left(\frac{x-z_i}{h}\right)dx =\int_{\mathbb R^d}h^{-d}K(u)h^ddu=1.$ [given, A1, F1, F2]

2.1 Each scaled translate is in $L^1$ by step 1.1. Linearity [F3] therefore gives $\int_{\mathbb R^d}\frac1{nh^d}\sum_{i=1}^nK\!\left(\frac{x-z_i}{h}\right)dx =\frac1n\sum_{i=1}^n1=1.$ This proves the claim. [step 1.1, F3, algebra] ∎ 