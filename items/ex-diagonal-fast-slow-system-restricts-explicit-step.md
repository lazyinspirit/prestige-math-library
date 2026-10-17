---
id: ex-diagonal-fast-slow-system-restricts-explicit-step
kind: example
title: "A fast component restricts the forward-Euler step in a diagonal fast-slow system"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - thm-explicit-euler-absolute-stability-disk
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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
    - title: "Masayuki Yano, James Douglass Penn, George Konidaris, and Anthony T. Patera, Math, Numerics, and Programming (for Mechanical Engineers), Unit IV, Chapter 21"
      url: "https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-spring-2013/64e7bed65373841c988a0fd98e1ae16e_MIT2_086S13_Unit4_Textbook.pdf"

---
## Facts & Assumptions

**Given:** The diagonal system $y_1'=-y_1$, $y_2'=-1000y_2$, and forward Euler with one common step $h>0$.

[F1] [[thm-explicit-euler-absolute-stability-disk]]: a scalar decay equation $y'=-\rho y$ is absolutely stable under forward Euler exactly when $0<h\rho\le2$.

## Example

The slow component alone permits every $0<h\le2$, but requiring absolute stability for both components gives $0<h\le1/500$. This example exhibits how a fast decay scale can constrain a step selected to track a slower component.

## Verification
1.1 Applying forward Euler to each diagonal component gives the multipliers $1-h$ and $1-1000h$. [given, algebra]

2.1 By [F1], the first component is stable exactly when $0<h\le2$ and the second exactly when $0<1000h\le2$. Their intersection is $0<h\le1/500$. [F1, step 1.1, algebra] ∎
