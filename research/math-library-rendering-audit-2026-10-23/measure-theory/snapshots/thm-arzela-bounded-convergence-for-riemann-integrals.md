---
id: thm-arzela-bounded-convergence-for-riemann-integrals
kind: theorem
title: "Arzela's bounded convergence theorem for Riemann integrals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, cor-bounded-convergence-on-a-finite-measure-space, thm-lebesgue-measure-of-a-box-of-every-kind]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Version 5.0, Section 9.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis, Corollary (10.32)"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

Assume the Axiom of Countable Choice. Let $a<b$, let $f_n:[a,b]\to\mathbb R$ be
Riemann integrable for every $n$, and let $f:[a,b]\to\mathbb R$ be Riemann
integrable. Suppose that $f_n(x)\to f(x)$ for every $x\in[a,b]$ and that there
is a real $M\ge0$ with $|f_n(x)|\le M$ for all $n$ and all $x\in[a,b]$. Then
$$\int_a^b f_n(x)\,dx\longrightarrow\int_a^b f(x)\,dx.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, reals $a<b$, Riemann integrable functions $f,f_n:[a,b]\to\mathbb R$ with $f_n(x)\to f(x)$ for every $x\in[a,b]$, and a real $M\ge0$ with $|f_n(x)|\le M$ for all $n$ and $x$.

[L1] A bounded Riemann integrable function on $[a,b]$ is Lebesgue measurable, Lebesgue integrable, and has the same Lebesgue and Riemann integrals. ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

[L2] On a finite measure space, almost-everywhere pointwise convergence of a uniformly bounded measurable sequence implies convergence of the integrals. ([[cor-bounded-convergence-on-a-finite-measure-space]])

[L3] The interval $[a,b]$ has finite Lebesgue measure $b-a$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Proof

**Proof technique:** direct.

1.1 By [L1], each $f_n$ and $f$ is Lebesgue measurable and integrable on $[a,b]$, and $$\int_{[a,b]} f_n\,d\lambda_1=\int_a^b f_n(x)\,dx,\qquad \int_{[a,b]} f\,d\lambda_1=\int_a^b f(x)\,dx.$$ Also [L3] makes $([a,b],\mathcal L([a,b]),\lambda_1)$ a finite measure space. [L1, L3]

2.1 The convergence hypothesis is pointwise, hence almost everywhere, and the uniform bound $|f_n|\le M$ holds everywhere. So [L2] applies on $[a,b]$ and gives $$\int_{[a,b]} f_n\,d\lambda_1\longrightarrow\int_{[a,b]} f\,d\lambda_1.$$ Translating the two sides with step 1.1 yields the stated convergence of the Riemann integrals. [step 1.1, L2] ∎
