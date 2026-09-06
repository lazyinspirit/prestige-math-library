---
id: ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set
kind: example
title: "Change of variables through an increasing AC map with a positive-measure flat set"
status: draft
origin: pipeline
deps: [def-countable-choice, def-dependent-choice, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-change-of-variables-for-an-increasing-absolutely-continuous-function]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "R. K. Srivastava, MA550 Measure Theory Lecture Notes, §4.16"
      url: "https://www.iitg.ac.in/rksri/MA550_Measure_Theory_Lecture_Notes_2024.pdf"
---

## Example

Assume the Axioms of Countable Choice and Dependent Choice. Let $E\subset[0,1]$ be a fat Cantor set with $\lambda(E)=1/2$, put
$g(x)=\int_0^x\mathbf1_{[0,1]\setminus E}(t)dt$, and take $f(y)=2y$. Then $g$
is increasing AC, $g'=0$ almost everywhere on the positive-measure set $E$, and
$$\int_0^{1/2}2y\,dy=\int_0^12g(x)g'(x)\,dx=1/4.$$

## Facts & Assumptions

**Given:** Countable choice, dependent choice, the displayed measurable set $E$, its integral function $g$, and $f(y)=2y$.

## Verification

**Proof technique:** direct.

1.1 The integrand $\mathbf1_{[0,1]\setminus E}$ lies in $L^1[0,1]$. Thus [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] makes $g$ AC, and [[thm-first-fundamental-theorem-of-calculus-for-l-one]] gives $g'=\mathbf1_{[0,1]\setminus E}$ a.e.; hence $g'=0$ on $E$ a.e. and $g(1)=1/2$. [given]

2.1 The hypotheses of [[thm-change-of-variables-for-an-increasing-absolutely-continuous-function]] hold for $g$ and $f$. [step 1.1]

3.1 Its formula gives the displayed equality, while direct integration gives its common value $1/4$. [step 2.1, algebra] ∎
