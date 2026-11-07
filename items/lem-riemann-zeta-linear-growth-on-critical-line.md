---
id: lem-riemann-zeta-linear-growth-on-critical-line
kind: lemma
title: "A linear growth bound for the Riemann zeta function on the critical line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-riemann-zeta-continuation-to-the-right-half-plane
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Chapter 6, Problem 2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
      locator: "End-of-chapter Problem 2, printed p. 180, states the fractional-part formula for zeta on Re(s)>0; the local lemma proves the displayed critical-line bound from the published continuation formula."
---

## Statement

For every real $t$,
$$|\zeta(\tfrac12+it)|\le 2+2|t|.$$

## Facts & Assumptions

**Given:** A real number $t$.

[F1] [[thm-riemann-zeta-continuation-to-the-right-half-plane]] gives, for $\operatorname{Re}s>0$ and $s\ne1$,
$$\zeta(s)=\frac{s}{s-1}-s\int_1^\infty \{x\}x^{-s-1}\,dx,$$
with $0\le\{x\}<1$ for $x\ge1$.

## Proof

1.1 Put $s=\tfrac12+it$. Then $|s|=|s-1|$, so the first term in [F1] has modulus $1$. Also $|\{x\}x^{-s-1}|\le x^{-3/2}$, whose integral on $[1,\infty)$ is $2$. Hence $|\zeta(s)|\le1+2|s|$. [given, F1, algebra]

2.1 Since $|s|=\sqrt{1/4+t^2}\le1/2+|t|$, the estimate in step 1.1 gives $|\zeta(\tfrac12+it)|\le2+2|t|$. [step 1.1, algebra] ∎
