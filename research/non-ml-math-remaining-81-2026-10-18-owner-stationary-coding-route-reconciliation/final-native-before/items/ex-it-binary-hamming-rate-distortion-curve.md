---
id: ex-it-binary-hamming-rate-distortion-curve
kind: example
title: "Binary Hamming rate-distortion curve at p equals one quarter"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
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

For a Bernoulli-\(1/4\) source with Hamming distortion, the rates at \(D=0,1/8,1/4\) are respectively \(h_2(1/4)\), \(h_2(1/4)-h_2(1/8)\), and \(0\). At \(D=1/8\), the backward test-channel reproduction mass is \(P(\widehat X=1)=1/6\); at \(D=1/4\), a constant zero reproduction attains rate zero. The rate tends continuously to zero as \(D\uparrow1/4\).

## Facts & Assumptions

**Given:** A Bernoulli source with parameter \(p=1/4\), binary Hamming distortion, and the rate function of the binary theorem.

[F1] [[thm-it-binary-hamming-rate-distortion]]: for \(D\le\min(p,1-p)\), \(R(D)=h_2(p)-h_2(D)\); above that threshold the rate is zero. When \(D<1/2\), the backward channel uses reproduction mass \((p-D)/(1-2D)\).

## Proof

1.1 Here \(p_0=1/4\). Substitution in [F1] gives \(R(0)=h_2(1/4)-h_2(0)=h_2(1/4)\), where the corresponding backward channel has reproduction mass \(1/4\). At \(D=1/8\), its mass is
\[
\frac{1/4-1/8}{1-2(1/8)}=\frac{1/8}{3/4}=\frac16,
\]
and the rate is \(h_2(1/4)-h_2(1/8)\). At \(D=1/4\), the threshold branch of [F1] gives zero; the constant reconstruction zero has distortion \(P(X=1)=1/4\) and carries no information. [F1, given, algebra]

1.2 The function \(h_2\) is continuous on \([0,1]\) under \(0\log_20=0\), so \(\lim_{D\uparrow1/4}[h_2(1/4)-h_2(D)]=0=R(1/4)\). This verifies the stated endpoint continuity. [F1, step 1.1, given, algebra] ∎
