---
id: thm-perron-formula
kind: theorem
title: "Perron's inversion formula"
status: draft
origin: pipeline
deps: [def-starred-summatory-function, lem-perron-kernel]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.1"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement

Let $F(s)=\sum_{n\ge1}a_nn^{-s}$ converge absolutely on $\Re s=c>0$.  If its
finite Dirichlet polynomials are dominated on the symmetric vertical segments
by an integrable majorant permitting both indicated limits, then
$$ A^*(x)=\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}F(s)\frac{x^s}{s}\,ds\qquad(x>0), $$
where the integral is symmetric and $A^*$ is [[def-starred-summatory-function]].

## Proof

**Given:** absolute convergence at $c$ and the stated domination hypothesis.

1.1 For $F_N(s)=\sum_{n\le N}a_nn^{-s}$, linearity and the kernel formula give $(2\pi i)^{-1}\int F_N(s)x^sds/s=\sum_{n\le N}a_n\delta(x/n)$. [given, algebra]

2.1 Let first the height and then $N$ tend to infinity.  The assumed domination permits both interchanges, while the right side tends exactly to the half-weighted sum defining $A^*(x)$. [step 1.1, given] ∎
